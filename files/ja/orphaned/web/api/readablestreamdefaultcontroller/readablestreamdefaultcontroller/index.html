---
title: ReadableStreamDefaultController.ReadableStreamDefaultController()
slug: >-
  orphaned/Web/API/ReadableStreamDefaultController/ReadableStreamDefaultController
tags:
  - API
  - Constructor
  - ReadableStreamDefaultController
  - Reference
  - Streams
translation_of: Web/API/ReadableStreamDefaultController/ReadableStreamDefaultController
original_slug: Web/API/ReadableStreamDefaultController/ReadableStreamDefaultController
---
<div>{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary"><strong><code>ReadableStreamDefaultController()</code></strong> コンストラクターは、<code>ReadableStreamDefaultController</code> オブジェクトのインスタンスを作成して返します。</span></p>

<div class="note">
<p><strong>注</strong>: このコンストラクターを手動で使用することはありません — これは、{{domxref("ReadableStream")}} オブジェクトの構築中に使用されます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>readableStreamDefaultController</em> = new ReadableStreamDefaultController(<em>stream</em>, <em>underlyingSource</em>, <em>size</em>, <em>highWaterMark</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>stream</dt>
 <dd>制御される {{domxref("ReadableStream")}}。</dd>
 <dt>underlyingSource</dt>
 <dd>構築されたストリームインスタンスの動作を定義するメソッドとプロパティを含むオブジェクト。 詳細については、<a href="/ja/docs/Web/API/ReadableStream/ReadableStream#Parameters"><code>ReadableStream()</code> コンストラクターのパラメーター定義</a>を参照してください。</dd>
 <dt>size</dt>
 <dd> パラメーター <code>chunk</code> を含むメソッド — これは、各チャンクに使用するサイズをバイト単位で示します。</dd>
 <dt>highWaterMark</dt>
 <dd>負でない整数 — これは、バックプレッシャーが適用される前に内部キューに含めることができるチャンクの総数を定義します。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("ReadableStreamDefaultController")}} オブジェクトのインスタンス。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>TypeError</dt>
 <dd>指定された <code>stream</code> パラメーターは {{domxref("ReadableStream")}} ではないか、既にコントローラーが関連付けられています。</dd>
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
   <td>{{SpecName("Streams","#rs-default-controller-constructor","ReadableStreamDefaultController()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ReadableStreamDefaultController.ReadableStreamDefaultController")}}</p>
