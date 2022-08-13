---
title: Window.scrollByLines()
slug: Web/API/Window/scrollByLines
tags:
- API
- HTML DOM
- Method
- Non-standard
- Reference
- Window
translation_of: Web/API/Window/scrollByLines
---
<div>{{ ApiRef() }} {{Non-standard_header}}</div>

<p><code><strong>Window.scrollByLines()</strong></code> メソッドは、指定された行数だけ文書をスクロールさせます。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">window.scrollByLines(<em>lines</em>)
</pre>

<h3 id="Parameters">引数</h3>

<ul>
  <li><code>lines</code> は文書をスクロールする行数です。これは正または負の整数を指定することができます。</li>
</ul>

<h2 id="Example">例</h2>

<pre class="brush:html">&lt;!-- 文書を 5 行だけ上方向にスクロールする --&gt;
&lt;button id="scroll-up" onclick="scrollByLines(-5);"&gt;Up 5 lines&lt;/button&gt;

&lt;!-- 文書を 5 行だけ下方向にスクロールする --&gt;
&lt;button id="scroll-down" onclick="scrollByLines(5);"&gt;Down 5 lines&lt;/button&gt;
</pre>

<h2 id="Specifications">仕様書</h2>

<p>どの仕様書にもありません。</p>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.scrollByLines")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("window.scroll()")}}</li>
  <li>{{domxref("window.scrollBy()")}}</li>
  <li>{{domxref("window.scrollByPages()")}}</li>
  <li>{{domxref("window.scrollTo()")}}</li>
</ul>
