---
title: <resolution>
slug: Web/CSS/Reference/Values/resolution
l10n:
  sourceCommit: c45e2107d7d23c2155f59849a7240f2fa5f096c4
---

**`<resolution>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)用于描述[媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries)中的 [resolution](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/resolution)，表示输出设备的像素密度，即分辨率。

在屏幕上，单位与 _CSS_ 英寸、厘米或像素有关，而与物理值无关。

## 语法

`<resolution>` 数据类型由一个严格意义上的正数 {{cssxref("&lt;number&gt;")}} 和下面列出的一个单位组成。与所有 CSS 尺寸一样，单位字面量和数字之间没有空格。

### 单位

- `dpi`
  - : 表示[每英寸点数](https://zh.wikipedia.org/wiki/每英寸点数)。屏幕通常每英寸包含 72 或 96 个点，但打印文档的 dpi 通常要大得多。1 英寸是 2.54 厘米，`1dpi≈0.39dpcm`。
- `dpcm`
  - : 表示[每厘米上点数](https://zh.wikipedia.org/wiki/每英寸点数)。1 英寸是 2.54 厘米，`1dpcm ≈ 2.54dpi`。
- `dppx`
  - : 表示每个 [`px`](/zh-CN/docs/Web/CSS/Reference/Values/length#px) 的点数。由于 CSS `in` 与 CSS `px` 的固定比例为 1:96，因此 `1dppx` 相当于 `96dpi`，这与 {{cssxref("image-resolution")}} 所定义的 CSS 中显示图像的默认分辨率一致。
- `x`
  - : `dppx` 的别名。

> [!NOTE]
> 虽然数字 `0` 在任何单位下都是相同的，但单位不能省略。换句话说，`0` 无效，不能代表 `0dpi`、`0dpcm` 或 `0dppx`。

## 示例

### 在媒体查询中使用

```css
@media print and (min-resolution: 300dpi) {
  /* … */
}

@media (resolution: 120dpcm) {
  /* … */
}

@media (min-resolution: 2dppx) {
  /* … */
}

@media (resolution: 1x) {
  /* … */
}
```

### 有效的 resolution 值

```plain example-good
96dpi
50.82dpcm
3dppx
```

### 无效的 resolution 值

```plain example-bad
72 dpi     不允许在数字和单位之间使用空格。
ten dpi    只能使用十进制数字。
0          单位是必需的。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [resolution](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/resolution) 媒体特性
- {{cssxref("image-resolution")}} 属性
- [使用 @media 查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using)
