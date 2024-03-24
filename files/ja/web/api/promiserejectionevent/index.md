---
title: PromiseRejectionEvent
slug: Web/API/PromiseRejectionEvent
l10n:
  sourceCommit: db72d5612ada1d40cde0de191389dde2fe062c23
---

{{APIRef("HTML DOM")}}

**`PromiseRejectionEvent`** インターフェイスは、 JavaScript の {{jsxref("Promise")}} が拒否されたときにグローバルスクリプトコンテキストに送信されるイベントを表します。これらのイベントは、測定やデバッグ目的に使用すると特に有益です。

プロミス拒否イベントについての詳細は、[プロミスの拒否イベント](/ja/docs/Web/JavaScript/Guide/Using_promises#プロミスの拒否イベント)を参照してください。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("PromiseRejectionEvent.PromiseRejectionEvent", "PromiseRejectionEvent()")}}
  - : `PromiseRejectionEvent` イベントを、指定されたイベントの種類（[`unhandledrejection`](/ja/docs/Web/API/Window/unhandledrejection_event) または [`rejectionhandled`](/ja/docs/Web/API/Window/rejectionhandled_event)）およびその他の詳細を指定して作成します。

## インスタンスプロパティ

_親である {{domxref("Event")}} のプロパティも継承しています。_

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : 拒否された JavaScript の {{jsxref("Promise")}} です。
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : 値、または {{jsxref("Object")}} で、 {{jsxref("Promise.reject()")}} に渡されたプロミスが拒否された理由を示します。

## インスタンスメソッド

_このインターフェイスには固有のメソッドはありません。親である {{domxref("Event")}} からメソッドを継承しています。_

## イベント

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : JavaScript の {{jsxref("Promise")}} が拒否され、そのプロミスの拒否ハンドラーのコードが実行された後に発生します。
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : JavaScript の {{jsxref("Promise")}} が拒否されが、その拒否を処理する拒否ハンドラーがない場合に発生します。

## 例

この単純な例は、処理されなかったプロミスの拒否を捕捉し、デバッグのためにログ出力します。

```js
window.onunhandledrejection = (e) => {
  console.log(e.reason);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
