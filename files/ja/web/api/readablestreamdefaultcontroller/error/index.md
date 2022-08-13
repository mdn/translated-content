---
title: ReadableStreamDefaultController.error()
slug: Web/API/ReadableStreamDefaultController/error
tags:
  - API
  - Error
  - Method
  - ReadableStreamDefaultController
  - Reference
  - Streams
translation_of: Web/API/ReadableStreamDefaultController/error
---
<div>{{APIRef("Streams")}}</div>

<p class="summary">{{domxref("ReadableStreamDefaultController")}} インターフェイスの <strong><code>error()</code></strong> メソッドにより、関連するストリームとの今後のやり取りがエラーになります。</p>

<div class="blockIndicator note">
<p class="summary"><strong>注</strong>: <code>error()</code> メソッドは複数回呼び出すことができ、ストリームが読み取り可能でないときに呼び出すことができます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>readableStreamDefaultController</em>.error(<em>e</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><em>e</em></dt>
 <dd>今後のやり取りを失敗させるエラー。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code>。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>ソースオブジェクトが <code>ReadableStreamDefaultController</code> ではないか、何らかの理由でストリームが読み取り可能ではありません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>仕様にある<a href="https://streams.spec.whatwg.org/#example-rs-push-backpressure">基になるプッシュソースとバックプレッシャーサポートのある読み取り可能なストリーム</a>の例は、{{domxref("ReadablestreamDefaultController.desiredSize")}} を使用してストリームがいっぱいになったことを手動で検出し、バックプレッシャーを適用しています。 また、<code>error()</code> を使用して、依存しているシステムの別の部分に障害が発生した場合に手動でストリームのエラーをトリガーする良い例を示しています。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#rs-default-controller-error","error()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ReadableStreamDefaultController.error")}}</p>
