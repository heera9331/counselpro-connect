/**
 * @date 12-02-2024
 * @author Heera Singh Lodhi
 * @description handling requests => /api/users
 * @param any
 * @returns jsx
 */

import { connectDB } from "../../../utils";
import { User } from "../../../models";
import { NextResponse, NextRequest } from "next/server";
import sendEmail from "../../../lib/email";

export const GET = async (req: NextRequest, res: NextResponse) => {
  await connectDB();
  console.log("get -> /api/users");
  const users: any[] = await User.find({});

  return NextResponse.json(users);
};

export async function POST(req: NextRequest, res: NextResponse) {
  await connectDB();

  console.log("get -> /api/users");

  try {
    let emailResponse = await sendEmail({
      from: "", // default because we can't use gmail, we use own if have
      to: "heera.madquick@gmail.com",
      subject: "You are awesome!",
      html: "<h1>Welcome to conselpro connect</h1>",
    });

    return NextResponse.json({ msg: "done", emailResponse });
  } catch (error) {
    console.log("email send error ", error);
    return NextResponse.json({ error: "database error" });
  }
}
