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
import { reactive, computed, toRefs } from "vue";
export default {
  name: "ToRefs",
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
      ...toRefs(eventObj),
      incrementCapacity,
    };
  },
};
</script>
