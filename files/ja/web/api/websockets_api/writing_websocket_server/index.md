---
title: C# で WebSocket サーバーを記述する
slug: Web/API/WebSockets_API/Writing_WebSocket_server
tags:
  - HTML5
  - NeedsMarkupWork
  - WebSockets
  - チュートリアル
translation_of: Web/API/WebSockets_API/Writing_WebSocket_server
---
<h2 id="イントロダクション">イントロダクション</h2>

<p>WebSocket API を使用したい場合は、サーバーを持っている場合に便利です。この記事では、C# で記述する方法を説明します。どんなサーバーサイドの言語でも行うことができますが、わかりやすく理解しやすいように、Microsoft の言語を選択しました。</p>

<p>このサーバーは <a href="http://tools.ietf.org/html/rfc6455">RFC 6455</a> に準拠しているため、Chrome バージョン16、Firefox 11、IE 10 以上の接続のみを処理します。</p>

<h2 id="ファーストステップ">ファーストステップ</h2>

<p>WebSocket は <a href="http://en.wikipedia.org/wiki/Transmission_Control_Protocol">TCP (伝送制御プロトコル)</a> 接続を介して通信します。幸いにも、C# には <a href="https://docs.microsoft.com/ja-jp/dotnet/api/system.net.sockets.tcplistener?view=netframework-4.7.2">TcpListener</a> クラスがあり、その名前が示すようにします。これは System.Net.Sockets 名前空間にあります。</p>

<div class="note">
<p><span style="line-height: 1.572;">少なく書くためには名前空間を using キーワードに含めることをお勧めします。毎回完全な名前空間を入力することなく、名前空間のクラスを使用できます。</span></p>
</div>

<h3 id="TcpListener">TcpListener</h3>

<p>コンストラクタ:</p>

<pre class="brush: cpp">TcpListener(System.Net.IPAddress localaddr, int port)</pre>

<p><code>localaddr</code> はリスナーの IP を指定し、<code>port</code> はポートを指定します。</p>

<div class="note">
<p><span style="line-height: 1.572;"><code>string</code> から<code>IPAddress</code> オブジェクトを作成するには、</span><code>IPAddress</code><span style="line-height: 1.572;"> の静的 </span><code>Parse</code><span style="line-height: 1.572;"> メソッドを使用します。</span></p>
</div>

<p><span style="line-height: 1.572;">メソッド</span><span style="line-height: 1.572;">:</span></p>

<ul>
 <li><code><span style="line-height: 1.572;">Start()</span></code></li>
 <li><span style="line-height: 1.572;"><code>System.Net.Sockets.<a href="https://docs.microsoft.com/ja-jp/dotnet/api/system.net.sockets.tcpclient?redirectedfrom=MSDN&amp;view=netframework-4.7.2" title="http://msdn.microsoft.com/en-us/library/system.net.sockets.tcpclient.aspx">TcpClient</a> AcceptTcpClient()</code><br>
  Tcp 接続を待ち、それを受け取り、TcpClient オブジェクトとして返します。</span></li>
</ul>

<p><span style="line-height: 1.572;">ベアボーンサーバーの実装は次のとおりです。</span></p>

<pre class="brush: cpp">​using System.Net.Sockets;
using System.Net;
using System;

class Server {
    public static void Main() {
        TcpListener server = new TcpListener(IPAddress.Parse("127.0.0.1"), 80);

        server.Start();
        Console.WriteLine("Server has started on 127.0.0.1:80.{0}Waiting for a connection...", Environment.NewLine);

        TcpClient client = server.AcceptTcpClient();

        Console.WriteLine("A client connected.");
    }
}
</pre>

<h3 id="TcpClient"><span style="line-height: 1.572;">TcpClient</span></h3>

<p>メソッド:</p>

<ul>
 <li><code>System.Net.Sockets.<a href="http://msdn.microsoft.com/ja-jp/library/system.net.sockets.networkstream.aspx">NetworkStream</a> GetStream()</code><br>
  通信チャネルであるストリームを取得します。チャンネルの両側には読み書き機能があります。</li>
</ul>

<p>プロパティ:</p>

