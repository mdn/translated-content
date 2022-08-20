---
title: ReadableStreamDefaultReader.ReadableStreamDefaultReader()
slug: Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader
tags:
  - API
  - Constructor
  - ReadableStreamDefaultReader
  - Reference
  - Streams
translation_of: Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader
---
<div>{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary"><strong><code>ReadableStreamDefaultReader()</code></strong> コンストラクターは、<code>ReadableStreamDefaultReader</code> オブジェクトのインスタンスを作成して返します。</span></p>

<div class="note">
<p><strong>注</strong>: 通常、このコンストラクターを手動で使用することはありません。 代わりに、{{domxref("ReadableStream.getReader()")}}) メソッドを使用します。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>readableStreamDefaultReader</em> = new ReadableStreamDefaultReader(<em>stream</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>stream</dt>
 <dd>読み取られる {{domxref("ReadableStream")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("ReadableStreamDefaultReader")}} オブジェクトのインスタンス。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>指定された <code>stream</code> パラメーターは {{domxref("ReadableStream")}} ではないか、別のリーダーによる読み取りのために既にロックされています。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の簡単な例では、<code>getReader()</code> を使用して作成した {{domxref("ReadableStreamDefaultReader")}} を使用して、以前に作成したカスタムの <code>ReadableStream</code> を読み取ります（完全なコードについては、<a href="https://mdn.github.io/dom-examples/streams/simple-random-stream/">単純なランダムストリームの例</a>を参照）。 各チャンクを順番に読み取り、ストリームの読み取りが完了するまで UI に出力します。 ストリームの読み取りが完了すると、再帰関数から戻り、ストリーム全体を UI の別の部分に出力します。</p>

<pre class="brush: js">function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() は、値を受け取ったときに解決する promise を返します
  reader.read().then(function processText({ done, value }) {
    // 結果オブジェクトには2つのプロパティが含まれます。
    // done  - ストリームがすべてのデータを既に提供している場合は true。
    // value - 一部のデータ。 done が true の場合、常に undefined。
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }

    // フェッチしたストリームの値は Uint8Array です
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement('li');
    listItem.textContent = 'Received ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
    list2.appendChild(listItem);

    result += chunk;

    // さらに読み、この関数を再度呼び出します
    return reader.read().then(processText);
  });
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#default-reader-constructor","ReadableStreamDefaultReader()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ReadableStreamDefaultReader.ReadableStreamDefaultReader")}}</p>
