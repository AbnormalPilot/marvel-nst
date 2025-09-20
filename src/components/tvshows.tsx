"use client";

import React from "react";
import TextPressure from './ui/TextPressure';
import { FocusCards } from "@/components/ui/focus-cards";
export function TVShows() {
  const cards = [
    {
      title: "What If?",
      src: "https://cdn.marvel.com/content/2x/whatif_lob_crd_01.jpg",
    },
    {
      title: "Iron Heart",
      src: "https://m.media-amazon.com/images/M/MV5BN2EzMGZhOTktYjVhZi00NmIwLWIxZDEtNWUxZTQyNjhkYWQ4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Daredevil",
      src: "https://cdn.marvel.com/content/1x/otk_teaser_digital_ka_v7_lg.jpeg",
    },
  ];

  

  return (
    <section className="relative min-h-screen overflow-hidden py-20">
        <TextPressure
            text="TV Shows!"
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
