---
title: <body>：文档主体元素
slug: Web/HTML/Reference/Elements/body
l10n:
  sourceCommit: 8fbec5312b62d720f6ff6936024a09c859f2f0f1
---

**`<body>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示 HTML 文档的内容。文档中只能有一个 `<body>` 元素。

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)、事件属性和弃用属性：

### 事件属性

> [!NOTE]
> 以下每个事件属性名称都链接到其对应的 {{domxref("Window")}} 接口事件。你可以使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 来监听这些事件，而不是将 `oneventname` 属性添加到 `<body>` 元素。

- [`onafterprint`](/zh-CN/docs/Web/API/Window/afterprint_event)
  - : 当用户打印文档后调用的函数。
- [`onbeforeprint`](/zh-CN/docs/Web/API/Window/beforeprint_event)
  - : 当用户要求打印文档时调用的函数。
- [`onbeforeunload`](/zh-CN/docs/Web/API/Window/beforeunload_event)
  - : 当文档即将卸载时调用的函数。
- [`onblur`](/zh-CN/docs/Web/API/Window/blur_event)
  - : 当文档失去焦点时调用的函数。
- [`onerror`](/zh-CN/docs/Web/API/Window/error_event)
  - : 当文档无法正常加载时调用的函数。
- [`onfocus`](/zh-CN/docs/Web/API/Window/focus_event)
  - : 当文档收到焦点时调用的函数。
- [`onhashchange`](/zh-CN/docs/Web/API/Window/hashchange_event)
  - : 当文档当前地址的片段标识符部分（以 `'#'` 字符开头）发生变化时调用的函数。
- [`onlanguagechange`](/zh-CN/docs/Web/API/Window/languagechange_event)
  - : 当首选语言发生变化时调用的函数。
- [`onload`](/zh-CN/docs/Web/API/Window/load_event)
  - : 当文档加载完成后调用的函数。
- [`onmessage`](/zh-CN/docs/Web/API/Window/message_event)
  - : 当文档收到消息时调用的函数。
- [`onmessageerror`](/zh-CN/docs/Web/API/Window/messageerror_event)
  - : 当文档收到无法反序列化的消息时调用的函数。
- [`onoffline`](/zh-CN/docs/Web/API/Window/offline_event)
  - : 当网络通信失败时调用的函数。
- [`ononline`](/zh-CN/docs/Web/API/Window/online_event)
  - : 当网络通信恢复后调用的函数。
- [`onpageswap`](/zh-CN/docs/Web/API/Window/pageswap_event)
  - : 当你浏览文档时，上一个文档即将卸载时调用的函数。
- [`onpagehide`](/zh-CN/docs/Web/API/Window/pagehide_event)
  - : 当浏览器在显示会话历史记录中的另一个页面时隐藏当前页面时调用的函数。
- [`onpagereveal`](/zh-CN/docs/Web/API/Window/pagereveal_event)
  - : 当文档首次渲染时调用的函数，无论是从网络加载新文档还是激活文档。
- [`onpageshow`](/zh-CN/docs/Web/API/Window/pageshow_event)
  - : 当浏览器因导航而显示窗口文档时调用的函数。
- [`onpopstate`](/zh-CN/docs/Web/API/Window/popstate_event)
  - : 当用户浏览会话历史时调用的函数。
- [`onresize`](/zh-CN/docs/Web/API/Window/resize_event)
  - : 当文档大小调整时调用的函数。
- [`onrejectionhandled`](/zh-CN/docs/Web/API/Window/rejectionhandled_event)
  - : 当 JavaScript {{jsxref("Promise")}} 被延迟处理时调用的函数。
- [`onstorage`](/zh-CN/docs/Web/API/Window/storage_event)
  - : 当存储区域发生变化时调用的函数。
- [`onunhandledrejection`](/zh-CN/docs/Web/API/Window/unhandledrejection_event)
  - : 当一个没有拒绝处理器的 JavaScript {{jsxref("Promise")}} 被拒绝时调用的函数。
- [`onunload`](/zh-CN/docs/Web/API/Window/unload_event)
  - : 当文档即将被卸载时调用的函数。

### 已弃用的属性

> [!WARNING]
> 请勿使用这些已弃用的属性；应选择每个弃用属性所列的 CSS 替代方案。

- `alink` {{deprecated_inline}}
  - : 选中时超链接文本的颜色。请结合使用 CSS {{cssxref("color")}} 属性，配合 {{cssxref(":active")}} 和 {{cssxref(":focus")}} 伪类。
- `background` {{deprecated_inline}}
  - : 用作背景的图片的 URI。请改用 CSS 的 {{cssxref("background-image")}} 属性。
- `bgcolor` {{deprecated_inline}}
  - : 文档的背景颜色。请改用 CSS 的 {{cssxref("background-color")}} 属性。
- `bottommargin` {{deprecated_inline}}
  - : body 底部的外边距。请改用 CSS 的 {{cssxref("margin-bottom")}} 属性（或逻辑属性 {{cssxref("margin-block-end")}}）。
- `leftmargin` {{deprecated_inline}}
  - : body 左侧的外边距。请改用 CSS 的 {{cssxref("margin-left")}} 属性（或逻辑属性 {{cssxref("margin-inline-start")}}）。
- `link` {{deprecated_inline}}
  - : 未访问超文本链接文本的颜色。请结合使用 CSS {{cssxref("color")}} 属性和 {{cssxref(":link")}} 伪类来代替。
- `rightmargin` {{deprecated_inline}}
  - : body 右侧的外边距。请结合使用 CSS {{cssxref("margin-right")}} 属性（或逻辑属性 {{cssxref("margin-inline-end")}}）。
- `text` {{deprecated_inline}}
  - : 文字的前景色。请改用 CSS 的 {{cssxref("color")}} 属性。
- `topmargin` {{deprecated_inline}}
  - : body 顶部的外边距。请结合使用 CSS {{cssxref("margin-top")}} 属性（或逻辑属性 {{cssxref("margin-block-start")}}）。
- `vlink` {{deprecated_inline}}
  - : 已访问超文本链接文本的颜色。请结合使用 CSS {{cssxref("color")}} 属性和 {{cssxref(":visited")}} 伪类来代替。

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
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
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
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
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
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
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
- [事件处理器（概述）](/zh-CN/docs/Web/API/Document_Object_Model/Events)
