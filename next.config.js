// next.config.js
module.exports = {
  allowedDevOrigins: ['192.168.1.2'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
  transpilePackages: [
    '@acme/ui',
    'lodash-es',
    'rc-util',
    '@ant-design/icons-svg',
    'rc-tooltip',
    'rc-pagination',
    'rc-picker',
    'rc-input',
  ],
  turbopack: {}
};
