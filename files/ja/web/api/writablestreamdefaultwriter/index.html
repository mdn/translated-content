---
title: WritableStreamDefaultWriter
slug: Web/API/WritableStreamDefaultWriter
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - Streams
  - Streams API
  - WritableStream
translation_of: Web/API/WritableStreamDefaultWriter
---
<p>{{SeeCompatTable}}{{APIRef("Streams")}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Streams_API">Streams API</a> の <strong><code>WritableStreamDefaultWriter</code></strong> インターフェイスは、{{domxref("WritableStream.getWriter()")}} によって返されるオブジェクトであり、作成されるとライターを <code>WritableStream</code> にロックし、他のストリームが基になるシンクに書き込めないようにします。</span></p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("WritableStreamDefaultWriter.WritableStreamDefaultWriter", "WritableStreamDefaultWriter()")}}</dt>
 <dd>新しい <code>WritableStreamDefaultWriter</code> オブジェクトのインスタンスを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("WritableStreamDefaultWriter.closed")}}{{readonlyinline}}</dt>
 <dd>ストリーミングプロセスの終了に応答するコードを記述できます。 ストリームが閉じられるか、ライターのロックが解除されると満たされる promise を返します。 ストリームがエラーになると拒否します。</dd>
 <dt>{{domxref("WritableStreamDefaultWriter.desiredSize")}}{{readonlyinline}}</dt>
 <dd>ストリームの内部キューを満たすために必要な希望サイズを返します。</dd>
 <dt>{{domxref("WritableStreamDefaultWriter.ready")}}{{readonlyinline}}</dt>
 <dd>ストリームの内部キューの希望サイズが非正から正に移行したときに解決する {{jsxref("Promise")}} を返し、バックプレッシャーが適用されなくなったことを通知します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("WritableStreamDefaultWriter.abort()")}}</dt>
 <dd>ストリームを中止し、プロデューサーがストリームに正常に書き込むことができなくなり、キューに入れられた書き込みを破棄してすぐにエラー状態に移行することを通知します。</dd>
 <dt>{{domxref("WritableStreamDefaultWriter.close()")}}</dt>
 <dd>関連する書き込み可能なストリームを閉じます。</dd>
 <dt>{{domxref("WritableStreamDefaultWriter.releaseLock()")}}</dt>
 <dd>対応するストリームのライターのロックを解除します。 ロックを解除すると、ライターはアクティブではなくなります。 ロックを解除したときに関連するストリームにエラーが発生した場合、ライターはこれ以降同じようにエラーが発生したように見えます。 そうでない場合、ライターは閉じられたように見えます。</dd>
 <dt>{{domxref("WritableStreamDefaultWriter.write()")}}</dt>
 <dd>渡されたデータのチャンクを {{domxref("WritableStream")}} とその基になるシンクに書き込んでから、書き込み操作の成功または失敗を示すために解決する {{jsxref("Promise")}} を返します。</dd>
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
   <td>{{SpecName('Streams','#default-writer-class','WritableStreamDefaultWriter')}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.WritableStreamDefaultWriter")}}</p>
