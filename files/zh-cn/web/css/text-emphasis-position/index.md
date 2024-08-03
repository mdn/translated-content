---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`text-emphasis-position`** 设置强调标记的位置。强调标记（如注音字符）在没有足够空间时，会自动增加行高。

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
    标记和注音文字的首选强调标记位置
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">语言</th>
      <th colspan="2" scope="col">偏好位置</th>
      <th colspan="2" rowspan="2" scope="col">效果</th>
    </tr>
    <tr>
      <th>水平排列</th>
      <th>垂直排列</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>日语</td>
      <td rowspan="3">上方</td>
      <td rowspan="3">右侧</td>
      <td rowspan="3">
        <img
          alt="水平排列的日语文本中强调标记出现在日语文字的上方"
          src="text-emphasis-ja.png"
          title="应用在每个日语文字上方的蓝色强调标记"
        />
      </td>
      <td rowspan="4">
        <img
          alt="垂直排列的日语文本中强调标记出现在日语文字的右侧"
          src="text-emphasis-v.gif"
          title="应用在每个日语文字右侧的蓝色强调标记"
        />
      </td>
    </tr>
    <tr>
      <td>韩语</td>
    </tr>
    <tr>
      <td>蒙古语</td>
    </tr>
    <tr>
      <td>中文</td>
      <td>下方</td>
      <td>右侧</td>
      <td>
        <img
          alt="垂直排列的中文文本中强调标记出现在汉字的下方"
          src="text-emphasis-zh.gif"
          title="应用在每个汉字下方的蓝色强调标记"
        />
      </td>
    </tr>
  </tbody>
</table>

> **备注：** `text-emphasis-position` 无法使用简写属性 {{cssxref("text-emphasis")}} 进行设置，因此也无法进行重置。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 优先使用注音标记而不是强调标记

一些编辑器在注音标记与强调标记冲突时倾向于隐藏强调标记。在 HTML 中，可以通过以下样式规则实现：

```css
ruby {
  text-emphasis: none;
}
```

### 优先使用强调标记而不是注音标记

一些编辑器在强调标记与注音标记冲突时倾向于隐藏注音标记。在 HTML 中，可以通过以下样式规则实现：

```css
em {
  text-emphasis: dot; /* 为 <em> 元素设置 text-emphasis */
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

- 相关全称属性：{{cssxref("text-emphasis-style")}}、{{cssxref("text-emphasis-color")}}，以及对应的简写属性 {{cssxref("text-emphasis")}}。
