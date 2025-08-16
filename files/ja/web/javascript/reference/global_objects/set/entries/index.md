---
title: Set.prototype.entries()
short-title: entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`entries()`** は {{jsxref("Set")}} インターフェイスのメソッドで、集合の新しい[イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)オブジェクトを返します。これは **`[value, value]` の配列**の形で集合の各要素を挿入順に返します。 `Set` オブジェクトは、`Map` オブジェクトのように `key` を持つことはありません。しかしながら、`Map` オブジェクトと似た API をもつために、それぞれの項目は _key_ と _value_ に対して同じ値を持ちます。そのため、配列 `[value, value]` が返されます。

{{InteractiveExample("JavaScript デモ: Set.prototype.entries()")}}

```js interactive-example
const set = new Set();
set.add(42);
set.add("forty two");

const iterator = set.entries();

for (const entry of iterator) {
  console.log(entry);
  // 予想される結果: Array [42, 42]
  // 予想される結果: Array ["forty two", "forty two"]
}
```

## 構文

```js-nolint
entries()
```

### 引数

なし。

### 返値

新しい[反復可能なイテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)です。

## 例

### entries() の使用

```js
const mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

const setIter = mySet.entries();

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
