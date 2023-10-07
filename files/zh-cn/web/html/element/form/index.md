---
title: form
slug: Web/HTML/Element/form
---

{{HTMLSidebar}}

**HTML `<form>` 元素**表示文档中的一个区域，此区域包含交互控件，用于向 Web 服务器提交信息。

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

可以用 {{cssxref(':valid')}} 和 {{cssxref(':invalid')}} CSS 伪类来设置 `<form>` 元素的样式，此时样式的表现取决于表单中的 {{domxref("HTMLFormElement.elements", "elements")}} 是否有效。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容类别</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>, palpable content</td>
  </tr>
  <tr>
   <th scope="row"><dfn>可包含内容</dfn></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>, but not containing <code>&lt;form&gt;</code> elements</td>
  </tr>
  <tr>
   <th scope="row"><dfn>标签省略</dfn></th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父级元素</th>
   <td>可以是 HTML 的<a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">任何标签</a></td>
  </tr>
  <tr>
   <th scope="row">Implicit ARIA role</th>
   <td><code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Form_Role">form</a></code> if the form has an <a href="https://www.w3.org/TR/accname-1.1/#dfn-accessible-name">accessible name</a>, otherwise <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">no corresponding role</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td><code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Search_role">search</a></code>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a></td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLFormElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素拥有 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

