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
    output: 'export',
}

module.exports = nextConfig
