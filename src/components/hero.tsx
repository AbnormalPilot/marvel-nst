"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-80"
          style={{
            filter: "brightness(0.9) contrast(1.1)",
          }}
        >
          <source src="bg.mp4" type="video/mp4" />
        </video>
      <div className="absolute bottom-16 left-8 sm:left-12 md:left-16 z-20">
        <div className="space-y-4">
          <h1 className="text-8xl"
            style={{
              fontFamily: "'Helvetica', sans-serif",
            }}
          >
            <span className="block text-red-700 font-extrabold backdrop-brightness-95">
              MARVEL ✪
            </span>
          </h1>
        </div>
      </div>
      </div>
    </section>
  )
}