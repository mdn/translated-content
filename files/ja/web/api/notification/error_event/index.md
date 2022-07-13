---
title: Notification.onerror
slug: Web/API/Notification/error_event
tags:
  - API
  - DOM
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - onerror
  - プロパティ
  - 通知
translation_of: Web/API/Notification/onerror
original_slug: Web/API/Notification/onerror
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

<strong><code>onerror</code></strong> は {{domxref("Notification")}} インターフェイスのプロパティで、 {{domxref("HTMLElement/error_event", "error")}} イベントを受信するイベントリスナーを指定します。これらのイベントは {{domxref("Notification")}} が失敗したとき (多くの場合は通知の表示が阻止されたというエラーの場合) に発生します。

## 構文

<pre class="syntaxbox notranslate"><var>Notification</var>.onerror = function() { ... };</pre>

## 仕様書

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
   <td>{{SpecName('Web Notifications','#dom-notification-onerror','onerror')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

## ブラウザーの互換性

{{Compat("api.Notification.onerror")}}

## 関連情報

<ul>
 <li>{{domxref("Notification")}}</li>
 <li><a href="/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API">通知 API の使用</a></li>
</ul>
