---
title: CSSRule.cssText
slug: Web/API/CSSRule/cssText
---

{{ APIRef("CSSOM") }}概述

**cssText** 返回样式规则所包含的实际文本。想要能够动态的设置一个样式表规则，查看[使用动态样式信息。](/zh-CN/docs/DOM/Using_dynamic_styling_information)

## 语法

```plain
string = cssRule.cssText
```

## 例子

```html
<style>
  body {
    background-color: darkblue;
  }
</style>
<script>
  var stylesheet = document.styleSheets[0];
  alert(stylesheet.cssRules[0].cssText); // body { background-color: darkblue; }
</script>
```

## 规范

- [DOM Level 2 Style CSS - Interface CSSStyleRule (introduced in DOM Level 2)](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule)
