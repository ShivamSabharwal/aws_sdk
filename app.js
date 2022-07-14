// const AWS = require('aws-sdk');

const {
  EventBridgeClient,
  ActivateEventSourceCommand,
} = require("@aws-sdk/client-eventbridge");

const client = new EventBridgeClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ActivateEventSourceCommand(params);

// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
