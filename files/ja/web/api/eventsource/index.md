---
title: EventSource
slug: Web/API/EventSource
---

{{APIRef("Server Sent Events")}}

**`EventSource`** インターフェイスは、 [Server-sent event](/ja/docs/Web/API/Server-sent_events) のウェブコンテンツのインターフェイスです。 `EventSource` インターフェイスは、 [HTTP](/ja/docs/Web/HTTP) サーバーとの間で永続的なコネクションを開き、[イベント](/ja/docs/Web/API/Document_Object_Model/Events)を `text/event-stream` の形式で受け取ります。コネクションは {{domxref("EventSource.close()")}} を呼び出して閉じられるまで開いたままになります。

いったんコネクションが開かれると、サーバーから入って来るメッセージは {{event("message")}} イベントの形でコードに配信されます。

[WebSocket](/ja/docs/Web/API/WebSockets_API) とは異なり、 Server-sent event は単一方向です。つまり、データメッセージはサーバーからクライアント (たとえばユーザーのウェブブラウザー) に向けて、一方向に配信されます。これは、メッセージの形でクライアントからサーバーにデータを送る必要がない場合には良い選択です。例えば、 `EventSource` はソーシャルメディアの状況アップデートやニュースフィードのようなものを扱ったり、[クライアント側ストレージ](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) ([IndexedDB](/ja/docs/Web/API/IndexedDB_API) や [web storage](/ja/docs/Web/API/Web_Storage_API) など) の仕組みにデータを配信したりするアプローチに有用です。

## コンストラクター

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : 指定された URL と、オプション資格情報モードから Server-sent event の受信を扱うために、新しい `EventSource` を生成します。

## プロパティ

_このインターフェイスは、親である {{domxref("EventTarget")}} からプロパティを継承します。_

- {{domxref("EventSource.readyState")}} {{readonlyinline}}
  - : 接続の状態を表す数値です。許容値は `CONNECTING` (`0`)、`OPEN` (`1`)、`CLOSED` (`2`) です。
- {{domxref("EventSource.url")}} {{readonlyinline}}
  - : ソースの URL を表す {{domxref("DOMString")}} です。
- {{domxref("EventSource.withCredentials")}} {{readonlyinline}}
  - : {{domxref("Boolean")}} で、 `EventSource` オブジェクトがオリジン間 ([CORS](/ja/docs/Web/HTTP/CORS)) 資格情報を設定してインスタンス化されたか (`true`)、設定されずにインスタンス化されたか (`false`、既定値) を示します。

### イベントハンドラー

- {{domxref("EventSource.onerror")}}
  - : エラーが発生して、`EventSource` オブジェクトで {{domxref("EventSource/error_event", "error")}} イベントが発生したときに呼び出される {{event("Event_handlers", "event handler")}} です。
- {{domxref("EventSource.onmessage")}}
  - : {{domxref("EventSource/message_event", "message")}} イベントを受け取ったとき、すなわち発信元からメッセージが到着したときに呼び出される {{event("Event_handlers", "event handler")}} です。
- {{domxref("EventSource.onopen")}}
  - : {{domxref("EventSource/open_event", "open")}} イベントを受け取ったとき、すなわち接続を開始したときに呼び出される {{event("Event_handlers", "event handler")}} です。

## メソッド

_このインターフェイスは、親である {{domxref("EventTarget")}} からメソッドを継承します。_

- {{domxref("EventSource.close()")}}
  - : 接続を切断して、 `readyState` 属性を `CLOSED` に設定します。すでに切断されている場合は何も行いません。

## イベント

- {{domxref("EventSource/error_event", "error")}}
  - : イベントソースへのコネクションを開くことに失敗したときに発生します。
- {{domxref("EventSource/message_event", "message")}}
  - : イベントソースからデータを受信したときに発生します。
- {{domxref("EventSource/open_event", "open")}}
  - : イベントソースへのコネクションが開かれたときに発生します。

## 例

この基本的な例では、 `EventSource` を生成してサーバーからイベントを受け取ります。 `sse.php` という名前のページがイベントを生成する責任を負います。

```js
var evtSource = new EventSource('sse.php');
var eventList = document.querySelector('ul');

evtSource.onmessage = function(e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
}
```

受信されたそれぞれのイベントは、 `EventSource` オブジェクトの `onmessage` イベントハンドラーを実行させます。ここでは、新しい {{HTMLElement("li")}} 要素を生成してその中にメッセージのデータを書き込み、この要素を文書の中にある既存のリスト要素に追加します。

> **メモ:** この例の全容が GitHub にあります。[Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/master/server-sent-events) をご覧ください。

## 仕様書

| 仕様書                                                                                                       | 備考                             |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| {{SpecName('HTML WHATWG', "comms.html#the-eventsource-interface", "EventSource")}} | {{Spec2('HTML WHATWG')}} |

## Browser compatibility

{{Compat("api.EventSource")}}

## 関連情報

- [Server-sent event](/ja/docs/Web/API/Server-sent_events)
- [Server-sent event の使用](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)
