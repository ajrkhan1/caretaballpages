/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.caretab.ai",
      },
    ],
  },
};

export default nextConfig;