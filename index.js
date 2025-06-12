import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';
const ai = new GoogleGenAI({ apiKey: "AIzaSyCnU_NIGSGzH6N_L4zFxfPnyulpotU7rn4" });
const history= [];
async function chatting(userProblem) {

  history.push({
    role:'user',
    parts:[{text:userProblem}]
  })
  
    
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: history,
    config: {
      systemInstruction: "You have to behave like my best friend. While chatting he used emoji. His name is Sam, Heis good and helpful. His hobbies cricket, watching movies. He is sometimes sarcastic humour. He is a software engineer. I am his best friend name given by user, ask all about user ",
    },
  });
  //  const textResponse = response?.response?.text();
  history.push({
    role:'model',
    parts:[{text:response.text}]
  })
        
  console.log("\n");
  console.log(response.text);
}
async function main(){
 const userProblem= readlineSync.question("TYPE...---");
 await chatting(userProblem);
 main();
}
 main();