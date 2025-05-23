export const maxDuration = 60;

import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

export async function POST(req) {
  try {
    const { userId } = getAuth(req);
    const { chatId, prompt } = await req.json();

    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "User not authenticated",
      });
    }

    await connectDB();

    const data = await Chat.findOne({ userId, _id: chatId });

    const userMessage = {
      role: "user",
      content: prompt,
      timestamp: Date.now(),
    };

    data.messages.push(userMessage);

    const completion = await openai.chat.completions.create({
      messages: [userMessage],
      model: "deepseek-chat",
      store: true,
    });

    const message = completion.choices[0].message;
    message.timestamp = Date.now();

    data.messages.push(message);
    await data.save();

    return NextResponse.json({
      success: true,
      data: message,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}












// export const maxDuration = 60;

// import connectDB from "@/config/db";
// import Chat from "@/models/Chat";
// import { getAuth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// // Initialize OpenAI client with DeepSeek API key and base URL
// const openai = new OpenAI({
//   baseURL: "https://api.deepseek.com",
//   apiKey: process.env.DEEPSEEK_API_KEY,
// });

// export async function POST(req) {
//   try {
//     const { userId } = getAuth(req);
//     const { chatId, prompt } = await req.json();

//     if (!userId) {
//       return NextResponse.json({
//         success: false,
//         message: "User not authenticated",
//       });
//     }

//     // if (!chatId || !prompt) {
//     //   return NextResponse.json({
//     //     success: false,
//     //     message: "chatId and prompt are required",
//     //   });
//     // }

//     await connectDB();

//     const data = await Chat.findOne({ userId, _id: chatId });

//     // if (!data) {
//     //   return NextResponse.json({
//     //     success: false,
//     //     message: "Chat not found or unauthorized",
//     //   });
//     // }

//     const userPromt = {
//       role: "user",
//       content: prompt,
//       timestamp: Date.now(),
//     };
// data.messages.push(userPromt);

//     const completion = await openai.chat.completions.create({
//       messages: [{ role: "user", content: prompt }],
//       model: "deepseek-chat",
//       store: true,
//     });

//     const message = completion.choices[0].message;
//     message.timestamp = Date.now();
//     data.messages.push(message);
//     data.save();

//     // const aiMessage = {
//     //   ...completion.choices[0].message,
//     //   timestamp: Date.now(),
//     // }; 
//     // await chat.save();

//     return NextResponse.json({
//       success: true,
//       data: message,
//     });
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       error: error.message,
//     });
//   }
// }
