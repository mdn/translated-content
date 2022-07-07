---
title: Native messaging
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Native_messaging
---
<div>{{AddonSidebar}}</div>

<p>Native messaging はユーザーのコンピューターにインストールされたアプリケーションと拡張機能との間のメッセージ交換を可能にします。 Native messaging を利用すれば、ネイティブアプリケーションが Web を介してアクセスできなくても拡張機能にサービスを提供できます。典型的な利用例としてはパスワードマネージャーが挙げられます。ネイティブアプリケーションはパスワードの暗号化と保管を行い、拡張機能と通信して Web フォームに入力を行うといったことが可能です。さらに、Native messaging を用いることで、一部のハードウェア等の WebExtension API ではアクセスできないリソースに対してアドオンからアクセスできるようになります。</p>

<p>対象となるネイティブアプリケーションは、ブラウザーを使用してインストールや管理を行うわけではありません。OS のインストール機構を使ってインストールします。ネイティブアプリケーションそのものに加えて、「ホストマニフェスト」または「アプリマニフェスト」と呼ばれる JSON ファイルを用意しなければなりません。アプリマニフェストファイルにはブラウザーからネイティブアプリケーションにアクセスするための方法を記述します。</p>

<p>Native messaging を利用する拡張機能は manifest.json の中で "nativeMessaging" <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions">permission</a> を要求する必要があります。反対に、ネイティブアプリケーション側ではアプリマニフェストの "allowed_extensions" フィールドに拡張機能の ID を含めることで permission を認める必要があります。</p>

<p>それで拡張機能は{{WebExtAPIRef("runtime")}} API の関数セットを用いてネイティブアプリケーションと JSON メッセージを交換することができます。ネイティブアプリケーション側では標準入力 (stdin) を介してメッセージを受信し、標準出力 (stdout) を介してメッセージを送信します。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13833/native-messaging.png" style="display: block; height: 548px; margin-left: auto; margin-right: auto; width: 672px;"></p>

<p>Native messaging のサポートは Chrome とほぼ互換性がありますが、主に 2 つの違いがあります。</p>

<ul>
 <li>アプリマニフェストには <code>allowed_extensions</code> にアプリの ID の配列を記述します。 Chrome では <code>allowed_origins</code> に "chrome-extension" URL の配列を記述します。</li>
 <li>アプリマニフェストが Chrome とは別の場所に保管されます。</li>
</ul>

<p>GitHub の "webextensions-examples" リポジトリの <a href="https://github.com/mdn/webextensions-examples/tree/master/native-messaging">"native-messaging" ディレクトリー</a>に完全な例があります。この記事におけるサンプルコードの大半は、この例から直接持ち込んでいます。</p>

<h2 id="Setup" name="Setup">セットアップ</h2>

<h3 id="Add-on_manifest" name="Add-on_manifest">拡張機能の manifest</h3>

<p>もし拡張機能をネイティブアプリケーションと通信させたい場合、</p>

<ul>
 <li>"nativeMessaging" <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions">permission</a> を <a href="/ja/Add-ons/WebExtensions/manifest.json">manifest.json</a> ファイルに設定する必要があります</li>
 <li><a href="/ja/Add-ons/WebExtensions/manifest.json/applications">applications</a> manifest キーを使用してアドオン ID を明示的に設定すべきです (これはアプリマニフェストが、そのアプリケーションへのアクセスが許可されている拡張機能かどうかを識別するために、ID を利用するためです)</li>
</ul>

<p>以下に manifest.json の例を示します。</p>

<pre class="brush: json">{

  "description": "Native messaging example add-on",
  "manifest_version": 2,
  "name": "Native messaging example",
  "version": "1.0",
  "icons": {
    "48": "icons/message.svg"
  },

  "applications": {
    "gecko": {
      "id": "ping_pong@example.org",
      "strict_min_version": "50.0"
    }
  },

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": "icons/message.svg"
  },

  "permissions": ["nativeMessaging"]

}</pre>

<h3 id="App_manifest" name="App_manifest">App manifest</h3>

<p>アプリマニフェストに、ブラウザーがネイティブアプリケーションに接続する方法を記述します。</p>

<p>アプリマニフェストファイルはネイティブアプリケーションと一緒にインストールする必要があります。ブラウザーはアプリマニフェストファイルを読み込み、検証を行いますが、インストールや管理は行いません。したがって、app manifest ファイルがインストール・アップデートされた時期や方法についてのセキュリティモデルは、WebExtension を使う拡張機能に対してのものというよりはネイティブアプリケーションに対してのものです。</p>