<ul>
 <li><code>int Available</code><br>
  このプロパティは送信されたデータのバイト数を示します。値は <code>NetworkStream.DataAvailable</code> が true になるまでゼロです。</li>
</ul>

<h3 id="NetworkStream">NetworkStream</h3>

<p>メソッド:</p>

<ul>
 <li><code>Write(Byte[] buffer, int offset, int size)</code><br>
  buffer からバイトを書き込み、offset と size はメッセージの長さを決定します。</li>
 <li><code><span class="brush: cpp" style="line-height: 1.572;">Read(Byte[] buffer, int offset, int size)</span></code><br>
  buffer を読み込みます。offset と size はメッセージの長さを決定します。</li>
</ul>

<p>私たちの例を拡張してみましょう。</p>

<pre class="brush: cpp">TcpClient client = server.AcceptTcpClient();

Console.WriteLine("A client connected.");

NetworkStream stream = client.GetStream();

//enter to an infinite cycle to be able to handle every change in stream
while (true) {
    while (!stream.DataAvailable);

    Byte[] bytes = new Byte[client.Available];

    stream.Read(bytes, 0, bytes.Length);
}</pre>

<h2 id="ハンドシェイキング">ハンドシェイキング</h2>

<p>クライアントがサーバーに接続すると、単純な HTTP リクエストから WebSocket への接続をアップグレードするための GET リクエストが送信されます。これはハンドシェイキングと呼ばれます。</p>

<p>このサンプルコードはクライアントから GET を検出できます。これは、メッセージの最初の 3 バイトが利用可能になるまでブロックされることに注意してください。運用環境では、代替ソリューションを検討する必要があります。</p>

<pre class="brush: cpp">using System.Text;
using System.Text.RegularExpressions;

while(client.Available &lt; 3)
{
   // wait for enough bytes to be available
}

Byte[] bytes = new Byte[client.Available];

stream.Read(bytes, 0, bytes.Length);

//translate bytes of request to string
String data = Encoding.UTF8.GetString(bytes);

if (Regex.IsMatch(data, "^GET")) {

} else {

}</pre>

<p>リクエストは簡単に作成できますが、理解するのは少し難しいかもしれません。サーバーのハンドシェイクの完全な説明は <a href="/ja/docs/Web/API/WebSockets_API/RFC%206455,%20section%204.2.2">RFC 6455、セクション4.2.2</a> にあります。私たちの目的のために、簡単なレスポンスを作成します。</p>

<p>やらなければならないのは:</p>

<ol>
 <li>先行または後続空白なしで "Sec-WebSocket-Key" リクエストヘッダーの値を取得します</li>
 <li>それを "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" (RFC 6455 で指定された特別な GUID)</li>
 <li>新しい値の SHA-1 および Base64 ハッシュを計算します</li>
 <li>HTTP レスポンスの "Sec-WebSocket-Accept" レスポンスヘッダの値としてハッシュを書き戻します</li>
</ol>

<pre class="brush: cpp"><em>
</em>if (new System.Text.RegularExpressions.Regex("^GET").IsMatch(data))
{
    const string eol = "\r\n"; // HTTP/1.1 defines the sequence CR LF as the end-of-line marker

    Byte[] response = Encoding.UTF8.GetBytes("HTTP/1.1 101 Switching Protocols" + eol
        + "Connection: Upgrade" + eol
        + "Upgrade: websocket" + eol
        + "Sec-WebSocket-Accept: " + Convert.ToBase64String(
            System.Security.Cryptography.SHA1.Create().ComputeHash(
                Encoding.UTF8.GetBytes(
                    new System.Text.RegularExpressions.Regex("Sec-WebSocket-Key: (.*)").Match(data).Groups[1].Value.Trim() + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
                )
            )
        ) + eol
        + eol);

    stream.Write(response, 0, response.Length);
}
</pre>

<h2 id="メッセージのデコード">メッセージのデコード</h2>

<p>ハンドシェイクが成功すると、クライアントはエンコードされたメッセージをサーバーに送信します。</p>

<p>"MDN" を送信すると、次のバイトが得られます。</p>

