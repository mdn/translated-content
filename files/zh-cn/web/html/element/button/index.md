---
title: <button>
slug: Web/HTML/Element/button
---

{{HTMLSidebar}}

**HTML `<button>` 元素**表示一个可点击的按钮，可以用在[表单](/zh-CN/docs/Learn/HTML/Forms)或文档其他需要使用简单标准按钮的地方。默认情况下，HTML 按钮的显示样式接近于 {{Glossary("user agent")}} 所在的宿主系统平台（用户操作系统）的按钮，但你可以使用 [CSS](/zh-CN/docs/Web/CSS) 来改变按钮的样貌。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Interactive_content">Interactive content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Form_listed">listed</a>, <a href="/zh-CN/docs/HTML/Content_categories#Form_labelable">labelable</a>, and <a href="/zh-CN/docs/HTML/Content_categories#Form_submittable">submittable</a> <a href="/zh-CN/docs/HTML/Content_categories#Form-associated_">form-associated</a> element, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">Phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">标签略写</th>
   <td>{{no_tag_omission}} </td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任意可容纳 <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a> 的元素。</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a></td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLButtonElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素包含[全局属性](/zh-CN/docs/HTML/Global_attributes).

- `autofocus`
  - : 一个布尔属性，用于指定当页面加载时按钮必须有输入焦点，除非用户重写，例如通过不同控件键入。只有一个表单关联元素可以指定该属性。
