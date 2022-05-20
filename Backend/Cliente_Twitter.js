const { TwitterClient } = require("twitter-api-client");

const twitterClient = new TwitterClient({
  apiKey: "KRy7l0v8wex3w8Sy5zThai3Ea",
  apiSecret: "X2eBm0Y21kYEuR74W3Frqc2JVIizOj8Q1EVGatDsEVVEJo0ucu",
  accessToken: "1220032047516921859-otvXjhExyUTZ5GLxssc9h5ORqtPZja",
  accessTokenSecret: "tmJKqM4ORfQW6CH7wIVV8uKNpmSEmeFAP8lYwGb19uYjj",
});

module.exports = twitterClient;
