---
title: 其他表单控件
slug: Learn/Forms/Other_form_controls
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}

现在我们来具体看看非 `<input>` 表单控件的功能，从下拉列表菜单（drop-down list）、多行文本域（multi-line text field）到其他有用的表单功能，如我们在前一篇文章看到的 {{htmlelement('output')}} 元素和进度条（progress bar）元素。

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        计算机基础知识和对于
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 的基本理解</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        理解非 <code>&#x3C;input></code> 表单功能，以及如何使用 HTML 实现它们。
      </td>
    </tr>
  </tbody>
</table>

## 多行文本域

多行文本域使用 {{HTMLElement("textarea")}} 元素指定，而不是使用 {{HTMLElement("input")}} 元素。

```html
<textarea cols="30" rows="8"></textarea>
```

这行代码的渲染效果如下所示：

{{EmbedLiveSample("多行文本域", 120, 160)}}

`<textarea>` 元素和普通的单行文本域的主要区别是，用户可以在要提交的数据中包含硬换行（如按下回车键产生）。

`<textarea>` 也需要关闭标签，其中要包含的默认文字需要放在开闭标签之间。作为对比，{{HTMLElement("input")}} 是不包含关闭标签的空元素，它的默认值应该在 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性中指定。

注意，即使可以将任何东西放入到 `<textarea>` 元素中，甚至可以包含其他 HTML 元素、CSS 和 JavaScript，由于该元素的特性，这些内容都将以纯文本的形式渲染。在非表单组件上使用 [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable) 可以为捕捉 HTML 或富文本内容提供 API。

在视觉上，输入的文字会换行，并且表单空间的大小是可调的。现代浏览器会提供拖动手柄，你可以通过拖拽来放大或缩小文本区的大小。

以下截图显示了 macOS 上 Firefox 71 和 Safari 13，Windows 10 上 Edge 18、Yandex 14、Firefox 71 和 Chrome 79 下的默认、聚焦和禁用的 `<textarea>` 元素。

![The default, focused, and disabled 'textarea' element in Firefox 71 and Safari 13 on Mac OSX and Edge 18, Yandex 14, Firefox and Chrome on Windows 10.](textarea_basic.png)

> **备注：** 你可以在该系列的第一篇文章中整理的例子中找到一个稍微有趣的文本区域使用的[示例](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)（[顺便看看源代码](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html)）。

### 控制多行渲染

{{htmlelement("textarea")}} 接受三种属性来控制其多行渲染行为：

