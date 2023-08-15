---
title: <label>
slug: Web/HTML/Element/label
---

{{HTMLSidebar}}

**HTML `<label>` 元素**（标签）表示用户界面中某个元素的说明。

{{EmbedInteractiveExample("pages/tabbed/label.html", "tabbed-shorter")}}

将一个 `<label>` 和一个 {{htmlelement("input")}} 元素相关联主要有这些优点：

- 标签文本不仅与其相应的文本输入元素在视觉上相关联，程序中也是如此。这意味着，当用户聚焦到这个表单输入元素时，屏幕阅读器可以读出标签，让使用辅助技术的用户更容易理解应输入什么数据。
- 你可以点击关联的标签来聚焦或者激活这个输入元素，就像直接点击输入元素一样。这扩大了元素的可点击区域，让包括使用触屏设备在内的用户更容易激活这个元素。

将一个 `<label>` 和一个 `<input>` 元素匹配在一起，你需要给 `<input>` 一个 `id` 属性。而 `<label>` 需要一个 `for` 属性，其值和 `<input>` 的 `id` 一样。

另外，你也可以将 `<input>` 直接放在 `<label>` 里，此时则不需要 `for` 和 `id` 属性，因为关联已隐含存在：

```html
<label
  >Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

其他使用事项：

- 关联标签的表单控件称为这个标签的*已关联标签的控件*。一个 input 可以与多个标签相关联。
- 点击或者轻触（tap）与表单控件相关联的 `<label>` 也可以触发关联控件的 `click` 事件。

## 属性

该元素包含 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `for`

  - : 即和 `<label>` 元素在同一文档中的 [可关联标签的元素](/zh-CN/docs/Web/Guide/HTML/Content_categories#可标记的元素（labelable）) 的 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id)。文档中第一个 `id` 值与 `<label>` 元素 `for` 属性值相同的元素，如果可关联标签（labelable），则为*已关联标签的控件*，其标签就是这个 `<label>` 元素。如果这个元素不可关联标签，则 `for` 属性没有效果。如果文档中还有其他元素的 `id` 值也和 `for` 属性相同，`for` 属性对这些元素也没有影响。

    > **备注：** `<label>` 元素可同时有一个 `for` 属性和一个子代控件元素，只是 `for` 属性需要指向这个控件元素。

- `form`
  - : 表示与 label 元素关联的 {{htmlelement("form")}} 元素（即它的表单拥有者）。如果声明了该属性，其值应是同一文档中 {{HTMLElement("form")}} 元素的 `id`。因此你可以将 label 元素放在文档的任何位置，而不仅作为 {{HTMLElement("form")}} 元素的后代。

## 使用 CSS 样式

`<label>` 元素没有特别的样式考虑——结构上，`<label>` 是简单的行内元素，所以可使用和 {{htmlelement("span")}} 或 {{htmlelement("a")}} 元素大致相同的方式来应用样式。你也可以任意方式为 `<label>` 应用样式，只是不要让文本难以阅读。

## 示例

### 简单的 label

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('简单的 label', '200', '50', '')}}

### 使用 for 属性

```html
<label for="username">Click me</label> <input type="text" id="username" />
```

{{EmbedLiveSample('使用_for_属性', '200', '50', '')}}

## 无障碍问题

### 交互内容

不要在 `label` 元素内部放置可交互的元素，比如 {{HTMLElement("a", "anchors")}} 或 {{HTMLElement("button", "buttons")}}。这样做会让用户更难激活/触发与 `label` 相关联的表单输入元素。

#### Don't

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the <a href="terms-and-conditions.html">Terms and Conditions</a>
</label>
```

#### Do

```html example-good
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions
</label>
<p>
  <a href="terms-and-conditions.html">Read our Terms and Conditions</a>
</p>
```

### 标题

在一个 `<label>` 元素内部放置标题元素（[heading elements](/zh-CN/docs/Web/HTML/Element/Heading_Elements)）会干扰许多辅助技术，原因是标题通常被用于辅助导航（[a navigation aid](/zh-CN/docs/Web/HTML/Element/Heading_Elements#Navigation)）。若标签内的文本需要做视觉上的调整，应该使用适用于 `<label>` 元素的 CSS 类。

若一个 [表单](/zh-CN/docs/Web/HTML/Element/form)，或表单中的一部分需要一个标题，应使用 {{HTMLElement("legend")}} 元素置于 {{HTMLElement("fieldset")}} 元素中。

#### Don't

```html example-bad
<label for="your-name">
  <h3>Your name</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

#### Do

```html example-good
<label class="large-label" for="your-name">
  Your name
  <input id="your-name" name="your-name" type="text" />
</label>
```

### 按钮

若 {{HTMLElement("input")}} 元素声明了 `type="button"` 和有效的 `value` 属性，则不需要为其添加标签。添加标签可能会影响辅助技术理解这个输入按钮的语义。{{HTMLElement("button")}} 元素也一样。

## 技术概览

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">phrasing content</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Interactive_content">interactive content</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Form-associated_content">form-associated element</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">Phrasing content</a>, but no descendant <code>label</code> elements. No labelable elements other than the labeled control are allowed.</td>
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
   <th scope="row">Implicit ARIA role</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No corresponding role</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>No <code>role</code> permitted</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLLabelElement")}}</td>
  </tr>
 </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

其他表单相关的元素：

- {{HTMLElement("form")}}
- {{HTMLElement("input")}}
- {{HTMLElement("button")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("legend")}}
- {{HTMLElement("select")}}
- {{HTMLElement("optgroup")}}
- {{HTMLElement("option")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("output")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("meter")}}
