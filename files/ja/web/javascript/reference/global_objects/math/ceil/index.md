---
title: Math.ceil()
short-title: ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.ceil()`** は静的メソッドで、常に切り上げを行い、与えられた数以上の最小の整数を返します。

{{InteractiveExample("JavaScript デモ: Math.ceil()")}}

```js interactive-example
console.log(Math.ceil(0.95));
// 予想される結果: 1

console.log(Math.ceil(4));
// 予想される結果: 4

console.log(Math.ceil(7.004));
// 予想される結果: 8

console.log(Math.ceil(-7.004));
// 予想される結果: -7
```

## 構文

```js-nolint
Math.ceil(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` 以上の最小の整数です。これは [`-Math.floor(-x)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) と同じ値です。

## 解説

`ceil()` は `Math` オブジェクトの静的メソッドなので、 `Math` オブジェクトを生成してメソッドとして使用するのではなく、常に `Math.ceil()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.ceil() の使用

```js
Math.ceil(-Infinity); // -無限大
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // 無限大
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
