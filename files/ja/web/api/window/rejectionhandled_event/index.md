---
title: "Window: rejectionhandled イベント"
short-title: rejectionhandled
slug: Web/API/Window/rejectionhandled_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("HTML DOM")}}

**`rejectionhandled`** イベントは、拒否された JavaScript の {{jsxref("Promise")}} が遅れて処理されるたびに、スクリプトのグローバルスコープ（通常は {{domxref("window")}} ですが、{{domxref("Worker")}} でも同様です）に送信されます。これは、その拒否によって {{domxref("Window.unhandledrejection_event", "unhandledrejection")}} イベントが発生した後に、そのプロミスにハンドラーが添付された場合です。

これは、デバッグや一般的なアプリケーションの回復力向上のために使用することができます。これは、プロミスが拒否されたが、その時点で拒否に対するハンドラーが存在しない場合に送信される `unhandledrejection` イベントと組み合わせて使用します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("rejectionhandled", (event) => { })

onrejectionhandled = (event) => { }
```

## イベント型

{{domxref("PromiseRejectionEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("PromiseRejectionEvent")}}

## イベントプロパティ

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : JavaScript の {{jsxref("Promise")}} で、拒否されたもの。
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : 値または {{jsxref("Object")}} で、プロミスが拒否された理由を示します。これは、{{jsxref("Promise.reject()")}} に渡されたものです。

## イベントハンドラーの別名

`Window` インターフェイスに加えて、イベントハンドラープロパティ `onrejectionhandled` は以下のターゲットでも利用可能です。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 例

`rejectionhandled` イベントを使用して、拒否されたプロミスを、拒否された理由を添えてコンソールに出力することができます。

```js
window.addEventListener("rejectionhandled", (event) => {
  console.log(`プロミスが拒否されました。理由: ${event.reason}`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プロミスの拒否イベント](/ja/docs/Web/JavaScript/Guide/Using_promises#プロミスの拒否イベント)
- {{domxref("PromiseRejectionEvent")}}
- {{jsxref("Promise")}}
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
