---
title: WritableStreamDefaultWriter.ready
slug: Web/API/WritableStreamDefaultWriter/ready
tags:
  - API
  - Property
  - Ready
  - Reference
  - Streams
  - Streams API
  - WritableStream
  - WritableStreamDefaultWriter
translation_of: Web/API/WritableStreamDefaultWriter/ready
---
<p>{{SeeCompatTable}}{{APIRef("Streams")}}</p>

<p>{{domxref("WritableStreamDefaultWriter")}} インターフェイスの <strong><code>ready</code></strong> 読み取り専用プロパティは、ストリームの内部キューの目的のサイズが非正から正に移行したときに解決する {{jsxref("Promise")}} を返し、バックプレッシャーが適用されなくなったことを通知します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>promise</em> = <em>writableStreamDefaultWriter</em>.ready;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{jsxref("Promise")}}。</p>

<h2 id="Example" name="Example">例</h2>

<p>次の例は、<code>ready</code> プロパティの2つの使用法を示しています。 最初は <code>ready</code> を使用して、<code>WritableStream</code> が書き込みを完了し、バイナリチャンクを送信する前にデータを受信できるようにします。 2番目も、<code>WritableStream</code> の書き込みが完了しているかどうかをチェックしますが、今度はライターを閉じる前に書き込みを終了する必要があるためです。</p>

<pre class="brush: js">function sendMessage(message, writableStream) {
  // defaultWriter は WritableStreamDefaultWriter 型です
  var defaultWriter = writableStream.getWriter();
  var encoder = new TextEncoder();
  var encoded = encoder.encode(message, {stream: true});
  encoded.forEach(function(chunk) {
    // ストリームとそのライターがデータを
    // 受信できることを確認します。
    defaultWriter.ready
    .then(function() {
      defaultWriter.write(chunk)
      .then(function() {
        console.log("Chunk written to sink.);
      })
      .catch(function(err) {
        console.log("Chunk error: " + err);
      });
    });
    // ライターを閉じる前にすべてのチャンクが
    // 確実に書き込まれるように、ready を再度呼び出します。
    defaultWriter.ready
    .then(function() {
      defaultWriter.close()
      .then(function() {
        console.log("All chunks written");
      })
      .catch(function(err) {
        console.log("Stream error: " + err);
      });
    });
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
   <td>{{SpecName('Streams','#default-writer-ready','ready')}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.WritableStreamDefaultWriter.ready")}}</p>
