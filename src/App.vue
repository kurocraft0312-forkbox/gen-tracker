<template>
  <router-view />
</template>

<script>
import useMqtt from "src/composables/useMqtt";
import useFinger from "src/composables/useFinger";
import useResponse from "src/composables/useResponse";
import useCommand from "src/composables/useCommand";
import useBuffer from "src/composables/useBuffer";
import useReport from "src/composables/useReport";
import useEvents from "src/composables/useEvents";
import useDevice from "src/composables/useDevice";

import { onMounted, provide, defineComponent } from "vue";

export default defineComponent({
  // name: "App",
  setup(props) {
    const { subscribe, publish } = useMqtt();

    const publisher = (vin, data) => {
      publish(`VCU/${vin}/CMD`, data, { qos: 2, retain: true });
      if (!data) {
        publish(`VCU/${vin}/RSP`, data, { qos: 1, retain: true });
      }
    };

    const { addDevices, handleStatus } = useDevice();
    const { handleFinger } = useFinger({ addDevices });
    const { sendCommand, awaitCommand,  handleCommand, handleCommandAck } = useCommand({
      publisher,
      addDevices
    });
    const { handleResponse, ignoreResponse } = useResponse({
      publisher,
      awaitCommand,
      handleFinger
    });

    const { handleEvents } = useEvents();
    const { handleReports } = useReport({ handleEvents });
    const { handleBuffer } = useBuffer({ handleReports });

    const handleResp = (data, topic) => {
      const hex = data.toString("hex").toUpperCase();
      if (!hex) return;

      if (parseInt(hex) == 1) handleCommandAck();
      else handleResponse(hex)
    }

    onMounted(() => {
      subscribe("VCU/+/CMD", { qos: 1 }, handleCommand);
      subscribe("VCU/+/RPT", { qos: 1 }, handleBuffer);
      subscribe("VCU/+/RSP", { qos: 1 }, handleResp);
      subscribe("VCU/+/STS", { qos: 1 }, handleStatus);
    });

    provide("awaitCommand", awaitCommand);
    provide("sendCommand", sendCommand);
    provide("ignoreResponse", ignoreResponse);
  },
});
</script>

<style>
</style>
