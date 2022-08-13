---
title: window.cancelAnimationFrame
slug: Web/API/Window/cancelAnimationFrame
tags:
  - API
  - DOM
  - Method
translation_of: Web/API/Window/cancelAnimationFrame
---
<div>{{APIRef}}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p>{{domxref("window.requestAnimationFrame()")}} の呼び出しによりスケジュールされたフレームアニメーションのリクエストをキャンセルします。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">window.cancelAnimationFrame(<em>requestID</em>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>requestID</code></dt>
 <dd>コールバックがリクエストした {{domxref("window.requestAnimationFrame()")}} の呼び出しにより返された ID 値。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var start = window.mozAnimationStartTime;  // Firefox のみでサポート。他のブラウザーでは代わりに Date.now() などを使用してください。

var myReq;

function step(timestamp) {
  var progress = timestamp - start;
  d.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress &lt; 2000) {
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);

cancelAnimationFrame(myReq);
</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<p>{{Compat("api.Window.cancelAnimationFrame")}}</p>

<h2 id="Specification" name="Specification">仕様</h2>

<ul>
 <li>{{spec("http://www.w3.org/TR/animation-timing/#cancelAnimationFrame", "Timing control for script-based animations: cancelAnimationFrame", "WD")}}</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("window.mozAnimationStartTime")}}</li>
 <li>{{domxref("window.requestAnimationFrame()")}}</li>
</ul>
