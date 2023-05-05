---
title: CSSRule.parentStyleSheet
slug: Web/API/CSSRule/parentStyleSheet
---

{{ APIRef("CSSOM") }}

### 概述

**parentStyleSheet** 返回在当前规则中已定义的样式表对象。

### 语法

```plain
stylesheet = cssRule.parentStyleSheet
```

### 参数

- `stylesheet`是一个样式表对象。

### 例子

```plain
if ( bgRule.parentStyleSheet != mySheet ) {
   // alien style rule!
}
```

### 备注

查看 [Gecko DOM Reference:event#DOM_styleSheet_Object](en/Gecko_DOM_Reference/event#DOM_styleSheet_Object) 有关样式表的对象接口的详细信息。

### 规范

DOM Level 2 Style - cssRule
