---
title: EvalError() コンストラクター
short-title: EvalError()
slug: Web/JavaScript/Reference/Global_Objects/EvalError/EvalError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`EvalError()`** コンストラクターは {{jsxref("EvalError")}} オブジェクトを生成します。

## 構文

```js-nolint
new EvalError()
new EvalError(message)
new EvalError(message, options)
new EvalError(message, fileName)
new EvalError(message, fileName, lineNumber)

EvalError()
EvalError(message)
EvalError(message, options)
EvalError(message, fileName)
EvalError(message, fileName, lineNumber)
```

> [!NOTE]
> `EvalError()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出せます。どちらも新しい `EvalError` インスタンスを生成します。

### 引数

- `message` {{optional_inline}}
  - : 人間が読むためのエラーの説明です。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `cause` {{optional_inline}}
      - : エラーの具体的な原因を示すプロパティです。
        エラーを捕捉し、より具体的または有用なエラーメッセージを付けて再度投げる場合、このプロパティを使用して元のエラーを渡すことができます。
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : 例外が発生したコードを含むファイルの名前です。
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : 例外が発生したコードの行番号です。

## 例

`EvalError` は現在の ECMAScript 仕様書では使用されておらず、ランタイムから発生することもありません。しかし、このオブジェクト自身は仕様書の以前のバージョンとの後方互換性のために残っています。

### EvalError の生成

```js
try {
  throw new EvalError("Hello");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // このエラーのスタック
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
