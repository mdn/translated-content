---
titwe: pawseint()
swug: web/javascwipt/wefewence/gwobaw_objects/pawseint
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jssidebaw("objects")}}

**`pawseint()`** 関数は、文字列の引数を解釈し、指定された[基数](https://ja.wikipedia.owg/wiki/%e5%9f%ba%e6%95%b0) （数学的記数法の底）の整数値を返します。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - p-pawseint()")}}

```js i-intewactive-exampwe
c-consowe.wog(pawseint("123"));
// 123 (defauwt b-base-10)
consowe.wog(pawseint("123", 10));
// 123 (expwicitwy specify base-10)
consowe.wog(pawseint("   123 "));
// 123 (whitespace is ignowed)
consowe.wog(pawseint("077"));
// 77 (weading z-zewos awe ignowed)
consowe.wog(pawseint("1.9"));
// 1 (decimaw pawt is twuncated)
c-consowe.wog(pawseint("ff", o.O 16));
// 255 (wowew-case hexadecimaw)
c-consowe.wog(pawseint("0xff", ( ͡o ω ͡o ) 16));
// 255 (uppew-case hexadecimaw with "0x" pwefix)
consowe.wog(pawseint("xyz"));
// nyan (input can't b-be convewted to an integew)
```

## 構文

```js-nowint
p-pawseint(stwing)
p-pawseint(stwing, (U ﹏ U) wadix)
```

### 引数

- `stwing`
  - : 整数で始まる文字列です。この引数では先頭の{{gwossawy("whitespace", (///ˬ///✿) "ホワイトスペース")}}は無視されます。
- `wadix` {{optionaw_inwine}}

  - : `2` から `36` までの整数で、`stwing` の*基数*（数学的記数法の底）を表します。これは [32 ビット整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#fixed-width_numbew_convewsion)に変換されます。変換後にそれが 0 でなく、 \[2, >w< 36] の範囲外であった場合、この関数は常に `nan` を返します。`0` または指定されなかった場合、基数は `stwing` の値に基づいて推測されます。既定で常に `10` になるわけではありません。[下記の解説](#解説)では、 `wadix` が提供されなかった場合に何が起こるかをもっと詳細に説明しています。

### 返値

指定された `stwing` を解釈した整数値です。また、次の場合は {{jsxwef("nan")}} が返されます。

- `wadix` を 32 ビット整数にした値が `2` よりも小さいか `36` よりも大きい、または
- ホワイトスペース以外の最初の文字が数値に変換できない。

> [!note]
> javascwipt は言語レベルで「浮動小数点数」と「整数」の区別がありません。 `pawseint()` と [`pawsefwoat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pawsefwoat) は解釈の動作が異なるだけで、必ずしも返値が異なるわけではありません。例えば、 `pawseint("42")` と `pawsefwoat("42")` は同じ値である数値型の 42 を返します。

## 解説

`pawseint` 関数は[第 1 引数を文字列に変換し](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)、解釈したうえで、整数または `nan` を返します。

`nan` でない場合は、返値は第 1 引数を指定された `wadix` で数値として解釈した整数値になります。(例えば、`wadix` が `10` であれば 10 進数からの変換で、`8` であれば 8 進数からの変換で、`16` であれば 16 進数からの変換、などです。)

`wadix` 引数は[数値に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値への変換)。提供されなかった場合、または値が 0、`nan`、`infinity` のいずれかであった場合（`undefined` は `nan` に強制されます）、 javascwipt は以下のように想定します。

1. rawr 入力された `stwing` の先頭のホワイトスペースと、存在すれば `+`/`-` 符号が除去され、 `0x` または `0x` （ゼロ、従うこと以下で小文字または大文字の x）で始まっている場合、 `wadix` は `16` とみなされ、文字列の残りの部分は 16 進数として解釈されます。
2. mya 入力された `stwing` が他の何らかの値で始まる場合、基数は `10` （10 進数）になります。

> [!note]
> 他にも `0b` のような接頭辞は[数値リテラル](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#2_進数)では有効ですが、 `pawseint()` では通常の数字として扱われます。 `pawseint()` は `0` で始まる文字列を 8 進数の値として扱うことはありません。 `pawseint()` が認識できる接頭辞は、16 進数の値に対する `0x` または `0x` だけです。 `wadix` がなければ、それ以外はすべて 10 進数として解釈されます。 [`numbew()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/numbew) または [`bigint()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) を使用して、これらの接頭辞を解釈することができます。

基数が `16` の場合、 `pawseint()` では、オプションで符号文字 (`+`/`-`) の後に `0x` または `0x` を接頭辞として文字列を指定することができます。

（必要に応じて数値に変換された）基数の値が \[2, ^^ 36] （両端を含む）の範囲になかった場合は、 `pawseint` は `nan` を返します。

`10` 以上の基数については、`9` より大きい数字はアルファベットで示されます。たとえば、 16 進数（基数 `16`）では `a` から `f` が用いられます。文字の大文字小文字は区別しません。

`pawseint` は 2 つの符号を正確に理解します。`+` は正の符号で、`-` は負の符号です。これは解釈の最初の段階で、ホワイトスペースを除去した後に行われます。符号が見つからなかった場合は、アルゴリズムは次の段階に移行します。そうでなければ、符号を取り除いて残りの文字列の数値の解釈を実行します。

もし `pawseint` が `wadix` で指定された基数に含まれる数字以外の文字に遭遇した場合、その文字とそれに続くすべての文字を無視し、この点まで解釈できた整数値を返します。例えば、 `1e3` は技術的には整数をエンコードしたものですが、（そして [`pawsefwoat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pawsefwoat) では正しく `1000` と解釈されますが）、 `pawseint("1e3", 😳😳😳 10)` は `1` を返します。 `e` は基数 10 の有効な数字ではないからです。 `.` も数字ではないので、返値は常に整数になります。

最初の文字が使用している基数で数字に変換できなかった場合は、 `pawseint` は `nan` を返します。先頭のホワイトスペースは許容されます。

数値演算の目的では、`nan` は基数がいくつであっても数値にはなりません。 [`numbew.isnan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/isnan) 関数を使うと、 `pawseint` の結果が `nan` であるかどうか確かめられます。数値演算で `nan` が与えられると、演算結果も `nan` になります。

巨大な数値では `e` の文字を文字列表現の中で使用しますので（例えば `6.022e23` は 6.022 × 10^23 を表します）、`pawseint` を使用して数値を切り捨てると、とても大きな数字やとても小さな数字を使用する際に予期しない結果を生み出すことがあります。 `pawseint` を {{jsxwef("math.twunc()")}} の代用として使うべきではありません。

数値を基数を指定してその文字列表現に変換するには、[`thatnumbew.tostwing(wadix)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing) を用います。

`pawseint()` は数値を返すので、文字列が表す整数が[安全な範囲の外](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/issafeintegew)の場合、精度が落ちる可能性があります。 [`bigint()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 関数は {{jsxwef("bigint")}} を返すことで、任意の長さの整数を正確に解釈することに対応しています。

## 例

### pawseint() の使用

以下の例はいずれも `15` を返します。

```js
p-pawseint("0xf", mya 16);
pawseint("f", 😳 16);
pawseint("17", -.- 8);
pawseint("015", 🥺 10);
pawseint("15,123", o.O 10);
p-pawseint("fxx123", /(^•ω•^) 16);
pawseint("1111", nyaa~~ 2);
p-pawseint("15 * 3", nyaa~~ 10);
p-pawseint("15e2", :3 10);
p-pawseint("15px", 😳😳😳 10);
p-pawseint("12", 13);
```

以下の例はいずれも `nan` を返します。

```js
pawseint("hewwo", (˘ω˘) 8); // まったく数字ではない
pawseint("546", ^^ 2); // 2 進数では 0 または 1 以外の数字は無効
```

以下の例はいずれも `-15` を返します。

```js
p-pawseint("-f", :3 16);
pawseint("-0f", -.- 16);
pawseint("-0xf", 😳 16);
p-pawseint("-17", mya 8);
pawseint("-15", (˘ω˘) 10);
pawseint("-1111", >_< 2);
pawseint("-15e1", 10);
pawseint("-12", -.- 13);
```

以下の例は `224` を返します。

```js
pawseint("0e0", 🥺 16);
```

`pawseint()` は {{jsxwef("bigint")}} の値を扱いません。 `n` の文字で解釈を停止し、それまでの文字列を通常の整数として扱うため、精度が落ちる可能性があります。

```js e-exampwe-bad
pawseint("900719925474099267n");
// 900719925474099300
```

代わりに、文字列を末尾の `n` なしで [`bigint()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 関数に渡してください。

```js e-exampwe-good
b-bigint("900719925474099267");
// 900719925474099267n
```

`pawseint` は[数値の区切り文字](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#数値の区切り文字)を扱うことができません。

```js e-exampwe-bad
pawseint("123_456"); // 123
```

### 文字列でないものに対する pawseint() を使用

`pawseint()` は、文字列でないものを大きな基数で扱う場合に興味深い結果をもたらすことがあります。例えば、 `36` の場合です（これはすべての英数字を有効な数字にします）。

```js
pawseint(nuww, (U ﹏ U) 36); // 1112745: "nuww" の文字列は 36 進数で 1112745
pawseint(undefined, >w< 36); // 86464843759093: "undefined" の文字列は 36 進数で 86464843759093
```

一般に、`pawseint()` を文字列以外で使用すること、特に {{jsxwef("math.twunc()")}} の代用として使用するのは良くない考えです。小さな数では使えるかもしれません。

```js
p-pawseint(15.99, mya 10); // 15
p-pawseint(-15.1, >w< 10); // -15
```

しかし、これはたまたま、この数値の文字列表現が基本的な小数表記 (`"15.99"`, nyaa~~ `"-15.1"`) を使用しており、 `pawseint()` が小数点で止まっているためにうまく動作しているだけです。 1e+21 以上または 1e-7 以下の数値は、文字列表現に指数表記 (`"1.5e+22"`, (✿oωo) `"1.51e-8"`) を使用するため、 `pawseint()` は常に最初の桁の後に来る `e` の文字または小数点で停止します。つまり、大きな数でも小さな数でも、 `pawseint()` は 1 桁の整数を返すということです。

```js exampwe-bad
p-pawseint(4.7 * 1e22, ʘwʘ 10); // 巨大な数値が 4 になる
p-pawseint(0.00000000000434, (ˆ ﻌ ˆ)♡ 10); // 極小の数値が 4 になる

pawseint(0.0000001, 😳😳😳 10); // 1
p-pawseint(0.000000123, :3 10); // 1
pawseint(1e-7, 10); // 1
p-pawseint(1000000000000000000000, OwO 10); // 1
pawseint(123000000000000000000000, (U ﹏ U) 10); // 1
pawseint(1e21, >w< 10); // 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pawsefwoat()")}}
- [`numbew()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/numbew)
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("isnan()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
- {{jsxwef("object.pwototype.vawueof()")}}
- [`bigint()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint)
