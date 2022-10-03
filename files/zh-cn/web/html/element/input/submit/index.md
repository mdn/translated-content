---
title: <input type="submit">
slug: Web/HTML/Element/Input/submit
---

{{HTMLRef}}

**`submit`** 类型的 {{HTMLElement("input")}} 元素被渲染成按钮。当 {{event("click")}} 事件发生时 (用户点击按钮是一个典型的点击事件), {{Glossary("用户代理")}} 试图提交表单到服务器。

```html
<input type="submit" value="发送请求">
```

{{EmbedLiveSample("summary-example2", 650, 30)}}

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>{{domxref("DOMString")}} 展示在按钮的标签内</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{event("click")}}</td>
  </tr>
  <tr>
   <td><strong>支持的公共属性</strong></td>
   <td>{{htmlattrxref("type", "input")}} and {{htmlattrxref("value", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>value</code></td>
  </tr>
  <tr>
   <td><strong>方法</strong></td>
   <td>无</td>
  </tr>
 </tbody>
</table>

## 值

`<input type="submit">` 元素的 {{htmlattrxref("value", "input")}} 属性 包含一个展示在按钮标签上的 {{domxref("DOMString")}}，否则按钮没有正确的 value 值。

```html
<input type="submit" value="发送请求">
```

{{EmbedLiveSample("summary-example3", 650, 30)}}

如果没有指定一个`value` 值，按钮将会有一个通过用户代理选择的默认 label。这个 label 可能是 "Submit" 或者"Submit Query." 这里有一个默认 label 的提交按钮：

```html
<input type="submit">
```

{{EmbedLiveSample("summary-example1", 650, 30)}}

## 额外属性值

除了所有 {{HTMLElement("input")}} 元素共享的属性外，提交 `submit` 按钮输入还支持以下属性：

| 属性                                | 描述                                                                                                                                                                |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`formaction`](#formaction)         | 提交表单数据的 URL；覆盖表单的{{htmlattrxref("action", "form")}} 属性（如果有）                                                                          |
| [`formenctype`](#formenctype)       | 一个字符串，指定用于表单数据的编码类型                                                                                                                              |
| [`formmethod`](#formmethod)         | 提交表单时使用的 HTTP 方法 ({{HTTPMethod("get")}} 或 {{HTTPMethod("post")}})                                                                           |
| [`formnovalidate`](#formnovalidate) | 一个布尔值，如果存在，则意味着在将数据提交给服务器之前，表单的字段将不受约束验证（[constraint validation](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation)） |
| [`formtarget`](#formtarget)         | 提交表单后，将服务器返回的响应加载到 {{Glossary("browsing context")}} 中                                                                                |

### formaction

一个字符串，指示要将数据提交到的 URL。这优先于拥有 {{HTMLElement("input")}} 的 {{HTMLElement("form")}} 元素上的 {{htmlattrxref("action", "form")}} 属性。

此属性在 [`<input type="image">`](/zh-CN/docs/Web/HTML/Element/input/image) 元素和{{HTMLElement("button")}} 元素上也可用。

### formenctype

一个字符串，标识在将表单数据提交到服务器时要使用的编码方法。有三个允许的值：

- `application/x-www-form-urlencoded`
  - : 这是默认值，它使用 {{jsxref("encodeURI", "encodeURI()")}} 之类的算法对文本进行 URL 编码后，以字符串形式发送表单数据。
- `multipart/form-data`
  - : 使用 {{domxref("FormData")}} API 来管理数据，从而允许将文件提交到服务器。如果您的表单包含 {{htmlattrxref("type", "input")}} `file` ([`<input type="file">`](/zh-CN/docs/Web/HTML/Element/input/file)) 的任何 {{HTMLElement("input")}} 元素，则必须使用此编码类型。
- `text/plain`
  - : 纯文本; 通常仅对调试有用，因此您可以轻松查看要提交的数据。

如果指定，则 `formenctype` 属性的值将覆盖拥有表单的 {{htmlattrxref("action", "form")}}属性。

此属性在 [`<input type="image">`](/zh-CN/docs/Web/HTML/Element/input/image) 元素和{{HTMLElement("button")}} 元素上也可用。

### formmethod

一个字符串，指示提交表单数据时要使用的 HTTP 方法；此值将覆盖拥有表单上给出的任何 {{htmlattrxref("method", "form")}} 属性。允许的值为：

- `get`
  - : 通过从 `formaction` 或 {{htmlattrxref("action", "form")}} 通过从 ("?") 字符，然后附加表单数据，按照如下所述进行编码来构造 URL 通过 `formenctype` 或表单的 {{htmlattrxref("enctype", "form")}} 属性。然后，使用 HTTP {{HTTPMethod("get")}}请求将该 URL 发送到服务器。此方法适用于仅包含 ASCII 字符且没有副作用的简单形式。这是默认值。
- `post`
  - : 表单的数据包含在请求的正文中，该请求的正文使用 HTTP {{HTTPMethod("post")}} 发送到由 `formaction` 或 {{htmlattrxref("action", "form")}} 属性指定的 URL 请求。此方法支持复杂的数据和文件附件。
- `dialog`
  - : 此方法用于指示按钮仅关闭与输入关联的对话框，而根本不传输表单数据。

此属性在 [`<input type="image">`](/zh-CN/docs/Web/HTML/Element/input/image) 元素和{{HTMLElement("button")}} 元素上也可用。

### formnovalidate

布尔属性，如果存在，则指定在提交给服务器之前不应对表单进行验证。这将覆盖元素拥有表单上的 {{htmlattrxref("novalidate", "form")}} 属性的值。

此属性在 [`<input type="image">`](/zh-CN/docs/Web/HTML/Element/input/image) 元素和{{HTMLElement("button")}} 元素上也可用。

### formtarget

一个字符串，它指定一个名称或关键字，该名称或关键字指示提交表单后在何处显示收到的响应。该字符串必须是**浏览上下文**的名称 (即选项卡，窗口或 {{HTMLElement("iframe")}}。此处指定的值将覆盖 {{HTMLElement("form")}} 上拥有此输入的 {{htmlattrxref("target", "form")}} 属性。

除了选项卡，窗口或嵌入式框架的实际名称之外，还可以使用一些特殊的关键字：

- `_self`
  - : 将响应加载到与包含表单的浏览上下文相同的浏览上下文中。这将用接收到的数据替换当前文档。如果未指定，则使用默认值。
- `_blank`
  - : 将响应加载到新的未命名浏览上下文中。这通常是一个与当前文档相同的窗口中的新选项卡，但是根据 {{Glossary("user agent")}} 的配置可能会有所不同。
- `_parent`
  - : 将响应加载到当前浏览器的父浏览上下文中。如果没有父上下文，则其行为与 `_self` 相同。
- `_top`
  - : 将响应加载到顶级浏览上下文中；这是浏览上下文，它是当前上下文的最高级祖先。如果当前上下文是最顶层的上下文，则其行为与 `_self`相同。

此属性在 [`<input type="image">`](/zh-CN/docs/Web/HTML/Element/input/image) 元素和{{HTMLElement("button")}} 元素上也可用。

## 使用提交按钮

`<input type="submit">` 按钮用于提交 form 表单。如果你想要创建一个自定义的按钮，然后通过 JavaScript 自定义按钮的行为，你需要使用 [`<input type="button">`](/zh-CN/docs/Web/HTML/Element/input/button), 或者使用更好的 {{htmlelement("button")}} 元素。

如果你选择使用`<button>` 在你的 form 表单里创建按钮，请记住：它只是在{{HTMLElement("form")}}内部的 `<button>` ，应该被当作 "submit" 按钮来处理。所以你应该有一个明确指定哪一个按钮是提交按钮的习惯。

### 一个简单的提交按钮

我们将通过创建含有一个简单的提交按钮的表单来开始：

```html
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text">
  </div>
  <div>
    <input type="submit" value="Send">
  </div>
</form>
```

渲染效果如下：

{{EmbedLiveSample("A_simple_submit_button", 650, 100)}}

试着输入一些文字到文本字段，然后提交表单。

在提交时，键值对数据将会被发送到服务端。在此列子中，字符串将会是 `"text=usertext"`, "usertext" 是用户输入的字符在转换为被保护的特殊字符。数据被如何提交、提交到哪都由 `<form>的设置决定`; 到[Sending form data](/zh-CN/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data) 获取更多细节。

### 添加提交的快捷键

键盘快捷键就是使用键盘上的按键，让用户使用按键或组合按键来触发按钮。为了在提交按钮上添加键盘快捷键— 就像使用任何有实际意义的 {{HTMLElement("input")}} 一样，您可以使用 {{htmlattrxref("accesskey")}} 全局属性。

在此示例中，将 <kbd>s</kbd> 指定为访问键 (指定为访问键 <kbd>s</kbd> p 键加上浏览器/操作系统组合的特定修饰键。为了避免与用户代理自身的键盘快捷键冲突，请使用不同的修饰键 而不是主机上其他快捷方式的访问键。有关更多详细信息，请参见 {{htmlattrxref("accesskey")}}。

这是添加了 <kbd>s</kbd> 访问密钥的上一个示例：

```html
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text">
  </div>
  <div>
    <input type="submit" value="Send"
     accesskey="s">
  </div>
</form>
```

例如，在 Mac 版 Firefox 中，按 <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> 会触发“发送”按钮，而 Windows 上的 Chrome 使用 <kbd>Alt</kbd>+<kbd>S</kbd>.

{{EmbedLiveSample("Adding_a_submit_keyboard_shortcut", 650, 100)}}

上面示例的问题是用户将不知道访问密钥是什么！尤其如此，因为修饰符通常是非标准的以避免冲突。在构建网站时，请确保以不干扰网站设计的方式提供此信息（例如，通过提供易于访问的链接来指向有关网站访问密钥的信息）。向按钮添加工具提示 (使用 {{htmlattrxref("title")}} 属性) 也可以有所帮助，尽管这并不是出于无障碍目的的完整解决方案。

### 禁用和启用提交按钮

要禁用提交按钮，只需在其上指定 {{htmlattrxref("disabled")}} 全局属性，如下所示：

```html
<input type="submit" value="Disabled" disabled>
```

您可以在运行时通过简单地将`disable`设置为`true`或`false`来启用和禁用按钮。在 JavaScript 中，这看起来像 `btn.disabled = true` or `btn.disabled = false`.

> **备注：** 有关启用和禁用按钮的更多想法，请参见 [`<input type="button">`](/zh-CN/docs/Web/HTML/Element/input/button#Disabling_and_enabling_a_button) 。

## 验证方式

提交按钮不参与约束验证；他们没有约束的真实价值。

## 例子

我们在上面提供了一些简单的示例。关于提交按钮，实际上没有什么可说的。有时将这种控件称为“简单按钮”是有原因的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface which implements it.
- [Forms and buttons](/zh-CN/docs/Learn/HTML/Forms_and_buttons)
- [Forms (accessibility)](/zh-CN/docs/Web/Accessibility/ARIA/forms)
- [HTML forms](/zh-CN/docs/Learn/HTML/Forms)
- {{HTMLElement("button")}} 元素
