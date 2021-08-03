---
title: ReadableStream.pipeTo()
slug: Web/API/ReadableStream/pipeTo
tags:
  - API
  - Experimental
  - Method
  - ReadableStream
  - Reference
  - Streams
  - pipeTo
translation_of: Web/API/ReadableStream/pipeTo
---
<div>{{SeeCompatTable}}{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("ReadableStream")}} インターフェイスの <strong><code>pipeTo()</code></strong> メソッドは、現在の <code>ReadableStream</code> を<span class="tlid-translation translation" lang="ja"><span title="">与えられた</span></span> {{domxref("WritableStream")}} にパイプし、パイプのプロセスが正常に完了した場合は満たされ、エラーが発生した場合は拒否する promise を返します。</span></p>

<p>ストリームをパイプすると、通常、パイプしている間はストリームがロックされ、他のリーダーがロックできなくなります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>promise</em> = <em>readableStream</em>.pipeTo(<em>destination</em>[, <em>options</em>]);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>destination</dt>
 <dd>{{domxref("ReadableStream")}} の最終的な宛先として機能する {{domxref("WritableStream")}}。</dd>
 <dt>options {{optional_inline}}</dt>
 <dd>ストリームのキャンセル、クローズ、または中止をいつ防止するかを定義できるプロパティを含むオプションのオブジェクト（すべて任意）。 オプションは次のとおりです。
 <ol>
  <li><code>preventClose</code>: これが <code>true</code> に設定されている場合、ソースの <code>ReadableStream</code> を閉じても、宛先の <code>WritableStream</code> は閉じられません。 このメソッドは、宛先を閉じるときにエラーが発生しない限り、このプロセスが完了すると満たされる promise を返します。</li>
  <li><code>preventAbort</code>: これが <code>true</code> に設定されている場合、ソースの <code>ReadableStream</code> のエラーは宛先の <code>WritableStream</code> を中止しません。 このメソッドは、ソースのエラー、または宛先の中止中に発生したエラーで拒否される promise を返します。</li>
  <li><code>preventCancel</code>: これが <code>true</code> に設定されている場合、宛先の <code>WritableStream</code> のエラーはソースの <code>ReadableStream</code> をキャンセルしなくなります。 この場合、メソッドは、ソースのエラー、またはソースのキャンセル中に発生したエラーで拒否される promise を返します。 さらに、宛先の書き込み可能なストリームが閉じた状態または閉じようとしている状態で開始した場合、ソースの読み取り可能なストリームはキャンセルされなくなります。 この場合、メソッドは、閉じたストリームへのパイプが失敗したことを示すエラー、またはソースのキャンセル中に発生したエラーで拒否される promise を返します。</li>
 </ol>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>パイプのプロセスが完了したときに解決する {{jsxref("Promise")}}。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd><code>writableStream</code> および/または <code>readableStream</code> オブジェクトは、書き込み可能なストリーム/読み取り可能なストリームではないか、ストリームの一方または両方がロックされています。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">// 元の画像をフェッチ
fetch('png-logo.png')
// その body を ReadableStream として取得
.then(response =&gt; response.body)
.then(body =&gt; body.pipeThrough(new PNGTransformStream()))
.then(rs =&gt; rs.pipeTo(new FinalDestinationStream()))</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#rs-pipe-to","pipeTo()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ReadableStream.pipeTo")}}</p>
