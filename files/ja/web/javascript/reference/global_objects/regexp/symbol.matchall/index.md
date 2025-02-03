---
title: RegExp.prototype[Symbol.matchAll]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`[Symbol.match]()`** は {{jsxref("RegExp")}} インスタンスのメソッドで、 [`String.prototype.matchAll`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) がどのように動作するのかを指定します。

{{InteractiveExample("taller")}}

```js interactive-example
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    }
    return Array.from(result);
  }
}

const re = new MyRegExp('-[0-9]+', 'g');
console.log('2016-01-02|2019-03-07'.matchAll(re));
// Expected output: Array [Array ["-01"], Array ["-02"], Array ["-03"], Array ["-07"]]

```

## 構文

```js-nolint
regexp[Symbol.matchAll](str)
```

### 引数

- `str`
  - : 文字列 ({{jsxref("String")}}) で、照合の対象となるものです。

### 返値

一致したものを表す[反復可能なイテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)（再起動不可）です。それぞれの一致部分は {{jsxref("RegExp.prototype.exec()")}} の返値と同じ形の配列です。

## 解説

このメソッドは内部的に {{jsxref("String.prototype.matchAll()")}} を呼び出します。例えば、以下の 2 つの例は同じ結果を返します。

```js
"abc".matchAll(/a/g);

/a/g[Symbol.matchAll]("abc");
```

[`Symbol.split`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) と同様、 `[Symbol.matchAll]()` は [`Symbol.species`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) を使用して新しい正規表現を作成するところから始め、何があっても元の正規表現を変更することを避けます。 [`lastIndex`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) は元の正規表現の値から始まります。

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

入力がグローバル正規表現であるかどうかの検証は [`String.prototype.matchAll()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) で行われます。`[Symbol.matchAll]()` は入力を検証しません。正規表現がグローバルでない場合、返されたイテレーターは [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) の結果を一度返し、その後 `undefined` を返します。正規表現がグローバルである場合、返されたイテレーターの `next()` メソッドが呼び出されるたびに、正規表現の [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) を呼び出し、結果を返します。

正規表現が粘着的でグローバルな場合、粘着的な照合を行います。つまり `lastIndex` 以降は照合しません。

```js
console.log(Array.from("ab-c".matchAll(/[abc]/gy)));
// [ [ "a" ], [ "b" ] ]
```

現在の照合が空文字列の場合、[`lastIndex`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) が進みます。正規表現に [`u`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) フラグがある場合、Unicode コードポイント 1 つ分進みます。

```js
console.log(Array.from("😄".matchAll(/(?:)/g)));
// [ [ "" ], [ "" ], [ "" ] ]

console.log(Array.from("😄".matchAll(/(?:)/gu)));
// [ [ "" ], [ "" ] ]
```

このメソッドは {{jsxref("RegExp")}} サブクラスで `matchAll()` の動作をカスタマイズするために存在します。

## 例

### 直接呼び出し

このメソッドは {{jsxref("String.prototype.matchAll()")}}, とほぼ同様に使用することができますが、 `this` の値と引数の順序が違う点が異なります。

```js
const re = /[0-9]+/g;
const str = "2016-01-02";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// [ "2016", "01", "02" ]
```

### サブクラスでの `[Symbol.matchAll]()` の使用

{{jsxref("RegExp")}} のサブクラスは `[Symbol.matchAll]()` メソッドを上書きして既定の動作を変更することができます。

例えば、 {{jsxref("Array")}} を[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)の代わりに返すことができます。

```js
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    return result ? Array.from(result) : null;
  }
}

const re = new MyRegExp("([0-9]+)-([0-9]+)-([0-9]+)", "g");
const str = "2016-01-02|2019-03-07";
const result = str.matchAll(re);

console.log(result[0]);
// [ "2016-01-02", "2016", "01", "02" ]

console.log(result[1]);
// [ "2019-03-07", "2019", "03", "07" ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`RegExp.prototype[Symbol.matchAll]` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.matchAll()")}}
- [`RegExp.prototype[Symbol.match]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("Symbol.matchAll")}}
