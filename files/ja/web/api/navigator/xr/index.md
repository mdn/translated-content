---
title: Navigator.xr
slug: Web/API/Navigator/xr
tags:
  - API
  - AR
  - Augmented Reality
  - Getter
  - Graphics
  - Navigator
  - Property
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - XR
translation_of: Web/API/Navigator/xr
---
<div>{{APIRef("WebXR Device API")}}</div>

<p><span class="seoSummary">{{domxref("Navigator")}} インターフェイスまたは {{domxref("WorkerNavigator")}} インターフェイスによって提供される <strong><code>xr</code></strong> 読み取り専用プロパティは、<a href="/ja/docs/Web/API/WebXR_Device_API">WebXR Device API</a> へのアクセスに使用できる {{domxref("XRSystem")}} オブジェクトを返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const <var>xr</var> = navigator.xr</pre>

<h3 id="Value" name="Value">値</h3>

<p>現在のコンテキストで <a href="/ja/docs/Web/API/WebXR_Device_API">WebXR Device API</a> とのインターフェイスに使用する {{domxref("XRSystem")}} オブジェクト。 これを使用して、拡張現実や仮想現実の画像をユーザーに提示することができます。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>各 {{domxref("Window")}} には独自の {{domxref("Navigator")}} のインスタンスがあり、{{domxref("Window.navigator","window.navigator")}} または単に {{domxref("Window.navigator", "navigator")}} としてアクセスできます。 同時に、新しい {{domxref("XRSystem")}} インスタンスも作成され、{{domxref("Navigator.xr", "navigator.xr")}} として <code>navigator</code> インスタンスにアタッチされます。 <code>xr</code> プロパティが存在する場合は、それを使用して <a href="/ja/docs/Web/API/WebXR_Device_API">WebXR Device API</a> にアクセスできます。</p>

<p>WebXR が利用可能かどうかを判断するには、次のようにします。</p>

<pre class="brush: js notranslate">if ("xr" in window.navigator) {
  /* WebXR can be used! */
} else {
  /* WebXR isn't available */
}
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("WebXR","#navigator-xr-attribute","Navigator.xr")}}</td>
   <td>{{Spec2("WebXR")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Navigator.xr")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebGL_API">WebGL API</a>: ウェブの 2D および 3D グラフィック</li>
 <li><a href="/ja/docs/Web/API/Canvas_API">Canvas API</a>: 簡単な 2D グラフィック API</li>
</ul>
