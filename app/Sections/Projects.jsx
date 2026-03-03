import PBlueprints from "../Components/PBlueprints";

export default function Projects() {
    return (
        <section>
            <h1 className="padding text-[1.35rem]">
                Projects
            </h1>
            <div className="line" />
            <PBlueprints name={"Plutus"} img={"Logo-1.png"} video={"video-1.webm"} type={"Fintech application"} range={"8 Weeks"} status={"Under Construction"} fword={"A social platform where developers share projects, ideas, and grow together."} sword={"A social platform where developers share projects, ideas, and grow together"}
                stack1={"Next js"} stack2={"Express.js"} stack3={"Figma"} stack4={"Tailwind"} stack5={"AWS"} stack6={"TXR"} />
            <div className="line" />
            <PBlueprints name={"DEX AI"} img={"Logo-2.png"} video={"video-2.webm"}
                type={"AI application"} range={"12 Weeks"} status={"Live"}
                fword={"A social platform where developers share projects, ideas, and grow together."}
                sword={"A social platform where developers share projects, ideas, and grow together"}
                stack1={"React"} stack2={"Tailwind"} stack3={"Express"} stack4={"Open AI api"}
                stack5={"AWS"} stack6={"TXR"}
            />
            <div className="line" />
            <PBlueprints name={"Portfolio"} img={"Logo-3.png"} video={"video-3.webm"}
                type={"Web Portfolio"} range={"1 Weeks"} status={"Live"}
                fword={"A social platform where developers share projects, ideas, and grow together."}
                sword={"A social platform where developers share projects, ideas, and grow together"}
                stack1={"React"} stack2={"Tailwind"} stack3={"Express"} stack4={"Open AI api"}
                stack5={"AWS"} stack6={"TXR"}
            />
            <div className="line" />

            <a href="" className="my-3 w-fit mx-auto overflow-hidden flex justify-center align items-center border rounded-[10px] border-border p-0.5 group">
                <div className="flex gap-1 items-center justify-center rounded-lg border border-border w-max bg-[#5c5c5c] text-white h-max px-2.5 py-1  bg-nonHover group-hover:bg-black transition duration-300 text-background">
                    <span className="text-background text-[15.2px] font-medium">View All</span>
                    <span className="flex items-center group-hover:scale-125 transition-transform duration-300">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline></svg></span></div>
            </a>
        </section>
    )
}
