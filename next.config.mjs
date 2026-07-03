/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the preview can be hosted on GitHub Pages.
  // When we move to the real host (Vercel etc.) for the live accounts
  // platform, remove `output: 'export'`.
  output: 'export',
  trailingSlash: true,
  // Set NEXT_PUBLIC_BASE_PATH to "/<repo-name>" when deploying to
  // https://<user>.github.io/<repo-name>/
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true },
};

export default nextConfig;
