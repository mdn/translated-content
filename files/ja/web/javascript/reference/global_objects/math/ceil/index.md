---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
l10n:
  sourceCommit: 910a6fedb299488ba7e94b884da7bcd71e79ec1a
---

{{JSRef}}

**`Math.ceil()`** は静的メソッドで、常に切り上げを行い、与えられた数以上の最小の整数を返します。

{{EmbedInteractiveExample("pages/js/math-ceil.html")}}

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
