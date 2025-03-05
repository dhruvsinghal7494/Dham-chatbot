"use client";

import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-[#040d17] text-white">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Image src="/bslnd-logo.jpg" alt="Logo" width={50} height={40} />
          <h1 className="text-2xl font-bold">BSLND</h1>
        </div>
        <h1 className="text-xl font-semibold">
          Talk to <span className="highlighted-text">Chatbot</span>
        </h1>
      </nav>
      <div className="flex-grow overflow-hidden">
        <Chat />
      </div>
    </main>
  );
}
