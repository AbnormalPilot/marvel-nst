"use client";

import React from "react";
import TextPressure from './ui/TextPressure';
import { FocusCards } from "@/components/ui/focus-cards";
export default function Movies() {
  const cards = [
    {
      title: "The Fantastic Four: First Steps",
      src: "https://preview.redd.it/i-fixed-the-fantastic-four-poster-so-its-not-as-obvious-v0-37rayqsfiwle1.png?auto=webp&s=052da079291cf80260608dda1f2df3dd0b2e7d17",
    },
    {
      title: "Thunderbolts",
      src: "https://preview.redd.it/official-poster-for-thunderbolts-v0-evhw576e5kqd1.jpeg?width=640&crop=smart&auto=webp&s=02ca7cc6596e46d31fa48430e1a2dd273a13cad5",
    },
    {
      title: "Captain America: Brave New World",
      src: "https://i.redd.it/hy24avcddn6e1.jpeg",
    },
    {
      title: "Deadpool & Wolverine",
      src: "https://preview.redd.it/deadpool-and-wolverine-by-carpa-2011-best-fan-poster-to-v0-07mut123meic1.jpg?width=1080&crop=smart&auto=webp&s=9e585cb9ba8584a03cb500411b244ee1d33ef22b",
    },
    {
      title: "Avengers: Infinity War",
      src: "https://img-9gag-fun.9cache.com/photo/a3K1wGe_460s.jpg",
    },
    {
      title: "Avengers: End Game",
      src: "https://i.pinimg.com/736x/77/29/22/772922e837cf434ae67ae250fdeddd06.jpg",
    },
  ];

  

  return (
    <section className="relative min-h-screen overflow-hidden py-20">
        <TextPressure
            text="Movies!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
        />
      <FocusCards cards={cards} />
    </section>
  );
}
