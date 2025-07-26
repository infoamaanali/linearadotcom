"use client";

import { useEffect, useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss, SiTypescript, SiGithub, SiDiscord } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-gray-950 via-black to-gray-950 text-white border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-float-slow"
          style={{
            bottom: `${10 + mousePosition.y * -0.005}%`,
            left: `${20 + mousePosition.x * 0.008}%`,
          }}
        />
        <div
          className="absolute w-96 h-96 bg-gradient-to-l from-blue-500/6 to-cyan-500/6 rounded-full blur-3xl animate-float-medium"
          style={{
            bottom: `${15 + mousePosition.y * -0.008}%`,
            right: `${25 + mousePosition.x * 0.01}%`,
          }}
        />

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-[clamp(1rem,4vw,2.5rem)] py-[clamp(3rem,6vw,6rem)]">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(2rem,4vw,3rem)] mb-[clamp(2rem,4vw,3rem)]">
          {/* Company Info */}
          <div className="space-y-[clamp(1rem,2.5vw,1.5rem)]">
            <div className="space-y-4">
              <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Lineara
              </h3>
              <p className="text-zinc-400 leading-relaxed text-[clamp(0.9rem,1.5vw,1rem)]">
                A comprehensive React component library built for modern developers who value{" "}
                <span className="text-white font-medium">simplicity</span> and{" "}
                <span className="text-white font-medium">flexibility</span>.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-zinc-500">Built with:</span>
              <div className="flex items-center gap-2">
                {[IoLogoReact, SiTypescript, SiTailwindcss].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer"
                  >
                    <Icon className="text-[clamp(0.9rem,1.2vw,1rem)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white/90 relative">
              Product
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
            </h4>
            <nav className="space-y-3 text-[clamp(0.9rem,1.5vw,1rem)]">
              {["Components", "Pricing", "Terms & Policy", "Examples", "Documentation"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-zinc-400 hover:text-white transition duration-300 hover:translate-x-1"
                >
                  <span className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-zinc-600 rounded-full group-hover:bg-white" />
                    {link}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white/90 relative">
              Resources
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
            </h4>
            <nav className="space-y-3 text-[clamp(0.9rem,1.5vw,1rem)]">
              {["Getting Started"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-zinc-400 hover:text-white transition duration-300 hover:translate-x-1"
                >
                  <span className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-zinc-600 rounded-full group-hover:bg-white" />
                    {link}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Community */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white/90 relative">
              Community
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
            </h4>
            <div className="space-y-4">
              {/* Socials */}
              <div className="flex items-center gap-3">
                {[SiGithub, SlSocialTwitter, SiDiscord].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon className="text-[clamp(0.8rem,1.2vw,1rem)]" />
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <p className="text-sm text-zinc-400">Stay updated with our latest releases</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 text-sm outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition duration-300 hover:scale-105 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span>© {currentYear} Lineara. Made with</span>
            <FaHeart className="text-red-400 animate-pulse text-xs" />
            <span>by developers, for developers.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-500">Quick start:</span>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl font-mono text-sm text-zinc-300 hover:border-white/20 hover:bg-white/10 transition duration-300 cursor-pointer select-all">
              npx lineara@latest init
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(15px, -20px) scale(1.02); }
          66% { transform: translate(-10px, 10px) scale(0.98); }
        }

        @keyframes float-medium {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-20px, -15px) scale(1.01); }
        }

        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.6; }
        }

        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 10s ease-in-out infinite; }
        .animate-particle-float { animation: particle-float 10s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}