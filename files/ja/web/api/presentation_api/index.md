---
title: プレゼンテーション API
slug: Web/API/Presentation_API
l10n:
  sourceCommit: 88c098f5bd651a5c587d7b32dba055766c1789ca
---

{{securecontext_header}}{{SeeCompatTable}}{{DefaultAPISidebar("Presentation API")}}

Presentation API は、(ウェブブラウザーなどの) {{Glossary("user agent", "ユーザーエージェント")}}がウェブコンテンツをプロジェクターやネットワークで接続されたテレビジョンなどの大型プレゼンテーションデバイスに効率よく表示できるようにします。対応しているマルチメディアデバイスには、HDMI や DVI などの有線接続のディスプレイも、[DLNA](https://www.dlna.org/)、[Chromecast](https://developers.google.com/cast/)、[AirPlay](https://developer.apple.com/airplay/)、[Miracast](https://www.wi-fi.org/discover-wi-fi/miracast) を用いた無線接続のディスプレイもあります。

![1-UA モードでは操作ページと表示ページをディスプレイに出力する前に一緒に読み込みます。2-UA モードではそれらを Presentation Control Protocol を用いて別々に読み込みます。](presentation_mode_illustration.png)

一般に、ウェブページは Presentation Controller API を用いてプレゼンテーションデバイスにレンダリングするウェブコンテンツを指定し、プレゼンテーションセッションを開始します。表示されるウェブコンテンツは、Presentation Receiver API を用いてセッションの状態を取得します。メッセージベースのチャンネルを持つ操作ページと受信ページの両方を提供することで、ウェブ開発者はそれらの 2 ページ間のやり取りを実装できます。

プレゼンテーションデバイスが提供する接続方法によって、操作ページと受信ページは同一のユーザーエージェントでレンダリングされるか、別のユーザーエージェントでレンダリングされます。

- 1-UA モードのデバイスでは、両方のページが同一のユーザーエージェントで読み込まれます。しかし、受信ページのレンダリング結果は対応しているリモートレンダリングプロトコルを用いてプレゼンテーションデバイスに送られます。
- 2-UA モードのデバイスでは、受信ページは直接プレゼンテーションデバイスで読み込まれます。操作を行うユーザーエージェントは、プレゼンテーションセッションを制御し、2 ページ間でメッセージを送信するため、対応しているプレゼンテーション制御プロトコルを用いてプレゼンテーションデバイスとやり取りします。

## インターフェイス

- {{domxref("Presentation")}}
  - : 操作を行う閲覧コンテキストでは、`Presentation` インターフェイスが外部の画面へのプレゼンテーションを開始する際のブラウザーのデフォルトの挙動を上書きする方法を提供します。受信を行う閲覧コンテキストでは、`Presentation` インターフェイスは利用可能なプレゼンテーションの接続へのアクセスを提供します。
- {{domxref("PresentationRequest")}}
  - : 操作を行う閲覧コンテキストで生成されたプレゼンテーションを開始または再接続します。
- {{domxref("PresentationAvailability")}}
  - : [PresentationAvailability](/ja/docs/Web/API/PresentationAvailability) オブジェクトは、利用可能なプレゼンテーション用の画面に紐付けられ、プレゼンテーションの要求に対する _プレゼンテーション用の画面の利用可能性_ を表します。
- {{domxref("PresentationConnectionAvailableEvent")}}
  - : `PresentationConnectionAvailableEvent` は、オブジェクトに紐づく接続が生成された時、[`PresentationRequest`](/ja/docs/Web/API/PresentationRequest) で発火します。
- {{domxref("PresentationConnection")}}
  - : それぞれのプレゼンテーションの接続は、[PresentationConnection](/ja/docs/Web/API/PresentationConnection) オブジェクトで表されます。
- {{domxref("PresentationConnectionCloseEvent")}}
  - : `PresentationConnectionCloseEvent` は、プレゼンテーションの接続が `closed` 状態になった時発火します。
- {{domxref("PresentationReceiver")}}
  - : [PresentationReceiver](/ja/docs/Web/API/PresentationReceiver) は、受信を行う閲覧コンテキストが操作を行う閲覧コンテキストへのアクセスとやり取りをできるようにします。
- {{domxref("PresentationConnectionList")}}
  - : `PresentationConnectionList` は、終了していないプレゼンテーションの接続のコレクションを表します。これは、新しいプレゼンテーションの接続が利用可能になったイベントのモニターでもあります。

## 例

以下の例のコードは、Presentation API の主な機能の使用法を示します。`controller.html` で操作器を実装し、`presentation.html` でプレゼンテーションを実装します。両方のページがドメイン `https://example.org` (`https://example.org/controller.html` and `https://example.org/presentation.html`) から配信されます。これらの例では、操作ページは一度に 1 本のプレゼンテーションを管理していることを仮定しています。詳細は、例のコード内のコメントを参照してください。

### プレゼンテーション画面の利用可能性を監視する

`controller.html` で:

```html
<button id="presentBtn" style="display: none;">プレゼンテーション開始</button>
<script>
  // 1 個以上のプレゼンテーション画面が利用可能なら、プレゼンテーション開始ボタンを可視にします
  const presentBtn = document.getElementById("presentBtn");

  // 相対のプレゼンテーション URL (たとえば "presentation.html") も使用可能です
  const presUrls = [
    "https://example.com/presentation.html",
    "https://example.net/alternate.html",
  ];

  // 画面の利用可能性に応じて、プレゼンテーション開始ボタンを表示したり隠したりします
  const handleAvailabilityChange = (available) => {
    presentBtn.style.display = available ? "inline" : "none";
  };

  // プレゼンテーション画面の利用可能性がわかるとすぐに Promise が解決します。
  const request = new PresentationRequest(presUrls);
  request
    .getAvailability()
    .then((availability) => {
      // 利用可能性オブジェクトが生きている間ずっと、操作を行うユーザーエージェントにより
      // availability.value が最新に保たれる可能性があります。ウェブ開発者は、
      // 不要になったらすぐにオブジェクトを破棄することが推奨されます。
      handleAvailabilityChange(availability.value);
      availability.onchange = () => {
        handleAvailabilityChange(availability.value);
      };
    })
    .catch(() => {
      // このプラットフォームは利用可能性の監視に対応しておらず、
      // プレゼンテーション画面の探索は request.start() が呼ばれるまで行われません。
      // 簡単のためにデバイスが利用可能なように見せかけます。
      // ボタンの第 3 の状態を実装してもいいでしょう。
      handleAvailabilityChange(true);
    });
</script>
```

### 新しいプレゼンテーションを開始する

`controller.html` で:

```html
<script>
  presentBtn.onclick = () => {
    // 新しいプレゼンテーションを開始します
    request
      .start()
      // 成功時、プレゼンテーションへの接続が setConnection に渡されます。
      .then(setConnection);
    // 失敗時は、ユーザーが選択ダイアログをキャンセルしたか、画面が見つかりませんでした。
  };
</script>
```

### プレゼンテーションに再接続する

`controller.html` ファイルで:

```html
<button id="reconnectBtn" style="display: none;">再接続</button>
<script>
  const reconnect = () => {
    // 存在するなら、localStorage から presId を読み込みます
    const presId = localStorage["presId"];
    // プレゼンテーションに再接続するには、presId が必要です。
    if (presId) {
      request
        .reconnect(presId)
        // 成功時、プレゼンテーションへの新しい接続が setConnection に渡されます。
        .then(setConnection);
      // presUrl と presId に対応する接続が見つからなかったか、エラーが発生しました。
    }
  };
  // 操作器を開いた時、自動的に再接続します。
  document.addEventListener("DOMContentLoaded", reconnect);
  // 手動での再接続もできるようにします。
  reconnectBtn.onclick = reconnect;
</script>
```

### 操作を行うユーザーエージェントによるプレゼンテーションの開始

`controller.html` ファイルで:

```html
<script>
  navigator.presentation.defaultRequest = new PresentationRequest(presUrls);
  navigator.presentation.defaultRequest.onconnectionavailable = (evt) => {
    setConnection(evt.connection);
  };
</script>
```

ページで `presentation.defaultRequest` を設定することで、操作を行うユーザーエージェントがプレゼンテーションを開始する際に用いる `PresentationRequest` を指定できます。

### 接続状態の監視とデータのやり取り

`controller.html` で:

```html
<button id="disconnectBtn" style="display: none;">切断</button>
<button id="stopBtn" style="display: none;">停止</button>
<button id="reconnectBtn" style="display: none;">再接続</button>
<script>
  let connection;

  // 接続中のプレゼンテーションがあるなら、切断ボタンと停止ボタンを表示します
  const stopBtn = document.querySelector("#stopBtn");
  const reconnectBtn = document.querySelector("#reconnectBtn");
  const disconnectBtn = document.querySelector("#disconnectBtn");

  stopBtn.onclick = () => {
    connection?.terminate();
  };

  disconnectBtn.onclick = () => {
    connection?.close();
  };

  function setConnection(newConnection) {
    // 再接続を試みているのでなければ、既存のプレゼンテーションから切断します
    if (
      connection &&
      connection !== newConnection &&
      connection.state !== "closed"
    ) {
      connection.onclose = undefined;
      connection.close();
    }

    // 新しい接続をセットし、プレゼンテーション ID を保存します
    connection = newConnection;
    localStorage["presId"] = connection.id;

    function showConnectedUI() {
      // ユーザーがプレゼンテーションの切断や終了をできるようにします
      stopBtn.style.display = "inline";
      disconnectBtn.style.display = "inline";
      reconnectBtn.style.display = "none";
    }

    function showDisconnectedUI() {
      disconnectBtn.style.display = "none";
      stopBtn.style.display = "none";
      reconnectBtn.style.display = localStorage["presId"] ? "inline" : "none";
    }

    // 接続の状態を監視します
    connection.onconnect = () => {
      showConnectedUI();

      // メッセージハンドラーを登録します
      connection.onmessage = (message) => {
        console.log(`メッセージを受信: ${message.data}`);
      };

      // プレゼンテーションページに最初のメッセージを送信します
      connection.send("Say hello");
    };

    connection.onclose = () => {
      connection = null;
      showDisconnectedUI();
    };

    connection.onterminate = () => {
      // 存在すれば、localStorage から presId を削除します
      delete localStorage["presId"];
      connection = null;
      showDisconnectedUI();
    };
  }
</script>
```

### 利用可能な接続の監視と挨拶

`presentation.html` で:

```js
const addConnection = (connection) => {
  connection.onmessage = (message) => {
    if (message.data === "Say hello") connection.send("hello");
  };
};

navigator.presentation.receiver.connectionList.then((list) => {
  list.connections.forEach((connection) => {
    addConnection(connection);
  });
  list.onconnectionavailable = (evt) => {
    addConnection(evt.connection);
  };
});
```

### メッセージとともにロケールの情報を渡す

`controller.html` ファイルで:

```html
<script>
  connection.send('{"string": "你好，世界!", "lang": "zh-CN"}');
  connection.send('{"string": "こんにちは、世界!", "lang": "ja"}');
  connection.send('{"string": "안녕하세요, 세계!", "lang": "ko"}');
  connection.send('{"string": "Hello, world!", "lang": "en-US"}');
</script>
```

`presentation.html` ファイルで:

```html
<script>
  connection.onmessage = (message) => {
    const messageObj = JSON.parse(message.data);
    const spanElt = document.createElement("SPAN");
    spanElt.lang = messageObj.lang;
    spanElt.textContent = messageObj.string;
    document.body.appendChild(spanElt);
  };
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

[Presentation API polyfill](https://mediascape.github.io/presentation-api-polyfill/) に、W3C の [Second Screen Working Group](https://www.w3.org/2014/secondscreen/) で標準化中の [Presentation API](https://w3c.github.io/presentation-api/) 仕様書の JavaScript ポリフィルがあります。このポリフィルの主目的は、Presentation API が異なるプレゼンテーションの仕組みの上にどのように実装されうるかを探ることです。
