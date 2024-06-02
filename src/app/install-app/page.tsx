"use client"
import {Input, AwsCard, Button, Loading} from "../../components";
import { useState } from "react";
import axios from "axios";
import React from "react";

interface InfoType {
    name: string,
    username: string,
    email: string,
    password: string,
    collegeName: string
}

const Page = (props: any) => {
    const [info, setInfo] = useState<InfoType>({name:"", username: "", email: "", password: "", collegeName: ""});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const handleChange = (e:any) => {
        setInfo({...info, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = async () => {
        console.log("user to registered >", info);
        let res = await axios.post('/api/users/', {user: info});
        console.log(res);
    }

    return (
        <div className="flex flex-col justify-center h-[70vh]">
            <AwsCard
                title="Install App - CounselPro Connect"
                cardProps="md:max-w-[450px] mx-auto"
                showCardControls={false}
            >
                <div className="px-2">
                    <form className="text-black p-4" action="#" method="post">
                        {loading ? (
                            <Loading/>
                        ) : (
                            <>
                                <Input
                                    inputColor={"text-black"}
                                    label={"Name"}
                                    htmlFor={"name"}
                                    value={info.name}
                                    placeholder={"name"}
                                    className={
                                        "bg-gray-100 p-1 text-black rounded-sm focus:outline-none"
                                    }
                                    type={"text"}
                                    onChange={(e: any) => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    inputColor={"text-black"}
                                    label={"Username"}
                                    htmlFor={"username"}
                                    value={info.username}
                                    placeholder={"username"}
                                    className={
                                        "bg-gray-100 p-1 text-black rounded-sm focus:outline-none"
                                    }
                                    type={"text"}
                                    onChange={(e: any) => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    inputColor={"text-black"}
                                    label={"Email"}
                                    htmlFor={"email"}
                                    value={info.email}
                                    placeholder={"email"}
                                    className={
                                        "bg-gray-100 p-1 text-black rounded-sm focus:outline-none"
                                    }
                                    type={"text"}
                                    onChange={(e: any) => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    inputColor={"text-black"}
                                    label={"Password"}
                                    htmlFor={"password"}
                                    value={info.password}
                                    placeholder={"Password"}
                                    className={"bg-gray-100 p-1 rounded-sm focus:outline-none"}
                                    type={"password"}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    inputColor={"text-black"}
                                    label={"College Name"}
                                    htmlFor={"collegeName"}
                                    value={info.collegeName}
                                    placeholder={"College name"}
                                    className={"bg-gray-100 p-1 rounded-sm focus:outline-none"}
                                    type={"text"}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </>
                        )}
                        <div className="flex justify-center pt-2 flex-col items-center">
                            <Button
                                text={"Register"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmit();
                                }}
                            />
                            {error && error}
                        </div>
                    </form>
                </div>
            </AwsCard>
        </div>
    );
}
 
export default Page;
 
 