---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
original_slug: Web/JavaScript/Reference/Global_Objects/Map/set
---
{{JSRef}}

**`set()`** 方法为 `Map` 对象添加或更新一个指定了键（`key`）和值（`value`）的（新）键值对。

{{EmbedInteractiveExample("pages/js/map-prototype-set.html")}}

## 语法

```js
set(key, value)
```

### 参数

- key
  - : 要添加至相应 `Map` 对象的元素的键。
- value
  - : 要添加至相应 `Map` 对象的元素的值。

### 返回值

`Map` 对象

## 示例

### 使用 set()

```js
const myMap = new Map();

// 将一个新元素添加到 Map 对象
myMap.set('bar', 'foo');
myMap.set(1, 'foobar');

// 在 Map 对象中更新某个元素的值
myMap.set('bar', 'baz');
```

### 链式使用 set()

因为 `set()` 方法返回 `Map` 对象本身，所以你可以像下面这样链式调用它：

```js
// 链式调用添加元素
myMap.set('bar', 'foo')
     .set(1, 'foobar')
     .set(2, 'baz');
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
