---
title: 書き込み可能なストリームの使用
slug: Web/API/Streams_API/Using_writable_streams
tags:
  - API
  - Controller
  - Guide
  - Streams
  - WritableStream
  - writable streams
  - writer
translation_of: Web/API/Streams_API/Using_writable_streams
---
<div>{{apiref("Streams")}}</div>

<p><span class="seoSummary">JavaScript 開発者として、プログラムでストリームにデータを書き込むことは非常に便利です！ この記事では、<a href="/ja/docs/Web/API/Streams_API">Streams API</a> の書き込み可能なストリームの機能について説明します。</span></p>

<div class="note">
<p><strong>注</strong>: この記事は、書き込み可能なストリームのユースケースを理解し、高レベルの概念を理解していることを前提としています。 そうでない場合は、まず <a href="/ja/docs/Web/API/Streams_API#Concepts_and_usage">Streams の概念と使用方法の概要</a>と専用の <a href="/ja/docs/Web/API/Streams_API/Concepts">Streams API の概念</a>の記事を読んでから、戻ってくることをお勧めします。</p>
</div>

<div class="note">
<p><strong>注</strong>: 読み取り可能なストリームに関する情報を探している場合は、代わりに<a href="/ja/docs/Web/API/Streams_API/Using_readable_streams">読み取り可能なストリーム</a>の使用を試してください。</p>
</div>

<h2 id="Browser_support" name="Browser_support">ブラウザーのサポート</h2>

<p>Streams API は実験的なものであり、サポートは現在初期段階にあります。 現在、基本的な書き込み可能なストリームが実装されているのは Chrome のみです。</p>

<h2 id="Introducing_an_example" name="Introducing_an_example">例の紹介</h2>

<p><a href="https://github.com/mdn/dom-examples/tree/master/streams">dom-examples/streams</a> リポジトリには、単純なライターの例（<a href="https://github.com/mdn/dom-examples/blob/master/streams/simple-writer/index.html">Simple writer example</a>）があります（<a href="https://mdn.github.io/dom-examples/streams/simple-writer/">ライブも参照</a>）。 これは、指定されたメッセージを取得して書き込み可能なストリームに書き込み、ストリームに書き込まれるときに UI に各チャンクを表示し、書き込みが終了すると UI にメッセージ全体を表示します。</p>

<h2 id="How_writable_streams_work" name="How_writable_streams_work">書き込み可能なストリームの仕組み</h2>

<p>書き込み可能なストリーム機能のデモの仕組みを見てみましょう。</p>

<h3 id="Constructing_a_writable_stream" name="Constructing_a_writable_stream">書き込み可能なストリームの構築</h3>

<p>書き込み可能なストリームを作成するには、{{domxref("WritableStream.WritableStream","WritableStream()")}} コンストラクターを使用します。 構文は最初は複雑に見えますが、実際にはそれほど悪くはありません。</p>

<p>構文の骨組みは次のようになります。</p>

<pre class="brush: js">const stream = new WritableStream({
  start(controller) {

  },
  write(chunk,controller) {

  },
  close(controller) {

  },
  abort(reason) {

  }
}, {
  highWaterMark,
  size()
});</pre>

<p>コンストラクターはパラメーターとして2つのオブジェクトを取ります。 最初のオブジェクトは必須であり、データの書き込み先の基になるシンクのモデルを JavaScript で作成します。 2番目のオブジェクトはオプションであり、{{domxref("ByteLengthQueuingStrategy")}} または {{domxref("CountQueuingStrategy")}} のインスタンスの形式をとる、ストリームに使用する<a href="/ja/docs/Web/API/Streams_API/Concepts#Internal_queues_and_queuing_strategies">カスタムのキューイング戦略</a>を指定できます。</p>

<p>次のように最初のオブジェクトには最大4つのメンバーを含めることができますが、それらはすべてオプションです。</p>

<ol>
 <li><code>start(controller)</code> — {{domxref("WritableStream")}} が構築された直後に1回だけ呼び出されるメソッド。 このメソッド内には、ストリーム機能を設定するコードを含める必要があります。 例えば、基になるシンクへのアクセスを取得します。</li>
 <li><code>write(chunk,controller)</code> — 新しいチャンク（<code>chunk</code> パラメーターで指定）を基になるシンクに書き込む準備ができるたびに繰り返し呼び出されるメソッド。</li>
 <li><code>close(controller)</code> — ストリームへのチャンクの書き込みが完了したことをアプリが通知した場合に呼び出されるメソッド。 基になるシンクへの書き込みを完了し、アクセスを解放するために必要なことは何でも行う必要があります。</li>
 <li><code>abort(reason)</code> — ストリームを突然閉じてエラー状態にしたいとアプリが通知した場合に呼び出されるメソッド。</li>
