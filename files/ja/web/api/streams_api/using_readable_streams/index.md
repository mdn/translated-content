---
title: 読み取り可能なストリームの使用
slug: Web/API/Streams_API/Using_readable_streams
tags:
  - API
  - Controller
  - Fetch
  - Guide
  - ReadableStreams
  - Streams
  - pipe chains
  - readable streams
  - reader
  - tee
translation_of: Web/API/Streams_API/Using_readable_streams
---
<div>{{apiref("Streams")}}</div>

<p class="summary"><span class="seoSummary">JavaScript 開発者として、ネットワークを介して受信したデータのストリームをチャンクごとにプログラムで読み取り、操作することは非常に便利です！ しかし、Streams API の読み取り可能なストリームの機能はどのように使用するのでしょうか？ この記事では、その基本について説明します。</span></p>

<div class="note">
<p><strong>注</strong>: この記事は、読者が読み取り可能なストリームのユースケースを理解し、高レベルの概念を理解していることを前提としています。 そうでない場合は、まず <a href="/ja/docs/Web/API/Streams_API#Concepts_and_usage">Streams の概念と使用方法の概要</a>と専用の <a href="/ja/docs/Web/API/Streams_API/Concepts">Streams API の概念</a>の記事を読んでから、戻ってくることをお勧めします。</p>
</div>

<div class="note">
<p><strong>注</strong>: 書き込み可能なストリームに関する情報を探している場合は、代わりに<a href="/ja/docs/Web/API/Streams_API/Using_writable_streams">書き込み可能なストリームの使用</a>を試してください。</p>
</div>

<h2 id="Browser_support" name="Browser_support">ブラウザーのサポート</h2>

<p>Firefox 65 以降および Chrome 42 以降（および同等の Chromium ベースのブラウザー）で、Fetch の {{domxref("Body")}} オブジェクトをストリームとして消費し、独自のカスタムの読み取り可能なストリームを作成できます。 <a href="/ja/docs/Web/API/Streams_API/Concepts#Pipe_chains">パイプチェーン</a>は現在 Chrome でのみサポートされており、その機能は変更される可能性があります。</p>

<h2 id="Finding_some_examples" name="Finding_some_examples">いくつかの例を見つける</h2>

<p>この記事では、<a href="https://github.com/mdn/dom-examples/tree/master/streams">dom-examples/streams</a> リポジトリから取得したさまざまな例を見ていきます。 そこには完全なソースコードと例へのリンクがあります。</p>

<h2 id="Consuming_a_fetch_as_a_stream" name="Consuming_a_fetch_as_a_stream">フェッチをストリームとして消費する</h2>

<p><a href="/ja/docs/Web/API/Fetch_API">Fetch API</a> を使用すると、ネットワーク経由でリソースをフェッチでき、<a href="/ja/docs/Web/API/XMLHttpRequest">XHR</a> の最新の代替手段が提供されます。 これには多くの利点がありますが、本当に素晴らしいのは、ブラウザーがフェッチの応答を読み取り可能なストリームとして消費する機能を最近追加したことです。</p>

<p>{{domxref("Body")}} ミックスインには {{domxref("Body.body","body")}} プロパティが含まれるようになりました。 これは、ボディの内容を読み取り可能なストリームとして公開する単純なゲッターです。 このミックスインは、{{domxref("Request")}}（要求）インターフェイスと {{domxref("Response")}}（応答）インターフェイスの両方で実装されているため、両方で使用できますが、応答のボディのストリームを消費するであろうことはちょっとだけ明白です。</p>

<p>単純なストリームポンプ（<a href="https://github.com/mdn/dom-examples/tree/master/streams/simple-pump">Simple stream pump</a>）の例が示しているように（<a href="https://mdn.github.io/dom-examples/streams/simple-pump/">ライブも参照</a>）、それを公開することは、次のように応答の <code>body</code> プロパティにアクセスするだけのことです。</p>

<pre class="brush: js">// 元の画像をフェッチ
fetch('./tortoise.png')
// その body を ReadableStream として取得
.then(response =&gt; response.body)</pre>

<p>これにより、{{domxref("ReadableStream")}} オブジェクトが提供されます。</p>

