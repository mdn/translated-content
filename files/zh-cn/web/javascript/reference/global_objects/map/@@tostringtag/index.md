---
title: Map.prototype[@@toStringTag]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag
original_slug: Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag
---
{{JSRef}}

**`Map[@@toStringTag]`** 的初始值是"Map".

{{js_property_attributes(0,0,1)}}

## 语法

```plain
Map[Symbol.toStringTag]
```

## 示例

```js
Object.prototype.toString.call(new Map()) // "[object Map]"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
