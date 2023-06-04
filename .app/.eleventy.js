const loader = require("./_config/utils/loader.util");

module.exports = (eleventyConfig) => {
  // Load eleventy configurations from './_config' folder
  loader([__dirname, "_config"], eleventyConfig);

  eleventyConfig.setServerOptions({
    watch: ["dist/app.js", "dist/app.*.css"],
  });
  


  return {
    pathPrefix: process.env.ELEVENTY_NOTES_PATH_PREFIX || undefined,
    dir: {
      input: "./../",
      output: "dist",
      data: ".app/_data",
      includes: ".app/_includes",
    },
    markdownTemplateEngine: false,
  };
};

  eleventyConfig.addCollection("notes", (collectionApi) => {
  return collectionApi.getSortedByDate()
    .filter((post) => post.data.emoji !== undefined);
});
