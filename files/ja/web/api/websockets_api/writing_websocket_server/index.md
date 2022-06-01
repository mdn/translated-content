---
title: C# で WebSocket サーバーを記述する
slug: Web/API/WebSockets_API/Writing_WebSocket_server
tags:
  - HTML5
  - NeedsMarkupWork
  - チュートリアル
  - WebSockets
translation_of: Web/API/WebSockets_API/Writing_WebSocket_server
---
## はじめに

WebSocket API を使用したい場合は、サーバーを所有していると便利です。この記事では、C# で記述する方法を説明します。どんなサーバーサイドの言語でも行うことができますが、わかりやすく理解しやすいように、 Microsoft の言語を選択しました。

このサーバーは [RFC 6455](https://tools.ietf.org/html/rfc6455) に準拠しているため、Chrome バージョン 16、Firefox 11、IE 10 以上の接続のみを処理します。

## 最初のステップ

WebSocket は [TCP (伝送制御プロトコル)](http://en.wikipedia.org/wiki/Transmission_Control_Protocol) 接続を介して通信します。幸いにも、C# には [TcpListener](https://msdn.microsoft.com/library/system.net.sockets.tcplistener.aspx) クラスがあり、その名前が示すようにします。これは System.Net.Sockets 名前空間にあります。

> **Note:** 書く量を減らすために名前空間を `using` キーワードに含めることをお勧めします。毎回完全な名前空間を入力することなく、名前空間のクラスを使用できます。

### TcpListener

コンストラクター:

```cs
TcpListener(System.Net.IPAddress localaddr, int port)
```

`localaddr` はリスナーの IP を指定し、`port` はポートを指定します。

> **Note:** `string` から `IPAddress` オブジェクトを作成するには、 `IPAddress` の静的メソッド `Parse` を使用してください。

メソッド:

- `Start()`
- `System.Net.Sockets.TcpClient AcceptTcpClient()`
  TCP 接続を待ち、それを受け取り、TcpClient オブジェクトとして返します。

ベアボーンサーバーの実装は次のとおりです。

```cs
using System.Net.Sockets;
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
```

### TcpClient

メソッド:

- `System.Net.Sockets.NetworkStream GetStream()`
  通信チャネルであるストリームを取得します。チャンネルの両側には読み書き機能があります。

プロパティ:

- `int Available`
  このプロパティは送信されたデータのバイト数を示します。値は `NetworkStream.DataAvailable` が _true_ になるまでゼロです。

### NetworkStream

メソッド:

- ```cs
  Write(Byte[] buffer, int offset, int size)
  ```

  buffer からバイトを書き込み、offset と size はメッセージの長さを決定します。

- ```cs
  Read(Byte[] buffer, int offset, int size)
  ```

  buffer を読み込みます。offset と size はメッセージの長さを決定します。

例を拡張してみましょう。

```cs
TcpClient client = server.AcceptTcpClient();

Console.WriteLine("A client connected.");

NetworkStream stream = client.GetStream();

//enter to an infinite cycle to be able to handle every change in stream
while (true) {
    while (!stream.DataAvailable);

    Byte[] bytes = new Byte[client.Available];

    stream.Read(bytes, 0, bytes.Length);
}
```

## ハンドシェイク

クライアントがサーバーに接続すると、単純な HTTP リクエストから WebSocket への接続をアップグレードするための GET リクエストが送信されます。これはハンドシェイクと呼ばれます。

このサンプルコードはクライアントから GET を検出できます。これは、メッセージの最初の 3 バイトが利用可能になるまでブロックされることに注意してください。運用環境では、代替ソリューションを検討する必要があります。

```cs
using System.Text;
using System.Text.RegularExpressions;

while(client.Available < 3)
{
   // wait for enough bytes to be available
}

Byte[] bytes = new Byte[client.Available];

stream.Read(bytes, 0, bytes.Length);

//translate bytes of request to string
String data = Encoding.UTF8.GetString(bytes);

if (Regex.IsMatch(data, "^GET")) {

} else {

}
```

リクエストは簡単に作成できますが、理解するのは少し難しいかもしれません。サーバーのハンドシェイクの完全な説明は RFC 6455 の 4.2.2 項にあります。目的のために、簡単なレスポンスを作成します。

やらなければならないことは次の通りです。

1. 先行または後続空白なしで "Sec-WebSocket-Key" リクエストヘッダーの値を取得します
2. それを "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" (RFC 6455 で指定された特別な GUID)
3. 新しい値の SHA-1 および Base64 ハッシュを計算します
4. HTTP レスポンスの "Sec-WebSocket-Accept" レスポンスヘッダーの値としてハッシュを書き戻します

```cs
 if (new System.Text.RegularExpressions.Regex("^GET").IsMatch(data))
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
```

## メッセージのデコード

ハンドシェイクが成功すると、クライアントはエンコードされたメッセージをサーバーに送信します。

"MDN" を送信すると、次のバイト列が得られます。

```
129 131 61 84 35 6 112 16 109
```

これらのバイト列の意味を見てみましょう。

現在 129 の値を持つ最初のバイトは、次のように分解するビットフィールドです。

| FIN (Bit 0) | RSV1 (Bit 1) | RSV2 (Bit 2) | RSV3 (Bit 3) | Opcode (Bit 4:7) |
| ----------- | ------------ | ------------ | ------------ | ---------------- |
| 1           | 0            | 0            | 0            | 0x1=0001         |

- FIN ビット: このビットは完全なメッセージがクライアントから送信されたかどうかを示します。メッセージはフレームで送信されるかもしれませんが、今のところ単純なものにします。
- RSV1, RSV2, RSV3: エクステンションがネゴシエートされない限り、これらのビットは 0 でなくてはなりません。
- Opcode: これらのビットは受信したメッセージの種類を記述します。 Opcode 0x1 は、これがテキストメッセージであることを意味します。 [Opcode の完全なリスト](https://datatracker.ietf.org/doc/html/rfc6455#section-5.2)

現在 131 の値を持つ 2 番目のバイトは、次のように分解する別のビットフィールドです。

| MASK (Bit 0) | ペイロード長 (Bit 1:7) |
| ------------ | ------------------------ |
| 1            | 0x83=0000011             |

- MASK ビット: "ペイロードデータ" がマスクされているかどうかを定義します。1 に設定すると、マスキングキーが Masking-Key にあり、これは "ペイロードデータ" のマスクを解除するために使用されます。クライアントからサーバーへのすべてのメッセージはこのビットが設定されています。
- ペイロードの長さ: この値が 0〜125 の場合、メッセージの長さになります。 126 の場合、次の 2 バイト (16 ビットの符号なし整数) が長さになります。127 の場合、次の 8 バイト (64ビットの符号なし整数) が長さになります。

> **Note:** 最初のビットはクライアントからサーバーへのメッセージでは常に 1 なので、このバイトから 128 を引いて MASK ビットを取り除くことができます。

メッセージに MASK ビットが設定されていることに注意してください。これは次の 4 バイト (61、84、35、6) がメッセージのデコードに使用されるマスクバイトであることを意味します。これらのバイトはすべてのメッセージとともに変化します。

残りのバイトはエンコードされたメッセージペイロードです。

## デコードアルゴリズム

_D_i_ = _E_i_ XOR _M_\_(_i_ mod 4)

D は復号されたメッセージ配列、E は符号化されたメッセージ配列、M はマスクバイト配列、i はデコードするメッセージバイトの位置です。

C# の例です。

```cs
Byte[] decoded = new Byte[3];
Byte[] encoded = new Byte[3] {112, 16, 109};
Byte[] mask = new Byte[4] {61, 84, 35, 6};

for (int i = 0; i < encoded.Length; i++) {
    decoded[i] = (Byte)(encoded[i] ^ mask[i % 4]);
}
```

## 全体像

### wsserver.cs

```cs
//
// csc wsserver.cs
// wsserver.exe

using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Text.RegularExpressions;

class Server {
    public static void Main() {
        string ip = "127.0.0.1";
        int port = 80;
        var server = new TcpListener(IPAddress.Parse(ip), port);

        server.Start();
        Console.WriteLine("Server has started on {0}:{1}, Waiting for a connection...", ip, port);

        TcpClient client = server.AcceptTcpClient();
        Console.WriteLine("A client connected.");

        NetworkStream stream = client.GetStream();

        // enter to an infinite cycle to be able to handle every change in stream
        while (true) {
            while (!stream.DataAvailable);
            while (client.Available < 3); // match against "get"

            byte[] bytes = new byte[client.Available];
            stream.Read(bytes, 0, client.Available);
            string s = Encoding.UTF8.GetString(bytes);

            if (Regex.IsMatch(s, "^GET", RegexOptions.IgnoreCase)) {
                Console.WriteLine("=====Handshaking from client=====\n{0}", s);

                // 1. Obtain the value of the "Sec-WebSocket-Key" request header without any leading or trailing whitespace
                // 2. Concatenate it with "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" (a special GUID specified by RFC 6455)
                // 3. Compute SHA-1 and Base64 hash of the new value
                // 4. Write the hash back as the value of "Sec-WebSocket-Accept" response header in an HTTP response
                string swk = Regex.Match(s, "Sec-WebSocket-Key: (.*)").Groups[1].Value.Trim();
                string swka = swk + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
                byte[] swkaSha1 = System.Security.Cryptography.SHA1.Create().ComputeHash(Encoding.UTF8.GetBytes(swka));
                string swkaSha1Base64 = Convert.ToBase64String(swkaSha1);

                // HTTP/1.1 defines the sequence CR LF as the end-of-line marker
                byte[] response = Encoding.UTF8.GetBytes(
                    "HTTP/1.1 101 Switching Protocols\r\n" +
                    "Connection: Upgrade\r\n" +
                    "Upgrade: websocket\r\n" +
                    "Sec-WebSocket-Accept: " + swkaSha1Base64 + "\r\n\r\n");

                stream.Write(response, 0, response.Length);
            } else {
                bool fin = (bytes[0] & 0b10000000) != 0,
                    mask = (bytes[1] & 0b10000000) != 0; // must be true, "All messages from the client to the server have this bit set"

                int opcode = bytes[0] & 0b00001111, // expecting 1 - text message
                    msglen = bytes[1] - 128, // & 0111 1111
                    offset = 2;

                if (msglen == 126) {
                    // was ToUInt16(bytes, offset) but the result is incorrect
                    msglen = BitConverter.ToUInt16(new byte[] { bytes[3], bytes[2] }, 0);
                    offset = 4;
                } else if (msglen == 127) {
                    Console.WriteLine("TODO: msglen == 127, needs qword to store msglen");
                    // i don't really know the byte order, please edit this
                    // msglen = BitConverter.ToUInt64(new byte[] { bytes[5], bytes[4], bytes[3], bytes[2], bytes[9], bytes[8], bytes[7], bytes[6] }, 0);
                    // offset = 10;
                }

                if (msglen == 0)
                    Console.WriteLine("msglen == 0");
                else if (mask) {
                    byte[] decoded = new byte[msglen];
                    byte[] masks = new byte[4] { bytes[offset], bytes[offset + 1], bytes[offset + 2], bytes[offset + 3] };
                    offset += 4;

                    for (int i = 0; i < msglen; ++i)
                        decoded[i] = (byte)(bytes[offset + i] ^ masks[i % 4]);

                    string text = Encoding.UTF8.GetString(decoded);
                    Console.WriteLine("{0}", text);
                } else
                    Console.WriteLine("mask bit not set");

                Console.WriteLine();
            }
        }
    }
}
```

### client.html

```html
<!doctype html>
<style>
    textarea { vertical-align: bottom; }
    #output { overflow: auto; }
    #output > p { overflow-wrap: break-word; }
    #output span { color: blue; }
    #output span.error { color: red; }
</style>
<h2>WebSocket Test</h2>
<textarea cols=60 rows=6></textarea>
<button>send</button>
<div id=output></div>
<script>
    // http://www.websocket.org/echo.html

    var button = document.querySelector("button"),
        output = document.querySelector("#output"),
        textarea = document.querySelector("textarea"),
        // wsUri = "ws://echo.websocket.org/",
        wsUri = "ws://127.0.0.1/",
        websocket = new WebSocket(wsUri);

    button.addEventListener("click", onClickButton);

    websocket.onopen = function (e) {
        writeToScreen("CONNECTED");
        doSend("WebSocket rocks");
    };

    websocket.onclose = function (e) {
        writeToScreen("DISCONNECTED");
    };

    websocket.onmessage = function (e) {
        writeToScreen("<span>RESPONSE: " + e.data + "</span>");
    };

    websocket.onerror = function (e) {
        writeToScreen("<span class=error>ERROR:</span> " + e.data);
    };

    function doSend(message) {
        writeToScreen("SENT: " + message);
        websocket.send(message);
    }

    function writeToScreen(message) {
        output.insertAdjacentHTML("afterbegin", "<p>" + message + "</p>");
    }

    function onClickButton() {
        var text = textarea.value;

        text && doSend(text);
        textarea.value = "";
        textarea.focus();
    }
</script>
```

## 関連情報

- [WebSocket サーバーの記述](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
