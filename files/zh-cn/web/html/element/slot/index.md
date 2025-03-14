---
title: <slot>：Web 组件插槽元素
slug: Web/HTML/Element/slot
l10n:
  sourceCommit: f47d71927e4dc46f3aabde0a56c7f940da988d9f
---

{{HTMLSidebar}}

**`<slot>`** [HTML](/zh-CN/docs/Web/HTML) 元素是——[Web 组件](/zh-CN/docs/Web/API/Web_components)技术套件的一部分——它是一个在 web 组件内部的占位符，你可以使用自己的标记来填充该占位符，从而创建单独的 DOM 树并将其一起呈现。

## 属性

此元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `name`

  - : 插槽名称。

    **具名插槽**是具有 `name` 属性的 `<slot>` 元素。

## 示例

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0;
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <code class="name">
        &lt;<slot name="element-name">需要名称</slot>&gt;
      </code>
      <span class="desc"><slot name="description">需要描述</slot></span>
    </summary>
    <div class="attributes">
      <h4>属性</h4>
      <slot name="attributes"><p>无</p></slot>
    </div>
  </details>
  <hr />
</template>
```

> [!NOTE]
> 你可以在 [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details)（参见[在线演示](https://mdn.github.io/web-components-examples/element-details/)）查看完整示例。此外，你还可以在[使用模板和插槽](/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)找到相关解释。

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
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#透明内容模型"
          >透明内容</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">事件</th>
      <td>{{domxref("HTMLSlotElement/slotchange_event", "slotchange")}}</td>
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
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLSlotElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML {{HTMLElement("template")}} 元素
- HTML [`slot`](/zh-CN/docs/Web/HTML/Global_attributes/slot) 属性
- CSS {{CSSXref("::slotted")}} 伪元素
- CSS {{cssxref(":has-slotted")}} 伪类
- [CSS 域](/zh-CN/docs/Web/CSS/CSS_scoping)模块
