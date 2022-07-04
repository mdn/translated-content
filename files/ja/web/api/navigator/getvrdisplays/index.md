---
title: Navigator.getVRDisplays()
slug: Web/API/Navigator/getVRDisplays
tags:
  - API
  - Experimental
  - HTML DOM
  - Media
  - Method
  - Navigator
  - Reference
  - VR
  - Virtual Reality
  - WebVR
  - getVRDisplays()
translation_of: Web/API/Navigator/getVRDisplays
---
<div>{{DefaultAPISidebar("WebVR API")}}{{Obsolete_header}}</div>

<p><strong><code>getVRDisplays()</code></strong> は {{domxref("Navigator")}} インターフェイスのメソッドで、コンピューターに接続されている利用可能な VR 機器を表す {{domxref("VRDisplay")}} オブジェクトの配列へ解決するためのプロミスを返します．</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">navigator.getVRDisplays().then(function(displays) {
  // 利用可能な VR display で何かする
});</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_values" name="Return_values">返値</h3>

<p>{{domxref("VRDisplay")}} オブジェクトの配列へ解決するためのプロミスです。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>{{page("/Web/API/VRDisplay", "Examples")}}</p>

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
   <td>{{SpecName("WebVR 1.1", '#navigator-getvrdisplays-attribute', 'getVRDisplays()')}}</td>
   <td>{{Spec2("WebVR 1.1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Navigator.getVRDisplays")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API ホームページ</a></li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — Mozilla VRチームのデモ，ダウンロード，その他のリソース．</li>
</ul>
