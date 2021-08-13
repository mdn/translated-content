---
title: Java で WebSocket サーバを記述する
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java
tags:
  - HTML5
  - NeedsMarkupWork
  - WebSockets
  - チュートリアル
  - ハンドシェイキング
translation_of: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java
---
<h2 id="イントロダクション">イントロダクション</h2>

<p>この例では、Oracle Java を使用して WebSocket API サーバーを作成する方法を示します。<br>
 <br>
 他のサーバーサイドの言語を使用して WebSocket サーバーを作成することもできますが、この例では Oracle Java を使用してサンプルコードを簡略化しています。</p>

<p>このサーバーは <a href="http://tools.ietf.org/html/rfc6455">RFC 6455</a> に準拠しているため、Chrome バージョン 16、Firefox 11、IE 10 以降の接続のみを処理します。</p>

<h2 id="ファーストステップ">ファーストステップ</h2>

<p>WebSocket は <a href="http://en.wikipedia.org/wiki/Transmission_Control_Protocol">TCP (伝送制御プロトコル)</a> 接続を介して通信します。 Java の <a href="https://docs.oracle.com/javase/jp/8/docs/api/java/net/ServerSocket.html">ServerSocket</a> クラスは java.net パッケージにあります。</p>

<h3 id="ServerSocket">ServerSocket</h3>

<p>コンストラクタ:</p>

<pre class="brush: java"><code><span class="memberNameLink">ServerSocket</span>(int port)</code></pre>

<p>ServerSocket クラスをインスタンス化すると、port 引数で指定したポート番号にバインドされます。</p>

<p><span style="line-height: 1.572;">私たちが学んだことを実装する方法は次のとおりです。</span></p>

<pre class="brush: java">import java.net.ServerSocket;
import java.net.Socket;

public class Server{
    public static void main(String[] args){
        ServerSocket server = new ServerSocket(80);

        System.out.println("Server has started on 127.0.0.1:80.\r\nWaiting for a connection...");

        Socket client = server.accept();

        System.out.println("A client connected.");
    }
}</pre>

<h3 id="Socket">Socket</h3>

<p>メソッド:</p>

<ul>
 <li><code>java.net.</code><a href="https://docs.oracle.com/javase/jp/8/docs/api/java/net/Socket.html" title="class in java.net">Socket</a><code> <span class="memberNameLink"><a href="https://docs.oracle.com/javase/jp/8/docs/api/java/net/Socket.html#getInputStream--">getInputStream</a></span>()</code><br>
  このソケットの入力ストリームを返します。</li>
 <li><code>java.net.</code><a href="https://docs.oracle.com/javase/jp/8/docs/api/java/net/Socket.html" title="class in java.net">Socket</a><code> <span class="memberNameLink"><a href="https://docs.oracle.com/javase/jp/8/docs/api/java/net/Socket.html#getOutputStream--">getOutputStream</a></span>()</code><br>
  このソケットの出力ストリームを返します。</li>
</ul>

<h3 id="OutputStream">OutputStream</h3>

<p>メソッド:</p>

<pre class="brush: java">write<code>(byte[] b, int off, int len)</code></pre>

<p>指定された byte 配列からオフセット <em><code>off</code></em> で始まる <em><code>len</code></em> バイトをこの出力ストリームに書き込みます。</p>

<h3 id="InputStream">InputStream</h3>

<p>メソッド:</p>

<pre class="brush: java"><span class="brush: cpp" style="line-height: 1.572;">read</span><code>(byte[] b, int off, int len)</code></pre>

<p>最大 len バイトのデータを入力ストリームからバイト配列に読み込みます。<em> </em></p>

<p>私たちの例を拡張してみましょう。</p>

<pre class="brush: java">Socket client = server.accept();

System.out.println("A client connected.");

InputStream in = client.getInputStream();

OutputStream out = client.getOutputStream();

new Scanner(in, "UTF-8").useDelimiter("\\r\\n\\r\\n").next();</pre>

<h2 id="ハンドシェイキング">ハンドシェイキング</h2>

<p>クライアントがサーバーに接続すると、単純な HTTP リクエストから WebSocket への接続をアップグレードするための GET リクエストが送信されます。 これはハンドシェイキングと呼ばれます。</p>

<pre class="brush: java">import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

