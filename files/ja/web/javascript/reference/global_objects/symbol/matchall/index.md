---
title: Symbol.matchAll
slug: Web/JavaScript/Reference/Global_Objects/Symbol/matchAll
---

{{JSRef}}

**`Symbol.matchAll`** は、文字列に対する正規表現の一致を生成するイテレーターを返します。この関数は {{jsxref("String.prototype.matchAll()")}} メソッドによって呼び出されます。

{{EmbedInteractiveExample("pages/js/symbol-matchall.html","shorter")}}

## 説明

このシンボルは {{jsxref("String.prototype.matchAll()")}}、特に {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}} で使用されます。以下の 2 つの例は同じ結果を返します。

```js
"abc".matchAll(/a/);

/a/[Symbol.matchAll]("abc");
```

このメソッドは、{{jsxref("RegExp")}} サブクラス内の一致動作をカスタマイズするために存在します。

{{js_property_attributes(0,0,0)}}

## 例

### Symbol.matchAll を使用する

```js
let re = /[0-9]+/g;
let str = "2016-01-02|2019-03-07";

const numbers = {
  *[Symbol.matchAll](str) {
    for (const n of str.matchAll(/[0-9]+/g)) yield n[0];
  },
};

console.log(Array.from(str.matchAll(numbers)));
//  Array ["2016", "01", "02", "2019", "03", "07"]
```

その他の例については、{{jsxref("String.prototype.matchAll()")}} と {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}} を参照してください。

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat("javascript.builtins.Symbol.matchAll")}}

## 関連情報

- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}
