---
title: UI 伪类
slug: Learn/Forms/UI_pseudo-classes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

在以前的文章中，我们以一般的方式介绍了各种表单控件的样式。这包括一些伪类的使用，例如，使用 `:checked` 来选择一个选中的复选框。在这篇文章中，我们将详细探讨在现代浏览器中可用的不同 UI 伪类，以便在不同状态下对表单添加样式。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机知识，对 <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML">HTML</a> 和 <a href="/zh-CN/docs/Learn/CSS/First_steps">CSS</a> 的基本了解，包括对<a
          href="/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements"
          >伪类和伪元素</a
        >的基本认识。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解表单的哪些部分难以添加样式，以及为什么难以添加样式；了解如何对这些部分添加样式。
      </td>
    </tr>
  </tbody>
</table>

## 都有什么样的伪类？

我们可以使用的（截至 [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)）与表单相关的原始伪类是：

- {{cssxref(":hover")}}：只在鼠标指针悬停在一个元素上时选择该元素。
- {{cssxref(":focus")}}：只在元素被聚焦时选择该元素（也就是说，通过键盘上的 tab 键选中该元素）。
- {{cssxref(":active")}}：只在元素被激活时选择该元素（也就是说，通过点击或键盘上的 <kbd>Return</kbd> / <kbd>Enter</kbd> 键选中该元素）。

