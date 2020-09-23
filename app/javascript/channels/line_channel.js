import consumer from "./consumer";
import onReceived from './onReceived';
import onConnected from './onConnected';
import onDisconnected from './onDisconnected';

document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(window.webhookUrl.search).get('id') || 'default';

  consumer.subscriptions.create({
    id,
    channel: 'LineChannel',
  }, {
    connected() {
      onConnected();
    },

    disconnected() {
      onDisconnected();
    },

    received(data) {
      onReceived(data);
    },
  });
});
