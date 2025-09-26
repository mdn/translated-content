---
title: <abbr>：缩写元素
slug: Web/HTML/Reference/Elements/abbr
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`<abbr>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示一个缩写词或首字母缩略词。

在包含缩写或首字母缩写词时，应在纯文本中提供该术语的扩展形式。同时使用 `<abbr>` 元素来标记缩写。这可以告知用户缩写或首字母缩略词的含义。

可选的 [`title`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#title) 属性可以在没有完整扩展情况下为缩写或首字母缩略词提供扩展。这为用户代理提供了如何宣告/显示内容的提示，并告知所有用户该缩写的含义。如果存在 `title` 属性则必须包含此完整描述且无其他内容。

{{InteractiveExample("HTML Demo: &lt;abbr&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  你可以使用 <abbr>CSS</abbr>（层叠样式表）来为
  <abbr>HTML</abbr>（超文本标记语言）添加样式。通过样式表，你可以将
  <abbr>CSS</abbr> 表现层与
  <abbr>HTML</abbr> 内容层分离，这种设计模式称为“关注点分离”。
</p>
```

```css interactive-example
abbr {
  font-style: italic;
  color: chocolate;
}
```

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。在 `<abbr>` 元素中使用时，[`title`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/title) 属性具有特定的语义含义；它*必须*包含该缩写的完整可读描述或扩展描述。此文本通常会在鼠标光标悬停在元素上时由浏览器通过提示框展示出来。

你使用的每个 `<abbr>` 元素都是相互独立的；为一个元素提供 `title` 属性并不会自动将相同地扩展文本关联到具有相同内容文本的其他元素上。

## 使用说明

### 典型用例

确实并非要求所有缩写都必须使用 `<abbr>` 进行标记。然而，在某些情况下，这样做是有帮助的：

- 当在文档内容中使用了缩写并且希望在正文流程之外提供一个扩展或定义时，应当使用带有适当 [`title`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/title) 属性的 `<abbr>` 标签。
- 为了定义读者可能不熟悉的缩写，请使用 `<abbr>` 并提供内联文本来提供定义。仅当内联扩展或定义不可用时才包含 `title` 属性。
- 当文本中出现的缩写需要从语义层面上加以标注时，`<abbr>` 元素非常有用。这可以用于样式或脚本目的。
- 你可以将 `<abbr>` 和 {{HTMLElement("dfn")}} 元素来定义术语其对应的缩写或首字母缩略词。请参阅下面的[定义缩略语](#定义缩略语)。

### 语法注意事项

在具有[数（语法）](<https://zh.wikipedia.org/wiki/数_(语法)>)的语言（即数词会影响句子语法的语言）中，应在 `title` 属性中使用与 `<abbr>` 元素内部相同的语法数。这一点在诸如阿拉伯语等拥有超过两种数的语言中尤为重要，但也适用于英语。

## 默认样式

此元素存在的目的纯粹是为了方便作者，并且默认情况下都会将其以行向（{{cssxref("display", "display: inline")}}）显示，然而，各个浏览器对其的默认样式可能存在差异：

某些浏览器会在该元素内容下添加虚线下划线，另一些浏览器会将内容转换为小型大写字母，并添加虚线下划线。还有些浏览器则可能仅将其视为普通的 {{HTMLElement("span")}} 元素对待，不作特殊样式处理。可以通过 CSS 属性 {{cssxref('text-decoration')}} 和 {{cssxref('font-variant')}} 来控制它的样式。

## 无障碍

在页面中首次使用某个首字母缩略词或缩写时将其完整拼写出来，有助于读者理解，特别是在涉及技术性或行业术语的内容中。

只有当正文中无法展开缩略词或首字母缩略词时，才包含 `title` 属性。如果声称的单词或短语与屏幕上显示的内容存在差异，特别是当涉及到读者可能特别不熟悉的行业术语，可能会造成混淆。

```html
<p>JavaScript 对象表示法（<abbr>JSON</abbr>）是一种轻量级的数据交换格式。</p>
```

{{EmbedLiveSample("无障碍")}}

这对于不熟悉文中的术语或概念的人、初学者以及有认知障碍的人来说尤其有用。

## 示例

### 语义化标记缩写

要标记缩写而不提供扩展或描述，请使用不带任何属性的 `<abbr>`，如下所示。

#### HTML

```html
<p>使用 <abbr>HTML</abbr> 既有趣又简单！</p>
```

#### 结果

{{EmbedLiveSample("语义化标记缩写")}}

### 缩写样式

你可以使用 CSS 为缩写设置自定义样式，如下所示。

#### HTML

```html
<p>利用 <abbr>CSS</abbr>，你可以自定义缩写样式！</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### 结果

{{EmbedLiveSample("缩写样式")}}

### 提供扩展解释

你可以添加一个 [`title`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/title) 属性来为缩写或首字母缩略词提供一个扩展解释或定义。

#### HTML

```html
<p>你可以用 <abbr title="邮政特快专递服务">EMS</abbr> 把这个包裹寄给我。</p>
```

#### 结果

{{EmbedLiveSample("提供扩展解释")}}

### 定义缩略语

你可以在 {{HTMLElement("dfn")}} 元素中配合使用 `<abbr>` 元素，以更正式地定义缩写，如下所示。

#### HTML

```html
<p>
  <dfn id="html"><abbr title="超文本标记语言">HTML</abbr></dfn>
  是一种用于创建网页的语义和结构的标记语言。
</p>

<p>
  <dfn id="spec">规范</dfn>（<abbr>spec</abbr>）是一份详细说明某项技术或 API
  的预期功能和访问方式的文档。
</p>
```

#### 结果

{{EmbedLiveSample("定义缩略语", 600, 120)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >、
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
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

- [使用 `<abbr>` 元素](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#缩略语)