<h3 id="Attaching_a_reader" name="Attaching_a_reader">リーダーの取り付け</h3>

<p>ストリームするボディができました。 ストリームを読むには、リーダーを取り付ける必要があります。 これは、{{domxref("ReadableStream.getReader()")}} メソッドを使用して行われます。</p>

<pre class="brush: js">// 元の画像をフェッチ
fetch('./tortoise.png')
// その body を ReadableStream として取得
.then(response =&gt; response.body)
.then(body =&gt; {
  const reader = body.getReader();</pre>

<p>このメソッドを呼び出すと、リーダーが作成され、ストリームにロックされます — このリーダーが開放されるまで、他のリーダーはこのストリームを読み取ることができません。 開放するには、例えば {{domxref("ReadableStreamDefaultReader.releaseLock()")}} を呼び出します。</p>

<p>また、<code>response.body</code> は同期的であり、promise を必要としないため、前の例を1ステップ減らすことができることに注意してください。</p>

<pre class="brush: js">// 元の画像をフェッチ
  fetch('./tortoise.png')
  // その body を ReadableStream として取得
  .then(response =&gt; {
    const reader = response.body.getReader();</pre>

<h3 id="Reading_the_stream" name="Reading_the_stream">ストリームを読む</h3>

<p>リーダーを取り付けたら、{{domxref("ReadableStreamDefaultReader.read()")}} メソッドを使用してストリームからデータチャンクを読み取ることができます。 これにより、ストリームから1つチャンクを読み取って、好きなことを実行できます。 例えば、単純なストリームポンプの例では、新しいカスタム <code>ReadableStream</code> で各チャンクをキューに入れ（これについては次のセクションで詳しく説明します）、そこから新しい {{domxref("Response")}} を作成し、{{domxref("Blob")}} として使用し、 {{domxref("URL.createObjectURL()")}} を使用してその blob からオブジェクト URL を取得し、それを {{htmlelement("img")}} 要素で画面に表示して、元のフェッチした画像のコピーを効果的に作成します。</p>

<pre class="brush: js">  return new ReadableStream({
    start(controller) {
      return pump();
      function pump() {
        return reader.read().then(({ done, value }) =&gt; {
          // データを消費する必要がなくなったら、ストリームを閉じます
          if (done) {
              controller.close();
              return;
          }
          // 次のデータチャンクを対象のストリームのキューに入れます
          controller.enqueue(value);
          return pump();
        });
      }
    }
  })
})
.then(stream =&gt; new Response(stream))
.then(response =&gt; response.blob())
.then(blob =&gt; URL.createObjectURL(blob))
.then(url =&gt; console.log(image.src = url))
.catch(err =&gt; console.error(err));</pre>

<p><code>read()</code> の使用方法を詳しく見てみましょう。 上記の <code>pump()</code> 関数では、最初に結果オブジェクトを含む promise を返す <code>read()</code> を呼び出します。 結果オブジェクトには、次のように読み取りの結果が <code>{ done, value }</code> の形式で含まれています。</p>

<pre class="brush: js">return reader.read().then(({ done, value }) =&gt; {</pre>

<p>結果は、次の3つの異なるタイプのいずれかになります。</p>

<ul>
 <li>チャンクが読み取り可能であれば、<code>{ value: theChunk, done: false }</code> の形式のオブジェクトで promise が満たされます。</li>
 <li>ストリームが閉じられると、<code>{ value: undefined, done: true }</code> という形式のオブジェクトで promise が満たされます。</li>
 <li>ストリームにエラーが発生すると、関連するエラーで promise が拒否されます。</li>
</ul>

<p>次に、<code>done</code> が <code>true</code> であるかどうかを確認します。 その場合、読み込むチャンクはもうないので（値は <code>undefined</code> です）、関数から戻り、{{domxref("ReadableStreamDefaultController.close()")}} でカスタムストリームを閉じます。</p>

<pre class="brush: js">if (done) {
  controller.close();
  return;
}</pre>

<div class="note">
<p><strong>注</strong>: <code>close()</code> は、ここで説明している元のストリームではなく、新しいカスタムストリームの一部です。 次のセクションでカスタムストリームについて詳しく説明します。</p>
</div>

<p><code>done</code> が <code>true</code> でない場合、読み込んだ新しいチャンク（結果オブジェクトの <code>value</code> プロパティに含まれる）を処理してから、再度 <code>pump()</code> 関数を呼び出して次のチャンクを読み込みます。</p>

<pre class="brush: js">// 次のデータチャンクを対象のストリームのキューに入れます
controller.enqueue(value);
return pump();</pre>

<p>これは、ストリームのリーダーを使用するときに示される次のような標準パターンです。</p>

<ol>
 <li>ストリームの読み取りを開始する関数を作成します。</li>
 <li>読み込むストリームがこれ以上ない場合は、関数から戻ります。</li>
 <li>さらに読み込むストリームがある場合は、現在のチャンクを処理してから、関数を再度実行します。</li>
 <li>読み取るストリームがなくなるまで関数を再帰的に実行し続けます。 この場合、手順2が実行されます。</li>
</ol>

<h2 id="Creating_your_own_custom_readable_stream" name="Creating_your_own_custom_readable_stream">カスタムの読み取り可能なストリームを作成する</h2>

<p>この記事で学習している単純なストリームポンプの例には2番目の部分が含まれています — フェッチしたボディから画像をチャンク単位で読み取った後、独自作成の別のカスタムストリームのキューに入れます。 これをどのように作成するのでしょうか？ <code>ReadableStream()</code> コンストラクターです。</p>

<h3 id="The_ReadableStream_constructor" name="The_ReadableStream_constructor">ReadableStream() コンストラクター</h3>

<p>Fetch の場合のように、ブラウザーが提供するストリームから簡単に読み取ることができますが、カスタムストリームを作成して、独自のチャンクを追加する必要がある場合があります。 {{domxref("ReadableStream.ReadableStream","ReadableStream()")}} コンストラクターを使用すると、最初は複雑に見えますが実際にはそれほど悪くない構文を使用してこれを行うことができます。</p>

<p>汎用の構文の骨組みは次のようになります。</p>

<pre class="brush: js">const stream = new ReadableStream({
  start(controller) {

  },
  pull(controller) {

  },
  cancel() {

  },
  type,
  autoAllocateChunkSize
}, {
  highWaterMark,
  size()
});</pre>

<p>コンストラクターはパラメーターとして2つのオブジェクトを取ります。 最初のオブジェクトは必須であり、データの読み取り元である基になるソースのモデルを JavaScript で作成します。 2番目のオブジェクトはオプションであり、ストリームに使用する<a href="/ja/docs/Web/API/Streams_API/Concepts#Internal_queues_and_queuing_strategies">カスタムのキューイング戦略</a>を指定できます。 これを行う必要はほとんどないため、ここでは最初のものに集中します。</p>

<p>次のように最初のオブジェクトには最大5つのメンバーを含めることができますが、最初のオブジェクトのみが必要です。</p>

<ol>
 <li><code>start(controller)</code> — <code>ReadableStream</code> が構築された直後に1回だけ呼び出されるメソッド。 このメソッド内には、ストリーム機能を設定するコードを含める必要があります。 例えば、データの生成を開始するか、ソースにアクセスします。</li>
 <li><code>pull(controller)</code> — 含まれている場合、ストリームの内部キューがいっぱいになるまで繰り返し呼び出されるメソッド。 これは、より多くのチャンクがキューに入れられるときにストリームを制御するために使用できます。</li>
 <li><code>cancel()</code> — 含まれている場合、ストリームをキャンセルすることをアプリが通知した場合に呼び出されるメソッド（例えば、{{domxref("ReadableStream.cancel()")}} が呼び出された場合）。 内容は、ストリームのソースへのアクセスを解放するために必要なことを行う必要があります。</li>
 <li><code>type</code> および <code>autoAllocateChunkSize</code> — これらが含まれている場合、ストリームがバイトストリームであることを示すために使用されます。 バイトストリームは、通常の（デフォルトの）ストリームとは目的やユースケースが多少異なるため、今後のチュートリアルで個別に取り上げます。 また、まだどこにも実装されていません。</li>
</ol>

<p>簡単な例のコードをもう一度見ると、次のように <code>ReadableStream()</code> コンストラクターには、フェッチしたストリームからすべてのデータを読み取るための単一のメソッド <code>start()</code> のみが含まれていることがわかります。</p>

<pre class="brush: js">  return new ReadableStream({
    start(controller) {
      return pump();
      function pump() {
        return reader.read().then(({ done, value }) =&gt; {
          // データを消費する必要がなくなったら、ストリームを閉じます
          if (done) {
            controller.close();
            return;
          }
          // 次のデータチャンクを対象のストリームのキューに入れます
          controller.enqueue(value);
          return pump();
        });
      }
    }
  })
})
</pre>

<h3 id="ReadableStream_controllers" name="ReadableStream_controllers">ReadableStream コントローラー</h3>

<p><code>ReadableStream()</code> コンストラクターに渡される <code>start()</code> メソッドと <code>pull()</code> メソッドには <code>controller</code> パラメーターが与えられます。 これらは、ストリームの制御に使用できる {{domxref("ReadableStreamDefaultController")}} クラスのインスタンスです。</p>

<p>この例では、コントローラーの {{domxref("ReadableStreamDefaultController.enqueue","enqueue()")}} メソッドを使用して、値をフェッチしたボディから読み取った後、カスタムストリームのキューに入れます。</p>

<p>さらに、フェッチしたボディの読み取りが完了したら、コントローラーの {{domxref("ReadableStreamDefaultController.close","close()")}} メソッドを使用してカスタムストリームを閉じます。 以前にキューに入れられたチャンクはそれから読み取ることができますが、キューに入れることはできません。 読み取りが終了すると、ストリームは閉じられます。</p>

<h3 id="Reading_from_custom_streams" name="Reading_from_custom_streams">カスタムストリームからの読み取り</h3>

<p>単純なストリームポンプの例では、カスタムの読み取り可能なストリームを {{domxref("Response.Response", "Response")}} コンストラクターの呼び出しに渡すことで消費し、その後 <code>blob()</code> として消費します。</p>

<pre class="brush: js">.then(stream =&gt; new Response(stream))
.then(response =&gt; response.blob())
.then(blob =&gt; URL.createObjectURL(blob))
.then(url =&gt; console.log(image.src = url))
.catch(err =&gt; console.error(err));</pre>

<p>ただし、カスタムストリームは引き続き <code>ReadableStream</code> インスタンスであるため、それにリーダーを取りつけることができます。 例として、カスタムストリームを作成し、いくつかのランダムな文字列をキューに入れてから、[文字列の生成を停止] ボタンが押されるとストリームからデータを再度読み取る、単純なランダムストリーム（<a href="https://github.com/mdn/dom-examples/blob/master/streams/simple-random-stream/index.html">Simple random stream</a>）のデモをご覧ください（<a href="https://mdn.github.io/dom-examples/streams/simple-random-stream/">ライブも参照</a>）。</p>

<p>カスタムストリームのコンストラクターには、{{domxref("WindowTimers.setInterval()")}} 呼び出しを使用して1秒ごとにランダムな文字列を生成する <code>start()</code> メソッドがあります。 次に、{{domxref("ReadableStreamDefaultController.enqueue()")}} を使用してストリームにエンキューします。 ボタンが押されると、インターバルがキャンセルされ、<code>readStream()</code> と呼ばれる関数が呼び出されて、データをストリームから再度読み取ります。 また、チャンクをストリームのキューへ入れることを止めたため、ストリームを閉じます。</p>

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
      readStream();
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

<p><code>readStream()</code> 関数自体では、{{domxref("ReadableStream.getReader()")}} を使用してリーダーをストリームにロックし、先ほど見たのと同様のパターンに従います。 <code>read()</code> で各チャンクを読み取り、<code>done</code> が <code>true</code> であるかどうかを確認し、その場合はプロセスを終了し、そうでない場合は <code>read()</code> メソッドを再度実行する前に次のチャンクを読み取って処理します。</p>

<pre class="brush: js">function readStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() は、値を受け取ったときに解決するプロミスを返します
  reader.read().then(function processText({ done, value }) {
    // 結果オブジェクトには2つのプロパティが含まれます。
    // done  - ストリームがすべてのデータを既に提供している場合は true。
    // value - 一部のデータ。 done が true の場合、常に undefined。
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }

    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement('li');
    listItem.textContent = 'Read ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
    list2.appendChild(listItem);

    result += chunk;

    // さらに読み、この関数を再度呼び出します
    return reader.read().then(processText);
  });
}</pre>

