---
title: HTML 中的表单和按钮
short-title: 表单和按钮
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

HTML 中的表单和按钮是与网站用户进行交互的强大工具。它们常用于为用户提供控件，以便操作用户界面（UI）或在需要时输入数据。

本文将介绍表单和按钮的基础知识。实际上还有很多内容值得了解——比如各种输入类型和表单特性在此尚未提及，但本文将为你打下应对大多数场景的坚实基础。你可以根据需要逐步学习更高级或更特定的用法，这也是你在职业生涯中持续学习的一部分。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        熟悉 HTML 基础（如<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基础 HTML 语法</a
        >所述），了解文本级语义（如<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >标题和段落</a
        >和<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Lists"
          >列表</a
        >），理解如何<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >构建文档</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>理解表单和按钮是用户与网站交互的主要工具，与链接一起构成了用户操作网页的基本方式。</li>
          <li>了解不同类型的按钮。</li>
          <li>掌握常见的 <code>&lt;input&gt;</code> 类型。</li>
          <li>掌握常见属性，如 <code>name</code> 和 <code>value</code>。</li>
          <li>了解 <code>&lt;form&gt;</code> 元素，以及表单提交的基础知识。</li>
          <li>通过标签和正确的语义使表单具备无障碍性。</li>
          <li>其他控件类型：<code>&lt;textarea&gt;</code>、<code>&lt;select&gt;</code> 和 <code>&lt;option&gt;</code>。</li>
          <li>客户端验证的基础知识。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 用户交互

到目前为止，在本课程中你已经了解到用户与网页交互的几种方式：

- [链接](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Creating_links)可用于导航到同一页面或不同页面的不同内容部分。
- [`<video>` 和 `<audio>`](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) 元素通常含有播放/暂停、快进、回退等功能，这允许用户根据需要来消费媒体内容。

然而，这些功能通常更偏向于单向交互，让用户被动地消费内容。虽然这没问题，但 Web 是一种双向体验。网站用户会根据自己的喜好调整内容和服务的使用方式。他们可能会叫车、申请回电、提交反馈、进行投诉、网购商品并送货到家。

要实现这种双向交互体验，你需要使用按钮和表单。

按钮通常是通过 HTML 的 {{htmlelement("button")}} 元素创建的（有时也使用 {{htmlelement("input")}} 元素并将其 `type` 属性设置为 `button` 或 `submit` 值）。这些按钮用途广泛——你可以将它们与任意功能关联，实现什么功能只取决于你的想象力和编码能力。

表单是通过 {{htmlelement("form")}}、{{htmlelement("label")}}、{{htmlelement("input")}} 和 {{htmlelement("select")}} 等元素创建的。与简单的按钮相比，表单元素可以创建更复杂的控件——例如包含多个选项的下拉菜单，允许用户在不同的用户界面主题之间进行选择。

更重要的是，它们还可以用于创建表单，供用户在需要向网站服务器提交信息时填写。以电商网站为例——当你想搜索需要购买的商品时，会使用表单输入关键词；当你想付款并确认收货地址时，会使用表单填写邮寄地址，再用另外一个表单填写你的信用卡信息。

本文将主要探讨表单元素的传统用法。需要注意的是，按钮也常用于表单中，用于向网站服务器提交用户填写的数据。

讲完这些重要的理论，我们接下来将通过代码来探索按钮和表单是如何实现的。

## 按钮

正如上文所提到的，按钮在网页上有几种用途。首先，它们可用于触发某些功能，这在创建用户界面（UI）控件时非常有用。最简单的按钮可以通过以下代码实现如下：

```html live-sample___basic-button
<button>点击这里</button>
```

呈现出来的效果如下：

{{EmbedLiveSample("basic-button", "100%", "60")}}

出现在 `<button></button>` 标签的文字会显示在按钮内部，并且浏览器会为其应用一些基础样式，使它默认看起来和表现得像一个按钮。到目前为止，一切正常。不过，这里有一个问题。这个孤零零的按钮本身不会执行有用的任何操作。为了让这个按钮变得实用起来，你需要将它放入表单中（我们稍后将会讲解），或者为它添加一些 JavaScript。

