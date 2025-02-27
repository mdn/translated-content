---
title: HTMLMarqueeElement
slug: Web/API/HTMLMarqueeElement
l10n:
  sourceCommit: fcdc6853377f0dfef656f8036bfaa41804a8ebef
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLMarqueeElement`** 接口提供操作 {{HTMLElement("marquee")}} 元素的方法。

它从 {{DOMxRef("HTMLElement")}} 接口继承属性和方法。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- `HTMLMarqueeElement.behavior` {{Deprecated_Inline}}
  - : 设置文本如何滚动，可能值有 `scroll`、`slide` 和 `alternate`。如果没有指定值，默认值是 `scroll`。
- `HTMLMarqueeElement.bgColor` {{Deprecated_Inline}}
  - : 通过颜色名字或十六位颜色值设置背景色。
- `HTMLMarqueeElement.direction` {{Deprecated_Inline}}
  - : 设置滚动的方向，可能值有 `left`、`right`、`up` 和 `down`。如果没有指定值，默认值是 `left`。
- `HTMLMarqueeElement.height` {{Deprecated_Inline}}
  - : 以像素或百分比值为单位设置高度。
- `HTMLMarqueeElement.hspace` {{Deprecated_Inline}}
  - : 设置水平外边距。
- `HTMLMarqueeElement.loop` {{Deprecated_Inline}}
  - : 设置滚动的次数。如果没有指定值，默认值是 `-1`，这意味着将连续滚动。
- `HTMLMarqueeElement.scrollAmount` {{Deprecated_Inline}}
  - : 以像素为单位设置每个间隔的滚动量。默认值是 `6`。
- `HTMLMarqueeElement.scrollDelay` {{Deprecated_Inline}}
  - : 以毫秒为单位设置每次滚动之间的间隔。默认值是 `85`。请注意任何小于 `60` 的值都会被忽略而使用 `60` 代替，除非 `trueSpeed` 设置为 `true`。
- `HTMLMarqueeElement.trueSpeed` {{Deprecated_Inline}}
  - : 默认情况下，低于 60 的 `scrollDelay` 值将被忽略，如果 `trueSpeed` 为 `true`，则这些值不会被忽略。
- `"HTMLMarqueeElement.vspace` {{Deprecated_Inline}}
  - : 设置垂直外边距。
- `HTMLMarqueeElement.width` {{Deprecated_Inline}}
  - : 以像素或百分比值为单位设置宽度。

## 实例方法

_从其父接口 {{domxref("HTMLElement")}} 继承方法。_

- `HTMLMarqueeElement.start()` {{Deprecated_Inline}}
  - : 开始滚动。
- `HTMLMarqueeElement.stop()` {{Deprecated_Inline}}
  - : 停止滚动。

## 事件

- `bounce` {{Deprecated_Inline}}
  - : 当到达其滚动位置的末尾时触发。只有当行为属性设置为 `alternate` 时才触发。
- `finish` {{Deprecated_Inline}}
  - : 当完成循环属性设置的滚动量时触发。只有当循环属性设置为大于 0 的数字时才触发。
- `start` {{Deprecated_Inline}}
  - : 当开始滚动时触发。

## 示例

```html
<marquee>此文本将从右向左滚动</marquee>

<marquee direction="up">此文本将从下向上滚动</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate">此文本将反弹</marquee>
</marquee>
```

{{EmbedLiveSample("示例", 600, 450)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("marquee")}}
