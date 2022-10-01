---
title: Document.mozSyntheticDocument
slug: Web/API/Document/mozSyntheticDocument
---

## 概述

{{ ApiRef("DOM") }}

文档是否是合成文档; 即表示独立的图像，视频，音频等的文档。

> **备注：** 应考虑兼容性和应用场景

## 语法

```js
var isSynthetic = document.mozSyntheticDocument;
```

返回时，如果文档是合成的，则合成是真实的; 否则是假的。

## 例子

如果您有一个您只想为合成文档显示的上下文菜单项（或相反，对于不合成的文档），这可能很有用。

```
var isSynthetic = document.mozSyntheticDocument;

if (isSynthetic) {
  /* insert your menu item here */
}
```

## 规范

不是任何规范的一部分。
