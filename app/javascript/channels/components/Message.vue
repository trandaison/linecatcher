<template>
  <li class="px-4 py-1 hover:bg-gray-200 hover:text-gray-800">
    <p class="font-bold" v-text="timestamp"></p>
    <div class="whitespace-pre" v-text="text"></div>
  </li>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },

  computed: {
    timestamp() {
      return new Date(this.message.events[0].timestamp).toISOString();
    },

    text() {
      return JSON.stringify(this.message, null, 2);
    }
  },
}
</script>
