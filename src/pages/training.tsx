import {
  BadgePercent,
  Calendar,
  FastForward,
  Home,
  Settings,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { Layout } from "~/components";
import Link from "next/link";

const Main = () => {
  return (
    <Layout>
      <div className="flex h-full w-full flex-col p-10">
        <h1 className="mb-2 text-5xl font-medium text-gray-900">Training</h1>
        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur</p>

        <div className="mt-10">
          <iframe
            className="h-[500px] w-full rounded-lg"
            src="https://www.youtube.com/embed/iCQ2gC4DqJw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-auto flex w-full items-end justify-around">
          <Link href="/main">
            <button className="flex flex-col items-center justify-center gap-1 rounded-full p-3 text-xs text-gray-900 hover:bg-gray-50">
              <Home className="h-4 w-4" /> Home
              {/* <div className="h-1 w-1 rounded-full bg-[#FF6079]"></div> */}
            </button>
          </Link>
          <Link href="/shop">
            <button className="flex flex-col items-center justify-center gap-1  rounded-full p-3 text-xs text-gray-900 hover:bg-gray-50">
              <ShoppingCart className="h-4 w-4" /> Shop
            </button>
          </Link>
          <Link href="/training">
            <button className="rounded-full bg-black p-6 text-white hover:opacity-80">
              <FastForward className="h-6 w-6" />
            </button>
          </Link>
          <Link href="/plan">
            <button className="flex flex-col items-center justify-center gap-1  rounded-full p-3 text-xs text-gray-900 hover:bg-gray-50">
              <BadgePercent className="h-4 w-4" /> Plan
            </button>
          </Link>
          <Link href="/settings">
            <button className="flex flex-col items-center justify-center gap-1  rounded-full p-3 text-xs text-gray-900 hover:bg-gray-50">
              <Settings className="h-4 w-4" /> Settings
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
