---
title: <data>
slug: Web/HTML/Element/data
---

{{HTMLSidebar}}

**HTML `<data>` 元素**将一个指定内容和机器可读的翻译联系在一起。但是，如果内容是与时间或者日期相关的，则一定要使用 {{HTMLElement("time")}}。

{{EmbedInteractiveExample("pages/tabbed/data.html", "tabbed-shorter")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">phrasing content</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">Phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that accepts <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLDataElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素支持[全局属性](/zh-CN/docs/HTML/Global_attributes)。

- `value`
  - : 该属性指定元素内容所对应的数据，或者说“机器可读的翻译”。

## 示例

下面的示例展示了一些产品名称，而且每个名称都和一个产品编码相关联。

```html
<p>新产品</p>
<ul>
  <li><data value="398">迷你番茄酱</data></li>
  <li><data value="399">巨无霸番茄酱</data></li>
  <li><data value="400">超级巨无霸番茄酱</data></li>
</ul>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML {{HTMLElement("time")}} 元素。
