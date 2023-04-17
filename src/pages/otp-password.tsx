import Link from "next/link";
import CenteredForm from "layouts/centered-form";
import OtpPassword from "components/sample-forms/otp-password";
import { useState } from "react";

const Index: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(Array(4).fill(""));

    const handleChange = (value: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleSubmit = (data: any) => {
        const userOtp = otp.join(""); // joining the OTP values into a single string
        console.log(userOtp);
        // rest of your code
    };

    return (
        <div className="flex flex-row w-full h-screen overflow-hidden text-gray-900 dark:text-white">
            <div className="items-center justify-center hidden w-1/2 border-r border-gray-100 dark:border-gray-800 lg:flex lg:flex-col bg-gray-50 dark:bg-gray-800">
                <img
                    className="object-contain w-full h-full"
                    src="/images/illustration.svg"
                    alt="svg"
                />
            </div>
            <div className="flex flex-col justify-center w-full p-4 bg-white dark:bg-gray-900 lg:w-1/2 lg:px-24 mt-50">
                <CenteredForm
                    title="OTP for Reset password"
                    subtitle="Please enter your valid otp to reset your account">
                    <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center">
                        {otp.map((digit, index) => (
                            <div key={index} className="mx-2">
                                <input
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(e.target.value, index)}
                                    className="otp-input"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                    <div className="flex flex-row w-full mt-3">
                        <span className="mr-1">New user?</span>
                        <span>
                            <Link href="/create-account">
                                <a className="text-blue-500">Sign up here</a>
                            </Link>
                        </span>
                    </div>
                    <div className="flex flex-row w-full">
                        <span className="mr-1">Already have an account?</span>
                        <span>
                            <Link href="/login">
                                <a className="text-blue-500">Login here</a>
                            </Link>
                        </span>
                    </div>
                </CenteredForm>
            </div>
        </div>
    );
};

export default Index;



//className="w-12 h-12 text-center border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"