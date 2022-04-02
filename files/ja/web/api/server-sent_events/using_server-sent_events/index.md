---
title: Server-Sent Events の利用
slug: Web/API/Server-sent_events/Using_server-sent_events
tags:
  - Advanced
  - DOM
  - Guide
  - Server-sent events
translation_of: Web/API/Server-sent_events/Using_server-sent_events
---
<p>{{DefaultAPISidebar("Server Sent Events")}}</p>

<div class="summary">
<p>Server-Sent Events を使用する Web アプリケーションの開発は、とても簡単です。Web アプリケーションへイベントを送り込む、わずかなコードがサーバ上で必要になりますが、Web アプリケーション側は他の種類のイベントを扱うものとほぼ同じ動作になります。</p>
</div>

<h2 id="Receiving_events_from_the_server" name="Receiving_events_from_the_server">サーバからイベントを受信する</h2>

<p>Server-Sent Event API は <a href="/ja/docs/Server-sent_events/EventSource" title="Server-sent events/EventSource"><code>EventSource</code></a> インターフェイスに含まれています。イベントを受け取るためにサーバへの接続を開始するには、イベントを生成するスクリプトの URI を指定する、新たな <a href="/ja/docs/Server-sent_events/EventSource" title="Server-sent events/EventSource"><code>EventSource</code></a> オブジェクトを作成します。例えば:</p>

<pre class="brush: js">var evtSource = new EventSource("ssedemo.php");
</pre>

<p>イベントを生成するスクリプトが別のドメインに存在する場合は、URI とオプションディクショナリーの両方を指定する新たな <a href="/ja/docs/Server-sent_events/EventSource">EventSource</a> オブジェクトを作成します。クライアントスクリプトが example.com にある場合の例:</p>

<pre class="brush: js"><code>var evtSource = new EventSource("//api.example.com/ssedemo.php", { withCredentials: true } ); </code></pre>

<div class="note">
<p><strong>注記:</strong> <a href="/ja/docs/Server-sent_events/EventSource">EventSource</a> をサポートしていないブラウザがあります。<a href="#Browser_compatibility">ブラウザ実装状況</a>を確認してください。</p>
</div>

<p>インスタンスを生成したら、メッセージの受け取りを始めることができます:</p>

<pre class="brush: js">evtSource.onmessage = function(e) {
  var newElement = document.createElement("li");
  var eventList = document.getElementById('list');

  newElement.innerHTML = "message: " + e.data;
  eventList.appendChild(newElement);
}</pre>

<p>このコードは入力メッセージ (すなわち <code>event</code> フィールドを持たない、サーバからの通知) を受信して、メッセージのテキストをドキュメントの HTML にあるリストへ追加します。</p>

<p><code>addEventListener()</code> を使用してイベントを待ち受けることもできます:</p>

<pre class="brush: js">evtSource.addEventListener("ping", function(e) {
  var newElement = document.createElement("li");

  var obj = JSON.parse(e.data);
  newElement.innerHTML = "ping at " + obj.time;
  eventList.appendChild(newElement);
}, false);
</pre>

<p>前のコードと似ていますが、<code>event</code> フィールドに "ping" が設定されたメッセージがサーバから送られたときに、自動的に呼び出されることが異なります。こちらは <code>data</code> フィールドの JSON をパースして、情報を出力します。</p>

<h2 id="Sending_events_from_the_server" name="Sending_events_from_the_server">サーバからイベントを送信する</h2>

<p>イベントを送信するサーバサイドのスクリプトでは、MIME タイプ text/event-stream での応答が必要です。各々の通知は、2 つの改行で終わるテキストのブロックとして送信されます。イベントストリームの形式について、詳しくは {{ anch("Event stream format") }} をご覧ください。</p>

<p>私たちが使用している PHP のコード例を以下に示します:</p>

<pre class="brush: php">date_default_timezone_set("America/New_York");
header("Content-Type: text/event-stream\n\n");

