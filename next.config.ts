import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// GitHub Pages serves this repo at /portfolio-test/, not the domain root,
// so the base path only applies to the GitHub Actions build.
const repoName = "portfolio-test";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  basePath: isGithubActions ? `/${repoName}` : undefined,
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
