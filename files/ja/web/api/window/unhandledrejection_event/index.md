---
title: "Window: unhandledrejection イベント"
short-title: unhandledrejection
slug: Web/API/Window/unhandledrejection_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

**`unhandledrejection`** イベントは、 JavaScript の拒否ハンドラーを持たない {{jsxref("Promise")}} が拒否されたときにスクリプトのグローバルスコープに送られます。 通常、これは {{domxref("window")}} ですが、{{domxref("Worker")}} であることもあります。

これはデバッグや、予期しない場面でのエラーハンドリングのエラーの代替手段を提供するために利用することができます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("unhandledrejection", (event) => { })

onunhandledrejection = (event) => { }
```

## イベント型

{{domxref("PromiseRejectionEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PromiseRejectionEvent")}}

## イベントプロパティ

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : 拒否された JavaScript の {{jsxref("Promise")}} です。
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : プロミスが拒否された理由を示す値または {{jsxref("Object")}} であり、{{jsxref("Promise.reject()")}} に渡されたままのものです。

## イベントハンドラーの別名

`Window` インターフェイスに加え、イベントハンドラープロパティ `onunhandledrejection` は、以下のターゲットでも利用可能です。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 使用上のメモ

`unhandledrejection` イベントにバブリングを許すと、結局はコンソールにエラーメッセージを出力することになります。 これは {{domxref("PromiseRejectionEvent")}} の {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出すことで防ぐことができます。 例は以下の [Preventing default handling](#preventing_default_handling) を参照してください。

このイベントはデータ漏洩が起こる可能性があるため、オリジンを越えるスクリプトに起因する {{jsxref("Promise")}} が拒否されても、このイベントは発生しません。

## 例

### 基本的なエラーのログ

この例では、処理されなかったプロミスの拒否についての情報をコンソールにログ出力します。

```js
window.addEventListener("unhandledrejection", (event) => {
  console.warn(`プロミスの拒否が処理されませんでした: ${event.reason}`);
});
```

イベントハンドラープロパティを使用して、イベントリスナーを設定することもできます。

```js
window.onunhandledrejection = (event) => {
  console.warn(`プロミスの拒否が処理されませんでした: ${event.reason}`);
};
```

### デフォルトの処理の防止

（{{Glossary("Node.js")}} など）多くの環境では、デフォルトではプロミスが処理されないとコンソールに報告されます。 `unhandledrejection` イベントのハンドラー — と、さらに実行したいその他のタスク — を追加して、 {{domxref("Event.preventDefault()", "preventDefault()")}} を呼び出すことでイベントをキャンセルし、実行時のログ出力コードが扱われるまでバブリングすることを防ぐことができます。 これは `unhandledrejection` がキャンセル可能であるためです。

```js
window.addEventListener("unhandledrejection", (event) => {
  // 処理されていない拒否を処理するコード
  // …

  // デフォルトの処理（コンソールへのエラー出力など）を無効にする

  event.preventDefault();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プロミスの拒否イベント](/ja/docs/Web/JavaScript/Guide/Using_promises#プロミスの拒否イベント)
- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}} イベント
- {{jsxref("Promise")}}
