import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-full flex items-center justify-center">
        <div className="wfull max-w-[450px] mx-auto h-auto ">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
