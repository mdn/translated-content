---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{JSRef}}

**`replace()`** メソッドは、`pattern` に一致する文字列の一部またはすべてを `replacement` で置き換えた新しい文字列を返します。`pattern` には文字列または正規表現 ({{jsxref("RegExp")}}) を指定することができ、 `replacement` には文字列または一致するごとに呼び出される関数を指定することができます。`pattern` が文字列の場合、最初に一致した箇所のみを置き換えます。元の文字列は変更されません。

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## 構文

```js-nolint
replace(pattern, replacement)
```

### 引数

- `pattern`
  - : 文字列または [`Symbol.replace`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) メソッドを持つオブジェクトを置くことができます。典型的な例は[正規表現](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)です。`Symbol.replace` メソッドを持たない値は文字列に変換されます。
- `replacement`
  - : 文字列または関数です。
    - 文字列の場合、`pattern` に一致する部分文字列を置き換えます。数々の特別な置換パターンに対応しています。下記の「[置換文字列としての文字列の指定](#置換文字列としての文字列の指定)」の節を参照してください。
    - 関数の場合、一致するごとに呼び出され、その返値が置き換えるテキストとして使用されます。この関数に渡される引数は下記の「[置換文字列としての関数の指定](#置換文字列としての関数の指定)」で述べられています。

### 返値

パターンの 1 つ、いくつか、またはすべての一致を指定した置換で置き換えた新しい文字列です。

## 解説

このメソッドは、それを呼び出した文字列を変化させません。返値として新しい文字列を返します。

文字列パターンは一度だけ置換されます。 グローバルな検索と置換を行うには、正規表現を `g` フラグで使用するか、代わりに [`replaceAll()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) を使用してください。

`pattern` が [`Symbol.replace`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) メソッドを持つオブジェクト（`RegExp` オブジェクトを含む）である場合、そのメソッドはターゲット文字列と `replacement` を引数として呼び出されます。その返値は `replace()` の返値となります。この場合、`replace()` の動作は完全に `@@replace` メソッドによってエンコードされます。例えば、以下の説明で「グループをキャプチャする」と書かれているものは、実際には [`RegExp.prototype[@@replace]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) によって提供される機能です。

`pattern` が空文字列の場合、文字列の始めには置換後の文字列が置かれます。

```js
"xxx".replace("", "_"); // "_xxx"
```

`g` フラグを持つ正規表現は、 `replace()` が複数回置換する唯一のケースです。正規表現プロパティ（特に [sticky](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) フラグ）と `replace()` の相互作用については、[`RegExp.prototype[@@replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) を参照してください。

### 置換文字列としての文字列の指定

置換文字列には以下の特殊な置換パターンを入れることができます。

| パターン   | 導入                                                                                        |
| --------- | ---------------------------------------------------------------------------------------------- |
| `$$`      | `"$"` を挿入します。                                                                              |
| `$&`      | 一致した部分文字列を挿入します。                                                                 |
| `` $` ``  | 一致した部分文字列の直前の文字列の部分を挿入します。                         |
| `$'`      | 一致した部分文字列の直後の文字列の部分を挿入します。          |
| `$n`      | `n` 番目（1 基点）にキャプチャされた文字列を挿入します。`n` は 100 未満の正の整数です。                     |
| `$<Name>` | `Name` はグループ名で、指定された名前のキャプチャグループを挿入します。 |

`$n` と `$<Name>` は `pattern` 引数が {{jsxref("RegExp")}} オブジェクトである場合にのみ利用できます。`pattern` が文字列であった場合、または対応するキャプチャグループが正規表現に存在しなかった場合、パターンはリテラルとして置き換えられます。グループが存在しているものの、一致しなかった場合（論理和の一部であった場合など）は、空文字列に置き換えられます。

```js
"foo".replace(/(f)/, "$2");
// "$2oo" となる。正規表現に 2 番目のグループがないため。

"foo".replace("f", "$1");
// "$1oo" となる。パターンが文字列であり、グループを持たないため。

"foo".replace(/(f)|(g)/, "$2");
// "oo" となる。2 番目のグループが存在するものの、一致するものがないため。
```

### 置換文字列としての関数の指定

第 2 引数として関数を指定することができます。この場合、関数は照合が行われた後に実行されます。関数呼び出しの結果（返値）が、置換文字列として使われます

> **メモ:** 上記の特殊な置き換えパターンは、置き換え関数から返される文字列には適用されません。

関数の形式は次の通りです。

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

関数に与えられる引数は次の通りです。

- `match`
  - : 一致した部分文字列（上記の `$&` に対応）です。
- `p1, p2, …, pN`
  - : キャプチャグループ（名前付きキャプチャグループを含む）で見つかった `n` 番目の文字列で、`replace()` の第一引数が {{jsxref("RegExp")}} オブジェクトだった場合に提供されるものです。（上記の `$1`, `$2`, などに対応します。）例えば `pattern` が `/(\a+)(\b+)/` であった場合、`p1` は `\a+` に対する一致、`p2` は `\b+` に対する一致となります。そのグループが論理和の一部である場合（`"abc".replace(/(a)|(b)/, replacer)` など）、一致しない選択肢は `undefined` なります。
- `offset`
  - : 一致した部分文字列の、分析中の文字列全体の中でのオフセットです。例えば、文字列全体が `'abcd'` で、一致した部分文字列が `'bc'` ならば、この引数は 1 となります。
- `string`
  - : 分析中の文字列全体です。
- `groups`
  - : 名前付きキャプチャグループに対応しているブラウザーのバージョンでは、使用されるグループ名をキーとし、一致した部分を値とするオブジェクトになります（一致しない場合は `undefined`）。

（引数の正確な個数は、第一引数が {{jsxref("RegExp")}} オブジェクトかどうか、そうならばさらに括弧でキャプチャされるサブ一致がいくつ指定されているかによります。）

以下の例は `newString` に `'abc - 12345 - #$*%'` をセットします。

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

この関数は、最初の引数の正規表現がグローバルである場合、それぞれ完全に一致するものが置き換えられるごとに複数回呼び出されます。

## 例

### replace() で正規表現を利用する

以下の例では、 `replace()` メソッドで正規表現を利用しています。

```js
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

これは `'Twas the night before Christmas...'` と出力します。

> **メモ:** 正規表現についてのその他の例は[このガイド](/ja/docs/Web/JavaScript/Guide/Regular_expressions)を参照してください。

### 大文字小文字を区別しないフラグとグローバルフラグの使用

グローバルな置換は、正規表現でのみ行うことができます。次の例では、正規表現に[グローバルフラグと大文字小文字の区別をしないフラグ](/ja/docs/Web/JavaScript/Guide/Regular_expressions#フラグを用いた高度な検索)が含まれているため、 `replace()` は文字列中の `'apples'` の各出現箇所を `'oranges'` に置き換えることができます。

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

この出力は 'oranges are round, and oranges are juicy' となります。

### 文字列内の単語の交換

次のスクリプトでは、文字列内の単語を交換します。テキストを置き換えるために、このスクリプトは[キャプチャリンググループ](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)と置換パターン `$1` および `$2` を使用しています。

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr); // Cruz, Maria
```

この出力は `'Cruz, Maria'` となります。

### 一致した文字を修正するインライン関数の使用

次の例では、文字列内に出現する大文字のすべては小文字に変換され、ハイフンが一致した位置の直前に挿入されます。ここで重要なことは、追加の操作は、一致したアイテムが置換されて戻される前に必要とされるということです。

置換する関数は一致した断片をその関数の引数として適用します。そして、その引数を大文字小文字変形し、返値の直前にハイフンを連結します。

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

`styleHyphenFormat('borderTop')`を入力すると `'border-top'` を返します。

最終的な置換が行われる前に、一致の*結果*をさらに変換したいので、関数を使用する必要があります。これにより、[`toLowerCase()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) メソッドの前に一致の評価が行われます。関数を使わず一致を使ってこれを行おうとした場合、 {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} は何の効果もないでしょう。

```js example-bad
// 動作しない
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

これは、 `'$&'.toLowerCase()` は、まずその文字がパターンとして使用される前に（`'$&'` という結果である）文字列リテラルとして評価されるだろうからです。

### 華氏温度を同等の摂氏温度と置き換える

以下の例は、ある華氏温度をそれと同等の摂氏温度と置き換えます。その華氏温度は `"F"` で終わる数でなければなりません。この関数は `"C"` で終わる摂氏を返します。例えば、入力される数が `"212F"` である場合、その関数は `"100C"` を返します。入力される数が `"0F"` であった場合、その関数は `"-17.77777777777778C"` を返します。

その正規表現 `test` は、任意の数が `F` で終わっているかチェックします。華氏温度の数は、関数の 第二引数 `p1` を通して、その関数にアクセスできます。その関数は文字列内で渡された華氏温度をベースとした摂氏の数を `f2c()` にセットします。それから、`f2c()` は、摂氏の数を返します。この関数は Perl の `s///e` フラグと似ています。

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return `${((p1 - 32) * 5) / 9}C`;
  }
  const s = String(x);
  const test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### 汎用リプレイサーの作成

一致する文字列にオフセットのデータを追加するリプレイサーを作成したいとします。 リプレイサー関数はすでに `offset` 引数を受け取っているので、正規表現が静的に分かっていれば簡単です。

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

しかし、このリプレイサーを任意の正規表現パターンで動作させたい場合、一般化するのは難しいでしょう。 このリプレイサーは可変的です。引数の数は存在するキャプチャグループの数に依存します。[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)を使用することができますが、`offset` や `string` なども配列に収集してしまいます。`groups` が正規表現の同一性によって渡されたり渡されなかったりするため、`offset` に対応する引数を知る処理を一般化することは難しいでしょう。

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

この例では `args.at(-2)` が `offset` ではなく `string` になってしまうため、上記の `addOffset` の例は正規表現に名前付きグループが格納されている場合にはうまく動作しません。

代わりに、`groups` はオブジェクトですが、`string` は文字列なので、型に基づいて最後のいくつかの引数を抽出する必要があります。

```js
function addOffset(match, ...args) {
  const hasNamedGroups = typeof args.at(-1) === "object";
  const offset = hasNamedGroups ? args.at(-3) : args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (1) d"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.replace` のポリフィル (`core-js`) （`Symbol.replace` への対応など、現代の修正や実装に対応したもの）](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replaceAll", "String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
- [`Symbol.replace`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[@@replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
