const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? {
        basePath: "/portfolio-v1",
        assetPrefix: "/portfolio-v1/",
      }
    : {}),
};

export default nextConfig;
