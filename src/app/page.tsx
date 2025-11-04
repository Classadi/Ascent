<<<<<<< HEAD
// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">Welcome to Ascent 🚀</h1>
      <p className="mt-4 text-lg text-gray-600">
        Navigate through our technical clubs and explore your preferred domain.
      </p>
=======
"use client";
import ScrollScene from "@components/ScrollScene";
import Landing from "@components/Landing";
import Navbar from "@components/Navig";
import NavbarWrapper from "@components/navbar/Navbar-Wrapper";

export default function Home() {
  return (
    <main>
      <Navbar />
      <button
        onClick={() => (window.location.href = "/phase1")}
        className="px-4 py-2 bg-[#00331a] absolute bottom-2 right-5 text-white rounded-3xl hover:bg-[#28614d70] backdrop-blur-3xl transition border border-[wheat] hover:border-[#b9b9b9] mr-2 cursor-pointer z-200"
      >
        PHASE-1
      </button>
      <Landing />
      {/* <ScrollScene /> */}
>>>>>>> 1321dbffd4a79a57852e36ae42a69f1f5f54592e
    </main>
  );
}
