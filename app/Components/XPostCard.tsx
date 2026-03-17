"use client"; // only if you need client features; otherwise can be server component

import { Tweet } from "react-tweet";
import Link from "next/link";
import { Suspense } from "react";

interface XPostCardProps {
    tweetId: string;
    title: string;              // e.g. "My GSOC Journey: The 2-Month Sprint..."
    date: string;               // e.g. "Mar 2025"
    readTimeOrClaps?: string;   // e.g. "340" claps or "6 min read"
    tags?: string[];            // e.g. ["GSOC", "Open Source"]
    className?: string;
}

export default function XPostCard({
    tweetId,
    title,
    date,
    readTimeOrClaps = "—",
    tags = [],
    className = "",
}: XPostCardProps) {
    const tweetUrl = `https://x.com/yourusername/status/${tweetId}`;

    return (
        <div className={`m-1 ${className}`}>
            <Link
                href={tweetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group hover:bg-bgHover transition-colors duration-300 p-3 rounded-lg"
            >
                <div className="flex flex-col gap-2.5 flex-1">
                    {/* Title */}
                    <h3 className="text-[1rem] sm:leading-[0.80] leading-[1.60] font-bold text-title">
                        {title}
                    </h3>

                    {/* Date + metric */}
                    <div className="flex items-center gap-1 text-mutedForeground select-none">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="14"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z"
                                fill="currentColor"
                            />
                            {/* ... rest of calendar paths ... (you can keep the full svg from your example) */}
                            <path fillRule="evenodd" clipRule="evenodd" d="M6 3C4.34315 3 ... " fill="currentColor" />
                        </svg>
                        <p className="text-xs font-medium">{date}</p>

                        {/* Optional claps / read time */}
                        {readTimeOrClaps && (
                            <>
                                <span className="mx-1.5 w-px h-4 bg-border inline-block align-middle select-none" aria-hidden="true" />
                                <div className="flex items-center gap-1 text-mutedForeground">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 256 256"
                                        height="14"
                                        width="14"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {/* your clap/heart svg paths here */}
                                    </svg>
                                    <p className="text-xs font-medium">{readTimeOrClaps}</p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Tags */}
                    {tags.length > 0 && (
                        <div className="flex items-center gap-1 select-none">
                            <div className="flex gap-1.5">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs text-foreground bg-zinc-50 dark:bg-zinc-900 px-1.5 py-0.5 rounded-sm border border-border"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Arrow icon on hover */}
                <div className="hidden sm:block">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:rotate-45 transition-all duration-300 text-muted group-hover:text-title"
                        height="18"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>
            </Link>

            {/* Dotted line separator */}
            <div
                className="w-full h-px"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            to right,
            var(--border-color) 0px,
            var(--border-color) 6px,
            transparent 6px,
            transparent 14px
          )`,
                    backgroundSize: "100% 1px",
                    backgroundRepeat: "no-repeat",
                }}
            />

            {/* The actual tweet preview – rendered below the card header */}
            <div className="mt-4 px-3 pb-4">
                <Suspense fallback={<div className="text-muted text-sm">Loading tweet...</div>}>
                    <Tweet id={tweetId} />
                </Suspense>
            </div>
        </div>
    );
}