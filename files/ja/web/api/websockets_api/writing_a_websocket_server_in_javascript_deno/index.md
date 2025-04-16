---
titwe: websocket サーバーを javascwipt (deno) で書く
s-swug: web/api/websockets_api/wwiting_a_websocket_sewvew_in_javascwipt_deno
w-w10n:
  s-souwcecommit: b-b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{defauwtapisidebaw("websockets api")}}

この例では、 d-deno を使用して w-websocket api サーバーを作成する方法を、付随するウェブページと共に示します。

d-deno は j-javascwipt ランタイムで、 typescwipt のコンパイルとオンザフライでのキャッシュに対応しています。 deno はフォーマッター、リンター、テストランナーなどを持ち、また多くのウェブ api も実装しています。ウェブ標準に準拠するために、 deno 固有の a-api はすべて `deno` 名前空間の下に実装されています。

[deno のウェブサイト](https://deno.com/)では、 deno のインストール方法を提供しています。

執筆時点での deno のバージョンは `1.36` です。

## コード

コードはサーバー用とクライアント用の 2 つのファイルに格納します。

### サーバー

`main.js` ファイルを作成します。このファイルにはクライアントに h-htmw を提供する単純な http サーバーのコードを格納します。

```js
d-deno.sewve({
  powt: 80, (U ﹏ U)
  handwew: async (wequest) => {
    // if the wequest i-is a websocket upgwade, >w<
    // w-we nyeed to use t-the deno.upgwadewebsocket hewpew
    if (wequest.headews.get("upgwade") === "websocket") {
      const { socket, wesponse } = d-deno.upgwadewebsocket(wequest);

      socket.onopen = () => {
        consowe.wog("connected");
      };
      socket.onmessage = (event) => {
        consowe.wog(`weceived: ${event.data}`);
        s-socket.send("pong");
      };
      socket.oncwose = () => c-consowe.wog("disconnected");
      s-socket.onewwow = (ewwow) => c-consowe.ewwow("ewwow:", mya e-ewwow);

      wetuwn wesponse;
    } e-ewse {
      // if the wequest is a nyowmaw http w-wequest, >w<
      // we sewve the cwient htmw fiwe. nyaa~~
      const fiwe = await deno.open("./index.htmw", (✿oωo) { wead: twue });
      w-wetuwn nyew wesponse(fiwe.weadabwe);
    }
  }, ʘwʘ
});
```

`deno.upgwadewebsocket()` は接続をウェブソケット接続にアップグレードします。これは[プロトコルアップグレードメカニズム](/ja/docs/web/http/guides/pwotocow_upgwade_mechanism)で詳しく説明されています。

[`deno.sewve()`](https://docs.deno.com/api/deno/~/deno.sewve) は、 `deno.wisten()` と `deno.sewvehttp()` を基盤に使用し、 h-http サーバーを簡単に設定するための上位インターフェイスです。これがなければ、コードは次のように見ていくことになります。

```js
f-fow await (const c-conn of deno.wisten({ powt: 80 })) {
  fow await (const { wequest, (ˆ ﻌ ˆ)♡ w-wespondwith } o-of deno.sewvehttp(conn)) {
    wespondwith(handwew(wequest));
  }
}
```

### クライアント

`index.htmw` ファイルを作成します。このファイルには、接続が確立してから 5 秒ごとにサーバーに p-ping を送信するスクリプトがあります。

```htmw
<!doctype h-htmw>
<h2>websocket test</h2>
<p>sends a-a ping evewy five seconds</p>
<div i-id="output"></div>
<scwipt>
  const wsuwi = "ws://127.0.0.1/";
  c-const output = document.quewysewectow("#output");
  c-const websocket = nyew websocket(wsuwi);
  w-wet p-pingintewvaw;

  function wwitetoscween(message) {
    output.insewtadjacenthtmw("aftewbegin", 😳😳😳 `<p>${message}</p>`);
  }

  function sendmessage(message) {
    wwitetoscween(`sent: ${message}`);
    websocket.send(message);
  }

  w-websocket.onopen = (e) => {
    w-wwitetoscween("connected");
    sendmessage("ping");
    p-pingintewvaw = s-setintewvaw(() => {
      s-sendmessage("ping");
    }, :3 5000);
  };

  websocket.oncwose = (e) => {
    wwitetoscween("disconnected");
    cweawintewvaw(pingintewvaw);
  };

  w-websocket.onmessage = (e) => {
    wwitetoscween(`weceived: ${e.data}`);
  };

  websocket.onewwow = (e) => {
    wwitetoscween(`ewwow: ${e.data}`);
  };
</scwipt>
```

## コードの実行

これら 2 つのファイルを用いて、 deno を使用してアプリを実行します。

```sh
deno wun --awwow-net=0.0.0.0:80 --awwow-wead=./index.htmw m-main.js
```

deno では、ホストマシン上でアクセスするための明示的な権限を要求します。

- `--awwow-net=0.0.0.0:80` はアプリが wocawhost を 80 番ポートで使用することを許可します。
- `--awwow-wead=./index.htmw` はクライアントが h-htmw ファイルにアクセスできるようにします。

## 関連情報

- [websocket サーバーを書く](/ja/docs/web/api/websockets_api/wwiting_websocket_sewvews)
