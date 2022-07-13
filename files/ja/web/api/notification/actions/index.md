---
title: Notification.actions
slug: Web/API/Notification/actions
tags:
  - API
  - DOM
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - actions
  - プロパティ
  - 通知
translation_of: Web/API/Notification/actions
---
<p>{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<p><span class="seoSummary"><strong><code>actions</code></strong> は {{domxref("Notification")}} インターフェイスの読取専用プロパティで、 {{domxref("Notification.Notification","Notification()")}} コンストラクターの <code>actions</code> オプションで指定された {{domxref("NotificationAction")}} オブジェクトのリストを返します。</span>これは、通知のコンテキストでユーザーが直接選択することができる、アプリケーション定義のアクションのリストです。</p>

<div class="blockIndicator note">
<p><strong>注:</strong> 端末やユーザーエージェントによっては、 (例えば、画面の空間の制約により) 限られた数のアクションしか表示できないことがあります。この制限は {{DOMxRef("Notification.maxActions")}} で推測することができます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>actions</var>[] = <var>Notification</var>.actions;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("NotificationAction")}} オブジェクトの読取専用の配列で、それぞれの要素が通知の中でユーザーが選択することができる単一のアクションを記述したものです。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Notifications','#dom-notification-actions','actions')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Notification.actions")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API">通知 API の使用</a></li>
 <li>{{DOMxRef("Notification.maxActions")}}</li>
</ul>
