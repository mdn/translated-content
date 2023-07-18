---
title: <html>：HTML 文档/根元素
slug: Web/HTML/Element/html
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<html>`** 元素表示一个 HTML 文档的根（顶级元素），所以它也被称为*根元素*。所有其他元素必须是此元素的后代。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
      <td>无</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>一个 {{HTMLElement("head")}} 元素，后跟一个 {{HTMLElement("body")}} 元素</td>
    </tr>
    <tr>
      <th scope="row">忽略标签</th>
      <td>
        如果 <code>&#x3C;html></code> 元素中的第一个元素不是注释，则可以忽略开始标签。<br>
        如果 <code>&#x3C;html></code> 元素没有紧接着注释，则可以忽略结束标签。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>无。这是文档的根元素。</td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Document_role"
          >document</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>无</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLHtmlElement")}}</td>
     </tr>
  </tbody>
</table>

## 属性

元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `manifest` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 指定一个资源清单的 {{glossary("URI")}}，指示应在本地缓存的资源。
- `version` {{deprecated_inline}}
  - : 指定控制当前文档的 HTML 版本{{glossary("Doctype", "文档类型定义")}}。这个属性已不再需要，因为这在文档类型声明中是多余的版本信息。
- `xmlns`
  - : 指派文档的 {{glossary("XML")}} {{glossary("Namespace", "命名空间")}}。默认的值是`"http://www.w3.org/1999/xhtml"`。这在由 XML {{glossary("parser", "解析器")}}解析的文档中是必需的，而在 text/html 文档中是可选的。

## 示例

```html
<!doctype html>
<html lang="zh">
  <head>
    <!-- … -->
  </head>
  <body>
    <!-- … -->
  </body>
</html>
```

## 无障碍考虑

虽然 HTML 并不要求作者指定 `<html>` 元素的开始和结束标记，但作者必须这样做，因为这将允许他们为网页指定 [`lang`](/zh-CN/docs/Web/HTML/Global_attributes#lang)。根据 {{RFC(5646, "识别语言的标签（也称为 BCP 47）")}}，在 `<html>` 元素上提供一个带有有效语言标记的 `lang` 属性，将有助于屏幕阅读技术确定要发布的适当语言。标识语言标签应描述页面大部分内容所使用的语言。如果没有它，屏幕阅读器通常会默认使用操作系统设置的语言，这可能会导致发音错误。

在 `<html>` 元素中包含一个有效的 `lang` 声明，还可以确保页面的 {{HTMLElement("head")}} 中包含的重要元数据，如页面的 {{HTMLElement("title")}}，也会被正确地声明。

- [MDN | 理解 WCAG，指引 3.1 的解释](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [理解成功准则 3.1.1 | W3C 理解 WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- MathML 顶级元素：{{MathMLElement("math")}}
- SVG 顶级元素：{{SVGElement("svg")}}