<p>native アプリマニフェストの文法と場所については、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests">Native manifests</a> を見てください。</p>

<p>例として、"ping_pong"ネイティブアプリケーションの manifest を以下に示します。</p>

<pre class="brush: json">{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": [ "ping_pong@example.org" ]
}</pre>

<p>この設定では、"ping_pong@example.org" という ID の 拡張機能において"ping_pong" という名前を {{WebExtAPIRef("runtime")}} API等に渡すことによる接続が許可されます。 アプリケーション自体は "/path/to/native-messaging/app/ping_pong.py" です。</p>

<div class="note">
<p><strong>Note for Windows</strong>: 上記の例におけるネイティブアプリケーションは Python スクリプトです。Windows においては、この方法で期待通りに Python スクリプトを実行させることは難しいため、代替案として、.bat ファイルを作成してマニフェストからリンクします。</p>

<pre class="brush: json">{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
  "type": "stdio",
  "allowed_extensions": [ "ping_pong@example.org" ]
}</pre>

<p>バッチファイルから Python スクリプトを起動します。</p>

<pre class="brush: bash line-numbers  language-bash"><code class="language-bash">@echo off

python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"</code></pre>
</div>

<h2 id="Exchanging_messages" name="Exchanging_messages">メッセージの交換</h2>

<p>上記のセットアップにより、拡張機能はネイティブアプリケーションと JSON メッセージを交換することができます。</p>

<h3 id="Extension_side" name="Extension_side">拡張機能側</h3>

<p>ネイティブメッセージはコンテンツスクリプトで直接使うことはできません; <a href="/ja/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts">バックグラウンドスクリプトで間接的にやりとりする</a>必要があります。</p>

<p>これを使うには2つのパターンがあります:ネクションベースのメッセージングとコネクションレスメッセージングです。</p>

<h4 id="Connection-based_messaging" name="Connection-based_messaging">コネクションベースのメッセージング</h4>

<p>このパターンでは、 {{WebExtAPIRef("runtime.connectNative()")}} を呼びだし、その時にアプリケーションの名前（アプリマニフェストの "name" プロパティの値）を渡します。既にアプリケーションが起動済みでなかった場合、これによってアプリケーションが起動し、{{WebExtAPIRef("runtime.Port")}} オブジェクトを拡張機能に返します。</p>

<p>ネイティブアプリは起動時に次の 2 つの引数を取ります:</p>

<ul>
 <li>アプリマニフェストの完全パス</li>
 <li>(Firefox 55 以降で) 起動元のアドオンの ID (manifest.json の <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications">applications</a> キーにて指定)</li>
</ul>

<div class="note">
<p>Chrome  では引数の扱いが異なります:</p>

<ul>
 <li>Linux と Macでは、Chrome は引数を、拡張機能が開始するオリジンを次の形: <code>chrome-extension://[extensionID]</code>で渡します。これによりアプリは拡張機能を識別できます。</li>
 <li>Windowsでは、Chrome は2つの引数を渡します、最初は拡張機能のオリジンで、2つ目はアプリを開始するChrome ネイティブウィンドウのハンドルです。</li>
</ul>
</div>

<p>アプリケーションは 拡張機能が <code>Port.disconnect()</code> を呼び出すか、接続されたページが閉じられるまで実行し続けます。</p>

<p><code>Port</code> を使用してメッセージを送信するためには、<code>postMessage()</code> 関数を呼び出し、 送信する JSON メッセージを渡します。<code>Port</code> を使用してメッセージを受信するためには、<code>onMessage.addListener()</code> 関数を使用してリスナーを追加します。</p>

<p>"ping_pong" アプリケーションとコネクションを確立するバックグラウンドスクリプトの例を示します。アプリケーションからのメッセージを受信し、ユーザーがブラウザーアクションをクリックするたびに "ping" メッセージを送信します。</p>

<pre class="brush: js">/*
On startup, connect to the "ping_pong" app.
*/
var port = browser.runtime.connectNative("ping_pong");

/*
Listen for messages from the app.
*/
port.onMessage.addListener((response) =&gt; {
  console.log("Received: " + response);
});

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() =&gt; {
  console.log("Sending:  ping");
  port.postMessage("ping");
});</pre>

<h4 id="Connectionless_messaging" name="Connectionless_messaging">コネクションレスメッセージング</h4>

<p>このパターンでは、{{WebExtAPIRef("runtime.sendNativeMessage()")}} を呼び、以下を渡します。</p>

<ul>
 <li>アプリケーションの名前</li>
 <li>送信する JSON メッセージ</li>
 <li>コールバック（オプション）</li>
</ul>

