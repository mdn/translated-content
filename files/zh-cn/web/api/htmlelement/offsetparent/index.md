---
title: HTMLElement.offsetParent
slug: Web/API/HTMLElement/offsetParent
---

{{APIRef}}

**`HTMLElement.offsetParent`** 是一个只读属性，返回一个指向最近的（指包含层级上的最近）包含该元素的定位元素或者最近的 `table`, `td`, `th`, `body` 元素。当元素的 `style.display` 设置为 "none" 时，`offsetParent` 返回 `null`。`offsetParent` 很有用，因为 {{domxref("HTMLElement.offsetTop","offsetTop")}} 和 {{domxref("HTMLElement.offsetLeft","offsetLeft")}} 都是相对于其内边距边界的。

## 语法

```plain
parentObj = element.offsetParent;
```

- _parentObj_ 是一个对象引用，当前元素相对于该对象偏移（offset）。

## 浏览器兼容性

在 Webkit 中，如果元素为隐藏的（该元素或其祖先元素的 `style.display` 为 "none"），或者该元素的 `style.position` 被设为 "fixed"，则该属性返回 `null`。

在 IE 9 中，如果该元素的 `style.position` 被设置为 "fixed"，则该属性返回 `null`。（`display:none` 无影响。）

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}