例如，如果你将下面的 JavaScript 代码添加到上述按钮中：

```html hidden live-sample___basic-button-with-js
<button>点击这里</button>
```

```js live-sample___basic-button-with-js
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "你点击了这个按钮！！ ❤️";
  setTimeout(() => {
    btn.textContent = "点击这里";
  }, 1000);
});
```

它将产生如下输出——试着点击它看看效果：

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

你现在不需要去理解这段 JavaScript 是如何工作，你将在本课程的后续内容中学习到更多知识。

在下一节，你将看到按钮的第二个主要用途——提交表单。

## 表单的结构

一个基础的表单包含以下三个部分：

- 一个 {{htmlelement("form")}} 元素，用于包裹表单的所有内容。所有包含在 `<form></form>` 标签内的表单控件都属于同一个表单，它们的数据会在表单提交时一起发送。
- 一对或多对 {{htmlelement("label")}} 元素与表单控件元素（通常是 {{htmlelement("input")}} 元素，但也有其他类型，例如 {{htmlelement("select")}}）：
  - 表单控件元素允许用户选择或者输入一些数据，这些数据将在表单提交时发送到服务器。
  - `<label>` 元素为表单控件提供一个标识标签，用于描述应在控件中输入的数据内容。
- 一个 {{htmlelement("button")}} 元素，用于提交表单。

我们来看一个包含上述三项内容的基本示例。这个表单将用于收集用户的姓名和电子邮件地址，以便订阅新闻简报（不必担心——它目前尚未连接任何服务器，因此不会真正执行任何操作）。

```html live-sample___form-anatomy
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>第一个表单</title>
  </head>
  <body>
    <form action="./submit_page" method="get">
      <h2>订阅我们的新闻简报</h2>
      <p>
        <label for="name">姓名（必填）：</label>
        <input type="text" name="name" id="name" required />
      </p>
      <p>
        <label for="email">邮箱（必填）：</label>
        <input type="email" name="email" id="email" required />
      </p>
      <p>
        <button>订阅新闻简报！</button>
      </p>
    </form>
  </body>
</html>
```

呈现出来的效果如下：

{{EmbedLiveSample("form-anatomy", "100%", "200", , , , , "allow-forms")}}

如果你立刻点击“订阅新闻简报”按钮，会看见一个验证错误，因为没有填写任何数据。如果你填写了姓名和邮箱地址后再点击该按钮，则会看到一个 `404` 错误页面。

我们稍后会解释原因。在此之前，请将上面的 HTML 代码复制到你的[代码编辑器](/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors)新建的 HTML 文件中，然后在新的浏览器标签页打开它。

### `<form>` 元素

正如前面提到的，{{htmlelement("form")}} 元素作为表单的外层容器，用于将所有的表单控件组织到一起。当点击 `<button>` 按钮时，所有在表单控件中填写的数据将会被提交到服务器。`<form>` 元素可以包含多个属性，我们在示例中使用的两个最重要的属性是：

- `action`：包含一个路径，用于指定提交的表单数据将发送到哪个页面进行处理。稍后，当你提交表单时，你会在 URL 中看到 `/submit_page`。你还会收到一个 {{HTTPStatus("404")}} 错误响应，因为处理数据的页面实际上并不存在，但目前这样做是没有问题的。
- `method`：指定将表单数据发送到服务器时使用的数据传输[方法](/zh-CN/docs/Web/HTTP/Reference/Methods)。现在你不必太过担心这个属性；当值为 `get` 时，数据会作为参数附加在 URL 的末尾进行发送。

#### 检查提交的数据

1. 在单独的浏览器标签页打开示例，尝试输入姓名“Bob”，电子邮件地址为“bob@bob.com”。
2. 点击 `<button>`。

`action` 和 `method` 属性会使表单数据以下列 URL 形式提交：

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### 结构化表单

你可以在 `<form>` 元素中包含任意的 HTML 元素，用于组织表单控件本身，并为 CSS 样式提供可定位的容器，以便进行样式设置等操作。

在示例中，我们使用了一个[标题元素](/zh-CN/docs/Web/HTML/Reference/Elements/Heading_Elements)（`<h2>`）来描述该表单的用途。

