---
title: BigInt.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`valueOf()`** は {{jsxref("BigInt")}} 値のメソッドで、 {{jsxref("BigInt")}} オブジェクトにラップされているプリミティブ値を返します。

{{InteractiveExample("JavaScript デモ: BigInt.prototype.valueOf()", "shorter")}}

```js interactive-example
console.log(typeof Object(1n));
// 予想される結果: "object"

console.log(typeof Object(1n).valueOf());
// 予想される結果: "bigint"
```

## 構文

```js-nolint
valueOf()
```

### 引数

なし。

### 返値

指定された {{jsxref("BigInt")}} オブジェクトのプリミティブ値を表す長整数です。

## 例

### `valueOf` の使用

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("BigInt.prototype.toString()")}}
