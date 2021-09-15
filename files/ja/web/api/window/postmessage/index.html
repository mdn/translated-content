---
title: window.postMessage
slug: Web/API/Window/postMessage
tags:
  - API
  - Cross-origin Communication
  - DOM
  - HTML DOM
  - Method
  - Reference
  - Window
  - postMessage
  - メソッド
translation_of: Web/API/Window/postMessage
---
<div>{{ApiRef("HTML DOM")}}</div>

<p><strong><code>window.postMessage()</code></strong> は、 {{domxref("Window")}} オブジェクト間で安全にクロスドメイン通信を可能にするためのメソッドです。例えば、ポップアップとそれを表示したページの間や、iframe とそれが埋め込まれたページの間での通信に使うことができます。</p>

<p>通常、異なった複数のページでのスクリプトはそれらが実行されたページが同じプロトコル、ポート番号、ホストである場合に限りお互いにアクセスすることが可能です ("<a href="/ja/docs/Web/Security/Same-origin_policy">同一オリジンポリシー</a>" とも呼ばれます)。正しく使用した <code>window.postMessage</code> はこの制限を安全に回避するための制御された仕組みを提供します。</p>

<p>大まかには、ウィンドウが他のウィンドウへの参照を取得できる場合 ( <code>targetWindow = window.opener</code> など)、<code>targetWindow.postMessage()</code> を使って {{domxref("MessageEvent")}} をそのウィンドウ上で配信することができます。受け取ったウィンドウでは必要に応じて自由に<a href="/ja/docs/Web/Guide/Events">イベントを処理</a>することができます。<code>window.postMessage()</code> に渡された引数 (“message”) は<a href="#The_dispatched_event">イベントオブジェクトを通して対象のウィンドウに公開されます</a>。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>targetWindow</em>.postMessage(<em>message</em>, <em>targetOrigin</em>, [<em>transfer</em>]);</pre>

<dl>
 <dt><code><em>targetWindow</em></code></dt>
 <dd>メッセージを受信するウィンドウへの参照。参照を取得する方法には以下のようなものがあります:
 <ul>
  <li>{{domxref("window.open")}} (新しいウィンドウを開き、それを参照する場合)</li>
  <li>{{domxref("window.opener")}} (現在のウィンドウを開いたウィンドウを参照する場合)</li>
  <li>{{domxref("HTMLIFrameElement.contentWindow")}} (埋め込んだ {{HTMLElement("iframe")}} を親ウィンドウから参照する場合)</li>
  <li>{{domxref("window.parent")}} (埋め込まれた {{HTMLElement("iframe")}} の中から親ウィンドウを参照する場合)</li>
  <li>{{domxref("window.frames")}} + 添字 (名前または数値)</li>
 </ul>
 </dd>
 <dt><code>message</code></dt>
 <dd>他のウィンドウに送られるデータ。データは <a href="/ja/docs/DOM/The_structured_clone_algorithm">the structured clone algorithm</a> に従ってシリアル化されます。つまり、手動でシリアル化することなく様々なデータオブジェクトを渡すことができます。</dd>
 <dt><code>targetOrigin</code></dt>
 <dd>イベントを配信する <code>otherWindow</code> のオリジンを <code>"*"</code> というリテラル文字列（制限しないことを示します）か URI のいずれかで指定します。もしイベントの配信が予約される時点で、<code>targetWindow</code> のドキュメントのスキーマ、ホスト名、あるいはポートが <code>targetOrigin</code> で指定されたものにマッチしない場合、そのイベントは配信されません。3 つすべてがマッチした場合にだけイベントが配信されます。この仕組みはメッセージがどこに送られるかを制御できるようにしています。例えば <code>postMessage</code> をパスワードを送るために利用する場合、悪意のある第三者によるパスワードの傍受を防ぐため、そのメッセージを受け取るべき受信者のオリジンと一致する URI をこの引数に指定しておくことが非常に重要になります。 <strong>送信先ウィンドウのドキュメントがどこに配置されるのかを知っている場合、<code>*</code> ではなく具体的な <code>targetOrigin</code> を指定してください。具体的なターゲットを指定しない場合、相手が悪意を持ったサイトであっても、送信したデータが公開されることを意味します。</strong></dd>
 <dt><code><em><strong>transfer</strong></em></code> {{optional_Inline}}</dt>
 <dd>メッセージと一緒に転送される {{domxref("Transferable")}} オブジェクトのシーケンス。これらのオブジェクトの所有権は送信先に移動され、送信元では使えなくなります。</dd>
</dl>

