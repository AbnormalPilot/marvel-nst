'use client'

import CardNav from '@/components/ui/CardNav'
import Hero from "@/components/hero";
import {Characters} from "@/components/characters";
import Movies from "@/components/movies";
import { TVShows } from "@/components/tvshows";

const items = [
    {
      label: "Characters",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: []
    },
    {
      label: "Movies", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: []
    },
    {
      label: "TV Shows",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: []
    }
  ];
export default function Home() {
  
  return (
    <div className="relative min-h-screen bg-black">
      <CardNav
      logo='logo.svg'
      logoAlt="Company Logo"
      items={items}
      baseColor="red"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />

    <Hero/>
    <Characters/>
    <Movies/>
    <TVShows/>
    </div>
  )
}
