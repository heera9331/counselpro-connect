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
import { sendEmail } from "../../../lib/email";

export const GET = async (req: NextRequest, res: NextResponse) => {
  await connectDB();
  console.log("get -> /api/users");
  const users: any[] = await User.find({});

  return NextResponse.json(users);
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectDB();
  let user = await req.json();
  console.log("get -> /api/users", user);

  const { email, password } = await req.json();

  if (!user) {
    return NextResponse.json({ error: "user not found" });
  }

  // Validate input
  if (!email || !password) {
    return NextResponse.json({ msg: "input values" }, { status: 400 });
  }

  try {
    //   const ack: any = await User.insertMany([user]);
    await sendEmail(
      email,
      "Welcome to Our App",
      "<body><p>Thank you for registering!</p></body"
    );
    return NextResponse.json({ msg: "done" });
  } catch (error) {
    return NextResponse.json({ error: "database error" });
  }
};
