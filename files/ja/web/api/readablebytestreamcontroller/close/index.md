---
title: ReadableByteStreamController.close()
slug: Web/API/ReadableByteStreamController/close
tags:
  - API
  - Experimental
  - Method
  - ReadableByteStreamController
  - Reference
  - Streams
  - close
translation_of: Web/API/ReadableByteStreamController/close
---
<div>{{SeeCompatTable}}{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("ReadableByteStreamController")}} インターフェイスの <strong><code>close()</code></strong> メソッドは、関連するストリームを閉じます。</span></p>

<div class="note">
<p><strong>注</strong>: リーダーは、以前にキューに入れられたチャンクをストリームから読み取ることができますが、それらを読み取とってしまうとストリームは閉じられます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>readableByteStreamController</em>.close();</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code>。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>ソースオブジェクトが <code>ReadableByteStreamController</code> ではないか、何らかの理由でストリームが読み取り可能ではありません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>未定。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#rbs-controller-close","close()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ReadableByteStreamController.close")}}</p>
