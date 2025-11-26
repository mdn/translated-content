---
title: <ul>：无序列表元素
slug: Web/HTML/Reference/Elements/ul
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

[HTML](/zh-CN/docs/Web/HTML) **`<ul>`** 元素表示无序的项目列表，通常渲染为项目符号列表。

{{InteractiveExample("HTML Demo: &lt;ul&gt;", "tabbed-standard")}}

```html interactive-example
<ul>
  <li>Milk</li>
  <li>
    Cheese
    <ul>
      <li>Blue cheese</li>
      <li>Feta</li>
    </ul>
  </li>
</ul>
```

```css interactive-example
li {
  list-style-type: circle;
}

li li {
  list-style-type: square;
}
```

## 属性

此元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `compact` {{Deprecated_inline}}
  - : 此布尔属性提示列表是否需要被渲染为更紧凑的样式。{{glossary("user agent", "用户代理")}}决定如何解释这个属性，且并非所有浏览器都支持它。

    > [!WARNING]
    > 请不要使用这个属性，它已经被弃用了：请使用 [CSS](/zh-CN/docs/Web/CSS) 来更改样式。如果想达到与 `compact` 属性相同的效果，将 CSS 属性 {{cssxref("line-height")}} 的值设为 `80%` 即可。

- `type` {{Deprecated_inline}}
  - : 用于设置列表的着重号样式，定义于 HTML3.2 和过渡版本 HTML 4.0/4.01 中的可用值有：
    - `circle`
    - `disc`
    - `square`

    存在第四种定义于 WebTV 接口的着重号样式，但并不是所有浏览器都支持：`triangle`。

    如果未设置此 HTML 属性且没有 [CSS](/zh-CN/docs/Web/CSS) {{ cssxref("list-style-type") }} 属性作用于这个元素，用户代理会决定使用哪种着重号样式，一般来说这也和嵌套的层级数有关。

    > [!WARNING]
    > 请不要使用这个属性，它已经被弃用了：请使用 [CSS](/zh-CN/docs/Web/CSS) {{ cssxref("list-style-type") }} 属性作为代替。

## 使用说明

- `<ul>` 元素用来将没有数字顺序的一组数据进行分组，并且它们的数字顺序是没有意义的。举个例子，无序列表的列表项通常通过一个字符进行装饰，这些字符的形式可以是点，圆乃至方形。虽然这个字符没有直接在页面上定义，但是可以用与之相关的 CSS 对其进行操作，例如使用 {{ cssxref("list-style-type") }} 属性。
- `<ul>` 和 {{ HTMLElement("ol") }} 元素可以嵌套任意深度。此外，嵌套列表可以不受限制地在 `<ol>` 和 `<ul>` 之间交替使用。
- {{ HTMLElement("ol") }} 和 `<ul>` 元素二者都代表一组数据，不过它们彼此是有区别的，{{ HTMLElement("ol") }} 元素中的顺序是有意义的。如果想确定到底需要使用哪一个列表元素，可以试着去改变数据的顺序。如果想表达的语义改变了，就需要使用 {{ HTMLElement("ol") }} 元素，否则该使用 `<ul>` 元素。

## 示例

### 简单的示例

```html
<ul>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
</ul>
```

#### 结果

{{EmbedLiveSample("简单的示例", 400, 100)}}

### 嵌套列表

```html
<ul>
  <li>第一项</li>
  <li>
    第二项
    <!-- 注意，关闭的 </li> 标签没有放置在这里！-->
    <ul>
      <li>第二项第一子项</li>
      <li>
        第二项第二子项
        <!-- 第二个嵌套的无序列表也一样！-->
        <ul>
          <li>第二项第二子项第一子子项</li>
          <li>第二项第二子项第二子子项</li>
          <li>第二项第二子项第三子子项</li>
        </ul>
      </li>
      <!-- 为包含第三个无序列表的 li 关闭 </li> 标签 -->
      <li>第二项第三子项</li>
    </ul>
    <!-- 关闭的 </li> 标签在这里！ -->
  </li>
  <li>第三项</li>
</ul>
```

#### 结果

{{EmbedLiveSample("嵌套列表", 400, 220)}}

### 无序列表中的有序列表

```html
<ul>
  <li>第一项</li>
  <li>
    第二项
    <!-- 注意，关闭的 </li> 标签没有放置在这里！ -->
    <ol>
      <li>第二项第一子项</li>
      <li>第二项第二子项</li>
      <li>第二项第三子项</li>
    </ol>
    <!-- 关闭的 </li> 标签在这里 -->
  </li>
  <li>第三项</li>
</ul>
```

#### 结果

{{EmbedLiveSample("无序列表中的有序列表", 400, 150)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
          >流式内容</a
        >，如果 <code>&#x3C;ul></code> 元素的子元素包含至少一个 {{HTMLElement("li")}} 元素，则为<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#可感知内容">可感知内容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        0 或多个 {{HTMLElement("li")}} 元素、{{HTMLElement("script")}} 和 {{HTMLElement("template")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/List_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role"><code>menubar</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role"><code>tablist</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role"><code>toolbar</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLUListElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他列表相关的 HTML 元素：{{HTMLElement("ol")}}、{{HTMLElement("li")}} 和 {{HTMLElement("menu")}}
- 可能对 `<ul>` 元素的样式特别有用的 CSS 属性：
  - {{CSSxRef("list-style")}} 属性，用于选择显示序数的方法。
  - [CSS 计数器](/zh-CN/docs/Web/CSS/Guides/Counter_styles/Using_counters)，用于操作复杂的嵌套列表。
  - {{CSSxRef("line-height")}} 属性，用于模拟过时的 [`compact`](#compact) 属性。
  - {{CSSxRef("margin")}} 属性，用于控制列表的缩进。
