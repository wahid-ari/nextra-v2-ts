const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  env: {
    // API_URL: "http://localhost:3000",
    API_URL: "https://nextra-v2-ts.vercel.app",
    BASE_URL: "https://nextra-v2-ts.vercel.app",
    SITE_URL: "nextra-v2-ts.vercel.app",
  }
};

module.exports = withNextra(nextConfig)