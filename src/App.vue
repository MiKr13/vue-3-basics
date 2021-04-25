<template>
  <RefsAndComputed />
  <hr />
  <Reactive />
  <hr />
  <ToRefs />
</template>

<script>
import RefsAndComputed from "./topics/refs-and-computed";
import Reactive from "./topics/reactive";
import ToRefs from "./topics/to-refs";
export default {
  name: "App",
  components: { RefsAndComputed, Reactive, ToRefs },
};
</script>
