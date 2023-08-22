---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
---

{{JSRef}}

**`entries()`** メソッドは、新しい[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)オブジェクトを返します。これは **`[value, value]` の配列**で `Set` オブジェクトの各要素を挿入順に返します。 `Set` オブジェクトは、`Map` オブジェクトのように `key` を持つことはありません。しかしながら、`Map` オブジェクトと似た API をもつために、それぞれの*項目*は _key_ と _value_ に対して同じ値を持ちます。そのため、配列 `[value, value]` が返されます。

{{EmbedInteractiveExample("pages/js/set-prototype-entries.html")}}

## 構文

```js
entries();
```

### 返値

**`[value, value]` の配列**で `Set` オブジェクトの各要素を挿入順に返す、新しいイテレーターオブジェクトです。

## 例

### entries() の使用

```js
var mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

var setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
