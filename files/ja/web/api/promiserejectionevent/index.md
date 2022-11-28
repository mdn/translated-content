---
title: PromiseRejectionEvent
slug: Web/API/PromiseRejectionEvent
---

{{APIRef("HTML DOM")}}

**`PromiseRejectionEvent`** インターフェイスは、 JavaScript の {{jsxref("Promise")}} が拒否されたときにグローバルスクリプトコンテキストに送信されるイベントを表します。これらのイベントは、測定やデバッグ目的に使用すると特に有益です。

## コンストラクター

- {{domxref("PromiseRejectionEvent.PromiseRejectionEvent", "PromiseRejectionEvent()")}}
  - : 指定したパラメータで `PromiseRejectionEvent` イベントを生成する。

## プロパティ

_親である {{domxref("Event")}} のプロパティも継承しています。_

- {{domxref("PromiseRejectionEvent.promise")}} {{readonlyInline}}
  - : 拒否された JavaScript の {{jsxref("Promise")}}。
- {{domxref("PromiseRejectionEvent.reason")}} {{readOnlyInline}}
  - : {{jsxref("Promise.reject()")}} に渡される Promise が拒否された理由を示す値、または {{jsxref("Object")}}。

## メソッド

_このインターフェイスには固有のメソッドはありません。親である {{domxref("Event")}} からメソッドを継承しています。_

## イベント

- {{Event("rejectionhandled")}}
  - : JavaScript の {{jsxref("Promise")}} が拒否され、promise の reject イベントハンドラーのコードが実行された後に発生する。
- {{Event("unhandledrejection")}}
  - : reject に対するイベントハンドラーがない状態で JavaScript の {{jsxref("Promise")}} が拒否されたときに発生する。

## 例

```js
window.onunhandledrejection = function(e) {
  console.log(e.reason);
}
```

## 仕様書

| 仕様書                                                                                                                       | 状態                                 | 備考     |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#promiserejectionevent', 'PromiseRejectionEvent')}} | {{ Spec2('HTML WHATWG') }} | 初回定義 |

## ブラウザーの対応

{{Compat("api.PromiseRejectionEvent")}}

## 関連情報

- {{jsxref("Promise")}}
- {{domxref("WindowEventHandlers.onrejectionhandled")}}
- {{domxref("WindowEventHandlers.onunhandledrejection")}}
