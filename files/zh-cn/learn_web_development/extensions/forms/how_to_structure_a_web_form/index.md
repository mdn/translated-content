---
title: 如何构建 HTML 表单
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
original_slug: Learn/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

在介绍了基本知识后，我们现在来详细了解用于为表单的不同部分提供结构和意义的元素。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">对 HTML 的基本理解</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解如何构建 HTML 表单并赋予其语义，使其可用且具有无障碍性。
      </td>
    </tr>
  </tbody>
</table>

表单的灵活性使它们成为 [HTML](/zh-CN/docs/Learn_web_development/Core/Structuring_content) 中最复杂的结构之一。你可以使用专用的表单元素和属性构建任何类型的基本表单。在构建 HTML 表单时使用正确的结构将有助于确保表单可用性和[无障碍性](/zh-CN/docs/Learn_web_development/Core/Accessibility)。

## \<form> 元素

{{HTMLElement("form")}} 元素按照一定的格式定义了表单和确定表单行为的属性。每次创建 HTML 表单时，都必须使用该元素，并将所有内容嵌套在表单中。许多辅助技术和浏览器插件都能发现 {{HTMLElement("form")}} 元素，并实施特殊钩子使其更易于使用。

我们早在之前的文章中就遇见过它了。

> [!WARNING]
> 严禁在一个表单内嵌套另一个表单。嵌套会导致表单出现不可预测的行为。

