---
title: <body>：文档主体元素
slug: Web/HTML/Element/body
l10n:
  sourceCommit: e3f162d122a38c8dc81a1e733894c5c54d134454
---

{{HTMLSidebar}}

**`<body>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示 HTML 文档的内容。文档中只能有一个 `<body>` 元素。

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `alink` {{deprecated_inline}}
  - : 选中时超链接文本的颜色。**请勿使用此属性！请结合使用 CSS {{cssxref("color")}} 属性和 {{cssxref(":active")}} 伪类来代替。**
- `background` {{deprecated_inline}}
  - : 用作背景的图片的 URI。**请勿使用此属性！请在元素上使用 CSS {{cssxref("background")}} 属性来代替。**
- `bgcolor` {{deprecated_inline}}
  - : 文档的背景颜色。**请勿使用此属性！请在元素上使用 CSS {{cssxref("background-color")}} 属性来代替。**
- `bottommargin` {{deprecated_inline}}
  - : body 底部的外边距。**请勿使用此属性！请在元素上使用 CSS {{cssxref("margin-bottom")}} 属性来代替。**
- `leftmargin` {{deprecated_inline}}
  - : body 左侧的外边距。**请勿使用此属性！请在元素上使用 CSS {{cssxref("margin-left")}} 属性来代替。**
- `link` {{deprecated_inline}}
  - : 未访问超文本链接文本的颜色。**请勿使用此属性！请结合使用 CSS {{cssxref("color")}} 属性和 {{cssxref(":link")}} 伪类来代替。**
- `onafterprint`
  - : 当用户打印文档后调用的函数。
- `onbeforeprint`
  - : 当用户要求打印文档时调用的函数。
- `onbeforeunload`
  - : 当文档即将卸载时调用的函数。
- `onblur`
  - : 当文档失去焦点时调用的函数。
- `onerror`
  - : 当文档无法正常加载时调用的函数。
- `onfocus`
  - : 当文档收到焦点时调用的函数。
- `onhashchange`
  - : 当文档当前地址的片段标识符部分（以 `'#'` 字符开头）发生变化时调用的函数。
- `onlanguagechange`
  - : 当首选语言发生变化时调用的函数。
- `onload`
  - : 当文档加载完成后调用的函数。
- `onmessage`
  - : 当文档收到消息时调用的函数。
- `onoffline`
  - : 当网络通信失败时调用的函数。
- `ononline`
  - : 当网络通信恢复后调用的函数。
- `onpopstate`
  - : 当用户浏览会话历史时调用的函数。
- `onresize`
  - : 当文档大小调整时调用的函数。
- `onstorage`
  - : 当存储区域发生变化时调用的函数。
- `onunload`
  - : 当文档即将被卸载时调用的函数。
- `rightmargin` {{deprecated_inline}}
  - : body 右侧的外边距。**请勿使用此属性！请在元素上使用 CSS {{cssxref("margin-right")}} 属性来代替。**
- `text` {{deprecated_inline}}
  - : 文字的前景色。**请勿使用此属性！请在元素上使用 CSS {{cssxref("color")}} 属性来代替。**
- `topmargin` {{deprecated_inline}}
  - : body 顶部的外边距。**请勿使用此属性！在元素上使用 CSS {{cssxref("margin-top")}} 属性来代替。**
- `vlink` {{deprecated_inline}}
  - : 已访问超文本链接文本的颜色。**请勿使用此属性！请结合使用 CSS {{cssxref("color")}} 属性和 {{cssxref(":visited")}} 伪类来代替。**

## 示例

```html
<html lang="zh-CN">
  <head>
    <title>文档标题</title>
  </head>
  <body>
    <p>
      <code>&lt;body&gt;</code> HTML 元素代表 HTML
      文档的内容。一个文档中只能有一个 <code>&lt;body&gt;</code> 元素。
    </p>
  </body>
</html>
```

### 结果

{{EmbedLiveSample('示例')}}

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
        无。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        如果开始标签内的第一个内容不是空格符、注释、{{HTMLElement("script")}} 元素或 {{HTMLElement("style")}} 元素，则可以省略起始标签。如果 <code>&#x3C;body></code> 元素有内容或有开始标记，且后面没有紧跟注释，则可以省略结束标记。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        它必须是 {{HTMLElement("html")}} 元素的第二个元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>
        {{domxref("HTMLBodyElement")}}
        <ul>
          <li>
            <code>&#x3C;body></code> 元素使用 {{domxref("HTMLBodyElement")}} 接口。
          </li>
          <li>
            你可以通过 {{domxref("document.body")}} 属性访问 <code>&#x3C;body></code> 元素。
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
