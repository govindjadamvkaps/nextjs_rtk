import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return NextResponse.json(
      { success: true, message: "Product fetched", data: data },
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { success: false, message: "Error while fetching product", error: error },
      { status: 500 }
    );
  }
}
