<template>
  <q-list bordered>
    <q-expansion-item
      v-for="(event, name) in devEvents"
      :key="name"
      :label="`${name} `"
      :caption="`(${event.length}) times`"
      :header-class="`text-${activeEvent(name) ? 'orange' : 'grey'}`"
      expand-separator
    >
      <q-virtual-scroll :items="event" style="max-height: 50vh" separator>
        <template v-slot="{ item: evt }">
          <q-item :key="`${name}-${evt.time}`">
            <q-item-section>
              <q-item-label caption>{{ evt.time }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-virtual-scroll>
    </q-expansion-item>
  </q-list>
</template>

<script>
import { EVENT_LIST, parseEvent } from "src/js/event";

import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    modelValue: Number
  },
  setup(props) {
    const store = useStore();
    const devEvents = computed(() => store.getters[`db/devEvents`]);

    const activeEvent = (theName) => {
      let event = EVENT_LIST.find(({ name }) => name === theName);
      return parseEvent(props.modelValue, event.bit);
    };

    return {
      EVENT_LIST,
      devEvents,

      activeEvent
    };
  }
});
</script>

<style>
</style>