<table>
 <tbody>
  <tr>
   <td>129</td>
   <td>131</td>
   <td>61</td>
   <td>84</td>
   <td>35</td>
   <td>6</td>
   <td>112</td>
   <td>16</td>
   <td>109</td>
  </tr>
 </tbody>
</table>

<p>これらのバイトの意味を見てみましょう。</p>

<p>現在 129 の値を持つ最初のバイトは、次のように分解するビットフィールドです。</p>

<table>
 <thead>
  <tr>
   <th scope="col">FIN (Bit 0)</th>
   <th scope="col">RSV1 (Bit 1)</th>
   <th scope="col">RSV2 (Bit 2)</th>
   <th scope="col">RSV3 (Bit 3)</th>
   <th scope="col">Opcode (Bit 4:7)</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>1</td>
   <td>0</td>
   <td>0</td>
   <td>0</td>
   <td>0x1=0001</td>
  </tr>
 </tbody>
</table>

<ul>
 <li>FIN ビット: このビットは完全なメッセージがクライアントから送信されたかどうかを示します。メッセージはフレームで送信されるかもしれませんが、今のところ単純なものにします。</li>
 <li>RSV1, RSV2, RSV3: エクステンションがネゴシエートされない限り、これらのビットは 0 でなくてはなりません。</li>
 <li><span style="line-height: 1.572;">Opcode: </span>これらのビットは受信したメッセージのタイプを記述します。<span style="line-height: 1.572;">Opcode</span> 0x1 は、これがテキストメッセージであることを意味します。<span style="line-height: 1.572;"> </span><a href="http://tools.ietf.org/html/rfc6455#section-5.2" style="line-height: 1.572;">Opcode の完全なリスト</a></li>
</ul>

<p>現在 131 の値を持つ 2 番目のバイトは、次のように分解する別のビットフィールドです。</p>

<table>
 <thead>
  <tr>
   <th scope="col">MASK (Bit 0)</th>
   <th scope="col">ペイロードの長さ (Bit 1:7)</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>1</td>
   <td>0x83=0000011</td>
  </tr>
 </tbody>
</table>

<ul>
 <li>MASK ビット: "ペイロードデータ" がマスクされているかどうかを定義します。1 に設定すると、マスキングキーが Masking-Key にあり、これは "ペイロードデータ" のマスクを解除するために使用されます。クライアントからサーバーへのすべてのメッセージはこのビットが設定されています。</li>
 <li>ペイロードの長さ: この値が 0〜125 の場合、メッセージの長さになります。126 の場合、次の 2 バイト (16ビットの符号なし整数) が長さになります。127 の場合、次の 8 バイト (64ビットの符号なし整数) が長さになります。</li>
</ul>

<div class="note">
<p>最初のビットはクライアントからサーバーへのメッセージでは常に 1 なので、このバイトから 128 を引いて MASK ビットを取り除くことができます。</p>
</div>

<p>メッセージに MASK ビットが設定されていることに注意してください。これは次の4バイト (61、84、35、および6) がメッセージのデコードに使用されるマスクバイトであることを意味します。これらのバイトはすべてのメッセージとともに変化します。</p>

<p>残りのバイトはエンコードされたメッセージペイロードです。</p>

<h3 id="アルゴリズムのデコード">アルゴリズムのデコード</h3>

<p><em>D<sub>i</sub></em> = <em>E<sub>i</sub></em> XOR <em>M</em><sub>(<em>i</em> mod 4)</sub></p>

<p>D は復号されたメッセージ配列、E は符号化されたメッセージ配列、M はマスクバイト配列、i はデコードするメッセージバイトのインデックスです。</p>

<p>C# の例です:</p>

<pre class="brush: cpp">Byte[] decoded = new Byte[3];
Byte[] encoded = new Byte[3] {112, 16, 109};
Byte[] mask = new Byte[4] {61, 84, 35, 6};

for (int i = 0; i &lt; encoded.Length; i++) {
    decoded[i] = (Byte)(encoded[i] ^ mask[i % 4]);
}</pre>

<h2 id="関連">関連</h2>

<ul>
 <li><a href="/ja/docs/WebSockets-840092-dup/Writing_WebSocket_servers">Writing WebSocket servers</a></li>
</ul>
