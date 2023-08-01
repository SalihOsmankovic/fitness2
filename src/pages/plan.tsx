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

const Plan = () => {
  return (
    <Layout>
      <div className="flex h-full w-full flex-col p-10">
        <h1 className="mb-2 text-5xl font-medium text-gray-900">Plan</h1>
        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur</p>

        <div className="mt-10 w-full">
          <p className="text-xl font-medium text-gray-900">My Plan</p>
          <p className="text-lg text-gray-500">3 excersizes per week</p>
          <p className="text-gray-500">$ 9.99</p>
        </div>

        <div className="my-10 h-[430px] w-full overflow-y-auto overflow-x-hidden">
          <div className="mb-3 w-full rounded-lg border border-gray-200 p-2 shadow">
            <p className="mb-0.5 text-xl font-medium text-gray-900">Plan 1</p>
            <p>3 excersizes per week</p>
            <p className="mb-3 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur, alias. Mollitia saepe provident dignissimos
              voluptatibus harum alias labore ullam! Nulla incidunt optio ipsam
              provident minus, illo non dolores modi alias.
            </p>
            <button className="w-full rounded-lg bg-[#FF6079] p-3 text-white shadow hover:opacity-90">
              $ 9.99
            </button>
          </div>
          <div className="mb-3 w-full rounded-lg border border-gray-200 p-2 shadow">
            <p className="mb-0.5 text-xl font-medium text-gray-900">Plan 2</p>
            <p>5 excersizes per week</p>
            <p className="mb-3 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur, alias. Mollitia saepe provident dignissimos
              voluptatibus harum alias labore ullam! Nulla incidunt optio ipsam
              provident minus, illo non dolores modi alias.
            </p>
            <button className="w-full rounded-lg bg-[#FF6079] p-3 text-white shadow hover:opacity-90">
              $ 14.99
            </button>
          </div>
          <div className="mb-3 w-full rounded-lg border border-gray-200 p-2 shadow">
            <p className="mb-0.5 text-xl font-medium text-gray-900">Plan 3</p>
            <p>7 excersizes per week</p>
            <p className="mb-3 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur, alias. Mollitia saepe provident dignissimos
              voluptatibus harum alias labore ullam! Nulla incidunt optio ipsam
              provident minus, illo non dolores modi alias.
            </p>
            <button className="w-full rounded-lg bg-[#FF6079] p-3 text-white shadow hover:opacity-90">
              $ 24.99
            </button>
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

export default Plan;
