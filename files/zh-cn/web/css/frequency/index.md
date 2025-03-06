---
title: <frequency>
slug: Web/CSS/frequency
---

{{CSSRef}}

`<frequency>` [CSS](/zh-CN/docs/Web/CSS)数据类型表示频率维度，例如语音的音高。目前它未在任何 CSS 属性中被使用。

## 语法

The `<frequency>` data type consists of a {{cssxref("&lt;number&gt;")}} followed by one of the units listed below. As with all CSS dimensions, there is no space between the unit literal and the number.

### 单位

可以使用以下单位：

- `Hz`
  - : 表示以赫兹（hertz）为单位的频率。例如：`0Hz`、`1500Hz`、`10000Hz`。
- `kHz`
  - : 表示以千赫兹（kilohertz）为单位的频率。例如：`0kHz`、`1.5kHz`、`10kHz`。

> [!NOTE]
> Although the number `0` is always the same regardless of unit, the unit may not be omitted. In other words, `0` is invalid and does not represent `0Hz` or `0kHz`. Though the units are case-insensitive, it is good practice to use a capital "H" for `Hz` and `kHz`, as specified in the [SI](https://en.wikipedia.org/wiki/International_System_of_Units).

## 示例

```plain
12Hz     Positive integer
4.3Hz    Non-integer
14KhZ    The unit is case-insensitive, though non-SI capitalization is not recommended.
+0Hz     Zero, with a leading + and a unit
-0kHz    Zero, with a leading - and a unit
```

### Invalid frequency values

```plain example-bad
12.0     This is a <number>, not an <frequency>, because it is missing a unit.
7 Hz     No space is allowed between the number and the unit.
0        Although unitless zero is an allowable <length>, it's an invalid <frequency>.
```

## 规范

{{Specifications}}

> [!NOTE]
> This data type was initially introduced in [CSS Level 2](https://www.w3.org/TR/CSS2/aural.html#q19.0) for the now-obsolete [aural](/zh-CN/docs/Web/CSS/@media/aural) [media type](/zh-CN/docs/Web/CSS/@media#media_types), where it was used to define the pitch of the voice. However, the `<frequency>` data type has been reintroduced in CSS3, though no CSS property is using it at the moment.

## 浏览器兼容性

{{Compat}}
