---
title: Streams API の概念
slug: Web/API/Streams_API/Concepts
tags:
  - API
  - Streams
  - concepts
translation_of: Web/API/Streams_API/Concepts
---
<div>{{apiref("Streams")}}</div>

<p class="summary"><span class="seoSummary"><a href="/ja/docs/Web/API/Streams_API">Streams API</a> は、非常に便利なツールセットを Web プラットフォームに追加し、JavaScript がネットワーク経由で受信したデータのストリームにプログラムでアクセスし、開発者の希望どおりに処理できるようにするオブジェクトを提供します。 ストリームに関連する概念と用語の一部は、初めての場合もあります。 この記事では、それら知っておく必要のあるすべてを説明します。</span></p>

<h2 id="Readable_streams" name="Readable_streams">読み取り可能なストリーム</h2>

<p>読み取り可能なストリームは、<strong>基になるソース</strong>（underlying source）から流れる {{domxref("ReadableStream")}} オブジェクトによって JavaScript で表されるデータソースです。 基になるソースは、ネットワーク上のどこか、またはデータを取得するドメインのどこかにあるリソースです。</p>

<p>基になるソースには、次の2つのタイプがあります。</p>

<ul>
 <li><strong>プッシュソース</strong>（Push sources）は、アクセスしたときに常にデータをプッシュします。 ストリームへのアクセスを開始、一時停止、またはキャンセルするのはユーザー次第です。 例には、動画ストリームや TCP/<a href="/ja/docs/Web/API/WebSockets_API">Web ソケット</a>が含まれます。</li>
 <li><strong>プルソース</strong>（Pull sources）では、接続後、明示的にデータを要求する必要があります。 例には、<a href="/ja/docs/Web/API/Fetch_API">Fetch</a> や <a href="/ja/docs/Web/API/XMLHttpRequest/XMLHttpRequest">XHR</a> の呼び出しを介したファイルアクセス操作が含まれます。</li>
</ul>

<p>データは、<strong>チャンク</strong>（chunks）と呼ばれる小さな断片で順番に読み取られます。 チャンクは1バイトにすることも、特定のサイズの<a href="/ja/docs/Web/JavaScript/Typed_arrays">型付き配列</a>など、より大きなものにすることもできます。 単一のストリームには、さまざまなサイズとタイプのチャンクを含めることができます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15819/Readable%20streams.png" style="height: 452px; width: 1000px;"></p>

<p>ストリームに置かれたチャンクは、<strong>キューに入れられた</strong>（enqueued）と言われます。 これは、読み取りの準備ができているキューで待機していることを意味します。 <strong>内部キュー</strong>（internal queue）は、まだ読み取られていないチャンクを追跡します（下の内部キューとキューイング戦略のセクションを参照）。</p>

<p>ストリーム内のチャンクは<strong>リーダー</strong>（reader）によって読み取られます。 これにより、一度に1つのチャンクでデータが処理されるため、ユーザーは任意の種類の操作を実行できます。 リーダーとそれに付随する他の処理コードは、<strong>コンシューマー</strong>（consumer）と呼ばれます。</p>

<p>また、<strong>コントローラー</strong>（controller）と呼ばれる構造も使用します。 各リーダーには、ストリームを制御する（例えば、必要に応じてキャンセルする）ことができるコントローラーが関連付けられています 。</p>

<p>一度にストリームを読み取ることができるのは1つのリーダーのみです。 リーダーが作成され、ストリームの読み取りを開始すると、ストリームは<strong>アクティブなリーダー</strong>（active reader）に<strong>ロックされている</strong>（locked）と言います。 別のリーダーにストリームの読み取りを開始させる場合は、通常、最初のリーダーをキャンセルしてから他の操作を行う必要があります（ですが、ストリームを <strong>tee</strong> することができます。下のティーイングのセクションを参照）。</p>

<p>読み取り可能なストリームには2つの異なるタイプがあることに注意してください。 従来の読み取り可能なストリームに加えて、バイトストリームと呼ばれるタイプがあります。 これは、基になるバイトソース（BYOB または bring your own buffer（独自のバッファーを持ち込む）とも呼ばれる）のソースを読み取るための従来のストリームの拡張バージョンです。 これにより、開発者が提供するバッファにストリームを直接読み込むことができ、必要なコピーが最小限に抑えられます。 コードが使用する基になるストリーム（そして拡張により、リーダーとコントローラー）は、最初にストリームがどのように作成されたかによって異なります（{{domxref("ReadableStream.ReadableStream","ReadableStream()")}} コンストラクターのページを参照）。</p>

