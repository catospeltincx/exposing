module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin/config.yml");

  eleventyConfig.addCollection("digitalContext", (collectionApi) => {
    return collectionApi
      .getAll()
      .filter((item) => item.data.context === "Digital Context");
  });
};
