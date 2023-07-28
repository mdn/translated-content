---
title: <input type="text">
slug: Web/HTML/Element/input/text
---

{{HTMLSidebar}}

**`text`** 类型的 {{HTMLElement("input")}} 元素创建了基础的单行文本字段。

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>代表包含在文本字段中的文字</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{domxref("HTMLElement/change_event", "change")}} 和 {{domxref("HTMLElement/input_event", "input")}}</td>
  </tr>
  <tr>
   <td><strong>支持的公共属性</strong></td>
   <td><a href="/zh-CN/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#list"><code>list</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#required"><code>required</code></a> 和 <a href="/zh-CN/docs/Web/HTML/Element/input#size"><code>size</code></a></td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><a href="/zh-CN/docs/Web/HTML/Element/input#list"><code>list</code></a>、<code>value</code></td>
  </tr>
    <tr>
      <td><strong>DOM 接口</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
  <tr>
   <td><strong>方法</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}、{{domxref("HTMLInputElement.setRangeText", "setRangeText()")}} 和 {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}。</td>
  </tr>
 </tbody>
</table>

## 值

[`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性是一个包含了文本域当前文字的字符串。你可以在 Javascript 中使用 {{domxref("HTMLInputElement")}} 的 `value` 属性获取这些文字。

```js
let theText = myTextInput.value;
```

如果当前文本输入没有约束验证（查看[验证](#验证)小节获取更多详细信息），`value` 值可能是空字符串（`""`）。

## 其他属性

除了所有 {{HTMLElement("input")}} 元素上共有的可操作的属性外，文本输入框还支持以下属性：

### `list`

列表属性的值是位于同一文档中的 {{HTMLElement("datalist")}} 元素的 {{domxref("Element.id", "id")}}。{{HTMLElement("datalist")}} 提供了一个预定义的值列表，向用户建议这个输入。列表中任何与 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 不兼容的值都不包括在建议选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

### `maxlength`

用户可以输入到 `text` 输入框中的最大字符数（以 UTF-16 码点为单位）。必须为大于等于 0 的整数。如果未指定 `maxlength` 或指定了无效的值，则 `text` 输入框将没有最大值。这个值也必须大于等于 `minlength` 的值。

如果文本框中的字符数大于 `maxlength` UTF-16 编码单元长度，则输入将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。约束验证仅作用于用户修改输入值的时候。

### `minlength`

用户可以输入到 `text` 输入框中的最小字符数（以 UTF-16 码点为单位）。该值必须是小于等于 `maxlength` 指定的值的非负整数值。如果未指定 `minlength` 或指定了无效的值，则 `text` 输入将没有最小值。

如果输入到字段中的文本的长度小于 `minlength` UTF-16 代码单元的长度，则输入将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。约束验证仅作用于用户修改输入值的时候。

### `pattern`

如果指定了 `pattern` 属性，为了使 `value` 通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)，必须满足该属性给定的正则表达式。它必须是 {{jsxref("RegExp")}} 类型的有效 JavaScript 正则表达式，并且已在我们的[正则表达式指南](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)中进行了说明；在编译正则表达式时指定了 `'u'` 标志，因此该模式被视为 Unicode 代码点的序列，而不是 ASCII。模式文本周围无需指定正斜杠。

如果模式未指定或无效，则不应用任何正则表达式，并且将完全忽略此属性。

> **备注：** 使用 [`title`](/zh-CN/docs/Web/HTML/Element/input#title) 属性指定大多数浏览器将显示为文本的工具提示，以说明与模式匹配的要求。你还应该在附近添加其他说明性文字。

请参照[指定模式](#指定模式)更多内容和例子。

### `placeholder`

`placeholder` 属性是一个字符串，可向用户提供有关该字段中需要什么样的信息的简短提示。它应该是一个单词或短语来说明预期的数据类型，而不是说明性消息。文本中*不得*包含回车符或换行符。

如果控件的内容具有方向（{{Glossary("LTR")}} 或 {{Glossary("RTL")}}），但需要以相反的方向显示占位符，则可以使用 Unicode 双向算法来格式化字符，从而覆盖原有占位符的方向；请参见[如何针对双向文本使用 Unicode 控制符](https://www.w3.org/International/questions/qa-bidi-unicode-controls)获取更多信息。

> **备注：** 尽可能避免使用 `placeholder` 属性。它在语义上没有其他解释表单的方式有用，并且可能导致内容出现意外的问题。请参见 [`<input>` 标签](/zh-CN/docs/Web/HTML/Element/input#标签)以获取更多信息。

### `readonly`

一个布尔属性，如果存在，则表示该字段不能由用户编辑。但是，仍可以通过 JavaScript 代码直接设置 {{domxref("HTMLInputElement")}} 的 `value` 属性来更改。

> **备注：** 因为只读字段不能有值，所以 `required` 对指定了 `readonly` 属性的输入没有任何影响。

### `size`

`size` 属性是一个数字值，指示输入字段应有多少个字符宽。该值必须是一个大于零的数字，默认值是 20。由于字符宽度各不相同，这可能是也可能不是精确的，不应依赖于此；结果输入可能比指定的字符数更窄或更宽，这取决于字符和字体（{{cssxref("font")}}使用中的设置）。

这并*不*限制用户可以在该字段中输入多少个字符，仅能指定一次可以看到多少个。要设置输入数据长度的上限，请使用 [`maxlength`](#maxlength) 属性。

### `spellcheck`

`spellcheck` 是一个全局属性，用于指示是否启用元素的拼写检查。它可以用于任何可编辑的内容，但是这里我们考虑在 {{HTMLElement("input")}} 元素上使用 `spellcheck` 的细节。 `spellcheck` 的允许值为：

- `false`
  - : 禁用此元素的拼写检查。
- `true`
  - : 对此元素启用拼写检查。
- `""`（空字符串）或空值
  - : 遵循元素的默认行为进行拼写检查。这可能基于父元素 `spellcheck` 设置或其他因素。

如果输入字段没有设置 [readonly](#readonly) 属性且未禁用，则可以启用拼写检查。

如果{{Glossary("user agent", "用户代理的")}}首选项覆盖了设置，则通过读取 `spellcheck` 返回的值可能无法反映控件中拼写检查的实际状态。

## 非标准属性

以下非标准属性在某些浏览器上也可用。一般来说，除非万不得已，否则你应该避免使用它们。

### `autocorrect`

Safari 扩展，`autocorrect` 属性是一个字符串，它指示在用户编辑此字段时是否激活自动更正。允许的值为：

- `on`
  - : 启用拼写错误的自动更正，以及配置文本替换（如果已配置）的处理。
- `off`
  - : 禁用自动更正和文本替换。

### `mozactionhint`

Mozilla 扩展，它提供了一个提示，提示用户在编辑字段时按 <kbd>Enter</kbd> 或 <kbd>Return</kbd> 键将采取何种操作。

此属性已经废弃：请使用全局属性 [`enterkeyhint`](/zh-CN/docs/Web/HTML/Global_attributes#enterkeyhint) 作为替代。

## 使用文本输入框

`<input>` 元素的 `text` 类型创建基本的单行输入。你应该在希望用户输入单行值的任何地方使用它们，并且没有更具体的输入类型可用于收集该值（例如，如果是[日期或时间](/zh-CN/docs/Web/HTML/Element/input/datetime-local)、[URL](/zh-CN/docs/Web/HTML/Element/input/url)、[电子邮件](/zh-CN/docs/Web/HTML/Element/input/email)或[查找词汇](/zh-CN/docs/Web/HTML/Element/input/search)，你将拥有更好的选择）。

### 基础示例

```html
<form>
  <div>
    <label for="uname">输入一个用户名：</label>
    <input type="text" id="uname" name="name" />
  </div>
  <div>
    <button>提交</button>
  </div>
</form>
```

如下所示：

{{EmbedLiveSample("基础示例", 600, 50)}}

提交后，发送到服务器的键/值对的数据将为 `name=Chris`（如果在提交之前输入了“Chris”作为输入值）。你必须记住在 {{HTMLElement("input")}} 元素上包含 [`name`](/zh-CN/docs/Web/HTML/Element/input#name) 属性，否则文本字段的值将不包含在提交的数据中。

### 设置占位符

你可以通过使用 [`placeholder`](/zh-CN/docs/Web/HTML/Element/input#placeholder) 属性在文本输入中提供一个有用的占位符，提示用户该输入什么。看下面的例子：

```html
<form>
  <div>
    <label for="uname">输入一个用户名：</label>
    <input type="text" id="uname" name="name" placeholder="一个小写单词" />
  </div>
  <div>
    <button>提交</button>
  </div>
</form>
```

你可以在下面看到占位符的呈现方式：

{{EmbedLiveSample("设置占位符", 600, 80)}}

占位符通常以比元素的前景色更浅的颜色呈现，并且在用户开始向字段中输入文本时（或者每当字段通过编程方式设置其 `value` 属性时）就会自动消失。

### 输入框元素尺寸

可以使用 [`size`](/zh-CN/docs/Web/HTML/Element/input#size) 属性来控制输入框的尺寸。使用它，可以指定文本输入一次可以显示的字符数。这会影响元素的宽度，使你可以按字符而不是像素指定宽度。例如，在此示例中，输入为 30 个字符宽：

```html
<form>
  <div>
    <label for="uname">输入一个用户名：</label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="一个小写单词"
      size="30" />
  </div>
  <div>
    <button>提交</button>
  </div>
</form>
```

{{EmbedLiveSample('输入框元素尺寸', 600, 80)}}

## 验证

`text` 类型的 `<input>` 元素默认没有应用自动验证（因为基本文本输入需要能够接受任意字符串），但是有一些客户端验证选项可用，我们将在下面讨论。

> **备注：** HTML 表单验证*不能*替代服务器脚本，以确保输入的数据格式正确。对于某人来说，对 HTML 进行调整以使其绕过验证或完全删除验证太容易了。有人也可以完全绕开您的 HTML 并将数据直接提交到您的服务器。如果服务器端代码无法验证接收到的数据，则当将格式不正确的数据（或太大，类型错误的数据等等）输入数据库时，灾难可能会发生。

### 样式注意事项

有一些有用的伪类可用于设置表单元素的样式，以帮助用户查看其值是有效还是无效，它们是 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}}。在本节中，我们将使用以下 CSS，它将在包含有效值的输入旁边放置一个复选标记（tick），并在包含无效值的输入旁边放置一个叉号（X）。

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

该技术还需要将 {{htmlelement("span")}} 元素放置在 `form` 元素之后，该 `form` 元素充当图标的持有者。这样做的原因是某些浏览器上的某些输入类型不能很好地显示直接位于其后的图标。

### 使输入框必填

你可以使用 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性简单地令该输入框在表单提交前必须填入值：

```html
<form>
  <div>
    <label for="uname">输入一个用户名：</label>
    <input type="text" id="uname" name="name" required />
    <span class="validity"></span>
  </div>
  <div>
    <button>提交</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}
