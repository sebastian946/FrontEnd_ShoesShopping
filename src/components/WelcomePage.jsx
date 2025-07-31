import React from 'react';

function WelcomePage() {
    return (
        <div className="pt-5 flex items-center justify-center">
            <div className="bg-blue-100 rounded-xl p-8 m-6">
                <div className="grid grid-cols-2 ">
                    <div>
                        <h1 className="text-4xl font-semibold text-orange-600">25% OFF</h1>
                        <br/>
                        <h1 className={"text-5xl font-semibold text-black"}>Summer Sale</h1>
                        <br/>
                        <p className={"text-gray-500"}>Discover our summer styles with discount</p>
                        <br/>
                        <br/>
                        <button className={"bg-black p-3 pl-12 pr-12 rounded-xl text-white flex"}>Shop Now <img src={"arrowIcon.png"} className={"h-auto w-auto"}/></button>
                    </div>
                    <div>
                        <img className="rounded-xl" src="/logoShoe.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;