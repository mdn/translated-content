---
title: URIError() コンストラクター
short-title: URIError()
slug: Web/JavaScript/Reference/Global_Objects/URIError/URIError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`URIError`** コンストラクターは {{jsxref("URIError")}} オブジェクトを生成します。

## 構文

```js-nolint
new URIError()
new URIError(message)
new URIError(message, options)
new URIError(message, fileName)
new URIError(message, fileName, lineNumber)

URIError()
URIError(message)
URIError(message, options)
URIError(message, fileName)
URIError(message, fileName, lineNumber)
```

> [!NOTE]
> `URIError()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出せます。どちらも新しい `URIError` インスタンスを生成します。

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

### URIError の捕捉

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.stack); // このエラーのスタック
}
```

### URIError の生成

```js
try {
  throw new URIError("Hello");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "URIError"
  console.log(e.stack); // このエラーのスタック
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