<h3 id="Closing_and_cancelling_streams" name="Closing_and_cancelling_streams">ストリームのクローズとキャンセル</h3>

<p>{{domxref("ReadableStreamDefaultController.close()")}} を使用してリーダーを閉じる例を既に示しました。 前に言ったように、以前にキューに入れられたチャンクはすべて読み込まれますが、閉じられているため、それ以上キューに入れることはできません。</p>

<p>ストリームを完全に取り除き、キューに入れられたチャンクを破棄したい場合は、{{domxref("ReadableStream.cancel()")}} または {{domxref("ReadableStreamDefaultReader.cancel()")}} を使用します。</p>

<h2 id="Teeing_a_stream" name="Teeing_a_stream">ストリームのティーイング</h2>

<p>ストリームを2回同時に読み取りたい場合があります。 これは、{{domxref("ReadableStream.tee()")}} メソッドを介して実現されます — 元の読み取り可能なストリームの2つの同一コピーを含む配列を出力し、2つの別々のリーダーで個別に読み取ることができます。</p>

<p>例えば、サーバーから応答をフェッチしてブラウザーにストリームするが、Service Worker キャッシュにもストリームする場合は、<a href="/ja/docs/Web/API/Service_Worker_API">ServiceWorker</a> でこれを行うことができます。 応答のボディを複数回使用することはできず、ストリームを一度に複数のリーダーで読み取ることはできないため、これを行うには2つのコピーが必要です。</p>

