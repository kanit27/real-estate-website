"use client";
import React from "react";

export default function Copyright() {
  return (
    <footer className="w-full py-4 bg-black text-center text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} SAV Global. All rights reserved.
    </footer>
  );
}