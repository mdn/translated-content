---
title: <dd>
slug: Web/HTML/Element/dd
---

{{HTMLSidebar}}

**HTML `<dd>` 元素**（_HTML 描述元素_）用来指明一个描述列表 ({{HTMLElement("dl")}}) 元素中一个术语的描述。这个元素只能作为描述列表元素的子元素出现，并且必须跟着一个 {{HTMLElement("dt")}} 元素。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td>None</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">流内容</a></td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>必须有开标签。如果该元素后面紧跟着另一个 &lt;dd&gt; 元素，或者父元素中没有更多内容，则可以省略闭标签。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>该元素需要出现在 {{HTMLElement("dt")}} 元素和 {{HTMLElement("dd")}} 元素之后，并且在一个 {{HTMLElement("dl")}} 元素里。</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `nowrap` {{Non-standard_inline}}
  - : 如果这个属性的值为 yes，那么定义的描述文字将不会包裹。默认值为 no。

## 示例

示例请看[\<dl> 的示例](/zh-CN/docs/Web/HTML/Element/dl#examples)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{HTMLELement("dl")}}, {{HTMLElement("dt")}}
