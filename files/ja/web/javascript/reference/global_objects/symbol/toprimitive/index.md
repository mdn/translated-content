---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
---

{{JSRef}}

**`Symbol.toPrimitive`** はシンボルで、あるオブジェクトを対応するプリミティブ値に変換するために呼び出される関数値のプロパティを指定します。

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## 解説

`Symbol.toPrimitive` プロパティにより (関数値として使用して)、オブジェクトがプリミティブ値に変換することができるようになります。関数は、プリミティブ値の結果として好ましい型を指定する文字列引数の `hint` と一緒に呼び出されます。 `hint` 引数は、 "`number`", "`string`", "`default`" のいずれかになります。

{{js_property_attributes(0,0,0)}}

## 例

### オブジェクトから変換されたプリミティブ値の修正

次の例は `Symbol.toPrimitive` プロパティがオブジェクトから変換されたプリミティブ値を修正する方法を説明します。

```js
// Symbol.toPrimitive プロパティを持たないオブジェクト。
var obj1 = {};
console.log(+obj1); // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"

// Symbol.toPrimitive プロパティを持つオブジェクト。
var obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint == "number") {
      return 10;
    }
    if (hint == "string") {
      return "hello";
    }
    return true;
  },
};
console.log(+obj2); // 10        -- hint は "number"
console.log(`${obj2}`); // "hello"   -- hint は "string"
console.log(obj2 + ""); // "true"    -- hint は "default"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.toPrimitive")}}

## 関連情報

- {{jsxref("Date.@@toPrimitive", "Date.prototype[@@toPrimitive]")}}
- {{jsxref("Symbol.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}
- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
