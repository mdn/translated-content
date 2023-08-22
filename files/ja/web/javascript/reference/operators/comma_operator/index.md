---
title: カンマ演算子 (,)
slug: Web/JavaScript/Reference/Operators/Comma_operator
---

{{jsSidebar("Operators")}}

<strong>カンマ演算子</strong> (<strong>`,`</strong>) は、それぞれの演算対象を（左から右に）評価し、最後のオペランドの値を返します。これにより、複数の式が評価される複合式を作成することができ、複合式の最終値はそのメンバー式の一番右端の値となります。これは、[`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) ループに複数の引数を提供する場合によく使用されます。

{{EmbedInteractiveExample("pages/js/expressions-commaoperators.html")}}

## 構文

```js
expr1, expr2, expr3...
```

## 引数

- `expr1`, `expr2`, `expr3`...
  - : 1 つ以上の式で、最後の式が複合式の値として返されます。

## 使用上の注意

カンマ演算子は、単一の式が求められる場所で複数の式を記述したい場合に使うことができます。この演算子が最もよく使われるのは、 `for` ループで複数の引数を与えたいときです。

カンマ演算子は、配列、オブジェクト、関数の引数や引数の内部にあるカンマとは大きく異なります。

## 例

例えば次のコードでは、 `a` が、1 辺 10 要素からなる 2 次元配列内の要素を一度に 2 つ 変化させる為に、変数宣言部分でカンマ演算子を用いています。

このコードは、配列における対角線の要素の値を出力するものです。

```js
for (var i = 0, j = 9; i <= 9; i++, j--)
  console.log("a[" + i + "][" + j + "] = " + a[i][j]);
```

代入を行う際にカンマを使うと、カンマ演算子が通常どおりに働いていないかのように見える場合があります (カンマ演算子が式の中にないため)。以下の例では `a` には `b = 3` の値 (すなわち 3) が設定されますが、さらに `c = 4` が評価されて、その結果 (すなわち 4) がコンソールに返されます。これは[演算子の優先順位と結合性](/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)のためです。

```js
var a, b, c;

(a = b = 3), (c = 4); // コンソールに 4 が返る
console.log(a); // 3 (もっとも左)

var x, y, z;

x = ((y = 5), (z = 6)); // コンソールに 6 が返る
console.log(x); // 6 (もっとも右)
```

### 処理と返値

カンマ演算子が行うことのもうひとつの例が、値を返す前の処理です。前述のとおり最後の要素のみを返しますが、その他すべての要素も評価します。よって、以下のようなことができます。

```js-nolint
function myFunc() {
  var x = 0;

  return (x += 1, x); // return ++x と同じ
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`for` ループ](/ja/docs/Web/JavaScript/Reference/Statements/for)
