"use client";

import ImagePIP from "../Components/ImagePIP";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";

function Hero() {
    const { resolvedTheme, setTheme } = useTheme();
    const [overlayActive, setOverlayActive] = useState(false);
    const [glitchActive, setGlitchActive] = useState(false);

    const bubbleAudioRef = useRef<HTMLAudioElement>(null);
    const glitchAudioRef = useRef<HTMLAudioElement>(null);


    const changeTheme = () => {
        setOverlayActive(true);

        if (bubbleAudioRef.current) {
            bubbleAudioRef.current.currentTime = 0;
            bubbleAudioRef.current.play().catch(() => { });
        }

        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        setTimeout(() => setOverlayActive(false), 300);
    };

    const handleToggle = () => {
        if (glitchAudioRef.current) {
            glitchAudioRef.current.currentTime = 0;
            glitchAudioRef.current.play().catch(() => { });
        }

        setGlitchActive(true);
        setIsNerfed((prev) => !prev);


        setTimeout(() => {
            setGlitchActive(false);
        }, 600);
    };


    const [isNerfed, setIsNerfed] = useState(false);


    const profileImage = isNerfed
        ? "/assets/Images/Phantom.jpg"
        : "/assets/Images/Image";

    const name = isNerfed ? "𝔠𝔞𝔯𝔫𝔦𝔣𝔢𝚡 ☬" : "Azianou Jacques";
    const tickColor = isNerfed ? "#e8a807" : "#00aaff";

    
    const [visibleIndex, setVisibleIndex] = useState(-1);

    const phrases = [
        "Software Engineer",
        "Indie hacker",
        "UI/UX designer",
        "Logic and Problem Solving",
        "Frontend developer",
        "Freelancer",
    ];

    useEffect(() => {
        const showFirst = setTimeout(() => {
            setVisibleIndex(0);
        }, 2200);
        return () => clearTimeout(showFirst);
    }, []);

    useEffect(() => {
        if (visibleIndex < 0) return;

        const cycle = setInterval(() => {
            setVisibleIndex((prev) => (prev + 1) % phrases.length);
        }, 3200);

        return () => clearInterval(cycle);
    }, [visibleIndex]);

    return (
        <>
            <div className="grid-holder">
                <div className="grid"></div>
            </div>

            <div className="line" />

            <section
                className="hero flex justify-between padding"
                aria-labelledby="hero-title"
            >
                <div className="flex gap-3.5">

                    <figure className="holder flex justify-center items-center rounded-2xl p-1 size-25">
                        <img
                            className={`main-img w-full h-full rounded-xl ${isNerfed ? "" : "glitch-image"
                                }`}
                            src={profileImage}
                            alt="Profile Image"
                            loading="lazy"
                            width={90}
                            height={90}
                        />
                    </figure>


                    <audio preload="auto" ref={glitchAudioRef} className="hidden">
                        <source src="/assets/sound/glitch.wav" type="audio/wav" />
                    </audio>

                    <audio preload="auto" ref={bubbleAudioRef} className="hidden">
                        <source src="/assets/sound/woosh.mp3" type="audio/mp3" />
                    </audio>


                    <div className="flex flex-col justify-between items-start">
                        <button
                            type="button"
                            onClick={handleToggle}
                            className="group text-foreground change text-2xl"
                            aria-label="Change personality"
                        >
                            {isNerfed ? "C" : "Z"}
                        </button>

                        <div className="flex flex-col gap-0">
                            <div className="flex items-center">
                                <h1
                                    className={`main-img w-full h-full rounded-xl ${glitchActive ? "glitch-text" : ""}`}
                                    id="hero-title"
                                >
                                    {name}
                                </h1>


                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    className="md:mt-0.75 mt-1.5 ml-0.5 md:ml-1 tick"
                                    style={{ fill: tickColor }}
                                >
                                    <title>Verified</title>
                                    <path d="M17.999,10c0-1.097-.567-2.113-1.465-2.707.215-1.054-.103-2.174-.878-2.95-.775-.776-1.896-1.094-2.95-.878-.593-.897-1.609-1.464-2.706-1.464s-2.113.567-2.706,1.464c-1.053-.216-2.174.102-2.95.878s-1.093,1.896-.878,2.949c-.897.593-1.465,1.61-1.465,2.707s.567,2.113,1.465,2.707c-.215,1.054.103,2.174.878,2.95s1.898,1.092,2.95.878c.593.897,1.609,1.464,2.706,1.464s2.113-.568,2.706-1.465c1.059.214,2.176-.103,2.95-.878.776-.776,1.094-1.896.878-2.95.897-.593,1.465-1.609,1.465-2.707Zm-4.218-1.875l-4,5c-.178.222-.442.358-.726.374-.019,0-.037.001-.056.001-.265,0-.52-.105-.707-.293l-2-2c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.21,1.21,3.302-4.127c.347-.43.975-.502,1.406-.156.431.345.501.974.156,1.405Z" />
                                </svg>
                            </div>


                            <div className="relative h-5">
                                <p
                                    className={`text-[#71717b] text-sm font-light absolute inset-0 transition-all duration-1200 ease-out ${visibleIndex >= 0
                                        ? "opacity-0 blur-sm"
                                        : "opacity-100 blur-0"
                                        }`}
                                    aria-busy
                                    aria-hidden
                                >
                                    Open Source Contributor
                                </p>

                                {phrases.map((phrase, i) => (
                                    <p
                                        key={i}
                                        className={`text-mutedForeground text-sm font-light absolute inset-0 transition-all duration-1200 ease-out ${i === visibleIndex
                                            ? "opacity-100 blur-0"
                                            : "opacity-0 blur-sm"
                                            }`}
                                    >
                                        {phrase}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <aside className="flex items-end justify-between flex-col">
                    <button
                        type="button"
                        onClick={changeTheme}
                        className="group night flex items-center justify-center"
                        aria-label="Toggle theme"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            className="mb-1"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="12"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-1" aria-label="Profile views">
                        <img src="/Eye.svg" alt="eye icon" className="size-4.5 opacity-50" />
                        <p className="text-mutedForeground">2.2k</p>
                    </div>
                </aside>
            </section>

            <ImagePIP />
        </>
    );
}

export default Hero;