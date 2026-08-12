import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { basePath } from "./src/lib/base-path";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
