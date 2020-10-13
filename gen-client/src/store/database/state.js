import { config } from "../../utils/config";

// database
export default {
  config,
  loading: false,
  settings: {
    timeCalibration: false
  },
  theUnit: null,
  theReport: null,
  theCommand: {
    unitID: null,
    hex: "",
    payload: "",
    timeout: null,
    cmd: null
  },
  units: [],
  reports: [],
  responses: [],
  fingers: []
};
