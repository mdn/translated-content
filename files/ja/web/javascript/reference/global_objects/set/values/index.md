---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
---

{{JSRef}}

**`values()`** メソッドは、新しい[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)オブジェクトを返します。これは `Set` オブジェクトの各要素の値を挿入順に返します。

> **メモ:** **`keys()`** メソッドは（{{jsxref("Map")}} オブジェクトと似せるため）このメソッドに対するエイリアスになっています。まったく同じように動作し、 `Set` の各要素の**値**を返します。

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

## 構文

```js
values();
```

### 返値

新しいイテレーターオブジェクトで、この `Set` オブジェクト内のそれぞれの要素の値を返します。

## 例

### values() の使用

```js
var mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

var setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set.prototype.entries()")}}
