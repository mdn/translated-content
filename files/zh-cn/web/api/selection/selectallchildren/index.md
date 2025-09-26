---
title: Selection.selectAllChildren()
slug: Web/API/Selection/selectAllChildren
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

Selection.selectAllChildren() 把指定元素的所有子元素设为选中区域，并取消之前的选中区域。

## 语法

```js-nolint
selectAllChildren(parentNode)
```

### 参数

- _`parentNode`_
  - : 所有 parentNode 元素的子元素会被设为选中区域，parentNode 本身除外。

## 示例

```js
footer = document.getElementById("footer");
window.getSelection().selectAllChildren(footer);
/* Everything inside the footer is now selected */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 此方法所属的接口：{{domxref("Selection")}}。
