import { reactive, computed } from "vue";
export default () => {
  const eventObj = reactive({
    capacity: 1,
    attending: ["alok"],
    roomLeft: computed(() => {
      return eventObj.capacity - eventObj.attending.length;
    })
  });

  const incrementCapacity = () => eventObj.capacity++;

  return {
    eventObj,
    incrementCapacity
  };
};
