"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const heroImage = "/Images/Hero.png";
  const galleryImages = [
    "/Images/Sunny balcony with city view.png",
    "/Images/Entrance.jpeg",
    "/Images/Balcony.jpeg",
    "/Images/Room 1.jpeg",
    "/Images/Room-1-Alt.jpeg",
    "/Images/Room 2.jpeg",
    "/Images/Room-2-Alt.jpeg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryLength = galleryImages.length;
  const nextGalleryImage = () => setCurrentImageIndex((index) => (index + 1) % galleryLength);
  const prevGalleryImage = () => setCurrentImageIndex((index) => (index - 1 + galleryLength) % galleryLength);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src={heroImage}
          alt="JST Homestay"
          fill
          className="absolute inset-0 object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-6xl font-bold mb-6">JST Homestay</h1>

          <p className="text-xl mb-8">
            A peaceful mountain-themed homestay near Rajpur Road,
            Dehradun.
          </p>

          <a
            href="https://wa.me/917895402128"
            target="_blank"
            className="bg-green-800 px-6 py-3 rounded-2xl"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Welcome to JST Homestay
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Welcome to JST Homestay, a mountain-themed room near
              Rajpur Road in Dehradun.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              You get a private AC bedroom with a king-size double bed,
              attached bathroom, balcony access and fast Wi-Fi.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-100 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold">6</h3>
                <p>AC Rooms</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold">₹1500</h3>
                <p>Per Night</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold">2</h3>
                <p>Guests Per Room</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold">Wi-Fi</h3>
                <p>Free Internet</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full">
            <Image
              src={galleryImages[1]}
              alt="Room"
              fill
              className="rounded-3xl shadow-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Gallery
          </h2>

          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <div className="relative h-[420px] md:h-[520px]">
              <Image
                src={galleryImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>

            <button
              type="button"
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black"
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          <div className="mt-6 grid grid-cols-5 gap-3">
            {galleryImages.map((img, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`rounded-3xl overflow-hidden border ${
                  index === currentImageIndex ? "border-black" : "border-transparent"
                }`}
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Amenities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Air Conditioned Rooms",
              "Attached Balcony",
              "Private Bathroom",
              "Fast Wi-Fi",
              "Electric Kettle",
              "Tea & Coffee",
              "RO Drinking Water",
              "Nearby Grocery Store",
              "CCTV Security",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl p-6"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Location
            </h2>

            <p className="mb-4">
              📍 203, Neshvilla Road, Dehradun, 248001
            </p>

            <p className="mb-4">
              Coordinates: 30.333502, 78.040878
            </p>

            <p className="mb-6">
              Easy access to Rajpur Road & Paltan Bazaar.
            </p>

            <a
              href="https://maps.google.com/?q=30.333502,78.040878"
              target="_blank"
              className="bg-black text-white px-6 py-3 rounded-2xl inline-block"
            >
              Open in Google Maps
            </a>
          </div>

          <iframe
            title="location"
            src="https://maps.google.com/maps?q=loc:30.333502,78.040878&z=17&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Contact & Booking
          </h2>

          <p className="mb-4">
            📞 7895402128
          </p>

          <p className="mb-8">
            📧 jsthomestay@gmail.com
          </p>

          <a
            href="https://wa.me/917895402128"
            target="_blank"
            className="bg-white text-black px-8 py-4 rounded-2xl inline-block font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}