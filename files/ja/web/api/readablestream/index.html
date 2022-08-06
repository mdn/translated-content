---
title: ReadableStream
slug: Web/API/ReadableStream
tags:
  - API
  - Fetch
  - Fetch API
  - Files
  - HTTP
  - Interface
  - Networking
  - ReadableStream
  - Reference
  - Streams
  - data
translation_of: Web/API/ReadableStream
---
<p>{{APIRef("Streams")}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Streams_API">Streams API</a> の <code>ReadableStream</code> インターフェイスは、バイトデータの読み取り可能なストリームを表します。 <a href="/ja/docs/Web/API/Fetch_API">Fetch API</a> は、{{domxref("Response")}} オブジェクトの {{domxref("Body.body", "body")}} プロパティを介して <code>ReadableStream</code> の具体的なインスタンスを提供します。</span></p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}</dt>
 <dd>指定されたハンドラーから読み取り可能なストリームのオブジェクトを作成して返します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("ReadableStream.locked")}} {{readonlyInline}}</dt>
 <dd><code>locked</code> ゲッターは、読み取り可能なストリームが<a href="https://streams.spec.whatwg.org/#locked-to-a-reader">リーダーにロックされている</a>（英語）かどうかを返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("ReadableStream.cancel()")}}</dt>
 <dd>ストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された <code>reason</code> 引数は、基になるソースに与えられ、使用する場合と使用しない場合があります。</dd>
 <dt>{{domxref("ReadableStream.getReader()")}}</dt>
 <dd>リーダーを作成し、ストリームをロックします。 ストリームがロックされている間は、このリーダーが開放されるまで他のリーダーを取得できません。</dd>
 <dt>{{domxref("ReadableStream.pipeThrough()")}}</dt>
 <dd>変換ストリームまたはその他の書き込み可能/読み取り可能なペアを介して、現在のストリームをパイプ接続するチェーン可能な方法を提供します。</dd>
 <dt>{{domxref("ReadableStream.pipeTo()")}}</dt>
 <dd>現在の <code>ReadableStream</code> を特定の {{domxref("WritableStream")}} にパイプし、パイピングプロセスが正常に完了したときに満たす promise を返します。 エラーが発生した場合は拒否します。</dd>
 <dt>{{domxref("ReadableStream.tee()")}}</dt>
 <dd><code>tee</code> メソッドは、この読み取り可能なストリームを <a href="https://streams.spec.whatwg.org/#tee-a-readable-stream" id="ref-for-tee-a-readable-stream②">tee</a> し、結果の2つの分岐を含む2要素配列を新しい {{domxref("ReadableStream")}} インスタンスとして返します。 これらの各ストリームは、同じ着信データを受信します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例では、別のリソースからフェッチした HTML の断片をブラウザーにストリーミングするために、人工的な {{domxref("Response")}} が作成されます。</p>

<p>これは {{domxref("Uint8Array")}} と組み合わせた {{domxref("ReadableStream")}} の使用方法を示しています。</p>

<pre class="brush: js">fetch("https://www.example.org/").then((response) =&gt; {
  const reader = response.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      // 次の関数は各データチャンクを処理します
      function push() {
        // done は Boolean で、value は Uint8Array です
        reader.read().then(({ done, value }) =&gt; {
          // 読み取るデータはもうありませんか？
          if (done) {
            // データの送信が完了したことをブラウザーに伝えます
            controller.close();
            return;
          }

          // データを取得し、コントローラー経由でブラウザーに送信します
          controller.enqueue(value);
          push();
        });
      };

      push();
    }
  });

  return new Response(stream, { headers: { "Content-Type": "text/html" } });
});
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Streams','#rs-class','ReadableStream')}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ReadableStream")}}</p>
</div>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li><a href="https://whatwg-stream-visualizer.glitch.me/">WHATWG Stream Visualiser</a>: 読み取り可能なストリーム、書き込み可能なストリーム、および変換ストリームの基本的な視覚化。</li>
</ul>
