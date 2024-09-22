---
title: <li>：列表项元素
slug: Web/HTML/Element/li
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{HTMLSidebar}}

**`<li>`** [HTML](/zh-CN/docs/Web/HTML) 元素用于表示列表中的项目。它必须包含在一个父元素中：有序列表（{{HTMLElement("ol")}}）、无序列表（{{HTMLElement("ul")}}）或菜单（{{HTMLElement("menu")}}）。在菜单和无序列表中，列表项通常使用项目符号显示。在有序列表中，通常在左侧显示一个升序计数器，如数字或字母。

{{EmbedInteractiveExample("pages/tabbed/li.html", "tabbed-shorter")}}

## 属性

这个元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `value`
  - : 这个整数属性指示由 {{HTMLElement("ol")}} 元素定义的列表项当前序数值。该属性唯一允许的值是数字，即使列表以罗马数字或字母显示。后面的列表项从数值集开始继续编号。对于无序列表（{{HTMLElement("ul")}}）或菜单（{{HTMLElement("menu")}}），**value** 属性没有意义。
- `type` {{Deprecated_inline}} {{Non-standard_Inline}}

  - : 该字符属性表示编号类型：

    - `a`: 小写字母
    - `A`: 大写字母
    - `i`: 小写罗马数字
    - `I`: 大写罗马数字
    - `1`: 数字

    该类型会覆盖其父元素 {{HTMLElement("ol")}} 使用的类型（如果有的话）。

    > [!NOTE]
    > 该属性已被弃用；请使用 CSS {{cssxref("list-style-type")}} 属性代替。

## 示例

有关更详细的示例，请参阅 {{htmlelement("ol")}} 和 {{htmlelement("ul")}} 页面。

### 有序列表

```html
<ol>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
</ol>
```

#### 结果

{{EmbedLiveSample("有序列表")}}

### 带有自定义值的有序列表

```html
<ol type="I">
  <li value="3">第三项</li>
  <li>第四项</li>
  <li>第五项</li>
</ol>
```

#### 结果

{{EmbedLiveSample("带有自定义值的有序列表")}}

### 无序列表

```html
<ul>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
</ul>
```

#### 结果

{{EmbedLiveSample("无序列表")}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        如果列表项后面紧跟着另一个 {{HTMLElement("li")}} 元素，或者其父元素中没有更多内容，则可以省略结束标记。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        一个 {{HTMLElement("ul")}}、{{HTMLElement("ol")}} 或 {{HTMLElement("menu")}} 元素。过时的 {{HTMLElement("dir")}} 也可以作为父级元素，但这种用法并不符合规范。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        如果是 <code><a href="/zh-CN/docs/Web/HTML/Element/ol">ol</a></code>、<code><a href="/zh-CN/docs/Web/HTML/Element/ul">ul</a></code> 或 <code><a href="/zh-CN/docs/Web/HTML/Element/menu">menu</a></code> 的子项，则为 <code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/listitem_role">listitem</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLLIElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与列表相关的 HTML 元素：{{HTMLElement("ul")}}、{{HTMLElement("ol")}}、{{HTMLElement("menu")}} 和过时的 {{HTMLElement("dir")}}；
- 特别适用于为 `<li>` 元素添加样式的 CSS 属性：

  - {{cssxref("list-style")}} 属性，用于选择显示序号的方式；
  - [CSS 计数器](/zh-CN/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)，用于处理复杂的嵌套列表；
  - {{cssxref("margin")}} 属性，用于控制列表项的缩进。
