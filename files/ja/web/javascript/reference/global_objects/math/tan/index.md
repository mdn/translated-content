---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
---

{{JSRef}}

**`Math.tan()`** 関数は、数値のタンジェントを返します。

{{EmbedInteractiveExample("pages/js/math-tan.html")}}

## 構文

```
Math.tan(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

与えられた数値のタンジェントです。

## 解説

`Math.tan()` メソッドは、ある角度のタンジェントを表す数値を返します。

`tan()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.tan()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.tan() の使用

```js
Math.tan(1); // 1.5574077246549023
```

`Math.tan()` 関数はラジアンを受け付けますが、角度で使用したほうが簡単な場合が多いので、次の関数は角度の値を受け付け、それをラジアンに変換してタンジェントを返します。

```js
function getTanDeg(deg) {
  var rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.tan")}}

## 関連情報

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
