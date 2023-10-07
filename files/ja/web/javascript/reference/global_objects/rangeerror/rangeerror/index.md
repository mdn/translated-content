---
title: RangeError() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/RangeError/RangeError
---

{{JSRef}}

**`RangeError()`** コンストラクターは、値が存在しないか許可された値の範囲にない場合のエラーを生成します。

## 構文

```
new RangeError([message[, fileName[, lineNumber]]])
```

### 引数

- `message` {{optional_inline}}
  - : 人間が読むためのエラーの説明です。
- `fileName` {{optional_inline}}
  - : 例外が発生したコードを含むファイルの名前です。
- `lineNumber` {{optional_inline}}
  - : 例外が発生したコードの行番号です。

## 例

### RangeError の使用 (数値)

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

### RangeError の使用 (数値以外)

```js
function check(value) {
  if (["apple", "banana", "carrot"].includes(value) === false) {
    throw new RangeError(
      'The argument must be an "apple", "banana", or "carrot".',
    );
  }
}

try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.RangeError.RangeError")}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.toExponential()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Number.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
