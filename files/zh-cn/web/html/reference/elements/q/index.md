---
title: "`<q>` HTML 行内引用元素"
short-title: <q>
slug: Web/HTML/Reference/Elements/q
l10n:
  sourceCommit: b0a05c1384211e0eff34e9917c84086eedf9e909
---

**`<q>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示所包含的文本是一段简短的行内引用。大多数现代浏览器会通过在文本两侧添加引号来实现这一点。此元素适用于不需要分段的短引用；长引用请使用 {{HTMLElement("blockquote")}} 元素。

{{InteractiveExample("HTML 演示：&lt;q&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  当戴夫要求 HAL 打开分离舱舱门时，HAL 回答道：
  <q
    cite="https://www.imdb.com/title/tt0062622/quotes/?item=qt0396921&ref_=ext_shr_lnk">
    对不起，戴夫。恐怕我做不到。
  </q>
</p>
```

```css interactive-example
q {
  font-style: italic;
}
```

## 属性

此元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `cite`
  - : 该属性的值是一个 URL，用于指定所引用信息的来源文档或消息。此属性旨在指向解释该引用上下文或出处的信息。

## 示例

```html
<p>
  根据 Mozilla 网站的说法，
  <q cite="https://www.mozilla.org/en-US/about/history/details/"
    >Firefox 1.0 于 2004 年发布，并取得了巨大成功。</q
  >
</p>
```

### 结果

{{EmbedLiveSample("示例")}}

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
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
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
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。
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
      <td>任意</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 用于长引用的 {{HTMLElement("blockquote")}} 元素。
- 用于来源引用的 {{HTMLElement("cite")}} 元素。
