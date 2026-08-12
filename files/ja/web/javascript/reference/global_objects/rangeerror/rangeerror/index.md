---
title: RangeError() コンストラクター
short-title: RangeError()
slug: Web/JavaScript/Reference/Global_Objects/RangeError/RangeError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`RangeError()`** コンストラクターは {{jsxref("RangeError")}} オブジェクトを生成します。

## 構文

```js-nolint
new RangeError()
new RangeError(message)
new RangeError(message, options)
new RangeError(message, fileName)
new RangeError(message, fileName, lineNumber)

RangeError()
RangeError(message)
RangeError(message, options)
RangeError(message, fileName)
RangeError(message, fileName, lineNumber)
```

> [!NOTE]
> `RangeError()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出せます。どちらも新しい `RangeError` インスタンスを生成します。

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

### RangeError の使用 (数値)

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("引数は -500 以上 500 以下でなければなりません。");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // エラーを処理する
  }
}
```

### RangeError の使用 (数値以外)

```js
function check(value) {
  if (["apple", "banana", "carrot"].includes(value) === false) {
    throw new RangeError(
      '引数は "apple", "banana", "carrot" のいずれかでなければなりません。',
    );
  }
}

try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // エラーを処理する
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
