---
title: WritableStreamDefaultWriter.write()
slug: Web/API/WritableStreamDefaultWriter/write
tags:
  - API
  - Experimental
  - Method
  - Reference
  - Streams
  - WritableStreamDefaultWriter
  - write
translation_of: Web/API/WritableStreamDefaultWriter/write
---
<p>{{APIRef("Streams")}}{{SeeCompatTable}}</p>

<p><span class="seoSummary">{{domxref("WritableStreamDefaultWriter")}} インターフェイスの <strong><code>write()</code></strong> プロパティは、渡されたデータのチャンクを {{domxref("WritableStream")}} とその基になるシンクに書き込み、その後、書き込み操作の成功または失敗を示すために解決される {{jsxref("Promise")}} を返します。</span></p>

<p>「成功」の意味は、基になるシンク次第であることに注意してください。 単にチャンクが受け入れられたことを示しているだけで、必ずしも最終的な宛先に安全に保存されているとは限りません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>promise</em> = <em>writableStreamDefaultWriter</em>.write(<em>chunk</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>chunk</dt>
 <dd><code>WritableStream</code> に渡すバイナリデータのブロック。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{jsxref("Promise")}}。 書き込みが成功すると <code>undefined</code> で満たされ、書き込みプロセスが開始される前に書き込みが失敗するかストリームがエラーになると拒否されます。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>対象のストリームは書き込み可能なストリームではないか、所有者がいません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例は、カスタムのシンクと API 提供のキューイング戦略を使用した <code>WritableStream</code> の作成を示しています。 次に、<code>sendMessage()</code> という関数を呼び出し、新しく作成されたストリームと文字列を渡します。 この関数内で、{{domxref("WritableStreamDefaultWriter")}} のインスタンスを返すストリームの <code>getWriter()</code> メソッドを呼び出します。 <code>forEach()</code> 呼び出しを使用して、文字列の各チャンクをストリームに書き込みます。 最後に、<code>write()</code> および <code>close()</code> は、チャンクとストリームの成功または失敗に対処するための promise を返します。</p>

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
   <td>{{SpecName('Streams','#default-writer-write','write()')}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.WritableStreamDefaultWriter.write")}}</p>
