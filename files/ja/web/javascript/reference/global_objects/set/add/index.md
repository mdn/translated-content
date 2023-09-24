---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

**`add()`** は {{jsxref("Set")}} インスタンスのメソッドで、この集合に同じ値を持つ要素がない場合、指定した値を持つ新しい要素をこの集合に追加します。

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

## 構文

```js-nolint
add(value)
```

### 引数

- `value`
  - : `Set` オブジェクトに追加する要素の値です。

### 返値

追加された値を持つ `Set` オブジェクトです。

## 例

### add() メソッドの使用

```js
const mySet = new Set();

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
