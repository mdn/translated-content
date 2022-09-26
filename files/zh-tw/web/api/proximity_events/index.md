---
title: Proximity
slug: Web/API/Proximity_Events
---

{{ SeeCompatTable }}

## 摘要

近距 (Proximity) 事件可迅速感測出使用者靠近裝置，並迅速做出反應。舉例來說，當使用者接通來電並將裝置靠近耳朵時，智慧型手機隨即關閉螢幕。

> **備註：** 顯然裝置必須具備近距感測器 (Proximity sensor)，此 API 才能發揮作用。而目前幾乎只有行動裝置搭載接近感測器。若裝置並未搭載感測器，則雖同樣可支援，但永遠不會觸發此類事件。

## 近距事件

只要近距感測器測得「裝置」與「物體」之間的距離改變時，就會通知瀏覽器這項變化。而只要瀏覽器獲得通知，隨即啟動 [`DeviceProximityEvent`](/zh-TW/docs/Web/API/DeviceProximityEvent) 以因應任何變化；或啟動 [`UserProximityEvent`](/zh-TW/docs/Web/API/UserProximityEvent) 以因應簡單的變化。

透過 [`addEventListener`](/zh-TW/docs/Web/API/EventTarget.addEventListener) 函式 (使用 {{event("deviceproximity")}} 或 {{event("userproximity")}} 事件名稱)；或將事件處理器 (Event handler) 附掛至 [`window.ondeviceproximity`](/zh-TW/docs/Web/API/window.ondeviceproximity) 或 [`window.onuserproximity`](/zh-TW/docs/Web/API/window.onuserproximity) 屬性，均可於 `window 物件層級就擷取到此事件。`

在擷取事件之後，事件物件將可存取不同的資訊：

- [`DeviceProximityEvent`](/zh-TW/docs/Web/API/DeviceProximityEvent) 事件透過本身的 [`value`](/zh-TW/docs/Web/API/DeviceProximityEvent.value) 屬性，可提供裝置與物體之間的確實距離。另透過本身的 [`min`](/zh-TW/docs/Web/API/DeviceProximityEvent.min) 與 [`max`](/zh-TW/docs/Web/API/DeviceProximityEvent.max) 屬性，則能設定「裝置測得某物」的最近與最遠距離。
- [`UserProximityEvent`](/zh-TW/docs/Web/API/UserProximityEvent) 事件則提供粗略的距離，並以 Boolean 值呈現。物體靠近時，[`UserProximityEvent.near`](/zh-TW/docs/Web/API/UserProximityEvent.near) 屬性即為 `true`；物體遠離則為 `false。`

## 範例

```js
window.addEventListener('userproximity', function(event) {
  if (event.near) {
    // let's power off the screen
    navigator.mozPower.screenEnabled = false;
  } else {
    // Otherwise, let's power on the screen
    navigator.mozPower.screenEnabled = true;
  }
});
```

## 規範

此功能不再有望成為標準。它的歷史規範仍然[可用](https://w3c.github.io/proximity/)。

## 另可參閱

- {{domxref("DeviceProximityEvent")}}
- {{domxref("UserProximityEvent")}}
- {{event("deviceproximity")}}
- {{event("userproximity")}}
