"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [navbarColor, setNavbarColor] = useState('bg-red-200');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setNavbarColor('bg-blue-700');
      } else if (window.scrollY > 100) {
        setNavbarColor('bg-yellow-500');
      } else if (window.scrollY > 50) {
        setNavbarColor('bg-green-700');
      } else {
        setNavbarColor('bg-pink-400');
      }
    };
    window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <div>
      <header className={`fixed top-0 w-full  ${navbarColor} transition-colors duration-300`}>
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-white font-bold text-xl">Nature Photography</div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#home" className="text-white hover:text-yellow-400">Home</Link></li>
              <li><Link href="#gallery" className="text-white hover:text-yellow-400">Gallery</Link></li>
              <li><Link href="#about" className="text-white hover:text-yellow-400">About</Link></li>
              <li><Link href="#contact" className="text-white hover:text-yellow-400">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="mt-16">
        <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
          <h1 className="text-red-700 p-2 bg-white text-5xl font-bold mb-4">Welcome to Nature Photography</h1>
          <p className=" text-red-700 p-2 bg-white text-lg">Explore the beauty of nature through our curated collection of photographs.</p>
        </section>

        <section id="gallery" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Image src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Forest" className="rounded-lg" width={500} height={300} />
              <Image src="https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mountains" className="rounded-lg" width={500} height={300} />
              <Image src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Lake" className="rounded-lg" width={500} height={300} />
              <Image src="https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wildlife" className="rounded-lg" width={500} height={300} />
              <Image src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Beach" className="rounded-lg" width={500} height={300} />
              <Image src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Desert" className="rounded-lg" width={500} height={300} />
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About This Page:</h2>
            <p className="text-lg mb-4">Developed by Ronit Sharma as a part of internship project</p>
          </div>
        </section>

       
      </main>
    </div>
  );
}
