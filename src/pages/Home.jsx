import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import ava from "../assets/birthday.jpg";
import sampleVideo from "../assets/video.mp4";


const Home = () => {
    useEffect(() => {
        // 🎊 Trigger confetti automatically on page load
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.8 },
        });

        // 🎊 Trigger confetti on every click
        const handleClick = () => {
            confetti({
                particleCount: 200,
                spread: 90,
                origin: { y: 0.8 },
            });
        };

        window.addEventListener("click", handleClick);

        // Cleanup
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);


    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-yellow-100 to-pink-200 overflow-hidden">

            {/* 🎀 Ribbon Top Banner */}
            {/* <img
        src={ribbon}
        alt="ribbon"
        className="absolute top-0 left-0 w-full h-28 object-cover z-20"
      /> */}

            {/* 🎁 Card */}
            <div className="z-30 bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row max-w-5xl w-full mx-4">
                {/* Video Left */}
                <div className="md:w-1/2 w-full h-64 md:h-auto overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-6">
                    <video
                        src={sampleVideo}
                        autoPlay
                        loop
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>

                {/* Text Right */}
                <div className="md:w-1/2 w-full flex flex-col justify-center space-y-4 text-gray-800 text-center">
                    <div className="flex justify-center">
                        <img
                            src={ava}
                            alt="birthday"
                            className="object-contain w-24 rounded-full border-4 border-rose-300"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-rose-700 animate-pulse">Happy Birthday ❤️</h2>
                    <p className="text-lg text-rose-500 italic">
                       To my sweetheart, happy birthday my smart, handsome, sweetie angel!
                    </p>
                    <span className="text-left">
                        May you always be smart, handsome, positive, and happy in every moment of your life!

                        Thank you for coming into my life like magic. You're the greatest gift I’ve ever received.
                        Thank you for always being patient, kind, and loving me no matter what.

                        I’m truly sorry for the times I made you feel sad, stressed, or upset. Please forgive me, love.
                        You’ll always be my baby, my daddy, and the one I love the most.

                        I promise I’ll keep trying my best to be worthy of your love. I love you and miss you so much, babe. I really hope we can see each other soon.
</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
