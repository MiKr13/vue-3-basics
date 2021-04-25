<template>
  <p>Space left: {{ roomLeft }} out of {{ capacity }}</p>
  <ul>
    <li v-for="(name, index) of attending" :key="index">
      {{ name }}
    </li>
  </ul>
  <button @click="incrementCapacity">Increase Capacity</button>
</template>

<script>
import { toRefs } from "vue";
import useEventSpace from "@/use/event-space";
export default {
  name: "Modularity-1",
  setup() {
    const { eventObj, incrementCapacity } = useEventSpace();
    return {
      ...toRefs(eventObj),
      incrementCapacity,
    };
  },
};
</script>
