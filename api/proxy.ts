import { GoogleGenAI, Type } from "@google/genai";

// This function will be deployed as a serverless function.
// It will have access to environment variables on the server.
export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { duration, interests } = await request.json();

    // IMPORTANT: The API key is read from the server's environment variables.
    // It is NEVER exposed to the client/browser.
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API_KEY is not defined on the server.");
    }
    
    const ai = new GoogleGenAI({ apiKey });

    const interestsText = interests ? `با تمرکز ویژه بر این علاقه‌مندی‌ها: ${interests}.` : '';
    const prompt = `
      برای یک توریست یک برنامه سفر دقیق و جذاب برای ${duration} روز در روستای ارجستان اردبیل طراحی کن. 
      این برنامه باید شامل بازدید از جاذبه‌های طبیعی، فعالیت‌های ممکن، و پیشنهاداتی برای تجربه فرهنگ محلی باشد.
      ${interestsText}
      برنامه را روز به روز ارائه بده و برای هر روز یک عنوان جذاب انتخاب کن. اگر سفر فقط برای یک روز است، فقط برنامه همان یک روز را با شماره روز ۱ ارائه بده.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            planTitle: { type: Type.STRING },
            itinerary: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.INTEGER },
                  title: { type: Type.STRING },
                  activities: { type: Type.ARRAY, items: { type: Type.STRING } },
                },
                required: ["day", "title", "activities"],
              },
            },
          },
          required: ["planTitle", "itinerary"],
        },
      },
    });

    const jsonText = response.text.trim();
    const parsedPlan = JSON.parse(jsonText);

    return new Response(JSON.stringify(parsedPlan), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error in proxy handler:", error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
