---
title: HTMLElement.title
slug: Web/API/HTMLElement/title
---

{{ APIRef() }}

**`HTMLElement.title`** 属性表示元素的 title。当鼠标移到节点上时，会以“工具提示”（tool tip）的弹出形式显示该属性的属性值文本。

如果一个节点没有 `title` 属性（attribute），默认继承其父节点的相应属性，父节点可能是从父节点的父节点继承，依此类推。

## 语法

```plain
var string = element.title;
element.title = string;
```

## 例子

```plain
const link = document.createElement('a');
link.innerText = '葡萄';
link.href = 'https://en.wikipedia.org/wiki/Grape';
link.title = '维基百科上对葡萄的描述';
```

## 浏览器兼容性

{{Compat}}
