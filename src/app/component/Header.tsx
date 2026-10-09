"use client"; 
import React from "react"; 
import Image from "next/image"; 
import Headerlink from "./Headerlink"; 

const Header = () => { 
    const date = new Date().toLocaleDateString("bn-BD", 

        { dateStyle: "full", }); 
    return ( 
        <header className="bg-white shadow-sm"> 
            {/* Top Navbar */}
            <div className="container mx-auto flex items-center
                    justify-between px-4 py-3"> {/* Logo + Title */} 
                <div className="flex items-center gap-2"> 
                    <Image src="/logo-icon.png" 
                        alt="Logo" width={48} height={48}   
                        className="h-12 w-12" />
                    <div> 
                        <h1 className="text-xl font-bold text-gray-800"> বাজার দর </h1> 
                        <p className="text-xs text-gray-500"> {date} </p> 
                    </div> 
                </div> 

                    {/* Right Side */} 
                <div className="flex items-center gap-6"> 
                    <button className="text-sm font-medium text-gray-700 hover:text-green-600"> সাইন ইন </button> 
                    <button className="rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold 
                            text-white shadow-md hover:bg-green-700"> সাইন আপ </button> 
                </div>
            </div>
            <Headerlink /> 
        </header> 
    );
};

export default Header;