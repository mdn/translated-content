---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
l10n:
  sourceCommit: c4e3558ee1045803df4a685f11f94dca273cd5fe
---

{{JSRef}}

**`@@unscopables`** は `Array.prototype` のデータプロパティで、すべての {{jsxref("Array")}} インスタンスで共有されます。 ES2015 以前の ECMAScript 標準には含まれておらず、 [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 文のバインディングの目的では無視されるプロパティ名を含んでいます。

## 値

以下の名前で `true` に設定された [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)です。

{{js_property_attributes(0, 0, 1)}}

## 解説

`Array` プロパティのうち、既定で `with` 文のバインディング目的では無視されるものは次のとおりです。

- [`at()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [`copyWithin()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
- [`entries()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
- [`fill()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- [`find()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`findIndex()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [`findLast()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
- [`findLastIndex()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
- [`flat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [`flatMap()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [`includes()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [`keys()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
- [`values()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/values)

`Array.prototype[@@unscopables]` は、上記のプロパティ名をすべて `true` の値で持つ、空のオブジェクトです。この[プロトタイプは `null`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) なので、 `Object.prototype` のプロパティ、例えば [`toString`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) は偶然にスコープ付けできなくなることはなく、 `with` 文の中の `toString()` は引き続き配列の中で呼び出すことができます。

自作オブジェクトに `unscopables` を設定する方法については、 {{jsxref("Symbol.unscopables")}} を見てください。

## 例

ECMAScript 2015 以前に書かれた以下のコードで `keys.push('something')` を呼び出すことを考えてみてください。

```js
var keys = [];

with (Array.prototype) {
  keys.push("something");
}
```

ECMAScript 2015 で {{jsxref("Array.prototype.keys()")}} メソッドが導入されたとき、もし `@unscopables` データプロパティも導入されていなければ、 `keys.push('something')` の呼び出しは壊れていました。 JavaScript ランタイムが `keys` を {{jsxref("Array.prototype.keys()")}} メソッドであると解釈し、この例のコードで定義された配列 `keys` とは解釈しませんでした。

すなわち、 `@unscopables` データプロパティが `Array.prototype` にあるのは、 ECMAScript 2015 で導入された `Array` プロパティを `with` 文のバインドの目的では無視するようにし、 ECMAScript 2015 以前に書かれたコードを壊さず、期待どおりに動作し続けられるようにするものです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Symbol.unscopables")}}
