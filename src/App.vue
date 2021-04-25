<template>
  <RefsAndComputed />
  <hr />
  <Reactive />
  <hr />
  <ToRefs />
  <hr />
  <Modularity1 />
  <hr />
  <Modularity2 />
  <hr />
  <keep-alive><LifecycleHooks /></keep-alive>
</template>

<script>
import RefsAndComputed from "./topics/refs-and-computed";
import Reactive from "./topics/reactive";
import ToRefs from "./topics/to-refs";
import Modularity1 from "./topics/modularity-1";
import Modularity2 from "./topics/modularity-2";
import LifecycleHooks from "./topics/lifecycle-hooks";
export default {
  name: "App",
  components: {
    RefsAndComputed,
    Reactive,
    ToRefs,
    Modularity1,
    Modularity2,
    LifecycleHooks,
  },
};
</script>