//translate bytes of request to string
String data = new Scanner(in,"UTF-8").useDelimiter("\\r\\n\\r\\n").next();

Matcher get = Pattern.compile("^GET").matcher(data);

if (get.find()) {

} else {

}</pre>

<p>このようにしなければならない理由を理解するよりも、レスポンスを作成する方が簡単です。</p>

<p>次のことをやらなければなりません</p>

<ol>
 <li>先頭と末尾の空白なしで Sec-WebSocket-Key リクエストヘッダーの値を取得します</li>
 <li>"258EAFA5-E914-47DA-95CA-C5AB0DC85B11" とリンクします</li>
 <li>SHA-1 と Base64 のコードを計算します</li>
 <li>Sec-WebSocket-Accept レスポンスヘッダーの値を HTTP レスポンスの一部として書き戻します。</li>
</ol>

<pre class="brush: java">if (get.find()) {
    Matcher match = Pattern.compile("Sec-WebSocket-Key: (.*)").matcher(data);
    match.find();
    byte[] response = ("HTTP/1.1 101 Switching Protocols\r\n"
            + "Connection: Upgrade\r\n"
            + "Upgrade: websocket\r\n"
            + "Sec-WebSocket-Accept: "
            + DatatypeConverter
            .printBase64Binary(
                    MessageDigest
                    .getInstance("SHA-1")
                    .digest((match.group(1) + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11")
                            .getBytes("UTF-8")))
            + "\r\n\r\n")
            .getBytes("UTF-8");

    out.write(response, 0, response.length);
}
</pre>

<h2 id="メッセージのデコード">メッセージのデコード</h2>

<p>ハンドシェイクが成功した後、クライアントはサーバーにメッセージを送信できますが、これはエンコードされています。</p>

<p>"abcdef" を送信すると、次のバイトが得られます。</p>

<table>
 <tbody>
  <tr>
   <td>129</td>
   <td>134</td>
   <td>167</td>
   <td>225</td>
   <td>225</td>
   <td>210</td>
   <td>198</td>
   <td>131</td>
   <td>130</td>
   <td>182</td>
   <td>194</td>
   <td>135</td>
  </tr>
 </tbody>
</table>

<p>- 129:</p>

<table>
 <thead>
  <tr>
   <th scope="col">FIN (これは全体のメッセージですか？)</th>
   <th scope="col">RSV1</th>
   <th scope="col">RSV2</th>
   <th scope="col">RSV3</th>
   <th scope="col">Opcode</th>
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

<p>FIN: あなたはメッセージをフレームで送ることができますが、今は物事を単純に保ちます。<br>
 Opcode<span style="line-height: 1.572;"> 0x1 は、これがテキストであることを意味します。<a href="http://tools.ietf.org/html/rfc6455#section-5.2">オペコードの完全なリスト</a>です</span></p>

<p>- 134:</p>

<p>2番目のバイトから 128 を引いた値が 0〜125 の場合、これはメッセージの長さです。126 の場合は、次の 2 バイト (16 ビット符号なし整数)、127 の場合、次の 8 バイト (64 ビット符号なし整数、最上位ビットは 0 でなければならない) が長さです。</p>

<div class="note">
<p>最初のビットは常に1なので、128を取ることができます。</p>
</div>

<p>- 167、225、225、および 210 はデコードするキーのバイトです。それは毎回変わります。</p>

<p>- 残りの符号化されたバイトはメッセージです。</p>

<h3 id="アルゴリズムのデコード">アルゴリズムのデコード</h3>

<p>デコードされたバイト = エンコードされたバイト XOR (エンコードされたバイトの位置 BITWISE および 0x3) バイト目のキー</p>

<p>Java の例です</p>

<pre class="brush: java">byte[] decoded = new byte[6];
byte[] encoded = new byte[] {198, 131, 130, 182, 194, 135};
byte[] key = byte[4] {167, 225, 225, 210};

for (int i = 0; i &lt; encoded.length; i++) {
    decoded[i] = (byte)(encoded[i] ^ key[i &amp; 0x3]);
}</pre>

<h2 id="関連">関連</h2>

<ul>
 <li><a href="/ja/docs/WebSockets-840092-dup/Writing_WebSocket_servers">Writing WebSocket servers</a></li>
</ul>