我们还将每一对输入框/标签和提交按钮分别放在一个单独的 {{htmlelement("p")}} 元素中，这样每一组控件就会独占一行上。这些元素默认是行内（inline）的，这意味着如果我们不这么做，所有的控件将会处于同一行上。

这是表单结构化的常见形式。一些人使用 `<p>` 元素来分割表单控件，一些人使用 {{htmlelement("div")}}、{{htmlelement("section")}} 甚至是 {{htmlelement("li")}} 元素。只要使用的元素在语义上合理，这些其实并没有太大区别。例如，将表单项分组放在不同的段落或者内容区块中，或者作为列表项是合乎语义的。但使用[块级引用元素](/zh-CN/docs/Web/HTML/Reference/Elements/blockquote)、[侧边栏元素](/zh-CN/docs/Web/HTML/Reference/Elements/aside)或者是[联系人地址元素](/zh-CN/docs/Web/HTML/Reference/Elements/address)来表示就不太合适。

还有一个专门用来对表单控件进行分组的元素：{{htmlelement("fieldset")}}。当表单较复杂，或需要把多个复选框、单选按钮归为一组时，它就非常有用。稍后我们会给出几个 `<fieldset>` 的示例。

### `<input>` 元素

{{htmlelement("input")}} 元素表示用户在表单中输入的各种数据项。让我们来看一个基础表单中的例子：

```html
<input type="text" name="name" id="name" required />
```

这些属性的含义如下：

- `type`：指定要创建的表单控件类型。表单控件类型有很多，从各种简单的文本字段，到单选按钮、复选框等。当值为 `text` 时，会渲染一个可接受任意文本的基本文本框。
- `name`：为该数据项指定一个名称。当表单提交时，数据会以名值对（name/value pairs）的形式发送。一般来说，`name` 属性的值就是这个数据项的“名称”，而用户在文本框输入的数据就是这个数据项的“值”。
- `id`：指定一个用于标识该元素的 ID。在这里，它用于将该表单控件与对应的 `<label>` 标签关联起来。
- `required`：指定该表单控件在提交表单前必须填写。这应仅用于必填字段，而不应设置在可选字段上。

你需要知道的是，有些输入类型的值并不是用户直接在字段中输入的。例如 [`<input type="color">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/color) 会显示一个取色器，你可以从中选择颜色；[`<input type="radio">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/radio) 会显示一个单选按钮，可以被选中也可以不被选中。

对于单选按钮，一般需要在 `value` 属性中指定一个具体的值，表示当该按钮被选中时，提交到服务器的实际内容。注意，你*可以*在 `text` 和 `color` 等输入类型上也设置 `value` 属性，其效果是：表单控件在初次渲染完成时就预先填充这个值。

#### `required` 和 `value` 属性的实际效果

1. 再次打开你之前在单独的浏览器标签页中加载的示例，尝试在两个字段都未填写任何内容的情况下提交表单。你会在“Name”字段旁看到一条错误提示，例如“请填写此字段”（不同浏览器的提示内容可能会有所不同）。这就是 `required` 属性和浏览器默认的客户端表单验证机制在起作用。
2. 接着，尝试在第一个字段中输入一个有效的名字，但在第二个字段中输入一个无效的邮箱地址（例如“aaaa”）。这时你会在“Email”字段旁看到另一条错误提示，例如“请输入邮箱地址”。
3. 现在尝试修改表单，在第一个 `<input>` 中加入 `value="Bob"`。当你重新加载页面时，会看到第一个输入框中默认填入了“Bob”。

#### 特定类型的文本输入框

