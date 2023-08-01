import React, { FunctionComponent } from "react";
import LayoutProps from "./types";
import { MessagesSquare } from "lucide-react";

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative h-[800px] w-[500px] rounded-lg border border-black">
        {children}
        <div className="absolute bottom-32 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6079] text-white shadow">
          <MessagesSquare className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
};
