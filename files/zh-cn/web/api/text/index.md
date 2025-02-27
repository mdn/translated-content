---
title: Text
slug: Web/API/Text
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{ApiRef("DOM")}}

**`Text`** 接口表示 DOM 树中的一个文本{{domxref("Node", "节点", "", 1)}}。

{{InheritanceDiagram}}

要理解什么是文本节点，请看下面的文档：

```html
<html lang="en" class="e">
  <head>
    <title>Aliens?</title>
  </head>
  <body>
    Why yes.
  </body>
</html>
```

在这个文档中，有 5 个文本节点，其内容如下：

- `"\n    "`（在 `<head>` 开始标签之后，一个换行符后跟四个空格）
- `"Aliens?"`（`title` 元素的内容）
- `"\n  "`（在 `</head>` 结束标签之后，一个换行符后跟两个空格）
- `"\n  "`（在 `<body>` 开始标签之后，一个换行符后跟两个空格）
- `"\n Why yes.\n \n\n"`（`body` 元素的内容）

每个文本节点都是一个对象，具有本文中描述的属性和方法。

## 构造函数

- {{domxref("Text.Text", "Text()")}}
  - : 返回一个新的 `Text` 节点，将参数作为其文本内容。

## 实例属性

_从其父类 {{domxref("CharacterData")}}、{{domxref("Node")}} 和 {{domxref("EventTarget")}} 继承属性。_

- {{domxref("Text.assignedSlot")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("HTMLSlotElement")}}，表示当前节点所在的 {{htmlelement("slot")}}。
- {{domxref("Text.wholeText")}} {{ReadOnlyInline}}
  - : 返回一个由与当前{{domxref("Node", "节点", "", 1)}}相邻的所有文本（`Text`）节点的文本内容按文档顺序拼接成一个字符串。

## 实例方法

_从其父类 {{domxref("CharacterData")}}、{{domxref("Node")}} 和 {{domxref("EventTarget")}} 继承方法。_

- {{domxref("Text.splitText")}}
  - : 在指定的偏移位置将节点分成两个节点。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)
