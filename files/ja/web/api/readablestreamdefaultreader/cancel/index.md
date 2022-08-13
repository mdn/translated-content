---
title: ReadableStreamDefaultReader.cancel()
slug: Web/API/ReadableStreamDefaultReader/cancel
tags:
  - API
  - Method
  - ReadableStreamDefaultReader
  - Reference
  - Streams
  - cancel
translation_of: Web/API/ReadableStreamDefaultReader/cancel
---
<div>{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("ReadableStreamDefaultReader")}} インターフェイスの <strong><code>cancel()</code></strong> メソッドはストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された reason 引数は、基になるソースに与えられ、使用する場合もしない場合もあります。</span></p>

<p>キャンセルは、ストリームを完全に終了し、読み取り待ちのチャンクがキューに入っている場合でも、それ以上データを必要としない場合に使用します。 キャンセルが呼び出された後、そのデータは失われ、ストリームは読み取り不能になります。 これらのチャンクをまだ読み取り、ストリームを完全に取り除くわけではない場合は、{{domxref("ReadableStreamDefaultController.close()")}} を使用します。</p>

<div class="note"><strong>注</strong>: リーダーがアクティブな場合、<code>cancel()</code> メソッドは、関連付けられたストリームの場合（{{domxref("ReadableStream.cancel()")}}）と同じように振る舞います。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>promise</em> = <em>readableStreamDefaultReader</em>.cancel(<em>reason</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>reason {{optional_inline}}</dt>
 <dd>人間が読むことができるキャンセルの理由を提供する {{domxref("DOMString")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{jsxref("Promise")}}。 <code>reason</code> パラメーターで指定された値で満たされます。</p>

<h3 id="Exceptions" name="Exceptions">Exceptions</h3>

<dl>
 <dt>TypeError</dt>
 <dd>ソースオブジェクトが <code>ReadableStreamDefaultReader</code> ではないか、ストリームに所有者がいません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の簡単な例では、<code>getReader()</code> を使用して作成した {{domxref("ReadableStreamDefaultReader")}} を使用して、以前に作成したカスタムの <code>ReadableStream</code> を読み取ります（このコードは、<a href="https://mdn.github.io/dom-examples/streams/simple-random-stream/">単純なランダムストリームの例</a>に基づいています）。 各チャンクを順番に読み取り、ストリームの読み取りが完了するまで UI に出力します。 ストリームの読み取りが完了すると、再帰関数から戻り、ストリーム全体を UI の別の部分に出力します。</p>

<p>ストリームが完了したら（<code>if (done)</code>）、<code>reader.cancel()</code> を実行してストリームをキャンセルし、それ以上使用する必要がないことを通知します。</p>

<pre class="brush: js">function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() は、値を受け取ったときに解決する promise を返します
  reader.read().then(function processText({ done, value }) {
    // 結果オブジェクトには2つのプロパティが含まれます
    // done  - ストリームがすべてのデータを既に提供している場合は true
    // value - 一部のデータ。 done が true の場合、常に undefined
    if (done) {
      console.log("Stream complete");
      reader.cancel();
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
   <td>{{SpecName("Streams","#default-reader-cancel","cancel()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ReadableStreamDefaultReader.cancel")}}</p>
