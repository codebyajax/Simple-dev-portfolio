import Image from "next/image";
export default function PBlueprints({
    img,
    video,
    name,
    type,
    range,
    status,
    fword,
    sword,
    stack1,
    stack2,
    stack3,
    stack4,
    stack5,
    stack6 }) {
    return (
        <article key={name} className="project padding flex flex-col mb-3">
            <div className="p-2  select-none cursor-pointer head flex justify-between">
                <div className="main flex gap-2">
                    <figure className="size-14 p-0.5 rounded-[10px] overflow-hidden  border dark:border-white/10 flex items-center justify-center">
                        <Image
                            src={`/assets/Images/${img}`}
                            className="rounded-lg"
                            alt="company image"
                            fetchPriority="low"
                            loading="lazy"
                            width={86}
                            height={86} />
                    </figure>
                    <div>
                        <p className="text-xl">{name}</p>
                        <p className="text-[.9rem] opacity-75"> {type}</p>
                    </div>
                </div>

                <span className="gap-4 text-right text-[12px] font-medium md:text-[14px]">
                    <p>{range}</p>
                    <p className="font-normal opacity-75">{status}</p>
                </span>
            </div>


            <div className="px-2">
                <ul className="w-[95%] my-4 mx-auto opacity-75 list-disc">
                    <li className='mb-3'>
                        {fword}
                    </li>
                    <li>
                        {sword}
                    </li>
                </ul>

                <video
                    src={`./assets/videos/${video}`}
                    className="size-full mx-auto mb-5 border-amber-100 rounded-xl" alt="company image"
                    autoPlay
                    playsInline
                    muted
                    loop />

                <div className="flex flex-wrap gap-2">
                    <span className="cont">{stack1} </span>
                    <span className="cont">{stack2} </span>
                    <span className="cont">{stack3} </span>
                    <span className="cont">{stack4} </span>
                    <span className="cont">{stack5} </span>
                    <span className="cont">{stack6} </span>
                </div>


            </div>
        </article>
    )
}
