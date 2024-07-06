---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
page-type: css-property
browser-compat: css.properties.text-emphasis-position
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`text-emphasis-position`** 设置强调标记的位置。强调标记（如注音字符）需要足够空间时，会自动增加行高。

{{EmbedInteractiveExample("pages/css/text-emphasis-position.html")}}

## 语法

```css
/* 初始值 */
text-emphasis-position: over right;

/* 关键字值 */
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;

text-emphasis-position: left over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* 全局值 */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-position: revert;
text-emphasis-position: revert-layer;
text-emphasis-position: unset;
```

### 取值

- `over`
  - : 在水平书写模式下，在文本上方绘制标记。
- `under`
  - : 在水平书写模式下，在文本下方绘制标记。
- `right`
  - : 在垂直书写模式下，在文本右侧绘制标记。
- `left`
  - : 在垂直书写模式下，在文本左侧绘制标记。

## 描述

强调标记的首选位置取决于语言。例如，在日语中，首选位置是 `over right`；在中文中，首选位置则是 `under right`。下面的信息表总结了中文、蒙古语和日语的首选强调标记位置：

<table>
  <caption>
    Preferred emphasis mark and ruby position
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Language</th>
      <th colspan="2" scope="col">Preferred position</th>
      <th colspan="2" rowspan="2" scope="col">Illustration</th>
    </tr>
    <tr>
      <th>Horizontal</th>
      <th>Vertical</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Japanese</td>
      <td rowspan="3">over</td>
      <td rowspan="3">right</td>
      <td rowspan="3">
        <img
          alt="Emphasis marks appear over each emphasized character in horizontal Japanese text."
          src="text-emphasis-ja.png"
          title="Emphasis (shown in blue for clarity) applied above a fragment of Japanese text"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Emphasis marks appear on the right of each emphasized character in vertical Japanese text."
          src="text-emphasis-v.gif"
          title="Emphasis applied on the right of a fragment of Japanese text"
        />
      </td>
    </tr>
    <tr>
      <td>Korean</td>
    </tr>
    <tr>
      <td>Mongolian</td>
    </tr>
    <tr>
      <td>Chinese</td>
      <td>under</td>
      <td>right</td>
      <td>
        <img
          alt="Emphasis marks appear below each emphasized character in horizontal Simplified Chinese text."
          src="text-emphasis-zh.gif"
          title="Emphasis (shown in blue for clarity) applied below a fragment of Chinese text"
        />
      </td>
    </tr>
  </tbody>
</table>

**注意：** `text-emphasis-position` 无法使用简写属性 {{cssxref("text-emphasis")}} 进行设置，因此也无法进行重置。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 优先显示注音标记

一些编辑器在注音标记与强调标记冲突时倾向于隐藏强调标记。在HTML中，可以通过以下 CSS 实现：

```css
ruby {
  text-emphasis: none;
}
```

### 优先显示强调标记

一些编辑器在强调标记与注音标记冲突时倾向于隐藏注音标记。在HTML中，可以通过以下 CSS 实现：

```css
em {
  text-emphasis: dot;  /* 为 <em> 元素设置强调标记 */
}

em rt {
  display: none; /* 隐藏 <em> 元素内部的注音标记 */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("text-emphasis-style")}}，{{cssxref("text-emphasis-color")}}——相关全称属性
- {{cssxref("text-emphasis")}}——相关简写属性
