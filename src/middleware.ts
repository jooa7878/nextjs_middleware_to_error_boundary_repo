import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    console.log("middleware init");

    // API Request
    // const response = await fetch(...)
    throw new Error("test");
    return NextResponse.next();
  } catch (error) {
    return NextResponse.error();
  }
}
