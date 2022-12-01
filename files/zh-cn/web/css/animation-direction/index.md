---
title: animation-direction
slug: Web/CSS/animation-direction
---

{{CSSRef}}{{SeeCompatTable}}

## 概述

`animation-direction` CSS 属性指示动画是否反向播放，它通常在简写属性{{cssxref("animation")}}中设定

{{cssinfo}}

## 语法

```
Formal syntax:  {{csssyntax("animation-direction")}}
```

```
animation-direction: normal
animation-direction: reverse
animation-direction: alternate
animation-direction: alternate-reverse
animation-direction: normal, reverse
animation-direction: alternate, reverse, normal
```

### 值

- `normal`
  - : 每个循环内动画向前循环，换言之，每个动画循环结束，动画重置到起点重新开始，这是默认属性。
- `alternate`
  - : 动画交替反向运行，反向运行时，动画按步后退，同时，带时间功能的函数也反向，比如，`ease-in` 在反向时成为 `ease-out`。计数取决于开始时是奇数迭代还是偶数迭代
- `reverse`
  - : 反向运行动画，每周期结束动画由尾到头运行。
- `alternate-reverse`
  - : 反向交替，反向开始交替。动画第一次运行时是反向的，然后下一次是正向，后面依次循环。决定奇数次或偶数次的计数从 1 开始。

## 例子

See [CSS animations](/zh-CN/docs/CSS/CSS_animations) for examples.

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- [Using CSS animations](/zh-CN/docs/CSS/Tutorials/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
