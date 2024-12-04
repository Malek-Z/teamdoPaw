"use client";

import { Loader } from "lucide-react";

const LoadingPage = () => {
    return(
    <div className="h-screen flex-col gap-y items-center justify-center">
      <Loader className="size-6 animate-spin"/>
    </div>
    );



}
export default LoadingPage;