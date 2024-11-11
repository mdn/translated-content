---
title: Math.f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

**`Math.f16round()`** は静的メソッドで、数値に最も近い [16 ビット半精度](https://ja.wikipedia.org/wiki/半精度浮動小数点数)浮動小数点表現を返します。

{{EmbedInteractiveExample("pages/js/math-f16round.html")}}

## 構文

```js-nolint
Math.f16round(doubleFloat)
```

### 引数

- `doubleFloat`
  - : 数値です。

### 返値

`doubleFloat` に最も近い [16 ビット半精度](https://ja.wikipedia.org/wiki/半精度浮動小数点数)浮動小数点表現です。

## 解説

`Math.f16round` は、 {{jsxref("Math.fround()")}} の 16 ビット版です。これは、 {{jsxref("Float16Array")}} から読み込む場合など、 float16 の数値を操作する際に、意図通りに動作します。内部的には、JavaScript で数値は引き続き 64 ビット浮動小数点数として扱い、仮数部の 10 ビット目で「偶数への丸め」を行い、続く仮数部のビットすべてを 0 に設定します。数値が 16 ビット浮動小数点数の範囲外である場合、 {{jsxref("Infinity")}} または `-Infinity` が返値として返されます。

`f16round()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.f16round()` として使用するようにしてください（`Math` はコンストラクターではありません）。

## 例

### Math.f16round() の使用

1.5 という数字は 2 進法で正確に表すことができ、 16 ビットでも 64 ビットでも同じです。

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

しかし、 1.337 という数字は 2 進法では正確に表すことができないため、 16 ビットと 64 ビットでは差が出ます。

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000 は 16 ビット浮動小数点では大きすぎるので、 `Infinity` が返されます。

```js
Math.f16round(100000); // Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.f16round` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#float16-methods)
- {{jsxref("Math.fround()")}}
- {{jsxref("Math.round()")}}
