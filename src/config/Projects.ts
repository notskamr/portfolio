export type ProjectLink = { t: string; u: string };
export type Project = {
  name: string;
  blurb: string;
  link: string;
  stack?: string[];
  extra?: ProjectLink[];
};

export const PROJECTS: Project[] = [
  {
    name: "Flux",
    blurb: "Live data-streaming proxy API (SSE/WebSocket) for serverless environments.",
    link: "https://flux.vsahni.me",
    stack: ["Bun", "SSE", "WebSocket", "Serverless"],
    extra: [
      { t: "GitHub", u: "https://github.com/notskamr/flux" },
      { t: "Blog", u: "https://blog.vsahni.me/posts/putting-the-serverless-in-server-sent-events" },
    ],
  },
  {
    name: "bun-sqlite-cache",
    blurb: "Caching layer for Bun + SQLite (1K+ downloads).",
    link: "https://github.com/notskamr/bun-sqlite-cache",
    stack: ["Bun", "SQLite", "LRU Caching"],
  },
  {
    name: "Firewood",
    blurb: "WebRTC video-calling app (CS50x final) — 100+ registrations.",
    link: "https://firewood.vsahni.me",
    stack: ["WebRTC", "TypeScript", "PWA"],
  },
  {
    name: "KageMod",
    blurb: "Minecraft gameplay mod — 23K+ downloads.",
    link: "https://www.curseforge.com/minecraft/mc-mods/kagemod",
    stack: ["Java", "Forge", "Gradle", "Game Modding"],
  },

  {
    name: "Parallelized",
    blurb: "India's first performance-aware programming contest; Python multiprocessing + SQLite as the teaching stack, site in Astro.",
    link: "https://parallelized.in",
    stack: ["Astro", "Tailwind CSS", "Python", "SQLite"],
    extra: [
      { t: "Starter Code", u: "https://github.com/parallelized/parallelized-2023-starter" },
      { t: "Problem/Guidelines", u: "https://parallelized.in/2023/guidelines" },
    ],
  },
  {
    name: "ShriTeq",
    blurb: "Interschool tech symposium site; event management, live leaderboard, and announcement hub.",
    link: "https://shriteq.org",
    stack: ["Astro", "Tailwind CSS", "Netlify"],
  },
  {
    name: "ICT @ TSRS (tsrs.tech)",
    blurb: "School-wide infra: custom domains, email bots, magic-link verification for Discord, and a role-based auth Discord bot.",
    link: "https://tsrs.tech",
    stack: ["Astro", "Tailwind CSS", "Discord Bot (Node/discord.js)", "Magic Links/Auth"],
  },
  {
    name: "MusicAI 2023",
    blurb: "Quiz-based game for AI-generated music awareness; played by 150+ students.",
    link: "https://urls.vsahni.me/musicai2023",
    stack: ["SvelteKit", "MongoDB", "Vercel"],
  },
  {
    name: "clear2onion (c2o)",
    blurb: "Link shortener for the dark web. Educational bridge: clearweb → onion web.",
    link: "https://c2o.vsahni.me",
    stack: ["Astro", "Tailwind CSS", "Turso (SQLite)"],
  },

  {
    name: "Crypt Hunt",
    blurb: "CTF-style web platform for ShriTeq handling and scaling 1.5M+ requests during the event without race conditions.",
    link: "https://crypthunt.tsrs.tech",
    stack: ["Astro", "Tailwind CSS", "Turso (SQLite)", "Cloudflare Pages", "Zod", "Serverless"],
  },
  {
    name: "CortX",
    blurb: "Medical management web-app; one of 5 core founding members.",
    link: "https://urls.vsahni.me/cortx",
    stack: ["React", "Express", "MongoDB", "Heroku"],
  },
  {
    name: "CS61CPU",
    blurb: "5-stage pipelined RISC-V CPU designed in Logisim (CS61C).",
    link: "https://inst.eecs.berkeley.edu/~cs61c/su23/projects/proj3/",
    stack: ["C", "RISC-V", "Logisim", "CPU Design"],
  },
  {
    name: "kNN Movie Classification",
    blurb: "DATA 8 project: k-NN classifier on movie reviews using word features.",
    link: "https://vsahni.me",
    stack: ["Python", "NumPy", "Pandas", "scikit-learn"],
  },
];
