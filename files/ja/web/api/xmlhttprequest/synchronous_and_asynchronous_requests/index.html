---
title: 同期と非同期のリクエスト
slug: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
tags:
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
---
<p>{{domxref('XMLHttpRequest')}} は同期及び非同期通信の両方に対応しています。しかし、一般的には性能上の理由により、同期リクエストより非同期リクエストを推奨するべきです。</p>

<p>同期リクエストはプログラムの実行をブロックし、画面を「フリーズ」させたりユーザー操作が反応しない状態にしたりすることがあります。</p>

<h2 id="Asynchronous_request" name="Asynchronous_request">非同期リクエスト</h2>

<p>非同期 {{domxref('XMLHttpRequest')}} を使用すると、データが到着したときにコールバックを受け取ります。これにより、リクエストが処理されている間、ブラウザーは通常通りに動作することができます。</p>

<h3 id="Example_send_a_file_to_the_console_log" name="Example_send_a_file_to_the_console_log">例: コンソールログへファイルを送信する</h3>

<p>最も簡単な非同期 {{domxref('XMLHttpRequest')}} の使用法を示します。</p>

<pre class="brush: js notranslate">var xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null); </pre>

<p>2行目で第3引数を <code>true</code> にすることで、リクエストを非同期に処理することを指定しています。</p>

<p>3行目はイベントハンドラー関数オブジェクトを生成し、リクエストの <code>onload</code> 属性に割り当てています。このハンドラーは、4行目でリクエストの <code>readyState</code> を見てトランザクションが完了したかどうかを確認し、もしそうであり、かつ HTTP ステータスが 200 であれば、受信した内容をコンソールにダンプします。エラー発生時には、エラーメッセージが表示されます。</p>

<p>15行目では実際にリクエストを開始します。コールバック処理は状態が変化するたびに呼び出されます。</p>

<h3 id="Example_writing_a_function_to_read_an_external_file" name="Example_writing_a_function_to_read_an_external_file">例: 外部ファイルを読込む標準的な関数を書く</h3>

<p>たくさんの外部ファイルを読み込まなければならないことがあります。これは {{domxref('XMLHttpRequest')}} オブジェクトを非同期で使用して、読み込まれたファイルの内容を指定されたリスナに切り替える標準的な関数です。</p>

<pre class="brush: js notranslate">function xhrSuccess() {
    this.callback.apply(this, this.arguments);
}

function xhrError() {
    console.error(this.statusText);
}

function loadFile(url, callback /*, opt_arg1, opt_arg2, ... */) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.arguments = Array.prototype.slice.call(arguments, 2);
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.send(null);
}
</pre>

<p>使用法:</p>

<pre class="brush: js notranslate">function showMessage(message) {
    console.log(message + this.responseText);
}

loadFile("message.txt", showMessage, "New message!\n\n");
</pre>

<p>ユーティリティ関数 <em><strong>loadFile</strong></em> の引数は、 (i) (HTTP の GET リクエストを介して) 読み込む対象の URL、 (ii) XHR 操作の正常終了時に実行する関数、 (iii) 任意で XHR オブジェクトから成功時のコールバック関数に (<code>arguments</code> プロパティで) そのまま渡される追加の引数のリストです。</p>

<p>1行目では、 XHR 操作の正常終了時に呼び出される関数を宣言しています。これは、 loadFile 関数の呼び出しの中で XHR オブジェクトのプロパティに (11行目で) 割り当てられたコールバック関数 (この場合は <code>showMessage</code> 関数) を呼び出します。 <code>loadFile</code> 関数の呼び出しに提供される追加の引数は (もしあれば)、コールバック関数の実行時に「適用」されます。</p>

<p>5行目では、 XHR 操作の完了に失敗した時に呼び出される関数を宣言しています。</p>

<p>11行目では、 XHR オブジェクトの <code>callback</code> プロパティに <code>loadFile</code> の第2引数で渡された成功時のコールバック関数を格納します。</p>