<h2 id="The_dispatched_event" name="The_dispatched_event">配信されるイベント</h2>

<p><code>otherWindow</code> は以下の JavaScript を実行することで、配信されたメッセージを受け取ることができます。</p>

<pre class="brush:js">window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (event.origin !== "http://example.org:8080")
    return;

  // ...
}
</pre>

<p>配信されたメッセージは以下のプロパティを持ちます。</p>

<dl>
 <dt><code>data</code></dt>
 <dd>他のウィンドウから渡されたメッセージを保持しているオブジェクト。</dd>
 <dt><code>origin</code></dt>
 <dd><code>postMessage</code> が呼び出されたときにメッセージを送るウィンドウの<a href="/ja/docs/Glossary/Origin" title="Origin">オリジン</a>。この文字列は、プロトコルと "://"、ホスト名（存在する場合）、そして、":" の後に続くポート番号（デフォルトポートと指定するポートが異なる場合）が連結されたものです。典型的なオリジンの例は <code>https://example.org</code> (この場合のポートは <code>443</code>)、<code>http://example.net</code> (この場合のポートは <code>80</code>)、そして <code>http://example.com:8080</code>。このオリジン生成元はそのウィンドウの現在もしくは将来のオリジンであることを保証<em>していない</em>ことに注意してください。<code>postMessage</code> が呼び出された時とは異なる場所に移動しているかもしれません。</dd>
 <dt><code>source</code></dt>
 <dd>メッセージを送った <code><a href="/ja/docs/DOM/window" title="DOM/window">window</a></code> オブジェクトへの参照。これを使うことでオリジンの異なる二つのウィンドウ間で双方向の通信を確立することができます。</dd>
</dl>

<h2 id="Security_concerns" name="Security_concerns">セキュリティの考慮事項</h2>

<p><strong>他のサイトからメッセージを受け取りたくない場合、<code>message</code> イベントに対して一切イベントリスナーを追加しないでください。</strong>これはセキュリティ的な問題を避けるための完全にフールプルーフな方法です。</p>

<p>他のサイトからメッセージを受け取りたい場合、<code>origin</code> あるいは <code>source</code> プロパティを用いて<strong>常に送信者の識別情報を確かめてください</strong>。任意のウィンドウ（例えば、<code>http://evil.example.com</code> も含む）は任意の他のウィンドウにメッセージを送ることができ、見知らぬ送信者が悪意あるメッセージを送らない保証はありません。識別情報を確かめても、<strong>常に受け取ったメッセージの構文を確かめる</strong>べきです。さもなければ、信頼されたメッセージだけを送るとして信頼されたサイトにセキュリティホールが存在した場合に、クロスサイトスクリプティングのセキュリティホールをあなたのサイトに開けることになり得ます。</p>

<p><strong>他のウィンドウに <code>postMessage</code> でデータを送信する場合、 <code>*</code> ではなく、常に具体的なターゲットオリジンを指定してください。 </strong>悪意を持ったサイトはあなたの知らないうちに送信先ウィンドウの場所を変更することができ、そのまま <code>postMessage</code> で送信されたデータを傍受することができてしまいます。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js">/*
 * &lt;http://example.com:8080&gt; にある、window A のスクリプト:
 */

var popup = window.open(/* ポップアップの詳細 */);

// ポップアップブロッカーでブロックされず、ポップアップが完全にロードされたとき

// ウィンドウがその場所を変更していない場合、これは何もしません。
popup.postMessage("ユーザー名は 'bob' 、パスワードは 'secret' です",
                  "https://secure.example.net");

// ウィンドウがその場所を変更していない場合、
//これはポップアップに送るメッセージのキューに追加します。
popup.postMessage("hello there!", "http://example.com");

function receiveMessage(event)
{
  // このメッセージの送信者は信頼している者か？（例えば、最初開いたものと違
  // うかもしれません）。
  if (event.origin !== "http://example.com")
    return;

  // event.source は popup
  // event.data は "hi there yourself!  the secret response is: rheeeeet!"
}
window.addEventListener("message", receiveMessage, false);
</pre>

<pre class="brush:js">/*
 * &lt;http://example.org&gt; で実行される popup のスクリプト:
 */

// postMessage が呼び出された後に呼び出されます。
function receiveMessage(event)
{
  // このメッセージの送信者は信頼している者か？
  if (event.origin !== "http://example.com:8080")
    return;

  // event.source は window.opener
  // event.data は "hello there!"

  // 受け取ったメッセージのオリジンを確かめたい場合（どんな場合でもそうするべ
  // きです）、メッセージに返答するための便利なイディオムは event.source 上
  // の postMessage を呼び出し、targetOrigin に event.origin を指定すること
  // です。
  event.source.postMessage("hi there yourself!  the secret response " +
                           "is: rheeeeet!",
                           event.origin);
}

