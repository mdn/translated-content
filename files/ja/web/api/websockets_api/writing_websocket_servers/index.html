---
title: WebSocket サーバーの記述
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
tags:
  - HTML5
  - NeedsContent
  - NeedsExample
  - WebSocket
  - WebSockets
  - ガイド
  - チュートリアル
translation_of: Web/API/WebSockets_API/Writing_WebSocket_servers
---
<p><span class="seoSummary">WebSocket サーバは、特定のプロトコルに従うサーバの任意のポートを待機する TCP アプリケーションです。カスタムサーバーを作成する作業は人々を悩ませる傾向があります。ただし、選択したプラットフォームに簡単な WebSocket サーバーを実装するのは簡単です。</span></p>

<p>WebSocket サーバは、C(++) や Python、PHP や<a href="/ja/docs/Web/JavaScript/Server-Side_JavaScript">サーバサイド JavaScript</a> などの <a href="https://en.wikipedia.org/wiki/Berkeley_sockets">Berkeley sockets</a> が利用可能なサーバサイドプログラミング言語で記述できます。これは特定の言語のチュートリアルではありませんが、独自のサーバーの作成を容易にするガイドとして役立ちます。</p>

<p>あなたはまだ HTTP がどのように動くのかを知り、中級プログラミング経験を得ている必要があるでしょう。言語サポートによっては、TCP ソケットに関する知識が必要な場合があります。このガイドの範囲は、WebSocket サーバーを作成するために必要な最小限の知識を提示することです。</p>

<div class="note">
<p>最新の公式 WebSockets 仕様である <a href="http://datatracker.ietf.org/doc/rfc6455/?include_text=1">RFC 6455</a> を参照してください。セクション 1 と 4-7 はサーバー実装者にとって特に興味深いものです。第 10 章ではセキュリティについて説明しています。サーバーを公開する前にセキュリティを正しく理解する必要があります。</p>
</div>

<p>ここでは WebSocket サーバについて非常に低いレベルで説明しています。WebSocket サーバは多くの場合、リバースプロキシ (通常の HTTP サーバなど) を使用して WebSocket ハンドシェイクを検出、事前処理し、それらのクライアントを実際の WebSocket サーバに送信します。つまり、(例えば) クッキーと認証ハンドラーを使用してサーバ側のコードを膨らませる必要はありません。</p>

<h2 id="WebSocket_ハンドシェイク"><a name="Handshake">WebSocket ハンドシェイク</a></h2>

<p>まず、サーバーは標準の TCP ソケットを使用して着信ソケット接続を待ち受ける必要があります。プラットフォームによっては、すでに処理されている可能性があります。たとえば、サーバーが example.com、8000番ポートで待ち受けているとし、ソケットサーバーが <code>/chat</code> で GET リクエストにレスポンスしたとします。</p>

<div class="warning">
<p><strong>警告:</strong> サーバーは選択したポートで待機しますが、80 または 443 以外のポートを選択すると、ファイアウォールやプロキシに問題が発生する可能性があります。443番ポートの接続はより頻繁に成功する傾向がありますが、もちろんその接続には安全な接続 (TLS/SSL) が必要です。また、ほとんどのブラウザ (特に Firefox 8 以降) ではセキュリティで保護されていない WebSocket サーバーへの接続を許可していないことに注意してください。</p>
</div>

<p>ハンドシェイクは WebSockets の "Web" です。それは HTTP から WS への橋渡しです。ハンドシェイクでは、接続の詳細がネゴシエートされ、いずれの当事者も条件が悪い場合には完了前に取り消すことができます。 サーバーはクライアントがリクエストするすべてをのものを理解するように注意する必要があります。そうしないとセキュリティの問題が発生します。</p>

<div class="note">
<p><strong>Tip:</strong> request-uri (ここでは<code>/chat</code>) は仕様に定義された意味を持ちません。多くの人がうまくそれを使用して、あるサーバーが複数の WebSocket アプリケーションを処理できるようにします。たとえば、<code>example.com/chat</code> はマルチユーザチャットアプリを呼び出すことができ、同じサーバの <code>/game</code> はマルチプレイヤーゲームを呼び出すことができます。</p>
</div>

<h3 id="クライアントハンドシェイクリクエスト">クライアントハンドシェイクリクエスト</h3>