这些基本的伪类现在对你来说应该很熟悉了。最近，[CSS Selector Level 3](https://www.w3.org/TR/selectors-3/) 和 [CSS Basic UI Level 3](https://drafts.csswg.org/css-ui-3/#pseudo-classes) 增加了更多与 HTML 表单有关的伪类，提供了其他几个有用的定位条件以便于利用。我们将在下面的章节中更详细地讨论这些内容，但简单地说，我们要看的主要内容是：

- {{cssxref(':required')}} 和 {{cssxref(':optional')}}：针对必需的或可选的表单控件。
- {{cssxref(":valid")}} 和 {{cssxref(":invalid")}}、{{cssxref(":in-range")}} 和 {{cssxref(":out-of-range")}}：针对表单控件，根据对其设置的表单验证约束，或范围内/范围外，是有效/无效的。
- {{cssxref(":enabled")}} 和 {{cssxref(":disabled")}}、{{cssxref(":read-only")}} 和 {{cssxref(":read-write")}}：针对启用或禁用的表单控件（例如，设置了 `disabled` HTML 属性），以及读写或只读的表单控件（例如，设置了 `readonly` HTML 属性）。
- {{cssxref(":checked")}}、{{cssxref(":indeterminate")}} 和 {{cssxref(":default")}}：分别针对被选中的复选框和单选按钮，处于不确定的状态（既不被选中也不被选中），以及页面加载时默认选择的选项（例如，一个设置了 `checked` 属性的 [`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Element/input/checkbox)，或者一个设置了 `selected` 属性的 [`<option>`](/zh-CN/docs/Web/HTML/Element/option) 元素）。

还有很多其他的，但上面列出的是最明显有用的。其中一些旨在解决非常具体的小众问题，或者在浏览器中还没有得到很好的支持。上面列出的那些都有相当好的浏览器支持，但当然，你应该仔细测试你的表单实现，以确保它们对你的目标受众有效。

> **备注：** 这里讨论的许多伪类都是关于根据表单控件的验证状态（它们的数据是否有效？）你会在我们的下一篇文章[客户端表单验证](/zh-CN/docs/Learn/Forms/Form_validation)中学习到更多关于设置和控制验证约束的知识，但现在我们将保持关于表单验证的简单内容，以便不会混淆。

## 根据必需与否为输入控件添加样式

关于客户端表单验证的一个最基本的概念是，一个表单输入是必需的（在提交表单之前必须填写）还是可选的。

{{htmlelement('input')}}、{{htmlelement('select')}} 和 {{htmlelement('textarea')}} 元素都有一个 `required` 属性可用，设置后意味着你必须在表单成功提交前填入该控件。比如说：

```html
<form>
  <fieldset>
    <legend>Feedback form</legend>
    <div>
      <label for="fname">First name: </label>
      <input id="fname" name="fname" type="text" required />
    </div>
    <div>
      <label for="lname">Last name: </label>
      <input id="lname" name="lname" type="text" required />
    </div>
    <div>
      <label for="email">
        Email address (include if you want a response):
      </label>
      <input id="email" name="email" type="email" />
    </div>
    <div><button>Submit</button></div>
  </fieldset>
</form>
```

在这里，first name 和 last name 是必需的，但电子邮件地址是可选的。

你可以使用 {{cssxref(':required')}} 和 {{cssxref(':optional')}} 伪类来匹配这两种状态。例如，如果我们将下列 CSS 应用于上述 HTML 代码中：

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

必需的表单控件会有一个黑色的边框，可选的表单控件会有一个银色的边框，像这样：

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

你也可以尝试在不填写表单的情况下提交，观察浏览器默认给你的客户端验证错误信息。

上述形式并不坏，但也不是很好。首先，我们只用颜色来表示必填和可选的状态，这对色盲的人来说不是很好。其次，网络上关于必填状态的标准惯例是一个星号（\*），或者将“必需”这个词与相关的控件联系起来。

在下一节，我们将看一个更好的例子，使用 `:required` 表示必填字段，这也是对使用生成内容的挖掘。

> **备注：** 你可能不会发现自己经常使用 `:optional` 这个伪类。表单控件默认是可选的，所以你可以将可选状态的样式当作默认样式，然后在必需的组件上添加样式。

> **备注：** 如果一组同名的单选按钮中的一个单选按钮具有 `required` 属性，那么所有的单选按钮都将无效，直到有一个被选中，但只有分配了该属性的单选按钮才会真正匹配 {{cssxref(':required')}}。

## 使用伪类生成内容

在之前的文章中，我们已经看到了[生成内容](/zh-CN/docs/Web/CSS/CSS_generated_content)的用法，现在是一个更详细地谈论它的好时机。

我们可以使用 [`::before`](/zh-CN/docs/Web/CSS/::before) 和 [`::after`](/zh-CN/docs/Web/CSS/::after) 伪元素以及 [`content`](/zh-CN/docs/Web/CSS/content) 属性来使一大块内容出现在受影响元素的前面或后面。这块内容没有被添加到 DOM 中，所以对屏幕阅读器来说是看不见的；它是文档样式的一部分。因为它是一个伪元素，所以它可以像任何实际的 DOM 节点一样被作为目标样式。

当你想给一个元素添加一个视觉指示器，比如一个标签或图标，但又不想让它被辅助技术发现时，这就非常有用。例如，在我们的[自定义单选按钮示例](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html)中，我们使用生成的内容来处理单选按钮被选中时内圈的位置和动画：

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

这真的很有用——屏幕阅读器已经让它们的用户知道单选按钮或复选框被选中了，所以你不希望它们读出另一个表示选择的 DOM 元素——那会让人困惑。有一个纯粹的视觉指示器可以解决这个问题。

> **备注：** 这个示例也说明了如何将伪类和伪元素结合使用。

回到我们之前的必填/可选的例子，这次我们不会改变输入本身的外观——我们将使用生成的内容来添加一个指示标签（[在这里看到它的实时演示](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html)，并在这里看到[源代码](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)）。

首先，我们要在表单的顶部添加一段话，说明你在寻找什么：

```html
<p>Required fields are labelled with "required".</p>
```

当屏幕阅读器用户到达每个需要的输入时，他们会得到“required”这个额外的信息，而视力正常的用户会看到我们的标签。

由于表单输入不直接支持将生成的内容放在上面（这是因为生成的内容是相对于元素的格式化框放置的，但表单输入的工作方式更像被替换的元素，因此没有格式化框），我们将添加一个空的 [`<span>`](/zh-CN/docs/Web/HTML/Element/span) 元素来存放生成的内容：

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

一个直接的问题是，由于 input 和 label 都设置了 `width: 100%`，span 会沉到输入框下一行中。为了修复这一点，我们令父 `<div>` 为弹性容器，同时令它如果内容变得太长，就把它的内容换行：

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

这样做的效果是，标签和输入是分开的，因为它们都是 `width: 100%`，但 `<span>` 的宽度是 0，所以它可以和 input 位于同一行。

现在来看看生成的内容。我们使用这个 CSS 代码创建它：

```css
input + span {
  position: relative;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "required";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}
```

我们将 `<span>` 设置为 `position: relative`，这样我们就可以将生成的内容设置为 `position: absolute`，并将其相对于 `<span>` 而不是 `<body>` 定位（出于定位需求，生成的内容就像它是生成元素的一个子节点）。

然后我们给生成的内容加上“required”，也就是我们想要的标签内容，并按照我们想要的样式和位置排布。结果见下文。

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## 根据数据是否有效为控件添加样式

表单验证中另一个真正重要的基本概念是表单控件的数据是否有效（在数值数据的情况下，我们也可以谈论范围内和范围外的数据）。具有[约束限制](/zh-CN/docs/Web/HTML/Constraint_validation)的表单控件可以根据这些状态来进行定位。

### :valid 和 :invalid

你可以使用 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}} 伪类来定位表单控件。这里有一些值得注意的地方：

- 没有约束验证的表单控件永远是有效的，因此永远与 `:valid` 匹配。
- 设定了 `required`，且没有任何值的表单控件是无效的——它们与 `:invalid` 和 `:required` 匹配。
- 具有内置验证功能的控件，如 `<input type="email">` 或 `<input type="url">`，当输入的数据与它们所需的模式不匹配时，会被（与）`:invalid` 匹配（但当它们为空时是有效的）。
- 当前值超出 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性所指定的范围限制的控件，会被（与）`:invalid` 匹配，但也会被 {{cssxref(":out-of-range")}} 匹配，后面还会看到。
- 还有一些其他的方法可以使元素被 `:valid`/`:invalid` 匹配，你会在[客户端表单验证](/zh-CN/docs/Learn/Forms/Form_validation)文章中看到。但目前还没有必要介绍得太复杂。

让我们看看一个简单的 `:valid`/`:invalid` 的示例（访问 [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) 以查看实时演示，也可以查看[源代码](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)）。

和前面的示例一样，我们有额外的 `<span>` 来生成内容，我们将用它来提供有效/无效数据的指示：

```html
<div>
  <label for="fname">First name *: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

为了提供这些指示，我们使用了这些 CSS 样式：

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
```

和之前一样，我们将 `<span>` 设置为 `position: relative`，这样我们就可以将生成的内容相对于它们定位。然后，我们根据表单的数据是有效还是无效，绝对定位不同的生成内容——分别是绿色复选框或红色叉号。为了给无效数据增加一点额外的紧迫感，我们还在无效时给输入的数据加上了厚厚的红边。

> **备注：** 我们使用 `::before` 来添加这些标签，因为我们已经使用 `::after` 来添加“required”标签。

你可以在下方尝试：

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

注意，必需的文本 input 在空的时候是无效的，但当它们有东西填入时是有效的。另一方面，电子邮件 input 在空的时候是有效的，因为它不是必需的，但当它包含一些不是正确的电子邮件地址时，就无效了。

### 在范围内和不在范围内的数据

正如我们上面所提示的内容一样，还有两个相关的伪类需要考虑——{{cssxref(":in-range")}} 和 {{cssxref(":out-of-range")}}。这些与数字输入相匹配，其中范围限制由 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 指定，分别供其数据在指定范围之内或之外所使用。

> **备注：** 数值输入类型包括 `date`、`month`、`week`、`time`、`datetime-local`、`number` 和 `range`。

值得注意的是，数据在范围内的输入也会被 `:valid` 伪类匹配，而数据在范围外的输入也会被 `:invalid` 伪类匹配。那么，为什么要同时拥有这两个类呢？这个问题实际上是一个语义问题——超出范围是一种更具体的无效通信类型，所以你可能想为超出范围的输入提供一个不同的消息，这将比只说“无效”对用户更有帮助。你甚至可能想同时提供这两种信息。

让我们看看一个正是这样做的例子。我们的 [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) 演示（也可参见[源代码](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)）建立在前一个示例的基础上，为数字输入提供超出范围的信息，并说明它们是否是必需的。

数值输入看起来像这样：

```html
<div>
  <label for="age">Age (must be 12+): </label>
  <input id="age" name="age" type="number" min="12" max="120" required />
  <span></span>
</div>
```

CSS 样式看起来像这样：

```css
input + span {
  position: relative;
}

input + span::after {
  font-size: 0.7rem;
  position: absolute;
  padding: 5px 10px;
  top: -26px;
}

input:required + span::after {
  color: white;
  background-color: black;
  content: "Required";
  left: -70px;
}

input:out-of-range + span::after {
  color: white;
  background-color: red;
  width: 155px;
  content: "Outside allowable value range";
  left: -182px;
}
```

这和我们之前在 `:required` 示例中的情况类似，只是在这里我们把适用于任何 `::after` 内容的声明分割成一个单独的规则，并给 `:after` 内容的 `:required` 和 `:out-of-range` 状态设置它们自己的内容和样式。你可以在这里试试：

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

数字输入有可能同时是必需的和超出范围的，那么会发生什么呢？因为 `:out-of-range` 规则在源代码中出现的时间比 `:required` 规则晚，[层叠规则](/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#理解层叠)开始发挥作用，并且显示“超出范围”信息。

这一点做得很好——当页面第一次加载时，会显示“required”，还有一个红叉和边界。当你输入了一个有效的年龄（即在 12-120 的范围内），输入就会变成有效。然而，如果你将年龄输入改为超出范围，则会弹出“Outside allowable value range”的信息，取代了原先的“required”。

> **备注：** 要输入一个无效的/超出范围的值，你必须实际聚焦于表格，用键盘输入该值。控件提供的按钮不会让你在允许的范围之外增加/减少数值。

## 为启用或禁用、只读或可读写输入控件添加样式

一个启用的元素是一个可以被激活的元素；它可以被选择、点击、输入等等。另一方面，一个禁用的元素不能以任何方式进行互动，它的数据甚至不会被发送到服务器上。

这两种状态可以用 {{cssxref(":enabled")}} 和 {{cssxref(":disabled")}} 来定位。为什么禁用的输入是有用的？有时候如果某些数据不适用于某个用户，你甚至可能不想在他们提交表单时提交这些数据。一个典型的例子是运输表单，通常你会被问到是否要使用相同的地址付款或运输；如果是这样，你可以只发送一个地址到服务器，也可以直接禁用账单地址字段。

让我们来看看一个这样做的示例。首先，其 HTML 代码是一个简单的表单，包含文本输入，加上一个复选框来切换禁用账单地址的开关。账单地址字段默认是禁用的。

```html
<form>
  <fieldset id="shipping">
    <legend>Shipping address</legend>
    <div>
      <label for="name1">Name: </label>
      <input id="name1" name="name1" type="text" required />
    </div>
    <div>
      <label for="address1">Address: </label>
      <input id="address1" name="address1" type="text" required />
    </div>
    <div>
      <label for="pcode1">Zip/postal code: </label>
      <input id="pcode1" name="pcode1" type="text" required />
    </div>
  </fieldset>
  <fieldset id="billing">
    <legend>Billing address</legend>
    <div>
      <label for="billing-checkbox">Same as shipping address:</label>
      <input type="checkbox" id="billing-checkbox" checked />
    </div>
    <div>
      <label for="name" class="billing-label disabled-label">Name: </label>
      <input id="name" name="name" type="text" disabled required />
    </div>
    <div>
      <label for="address2" class="billing-label disabled-label">
        Address:
      </label>
      <input id="address2" name="address2" type="text" disabled required />
    </div>
    <div>
      <label for="pcode2" class="billing-label disabled-label">
        Zip/postal code:
      </label>
      <input id="pcode2" name="pcode2" type="text" disabled required />
    </div>
  </fieldset>

  <div><button>Submit</button></div>
</form>
```

现在来看看 CSS 部分。这个示例中最相关的部分如下：

```css
input[type="text"]:disabled {
  background: #eee;
  border: 1px solid #ccc;
}

.disabled-label {
  color: #aaa;
}
```

我们用 `input[type="text"]:disabled` 直接选择了我们要禁用的输入控件，但我们也想把相应的文本标签弄成灰色。这些并不那么容易选择，所以我们用一个类来为它们提供这种风格。

最后我们用一些 JavaScript 代码来切换账单地址字段的禁用状态：

```js
// 等待页面完成加载
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // 向复选框附加 `change` 事件
    document
      .getElementById("billing-checkbox")
      .addEventListener("change", toggleBilling);
  },
  false,
);

