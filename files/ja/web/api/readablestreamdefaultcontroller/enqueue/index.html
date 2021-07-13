---
title: ReadableStreamDefaultController.enqueue()
slug: Web/API/ReadableStreamDefaultController/enqueue
tags:
  - API
  - Method
  - ReadableStreamDefaultController
  - Reference
  - Streams
  - enqueue
translation_of: Web/API/ReadableStreamDefaultController/enqueue
---
<div>{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("ReadableStreamDefaultController")}} インターフェイスの <strong><code>enqueue()</code></strong> メソッドは、所与のチャンクを関連するストリームのキューに入れます。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>readableStreamDefaultController</em>.enqueue(<em>chunk</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><em>chunk</em></dt>
 <dd>キューに入れるチャンク。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code>。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>ソースオブジェクトは <code>ReadableStreamDefaultController</code> ではありません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の単純な例では、コンストラクターを使用してカスタムの <code>ReadableStream</code> を作成します（完全なコードについては、<a href="https://mdn.github.io/dom-examples/streams/simple-random-stream/">単純なランダムストリームの例</a>を参照）。 <code>start()</code> 関数は、1秒ごとにテキストのランダムな文字列を生成し、それをストリームのキューに入れます — <code>controller.enqueue(string)</code> を参照。 {{domxref("ReadableStream.cancel()")}} が何らかの理由で呼び出された場合、生成を停止するための <code>cancel()</code> 関数も提供します。</p>

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
   <td>{{SpecName("Streams","#rs-default-controller-enqueue","enqueue()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ReadableStreamDefaultController.enqueue")}}</p>
