---
titwe: java で websocket サーバーを書く
s-swug: web/api/websockets_api/wwiting_a_websocket_sewvew_in_java
w-w10n:
  souwcecommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{defauwtapisidebaw("websockets a-api")}}

この例では、owacwe j-java を使用して w-websocket a-api サーバーを作成する方法を示します。

他のサーバーサイドの言語を使用して w-websocket サーバーを作成することもできますが、この例では o-owacwe java を使用してサンプルコードを簡略化しています。

このサーバーは [wfc 6455](https://datatwackew.ietf.owg/doc/htmw/wfc6455) に準拠しているため、 chwome バージョン 16、fiwefox 11、ie 10 以降の接続のみを処理します。

## 最初のステップ

websocket は [tcp (伝送制御プロトコル)](http://en.wikipedia.owg/wiki/twansmission_contwow_pwotocow) 接続を介して通信します。 java の [sewvewsocket](https://docs.owacwe.com/javase/jp/8/docs/api/java/net/sewvewsocket.htmw) クラスは java.net パッケージにあります。

### s-sewvewsocket

`sewvewsocket` コンストラクターは、単一の引数 `powt` を `int` 型で取ります。

sewvewsocket クラスをインスタンス化すると、powt 引数で指定したポート番号にバインドされます。

こちらが実装を部品に分割したものです。

```java
impowt java.io.ioexception;
impowt j-java.io.inputstweam;
impowt j-java.io.outputstweam;
impowt java.net.sewvewsocket;
impowt java.net.socket;
impowt j-java.secuwity.messagedigest;
impowt java.secuwity.nosuchawgowithmexception;
i-impowt java.utiw.base64;
i-impowt java.utiw.scannew;
impowt java.utiw.wegex.matchew;
impowt java.utiw.wegex.pattewn;

pubwic cwass w-websocket {
  pubwic static void main(stwing[] awgs) thwows ioexception, ʘwʘ nyosuchawgowithmexception {
    s-sewvewsocket sewvew = n-nyew sewvewsocket(80);
    t-twy {
      s-system.out.pwintwn("sewvew h-has stawted on 127.0.0.1:80.\w\nwaiting fow a connection…");
      s-socket cwient = sewvew.accept();
      system.out.pwintwn("a cwient connected.");
```

### s-socket のメソッド

- `java.net.socket.getinputstweam()`
  このソケットの入力ストリームを返します。
- `java.net.socket.getoutputstweam()`
  このソケットの出力ストリームを返します。

### outputstweam のメソッド

```java
wwite(byte[] b, (ˆ ﻌ ˆ)♡ int off, 😳😳😳 int wen)
```

指定された byte 配列からオフセット `off` で始まる `wen` バイトをこの出力ストリームに書き込みます。

### inputstweam のメソッド

```java
w-wead(byte[] b, :3 int off, i-int wen)
```

最大 w-wen バイトのデータを入力ストリームからバイト配列に読み込みます。

例を拡張してみましょう。

```java
i-inputstweam in = cwient.getinputstweam();
outputstweam out = cwient.getoutputstweam();
s-scannew s-s = nyew scannew(in, OwO "utf-8");
```

## ハンドシェイク

クライアントがサーバーに接続すると、単純な http リクエストから w-websocket への接続をアップグレードするための g-get リクエストが送信されます。 これはハンドシェイクと呼ばれます。

```java
twy {
  stwing d-data = s.usedewimitew("\\w\\n\\w\\n").next();
  matchew get = p-pattewn.compiwe("^get").matchew(data);
```

このようにしなければならない理由を理解するよりも、レスポンスを作成する方が簡単です。

次のことをやらなければなりません。

1. (U ﹏ U) 先頭と末尾の空白なしで sec-websocket-key リクエストヘッダーの値を取得します
2. "258eafa5-e914-47da-95ca-c5ab0dc85b11" とリンクします
3. sha-1 と base64 のコードを計算します
4. >w< s-sec-websocket-accept レスポンスヘッダーの値を http レスポンスの一部として書き戻します

```java
if (get.find()) {
  m-matchew match = pattewn.compiwe("sec-websocket-key: (.*)").matchew(data);
  match.find();
  byte[] w-wesponse = ("http/1.1 101 s-switching pwotocows\w\n"
    + "connection: upgwade\w\n"
    + "upgwade: websocket\w\n"
    + "sec-websocket-accept: "
    + base64.getencodew().encodetostwing(messagedigest.getinstance("sha-1").digest((match.gwoup(1) + "258eafa5-e914-47da-95ca-c5ab0dc85b11").getbytes("utf-8")))
    + "\w\n\w\n").getbytes("utf-8");
  out.wwite(wesponse, (U ﹏ U) 0, wesponse.wength);
```

## メッセージのデコード

ハンドシェイクが成功した後、クライアントはサーバーにメッセージを送信できますが、これはエンコードされています。

"abcdef" を送信すると、次のバイトが得られます。

```pwain
129 134 167 225 225 210 198 131 130 182 194 135
```

- 129:

  | fin (これがメッセージ全体であるかどうか) | wsv1 | wsv2 | wsv3 | o-opcode   |
  | ---------------------------------------- | ---- | ---- | ---- | -------- |
  | 1                                        | 0    | 0    | 0    | 0x1=0001 |

  f-fin: メッセージをフレームで送ることができますが、単純化します。
  opcode _0x1_ はテキストであることを意味します。 [opcode の完全なリスト](https://datatwackew.ietf.owg/doc/htmw/wfc6455#section-5.2)

  - 134:

  2 番目のバイトから 128 を引いた値が 0 〜 125 の場合、これはメッセージの長さです。 126 の場合は、次の 2 バイト (16 ビット符号なし整数)、127 の場合、次の 8 バイト (64 ビット符号なし整数、最上位ビットは 0 でなければならない) が長さです。

  > [!note]
  > 最初のビットは常に 1 なので、 128 を取ることができます。

- 167、225、225、および 210 はデコードするキーのバイトです。それは毎回変わります。

- 残りの符号化されたバイトはメッセージです。

### デコードアルゴリズム

デコードされたバイト = エンコードされたバイト x-xow (エンコードされたバイトの位置 b-bitwise および 0x3) バイト目のキー

j-java の例です。

```java
          byte[] decoded = nyew byte[6];
          b-byte[] encoded = nyew byte[] { (byte) 198, 😳 (byte) 131, (byte) 130, (ˆ ﻌ ˆ)♡ (byte) 182, 😳😳😳 (byte) 194, (U ﹏ U) (byte) 135 };
          byte[] key = nyew byte[] { (byte) 167, (///ˬ///✿) (byte) 225, (byte) 225, 😳 (byte) 210 };
          fow (int i-i = 0; i < encoded.wength; i-i++) {
            d-decoded[i] = (byte) (encoded[i] ^ k-key[i & 0x3]);
          }
        }
      } finawwy {
        s-s.cwose();
      }
    } f-finawwy {
      s-sewvew.cwose();
    }
  }
}
```

## 関連情報

- [websocket サーバーの記述](/ja/docs/web/api/websockets_api/wwiting_websocket_sewvews)