<p>12行目では、 <code>loadFile</code> の呼び出しで与えられた引数の配列を分割します。第3引数以降、残りのすべての引数が集められ、変数 <code>xhr</code> の arguments プロパティに割り当てられ、成功時のコールバック関数 <code>xhrSuccess</code> に渡され、最終的には <code>xhrSuccess</code> 関数から呼び出されるコールバック関数 (この場合は <code>showMessage</code> 関数) に渡されます。</p>

<p>15行目では、リクエストを非同期に処理することを指示するため、第3引数に <code>true</code> を指定しています．</p>

<p>16行目で実際にリクエストを実行しています。</p>

<h3 id="Example_using_a_timeout" name="Example_using_a_timeout">例: タイムアウトの利用</h3>

<p>読み込みが行われるのを待つ間、プログラムが永遠に待つことを防ぐためにタイムアウトを利用することができます。これは次のように、 {{domxref('XMLHttpRequest')}} オブジェクト上の <code>timeout</code> プロパティの値を設定することで行うことができます。</p>

<pre class="brush: js notranslate">function loadFile(url, timeout, callback) {
    var args = Array.prototype.slice.call(arguments, 3);
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.error("The request for " + url + " timed out.");
    };
    xhr.onload = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback.apply(xhr, args);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.timeout = timeout;
    xhr.send(null);
}</pre>

<p><code>ontimeout</code> ハンドラーを設定することで、 "timeout" イベントを処理するコードを追加していることに注意してください。</p>

<p>使用法:</p>

<pre class="brush: js notranslate">function showMessage (message) {
    console.log(message + this.responseText);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
</pre>

<p>ここではタイムアウトを2000ミリ秒に設定しています．</p>

<div class="note">
<p><strong>注:</strong> <code>timeout</code> の対応は {{Gecko("12.0")}} で追加されました。</p>
</div>

<h2 id="Synchronous_request" name="Synchronous_request">同期リクエスト</h2>

<div class="note"><strong>注:</strong> Gecko 30.0 {{geckoRelease("30.0")}}, Blink 39.0, Edge 13 以降では、メインスレッド上での同期リクエストはユーザーの使い勝手に悪影響を与えるため、非推奨になっています。</div>

<p>同期 XHR リクエストはしばしばウェブ上でハングアップの原因となります。しかし、開発者は通常、ハングアップが発生するのはネットワークの状態が悪かったり、リモートサーバの応答が遅かったりしたときだけなので、この問題に気づくことはありません。 Synchronous XHR は現在非推奨の状態にあります。開発者は同期 API から離れて、代わりに非同期リクエストを使うことをお勧めします。</p>

<p><code>timeout</code> や <code>abort</code> 等の XHR の新機能は同期 XHR では許可されていません。実行すると <code>InvalidAccessError</code> が発生するでしょう。</p>

<h3 id="Example_HTTP_synchronous_request" name="Example_HTTP_synchronous_request">例: HTTP 同期リクエスト</h3>

<p>この例は単純な同期リクエストの作成方法を示しています。</p>

<pre class="brush: js notranslate">var request = new XMLHttpRequest();
request.open('GET', '/bar/foo.txt', false);  // `false` で同期リクエストになる
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
</pre>

<p>3行目でリクエストを送信しています。引数が <code>null</code> であることは、 <code>GET</code> リクエストに本文が必要ないことを示しています。</p>

<p>5行目ではトランザクション完了後，ステータスコードをチェックしています。結果のコードが 200 -- HTTP の "OK" の結果 -- ならば、文書のテキストコンテンツがコンソールに出力されます。</p>

<h3 id="Example_Synchronous_HTTP_request_from_a_Worker" name="Example_Synchronous_HTTP_request_from_a_Worker">例: ワーカーからの同期 HTTP リクエスト</h3>

<p>同期リクエストが通常、実行をブロックしない稀な例として、 <code><a href="/ja/docs/Web/API/Worker">Worker</a></code> 内での {{domxref('XMLHttpRequest')}} の利用があります。</p>

<p><code><strong>example.html</strong></code> (主ページ):</p>

<pre class="brush: html notranslate">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt;
&lt;title&gt;MDN Example&lt;/title&gt;
&lt;script type="text/javascript"&gt;
  var worker = new Worker("myTask.js");
  worker.onmessage = function(event) {
    alert("Worker said: " + event.data);
  };

  worker.postMessage("Hello");
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;&lt;/body&gt;
&lt;/html&gt;
</pre>

<p><code><strong>myFile.txt</strong></code> ({{domxref('XMLHttpRequest')}} 同期呼出しの対象):</p>

<pre class="notranslate">Hello World!!
</pre>

<p><code><strong>myTask.js</strong></code> (<code><a href="/ja/docs/Web/API/Worker">Worker</a></code>):</p>

<pre class="brush: js notranslate">self.onmessage = function (event) {
  if (event.data === "Hello") {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "myFile.txt", false);  // 同期リクエスト
    xhr.send(null);
    self.postMessage(xhr.responseText);
  }
};
</pre>

