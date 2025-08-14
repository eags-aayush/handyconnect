import React from "react";
import { Link, useNavigate } from 'react-router-dom'

export default function OnboardingPage() {

    const navigate = useNavigate();
    const loginHandler = () => {
        navigate('/profile');
    }

    return (
        <>
            <div
                className="relative flex h-screen flex-col bg-white justify-between overflow-x-hidden"
                style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
            >
                {/* Top Section */}
                <div className="h-3/4">

                    <div
                        className="h-1/2 w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBC5sM7jHIQY1uJsH8ma7BYcbJC7_2r7d1Tov_Zk_kv5kHHundT4JrSA4ZbV6w0d4UwYK21-Xs4eacMD6t2naCcMvApXsHcu1-5wknCI0irXy8y40p1l7WcTqbuOspOh9b_nufwVOunQPR8Q7A4JXXwn9fUwE5Pi-vQUDWKwrIY2T1ZRleSMBvshqC_fKDYtULNCzszu37YZ4hQNNBuQv77wnazbwD00fw4C_gXpXKqcY4qC29foUseRDh2YURf-5V0OppJJmIRTaI")',
                        }}
                    ></div>

                    <h2 className="text-[#111418] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                        Welcome to HandyConnect
                    </h2>
                    <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                        Find trusted handymen for all your home service needs. From plumbing
                        to electrical work, we've got you covered.
                    </p>
                </div>

                {/* Buttons */}
                <div className="h-1/4" >
                    <div className="flex justify-center">
                        <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
                            <button onClick={loginHandler} className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#0d80f2] text-white text-base font-bold w-full">
                                <span className="truncate">Get Started</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
