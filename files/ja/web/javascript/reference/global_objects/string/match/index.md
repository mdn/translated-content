---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
l10n:
  sourceCommit: 8a6bfb2736b78904e81c94b82f86278031e65c80
---

{{JSRef}}

**`match()`** メソッドは、[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)に対する文字列の照合結果を受け取ります。

{{EmbedInteractiveExample("pages/js/string-match.html", "shorter")}}

## 構文

```js-nolint
match(regexp)
```

### 引数

- `regexp`

  - : 正規表現オブジェクト、または [`Symbol.match`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) を持つ任意のオブジェクトです。

    `regexp` が `RegExp` 以外のオブジェクトであった場合、暗黙的に {{jsxref("RegExp")}} への変換が `new RegExp(regexp)` を使用して行われます。

    一切引数を与えずに `match()` メソッドを使った場合、空文字列 1 つを持つ {{jsxref("Array")}}、`[""]` が得られます。これは `match(/(?:)/)` と同じになるからです。

### 返値

{{jsxref("Array")}} を返します。これはグローバル (`g`) フラグの有無によって内容が変わります。一致するものが見つからなかった場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を返します。

- `g` フラグがあった場合は、正規表現全体に一致したすべての結果を返しますが、キャプチャグループは返しません。
- `g` フラグがなかった場合、最初に完全に一致したものと、それに関するキャプチャグループを返します。この場合、`match()` は {{jsxref("RegExp.prototype.exec()")}} と同じ結果になります（追加のプロパティ付きの配列）。

## 解説

`String.prototype.match` 自体の実装はとてもシンプルです。引数の文字列を最初の引数として `Symbol.match` メソッドを呼び出すだけです。実際の実装は [`RegExp.prototype[@@match]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match) から来ています。

- ある文字列が正規表現 {{jsxref("RegExp")}} に一致するかどうかを知る必要がある場合は、 {{jsxref("RegExp.prototype.test()")}} を使用してください。
- 一番最初に一致したものだけが欲しい場合は、代わりに {{jsxref("RegExp.prototype.exec()")}} を使ったほうが良いかもしれません。
- キャプチャグループを取得する場合でグローバルフラグを設定する場合は、 {{jsxref("RegExp.prototype.exec()")}} を使用してください。

正規表現が渡されたときの `match()` の意味についての詳しい情報は、[`RegExp.prototype[@@match]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match) を参照してください。

## 例

### match() の使用

以下の例において、 `match()` は `"Chapter"` とそれに続く 1 桁以上の数字、それに続く 0 回以上の小数点と数字を見つけるために使われています。

正規表現が `i` フラグを含んでいるので、大文字と小文字の違いは無視されます。

```js
const str = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);
// [
//   'see Chapter 3.4.5.1',
//   'Chapter 3.4.5.1',
//   '.1',
//   index: 22,
//   input: 'For more information, see Chapter 3.4.5.1',
//   groups: undefined
// ]
```

上の照合結果では、`'see Chapter 3.4.5.1'` が一致する文字列全体です。 `'Chapter 3.4.5.1'` は `(chapter \d+(\.\d)*)` によって捕捉されました。 `'.1'` は `(\.\d)` によって捕捉された最後の値です。 `index` プロパティ (`22`) は一致する文字列全体の 0 基点のインデックスです。 `input` プロパティは解釈できた元の文字列です。

### match() での global と ignoreCase フラグの使用

以下の例は、 g と i フラグを `match()` で使用した実例です。 `A` から `E` までと、 `a` から `e` までのすべての文字が返され、それぞれが配列の個々の要素に入ります。

```js
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches = str.match(regexp);

console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

> **メモ:** {{jsxref("String.prototype.matchAll()")}} と[フラグを用いた高度な検索](/ja/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)も参照してください。

### 名前付きキャプチャグループの使用

名前付きキャプチャグループに対応しているブラウザーでは、次のコードは `"fox"` または `"cat"` を `animal` という名前のグループに入れます。

```js
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
```

### 引数なしの match() の使用

```js
const str = "Nothing will come of nothing.";

str.match(); // returns [""]
```

### RegExp ではないオブジェクトを引数にする

オブジェクトに `Symbol.match` メソッドがある場合、カスタムマッチャーとして使用することができます。 `Symbol.match` の返値が `match()` の返値になります。

```js
const str = "Hmm, this is interesting.";

str.match({
  [Symbol.match](str) {
    return ["Yes, it's interesting."];
  },
}); // returns ["Yes, it's interesting."]
```

### RegExp 以外を引数として取る

正規表現 `regexp` 引数が文字列または数値の場合、{{jsxref("RegExp")}} に `new RegExp(regexp)` を使用して暗黙的に変換されます。

```js
const str1 =
  "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.";
const str2 =
  "My grandfather is 65 years old and My grandmother is 63 years old.";
const str3 = "The contract was declared null and void.";
str1.match("number"); // "number" は文字列です。 ["number"] を返します。
str1.match(NaN); // NaN の型は数値です。 ["NaN"] を返します。
str1.match(Infinity); // Infinity の方は数値です。 ["Infinity"] を返します。
str1.match(+Infinity); // ["Infinity"] を返します
str1.match(-Infinity); // ["-Infinity"] を返します
str2.match(65); // ["65"] を返します
str2.match(+65); // 正の符号が付いた数値です。 ["65"] を返します
str3.match(null); // ["null"] を返します。
```

特殊文字が適切にエスケープされていないと、予期しない結果になることがあります。

```js
console.log("123".match("1.3")); // [ "123" ]
```

正規表現中の `.` はどのような文字にも一致するので、これは一致します。 ドット文字にのみ一致するようにするには、入力文字列をエスケープする必要があります。

```js
console.log("123".match("1\\.3")); // null
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.match` のポリフィル (`core-js`) （`Symbol.match` 対応のような現代の動作の実装付き）](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
