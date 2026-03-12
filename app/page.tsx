"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.href = "/erm-report.html";
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f0f5]">
      <p className="text-gray-500">Loading...</p>
    </div>
  );
}