const AWS = require("aws-sdk");

const PUBLIC_READ = "public-read";
const PRIVATE = "private";
const s3Client = new AWS.S3({
  profile: process.env.AWS_PROFILE,
});

function buildRedirectObject(bucket, from, to, options) {
  return {
    Bucket: bucket,
    CopySource: "/kampanyalar/detay/63779ecb34b2b251e7c18f0d/index.html",
    Key: "/kampanyalar/detay/63779ecb34b2b251e7c18fs0d/index.html",
  };
}

function handleError(err, data) {
  if (err) console.log(err, err.stack);
}

exports.handleError = handleError;
exports.client = s3Client;
exports.applyRedirect = (bucket, from, to, options = {}) => {
  const object = buildRedirectObject(bucket, from, to, options);
  s3Client.copyObject(
    {
      Bucket: "test.renticar.com",
      Key: "index.html",
      CopySource: "/kampanyalar/detay/63779ecb34b2b251e7c18f0d/index.html",
    },
    (e, d) => {
      console.log(e);
      console.log(d);
    }
  );
};
