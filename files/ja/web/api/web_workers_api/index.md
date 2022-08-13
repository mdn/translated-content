---
title: Web Workers API
slug: Web/API/Web_Workers_API
tags:
  - API
  - DOM
  - Web Workers
  - Workers
translation_of: Web/API/Web_Workers_API
---
<div>{{DefaultAPISidebar("Web Workers API")}}</div>

<p class="summary"><strong>Web Worker</strong> とは、ウェブアプリケーションにおけるスクリプトの処理をメインとは別のスレッドに移し、バックグラウンドでの実行を可能にする仕組みのことです。時間のかかる処理を別のスレッドに移すことが出来るため、 UI を担当するメインスレッドの処理を中断・遅延させずに実行できるという利点があります。</p>

<h2 id="Web_Workers_concepts_and_usage" name="Web_Workers_concepts_and_usage">Web Worker の概念と使い方</h2>

<p>{{DOMxRef("Worker")}} オブジェクトは {{DOMxRef("Worker.Worker", "Worker()")}} などのコンストラクターで生成されるオブジェクトで、名前を持つ JavaScript ファイルを実行します。 Worker のスレッドで実行されるコードはこのファイルに書かれており、今いる {{DOMxRef("window")}} とは別のグローバルなコンテキストの中で Worker がコードを実行します。Dedicated Worker (専用ワーカー) の場合、そのコンテキストは {{DOMxRef("DedicatedWorkerGlobalScope")}} オブジェクトで表現されます (通常の Worker は単一のスクリプトで使用されますが、 Worker を共有する際は {{DOMxRef("SharedWorkerGlobalScope")}} を使用します)。</p>

<p>Worker のスレッドではあらゆるコードを実行できますが、いくつか例外があります。例えば、 Worker から DOM を直接操作することは出来ません。また、 {{DOMxRef("window")}} にデフォルトで用意されているメソッドやプロパティには Worker から使用できないものもあります。しかし、 <a href="/ja/docs/Web/API/WebSockets_API">WebSockets</a> や <a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> のようなデータストレージに加え、 Firefox OS における <a href="/ja/docs/Web/API/Data_Store_API">Data Store API</a> など、 <code>window</code> に含まれていても使用できるものは数多くあります。詳しくは <a href="/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers">Worker から使用できる関数とクラス</a> を参照してください。</p>

<p>Worker とメインスレッドとの間では、メッセージのシステムを通してデータがやり取りされます。両者は <code>postMessage()</code> メソッドを使ってメッセージを送信し、受け取ったメッセージには <code>onmessage</code> イベントハンドラーで返信します (メッセージは {{Event("Message")}} イベントの <code>data</code> 属性に格納されます)。なお、送信したデータは受取先でコピーされます (共有ではありません)。</p>

<p>メインスレッドのページと同じオリジンであれば、 Web Workers は新しい Worker をいくつでも生成できます。また、 Worker はネットワーク I/O において <a class="internal" href="/ja/docs/Web/API/XMLHttpRequest"><code>XMLHttpRequest</code></a> を使用しますが、 <code>XMLHttpRequest</code> における <code>responseXML</code> と <code>channel</code> 属性は必ず <code>null</code> を返す点で通常と異なります。</p>

<p>Dedicated Worker の他にも、 Worker の種類には以下のようなものがあります。</p>

<ul>
 <li>Shared Worker (共有ワーカー) は、 iframe などの異なる window で実行されている複数のスクリプトから利用できる Worker です。それらのスクリプトと Worker は同じドメイン内にある必要があります。スクリプトどうしがアクティブなポートで通信しなければならないので、 Dedicated Worker よりも少し複雑です。詳しくは {{DOMxRef("SharedWorker")}} を参照してください。</li>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API">ServiceWorker</a> は、複数のウェブアプリケーション間やブラウザ、 (利用可能なら) ネットワークとの間でプロキシサーバーとして動くものです。他の Worker とは異なり、 Service Worker はオフラインでのユーザーエクスペリエンスを実現するために設計されています。ネットワークへのリクエストに割り込み、オンライン・オフラインそれぞれの場合に適した結果をユーザに返します。また、サーバ上のリソースの更新も担います。 Service Worker を使うことで、プッシュ通知やバックグラウンド同期の API も利用可能になります。</li>
 <li>Chrome Worker は Firefox 上でのみ使える Worker です。アドオンの開発時、拡張機能で Web Workers を使いたいとき、または Worker の中で <a href="/ja/js-ctypes">js-ctypes</a> を使いたいときに用いることが出来ます。詳しくは {{DOMxRef("ChromeWorker")}} を参照してください。</li>
 <li><a href="/ja/docs/Web/API/Web_Audio_API#Audio_Workers">Audio Worker</a> は、音声処理を Worker のコンテキスト内でスクリプトで直接実行する能力を提供します。</li>
