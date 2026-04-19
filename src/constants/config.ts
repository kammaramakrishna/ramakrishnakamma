const LocalConfig = {
  values: {
    TZ: process.env.TZ,
    NODE_ENV: process.env.NODE_ENV,
    AUTOPREFIXER_GRID: process.env.AUTOPREFIXER_GRID,
<<<<<<< HEAD
    NEXT_PUBLIC_GTAG_ID: process.env.NEXT_PUBLIC_GTAG_ID,
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    NEXT_PUBLIC_VERCEL_TOKEN: process.env.NEXT_PUBLIC_VERCEL_TOKEN,
    NEXT_PUBLIC_RESUME_LINK: process.env.NEXT_PUBLIC_RESUME_LINK || "#",
=======
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    NEXT_PUBLIC_VERCEL_TOKEN: process.env.VERCEL_TOKEN,
    NEXT_PUBLIC_RESUME_URL: process.env.NEXT_PUBLIC_RESUME_URL || "#",
>>>>>>> 7f8c69059cb9778cfc9ce309bc6660dd5c1b3e81
  },
};

export default LocalConfig;