$counter = rand(1, 10);
while (1) {
  // "ping" イベントを毎秒送信

  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // シンプルなメッセージをランダムな間隔で送信

  $counter--;

  if (!$counter) {
    echo 'data: This is a message at time ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

  ob_end_flush();
  flush();
  sleep(1);
}
</pre>

<p>このコードは、イベントタイプが "ping" のイベントを毎秒生成します。各々のイベントのデータは、イベントが生成された時刻の ISO 8601 形式タイムスタンプを含む JSON オブジェクトです。またランダムな間隔で、シンプルなメッセージ (イベントタイプなし) を送信します。</p>

<h2 id="Error_handling" name="Error_handling">エラーハンドリング</h2>

<p>問題が発生した場合 (ネットワークのタイムアウトや<a href="/ja/docs/HTTP/Access_control_CORS" title="HTTP/Access_control_CORS">アクセスコントロール</a>に関する問題など) は、エラーイベントを生成します。EventSource で <code>onerror</code> コールバックを実装すると、エラーに対してプログラムで対処できます:</p>

<pre class="brush: js">evtSource.onerror = function(e) {
  alert("EventSource failed.");
};
</pre>

<p>Firefox 22 では、エラーイベントの種類を見分ける方法はありません。</p>

<h2 id="Closing_event_streams" name="Closing_event_streams">イベントストリームを閉じる</h2>

<p>デフォルトではクライアントとサーバの間のコネクションを閉じると、コネクションがリセットされます。コネクションは <code>.close()</code> メソッドで終了します。</p>

<pre class="brush: js">evtSource.close();</pre>

<h2 id="Event_stream_format" name="Event_stream_format">イベントストリームの形式</h2>

<p>イベントストリームはテキストデータのシンプルなストリームであり、UTF-8 を用いてエンコードされなければなりません。イベントストリーム内のメッセージは、2 つの改行文字で区切られます。行の先頭にあるコロンは本質的にコメントを表し、無視されます。</p>

<div class="note"><strong>注記:</strong> コメント行は、コネクションがタイムアウトになるのを防ぐために使用できます。サーバはコネクションを維持するために、定期的にコメントを送信できます。</div>

<p>各々のメッセージは、フィールドを一覧化した 1 つ以上のテキスト行で構成されます。各々のフィールドは「フィールド名、その次にコロン、さらにその後にフィールドの値であるテキストデータ」で表されます。</p>

<h3 id="Fields" name="Fields">フィールド</h3>

<p>以下のフィールド名が仕様書で定義されています:</p>

<dl>
 <dt><code>event</code></dt>
 <dd>イベントのタイプです。これが指定されている場合、イベントはブラウザ内で、イベント名に応じたイベントリスナへ送られます。Web サイトのソースコードでは名前付きイベントを受け取るために、<code>addEventListener()</code> を使用します。メッセージでイベント名が指定されていない場合は、<code>onmessage</code> ハンドラが呼び出されます。</dd>
 <dt><code>data</code></dt>
 <dd>メッセージのデータフィールドです。EventSource が <code>data:</code> で始まる、複数の連続した行を受け取ったときは、<a href="http://www.w3.org/TR/eventsource/#dispatchMessage">それらを連結して</a>各項目の間に改行文字を挿入します。終端の改行は取り除かれます。</dd>
 <dt><code>id</code></dt>
 <dd><a href="/ja/docs/Server-sent_events/EventSource" title="Server-sent events/EventSource"><code>EventSource</code></a> オブジェクトの last event ID の値に設定する、イベント ID です。</dd>
 <dt><code>retry</code></dt>
 <dd>イベントの送信を試みるときに使用する reconnection time です。[<em>What code handles this?</em>] これは整数値であることが必要で、reconnection time をミリ秒単位で指定します。整数値ではない値が指定されると、このフィールドは無視されます。</dd>
</dl>

<p>他のフィールド名は、すべて無視されます。</p>

<div class="note"><strong>注記:</strong> 行にコロンが含まれない場合は行全体がフィールド名であり、値は空文字列として扱います。</div>

<h3 id="Examples" name="Examples">例</h3>

<h4 id="Data-only_messages" name="Data-only_messages">データのみのメッセージ</h4>

<p>以下の例では、3 つのメッセージが送信されています。最初のメッセージはコロン文字から始まっているため、コメントです。前述したように、コメントはメッセージが定期的に送信されない可能性がある場合のキープアライブとして有用です。</p>

<p>2 番目のメッセージは、値が "some text" である data フィールドを持っています。3 番目のメッセージは、値が "another message\nwith two lines" である data フィールドを持っています。値に改行文字があることに注意してください。</p>

<pre>: this is a test stream

data: some text

data: another message
data: with two lines
</pre>

<h4 id="Named_events" name="Named_events">名前付きイベント</h4>

<p>こちらの例では、名前付きイベントをいくつか送信しています。それぞれのイベントは <code>event</code> フィールドで指定されたイベント名を持っており、またクライアントでの処理に必要なデータを含む、適切な JSON 文字列を値に持つ <code>data</code> フィールドもあります。もちろん、<code>data</code> フィールドは任意の文字列データを持つことができます。JSON である必要はありません。</p>

<pre>event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
</pre>

<h4 id="Mixing_and_matching" name="Mixing_and_matching">組み合わせ</h4>

<p>名前なしのメッセージだけ、または名前付きイベントだけを使用しなければならないことはありません。これらを 1 つのイベントストリーム内で混ぜ合わせることができます。</p>

<pre>event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Here's a system message of some kind that will get used
data: to accomplish some task.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.EventSource")}}</p>
