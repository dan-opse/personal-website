"use client";

import DecryptedText from "@/components/DecryptedText";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="font-(family-name:--font-inter) mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        {/* Header */}
        <header className="mb-10">
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
          <p className="font-bold text-xl leading-relaxed text-zinc-600">
            <DecryptedText 
              text="I'm an 18 y/o developer & designer based in Canada" 
              speed={60}
              sequential
            />
          </p>
          <p className="mt-2 text-xl font-medium leading-relaxed text-zinc-600">
            <DecryptedText 
              text="I spend most of my time building projects I find interesting" 
              speed={60}
              sequential
            />
          </p>
        </header>

        {/* Social Links */}
        <div className="mb-16 flex flex-wrap gap-4">
          {/* <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-all hover:scale-105 hover:border-zinc-300 hover:shadow-md"
          >
            <img 
              src="/social-icons/twitter.png" 
              alt="Twitter" 
              className="h-5 w-5"
            />
            Twitter
          </a> */}
          <a
            href="https://github.com/dan-opse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-base font-bold text-zinc-900 shadow-sm transition-all hover:scale-105 hover:border-zinc-300 hover:shadow-md"
          >
            <img 
              src="/social-icons/github.png" 
              alt="GitHub" 
              className="h-4 w-4 drop-shadow-md shrink-0"
            />
            <DecryptedText
              text="@dan-opse"
              speed={60}
              sequential
            />
          </a>
          <a
            href="https://instagram.com/tanneddan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-base font-bold text-zinc-900 shadow-sm transition-all hover:scale-105 hover:border-zinc-300 hover:shadow-md"
          >
            <img 
              src="/social-icons/instagram.png" 
              alt="Instagram" 
              className="h-4 w-4 drop-shadow-md shrink-0"
            />
            <DecryptedText
              text="@tanneddan"
              speed={60}
              sequential
            />
          </a>
          <a
            href="https://linkedin.com/in/daniel-cheah"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-3 shadow-sm transition-all hover:scale-105 hover:border-zinc-300 hover:shadow-lg"
          >
            <img 
              src="/social-icons/linkedin.png" 
              alt="LinkedIn" 
              className="h-5 w-5 drop-shadow-md"
            />
          </a>
          <a
            href="mailto:cheah_daniel@outlook.com"
            className="flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-3 shadow-sm transition-all hover:scale-105 hover:border-zinc-300 hover:shadow-lg"
          >
            <img 
              src="/social-icons/outlook.png"
              alt="Email" 
              className="h-5 w-5 drop-shadow-md"
            />
          </a>
        </div>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-black">
            <DecryptedText text="Projects" speed={60} />
          </h2>
          <div className="space-y-12">
            <ProjectCard
              title="AI Language Learning App"
              year="2025 - Present"
              description="A brief description of your project. What problem does it solve? What technologies did you use?"
              link="https://project-one.com"
            />
            <ProjectCard
              title="Pokemon Web Scraper Bot"
              year="2025"
              description="Another interesting project you've built. Highlight the impact and key features."
              link="https://project-two.com"
            />
            <ProjectCard
              title="Galactic Rotation Curve Analysis"
              year="2024 - 2025"
              description="One more project to showcase your skills and experience in building products."
              link="https://project-three.com"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-black">
            <DecryptedText text="Experience" speed={60} />
          </h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Coding Instructor"
              company="Coder Sports Academy"
              year="2023"
              description="Brief description of your role and responsibilities."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectCard({
  title,
  year,
  description,
  link,
}: {
  title: string;
  year: string;
  description: string;
  link: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="group">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="mb-2 flex items-baseline gap-3">
          <h3 className="text-xl font-medium text-black group-hover:text-zinc-600">
            <DecryptedText text={title} speed={50} animateOn="hover" />
          </h3>
          <span className={`text-sm text-zinc-500 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {year}
          </span>
        </div>
        <p className="text-zinc-600">
          <DecryptedText text={description} speed={30} sequential />
        </p>
      </a>
    </div>
  );
}

function ExperienceCard({
  title,
  company,
  year,
  description,
}: {
  title: string;
  company: string;
  year: string;
  description: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="mb-2 flex items-baseline gap-3">
        <h3 className="text-xl font-medium text-black">
          <DecryptedText text={title} speed={50} />
        </h3>
        <span className={`text-sm text-zinc-500 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{year}</span>
      </div>
      <p className="mb-1 text-zinc-600">
        <DecryptedText text={company} speed={40} />
      </p>
      <p className="text-zinc-600">
        <DecryptedText text={description} speed={30} sequential />
      </p>
    </div>
  );
}

function EducationCard({
  school,
  year,
  description,
}: {
  school: string;
  year: string;
  description: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="mb-2 flex items-baseline gap-3">
        <h3 className="text-xl font-medium text-black">
          <DecryptedText text={school} speed={50} />
        </h3>
        <span className={`text-sm text-zinc-500 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{year}</span>
      </div>
      <p className="text-zinc-600">
        <DecryptedText text={description} speed={30} sequential />
      </p>
    </div>
  );
}
