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
        <div className="flex w-full items-center">
          <Link href="/profile">
            <img
              className="mr-5 h-12 w-12 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="Rounded avatar"
            />
          </Link>
          <div>
            <p className="text-base text-gray-600">Hello John!</p>
            <p className="text-lg font-medium text-gray-900">Sat, 19 Jul</p>
          </div>
          <div className="ml-auto rounded-full border border-gray-900 p-2">
            <Calendar className="h-5 w-5" />
          </div>
        </div>
        <div className="pt-16">
          <p className="text-xl font-medium text-gray-900">My Plan</p>
          <p className="text-gray-600">July, 2021</p>
          <br />
          <div className="w-full rounded-lg bg-[#FF6079]/20 p-5 shadow">
            <div className="mb-5 flex w-full">
              <div className="mr-10 flex h-16 w-16 items-center justify-center rounded-full border border-white bg-[#FF6079] text-white">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="mb-1 text-sm uppercase text-gray-500">Week 1</p>
                <p className="text-xl font-medium text-gray-900">Body Weight</p>
                <p className="text-sm text-gray-900">Workout 1 of 5</p>
              </div>
            </div>
            <Link href="/training">
              <button className="flex w-full items-center rounded-lg bg-white p-5 text-gray-900 hover:bg-gray-50">
                <FastForward className="h-7 w-7" />
                <div className="ml-3">
                  <p className="m-0 text-sm text-gray-500">Next Excersize</p>
                  <p className="text ml-4 font-medium text-gray-900">
                    Lower Strength
                  </p>
                </div>
              </button>
            </Link>
          </div>
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
