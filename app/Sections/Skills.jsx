import Image from "next/image";
import Link from "next/link";

const skills = [
    { name: "React", href: "https://react.dev", icon: "/assets/SVG/react.svg" },
    { name: "Next", href: "https://nextjs.org", icon: "/assets/SVG/next.svg" },
    { name: "Expo", href: "https://expo.dev", icon: "/assets/SVG/expo.svg" },
    { name: "Django", href: "https://djangoproject.com", icon: "/assets/SVG/django.svg" },
    { name: "Express", href: "https://expressjs.com", icon: "/assets/SVG/express.svg" },
    { name: "Node", href: "https://nodejs.org", icon: "/assets/SVG/node.svg" },
    { name: "Bun", href: "https://bun.sh", icon: "/assets/SVG/bun.svg" },
    { name: "PostgreSQL", href: "https://postgresql.org", icon: "/assets/SVG/postgresql.svg" },
    { name: "MongoDB", href: "https://mongodb.com", icon: "/assets/SVG/mongodb.svg" },
    { name: "Redis", href: "https://redis.io", icon: "/assets/SVG/redis.svg" },
    { name: "Prisma", href: "https://prisma.io", icon: "/assets/SVG/prisma.svg" },
    { name: "Zustand", href: "https://zustand-demo.pmnd.rs", icon: "/assets/SVG/zustand.svg" },
    { name: "Tanstack Query", href: "https://tanstack.com/query", icon: "/assets/SVG/tanstack-query.svg" },
    { name: "Postman", href: "https://postman.com", icon: "/assets/SVG/postman.svg" },
    { name: "Tailwind", href: "https://tailwindcss.com", icon: "/assets/SVG/tailwind.svg" },
    { name: "Shadcn", href: "https://ui.shadcn.com", icon: "/assets/SVG/shadcn.svg" },
    { name: "Framer Motion", href: "https://framer.com/motion", icon: "/assets/SVG/framer-motion.svg" },
    { name: "GSAP", href: "https://gsap.com", icon: "/assets/SVG/gsap.svg" },
    { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "/assets/SVG/javascript.svg" },
    { name: "TypeScript", href: "https://typescriptlang.org", icon: "/assets/SVG/typescript.svg" },
    { name: "Java", href: "https://java.com", icon: "/assets/SVG/java.svg" },
    { name: "Python", href: "https://python.org", icon: "/assets/SVG/python.svg" },
    { name: "SQL", href: "https://en.wikipedia.org/wiki/SQL", icon: "/assets/SVG/sql.svg" },
    { name: "Git", href: "https://git-scm.com", icon: "/assets/SVG/git.svg" },
    { name: "GitHub", href: "https://github.com", icon: "/assets/SVG/github.svg" },
    { name: "Figma", href: "https://figma.com", icon: "/assets/SVG/figma.svg" },
    { name: "Docker", href: "https://docker.com", icon: "/assets/SVG/docker.svg" },
    { name: "Linux", href: "https://linux.org", icon: "/assets/SVG/linux.svg" },
];

export default function Skills() {
    return (
        <section className="TechStack">
            <h1 className="padding text-[1.35rem] font-bold">
                Skills and Technologies
            </h1>

            <div className="line" />

            <div className="flex flex-wrap my-3 md:gap-2.5 gap-1.5 items-center justify-center padding">
                {skills.map(({ name, href, icon }) => (
                    <Link
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="min-w-fit w-full skill group relative flex-1 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-black/20! px-2 py-1 transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10 select-none max-w-fit">
                            <Image
                                alt={name}
                                src={icon}
                                width={16}
                                height={16}
                                loading="eager"
                                className="group-hover:opacity-100 opacity-65 size-4 mt-0.5"
                            />
                            {name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
