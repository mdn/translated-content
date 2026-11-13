---
title: "WorkerGlobalScope: reportError() メソッド"
short-title: reportError()
slug: Web/API/WorkerGlobalScope/reportError
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

**`reportError()`** は {{DOMxRef("WorkerGlobalScope")}} インターフェイスのメソッドで、 JavaScript の捕捉されない例外をエミュレートして、コンソールやグローバルイベントハンドラーにエラーを報告するために使用することができます。

この機能は、主にカスタムイベント配信ライブラリーや コールバック操作ライブラリーを対象としています。
ライブラリーはこの機能を使用して、コールバックコードのエラーを捕捉し、最上位のハンドラーに投げ直すことができます。
これにより、 1 つのコールバックで例外が発生しても、他のコールバックが処理されなくなることがなくなると同時に、スタックトレース情報が最上位レベルのデバッグに利用できるようになります。

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

self.onerror = (message, source, lineno, colno, error) => {
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

- {{DOMxRef("WorkerGlobalScope")}}
- {{DOMxRef("Window.reportError()")}}
- {{DOMxRef("Window/error_event", "error")}} イベント
- {{DOMxRef("WorkerGlobalScope/error_event", "error")}} イベント
- {{DOMxRef("HTMLElement/error_event", "error")}} イベント