- `autocomplete` {{non-standard_inline}}
  - : 该属性在 {{HTMLElement("button")}}上的使用并未标准化，只有 Firefox 允许。不像其他浏览器，Firefox 默认在页面加载时持续禁用 Button 的动态状态（[Firefox persists the dynamic disabled state](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) ）。将此属性设置为`off` (i.e. `autocomplete="off"`) 关闭此特性。参见 [Firefox bug 654072](https://bugzil.la/654072)。
- `disabled`
  - : 此布尔属性表示用户不能与 button 交互。如果属性值未指定，button 继承包含元素，例如{{HTMLElement("fieldset")}}；如果没有设置**disabled**属性的包含元素，button 将可交互。不像其他浏览器，Firefox 默认在页面加载时持续禁用 Button 的动态状态。使用[`autocomplete`](/zh-CN/docs/Web/HTML/Element/button#autocomplete)属性可控制此特性。
- `form`
  - : 表示 button 元素关联的 form 元素（它的表单拥有者）。此属性值必须为同一文档中的一个{{HTMLElement("form")}}元素的**id**属性。如果此属性未指定，\<button>元素必须是 form 元素的后代。利用此属性，你可以将\<button>元素放置在文档内的任何位置，而不仅仅是作为他们 form 元素的后代。
- `formaction`
  - : 表示程序处理 button 提交信息的 URI。如果指定了，将重写 button 表单拥有者的[`action`](/zh-CN/docs/Web/HTML/Element/form#action)属性。
- `formenctype`

  - : 如果 button 是 submit 类型，此属性值指定提交表单到服务器的内容类型。可选值：

    - `application/x-www-form-urlencoded`: 未指定时的默认值。
    - `multipart/form-data`: 如果使用[`type`](/zh-CN/docs/Web/HTML/Element/input#type)属性的{{HTMLElement("input")}}元素设置文件，使用此值。
    - `text/plain`如果指定此属性，它将重写 button 的表单拥有者的[`enctype`](/zh-CN/docs/Web/HTML/Element/form#enctype)属性。

- `formmethod`

  - : 如果 button 是 submit 类型，此属性指定浏览器提交表单使用的 HTTP 方法。可选值：

    - `post`：来自表单的数据被包含在表单内容中，被发送到服务器。
    - `get`：来自表单的数据以'?'作为分隔符被附加到 form 的**URI**属性中，得到的 URI 被发送到服务器。当表单没有副作用，且仅包含 ASCII 字符时使用这种方法。如果指定了，此属性会重写 button 拥有者的[`method`](/zh-CN/docs/Web/HTML/Element/form#method)属性。

- `formnovalidate`
  - : 如果 button 是 submit 类型，此布尔属性指定当表单被提交时不需要验证。如果指定了，它会重写 button 拥有者的[`novalidate`](/zh-CN/docs/Web/HTML/Element/form#novalidate)属性。
- `formtarget`

  - : 如果 button 是 submit 类型，此属性指定一个名称或关键字，表示接收提交的表单后在哪里显示响应。这是一个浏览上下文（例如 tab，window 或内联框架）的名称或关键字。如果指定了，它会重写 button 拥有者的[`target`](/zh-CN/docs/Web/HTML/Element/form#target) 属性。关键字如下：

    - `_self`: 在同一个浏览上下文中加载响应作为当前的。未指定时此值为默认值。
    - `_blank`: 在一个新的不知名浏览上下文中加载响应。
    - `_parent`: 在当前浏览上下文父级中加载响应。如果没有父级的，此选项将按\_self 执行。
    - `_top`: 在顶级浏览上下文（即当前浏览上下文的祖先，且没有父级）中架加载响应。如果没有顶级的，此选项将按\_self 执行。

- `name`
  - : button 的名称，与表单数据一起提交。
- `type`

  - : button 的类型。可选值：

    - `submit`: 此按钮将表单数据提交给服务器。如果未指定属性，或者属性动态更改为空值或无效值，则此值为默认值。
    - `reset`: 此按钮重置所有组件为初始值。
    - `button`: 此按钮没有默认行为。它可以有与元素事件相关的客户端脚本，当事件出现时可触发。
    - menu: 此按钮打开一个由指定{{HTMLElement("menu")}}元素进行定义的弹出菜单。

- `value`
  - : button 的初始值。它定义的值与表单数据的提交按钮相关联。当表单中的数据被提交时，这个值便以参数的形式被递送至服务器。

## 注意

`<button>` 元素比 {{HTMLElement("input")}} 元素更容易使用样式。你可以在元素内添加 HTML 内容（像 `<em>`、`<strong>` 甚至 `<img>`），以及 {{Cssxref("::after")}} 和 {{Cssxref("::before")}} 伪元素来实现复杂的效果，而 {{HTMLElement("input")}} 只支持文本内容。

如果你的按钮不是用于向服务器提交数据，请确保这些按钮的 `type` 属性设置成 `button`。否则它们被按下后将会向服务器发送数据并加载（可能并不存在的）响应内容，因而可能会破坏当前文档的状态。

IE7 在使用 `<button type="submit" name="myButton" value="foo">Click me</button>` 提交表单时存在一个 BUG，`POST` 提交的数据将是 `myButton=Click me` 而不是 `myButton=foo`（没有把 `value` 属性的值 `foo` 提交上去）。
IE6 的 BUG 更糟糕，在提交表单的时候会把表单内所有的按钮都提交上去，同时还有和 IE7 一样的 BUG。
IE8 已经修复了这个问题。

Firefox 出于使用方便的目的，会在获得焦点的按钮上添加一个细小的虚线框。这个边框由浏览器内部的样式表中的 CSS 定义，但如果有必要的话，你可以用 `button{{cssxref("::-moz-focus-inner")}} { }` 重写这个样式。

Firefox 在默认情况下会在页面加载时让 {{HTMLElement("button")}} [保持动态禁用状态](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) ，这个行为在其他浏览器上是没有的。将 [`autocomplete`](/zh-CN/docs/Web/HTML/Element/button#autocomplete) 属性设置为 `off` 可以禁用这项特性。参见 [Firefox bug 654072](https://bugzil.la/654072)。

安卓系统上的 Firefox <35 会为每个按钮设置一个默认的 {{ cssxref("background-image") }} 渐变背景（参见 [Firefox bug 763671](https://bugzil.la/763671)）。这项可以通过 `background-image: none` 禁用。

### 点击和焦点

点击 {{HTMLElement("button")}} 会让浏览器和操作系统（默认情况下）将焦点放在其上。 {{HTMLElement("input")}} 的 `type="button"` 和 `type="submit"` 也是一样的。

| 桌面浏览器           | Windows 8.1 | OS X 10.9                   |
| -------------------- | ----------- | --------------------------- |
| Firefox 30.0         | Yes         | No (even with a `tabindex`) |
| Chrome 35            | Yes         | Yes                         |
| Safari 7.0.5         | N/A         | No (even with a `tabindex`) |
| Internet Explorer 11 | Yes         | N/A                         |
| Presto (Opera 12)    | Yes         | Yes                         |

| 移动浏览器    | iOS 7.1.2                   | Android 4.4.4 |
| ------------- | --------------------------- | ------------- |
| Safari Mobile | No (even with a `tabindex`) | N/A           |
| Chrome 35     | No (even with a `tabindex`) | Yes           |

## 示例

```html
<button name="button">Click me</button>
```

{{ EmbedLiveSample('示例', 200, 64) }}

请注意上例中应用了 CSS。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

Other elements that are used for creating forms: {{HTMLElement("form")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
