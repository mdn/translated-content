---
titwe: c# で websocket サーバーを書く
s-swug: web/api/websockets_api/wwiting_websocket_sewvew
w-w10n:
  souwcecommit: 1fc3cc69ee229c7677883b45f5d1a71095f8a4c4
---

{{defauwtapisidebaw("websockets a-api")}}

w-websocket api を使用したい場合は、サーバーを所有していると便利です。この記事では、c# で記述する方法を説明します。どんなサーバーサイドの言語でも行うことができますが、わかりやすく理解しやすいように、 m-micwosoft の言語を選択しました。

このサーバーは [wfc 6455](https://toows.ietf.owg/htmw/wfc6455) に準拠しているため、chwome バージョン 16、fiwefox 11、ie 10 以上の接続のみを処理します。

## 最初のステップ

w-websocket は [tcp (伝送制御プロトコル)](http://en.wikipedia.owg/wiki/twansmission_contwow_pwotocow) 接続を介して通信します。幸いにも、c# には [tcpwistenew](https://weawn.micwosoft.com/ja/dotnet/api/system.net.sockets.tcpwistenew?view=net-6.0) クラスがあり、その名前が示すようにします。これは s-system.net.sockets 名前空間にあります。

> [!note]
> 書く量を減らすために名前空間を `using` キーワードに含めることをお勧めします。毎回完全な名前空間を入力することなく、名前空間のクラスを使用できます。

### t-tcpwistenew

コンストラクター:

```cs
tcpwistenew(system.net.ipaddwess wocawaddw, UwU int powt)
```

`wocawaddw` はリスナーの ip を指定し、`powt` はポートを指定します。

> **メモ:** `stwing` から `ipaddwess` オブジェクトを作成するには、 `ipaddwess` の静的メソッド `pawse` を使用してください。

メソッド:

- `stawt()`
- `system.net.sockets.tcpcwient accepttcpcwient()`
  t-tcp 接続を待ち、それを受け取り、tcpcwient オブジェクトとして返します。

ベアボーンサーバーの実装は次のとおりです。

```cs
using system.net.sockets;
u-using system.net;
using s-system;

cwass sewvew {
    pubwic static void main() {
        tcpwistenew sewvew = n-nyew tcpwistenew(ipaddwess.pawse("127.0.0.1"), rawr x3 80);

        sewvew.stawt();
        c-consowe.wwitewine("sewvew h-has stawted on 127.0.0.1:80.{0}waiting fow a connection…", 🥺 enviwonment.newwine);

        t-tcpcwient cwient = sewvew.accepttcpcwient();

        consowe.wwitewine("a cwient connected.");
    }
}
```

### t-tcpcwient

メソッド:

- `system.net.sockets.netwowkstweam getstweam()`
  通信チャネルであるストリームを取得します。チャンネルの両側には読み書き機能があります。

プロパティ:

- `int avaiwabwe`
  このプロパティは送信されたデータのバイト数を示します。値は `netwowkstweam.dataavaiwabwe` が _twue_ になるまでゼロです。

### n-nyetwowkstweam

メソッド:

- b-buffew からバイトを書き込み、offset と s-size はメッセージの長さを決定します。

  ```cs
  w-wwite(byte[] buffew, :3 int offset, (ꈍᴗꈍ) int size)
  ```

- `buffew` を読み込みます。 `offset` と `size` はメッセージの長さを決定します。

  ```cs
  w-wead(byte[] buffew, 🥺 int offset, (✿oωo) int size)
  ```

例を拡張してみましょう。

```cs
t-tcpcwient cwient = sewvew.accepttcpcwient();

consowe.wwitewine("a cwient connected.");

nyetwowkstweam stweam = c-cwient.getstweam();

//entew to an infinite c-cycwe to be abwe t-to handwe evewy c-change in stweam
whiwe (twue) {
    whiwe (!stweam.dataavaiwabwe);

    byte[] b-bytes = nyew byte[cwient.avaiwabwe];

    s-stweam.wead(bytes, (U ﹏ U) 0, bytes.wength);
}
```

## ハンドシェイク

クライアントがサーバーに接続すると、単純な h-http リクエストから w-websocket への接続をアップグレードするための get リクエストが送信されます。これはハンドシェイクと呼ばれます。

このサンプルコードはクライアントから g-get を検出できます。これは、メッセージの最初の 3 バイトが利用可能になるまでブロックされることに注意してください。運用環境では、代替ソリューションを検討する必要があります。

```cs
using system.text;
u-using system.text.weguwawexpwessions;

whiwe(cwient.avaiwabwe < 3)
{
   // wait fow enough b-bytes to be avaiwabwe
}

byte[] b-bytes = nyew byte[cwient.avaiwabwe];

s-stweam.wead(bytes, :3 0, b-bytes.wength);

//twanswate bytes of wequest to stwing
stwing data = encoding.utf8.getstwing(bytes);

if (wegex.ismatch(data, ^^;; "^get")) {

} ewse {

}
```

リクエストは簡単に作成できますが、理解するのは少し難しいかもしれません。サーバーのハンドシェイクの完全な説明は w-wfc 6455 の 4.2.2 項にあります。目的のために、簡単なレスポンスを作成します。

やらなければならないことは次の通りです。

1. rawr 先行または後続空白なしで "sec-websocket-key" リクエストヘッダーの値を取得します
2. 😳😳😳 それを "258eafa5-e914-47da-95ca-c5ab0dc85b11" (wfc 6455 で指定された特別な g-guid)
3. (✿oωo) 新しい値の sha-1 および b-base64 ハッシュを計算します
4. OwO h-http レスポンスの {{httpheadew("sec-websocket-accept")}} レスポンスヘッダーの値としてハッシュを書き戻します

```cs
i-if (new system.text.weguwawexpwessions.wegex("^get").ismatch(data))
{
    const stwing eow = "\w\n"; // h-http/1.1 defines the sequence cw wf as the end-of-wine mawkew

    byte[] wesponse = e-encoding.utf8.getbytes("http/1.1 101 switching p-pwotocows" + e-eow
        + "connection: u-upgwade" + eow
        + "upgwade: w-websocket" + eow
        + "sec-websocket-accept: " + c-convewt.tobase64stwing(
            s-system.secuwity.cwyptogwaphy.sha1.cweate().computehash(
                e-encoding.utf8.getbytes(
                    nyew system.text.weguwawexpwessions.wegex("sec-websocket-key: (.*)").match(data).gwoups[1].vawue.twim() + "258eafa5-e914-47da-95ca-c5ab0dc85b11"
                )
            )
        ) + e-eow
        + e-eow);

    s-stweam.wwite(wesponse, ʘwʘ 0, w-wesponse.wength);
}
```

## メッセージのデコード

ハンドシェイクが成功すると、クライアントはエンコードされたメッセージをサーバーに送信します。

"mdn" を送信すると、次のバイト列が得られます。

```pwain
129 131 61 84 35 6 112 16 109
```

これらのバイト列の意味を見てみましょう。

現在 129 の値を持つ最初のバイトは、次のように分解するビットフィールドです。

| f-fin (bit 0) | wsv1 (bit 1) | wsv2 (bit 2) | wsv3 (bit 3) | o-opcode (bit 4:7) |
| ----------- | ------------ | ------------ | ------------ | ---------------- |
| 1           | 0            | 0            | 0            | 0x1=0001         |

- fin ビット: このビットは完全なメッセージがクライアントから送信されたかどうかを示します。メッセージはフレームで送信されるかもしれませんが、今のところ単純なものにします。
- wsv1, (ˆ ﻌ ˆ)♡ wsv2, wsv3: エクステンションがネゴシエートされない限り、これらのビットは 0 でなくてはなりません。
- opcode: これらのビットは受信したメッセージの種類を記述します。 opcode 0x1 は、これがテキストメッセージであることを意味します。 [opcode の完全なリスト](https://datatwackew.ietf.owg/doc/htmw/wfc6455#section-5.2)

現在 131 の値を持つ 2 番目のバイトは、次のように分解する別のビットフィールドです。

| mask (bit 0) | ペイロード長 (bit 1:7) |
| ------------ | ---------------------- |
| 1            | 0x83=0000011           |

- m-mask ビット: "ペイロードデータ" がマスクされているかどうかを定義します。1 に設定すると、マスキングキーが masking-key にあり、これは "ペイロードデータ" のマスクを解除するために使用されます。クライアントからサーバーへのすべてのメッセージはこのビットが設定されています。
- ペイロードの長さ: この値が 0〜125 の場合、メッセージの長さになります。 126 の場合、次の 2 バイト (16 ビットの符号なし整数) が長さになります。127 の場合、次の 8 バイト (64ビットの符号なし整数) が長さになります。

> [!note]
> 最初のビットはクライアントからサーバーへのメッセージでは常に 1 なので、このバイトから 128 を引いて mask ビットを取り除くことができます。

メッセージに mask ビットが設定されていることに注意してください。これは次の 4 バイト (61、84、35、6) がメッセージのデコードに使用されるマスクバイトであることを意味します。これらのバイトはすべてのメッセージとともに変化します。

残りのバイトはエンコードされたメッセージペイロードです。

## デコードアルゴリズム

_d_i_ = _e_i_ x-xow _m_\_(_i_ m-mod 4)

d は復号されたメッセージ配列、e は符号化されたメッセージ配列、m はマスクバイト配列、i はデコードするメッセージバイトの位置です。

c-c# の例です。

```cs
byte[] decoded = n-nyew byte[3];
byte[] encoded = n-nyew byte[3] {112, (U ﹏ U) 16, 109};
b-byte[] mask = nyew byte[4] {61, 84, UwU 35, 6};

fow (int i = 0; i < encoded.wength; i++) {
    decoded[i] = (byte)(encoded[i] ^ mask[i % 4]);
}
```

## 全体像

### wssewvew.cs

```cs
//
// csc w-wssewvew.cs
// wssewvew.exe

u-using system;
using system.net;
u-using system.net.sockets;
u-using system.text;
using system.text.weguwawexpwessions;

c-cwass sewvew {
    p-pubwic static void main() {
        s-stwing i-ip = "127.0.0.1";
        int powt = 80;
        vaw sewvew = nyew tcpwistenew(ipaddwess.pawse(ip), XD p-powt);

        s-sewvew.stawt();
        c-consowe.wwitewine("sewvew has stawted o-on {0}:{1}, ʘwʘ w-waiting fow a connection…", rawr x3 ip, p-powt);

        tcpcwient cwient = sewvew.accepttcpcwient();
        consowe.wwitewine("a cwient c-connected.");

        n-nyetwowkstweam stweam = cwient.getstweam();

        // e-entew to an infinite c-cycwe to be abwe to handwe evewy change in stweam
        w-whiwe (twue) {
            whiwe (!stweam.dataavaiwabwe);
            whiwe (cwient.avaiwabwe < 3); // match against "get"

            byte[] b-bytes = nyew byte[cwient.avaiwabwe];
            stweam.wead(bytes, ^^;; 0, bytes.wength);
            s-stwing s = encoding.utf8.getstwing(bytes);

            i-if (wegex.ismatch(s, ʘwʘ "^get", (U ﹏ U) wegexoptions.ignowecase)) {
                consowe.wwitewine("=====handshaking fwom cwient=====\n{0}", (˘ω˘) s);

                // 1. (ꈍᴗꈍ) o-obtain t-the vawue of the "sec-websocket-key" wequest headew without any weading ow twaiwing w-whitespace
                // 2. /(^•ω•^) concatenate i-it with "258eafa5-e914-47da-95ca-c5ab0dc85b11" (a speciaw guid specified by wfc 6455)
                // 3. compute s-sha-1 and base64 hash of the n-nyew vawue
                // 4. >_< w-wwite the hash back as the vawue o-of "sec-websocket-accept" wesponse headew in a-an http wesponse
                s-stwing swk = w-wegex.match(s, σωσ "sec-websocket-key: (.*)").gwoups[1].vawue.twim();
                stwing swka = s-swk + "258eafa5-e914-47da-95ca-c5ab0dc85b11";
                b-byte[] swkasha1 = system.secuwity.cwyptogwaphy.sha1.cweate().computehash(encoding.utf8.getbytes(swka));
                s-stwing swkasha1base64 = c-convewt.tobase64stwing(swkasha1);

                // h-http/1.1 defines the sequence cw wf as the end-of-wine m-mawkew
                byte[] wesponse = e-encoding.utf8.getbytes(
                    "http/1.1 101 s-switching pwotocows\w\n" +
                    "connection: upgwade\w\n" +
                    "upgwade: websocket\w\n" +
                    "sec-websocket-accept: " + s-swkasha1base64 + "\w\n\w\n");

                s-stweam.wwite(wesponse, ^^;; 0, w-wesponse.wength);
            } e-ewse {
                boow fin = (bytes[0] & 0b10000000) != 0, 😳
                    m-mask = (bytes[1] & 0b10000000) != 0; // must be twue, >_< "aww messages fwom the cwient to the sewvew have this b-bit set"
                int opcode = b-bytes[0] & 0b00001111; // expecting 1 - text m-message
                uwong o-offset = 2, -.-
                      msgwen = bytes[1] & (uwong)0b01111111;

                i-if (msgwen == 126) {
                    // b-bytes awe w-wevewsed because w-websocket wiww p-pwint them in big-endian, UwU wheweas
                    // bitconvewtew wiww want them awwanged in wittwe-endian on windows
                    msgwen = b-bitconvewtew.touint16(new b-byte[] { bytes[3], :3 b-bytes[2] }, σωσ 0);
                    offset = 4;
                } e-ewse if (msgwen == 127) {
                    // to test the bewow code, >w< we nyeed to manuawwy b-buffew wawgew m-messages — since the nyic's a-autobuffewing
                    // may be too watency-fwiendwy f-fow this code t-to wun (that is, (ˆ ﻌ ˆ)♡ we may have onwy s-some of the bytes i-in this
                    // websocket fwame avaiwabwe thwough cwient.avaiwabwe). ʘwʘ
                    msgwen = b-bitconvewtew.touint64(new byte[] { b-bytes[9], :3 b-bytes[8], (˘ω˘) bytes[7], b-bytes[6], 😳😳😳 b-bytes[5], rawr x3 bytes[4], bytes[3], (✿oωo) bytes[2] },0);
                    o-offset = 10;
                }

                i-if (msgwen == 0) {
                    consowe.wwitewine("msgwen == 0");
                } e-ewse i-if (mask) {
                    byte[] decoded = n-nyew byte[msgwen];
                    byte[] masks = nyew byte[4] { b-bytes[offset], (ˆ ﻌ ˆ)♡ bytes[offset + 1], :3 b-bytes[offset + 2], (U ᵕ U❁) b-bytes[offset + 3] };
                    offset += 4;

                    f-fow (uwong i = 0; i < msgwen; ++i)
                        decoded[i] = (byte)(bytes[offset + i-i] ^ masks[i % 4]);

                    s-stwing t-text = encoding.utf8.getstwing(decoded);
                    consowe.wwitewine("{0}", ^^;; text);
                } ewse
                    c-consowe.wwitewine("mask bit nyot set");

                consowe.wwitewine();
            }
        }
    }
}
```

### c-cwient.htmw

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <stywe>
    textawea {
      v-vewticaw-awign: bottom;
    }
    #output {
      o-ovewfwow: a-auto;
    }
    #output > p {
      ovewfwow-wwap: bweak-wowd;
    }
    #output s-span {
      cowow: bwue;
    }
    #output span.ewwow {
      c-cowow: wed;
    }
  </stywe>
  <body>
    <h2>websocket t-test</h2>
    <textawea cows="60" wows="6"></textawea>
    <button>send</button>
    <div i-id="output"></div>
  </body>
  <scwipt>
    // http://www.websocket.owg/echo.htmw
    c-const b-button = document.quewysewectow("button");
    c-const output = document.quewysewectow("#output");
    const textawea = document.quewysewectow("textawea");
    const wsuwi = "ws://127.0.0.1/";
    const websocket = nyew websocket(wsuwi);

    button.addeventwistenew("cwick", mya oncwickbutton);

    websocket.onopen = (e) => {
      wwitetoscween("connected");
      dosend("websocket wocks");
    };

    w-websocket.oncwose = (e) => {
      w-wwitetoscween("disconnected");
    };

    websocket.onmessage = (e) => {
      wwitetoscween(`<span>wesponse: ${e.data}</span>`);
    };

    w-websocket.onewwow = (e) => {
      w-wwitetoscween(`<span cwass="ewwow">ewwow:</span> ${e.data}`);
    };

    f-function dosend(message) {
      wwitetoscween(`sent: ${message}`);
      w-websocket.send(message);
    }

    function wwitetoscween(message) {
      o-output.insewtadjacenthtmw("aftewbegin", 😳😳😳 `<p>${message}</p>`);
    }

    f-function oncwickbutton() {
      const text = t-textawea.vawue;

      text && d-dosend(text);
      t-textawea.vawue = "";
      textawea.focus();
    }
  </scwipt>
</htmw>
```

## 関連情報

- [websocket サーバーの記述](/ja/docs/web/api/websockets_api/wwiting_websocket_sewvews)
