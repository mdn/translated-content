---
title: Node.childNodes
slug: Web/API/Node/childNodes
---

{{ APIRef() }}

## 概述

**Node.childNodes** 返回包含指定节点的子节点的集合，该集合为即时更新的集合（live collection）。

## 语法

```plain
var ndList = elementNodeReference.childNodes;
```

ndList 变量为 {{domxref("NodeList")}} 类型，且为只读。

## 例子

```plain
// parg 是一个对 <p> 元素的引用
if (parg.hasChildNodes())
// 首先我们检查它是否包含子节点
 {
   var children = parg.childNodes;
   for (var i = 0; i < children.length; i++)
   {
   // children[i] 就是遍历到的每个子节点。
   // 注意：该 NodeList 对象为 LIVE 类型的 NodeList，添加或删除子节点都会实时的改变整个 NodeList 对象。
   };
 };
```

```plain
//下面的方法可以删除节点 box 的所有子节点
while (box.firstChild)
 {
    //box 为 LIVE 类型的 NodeList，所以 firstChild 属性每次会指向不同的子节点
    box.removeChild(box.firstChild);
 };
```

## 备注

集合的元素是一个节点而不是字符串。要从集合的元素获取数据，你必须使用它们的属性（例如：用 `elementNodeReference.childNodes[1].nodeName` 获取它们的名称，等等）。

`document`节点 (文档节点) 包含两个子节点：Doctype 声明和根节点。根节点通常为 `documentElement` 引用，且在 (X)HTML 文档中为 HTML 元素。

## 规范

- [W3C DOM 2 Core: childNodes](https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1451460987)
- [W3C DOM 3 Core: childNodes](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-1451460987)
- [W3C DOM 3 NodeList interface](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-536297177)

## 相关链接

- {{ domxref("Node.firstChild") }}
- {{ domxref("Node.lastChild") }}
- {{ domxref("Node.nextSibling") }}
- {{ domxref("Node.previousSibling") }}
- {{ domxref("ParentNode.children") }}
