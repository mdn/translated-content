---
title: Broadcast Channel API
slug: Web/API/Broadcast_Channel_API
---

{{DefaultAPISidebar("Broadcast Channel API")}}

**Broadcast Channel API**（放送チャンネル API）を使用すると、{{glossary("browsing context", "閲覧コンテキスト")}}（つまり、_ウィンドウ_、_タブ_、_フレーム_、_iframe_）間で、同じ{{glossary("origin","オリジン")}}（通常は同じサイトのページ）を使用して簡単に通信できます。

{{AvailableInWorkers}}

放送チャンネルは、名前が付けられ、特定のオリジンに結びつけられています。

基になるチャンネルをリッスンしている {{domxref("BroadcastChannel")}} オブジェクトを作成することで、投稿されたメッセージを受信できます。 興味深い点は、通信したい iframe やワーカーへの参照を維持する必要がもうないということです。 それらは単に {{domxref("BroadcastChannel")}} を構築することによって特定のチャンネルを「購読する（subscribe）」ことができ、それらすべての間で全二重（双方向）通信を行うことができます。

![Broadcast Channel API の原理](https://mdn.mozillademos.org/files/9945/BroadcastChannel.png)

## 放送チャンネルのインターフェイス

### チャンネルの作成または参加

`BroadcastChannel` インターフェイスは非常に単純です。 クライアントは {{domxref("BroadcastChannel")}} オブジェクトを作成することによって特定の放送チャンネルに参加します。 {{domxref("BroadcastChannel.BroadcastChannel","コンストラクタ")}}は、それを識別するために使用する単一のパラメーターである、チャネルの*名前*を取ります。 放送チャンネルに最初に接続した場合は、基になるリソースが作成されます。

```js
// 放送チャンネルへの接続
var bc = new BroadcastChannel('test_channel');
```

### メッセージの送信

メッセージを投稿するのは簡単です。 `BroadcastChannel` オブジェクトの {{domxref("BroadcastChannel.postMessage", "postMessage()")}} メソッドを呼び出すだけで十分です。 このメソッドは任意のオブジェクトを引数として取ります。 非常に単純な例は、次のように {{domxref("DOMString")}} テキストメッセージです。

```js
// 非常に単純なメッセージの送信例
bc.postMessage('This is a test message.');
```

{{domxref("DOMString")}} だけでなく、あらゆる種類のオブジェクトを送信できます。 API は意味論をメッセージに関連付けないため、どのような種類のメッセージを想定し、それをどう処理するかを知るのは、チャネルの参加者次第です。

### メッセージの受信

メッセージが投稿されると、このチャンネルに接続されている各 {{domxref("BroadcastChannel")}} オブジェクトに {{event("message")}} イベントが送出されます。 デフォルトでは何もしませんが、{{domxref("BroadcastChannel.onmessage", "onmessage")}} イベントハンドラを使用して新しい関数を実装できます。

```js
// イベントをコンソールに記録するだけの
// 単純なイベントハンドラの例
bc.onmessage = function (ev) { console.log(ev); }
```

### チャンネルの切断

チャネルを去るには、オブジェクトの {{domxref("BroadcastChannel.close", "close()")}} メソッドを呼び出す必要があります。 これにより、オブジェクトと基になるチャネル間のリンクを切断し、ガベージコレクションをすることができます。

```js
// チャンネルの切断
bc.close()
```

## 結び

Broadcast Channel API は非常に単純な API であり、自己完結型のインターフェイスによってコンテキスト間通信が可能です。 ユーザーがアカウントにログインしたときなど、同じサイトオリジン環境内の他のタブでユーザーの操作を検出するために使用できます。 メッセージングプロトコルは定義されておらず、さまざまなコンテキストのさまざまなドキュメントがそれ自体を実装する必要があります。 ネゴシエーションも仕様からの要件もありません。

## 仕様

| 仕様                                                                                                                                                 | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "comms.html#broadcasting-to-other-browsing-contexts", "The Broadcast Channel API")}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.BroadcastChannel")}}

## 関連情報

- {{domxref("BroadcastChannel")}}: これを実装するインターフェイス。
