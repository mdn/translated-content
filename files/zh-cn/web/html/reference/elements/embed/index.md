---
title: "`<embed>` HTML 嵌入外部内容元素"
short-title: <embed>
slug: Web/HTML/Reference/Elements/embed
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

[HTML](/zh-CN/docs/Web/HTML) 元素 **`<embed>`** 会在文档的指定位置嵌入外部内容。该内容由外部应用程序或其他交互内容来源（例如浏览器插件）提供。

{{InteractiveExample("HTML 演示：&lt;embed&gt;", "tabbed-standard")}}

```html interactive-example
<embed
  type="image/jpeg"
  src="/shared-assets/images/examples/flowers.jpg"
  width="250"
  height="200" />
```

> [!NOTE]
> 本文仅记录作为 [HTML 动态标准](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element)一部分所定义的元素，不涉及该元素早期的非标准化实现。

请注意，大多数现代浏览器已弃用并移除了对浏览器插件的支持，因此若希望站点能在普通用户的浏览器中正常使用，通常不宜依赖 `<embed>`。

## 属性

此元素的属性包括[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `height`
  - ：资源的显示高度，以 [CSS 像素](https://drafts.csswg.org/css-values/#px)为单位。必须为绝对值；*不允许*使用百分比。
- `src`
  - ：所嵌入资源的 URL。
- `type`
  - ：用于选择要实例化的插件的 {{glossary("MIME type", "MIME 类型")}}。
- `width`
  - ：资源的显示宽度，以 [CSS 像素](https://drafts.csswg.org/css-values/#px)为单位。必须为绝对值；*不允许*使用百分比。

## 使用说明

可以使用 {{cssxref("object-position")}} 属性调整嵌入对象在元素框架内的定位。

> [!NOTE]
> {{cssxref("object-fit")}} 属性对 `<embed>` 元素无效。

## 无障碍

在 `embed` 元素上使用 [`title` 属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes/title)为其内容添加标签，以便使用屏幕阅读器等辅助技术浏览的人能够理解其中包含的内容。`title` 的值应简洁描述所嵌入的内容。若没有标题，他们可能无法判断嵌入内容是什么。这种上下文切换可能令人困惑且耗时，尤其是在 `embed` 元素包含视频或音频等交互内容时。

## 示例

```html
<embed
  type="video/quicktime"
  src="movie.mov"
  width="640"
  height="480"
  title="我的视频标题" />
```

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容类别</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#嵌入内容"
          >嵌入内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#交互内容"
          >交互内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#可感知内容"
          >可感知内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>无；这是一个{{Glossary("void element", "空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>必须有开始标签，且不能有结束标签。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>接受嵌入内容的任何元素。</td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >无对应角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLEmbedElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 用于嵌入各类内容的其他元素包括 {{HTMLElement("audio")}}、{{HTMLElement("canvas")}}、{{HTMLElement("iframe")}}、{{HTMLElement("img")}}、{{MathMLElement("math")}}、{{HTMLElement("object")}}、{{SVGElement("svg")}} 和 {{HTMLElement("video")}}。
- 在框架内定位与调整嵌入内容的尺寸：{{cssxref("object-position")}} 和 {{cssxref("object-fit")}}
