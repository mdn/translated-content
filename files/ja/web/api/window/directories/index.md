---
title: Window.directories
slug: Web/API/Window/directories
tags:
  - API
  - HTML DOM
  - NeedsCompatTable
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Deprecated
  - Property
  - Reference
  - Window
translation_of: Web/API/Window/directories
---
<p>{{APIRef()}}{{deprecated_header}}</p>

<div class="note notebox">
  <p><strong>注:</strong> このメソッドは Firefox 4 以降で削除されました。</p>
</div>

<h3 id="Summary">概要</h3>

<p>ウィンドウディレクトリのツールバーオブジェクトを返します。代わりに {{ domxref("window.personalbar") }} を使用してください。</p>

<h3 id="Syntax">構文</h3>

<pre class="javascript">var <var>dirBar</var> = window.directories;
</pre>

<h3 id="Parameters">引数</h3>

<p><var>dirBar</var> は <code>BarProp</code> 型のオブジェクトです。</p>

<h3 id="Example">例</h3>

<pre>&lt;script&gt;
 function dirs() {
  alert(window.directories);
 }
&lt;/script&gt;
</pre>

<h3 id="Specifications">仕様書</h3>

<p>仕様書には記載されていません。</p>
