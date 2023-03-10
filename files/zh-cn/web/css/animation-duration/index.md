---
title: animation-duration
slug: Web/CSS/animation-duration
---

{{ CSSRef() }}{{ SeeCompatTable() }}

## 概述

`animation-duration`属性指定一个动画周期的时长。

默认值为 0s，表示无动画。

使用简写属性{{cssxref("animation")}}很方便地同时设置所有的动画属性。

{{cssinfo}}

## 语法

```
Formal syntax: {{csssyntax("animation-duration")}}
```

```
animation-duration: 6s
animation-duration: 120ms
animation-duration: 1s, 15s
animation-duration: 10s, 30s, 230ms
```

### 值

- `<time>`
  - : 一个动画周期的时长，单位为秒 (s) 或者毫秒 (ms)，无单位值无效。

> **备注：**负值无效，浏览器会忽略该声明，但是一些早期的带前缀的声明会将负值当作 0s。

## 示例

See [CSS animations](/zh-CN/CSS/CSS_animations) for examples.

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## See also

- [Using CSS animations](/zh-CN/docs/CSS/Tutorials/Using_CSS_animations)
- {{ domxref("AnimationEvent", "AnimationEvent") }}
