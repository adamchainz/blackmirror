const imageToAscii = require("image-to-ascii");

imageToAscii(
  "bandersnatch.png",
  {
    "size": {
      "width": 51,
      "height": 36,
    },
    "pixels": "██ "
  },
  (err, converted) => {
    console.log(err || converted);
  },
);

