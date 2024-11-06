---
title: <p>：段落元素
slug: Web/HTML/Element/p
l10n:
  sourceCommit: 736fa0e485243ef1f07395811a9bf397c6509316
---

{{HTMLSidebar}}

**`<p>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示文本的一个段落。在视觉媒体中，段落通常表现为用空行和/或首行缩进与相邻段落分隔的文本块，但 HTML 段落可以是相关内容的任何结构分组，如图像或表格字段。

段落是[块级元素](/zh-CN/docs/Glossary/Block-level_content)，如果在关闭的 `</p>` 标签之前解析了另一个块级元素，则该标签将自动关闭。请参阅下面的“标签省略”。

{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}

## 属性

这个元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

> **备注：** `<p>` 标签的 `align` 属性已被弃用，请不要使用。

## 示例

### HTML

```html
<p>这是第一个段落。这是第一个段落。这是第一个段落。这是第一个段落。</p>
<p>这是第二个段落。这是第二个段落。这是第二个段落。这是第二个段落。</p>
```

### 结果

{{EmbedLiveSample('示例')}}

## 为段落添加样式

默认情况下，浏览器会用一个空行来分隔段落。其他分隔方法，如首行缩进，可以通过 {{glossary("CSS")}} 来实现：

### HTML

```html
<p>
  用空行分隔段落最便于读者扫描，但也可以通过缩进首行来分隔段落。这样做通常是为了减少所占空间，例如节省印刷用纸。
</p>

<p>
  学校试卷和草稿等需要编辑的写作，会同时使用空行和缩进进行分隔。在完成的作品中，将两者结合起来会被认为是多余和业余的。
</p>

<p>
  在非常古老的文字中，段落之间用一种特殊的字符：¶（称为<i>段落符号</i>）分隔。如今，这个符号太密集了，难以阅读。
</p>

<p>
  究竟有多难阅读？自己试一下：
  <button data-toggle-text="换回去！">使用段落符号分隔段落</button>
</p>
```

### CSS

```css
p {
  margin: 0;
  text-indent: 3ch;
}

p.pilcrow {
  text-indent: 0;
  display: inline;
}
p.pilcrow + p.pilcrow::before {
  content: " ¶ ";
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", (event) => {
  document.querySelectorAll("p").forEach((paragraph) => {
    paragraph.classList.toggle("pilcrow");
  });

  [event.target.innerText, event.target.dataset.toggleText] = [
    event.target.dataset.toggleText,
    event.target.innerText,
  ];
});
```

### 结果

{{EmbedLiveSample('为段落添加样式')}}

## 无障碍考虑

将内容分成段落有助于使页面更易于访问。屏幕阅读器和其他辅助技术提供的快捷方式可以让用户跳到下一个或上一个段落，让他们可以略读内容，就像留白可以让视觉用户跳来跳去一样。

使用空的 `<p>` 元素在段落之间添加空格，对于使用读屏技术浏览的人来说是有问题的。屏幕阅读器可能会显示段落的存在，但不会显示其中包含的任何内容——因为没有内容。这会让使用屏幕阅读器的人感到困惑和沮丧。

如果需要额外的空间，可以使用 {{glossary("CSS")}} 属性，如 {{cssxref("margin")}} 来创建效果：

```css
p {
  margin-bottom: 2em; /* 增加段落之后的空白 */
}
```

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        开始标签是必要的。如果 {{HTMLElement("p")}} 元素后面紧跟 {{HTMLElement("address")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("blockquote")}}、{{HTMLElement("div")}}、{{HTMLElement("dl")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("footer")}}、{{HTMLElement("form")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("header")}}、{{HTMLElement("hr")}}、{{HTMLElement("menu")}}、{{HTMLElement("nav")}}、{{HTMLElement("ol")}}、{{HTMLElement("pre")}}、{{HTMLElement("section")}}、{{HTMLElement("table")}}、{{HTMLElement("ul")}} 或其他 {{HTMLElement("p")}} 元素；或者父元素中已没有内容，且父元素不是 {{HTMLElement("a")}}、{{HTMLElement("audio")}}、{{HTMLElement("del")}}、{{HTMLElement("ins")}}、{{HTMLElement("map")}}、{{HTMLElement("noscript")}} 或 {{HTMLElement("video")}} 元素，也不是独立自定义元素；则可以省略结束标签。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles"
          >paragraph</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任意</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLParagraphElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
