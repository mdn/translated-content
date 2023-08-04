---
title: <template>：内容模板元素
slug: Web/HTML/Element/template
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **内容模板**（`<template>`）元素是一种用于保存客户端内容机制，该内容在加载页面时不会呈现，但随后可以 (原文为 may be) 在运行时使用 JavaScript 实例化。

将模板视为一个可存储在文档中以便后续使用的内容片段。虽然解析器在加载页面时确实会处理 **`<template>`** 元素的内容，但这样做只是为了确保这些内容有效；但元素内容不会被渲染。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Metadata_content">Metadata content</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">flow content</a>, <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Phrasing_content">phrasing content</a>, script-supporting element</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td>No restrictions</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>{{HTMLElement("body")}}, {{HTMLElement("frameset")}}, {{HTMLElement("head")}}, {{HTMLElement("dl")}} and {{HTMLElement("colgroup")}} without a <code>span</code> attribute</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>None</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLTemplateElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

但， {{domxref("HTMLTemplateElement")}} 有个属性： {{domxref("HTMLTemplateElement.content", "content")}} , 这个属性是只读的{{domxref("DocumentFragment")}} 包含了模板所表示的 DOM 树。

## 示例

首先我们从示例的 HTML 部分开始。

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- 现有数据可以可选地包括在这里 -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

首先，我们有一个表，稍后我们将使用 JavaScript 代码在其中插入内容。然后是模板，它描述了表示单个表行的 HTML 片段的结构。

既然已经创建了表并定义了模板，我们使用 JavaScript 将行插入到表中，每一行都是以模板为基础构建的。

```js
// 通过检查来测试浏览器是否支持 HTML 模板元素
// 用于保存模板元素的内容属性。
if ("content" in document.createElement("template")) {
  // 使用现有的 HTML tbody 实例化表和该行与模板
  let t = document.querySelector("#productrow"),
    td = t.content.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  // 克隆新行并将其插入表中
  let tb = document.getElementsByTagName("tbody");
  let clone = document.importNode(t.content, true);
  tb[0].appendChild(clone);

  // 创建一个新行
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans";

  // 克隆新行并将其插入表中
  let clone2 = document.importNode(t.content, true);
  tb[0].appendChild(clone2);
} else {
  // 找到另一种方法来添加行到表，因为不支持 HTML 模板元素。
}
```

结果是原始的 HTML 表格，通过 JavaScript 添加了两行新内容：

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("示例", 500, 120)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Web components: {{HTMLElement("slot")}} (and historical: {{HTMLElement("shadow")}})
- [Using templates and slots](/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)