</ul>

<div class="note">
<p><strong>メモ</strong>: <a href="https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2">Web Worker の仕様</a>にあるように、Worker のエラーイベントはバブルするべきではありません (see {{bug(1188141)}}。これは Firefox 42 で実装されました。</p>

<p> </p>
</div>

<h2 id="Web_Worker_interfaces" name="Web_Worker_interfaces">Web Worker インターフェイス</h2>

<dl>
 <dt>{{DOMxRef("AbstractWorker")}}</dt>
 <dd>{{DOMxRef("Worker")}} や {{DOMxRef("SharedWorker")}} など、すべての Worker に共通な抽象オブジェクトです。</dd>
 <dt>{{DOMxRef("Worker")}}</dt>
 <dd>実行している Worker のスレッドを表します。実行している Worker のコードへメッセージを送る際に用います。</dd>
 <dt>{{DOMxRef("WorkerLocation")}}</dt>
 <dd>{{DOMxRef("Worker")}} で実行されるスクリプトの絶対位置を定義します。</dd>
 <dt>{{DOMxRef("SharedWorker")}}</dt>
 <dd>複数のウィンドウ、 iframe、ワーカーなどいくつかの{{glossary("browsing context", "閲覧コンテキスト")}}から「アクセス可能な」具体的な種類の Worker を表します。</dd>
 <dt>{{DOMxRef("WorkerGlobalScope")}}</dt>
 <dd>{{DOMxRef("Window")}} のように通常のウェブコンテンツと同じ動作をする Worker の一般的なスコープを表します。これと異なる種類の Worker は、このインタフェースに独自の機能をいくつか加えたスコープを持ちます。</dd>
 <dt>{{DOMxRef("DedicatedWorkerGlobalScope")}}</dt>
 <dd>Dedicated Worker のスコープを表します。 {{DOMxRef("WorkerGlobalScope")}} を継承しており、独自の機能がいくつか加えられています。</dd>
 <dt>{{DOMxRef("SharedWorkerGlobalScope")}}</dt>
 <dd>Shared Worker のスコープを表します。 {{DOMxRef("WorkerGlobalScope")}} を継承しており、独自の機能がいくつか加えられています。</dd>
 <dt>{{DOMxRef("WorkerNavigator")}}</dt>
 <dd>ユーザエージェント (クライアント) に関する識別名と状態を表します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>簡単なデモと基本的な使い方は以下を参照してください。</p>

<ul>
 <li><a href="https://github.com/mdn/simple-web-worker">Basic dedicated worker example</a> (<a href="http://mdn.github.io/simple-web-worker/">run dedicated worker</a>).</li>
 <li><a href="https://github.com/mdn/simple-shared-worker">Basic shared worker example</a> (<a href="http://mdn.github.io/simple-shared-worker/">run shared worker</a>).</li>
</ul>

<p>このデモの動く仕組みを詳しく知りたい場合は <a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web Worker を使用する</a>を参照してください。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "workers.html#workers", "Web Workers")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="あわせて参照">あわせて参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web Worker を使用する</a></li>
 <li><a href="/ja/docs/Web/API/Worker">Worker インターフェイス</a></li>
 <li><a href="/ja/docs/Web/API/SharedWorker">SharedWorker インターフェイス</a></li>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/ja/docs/Web/API/Worker/Functions_and_classes_available_to_workers">Web Workers が使用できる関数とクラス</a></li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Advanced_concepts_and_examples">Web Worker を使用する</a></li>
 <li><a href="/ja/docs/Web/API/ChromeWorker">ChromeWorker</a>: Worker の特権/クロームコードでの使用</li>
</ul>
