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
import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onUnmounted, onUpdated } from 'vue';
export default {
  name: "LifecycleHooks",
  setup() {
    onBeforeMount(() => {
      console.log('on Before Mount');
    })
    onMounted(() => {
      console.log('on Mounted');
    })
    onBeforeUpdate(() => {
      console.log('on Before Update');
    })
    onUpdated(() => {
      console.log('on Updated');
    })
    onBeforeUnmount(() => {
      console.log('on Before Unmount');
    })
    onUnmounted(() => {
      console.log('on Unmounted');
    })
    onActivated(() => { // for keep alive components
      console.log('on Activated');
    });
    onDeactivated(() => { // for keep alive components
      console.log('on Deactivated');
    });
    onErrorCaptured((err) => { // for keep alive components
      console.log('on Error Captured', err);
    });
    return {
      ...useEventSpace(), // how about destructuring to use roomLeft directly?, see modularity-2
    };
  },
};
</script>
