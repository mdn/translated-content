---
title: WritableStream.getWriter()
slug: Web/API/WritableStream/getWriter
tags:
  - API
  - Experimental
  - Method
  - Reference
  - Streams
  - WritableStream
  - getWriter
translation_of: Web/API/WritableStream/getWriter
---
<div>{{SeeCompatTable}}{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("WritableStream")}} インターフェイスの <strong><code>getWriter()</code></strong> メソッドは、{{domxref("WritableStreamDefaultWriter")}} の新しいインスタンスを返し、そのインスタンスにストリームをロックします。 ストリームがロックされている間、このライターが開放されるまで他のライターを取得することはできません。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>writer</em> = <em>writableStream</em>.getWriter();</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("WritableStreamDefaultWriter")}} オブジェクトのインスタンス。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>ライターを作成しようとしているストリームは {{domxref("WritableStream")}} ではありません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例は、このインターフェイスのいくつかの機能を示しています。 カスタムのシンクと API 提供のキューイング戦略を使用した <code>WritableStream</code> の作成を示しています。 次に、<code>sendMessage()</code> という関数を呼び出し、新しく作成したストリームと文字列を渡します。 この関数内で、{{domxref("WritableStreamDefaultWriter")}} のインスタンスを返すストリームの <code>getWriter()</code> メソッドを呼び出します。 <code>forEach()</code> 呼び出しを使用して、文字列の各チャンクをストリームに書き込みます。 最後に、<code>write()</code> および <code>close()</code> は、チャンクとストリームの成功または失敗に対処するための promise を返します。</p>

<ul>
</ul>

<pre class="brush: js">const list = document.querySelector('ul');

function sendMessage(message, writableStream) {
  // defaultWriter は WritableStreamDefaultWriter 型です
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
  encoded.forEach((chunk) =&gt; {
    defaultWriter.ready
      .then(() =&gt; {
        return defaultWriter.write(chunk);
      })
      .then(() =&gt; {
        console.log("Chunk written to sink.");
      })
      .catch((err) =&gt; {
        console.log("Chunk error:", err);
      });
  });
  // ライターを閉じる前にすべてのチャンクが
  // 確実に書き込まれるように、ready を再度呼び出します。
  defaultWriter.ready
    .then(() =&gt; {
      defaultWriter.close();
    })
    .then(() =&gt; {
      console.log("All chunks written");
    })
    .catch((err) =&gt; {
      console.log("Stream error:", err);
    });
}

const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream({
  // シンクの実装
  write(chunk) {
    return new Promise((resolve, reject) =&gt; {
      var buffer = new ArrayBuffer(2);
      var view = new Uint16Array(buffer);
      view[0] = chunk;
      var decoded = decoder.decode(view, { stream: true });
      var listItem = document.createElement('li');
      listItem.textContent = "Chunk decoded: " + decoded;
      list.appendChild(listItem);
      result += decoded;
      resolve();
    });
  },
  close() {
    var listItem = document.createElement('li');
    listItem.textContent = "[MESSAGE RECEIVED] " + result;
    list.appendChild(listItem);
  },
  abort(err) {
    console.log("Sink error:", err);
  }
}, queuingStrategy);

sendMessage("Hello, world.", writableStream);</pre>

<p>完全なコードは、<a href="https://mdn.github.io/dom-examples/streams/simple-writer/">単純なライターの例</a>にあります。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#ws-get-writer","getWriter()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.WritableStream.getWriter")}}</p>