- `accept`{{Deprecated_Inline}}

  - : 一个逗号分隔的列表，包括服务器能接受的内容类型。

    > **备注：** **此属性已在 HTML5 中被移除并且不再被使用**。作为替代，可以使用 `<input type=file>` 元素中的 [`accept`](/zh-CN/docs/Web/HTML/Element/input#accept) 属性。

- `accept-charset`
  - : 一个空格分隔或逗号分隔的列表，此列表包括了服务器支持的字符编码。浏览器以这些编码被列举的顺序使用它们。默认值是一个保留字符串 `"UNKNOWN"`。此字符串指的是，和包含此表单元素的文档相同的编码。
    在之前版本的 HTML 中，不同的字符编码可以用空格或逗号分隔。在 HTML5 中，只有空格可以允许作为分隔符。
- `autocapitalize` {{non-standard_inline}}

  - : 这是一个被 iOS Safari 使用的非标准属性。当用户在一些表单的文本后代控件中，输入/编辑一些文本值时，此属性控制了这些文本值的首字母是否大写或者使用其他的大写样式。如果 `autocapitalize` 属性在某个单独的表单后代控件被指定的话，那么此单独的设定会覆盖原来表单范围内的 `autocapitalize` 设定。默认值为 `sentences`。可以选择的值如下：

    - `none`：完全禁用自动首字母大写。
    - `sentences`：自动对每句话首字母大写。
    - `words`：自动对每个单词首字母大写。
    - `characters`：自动大写所有的字母。

- `autocomplete`

  - : 用于指示 input 元素是否能够拥有一个默认值，此默认值是由浏览器自动补全的。此设定可以被属于此表单的子元素的 `autocomplete` 属性覆盖。可能的值有：

    - `off`：浏览器可能不会自动补全条目（在疑似登录表单中，浏览器倾向于忽略该值，而提供密码自动填充功能，参见 [自动填充属性和登录](/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#禁用自动填充)）
    - `on`：浏览器可自动补全条目

- `name`
  - : 表单的名称。HTML 4 中不推荐（应使用 `id`）。在 HTML 5 中，该值必须是所有表单中独一无二的，而且不能是空字符串。
- `rel`
  - : 根据 value 创建一个超链接或 Creates a hyperlink or annotation depending on the value, see the [`rel`](/zh-CN/docs/Web/HTML/Attributes/rel) attribute for details.

### 关于提交表单的属性

下列属性控制提交表单时的行为。

- `action`
  - : 处理表单提交的 URL。这个值可被 {{HTMLElement("button")}}、[`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 或 [`<input type="image">`](/zh-CN/docs/Web/HTML/Element/input/image) 元素上的 [`formaction`](/zh-CN/docs/Web/HTML/Element/button#formaction) 属性覆盖。
- `enctype`

  - : 当 `method` 属性值为 `post` 时，`enctype` 就是将表单的内容提交给服务器的 [MIME 类型](http://en.wikipedia.org/wiki/Mime_type) 。可能的取值有：

    - `application/x-www-form-urlencoded`：未指定属性时的默认值。
    - `multipart/form-data`：当表单包含 `type=file` 的 {{HTMLElement("input")}} 元素时使用此值。
    - `text/plain`：出现于 HTML5，用于调试。这个值可被 {{HTMLElement("button")}}、[`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 或 [`<input type="image">`](/zh-CN/docs/Web/HTML/Element/input/image) 元素上的 [`formenctype`](/zh-CN/docs/Web/HTML/Element/button#formenctype) 属性覆盖。

- `method`

  - : 浏览器使用这种 [HTTP](/zh-CN/docs/HTTP) 方式来提交 表单。可能的值有：

    - `post`：指的是 HTTP [POST 方法](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5)；表单数据会包含在表单体内然后发送给服务器。
    - `get`：指的是 HTTP [GET 方法](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3)；表单数据会附加在 `action` 属性的 URL 中，并以 '?' 作为分隔符，[没有副作用](/zh-CN/docs/Glossary/Idempotent) 时使用这个方法。
    - `dialog`：如果表单在 {{HTMLElement("dialog")}} 元素中，提交时关闭对话框。此值可以被 {{HTMLElement("button")}}、[`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 或 [`<input type="image">`](/zh-CN/docs/Web/HTML/Element/input/image) 元素中的 [`formmethod`](/zh-CN/docs/Web/HTML/Element/button#formmethod) 属性覆盖。

- `novalidate`
  - : 此布尔值属性表示提交表单时不需要验证表单。如果没有声明该属性（因此表单需要通过验证）。该属性可以被表单中的 {{HTMLElement("button")}}、[`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 或 [`<input type="image">`](/zh-CN/docs/Web/HTML/Element/input/image) 元素中的 [`formnovalidate`](/zh-CN/docs/Web/HTML/Element/button#formnovalidate) 属性覆盖。
- `target`

  - : 表示在提交表单之后，在哪里显示响应信息。在 HTML 4 中，这是一个 frame 的名字/关键字对。在 HTML5 里，这是一个*浏览上下文* 的名字/关键字（如标签页、窗口或 iframe）。下述关键字有特别含义：

    - `_self`：默认值。在相同浏览上下文中加载。
    - `_blank`：在新的未命名的浏览上下文中加载。
    - `_parent`：在当前上下文的父级浏览上下文中加载，如果没有父级，则与 \_self 表现一致。
    - `_top`：在最顶级的浏览上下文中（即当前上下文的一个没有父级的祖先浏览上下文），如果没有父级，则与 \_self 表现一致。此值可以被 {{HTMLElement("button")}}、[`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 或 [`<input type="image">`](/zh-CN/docs/Web/HTML/Element/input/image) 元素中的 [`formtarget`](/zh-CN/docs/Web/HTML/Element/button#formtarget) 属性覆盖。

## 示例

### HTML

```html
<!-- Form which will send a GET request to the current URL -->
<form>
  <label
    >Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form which will send a POST request to the current URL -->
<form method="post">
  <label
    >Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form with fieldset, legend, and label -->
<form method="post">
  <fieldset>
    <legend>Title</legend>
    <label><input type="radio" name="radio" /> Select me</label>
  </fieldset>
</form>
```

{{ EmbedLiveSample('示例', '100%', 110) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 表单指南](/zh-CN/docs/Web/Guide/HTML/Forms)
- 还有其他的一些元素也用于创建表单：{{HTMLElement("button")}}、{{HTMLElement("datalist")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("input")}}、{{HTMLElement("label")}}、{{HTMLElement("legend")}}、{{HTMLElement("meter")}}、{{HTMLElement("optgroup")}}、{{HTMLElement("option")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}}
- Getting a list of the elements in the form: {{domxref("HTMLFormElement.elements")}}
- [ARIA: Form role](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Form_Role)
- [ARIA: Search role](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Search_role)
