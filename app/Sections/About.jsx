"use client"
import Image from "next/image";

export default function About() {
    const socials = [
        { name: "Github" },
        { name: "Twitter" },
        { name: "LinkedIn" },
        { name: "Medium" },
        { name: "Leetcode" },
        { name: "More" },
    ]
    
    return (
        <section className="padding about mb-2">
            <p className=" font-light">
                Hey, I'm Jacques<sup className="opacity-75">/Zhock/</sup>, a full stack developer who loves building clean, modern
                websites and apps where design, functionality,
                and even the smallest details matter, with a focus on making products that are both practical and visually
                satisfying.
            </p>

            <p className="mt-4 font-light">
                Tech stack isn't my concern, I'm flexible with whatever the project needs, though I prefer modern frameworks and
                tools.
                I'm always open for new opportunities to learn and grow.
            </p>

            <div className="flex gap-2.5 mt-4">
                <button className="font-medium py-[.5em] px-4 bg-[#52525C] text-white rounded-lg flex items-center gap-2.5">
                    <Image src="/calendar.svg" width={20}
                        height={20}
                        loading="lazy"
                        alt="icon"
                        className="size-3.75 mb-0.5 invert-100" />
                    Book a Meeting
                </button>

                <a href="/Resume" target="_blank" className="rounded-lg">
                    <button className="font-medium py-[.5em] px-4 flex gap-2.5 items-center   border rounded-lg">
                        <Image src="/file.svg" width={20}
                            height={20}
                            loading="lazy"
                            alt="icon"
                            className="size-4" />
                        Resume
                    </button>
                </a>

            </div>

            <div className="mt-4">
                Here are my Handles

                <div className="flex gap-3 mt-3">

                    <a href="https://Github.com" target="_blank" type="button" aria-label="Social button" className="font-medium text-sm py-[.5em] px-4 hover:bg-[#e0e0e0]  bg-[#f0f0f0]  rounded-lg cursor-pointer flex items-center justify-center gap-2.5">
                        <Image src="assets/SVG/Github.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt="icon for Socials list"
                            className="size-4 mb-0.5" />
                        Github
                    </a>

                    <a href="https://Twitter.com" target="_blank" type="button" aria-label="Social button" className="font-medium text-sm py-[.5em] px-4 hover:bg-[#e0e0e0]  bg-[#f0f0f0]  rounded-lg cursor-pointer flex items-center justify-center gap-2.5">
                        <Image src="/Twitter.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt="icon for Socials list"
                            className="size-4" />
                        Twitter
                    </a>

                    <a href="https://LinkedIn.com" target="_blank" type="button" aria-label="Social button" className="font-medium text-sm py-[.5em] px-4 hover:bg-[#e0e0e0]  bg-[#f0f0f0]  rounded-lg cursor-pointer flex items-center justify-center gap-2.5">
                        <Image src="/LinkedIn.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt="icon for Socials list"
                            className="size-4 mb-0.5" />
                        LinkedIn
                    </a>

                    <a href="https://Medium.com" target="_blank" type="button" aria-label="Social button" className="font-medium text-sm py-[.5em] px-4 hover:bg-[#e0e0e0]  bg-[#f0f0f0]  rounded-lg cursor-pointer flex items-center justify-center gap-2.5 smaller-hide">
                        <Image src="/Medium.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt="icon for Socials list"
                            className="size-4" />
                        Medium
                    </a>

                    <button type="button" aria-label="Social button" className="font-medium text-sm py-[.5em] px-4 hover:bg-[#e0e0e0]  bg-[#f0f0f0]  rounded-lg cursor-pointer flex items-center justify-center gap-2.5">
                        <Image src="/More.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt="icon for Socials list"
                            className="size-4" />
                        More
                    </button>

                </div>
            </div>
        </section>
    )
}
