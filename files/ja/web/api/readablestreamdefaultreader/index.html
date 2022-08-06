---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
tags:
  - API
  - Fetch
  - Interface
  - ReadableStreamDefaultReader
  - Reference
  - Streams
translation_of: Web/API/ReadableStreamDefaultReader
---
<p>{{APIRef("Streams")}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Streams_API">Streams API</a> の <strong><code>ReadableStreamDefaultReader</code></strong> インターフェイスは、ネットワークから提供されたストリームデータ（フェッチ要求など）を読み取るために使用できるデフォルトのリーダーを表します。</span></p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}}</dt>
 <dd><code>ReadableStreamDefaultReader</code> オブジェクトのインスタンスを作成して返します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("ReadableStreamDefaultReader.closed")}} {{readonlyInline}}</dt>
 <dd>ストリーミングプロセスの終了に応答するコードを記述できます。 ストリームが閉じられた場合、またはリーダーのロックが解除された場合に満たされる promise を返します。 ストリームがエラーの場合は拒否します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("ReadableStreamDefaultReader.cancel()")}}</dt>
 <dd>ストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された reason 引数は、基になるソースに与えられ、使用する場合もしない場合もあります。</dd>
 <dt>{{domxref("ReadableStreamDefaultReader.read()")}}</dt>
 <dd>ストリームの内部キュー内の次のチャンクへのアクセスを提供する promise を返します。</dd>
 <dt>{{domxref("ReadableStreamDefaultReader.releaseLock()")}}</dt>
 <dd>ストリームのリーダーのロックを解除します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例では、別のリソースから取得した HTML の断片をブラウザーにストリーミングするために、人工的な {{domxref("Response")}} を作成します。</p>

<p>これは {{jsxref("Uint8Array")}} と組み合わせた {{domxref("ReadableStream")}} の使用方法を示します。</p>

<pre class="brush: js">fetch("https://www.example.org/").then((response) =&gt; {
  const reader = response.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      // 次の関数は各データチャンクを処理します
      function push() {
        // done は Boolean で、value は Uint8Array です
        return reader.read().then(({ done, value }) =&gt; {
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
   <td>{{SpecName('Streams','#default-reader-class','ReadableStreamDefaultReader')}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ReadableStreamDefaultReader")}}</p>
</div>
