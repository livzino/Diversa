import { NextResponse } from "next/server";
export async function GET(request) {
  const searchParams = {
    url: "https://bolig.dk",
  };
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  return NextResponse.json(await response.json());
}