<p>サーバーを構築しているにもかかわらず、依然としてクライアントは WebSocket ハンドシェイクプロセスを開始する必要があります。したがってクライアントのリクエストをどのように解釈するかを知っておく必要があります。<strong>クライアント</strong>は次のようなかなり標準的な HTTP リクエスト (HTTP バージョンは 1.1 以上<strong>でなければならず</strong>、メソッドは<code>GET</code> <strong>でなければなりません</strong>) を送信します。</p>

<pre class="line-numbers  language-html notranslate"><code class="language-html">GET /chat HTTP/1.1
Host: example.com:8000
<strong>Upgrade: websocket
Connection: Upgrade</strong>
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13</code></pre>

<p>クライアントはここで拡張子 および/または サブプロトコルを求めることができます。詳細は「<a href="/ja/docs/WebSockets-840092-dup/Writing_WebSocket_servers#Miscellaneous_2">その他</a>」を参照してください。また <code>User-Agent</code>、<code>Referer</code>、<code>Cookie</code>、認証ヘッダーなどの一般的なヘッダーも存在する可能性があります。あなたはそれらで何でもしてください。WebSocket には直接関係しません。それらを無視することも安全です。多くの一般的な設定では、リバースプロキシは既にそれらを処理しています。</p>

<div class="note">
<p><strong>Tip:</strong> すべての<strong>ブラウザ</strong>は <a href="/ja/docs/Web/HTTP/HTTP_access_control#Origin"><code>Origin</code> ヘッダー</a>を送信します。 このヘッダをセキュリティ (同じ起点のチェック、ホワイトリスト/ブラックリストなど) に使用し、あなたが見ているものが気に入らなければ <a href="/ja/docs/Web/HTTP/Status#403">403 Forbidden</a> を送ることができます。ただし、ブラウザ以外のエージェントは、偽の <code>Origin</code> を送信するだけであることに注意してください。ほとんどのアプリケーションは、このヘッダーのない要求を拒否します。</p>
</div>

<p>ヘッダーが解釈されていないか値が正しくない場合、サーバーは "<a href="/ja/docs/HTTP/Response_codes#400">400 Bad Request</a>" を送信し、すぐにソケットを閉じる必要があります。通常は、HTTP レスポンス本体でハンドシェークが失敗した理由を示すかもしれませんが、メッセージは表示されないかもしれません (ブラウザはそれを表示しません)。 サーバーが WebSocket のバージョンを認識しない場合、サーバーは解釈可能なバージョンを含む <code>Sec-WebSocket-Version</code> ヘッダーを返す必要があります。(このガイドでは最新のv13について説明しています)。 ここで、最も興味深いヘッダーである <code>Sec-WebSocket-Key</code> に移動しましょう。</p>

<div class="note">
<p><strong>Note:</strong> <a href="/ja/docs/Web/HTTP/Status">通常の HTTP ステータスコード</a>は、ハンドシェイクの前にのみ使用できます。ハンドシェイクが成功したら、別のコードセット (仕様の 7.4 節で定義されている) を使用する必要があります。</p>
</div>

<h3 id="サーバーハンドシェイクレスポンス">サーバーハンドシェイクレスポンス</h3>

<p>このリクエストを受け取ったら、<strong>server</strong> はこれ (各ヘッダーは <code>\r\n</code> で終わり、最後の <code>\r\n</code> は最後に付く) と似たかなり奇妙な (ただしまだ HTTP の) レスポンスを送るべきです。</p>

<pre class="line-numbers  language-html notranslate"><code class="language-html"><strong>HTTP/1.1 101 Switching Protocols</strong>
Upgrade: websocket
Connection: Upgrade
<strong>Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
</strong></code></pre>

