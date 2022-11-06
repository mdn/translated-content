---
title: HTMLElement.contextMenu
slug: Web/API/HTMLElement/contextMenu
---

{{APIRef("HTML DOM")}}{{deprecated_header()}}

**`HTMLElement.contextMenu`** 特性指的是某一元素用{{htmlattrxref("contextmenu")}} 特性所创建的右键快捷菜单。该菜单本身源于 {{HTMLElement("menu")}} 元素所构建。

## 语法

```plain
var elementContextMenu = element.contextMenu;
```

## 例子

```js
var contextMenu = document.getElementById("element").contextMenu;

// 修改条目 1 的标签
contextMenu.firstElementChild.label = "New label";
```

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{htmlattrxref("contextmenu")}}
- {{HTMLElement("menu")}}
- {{HTMLElement("menuitem")}}
