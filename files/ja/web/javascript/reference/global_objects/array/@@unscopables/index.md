---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
---
{{JSRef}}

**`@@unscopable`** シンボルプロパティには、 ES2015 以前の ECMAScript 標準には含まれていないプロパティ名があります。それらのプロパティは、[`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 文のバインディングから除外されます。

## 解説

`with` バインディングから除外される既定の配列プロパティは次のとおりです。

- {{jsxref("Array.prototype.copyWithin()", "copyWithin()")}}
- {{jsxref("Array.prototype.entries()", "entries()")}}
- {{jsxref("Array.prototype.fill()", "fill()")}}
- {{jsxref("Array.prototype.find()", "find()")}}
- {{jsxref("Array.prototype.findIndex()", "findIndex()")}}
- {{jsxref("Array.prototype.includes()", "includes()")}}
- {{jsxref("Array.prototype.keys()", "keys()")}}
- {{jsxref("Array.prototype.values()", "values()")}}

自作オブジェクトに `unscopables` を設定する方法については、 {{jsxref("Symbol.unscopables")}} を見てください。

{{js_property_attributes(0,0,1)}}

## 例

### with 環境内での使用

次のコードは、 ES5 以下であれば正常に動作します。しかし、 ECMAScript 2015 以降では {{jsxref("Array.prototype.keys()")}} メソッドが導入されました。つまり、`with` 環境内では、 "keys" はメソッドであり、変数ではありません。ここが組込み `@@unscopables` の役立つ場所です。`Array.prototype[@@unscopables]` シンボルプロパティが使用されると、配列のいくつかのメソッドが `with` 文のスコープに入ることを防ぎます。

```js
var keys = [];

with (Array.prototype) {
  keys.push('something');
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

## 仕様書

| 仕様書                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype-@@unscopables', 'Array.prototype[@@unscopables]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.@@unscopables")}}

## 関連情報

- {{jsxref("Symbol.unscopables")}}
