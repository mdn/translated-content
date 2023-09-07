---
title: <marquee>
slug: Web/HTML/Element/marquee
---

{{HTMLSidebar}}{{deprecated_header}}

HTML marquee 元素（`<marquee>`）用来插入一段滚动的文字。你可以使用它的属性控制当文本到达容器边缘发生的事情。

> **警告：** `<marquee>` 元素已经**过时**，请不要再使用。尽管一些浏览器仍然支持它，但它不是必须的。此外，使用这个元素基本上是你可以对你的用户做最糟糕的事情之一，所以请不要这样做。

## 属性

- `behavior`
  - : 设置文本在 marquee 元素内如何滚动。可选值有 `scroll`，`slide` 和 `alternate`。如果未指定值，默认值为 `scroll`。
- `bgcolor`
  - : 通过颜色名称或十六进制值设置背景颜色。
- `direction`
  - : 设置 marquee 内文本滚动的方向。可选值有 `left`, `right`, `up` and `down。`如果未指定值，默认值为 `left`。
- `height`
  - : 以像素或百分比值设置高度。
- `hspace`
  - : 设置水平边距。
- `loop`
  - : 设置 marquee 滚动的次数。如果未指定值，默认值为 −1，表示 marquee 将连续滚动。
- `scrollamount`
  - : 设置每次滚动时移动的长度（以像素为单位）。默认值为 6。
- `scrolldelay`
  - : 设置每次滚动时的时间间隔（以毫秒为单位）。默认值为 85。请注意，除非指定 truespeed 值，否则将忽略任何小于 60 的值，并改为使用 60。
- `truespeed`
  - : 默认情况下，会忽略小于 60 的 scrolldelay 值。如果存在 truespeed，那些值不会被忽略。
- `vspace`
  - : 以像素或百分比值设置垂直边距。
- `width`
  - : 以像素或百分比值设置宽度。

## 事件回调

- `onbounce`
  - : 当 marquee 滚动到结尾时触发。它只能在 behavior 属性设置为 alternate 时触发。
- `onfinish`
  - : 当 marquee 完成 loop 属性设置的值时触发。它只能在 loop 属性设置为大于 0 的某个数字时触发。
- `onstart`
  - : 当 marquee 开始滚动时触发。

## 方法

- start
  - : 开始滚动 marquee。
- stop
  - : 停止滚动 marquee。

## 示例

```html
<marquee>This text will scroll from right to left</marquee>

<marquee direction="up">This text will scroll from bottom to top</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate"> This text will bounce </marquee>
</marquee>
```

{{EmbedLiveSample("示例", 600, 450)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
