---
title: <small>：备注元素
slug: Web/HTML/Reference/Elements/small
l10n:
  sourceCommit: 533dc583856cfc95c1b9129335cd24793eac1093
---

**`<small>`** [HTML](/zh-CN/docs/Web/HTML) 元素代表旁注和小字印刷（如版权和法律文本），与其样式的呈现方式无关。默认情况下，它以比其中的文本小一号的字体大小呈现，例如从 `small` 变为 `x-small`。

{{InteractiveExample("HTML Demo: &lt;small&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  MDN Web Docs is a learning platform for Web technologies and the software that
  powers the Web.
</p>

<hr />

<p>
  <small
    >The content is licensed under a Creative Commons Attribution-ShareAlike 2.5
    Generic License.</small
  >
</p>
```

```css interactive-example
small {
  font-size: 0.7em;
}
```

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 示例

### 基本用法

```html
<p>
  这是第一句。
  <small>整个句子采用了较小的字体显示。</small>
</p>
```

#### 结果

{{EmbedLiveSample("基本用法")}}

### CSS 替代

```html
<p>
  这是第一句。
  <span style="font-size:0.8em">整个句子采用了较小的字体显示。</span>
</p>
```

#### 结果

{{EmbedLiveSample("CSS_替代")}}

## 备注

尽管 `<small>` 元素像 {{htmlelement("b")}} 和 {{htmlelement("i")}} 元素一样，可能被认为违反了结构与表现分离的原则，但这三个元素在 HTML 中都是有效的。建议作者根据实际情况使用 `<small>` 或者 CSS 来做判断。

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
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >
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
        >或<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("b")}}
- {{HTMLElement("sub")}} 和 {{HTMLElement("sup")}}
- {{HTMLElement("font")}}
- {{HTMLElement("style")}}
- HTML 4.01 规范：[字体样式](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
