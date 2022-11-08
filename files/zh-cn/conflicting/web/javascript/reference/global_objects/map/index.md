---
title: Map.prototype[@@toStringTag]
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Map
original_slug: Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag
---

{{JSRef}}

**`Map[@@toStringTag]`** 的初始值是 "Map"。

{{EmbedInteractiveExample("pages/js/map-prototype-@@tostringtag.html","shorter")}}{{js_property_attributes(0,0,1)}}

## 语法

```js-nolint
Map[Symbol.toStringTag]
```

## 示例

### 使用 toStringTag

```js
Object.prototype.toString.call(new Map()) // "[object Map]"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Symbol.toStringTag")}}
