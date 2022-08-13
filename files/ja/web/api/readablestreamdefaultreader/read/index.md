---
title: ReadableStreamDefaultReader.read()
slug: Web/API/ReadableStreamDefaultReader/read
tags:
  - API
  - Method
  - ReadableStreamDefaultReader
  - Reference
  - Streams
  - read
translation_of: Web/API/ReadableStreamDefaultReader/read
---
<div>{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("ReadableStreamDefaultReader")}} インターフェイスの <strong><code>read()</code></strong> メソッドは、ストリームの内部キュー内の次のチャンクへのアクセスを提供する promise を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>promise</em> = <em>readableStreamDefaultReader</em>.read();</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{jsxref("Promise")}}。ストリームの状態に応じて結果を充足/拒否します。 異なる可能性は次のとおりです。</p>

<ul>
 <li>チャンクが使用可能な場合、<code>{ value: theChunk, done: false }</code> の形式のオブジェクトで promise が満たされます。</li>
 <li>ストリームが閉じられると、<code>{ value: undefined, done: true }</code> という形式のオブジェクトで promise が満たされます。</li>
 <li>ストリームがエラーになると、関連するエラーで promise が拒否されます。</li>
</ul>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>ソースオブジェクトが <code>ReadableStreamDefaultReader</code> ではないか、ストリームに所有者がいません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Example_1_-_simple_example" name="Example_1_-_simple_example">例 1 - 簡単な例</h3>

<p>この例は、基本的な API の使用方法を示していますが、例えば、行の境界で終了しないストリームチャンクなどの複雑な問題には対処しません。</p>

<p>この例では、<code>stream</code> は以前に作成したカスタムの <code>ReadableStream</code> です。 <code>getReader()</code> を使用して作成した {{domxref("ReadableStreamDefaultReader")}} を使用して読み取ります（完全なコードについては、<a href="https://mdn.github.io/dom-examples/streams/simple-random-stream/">単純なランダムストリームの例</a>を参照）。 各チャンクを順番に読み取り、ストリームの読み取りが完了するまで UTF-8 のバイトの配列として UI に出力します。 ストリームの読み取りが完了すると、再帰関数から戻り、ストリーム全体を UI の別の部分に出力します。</p>

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

<h3 id="Example_2_-_handling_text_line_by_line" name="Example_2_-_handling_text_line_by_line">例 2 - テキストを1行ずつ処理する</h3>

<p>この例は、テキストファイルをフェッチし、テキスト行のストリームとして処理する方法を示しています。 行の境界で終了せず、<code>Uint8Array</code> から文字列に変換するストリームチャンクを処理します。</p>

<pre class="brush: js">async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  let response = await fetch(fileURL);
  let reader = response.body.getReader();
  let {value: chunk, done: readerDone} = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : "";

  let re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({value: chunk, done: readerDone} = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex &lt; chunk.length) {
    // 最後の行は改行文字で終わっていません
    yield chunk.substr(startIndex);
  }
}

for await (let line of makeTextFileLineIterator(urlOfFile)) {
  processLine(line);
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
   <td>{{SpecName("Streams","#default-reader-read","read()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ReadableStreamDefaultReader.read")}}</p>
