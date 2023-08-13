---
title: <abbr>
slug: Web/HTML/Element/abbr
---

{{HTMLSidebar}}

**HTML 缩写元素**（**`<abbr>`**）用于代表缩写，并且可以通过可选的 [`title`](/zh-CN/docs/Web/HTML/Global_attributes#title) 属性提供完整的描述。若使用 `title` 属性，则它必须且仅可包含完整的描述内容。

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}}

这篇文章：_[How to mark abbreviations and make them understandable](/zh-CN/Learn/HTML/Howto/Mark_abbreviations_and_make_them_understandable)_ 是一份学习使用 `<abbr>` 与其他相关元素的指南。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>, palpable content</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">Phrasing content</a></td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that accepts <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>Any</td>
  </tr>
  <tr>
   <th scope="row">DOM Interface</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素只有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。在同 `<abbr>` 元素一起使用的时候，[`title`](/zh-CN/docs/Web/HTML/Global_attributes#title) 属性有特殊的语法含义; 它必须包含对一个缩写完全天然可读的扩写或者描述。这些文本通常会作为提示，在鼠标指针覆盖到该元素时显示作为一个提示。

你使用的每一个 `<abbr>` 元素与其他同类元素都是相互独立的，为其中一个提供 `title` 不会自动把相同的附加文字依附到其他内容文字相同的元素上。

## 用法注解

### 典型使用场景

当然，我们不是所有的缩写都要使用`<abbr>`标记。但是其在下面一些场景很有帮助：

- 当你想为缩写在文档流外提供一段扩展或定义的时候，为 `<abbr>` 设置一个合适的[`title`](/zh-CN/docs/Web/HTML/Global_attributes#title)。
- 在定义一个读者可能不太熟悉的缩写时，使用 `<abbr>` 和`title`属性或内联的文本来表现这个术语。
- 当文本中出现需要进行语义上的标注的缩写词时，`<abbr>`元素可用于依次将其作用样式和脚本。
- 可以将 `<abbr>` 与 {{HTMLElement("dfn")}} 配合使用来建立缩写或首字母缩略词的定义。请参阅下面的示例 [定义一个缩写](#定义一个缩写)。

### 语法注意事项

在有 [单复数](https://zh.wikipedia.org/wiki/单复数) 的语言中（即物体数量会影响句子语法的语言）， `<abbr>` 元素和其中的 `title` 属性应当单复数一致。这在阿拉伯语这样超过二数的语言中非常重要，在英语中也有一定的影响。

## 默认样式

虽然完全为了网站制作者的方便，所有的浏览器都默认把这个元素显示为行内元素 ({{cssxref('display')}}`: inline`) ，但是默认样式在不同浏览器中存在差别：

- 一些浏览器，比如 IE，对它的添加的样式和{{HTMLElement("span")}} 元素的样式完全相同。
- Opera、Firefox 和其他一些浏览器给这个元素的内容添加一条点状下划线。
- 一些浏览器不仅添加点状下划线，而且还把元素的内容添加小写大写字母的样式。若要避免这种样式，在 CSS 中添加 {{cssxref('font-variant')}}`: none` 。

## 示例

### 创建语义化的缩写

想要创建不含解释或描述性的缩写，就直接用`<abbr>`不添加任何属性。请看下面的例子。

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### 结果

{{EmbedLiveSample("创建语义化的缩写")}}

### 缩写样式

你可以像这个简单的例子一样，用 CSS 来为缩写做一个样式。

#### HTML

```html
<p>Using <abbr>CSS</abbr>, you can style your abbreviations!</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### 结果

{{EmbedLiveSample("缩写样式")}}

### 提供扩展

添加一个 [`title`](/zh-CN/docs/Web/HTML/Global_attributes#title) 属性，为缩写提供定义或拓展。

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### 结果

{{EmbedLiveSample("提供扩展")}}

### 定义一个缩写

`<abbr>` 与 {{HTMLElement("dfn")}} 联合使用可以定义一个更加正式的缩写，如下：

#### HTML

```html
<p>
  <dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr> </dfn> is a
  markup language used to create the semantics and structure of a web page.
</p>

<p>
  A <dfn id="spec">Specification</dfn> (<abbr title="Specification">spec</abbr>)
  is a document that outlines in detail how a technology or API is intended to
  function and how it is accessed.
</p>
```

#### 结果

{{EmbedLiveSample("定义一个缩写", 600, 120)}}

可以在 _[How to mark abbreviations and make them understandable](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#Abbreviations)_ 中浏览更多深层次的实例。

## 无障碍问题

在缩略词第一次出现在页面的时候，将它书写完整对帮助人们理解很有用处的，特别是内容是技术或者工业术语

#### Example

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

这对于不熟悉内容中讨论的术语或概念的人，对语言不熟悉的人以及具有认知问题的人特别有用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [高级文字格式 - 使用 `<abbr>` 元素](/zh-CN/docs/learn/HTML/Introduction_to_HTML/Advanced_text_formatting#%E7%BC%A9%E7%95%A5%E8%AF%AD)
- 其他传达文本级语义的元素：{{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("b")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- 已被弃用的 {{HTMLElement("acronym")}} 元素，原被用于展示首字母缩写。其作用被归入了 `<abbr>` 的作用中。
