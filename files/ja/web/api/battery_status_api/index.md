---
title: Battery Status API
slug: Web/API/Battery_Status_API
---

{{DefaultAPISidebar("Battery API")}}{{deprecated_header}}

**Battery Status API** は、 **Battery API** と呼ばれることの方が多いのですが、システムのバッテリー充電レベルに関する情報の提供、およびバッテリーレベルや充電状態が変化したときに発生するイベントによる通知を可能にします。これは、バッテリーが消耗したときにバッテリー消費を減らすためアプリのリソース使用状況を調整したり、データを失わないためにバッテリーが切れる前に変更点を保存したりするために使用できます。

Battery Status API は {{domxref("window.navigator")}} を、 battery promise を返す {{domxref("navigator.getBattery()")}} メソッドで拡張します。 Promise は、バッテリーの状態監視を制御できる新たなイベントも提供する、{{domxref("BatteryManager")}} オブジェクトで解決します。

## 例

以下の例では、充電状況 (電源に接続して充電中であるか) の変化およびバッテリーレベルの変化およびタイミングを監視します。これは、 {{event("chargingchange")}}, {{event("levelchange")}}, {{event("chargingtimechange")}}, {{event("dischargingtimechange")}} の各イベントをそれぞれ待ち受けすることによって実現します。

```js
navigator.getBattery().then(function(battery) {
  function updateAllBatteryInfo(){
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', function(){
    updateChargeInfo();
  });
  function updateChargeInfo(){
    console.log("Battery charging? "
                + (battery.charging ? "Yes" : "No"));
  }

  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
    console.log("Battery level: "
                + battery.level * 100 + "%");
  }

  battery.addEventListener('chargingtimechange', function(){
    updateChargingInfo();
  });
  function updateChargingInfo(){
    console.log("Battery charging time: "
                 + battery.chargingTime + " seconds");
  }

  battery.addEventListener('dischargingtimechange', function(){
    updateDischargingInfo();
  });
  function updateDischargingInfo(){
    console.log("Battery discharging time: "
                 + battery.dischargingTime + " seconds");
  }

});
```

[仕様書に記載されているサンプル](http://www.w3.org/TR/battery-status/#examples)もご覧ください。

## 仕様書

| 仕様書                               | 状態                             | 備考     |
| ------------------------------------ | -------------------------------- | -------- |
| {{SpecName("Battery API")}} | {{Spec2("Battery API")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.BatteryManager")}}

## 関連情報

- [Retrieving battery status information - demo & article](/ja/Apps/Build/gather_and_modify_data/retrieving_battery_status_information)
- [Hacks blog post - Using the Battery API](http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
