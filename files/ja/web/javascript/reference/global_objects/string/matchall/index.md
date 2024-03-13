---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{JSRef}}

**`matchAll()`** は[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)に一致するすべての文字列を、[キャプチャグループ](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)を含み、イテレーターで返すメソッドです。

{{EmbedInteractiveExample("pages/js/string-matchall.html")}}

## 構文

```js-nolint
matchAll(regexp)
```

### 引数

- `regexp`

  - : 正規表現オブジェクト、または [`Symbol.matchAll`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) を持つ任意のオブジェクトです。

    `regexp` が `RegExp` 以外のオブジェクトであった場合、暗黙的に {{jsxref("RegExp")}} への変換が `new RegExp(regexp, 'g')` を使用して行われます。

    `regexp` が[正規表現である](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes)場合、グローバルフラグ (`g`) が設定されます。そうでなければ {{jsxref("TypeError")}} が発生します。

### 返値

一致したものの[反復可能なイテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)（再起動不可能なもの）です。それぞれの一致する配列は {{jsxref("RegExp.prototype.exec()")}} の返値と同じ形です。

### 例外

- {{jsxref("TypeError")}}
  - : `regexp` が[正規表現である](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes)場合で、グローバルフラグ (`g`) が設定されていない場合（[`flags`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) プロパティに `"g"` が含まれていない場合）。

## 解説

`String.prototype.matchAll` の実装自体は、正規表現がグローバルであるという余分な入力検証を除けば）非常にシンプルで、引数の文字列を最初の引数として `Symbol.matchAll` メソッドを呼び出すだけです。実際の実装は [`RegExp.prototype[@@matchAll]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll) から来ています。

## 例

### Regexp.prototype.exec() と matchAll()

`matchAll()` が JavaScript に追加される前は、 [regexp.exec](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)（および `/g` フラグ付きの正規表現）をループの中で呼び出すことですべての一致結果を取得することができました。

```js
const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`,
  );
}
// Found football start=6 end=14.
// Found foosball start=16 end=24.
```

`matchAll()` が使えるようになったことで、 {{jsxref("Statements/while", "while")}} によるループと、`g` 付きの `exec` を避けることができます。代わりにイテレーターが取得できるので、{{jsxref("Statements/for...of", "for...of")}}、[配列スプレッド](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)、{{jsxref("Array.from()")}} 構造と効率よく組み合わせることができます。

```js
const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${
      match.index + match[0].length
    }.`,
  );
}
// Found football start=6 end=14.
// Found foosball start=16 end=24.

// 一致したイテレーターは for...of の反復処理の後で利用不可になる
// 新しいイテレーターを作成するために matchAll を再度呼び出す
Array.from(str.matchAll(regexp), (m) => m[0]);
// [ "football", "foosball" ]
```

`matchAll` は、グローバル (`g`) フラグがない場合は例外が発生します。

```js
const regexp = /[a-c]/;
const str = "abc";
str.matchAll(regexp);
// TypeError
```

`matchAll` では内部的に `regexp` の複製を作成します。そのため {{jsxref("Global_Objects/RegExp/exec", "regexp.exec()")}} とは違って文字列をスキャンした際に `lastIndex` が変わることはありません。

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

しかし、これは [`regexp.exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) をループ内で使うのとは異なり、正規表現を進めたり戻したりするために `lastIndex` を変更することができないことを意味します。

### キャプチャリンググループへのより良いアクセス（String.prototype.match() との比較）

`matchAll` はキャプチャグループへのよりよいアクセスを実現します。

{{jsxref("Global_Objects/String/match", "match()")}} では、グローバル `g` フラグを使用するとキャプチャグループが無視されてしまいます。

```js
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

str.match(regexp); // ['test1', 'test2']
```

`matchAll` を使えば簡単にキャプチャグループにアクセスできます。

```js
const array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

### matchAll() を RegExp ではない @@matchAll を実装しているオブジェクトで使用

オブジェクトに `Symbol.matchAll` メソッドがあれば、それをカスタムマッチャーとして使うことができます。`Symbol.matchAll` の返値は `matchAll()` の返値となる。

```js
const str = "Hmm, this is interesting.";

str.matchAll({
  [Symbol.matchAll](str) {
    return [["Yes, it's interesting."]];
  },
}); // [["Yes, it's interesting."]] を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.matchAll` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.match()")}}
- [JavaScript での正規表現の使用](/ja/docs/Web/JavaScript/Guide/Regular_expressions)
- [キャプチャグループ](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`RegExp.prototype[@@matchAll]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)
