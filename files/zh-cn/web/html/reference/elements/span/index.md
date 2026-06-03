---
title: <span>：内容跨越元素
slug: Web/HTML/Reference/Elements/span
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

**`<span>`** [HTML](/zh-CN/docs/Web/HTML) 元素是一个通用的行级容器，本身不具备特殊含义。它可被用于对元素进行编组，以便于添加样式（通过使用 [`class`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#class) 或 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#id) 属性），或共享属性值（例如 [`lang`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#lang) 属性）。该元素仅应在无其他合适语义元素时使用。`<span>` 与 {{HTMLElement("div")}} 元素非常相似，但是 {{HTMLElement("div")}} 是[块级元素](/zh-CN/docs/Glossary/Block-level_content)，而 `<span>` 是一个[行级元素](/zh-CN/docs/Glossary/Inline-level_content)。

{{InteractiveExample("HTML Demo: &lt;span&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Add the <span class="ingredient">basil</span>,
  <span class="ingredient">pine nuts</span> and
  <span class="ingredient">garlic</span> to a blender and blend into a paste.
</p>

<p>
  Gradually add the <span class="ingredient">olive oil</span> while running the
  blender slowly.
</p>
```

```css interactive-example
span.ingredient {
  color: #f00;
}
```

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 示例

### 示例 1

#### HTML

```html
<p><span>一些文本</span></p>
```

#### 结果

{{EmbedLiveSample('示例_1')}}

### 示例 2

#### HTML

```html
<li>
  <span>
    <a href="portfolio.html" target="_blank">查看我的作品集</a>
  </span>
</li>
```

#### CSS

```css
li span {
  background: gold;
}
```

#### 结果

{{EmbedLiveSample('示例_2')}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories">内容分类</a>
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >。
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
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任意</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>
        {{domxref("HTMLSpanElement")}}
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML {{HTMLElement("div")}} 元素
