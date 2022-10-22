---
title: RegExp.prototype[@@matchAll]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll
---

{{JSRef}}

**`[@@matchAll]`** メソッドは、文字列に対する正規表現で一致するすべてのものを返します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@matchall.html", "taller")}}

## 構文

```
regexp[Symbol.matchAll](str)
```

### 引数

- `str`
  - : 一致の対象となる {{jsxref("String")}} です。

### 返値

[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)です。

## 解説

このメソッドは内部的に {{jsxref("String.prototype.matchAll()")}} を呼び出します。例えば、以下の 2 つの例は同じ結果を返します。

```js
'abc'.matchAll(/a/);

/a/[Symbol.matchAll]('abc');
```

このメソッドは `matchAll()` の動作を {{jsxref('RegExp')}} のサブクラスの中でカスタマイズするために存在します。

## 例

### 直接呼び出し

このメソッドは {{jsxref("String.prototype.matchAll()")}}, とほぼ同様に使用することができますが、 `this` の値と引数の順序が違う点が異なります。

```js
let re = /[0-9]+/g;
let str = '2016-01-02';
let result = re[Symbol.matchAll](str);

console.log(Array.from(result, x => x[0]));
// ["2016", "01", "02"]
```

### サブクラスでの @@matchAll の使用

{{jsxref("RegExp")}} のサブクラスは `[@@matchAll]()` メソッドを上書きして既定の動作を変更することができます。

例えば、 {{jsxref("Array")}} を[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)の代わりに返すことができます。

```js
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    } else {
      return Array.from(result);
    }
  }
}

const re = new MyRegExp('([0-9]+)-([0-9]+)-([0-9]+)', 'g');
const str = '2016-01-02|2019-03-07';
const result = str.matchAll(re);
console.log(result[0]); // [ "2016-01-02", "2016", "01", "02" ]
console.log(result[1]); // [ "2019-03-07", "2019", "03", "07" ]
```

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-regexp-prototype-matchall', 'RegExp.prototype[@@matchAll]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.@@matchAll")}}

## 関連情報

- {{JSxRef("String.prototype.matchAll()")}}
- {{JSxRef("Symbol.matchAll")}}
