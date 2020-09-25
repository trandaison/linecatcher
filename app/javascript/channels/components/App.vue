<template>
  <div id="app">
    <div class="mx-auto w-full lg:w-2/3 min-h-screen px-4">
      <div class="flex flex-col h-screen">
        <div class="my-4">
          <label class="text-gray-700">
            <span class="mr-2">Webhook URL</span>
            <input type="text" class="w-full px-4 py-2 rounded-lg border-2 focus:border-blue-300 focus:outline-none" readonly :value="webhookUrl">
          </label>
        </div>
        <div>
          <div class="flex items-center">
            <div class="rounded-full h-3 w-3 inline-block" :class="status.class"></div>
            <span class="ml-2">{{ status.text }}</span>
          </div>
        </div>
        <div class="bg-white font-mono text-gray-600 h-full overflow-y-scroll mb-4 flex-1 border-2 rounded-lg">
          <ul class="text-xs">
            <Message
              v-for="(message, index) in messages"
              :key="`${index}-${message.events[0].timestamp}`"
              :message="message"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue';
import consumer from '../consumer';

export default {
  components: {
    Message,
  },

  data: function () {
    return {
      online: false,
      messages: [],
    };
  },

  computed: {
    webhookUrl() {
      return window.location.href;
    },

    channelId() {
      const query = decodeURIComponent(window.location.search);
      return new URLSearchParams(query).get('id') || 'default';
    },

    status() {
      return {
        class: this.online ? 'bg-green-400' : 'bg-red-600',
        text: this.online ? 'Online' : 'Offline',
      };
    },
  },

  mounted() {
    this.initChannel();
  },

  methods: {
    initChannel() {
      console.log('initChannel', this.channelId); // eslint-disable-line
      consumer.subscriptions.create(
        {
          id: this.channelId,
          channel: 'LineChannel',
        },
        {
          connected: this.onConnected,
          disconnected: this.onDisconnected,
          received: this.onReceived,
        },
      );
    },

    onConnected() {
      this.online = true;
    },

    onDisconnected() {
      this.online = false;
    },

    onReceived(data) {
      this.messages.push(data.channel);
      this.$nextTick(this.scrollToBottom);
    },

    scrollToBottom() {
      const li = document.querySelector('ul li:last-child');
      if (li) {
        li.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    },
  },
}
</script>
