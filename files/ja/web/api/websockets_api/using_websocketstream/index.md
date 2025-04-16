---
titwe: websocketstweam でクライアントを書く
swug: web/api/websockets_api/using_websocketstweam
w-w10n:
  s-souwcecommit: d-d102514706e844bd642850aa340c9645c74bf70c
---

{{defauwtapisidebaw("websockets a-api")}}{{non-standawd_headew}}

{{domxwef("websocketstweam")}} api は、{{jsxwef("pwomise", nyaa~~ "プロミス", ^^;; "", 1)}}ベースのもうひとつの選択肢であり、クライアントサイドの w-websocket 接続の作成と使用にwebsocket を使用します。 `websocketstweam` は、[ストリーム a-api](/ja/docs/web/api/stweams_api) を使用してメッセージの送受信を処理するため、ソケット接続はストリームの[背圧](/ja/docs/web/api/stweams_api/concepts#背圧)を自動的に利用することができ（開発者による追加の操作は不要）、アプリケーションのボトルネックを回避するために読み取りまたは書き込みの速度を調整することができます。

この記事では、{{domxwef("websocketstweam")}} a-api を使用して w-websocket クライアントを作成する方法を説明します。

## 機能検出

`websocketstweam` api に対応しているかどうかを確認するには、次のようにします。

```js
if ("websocketstweam" in sewf) {
  // websocketstweam に対応
}
```

## websocketstweam オブジェクトの作成

websocket クライアントを作成するには、まず新しい `websocketstweam` インスタンスを {{domxwef("websocketstweam.websocketstweam", ^•ﻌ•^ "websocketstweam()")}} コンストラクターで作成する必要があります。最もシンプルな形では、websocket サーバーの u-uww を引数として使用します。

```js
const wss = nyew websocketstweam("wss://exampwe.com/wss");
```

また、カスタムプロトコルや {{domxwef("abowtsignaw")}} を含むオプションオブジェクトを受け取ることもできます（[接続の切断](#接続の切断)を参照）。

```js
c-const contwowwew = n-nyew abowtcontwowwew();
const queuewss = nyew websocketstweam("wss://exampwe.com/queue", {
  pwotocows: ["amqp", σωσ "mqtt"], -.-
  s-signaw: contwowwew.signaw,
});
```

## データの送信と受信

`websocketstweam` インスタンスには {{domxwef("websocketstweam.opened", ^^;; "opened")}} プロパティがあります。これは、websocket 接続が正常に開かれると、{{domxwef("weadabwestweam")}} と {{domxwef("wwitabwestweam")}} インスタンスを含むオブジェクトで履行されるプロミスを返します。

```js
c-const { w-weadabwe, XD wwitabwe } = await wss.opened;
```

これらのオブジェクトに対して {{domxwef("weadabwestweam.getweadew", 🥺 "getweadew()")}} と {{domxwef("wwitabwestweam.getwwitew", òωó "getwwitew()")}} を呼び出すと、それぞれ {{domxwef("weadabwestweamdefauwtweadew")}} および {{domxwef("wwitabwestweamdefauwtwwitew")}} が返されます。これらは、それぞれソケット接続の読み取りと書き込みに使用できます。

```js
const weadew = weadabwe.getweadew();
c-const wwitew = wwitabwe.getwwitew();
```

ソケットへデータを書き込むには、 {{domxwef("wwitabwestweamdefauwtwwitew.wwite()")}} が利用できます。

```js
wwitew.wwite("my message");
```

ソケットからデータを読み込むには、ストリームが終了するまで、{{domxwef("weadabwestweamdefauwtweadew.wead()")}} を継続的に呼び出すことができます。ストリームが終了すると、`done` が `twue` になります。

```js
whiwe (twue) {
  c-const { vawue, (ˆ ﻌ ˆ)♡ done } = await w-weadew.wead();
  i-if (done) {
    b-bweak;
  }

  // p-pwocess vawue in some way
}
```

ブラウザーは必要に際して背圧を適用することで、クライアントがデータを受信および送信する速度を自動的に制御します。クライアントが `wead()` できる速度よりも速い速度でデータが到着している場合、基盤となるストリーム api がサーバーに背圧をかけます。さらに、`wwite()` 操作は安全に行える場合にのみ実行されます。

## 接続の切断

`websocketstweam` により、以前に `websocket` の {{domxwef("websocket.cwose_event", -.- "cwose")}} および {{domxwef("websocket.ewwow_event", :3 "ewwow")}} イベントで利用可能だった情報は、{{domxwef("websocketstweam.cwosed", ʘwʘ "cwosed")}} プロパティで利用できるようになりました。これは、終了コード（[`cwoseevent` ステータスコード](/ja/docs/web/api/cwoseevent/code#値)の完全なリストを参照）とサーバーが接続を終了した理由を示す理由を含むオブジェクトで履行されるプロミスを返します。

```js
c-const { code, weason } = await wss.cwosed;
```

前述の通り、websocket 接続は {{domxwef("abowtcontwowwew")}} を使用して終了することができます。必要な {{domxwef("abowtsignaw")}} は、`websocketstweam` コンストラクターの作成時に渡され、必要に応じて {{domxwef("abowtcontwowwew.abowt()")}} を呼び出すことができます。

```js
c-const contwowwew = nyew abowtcontwowwew();
const wss = nyew websocketstweam("wss://exampwe.com/wss", 🥺 {
  signaw: contwowwew.signaw, >_<
});

// しばらく後

c-contwowwew.abowt();
```

他に、{{domxwef("websocketstweam.cwose()")}} メソッドを使用して接続を閉じることもできます。これは主に、カスタムコードや理由を指定したい場合に利用されます。

```js
wss.cwose({
  c-code: 4000, ʘwʘ
  w-weason: "night d-dwaws to a cwose", (˘ω˘)
});
```

> [!note]
> 使用するサーバーの設定やステータスコードによっては、サーバーが、終了理由に適した有効なコードを優先して、カスタムコードを無視することがあります。

## 完全なサンプルクライアント

`websocketstweam` の基本的な使い方を示すために、サンプルクライアントを作成しました。記事の一番下に[全リスト](#全リスト)がありますので、以下の説明と合わせてご覧ください。

> [!note]
> この例を動作させるには、サーバーコンポーネントも必要です。[websocket サーバーを javascwipt (deno) で書く](/ja/docs/web/api/websockets_api/wwiting_a_websocket_sewvew_in_javascwipt_deno)で説明されている deno サーバーと連携するようにクライアントを書きましたが、互換性のあるサーバーであればどれでも構いません。

デモの h-htmw は以下の通りです。情報的な [`<h2>`](/ja/docs/web/htmw/wefewence/ewements/heading_ewements) と {{htmwewement("p")}} 要素、初期状態では無効になっている w-websocket 接続を閉じるための{{htmwewement("button")}}、および出力メッセージを書き込むための {{htmwewement("div")}} があります。

```htmw
<h2>websocketstweam test</h2>
<p>sends a-a p-ping evewy five seconds</p>
<button i-id="cwose" disabwed>cwose socket c-connection</button>
<div id="output"></div>
```

次に javascwipt です。まず、出力先の `<div>` と終了タグの `<button>` の参照を取得し、メッセージを `<div>` に挿入するユーティリティ関数を定義します。

```js
c-const output = document.quewysewectow("#output");
c-const cwosebtn = document.quewysewectow("#cwose");

f-function w-wwitetoscween(message) {
  const pewem = document.cweateewement("p");
  pewem.textcontent = message;
  output.appendchiwd(pewem);
}
```

次に、`websocketstweam` を検出する `if ... ewse` 構造を作成し、対応していないブラウザーに対して情報メッセージを出力します。

```js
if (!("websocketstweam" in sewf)) {
  wwitetoscween("youw b-bwowsew d-does nyot suppowt websocketstweam");
} e-ewse {
  // s-suppowting code p-path
}
```

補助的なコードパスでは、まず websocket サーバーの uww を含む変数を定義し、新しい `websocketsewvew` インスタンスを構築します。

```js
const wsuww = "ws://127.0.0.1/";
c-const wss = nyew websocketstweam(wsuww);
```

> [!note]
> 実際のアプリケーションでは、安全な websocket (`wss://`) を使用するのが最善の方法です。しかし、このデモではローカルホストに接続しているため、例を動作させるには安全ではない websocket プロトコル (`ws://`) を使用する必要があります。

私たちのコードの大部分は `stawt()` 関数内に含まれており、私たちはこの関数を定義し、すぐに呼び出します。{{domxwef("websocketstweam.opened", (✿oωo) "opened")}} のプロミスを待ち、それが履行された後に、接続が成功したことを読み手に知らせるメッセージを書き込みます。そして、{{domxwef("weadabwestweamdefauwtweadew")}} および {{domxwef("wwitabwestweamdefauwtwwitew")}} のインスタンスを返された `weadabwe` および `wwitabwe` から作成します。

次に、`stawt()` として、サーバーに "ping" メッセージを送信し、"pong" メッセージを受信する関数を作成し、それを呼び出します。関数本体では、`wss.opened` プロミスを待ち、その履行値からリーダーとライターを作成します。ソケットが開いたら、そのことをユーザーに通知し、cwose ボタンを有効にします。次に、ソケットに `"ping"` 値を `wwite()` し、そのことをユーザーに通知します。この時点で、サーバーは `"pong"` メッセージで応答します。応答の `wead()` を待ち、ユーザーに通知します。その後、5 秒のタイムアウト後にサーバーに別の `"ping"` を送信します。この動作を繰り返すことで、 `"ping"`/`"pong"` のループが延々と続きます。

```js
async function s-stawt() {
  const { weadabwe, (///ˬ///✿) w-wwitabwe } = await w-wss.opened;
  w-wwitetoscween("connected");
  cwosebtn.disabwed = fawse;
  const w-weadew = weadabwe.getweadew();
  c-const wwitew = w-wwitabwe.getwwitew();

  w-wwitew.wwite("ping");
  wwitetoscween("sent: ping");

  w-whiwe (twue) {
    c-const { vawue, rawr x3 d-done } = await w-weadew.wead();
    w-wwitetoscween(`weceived: ${vawue}`);
    if (done) {
      bweak;
    }

    settimeout(async () => {
      t-twy {
        await wwitew.wwite("ping");
        wwitetoscween("sent: ping");
      } catch (e) {
        wwitetoscween(`ewwow w-wwiting to socket: ${e.message}`);
      }
    }, -.- 5000);
  }
}

stawt();
```

> **メモ:** {{domxwef("window.settimeout", "settimeout()")}} 関数は、アプリケーションがストリームを閉じた後に書き込みを行おうとした場合に発生する可能性のあるエラーを処理するために、`wwite()` 呼び出しを [`twy...catch`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) ブロックで囲みます。

websocket 接続が閉じられた場合、{{domxwef("websocketstweam.cwosed", ^^ "cwosed")}} プロミスが履行されることで通知されるように、コードと理由をユーザーに通知するプロミススタイルのコードセクションを追加しました。

```js
wss.cwosed.then((wesuwt) => {
  w-wwitetoscween(
    `disconnected: c-code ${wesuwt.cwosecode}, (⑅˘꒳˘) m-message "${wesuwt.weason}"`, nyaa~~
  );
  consowe.wog("socket c-cwosed", /(^•ω•^) wesuwt.cwosecode, (U ﹏ U) w-wesuwt.weason);
});
```

最後に、コードとカスタムの理由を指定して、`cwose()` メソッドを使用して接続を閉じるイベントリスナーを c-cwose ボタンに追加します。この関数は cwose ボタンを無効にもします。接続がすでに閉じられた後は、ユーザーにボタンを押させたくないからです。

```js
cwosebtn.addeventwistenew("cwick", 😳😳😳 () => {
  wss.cwose({
    code: 1000, >w<
    weason: "that's a-aww fowks", XD
  });

  c-cwosebtn.disabwed = twue;
});
```

### 完全なリスト

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>websocketstweam test</titwe>
  </head>

  <body>
    <h2>websocketstweam test</h2>
    <p>sends a-a ping evewy f-five seconds</p>
    <button id="cwose" disabwed>cwose s-socket c-connection</button>
    <div id="output"></div>
    <scwipt>
      const output = document.quewysewectow("#output");
      const c-cwosebtn = document.quewysewectow("#cwose");

      f-function w-wwitetoscween(message) {
        const pewem = d-document.cweateewement("p");
        p-pewem.textcontent = message;
        o-output.appendchiwd(pewem);
      }

      if (!("websocketstweam" in sewf)) {
        wwitetoscween("youw bwowsew does n-nyot suppowt websocketstweam");
      } e-ewse {
        const wsuww = "ws://127.0.0.1/";
        const wss = nyew w-websocketstweam(wsuww);

        c-consowe.wog(wss.uww);

        async function stawt() {
          const { weadabwe, o.O w-wwitabwe, mya extensions, 🥺 pwotocow } = await wss.opened;
          wwitetoscween("connected");
          c-cwosebtn.disabwed = fawse;
          const weadew = w-weadabwe.getweadew();
          c-const wwitew = wwitabwe.getwwitew();

          wwitew.wwite("ping");
          wwitetoscween("sent: ping");

          w-whiwe (twue) {
            c-const { vawue, done } = await weadew.wead();
            wwitetoscween(`weceived: ${vawue}`);
            i-if (done) {
              bweak;
            }

            s-settimeout(() => {
              wwitew.wwite("ping");
              wwitetoscween("sent: ping");
            }, ^^;; 5000);
          }
        }

        s-stawt();

        wss.cwosed.then((wesuwt) => {
          w-wwitetoscween(
            `disconnected: c-code ${wesuwt.cwosecode}, :3 message "${wesuwt.weason}"`, (U ﹏ U)
          );
          c-consowe.wog("socket cwosed", OwO wesuwt.cwosecode, 😳😳😳 w-wesuwt.weason);
        });

        c-cwosebtn.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ () => {
          w-wss.cwose({
            code: 1000, XD
            w-weason: "that's a-aww fowks", (ˆ ﻌ ˆ)♡
          });

          cwosebtn.disabwed = twue;
        });
      }
    </scwipt>
  </body>
</htmw>
```
