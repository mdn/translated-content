---
title: Battery Status API
slug: Web/API/Battery_Status_API
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("Battery API")}}{{securecontext_header}}

**Battery Status API**，更常被稱為 **Battery API**，提供有關系統電池充電狀態的資訊，並允許你透過事件通知來得知電池電量或充電狀態的變化。這可以用來調整應用程式的資源使用，以在電池電量低時減少耗電，或者在電池耗盡前儲存變更以防止資料遺失。

> [!NOTE]
> 此 API _無法在_ [Web Worker](/zh-TW/docs/Web/API/Web_Workers_API) 中使用（不會透過 {{domxref("WorkerNavigator")}} 暴露）。

## 介面

- {{domxref("BatteryManager")}}
  - : 提供有關系統電池充電狀態的資訊。

### 擴展至其他介面

- {{domxref("Navigator.getBattery()")}}
  - : 返回一個 {{JSxRef("Promise")}}，其會兌現為一個 {{DOMxRef("BatteryManager")}} 物件。

## 範例

在此範例中，我們監聽充電狀態（是否插電充電中）以及電池電量和時間的變化。這是透過監聽 {{domxref("BatteryManager.chargingchange_event", "chargingchange")}}、{{domxref("BatteryManager.levelchange_event", "levelchange")}}、{{domxref("BatteryManager.chargingtimechange_event", "chargingtimechange")}} 和 {{domxref("BatteryManager.dischargingtimechange_event", "dischargingtimechange")}} 事件來完成的。

```js
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log(`電池正在充電嗎？${battery.charging ? "是" : "否"}`);
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log(`電池電量：${battery.level * 100}%`);
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log(`電池充電時間：${battery.chargingTime} 秒`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(`電池放電時間：${battery.dischargingTime} 秒`);
  }
});
```

參見[規範中的範例](https://w3c.github.io/battery/#examples)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Hacks 部落格文章——使用 Battery API](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
