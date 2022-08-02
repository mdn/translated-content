---
title: Java で WebSocket サーバーを記述する
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java
tags:
  - HTML5
  - ハンドシェイク
  - NeedsMarkupWork
  - チュートリアル
  - WebSocket
translation_of: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java
---
## はじめに

この例では、Oracle Java を使用して WebSocket API サーバーを作成する方法を示します。

他のサーバーサイドの言語を使用して WebSocket サーバーを作成することもできますが、この例では Oracle Java を使用してサンプルコードを簡略化しています。

このサーバーは [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455rfc6455) に準拠しているため、 Chrome バージョン 16、Firefox 11、IE 10 以降の接続のみを処理します。

## 最初のステップ

WebSocket は [TCP (伝送制御プロトコル)](http://en.wikipedia.org/wiki/Transmission_Control_Protocol) 接続を介して通信します。 Java の [ServerSocket](https://docs.oracle.com/javase/jp/8/docs/api/java/net/ServerSocket.html) クラスは java.net パッケージにあります。

### ServerSocket

コンストラクター:

ServerSocket`(int port)`

ServerSocket クラスをインスタンス化すると、port 引数で指定したポート番号にバインドされます。

こちらが実装を部品に分割したものです。

```java
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class WebSocket {
  public static void main(String[] args) throws IOException, NoSuchAlgorithmException {
    ServerSocket server = new ServerSocket(80);
    try {
      System.out.println("Server has started on 127.0.0.1:80.\r\nWaiting for a connection...");
      Socket client = server.accept();
      System.out.println("A client connected.");
```

### Socket

メソッド:

- `java.net.`[Socket](https://docs.oracle.com/javase/jp/8/docs/api/java/net/Socket.html) `getInputStream()`
  このソケットの入力ストリームを返します。
- `java.net.`[Socket](https://docs.oracle.com/javase/jp/8/docs/api/java/net/Socket.html) `getOutputStream`
  このソケットの出力ストリームを返します。

### OutputStream

メソッド:

```java
write(byte[] b, int off, int len)
```

指定された byte 配列からオフセット _`off`_ で始まる _`len`_ バイトをこの出力ストリームに書き込みます。

### InputStream

メソッド:

```cpp
read(byte[] b, int off, int len)
```

最大 len バイトのデータを入力ストリームからバイト配列に読み込みます。

例を拡張してみましょう。

```java
InputStream in = client.getInputStream();
OutputStream out = client.getOutputStream();
Scanner s = new Scanner(in, "UTF-8");
```

## ハンドシェイク

クライアントがサーバーに接続すると、単純な HTTP リクエストから WebSocket への接続をアップグレードするための GET リクエストが送信されます。 これはハンドシェイクと呼ばれます。

```java
try {
  String data = s.useDelimiter("\\r\\n\\r\\n").next();
  Matcher get = Pattern.compile("^GET").matcher(data);
```

このようにしなければならない理由を理解するよりも、レスポンスを作成する方が簡単です。

次のことをやらなければなりません。

1. 先頭と末尾の空白なしで Sec-WebSocket-Key リクエストヘッダーの値を取得します
2. "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" とリンクします
3. SHA-1 と Base64 のコードを計算します
4. Sec-WebSocket-Accept レスポンスヘッダーの値を HTTP レスポンスの一部として書き戻します

```java
if (get.find()) {
  Matcher match = Pattern.compile("Sec-WebSocket-Key: (.*)").matcher(data);
  match.find();
  byte[] response = ("HTTP/1.1 101 Switching Protocols\r\n"
    + "Connection: Upgrade\r\n"
    + "Upgrade: websocket\r\n"
    + "Sec-WebSocket-Accept: "
    + Base64.getEncoder().encodeToString(MessageDigest.getInstance("SHA-1").digest((match.group(1) + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").getBytes("UTF-8")))
    + "\r\n\r\n").getBytes("UTF-8");
  out.write(response, 0, response.length);
```

## メッセージのデコード

ハンドシェイクが成功した後、クライアントはサーバーにメッセージを送信できますが、これはエンコードされています。

"abcdef" を送信すると、次のバイトが得られます。

```
129 134 167 225 225 210 198 131 130 182 194 135
```

\- 129:

| FIN (これがメッセージ全体であるかどうか) | RSV1 | RSV2 | RSV3 | Opcode   |
| -------------------------------- | ---- | ---- | ---- | -------- |
| 1                                | 0    | 0    | 0    | 0x1=0001 |

FIN: メッセージをフレームで送ることができますが、単純化します。
Opcode _0x1_ はテキストであることを意味します。 [Opcode の完全なリスト](https://datatracker.ietf.org/doc/html/rfc6455#section-5.2)

\- 134:

2 番目のバイトから 128 を引いた値が 0 〜 125 の場合、これはメッセージの長さです。 126 の場合は、次の 2 バイト (16 ビット符号なし整数)、127 の場合、次の 8 バイト (64 ビット符号なし整数、最上位ビットは 0 でなければならない) が長さです。

> **Note:** 最初のビットは常に 1 なので、 128 を取ることができます。

- 167、225、225、および 210 はデコードするキーのバイトです。それは毎回変わります。

- 残りの符号化されたバイトはメッセージです。

### デコードアルゴリズム

デコードされたバイト = エンコードされたバイト XOR (エンコードされたバイトの位置 BITWISE および 0x3) バイト目のキー

Java の例です。

```java
          byte[] decoded = new byte[6];
          byte[] encoded = new byte[] { (byte) 198, (byte) 131, (byte) 130, (byte) 182, (byte) 194, (byte) 135 };
          byte[] key = new byte[] { (byte) 167, (byte) 225, (byte) 225, (byte) 210 };
          for (int i = 0; i < encoded.length; i++) {
            decoded[i] = (byte) (encoded[i] ^ key[i & 0x3]);
          }
        }
      } finally {
        s.close();
      }
    } finally {
      server.close();
    }
  }
}
```

## 関連情報

- [WebSocket サーバーの記述](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