上面的第二个练习引出了一个有趣的问题。第二个输入字段特别要求输入一个邮箱地址，并会对填写的内容进行邮件格式的验证。如果你再次查看表单代码，就能发现原因——第二个 `<input>` 元素的 `type` 为 `email`。实际上，有许多专门用于处理特定类型数据的文本字段输入类型，例如：[`<input type="number">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/number)、[`<input type="password">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/password) 和 [`<input type="tel">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/tel) 等等。

你可以点击以上链接，了解这些输入类型的用途。建议你也浏览一下我们的 [`<input>`](/zh-CN/docs/Web/HTML/Reference/Elements/input) 参考，看看是否能发现其他更多专用的文本输入类型。

### `<label>` 元素

如上所述，{{htmlelement("label")}} 元素为表单控件提供了标识性标签，用于描述应该在控件中输入的数据。你可以在 `<label>` 元素中放置任意文本内容，但这些内容应准确描述关联表单控件所期望的数据类型。标签与控件之间的关联方式是：给表单控件设置一个 `id` 属性，然后给 `<label>` 设置 `for` 属性，其值与该控件的 `id` 相同。

例如：

```html
<label for="name">姓名（必填）：</label>
<input type="text" name="name" id="name" required />
```

`<label>` 元素的重要性体现在多个方面，尤其包括以下几点：

- 当视力障碍用户使用屏幕阅读器浏览和操作网页内容时，屏幕阅读器在遇到每个控件时，会朗读与之关联的标签文本。这能让用户更容易理解每个控件需要输入什么内容。
- 它们允许用户不仅可以点击控件本身，还可以点击标签文本来聚焦表单控件。这对移动设备用户尤其有用，因为在触摸屏上用手指精确选择表单控件可能比较困难。在这种情况下，扩大 **可点击区域** 会非常有帮助。

#### 显式与隐式表单标签

你在上文中看到的标签样式被称为**显式表单标签**——控件与标签之间的关联是通过 `id` 和 `for` 属性显式建立的。你也可以通过将控件嵌套在标签内的方式实现 **隐式表单标签**，如下所示：

```html
<label>
  姓名（必填）：
  <input type="text" name="name" required />
</label>
```

通过嵌套方式，控件与标签之间的关联是隐式建立的，因此你不再需要使用 `id` 和 `for` 属性。

这两种方式都可以使用，但我们建议你使用显式标签的方式。因为显式标签关联更容易识别和理解，尤其当你的 HTML 代码变得复杂时。此外，屏幕阅读器（以及其他辅助技术）有时不能正常处理隐式标签。

你可以在这篇文章中阅读更多关于表单标签的最佳实践：[HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/)，发表于 csstricks.com（2021 年）。

### `<button>` 元素

当一个 {{htmlelement("button")}} 元素被放在 `form` 元素中时，它的默认行为是提交表单，只要没有无效数据阻止客户端表单验证。你在之前的基础表单示例中已经见过了这种行为。

通过 `<button>` 元素的 `type` 属性可以指定按钮的其他行为：

- `<button type="submit">` 明确声明该按钮是“提交按钮”。一般来说不需要显式声明，除非你的 `<form>` 中包含了多个按钮，并且你想明确表示哪个按钮是用于提交表单的。这种情况非常罕见。
- `<button type="reset">` 创建一个*重置按钮*——这会立即清空表单中输入的所有内容，将表单恢复到初始状态。**不建议使用重置按钮**——在早期的网页中它们比较常见，但通常会造成更多困扰。许多人曾经经历过填写完长长的表单后，不小心点击了“重置”按钮而不是“提交”，结果只能重新填写表单。
- `<button type="button">` 创建一个普通按钮，其行为和 `<form>` 外的按钮一样。正如之前所见，普通按钮默认什么都不做，需要使用 JavaScript 来给它们添加功能。

> [!NOTE]
> 你也可以通过 `<input>` 元素配合不同的 `type` 属性来创建上述三种按钮：[`<input type="submit">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/submit)、[`<input type="reset">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/reset) 和 [`<input type="button">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/button)。但与 `<button>` 相比，它们存在许多限制，因此推荐使用 `<button>` 元素。

## 关于无障碍的小提示

我们之前已经提到过表单标签在无障碍性方面的重要性，但我们还想补充一些关于正确使用语义化 HTML 元素创建表单的重要性。（例如，使用 `<button>` 提交表单，而不是使用一个借助 CSS 和 JavaScript 模拟出来的 `<div>` 元素）。你确实可以利用 CSS 和 JavaScript 把几乎任何 HTML 元素“伪装成”表单控件，看起来像是一个按钮、输入框、下拉菜单等。开发者这么做通常是出于设计上的考虑——某些原生表单控件确实比较难自定义样式。

