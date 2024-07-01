---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
---

{{JSRef}}

**`add()`** 會在一個 `Set` 物件的尾端加上一個指定 `value` 的新元素。

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

## 語法

```js
mySet.add(value);
```

### 參數

- `value`
  - : 要被加到 `Set` 物件中的值。

### 回傳值

`Set` 物件本身。

## 範例

### 使用 `add` 方法

```js
var mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // chainable

console.log(mySet);
// Set [1, 5, "some text"]
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
