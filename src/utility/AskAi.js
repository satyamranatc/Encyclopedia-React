import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyCuPIZLODobcQDCobE9OvCDPlLQtQ0JmIY";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    async function Ask(Prompt)
    {
      const result = await chatSession.sendMessage(Prompt);
      console.log(result.response.text());
      return result.response.text();
    }
    return Ask;
  }


let AskAi =  await run();


let Res = await AskAi("What is Prismatic Accelerator")
console.log(Res.split("\n")[0].replace("*",""))



export default AskAi