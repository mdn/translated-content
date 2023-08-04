---
title: <slot>
slug: Web/HTML/Element/slot
---

{{HTMLSidebar}}

> **备注：** 本翻译的一些术语参考了[Vuejs-中文](https://cn.vuejs.org/v2/guide/components-slots.html)页面。

**HTML `<slot>` 元素**，作为 [Web Component](/zh-CN/docs/Web/API/Web_components) 技术套件的一部分，是 Web 组件内的一个占位符。该占位符可以在后期使用自己的标记语言填充，这样您就可以创建单独的 DOM 树，并将它与其他的组件组合在一起。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">phrasing content</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Transparent_content_model">Transparent</a></td>
  </tr>
  <tr>
   <th scope="row">Events</th>
   <td>{{domxref("HTMLSlotElement/slotchange_event", "slotchange")}}</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that accepts <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">phrasing content</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>None</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLSlotElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `name`
  - : 插槽的名字。拥有 name 属性的插槽叫**具名插槽**。

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
      <code class="name"
        >&lt;<slot name="element-name">NEED NAME</slot>&gt;</code
      >
      <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

> **备注：** 您可以在 [element-details](https://github.com/mdn/web-components-examples/tree/master/element-details) (see it [running live](https://mdn.github.io/web-components-examples/element-details/)) 找到这个示例的完整演示版。另外，您也可以在[Using templates and slots](/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)这里找到具体的解释。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
