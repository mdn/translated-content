---
title: Range.cloneRange()
slug: Web/API/Range/cloneRange
---

{{ APIRef("DOM") }}

**`Range.cloneRange()`**方法返回一个 range 对象，并且该对象的范围边界点与被克隆的 range 对象相同。

克隆的对象是复制过来的，而非引用，所以这两个对象双方各自做出的改变，都不会影响另一方。

## 语法

```plain
clone = range.cloneRange();
```

## Example

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
clone = range.cloneRange();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)
