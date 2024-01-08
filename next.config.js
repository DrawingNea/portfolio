/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.licdn.com"
            }
        ]
    },
    experimental:{
        serverActions: true,
    },
    output: "export",
    basePath: "/nextjs-github-pages"
}

module.exports = nextConfig
