---
title: <code>：行内代码元素
slug: Web/HTML/Element/code
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<code>`** 元素为其显示的内容添加用以表明其中的文本是一段简短的计算机代码的样式。默认情况下，内容文本使用{{Glossary("user agent", "用户代理")}}默认的等宽字体显示。

{{EmbedInteractiveExample("pages/tabbed/code.html", "tabbed-shorter")}}

## 属性

此元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 示例

这是一段包含 `<code>` 的文字：

```html
<p>
  函数
  <code>selectAll()</code>
  将高亮显示输入字段中的所有文本，以便用户可以复制或删除文本。
</p>
```

### 结果

{{EmbedLiveSample("示例", 640, 70)}}

## 备注

要表示多行代码，可在 {{HTMLElement("pre")}} 元素中封装 `<code>` 元素。`<code>` 元素本身只能表示一段代码短语或一行代码。

可为 `code` 选择器定义 CSS 规则，以覆盖浏览器的默认字体。用户设置的首选项可能优先于指定的 CSS。

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
        >、<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
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
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles#包含_html_等价形式的结构角色">code</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>
        {{domxref("HTMLElement")}}，在 Gecko 1.9.2（包括 Firefox 4）版本之前，Firefox 为该元素实现了 {{domxref("HTMLSpanElement")}} 接口。
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("samp")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("var")}}
- {{HTMLElement("pre")}}
