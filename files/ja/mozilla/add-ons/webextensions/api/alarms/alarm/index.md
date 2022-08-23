---
title: alarms.Alarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/Alarm
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - alarm
  - alarms
translation_of: Mozilla/Add-ons/WebExtensions/API/alarms/Alarm
---
<div>{{AddonSidebar()}}</div>

<p>単一のアラームに関する情報を含みます。このオブジェクトは {{WebExtAPIRef('alarms.get()')}} や {{WebExtAPIRef('alarms.getAll()')}} の戻り値として返されます。また、{{WebExtAPIRef('alarms.onAlarm')}} リスナに渡されることもあります。</p>

<h2 id="値の型">値の型</h2>

<p>この値の型はオブジェクトであり、以下のプロパティを含みます。</p>

<dl class="reference-values">
 <dt><code>name</code></dt>
 <dd><code>string</code>. アラームの名前（このアラームを生成した {{WebExtAPIRef('alarms.create()')}} の呼び出し時に渡された名前）を表します。</dd>
 <dt><code>scheduledTime</code></dt>
 <dd><code>double</code>. 次にアラームが発火する時刻（<a href="https://ja.wikipedia.org/wiki/UNIX%E6%99%82%E9%96%93">1970 年 1 月 1 日からの経過ミリ秒</a>）を表します。</dd>
 <dt><code>periodInMinutes</code>{{optional_inline}}</dt>
 <dd><code>double</code>. この値が <code>null</code> ではない場合、アラームが発火する周期を分単位で表します。</dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.alarms.Alarm")}}</p>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/alarms"><code>chrome.alarms</code></a> API に基づいています。</p>
</div>