然而，这么做反而会增加你和用户的负担。事实上，浏览器已经默认为 `<button>` 和其他表单控件提供了许多便利功能，无需额外的 JavaScript 或代码，就能让表单更易于使用。

例如：

- 语义化元素可以被屏幕阅读器等辅助技术识别，并将内容传递给视觉障碍的用户。
- 表单控件和按钮默认支持键盘访问。在先前的示例中，你可以尝试使用 <kbd>Tab</kbd> 和 <kbd>Shift</kbd> + <kbd>Tab</kbd> 切换表单元素（这种操作被称为“Tab 键导航”）。
- 你还会注意到，当你使用 Tab 在表单元素间进行切换时，当前聚焦的元素会被蓝色轮廓标记出来（称为**焦点轮廓**）。这对于使用键盘进行操作的用户来说非常重要，因为它帮助用户知道自己目前操作的是哪一项。

如果你使用错误的语义化元素来构建表单，你就得自己手动实现这些功能，否则这些表单元素就无法按照用户预期的方式工作，甚至会被认为是“坏掉了”。所有这些细节都会影响用户体验。

## 其他控件类型

有很多其他类型的控件可以用来在表单中收集数据。我们来看一个稍微复杂点的例子，然后对其逐步解析和说明。

> [!NOTE]
> 在这个例子中，我们假设用户已经注册并处于登录状态，因此无需收集姓名和邮箱地址等信息。

```html live-sample___form-other-controls
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>第二个表单</title>
  </head>
  <body>
    <form action="./payment_page" method="get">
      <h2>报名参见见面会</h2>
      <fieldset>
        <legend>选择酒店房型：</legend>
        <div>
          <input
            type="radio"
            id="hotelChoice1"
            name="hotel"
            value="economy"
            checked />
          <label for="hotelChoice1">经济型（+$0）</label>

          <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
          <label for="hotelChoice2">高级型（+$50）</label>

          <input
            type="radio"
            id="hotelChoice3"
            name="hotel"
            value="penthouse"
            disabled />
          <label for="hotelChoice3">顶级套房（+$150）</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>要参加的课程：</legend>
        <div>
          <input type="checkbox" id="yoga" name="yoga" />
          <label for="yoga">瑜伽（+$10）</label>

          <input type="checkbox" id="coffee" name="coffee" />
          <label for="coffee">咖啡烘焙（+$20）</label>

          <input type="checkbox" id="balloon" name="balloon" />
          <label for="balloon">气球动物艺术（+$5）</label>
        </div>
      </fieldset>
      <p>
        <label for="transport">出行方式：</label>
        <select name="transport" id="transport">
          <option value="">--请选择一项--</option>
          <option value="plane">乘坐飞机</option>
          <option value="bike">骑自行车</option>
          <option value="walk">徒步</option>
          <option value="bus">乘坐公交</option>
          <option value="train">搭乘火车</option>
          <option value="jetPack">使用喷气背包</option>
        </select>
      </p>
      <p>
        <label for="comments">其他备注：</label>
        <textarea id="comments" name="comments" rows="5" cols="33"></textarea>
      </p>
      <p>
        <button>去结账</button>
      </p>
    </form>
  </body>
</html>
```

呈现的效果如下：

{{EmbedLiveSample("form-other-controls", "100%", "500", , , , , "allow-forms")}}

我们建议你现在将这段代码复制到你的代码编辑器中保存为 HTML 文件，并在浏览器中打开。接下来的几个小节中，我们会逐一讲解这个表单中使用的各种控件类型。

在继续之前，请在你的本地副本中试用不同的表单控件并选择一些值。尝试提交表单，看看提交后在 URL 中显示的数据是什么样子的。

### 单选按钮

