# GEN-Tracker

- GEN Server & GEN Client should be executed from same machine (the server).

  Or change the **socket.address** in **GEN-Client/src/components/js/config.js**
- Use **fake generator** feature if you don't have the IoT Device ready

## GEN-Tracker Client

![gen-tracker-server](gen-tracker-2020-02-05_10.51.37.gif)

- Use socket.io-client *(for bi-directional communication with GEN-Server)*.

  Parse HEX string to readable data format.
- Run: **quasar dev**

## Todo Progress

- [x] back scroll to top if selected report is at index zero
- [x] ~~add remove (all, single) for reports, responses, units~~
- [x] handle socketIO connection
- [x] add global settings menu, clear localStorage
- [x] add minimum q-scroll for landscape mobile desktop
- [x] fix driver management dynamic button, recalculate the height
- [x] add simple report to faker
- [x] give send icon on command field
- [x] add command list reference
- [x] add modal chart history when sub-report log is clicked
- [x] unit management minimum height
- [x] ~~de-structure config import~~
- [x] use _.cloneDeep, to decouple data binding
- [x] change frame to frameID, frameType to frameID
- [x] just the autofetch disable for github
- [x] add total report next to unit index
- [x] add index number next to report log
- [x] do not re-zoom map on error postition, use last valid postition instead
- [x] add auto scroll for report log
- [x] change watcher to string
- [x] add simcom module restarted event
- [x] fix config.js
- [x] fix data not structurized
- [x] change xmin by drag range
- [x] save config to store
- [x] change default import to object {}
- [x] ~~change bus event to using store and watch~~
- [x] show full frame on simple frame (if has)
- [x] fix bugs in error min value, when not in rangeMax (on null value), then enable again to rangeMax
- [x] add faker push with unique unitID on global settings
- [x] change y-axes based on rangeValue max
- [x] change chart height based on screen size
- [x] call software developer
- [x] call amber goldentek
- [x] change $lodash to $_
- [x] set immediate to true on watcher, so remove created() events
- [x] add black color on report being read by chart
- [x] remove parseInt() for chart input, instead change the frame formatter
- [x] move config import as plugin
- [x] add response.log for app.js
- [x] ~~use channel for log manager on app.js~~
- [x] sample value is 1 when chart is not opened until data > sample.min
- [x] change server log format
- [x] Decrease the number of LED Button control
- [x] Use semi-permanent localStorage for VueJS app
- [x] Save history for every reported data
- [x] Handle connection for multiple IoT devices
- [x] Separate VueJS app into multiple components for better code structure
- [x] ~~Use Laravel web-socket & Vue for web-apps demo~~
- [x] Backend should response ACK on every un-corrupted REPORT & RESPONSE
- [x] Fix "put your fingerprint on scanner" when command is buffered
- [x] Use table to represent EventsGroup, not chart
- [x] Handle each EventsGroup
- [x] add event reference and the reader
- [x] ReportReader should change based on ReportLog, some parameter not changed
- [ ] make auto focus on command reference search bar
- [ ] add driver name to the report log (if any)
- [ ] simulate reports every 5 second for faker
- [ ] move faker to server
- [ ] Use GPS heading for StreetView
  - <https://developers.google.com/maps/documentation/javascript/streetview?hl=id>
- [ ] Bugs: FullData can be clicked when it's only 1, make the chart error
- [ ] Fix "intervention" error log when scrolling command list
- [ ] Group ReportReader parameter based on VCU, BMS & MCU
- [ ] Bugs: When FollowButton clicked, it is not automatically scrolled to the last data
- [ ] Add keyboard (up & down) control to ReportLog
- [ ] Re-check "Generate Unit" compatibility
- [ ] Fix back Odometer and Speed to km and km/h
- [ ] Move communication handler to backend, not client
- [ ] Fix y-axis chart when its bigger
- [ ] change axes range unit (K, M, G)
