---
title: Screen.orientation
slug: Web/API/Screen/orientation
tags:
  - API
  - CSSOM View
  - Experimental
  - Orientation
  - Property
  - Read-only
  - Screen Orientation
  - screen
translation_of: Web/API/Screen/orientation
---
<div>{{APIRef("Screen Orientation API")}}{{SeeCompatTable}}</div>

<p><strong><code>orientation</code></strong> は {{DOMxRef("Screen")}} インターフェイスの読み取り専用プロパティで、現在の画面の向きを返します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">var <var>orientation</var> = window.screen.orientation;</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>画面の向きを表す {{DOMxRef("ScreenOrientation")}} のインスタンスです。</p>

<p>なお、古い接頭辞付きのものは {{DOMxRef("DOMString")}} で {{DOMxRef("ScreenOrientation.type")}} と同等のものを返していました。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var orientation = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type;

if (orientation === "landscape-primary") {
  console.log("良い感じですね。");
} else if (orientation === "landscape-secondary") {
  console.log("うーん…。画面が上下逆です！");
} else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
  console.log("うーん…。スクリーンを横向きにした方がいいですよ");
} else if (orientation === undefined) {
  console.log("このブラウザーは orientation API に対応していません :(");
}
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
   <td>{{SpecName('Screen Orientation', '#dom-screen-orientation', 'orientation')}}</td>
   <td>{{Spec2('Screen Orientation')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Screen.orientation")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{DOMxRef("ScreenOrientation")}}</li>
 <li>{{DOMxRef("Screen.onorientationchange")}}</li>
 <li><a href="/ja/docs/Managing_screen_orientation">画面の向きの制御</a></li>
</ul>
