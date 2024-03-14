import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request, response) {
  try {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return NextResponse.json(
      { success: true, message: "Get user data successfully", data: data },
      { status: 200 }
    );
  } catch (error) {
    console.log("erro",error)
    return NextResponse.json(
      {
        success: true,
        message: "Error while geting the user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
