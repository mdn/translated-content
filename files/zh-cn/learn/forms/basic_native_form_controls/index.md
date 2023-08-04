---
title: 原生表单部件
slug: Learn/Forms/Basic_native_form_controls
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

在[上一篇文章](/zh-CN/docs/Learn/Forms/How_to_structure_a_web_form)中，我们标记了一个功能性的 web 表单示例，介绍了一些表单部件和常见的结构元素，并重点介绍了无障碍的最佳实践。现在，我们将详细研究不同表单部件的功能，查看了哪些选项可用于收集不同类型的数据。这个指南有些详尽，涵盖了所有可用的原生表单小部件。

<table>
 <tbody>
  <tr>
   <th scope="row">预备知识：</th>
   <td>计算机基础知识和对于 <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML">HTML 的基本理解</a>。</td>
  </tr>
  <tr>
   <th scope="row">目标：</th>
   <td>要了解在浏览器中可以使用什么类型的原生表单小部件来收集数据，以及如何使用 HTML 实现它们。</td>
  </tr>
 </tbody>
</table>

> **备注：** widget 在本页面中被统一翻译为部件，但在其他地方可能也被译为组件。

你可能已经遇见过了一些表单元素，包括：{{HTMLelement('form')}}、{{HTMLelement('fieldset')}}、{{HTMLelement('legend')}}、{{HTMLelement('textarea')}}、{{HTMLelement('label')}}、{{HTMLelement('button')}} 和 {{HTMLelement('input')}}。这篇文章提到了：

- 常见的输入（input）类型元素：{{HTMLelement('input/button', 'button')}}、{{HTMLelement('input/checkbox', 'checkbox')}}、{{HTMLelement('input/file', 'file')}}、{{HTMLelement('input/hidden', 'hidden')}}、{{HTMLelement('input/image', 'image')}}、{{HTMLelement('input/password', 'password')}}、{{HTMLelement('input/radio', 'radio')}}、{{HTMLelement('input/reset', 'reset')}}、{{HTMLelement('input/submit', 'submit')}} 和 {{HTMLelement('input/text', 'text')}}。
- 所有表单部件共有的一些属性。

