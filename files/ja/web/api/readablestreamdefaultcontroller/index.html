---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
tags:
  - API
  - Fetch
  - Interface
  - ReadableStreamDefaultController
  - Reference
  - Streams
translation_of: Web/API/ReadableStreamDefaultController
---
<p>{{APIRef("Streams")}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Streams_API">Streams API</a> の <strong><code>ReadableStreamDefaultController</code></strong> インターフェイスは、{{domxref("ReadableStream")}} の状態と内部キューを制御できるコントローラーを表します。 デフォルトのコントローラーは、バイトストリームではないストリーム用です。</span></p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dd>なし。 <code>ReadableStreamDefaultController</code> インスタンスは、<code>ReadableStream</code> の構築中に自動的に作成されます。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("ReadableStreamDefaultController.desiredSize")}} {{readonlyInline}}</dt>
 <dd>ストリームの内部キューを満たすために必要な希望サイズを返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("ReadableStreamDefaultController.close()")}}</dt>
 <dd>関連するストリームを閉じます。</dd>
 <dt>{{domxref("ReadableStreamDefaultController.enqueue()")}}</dt>
 <dd>所与のチャンクを関連するストリームのキューに入れます。</dd>
 <dt>{{domxref("ReadableStreamDefaultController.error()")}}</dt>
 <dd>関連するストリームとの今後のやり取りでエラーを発生させます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の単純な例では、コンストラクターを使用してカスタムの <code>ReadableStream</code> を作成します（完全なコードについては、<a href="https://mdn.github.io/dom-examples/streams/simple-random-stream/">単純なランダムストリームの例</a>を参照）。 <code>start()</code> 関数は、1秒ごとにテキストのランダムな文字列を生成し、それをストリームのキューに入れます。 {{domxref("ReadableStream.cancel()")}} が何らかの理由で呼び出された場合、生成を停止するための <code>cancel()</code> 関数も提供します。</p>

<p>{{domxref("ReadableStreamDefaultController")}} オブジェクトは、<code>start()</code> 関数および <code>pull()</code> 関数のパラメーターとして提供されることに注意してください。</p>

<p>ボタンが押されると、生成を停止し、{{domxref("ReadableStreamDefaultController.close()")}} を使用してストリームを閉じ、ストリームからデータを読み取る別の関数を実行します。</p>

<pre class="brush: js">const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() =&gt; {
      let string = randomChars();

      // ストリームに文字列を追加
      controller.enqueue(string);

      // それを画面に表示
      let listItem = document.createElement('li');
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);

    button.addEventListener('click', function() {
      clearInterval(interval);
      fetchStream();
      controller.close();
    })
  },
  pull(controller) {
    // この例では実際には pull は必要ありません
  },
  cancel() {
    // リーダーがキャンセルされた場合に呼び出されるため、
    // 文字列の生成を停止する必要があります
    clearInterval(interval);
  }
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Streams','#rs-default-controller-class','ReadableStreamDefaultController')}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ReadableStreamDefaultController")}}</p>
</div>
