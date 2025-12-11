const LocalConfig = {
  values: {
    TZ: process.env.TZ,
    NODE_ENV: process.env.NODE_ENV,
    AUTOPREFIXER_GRID: process.env.AUTOPREFIXER_GRID,
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    NEXT_PUBLIC_VERCEL_TOKEN: process.env.VERCEL_TOKEN,
    NEXT_PUBLIC_RESUME_URL: process.env.NEXT_PUBLIC_RESUME_URL || "#",
  },
};

export default LocalConfig;
