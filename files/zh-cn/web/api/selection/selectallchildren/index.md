---
title: Selection.selectAllChildren()
slug: Web/API/Selection/selectAllChildren
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

Selection.selectAllChildren() 把指定元素的所有子元素设为选中区域，并取消之前的选中区域。

## 用法

```
sel.selectAllChildren(parentNode)
```

### 参数

- _`parentNode`_
  - : 所有 parentNode 元素的子元素会被设为选中区域，parentNode 本身除外。

## 举例

```
footer = document.getElementById("footer");
window.getSelection().selectAllChildren(footer);
/* Everything inside the footer is now selected *
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Selection")}}, 此方法所属接口。
