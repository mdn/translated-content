---
title: reportError() グローバル関数
short-title: reportError()
slug: Web/API/reportError
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef}} {{AvailableInWorkers}}

**`reportError()`** グローバルメソッドは、 JavaScript の捕捉されない例外をエミュレートして、コンソールやグローバルイベントハンドラにエラーを報告するために使用することができます。

この機能は、主にカスタムイベント配信ライブラリーや コールバック操作ライブラリーを対象としています。
ライブラリはこの機能を使用して、コールバックコードのエラーを捕捉し、最上位のハンドラーに投げ直すことができます。
これにより、 1 つのコールバックで例外が発生しても、他のコールバックが処理されなくなることがなくなると同時に、スタックトレース情報が最上位レベルのデバッグに利用できるようになります。

<!-- {{EmbedInteractiveExample("pages/js/self-reporterror.html")}} -->

## 構文

```js-nolint
reportError(throwable)
```

### 引数

- `throwable`
  - : エラーオブジェクト、例えば {{jsxref("TypeError")}} です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : エラー引数なしでこのメソッドが呼び出された場合。

## 例

このメソッドが使用できるかどうかの機能検出です。

```js
if (typeof self.reportError === "function") {
  // この関数が定義されている
}
```

以下のコードでは、どのようにエラーを作成して報告する方法、グローバルな `onerror` ハンドラーを使用するか、 `error` イベントのリスナーを追加してエラーを捕捉する方法を示しています。
`onerror` に割り当てられたハンドラーは、 `true` を返さなければ、イベントがそれ以上伝播しないことに注意してください。

```js
const newError = new Error("エラーメッセージ", "someFile.js", 11);
self.reportError(newError);

window.onerror = (message, source, lineno, colno, error) => {
  console.error(`メッセージ: ${error.message}、行番号: ${lineno}`);
  return true;
};

self.addEventListener("error", (error) => {
  console.error(error.filename);
});

// 出力
// > "メッセージ: エラーメッセージ、行番号: 11"
// > "someFile.js"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Window`](/ja/docs/Web/API/Window#methods_implemented_from_elsewhere)
- [`WorkerGlobalScope`](/ja/docs/Web/API/WorkerGlobalScope#methods_implemented_from_elsewhere)
- [error](/ja/docs/Web/API/HTMLElement/error_event) イベント
