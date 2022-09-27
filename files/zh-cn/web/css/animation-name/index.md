---
title: animation-name
slug: Web/CSS/animation-name
---

{{CSSRef}}

`animation-name` 属性指定应用的一系列动画，每个名称代表一个由{{cssxref("@keyframes")}}定义的动画序列。

```css
/* Single animation */
animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

/* Multiple animations */
animation-name: test1, animation4;
animation-name: none, -moz-specific, sliding;

/* Global values */
animation-name: initial
animation-name: inherit
animation-name: unset
```

使用简写属性{{cssxref("animation")}}可以很方便地同时设置所有的动画属性。

{{cssinfo}}

## 语法

### 值

- `none`
  - : 特殊关键字，表示无关键帧。可以不改变其他标识符的顺序而使动画失效，或者使层叠的动画样式失效。
- `IDENT`
  - : 标识动画的字符串，由大小写敏感的字母 a-z、数字 0-9、下划线 (\_) 和/或横线 (-) 组成。第一个非横线字符必须是字母，数字不能在字母前面，不允许两个横线出现在开始位置。

### Formal syntax

{{csssyntax("animation-name")}}

## 示例

See [CSS animations](/zh-CN/docs/CSS/CSS_animations) for examples.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using CSS animations](/zh-CN/docs/CSS/Tutorials/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