function toggleBilling() {
  // 选择账单文本字段
  const billingItems = document.querySelectorAll('#billing input[type="text"]');
  // 选择账单文本标签
  const billingLabels = document.querySelectorAll(".billing-label");

  // 切换账单文本字段和标签
  for (let i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;

    if (
      billingLabels[i].getAttribute("class") === "billing-label disabled-label"
    ) {
      billingLabels[i].setAttribute("class", "billing-label");
    } else {
      billingLabels[i].setAttribute("class", "billing-label disabled-label");
    }
  }
}
```

它使用 [`change` 事件](/zh-CN/docs/Web/API/HTMLElement/change_event)来让用户启用/禁用账单字段，并切换相关标签的样式。

你可以在下面看到这个示例（也可以[在这里看到它的运行版本](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html)，并看到[源代码](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)）：

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### 只读或可读写

与 `:disabled` 和 `:enabled` 类似，`:read-only` 和 `:read-write` 伪类针对表单输入的两种状态进行了切换。只读输入的值提交给服务器，但用户不能编辑它们，而可读写输入意味着它们可以被编辑——这是它们的默认状态。

使用 `readonly` 属性可将一个输入设置为只读。举个例子，设想一个确认页面，开发者将之前页面上填写的细节发送到这个页面，目的是让用户在一个地方检查所有细节，添加任何需要的最终数据，然后通过提交确认订单。在这一点上，所有最终的表单数据都可以一次性发送到服务器上。

让我们来看看一个表单可能是什么样子的（见运行实例 [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html)，其[源代码在这里](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)）。

HTML 的一个片段如下，注意其中的 readonly 属性：

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

如果你尝试了运行实例，你会发现最上面的一组表单元素是不可聚焦的，然而，当表单被提交时，其值会被提交。我们使用 `:read-only` 和 `:read-write` 伪类为表单控件添加了样式，就像这样：

```css
:is(
    input:read-only,
    input:-moz-read-only,
    textarea:-moz-read-only,
    textarea:read-only
  ) {
  border: 0;
  box-shadow: none;
  background-color: white;
}