<div class="warning">
<p><strong>重要</strong>: バイトストリームは、まだどこにも実装されていません。 仕様の詳細が実装に十分な完成状態にあるかどうかについて疑問が提起されています。 これは時間とともに変化する可能性があります。</p>
</div>

<p>フェッチ要求からの {{domxref("Response.body")}} などのメカニズムを介して既製の読み取り可能なストリームを使用するか、{{domxref("ReadableStream.ReadableStream","ReadableStream()")}} コンストラクターを使用して独自のストリームを使用できます。</p>

<h2 id="Teeing" name="Teeing">ティーイング</h2>

<p>一度にストリームを読み取ることができるのは1つのリーダーだけですが、ストリームを2つの同一のコピーに分割し、2つの別々のリーダーで読み取ることができます。 これを<strong>ティーイング</strong>（teeing）と呼びます。</p>

<p>JavaScript では、これを {{domxref("ReadableStream.tee()")}} メソッドを介して実現します — 元の読み取り可能なストリームの2つの同一コピーを含む配列を出力し、2つの別々のリーダーで個別に読み取ることができます。</p>

<p>例えば、サーバーから応答を取得してブラウザーにストリームしたいが、<a href="/ja/docs/Web/API/Service_Worker_API">ServiceWorker</a> キャッシュにもストリームしたい場合に、ServiceWorker でこれを行うことができます。 応答のボディを複数回使用することはできず、ストリームを一度に複数のリーダーで読み取ることはできないため、これを行うには2つのコピーが必要です。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15820/tee.png" style="height: 527px; width: 1000px;"></p>

<h2 id="Writable_streams" name="Writable_streams">書き込み可能なストリーム</h2>

<p><strong>書き込み可能なストリーム</strong>（writable stream）は、{{domxref("WritableStream")}} オブジェクトによって JavaScript で表されるデータの書き込み先です。 これは、<strong>基になるシンク</strong>（underlying sink、生データが書き込まれる下位レベルの I/O シンク）の上部の抽象化として機能します。</p>

<p>データは、<strong>ライター</strong>（writer）を介して一度に1つのチャンクでストリームに書き込まれます。 チャンクは、リーダーのチャンクと同様に、多数の形式をとることができます。 任意のコードを使用して、書き込み可能なチャンクを生成できます。 ライターとそれに関連するコードを<strong>プロデューサー</strong>（producer）と呼びます。</p>

<p>ライターが作成され、ストリームへの書き込みを開始すると、ストリームは<strong>アクティブなライター</strong>（active writer）に<strong>ロックされている</strong>（locked）と言われます。 一度に書き込み可能なストリームに書き込むことができるのは、1つのライターのみです。 別のライターにストリームへの書き込みを開始させたい場合は、通常、別のライターを取りつける前にそれを中止する必要があります。</p>

<p><strong>内部キュー</strong>（internal queue）は、ストリームに書き込まれたが、基になるシンクによってまだ処理されていないチャンクを追跡します。</p>

<p>また、コントローラーと呼ばれる構造も使用します。 各ライターには、ストリームを制御する（例えば、必要に応じてストリームを中止する）ことができるコントローラーが関連付けられています 。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15821/writable%20streams.png" style="height: 452px; width: 1000px;"></p>

<p>{{domxref("WritableStream.WritableStream","WritableStream()")}} コンストラクターを使用して、書き込み可能なストリームを利用できます。 現在、これらのブラウザーでの可用性は非常に限られています。</p>

<h2 id="Pipe_chains" name="Pipe_chains">パイプチェーン</h2>

<p>Streams API を使用すると、<strong>パイプチェーン</strong>（pipe chain）と呼ばれる構造を使用して、ストリームを相互にパイプすることができます（または、少なくともブラウザーが関連機能を実装する場合はそうなります）。 これを容易にするために、仕様には次の2つのメソッドがあります。</p>

