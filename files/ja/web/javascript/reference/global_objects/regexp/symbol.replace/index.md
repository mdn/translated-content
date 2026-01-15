---
title: RegExp.prototype[Symbol.replace]()
short-title: "[Symbol.replace]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`[Symbol.replace]()`** は {{jsxref("RegExp")}} インスタンスのメソッドで、正規表現がパターンとして渡されたときに [`String.prototype.replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace) および[`String.prototype.replaceAll()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) がどのように動作するかを指定します。

{{InteractiveExample("JavaScript デモ: RegExp.prototype[Symbol.replace]()")}}

<!-- cSpell:ignore tball -->

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.replace](str) {
    return RegExp.prototype[Symbol.replace].call(this, str, "#!@?");
  }
}

console.log("football".replace(new RegExp1("foo")));
// 予想される結果: "#!@?tball"
```

## 構文

```js-nolint
regexp[Symbol.replace](str, replacement)
```

### 引数

- `str`
  - : 置換の対象となる文字列 ({{jsxref("String")}}) です。
- `replacement`
  - : 文字列または関数を取ることができます。
    - 文字列の場合は、現在の正規表現で一致した部分文字列をそれで置き換えます。特殊な置換パターンの数値に対応しています。`String.prototype.replace` ページの[置換文字列としての文字列の指定](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace#置換文字列としての文字列の指定)の節を参照してください。
    - 関数の場合は、一致するごとに呼び出され、返値が置換文字列として使用されます。この関数に提供される引数については、`String.prototype.replace` ページの[置換文字列としての関数の指定](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace#置換文字列としての関数の指定)で記述されています。

### 返値

一部またはすべてのパターンの一致箇所が置換内容によって置き換えられた新しい文字列です。

## 解説

このメソッドは {{jsxref("String.prototype.replace()")}} の中で、 `pattern` 引数が {{jsxref("RegExp")}} オブジェクトであった場合に内部的に呼び出されます。たとえば、次の 2 つの例は同じ結果を返します。

```js
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

正規表現がグローバル（`g` フラグ付き）である場合、正規表現の [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) メソッドは `exec()` が `null` を返すまで繰り返し呼び出されます。そうでない場合、`exec()` は一度だけ呼び出されます。それぞれの `exec()` の結果に対して、 [`String.prototype.replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace#解説) の解説に基づいて置き換える準備をします。

`[Symbol.replace]()` は `exec()` が `null` を返すまで呼び続け、最後の照合に失敗すると自動的に正規表現の [`lastIndex`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) を 0 にリセットするので、`[Symbol.replace]()` が終了しても通常は副作用がありません。しかし、正規表現が[粘着的](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)かつグローバルではない場合、`lastIndex` はリセットされません。この場合、`replace()` を呼び出すたびに異なる結果を返す可能性があります。

```js
const re = /a/y;

for (let i = 0; i < 5; i++) {
  console.log("aaa".replace(re, "b"), re.lastIndex);
}

// baa 1
// aba 2
// aab 3
// aaa 0
// baa 1
```

正規表現が粘着的でグローバルな場合、粘着的に照合します。すなわち、 `lastIndex` 以降の出現には一致しません。

```js
console.log("aa-a".replace(/a/gy, "b")); // "bb-a"
```

もし現在の一致が空文字列であったとしても、 `lastIndex` は進みます。正規表現が [Unicode 対応](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)であれば、Unicode コードポイントが 1 つ進みます。そうでない場合は、 UTF-16 コード単位 1 つ分進みます。

```js
console.log("😄".replace(/(?:)/g, " ")); // " \ud83d \ude04 "
console.log("😄".replace(/(?:)/gu, " ")); // " 😄 "
```

このメソッドは、 `RegExp` サブクラスの置換動作をカスタマイズするために存在しています。

## 例

### 直接呼出し

`this` と引数の順序が異なる点を除いて、このメソッドは {{jsxref("String.prototype.replace()")}} とほとんど同じ使い方ができます。

```js
const re = /-/g;
const str = "2016-01-01";
const newStr = re[Symbol.replace](str, ".");
console.log(newStr); // 2016.01.01
```

### サブクラスでの `[Symbol.replace]()` の使用

既定の動作を修正するために、{{jsxref("RegExp")}} のサブクラスで `[Symbol.replace]()` メソッドをオーバーライドできます。

```js
class MyRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // [Symbol.replace]() を `count` 回実行する
    let result = str;
    for (let i = 0; i < this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

const re = new MyRegExp("\\d", "", 3);
const str = "01234567";
const newStr = str.replace(re, "#"); // String.prototype.replace は re[Symbol.replace]() を呼び出す
console.log(newStr); // ###34567
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`RegExp.prototype[Symbol.replace]` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.replaceAll()")}}
- [`RegExp.prototype[Symbol.match]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.matchAll]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.search]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.replace")}}
