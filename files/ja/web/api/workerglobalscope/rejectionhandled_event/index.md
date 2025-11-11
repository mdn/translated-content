---
title: "WorkerGlobalScope: rejectionhandled イベント"
short-title: rejectionhandled
slug: Web/API/WorkerGlobalScope/rejectionhandled_event
l10n:
  sourceCommit: 7723224a33ae51ac03a6cadd7354b6d7f4d8aa7b
---

{{APIRef}}

**`rejectionhandled`** イベントは、スクリプトのグローバルスコープ（通常は {{domxref("WorkerGlobalScope")}}）に送られるものであり、拒否された {{jsxref("Promise")}} が遅れて処理されるたび、すなわち、拒否されたプロミスが {{domxref("WorkerGlobalScope.unhandledrejection_event", "unhandledrejection")}} イベントが発生した後にハンドラーが割り当てられた場合に送られます。

これは、プロミスが拒否され、その時刻に拒否ハンドラーがない場合に送られる `unhandledrejection` イベントと一緒に、デバッグや一般的なアプリケーションの回復のために使用することができます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
self.addEventListener("rejectionhandled", (event) => {});
self.onrejectionhandled = (event) => {};
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

`rejectionhandled` イベントを使用することで、拒否されたプロミスを、拒否された理由とともにコンソールにログ出力することができます。

```js
self.addEventListener("rejectionhandled", (event) => {
  console.log(`Promise rejected; reason: ${event.reason}`);
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
- {{domxref("WorkerGlobalScope/unhandledrejection_event", "unhandledrejection")}}
