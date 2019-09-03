module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog`,
    author: `Saikat Das`,
    description: `A collection of my thoughts and writings.`,
    siteUrl: "https://daily.saikat.dev",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/saikatdas0790`,
      },
      {
        name: `github`,
        url: `https://github.com/saikatdas0790`,
      },
    ],
  },
};
