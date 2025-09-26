---
title: Range.collapse()
slug: Web/API/Range/collapse
---

{{APIRef("DOM")}}

**`Range.collapse()`** 方法向边界点折叠该 {{domxref("Range")}} 。

折叠后的 {{domxref("Range")}} 为空，不包含任何内容。

要确定 {{domxref("Range")}} 是否已折叠，使用{{domxref("Range.collapsed")}} 属性。

## 语法

```js-nolint
collapse()
collapse(toStart)
```

### 参数

- _toStart_ {{optional_inline}}
  - : 一个布尔值： `true` 折叠到 {{domxref("Range")}} 的 start 节点，`false` 折叠到 end 节点。如果省略，则默认为 false {{experimental_inline}}`.`

## 示例

```js
var range = document.createRange();

referenceNode = document.getElementsByTagName("div").item(0);
range.selectNode(referenceNode);
range.collapse(true);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [The DOM interfaces index](/zh-CN/docs/Web/API/Document_Object_Model)
