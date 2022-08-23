---
title: alarms.onAlarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - alarms
  - onAlarm
translation_of: Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm
---
<div>{{AddonSidebar()}}</div>

<p>アドオンによってアラームが動作した際に発火します。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.alarms.onAlarm.addListener(function(
  alarm      // Alarm
) {...})
browser.alarms.onAlarm.removeListener(listener)
browser.alarms.onAlarm.hasListener(listener)
</pre>

<p>このイベントには 3 つのメソッドが用意されています。</p>

<dl>
 <dt><code>addListener(callback)</code></dt>
 <dd>イベントリスナを追加します。</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>イベントリスナを削除します。引数 <code>listener</code> には削除したいリスナを指定します。</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd><code>listener</code> がイベントリスナとして登録されているか確認します。登録されていれば <code>true</code> を、それ以外の場合は <code>false</code> を返します。</dd>
</dl>

<h2 id="addListener_の構文">addListener の構文</h2>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>このイベントが発火した際に呼び出される関数を指定します。この関数には以下の引数が渡ります。</p>

 <dl class="reference-values">
  <dt><code>alarm</code></dt>
  <dd>発火するアラーム {{WebExtAPIRef('alarms.Alarm')}} が入ります。発火したアラームを判別するには <code>Alarm.name</code> が利用できます。</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.alarms.onAlarm")}}</p>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/alarms"><code>chrome.alarms</code></a> API に基づいています。</p>
</div>