<p>単純な tee の例（<a href="https://github.com/mdn/dom-examples/blob/master/streams/simple-tee-example/index.html">Simple tee example</a>）でこの例を示します（<a href="https://mdn.github.io/dom-examples/streams/simple-tee-example/">ライブも参照</a>）。 この例は、単純なランダムストリームとほぼ同じように機能しますが、ボタンを押してランダムな文字列の生成を停止すると、カスタムストリームが取得されて tee され、結果の両方のストリームが読み取られる点が異なります。</p>

<pre class="brush: js">function teeStream() {
    const teedOff = stream.tee();
    readStream(teedOff[0], list2);
    readStream(teedOff[1], list3);
  }</pre>

<h2 id="Pipe_chains" name="Pipe_chains">パイプチェーン</h2>

<p>トリームの非常に実験的な機能の1つは、ストリームを相互にパイプする機能です（<a href="/ja/docs/Web/API/Streams_API/Concepts#Pipe_chains">パイプチェーン</a>と呼ばれます）。 これには2つのメソッドが含まれます。 {{domxref("ReadableStream.pipeThrough()")}} は、読み取り可能ストリームをライター/リーダーのペアにパイプしてデータ形式を別の形式に変換し、{{domxref("ReadableStream.pipeTo()")}} は読み取り可能ストリームをパイプチェーンの終点として動作するライターにパイプします。</p>

<p>この機能は非常に実験的な段階であり、変更される可能性があるため、現時点ではあまり深く探求していません。</p>

<p>画像をストリームとしてフェッチし、それをバイナリデータストリームから PNG チャンクを取得するカスタム PNG 変換ストリームにパイプする PNG のチャンクをアンパック（<a href="https://github.com/mdn/dom-examples/tree/master/streams/png-transform-stream">Unpack Chunks of a PNG</a>）という例を作成しました（<a href="https://mdn.github.io/dom-examples/streams/png-transform-stream/">ライブも参照</a>）。</p>

<pre class="brush: js">// 元の画像をフェッチ
fetch('png-logo.png')
// その body を ReadableStream として取得
.then(response =&gt; response.body)
// 元の画像からグレースケール PNG ストリームを作成
.then(rs =&gt; logReadableStream('Fetch Response Stream', rs))
.then(body =&gt; body.pipeThrough(new PNGTransformStream()))
.then(rs =&gt; logReadableStream('PNG Chunk Stream', rs))</pre>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>これは、「デフォルト」の読み取り可能なストリームの基本を説明しています。 バイトストリームがブラウザーで利用可能になったら、今後の別の記事でバイトストリームについて説明します。</p>