<p>さらに、サーバーはここでの 拡張/サブプロトコル リクエストを決定できます。詳細は<a href="/ja/docs/WebSockets-840092-dup/Writing_WebSocket_servers#Miscellaneous">その他</a>を参照してください。<code>Sec-WebSocket-Accept</code> の部分は面白いです。サーバーは、クライアントが送信した <code>Sec-WebSocket-Accept</code> から派生しなければなりません。<br>
 これを取得するには、クライアントの <code>Sec-WebSocket-Key</code> と <span style="line-height: 1.5em;">"</span><code style="font-size: 14px;">258EAFA5-E914-47DA-95CA-C5AB0DC85B11</code><span style="line-height: 1.5em;">" </span>を連結して (これは "<a href="https://en.wikipedia.org/wiki/Magic_string">マジック文字列</a>" です)、結果の <a href="https://en.wikipedia.org/wiki/SHA-1">SHA-1 ハッシュ</a>を取り、ハッシュのエンコーディングを <a href="https://en.wikipedia.org/wiki/Base64">base64</a> にして返します。</p>

<div class="note">
<p><strong>FYI:</strong> このように見た目は複雑すぎるプロセスが存在するため、サーバーが WebSocket をサポートしているかどうかはクライアントには明らかです。これはサーバーが WebSockets 接続を受け入れ、HTTP リクエストとしてデータを解釈する場合にセキュリティ上の問題が発生する可能性があるため重要です。</p>
</div>

<p>したがって、Key が "<code>dGhlIHNhbXBsZSBub25jZQ==</code>" だった場合、Accept は "<code>s3pPLMBiTxaQ9kYGzzhZRbK+xOo=</code>" になります。サーバーがこれらのヘッダーを送信すると、ハンドシェイクは完了し、データのスワップを開始できます。</p>

<div class="note">
<p>サーバーは、Set-Cookie のような他のヘッダーを送信したり、レスポンスハンドシェイクを送信する前に他のステータスコードで認証またはリダイレクトを要求したりすることができます。</p>
</div>

<h3 id="クライアントを追跡する">クライアントを追跡する</h3>

<p>これは WebSocket プロトコルには直接関係しませんが、ここで言及する価値はあります。サーバーはクライアントのソケットを追跡して、ハンドシェイクをすでに完了しているクライアントとハンドシェイクを再開しないようにする必要があります。同じクライアント IP アドレスが複数回接続しようとする可能性があります (<a href="https://en.wikipedia.org/wiki/Denial_of_service">サービス拒否攻撃</a>から自分自身を守るためにサーバーが接続を多すぎると拒否することがあります)。</p>

<h2 id="データフレームの交換">データフレームの交換</h2>

<p>クライアントまたはサーバーのいずれかがいつでもメッセージを送信することができます。これが WebSocket の魔法です。しかし、これらのいわゆる「フレーム」のデータから情報を抽出することはあまり魔法のような経験ではありません。すべてのフレームは同じ特定のフォーマットに従いますが、クライアントからサーバーに向かうデータは <a href="https://en.wikipedia.org/wiki/XOR_cipher">XOR 暗号化</a> (32ビットキー) を使用してマスクされます。本明細書の第5節でこれについて詳細に説明する。</p>

<h3 id="フォーマット">フォーマット</h3>

<p>各データフレーム (クライアントからサーバーへ、またはその逆) は、次の同じ形式に従います。</p>

<pre class="line-numbers  language-html notranslate"><code class="language-html">Frame format:
​​
      0                   1                   2                   3
      0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
     +-+-+-+-+-------+-+-------------+-------------------------------+
     |F|R|R|R| opcode|M| Payload len |    Extended payload length    |
     |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
     |N|V|V|V|       |S|             |   (if payload len==126/127)   |
     | |1|2|3|       |K|             |                               |
     +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
     |     Extended payload length continued, if payload len == 127  |
     + - - - - - - - - - - - - - - - +-------------------------------+
     |                               |Masking-key, if MASK set to 1  |
     +-------------------------------+-------------------------------+
     | Masking-key (continued)       |          Payload Data         |
     +-------------------------------- - - - - - - - - - - - - - - - +
     :                     Payload Data continued ...                :
     + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
     |                     Payload Data continued ...                |
     +---------------------------------------------------------------+</code></pre>

<p>MASK ビットはメッセージがエンコードされているかどうかを示します。クライアントからのメッセージはマスクされている必要がありますので、サーバはこのビットが 1 であることを確認する必要があります (実際、<a href="http://tools.ietf.org/html/rfc6455#section-5.1">セクション5.1</a>ではクライアントがマスクされていないメッセージを送信する場合、サーバはクライアントから切断する必要があります)。フレームをクライアントに戻すときは、マスクしたりマスクビットを設定しないでください。後でマスキングについて説明します。注意：セキュアソケットを使用している場合でも、メッセージをマスクする必要があります。RSV1-3 は無視することができますが、それは拡張のためのものです。</p>

<p>opcode フィールドは、ペイロードデータをどのように解釈するかを定義します。継続の場合 <span style="font-family: courier new,andale mono,monospace; line-height: 1.5;">0x0 </span>、テキスト (UTF-8 で常にエンコードされる) の場合は <code style="font-style: normal; line-height: 1.5;">0x1</code>、バイナリの場合は <code style="font-style: normal; line-height: 1.5;">0x2</code>、およびその他のいわゆる「制御コード」については後で説明します。この WebSocket バージョンでは、<span style="line-height: 1.5;"><code>0x3</code> </span>〜  <span style="line-height: 1.5;"><code>0x7</code></span> および <span style="line-height: 1.5;"><code>0xB</code> </span>〜<span style="line-height: 1.5;"><code>0xF</code></span> は意味を持ちません。</p>

<p>FIN ビットは、これがシリーズ内の最後のメッセージであるかどうかを示します。0 の場合、サーバーはメッセージのより多くの部分をリスニングし続けます。それ以外の場合、サーバーは配信されたメッセージを考慮する必要があります。これについては後で詳しく説明します。</p>

<h3 id="ペイロード長のデコード">ペイロード長のデコード</h3>

<p>ペイロードデータを読み取るには、いつ読み終えるべきかを知っておく必要があります。そのためペイロードの長さを知ることが重要です。残念ながら、これはやや複雑です。それを読むには、次の手順を実行します。</p>

<ol>
 <li>ビット9〜15 (インクルーシブ) を読み取り、それを符号なし整数として解釈します。それが 125 以下であれば、それが長さです。あなたはそれを読み終えました。126 の場合は手順2に、127 の場合は手順3に進みます。</li>
 <li>次の16ビットを読み取り、それらを符号なし整数として解釈します。 それであなたは読み終えました。</li>
 <li>次の 64 ビットを読んで、それらを符号なし整数として解釈する(最上位ビットは 0 でなければならない)。それであなたは読み終えました。</li>
</ol>

<h3 id="データの読み込みとマスク解除">データの読み込みとマスク解除</h3>

<p>MASK ビットがセットされていれば (クライアントからサーバへのメッセージではそうあるべきです)、次の4オクテット (32ビット) を読み込みます。これがマスキングキーです。ペイロード長とマスキングキーがデコードされたら、ソケットからそのバイト数を読み取ることができます。データを <strong>ENCODED</strong>、キーを <strong>MASK</strong> としましょう。<strong>DECODED</strong> を取得するには、<strong>ENCODED</strong> のオクテット (テキストデータの文字のバイト) をループし、オクテットを MASK の (iモジュロ4) オクテットを使用して XOR します。擬似コードの場合(JavaScript が有効な場合)</p>

<pre class="line-numbers  language-html notranslate"><code class="language-html">var DECODED = "";
for (var i = 0; i &lt; ENCODED.length; i++) {
    DECODED[i] = ENCODED[i] ^ MASK[i % 4];
}</code></pre>

<p><span style="line-height: 1.5;">これで、アプリケーションに応じて <strong>DECODED</strong> が何を意味するのかを理解することができます。</span></p>

<h3 id="メッセージフラグメンテーション">メッセージフラグメンテーション</h3>

<p>FIN フィールドとオペコードフィールドは連携して、別々のフレームに分割されたメッセージを送信します。これはメッセージフラグメンテーションと呼ばれます。フラグメンテーションは、オペコード <code>0x0</code> 〜 <code>0x2</code> でのみ使用できます。</p>

<p><span style="line-height: 1.5;">オペコードはフレームの意味を示しています。<code>0x1</code> の場合、ペイロードはテキストです。<code>0x2</code> の場合、ペイロードはバイナリデータです。ただし、</span><code style="font-style: normal; line-height: 1.5;">0x0</code><span style="line-height: 1.5;"> の場合、フレームは継続フレームです。つまりサーバーはフレームのペイロードをそのクライアントから受信した最後のフレームに連結する必要があります。ここでは、サーバーがテキストメッセージを送信するクライアントに反応する概略を示します。第1のメッセージは単一のフレームで送信され、第2のメッセージは3つのフレームにわたって送信されます。FIN とオペコードの詳細は、クライアントに対してのみ表示されます。</span></p>

<pre class="line-numbers  language-html notranslate" style="font-size: 14px;"><code class="language-html">Client: FIN=1, opcode=0x1, msg="hello"
Server: (process complete message immediately) Hi.
Client: FIN=0, opcode=0x1, msg="and a"
Server: (listening, new message containing text started)
Client: FIN=0, opcode=0x0, msg="happy new"
Server: (listening, payload concatenated to previous message)
Client: FIN=1, opcode=0x0, msg="year!"
Server: (process complete message) Happy new year to you too!</code></pre>

<p>最初のフレームにメッセージ全体が含まれていることに注意してください(<code>FIN=1</code> および <code>opcode!=0x0</code>)、それによりサーバは適切に処理またはレスポンスできます。クライアントが送信した2番目のフレームにはテキストペイロード (<code>opcode=0x1</code>) がありますが、メッセージ全体がまだ到着していません (<code>FIN=0</code>)。そのメッセージの残りの部分はすべて継続フレーム(<code>opcode=0x0</code>) と共に送信され、メッセージの最終フレームは <code>FIN=1</code> でマークされます。<a href="http://tools.ietf.org/html/rfc6455#section-5.4">仕様の 5.4 節</a>では、メッセージフラグメンテーションについて説明があります。</p>

<h2 id="Ping_と_Pong_WebSockets_のハートビート">Ping と Pong: WebSockets のハートビート</h2>

<p>ハンドシェイク後の任意の時点で、クライアントまたはサーバのどちらかが、相手にpingを送信することを選択できます。 pingが受信されると、受信者はできるだけ早くpongを返さなければなりません。 これを使用して、たとえばクライアントがまだ接続されていることを確認できます。</p>

<p>Ping や Pong は単なる通常のフレームですが、<strong>コントロールフレーム</strong>です。ping のオペコードは <code>0x9</code>、pong のオペコードは <code>0xA</code> です。ping を取得したら、ping と同じペイロードデータを持つ pong を送ります (ping と pong の場合、最大ペイロード長は125です)。ping を送信することなく pong を取得することもできます。その場合はこれを無視してください。</p>

<div class="note">
<p>あなたが pong を送信する機会を得る前に複数の ping を取得した場合でも、1つの pong しか送信しません。</p>
</div>

<h2 id="接続を閉じる">接続を閉じる</h2>

<p>クライアントまたはサーバの接続を閉じるには指定した制御シーケンスを含むデータの制御フレームを送信して、終了ハンドシェイクを開始します (<a href="http://tools.ietf.org/html/rfc6455#section-5.5.1">5.5.1 項</a>を参照)。このようなフレームを受信すると、もう１つの peer はレスポンスとしてクローズフレームを送信します。最初の peer は接続を閉じます。接続の終了後に受信されたそれ以上のデータは、その後破棄されます。</p>

<h2 id="その他"><a name="Miscellaneous">その他</a></h2>

<div class="note">
<p>WebSocket コード、エクステンション、サブプロトコルなどは、<a href="http://www.iana.org/assignments/websocket/websocket.xml">IANA WebSocket プロトコルレジストリ</a>に登録されています。</p>
</div>

<p>WebSocket のエクステンションとサブプロトコルは、ハンドシェイク中にヘッダーを介してネゴシエートされます。エクステンションとサブプロトコルは異なるものというにはあまりにも似ていることがありますが、明確な区別があります。エクステンションは WebSocket <strong>フレーム</strong>を制御し、ペイロードを<strong>変更</strong>しますが、サブプロトコルは WebSocket <strong>ペイロード</strong>を構造化しますが、<strong>何も変更しません</strong>。エクステンションは任意のもので一般化されています (圧縮など)。サブプロトコルは必須のもので、ローカライズされています (チャットや MMORPG ゲームなど)。</p>

<h3 id="エクステンション">エクステンション</h3>

<div class="note">
<p><strong>このセクションは拡張が必要です。あなたがそうする準備ができている場合は編集してください。</strong></p>
</div>

<p>エクステンションはファイルを誰かに電子メールで送る前に圧縮していると考えてください。あなたが何をしても、同じデータをさまざまな形で送信しています。受信者は最終的にローカルコピーと同じデータを得ることができますが、別の方法で送信されます。それがエクステンションの機能です。WebSockets はプロトコルとデータを送信する簡単な方法を定義しますが、圧縮などのエクステンションでは同じデータを短い形式で送信することができます。</p>

<div class="note">
<p>エクステンションについては、仕様の 5.8, 9, 11.3.2, 11.4 節で説明しています。</p>
</div>

<p><em>TODO</em></p>

<h3 id="サブプロトコル">サブプロトコル</h3>

<p>サブプロトコルをカスタム <a href="https://en.wikipedia.org/wiki/XML_schema">XML スキーマ</a>または <a href="https://en.wikipedia.org/wiki/Document_Type_Definition">doctype 宣言</a>と考えてください。あなたはまだ XML とその構文を使用していますが、あなたが合意した構造によってさらに制限されます。WebSocket のサブプロトコルはまさにそのようなものです。それらは空想的な何かを導入しておらず、構造を確立するだけです。doctype やスキーマと同様に、両者はサブプロトコルに同意しなければなりません。doctype やスキーマとは異なり、サブプロトコルはサーバー上に実装されており、クライアントから外部参照することはできません。</p>

<div class="note">
<p>サブプロトコルは、仕様のセクション 1.9, 4.2, 11.3.4、および 11.5 で説明されています。</p>
</div>

<p>クライアントは特定のサブプロトコルを要求する必要があります。 これを行うには、<strong>元のハンドシェイクの一部として</strong>次のようなものを送ります：</p>

<pre class="line-numbers  language-html notranslate"><code class="language-html">GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp</code></pre>

<p>または同様に：</p>

<pre class="line-numbers  language-html notranslate"><code class="language-html">...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp</code></pre>

<p>これでサーバーはクライアントが提案してサポートしているプロトコルの1つを選択する必要があります。複数ある場合は、クライアントが送信した最初のものを送信します。私たちのサーバーが <code>soap</code> と <code>wamp</code> の両方を使用できると想像してください。 次に、レスポンスハンドシェイクで次のメッセージが送信されます。</p>

<pre class="line-numbers  language-html notranslate"><code class="language-html">Sec-WebSocket-Protocol: soap</code></pre>

<div class="warning">
<p>サーバーは複数の <code>Sec-Websocket-Protocol</code> ヘッダーを送信できません。<br>
 サーバーがサブプロトコルを使用したくない場合、<strong style="line-height: 1.5;"><code>Sec-WebSocket-Protocol</code> </strong><strong>ヘッダーを送信すべきではありません</strong>。 空白のヘッダーを送信するのが間違っています。<br>
 クライアントは、必要なサブプロトコルを取得できない場合に接続を閉じることがあります。</p>
</div>

<p>サーバーが特定のサブプロトコルに従うようにしたいのであれば、必然的にサーバー上に特別なコードが必要になります。<code>json</code> サブプロトコルを使用しているとしましょう。このサブプロトコルではすべてのデータが　<a href="https://en.wikipedia.org/wiki/JSON">JSON</a> として渡されます。クライアントがこのプロトコルを要求し、サーバーがそれを使用したい場合、サーバーは　JSON パーサーを持つ必要があります。実際に言えば、これはライブラリの一部になりますが、サーバーはデータを渡す必要があります。</p>

<div class="note">
<p><strong>Tip:</strong> 名前の競合を避けるため、サブプロトコル名をドメイン文字列の一部にすることをお勧めします。Example Inc. 専用の独自の形式を使用するカスタムチャットアプリを構築する場合は、次のように使用します: <code>Sec-WebSocket-Protocol: chat.example.com</code>。これは必須ではないことに注意してください。これは単なるオプションです。任意の文字列を使用できます。</p>
</div>

<h2 id="関連">関連</h2>

<ul>
 <li><a href="https://github.com/alexhultman/libwshandshake">WebSocket handshake library in C++</a></li>
 <li><a href="/ja/docs/WebSockets/Writing_WebSocket_server" title="/en-US/docs/WebSockets/Writing_WebSocket_server">Tutorial: Websocket server in C#</a></li>
 <li><a href="/ja/docs/WebSockets/Writing_WebSocket_client_applications">Writing WebSocket client applications</a></li>
 <li><a href="/ja/docs/WebSockets/WebSocket_Server_Vb.NET">Tutorial: Websocket server in VB.NET</a></li>
</ul>
