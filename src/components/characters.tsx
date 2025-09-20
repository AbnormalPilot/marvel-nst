"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/character-carousel";
import TextPressure from './ui/TextPressure';
export function Characters() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
        <TextPressure
          text="Characters!"
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
      <Carousel items={cards} />
    </div>
  );
}


const data = [
  {
    title: "IRON MAN",
    src: "https://i.pinimg.com/736x/31/18/a3/3118a32c9a3d29530f94daea6e21f5f5.jpg",
  },
  {
    title: "THOR",
    src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/thor-mike-scott.jpg",
  },
  {
    title: "HULK",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/623c75e9-4dd5-4f0f-b915-63f97b1839fe/d117sme-1d9b8987-0730-482f-8edc-95f5d9eef35c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi82MjNjNzVlOS00ZGQ1LTRmMGYtYjkxNS02M2Y5N2IxODM5ZmUvZDExN3NtZS0xZDliODk4Ny0wNzMwLTQ4MmYtOGVkYy05NWY1ZDllZWYzNWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JewVJhjopm0ojAv0LR5HIA90zXe6Vs_xeopLOptR7Ow",
  },

  {
    title: "CAPTAIN AMERICA",
    src: "https://64.media.tumblr.com/tumblr_m5ufz5puwy1qglm2ko1_640.jpg",
  },
  {
    title: "DOCTOR STRANGE",
    src: "https://i.pinimg.com/originals/5c/d9/30/5cd930164835b0ef2049d86926bd7907.gif",
  },
  {
    title: "SPIDERMAN",
    src: "https://i.pinimg.com/736x/2e/67/8b/2e678be9e4fdb17c0e72d26aa646c65e.jpg",
  },
];
