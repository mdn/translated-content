---
title: <bdo>：双向文本覆盖元素
slug: Web/HTML/Reference/Elements/bdo
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

[HTML](/zh-CN/docs/Web/HTML) **`<bdo>`** 元素覆盖了当前文本的方向，使文本以不同的方向渲染出来。

{{InteractiveExample("HTML Demo: &lt;bdo&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Famous seaside songs</h1>

<p>The English song "Oh I do like to be beside the seaside"</p>

<p>
  Looks like this in Hebrew:
  <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  In the computer's memory, this is stored as
  <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```css interactive-example
html {
  font-family: sans-serif;
}

/* stylelint-disable-next-line block-no-empty */
bdo {
}
```

文本的字符是从给定方向的起始点开始绘制的；各个字符的方向不受影响（例如，字符因此而不会反向绘制）。

## 属性

元素属性包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `dir`
  - : 文本在此元素内容中渲染的方向。可能的值有：
    - `ltr`：指示文本应从左到右绘制。
    - `rtl`：指示文本应从右到左绘制。

## 示例

```html
<!-- 反转文本方向 -->
<p>该文本应从左到右绘制。</p>
<p><bdo dir="rtl">该文本应从右到左绘制。</bdo></p>
```

### 结果

{{EmbedLiveSample('示例')}}

## 备注

HTML 4 规范未指定此元素的事件。它们是在 XHTML 中添加的。这很可能是疏忽。

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
      <th scope="row">允许的父级元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
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
      <td>
        直到 Gecko 1.9.2（Firefox 4）为止是 {{domxref("HTMLElement")}}，Firefox 为该元素实现了
        <code
          ><a href="/zh-CN/docs/Web/API/HTMLSpanElement"
            >HTMLSpanElement</a
          ></code
        >
        接口。
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 HTML 元素：{{HTMLElement("bdi")}}
