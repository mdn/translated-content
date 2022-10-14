---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
---

{{JSRef}}

**`matchAll()`** は[キャプチャグループ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)を含む *[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)* に一致するすべての*文字列*をイテレーターで返すメソッドです。

{{EmbedInteractiveExample("pages/js/string-matchall.html")}}

## 構文

```
str.matchAll(regexp)
```

### Parameters

- `regexp`

  - : 正規表現オブジェクトです。

    `RegExp` でないオブジェクト `obj` が渡された場合は {{jsxref("RegExp")}} オブジェクトに `new RegExp(obj)` を使用して暗黙的に変換されます。

    `RegExp` オブジェクトには `/g` フラグが必須であり、ない場合は `TypeError` が発生します。

### 返値

[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators) (再起動不可能なもの)。

## 例

### Regexp.exec() と matchAll()

`matchAll` が JavaScript に追加される前は、 [regexp.exec](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (および `/g` フラグ付きの正規表現) をループの中で呼び出すことですべての一致結果を取得することができました。

```js
const regexp = RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`);
  // expected output: "Found football start=6 end=14."
  // expected output: "Found foosball start=16 end=24."
}
```

`matchAll` が使えるようになったことで、 {{jsxref("Statements/while", "while")}} によるループと、 `g` 付きの `exec` を避けることができます。

また代わりに `matchAll` を使うことで、 {{jsxref("Statements/for...of", "for...of")}}、 {{jsxref("Operators/Spread_syntax", "配列スプレッド", "", 1)}}、 {{jsxref("Array.from()")}} 構造と効率よく組み合わせることができます。

```js
const regexp = RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
}
// expected output: "Found football start=6 end=14."
// expected output: "Found foosball start=16 end=24."

// matches iterator is exhausted after the for..of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), m => m[0]);
// Array [ "football", "foosball" ]
```

`matchAll` は、グローバル (`g`) フラグがない場合は例外が発生します。

```js
const regexp = RegExp('[a-c]','');
const str = 'abc';
str.matchAll(regexp);
// TypeError
```

`matchAll` では内部的に {{jsxref("RegExp")}} オブジェクトをクローンします。そのため {{jsxref("Global_Objects/RegExp/exec", "regexp.exec()")}} とは違って文字列をスキャンした際に `lastIndex` が変わることはありません。

```js
const regexp = RegExp('[a-c]','g');
regexp.lastIndex = 1;
const str = 'abc';
Array.from(str.matchAll(regexp), m => `${regexp.lastIndex} ${m[0]}`);
// Array [ "1 b", "1 c" ]
```

### キャプチャリンググループへのより良いアクセス（String.prototype.match()との比較）

`matchAll` はキャプチャグループへのよりよいアクセスを実現します。

{{jsxref("Global_Objects/String/match", "match()")}} では、グローバル `/g` フラグを使用するとキャプチャグループが無視されてしまいます。

```js
let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';

str.match(regexp);
// Array ['test1', 'test2']
```

`matchAll` を使えば簡単にキャプチャグループにアクセスできます。

```js
let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.matchall', 'String.prototype.matchAll')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.matchAll")}}

## 関連情報

- {{jsxref("String.prototype.match()")}}
- [JavaScript での正規表現の使用](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Capturing groups](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
