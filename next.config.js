const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? 'fin-news' : '',
  images: { unoptimized: true }, // Required for static export
  output: 'export', // Enables static site export
};
