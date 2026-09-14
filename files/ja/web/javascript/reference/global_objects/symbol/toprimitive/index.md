---
title: Symbol.toPrimitive
short-title: toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Symbol.toPrimitive`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)の `Symbol.toPrimitive` を表します。すべての[型変換](/ja/docs/Web/JavaScript/Guide/Data_structures#型変換)アルゴリズムにおいて、オブジェクト上でこのシンボルを使って、その `valueOf()` や `toString()` メソッドを使用する前に、望ましい型を受け入れ、オブジェクトのプリミティブ表現を返すメソッドを調べます。

{{InteractiveExample("JavaScript デモ: Symbol.toPrimitive")}}

```js interactive-example
const object = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 42;
    }
    return null;
  },
};

console.log(+object);
// 予想される結果: 42
```

## 値

ウェルノウンシンボル `Symbol.toPrimitive` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`Symbol.toPrimitive` プロパティにより（関数値として使用することで）、オブジェクトをプリミティブ値に変換することができるようになります。関数は、プリミティブ値の結果として好ましい型を指定する文字列引数の `hint` と一緒に呼び出されます。`hint` 引数は、 "`number`", "`string`", "`default`" のいずれかになります。

`"number"` ヒントは、[数値変換](/ja/docs/Web/JavaScript/Guide/Data_structures#数値変換)アルゴリズムで使用されます。`"string"` ヒントは、[文字列変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)アルゴリズムで使用されます。`"default"` ヒントは、[プリミティブ変換](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)アルゴリズムで使用されます。ヒントは、優先順位の弱いシグナルとしてのみ機能し、実装でそれを無視するのは自由です（[`Symbol.prototype[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) がそうであるように）。`[Symbol.toPrimitive]()` はプリミティブを返さなければなりません。そうでない場合は {{jsxref("TypeError")}} が発生します。

`[Symbol.toPrimitive]` プロパティを持たないオブジェクトは、`valueOf()` メソッドと `toString()` メソッドを異なる順序で呼び出すことでプリミティブに変換されますが、これについては[型変換](/ja/docs/Web/JavaScript/Guide/Data_structures#型変換)の節で詳しく説明します。`[Symbol.toPrimitive]()` では、プリミティブ変換処理を完全に制御できます。例えば、[`Date.prototype[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) は、`"default"` を `"string"` であるかのように扱い、 `valueOf()` の代わりに `toString()` を呼び出します。[`Symbol.prototype[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) はヒントを無視し、常にシンボルを返します。つまり、文字列コンテキストでも {{jsxref("Symbol.prototype.toString()")}} は呼び出されず、`Symbol` オブジェクトは常に [`String()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/String) を介して明示的に文字列に変換する必要があります。

## 例

### オブジェクトから変換されたプリミティブ値の修正

次の例は `Symbol.toPrimitive` プロパティがオブジェクトから変換されたプリミティブ値を修正する方法を説明します。

```js
// Symbol.toPrimitive プロパティを持たないオブジェクト。
const obj1 = {};
console.log(+obj1); // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"

// Symbol.toPrimitive プロパティを持つオブジェクト。
const obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 10;
    }
    if (hint === "string") {
      return "hello";
    }
    return true;
  },
};
console.log(+obj2); // 10        — hint は "number"
console.log(`${obj2}`); // "hello"   — hint は "string"
console.log(obj2 + ""); // "true"    — hint は "default"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.toPrimitive` (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- [`Date.prototype[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
- [`Symbol.prototype[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)
- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
