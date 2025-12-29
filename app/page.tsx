"use client";

import DecryptedText from "@/components/DecryptedText";
import { useEffect, useState } from "react";

// Custom hook for fade-in effect on mount
function useFadeIn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return isVisible;
}

export default function Home() {
  const isVisible = useFadeIn();

  return (
    <div className="min-h-screen bg-white">
      <main className="font-(family-name:--font-inter) mx-auto max-w-dvh px-6 py-16 sm:px-8 sm:py-24">
        {/* Header */}
        <header className="mb-8">
          <h1 className="mb-2 font-(family-name:--font-doto) text-5xl font-bold tracking-tight text-black sm:text-6xl">
            <DecryptedText text="Daniel Cheah" speed={60} />
          </h1>
          <p className="mb-8 flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className={`text-base transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>✈️</span>
            <a 
              href="https://maps.app.goo.gl/eC3r7NbfnZYXLssu9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:underline decoration-zinc-500"
            >
              <DecryptedText
                text="Toronto, CAN"
                speed={60}
              />
            </a>
          </p>
          <p className="font-bold text-lg leading-relaxed text-black">
            <DecryptedText 
              text="I'm an 18 y/o developer & designer based in Canada" 
              speed={60}
              sequential
            />
          </p>
          <p className="mt-2 text-lg font-medium leading-relaxed text-zinc-600">
            <DecryptedText 
              text="I spend most of my time building projects I find interesting" 
              speed={60}
              sequential
            />
          </p>
        </header>

        {/* Social Links */}
        <div className={`mb-10 flex flex-wrap gap-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <SocialLink
            href="https://github.com/dan-opse"
            icon="/social-icons/github.png"
            alt="GitHub"
            label="@dan-opse"
          />
          <SocialLink
            href="https://instagram.com/tanneddan"
            icon="/social-icons/instagram.png"
            alt="Instagram"
            label="@tanneddan"
          />
          <SocialLink
            href="https://linkedin.com/in/daniel-cheah"
            icon="/social-icons/linkedin.png"
            alt="LinkedIn"
            isIconOnly
          />
          <SocialLink
            href="mailto:cheah_daniel@outlook.com"
            icon="/social-icons/outlook.png"
            alt="Email"
            isIconOnly
          />
        </div>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="mb-4 text-3xl font-bold text-black">
            <DecryptedText text="Projects" speed={60} />
          </h2>
          <div className="space-y-3">
            <ProjectCard
              icon="/project-icons/kaiwago.png"
              title="kaiwago"
              year="2025"
              description="An AI language learning conversation platform built for conversational practice for those without someone to speak with."
            />
            <ProjectCard
              icon="/project-icons/pokemon.png"
              title="pokemon stock scraper"
              year="2025"
              description="Built a web scraper to monitor the stock of Pokemon cards on the Pokemon Center website. *not currently operational*"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="mb-4 text-3xl font-bold text-black">
            <DecryptedText text="Experience" speed={60} />
          </h2>
          <div className="space-y-3">
            <ExperienceCard
              icon="/experience-icons/reign-influence.png"
              title="social media manager"
              company="reign influence"
              year="2024"
              description="Managed social media portfolio amassing over 6.2 million engagements and a following of 50,000+ under 7 months."
            />
            <ExperienceCard
              icon="/experience-icons/codersports.png"
              title="coding instructor"
              company="coder sports academy"
              year="2023"
              description="Taught fundamental programming skills to students using Roblox Studio and Scratch."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  alt,
  label,
  isIconOnly = false,
}: {
  href: string;
  icon: string;
  alt: string;
  label?: string;
  isIconOnly?: boolean;
}) {
  const baseClasses = "rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:scale-105 hover:border-zinc-300 hover:shadow-md";
  const iconOnlyClasses = "flex items-center justify-center p-3";
  const withLabelClasses = "inline-flex items-center gap-2.5 px-4 py-3 text-base font-bold text-zinc-900";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${isIconOnly ? iconOnlyClasses : withLabelClasses}`}
    >
      <img 
        src={icon}
        alt={alt}
        className={`drop-shadow-md ${isIconOnly ? 'h-5 w-5' : 'h-4 w-4 shrink-0'}`}
      />
      {label && (
        <DecryptedText text={label} speed={60} sequential />
      )}
    </a>
  );
}

function ProjectCard({
  icon,
  title,
  year,
  description,
}: {
  icon: string;
  title: string;
  year: string;
  description: string;
}) {
  const isVisible = useFadeIn();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex gap-4">
      <img 
        src={icon} 
        alt={title}
        className={`h-8 w-8 shrink-0 rounded-md object-cover transition-opacity duration-250 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="flex-1">
        <div className="mb-1.5 flex items-center justify-between gap-2 cursor-pointer group border-b-2 border-b-transparent hover:border-b-zinc-300 pb-1 transition-all" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center gap-2 flex-1">
            <h3 className="text-xl font-medium text-black">
              <DecryptedText text={title} speed={50} />
            </h3>
          </div>
          <span className={`text-xl font-medium text-black transition-opacity duration-250 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{year}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="flex items-center justify-center text-black transition-all shrink-0 p-1 rounded hover:bg-zinc-100 cursor-pointer"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="mb-2 text-xs text-black pt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({
  icon,
  title,
  company,
  year,
  description,
}: {
  icon: string;
  title: string;
  company: string;
  year: string;
  description: string;
}) {
  const isVisible = useFadeIn();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex gap-4">
      <img 
        src={icon} 
        alt={company}
        className={`h-8 w-8 shrink-0 rounded-md object-cover transition-opacity duration-250 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="flex-1">
        <div className="mb-1.5 flex items-center justify-between gap-2 cursor-pointer group border-b-2 border-b-transparent hover:border-b-zinc-300 pb-1 transition-all" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center gap-2 flex-1">
            <h3 className="text-xl font-medium text-black">
              <DecryptedText text={`${title} @ ${company}`} speed={50} />
            </h3>
          </div>
          <span className={`text-xl font-medium text-black transition-opacity duration-250 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{year}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="flex items-center justify-center text-black transition-all shrink-0 p-1 rounded hover:bg-zinc-100 cursor-pointer"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="mb-2 text-xs text-black pt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function EducationCard({
  icon,
  school,
  year,
  description,
}: {
  icon: string;
  school: string;
  year: string;
  description: string;
}) {
  const isVisible = useFadeIn();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex gap-4">
      <img 
        src={icon} 
        alt={school}
        className={`h-8 w-8 shrink-0 rounded-md object-cover transition-opacity duration-250 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="flex-1">
        <div className="mb-1.5 flex items-center justify-between gap-2 cursor-pointer group border-b-2 border-b-transparent hover:border-b-zinc-300 pb-1 transition-all" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center gap-2 flex-1">
            <h3 className="text-xl font-medium text-black">
              <DecryptedText text={school} speed={50} />
            </h3>
          </div>
          <span className={`text-xl font-medium text-black transition-opacity duration-250 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{year}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="flex items-center justify-center text-black transition-all shrink-0 p-1 rounded hover:bg-zinc-100 cursor-pointer"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="mb-2 text-xs text-black pt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
