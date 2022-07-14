// const AWS = require('aws-sdk');
const express = require("express");
const app = express();

const {
  EventBridgeClient,
  ActivateEventSourceCommand,
} = require("@aws-sdk/client-eventbridge");

const client = new EventBridgeClient({ region: "ap-south-1" });

app.get("/", function (res, req) {
  console.log("HI");
  const params = {
    /** input parameters */
  };
  const command = new ActivateEventSourceCommand(params);
  console.log(client);
  // callbacks.
  client.send(command, (err, data) => {
    // process err and data.
    if (err) {
      res.send(err);
      throw err;
    } else {
      res.send(data);
    }
  });
});
app.listen(8080, () => {
  console.log("Server started on port 8080");
});
