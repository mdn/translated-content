---
title: Streams API
slug: Web/API/Streams_API
tags:
  - API
  - Experimental
  - JavaScript
  - Landing
  - Reference
  - Streams
translation_of: Web/API/Streams_API
---
<p>{{SeeCompatTable}}{{DefaultAPISidebar("Streams")}}</p>

<div>
<p><span class="seoSummary">Streams API を使用すると、JavaScript がネットワーク経由で受信したデータのストリームにプログラムでアクセスし、開発者の希望どおりに処理できます。</span></p>
</div>

<h2 id="Concepts_and_usage" name="Concepts_and_usage">概念と使用方法</h2>

<p>ストリーミングでは、ネットワーク経由で受信するリソースを小さなチャンクに分割し、少しずつ処理します。 これは、ブラウザーがウェブページに表示されるアセットを受信するときにとにかく行うことです — 動画がバッファされて徐々に再生可能になり、画像が読み込まれるにつれて徐々に表示されることもあります。</p>

<p>しかし、これはこれまで JavaScript で利用できたことはありません。 以前は、何らかの種類のリソース（動画、テキストファイルなど）を処理したい場合は、ファイル全体をダウンロードし、適切な形式にデシリアライズされるのを待ってから、完全に受信した後に全部まとめて処理する必要がありました。</p>

<p>Streams が JavaScript で利用できるようになったことで、これがすべて変わりました — クライアント側で利用可能になると、バッファ、文字列、または blob を生成せずに、JavaScript で少しずつ生データの処理を開始できます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15817/Concept.png" style="display: block; height: 382px; margin: 0px auto; width: 1000px;"></p>

<p>さらに利点もあります。 ストリームの開始または終了の検出、ストリームの連鎖、エラー処理と必要に応じたストリームのキャンセル、ストリームの読み取り速度への対応が可能です。</p>

<p>Streams の基本的な使用法は、応答をストリームとして利用可能にすることにかかっています。 例えば、成功した<a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch">フェッチ要求</a>によって返された応答の {{domxref("Body")}} は、{{domxref("ReadableStream")}} として公開できます。 その後、{{domxref("ReadableStream.getReader()")}} で作成したリーダーを使用して読み取り、{{domxref("ReadableStream.cancel()")}} でキャンセルできます。</p>

