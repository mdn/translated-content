---
title: ReadableStream.ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
tags:
  - API
  - Constructor
  - ReadableStream
  - Reference
translation_of: Web/API/ReadableStream/ReadableStream
---
<div>{{APIRef("Streams")}}</div>

<p class="summary"><span class="seoSummary"><strong><code>ReadableStream()</code></strong> コンストラクターは、指定されたハンドラーから読み取り可能なストリームのオブジェクトを作成して返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>readableStream</em> = new ReadableStream(<em>underlyingSource</em>[, <em>queuingStrategy</em>]);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>underlyingSource</dt>
 <dd>構築されたストリームのインスタンスの動作を定義するメソッドとプロパティを含むオブジェクト。 <code>underlyingSource</code> には次のものを含めることができます。
 <dl>
  <dt>start(controller)</dt>
  <dd>これは、オブジェクトが構築されるとすぐに呼び出されるメソッドです。 このメソッドの内容は開発者が定義し、ストリームのソースへのアクセスを取得し、ストリーム機能を設定するために必要な他のすべての操作を行う必要があります。 このプロセスを非同期で実行する場合、成功または失敗を通知する promise を返すことができます。 このメソッドに渡される <code>controller</code> パラメーターは、<code>type</code> プロパティの値に応じて、{{domxref("ReadableStreamDefaultController")}} または {{domxref("ReadableByteStreamController")}} です。 開発者はこれを使用して、セットアップ中にストリームを制御できます。</dd>
  <dt>pull(controller) {{optional_inline}}</dt>
  <dd>このメソッドは、開発者が定義し、ストリームの内部チャンクのキューがいっぱいになっていない場合、最高水準点に達するまで繰り返し呼び出されます。 <code>pull()</code> が promise を返す場合、その promise が満たされるまで再び呼び出されません。 promise が拒否された場合、ストリームはエラーになります。 このメソッドに渡される <code>controller</code> パラメーターは、<code>type</code> プロパティの値に応じて、{{domxref("ReadableStreamDefaultController")}} または {{domxref("ReadableByteStreamController")}} です。 開発者は、これを使用して、より多くのチャンクがフェッチされるときにストリームを制御できます。</dd>
  <dt>cancel(reason) {{optional_inline}}</dt>
  <dd>このメソッドは、開発者が定義し、ストリームがキャンセルされることをアプリが通知した場合に呼び出されます（例えば、{{domxref("ReadableStream.cancel()")}} が呼び出された場合）。 内容は、ストリームのソースへのアクセスを解放するために必要なことを行う必要があります。 このプロセスが非同期の場合、成功または失敗を通知する promise を返すことができます。 <code>reason</code> パラメータには、ストリームがキャンセルされた理由を説明する {{domxref("DOMString")}} が含まれています。</dd>
  <dt>type {{optional_inline}}</dt>
  <dd>このプロパティは、どのタイプの読み取り可能なストリームが処理されるかを制御します。 <code>"bytes"</code> に設定された値が含まれている場合、渡されるコントローラーオブジェクトは、BYOB（独自のバッファーを持ち込む）/バイトストリームを処理できる {{domxref("ReadableByteStreamController")}} になります。 含まれていない場合、渡されるコントローラーは {{domxref("ReadableStreamDefaultController")}} になります。</dd>
  <dt>autoAllocateChunkSize {{optional_inline}}</dt>
  <dd>バイトストリームの場合、開発者は <code>autoAllocateChunkSize</code> に正の整数値を設定して、ストリームの自動割り当て機能をオンにできます。 これをオンにすると、ストリームの実装は、指定された整数のサイズで {{jsxref("ArrayBuffer")}} を自動的に割り当て、コンシューマーがデフォルトのリーダーも使用できるようになります。</dd>
 </dl>
 </dd>
 <dt>queuingStrategy {{optional_inline}}</dt>
 <dd>オプションでストリームのキューイング戦略を定義するオブジェクト。 これには次の2つのパラメーターが必要です。
 <dl>
  <dt>highWaterMark</dt>
  <dd>負でない整数 — これは、バックプレッシャーが適用される前に内部キューに含めることができるチャンクの総数を定義します。</dd>
  <dt>size(chunk)</dt>
  <dd>パラメーター <code>chunk</code> を含むメソッド — これは、各チャンクに使用するサイズをバイト単位で示します。</dd>
 </dl>

 <div class="note">
 <p><strong>注</strong>: 独自のカスタム <code>queuingStrategy</code> を定義するか、このオブジェクト値に {{domxref("ByteLengthQueuingStrategy")}} または {{domxref("CountQueuingStrategy")}} のインスタンスを使用できます。 <code>queuingStrategy</code> が指定されていない場合、使用されるデフォルトは、最高水準点が 1 の <code>CountQueuingStrategy</code> と同じです。</p>
 </div>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("ReadableStream")}} オブジェクトのインスタンス。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>RangeError</dt>
 <dd>指定された <code>type</code> 値は、 <code>"bytes"</code> でも <code>undefined</code> でもありません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の単純な例では、コンストラクターを使用してカスタムの <code>ReadableStream</code> を作成します（完全なコードについては、<a href="https://mdn.github.io/dom-examples/streams/simple-random-stream/">単純なランダムストリームの例</a>を参照）。 <code>start()</code> 関数は、1秒ごとにランダムなテキスト文字列を生成し、それをストリームのキューに入れます。 {{domxref("ReadableStream.cancel()")}} が何らかの理由で呼び出された場合、生成を停止するために <code>cancel()</code> 関数も提供します。</p>

<p>ボタンを押すと、生成を停止し、{{domxref("ReadableStreamDefaultController.close()")}} を使用してストリームを閉じ、ストリームからデータを読み取る別の関数を実行します。</p>

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
   <td>{{SpecName("Streams","#rs-constructor","ReadableStream()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ReadableStream.ReadableStream")}}</p>
