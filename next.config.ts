import createMDX from '@next/mdx';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],

  experimental: {
    mdxRs: {
      mdxType: 'gfm',
    }, // 启用Rust编译器加速MDX处理
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