:is(textarea:-moz-read-write, textarea:read-write) {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Firefox 在版本 78 之前只支持带前缀的伪类，从这个版本以后才开始支持无前缀的版本。完整的示例看起来是这样的：

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

> **备注：** `:enabled` 和 `:read-write` 是另外两个可能很少使用的伪类，它们描述了输入元素的默认状态。

## 单选和复选按钮状态——选中、默认和中间状态

正如我们在本模块前面的文章中所看到的，{{HTMLElement("input/radio", "单选按钮")}}和{{HTMLElement("input/checkbox", "复选框")}}可以被选中或不被选中。但也有一些其他的状态需要考虑：

- {{cssxref(":default")}}：匹配在页面加载时默认选中的单选钮/复选框（即通过设置 `checked` 属性），这些匹配 {{cssxref(":default")}} 伪类，即使用户取消选中。
- {{cssxref(":indeterminate")}}：当单选钮/复选框既没有被选中也没有被取消时，它们是*中间状态*，并将与 {{cssxref(":indeterminate")}} 伪类匹配。下文将阐述其细节。

### :checked

当单选钮或复选框被选中时，它们将被 {{cssxref(":checked")}} 伪类所匹配。

最常见的用途是在复选框或单选按钮被选中时添加不同的样式，在这种情况下，已经使用 `appearance: none;` 删除了系统默认的样式，想自己重新建立样式。我们在上一篇文章中看到了这样的示例，当时我们谈到了[在单选钮/复选框上使用 `appearance: none`](/zh-CN/docs/Learn/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes)。

回顾一下，我们的[有样式的单选钮](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html)示例中的 `:checked` 代码看起来像这样：

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

你可以在这里试试：

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/radios-styled.html", '100%', 200)}}

基本上，我们使用 `::before` 伪元素建立了单选按钮“内圈”的样式，但在它上面设置了一个 `scale(0)` 的 [`transform`](/zh-CN/docs/Web/CSS/transform) 值。然后我们使用一个 [`transition`](/zh-CN/docs/Web/CSS/transition) 来使它在被选择时能有一个很好的动画效果。使用变换而不是过渡 [`width`](/zh-CN/docs/Web/CSS/width)/[`height`](/zh-CN/docs/Web/CSS/height) 的好处是，你可以使用 [`transform-origin`](/zh-CN/docs/Web/CSS/transform-origin) 来使它从圆的中心生长，而不是让它看起来从圆的角落生长。

### :default 和 :indeterminate

如前文所述，{{cssxref(":default")}} 伪类可以匹配在页面加载时默认勾选的单选钮或复选框，即使未勾选也是如此。这对于在选项列表中添加一个指示器很有用，可以提醒用户默认值（或起始选项）是什么，以防他们想重设他们的选择。

另外，上面提到的单选钮或复选框在处于既没有选中也没有取消选中的状态时，会被 {{cssxref(":indeterminate")}} 伪类所匹配。但这是什么意思呢？不确定的元素包括：

- {{HTMLElement("input/radio")}} 输入，当同名组中的所有单选按钮都取消勾选时
- {{HTMLElement("input/checkbox")}} 输入，其 `indeterminate` 属性通过 JavaScript 代码设置为 `true`。
- 没有值的 {{HTMLElement("progress")}} 元素。

这不是你可能会经常使用的东西。一个可能的用例是一个指示器，告诉用户他们真的需要在继续前进之前选择一个单选按钮。

让我们看看前面示例的几个修改版本，它们提醒用户默认选项是什么，并在不确定的情况下对单选按钮进行样式设计。这两个示例的输入都有以下的 HTML 结构：

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

对于 `:default` 示例，我们给中间的单选按钮输入添加了 `checked` 属性，所以它在加载时将被默认选择。然后我们用下面的 CSS 来设计这个样式：

```css
input ~ span {
  position: relative;
}

input:default ~ span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "Default";
  color: white;
  background-color: black;
  padding: 5px 10px;
  right: -65px;
  top: -3px;
}
```

这为页面加载时最初选择的项目提供了一个小小的“default”标签。注意这里我们使用的是通用兄弟组合器（`~`），而不是相邻兄弟组合器（`+`）——我们需要这样做，因为在源代码中，`<span>` 并不在 `<input>` 之后。

参见下方的实时结果：

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> **备注：** 你也可以在 GitHub 的 [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) 中找到这个示例的实时演示（也可以看看[源代码](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html)）。

对于 `:indeterminate` 示例，我们没有默认的选定的单选按钮——这很重要——如果有的话，就不会有 indeterminate 状态的样式。我们用下面的 CSS 来设计不确定的单选按钮：

```css
input[type="radio"]:indeterminate {
  border: 2px solid red;
  animation: 0.4s linear infinite alternate border-pulse;
}

@keyframes border-pulse {
  from {
    border: 2px solid red;
  }

  to {
    border: 6px solid red;
  }
}
```

这将在单选按钮上创建一个有趣的动画边框，希望它能表明你需要选择其中的一个！

参见下方的实时结果：

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> **备注：** 你也可以在 GitHub 的 [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) 上找到这个示例的运行实例，也可以参见[源代码](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html)。

> **备注：** 你可以在 [`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Element/input/checkbox) 参考页上找到一个[涉及 `indeterminate` 状态的有趣示例](/zh-CN/docs/Web/HTML/Element/input/checkbox#中间状态复选框)。

## 更多伪类

还有一些其他有趣的伪类，我们没有空间在这里详细地写它们。让我们再谈一谈你应该花时间研究的几个。

以下这些伪类在现代浏览器中得到了相当好的支持：

- {{cssxref(":focus-within")}} 伪类匹配一个已经收到焦点的元素或*包含*一个已经收到焦点的元素。如果你想让整个表单在其内部的输入被聚焦时以某种方式突出显示，这很有用。
- {{cssxref(":focus-visible")}} 伪类匹配通过键盘交互（而不是触摸或鼠标）获得焦点的元素。如果你想对键盘焦点与鼠标（或其他）焦点显示不同的样式，这很有用。
- {{cssxref(":placeholder-shown")}} 伪类匹配占位符（即 [`placeholder`](/zh-CN/docs/Web/HTML/Element/input#placeholder) 属性的内容）正在显示的 {{htmlelement('input')}} 和 {{htmlelement('textarea')}} 元素，因为该元素的值为空。

下面这些也很有意思，但在浏览器中还没有得到很好的支持：

- {{cssxref(":blank")}} 伪类可以选择空表单控件。{{cssxref(":empty")}} 也匹配没有子元素的元素，如 {{HTMLElement("input")}}，但它更普遍——它也匹配其他{{glossary("void element", "空元素")}}，如 {{HTMLElement("br")}} 和 {{HTMLElement("hr")}}。`:empty` 有合理的浏览器支持；`:blank` 伪类的规范还没有完成，所以它还不被任何浏览器支持。
- [`:user-invalid`](https://drafts.csswg.org/selectors-4/#user-invalid-pseudo) 伪类，如果支持，将类似于 {{cssxref(":invalid")}}，但有更好的用户体验。如果输入收到焦点时值是有效的，当用户输入数据时，如果值暂时无效，该元素可能会匹配 `:invalid`，但只有当该元素失去焦点时才会匹配 `:user-invalid`。如果该值最初是无效的，它将在整个焦点持续期间同时匹配 `:invalid` 和 `:user-invalid`。与 `:invalid` 类似，如果该值确实变得有效，它将停止匹配 `:user-invalid`。

## 测试你的技能！

你已经看到了本文的结尾，但你还记得本文的绝大多数重要的信息吗？在继续学习新的内容之前，你可以找一些进一步的测验来验证你已经掌握了这些信息——参见[技能测试：进阶样式](/zh-CN/docs/Learn/Forms/Test_your_skills:_Advanced_styling).

## 总结

这就完成了我们对与表单输入有关的 UI 伪类的研究。继续使用它们，创造一些有趣的表单样式吧。接下来，我们将继续研究一些不同的东西——[客户端表单验证](/zh-CN/docs/Learn/Forms/Form_validation)。

{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

### 进阶内容

- [如何构建自定义表单组件](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls)
- [通过 JavaScript 发送表单](/zh-CN/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [表单组件的属性兼容性表格](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