“选择酒店房型”按钮是通过 [`<input type="radio">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/radio) 控件实现的。这些控件会渲染为一组按钮控件，每次只能选择其中一个——你不能同时选中多个。它们的名字来源于老式收音机上的按钮：按下一个按钮，之前选中的按钮就会弹出。

我们的示例代码如下：

```html
<fieldset>
  <legend>选择酒店房型：</legend>
  <div>
    <input
      type="radio"
      id="hotelChoice1"
      name="hotel"
      value="economy"
      checked />
    <label for="hotelChoice1">经济型（+$0）</label>

    <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
    <label for="hotelChoice2">高级型（+$50）</label>

    <input
      type="radio"
      id="hotelChoice3"
      name="hotel"
      value="penthouse"
      disabled />
    <label for="hotelChoice3">顶级套房（+$150）</label>
  </div>
</fieldset>
```

`radio` 输入控件的工作方式大致和 `text` 输入控件相同，但也有几点不同：

- 每组单选按钮的 `name` 属性值必须相同，以便将它们关联成一组。如果 `name` 属性值不同，它们会被视为不同的组，提交时也会有发送不同的值。
- 每个单选按钮必须包含一个 `value` 属性，用于指定提交时该按钮对应的值。提交的数据会是一个名值对，其中名称（即 `name`）始终相同，例如 `hotel=economy` 或 `hotel=superior`。
- 每个单选按钮的 `<label>` 应该描述该具体选项的值，而不是你正在选择的这一组选项所代表的字段含义。描述整组选项的推荐做法是使用 {{htmlelement("fieldset")}} 元素包裹这些选项，并用其子元素 {{htmlelement("legend")}} 来提供整体描述。

> [!NOTE]
> 除了用于结构化和标记表单外，fieldset 还有其他用途，例如可用于一次性[禁用](#禁用表单控件)整组控件。

还值得注意的是，我们为第一个单选按钮添加了 `checked` 属性——这会让它在页面初次加载时默认被选中。这意味着总会有一个选项被选中，并且你无法取消选中一个单选按钮，除非选择另一个。

试着将第一个单选按钮中的 `checked` 属性移除，保存，然后刷新页面，观察其效果。在继续学习之前记得把它加回来。

#### 禁用表单控件

在单选按钮的示例中，你会注意到第三个单选按钮设置了 `disabled` 属性。这会导致该控件显示为灰色且无法被选中。这在很多情况下都非常有用，比如某个选项通常是可用的，但目前暂时不可用。例如，某个产品可能已经售罄，或者像我们示例中那样，顶层套房全部预订完毕！

你可以在任何表单控件上设置 `disabled` 属性，包括 `<button>` 元素。`<fieldset>` 元素也可以接受 `disabled` 属性——这会导致该 `<fieldset>` 内的所有表单控件都被禁用。

试着给两个 `<fieldset>` 元素设置 `disabled` 属性，保存后刷新页面，观察其效果。然后在继续操作之前，再把它们移除。

### 复选框

“选择要参加的课程”的复选框是使用 [`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox) 控件实现的。这些控件渲染为一组开关状态的复选框。与单选按钮不同，你可以同时选择多个选项。

```html
<fieldset>
  <legend>选择要参加的课程：</legend>
  <div>
    <input type="checkbox" id="yoga" name="yoga" />
    <label for="yoga">瑜伽（+$10）</label>

    <input type="checkbox" id="coffee" name="coffee" />
    <label for="coffee">咖啡烘焙（+$20）</label>

    <input type="checkbox" id="balloon" name="balloon" />
    <label for="balloon">气球动物艺术（+$5）</label>
  </div>
</fieldset>
```

正如你在代码片段中看到的，单选按钮和复选框的实现方式非常相似（它们都可以使用 `checked` 属性，在页面加载时默认被选中）。它们的行为也比较类似，不同点在于单选按钮允许你从多个选项中选择零个或一个，而复选框允许你从多个选项中选择零个或多个。

主要区别（除了 `type` 属性值的不同）在于每个复选框的 `name` 属性值不同，且通常没有设置 `value` 属性。这意味着，每个复选框代表不同的数据值，而单选按钮只能代表一个值。当表单提交时，如果复选框被选中，则提交的值为 `on`，例如：`yoga=on`、`ballon=on` 等等。

> [!NOTE]
> 你可以通过为复选框添加 `value` 属性来自定义提交的值，例如：`<input type="checkbox" id="yoga" name="yoga" value="yes" />` 被选中时，会提交 `yoga=yes`。不过，这样做意义不大。复选框要么提交一个固定值（如果选中），要么不提交。提交给服务器的具体值其实并不重要。

### 下拉菜单

