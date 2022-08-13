---
title: WritableStream
slug: Web/API/WritableStream
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - Streams
  - WritableStream
translation_of: Web/API/WritableStream
---
<p>{{SeeCompatTable}}{{APIRef("Streams")}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Streams_API">Streams API</a> の <strong><code>WritableStream</code></strong> インターフェイスは、ストリーミングデータをシンクと呼ばれる宛先に書き込むための標準的な抽象化を提供します。 このオブジェクトには、バックプレッシャーとキューイングが組み込まれています。</span></p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("WritableStream.WritableStream", "WritableStream()")}}</dt>
 <dd>新しい <code>WritableStream</code> オブジェクトを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("WritableStream.locked")}} {{readonlyinline}}</dt>
 <dd><code>WritableStream</code> がライターにロックされているかどうかを示すブール値。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("WritableStream.abort()")}}</dt>
 <dd>ストリームを中止し、プロデューサーがストリームに正常に書き込むことができなくなり、キューに入れられた書き込みが破棄されてすぐにエラー状態に移行することを通知します。</dd>
 <dt>{{domxref("WritableStream.close()")}}</dt>
 <dd>ストリームを閉じます。</dd>
 <dt>{{domxref("WritableStream.getWriter()")}}</dt>
 <dd>{{domxref("WritableStreamDefaultWriter")}} の新しいインスタンスを返し、そのインスタンスにストリームをロックします。 ストリームがロックされている間、このライターが開放されるまで他のライターを取得することはできません。</dd>
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

<h3 id="Backpressure" name="Backpressure">バックプレッシャー</h3>

<p>API でのバックプレッシャーのサポート方法により、コードでの実装は明白ではありません。 バックプレッシャーがどのように実装されているかを確認するには、3つのことを探します。</p>

<ul>
 <li>カウント戦略の作成時に設定される <code>highWaterMark</code> プロパティ（行35）は、<code>WritableStream</code> インスタンスが1回の <code>write()</code> 操作で処理するデータの最大量を設定します。 この例では、<code>defaultWriter.write()</code> に送信できるデータの最大量です（11行目）。</li>
 <li><code>defaultWriter.ready</code> プロパティは、シンク（<code>WritableStream</code> コンストラクターの最初のプロパティ）がデータの書き込みを完了すると解決するプロミスを返します。 データソースは、さらにデータを書き込む（11行目）か、<code>close()</code> （24行目）を呼び出すことができます。 <code>close()</code> の呼び出しが早すぎると、データの書き込みが妨げられる可能性があります。 このため、この例では <code>defaultWriter.ready</code> を2回呼び出しています（9行目と22行目）。</li>
 <li>シンクの <code>write()</code> メソッドによって返される {{jsxref("Promise")}}（40行目）は、<code>WritableStream</code> とそのライターに、いつ <code>defaultWriter.ready</code> を解決するかを伝えます。</li>
</ul>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Streams','#ws-class','WritableStream')}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.WritableStream")}}</p>
</div>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li><a href="https://whatwg-stream-visualizer.glitch.me/">WHATWG Stream Visualiser</a>: 読み取り可能なストリーム、書き込み可能なストリーム、および変換ストリームの基本的な視覚化。</li>
</ul>
