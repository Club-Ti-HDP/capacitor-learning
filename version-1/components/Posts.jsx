import Link from "next/link"
import { HIDetails, HIHeartEmpty, HIComment, HISend, HIReport } from "./Icons"
export function Post({ post: { id, userPicture, username, description, image, likes, comments } }) {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="p-2 justify-between flex font-semibold items-center">
                <Link href="#" className="flex gap-2 items-center">
                    <img className="rounded-full" src={userPicture ? userPicture : "https://placehold.co/40x40.png"} alt="" />
                    <span>{username ? username : "entity_303"}</span>
                </Link>
                <Link href="#">
                    <HIDetails style="h-8 fill-gray-700 dark:fill-white" />
                </Link>
            </div>
            <Link href="#">
                <img src="https://placehold.co/600x400.png" alt="" />
            </Link>
            <div className="p-2">
                <div className="py-2 justify-between flex font-semibold items-center">
                    <div className="flex gap-2 items-center">
                        <HIHeartEmpty style="h-8 text-gray-700 dark:text-white" />
                        <HIComment style="h-8 text-gray-700 dark:text-white" />
                        <HISend style="h-8 text-gray-700 dark:text-white" />
                    </div>
                    <div>
                        <HIReport style="h-8 text-gray-700 dark:text-white" />
                    </div>
                </div>
                <span className="mb-3 font-semibold text-gray-700 dark:text-white">/quantity/</span>
                <span className="mb-3 font-normal text-gray-700 dark:text-gray-100"> liked this post</span>
                <p className="font-normal text-gray-700 dark:text-gray-100">/post description/</p >
            </div>
        </div>

    )
}