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
import { reactive, computed } from "vue";
export default {
  name: "Reactive",
  setup() {
    const eventObj = reactive({
      capacity: 3,
      attending: ["alok", "mihir", "sravan"],
      roomLeft: computed(() => {
        return eventObj.capacity - eventObj.attending.length;
      }),
    });

    const incrementCapacity = () => eventObj.capacity++;

    return {
      eventObj, // how to destructure eventObj? See to-refs.vue
      incrementCapacity,
    };
  },
};
</script>