<ul>
 <li>{{domxref("ReadableStream.pipeThrough()")}} — <strong>変換ストリーム</strong>（transform stream）を介してストリームをパイプします。 変換ストリームは、データが書き込まれる書き込み可能なストリームと、データが読み取られる読み取り可能なストリームで構成されるペアです。 これは、データを常に取り込み、新しい状態に変換する一種のトレッドミルとして機能します。 事実上、同じストリームに書き込まれ、同じ値が読み取られます。 簡単な例は、生のバイトが書き込まれ、次に文字列が読み取られるテキストデコーダーです。 仕様には、より有用なアイデアと例があります。 アイデアについては、<a href="https://streams.spec.whatwg.org/#ts-model">ストリームの変換</a>（英語）と、<a href="https://streams.spec.whatwg.org/#example-both">この Web ソケットの例</a>（英語）を参照してください。</li>
 <li>{{domxref("ReadableStream.pipeTo()")}} — パイプチェーンの終点として機能する書き込み可能なストリームにパイプします。</li>
</ul>

<p>パイプチェーンの始まりは<strong>元のソース</strong>（original source）と呼ばれ、終わりは<strong>最終的なシンク</strong>（ultimate sink）と呼ばれます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15818/PipeChain.png" style="height: 382px; width: 1000px;"></p>

<div class="note">
<p><strong>注</strong>: この機能はまだ十分に検討されておらず、多くのブラウザーでは利用できません。 ある時点で、仕様作成者は、<code>TransformStream</code> クラスのようなものを追加して、変換ストリームの作成を容易にすることを望んでいます。</p>
</div>

<h2 id="Backpressure" name="Backpressure">バックプレッシャー</h2>

<p>ストリームの重要な概念は<strong>バックプレッシャー</strong>（backpressure）です。 これは、単一のストリームまたはパイプチェーンが読み取り/書き込みの速度を調整するプロセスです。 チェーンの後半のストリームがまだビジーで、さらに多くのチャンクを受け入れる準備ができていない場合、チェーンを介して信号を逆方向に送信して、より前の変換ストリーム（または元のソース）に必要に応じて配信速度を落とすよう指示し、どこもボトルネックにならないようにします。</p>

<p><code>ReadableStream</code> でバックプレッシャーを使用するには、コントローラーの {{domxref("ReadableStreamDefaultController.desiredSize")}} プロパティを照会することで、コンシューマーが希望するチャンクサイズをコントローラーに問い合わせます。 それが低すぎる場合、<code>ReadableStream</code> は、基になるソースにデータの送信を停止するように指示でき、ストリームチェーンに沿ってバックプレッシャーをかけます。</p>

<p>後でコンシューマが再びデータを受信したい場合は、ストリームの作成で <code>pull</code> メソッドを使用して、データをストリームに与えるよう基になるソースに指示できます。</p>

<h2 id="Internal_queues_and_queuing_strategies" name="Internal_queues_and_queuing_strategies">内部キューとキューイング戦略</h2>

<p>前に述べたように、まだ処理されて終了していないストリーム内のチャンクは、内部キューによって追跡されます。</p>

<ul>
 <li>読み取り可能なストリームの場合、これらはキューに入れられたがまだ読み取られていないチャンクです。</li>
 <li>書き込み可能なストリームの場合、これらは書き込まれたが、基になるシンクによってまだ処理されていないチャンクです。</li>
</ul>

<p>内部キューは、<strong>内部キューの状態</strong>（internal queue state）に基づいてバックプレッシャーを通知する方法を決定する<strong>キューイング戦略</strong>（queuing strategy）を採用しています。</p>

<p>一般に、この戦略では、キュー内のチャンクのサイズを<strong>最高水準点</strong>（high water mark）と呼ばれる値と比較します。これは、キューが現実的に管理できる最大の合計チャンクサイズです。</p>

<p>実行される計算は次です。</p>

<pre>最高水準点 - キュー内のチャンクの合計サイズ = 希望サイズ</pre>

<p><strong>希望サイズ</strong>（desired size）は、ストリームの流れを維持するためにストリームが受け入れることができるチャンクのサイズですが、サイズは最高水準点未満です。 計算が実行された後、希望サイズをゼロより大きく保ちながら、ストリームの流れを可能な限り高速に保つために、必要に応じてチャンク生成が減速/高速化されます。 値がゼロ（書き込み可能なストリームの場合はそれ以下）になった場合、ストリームが処理できるよりも速くチャンクが生成されていることを意味し、問題が発生します。</p>

<div class="note">
<p><strong>注</strong>: ゼロまたは負の希望サイズの場合に何が起こるかは、これまで仕様で実際に定義されていません。 忍耐は美徳なり。</p>
</div>

<p>例として、1のチャンクサイズと3の最高水準点を考えてみましょう。 これは、最高水準点に到達してバックプレッシャーが適用される前に、最大3つのチャンクをキューに入れることができることを意味します。</p>
