---
title: ReadableStream.pipeThrough()
slug: Web/API/ReadableStream/pipeThrough
tags:
  - API
  - Experimental
  - Method
  - ReadableStream
  - Reference
  - Streams
  - pipeThrough
translation_of: Web/API/ReadableStream/pipeThrough
---
<div>{{SeeCompatTable}}{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("ReadableStream")}} インターフェイスの <strong><code>pipeThrough()</code></strong> メソッドは、変換ストリームまたはその他の書き込み可能/読み取り可能なペアを介して現在のストリームをパイプするチェーン可能な方法を提供します。</span></p>

<p>ストリームをパイプすると、通常、パイプしている間はストリームがロックされ、他のリーダーがロックできなくなります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>transformedStream</em> = <em>readableStream</em>.pipeThrough(<em>transformStream</em>[, <em>options</em>]);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>transformStream</dt>
 <dd>読み取り可能なストリームと書き込み可能なストリームで構成され、データをある形式から別の形式に変換する {{domxref("TransformStream")}}（または構造 <code>{writable, readable}</code> のオブジェクト）。 書き込み可能なストリーム（<code>writable</code> stream）に書き込まれたデータは、読み取り可能なストリーム（<code>readable</code> stream）によって何らかの変換された状態で読み取ることができます。 例えば、{{domxref("TextDecoder")}} ではバイトが書き込まれ、そこから文字列が読み取られ、動画デコーダーではエンコードされたバイトが書き込まれ、非圧縮動画フレームが読み取られます。</dd>
 <dt>options {{optional_inline}}</dt>
 <dd>書き込み可能なストリーム（<code>writable</code> stream）にパイプするときに使用するオプション。 {{domxref("ReadableStream.pipeTo","pipeTo")}}<code>(writable, options)</code> のような呼び出しで使用されます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>transformStream</code> の <code>readable</code> 側。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd><code>transformStream</code> の <code>writable</code> および/または <code>readable</code> プロパティは未定義です。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例（ライブ実行中の完全なコードについては <a href="https://mdn.github.io/dom-examples/streams/png-transform-stream/">PNG のチャンクをアンパック</a>、ソースコードについては <a href="https://github.com/mdn/dom-examples/tree/master/streams/png-transform-stream">png-transform-stream</a> を参照）では、画像が取得され、そのボディが {{domxref("ReadableStream")}} として取得されます。 次に、読み取り可能なストリームのコンテンツをログに記録し、<code>pipeThrough()</code> を使用して、グレースケールバージョンのストリームを作成する新しい関数に送信し、新しいストリームのコンテンツもログに記録します。</p>

<pre class="brush: js">// 元の画像をフェッチ
fetch('png-logo.png')
// その body を ReadableStream として取得
.then(response =&gt; response.body)
.then(rs =&gt; logReadableStream('Fetch Response Stream', rs))
// 元の画像からグレースケール PNG ストリームを作成
.then(body =&gt; body.pipeThrough(new PNGTransformStream()))
.then(rs =&gt; logReadableStream('PNG Chunk Stream', rs))</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#rs-pipe-through","pipeThrough()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ReadableStream.pipeThrough")}}</p>
