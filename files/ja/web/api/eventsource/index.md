---
title: EventSource
slug: Web/API/EventSource
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("Server Sent Events")}}

**`EventSource`** インターフェイスは、[サーバー送信イベント](/ja/docs/Web/API/Server-sent_events)のウェブコンテンツのインターフェイスです。

`EventSource` インターフェイスは、 [HTTP](/ja/docs/Web/HTTP) サーバーとの間で永続的なコネクションを開き、[イベント](/ja/docs/Learn/JavaScript/Building_blocks/Events)を `text/event-stream` の形式で受け取ります。コネクションは {{domxref("EventSource.close()")}} を呼び出して閉じられるまで開いたままになります。

{{InheritanceDiagram}}

コネクションが開かれた後、サーバーからの着信メッセージは、イベントという形式でコードに配信されます。着信メッセージにイベントフィールドがある場合、発生するイベント は、イベントフィールドの値と同じになります。イベントフィールドが存在しない場合、一般的な {{domxref("EventSource/message_event", "message")}} イベントが発行されます。

[WebSocket](/ja/docs/Web/API/WebSockets_API) とは異なり、サーバー送信イベントは単一方向です。つまり、データメッセージはサーバーからクライアント（ユーザーのウェブブラウザーなど）に向けて、一方向に配信されます。これは、メッセージの形でクライアントからサーバーにデータを送る必要がない場合には良い選択です。例えば、 `EventSource` はソーシャルメディアの近況アップデートやニュースフィードのようなものを扱ったり、[クライアント側ストレージ](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)（[IndexedDB](/ja/docs/Web/API/IndexedDB_API) や [web storage](/ja/docs/Web/API/Web_Storage_API) など）の仕組みにデータを配信したりするアプローチに有用です。

> **警告:** **HTTP/2 上で使用されていない**場合、 SSE は開いている接続の最大数に制限を受けます。この制限はブラウザーごとにあり、とても低い数 (6) に設定されているため、さまざまなタブを開くために特別な痛みを伴うことがあります。この問題は、[Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=275955) と [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=906896) で「修正予定なし」と表示されています。この制限はブラウザー＋ドメインごとなので、 `www.example1.com` への SSE 接続をすべてのタブで 6 つ、`www.example2.com.` への SSE 接続をさらに 6 つ開くことができることを意味しています（[Stackoverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159) より）。 HTTP/2 を使用している場合、同時の _HTTP ストリーム_ の最大数はサーバーとクライアントの間で交渉されます（既定値は 100）。

## コンストラクター

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : 指定した URL からサーバーが（オプションで資格情報モードで）送信するイベントを処理するための `EventSource` を新規に作成します。

## インスタンスプロパティ

_このインターフェイスは、親である {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("EventSource.readyState")}} {{ReadOnlyInline}}
  - : 数値で、コネクションの状態を表します。取りうる値は `CONNECTING` (`0`)、`OPEN` (`1`)、`CLOSED` (`2`) です。
- {{domxref("EventSource.url")}} {{ReadOnlyInline}}
  - : 文字列で、ソースの URL を表します。
- {{domxref("EventSource.withCredentials")}} {{ReadOnlyInline}}
  - : 論理値で、 `EventSource` オブジェクトがオリジン間 ([CORS](/ja/docs/Web/HTTP/CORS)) 資格情報を設定してインスタンス化されたか (`true`)、設定されずにインスタンス化されたか (`false`、既定値) を示します。

## メソッド

_このインターフェイスは、親である {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{domxref("EventSource.close()")}}
  - : コネクションを切断して、 `readyState` 属性を `CLOSED` に設定します。すでに切断されている場合は何も行いません。

## イベント

- {{domxref("EventSource/error_event", "error")}}
  - : イベントソースへのコネクションを開くことに失敗したときに発生します。
- {{domxref("EventSource/message_event", "message")}}
  - : イベントソースからデータを受信したときに発生します。
- {{domxref("EventSource/open_event", "open")}}
  - : イベントソースへのコネクションが開かれたときに発生します。

さらに、イベントソース自身がイベントフィールドを持つメッセージを送信し、その値をキーにしたアドホックイベントを作成することもできます。

## 例

この基本的な例では、 `EventSource` を生成してサーバーからイベントを受け取ります。 `sse.php` という名前のページがイベントを生成する責任を負います。

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

受信されたそれぞれのイベントは、 `EventSource` オブジェクトの `onmessage` イベントハンドラーを実行させます。ここでは、新しい {{HTMLElement("li")}} 要素を生成してその中にメッセージのデータを書き込み、この要素を文書の中にある既存のリスト要素に追加します。

> **メモ:** この例の全容が GitHub にあります。[Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/master/server-sent-events) をご覧ください。

名前付きのイベントを待ち受けするには、送信されるイベントの種類ごとにリスナーが必要になります。

```js
const sse = new EventSource("/api/v1/sse");

/*
 * これは以下のようなイベントのみを待ち受けします。
 *
 * event: notice
 * data: useful data
 * id: someid
 */
sse.addEventListener("notice", (e) => {
  console.log(e.data);
});

/*
 * 同様に、これは `event: update` というフィールドを持つ
 * イベントを待ち受けます。
 */
sse.addEventListener("update", (e) => {
  console.log(e.data);
});

/*
 * "message" というイベントは特別なケースで、
 * イベントフィールドを持たないイベントや、特定の型である
 * `event: message` を持つイベントを捕捉します。それは、
 * 他のイベント型では発生しません。
 */
sse.addEventListener("message", (e) => {
  console.log(e.data);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events)
- [サーバー送信イベントの使用](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)
