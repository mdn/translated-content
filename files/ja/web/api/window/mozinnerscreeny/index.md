---
title: window.mozInnerScreenY
slug: Web/API/Window/mozInnerScreenY
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - Window
translation_of: Web/API/Window/mozInnerScreenY
---
<div>
 {{ApiRef}} {{gecko_minversion_header("1.9.2")}}</div>
<h2 id="Summary" name="Summary">概要</h2>

<p>ウィンドウのビューポートの左上隅の<em>スクリーン上の</em> Y 座標を取得します。</p>
<div class="note">
 <strong>注記:</strong> この座標はハードウェアピクセルではなく、CSS のピクセル単位で報告されます。つまり、ズームレベルによる影響を受けるということです。実際の物理的な画面のピクセル数を計算するには、 <a href="/ja/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils"><code>nsIDOMWindowUtils.screenPixelsPerCSSPixel</code></a> プロパティを使用する必要があります。</div>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>screenY</var> = window.mozInnerScreenY;</pre>
<h3 id="Value" name="Value">値</h3>
<ul>
 <li><var>screenY</var> : <code>window.mozInnerScreenY</code> プロパティの値となる</li>
 <li><var>window.mozInnerScreenY</var> : 浮動小数点数値。デフォルト値無し {{readonlyInline}}</li>
</ul>
<h2 id="Specification" name="Specification">仕様書</h2>
<p><abbr title="World Wide Web Consortium">W3C</abbr> の技術仕様書や勧告に含まれるものではありません。</p>
<h2 id="See_also" name="See_also">関連情報</h2>
<ul>
 <li>{{domxref("window.mozInnerScreenX")}}</li>
 <li><a href="/ja/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils"><code>nsIDOMWindowUtils.screenPixelsPerCSSPixel</code></a></li>
</ul>
