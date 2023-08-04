---
title: <kbd>
slug: Web/HTML/Element/kbd
---

## 摘要

HTML 键盘输入元素 (**\<kbd>**) 用于表示用户输入，它将产生一个行内元素，以浏览器的默认 monospace 字体显示。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">Phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parent elements</th>
   <td>Any element that accepts <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the interface {{domxref("HTMLSpanElement")}} for this element.</td>
  </tr>
 </tbody>
</table>

## 属性

该元素仅支持[全局属性](/zh-CN/docs/HTML/Global_attributes).

## 示例

```html
<p>
  Type the following in the Run dialog: <kbd>cmd</kbd><br />Then click the OK
  button.
</p>

<p>Save the document by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd></p>
```

### 结果

Type the following in the Run dialog: <kbd>cmd</kbd>
Then click the OK button.

Save the document by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd>

#### 结果说明：

此显示效果为 MDN 特殊显示效果，无法更改。具体显示效果请自行测试。

## 注意

通过定义 CSS 规则可以改变 kbd 的默认字体。用户首选项设置可能会比该 CSS 规则具有更高优先级。

当\<kbd>元素处于\<samp>元素之中时，它代表着被系统回显的输入。

当\<kbd>元素中包含\<samp>元素时，该输入是基于系统输出的，比如调用某个菜单项。

当\<kbd>元素处于另一个\<kbd>元素之中时，它代表了一个实际的按键，或是该输入机制下的某个单位输入。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{htmlelement("code")}}

{{HTMLSidebar}}