<div class="note"><strong>注:</strong> 但し、 <code>Worker</code> を使っているため結果的に非同期になります。</div>

<p>これは、バックグラウンドでサーバーとやり取りしたり、一部のコンテンツを先読みしたりするために便利です。例と詳細については <a class="internal" href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web Worker の利用</a>を参照して下さい。</p>

<h3 id="Adapting_Sync_XHR_use_cases_to_the_Beacon_API" name="Adapting_Sync_XHR_use_cases_to_the_Beacon_API">同期 XHR を使用する場面を Beacon API で対応する</h3>

<p>{{domxref('XMLHttpRequest')}} の同期的な使用が置き換えられない場面がいくつかあります。例えば {{domxref("Window.unload_event", "unload")}}, {{domxref("Window.beforeunload_event", "beforeunload")}}, {{domxref("Window.pagehide_event", "pagehide")}} などのイベントの処理中などです。 <code>fetch()</code> API を <code>keepalive</code> フラグ付きで使用することを検討してください。 <code>fetch</code> API を <code>keepalive</code> フラグ付きで使用できないのであれば、ふつうは快適なユーザー操作を提供するために {{domxref("navigator.sendBeacon()")}} API でこれらの場合に対応することができます。</p>

<p>次の例は、 unload ハンドラー内で同期 {{domxref('XMLHttpRequest')}} を使用してサーバーにデータを送信することを試みる、実験的な分析コードを示しています。この結果、ページのアンロードに遅延が発生します。</p>

<pre class="brush: js notranslate">window.addEventListener('unload', logData, false);

function logData() {
    var client = new XMLHttpRequest();
    client.open("POST", "/log", false); // 第3引数で同期 XHR を指定しています。 :(
    client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    client.send(analyticsData);
}
</pre>

<p><strong><code>sendBeacon()</code></strong> メソッドを使用すると、ユーザーエージェントに機会があるとき、<strong>アンロードを遅延させたり次の操作の性能に影響を与えたりすることなく</strong>データがウェブサーバーに非同期で送信されます。</p>

<p>次の例は、 <strong><code>sendBeacon()</code></strong> メソッドを使用してサーバーにデータを送信する実験的な分析コードパターンを示しています。</p>

<pre class="brush: js notranslate">window.addEventListener('unload', logData, false);

function logData() {
    navigator.sendBeacon("/log", analyticsData);
}
</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">Using <code>XMLHttpRequest</code></a></li>
 <li><a href="/ja/docs/Web/Guide/AJAX">AJAX</a></li>
 <li><code><a href="/ja/docs/Web/API/Navigator/sendBeacon">navigator.sendBeacon</a></code></li>
</ul>
