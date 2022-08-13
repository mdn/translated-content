---
title: Document.createRange()
slug: Web/API/Document/createRange
tags:
  - API
  - DOM
  - DOM Reference
  - Document
  - DocumentRange.createRange
  - Method
  - Range
translation_of: Web/API/Document/createRange
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>Document.createRange()</strong></code> メソッドは、新しい {{domxref("Range")}} オブジェクトを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>range</var> = document.createRange();
</pre>

<p><var>range</var> は生成された {{domxref("Range")}} オブジェクトです。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js notranslate">let range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
</pre>

<h2 id="Notes" name="Notes">注</h2>

<p><code>Range</code> を生成したあと、大部分のメソッドを使用するには境界を設定する必要があります。</p>

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
   <td>{{SpecName('DOM WHATWG', '#dom-document-createrange', 'document.createRange')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.Document.createRange")}}</div>
