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
import { ref, computed } from "vue";
export default {
  name: "App",
  setup() {
    const capacity = ref(3);
    const attending = ref(["alok", "mihir"]);

    const incrementCapacity = () => capacity.value++;

    const roomLeft = computed(() => {
      return capacity.value - attending.value.length;
    });

    return {
      capacity,
      incrementCapacity,
      roomLeft,
      attending,
    };
  },
};
</script>
