---
title: Notification.data
slug: Web/API/Notification/data
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - data
  - プロパティ
  - 通知
translation_of: Web/API/Notification/data
---
<p>{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<p><strong><code>data</code></strong> は {{domxref("Notification")}} インターフェイスの読取専用プロパティで、 {{domxref("Notification.Notification","Notification()")}} コンストラクターの <code>data</code> オプションで指定された通知の構造化されたデータのクローンを返します。</p>

<p>通知のデータは、通知と関連付けたい任意のデータを使用することができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>data</var> = <var>Notification</var>.data;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>構造化されたクローン。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>次のスニペットは通知を発行します。単純な <code>options</code> オブジェクトを生成し、それから <code>Notification()</code> コンストラクターを使用して通知を発行します。</p>

<pre class="brush: js notranslate">var options = {
  body: 'Do you like my body?',
  data: 'I like peas.'
}

var n = new Notification('Test notification',options);

console.log(n.data) // should return 'I like peas.'</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Notifications','#dom-notification-data','data')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Notification.data")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API">通知 API の使用</a></li>
</ul>