<p>より複雑な用途では、例えば<a href="/ja/docs/Web/API/Service_Worker_API">サービスワーカー</a>内でデータを処理するために、{{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクターを使用して独自のストリームを作成します。</p>

<p>{{domxref("WritableStream")}} を使用してストリームにデータを書き込むこともできます。</p>

<div class="note">
<p><strong>注</strong>: ストリームの理論と実践の詳細については、<a href="/ja/docs/Web/API/Streams_API/Concepts">Streams API の概念</a>、<a href="/ja/docs/Web/API/Streams_API/Using_readable_streams">読み取り可能なストリームの使用</a>、<a href="/ja/docs/Web/API/Streams_API/Using_writable_streams">書き込み可能なストリームの使用</a>の記事をご覧ください。</p>
</div>

<h2 id="Stream_interfaces" name="Stream_interfaces">ストリームのインターフェイス</h2>

<h3 id="Readable_streams" name="Readable_streams">読み取り可能なストリーム</h3>

<dl>
 <dt>{{domxref("ReadableStream")}}</dt>
 <dd>読み取り可能なデータのストリームを表します。 <a href="/ja/docs/Web/API/Fetch_API">Fetch API</a> の応答ストリーム、または開発者定義のストリーム（カスタムの {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクターなど）を処理するために使用できます。</dd>
 <dt>{{domxref("ReadableStreamDefaultReader")}}</dt>
 <dd>ネットワークから提供されたストリームデータ（フェッチ要求など）を読み取るために使用できるデフォルトのリーダーを表します。</dd>
 <dt>{{domxref("ReadableStreamDefaultController")}}</dt>
 <dd>{{domxref("ReadableStream")}} の状態と内部キューの制御を許可するコントローラーを表します。 デフォルトのコントローラーは、バイトストリームではないストリーム用です。</dd>
</dl>

<h3 id="Writable_streams" name="Writable_streams">書き込み可能なストリーム</h3>

<dl>
 <dt>{{domxref("WritableStream")}}</dt>
 <dd>シンク（sink）と呼ばれる宛先にストリーミングデータを書き込むための標準的な抽象化を提供します。 このオブジェクトには、組み込みのバックプレッシャー（受信側のバッファあふれの予防）とキューイングが付属しています。</dd>
 <dt>{{domxref("WritableStreamDefaultWriter")}}</dt>
 <dd>データのチャンクを書き込み可能なストリームに書き込むために使用できるデフォルトの書き込み可能なストリームのライターを表します。</dd>
 <dt>{{domxref("WritableStreamDefaultController")}}</dt>
 <dd>{{domxref("WritableStream")}} の状態の制御を許可するコントローラーを表します。 <code>WritableStream</code> を構築するとき、基になるシンクには、対応する <code>WritableStreamDefaultController</code> インスタンスが与えられて操作します。</dd>
</dl>

<h3 id="Related_stream_APIs_and_operations" name="Related_stream_APIs_and_operations">関連するストリームの API と操作</h3>

<dl>
 <dt>{{domxref("ByteLengthQueuingStrategy")}}</dt>
 <dd>ストリームを構築するときに使用できる組み込みのバイト長キューイング戦略（byte length queuing strategy）を提供します。</dd>
 <dt>{{domxref("CountQueuingStrategy")}}</dt>
 <dd>ストリームを構築するときに使用できる組み込みのチャンクカウントキューイング戦略（chunk counting queuing strategy）を提供します。</dd>
</dl>

<h3 id="Extensions_to_other_APIs" name="Extensions_to_other_APIs">他の API の拡張</h3>

<dl>
 <dt>{{domxref("Request")}}</dt>
 <dd>新しい <code>Request</code> オブジェクトが構築されると、その <code>RequestInit</code> ディクショナリの <code>body</code> プロパティで {{domxref("ReadableStream")}} を渡すことができます。 次に、この <code>Request</code> を {{domxref("WindowOrWorkerGlobalScope.fetch()")}} に渡して、ストリームのフェッチを開始できます。</dd>
 <dt>{{domxref("Body")}}</dt>
 <dd>成功した<a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch">フェッチ要求</a>によって返された応答の {{domxref("Body")}} は、デフォルトで {{domxref("ReadableStream")}} として公開され、リーダーを取りつけることができます。</dd>
</dl>

<h3 id="ByteStream-related_interfaces" name="ByteStream-related_interfaces">ByteStream 関連のインターフェイス</h3>

<div class="warning">
<p><strong>重要</strong>: これらはまだどこにも実装されておらず、仕様の詳細が実装に十分な完成状態にあるかどうかについて疑問が提起されています。 これは時間とともに変化する可能性があります。</p>
</div>

<dl>
 <dt>{{domxref("ReadableStreamBYOBReader")}}</dt>
 <dd>開発者が提供するストリームデータの読み取りに使用できる BYOB（bring your own buffer、独自のバッファを持ち込む）リーダーを表します（カスタムの {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクターなど）。</dd>
 <dt>{{domxref("ReadableByteStreamController")}}</dt>
 <dd>{{domxref("ReadableStream")}} の状態と内部キューの制御を許可するコントローラーを表します。 バイトストリームコントローラーは、バイトストリーム用です。</dd>
 <dt>{{domxref("ReadableStreamBYOBRequest")}}</dt>
 <dd>{{domxref("ReadableByteStreamController")}} 内のプルインリクエストを表します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>Streams API のドキュメントに合わせてサンプルのディレクトリを作成しました。 <a href="https://github.com/mdn/dom-examples/tree/master/streams">mdn/dom-examples/streams</a> を参照してください。 例は次のとおりです。</p>

<ul>
 <li><a href="http://mdn.github.io/dom-examples/streams/simple-pump/">Simple stream pump</a>（単純なストリームポンプ）: この例は、<code>ReadableStream</code> を使用してそのデータを別のストリームに渡す方法を示しています。</li>
 <li><a href="http://mdn.github.io/dom-examples/streams/grayscale-png/">Grayscale a PNG</a>（PNG のグレースケール化）: この例は、PNG の <code>ReadableStream</code> をグレースケールに変換する方法を示しています。</li>
 <li><a href="http://mdn.github.io/dom-examples/streams/simple-random-stream/">Simple random stream</a>（単純なランダムストリーム）: この例は、カスタムストリームを使用してランダムな文字列を生成し、それらをチャンクとしてキューに入れてから、再度読み取る方法を示しています。</li>
 <li><a href="http://mdn.github.io/dom-examples/streams/simple-tee-example/">Simple tee example</a>（単純な tee の例）: この例は、単純なランダムストリームの例を拡張したもので、ストリームを tee 化して、両方の結果のストリームの独立して読み取る方法を示しています。</li>
 <li><a href="http://mdn.github.io/dom-examples/streams/simple-writer/">Simple writer</a>（単純なライター）: この例では、書き込み可能なストリームに書き込み、ストリームをデコードして、コンテンツを UI に書き込む方法を示します。</li>
 <li><a href="http://mdn.github.io/dom-examples/streams/png-transform-stream/">Unpack chunks of a PNG</a>（PNG のチャンクをアンパックする）: この例は、PNG ファイルのデータを PNG チャンクのストリームに変換することにより、{{domxref("ReadableStream.pipeThrough","pipeThrough()")}} を使用して <code>ReadableStream</code> を他のデータ型のストリームに変換する方法を示します。</li>
</ul>

<p>他の開発者による例</p>

<ul>
 <li><a href="https://fetch-progress.anthum.com/">Streams、Service Worker、および Fetch を含む進行状況インジケーター</a>（英語）。</li>
</ul>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Streams')}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="ReadableStream" name="ReadableStream">ReadableStream</h3>

<p>{{Compat("api.ReadableStream")}}</p>

<h3 id="WritableStream" name="WritableStream">WritableStream</h3>

<p>{{Compat("api.WritableStream")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Streams_API/Concepts">Streams API の概念</a></li>
 <li><a href="/ja/docs/Web/API/Streams_API/Using_readable_streams">読み取り可能なストリームの使用</a></li>
 <li><a href="/ja/docs/Web/API/Streams_API/Using_writable_streams">書き込み可能なストリームの使用</a></li>
</ul>
