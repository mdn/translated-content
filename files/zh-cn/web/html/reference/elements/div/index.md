---
title: <div>：内容划分元素
slug: Web/HTML/Reference/Elements/div
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

**`<div>`** [HTML](/zh-CN/docs/Web/HTML) 元素是流式内容的通用容器。它对内容或布局没有影响。除非以某种方式使用 {{glossary("CSS")}} 对其进行样式设置（例如，直接应用样式，或者对其父元素应用某种布局模型，如[弹性盒子](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)），否则它对内容或布局没有影响。

{{InteractiveExample("HTML Demo: &lt;div&gt;", "tabbed-standard")}}

```html interactive-example
<div class="warning">
  <img
    src="/shared-assets/images/examples/leopard.jpg"
    alt="An intimidating leopard." />
  <p>Beware of the leopard</p>
</div>
```

```css interactive-example
.warning {
  border: 10px ridge #f00;
  background-color: #ff0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.warning img {
  width: 100%;
}

.warning p {
  font: small-caps bold 1.2rem sans-serif;
  text-align: center;
}
```

作为一个“纯粹的”容器，`<div>` 元素本身并不表示任何内容。相反，它用于组织内容，以便通过使用 [`class`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#class) 或 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#id) 属性轻松应用样式，标记文档中以不同语言编写的部分（使用 [`lang`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#lang) 属性）等等。

## 属性

这个元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

> [!NOTE]
> 请勿再使用已过时的 `align` 属性；相反，你应该使用 CSS 属性或技术，例如 [CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)或 [CSS 弹性盒子](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Flexbox)来对齐和定位页面上的 `<div>` 元素。

## 使用说明

- 只有当没有其他合适的语义元素（例如 {{HTMLElement("article")}} 或 {{HTMLElement("nav")}}）时，才应使用 `<div>` 元素。

## 示例

### 一个简单示例

```html
<div>
  <p>这里可以是任何内容。例如 &lt;p&gt;、&lt;table&gt;。你说什么就是什么！</p>
</div>
```

#### 结果

{{EmbedLiveSample("一个简单示例", 650, 60)}}

### 一个样式化示例

此示例通过使用 CSS 将样式应用于 `<div>` 来创建一个阴影盒子。注意在 `<div>` 上使用 [`class`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#class) 属性将名为 `"shadowbox"` 的样式应用于元素中。

#### HTML

```html
<div class="shadowbox">
  <p>这是一张非常有趣的说明，陈列在一个可爱的影盒里。</p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

#### 结果

{{EmbedLiveSample("一个样式化示例", 650, 120)}}

## 无障碍考虑

`<div>` 元素具有[一个隐含角色 `generic`](https://www.w3.org/TR/wai-aria-1.2/#generic)，而不是 none。这可能会影响某些 ARIA 组合声明，这些声明希望具有特定角色的直接后代元素能正常运行。

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
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#f流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#可感知内容">可感知内容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >。<br />或者（在 {{glossary("WHATWG")}} HTML 中）：如果父级是 {{HTMLElement("dl")}} 元素：一个或多个 {{HTMLElement("dt")}} 元素，后面跟一个或多个 {{HTMLElement("dd")}} 元素，可选择与 {{HTMLElement("script")}} 和 {{HTMLElement("template")}} 元素混合使用。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >的元素。<br />或者（在 WHATWG HTML 中）：{{HTMLElement("dl")}} 元素。
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
      <td>{{domxref("HTMLDivElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 语义分区元素：{{HTMLElement("section")}}、{{HTMLElement("article")}}、{{HTMLElement("nav")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}
- {{HTMLElement("span")}} 元素用于对短语内容进行样式设置
