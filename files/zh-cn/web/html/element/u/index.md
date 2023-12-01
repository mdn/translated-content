---
title: <u>：未阐明的注释（下划线）元素
slug: Web/HTML/Element/u
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<u>`** 元素表示行内文本拥有一个非文本形式的注释，该注释需要以某种方式渲染出来。默认情况下渲染为一个实线下划线，可以用 CSS 替换。

> **警告：** 此元素以前在旧版本的 HTML 中称为“下划线”元素，但有时仍会以这种方式被滥用。要为文本加下划线，你应该应用包含 CSS {{cssxref("text-decoration")}} 属性设置为 `underline` 的样式。

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

有关何时适合使用 `<u>` 以及何时不使用 `<u>` 的详细信息，请参阅[使用说明](#使用说明)部分。

## 属性

这个元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 使用说明

就像所有纯样式元素那样，原本的下划线元素（`<u>`）在 HTML 4 中被废弃。但是 `<u>` 在 HTML 5 中被恢复，并被赋予了一个新的语义：将文本标记为应用了某种形式的非文本注释。

> **备注：** 在可能和超链接混淆的地方，避免使用默认样式的 `<u>` 元素，它们都默认用下划线装饰。

### 示例

`<u>` 元素的有效用例包括标注拼写错误、向中文文本中的专有名称添加[专名号](https://zh.wikipedia.org/wiki/专名号)，以及其他形式的注释。

你**不**应该使用 `<u>` 为文字添加视觉上的下划线，或者表示书籍的标题。

### 要考虑使用的其他要素

在大多数情况下，你应该使用 `<u>` 以外的元素，例如：

- 用 {{HTMLElement("em")}} 来强调重点
- 用 {{HTMLElement("b")}} 来吸引对文字的注意
- 用 {{HTMLElement("mark")}} 来标记关键词或短语
- 用 {{HTMLElement("strong")}} 来表明文本具有重要意义
- 用 {{HTMLElement("cite")}} 来标记书籍或其他出版物的标题
- 用 {{HTMLElement("i")}} 来表示西方文本中的技术术语、音译、思想或船名

要提供文本注释（与使用 `<u>` 创建的非文本注释相对），请使用 {{HTMLElement("ruby")}} 元素。

要在没有任何语义含义的情况下应用下划线外观，请使用 {{cssxref("text-decoration")}} 属性的 `underline` 属性值。

## 示例

### 表示拼写错误

此示例使用 `<u>` 元素和一些 CSS 来显示包含拼写错误的段落，其中错误以通常用于此目的的红色波浪下划线样式表示。

#### HTML

```html
<p>This paragraph includes a <u class="spelling">wrnogly</u> spelled word.</p>
```

在 HTML 中，我们用 `<u>` 元素及 `spelling` 类来表示“wrnogly”一词的拼写错误。

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

这个 CSS 表示当 `<u>` 元素使用类 `spelling` 进行样式化时，它的文本下面应该有一个红色的波浪下划线。这是拼写错误的常见样式。也可以使用另一种常见样式 `red dashed underline`。

#### 结果

用过任意目前比较流行的文字处理软件的人应该都对结果感到熟悉。

{{EmbedLiveSample("表示拼写错误", 650, 80)}}

### 避免使用 \<u>

大多数情况下，你实际上不想使用 `<u>`。以下是一些示例，显示在几种情况下你应该做什么。

#### 非语义下划线

要在不暗示任何语义含义的情况下为文本加下划线，请使用 {{HTMLElement("span")}} 元素并将 {{cssxref("text-decoration")}} 属性设置为 `underline`，如下所示。

##### HTML

```html
<span class="underline">今日特供</span>
<br />
胡萝卜鸡丁面
```

##### CSS

```css
.underline {
  text-decoration: underline;
}
```

##### 结果

{{EmbedLiveSample("非语义下划线", 650, 80)}}

#### 表示书名

书籍标题应使用 {{HTMLElement("cite")}} 元素而不是 `<u>` 甚至 `<i>` 来呈现。

##### 使用 cite 元素

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("使用 cite 元素", 650, 80)}}

##### 为 cite 元素添加样式

`<cite>` 元素的默认样式会以斜体显示文本，你可以使用 CSS 覆盖它：

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

```css
cite {
  font-style: normal;
  text-decoration: underline;
}
```

{{EmbedLiveSample("为 cite 元素添加样式", 650, 80)}}

## 技术概要

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容类别</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容">流式内容</a>、<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容">短语内容</a>、可感知内容。</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容">短语内容</a></td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任何接受<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容">短语内容</a>的元素。</td>
  </tr>
  <tr>
    <th scope="row">隐式 ARIA 角色</th>
    <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">无对应角色</a></td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>任意</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 通常应使用 {{HTMLElement("span")}}、{{HTMLElement("i")}}、{{HTMLElement("em")}}、{{HTMLElement("b")}} 或 {{HTMLElement("cite")}} 元素代替。
- 应当使用 CSS {{cssxref("text-decoration")}} 属性添加非语义的下划线。
