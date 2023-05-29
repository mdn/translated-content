---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
---

{{JSRef}}

**`size`** 属性将会返回 {{jsxref("Set")}} 对象中（唯一的）元素的个数。

{{EmbedInteractiveExample("pages/js/set-prototype-size.html")}}

## 描述

`size` 的值是一个整数，表示 `Set` 对象有多少条目。`size` 的 set 访问函数是 `undefined`；你不能改变这个属性。

## 示例

### 使用 size

```js
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set")}}
