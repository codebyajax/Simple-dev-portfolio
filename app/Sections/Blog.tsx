import XPostCard from "../Components/XPostCard";

export default function ThoughtsPage() {
    return (
        <section className="padding">
            <h1 className="text-[1.35rem] mb-6">Recent thoughts from X</h1>

            <div className="space-y-8">
                <XPostCard
                    tweetId="1723990780145184971"
                    title="Building my portfolio with Next.js & Tailwind – lessons learned"
                    date="Mar 2026"
                    readTimeOrClaps="120"
                    tags={["Next.js", "Portfolio", "Frontend"]}
                />

                <XPostCard
                    tweetId="YOUR_SECOND_TWEET_ID"
                    title="Just shipped a cool drag-and-drop editor feature"
                    date="Feb 2026"
                    readTimeOrClaps="85"
                    tags={["React", "UI", "OpenSource"]}
                />

                {/* Add more as needed */}
            </div>
        </section>
    );
}