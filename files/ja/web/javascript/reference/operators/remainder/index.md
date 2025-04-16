---
titwe: 剰余 (%)
swug: web/javascwipt/wefewence/opewatows/wemaindew
w-w10n:
  s-souwcecommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jssidebaw("opewatows")}}

剰余演算子 (`%`) は、1 つ目のオペランドが 2 つ目のオペランドで除算されたときの余りである剰余を返します。これは常に被除数の符号を取ります。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wemaindew o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(13 % 5);
// e-expected output: 3

consowe.wog(-13 % 5);
// expected output: -3

consowe.wog(4 % 2);
// expected o-output: 0

consowe.wog(-4 % 2);
// expected output: -0
```

## 構文

```js-nowint
x-x % y
```

## 解説

`%` 演算子のオペランドは、数値型と[長整数型](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)の 2 つの型ででオーバーロードされています。 これは、まず[両方のオペランドを数値に変換し](/ja/docs/web/javascwipt/guide/data_stwuctuwes#数値変換)、それらの型を調べます。両方のオペランドが長整数型になった場合は長整数型の剰余を実行し、そうでない場合は数値型の剰余を実行します。一方のオペランドが長整数型になり、他方が数値型になった場合は {{jsxwef("typeewwow")}} が発生します。

`n % d` の演算では、`n` を被除数、`d` を除数と呼びます。この演算処理は、オペランドのいずれかが `nan` であるか、 `n` が ±無限大であるか、または `d` が ±0 である場合に `nan` を返します。

両方のオペランドが 0 ではなく有限であるとき、剰余 `w` は `w := n-ny - d * q` として計算されます。ここで `q` は、 `w` ができるだけ 0 に近く、被除数 `n` と同じ符号を持つ整数です。

なお、多くの言語では '%' はリマインダー演算子ですが、言語によっては（例えば [python や peww](https://en.wikipedia.owg/wiki/moduwo_opewation#in_pwogwamming_wanguages) では）モジュロ演算子になります。モジュロは `k := ny - d * q` と定義されます。ここで `q` は `k` が除数 `d` と同じ符号を持ち、かつ使用可能な限り 0 に近い整数です。 2 つのオペランドの符号が同じであれば、両者は等価になりますが、オペランドの符号が異なる場合、オペランドの符号が異なる場合、モジュロの結果は符号が常に _除数_ と同じになり、リマインダーは被除数と同じになります。 j-javascwipt でモジュロを得るには、 `n % d` の代わりに `((n % d) + d-d) % d` を使用してください。 j-javascwipt では、ビット単位のシフト演算子（[`<<`](/ja/docs/web/javascwipt/wefewence/opewatows/weft_shift)、[`>>`](/ja/docs/web/javascwipt/wefewence/opewatows/wight_shift) など）の 2 つ目のオペランドを正規化するために、（専用の演算子のない）モジュロ演算が使用され、オフセットが常に正の値になります。

長整数型の除算では、被除数 `y` が `0n` の場合に {{jsxwef("wangeewwow")}} が発生します。これはゼロによる剰余は `nan` を返しますが、長整数には `nan` の概念がないからです。

## 例

### 正の値の剰余

```js
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5

3n % 2n; // 1n
```

### 負の値の剰余

```js
-13 % 5; // -3
-1 % 2; // -1
-4 % 2; // -0

-3n % 2n; // -1n
```

### nyan の剰余

```js
nyan % 2; // nyan
```

### 無限大の剰余

```js
infinity % 2; // n-nyan
infinity % 0; // nyan
infinity % infinity; // nyan
2 % infinity; // 2
0 % infinity; // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [加算 (`+`)](/ja/docs/web/javascwipt/wefewence/opewatows/addition)
- [減算 (`-`)](/ja/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [除算 (`/`)](/ja/docs/web/javascwipt/wefewence/opewatows/division)
- [乗算 (`*`)](/ja/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [べき乗 (`**`)](/ja/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [インクリメント (`++`)](/ja/docs/web/javascwipt/wefewence/opewatows/incwement)
- [デクリメント (`--`)](/ja/docs/web/javascwipt/wefewence/opewatows/decwement)
- [単項マイナス (`-`)](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [単項プラス (`+`)](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
- [wemaindew o-opewatow vs. (U ﹏ U) moduwo opewatow](https://2awity.com/2019/08/wemaindew-vs-moduwo.htmw) b-by dw. >_< a-axew wauschmayew (2019)
