---
title: <ol>
slug: Web/HTML/Element/ol
---

{{HTMLSidebar}}

**HTML `<ol>` 元素**表示有序列表，通常渲染为一个带编号的列表。

{{EmbedInteractiveExample("pages/tabbed/ol.html", "tabbed-shorter")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容类别</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, and if the <code>&lt;ol&gt;</code> element's children include at least one {{HTMLElement("li")}} element, <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Palpable_content">palpable content</a>.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>Zero or more {{ HTMLElement("li") }}, {{HTMLElement("script")}} and {{HTMLElement("template")}} elements.</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父级</th>
   <td>Any element that accepts <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Flow_content">flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row">隐含的 ARIA 角色</th>
   <td><code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/List_role">list</a></code></td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a></td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{DOMxRef("HTMLOListElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素支持[全局属性](/zh-CN/docs/HTML/Global_attributes)。

- `reversed`
  - : 此布尔值属性指定列表中的条目是否是倒序排列的，即编号是否应从高到低反向标注。
- `start`

  - : 一个整数值属性，指定了列表编号的起始值。此属性的值应为阿拉伯数字，尽管列表条目的编号类型 `type` 属性可能指定为了罗马数字编号等其他类型的编号。比如说，想要让元素的编号从英文字母 "d" 或者罗马数字 "iv" 开始，都应当使用 `start="4"`。

    > **备注：** 这个属性在 HTML4 中弃用，但是在 HTML5 中被重新引入。

- `type`

  - : 设置编号的类型：

    - `a` 表示小写英文字母编号
    - `A` 表示大写英文字母编号
    - `i` 表示小写罗马数字编号
    - `I` 表示大写罗马数字编号
    - `1` 表示数字编号（默认）编号类型适用于整个列表，除非在 `<ol>` 元素的 {{HTMLElement("li")}} 元素中使用不同的 [`type`](/zh-CN/docs/Web/HTML/Element/li#type) 属性。

    > **备注：** 这个属性在 HTML4 中弃用，但是在 HTML5 中被重新引入。除非列表中序号很重要（比如，在法律或者技术文件中条目通常被需要所引用），否则请使用 CSS {{cssxref("list-style-type")}} 属性替代。

## 使用说明

通常，有序列表的条目会和它前面的编号[标记](/zh-CN/docs/Web/CSS/::marker)一起显示，编号标记可以是数字或者字母。

`<ol>` 和 {{HTMLElement("ul")}} 元素两者可以无限嵌套，既可以同类嵌套，也可以互相嵌套。

`<ol>` 和 {{HTMLElement("ul")}} 元素都表示列表。区别在于，`<ol>` 元素的有序列表的顺序是有意义的。举一些例子：

- 烹饪食谱中的各个步骤
- 指路时的各处转弯方向
- 营养信息标签上 按含量排序的成分列表

至于如何确定该选择哪一个列表元素，可以尝试更改列表项的顺序，如果其含义会发生改变，那么就应当使用 {{HTMLElement("ol")}} 元素，否则使用 {{HTMLElement("ul")}} 更合适。

> **备注：** “更改顺序”时，不应当算上一些固定位于列表最前或最后的项，比如未完成的列表最后的占位项。
> 如果只有一个元素，以至于根本不存在什么顺序可言，可能最好先考虑是否应当使用列表元素，以及是否要在列表最后增加一些占位的空项。

## 示例

### 简单示例

```html
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

以上 HTML 输出如下：

{{EmbedLiveSample("简单示例", 400, 100)}}

### 使用小写罗马数字编号

```html
<ol type="i">
  <li>Introduction</li>
  <li>List of Greivances</li>
  <li>Conclusion</li>
</ol>
```

以上 HTML 输出如下：

{{EmbedLiveSample("使用小写罗马数字编号", 400, 100)}}

### 使用 `start` 属性

```html
<p>Finishing places of contestants not in the winners' circle:</p>

<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin’ Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

以上 HTML 输出如下：

{{EmbedLiveSample("使用 start 属性", 400, 100)}}

### 嵌套列表

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag not here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
  </li>
  <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>
```

以上 HTML 输出如下：

{{EmbedLiveSample("嵌套列表", 400, 150)}}

### 嵌套有序列表和无序列表

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag not here! -->
    <ul>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ul>
  </li>
  <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>
```

以上 HTML 输出如下：

{{EmbedLiveSample("嵌套有序列表和无序列表", 400, 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- 其他列表相关的 HTML 元素：{{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}} and the obsolete {{HTMLElement("dir")}};
- 对 `<ol>` 元素常用的 CSS 属性：

  - the {{cssxref("list-style")}} 属性，有用的选择序数的显示方式，
  - [CSS 计数器](/zh-CN/docs/CSS_Counters), 用于处理复杂的嵌套列表，
  - {{cssxref("line-height")}} 属性，可以模拟过时的 [`compact`](/zh-CN/docs/Web/HTML/Element/ol#compact) 属性；
  - {{cssxref("margin")}} 属性，用来控制列表的缩进。
