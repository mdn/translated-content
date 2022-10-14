---
title: <ul>
slug: Web/HTML/Element/ul
---

{{HTMLRef}}

**HTML `<ul>` 元素**（或称 HTML 无序列表元素）表示一个内可含多个元素的无序列表或项目符号列表。

<table class="properties">
 <tbody>
  <tr>
   <td><a href="/en/HTML/Content_categories">内容</a>分类</td>
   <td><a href="/en/HTML/Content_categories#flow_content">流式内容</a>，如果 <code>&lt;ul&gt;</code> 包含至少一个 <code>&lt;li&gt;</code> 元素，那么它就是显性内容 <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Palpable_content">Palpable content</a>。</td>
  </tr>
  <tr>
   <td>允许的内容</td>
   <td>零个或更多个 {{HTMLElement("li")}} 元素，可以混合使用 {{HTMLElement("ol")}} 与{{HTMLElement("ul")}} 元素。</td>
  </tr>
  <tr>
   <td>标签省略</td>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <td>允许的父元素</td>
   <td>
    <p>接受流文本的任何内容</p>
   </td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>{{ARIARole("directory")}}, {{ARIARole("group")}}, {{ARIARole("listbox")}}, {{ARIARole("menu")}}, {{ARIARole("menubar")}}, {{ARIARole("radiogroup")}}, {{ARIARole("tablist")}}, {{ARIARole("toolbar")}}, {{ARIARole("tree")}}, {{ARIARole("presentation")}}</td>
  </tr>
  <tr>
   <td>DOM 接口</td>
   <td>{{domxref("HTMLUListElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素仅含有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- {{ htmlattrdef("compact") }}{{ Deprecated_inline() }}
  - : 此布尔属性提示列表是否需要被渲染为更紧凑的样式。用户代理决定如何解释这个属性，且并非所有浏览器都支持它。

    > **备注：** 不要使用这个属性，因为它已经被废弃了：{{ HTMLElement("ul") }} 元素应当使用 [CSS](/zh-CN/docs/CSS) 来更改样式。（CSS）可以提供与 `compact` 属性相同的效果，将 [CSS](/zh-CN/docs/CSS) 属性 [line-height](/zh-CN/docs/CSS/line-height) 的值设为 `80%` 即可。

- {{ htmlattrdef("type") }}{{ Deprecated_inline() }}
  - : 用于设置列表的着重号样式，被定义在 [HTML3.2](/zh-CN/HTML3.2) 和过渡版本 [HTML 4.0/4.01](/zh-CN/HTML4.01) 中的可用值有：

    - `circle`
    - `disc`
    - `square`第四种着重号样式被定义在 WebTV 接口中，但并不是所有浏览器都支持：`triangle`如果未设置此 HTML 属性且没有 [CSS](/zh-CN/CSS) {{ cssxref("list-style-type") }} 属性作用于这个元素，用户代理会决定使用哪种着重号样式，一般来说这也和嵌套的层级数有关。

    > **备注：** 不要使用这个属性，它已经被废弃了：使用 [CSS](/zh-CN/CSS) {{ cssxref("list-style-type") }} 属性作为代替。

## 使用说明

- `<ul>` 元素用来将没有数字顺序的一组数据进行分组，并且它们的数字顺序是没有意义的。举个例子，无序列表的列表项通常通过一个字符进行装饰，这些字符的形式可以是点，圆乃至方形．虽然这个字符没有直接在页面上定义，但是可以用与之相关的 CSS 对其进行操作，例如使用 {{cssxref("list-style-type")}} 属性。
- 在 {{ HTMLElement("ol") }} 和 {{ HTMLElement("ul") }} 元素中，嵌套列表没有深度和嵌套顺序的限制。
- {{ HTMLElement("ol") }} 和 {{ HTMLElement("ul") }} 元素二者都代表一组数据，不过它们彼此是有区别的，ol 元素中的顺序是有意义的。如果想确定你到底需要使用哪一个列表元素，你可以试着去改变数据的顺序。如果想表达的语义改变了，你就需要使用 ol 元素，否则你该使用 ul 元素。

## 实例

### 简单的例子

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

以上 HTML 输出：

- first item
- second item
- third item

### 嵌套列表

```html
<ul>
  <li>first item</li>
  <li>second item      <!-- Look, the closing </li> tag is not placed here! -->
    <ul>
      <li>second item first subitem</li>
      <li>second item second subitem      <!-- Same for the second nested unordered list! -->
        <ul>
          <li>second item second subitem first sub-subitem</li>
          <li>second item second subitem second sub-subitem</li>
          <li>second item second subitem third sub-subitem</li>
        </ul>
      </li>           <!-- Closing </li> tag for the li that contains the third unordered list -->
      <li>second item third subitem</li>
    </ul>
  </li>               <!-- Here is the closing </li> tag -->
  <li>third item</li>
</ul>
```

以上 HTML 输出：

- first item
- second item

  - second item first subitem
  - second item second subitem

    - second item second subitem first sub-subitem
    - second item second subitem second sub-subitem
    - second item second subitem third sub-subitem

  - second item third subitem

- third item

### 嵌套 \<ul> 和 \<ol>

```html
<ul>
  <li>first item</li>
  <li>second item      <!-- Look, the closing </li> tag is not placed here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
  </li>                <!-- Here is the closing </li> tag -->
  <li>third item</li>
</ul>
```

以上 HTML 输出：

- first item
- second item

  1. second item first subitem
  2. second item second subitem
  3. second item third subitem

- third item

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他列表相关的 HTML 元素：{{ HTMLElement("ol") }}, {{ HTMLElement("li") }}, {{ HTMLElement("menu") }} 和绝对元素 {{ HTMLElement("dir") }};
- 特别作用于 \<ul>元素的 CSS 属性：

  - [list-style](/zh-CN/CSS/list-style) 属性，作用于选择哪种序数的样式来显示，
  - [CSS counters](/zh-CN/CSS_Counters), 作用于操作复杂的嵌套列表，
  - [line-height](/zh-CN/CSS/line-height) 属性，作用于模拟过时的 {{ htmlattrxref("compact", "ul") }} 属性，
  - [margin](/zh-CN/CSS/margin) 属性，作用于控制列表的缩进。
