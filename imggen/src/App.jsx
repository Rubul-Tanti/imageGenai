import React, { useState } from 'react'
import {
  GoogleGenerativeAI, HarmCategory,HarmBlockThreshold,}from"@google/generative-ai"


const App = () => {
  const [ai,setai]=useState("")
  const apiKey = "AIzaSyClUkBKvkffXNhQB0lGDpslCty9B0Cl4e8"
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(promt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(promt);
     setai(result.response.text())
  }
  

function runapi(e){
  if(e.key==="Enter"){
    run(e.target.value)
  }
}

  return (
    <div>
      <h1>{ai}</h1>
      <input style={{width:"300px", height:"40px"}} onKeyDown={(e)=>{runapi(e)}}></input>
    </div>
  )
}

export default App
