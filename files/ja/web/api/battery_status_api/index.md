---
title: Battery Status API
slug: Web/API/Battery_Status_API
tags:
  - API
  - Apps
  - Battery
  - Firefox OS
  - Guide
  - Mobile
  - ガイド
translation_of: Web/API/Battery_Status_API
---
<div>{{DefaultAPISidebar("Battery API")}}{{deprecated_header}}</div>

<p><strong>Battery Status API</strong> は、 <strong>Battery API</strong> と呼ばれることの方が多いのですが、システムのバッテリー充電レベルに関する情報の提供、およびバッテリーレベルや充電状態が変化したときに発生するイベントによる通知を可能にします。これは、バッテリーが消耗したときにバッテリー消費を減らすためアプリのリソース使用状況を調整したり、データを失わないためにバッテリーが切れる前に変更点を保存したりするために使用できます。</p>

<p>Battery Status API は {{domxref("window.navigator")}} を、 battery promise を返す {{domxref("navigator.getBattery()")}} メソッドで拡張します。 Promise は、バッテリーの状態監視を制御できる新たなイベントも提供する、{{domxref("BatteryManager")}} オブジェクトで解決します。</p>

<h2 id="Example" name="Example">例</h2>

<p>以下の例では、充電状況 (電源に接続して充電中であるか) の変化およびバッテリーレベルの変化およびタイミングを監視します。これは、 {{event("chargingchange")}}, {{event("levelchange")}}, {{event("chargingtimechange")}}, {{event("dischargingtimechange")}} の各イベントをそれぞれ待ち受けすることによって実現します。</p>

<pre class="brush: js;">navigator.getBattery().then(function(battery) {
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
</pre>

<p><a href="http://www.w3.org/TR/battery-status/#examples">仕様書に記載されているサンプル</a>もご覧ください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Battery API")}}</td>
   <td>{{Spec2("Battery API")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.BatteryManager")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/Apps/Build/gather_and_modify_data/retrieving_battery_status_information">Retrieving battery status information - demo &amp; article</a></li>
 <li><a href="http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/">Hacks blog post - Using the Battery API</a></li>
</ul>
