---
title: <li>
slug: Web/HTML/Element/li
---

{{HTMLSidebar}}

**HTML `<li>` 元素** （或称 _HTML 列表条目元素）_ 用于表示列表里的条目。它必须包含在一个父元素里：一个有序列表 ({{HTMLElement("ol")}})，一个无序列表 ({{HTMLElement("ul")}})，或者一个菜单 ({{HTMLElement("menu")}})。在菜单或者无序列表里，列表条目通常用点排列显示；在有序列表里，列表条目通常在左边显示按升序排列的计数，例如数字或者字母。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">内容类别</th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">流式内容</a></td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>如果列表元素的后面紧随另一个 {{HTMLElement("li")}} 元素，或者它的父元素中没有更多内容，结束标签可以省略。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>{{HTMLElement("ul")}}、 {{HTMLElement("ol")}}、或者 {{HTMLElement("menu")}} 元素。过时的 {{HTMLElement("dir")}} 也可以作为父元素，但是并不提倡。</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLLIElement")}}</td>
  </tr>
  <tr>
   <th scope="row">元素类型</th>
   <td>块级</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素拥有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `value`

  - : 这个整数型属性表明了本 {{HTMLElement("li")}} 元素在有序列表（由 {{HTMLElement("ol")}} 元素定义）中的序号。本属性值只能用数字，即使列表使用罗马数字或字母来展示。随后的列表条目会从设置的值开始计数。**value** 属性对于无序列表 ({{HTMLElement("ul")}}) 或者菜单 ({{HTMLElement("menu")}}) 无效。

    > **备注：** 这个属性在 HTML 4 中废弃，但是在 HTML 5 中重新引入。

    > **备注：** 在 Gecko 9.0 之前，负值会错误地转换为 0。Gecko 9.0 开始，所有整数值都可以正确解析。

- `type` {{Deprecated_inline}}

  - : 这个字符型属性表明了数字的类型：

    - `a`: 小写字母
    - `A`: 大写字母
    - `i`: 小写罗马数字
    - `I`: 大写罗马数字
    - `1`: 数字本属性值将覆盖 {{HTMLElement("ol")}} 元素中的同名属性值（若存在）。

    > **备注：** 本属性已废弃：使用 CSS {{cssxref("list-style-type")}} 属性来代替。

## 示例

### 有序列表

```html
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
```

上面的 HTML 会输出：

{{EmbedLiveSample("有序列表")}}

### 无序列表

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

{{EmbedLiveSample("无序列表")}}

更多具体示例请见 [\<ol>](/zh-CN/docs/Web/HTML/Element/ol#Examples) 和 [\<ul>](/zh-CN/docs/Web/HTML/Element/ul#Examples) 页面。

## 规范

{{Specifications}}

## 浏览兼容性

{{Compat}}

## 另见

- 其他列表相关的 HTML 元素： {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}, 和过时的 {{HTMLElement("dir")}}；
- 可能特定用于排版 `<li>` 元素的 CSS 属性：

  - {{cssxref("list-style")}} 属性，用于选择序号的展示方式，
  - [CSS 计数器](/zh-CN/docs/Web/Guide/CSS/Counters)，用于处理复杂的嵌套列表，
  - {{cssxref("margin")}} 属性，用于控制列表条目的缩进。
