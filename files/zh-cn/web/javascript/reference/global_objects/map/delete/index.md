---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
---

{{JSRef}}

`delete()` 方法用于移除 `Map` 对象中指定的元素。

{{EmbedInteractiveExample("pages/js/map-prototype-delete.html")}}

## 语法

```js-nolint
delete(key)
```

### 参数

- `key`
  - : 要从 `Map` 对象中删除的元素的键。

### 返回值

如果 `Map` 对象中的元素存在并已被移除，则为 `true`；如果该元素不存在，则为 `false`。

## 示例

### 使用 delete()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // 返回 true。成功地移除元素
console.log(myMap.has("bar")); // 返回 false。"bar" 元素将不再存在于 Map 实例中
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map")}}
