---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

**`parseInt()`** 関数は、文字列の引数を解釈し、指定された[基数](https://ja.wikipedia.org/wiki/%E5%9F%BA%E6%95%B0) （数学的記数法の底）の整数値を返します。

{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}

## 構文

```js-nolint
parseInt(string)
parseInt(string, radix)
```

### 引数

- `string`
  - : 整数で始まる文字列です。この引数では先頭の{{Glossary("whitespace", "ホワイトスペース")}}は無視されます。
- `radix` {{optional_inline}}

  - : `2` から `36` までの整数で、`string` の*基数*（数学的記数法の底）を表します。これは [32 ビット整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion)に変換されます。変換後にそれが 0 でなく、 \[2, 36] の範囲外であった場合、この関数は常に `NaN` を返します。`0` または指定されなかった場合、基数は `string` の値に基づいて推測されます。既定で常に `10` になるわけではありません。[下記の解説](#解説)では、 `radix` が提供されなかった場合に何が起こるかをもっと詳細に説明しています。

### 返値

指定された `string` を解釈した整数値です。また、次の場合は {{jsxref("NaN")}} が返されます。

- `radix` を 32 ビット整数にした値が `2` よりも小さいか `36` よりも大きい、または
- ホワイトスペース以外の最初の文字が数値に変換できない。

> [!NOTE]
> JavaScript は言語レベルで「浮動小数点数」と「整数」の区別がありません。 `parseInt()` と [`parseFloat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) は解釈の動作が異なるだけで、必ずしも返値が異なるわけではありません。例えば、 `parseInt("42")` と `parseFloat("42")` は同じ値である数値型の 42 を返します。

## 解説

`parseInt` 関数は[第 1 引数を文字列に変換し](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)、解釈したうえで、整数または `NaN` を返します。

`NaN` でない場合は、返値は第 1 引数を指定された `radix` で数値として解釈した整数値になります。(例えば、`radix` が `10` であれば 10 進数からの変換で、`8` であれば 8 進数からの変換で、`16` であれば 16 進数からの変換、などです。)

`radix` 引数は[数値に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)。提供されなかった場合、または値が 0、`NaN`、`Infinity` のいずれかであった場合（`undefined` は `NaN` に強制されます）、 JavaScript は以下のように想定します。

1. 入力された `string` の先頭のホワイトスペースと、存在すれば `+`/`-` 符号が除去され、 `0x` または `0X` （ゼロ、従うこと以下で小文字または大文字の X）で始まっている場合、 `radix` は `16` とみなされ、文字列の残りの部分は 16 進数として解釈されます。
2. 入力された `string` が他の何らかの値で始まる場合、基数は `10` （10 進数）になります。

> [!NOTE]
> 他にも `0b` のような接頭辞は[数値リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#2_進数)では有効ですが、 `parseInt()` では通常の数字として扱われます。 `parseInt()` は `0` で始まる文字列を 8 進数の値として扱うことはありません。 `parseInt()` が認識できる接頭辞は、16 進数の値に対する `0x` または `0X` だけです。 `radix` がなければ、それ以外はすべて 10 進数として解釈されます。 [`Number()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) または [`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) を使用して、これらの接頭辞を解釈することができます。

基数が `16` の場合、 `parseInt()` では、オプションで符号文字 (`+`/`-`) の後に `0x` または `0X` を接頭辞として文字列を指定することができます。

（必要に応じて数値に変換された）基数の値が \[2, 36] （両端を含む）の範囲になかった場合は、 `parseInt` は `NaN` を返します。

`10` 以上の基数については、`9` より大きい数字はアルファベットで示されます。たとえば、 16 進数（基数 `16`）では `A` から `F` が用いられます。文字の大文字小文字は区別しません。

`parseInt` は 2 つの符号を正確に理解します。`+` は正の符号で、`-` は負の符号です。これは解釈の最初の段階で、ホワイトスペースを除去した後に行われます。符号が見つからなかった場合は、アルゴリズムは次の段階に移行します。そうでなければ、符号を取り除いて残りの文字列の数値の解釈を実行します。

もし `parseInt` が `radix` で指定された基数に含まれる数字以外の文字に遭遇した場合、その文字とそれに続くすべての文字を無視し、この点まで解釈できた整数値を返します。例えば、 `1e3` は技術的には整数をエンコードしたものですが、（そして [`parseFloat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) では正しく `1000` と解釈されますが）、 `parseInt("1e3", 10)` は `1` を返します。 `e` は基数 10 の有効な数字ではないからです。 `.` も数字ではないので、返値は常に整数になります。

最初の文字が使用している基数で数字に変換できなかった場合は、 `parseInt` は `NaN` を返します。先頭のホワイトスペースは許容されます。

数値演算の目的では、`NaN` は基数がいくつであっても数値にはなりません。 [`Number.isNaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) 関数を使うと、 `parseInt` の結果が `NaN` であるかどうか確かめられます。数値演算で `NaN` が与えられると、演算結果も `NaN` になります。

巨大な数値では `e` の文字を文字列表現の中で使用しますので（例えば `6.022E23` は 6.022 × 10^23 を表します）、`parseInt` を使用して数値を切り捨てると、とても大きな数字やとても小さな数字を使用する際に予期しない結果を生み出すことがあります。 `parseInt` を {{jsxref("Math.trunc()")}} の代用として使うべきではありません。

数値を基数を指定してその文字列表現に変換するには、[`thatNumber.toString(radix)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) を用います。

`parseInt()` は数値を返すので、文字列が表す整数が[安全な範囲の外](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)の場合、精度が落ちる可能性があります。 [`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 関数は {{jsxref("BigInt")}} を返すことで、任意の長さの整数を正確に解釈することに対応しています。

## 例

### parseInt() の使用

以下の例はいずれも `15` を返します。

```js
parseInt("0xF", 16);
parseInt("F", 16);
parseInt("17", 8);
parseInt("015", 10);
parseInt("15,123", 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15 * 3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
```

以下の例はいずれも `NaN` を返します。

```js
parseInt("Hello", 8); // まったく数字ではない
parseInt("546", 2); // 2 進数では 0 または 1 以外の数字は無効
```

以下の例はいずれも `-15` を返します。

```js
parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt("-17", 8);
parseInt("-15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);
```

以下の例は `224` を返します。

```js
parseInt("0e0", 16);
```

`parseInt()` は {{jsxref("BigInt")}} の値を扱いません。 `n` の文字で解釈を停止し、それまでの文字列を通常の整数として扱うため、精度が落ちる可能性があります。

```js example-bad
parseInt("900719925474099267n");
// 900719925474099300
```

代わりに、文字列を末尾の `n` なしで [`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 関数に渡してください。

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

`parseInt` は[数値の区切り文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#数値の区切り文字)を扱うことができません。

```js example-bad
parseInt("123_456"); // 123
```

### 文字列でないものに対する parseInt() を使用

`parseInt()` は、文字列でないものを大きな基数で扱う場合に興味深い結果をもたらすことがあります。例えば、 `36` の場合です（これはすべての英数字を有効な数字にします）。

```js
parseInt(null, 36); // 1112745: "null" の文字列は 36 進数で 1112745
parseInt(undefined, 36); // 86464843759093: "undefined" の文字列は 36 進数で 86464843759093
```

一般に、`parseInt()` を文字列以外で使用すること、特に {{jsxref("Math.trunc()")}} の代用として使用するのは良くない考えです。小さな数では使えるかもしれません。

```js
parseInt(15.99, 10); // 15
parseInt(-15.1, 10); // -15
```

しかし、これはたまたま、この数値の文字列表現が基本的な小数表記 (`"15.99"`, `"-15.1"`) を使用しており、 `parseInt()` が小数点で止まっているためにうまく動作しているだけです。 1e+21 以上または 1e-7 以下の数値は、文字列表現に指数表記 (`"1.5e+22"`, `"1.51e-8"`) を使用するため、 `parseInt()` は常に最初の桁の後に来る `e` の文字または小数点で停止します。つまり、大きな数でも小さな数でも、 `parseInt()` は 1 桁の整数を返すということです。

```js example-bad
parseInt(4.7 * 1e22, 10); // 巨大な数値が 4 になる
parseInt(0.00000000000434, 10); // 極小の数値が 4 になる

parseInt(0.0000001, 10); // 1
parseInt(0.000000123, 10); // 1
parseInt(1e-7, 10); // 1
parseInt(1000000000000000000000, 10); // 1
parseInt(123000000000000000000000, 10); // 1
parseInt(1e21, 10); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("parseFloat()")}}
- [`Number()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("isNaN()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
- [`BigInt()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
