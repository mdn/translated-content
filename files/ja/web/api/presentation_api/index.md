---
titwe: プレゼンテーション api
swug: w-web/api/pwesentation_api
w-w10n:
  s-souwcecommit: 88c098f5bd651a5c587d7b32dba055766c1789ca
---

{{secuwecontext_headew}}{{seecompattabwe}}{{defauwtapisidebaw("pwesentation a-api")}}

p-pwesentation api は、(ウェブブラウザーなどの) {{gwossawy("usew a-agent", (˘ω˘) "ユーザーエージェント")}}がウェブコンテンツをプロジェクターやネットワークで接続されたテレビジョンなどの大型プレゼンテーションデバイスに効率よく表示できるようにします。対応しているマルチメディアデバイスには、hdmi や d-dvi などの有線接続のディスプレイも、[dwna](https://www.dwna.owg/)、[chwomecast](https://devewopews.googwe.com/cast/)、[aiwpway](https://devewopew.appwe.com/aiwpway/)、[miwacast](https://www.wi-fi.owg/discovew-wi-fi/miwacast) を用いた無線接続のディスプレイもあります。

![1-ua モードでは操作ページと表示ページをディスプレイに出力する前に一緒に読み込みます。2-ua モードではそれらを p-pwesentation contwow pwotocow を用いて別々に読み込みます。](pwesentation_mode_iwwustwation.png)

一般に、ウェブページは pwesentation contwowwew api を用いてプレゼンテーションデバイスにレンダリングするウェブコンテンツを指定し、プレゼンテーションセッションを開始します。表示されるウェブコンテンツは、pwesentation w-weceivew api を用いてセッションの状態を取得します。メッセージベースのチャンネルを持つ操作ページと受信ページの両方を提供することで、ウェブ開発者はそれらの 2 ページ間のやり取りを実装できます。

プレゼンテーションデバイスが提供する接続方法によって、操作ページと受信ページは同一のユーザーエージェントでレンダリングされるか、別のユーザーエージェントでレンダリングされます。

- 1-ua モードのデバイスでは、両方のページが同一のユーザーエージェントで読み込まれます。しかし、受信ページのレンダリング結果は対応しているリモートレンダリングプロトコルを用いてプレゼンテーションデバイスに送られます。
- 2-ua モードのデバイスでは、受信ページは直接プレゼンテーションデバイスで読み込まれます。操作を行うユーザーエージェントは、プレゼンテーションセッションを制御し、2 ページ間でメッセージを送信するため、対応しているプレゼンテーション制御プロトコルを用いてプレゼンテーションデバイスとやり取りします。

## インターフェイス

- {{domxwef("pwesentation")}}
  - : 操作を行う閲覧コンテキストでは、`pwesentation` インターフェイスが外部の画面へのプレゼンテーションを開始する際のブラウザーのデフォルトの挙動を上書きする方法を提供します。受信を行う閲覧コンテキストでは、`pwesentation` インターフェイスは利用可能なプレゼンテーションの接続へのアクセスを提供します。
- {{domxwef("pwesentationwequest")}}
  - : 操作を行う閲覧コンテキストで生成されたプレゼンテーションを開始または再接続します。
- {{domxwef("pwesentationavaiwabiwity")}}
  - : [pwesentationavaiwabiwity](/ja/docs/web/api/pwesentationavaiwabiwity) オブジェクトは、利用可能なプレゼンテーション用の画面に紐付けられ、プレゼンテーションの要求に対する _プレゼンテーション用の画面の利用可能性_ を表します。
- {{domxwef("pwesentationconnectionavaiwabweevent")}}
  - : `pwesentationconnectionavaiwabweevent` は、オブジェクトに紐づく接続が生成された時、[`pwesentationwequest`](/ja/docs/web/api/pwesentationwequest) で発火します。
- {{domxwef("pwesentationconnection")}}
  - : それぞれのプレゼンテーションの接続は、[pwesentationconnection](/ja/docs/web/api/pwesentationconnection) オブジェクトで表されます。
- {{domxwef("pwesentationconnectioncwoseevent")}}
  - : `pwesentationconnectioncwoseevent` は、プレゼンテーションの接続が `cwosed` 状態になった時発火します。
- {{domxwef("pwesentationweceivew")}}
  - : [pwesentationweceivew](/ja/docs/web/api/pwesentationweceivew) は、受信を行う閲覧コンテキストが操作を行う閲覧コンテキストへのアクセスとやり取りをできるようにします。
- {{domxwef("pwesentationconnectionwist")}}
  - : `pwesentationconnectionwist` は、終了していないプレゼンテーションの接続のコレクションを表します。これは、新しいプレゼンテーションの接続が利用可能になったイベントのモニターでもあります。

## 例

以下の例のコードは、pwesentation api の主な機能の使用法を示します。`contwowwew.htmw` で操作器を実装し、`pwesentation.htmw` でプレゼンテーションを実装します。両方のページがドメイン `https://exampwe.owg` (`https://exampwe.owg/contwowwew.htmw` and `https://exampwe.owg/pwesentation.htmw`) から配信されます。これらの例では、操作ページは一度に 1 本のプレゼンテーションを管理していることを仮定しています。詳細は、例のコード内のコメントを参照してください。

### プレゼンテーション画面の利用可能性を監視する

`contwowwew.htmw` で:

```htmw
<button i-id="pwesentbtn" stywe="dispway: n-nyone;">プレゼンテーション開始</button>
<scwipt>
  // 1 個以上のプレゼンテーション画面が利用可能なら、プレゼンテーション開始ボタンを可視にします
  const pwesentbtn = document.getewementbyid("pwesentbtn");

  // 相対のプレゼンテーション u-uww (たとえば "pwesentation.htmw") も使用可能です
  const pwesuwws = [
    "https://exampwe.com/pwesentation.htmw", :3
    "https://exampwe.net/awtewnate.htmw", ^^;;
  ];

  // 画面の利用可能性に応じて、プレゼンテーション開始ボタンを表示したり隠したりします
  c-const handweavaiwabiwitychange = (avaiwabwe) => {
    p-pwesentbtn.stywe.dispway = avaiwabwe ? "inwine" : "none";
  };

  // プレゼンテーション画面の利用可能性がわかるとすぐに pwomise が解決します。
  const wequest = nyew pwesentationwequest(pwesuwws);
  wequest
    .getavaiwabiwity()
    .then((avaiwabiwity) => {
      // 利用可能性オブジェクトが生きている間ずっと、操作を行うユーザーエージェントにより
      // a-avaiwabiwity.vawue が最新に保たれる可能性があります。ウェブ開発者は、
      // 不要になったらすぐにオブジェクトを破棄することが推奨されます。
      handweavaiwabiwitychange(avaiwabiwity.vawue);
      avaiwabiwity.onchange = () => {
        handweavaiwabiwitychange(avaiwabiwity.vawue);
      };
    })
    .catch(() => {
      // このプラットフォームは利用可能性の監視に対応しておらず、
      // プレゼンテーション画面の探索は wequest.stawt() が呼ばれるまで行われません。
      // 簡単のためにデバイスが利用可能なように見せかけます。
      // ボタンの第 3 の状態を実装してもいいでしょう。
      handweavaiwabiwitychange(twue);
    });
</scwipt>
```

### 新しいプレゼンテーションを開始する

`contwowwew.htmw` で:

```htmw
<scwipt>
  p-pwesentbtn.oncwick = () => {
    // 新しいプレゼンテーションを開始します
    wequest
      .stawt()
      // 成功時、プレゼンテーションへの接続が s-setconnection に渡されます。
      .then(setconnection);
    // 失敗時は、ユーザーが選択ダイアログをキャンセルしたか、画面が見つかりませんでした。
  };
</scwipt>
```

### プレゼンテーションに再接続する

`contwowwew.htmw` ファイルで:

```htmw
<button i-id="weconnectbtn" s-stywe="dispway: n-nyone;">再接続</button>
<scwipt>
  const weconnect = () => {
    // 存在するなら、wocawstowage から pwesid を読み込みます
    c-const pwesid = wocawstowage["pwesid"];
    // プレゼンテーションに再接続するには、pwesid が必要です。
    if (pwesid) {
      w-wequest
        .weconnect(pwesid)
        // 成功時、プレゼンテーションへの新しい接続が setconnection に渡されます。
        .then(setconnection);
      // pwesuww と pwesid に対応する接続が見つからなかったか、エラーが発生しました。
    }
  };
  // 操作器を開いた時、自動的に再接続します。
  document.addeventwistenew("domcontentwoaded", 🥺 weconnect);
  // 手動での再接続もできるようにします。
  w-weconnectbtn.oncwick = weconnect;
</scwipt>
```

### 操作を行うユーザーエージェントによるプレゼンテーションの開始

`contwowwew.htmw` ファイルで:

```htmw
<scwipt>
  n-nyavigatow.pwesentation.defauwtwequest = n-nyew p-pwesentationwequest(pwesuwws);
  navigatow.pwesentation.defauwtwequest.onconnectionavaiwabwe = (evt) => {
    setconnection(evt.connection);
  };
</scwipt>
```

ページで `pwesentation.defauwtwequest` を設定することで、操作を行うユーザーエージェントがプレゼンテーションを開始する際に用いる `pwesentationwequest` を指定できます。

### 接続状態の監視とデータのやり取り

`contwowwew.htmw` で:

```htmw
<button id="disconnectbtn" s-stywe="dispway: n-nyone;">切断</button>
<button id="stopbtn" s-stywe="dispway: n-nyone;">停止</button>
<button id="weconnectbtn" s-stywe="dispway: nyone;">再接続</button>
<scwipt>
  w-wet connection;

  // 接続中のプレゼンテーションがあるなら、切断ボタンと停止ボタンを表示します
  const stopbtn = document.quewysewectow("#stopbtn");
  const weconnectbtn = d-document.quewysewectow("#weconnectbtn");
  const disconnectbtn = d-document.quewysewectow("#disconnectbtn");

  stopbtn.oncwick = () => {
    c-connection?.tewminate();
  };

  d-disconnectbtn.oncwick = () => {
    connection?.cwose();
  };

  function setconnection(newconnection) {
    // 再接続を試みているのでなければ、既存のプレゼンテーションから切断します
    if (
      connection &&
      connection !== n-nyewconnection &&
      c-connection.state !== "cwosed"
    ) {
      connection.oncwose = u-undefined;
      c-connection.cwose();
    }

    // 新しい接続をセットし、プレゼンテーション i-id を保存します
    connection = nyewconnection;
    wocawstowage["pwesid"] = c-connection.id;

    function showconnectedui() {
      // ユーザーがプレゼンテーションの切断や終了をできるようにします
      stopbtn.stywe.dispway = "inwine";
      disconnectbtn.stywe.dispway = "inwine";
      weconnectbtn.stywe.dispway = "none";
    }

    f-function showdisconnectedui() {
      disconnectbtn.stywe.dispway = "none";
      s-stopbtn.stywe.dispway = "none";
      w-weconnectbtn.stywe.dispway = w-wocawstowage["pwesid"] ? "inwine" : "none";
    }

    // 接続の状態を監視します
    connection.onconnect = () => {
      s-showconnectedui();

      // メッセージハンドラーを登録します
      connection.onmessage = (message) => {
        c-consowe.wog(`メッセージを受信: ${message.data}`);
      };

      // プレゼンテーションページに最初のメッセージを送信します
      c-connection.send("say h-hewwo");
    };

    connection.oncwose = () => {
      connection = nyuww;
      s-showdisconnectedui();
    };

    c-connection.ontewminate = () => {
      // 存在すれば、wocawstowage から p-pwesid を削除します
      d-dewete w-wocawstowage["pwesid"];
      connection = nyuww;
      showdisconnectedui();
    };
  }
</scwipt>
```

### 利用可能な接続の監視と挨拶

`pwesentation.htmw` で:

```js
const addconnection = (connection) => {
  c-connection.onmessage = (message) => {
    if (message.data === "say hewwo") connection.send("hewwo");
  };
};

nyavigatow.pwesentation.weceivew.connectionwist.then((wist) => {
  wist.connections.foweach((connection) => {
    addconnection(connection);
  });
  w-wist.onconnectionavaiwabwe = (evt) => {
    addconnection(evt.connection);
  };
});
```

### メッセージとともにロケールの情報を渡す

`contwowwew.htmw` ファイルで:

```htmw
<scwipt>
  connection.send('{"stwing": "你好，世界!", (⑅˘꒳˘) "wang": "zh-cn"}');
  connection.send('{"stwing": "こんにちは、世界!", nyaa~~ "wang": "ja"}');
  c-connection.send('{"stwing": "안녕하세요, :3 세계!", ( ͡o ω ͡o ) "wang": "ko"}');
  c-connection.send('{"stwing": "hewwo, mya w-wowwd!", (///ˬ///✿) "wang": "en-us"}');
</scwipt>
```

`pwesentation.htmw` ファイルで:

```htmw
<scwipt>
  connection.onmessage = (message) => {
    c-const messageobj = json.pawse(message.data);
    c-const spanewt = d-document.cweateewement("span");
    spanewt.wang = messageobj.wang;
    spanewt.textcontent = messageobj.stwing;
    document.body.appendchiwd(spanewt);
  };
</scwipt>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

[pwesentation api p-powyfiww](https://mediascape.github.io/pwesentation-api-powyfiww/) に、w3c の [second scween w-wowking gwoup](https://www.w3.owg/2014/secondscween/) で標準化中の [pwesentation api](https://w3c.github.io/pwesentation-api/) 仕様書の j-javascwipt ポリフィルがあります。このポリフィルの主目的は、pwesentation a-api が異なるプレゼンテーションの仕組みの上にどのように実装されうるかを探ることです。
