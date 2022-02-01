---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
tags:
  - JavaScript
  - メソッド
  - プロトタイプ
  - リファレンス
  - 正規表現
  - String
browser-compat: javascript.builtins.String.match
translation_of: Web/JavaScript/Reference/Global_Objects/String/match
---
{{JSRef}}

**`match()`** メソッドは、[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)に対する*文字列*の照合結果を受け取ります。

{{EmbedInteractiveExample("pages/js/string-match.html", "shorter")}}

## 構文

```js
match(regexp)
```

### 引数

- `regexp`

  - : 正規表現オブジェクトです。

    `regexp` が `RegExp` ではないオブジェクトであった場合、暗黙的に {{jsxref("RegExp")}} への変換が `new RegExp(regexp)` を使用して行われます。

    一切引数を与えずに `match()` メソッドを使った場合、空の文字列 1 つを持つ {{jsxref("Array")}}、 `[""]` が得られます。

### 返値

{{jsxref("Array")}} を返します。これはグローバル (`g`) フラグの有無によって内容が変わります。一致するものが見つからなかった場合は {{jsxref("null")}} を返します。

- `g` フラグがあった場合は、正規表現全体に一致したすべての結果を返しますが、キャプチャグループは返しません。
- `g` フラグがなかった場合、最初に完全に一致したものと、それに関するキャプチャグループを返します。この場合、返される要素には下記の追加のプロパティが存在します。

#### 追加のプロパティ

上記の説明にある通り、結果は追加のプロパティを含むことがあります。

- `groups`
  - : 名前付きキャプチャグループのオブジェクトで、キーは名前、値はキャプチャグループ、または名前付きキャプチャグループが定義されていない場合は {{jsxref("undefined")}} です。詳細は[グループと範囲](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)を参照してください。
- `index`
  - : 結果が見つかった検索のインデックスです。
- `input`
  - : 検索された文字列のコピーです。

## 解説

正規表現に `g` フラグが付いていない場合、 `str.match()` は {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} と同じ結果を返します。

### その他のメソッド

- ある文字列が正規表現 {{jsxref("RegExp")}} に一致するかどうかを知る必要がある場合は、 {{jsxref("RegExp.prototype.test()", "RegExp.test()")}} を使用してください。
- 一番最初に一致したものだけが欲しい場合、代わりに {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} を使ったほうが良いかもしれません。
- キャプチャグループを取得する場合でグローバルフラグが設定されていた場合は、 {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} を使用してください。

## 例

### match() の使用

以下の例において、 `match()` は '`Chapter`' とそれに続く 1 桁以上の数字、それに続く 0 回以上の小数点と数字を見つけるために使われています。

正規表現が `i` フラグを含んでいるので、大文字と小文字の違いは無視されます。

```js
const str = 'For more information, see Chapter 3.4.5.1';
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' は一致するもの全体です。
// 'Chapter 3.4.5.1' は '(chapter \d+(\.\d)*)' でキャプチャされたものです。
// '.1' は '(\.\d)' でキャプチャされた最後の値です。
// 'index' プロパティ (22) はゼロから始まる一致した位置です。
// 'input' プロパティは解釈された元の文字列です。
```

### match() での g と i フラグの使用

以下の例は、 g と i フラグを `match()` で使用した実例です。 `A` から `E` までと、 `a` から `e` までのすべての文字が返され、それぞれが配列の個々の要素に入ります。

```js
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

> **Note:** {{jsxref("String.prototype.matchAll()")}} と[フラグを用いた高度な検索](/ja/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags)も参照してください。


### 名前付きキャプチャグループの使用

名前付きキャプチャグループに対応しているブラウザーでは、次のコードは "`fox`" または "`cat`" を "`animal`" という名前のグループに入れます。

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
```

### 引数なしの match() の使用

```js
const str = "Nothing will come of nothing.";

str.match();   // returns [""]
```

### RegExp ではないオブジェクトを引数にする

引数 `regexp` が文字列または数値である場合、暗黙に `new RegExp(regexp)` を使用して {{jsxref("RegExp")}} に変換されます。

正の符号がついた正の数であった場合、 `RegExp()` は正の符号を無視します。

```js
const str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
str1.match("number");   // "number" は文字列です。 ["number"] を返します。
str1.match(NaN);        // NaN の型は数値です。 ["NaN"] を返します。
str1.match(Infinity);   // Infinity の方は数値です。 ["Infinity"] を返します。
str1.match(+Infinity);  // ["Infinity"] を返します
str1.match(-Infinity);  // ["-Infinity"] を返します
str2.match(65);         // ["65"] を返します
str2.match(+65);        // 正の符号が付いた数値です。 ["65"] を返します
str3.match(null);       // ["null"] を返します。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
