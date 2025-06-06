/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/my_portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my_portfolio/' : '',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.(gif|mp4)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        }],
      });
    }
    return config;
  },
};

module.exports = nextConfig; 