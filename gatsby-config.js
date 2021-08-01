module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Portfolio",
  },
  plugins: ["gatsby-plugin-sass",
  {
    resolve: 'gatsby-plugin-eslint',
    options: {
      stages: ['develop'],
      extensions: ['js', 'jsx'],
      exclude: ['node_modules', '.cache', 'public'],
      // Any eslint-webpack-plugin options below
    }
  }
  ],
};
