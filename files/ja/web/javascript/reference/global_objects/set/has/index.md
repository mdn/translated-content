---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
---

{{JSRef}}

**`has()`** メソッドは、特定の値をもつ要素が `Set` オブジェクト内に存在するかどうかを示す論理値を返します。

{{EmbedInteractiveExample("pages/js/set-prototype-has.html")}}

## 構文

```js
has(value);
```

### 引数

- `value`
  - : `Set` オブジェクトに存在するか検査する値です。

### 返値

`Set` オブジェクト内に特定の値をもつ要素が存在していたら `true` を返します。さもなければ `false` を返します。

## 例

### has() メソッドの使用

```js
var mySet = new Set();
mySet.add("foo");

mySet.has("foo"); // returns true
mySet.has("bar"); // returns false

var set1 = new Set();
var obj1 = { key1: 1 };
set1.add(obj1);

set1.has(obj1); // returns true
set1.has({ key1: 1 }); // オブジェクト参照が異なるため false を返す
set1.add({ key1: 1 }); // set1 には 2 つの項目が含まれるようになる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
