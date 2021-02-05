import * as mutations from "./mutation-types";
import { config } from "components/js/opt/config";

const { maxStorage } = config;

export default {
  [mutations.SET_LOADING](state, payload) {
    state.loading = payload;
  },
  [mutations.TOGGLE_CALIBRATION](state) {
    state.calibration = !state.calibration;
  },
  [mutations.TOGGLE_DARKER](state) {
    state.darker = !state.darker;
  },
  [mutations.CLEAR_ALL](state) {
    state.theUnit = null;
    state.theReport = null;
    state.theCommand = null;
    state.units = [];
    state.reports = [];
    state.commands = [];
    state.fingers = [];
  },

  [mutations.SET_THE_UNIT](state, payload) {
    state.theUnit = payload;
  },
  [mutations.SET_THE_REPORT](state, payload) {
    state.theReport = payload;
  },
  [mutations.SET_THE_CMD_BUFFER](state, data) {
    state.theCmdBuffer = data;
  },
  [mutations.CLEAR_THE_CMD_BUFFER](state) {
    state.theCmdBuffer = null;
  },
  [mutations.SET_THE_COMMAND](state, data) {
    state.theCmdBuffer = data.payload;
    state.theCommand = data;
  },
  [mutations.CLEAR_THE_COMMAND](state) {
    state.theCommand = null;
  },

  [mutations.ADD_UNITS](state, payload) {
    let unit = state.units.find((unitID) => unitID === payload);

    if (!state.theUnit) state.theUnit = payload;
    if (!unit) state.units.unshift(payload);
    if (state.units.length > maxStorage.units) state.units.pop();
  },
  [mutations.ADD_REPORTS](state, payload) {
    state.reports.unshift(payload);
    if (state.reports.length > maxStorage.reports) state.reports.pop();
  },
  [mutations.ADD_COMMANDS](state, payload) {
    state.commands.unshift(payload);
    if (state.commands.length > maxStorage.commands) state.commands.pop();
  },

  [mutations.ADD_FINGERS](state, payload) {
    let exist = state.fingers.some(
      ({ unitID, fingerID }) =>
        unitID === payload.unitID && fingerID === payload.fingerID
    );

    if (!exist) state.fingers.unshift(payload);
  },
  [mutations.DELETE_FINGERS](state, payload) {
    let index = state.fingers.findIndex(
      ({ unitID, fingerID }) =>
        unitID === payload.unitID && fingerID === payload.fingerID
    );
    state.fingers.splice(index, 1);
  },
  [mutations.RESET_FINGERS](state, payload) {
    state.fingers = state.fingers.filter(
      ({ unitID }) => unitID !== payload.unitID
    );
  },
};
