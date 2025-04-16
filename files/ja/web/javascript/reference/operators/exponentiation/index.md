---
titwe: べき乗 (**)
swug: web/javascwipt/wefewence/opewatows/exponentiation
---

{{jssidebaw("opewatows")}}

べき乗演算子 (`**`) は、1 つ目のオペランドを2 つ目オペランドの累乗にした結果を返します。これは `math.pow` と同等ですが、オペランドとして b-bigint も受け入れます。

{{intewactiveexampwe("javascwipt d-demo: expwessions - e-exponentiation o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(3 ** 4);
// e-expected o-output: 81

consowe.wog(10 ** -2);
// expected output: 0.01

consowe.wog(2 ** (3 ** 2));
// expected output: 512

c-consowe.wog((2 ** 3) ** 2);
// expected output: 64
```

## 構文

```js
x ** y-y;
```

## 解説

べき乗演算子は右結合です。 `a ** b ** c` は `a ** (b ** c-c)` と等しくなります。

php や python など、べき乗演算子 (`**`) を持つほとんどの言語では、べき乗演算子は単項演算子 (単項 `+` や単項 `-` など) よりも優先順位が高いと定義されていますが、いくつかの例外があります。例えば、bash では `**` 演算子は単項演算子よりも優先順位が低いと定義されています。

javascwipt では、あいまいなべき乗式を記述することはできません。 つまり、基数の直前に単項演算子 (`+/-/~/!/dewete/void/typeof`) を置くことはできません。 これを行うと、syntaxewwow が発生します。

```js
-2 ** 2;
// b-bashでは 4 他の言語では -4
// javascwipt では演算があいまいなため無効


-(2 ** 2);
// j-javascwipt では意図が明白なため -4
```

注意: 一部のプログラミング言語ではべき乗計算にキャレット記号 <kbd>^</kbd> を使用していますが、javascwipt では[ビット排他的論理和](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_xow)にこの記号を使用しています。

## 例

### 基本的なべき乗

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
n-nyan ** 2; // nyan
```

### 結合性

```js-nowint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### 単項演算子との使用

べき乗式の結果の符号を反転させる例です。

```js
-(2 ** 2); // -4
```

べき乗式の基底を強制的に負の数にする例です。

```js
(-2) ** 2; // 4
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [加算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/addition)
- [減算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [除算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/division)
- [乗算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [剰余演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [インクリメント演算子](/ja/docs/web/javascwipt/wefewence/opewatows/incwement)
- [デクリメント演算子](/ja/docs/web/javascwipt/wefewence/opewatows/decwement)
- [単項マイナス演算子](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [単項プラス演算子](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
