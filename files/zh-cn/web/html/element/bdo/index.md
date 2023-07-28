---
title: "<bdo>: 双向文本替代元素"
slug: Web/HTML/Element/bdo
---

{{HTMLSidebar}}

HTML 双向文本替代元素 (**`<bdo>`**) 改写了文本的方向性，使文本以不同的方向渲染呈现出来 (override 可以翻译很多意思，编程语言中多用覆盖，重载；这里采用了 Google 的整体翻译，取替代替换改写之意)

{{EmbedInteractiveExample("pages/tabbed/bdo.html", "tabbed-standard")}}

文本的字符是从给定方向的起始点绘制的; 各个字符的方向不受影响 (因此字符集不会向后拉，例如).

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">内容分类</th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories">流式元素</a>, <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories">短语元素</a>, 显式元素。</td>
  </tr>
  <tr>
   <th scope="row">许可内容</th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories">短语元素</a>.</td>
  </tr>
  <tr>
   <th scope="row">标记省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">许可父级元素</th>
   <td>接受<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories">短语元素</a>的任何元素</td>
  </tr>
  <tr>
   <th scope="row">隐式 ARIA 角色</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No corresponding role</a></td>
  </tr>
  <tr>
   <th scope="row">许可 ARIA 角色</th>
   <td>任何</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}直到 Gecko 1.9.2 (包括 Firefox 4) 为止，Firefox 均为此元素实现 HTMLSpanElement 接口。</td>
  </tr>
 </tbody>
</table>

## 属性

元素属性包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)

- `dir`

  - : 在此元素内容中呈现文本的方向。可能的值是：

    - ltr: 指示文本应从左到右的方向。
    - rtl: 指示文本应从右到左的方向。

## 示例

```html
<!-- Switch text direction -->
<p>This text will go left to right.</p>
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
```

### 结果

{{EmbedLiveSample('示例')}}

## 注意

HTML 4 规范未指定此元素的事件。它们是在 XHTML 中添加的。这很可能是疏忽。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 HTML: {{HTMLElement("bdi")}}
