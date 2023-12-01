---
title: "-webkit-touch-callout"
slug: Web/CSS/-webkit-touch-callout
---

{{CSSRef}} {{Non-standard_header}}

## 概述

`-webkit-touch-callout` 这个[CSS](/zh-CN/docs/Web/CSS) 属性禁用了默认的 callout 展示，callout 是指当触摸并按住一个元素的时候出现的提示。

当在 iOS 上一直按住一个目标元素时，Safari 会展示一个关于这个链接的 callout 信息。`webkit-touch-callout`属性允许禁用掉这一行为。

## 语法

```
Formal syntax: default | none
```

```css
-webkit-touch-callout: default; /* displays the callout */
-webkit-touch-callout: none; /* disables the callout */

-webkit-touch-callout: initial;
-webkit-touch-callout: inherit;
-webkit-touch-callout: unset;
```

### 可能的值

- `default`
  - : 此值表示显示默认的 callout
- `none`
  - : 此值表示禁用 callout

## 示例

```css
.example {
  -webkit-touch-callout: none;
}
```

## 浏览器兼容性

{{Compat}}
