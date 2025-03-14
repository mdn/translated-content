---
title: "WorkerGlobalScope: unhandledrejection イベント"
short-title: unhandledrejection
slug: Web/API/WorkerGlobalScope/unhandledrejection_event
l10n:
  sourceCommit: 7723224a33ae51ac03a6cadd7354b6d7f4d8aa7b
---

{{APIRef}}

**`unhandledrejection`** イベントは、スクリプトのグローバルスコープ（通常は {{domxref("WorkerGlobalScope")}}）に送られるものであり、拒否ハンドラーのない {{jsxref("Promise")}} が拒否されたときに発行されます。

これはデバッグや、予期せぬ状況でのフォールバックエラー処理を提供するのに有益です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
self.addEventListener("unhandledrejection", (event) => {});
self.onunhandledrejection = (event) => {};
```

## イベント型

{{domxref("PromiseRejectionEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("PromiseRejectionEvent")}}

## イベントプロパティ

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : 拒否されたプロミス ({{jsxref("Promise")}}) です。
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : プロミスが拒否された理由を示す値または {{jsxref("Object")}} で、{{jsxref("Promise.reject()")}} に渡されたものです。

## 例

### 基本的なエラーログ出力

この例は、未処理のプロミスの拒否に関する情報をコンソールにログ出力します。

```js
self.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

また、`onunhandledrejection` イベントハンドラープロパティを使用して、イベントリスナーを設定することができます。

```js
self.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### 既定の処理を防止

多くの環境（{{Glossary("Node.js")}} など）では、既定では処理されなかったプロミスの拒否をコンソールに報告します。`unhandledrejection` イベントのハンドラーを追加することで、そこでイベントをキャンセルする {{domxref("Event.preventDefault()", "preventDefault()")}} を呼び出すことで、ランタイムのログ出力コードで処理されるのを防ぐことができます。これは `unhandledrejection` がキャンセル可能であるため、うまく動作します。

```js
self.addEventListener("unhandledrejection", (event) => {
  // code for handling the unhandled rejection
  // …

  // Prevent the default handling (such as outputting the
  // error to the console)

  event.preventDefault();
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
- {{domxref("WorkerGlobalScope/rejectionhandled_event", "rejectionhandled")}} イベント
