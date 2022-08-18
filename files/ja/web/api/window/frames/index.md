---
title: Window.frames
slug: Web/API/Window/frames
tags:
  - API
  - Gecko
  - HTML DOM
  - NeedsContent
  - NeedsUpdate
  - Property
  - Reference
  - Window
  - プロパティ
translation_of: Web/API/Window/frames
---
<div>{{APIRef("DOM")}}</div>

<p>ウィンドウ自体を、現在のウィンドウの直接のサブフレームを列挙した配列風オブジェクトとして返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>frameList</var> = window.frames;
</pre>

<ul>
 <li><code><var>frameList</var></code> は、フレームオブジェクトのリストを返します。これは配列と似ており、 <code>length</code> プロパティを持ち、要素に <code>[i]</code> 表記を使ってアクセスできます。</li>
 <li><code>frameList === window</code> は真と評価されます。</li>
 <li>window.frames 擬似配列の各要素は {{domxref("Window")}} オブジェクトであり、 {{HTMLElement("frame")}} または {{HTMLElement("iframe")}} の内容に対応します。 (i)frame の DOM 要素ではありません (つまり <code>window.frames[0]</code> は <code>document.getElementsByTagName("iframe")[0].contentWindow</code> と同じことです)。</li>
 <li>返値についての詳細は、 <a class="external" href="http://groups.google.com/group/mozilla.dev.platform/browse_thread/thread/5628c6f346859d4f/169aa7004565066?hl=en&amp;ie=UTF-8&amp;oe=utf-8&amp;q=window.frames&amp;pli=1">mozilla.dev.platform のスレッド</a>を参照してください。</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">var frames = window.frames; // or // var frames = window.parent.frames;
for (var i = 0; i &lt; frames.length; i++) {
  // frames[i] で各サブフレームに何らかの処理をします
  frames[i].document.body.style.background = "red";
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="spectable standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("HTML WHATWG", "browsers.html#dom-frames", "Window.frames")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "browsers.html#dom-frames", "Window.frames")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.frames")}}</p>
