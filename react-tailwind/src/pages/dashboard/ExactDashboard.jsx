import { Button, Typography } from "@material-tailwind/react";
import { CiCalendar } from "react-icons/ci";
import Charts from "./Charts";
import rainbowlike from "./rainbow-like.svg";
import { FaUniversity } from "react-icons/fa";

export default function ExactDashboard() {
    return (
        <div className="p-2">
            <div className="flex justify-between">
                <Typography variant="h4" className="text-[#6C5DD3]">Home</Typography>
                <div className="flex items-center">
                    <Typography variant="h5" className="text-[#6C5DD3]">Today, December 29th, 2023</Typography>
                    <CiCalendar className="fill-[#6C5DD3] w-6 h-6 ml-3"/>
                </div>
            </div> 
            <div className="p-2">
                <div>
                    <Typography variant="h5">Today</Typography>
                    <div className="flex justify-between py-8 px-0 md:px-12">
                        <div className="bg-white rounded-xl py-4 px-6 w-72">
                            <Typography variant="paragraph">Total: 20 tasks</Typography>
                            <img src={rainbowlike} className="absolute translate-y-3 hidden lg:block"/>
                            <Typography variant="h2" className="w-full text-center mt-24">70%</Typography>
                            <Typography variant="paragraph" className="text-gray-500 w-full text-center">Tasks</Typography>
                            <Typography variant="paragraph" className="w-full text-center mt-2">Complete: 14 Tasks</Typography>
                        </div>
                        <div className="bg-white rounded-xl py-4 px-12 flex items-center">
                            <div className="mr-12">
                                <div className="w-full justify-center flex">
                                    <div className="bg-[#E391EA] bg-auto p-5 rounded-xl w-20 h-20">
                                        <FaUniversity className="fill-white w-10 h-10"/>
                                    </div>
                                </div>
                                <div className="block">
                                    <Typography variant="lead" className="font-bold text-[#E391EA] mt-2 w-full text-center">University</Typography>
                                    <Typography variant="h4" className="w-full text-center">KPI: 100%</Typography>
                                    <Typography variant="paragraph" className="w-full text-center">90/90 Tasks</Typography>
                                    <div className="flex mt-2 w-full text-center">
                                    <Typography variant="small" className=""><span className="font-semibold text-[#6F65E8]">+25%</span> this month</Typography>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="w-full justify-center flex">
                                    <div className="bg-[#FF9F38] bg-auto p-5 rounded-xl w-20 h-20">
                                        <FaUniversity className="fill-white w-10 h-10"/>
                                    </div>
                                </div>
                                <div className="block">
                                    <Typography variant="lead" className="font-bold text-[#FF9F38] mt-2 w-full text-center">Company</Typography>
                                    <Typography variant="h4" className="w-full text-center">KPI: 73%</Typography>
                                    <Typography variant="paragraph" className="w-full text-center">73/100 Tasks</Typography>
                                    <div className="flex mt-2 w-full text-center">
                                        <Typography variant="small" className=""><span className="font-semibold text-[#6F65E8]">+20%</span> this month</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography variant="h5">Month progress</Typography>
                    <Charts/>
                </div>
            </div>   
        </div>
    );
};