input + span {
  padding-right: 30px;
}
input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

该示例渲染如下所示：

{{EmbedLiveSample('使输入框必填', 600, 100)}}

如果尝试在未输入搜索词的情况下提交表单，浏览器将显示一条错误消息。

### 输入值长度

你可以使用 [`minlength`](/zh-CN/docs/Web/HTML/Element/input#minlength) 属性指定输入值的最小长度（以字符为单位）；同样，也可以使用 [`maxlength`](/zh-CN/docs/Web/HTML/Element/input#maxlength) 设置输入值的最大长度（以字符为单位）。

下面的示例要求输入的值的长度为 4–8 个字符。

```html
<form>
  <div>
    <label for="uname">输入一个用户名：</label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="10"
      placeholder="用户名"
      minlength="4"
      maxlength="8" />
    <span class="validity"></span>
  </div>
  <div>
    <button>提交</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}
input + span {
  padding-right: 30px;
}
input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

如下所示：

{{EmbedLiveSample('输入值长度', 600, 100)}}

如果尝试提交少于 4 个字符的表单，则会收到一条相应的错误消息（不同的浏览器会有所不同）。如果尝试输入 8 个以上的字符，浏览器将不允许输入。

> **备注：** 如果您指定了 `minlength` 但未指定 `required`，则输入被视为有效，因为不需要用户指定值。

### 指定模式

可以使用 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性指定输入值必须匹配才能被认为是有效的正则表达式（请参照[以正则表达式验证](/zh-CN/docs/Learn/HTML/Forms/Form_validation#Validating_against_a_regular_expression)）。

下面的示例将值限制为 4-8 个字符，并要求该值仅包含小写字母。

```html
<form>
  <div>
    <label for="uname">输入一个用户名：</label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}" />
    <span class="validity"></span>
    <p>用户名必须为 4-8 位长，且仅包含小写字母。</p>
  </div>
  <div>
    <button>提交</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

如下所示：

{{EmbedLiveSample('指定模式', 600, 130)}}

## 示例

可以在[你的第一个 HTML 表单](/zh-CN/docs/Learn/Forms/Your_first_form)和[如何结构化 HTML 表单](/zh-CN/docs/Learn/Forms/How_to_structure_a_web_form)文章中看到一些好的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [HTML 表单](/zh-CN/docs/Learn/Forms)
- {{HTMLElement("input")}} 元素和其基于的接口 {{domxref("HTMLInputElement")}}
- [`<input type="search">`](/zh-CN/docs/Web/HTML/Element/input/search)
- {{HTMLElement("textarea")}}：多行文本输入元素
- [CSS 属性兼容性表格](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