<p>それぞれのメッセージごとに新しいアプリケーションのインスタンスが作成されます。アプリの開始時に次の 2 つの引数が渡されます:</p>

<ul>
 <li>アプリマニフェストの完全パス</li>
 <li>(Firefox 55 以降で) 起動元のアドオンの ID (manifest.json の <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications">applications</a> キーにて指定)</li>
</ul>

<p>アプリからの最初のメッセージは <code>sendNativeMessage()</code> 呼び出しの応答として扱われ、コールバックに渡されます。</p>

<p>以下に、先程の例を <code>runtime.sendNativeMessage()</code> を使って書き直したものを示します。</p>

<pre class="brush: js">function onResponse(response) {
  console.log("Received " + response);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() =&gt; {
  console.log("Sending:  ping");
  var sending = browser.runtime.sendNativeMessage(
    "ping_pong",
    "ping");
  sending.then(onResponse, onError);
});
</pre>

<h3 id="App_side" name="App_side">アプリ側</h3>

<p>アプリケーション側では、標準入力を用いてメッセージを受信し、標準出力を用いてメッセージを送信します。</p>

<p>各メッセージは JSON でシリアライズされ、UTF-8 でエンコードされ、メッセージ長を表す 32-bit の値がネイティブのバイト順で先頭に付加されます。</p>

<p>アプリケーションからの一つのメッセージの最大サイズは 1MB です。アプリケーションへの一つのメッセージの最大サイズは 4GB です。</p>

<p>次の NodeJS コードですぐにメッセージを送受信できます:</p>

<pre class="brush: js line-numbers language-js"><code class="language-js">#<span class="operator token">!</span><span class="operator token">/</span>usr<span class="operator token">/</span>local<span class="operator token">/</span>bin<span class="operator token">/</span>node

process<span class="punctuation token">.</span>stdin<span class="punctuation token">.</span><span class="function token">on</span><span class="punctuation token">(</span><span class="string token">'readable'</span><span class="punctuation token">,</span> <span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="operator token">=&gt;</span> <span class="punctuation token">{</span>
  <span class="keyword token">var</span> input <span class="operator token">=</span> <span class="punctuation token">[</span><span class="punctuation token">]</span>
  <span class="keyword token">var</span> chunk
  <span class="keyword token">while</span> <span class="punctuation token">(</span>chunk <span class="operator token">=</span> process<span class="punctuation token">.</span>stdin<span class="punctuation token">.</span><span class="function token">read</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    input<span class="punctuation token">.</span><span class="function token">push</span><span class="punctuation token">(</span>chunk<span class="punctuation token">)</span>
  <span class="punctuation token">}</span>
  input <span class="operator token">=</span> Buffer<span class="punctuation token">.</span><span class="function token">concat</span><span class="punctuation token">(</span>input<span class="punctuation token">)</span>

  <span class="keyword token">var</span> msgLen <span class="operator token">=</span> input<span class="punctuation token">.</span><span class="function token">readUInt32LE</span><span class="punctuation token">(</span><span class="number token">0</span><span class="punctuation token">)</span>
  <span class="keyword token">var</span> dataLen <span class="operator token">=</span> msgLen <span class="operator token">+</span> <span class="number token">4</span>

  <span class="keyword token">if</span> <span class="punctuation token">(</span>input<span class="punctuation token">.</span>length <span class="operator token">&gt;=</span> dataLen<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="keyword token">var</span> content <span class="operator token">=</span> input<span class="punctuation token">.</span><span class="function token">slice</span><span class="punctuation token">(</span><span class="number token">4</span><span class="punctuation token">,</span> dataLen<span class="punctuation token">)</span>
    <span class="keyword token">var</span> json <span class="operator token">=</span> <span class="constant token">JSON</span><span class="punctuation token">.</span><span class="function token">parse</span><span class="punctuation token">(</span>content<span class="punctuation token">.</span><span class="function token">toString</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">)</span>
    <span class="function token">handleMessage</span><span class="punctuation token">(</span>json<span class="punctuation token">)</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span><span class="punctuation token">)</span>

<span class="keyword token">function</span> <span class="function token">sendMessage</span><span class="punctuation token">(</span><span class="parameter token">msg</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">var</span> buffer <span class="operator token">=</span> Buffer<span class="punctuation token">.</span><span class="function token">from</span><span class="punctuation token">(</span><span class="constant token">JSON</span><span class="punctuation token">.</span><span class="function token">stringify</span><span class="punctuation token">(</span>msg<span class="punctuation token">)</span><span class="punctuation token">)</span>

  <span class="keyword token">var</span> header <span class="operator token">=</span> Buffer<span class="punctuation token">.</span><span class="function token">alloc</span><span class="punctuation token">(</span><span class="number token">4</span><span class="punctuation token">)</span>
  header<span class="punctuation token">.</span><span class="function token">writeUInt32LE</span><span class="punctuation token">(</span>buffer<span class="punctuation token">.</span>length<span class="punctuation token">,</span> <span class="number token">0</span><span class="punctuation token">)</span>

  <span class="keyword token">var</span> data <span class="operator token">=</span> Buffer<span class="punctuation token">.</span><span class="function token">concat</span><span class="punctuation token">(</span><span class="punctuation token">[</span>header<span class="punctuation token">,</span> buffer<span class="punctuation token">]</span><span class="punctuation token">)</span>
  process<span class="punctuation token">.</span>stdout<span class="punctuation token">.</span><span class="function token">write</span><span class="punctuation token">(</span>data<span class="punctuation token">)</span>
<span class="punctuation token">}</span>

process<span class="punctuation token">.</span><span class="function token">on</span><span class="punctuation token">(</span><span class="string token">'uncaughtException'</span><span class="punctuation token">,</span> <span class="punctuation token">(</span><span class="parameter token">err</span><span class="punctuation token">)</span> <span class="operator token">=&gt;</span> <span class="punctuation token">{</span>
  <span class="function token">sendMessage</span><span class="punctuation token">(</span><span class="punctuation token">{</span>error<span class="punctuation token">:</span> err<span class="punctuation token">.</span><span class="function token">toString</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">}</span><span class="punctuation token">)</span>
<span class="punctuation token">}</span><span class="punctuation token">)</span></code></pre>

<p>もうひとつ、Python による例を示します。このアプリケーションはアドオンからのメッセージを受信します。Linuxでは、このファイルを実行可能にしてください。メッセージが "ping" であった場合、"pong" というメッセージを返します。これはPython 2のバージョンです:</p>

<pre class="brush: python line-numbers  language-python"><code class="language-python">#!/usr/bin/python -u

# Note that running python with the `-u` flag is required on Windows,
# in order to ensure that stdin and stdout are opened in binary, rather
# than text, mode.

import json
import sys
import struct


# Read a message from stdin and decode it.
def get_message():
    raw_length = sys.stdin.read(4)
    if not raw_length:
        sys.exit(0)
    message_length = struct.unpack('=I', raw_length)[0]
    message = sys.stdin.read(message_length)
    return json.loads(message)


# Encode a message for transmission, given its content.
def encode_message(message_content):
    encoded_content = json.dumps(message_content)
    encoded_length = struct.pack('=I', len(encoded_content))
    return {'length': encoded_length, 'content': encoded_content}


# Send an encoded message to stdout.
def send_message(encoded_message):
    sys.stdout.write(encoded_message['length'])
    sys.stdout.write(encoded_message['content'])
    sys.stdout.flush()


while True:
    message = get_message()
    if message == "ping":
        send_message(encode_message("pong"))</code></pre>

<p>Python 3では、受信したバイナリーデータを文字列にデコードしないといけません。アドオンに送り返されるコンテンツは構造体を使ってバイナリーデータにエンコードする必要があります:</p>

<pre class="brush: python line-numbers"><code>#!/usr/bin/python -u

# Note that running python with the `-u` flag is required on Windows,
# in order to ensure that stdin and stdout are opened in binary, rather
# than text, mode.

import json
import sys
import struct


# Read a message from stdin and decode it.
def get_message():
    raw_length = sys.stdin.buffer.read(4)

    if not raw_length:
        sys.exit(0)
    message_length = struct.unpack('=I', raw_length)[0]
    message = sys.stdin.buffer.read(message_length).decode("utf-8")
    return json.loads(message)


# Encode a message for transmission, given its content.
def encode_message(message_content):
    encoded_content = json.dumps(message_content).encode("utf-8")
    encoded_length = struct.pack('=I', len(encoded_content))
    # use struct.pack("10s", bytes), to pack a string of the length of 10 characters
    return {'length': encoded_length, 'content': struct.pack(str(len(encoded_content))+"s",encoded_content)}


# Send an encoded message to stdout.
def send_message(encoded_message):
    sys.stdout.buffer.write(encoded_message['length'])
    sys.stdout.buffer.write(encoded_message['content'])
    sys.stdout.buffer.flush()


while True:
    message = get_message()
    if message == "ping":
        send_message(encode_message("pong"))</code></pre>

<h2 id="Closing_the_native_app" name="Closing_the_native_app">ネイティブアプリを閉じる</h2>

<p><code>runtime.connectNative()</code> を使用してネイティブアプリケーションに接続した場合、アプリケーションは拡張機能が <code>Port.disconnect()</code> を呼び出すか接続したページが閉じられるまで実行されます。<code>runtime.sendNativeMessage()</code> を使用してネイティブアプリケーションの実行を開始した場合、アプリケーションはメッセージを受信してレスポンスを送信した後閉じられます。</p>

<p>ネイティブアプリケーションを閉じるために</p>

<ul>
 <li>OS X や Linux のような *nix システムでは、ブラウザーはネイティブアプリケーションが正しく終了する機会を与えるために SIGTERM を送信し、その後 SIGKILL を送信します。これらのシグナルは新しいプロセスグループを作成して分けない限りすべてのサブプロセスに伝播します。</li>
 <li>Windows では、ブラウザーはネイティブアプリケーションのプロセスを <a href="https://msdn.microsoft.com/en-us/library/windows/desktop/ms684161(v=vs.85).aspx">Job object</a> とし、ジョブを kill します。 ネイティブアプリケーションが追加でプロセスを立ち上げ、アプリケーション自体が kill された後もそのままにしたい場合、ネイティブアプリケーションは追加のプロセスを <code><a href="https://msdn.microsoft.com/en-us/library/windows/desktop/ms684863(v=vs.85).aspx">CREATE_BREAKAWAY_FROM_JOB</a></code> フラグを立てて立ち上げる必要があります。</li>
</ul>

<h2 id="Troubleshooting" name="Troubleshooting">トラブルシューティング</h2>

<p>もしうまくいかない場合、<a href="/ja/Add-ons/WebExtensions/デバッグ#ログの出力を見る">ブラウザーコンソール</a>をチェックしてください。ネイティブアプリケーションが何かしらの出力を stderr に送っていた場合、ブラウザーはそれをブラウザーのコンソールにリダイレクトします。そのため、ネイティブアプリケーションが起動できている限り、出力されたエラーメッセージを確認することができます。</p>

<p>アプリケーションが起動できていなかった場合、問題の手がかりとなるエラーメッセージを確認してください。</p>

<pre>"No such native application &lt;name&gt;"</pre>

<ul>
 <li> <code>runtime.connectNative()</code> に渡した名前がアプリマニフェスト中の名前と一致しているか確認してください</li>
 <li>OS X/Linux: アプリマニフェストのファイル名が &lt;name&gt;.json となっていることを確認してください</li>
 <li>OS X/Linux: ネイティブアプリのマニフェストの場所が<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#Mac_OS_X">ここ</a>で述べているところにあるのを確認してください</li>
 <li>Windows: レジストリキーが正しい場所にあり、その名前がアプリマニフェスト中の名前と一致していることを確認してください</li>
 <li>Windows: レジストリキーに指定されたパスがアプリマニフェストを指していることを確認してください</li>
</ul>

<pre>"Error: Invalid application &lt;name&gt;"</pre>

<ul>
 <li>アプリケーションの名前に不正な文字が含まれていないことを確認してください</li>
</ul>

<pre>"'python' is not recognized as an internal or external command, ..."</pre>

<ul>
 <li>Windows: アプリケーションが Python スクリプトの場合、Python がインストールされており、パスが正しく設定されていることを確認してください</li>
</ul>

<pre>"File at path &lt;path&gt; does not exist, or is not executable"</pre>

<ul>
 <li>このメッセージが表示されたとき、アプリマニフェストの発見には成功しています</li>
 <li>アプリマニフェストの "path" が正しいかどうかを確認してください</li>
 <li>Windows: パスセパレータがエスケープされていることを確認してください ("c:\\path\\to\\file").</li>
 <li>アプリがアプリマニフェストの "path" プロパティで示された場所に配置されていることを確認してください</li>
 <li>アプリが実行可能であることを確認してください</li>
</ul>

<pre>"This extension does not have permission to use native application &lt;name&gt;"</pre>

<ul>
 <li>アプリマニフェストの "allowed_extensions" がアドオンの ID を含んでいることを確認してください</li>
</ul>

<pre>"TypeError: browser.runtime.connectNative is not a function"</pre>

<ul>
 <li>アドオンが "nativeMessaging" permission を持っているか確認してください</li>
</ul>

<pre>"[object Object]       NativeMessaging.jsm:218"</pre>

<ul>
 <li>アプリケーションの開始に問題が発生しました</li>
</ul>

<h2 id="Chrome_incompatibilities" name="Chrome_incompatibilities">Chrome での非互換性</h2>

<p>{{Page("Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities", "Native_messaging")}}</p>
