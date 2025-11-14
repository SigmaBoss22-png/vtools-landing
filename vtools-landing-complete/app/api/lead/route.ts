import { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("Lead", data);
  return new Response(null, { status: 204 });
}
