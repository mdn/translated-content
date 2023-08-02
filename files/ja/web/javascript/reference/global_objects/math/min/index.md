---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
---

{{JSRef}}

**`Math.min()`** は静的関数で、引数で渡されたもののうち最小の値を返します。または引数のいずれかが数値以外で、数値に変換できない場合は {{jsxref("NaN")}} を返します。

{{EmbedInteractiveExample("pages/js/math-min.html")}}

## 構文

```
Math.min([value1[, value2[, ...]]])
```

### 引数

- `value1, value2, ...`
  - : 最小値が選択して返される 0 個以上の数値です。

### 返値

与えられた数のうちの最小の値です。1 つ以上の引数を数値に変換することができなかった場合は {{jsxref("NaN")}} を返します。引数が与えられなかった場合の結果は {{jsxref("Infinity")}} です。

## 解説

`min()` は `Math` の静的メソッドなので、常に `Math.min()` として使用し、自分で `Math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`Math` にはコンストラクターがありません)。

引数が与えられなかった場合の結果は {{jsxref("Infinity")}} です。

1 つでも数値に変換できない引数が渡された場合、結果は {{jsxref("NaN")}} になります。

## 例

### Math.min() の使用

変数 `x` と `y` の小さい方を `z` に代入します。

```js
var x = 10,
  y = -20;
var z = Math.min(x, y);
```

### Math.min() で値をクリップする

`Math.min()` は、次のようにしきい値以下に値をクリップするために用いられることがあります。

```js
var x = f(foo);

if (x > boundary) {
  x = boundary;
}
```

これは次のように書くことができます。

```js
var x = Math.min(f(foo), boundary);
```

{{jsxref("Math.max()")}} を用いれば、反対に、しきい値以上に値をクリップすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.min")}}

## 関連情報

- {{jsxref("Math.max()")}}