> **备注：** 本文中讨论的大多数特性都在浏览器中得到了广泛的支持，但并非所有表单部件都受浏览器支持。我们在接下来的两篇文章中提到了 HTML5 带来的新的表单部件。如果您想要更准确的细节，您应该参考我们的 [HTML 表单元素参考](/zh-CN/docs/Web/HTML/Element#forms)，特别是我们的种类繁多的 [\<input> 类型](/zh-CN/docs/Web/HTML/Element/Input)参考。

## 文本输入框

文本{{htmlelement("input", "输入")}}框是最基本的表单小部件。这是一种非常方便的方式，可以让用户输入任何类型的数据。我们已经看到过几个简单的例子。

> **备注：** HTML 表单文本字段是简单的纯文本输入控件。这意味着您不能将它们用作富文本编辑（粗体、斜体等）。你遇到的所有富文本编辑器都是使用 HTML、CSS 和 JavaScript 所创建的自定义小部件。

所有文本框都有一些通用规范：

- 它们可以被标记为 [`readonly`](/zh-CN/docs/Web/HTML/Element/input#readonly)（用户不能修改输入值）甚至是 [`disabled`](/zh-CN/docs/Web/HTML/Element/input#disabled)（输入值永远不会与表单数据的其余部分一起发送）。
- 它们可以有一个 [`placeholder`](/zh-CN/docs/Web/HTML/Element/input#placeholder)；这是文本输入框中出现的文本，用来简略描述输入框的目的。
- 它们可以使用 [`size`](/zh-CN/docs/Web/HTML/Attributes/size)（框的物理尺寸）和 [`maxlength`](/zh-CN/docs/Web/HTML/Attributes/maxlength)（可以输入的最大字符数）进行限制。
- 如果浏览器支持的话，它们可以从拼写检查（使用 [`spellcheck`](/zh-CN/docs/Web/HTML/Global_attributes/spellcheck) 属性）中获益。

> **备注：** {{htmlelement("input")}} 元素是如此特别因为它可以通过简单设置 [`type`](/zh-CN/docs/Web/HTML/Element/Input#type) 属性，来接收多种类型的数据。它被用于创建大多数类型的表单小部件，包括单行文本字段、没有文本输入的控件、时间和日期控件和按钮。

### 单行文本框

使用 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性值被设置为 `text` 的 {{HTMLElement("input")}} 元素创建一个单行文本框（同样的，如果你不提供 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性，该属性将被默认设置为 `text`）。在你指定的 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性的值在浏览器中是未知的情况下（比如你指定 `type="date"`，但是浏览器不支持原生日期选择器），属性值也将会回落到 `text`。

> **备注：** 你可以在 Github 上的 [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) 找到所有单行文本框类型（你也可以直接看[预览版](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)）。

这是一个基本的单行文本框示例：

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

单行文本框只有一个真正的约束：如果您输入带有换行符的文本，浏览器会在发送数据之前删除这些换行符。

_以下截图现实了 macOS 上的 Firefox 71 和 Safair 以及 Windows 10 上的 Chrome 79 和 Edge 18 中的默认、聚焦和禁用的文本输入框。_

![Screenshot of the disabled attribute and default :focus styles on a text input in Firefox, Safari, Chrome and Edge.](disabled.png)

> **备注：** HTML5 通过为 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性增加特殊值增强了基本单行文本框。这些值仍然将 {{HTMLElement("input")}} 元素转换为单行文本框，但它们为字段添加了一些额外的约束和特性。例如，URL 和 数值类型的约束，我们将会在下一篇文章中介绍：[HTML5 input 类型](/zh-CN/docs/Learn/Forms/HTML5_input_types)。

#### 密码框

通过设置 type 属性值为 `password` 来设置该类型框：

```html
<input type="password" id="pwd" name="pwd" />
```

它不会为输入的文本添加任何特殊的约束，但是它会模糊输入到字段中的值（例如，用点或星号），这样它就不能被其他人读取。

请记住，这只是一个用户界面特性；除非你安全地提交你的表单，否则它会以明文发送，这不利于安全——恶意的一方可能会截获你的数据，窃取你的密码、信用卡信息，或者你提交的其他任何东西。保护用户不受此影响的最佳方式是在安全连接上托管任何涉及表单的页面（例如：`https://`……地址），使得数据在发送之前就已加密。

现代浏览器认识到在不安全的连接上发送表单数据所带来的安全影响，并且已经实现了警告，以阻止用户使用不安全的表单。有关 Firefox 实现的更多信息，请参见[不安全的密码](/zh-CN/docs/Web/Security/Insecure_passwords)。

### 隐藏内容

另一个原生的文本框控件是 `hidden` input 类型。它被用于创建对用户不可见的表单部件，但在发送表单时，会与其他的表单数据一起被发送到服务器——例如，你可能希望向服务器提交一个时间戳，说明订单是何时产生的。因为它是隐藏的，所以用户看不到也不能简单地修改该值，它将永远不会获得焦点，屏幕阅读器也不会注意到它。

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

如果您创建了这样一个元素，就需要设置它的 `name` 和 `value` 属性。元素的值可以通过 JavaScript 动态设置。`hidden` input 类型不应有关联的标签（`label` 元素）。

HTML5 中添加了其他的文本输入类型，如：{{HTMLElement("input/search", "search")}}、{{HTMLElement("input/url", "url")}} 和 {{HTMLElement("input/tel", "tel")}}。这些内容将在下一篇文章 [HTML5 input 类型](/zh-CN/docs/Learn/Forms/HTML5_input_types)中介绍。

## 可选中项：复选框和单选按钮

可选中项是可以通过单击它们来更改状态的小部件。有两种可选中项：复选框和单选按钮。两者都使用 [`checked`](/zh-CN/docs/Web/HTML/Element/Input/checkbox#attr-checked) 属性，以指示该部件的默认状态：“选中”或“未选中”。

值得注意的是，这些小部件与其他表单小部件不一样。对于大多数表单部件，一旦表单提交，所有具有 [`name`](/zh-CN/docs/Web/HTML/Element/Input#name) 属性的小部件都会被发送，即使没有任何值被填。对于可选中项，只有在勾选时才发送它们的值。如果他们没有被勾选，就不会发送任何东西，甚至连他们的名字也没有。而在它们被勾选且没有提供值（value）时，将会发送名字和缺省值 `on`。

> **备注：** 你可以在 Github 上看到 [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html)（你也可以直接看[预览版](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)）。

为了获得最大的可用性和无障碍（无障碍），建议您在 {{htmlelement("fieldset")}} 中包围每个相关项目的列表，并使用 {{htmlelement("legend")}} 提供对列表的全面描述。每个单独的 {{htmlelement("label")}}/{{htmlelement("input")}} 元素都应该包含在它自己的列表项中（或者类似的）。正如在下方示例中显示的。

### 复选框

使用 [`type`](/zh-CN/docs/Web/HTML/Element/Input#type) 属性值为 `checkbox` 的 {{HTMLElement("input")}} 元素来创建一个{{HTMLElement("input/checkbox", "复选框")}}。

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

相关的复选框元素应该使用具有相同值的 [`name`](/zh-CN/docs/Web/HTML/Element/Input#name) 属性。包含 `checked` 属性使复选框在页面加载时自动被选中。点击复选框或其相关联的标签也将自动翻转复选框的状态（选中、取消选中）

```html
<fieldset>
  <legend>Choose all the vegetables you like to eat</legend>
  <ul>
    <li>
      <label for="carrots">Carrots</label>
      <input
        type="checkbox"
        id="carrots"
        name="vegetable"
        value="carrots"
        checked />
    </li>
    <li>
      <label for="peas">Peas</label>
      <input type="checkbox" id="peas" name="vegetable" value="peas" />
    </li>
    <li>
      <label for="cabbage">Cabbage</label>
      <input type="checkbox" id="cabbage" name="vegetable" value="cabbage" />
    </li>
  </ul>
</fieldset>
```

_以下截图显示了 macOS 上的 Firefox 71 和 Safair 13 以及 Windows 10 上的 Chrome 79 和 Edge 18 中的默认、聚焦和禁用的复选框。_

![Default, focused and disabled Checkboxes in Firefox 71 and Safari 13 on Mac and Chrome 79 and Edge 18 on Windows 10](checkboxes.png)

> **备注：** 任何带有 [`checked`](/zh-CN/docs/Web/HTML/Element/Input/checkbox#attr-checked) 属性的复选框和单选按钮在加载时都会匹配 {{cssxref(':default')}} 伪类，即使它们后面不再被选中。任何当前被选中的元素，都会匹配 {{cssxref(':checked')}} 伪类。

由于复选框的开关特性，其被认为是一种切换按钮，许多开发者和设计人员覆盖了默认的复选框样式，以使其看起来像是一个切换开关的按钮。你可以在[这里看到一个示例](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/)（参见[源码](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)）。

### 单选按钮

使用 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性值为 `radio` 的 {{HTMLElement("input")}} 元素来创建一个单选按钮。

```html
<input type="radio" id="soup" name="meal" checked />
```

几个单选按钮可以连接在一起。如果它们的 [`name`](/zh-CN/docs/Web/HTML/Element/input#name) 属性共享相同的值，那么它们将被认为属于同一组的按钮。同一组中只有一个按钮可以同时被选；这意味着当其中一个被选中时，所有其他的都将自动未选中。如果没有选中任何一个，那么整个单选按钮池就被认为处于未知状态，并且没有以表单的形式发送任何值。

```html
<fieldset>
  <legend>What is your favorite meal?</legend>
  <ul>
    <li>
      <label for="soup">Soup</label>
      <input type="radio" id="soup" name="meal" value="soup" checked />
    </li>
    <li>
      <label for="curry">Curry</label>
      <input type="radio" id="curry" name="meal" value="curry" />
    </li>
    <li>
      <label for="pizza">Pizza</label>
      <input type="radio" id="pizza" name="meal" value="pizza" />
    </li>
  </ul>
</fieldset>
```

以下的截图展示了 macOS 上的 Firefox 71 和 Safari 13 以及 Windows 10 上的 Chrome 79 和 Edge 18 中选中和未选中状态、聚焦、禁用以及被选中的单选按钮。

![Radio buttons on Firefox 71 and Safari 13 on Mac and Chrome 79 and Edge 18 on Windows 10](radios.png)

## 按钮

在 HTML 表单中，有三种按钮：

- `Submit`
  - : 将表单数据发送到服务器。对于 {{HTMLElement("button")}} 元素，省略 `type` 属性（或是一个无效的 `type` 值）的结果就是一个提交按钮。
- `Reset`
  - : 将所有表单小部件重新设置为它们的默认值。
- `Anonymous`
  - : 没有自动生效的按钮，但是可以使用 JavaScript 代码进行定制。

我们也可以使用 {{htmlelement("button")}} 元素。它也带有 `submit`、`reset` 和 `button` 这几个 `type` 属性，与 `<input>` 的三种按钮行为一致。它们之间的主要区别在于 `<button>` 元素更易于设置样式。

> **备注：** `image` input 类型同样被渲染为一个按钮。我们将在后面提到。

> **备注：** 你可以在 Github 上看到 [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html)（你也可以直接看[预览版](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)）。

下面，你可以看到每一种与 `<button>` 对应类型等价的 `<input>` 类型的示例。

### submit

```html
<button type="submit">This is a <strong>submit button</strong></button>

<input type="submit" value="This is a submit button" />
```

### reset

```html
<button type="reset">This is a <strong>reset button</strong></button>

<input type="reset" value="This is a reset button" />
```

### anonymous

```html
<button type="button">This is an <strong>anonymous button</strong></button>

<input type="button" value="This is an anonymous button" />
```

不管您使用的是 {{HTMLElement("button")}} 元素还是 {{HTMLElement("input")}} 元素，按钮的行为都是一样的。然而，有一些显著的不同之处：从示例中可以看到，{{HTMLElement("button")}} 元素允许您在它们的标签中使用 HTML 内容，这些内容被插入到 `<button>` 开始和结束的标签之间。另一方面，{{HTMLElement("input")}} 元素是空元素；它显示的内容需要插入到 `value` 属性中，因此只接受纯文本内容。

以下的截图展示了 macOS 上的 Firefox 71 和 Safari 13 以及 Windows 10 上的 Chrome 79 和 Edge 18 中默认、聚焦、禁用的 input 按钮。

![Default, focused and disabled button input types in Firefox 71 and Safari 13 on Mac and Chrome 79 and Edge 18 on Windows 10](buttons.png)

从技术上讲，使用{{HTMLElement("button")}}元素或{{HTMLElement("input")}}元素定义的按钮几乎没有区别。唯一值得注意的区别是按钮本身的标签。在{{HTMLElement("input")}}元素中，标签只能是字符数据，而在{{HTMLElement("button")}}元素中，标签可以是 HTML，因此可以相应地进行样式化。

### 图像按钮

**图像按钮**（image button）控件渲染的方式与 {{HTMLElement("img")}} 几乎完全相同。只是在用户点击它时，图像按钮的行为与提交（submit）按钮相同。

图像按钮是使用 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性值设置为 `image` 的 {{HTMLElement("input")}} 元素创建的。这个元素支持与 {{HTMLElement("img")}} 元素相同的属性，和其他表单按钮支持的所有属性。

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

如果使用图像按钮来提交表单，这个小部件不会提交它的值；而是提交在图像上单击处的 X 和 Y 坐标（坐标是相对于图像的，这意味着图像的左上角表示坐标 (0, 0)），坐标被发送为两个键/值对：

- X 值键是 [`name`](/zh-CN/docs/Web/HTML/Element/input#name) 属性的值，后面是字符串“.x”。
- Y 值键是 [`name`](/zh-CN/docs/Web/HTML/Element/input#name) 属性的值，后面是字符串“.y”。

例如，当您点击这个小部件图像坐标为 (123,456) 的位置时，它将会通过 `get` 方法提交。你可以看到类似的 URL：

```
http://foo.com?pos.x=123&pos.y=456
```

这是构建“热图”的一种非常方便的方式。如何发送和检索这些值在[发送和检索表单数据](/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)文章中详细说明。

## 文件选择器

HTML 表单能够将文件发送到服务器；在[发送和检索表单数据](/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)的文章中详细描述了这个特定的操作。文件选择器小部件是用户如何选择一个或多个文件来发送的。

要创建一个[文件选择器小部件](/zh-CN/docs/Web/HTML/Element/Input/file)，您可以使用 {{HTMLElement("input")}} 元素，将它的 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性设置为 `file`。被接受的文件类型可以使用 [`accept`](/zh-CN/docs/Web/HTML/Element/input#accept) 属性来约束。此外，如果您想让用户选择多个文件，那么可以通过添加 [`multiple`](/zh-CN/docs/Web/HTML/Element/input#multiple) 属性来实现。

#### 示例

在本例中，创建一个文件选择器，请求图形图像文件。在本例中，允许用户选择多个文件。

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

在一些移动终端上，文件选择器可以访问由设备相机和麦克风直接获取的图片、视频、音频。我们只需要这样设置 `accept` 属性即可（分别对应相机捕获的图片、视频和麦克风获取的音频）：

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

## 通用属性

大部分用来定义表单小部件的元素都有一些他们自己的属性。然而，在所有表单元素中都有一组通用属性，它们可以对这些小部件进行控制。下面是这些通用属性的列表：

<table>
 <thead>
  <tr>
   <th scope="col">属性名称</th>
   <th scope="col">默认值</th>
   <th scope="col">描述</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><a href="/zh-CN/docs/Web/HTML/Global_attributes/autofocus">autofocus</a></code></td>
   <td>false</td>
   <td>这个布尔属性允许您指定当页面加载时元素应该自动具有输入焦点，除非用户覆盖它，例如通过键入不同的控件。文档中只有一个与表单相关的元素可以指定这个属性。</td>
  </tr>
  <tr>
   <td><code><a href="/zh-CN/docs/Web/HTML/Attributes/disabled">disabled</a></code></td>
   <td>false</td>
   <td>
    这个布尔属性表示用户不能与元素交互。如果没有指定这个属性，元素将从包含它的元素继承设置，例如 {{HTMLElement("fieldset")}}；如果没有包含在设定了 <code>disabled</code> 属性的元素里，那么这个元素就是可用的。
   </td>
  </tr>
  <tr>
   <td><code><a href="/zh-CN/docs/Web/HTML/Element/form">form</a></code></td>
   <td></td>
   <td>
    小部件与之相关联的表单元素。属性值必需是同个文档中的 {{HTMLElement("form")}} 元素的 <code>id</code> 属性。理论上，它允许您在 {{HTMLElement("form")}} 元素之外设置一个表单小部件。
   </td>
  </tr>
  <tr>
   <td><code><a href="/zh-CN/docs/Web/HTML/Element/Input#name">name</a></code></td>
   <td></td>
   <td>元素的名称；这是跟表单数据一起提交的。</td>
  </tr>
  <tr>
   <td><code><a href="/zh-CN/docs/Web/HTML/Element/Input#value">value</a></code></td>
   <td></td>
   <td>元素的初始值。</td>
  </tr>
 </tbody>
</table>

## 测试你的技能！

你已经看完了这篇文章的主要内容，但你还记得所有重要的信息吗？在继续学习其他内容之前，你可以在这里找到进一步的测试来确定你是否掌握了这些知识点——请参见[测试你的技能：基础控件](/zh-CN/docs/Learn/Forms/Test_your_skills:_Basic_controls)。

## 总结

这篇文章介绍了较老的输入类型——在早期的 HTML 中引入的原始输入类型，它们在所有的浏览器中都得到了很好的支持。在下一节中，我们将介绍 HTML5 中新添加的 `type` 属性。

{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

### 高级技巧

- [如何构建表单控件](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls)
- [使用 JavaScript 发送表单](/zh-CN/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [表单部件兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
