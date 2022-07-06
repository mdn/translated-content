---
title: Navigator.getBattery()
slug: Web/API/Navigator/getBattery
tags:
  - API
  - Battery API
  - Device API
  - Method
  - Navigator
  - Reference
  - getBattery
  - メッセージ
translation_of: Web/API/Navigator/getBattery
---
<div>{{ ApiRef("Battery API") }}{{deprecated_header}}</div>

<p><strong><code>getBattery()</code></strong> メソッドは、システムのバッテリーに関する情報を提供します。これは {{domxref("BatteryManager")}} オブジェクトで解決されるバッテリーの promise を返し、バッテリーの状態を監視するために処理できるいくつかの新しいイベントを提供します。これは <a href="/ja/docs/WebAPI/Battery_Status" title="/ja/docs/WebAPI/Battery_Status">Battery Status API</a> を実装しています。詳細、API の使用ガイド、サンプルコードについては、そのドキュメントを参照してください。</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> ブラウザーによっては、この機能へのアクセスは {{HTTPHeader("Feature-Policy")}} の {{HTTPHeader("Feature-Policy/battery","battery")}} ディレクティブで制御されます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>batteryPromise</em> = navigator.getBattery();</pre>

<h3 id="Return_value" name="Return_value">Return value</h3>

<p>解決されると、バッテリーの状態に関する情報を取得するために使用できる {{DOMxRef("BatteryManager")}} オブジェクトを単一の引数として持つフルフィルメントハンドラーを呼び出す {{JSxRef("Promise")}} です。</p>

<h2 id="Exceptions" name="Exceptions">例外</h2>

<p>このメソッドは真の例外を発生させません。代わりに、返されたプロミスが拒否され、 {{domxref("DOMException")}} の中に <code>name</code> を次のうちの一つに設定します。</p>

<dl>
 <dt><code>SecurityError</code></dt>
 <dd>ユーザーエージェントは安全でないコンテキストではバッテリー情報を公開しませんが、このメソッドが安全でないコンテキストから呼び出されました。<br>
 <strong>メモ:</strong> 一部のユーザーエージェントの古いバージョンでは、安全でないコンテキストでこの機能の利用を許可していることがあります。</dd>
 <dt><code>NotAllowedError</code></dt>
 <dd><strong>メモ:</strong> 現在この例外を発生させるユーザーエージェントはありませんが、仕様書では以下のような動作が記述されています。<br>
 この文書ではこの機能の使用が許可されていません。例えば、 {{HTTPHeader("Feature-Policy")}} {{HTTPHeader("Feature-Policy/battery", "battery")}} 機能を介して明示的に許可されてなかったり、制限されていたりした場合です。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>この例では、バッテリーの現在の充電状態を取得し、充電状態が変化するたびに充電状態が記録されるように、 {{Event("chargingchange")}} イベントのハンドラーを確立します。</p>

<pre class="brush: js">let batteryIsCharging = false;

navigator.getBattery().then(function(battery) {
  batteryIsCharging = battery.charging;

  battery.addEventListener('chargingchange', function() {
    batteryIsCharging = battery.charging;
  });
});</pre>

<p>Battery Status API をご覧ください。</p>



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
   <td>{{SpecName("Battery API", "#dom-navigator-getbattery", "Navigator.getBattery()")}}</td>
   <td>{{Spec2("Battery API")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Navigator.getBattery")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/WebAPI/Battery_Status" title="/ja/docs/WebAPI/Battery_Status">Battery Status API</a></li>
 <li><code>Feature-Policy</code> の {{HTTPHeader("Feature-Policy/battery", "battery")}} 機能</li>
</ul>
