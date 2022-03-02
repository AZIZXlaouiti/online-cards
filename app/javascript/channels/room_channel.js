import consumer from "./consumer"
const $ = require("jquery")
consumer.subscriptions.create("RoomChannel", {
  connected() {
     console.log("connect...")
     $('#status').html("Waiting for an other player")
     
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data)
    // Called when there's incoming data on the websocket for this channel
  }
});