window.addEventListener("message", receiveMessage, false);
</pre>

<h2 id="Notes" name="Notes">注記</h2>

<p>任意のウィンドウが、いつでも、ウィンドウの文書の場所にかかわらず、メッセージを送るために、任意の他のウィンドウ上でこのメソッドにアクセスするかもしれません。従って、任意のイベントリスナーはメッセージを受け取る際に、<code>origin</code> あるいは <code>source</code> プロパティを用いて、まず最初にメッセージの送信者の識別情報をチェック<strong>しなければなりません</strong>。これを軽視することはできません。なぜなら、<strong><code>origin</code> あるいは <code>source</code> プロパティのチェックの失敗はクロスサイトスクリプティング攻撃を可能にする</strong>からです。</p>

<p>非同期に配信されるスクリプト（タイムアウト、ユーザーが生成したイベント）のために <code>postMessage</code> の呼び出し元の判別が不可能であるとき、<code>postMessage</code> によって送られるイベントを待ち受けているイベントハンドラは例外を投げます。</p>

<p><code>postMessage()</code> は {{domxref("MessageEvent")}} を、<em>すべての待ち状態の実行コンテキストが終了した後のみ</em>配信するためにスケジューリングします。例えば、 <code>postMessage()</code> がイベントハンドラーから呼び出された場合、 {{domxref("MessageEvent")}} が配信される前に、そのイベントハンドラーが最後まで実行され、同じイベントの残りのハンドラーが実行されます。</p>

<p>配信されるイベントの <code>origin</code> プロパティは呼び出すウィンドウの <code>document.domain</code> の現在の値に影響されません。</p>

<p>IDN ホスト名に限った話ですが、<code>origin</code> プロパティの値が Unicode と Punycode のどちらなのかは一貫していません。ですから、IDN サイトからのメッセージを期待する場合にこのプロパティを用いるときは、互換性を高めるために、IDN と Punycode の両方でチェックしてください。この値は最終的には 一貫して IDN になるはずですが、現在は IDN と Punycode 両方の形式を扱うべきです。</p>

<p>送信元ウィンドウが <code>javascript:</code> や <code>data:</code> のURLを持つ場合、<code>origin</code> プロパティの値はその URL を読み込んだスクリプトのオリジンになります。</p>

<h3 id="Using_window.postMessage_in_extensions_Non-standard_inline" name="Using_window.postMessage_in_extensions_Non-standard_inline">window.postMessage を拡張機能で使う {{Non-standard_inline}}</h3>

<p><code>window.postMessage</code> は chrome コードで実行される JavaScript で利用可能です（例：拡張内および特権コード）。しかし、配信されるイベントの <code>source</code> プロパティはセキュリティ上の制限から常に <code>null</code> です（他のプロパティは期待された値です）。</p>

<p>コンテンツスクリプトやウェブコンテキストスクリプトは <code>targetOrigin</code> を拡張機能 (バックグラウンドスクリプトやコンテンツスクリプト) と直接通信するために指定することはできません。ウェブやコンテンツのスクリプトは、 <code>window.postMessage</code> を <code>targetOrigin</code> を <code>"*"</code> にして使用することで、すべてのリスナーにブロードキャストすることができますが、これは拡張機能がそのようなメッセージのオリジンを特定することができないこと、他のリスナー (制御するべきでないものも含む) が待ち受けしている可能性があるため推奨されません。</p>

<p>コンテンツスクリプトでバックグラウンドスクリプトと通信したい場合は <a href="/ja/Add-ons/WebExtensions/API/runtime">runtime.sendMessage</a> を使うべきです。ウェブコンテキストスクリプトでバックグラウンドスクリプトと通信したい場合はカスタムイベント（ゲストページから覗かれなくない場合など、必要であればランダム生成したイベント名で）を使うことができます。</p>

<p>最後に、 <code>file:</code> URL のページへのメッセージを送るには <code>targetOrigin</code> 引数を <code>"*"</code> にする必要があります。 <code>file://</code> はセキュリティ上の制限のために用いることはできません、この制限は将来修正されるかもしれません。</p>

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
   <td>{{SpecName('HTML WHATWG', "web-messaging.html#dom-window-postmessage", "postMessage()")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.postMessage")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Document.domain")}}</li>
 <li>{{domxref("CustomEvent")}}</li>
</ul>
