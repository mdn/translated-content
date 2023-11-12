---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
---

{{JSRef}}

**`flags`**属性返回一个字符串，由当前正则表达式对象的标志组成。

{{js_property_attributes(0, 0, 1)}}

## 描述

`flags`属性中的标志以字典序排序（从左到右，即`"gimuy"`）。

## 示例

### 使用`flags`

```js
/foo/gi.flags; // "gi"
/bar/muy.flags; // "muy"
```

## Polyfill

```js
if (RegExp.prototype.flags === undefined) {
  Object.defineProperty(RegExp.prototype, "flags", {
    configurable: true,
    get: function () {
      return this.toString().match(/[gimuy]*$/)[0];
    },
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("RegExp.prototype.source")}}
