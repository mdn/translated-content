---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
original_slug: Web/JavaScript/Reference/Global_Objects/Map/delete
---
{{JSRef}}

`delete()` 方法用于移除 `Map` 对象中指定的元素。

{{EmbedInteractiveExample("pages/js/map-prototype-delete.html")}}

## 语法

```js
delete(key)
```

### 参数

- key
  - : 必须。从 `Map` 对象中移除的元素的键。

### 返回值

- Boolean
  - : 如果 `Map` 对象中存在该元素，则移除它并返回 `true`；否则直接返回 `false`。

## 示例

### 使用 delete()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // 返回 true。成功地移除元素
console.log(myMap.has("bar"));    // 返回 false。"bar" 元素将不再存在于 Map 实例中
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Map")}}
