---
title: <body>：文档主体元素
slug: Web/HTML/Element/body
---

{{HTMLRef}}

**HTML `body` 元素**表示文档的内容。{{domxref("document.body")}} 属性提供了可以轻松访问文档的 body 元素的脚本。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a>
      </th>
      <td>
        <a
          href="/zh-CN/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_roots"
          >Sectioning root</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag may be omitted if the first thing inside it is not a space
        character, comment, {{HTMLElement("script")}} element or
        {{HTMLElement("style")}} element. The end tag may be omitted if
        the <code>&#x3C;body></code> element has contents or has a start tag,
        and is not immediately followed by a comment.
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        它必须是
        <a href="/zh-CN/docs/Web/HTML/Element/html">html</a> 元素的直接子元素。
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>
        {{domxref("HTMLBodyElement")}}
        <ul>
          <li>
            <code>body</code> 元素接口 {{domxref("HTMLBodyElement")}}
            。
          </li>
          <li>
            你可以通过 {{domxref("document.body")}} 属性访问
            <code>body</code> 元素。
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 属性

此元素包含 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes) 。

- {{htmlattrdef("alink")}} {{Deprecated_Inline}}
  - : 超链接选中之后的文本颜色。_此方法不符合规范，请使用 CSS 的 {{cssxref("color")}} 属性和 {{cssxref(":active")}} 伪类替代。_
- {{htmlattrdef("background")}} {{Deprecated_Inline}}
  - : 将 URI 所指向的图片作为背景。此方法不符合规范，请*使用* _CSS 的 {{cssxref("background")}} 属性替代。_
- {{htmlattrdef("bgcolor")}} {{Deprecated_Inline}}
  - : 文档的背景颜色。此方法不符合规范，请使用 _CSS 的 {{cssxref("background-color")}} 属性替代。_
- {{htmlattrdef("bottommargin")}} {{Deprecated_Inline}}
  - : `body` 的底外边距。此方法不符合规范，请使用 _CSS 的 {{cssxref("margin-bottom")}} 属性替代。_
- {{htmlattrdef("leftmargin")}} {{Deprecated_Inline}}
  - : `body` 的左外边距。此方法不符合规范，请使用 _CSS 的 {{cssxref("margin-left")}} 属性替代。_
- {{htmlattrdef("link")}} {{Deprecated_Inline}}
  - : 未访问过的超链接文本颜色。此方法不符合规范，请使用 _CSS 的 {{cssxref("color")}} 属性和 {{cssxref(":link")}} 伪类替代。_
- {{htmlattrdef("onafterprint")}}
  - : 用户完成文档打印之后调用的函数。
- {{htmlattrdef("onbeforeprint")}}
  - : 用户要求打印文档之前调用的函数。
- {{htmlattrdef("onbeforeunload")}}
  - : 文档即将被关闭之前调用的函数。
- {{htmlattrdef("onblur")}}
  - : 文档失去焦点时调用的函数。
- {{htmlattrdef("onerror")}}
  - : 文档加载失败时调用的函数。
- {{htmlattrdef("onfocus")}}
  - : 文档获得焦点时调用的函数。
- {{htmlattrdef("onhashchange")}}
  - : 文档当前地址的片段标识部分（以 (`'#'`) 开始的部分）发生改变时调用的函数。
- {{htmlattrdef("onlanguagechange")}} {{experimental_inline}}
  - : 用户选择的语言发生改变时调用的函数。
- {{htmlattrdef("onload")}}
  - : 文档完成加载时调用的函数。
- {{htmlattrdef("onmessage")}}
  - : 文档接收到消息时调用的函数。
- {{htmlattrdef("onoffline")}}
  - : 网络连接失败时调用的函数。
- {{htmlattrdef("ononline")}}
  - : 网络连接恢复时调用的函数。
- {{htmlattrdef("onpopstate")}}
  - : 用户回退历史记录时调用的函数。
- {{htmlattrdef("onredo")}}
  - : 用户重做操作时调用的函数。
- {{htmlattrdef("onresize")}}
  - : 文档尺寸发生改变时调用的函数。
- {{htmlattrdef("onstorage")}}
  - : 存储内容（`localStorage` / `sessionStorage`）发生改变时调用的函数。
- {{htmlattrdef("onundo")}}
  - : 用户撤销操作时调用的函数。
- {{htmlattrdef("onunload")}}
  - : 文档关闭时调用的函数。
- {{htmlattrdef("rightmargin")}} {{Deprecated_Inline}}
  - : `body` 的右外边距。此方法不符合规范，请使用 _CSS 的 {{cssxref("margin-right")}} 属性替代。_
- {{htmlattrdef("text")}} {{Deprecated_Inline}}
  - : 文本颜色。此方法不符合规范，请使用 _CSS 的 {{cssxref("color")}} 属性替代。_
- {{htmlattrdef("topmargin")}} {{Deprecated_Inline}}
  - : `body` 的上外边距。此方法不符合规范，请使用 _CSS 的 {{cssxref("margin-top")}} 属性替代。_
- {{htmlattrdef("vlink")}} {{Deprecated_Inline}}
  - : 访问过的超链接的文本颜色。此方法不符合规范，请使用 _CSS {{cssxref("color")}} 属性和 {{cssxref(":visited")}} 伪类替代。_

## 例子

```html
<html>
  <head>
    <title>Document title</title>
  </head>
  <body>
    <p>This is a paragraph</p>
  </body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
