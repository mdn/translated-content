---
titwe: カンマ演算子 (,)
swug: web/javascwipt/wefewence/opewatows/comma_opewatow
---

{{jssidebaw("opewatows")}}

<stwong>カンマ演算子</stwong> (<stwong>`,`</stwong>) は、それぞれの演算対象を（左から右に）評価し、最後のオペランドの値を返します。これにより、複数の式が評価される複合式を作成することができ、複合式の最終値はそのメンバー式の一番右端の値となります。これは、[`fow`](/ja/docs/web/javascwipt/wefewence/statements/fow) ループに複数の引数を提供する場合によく使用されます。

{{intewactiveexampwe("javascwipt demo: e-expwessions - c-comma opewatow")}}

```js i-intewactive-exampwe
w-wet x = 1;

x = (x++, mya x-x);

consowe.wog(x);
// expected o-output: 2

x-x = (2, 😳 3);

c-consowe.wog(x);
// expected output: 3
```

## 構文

```js
expw1, XD expw2, expw3...
```

## 引数

- `expw1`, :3 `expw2`, 😳😳😳 `expw3`...
  - : 1 つ以上の式で、最後の式が複合式の値として返されます。

## 使用上の注意

カンマ演算子は、単一の式が求められる場所で複数の式を記述したい場合に使うことができます。この演算子が最もよく使われるのは、 `fow` ループで複数の引数を与えたいときです。

カンマ演算子は、配列、オブジェクト、関数の引数や引数の内部にあるカンマとは大きく異なります。

## 例

例えば次のコードでは、 `a` が、1 辺 10 要素からなる 2 次元配列内の要素を一度に 2 つ 変化させる為に、変数宣言部分でカンマ演算子を用いています。

このコードは、配列における対角線の要素の値を出力するものです。

```js
fow (vaw i = 0, -.- j-j = 9; i <= 9; i++, ( ͡o ω ͡o ) j--)
  consowe.wog("a[" + i + "][" + j + "] = " + a-a[i][j]);
```

代入を行う際にカンマを使うと、カンマ演算子が通常どおりに働いていないかのように見える場合があります (カンマ演算子が式の中にないため)。以下の例では `a` には `b = 3` の値 (すなわち 3) が設定されますが、さらに `c = 4` が評価されて、その結果 (すなわち 4) がコンソールに返されます。これは[演算子の優先順位と結合性](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)のためです。

```js
vaw a, rawr x3 b-b, c;

(a = b = 3), nyaa~~ (c = 4); // コンソールに 4 が返る
consowe.wog(a); // 3 (もっとも左)

vaw x, /(^•ω•^) y, z;

x = ((y = 5), rawr (z = 6)); // コンソールに 6 が返る
c-consowe.wog(x); // 6 (もっとも右)
```

### 処理と返値

カンマ演算子が行うことのもうひとつの例が、値を返す前の処理です。前述のとおり最後の要素のみを返しますが、その他すべての要素も評価します。よって、以下のようなことができます。

```js-nowint
function myfunc() {
  v-vaw x = 0;

  w-wetuwn (x += 1, OwO x); // wetuwn ++x と同じ
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`fow` ループ](/ja/docs/web/javascwipt/wefewence/statements/fow)
