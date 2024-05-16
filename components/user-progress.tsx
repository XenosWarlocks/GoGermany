import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
    // activeCourse: typeof courses.$inferselect;
    activeCourse: typeof courses.$inferSelect; 
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const UserProgress = ({
    activeCourse,
    hearts,
    points,
    hasActiveSubscription
}: Props ) => {
    // console.log(activeCourse);

    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href={"/courses"}>
                <Button variant="ghost">
                    <Image
                        className="rounded-md border"
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        height={32}
                        width={32}
                    />
                </Button>
            </Link>
            <Link href={"/shop"}>
                <Button variant="ghost" className="text-orange-500">
                    <Image
                        src="/points.svg"
                        height={28}
                        width={28}
                        alt="Points"
                        className="mr-2"
                    />
                    {points}
                </Button>
            </Link>
            <Link href={"/shop"}>
                <Button variant="ghost" className="text-rose-500">
                    <Image 
                        src="/heart.svg" 
                        height={22} 
                        width={22} 
                        alt="Hearts" 
                        className="mr-2" 
                    />
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" />: hearts}
                </Button>
            </Link>
        </div>
    )
}