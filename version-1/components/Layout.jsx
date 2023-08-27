import Link from "next/link"
import { HICloud, HIHome, HICalendar, HIChat, HIProfile, HINotification } from "./Icons"
export function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-800">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <HICloud style="h-8 mr-3 fill-blue-500 dark:fill-white" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GoodPeople</span>
                </Link>
                <div className="font-medium flex flex-row space-x-8 mt-0 p-0">
                    <Link href="#" className="relative border-0 hover:text-blue-700 p-0 dark:text-white">
                        <HINotification style="h-8 fill-gray-500 dark:fill-white" />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            1
                        </span>
                    </Link>
                    <Link href="#" className="relative border-0 hover:text-blue-700 p-0 dark:text-white">
                        <HIChat style="h-8 fill-gray-500 dark:fill-white" />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            1
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 fixed bottom-0 w-full">
            <div className="mx-auto max-w-screen-xl p-1">
                <ul className="grid grid-cols-3 gap-4">
                    <Link className="grid" href="#"><HIHome style="justify-self-center h-12 fill-gray-500 dark:fill-white" /></Link>
                    <Link className="grid relative" href="#">
                        <HICalendar style="justify-self-center h-12 fill-gray-500 dark:fill-white" />
                        <span className="absolute bottom-5 right-10 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            1
                        </span>
                    </Link>
                    <Link className="grid" href="#"><HIProfile style="justify-self-center h-12 fill-gray-500 dark:fill-white" /></Link>
                </ul>
            </div>
        </footer>
    )
}