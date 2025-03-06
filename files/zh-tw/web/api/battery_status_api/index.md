---
title: Battery Status API
slug: Web/API/Battery_Status_API
---

{{DefaultAPISidebar("Battery API")}}

**Battery Status API** 也就是所謂的 **Battery API**，將提供系統電池充電容量的資訊，並在電池容量變化時送出事件，以通知使用者。此 API 可調整 Apps 的資源耗用量，在電力偏低時縮減耗電量；或可在電力耗盡之前儲存檔案，避免資料遺失。

Battery Status API 是以 [`window.navigator.battery`](/zh-TW/docs/Web/API/Navigator/getBattery) 屬性 (為 [`BatteryManager`](/zh-TW/docs/Web/API/BatteryManager) 物件) 而擴充了 [`window.navigator`](/zh-TW/docs/Web/API/Window/navigator)，並新增數項可讓使用者接收的新事件，以隨時監控電池狀態。

## 範例

在此範例中，我們將分別監聽 [chargingchange](/zh-TW/docs/Web/Reference/Events/chargingchange) 與 [levelchange](/zh-TW/docs/Web/Reference/Events/levelchange) 事件，而看到充電狀態 (不論是否插電進行充電) 與電池容量的變化。

```js
var battery =
  navigator.battery || navigator.mozBattery || navigator.webkitBattery;

function updateBatteryStatus() {
  console.log("Battery status: " + battery.level * 100 + " %");

  if (battery.charging) {
    console.log("Battery is charging");
  }
}

battery.addEventListener("chargingchange", updateBatteryStatus);
battery.addEventListener("levelchange", updateBatteryStatus);
updateBatteryStatus();
```

另可參閱[規格所提供之範例](https://dev.w3.org/2009/dap/system-info/battery-status.html#introduction)。

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 另請參閱

- [部落格文章 - Using the Battery API](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
- [David Walsh 所寫的 JavaScript Battery Api](https://davidwalsh.name/battery-api)
- [battery.js - 跨瀏覽器 wrapper](https://github.com/pstadler/battery.js)
- [`BatteryManager`](/zh-TW/docs/Web/API/BatteryManager)
- [`navigator.battery`](/zh-TW/docs/Web/API/Navigator/getBattery)
- `測試你的瀏覽器是否支援 Battery Status API。可掃 QR Code:`
- [![QR Code to Battery Status API Test Page](http://x.co/qr/batstat?s=165)](http://x.co/qr/batstat?s=165)
