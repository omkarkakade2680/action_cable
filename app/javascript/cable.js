// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
// import { createConsumer } from "@rails/actioncable"

//* require action_cable
//* require_self
//* require_tree ./channels

(function() {
    this.app || (this.app = {});
    App.cable = ActionCable.createConsumer($('meta[name-action-cable-url]').attr('content'))
}).call(this);
// export default createConsumer()