下拉菜单，比如我们示例中的“出行方式”选择控件，不是通过 `<input>` 类型实现的，而是使用 {{htmlelement("select")}} 和 {{htmlelement("option")}} 元素来实现的：

```html
<label for="transport">出行方式：</label>
<select name="transport" id="transport">
  <option value="">--请选择一项--</option>
  <option value="plane">乘坐飞机</option>
  <option value="bike">骑自行车</option>
  <option value="walk">徒步</option>
  <option value="bus">乘坐公交</option>
  <option value="train">搭乘火车</option>
  <option value="jetPack">使用喷气背包</option>
</select>
```

`<select>` 元素囊括了所有不同的选项值。你需要在这里设置 `id` 属性，将控件与其标签关联起来，同时设置 `name` 属性，指定提交时数据项的名称。

数据项的每个可能值由嵌套在 `<select>` 内的 `<option>` 元素表示。每个 `<option>` 元素可以带有 `value` 属性，指定如果该选项被选中时提交的值。如果未指定 `value`，则使用 `<option></option>` 标签内的文本内容作为提交值。

> [!NOTE]
> 如果你想在页面加载时默认选中某个选项，可以在对应的 `<option>` 元素上添加 `selected` 属性。

### 多行文本输入框

多行文本输入框使用 {{htmlelement("textarea")}} 元素创建：

```html
<label for="comments">其他备注：</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

它们的行为与 `<input type="text">` 元素类似，不同之处在于它们允许输入多行文本。`rows` 属性指定文本区域默认显示的行数，而 `cols` 属性指定文本区域默认显示的列数。如果未指定这两个属性，浏览器默认使用 `cols="20"` 和 `rows="2"`。

大多数浏览器会在文本区域的一个角落显示一个拖拽手柄，可以用来调整文本区域的大小。你可以试着用这个拖拽手柄调整演示中的文本区域大小。

## 表单验证

前面我们已经了解了浏览器会提供一些基本的客户端表单验证功能。`required` 属性用于指定某个字段必须填写，才能提交表单；它还会检查某些特定类型的字段（例如电子邮件地址、URL、数字等）是否输入了正确的值。表单验证之所以重要，主要有两个原因：

- 确保提交的数据格式正确，从而避免在应用程序中引发错误。
- 防止数据引发安全问题。恶意用户可能会提交特意构造的数据，在不安全的应用中，这些数据可能会执行删除数据库或控制系统等命令。

表单验证是一个非常庞大的话题，超出了本文的范围，因此我们不会详细展开，只做简单介绍。需要注意的是，表单验证主要有两种类型：

- 客户端验证：在浏览器端进行，通常通过表单验证属性（如 `required`）和 JavaScript 结合实现。客户端验证可以即时提示用户输入有误，但它并不可靠，不能有效阻止恶意数据。因为用户可以关闭 JavaScript 或修改客户端代码，从而绕过验证。
- 服务器端验证：在服务器上进行，使用服务器端所采用的任意语言实现。错误格式的数据可以是意外发送的，也可以是有意而为之。经验法则是：服务器永远不要信任客户端发送的任何数据，以避免由于格式错误的消息而引发漏洞或安全问题。服务器端验证更适合阻止恶意消息，因为服务器端代码更难被篡改。但它无法像客户端验证那样及时给用户反馈，因为数据必须先发送到服务器验证，服务器再把结果返回给用户。

简而言之，不要只选择客户端验证或服务器端验证——你需要两者结合。你需要客户端验证来为用户的输入提供即时反馈；同时也需要服务器端验证，来确保发送到服务器的消息格式是安全、可处理的。如果你想开始深入学习表单验证，可以从[客户端表单验证](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)开始。

## 技能测试！

你已经阅读完本文，但你能记住重要的信息吗？在继续之前，你可以进行一些进一步的测试，以验证你是否掌握了这些信息。请参阅[技能测试：表单和按钮](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons)

## 总结

以上就是目前的全部内容。关于表单还有很多知识需要学习，但现在你已经掌握了足够的基础，可以继续深入学习其他内容了。

接下来，我们将学习如何调试你的 HTML 代码中的问题。

## 参见

- [Web 表单——处理用户数据](/zh-CN/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
