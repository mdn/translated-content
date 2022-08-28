---
title: Map() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
original_slug: Web/JavaScript/Reference/Global_Objects/Map/Map
---
{{JSRef}}

**`Map()` 构造函数** 创建 {{jsxref("Map")}} 对象。

## 语法

```plain
new Map([iterable])
```

### 参数

- `iterable`
  - : Iterable 可以是一个{{jsxref("Array", "数组")}}或者其他 [iterable](/zh-CN/docs/Web/JavaScript/Guide/iterable) 对象，其元素为键值对 (两个元素的数组，例如: \[\[ 1, 'one' ],\[ 2, 'two' ]])。 每个键值对都会添加到新的 Map。`null` 会被当做 `undefined。`

## 示例

```js
const myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
