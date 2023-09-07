---
title: 创建我的第一个表单
slug: Learn/Forms/Your_first_form
---

{{LearnSidebar}}{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

本系列的一篇文章为你提供了第一次创建 web 表单的经验，包括设计一个简单表单、使用正确的 HTML 表单控件和其他 HTML 元素实现它、通过 CSS 添加一些非常简单的样式，以及如何将数据发送到服务器。稍后我们将在这一章节中更详细地扩展这些主题。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        <p>
          基本计算机素养和<a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
            >对 HTML 的基本理解</a
          >。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        熟悉 web
        表单是什么、它们的用途、如何设计它们，以及简单情况下需要的基本
        HTML 元素。
      </td>
    </tr>
  </tbody>
</table>

## web 表单是什么？

web 表单是用户和 web 站点或应用程序之间交互的主要内容之一。它们允许用户输入数据，大多数情况下会将数据发送到 web 服务器进行处理和存储（见后面的章节[发送表单数据](/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)），或者在客户端使用某种方式立刻更新界面（例如，添加列表中的另一个项目，或者显示或隐藏 UI 功能）。

web 表单是由一个或多个**表单控件**（有时称为**小部件**），以及一些有助于构建整个表单的附加元素组成——通常被称为 **HTML 表单**。这些控件可以是文本字段（单行或多行）、选择框、按钮、复选框或单选按钮，大部分是使用 {{htmlelement("input")}} 元素创建的，尽管还有一些其他元素需要学习。

还可对表单控件进行编程，以强制指定输入的格式和值（**表单验证**），并与文本标签配对，向有视力障碍的用户描述其用途。

## 设计表单

在开始编写代码之前，最好先退一步，花点时间考虑一下你的表单。设计一个快速的模型将帮助你定义你想要询问用户的正确的数据集。从用户体验（UX）的角度来看，要记住：表单越大，失去用户的风险就越大。保持简单，保持专注：只要求必要的数据。

在构建站点或应用程序时，设计表单是非常重要的一步。这超出了本文的范围，涵盖了表单的用户体验，但是如果你想深入了解这个主题，你应该阅读下面的文章：

- 杂志《Smashing Magazine》中有[很好的关于表单用户体验的文章](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/)，或许其中最重要的应该是它们的 [Extensive Guide To Web Form Usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/)。
- UXMatters 也是一个非常周到的资源，从基本的[最佳实践](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php)到复杂的问题如[多页表单](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php)，都有很好的建议。

在本文中，我们将构建一个简单的联系人表单。让我们做一个粗略的草图。

![The form to build, roughly sketch](form-sketch-low.jpg)

我们的表单将包含三个文本字段和一个按钮。我们向用户询问他们的姓名、电子邮件和他们想要发送的信息。点击这个按钮将把他们的数据发送到一个 web 服务器。

## 主动学习：使用 HTML 实现我们的表单

好了，现在我们准备进入 HTML 代码并对表单进行编码。为了构建我们的联系人表单，我们将使用以下 HTML 元素：{{HTMLElement("form")}}、{{HTMLElement("label")}}、{{HTMLElement("input")}}、{{HTMLElement("textarea")}} 和 {{HTMLElement("button")}}。

在进一步讨论之前，先创建一个[简单 HTML 模板](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)的本地副本——你将在这里输入表单的 HTML。

### `<form>` 元素

所有表单都以一个 {{HTMLElement("form")}} 元素开始：

```html
<form action="/my-handling-form-page" method="post"></form>
```

这个元素正式定义了一个表单。就像 {{HTMLelement("section")}} 元素或 {{HTMLelement("footer")}} 元素，它是一个容器元素，但它也支持一些特定的属性来配置表单的行为方式。它的所有属性都是可选的，但实践中最好至少要设置 [`action`](/zh-CN/docs/Web/HTML/Element/form#attr-action) 属性和 [`method`](/zh-CN/docs/Web/HTML/Element/form#attr-method) 属性。

- `action` 属性定义了在提交表单时，应该把所收集的数据送给谁（URL）去处理。
- `method` 属性定义了发送数据的 HTTP 方法（通常是 `get` 或 `post`）。

> **备注：** 如果你想深入了解这些属性是如何工作的，那么将在[发送表单数据](/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)文章中详细说明。

现在，将上面的 {{htmlelement("form")}} 元素添加到你的 HTML {{htmlelement("body")}} 中。

### `<label>`、`<input>` 和 `<textarea>` 元素

我们的联系人表单非常简单，包含三个文本字段，每个字段都有一个{{HTMLelement("label", "标签")}}。

- 名称的输入字段将是一个{{HTMLelement("input/text", "基本的单行文本字段")}}。
- 电子邮件的输入字段将是一个只{{HTMLelement("input/email", "接受电子邮件地址")}}的单行文本字段
- 消息的输入字段将是一个 {{HTMLelement("textarea")}}——基本的多行文本字段。

就 HTML 代码而言，我们需要如下的东西来实现这些表单小部件：

```html
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">E-mail:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  </ul>
</form>
```

更新你的表单代码，使其看起来像上面的代码。

使用 {{HTMLelement("li")}} 元素可以使我们更加方便地构造我们自己的代码，并且更容易样式化（参见本文后面的内容）。为了可用性和无障碍，我们为每个表单控件包含一个明确的标签。注意在所有 {{HTMLElement("label")}} 元素上使用 [`for`](/zh-CN/docs/Web/HTML/Attributes/for) 属性；它是将标签链接到表单控件的一种正规方式。这个属性引用对应的表单控件的 [`id`](/zh-CN/docs/Web/HTML/Global_attributes/id)。

这样做有一些好处。最明显的一个好处是允许用户单击标签以激活相应的表单控件，它还有助于使用屏幕阅读器的用户读取名称。如果你想更好地理解这个属性的其他好处，你可以找到[如何构造 web 表单](/zh-CN/docs/Learn/Forms/Form_validation)的详细信息。

在 {{HTMLElement("input")}} 元素中，最重要的属性是 `type` 属性。这个属性非常重要，因为它定义了 {{HTMLElement("input")}} 属性的行为方式。稍后你将在[原生表单控件](/zh-CN/docs/Learn/Forms/Basic_native_form_controls)文章中找到更多关于此的内容。

- 在我们的简单示例中，我们使用值 {{HTMLelement("input/text", "text")}} 作为第一个输入——这个属性的默认值。它表示一个基本的单行文本字段，接受任何类型的文本输入。
- 对于第二个输入，我们使用值 {{HTMLelement("input/email", "email")}}，它定义了一个只接受格式正确的电子邮件地址的单行文本字段。这会将一个基本的文本字段转换为一种“智能”字段，该字段将对用户输入的数据进行一些检查。在稍后的表单数据验证文章中，你将了解到更多关于[客户端表单验证](/zh-CN/docs/Learn/Forms/Form_validation)的信息。

最后但同样重要的是，要注意 `<input>` 和 `<textarea></textarea>` 的语法。这是 HTML 的一个奇怪之处。`<input>` 标签是一个空元素，这意味着它不需要关闭标签。相反，{{HTMLElement("textarea")}} 不是一个空元素，因此必须使用适当的结束标记来关闭它。这对 HTML 表单的特定特性有影响：定义默认值的方式。要定义 {{HTMLElement("input")}} 的默认值，你必须使用 [`value`](/zh-CN/docs/Web/HTML/Element/Input#value) 属性，如下所示：

```html
<input type="text" value="by default this element is filled with this text" />
```

相反，如果你想定义 {{HTMLElement("textarea")}} 的默认值，你只需在 {{HTMLElement("textarea")}} 元素的开始和结束标记之间放置默认值，就像这样：

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### `<button>` 元素

我们的表格已经快准备好了，我们只需要再添加一个按钮，让用户在填写完表单后发送他们的数据。这是通过使用 {{HTMLelement("button")}} 元素完成的。在 `</ul>` 这个结束标签上方添加以下内容：

```html
<li class="button">
  <button type="submit">Send your message</button>
</li>
```

你会看到 {{htmlelement("button")}} 元素也接受一个 `type`属性，它接受 `submit`、`reset` 或者 `button` 三个值中的任一个。

- 单击 `type` 属性定义为 `submit` 值（也是默认值）的按钮会发送表单的数据到 {{HTMLElement("form")}} 元素的 `action` 属性所定义的网页。
- 单击 `type` 属性定义为 `reset` 值的按钮 将所有表单小部件重新设置为它们的默认值。从用户体验的角度来看，这被认为是一种糟糕的做法。
- 单击 `type` 属性定义为 `button` 值的按钮，不会发生任何事！这听起来很傻，但是用 JavaScript 构建定制按钮非常有用。

> **备注：** 你还可以使用相应类型的 {{HTMLElement("input")}} 元素来生成一个按钮，如 `<input type="submit">`。{{htmlelement("button")}} 元素的主要优点是，{{HTMLElement("input")}} 元素只允许纯文本作为其标签，而 {{htmlelement("button")}} 元素允许完整的 HTML 内容，允许更复杂、更有创意的按钮内容。

## 基本表单样式

现在你已经完成了表单的 HTML 代码，尝试保存它并在浏览器中查看它。现在，你会看到它看起来很丑。

> **备注：** 如果你怀疑你的 HTML 代码不对，试着把它和我们完成的例子进行比较——[first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html)（你也可以[查看预览版](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)）。

如何排布好表单是公认的难点。这超出了本文的讨论范围，所以现在我们只需要让你添加一些 CSS 来让它看起来很好。

首先，在你的 HTML 头部中添加一个 {{htmlelement("style")}}元素。应该是这样的：

```html
<style></style>
```

在 `style` 标签中，添加如下的 CSS：

```css
form {
  /* 居中表单 */
  margin: 0 auto;
  width: 400px;
  /* 显示表单的轮廓 */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  /* 确保所有 label 大小相同并正确对齐 */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* 确保所有文本输入框字体相同
     textarea 默认是等宽字体 */
  font: 1em sans-serif;

  /* 使所有文本输入框大小相同 */
  width: 300px;
  box-sizing: border-box;

  /* 调整文本输入框的边框样式 */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* 给激活的元素一点高亮效果 */
  border-color: #000;
}

textarea {
  /* 使多行文本输入框和它们的 label 正确对齐 */
  vertical-align: top;

  /* 给文本留下足够的空间 */
  height: 5em;
}

.button {
  /* 把按钮放到和文本输入框一样的位置 */
  padding-left: 90px; /* 和 label 的大小一样 */
}

button {
  /* 这个外边距的大小与 label 和文本输入框之间的间距差不多 */
  margin-left: 0.5em;
}
```

保存并重新加载，现在它看起来没那么丑了。

> **备注：** 你可以在 GitHub 上的这里找到这个版本 [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html)（也可以在这儿看[在线演示](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)）。

## 向你的 web 服务器发送表单数据

最后一部分，也许是最棘手的部分，是在服务器端处理表单数据。{{HTMLelement("form")}} 元素通过 [`action`](/zh-CN/docs/Web/HTML/Element/form#attr-action) 属性和 [`method`](/zh-CN/docs/Web/HTML/Element/form#attr-method) 属性来定义发送数据的位置和方式。

但这还不够。我们需要为每个表单控件提供 `name` 属性。这些名称对客户端和服务端都很重要：在浏览器端，它告诉浏览器给每个数据的名称，在服务器端，它允许服务器按名称处理每个数据块。表单数据以**名称/值对**的形式发送到服务器。

要命名表单中的数据，你需要在每个表单小部件上使用 `name` 属性来收集特定的数据块。让我们再来看看我们的表单代码：

```html
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">E-mail:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>

    …
  </ul>
</form>
```

在我们的示例中，表单会发送三个已命名的数据块“`user_name`”、“`user_email`”和“`user_message`”。这些数据将用使用 [HTTP `POST`](/zh-CN/docs/Web/HTTP/Methods/POST) 方法，把信息发送到 URL 为“`/my-handling-form-page`”的目录下。

在服务器端，位于 URL“`/my-handling-form-page`”上的脚本将接收的数据作为 HTTP 请求中包含的 3 个键/值项的列表。这个脚本处理这些数据的方式取决于你。每个服务器端语言（PHP、Python、Ruby、Java、c 等等）都有自己的表单数据处理机制。深入到这个主题已经超出了本指南的范围，但是如果你想了解更多，我们已经在[发送表单数据](/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)文章中提供了一些示例。

## 总结

祝贺你，你已经构建了你的第一个 HTML 表单。它看起来就像这样：

```html hidden
<form action="/my-handling-form-page" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </div>

  <div>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_email" />
  </div>

  <div>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Send your message</button>
  </div>
</form>
```

```css hidden
form {
  /* Just to center the form on the page */
  margin: 0 auto;
  width: 400px;

  /* To see the limits of the form */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

div + div {
  margin-top: 1em;
}

label {
  /* To make sure that all label have the same size and are properly align */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* To make sure that all text field have the same font settings
     By default, textarea are set with a monospace font */
  font: 1em sans-serif;

  /* To give the same size to all text field */
  width: 300px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* To harmonize the look & feel of text field border */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* To give a little highlight on active elements */
  border-color: #000;
}

textarea {
  /* To properly align multiline text field with their label */
  vertical-align: top;

  /* To give enough room to type some text */
  height: 5em;

  /* To allow users to resize any textarea vertically
     It works only on Chrome, Firefox and Safari */
  resize: vertical;
}

.button {
  /* To position the buttons to the same position of the text fields */
  padding-left: 90px; /* same size as the label elements */
}

button {
  /* This extra margin represent the same space as the space between
     the labels and their text fields */
  margin-left: 0.5em;
}
```

{{ EmbedLiveSample('总结', '', '300') }}

然而，这仅仅是开始，现在是时候深入研究了。表单比我们在这里看到的要强大得多，本指南的其他文章将帮助你掌握其余部分。

{{NextMenu("Learn/HTML/Forms/How_to_structure_an_HTML_form", "Learn/HTML/Forms")}}

### 高级主题

- [如何构建自定义表单控件](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls)
- [通过 JavaScript 发送表单](/zh-CN/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [表单控件的属性兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
