---
title: animation-play-state
slug: Web/CSS/animation-play-state
---

{{CSSRef}}{{SeeCompatTable}}

## 概述

**`animation-play-state`** [CSS](/zh-CN/docs/CSS) 属性定义一个动画是否运行或者暂停。可以通过查询它来确定动画是否正在运行。另外，它的值可以被设置为暂停和恢复的动画的重放。

恢复一个已暂停的动画，将从它开始暂停的时候，而不是从动画序列的起点开始在动画。

{{cssinfo}}

## 语法

```css
/* Single animation */
animation-play-state: running;
animation-play-state: paused;

/* Multiple animations */
animation-play-state: paused, running, running;

/* Global values */
animation-play-state: inherit;
animation-play-state: initial;
animation-play-state: unset;
```

### 值

- `running`
  - : 当前动画正在运行。
- `paused`
  - : 当前动画已被停止。

### 正式语法

```plain
{{csssyntax}}
```

## 示例

参见实例[CSS animations](/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS animations](/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
