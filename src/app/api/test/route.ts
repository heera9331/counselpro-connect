import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";
import saveMediaFile from "lib/file";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("profileImg") as File;
    const buffer = new Uint8Array(await file.arrayBuffer());
    const filename = file.name;

    let res = saveMediaFile(buffer, filename);

    return NextResponse.json({ status: "success", filepath: res });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}
