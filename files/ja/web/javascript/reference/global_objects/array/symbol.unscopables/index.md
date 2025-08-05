---
title: Array.prototype[Symbol.unscopables]
short-title: "[Symbol.unscopables]"
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`[Symbol.unscopables]`** は `Array.prototype` のデータプロパティで、すべての {{jsxref("Array")}} インスタンスで共有されます。 ES2015 以前の ECMAScript 標準には含まれておらず、 [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 文のバインドの目的では無視されるプロパティ名を含んでいます。

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
- [`toReversed()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)
- [`toSorted()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [`toSpliced()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)
- [`values()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/values)

`Array.prototype[Symbol.unscopables]` は、上記のプロパティ名をすべて `true` の値で持つ、空のオブジェクトです。この[プロトタイプは `null`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) なので、 `Object.prototype` のプロパティ、例えば [`toString`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) は偶然にスコープ付けできなくなることはなく、 `with` 文の中の `toString()` は引き続き配列の中で呼び出すことができます。

自作オブジェクトに `unscopables` を設定する方法については、 {{jsxref("Symbol.unscopables")}} を見てください。

## 例

ECMAScript 2015 以前に書かれた以下のコードで `values.push('something')` を呼び出すことを考えてみてください。

```js
var values = [];

with (values) {
  values.push("something");
}
```

ECMAScript 2015 が {{jsxref("Array.prototype.values()")}} メソッドを導入したとき、上記のコードの `with` 文は、外部の変数 `values` ではなく、配列メソッドの `values.values` として値を解釈し始めました。`values.push('something')` が呼び出されると、これで `values.values` メソッドの `push` にアクセスすることになるため、エラーが発生します。これにより、Firefox にバグが報告されました（[Firefox バグ 883914](https://bugzil.la/883914)）。

そのため、`Array.prototype` の `[Symbol.unscopables]` データプロパティは、`with` 文のバインドの目的で ECMAScript 2015 で導入された配列プロパティを無視させることになりました。これにより、ECMAScript 2015 より前に書かれたコードは、動作しなくなるのではなく、期待通りに動作し続けることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype[Symbol.unscopables]` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Symbol.unscopables")}}
