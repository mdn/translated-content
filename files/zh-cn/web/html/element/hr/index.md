---
title: <hr>：主题分割（水平分割线）元素
slug: Web/HTML/Element/hr
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<hr>`** 元素表示段落级元素之间的主题转换（例如，一个故事中的场景的改变，或一个章节的主题的改变）。

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

在 HTML 的早期版本中，它是一个水平线。现在它仍能在可视化浏览器中表现为水平线，但它目前被定义为是语义上而非表现层面上的术语。所以如果想画一条水平线，请使用适当的 CSS 样式来实现。

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 设置页面上分割线的对齐方式。如果没有指定任何值，默认值为 `left`。
- `color` {{Non-standard_inline}} {{Non-standard_Inline}}
  - : 使用颜色名或十六进制设置分割线的颜色。
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 令分割线不包含阴影。
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 设置分割线高度的像素值。
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 使用像素或者百分比设置分割线的宽度。

## 示例

### HTML

```html
<p>这是文本的第一段。这是文本的第一段。这是文本的第一段。这是文本的第一段。</p>

<hr />

<p>这是文本的第二段。这是文本的第二段。这是文本的第二段。这是文本的第二段。</p>
```

### 结果

{{EmbedLiveSample("示例")}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
          >流式内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>无，是一个{{Glossary("void element", "空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>必须有开始标签，不能有结束标签。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        所有接受<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> 或 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement('p')}}
