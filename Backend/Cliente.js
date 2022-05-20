const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const Cliente = new DynamoDBClient({
  region: "us-east-1",
  output: "json",

  credentials: {
    accessKeyId: "AKIA4CW4NWFVSZWUCBUJ",
    secretAccessKey: "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",
  },
});
module.exports = Cliente;
