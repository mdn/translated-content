---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

**`Math.min()`** は静的メソッドで、引数で渡されたもののうち最小の値を返します。引数がない場合は {{jsxref("Infinity")}} を返します。

{{EmbedInteractiveExample("pages/js/math-min.html")}}

## 構文

```js-nolint
Math.min()
Math.min(value1)
Math.min(value1, value2)
Math.min(value1, value2, /* …, */ valueN)
```

### 引数

- `value1`, …, `valueN`
  - : 最小値が選択して返される 0 個以上の数値です。

### 返値

与えられた数のうちの最小の値です。1 つ以上の引数を数値に変換することができなかった場合は {{jsxref("NaN")}} を返します。引数が与えられなかった場合の結果は {{jsxref("Infinity")}} です。

## 解説

`min()` は `Math` の静的メソッドなので、常に `Math.min()` として使用し、自分で `Math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`Math` にはコンストラクターがありません)。

[`Math.min.length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length) は 2 であり、少なくとも 2 つの引数を処理するように設計されていることを弱く示唆しています。

## 例

### Math.min() の使用

変数 `x` と `y` の小さい方を `z` に代入します。

```js
const x = 10;
const y = -20;
const z = Math.min(x, y); // -20
```

### Math.min() で値をクリップする

`Math.min()` は、次のようにしきい値以下に値をクリップするために用いられることがあります。

```js
let x = f(foo);

if (x > boundary) {
  x = boundary;
}
```

これは次のように書くことができます。

```js
const x = Math.min(f(foo), boundary);
```

{{jsxref("Math.max()")}} を用いれば、反対に、しきい値以上に値をクリップすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.max()")}}
