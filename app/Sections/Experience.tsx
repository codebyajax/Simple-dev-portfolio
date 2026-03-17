"use client";
import Image from "next/image";
import { useState } from "react";

type ExperienceItem = {
    companyName: string;
    companyImage: string;
    role: string;
    duration: string;
    period: string;
    location: string;
    achievements: string[];
    technologies: string[];
    isPresent?: boolean;
};

const experiences: ExperienceItem[] = [
    {
        companyName: "Cmon bruv",
        companyImage: "/assets/Images/download.jpg",
        role: "Software Engineer",
        duration: "6 months",
        period: "Aug 2025 – Present",
        location: "Ikeja, Lagos City, Nigeria",
        isPresent: true,
        achievements: [
            "Owned the core presentation editor, driving major performance and reliability improvements",
            "Designed and built core editor features like drag-and-drop, resize, and keyboard shortcuts end-to-end",
            "Owned a foundational refactor, strengthening a critical codebase to enable safer and faster production",
            "Drove major Drive page performance improvements, resolving bugs to deliver faster, reliable experiences",
        ],
        technologies: ["Next", "Tailwind", "Typescript", "Javascript", "Postgres SQL", "Docker", "Figma"],
    },

    {
        companyName: "TechNova Solutions",
        companyImage: "/assets/Images/technova-logo.png",
        role: "Frontend Developer",
        duration: "1 year 4 months",
        period: "Mar 2024 – Jul 2025",
        location: "Remote / Abuja, Nigeria",
        achievements: [
            "Led development of a customer-facing dashboard used by +40k monthly active users",
            "Implemented real-time collaboration features using WebSockets and Zustand",
            "Reduced initial page load time by 47% through lazy-loading and image optimization",
            "Mentored 2 junior developers and conducted bi-weekly code reviews",
        ],
        technologies: ["React", "Next.js", "Zustand", "Tailwind CSS", "TypeScript", "WebSockets", "Vercel"],
    },

    {
        companyName: "PaySwift Nigeria",
        companyImage: "/assets/Images/payswift.png",
        role: "Full-Stack Engineer (Intern → Full-time)",
        duration: "10 months",
        period: "Apr 2023 – Jan 2024",
        location: "Lagos, Nigeria",
        achievements: [
            "Built payment integration module supporting Paystack, Flutterwave & bank transfers",
            "Designed and implemented secure user authentication & KYC flow (NIN verification)",
            "Wrote comprehensive unit & integration tests reaching 82% coverage",
            "Optimized API endpoints reducing average response time from 1.4s → 320ms",
        ],
        technologies: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Jest", "Redis", "Docker"],
    },
];

export default function Experience() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // first one open by default

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section>
            <div className="line" />
            <h1 className="padding text-[1.35rem]">Experience</h1>
            <div className="line" />

            <div className="padding">
                {experiences.map((exp, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={index}>
                            {/* Horizontal line between experiences (skipped before first one) */}
                            {index > 0 && <div className="line" />}

                            <article className={index > 0 ? "mt-6" : ""}>
                                <div
                                    className="p-2 select-none cursor-pointer flex justify-between hover:bg-black/5"
                                    onClick={() => toggle(index)}
                                >
                                    <div className="main flex gap-2">
                                        <figure className="size-12 shrink-0 rounded-[10px] p-0.5 overflow-hidden border">
                                            <Image
                                                src={exp.companyImage}
                                                width={45}
                                                height={45}
                                                priority={index === 0}
                                                className="size-full rounded-lg border object-cover"
                                                alt={`${exp.companyName} logo`}
                                            />
                                        </figure>

                                        <div className="flex flex-col gap-1">
                                            <span className="flex items-center gap-4">
                                                <h1 className="sm:text-[1.20rem] text-[1.05rem] leading-[0.90] font-bold">
                                                    {exp.companyName}
                                                    {exp.isPresent && <span className="text-green-600 text-sm ml-1.5">(present)</span>}
                                                </h1>
                                                <div className="cont smaller-hide">{exp.duration}</div>
                                            </span>
                                            <p className="text-[.9rem] opacity-75">{exp.role}</p>
                                        </div>
                                    </div>

                                    <div className="sub flex gap-3 items-start">
                                        <span className="text-right text-[12px] font-bold md:text-[14px] text-nowrap">
                                            <p>{exp.period}</p>
                                            <p className="text-[.9rem] opacity-75">{exp.location}</p>
                                        </span>

                                        <button
                                            aria-label="toggle details"
                                            type="button"
                                            className="smaller-hide opacity-70 transition-transform duration-300"
                                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-muted group-hover:text-title transition-colors duration-300"
                                                height="18"
                                                width="18"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div
                                    className="experience-body ml-2 transition-all duration-500 ease-in-out"
                                    style={{
                                        display: "grid",
                                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                >
                                    <div className="overflow-hidden">
                                        <ul
                                            className="flex flex-col gap-1.5 w-full my-4 text-[14px]"
                                            style={{ color: "lab(29.82% 0.42 0.14)" }}
                                        >
                                            {exp.achievements.map((point, i) => (
                                                <li key={i} className={i >= 2 ? "small-hide point" : "point"}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className="cont">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}