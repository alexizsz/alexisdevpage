import React from "react";

export default function Home() {
  return (
    <>
      <main
        className="flex flex-col items-center text-center justify-start p-24"
        style={{ backgroundColor: "#F5F0EB" }}
      >
        <h1 className="text-4xl font-sans max-w-xl">
          {"Hi, I'm Alexis — a Junior fullstack developer based in Stockholm. I build backends that work and frontends that (mostly) don't break. Currently looking for my next opportunity."
            .split(" ")
            .map((word, i) => (
              <span key={i} className="hover:font-bold cursor-default">
                {" "}
                {word}
              </span>
            ))}
        </h1>{" "}
        <div className="mt-16">
        <a href="mailto:alexissalazar9@gmail.com?subject=Would love to hear more about your work!">
          <button className="bg-[#C7AC90] hover:bg-[#A88C6D] text-white font-bold py-2 px-4 rounded">
            Contact Me
          </button>
        </a>
        </div>
      </main>
    </>
  );
}
