---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
---

{{JSRef}}

**`add()`** メソッドは `Set` 内に同じ値を持つ要素がない場合、指定した値を持つ新しい要素を `Set` オブジェクトの末尾に追加します。

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

## 構文

```js
add(value);
```

### 引数

- `value`
  - : `Set` オブジェクトに追加する要素の値です。

### 返値

追加された値を持つ `Set` オブジェクトです。

## 例

### add() メソッドの使用

```js
var mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // 連鎖可能

console.log(mySet);
// Set [1, 5, "some text"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