</ol>

<p>この例のコンストラクター呼び出しは次のようになります。</p>

<pre class="brush: js">const decoder = new TextDecoder("utf-8");
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
}, queuingStrategy);</pre>

<ul>
 <li><code>write()</code> メソッドには、書き込まれた各チャンクを UI に書き込める形式にデコードするコードを含むプロミスが含まれています。 これは、各チャンクが実際に書き込まれるときに呼び出されます（次のセクションを参照）。</li>
 <li><code>close()</code> メソッドは、書き込みが終了すると自動的に呼び出されます — デコードされた結果全体を1つの文字列で UI に出力します。</li>
 <li><code>abort()</code> メソッドは、ストリームが中断された場合にコンソールにエラーを出力するだけです。</li>
</ul>

<h3 id="Writing" name="Writing">書き込み</h3>

<p>実際にストリームにコンテンツを書き込むには、次のように <code>sendMessage()</code> 関数を呼び出して、書き込むメッセージと書き込み先のストリームを渡します。</p>

<pre class="brush: js">sendMessage("Hello, world.", writableStream);</pre>

<p><code>sendMessage()</code> の定義は次のようになります。</p>

<pre class="brush: js">function sendMessage(message, writableStream) {
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
  // ライターを閉じる前にすべてのチャンクが確実に
  // 書き込まれるように、ready を再度呼び出します。
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
}</pre>

<p>したがって、ここでは、{{domxref("WritableStream.getWriter()")}} を使用してストリームにチャンクを書き込むライターを作成します。 これにより、{{domxref("WritableStreamDefaultWriter")}} インスタンスが作成されます。</p>

<p>また、関連するコンストラクターを使用して新しい {{domxref("TextEncoder")}} インスタンスを作成し、メッセージをチャンクにエンコードしてストリームに入れます。</p>

<p>エンコードされたチャンクを使用して、結果の配列で {{jsxref("Array/forEach")}} を呼び出します。 このブロック内で、{{domxref("WritableStreamDefaultWriter.ready")}}  を使用して、ライターに別のチャンクを書き込む準備ができているかどうかを確認します。 <code>ready</code> は、この場合に満たされるプロミスを返します。 その中で、{{domxref("WritableStreamDefaultWriter.write()")}} を呼び出して、実際にストリームにチャンクを書き込みます。 これにより、前述のように、<code>WritableStream()</code> コンストラクター内で指定された <code>write()</code> メソッドもトリガーされます。</p>

<p>チャンクがすべて書き込まれた後、最後のチャンクの書き込みが完了し、すべての作業が完了したことを確認するために、もう一度 <code>ready</code> のチェックを実行します。この <code>ready</code> のチェックが完了すると、{{domxref("WritableStreamDefaultWriter.close()")}} を呼び出してストリームを閉じます。 これにより、前述のように、<code>WritableStream()</code> コンストラクター内で指定された <code>close()</code> メソッドもトリガーされます。</p>

<h3 id="Controllers" name="Controllers">コントローラー</h3>

<p><code>WritableStream()</code> 構文の骨組みを学習するときに気付くように、<code>start()</code>、<code>write()</code>、および <code>close()</code> メソッドには、オプションで <code>controller</code> パラメーターを渡すことができます。 これには、{{domxref("WritableStreamDefaultController")}} インターフェイスのインスタンスが含まれます。 これは、開発者が必要に応じてストリームをさらに制御するために使用できます。</p>

<p>現在、このインターフェイスで使用できるメソッドは {{domxref("WritableStreamDefaultController.error()")}} のみです。 このメソッドを呼び出すと、ストリームとの今後の相互作用でエラーが発生します。 これは、アプリの別の部分がうまくいかず、がらくたがストリームに静かに書き込まれる (または同様に悪い）危険を冒すのではなく、システム全体がきれいに失敗するようにエラーをストリームに伝播したい場合に便利です。</p>

<h3 id="Closing_and_aborting" name="Closing_and_aborting">終了および中止</h3>

<p>上記のように、書き込みが終了すると <code>close()</code> メソッドを呼び出し、<code>WritableStream()</code> コンストラクター内で指定された <code>close()</code> メソッドをトリガーします。</p>

<p>{{domxref("WritableStreamDefaultWriter.abort()")}} を呼び出してストリームを中止することもできます。</p>

<p>違いは、<code>close()</code> を呼び出すと、ストリームが閉じられる前に、以前にキューに入れられたチャンクが書き込まれ、終了することです。</p>

<p><code>abort()</code> を呼び出すと、以前にキューに入れられたチャンクはすぐに破棄され、ストリームはエラー状態に移行します。 また、これにより、<code>WritableStream()</code> コンストラクターで指定された <code>abort()</code> メソッドが呼び出されます。</p>
