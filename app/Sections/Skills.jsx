export default function skills() {
    const Stack = [
        { name: "React" },
        { name: "Next" },
        { name: "Expo" },
        { name: "Django" },
        { name: "Express" },
        { name: "Node" },
        { name: "Bun" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "Prisma" },
        { name: "Zustand" },
        { name: "Transact Query" },
        { name: "Postman" },
        { name: "Tailwind" },
        { name: "Shadcn" },
        { name: "Framer Motion" },
        { name: "GSAP" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Java" },
        { name: "Python" },
        { name: "SQL" },
        { name: "Git" },
        { name: "Github" },
        { name: "Figma" },
        { name: "Docker" },
        { name: "Linux" },
    ]
    return (

        <section className="TechStack">
            <h1 className="padding text-[1.35rem] font-bold">
                Skills and Technologies
            </h1>
            <div className="line" />
            <div className="flex flex-wrap  my-3 md:gap-2.5 gap-1.5  items-center justify-center padding">
                {Stack.map(({ name, svg, link, index }) => (
                    <a href={`${name}.com`} key={name} target="_blank">
                        <span className=" min-w-fit w-full skill group relative flex-1  flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-black/20!  px-2 py-1 transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10 select-none max-w-fit">
                            <img src={`/assets/SVG/${name}.svg`} alt="" className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" />
                            {name}
                        </span>
                    </a>
                ))}
            </div>
        </section >

    )
}
