---
title: Navigator.geolocation
slug: Web/API/Navigator/geolocation
tags:
  - API
  - Geolocation API
  - Navigator
  - Property
  - Reference
  - Secure context
translation_of: Web/API/Navigator/geolocation
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<p><strong><code>Navigator.geolocation</code></strong> は読み取り専用のプロパティで、ウェブコンテンツが端末の位置情報にアクセスするための {{domxref("Geolocation")}} オブジェクトを返します。これにより、ウェブサイトやアプリがユーザーの現在の位置に応じた結果を提供できるようになります。</p>

<div class="note">
<p><strong>注:</strong> セキュリティ上の理由により、ウェブページが位置情報にアクセスしようとする時、ユーザーにアクセス許可が求められます。その方法やポリシーはブラウザーによって異なることに注意してください。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>geo</var> = <var>navigator</var>.geolocation
</pre>

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
   <td>{{SpecName('Geolocation', '#dom-navigator-geolocation', 'Navigator.geolocation')}}</td>
   <td>{{Spec2('Geolocation')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Navigator.geolocation")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API">Geolocation API の使用</a></li>
</ul>
