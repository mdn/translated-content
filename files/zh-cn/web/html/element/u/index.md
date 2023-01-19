---
title: <u>
slug: Web/HTML/Element/u
---

{{HTMLSidebar}}

**HTML `<u>` 元素（表意不清标注元素）**表示一个需要标注为非文本化（non-textual）的内联文本域。默认情况下渲染为一个实线下划线，可以用 CSS 替换。

> **警告：** 此元素以前在旧版本的 HTML 中称为“下划线”元素，但有时仍会以这种方式被滥用。要为文本加下划线，您应该应用包含 CSS {{cssxref("text-decoration")}}属性设置为 `underline` 的样式。

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

有关何时适合使用 `<u>` 以及何时不使用 `<u>` 的详细信息，请参阅[使用说明](#使用说明)部分。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容类别</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">流式内容</a>，<a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">短语内容</a>，palpable 内容。</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">短语内容</a></td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任何接受<a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">短语内容</a>的元素。</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>任意</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}} Gecko 1.9.2 (Firefox 4) 之前（包含）, Firefox 为这个元素实现了 {{domxref("HTMLSpanElement")}} 接口。</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素仅包含[全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 使用说明

就像所有排版元素那样， {{ HTMLElement("u") }} 在 HTML 4 中废弃，但是在 HTML 5 中恢复了一个新的语义，意思是：将文本标记为应用了某种形式的非文本注释。

> **备注：** 在可能和超链接混淆的地方，避免使用 {{ HTMLElement("u") }}。

### 用例

`<u>`元素的有效用例包括注释拼写错误，应用 [proper name mark](https://zh.wikipedia.org/wiki/proper_name_mark) 来表示中文文本中的专有名称以及其他形式的注释。

您不应该使用`<u>`简单地为文字加下划线，或者表示书籍的标题。

### 要考虑使用的其他要素

在大多数情况下，您应该使用\<u>以外的元素，例如：

- {{HTMLElement("em")}} 表示强调重点
- {{HTMLElement("b")}} 提示注意文字
- {{HTMLElement("mark")}} 标记关键词或短语
- {{HTMLElement("strong")}} 表明文本具有重要意义
- {{HTMLElement("cite")}} 标记书籍或其他出版物的标题
- {{HTMLElement("i")}} 表示西方文本中的技术术语，音译，思想或船名

要提供文本注释（与使用`<u>`创建的非文本注释相对），请使用 {{HTMLElement("ruby")}} 元素。

要应用带下划线的外观而没有任何语义含义，请使用 {{cssxref("text-decoration")}} 属性的值 `underline`。

## 示例

### 表示拼写错误

此示例使用`<u>`元素和一些 CSS 来显示包含拼写错误的段落，其中错误以红色波浪下划线样式表示，这种情况通常用于此目的。

#### HTML

```html
<p>This paragraph includes a <u class="spelling">wrnogly</u>
spelled word.</p>
```

在 HTML 中，我们看到 `<u>` 使用了一个类 `spelling`，用于表示“wrongly”一词的拼写错误。

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

这个 CSS 表示当 `<u>` 元素使用类 `spelling` 进行样式化时，它的文本下面应该有一个红色的波浪下划线。这是拼写错误的常见样式。也可以使用另一种常见样式 `red dashed underline`.。

#### 结果

任何使用过今天比较流行的文字处理器的人都应该熟悉结果。

{{EmbedLiveSample("表示拼写错误", 650, 80)}}

### 避免使用 \<u>

大多数情况下，您实际上不想使用 `<u>`。以下是一些示例，显示在几种情况下您应该做什么。

#### 非语义下划线

要在不暗示任何语义含义的情况下为文本加下划线，请使用 {{HTMLElement("span")}} 元素并将 {{cssxref("text-decoration")}} 属性设置为 `"underline"`，如下所示。

##### HTML

```html
<span class="underline">Today's Special</span>
<br>
Chicken Noodle Soup With Carrots
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

##### HTML

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

##### 默认样式的结果

{{EmbedLiveSample("表示书名", 650, 80)}}

##### 为 cite 元素添加样式

请注意， `<cite>` 元素的默认样式会以斜体显示文本。如果您愿意，可以使用 CSS 覆盖它：

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

```css
cite {
  font-style: normal;
  text-decoration: underline;
}
```

##### 定制样式的结果

{{EmbedLiveSample("为 cite 元素添加样式", 650, 80)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ HTMLElement("span") }}，{{ HTMLElement("i") }}，{{ HTMLElement("em") }}，和 {{ HTMLElement("cite") }} 元素，取决于情况，可以替代使用。
- CSS {{ cssxref("text-decoration") }} 属性可以用于完成 {{ HTMLElement("u") }} 元素的前面的视觉效果。
