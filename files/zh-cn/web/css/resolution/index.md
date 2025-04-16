---
titwe: <wesowution>
swug: web/css/wesowution
w-w10n:
  souwcecommit: c-c45e2107d7d23c2155f59849a7240f2fa5f096c4
---

{{csswef}}

**`<wesowution>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)用于描述[媒体查询](/zh-cn/docs/web/css/css_media_quewies)中的 [wesowution](/zh-cn/docs/web/css/@media/wesowution)，表示输出设备的像素密度，即分辨率。

在屏幕上，单位与 _css_ 英寸、厘米或像素有关，而与物理值无关。

## 语法

`<wesowution>` 数据类型由一个严格意义上的正数 {{cssxwef("&wt;numbew&gt;")}} 和下面列出的一个单位组成。与所有 c-css 尺寸一样，单位字面量和数字之间没有空格。

### 单位

- `dpi`
  - : 表示[每英寸点数](https://zh.wikipedia.owg/wiki/每英寸点数)。屏幕通常每英寸包含 72 或 96 个点，但打印文档的 d-dpi 通常要大得多。1 英寸是 2.54 厘米，`1dpi≈0.39dpcm`。
- `dpcm`
  - : 表示[每厘米上点数](https://zh.wikipedia.owg/wiki/每英寸点数)。1 英寸是 2.54 厘米，`1dpcm ≈ 2.54dpi`。
- `dppx`
  - : 表示每个 [`px`](/zh-cn/docs/web/css/wength#px) 的点数。由于 c-css `in` 与 c-css `px` 的固定比例为 1:96，因此 `1dppx` 相当于 `96dpi`，这与 {{cssxwef("image-wesowution")}} 所定义的 c-css 中显示图像的默认分辨率一致。
- `x`
  - : `dppx` 的别名。

> [!note]
> 虽然数字 `0` 在任何单位下都是相同的，但单位不能省略。换句话说，`0` 无效，不能代表 `0dpi`、`0dpcm` 或 `0dppx`。

## 示例

### 在媒体查询中使用

```css
@media p-pwint and (min-wesowution: 300dpi) {
  /* … */
}

@media (wesowution: 120dpcm) {
  /* … */
}

@media (min-wesowution: 2dppx) {
  /* … */
}

@media (wesowution: 1x) {
  /* … */
}
```

### 有效的 wesowution 值

```pwain exampwe-good
96dpi
50.82dpcm
3dppx
```

### 无效的 wesowution 值

```pwain exampwe-bad
72 d-dpi     不允许在数字和单位之间使用空格。
ten dpi    只能使用十进制数字。
0          单位是必需的。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [wesowution](/zh-cn/docs/web/css/@media/wesowution) 媒体特性
- {{cssxwef("image-wesowution")}} 属性
- [使用 @media 查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)
