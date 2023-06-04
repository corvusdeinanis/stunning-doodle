eleventyConfig.addCollection("notes", (collectionApi) => {
  return collectionApi.getSortedByDate()
    .filter((post) => post.data.emoji !== undefined);
});
