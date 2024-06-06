"use client";
import { AwsCard, Input, Button } from "../../components";
import { useState } from "react";
import axios from "axios";

export default function Page(props: any) {
  const [user, setUser] = useState({
    email: "admin@gmail.com",
    password: "123456",
    profileImg: null
  });

  const handleFileChange = (e: any) => {
    setUser({ ...user, profileImg: e.target.files[0] });
  };

  const loginNow = async () => {
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("profileImg", user.profileImg);

    try {
      const res = await axios.post("/api/test/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("response", res);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <AwsCard
        title="Login"
        cardProps="max-w-[400px] mx-auto"
        showCardControls={false}
      >
        <form className="flex flex-col gap-2">
          <Input
            label="Email"
            htmlFor="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            placeholder="Enter email"
          />
          <Input
            label="Password"
            htmlFor="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="Enter password"
          />
          <input
            className="px-2 py-2"
            type="file"
            onChange={handleFileChange}
          />
          <Button
            text="Login"
            onClick={(e) => {
              e.preventDefault();
              loginNow();
            }}
          />
        </form>
      </AwsCard>
    </div>
  );
}
