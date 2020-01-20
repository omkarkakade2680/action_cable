import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    // console.log("1")
    alert("this run")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log("2")

    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});
