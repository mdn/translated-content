---
title: バッテリー状態 API
slug: Web/API/Battery_Status_API
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{DefaultAPISidebar("Battery API")}}

**バッテリー状態 API** は、 **バッテリー API** と呼ばれることの方が多いのですが、システムのバッテリー充電レベルに関する情報の提供、およびバッテリーレベルや充電状態が変化したときに発生するイベントによる通知を可能にします。これは、バッテリーが消耗したときにバッテリー消費を減らすためアプリのリソース使用状況を調整したり、データを失わないためにバッテリーが切れる前に変更点を保存したりするために使用できます。

> [!NOTE]
> この API は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API) では利用できません（{{domxref("WorkerNavigator")}} には公開されていません）。

## インターフェイス

- {{domxref("BatteryManager")}}
  - : システムのバッテリー充電レベルに関する情報を提供します。
- {{domxref("navigator.getBattery()")}} {{ReadOnlyInline}}
  - : {{JSxRef("Promise")}} を返します。これは {{DOMxRef("BatteryManager")}} オブジェクトで解決します。

## 例

以下の例では、充電状況（電源に接続して充電中であるか）の変化およびバッテリーレベルの変化およびタイミングを監視します。これは、 {{domxref("BatteryManager.chargingchange_event", "chargingchange")}}, {{domxref("BatteryManager.levelchange_event", "levelchange")}}, {{domxref("BatteryManager.chargingtimechange_event", "chargingtimechange")}}, {{domxref("BatteryManager.dischargingtimechange_event", "dischargingtimechange")}} の各イベントをそれぞれ待ち受けすることによって実現します。

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
    console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log(`Battery level: ${battery.level * 100}%`);
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log(`Battery charging time: ${battery.chargingTime} seconds`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
  }
});
```

[仕様書に記載されているサンプル](https://www.w3.org/TR/battery-status/#examples)もご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Hacks blog post - Using the Battery API](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