在 {{HTMLElement("form")}} 元素之外也可以使用表单控件，但是如果你这样做了，那么除非使用 [`form`](/zh-CN/docs/Web/HTML/Element/input#form) 属性将其与表单关联，否则该控件与任何表单都没有任何关系。引入该特性是为了显式地将控件与表单绑定，即使控件没有嵌套在表单中。

下面我们来介绍一下嵌套在表单中的结构元素。

## \<fieldset> 和 \<legend> 元素

{{HTMLElement("fieldset")}} 元素是一种方便的用于创建具有相同目的（出于样式和语义目的）的微件组的方式。你可以在 {{HTMLElement("fieldset")}} 起始标签后加上一个 {{HTMLElement("legend")}} 元素，来给 {{HTMLElement("fieldset")}} 做标签。{{HTMLElement("legend")}} 的文本内容形式地描述了 {{HTMLElement("fieldset")}} 里所含有微件的用途。

许多辅助技术在使用 {{HTMLElement("legend")}} 元素时，会将其视为相应 {{HTMLElement("fieldset")}} 元素中每个控件标签的一部分。例如，[Jaws](https://www.freedomscientific.com/products/software/jaws/) 和 [NVDA](https://www.nvaccess.org/) 等屏幕阅读器会在说出每个控件的标签之前先说出图例的内容。

这里有一个小例子：

```html
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Large</label>
    </p>
  </fieldset>
</form>
```

> [!NOTE]
> 你可以在 [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html)（[也可以查看在线示例](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)）中看到该例。

当阅读上述表格时，屏幕阅读器将会为第一个微件读出“Fruit juice size small”，“Fruit juice size medium”为第二个，“Fruit juice size large”为第三个。

本例中的用例是最重要的。每当使用一组单选按钮时，都应该将它们嵌套在 {{HTMLElement("fieldset")}} 元素中。还有其他用例，一般来说，{{HTMLElement("fieldset")}} 元素也可以用来对表单进行分段。理想情况下，长表单应该在拆分为多个页面，但是如果表单很长，却必须在单个页面上，那么将以不同的关联关系划分的分段，分别放在不同的 fieldset 里，可以提高可用性。

因为它对辅助技术的影响， {{HTMLElement("fieldset")}} 元素是构建无障碍表单的关键元素之一。无论如何，你有责任不去滥用它。如果可能，每次构建表单时，请尝试[听一听屏幕阅读器](/zh-CN/docs/Learn_web_development/Core/Accessibility/Tooling#屏幕阅读器)如何解释它。如果听起来很奇怪，请尝试改进表单结构。

## \<label> 元素

正如我们在前一篇文章中看到的，{{HTMLElement("label")}} 元素是为 HTML 表单微件定义标签的正式方法。如果你想构建无障碍的表单，这是最重要的元素——当实现的恰当时，屏幕阅读器会连同有关的说明和表单元素的标签一起朗读。以我们在上一篇文章中看到的例子为例：

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

当 `<label>` 标签正确地通过 `for` 属性与 `<input>` 相关联（`for` 属性包含相应 `<input>` 元素的 `id` 属性）时，屏幕阅读器会读出诸如“Name, edit text”之类的东西。

还有另一种方法可以将表单控件与标签关联起来——将表单控件嵌套在 `<label>` 中，隐式地将其关联起来。

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

不过，即使在这种情况下，最佳做法也是设置 `for` 属性，以确保所有辅助技术都能理解标签和微件之间的关系。

如果没有设置标签，或者表单控件既没有隐式关联标签，也没有显式关联标签，屏幕阅读器只会读出“编辑”之类的东西，这样会没什么帮助。

### 标签也可点击！

正确设置标签的另一个好处是可以在所有浏览器中单击标签来激活相应的微件。这对于像文本输入这样的例子很有用，这样你可以通过点击标签，和点击输入区效果一样，来聚焦于它，这对于单选按钮和复选框尤其有用——这种控件的可点击区域可能非常小，设置标签来使它们可点击区域变大是非常有用的。

例如，点击下面示例中的“I like cherry”标签文本，就会切换 _taste_cherry_ 复选框的选定状态：

```html
<form>
  <p>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="1" />
    <label for="taste_1">I like cherry</label>
  </p>
  <p>
    <input type="checkbox" id="taste_2" name="taste_banana" value="2" />
    <label for="taste_2">I like banana</label>
  </p>
</form>
```

> [!NOTE]
> 你可以在 [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html)（[也可以查看在线示例](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)）中看到该例。

### 多个标签

严格地说，你可以在单个微件上放置多个标签，但是这不是一个好主意，因为一些辅助技术可能难以处理它们。在多个标签的情况下，你应该将微件和它的标签嵌套在一个 {{HTMLElement("label")}} 元素中。

让我们考虑下面这个例子：

```html
<p>必填字段后随 <span aria-label="required">*</span>。</p>

<!-- 这样写 -->
<!--div>
  <label for="username">名字：</label>
  <input id="username" type="text" name="username" required>
  <label for="username"><span aria-label="必须">*</label>
</div-->

<!-- 可能没有这样写好： -->
<!--div>
  <label for="username">
    <span>名字：</span>
    <input id="username" type="text" name="username" required>
    <span aria-label="必须">*</span>
  </label>
</div-->

<!-- 这样写是最好的： -->
<div>
  <label for="username">名字：<span aria-label="必须">*</span></label>
  <input id="username" type="text" name="username" required />
</div>
```

{{EmbedLiveSample("多个标签", 120, 120)}}

顶部的段落定义了必填元素的规则。该规则必须在使用之前列入，以便视力正常的用户和屏幕阅读器等辅助技术的用户在遇到必填元素之前就能了解其含义。虽然这有助于告知用户星号的含义，但不能依赖它。屏幕阅读器在遇到星号时会将其说成“_星号_”。当视力正常的鼠标用户悬停鼠标时，应显示“_必须_”，这可以通过使用 `title` 属性来实现。标题是否被朗读取决于屏幕阅读器的设置，因此同时包含 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性更为可靠，屏幕阅读器始终会读取该属性。

上述变体的效果会随着时间的推移而增强：

- 在第一个例子中，标签根本没有和 `input` 一起被念出来——读出来的只是“编辑”和单独被念出的标签。多个 `<label>` 元素会混淆屏幕阅读器。
- 在第二个例子中，稍微显得清晰一点了——标签和输入一起，读出的是“名字 星号 名字 编辑 必须”，但标签仍然是单独读出的。这还是有点令人困惑，但这次还是稍微好一点了，因为 `<input>` 和 `label` 联系起来了。
- 第三个例子是最好的——实际标签是一起读出的，标签和输入读出的是“名字 必须 编辑 必须”。

> [!NOTE]
> 你可能会得到一些不同的结果，这取决于你的屏幕阅读器。这是在 VoiceOver 上测试的（NVDA 的行为也类似）。我们也乐于听听你的试验结果。

> [!NOTE]
> 你可以在 GitHub 上看到 [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html)（[也可以查看在线示例](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)）。不要运行 2 个或 3 个未注释版本的示例——如果你有多个标签和多个输入相同的 ID，那么屏幕阅读器肯定会感到困惑！

## 用于表单的通用 HTML 结构

除了特定于 HTML 表单的结构之外，还应该记住表单同样是 HTML。这意味着你可以使用 HTML 的所有强大功能来构造一个 HTML 表单。

正如你在示例中可以看到的，通常的做法是用 {{HTMLElement("ul")}} 或 {{HTMLElement("ol")}} 列表中的 {{HTMLElement("li")}} 元素来封装标签及其微件。{{HTMLElement("p")}} 和 {{HTMLElement("div")}} 元素也很常用。建议使用列表来构建多个复选框或单选按钮。

除了 {{HTMLElement("fieldset")}} 元素之外，使用 HTML 标题（如 {{htmlelement("Heading_Elements", "h1")}}、{{htmlelement("Heading_Elements", "h2")}}）和分段（如 {{htmlelement("section")}}）来构造一个复杂的表单也是一种常见的做法。

最重要的是，要找到一种舒适的编码风格，使表单易于访问和使用。每个独立的功能部分都应包含在一个单独的 {{htmlelement("section")}} 元素中，{{htmlelement("fieldset")}} 元素包含单选按钮。

### 动手练习：构建一个表单结构

让我们把这些想法付诸实践，建立一个稍微复杂一点的表单结构——一个支付表单。这个表单将包含许多你可能还不了解的微件类型——现在不要担心这个，在下一篇文章（[基本的原生表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)）中，你将了解它们是如何工作的。现在，当你遵循下面的指令时，请仔细阅读这些描述，并开始理解我们使用的包装器元素是如何构造表单的，以及为什么这么做。

1. 在开始之前，在计算机上的一个新目录中，创建一个[空白模板文件](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)的本地副本。
2. 接下来，通过添加 {{htmlelement("form")}} 元素来创建一张表单：

   ```html-nolint
   <form>
   ```

3. 在 `<form>` 标签内，以添加一个标题和段落开始，告诉用户必填的字段是如何标记的：

   ```html-nolint
   <h1>付款表单</h1>
   <p>
     必需的字段已使用 <strong><span aria-label="required">*</span></strong> 标示。
   </p>
   ```

4. 接下来，我们将在表单中添加一个更大的代码段，在我们之前的代码下面。在这里，你将看到，我们正在将联系人信息字段包装在一个单独的 {{htmlelement("section")}} 元素中。此外，我们有一组三个单选按钮，每个单选按钮都放在自己的列表中（{{htmlelement("li")}}）元素。最后，我们有两个标准文本 {{htmlelement("input")}} 和它们相关的 {{htmlelement("label")}} 元素，每个元素包含在 {{htmlelement("p")}} 中，加上密码输入。现在将这些代码添加到你的表单中：

   ```html
   <section>
     <h2>联系人信息</h2>
     <fieldset>
       <legend>称号</legend>
       <ul>
         <li>
           <label for="title_1">
             <input type="radio" id="title_1" name="title" value="A" />
             Ace
           </label>
         </li>
         <li>
           <label for="title_2">
             <input type="radio" id="title_2" name="title" value="K" />
             King
           </label>
         </li>
         <li>
           <label for="title_3">
             <input type="radio" id="title_3" name="title" value="Q" />
             Queen
           </label>
         </li>
       </ul>
     </fieldset>
     <p>
       <label for="name">
         <span>名字：</span>
         <strong><span aria-label="必须">*</span></strong>
       </label>
       <input type="text" id="name" name="username" required />
     </p>
     <p>
       <label for="mail">
         <span>邮箱：</span>
         <strong><span aria-label="必须">*</span></strong>
       </label>
       <input type="email" id="mail" name="usermail" required />
     </p>
     <p>
       <label for="pwd">
         <span>密码：</span>
         <strong><span aria-label="必须">*</span></strong>
       </label>
       <input type="password" id="pwd" name="password" required />
     </p>
   </section>
   ```

5. 表单的第二个 `<section>` 是支付信息。在这里，我们有三个不同的微件以及它们的标签，每个都包含在 `<p>` 中。第一个是选择信用卡类型的下拉菜单（{{htmlelement("select")}}）。第二个是 `tel` 类型的 `<input>` 元素，用于输入信用卡号码；虽然我们可以使用 `number` 类型，但我们不需要数字的旋转 UI。最后一个是 `text` 类型的 `<input>` 元素，用于输入卡片的到期日期；其中包括 _placeholder_ 属性，用于指示正确的格式，以及 _pattern_ 属性，用于测试输入的日期是否具有正确的格式。这些更新的输入类型在 [HTML5 输入类型](/zh-CN/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)中重新引入。在上一节下方输入以下内容：

   ```html
   <section>
     <h2>付款信息</h2>
     <p>
       <label for="card">
         <span>信用卡类型</span>
       </label>
       <select id="card" name="usercard">
         <option value="visa">Visa</option>
         <option value="mc">Mastercard</option>
         <option value="amex">American Express</option>
       </select>
     </p>
     <p>
       <label for="number">
         <span>卡号：</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="tel" id="number" name="cardnumber" required />
     </p>
     <p>
       <label for="expiration">
         <span>到期日：</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input
         type="text"
         id="expiration"
         name="expiration"
         required
         placeholder="MM/YY"
         pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
     </p>
   </section>
   ```

6. 我们要添加的最后一个部分要简单得多，它只包含了一个 `submit` 类型的 {{htmlelement("button")}}，用于提交表单数据。现在把这个添加到表单的底部：

   ```html
   <section>
     <p>
       <button type="submit">验证付款请求</button>
     </p>
   </section>
   ```

7. 最后，通过添加 {{htmlelement("form")}} 关闭标签完成表单：

   ```html
   </form>
   ```

   ```css hidden
   h1 {
     margin-top: 0;
   }

   ul {
     margin: 0;
     padding: 0;
     list-style: none;
   }

   form {
     margin: 0 auto;
     width: 400px;
     padding: 1em;
     border: 1px solid #ccc;
     border-radius: 1em;
   }

   div + div {
     margin-top: 1em;
   }

   label span {
     display: inline-block;
     text-align: right;
   }

   input,
   textarea {
     font: 1em sans-serif;
     width: 250px;
     box-sizing: border-box;
     border: 1px solid #999;
   }

   input[type="checkbox"],
   input[type="radio"] {
     width: auto;
     border: none;
   }

   input:focus,
   textarea:focus {
     border-color: #000;
   }

   textarea {
     vertical-align: top;
     height: 5em;
     resize: vertical;
   }

   fieldset {
     width: 250px;
     box-sizing: border-box;
     border: 1px solid #999;
   }

   button {
     margin: 20px 0 0 0;
   }

   label {
     position: relative;
     display: inline-block;
   }

   p label {
     width: 100%;
   }

   label em {
     position: absolute;
     right: 5px;
     top: 20px;
   }
   ```

我们在下面完成的表单中应用了一些额外的 CSS。如果你想更改表单的外观，可以复制[示例](/zh-CN/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example)中的样式，或者访问[为 web 表单添加样式](/zh-CN/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)。

{{EmbedLiveSample("动手练习：构建一个表单结构","100%",620)}}

## 技能测试！

本文已经结束，但你还记得最重要的信息吗？在继续阅读之前，可以找到进一步的测试来验证是否记住了这些信息——请参见[技能测试：表格结构](/zh-CN/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_structure)。

## 总结

现在，你已经掌握了正确构建 web 表单所需的全部知识。我们将在接下来的几篇文章中介绍这里介绍过的许多功能，下一篇文章将更详细地介绍如何使用所有不同类型的表单部件来收集用户信息。

## 参见

- [A List Apart: _合理的表单：表单可用性检查清单_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

### 进阶内容

- [如何构建自定义表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [使用 JavaScript 发送表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
- [表单微件兼容性列表](/zh-CN/docs/Learn_web_development/Extensions/Forms)
