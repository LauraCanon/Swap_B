const config = require("config");

const mapper = (listing) => {
  const baseUrl = config.get("assetsBaseUrl");
  const mapImage = (image) => ({
    url: `${baseUrl}${image.fileName}.jpg`,
  });

  return {
    ...listing,
    images: listing.images.map(mapImage),
  };
};

module.exports = mapper;