- [`cols`](/zh-CN/docs/Web/HTML/Element/textarea#cols)
  - : 指定文本控件的可见宽度（列），单位为字符的宽度。这实际上是起始宽度，因为它可以通过调整 `<textarea>` 的大小来改变，也可以用 CSS 重写。如果没有指定，默认值是 20。
- [`rows`](/zh-CN/docs/Web/HTML/Element/textarea#rows)
  - : 指定文本控件的可见行数。这实际上是起始高度，因为它可以通过调整 `<textarea>` 的大小来改变，也可以用 CSS 重写。如果没有指定，默认值是 2。
- [`wrap`](/zh-CN/docs/Web/HTML/Element/textarea#wrap)
  - : 指定如何控制文本换行。取值可能为 `soft`（默认值），意味着提交的文字没有换行，而浏览器中渲染的文字有换行；`hard`（使用此属性必须指定 `cols` 的值），意味着提交的文字和浏览器中渲染的文字都有换行；和 `off`，停止任何换行行为。

### 控制文本域可缩放性

`<textarea>` 的缩放能力由 CSS `resize` 属性控制，其可能的值如下：

- `both`：默认值——允许横向和纵向缩放行为。
- `horizontal`：只允许横向水平缩放行为。
- `vertical`：只允许纵向竖直缩放行为。
- `none`：不允许缩放行为。
- `block` 和 `inline`：实验性的值，仅允许以 `block` 或 `inline` 方向缩放，如何变化取决于文字的方向，请参阅[处理不同文字方向](/zh-CN/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)以了解更多内容。

多多调试 {{cssxref("resize")}} 参考页面顶部的例子，来看看它们是如何运行的。

## 下拉控件

下拉菜单是一种简单地让用户从许多不同选项中进行选择的控件，不占用用户界面太多空间。HTML 有两种下拉内容：一种是**选择框**、另外一种是**自动补全框**。这两种情况下的交互是相同的——一旦被激活，浏览器就会显示可供用户选择的值的列表。

> **备注：** 你可以在 GitHub 的 [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) 上找到所有下拉框类型的例子（[也可以看看在线演示](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)）。

### 选择框

一个简单的选择框是由 {{HTMLElement("select")}} 元素及一个或多个 {{HTMLElement("option")}} 子元素构成的，每个子元素指定了选择框的可能取值。

#### 基础示例

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("基础示例", 120, 120)}}

如果需要的话，选择框的默认值可以由要指定默认值的 {{HTMLElement("option")}} 元素中的 [`selected`](/zh-CN/docs/Web/HTML/Element/option#selected) 属性设置，这样在页面加载后，该选项可以预先选中。

#### 使用 optgroup

{{HTMLElement("option")}} 元素可以嵌套在 {{HTMLElement("optgroup")}} 元素中，以在视觉上关联一组取值：

```html
<select id="groups" name="groups">
  <optgroup label="fruits">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
  </optgroup>
  <optgroup label="vegetables">
    <option>Carrot</option>
    <option>Eggplant</option>
    <option>Potato</option>
  </optgroup>
</select>
```

{{EmbedLiveSample("使用 optgroup", 120, 120)}}

在 {{HTMLElement("optgroup")}} 元素中，[`label`](/zh-CN/docs/Web/HTML/Element/optgroup#attr-label) 属性的值在嵌套选项之前显示。浏览器往往在视觉上将它们与选项分开（如，将其粗体并显示于不同的嵌套级别），以避免它们与实际选项混淆。

#### 使用 value 属性

如果一个 {{HTMLElement("option")}} 元素明确设置了 `value` 属性，当表单提交时也会提交那个选项对应的值。如果像上面的例子那样省略了 `value` 属性，{{HTMLElement("option")}} 元素的内容会作为提交的值。所以 `value` 属性并不是必需的，然而你可能需要向服务器中发送与视觉所见相比缩短或者改变过的值。

例如：

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

默认情况下，选择框的高度足以显示单个值。可选的 [`size`](/zh-CN/docs/Web/HTML/Attributes/size) 属性控制在选择框不处于聚焦状态时，可见选项的数量。

### 多选选择框

默认情况下，选择框只允许用户选择单个值。通过向 {{HTMLElement("select")}} 元素添加 [`multiple`](/zh-CN/docs/Web/HTML/Element/select#multiple) 属性，你可以允许用户使用操作系统提供的机制选择多个值（如按下 <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> 并先后单击多个值）。

```html
<select id="multi" name="multi" multiple size="2">
  <optgroup label="fruits">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
  </optgroup>
  <optgroup label="vegetables">
    <option>Carrot</option>
    <option>Eggplant</option>
    <option>Potato</option>
  </optgroup>
</select>
```

{{EmbedLiveSample("多选选择框", 120, 120)}}

> **备注：** 在多选选择框的情况下，你会注意到选择框不再以下拉内容的形式显示数值——相反，所有的值都会一次性显示在一个列表中，可选的 [`size`](/zh-CN/docs/Web/HTML/Attributes/size) 属性决定了控件的高度。

> **备注：** 任何支持 {{HTMLElement("select")}} 元素的浏览器也支持 [`multiple`](/zh-CN/docs/Web/HTML/Element/select#multiple) 属性。

### 自动补全框

你可以通过 {{HTMLElement("datalist")}} 元素中的一些显示的 {{HTMLElement("option")}} 子元素为表单项提供推荐的自动补全值。`<datalist>` 元素需要指定一个 `id`。

数据列表会使用 [`list`](/zh-CN/docs/Web/HTML/Element/input#list) 属性绑定至一个 {{htmlelement("input")}} 元素（如 `text` 或 `email` 输入类型），该属性的取值就是要绑定的数据列表的 `id` 值。

一旦数据列表与表单控件相关联，它的选项就会被用来自动补全用户输入的文本；通常，它以下拉框的形式呈现给用户，列出他们输入内容的可能匹配。

#### 基础示例

我们来看一个例子。

```html
<label for="myFruit">What's your favorite fruit?</label>
<input type="text" name="myFruit" id="myFruit" list="mySuggestion" />
<datalist id="mySuggestion">
  <option>Apple</option>
  <option>Banana</option>
  <option>Blackberry</option>
  <option>Blueberry</option>
  <option>Lemon</option>
  <option>Lychee</option>
  <option>Peach</option>
  <option>Pear</option>
</datalist>
```

{{EmbedLiveSample("基础示例_2", 120, 120)}}

#### Datalist 支持和回退

几乎所有浏览器支持 datalist，但是如果你仍然需要给诸如 IE 10 及以前的旧版浏览器提供支持，有一个提供回退的小窍门：

```html
<label for="myFruit">What is your favorite fruit? (With fallback)</label>
<input type="text" id="myFruit" name="fruit" list="fruitList" />

<datalist id="fruitList">
  <label for="suggestion">or pick a fruit</label>
  <select id="suggestion" name="altFruit">
    <option>Apple</option>
    <option>Banana</option>
    <option>Blackberry</option>
    <option>Blueberry</option>
    <option>Lemon</option>
    <option>Lychee</option>
    <option>Peach</option>
    <option>Pear</option>
  </select>
</datalist>
```

{{EmbedLiveSample("Datalist 支持和回退", 120, 120)}}

支持 {{HTMLElement("datalist")}} 元素的浏览器会忽略任何非 {{HTMLElement("option")}} 元素，而 datalist 仍然会按期工作。不支持 {{HTMLElement("datalist")}} 元素的旧浏览器会显示标签和选择框。

以下屏幕截图显示了在 Safari 6 中 datalist 回退的渲染效果：

![Screenshot of the datalist element fallback with Safari on Mac OS](datalist-safari.png)

如果要使用这个回退处理，确保服务器端同时收集了 `<input>` 和 `<select>` 的值。

#### 不太明显的 datalist 用法

根据 [HTML 规范](https://html.spec.whatwg.org/multipage/input.html#attr-input-list)，[`list`](/zh-CN/docs/Web/HTML/Element/input#list) 属性和 {{HTMLElement("datalist")}} 元素可以与任何需要用户输入的组件配合使用。这可能会导致一些不太显然的用法。

例如，在支持在 `{{htmlelement("datalist")}}` 上使用 `range` 输入类型的浏览器中，在每个 datalist 的 `{{htmlelement("option")}}` 值上会显示一个小勾。你可以在 [`<input type="range">` 参考页面上看到一种实现](/zh-CN/docs/Web/HTML/Element/input/range#添加井号和标签)。

支持 {{htmlelement('datalist')}} 和 [`<input type="color">`](/zh-CN/docs/Web/HTML/Element/Input/color) 的浏览器上应该显示一个自定义颜色调色板作为默认值，同时仍然提供完整的颜色调色板。

在这种情况下，不同的浏览器在不同的情况下表现不同，所以要把这种使用视为渐进式增强，并确保它们优雅地降级。

## 其他表单功能

还有一些其他的表单功能，不像我们已经提到的那样明显，但在某些情况下仍然有用，所以我们认为值得给它们一个简单的提及。

> **备注：** 你可以在 GitHub 上找到本节的例子，如 [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html)（[也可以看看在线演示](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)）。

### 计量器和进度条

计量器和进度条是数值的视觉表现。

#### 进度条

进度条表示一个随时间变化的数值，最高可以达到 [`max`](/zh-CN/docs/Web/HTML/Element/progress#max) 属性所指定的最大值。这样的条是使用 {{ HTMLElement("progress")}} 元素创建出来的。

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("进度条", 120, 120)}}

这可以实现任何需要进度报告的事情，例如下载文件的百分比，或问卷调查中填写过问题的数量。

{{HTMLElement("progress")}} 元素中的内容是供不支持此元素浏览器进行回退，以及给屏幕阅读器提供发音材料的机制。

#### 计量器

计量器代表了一个由 [`max`](/zh-CN/docs/Web/HTML/Element/meter#max) 和 [`min`](/zh-CN/docs/Web/HTML/Element/meter#min) 限定范围内的固定值。这个值在视觉上呈现为一个条形，为了了解这个条形的样子，我们将这个值与其他一些设定的值进行比较：

- [`low`](/zh-CN/docs/Web/HTML/Element/meter#low) 和 [`high`](/zh-CN/docs/Web/HTML/Element/meter#high) 将范围分为了三个部分：

  - 下半部分范围在 [`min`](/zh-CN/docs/Web/HTML/Element/meter#min) 和 [`low`](/zh-CN/docs/Web/HTML/Element/meter#low) 值之间，包含端点值。
  - 中间部分范围在 [`low`](/zh-CN/docs/Web/HTML/Element/meter#low) 和 [`high`](/zh-CN/docs/Web/HTML/Element/meter#high) 值之间，不包含端点值。
  - 上半部分范围在 [`high`](/zh-CN/docs/Web/HTML/Element/meter#high) 和 [`max`](/zh-CN/docs/Web/HTML/Element/meter#max) 值之间，包含端点值。

- [`optimum`](/zh-CN/docs/Web/HTML/Element/meter#optimum) 值定义了 {{HTMLElement("meter")}} 元素的最佳值，它与 [`low`](/zh-CN/docs/Web/HTML/Element/meter#low) 和 [`high`](/zh-CN/docs/Web/HTML/Element/meter#high) 值一同定义了首选的范围部分：

  - 如果 [`optimum`](/zh-CN/docs/Web/HTML/Element/meter#optimum) 在下半部分范围内，下半部分范围被认为是首选部分，中间部分范围被认为是平均部分，而上半部分范围被认为是最差的部分。
  - 如果 [`optimum`](/zh-CN/docs/Web/HTML/Element/meter#optimum) 在中间部分范围内，下半部分范围被认为是平均部分，中间部分范围被认为是首选部分，而上半部分范围也被认为是平均部分。
  - 如果 [`optimum`](/zh-CN/docs/Web/HTML/Element/meter#optimum) 在上半部分范围内，下半部分范围被认为是最差的部分，中间部分范围被认为是平均部分，而上半部分范围被认为是首选部分。

所有实现了 {{HTMLElement("meter")}} 元素的浏览器使用这些值来改变计量器的颜色：

- 如果当前值位于首选范围，则计量器显示为绿色。
- 如果当前值位于平均范围，则计量器显示为黄色。
- 如果当前值位于最差范围，则计量器显示为红色。

像下面这种条形是使用 {{HTMLElement("meter")}} 元素创建出来的。这是为了实现任何类型的仪表，例如，显示磁盘上使用的总空间的条形图，当它开始变满时就变成红色。

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="50">75</meter>
```

{{EmbedLiveSample("计量器", 120, 120)}}

{{HTMLElement("meter")}} 元素中的内容是供不支持此元素浏览器进行回退，以及给屏幕阅读器提供发音材料的机制。

能支持 {{HTMLElement("progress")}} 和 {{HTMLElement("meter")}} 已经非常不错了——除了 Internet Explorer 不支持，其他浏览器都可以支持。

## 测试你的技能！

你已经看完了这篇文章的主要内容，但你还记得所有重要的信息吗？在继续学习其他内容之前，你可以在这里找到进一步的测试来确定你是否掌握了这些知识点——请参见[测试你的技能：其他控件](/zh-CN/docs/Learn/Forms/Test_your_skills:_Other_controls)。

## 总结

正如你在过去的几篇文章中所看到的，有许多不同类型的表单控件。你不需要一下子记住所有这些细节，只要你愿意，可以经常回到这些文章中来检查细节。

现在你已经掌握了不同的可用表单控件背后的 HTML 代码，接下来我们将看看[如何进行样式化表单](/zh-CN/docs/Learn/Forms/Styling_web_forms)。

{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}

### 进阶内容

- [如何构建表单控件](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls)
- [使用 JavaScript 发送表单](/zh-CN/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [表单控件兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
