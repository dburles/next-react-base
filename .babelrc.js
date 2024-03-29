module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: 'mystical/public',
          development: process.env.NODE_ENV === 'development',
        },
      },
    ],
  ],
};
