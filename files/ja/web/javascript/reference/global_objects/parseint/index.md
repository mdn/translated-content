---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
tags:
  - JavaScript
  - メソッド
  - リファレンス
  - parseInt
browser-compat: javascript.builtins.parseInt
translation_of: Web/JavaScript/Reference/Global_Objects/parseInt
---
{{jsSidebar("Objects")}}

**`parseInt()`** 関数は、文字列の引数を解析し、指定された[基数](https://ja.wikipedia.org/wiki/%E5%9F%BA%E6%95%B0) (数学的記数法の底) の整数値を返します。

{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}

## 構文

```js
parseInt(string)
parseInt(string, radix)
```

### 引数

- `string`
  - : 解析する値。この引数が文字列でなかった場合は、抽象操作 [`ToString`](https://tc39.es/ecma262/#sec-tostring) を用いて文字列に変換されます。この引数では先頭の{{glossary("whitespace", "ホワイトスペース")}}は無視されます。
- `radix` {{optional_inline}}

  - : `2` から `36` までの整数で、`string` の*基数* (数学的記数法の底) を表します。既定値が `10` では**ない**ので注意してください。基数の値が `Number` 型でなかった場合は、 `Number` に型変換されます。

    > **Warning:** [下記の解説](#description)では、`radix` が提供されなかった場合に何が起こるかをもっと詳細に説明しています。

### 返値

指定された `string` を解析した整数値です。

また、下記の場合は {{jsxref("NaN")}} が返されます。

- `radix` が `2` よりも小さいか `36` よりも大きい、または
- 最初のホワイトスペース以外の文字が数値に変換できない。

## 解説

`parseInt` 関数は第 1 引数を文字列に変換し、解析したうえで、整数または `NaN` を返します。

`NaN` でない場合は、返値は第 1 引数を指定された `radix` で数値として解釈した整数値になります。(例えば、`radix` が `10` であれば 10 進数からの変換で、`8` であれば 8 進数からの変換で、`16` であれば 16 進数からの変換、などです。)

`10` 以上の基数については、`9` より大きい数字はアルファベットで示されます。たとえば、 16 進数 (基数 `16`) では `A` から `F` が用いられます。

`parseInt` 関数は指定された `radix` における数字ではない文字に出会うと、それ以降の文字を無視し、その時点で解析された整数値を返します。`parseInt` は数値を整数に切り捨てます。前後に空白があっても構いません。

数値によっては `e` の文字を文字列表現の中で使用しますので (例えば **`6.022E23`** は 6.022 × 10^23 を表します)、`parseInt` を使用して数値を切り捨てると、とても大きな数字やとても小さな数字を使用する際に予期しない結果を生み出すことがあります。`parseInt` を {{jsxref("Math.floor()")}} の代用として使うべきではありません。

`parseInt` は 2 つの符号を正確に理解します。`+` は正の符号で、`-` は負の符号です (ECMAScript 1 より)。これは解析の最初の段階で、ホワイトスペースを除去した後に行われます。符号が見つからなかった場合は、アルゴリズムは次の段階に移行します。そうでなければ、符号を取り除いて残りの文字列の数値の解析を実行します。

引数 radix に渡された値は (必要に応じて) Number に型変換され、それから値が 0、`NaN`、`Infinity` のいずれかの場合 (undefined は `NaN` に型変換されます)、JavaScript は以下のように仮定します。

1.  入力した `string` が "`0x`" または "`0X`" (ゼロに続いて小文字または大文字の X) で始まった場合は、`radix` は `16` と仮定され、残りの文字列が 16 進数として解釈されます。
2.  入力した `string` がその他の値で始まるときは、基数は `10` (10 進数) となります。

それ以外の場合、(必要に応じて型変換した) 基数の値が \[2, 36] の範囲から外れた場合は、`parseInt` は `NaN` を返します。

最初の文字が使用している基数で数字に変換できなかった場合は、`parseInt` は `NaN` を返します。

数値演算の目的では、`NaN` は基数がいくつであっても数値にはなりません。{{jsxref("isNaN")}} 関数を使うと、`parseInt` の結果が `NaN` であるかどうか確かめられます。数値演算で `NaN` が与えられると、演算結果も `NaN` になります。

数値を特定の基数で文字列リテラルに変換したいときは、`thatNumber.toString(radix)` を使用してください。

> **Warning:** `parseInt` は {{jsxref("BigInt")}} を {{jsxref("Number")}} へ変換するので、その処理中に精度が落ちます。これは後に付く数値ではない値が、"`n`" を含めて、切り落とされるからです。

### 基数を指定しない 8 進数の解釈

以下の情報は 2021 年時点での最新の実装には当てはまらないことに注意してください。

ECMAScript 3 で非推奨となったものの、 ECMAScript 3 の多くの実装が `0` で始まる数字の文字列を 8 進数として解釈していました。以下の式は 8 進数とされることもあれば、 10 進数で扱われることもありました。

```js
parseInt('0e0')  // 0
parseInt('08')   // '8' は 8進数では用いられないため、0。
```

ECMAScript 5 仕様書において、 `parseInt` 関数は、`0` の文字で始まる文字列を 8 進数として扱うことを実装に認めなくなりました。 2021 年時点では、多くの実装がこの動作を採用しています。

```js
parseInt('0e0')  // 0
parseInt('08')   // 8
```

### より厳密な解析関数

場合によっては、値の整数への解析により厳密な方法を採るのも有効でしょう。

正規表現が役立ちます。

```js
function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value)
  } else {
    return NaN
  }
}

console.log(filterInt('421'))                // 421
console.log(filterInt('-421'))               // -421
console.log(filterInt('+421'))               // 421
console.log(filterInt('Infinity'))           // Infinity
console.log(filterInt('421e+0'))             // NaN
console.log(filterInt('421hop'))             // NaN
console.log(filterInt('hop1.61803398875'))   // NaN
console.log(filterInt('1.61803398875'))      // NaN
```

## 例

### parseInt の使用

以下の例はいずれも `15` を返します。

```js
parseInt('0xF', 16)
parseInt('F', 16)
parseInt('17', 8)
parseInt(021, 8)
parseInt('015', 10)    // ただし `parseInt(015, 10)` は 13 を返す
parseInt(15.99, 10)
parseInt('15,123', 10)
parseInt('FXX123', 16)
parseInt('1111', 2)
parseInt('15 * 3', 10)
parseInt('15e2', 10)
parseInt('15px', 10)
parseInt('12', 13)
```

以下の例はいずれも `NaN` を返します。

```js
parseInt('Hello', 8)  // まったく数字ではない
parseInt('546', 2)    // 2 進数では 0 または 1 以外の数字は無効
```

以下の例はいずれも `-15` を返します。

```js
parseInt('-F', 16)
parseInt('-0F', 16)
parseInt('-0XF', 16)
parseInt(-15.1, 10)
parseInt('-17', 8)
parseInt('-15', 10)
parseInt('-1111', 2)
parseInt('-15e1', 10)
parseInt('-12', 13)
```

以下の例はいずれも `4` を返します。

```js
parseInt(4.7, 10)
parseInt(4.7 * 1e22, 10)        // 非常に大きな数によって 4 になる
parseInt(0.00000000000434, 10)  // 非常に小さな数によって 4 になる
```

以下の例は 1e+21 以上か 1e-7 以下の場合は `1` を返します。(基数 10 を使用している場合)。

```js
parseInt(0.0000001,10);
parseInt(0.000000123,10);
parseInt(1e-7,10);
parseInt(1000000000000000000000,10);
parseInt(123000000000000000000000,10);
parseInt(1e+21,10);
```

以下の例は `224` を返します。

```js
parseInt('0e0', 16)
```

{{jsxref("BigInt")}} の値は精度が落ちます。

```js
parseInt('900719925474099267n')
// 900719925474099300
```

`parseInt` は[数字の区切り文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators)は機能しません。

```js
parseInt('123_456')
// 123
```

基数は `Number` に型変換されます。

```js
const obj = {
  valueOf() {return 8}
};
parseInt('11', obj); // 9

obj.valueOf = function() {return 1};
parseInt('11', obj); // NaN

obj.valueOf = function() {return Infinity};
parseInt('11', obj); // 11
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
- {{jsxref("Number.toString()")}}
- {{jsxref("Object.valueOf")}}
