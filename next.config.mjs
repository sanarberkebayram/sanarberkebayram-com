/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [new URL("https://placehold.co/**")]
    },
    experimental: {
        turbopack: {
            loaders: {
                '*.svg': ['@svgr/webpack'],
            },
        },
    },
};

export default nextConfig;
