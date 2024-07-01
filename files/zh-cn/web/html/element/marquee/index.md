---
title: <marquee>：跑马灯元素
slug: Web/HTML/Element/marquee
l10n:
  sourceCommit: cbfc561e5e577975a51acceadbd7d2fec9b8e45e
---

{{HTMLSidebar}}{{Deprecated_Header}}

**`<marquee>`** [HTML](/zh-CN/docs/Web/HTML) 元素用于插入滚动文本区域。你可以使用它的属性控制当文本到达容器边缘发生的事情。

## 属性

- `behavior` {{Deprecated_Inline}}
  - : 设置文本在 marquee 元素内如何滚动。可选值有 `scroll`、`slide` 和 `alternate`。如果未指定值，默认值为 `scroll`。
- `bgcolor` {{Deprecated_Inline}}
  - : 通过颜色名称或十六进制值设置背景颜色。
- `direction` {{Deprecated_Inline}}
  - : 设置 marquee 内文本滚动的方向。可选值有 `left`、`right`、`up` 和 `down`。如果未指定值，默认值为 `left`。
- `height` {{Deprecated_Inline}}
  - : 以像素或百分比值设置高度。
- `hspace` {{Deprecated_Inline}}
  - : 设置水平边距。
- `loop` {{Deprecated_Inline}}
  - : 设置 marquee 滚动的次数。如果未指定值，默认值为 −1，表示 marquee 将连续滚动。
- `scrollamount` {{Deprecated_Inline}}
  - : 设置每次滚动时移动的长度（以像素为单位）。默认值为 6。
- `scrolldelay` {{Deprecated_Inline}}
  - : 设置每次滚动时的时间间隔（以毫秒为单位）。默认值为 85。请注意，除非指定 `truespeed` 值，否则将忽略任何小于 60 的值，并改为使用 60。
- `truespeed` {{Deprecated_Inline}}
  - : 默认情况下，会忽略小于 60 的 `scrolldelay` 值。如果存在 `truespeed`，那些值不会被忽略。
- `vspace` {{Deprecated_Inline}}
  - : 以像素或百分比值设置垂直边距。
- `width` {{Deprecated_Inline}}
  - : 以像素或百分比值设置宽度。

## 事件处理器

- `onbounce`
  - : 当 marquee 滚动到结尾时触发。它只能在 behavior 属性设置为 alternate 时触发。
- `onfinish`
  - : 当 marquee 完成 loop 属性设置的值时触发。它只能在 loop 属性设置为大于 0 的某个数字时触发。
- `onstart`
  - : 当 marquee 开始滚动时触发。

## 方法

- `start()`
  - : 开始滚动 marquee。
- `stop()`
  - : 停止滚动 marquee。

## 示例

```html
<marquee>该文本将从右向左滚动</marquee>

<marquee direction="up">该文本将从下往上滚动</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate">该文本将弹跳</marquee>
</marquee>
```

### 结果

{{EmbedLiveSample("示例", 600, 450)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{DOMxRef("HTMLMarqueeElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("HTMLMarqueeElement")}}
