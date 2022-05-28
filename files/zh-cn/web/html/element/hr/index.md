---
title: <hr>
slug: Web/HTML/Element/hr
tags:
  - Element
  - HTML
  - HTML grouping content
  - Reference
  - 元素
  - 参考
translation_of: Web/HTML/Element/hr
---

{{HTMLRef}}

**HTML `<hr>`  元素**表示段落级元素之间的主题转换（例如，一个故事中的场景的改变，或一个章节的主题的改变）。

在 HTML 的早期版本中，它是一个水平线。现在它仍能在可视化浏览器中表现为水平线，但目前被定义为语义上的，而不是表现层面上。所以如果想画一条横线，请使用适当的 css 样式来修饰。

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

> **备注：** 要更改 `<hr>` 与段落之间的间隙或样式，请使用 [CSS](/zh-CN/docs/CSS)。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式元素（flow_content）"
          >流式元素</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>无，是一个{{Glossary("empty element", "空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>必须有开始标签，不能有结束标签。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        所有接受<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式元素（flow_content）"
          >流式元素</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>{{ARIARole("separator")}}</td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        {{ARIARole("presentation")}} 或 {{ARIARole("none")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- {{htmlattrdef("align")}} {{deprecated_inline}}
  - : 设置对齐方式。如果没有值，默认值为 `left`。
- {{htmlattrdef("color")}} {{Non-standard_inline}}
  - : 使用颜色名或十六进制设置颜色。
- {{htmlattrdef("noshade")}} {{deprecated_inline}}
  - : 去除阴影。
- {{htmlattrdef("size")}} {{deprecated_inline}}
  - : 使用像素设置高度。
- {{htmlattrdef("width")}} {{deprecated_inline}}
  - : 使用像素或者百分比设置宽度。

## 示例

### HTML

```html
<p>
  This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.
</p>

<hr>

<p>
  This is the second paragraph of text.
  This is the second paragraph of text.
  This is the second paragraph of text.
  This is the second paragraph of text.
</p>
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement('p')}}
