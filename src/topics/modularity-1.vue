<template>
  <p>Space left: {{ eventObj.roomLeft }} out of {{ eventObj.capacity }}</p>
  <ul>
    <li v-for="(name, index) of eventObj.attending" :key="index">
      {{ name }}
    </li>
  </ul>
  <button @click="incrementCapacity">Increase Capacity</button>
</template>

<script>
import useEventSpace from "@/use/event-space";
export default {
  name: "Modularity-1",
  setup() {
    return {
      ...useEventSpace(), // how about destructuring to use roomLeft directly?, see modularity-2
    };
  },
};
</script>
