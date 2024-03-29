import { readEvent } from "src/js/event";
import { pushNotification } from "src/js/framework";
import { useStore } from "vuex";
import { computed } from "vue";

export default function () {
  const store = useStore();
  const notification = computed(() => store.state.common.notification);

  const handleEvents = (curReport, oldReport) => {
    if (!notification.value) return;
    if (!oldReport) return;

    let curEvents = readEvent(curReport.eventsGroup);
    let oldEvents = readEvent(oldReport.eventsGroup);
    let newEvents = curEvents.filter((evt) => !oldEvents.includes(evt));

    newEvents.forEach((evt) =>
      pushNotification(evt, curReport.logDatetime.out)
    );
  };

  return {
    handleEvents,
  };
}
