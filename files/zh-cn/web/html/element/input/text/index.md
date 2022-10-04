---
title: <input type="text">
slug: Web/HTML/Element/Input/text
---

{{HTMLRef}}

`{{HTMLElement("input")}}` 元素的**`text`** 类型创建基础的单行文本框。

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>input 的一个属性，代表包含在文本框中的文字</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{event("change")}} 和 {{event("input")}}</td>
  </tr>
  <tr>
   <td><strong>支持的公共属性</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("maxlength", "input")}}, {{htmlattrxref("minlength", "input")}}, {{htmlattrxref("pattern", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("readonly", "input")}}, {{htmlattrxref("required", "input")}} and {{htmlattrxref("size", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>value</code></td>
  </tr>
  <tr>
   <td><strong>方法</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}} and {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.</td>
  </tr>
 </tbody>
</table>

## 值

`{{htmlattrxref("value", "input")}}` 属性是一个包含了文本框当前文字的`{{domxref("DOMString")}}`。你可以在 Javascript 中获取 `{{domxref("HTMLInputElement.value")}}` 特性的用途。

```js
let theText = myTextInput.value;
```

如何输入没有验证约束 (查看 [验证](#验证) 获取更多详细信息), `value`值应该是空字符串 ("").

## 其他属性

除了所有 `{{HTMLElement("input")}}` 元素上共有的可操作的属性，以及忽略 type 属性，文本输入框还支持以下属性：

| 属性                          | 描述                                                               |
| ----------------------------- | ------------------------------------------------------------------ |
| [`maxlength`](#maxlength)     | 文本框能接受的最大字符数。                                         |
| [`minlength`](#minlength)     | 文本框能输入的最小字符数，并且仍然被认为是有效的。                 |
| [`pattern`](#pattern)         | 验证文本框内容的正则表达式。                                       |
| [`placeholder`](#placeholder) | 文本框为空时显示的一个示例值。                                     |
| [`readonly`](#readonly)       | 一个布尔属性，指示文本框中的内容是否应该为只读。                   |
| [`size`](#size)               | 一个数字，指示文本框有多少个字符宽度。                             |
| [`spellcheck`](#spellcheck)   | 控制是否可以检查文本框的拼写，或者默认的拼写检查配置是否应该使用。 |

### maxlength

用户可以输入`文本`输入框中的最大字符 (参考 UTF-16 编码单元) 数。必须为整数，值等于 0 或者更大。如果没有规定 `maxlength` ，或者规定的值无效，文本输入框就没有最大值。这个值也必须更大或者等于`minlength`的值。

如果文本框中的字符数大于 `maxlength` UTF-16 编码单元，输入框的[验证](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation)就会失败。约束验证仅作用于用户输入值的时候。

### minlength

用户可以输入到 `text` 中的最小字符数（以 UTF-16 代码为单位）。该值必须是小于或等于 `maxlength` 指定的值的非负整数值。如果未指定 `minlength` 或指定了无效的值，则 `text` 将没有最小长度。

如果输入到字段中的文本的长度小于 `minlength` UTF-16 代码单元的长度，则输入将无法通过约束验证 ([constraint validation](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation)) 约束验证仅在用户更改值时应用。

### pattern

如果指定了 `pattern` 属性，则它是输入的 `{{htmlattrxref("value")}}` 必须匹配正则表达式，以使该值通过约束验证（[constraint validation](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation)）。它必须是 `{{jsxref("RegExp")}}` 类型使用有效 JavaScript 正则表达式，并且已在我们的正则表达式指南（[guide on regular expressions](/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)）中进行了说明；在编译正则表达式时指定了 `'u'` 标志，因此该模式被视为 Unicode 代码点的序列，而不是 ASCII。模式文本周围不能指定正斜杠。

如果指定的模式未指定或无效，则不应用任何正则表达式，并且将完全忽略此属性。

> **备注：** 使用 `{{htmlattrxref("title", "input")}}` 属性指定大多数浏览器将显示为文本的工具提示，以说明与模式匹配的要求。您还应该在附近添加其他说明性文字。

请参照 [指定模式](#指定模式) 更多内容和例子。

### placeholder

`placeholder` 属性是一个字符串，可向用户提供有关该字段中需要什么样的信息的简短提示。它应该是一个单词或短语来说明预期的数据类型，而不是说明性消息。文本中不得包含回车符或换行符。

如果控件的内容具有一个方向性的 ({{Glossary("LTR")}} 或 {{Glossary("RTL")}}) ，但需要以相反的方向性来显示占位符则可以使用 Unicode 双向算法格式化字符来 在占位符中覆盖方向性；请参见 {{SectionOnPage("/en-US/docs/Web/Localization/Unicode_Bidirectional_Text_Algorithm", "Overriding BiDi using Unicode control characters")}}。

> **备注：** 如果可以，请避免使用占位符属性。它在语义上没有其他解释表单的方式有用，并且可能导致内容出现意外的问题。请参见 {{SectionOnPage("/en-US/docs/Web/HTML/Element/input", "Labels and placeholders")}}。

### readonly

一个布尔属性，如果存在，则表示该字段不能由用户编辑。但是，仍可以通过 JavaScript 代码直接设置 {{domxref("HTMLInputElement.value")}} 属性来更改其 `value`。

> **备注：** 因为只读字段不能有值，所以 `required` 也对指定了 `readonly` 属性的输入没有任何影响。

### size

`size` 属性是一个数字值，指示输入字段应有多少个字符宽。该值必须是一个大于零的数字，默认值是 20。根据字符和字体 (使用 {{cssxref("font")}} 设置)，结果输入可能比指定的字符数窄或宽。

这并不限制用户可以在该字段中输入多少个字符。它仅指定一次可以看到多少个。要设置输入数据长度的上限，使用 [`maxlength`](#maxlength) 属性。

### spellcheck

`spellcheck` 是一个全局属性，用于指示是否启用元素的拼写检查。它可以用于任何可编辑的内容，但是这里我们考虑与在 {{HTMLElement("input")}} 元素上使用 `spellcheck` 细节。则 `spellcheck` 的允许值为：

- `false`
  - : 禁用此元素的拼写检查。
- `true`
  - : 对此元素启用拼写检查。
- "" (empty string) or no value
  - : 遵循元素的默认行为进行拼写检查。这可能基于父元素 `spellcheck` 设置或其他因素。

如果输入字段没有设置 [readonly](#readonly) 属性且未禁用，则可以启用拼写检查。

如果 {{Glossary("user agent", "user agent's")}} 首选项覆盖了设置，则通过读取 `spellcheck` 返回的值可能无法反映控件中拼写检查的实际状态。

## 非标准属性

以下非标准属性在某些浏览器上也可用。通常应避免使用它们。

| 属性                              | 描述                                                                                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`autocorrect`](#autocorrect)     | 一个字符串，指示是否 `on` 或 `off` 自动更正。 **Safari only.**                                                                                                     |
| [`mozactionhint`](#mozactionhint) | 一个字符串，指示当用户在编辑字段时按 <kbd>Enter</kbd> 或 <kbd>Return</kbd> 键时将执行的操作类型；用于确定虚拟键盘上该键的适当标签。 **Firefox for Android only.** |

### autocorrect

Safari 扩展，the `autocorrect` 属性是一个字符串，它指示在用户编辑此字段时是否激活自动更正。允许的值为：

- `on`
  - : 启用拼写错误的自动更正，以及配置文本替换（如果已配置）的处理。
- `off`
  - : 禁用自动更正和文本替换。

### mozactionhint

一个 Mozilla 扩展程序，由 Firefox for Android 支持，它提供了一个提示，提示用户在编辑字段时按 <kbd>Enter</kbd> 或 <kbd>Return</kbd> 键将采取何种操作。此信息用于确定在虚拟键盘上的 <kbd>Enter</kbd> 键上使用哪种标签。

> **备注：** [已将其标准化](https://html.spec.whatwg.org/#input-modalities:-the-enterkeyhint-attribute)为全局属性 {{htmlattrxref("enterkeyhint")}}，但尚未广泛实现。要查看 Firefox 中正在实施的更改的状态，请参阅 {{bug(1490661)}}.

允许的值为： `go`, `done`, `next`, `search`, 和 `send`. 浏览器使用此提示来决定在回车键上放置什么标签。

## 运用文本输入框

`<input>` 元素的 `text` 类型创建基本的单行输入。您应该在希望用户输入单行值的任何地方使用它们，并且没有更具体的输入类型可用于收集该值 (例如，如果是 [date](/zh-CN/docs/Web/HTML/Element/input/datetime-local), [URL](/zh-CN/docs/Web/HTML/Element/input/url), [email](/zh-CN/docs/Web/HTML/Element/input/email), 或 [search term](/zh-CN/docs/Web/HTML/Element/input/search), 则表示拥有更好的选择).

### 基础例子

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name">
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

如下所示：

{{EmbedLiveSample("Basic_example", 600, 50)}}

提交后，发送到服务器的键值对数据将为 `uname=Chris` (如果在提交之前输入了 "Chris" 作为输入值). 您必须记住在 {{HTMLElement("input")}} 元素上包含 {{htmlattrxref("name", "input")}} 属性，否则文本字段的值将不包含在提交的数据中。

### 设置占位符

您可以在文本输入中提供一个有用的占位符，通过使用 {{htmlattrxref("placeholder","input")}} 属性，可以提示输入内容。看下面的例子

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name"
           placeholder="Lower case, all one word">
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

您可以在下面看到占位符的呈现方式：

{{EmbedLiveSample("Setting_placeholders", 600, 50)}}

占位符通常以比元素的前景色更浅的颜色呈现，并且在用户开始向字段中输入文本时（或者每当字段通过设置其`value`属性以编程方式设置的值时）就自动消失。

### 输入框元素大小

可以使用 {{htmlattrxref("size", "input")}} 属性来控制输入框的尺寸。使用它，您可以指定文本输入一次可以显示的字符数。这会影响元素的宽度，使您可以按字符而不是像素指定宽度。例如，在此示例中，输入为 30 个字符宽：

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name"
           placeholder="Lower case, all one word"
           size="30">
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 50) }}

## 验证

`<input>` 元素的 `text` 属性没有应用自动验证（因为基本文本输入需要能够接受任意字符串），但是有一些客户端验证选项可用，我们将在下面讨论。

> **备注：** HTML 表单验证不能替代服务器脚本，以确保输入的数据格式正确。对于某人来说，对 HTML 进行调整以使其绕过验证或完全删除验证太容易了。有人也可以完全绕开您的 HTML 并将数据直接提交到您的服务器。如果服务器端代码无法验证接收到的数据，则当将格式不正确的数据（或太大，类型错误的数据等等）输入数据库时，灾难可能会发生。

### 样式注意事项

有一些有用的伪类可用于设置表单元素的样式，以帮助用户查看其值是有效还是无效。它们是 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}}。在本节中，我们将使用以下 CSS，它将在包含有效值的输入旁边放置一个复选标记（tick），并在包含无效值的输入旁边放置一个叉号（X）。

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute; content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

该技术还需要将 {{htmlelement("span")}} 元素放置在`form`元素之后，该`form`元素充当图标的持有者。这是必要的，因为某些浏览器上的某些输入类型不能很好地显示直接位于其后的图标。

### 输入要求

您可以使用 {{htmlattrxref("required","input")}} 属性作为在允许提交表单之前输入所需值的简单方法：

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name" required>
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div { margin-bottom: 10px; position: relative; } input + span { padding-right: 30px; } input:invalid+span:after { position: absolute; content: '✖'; padding-left: 5px; } input:valid+span:after { position: absolute; content: '✓'; padding-left: 5px; }
```

如下所示：

{{ EmbedLiveSample('Making_input_required', 600, 70) }}

如果您尝试在未输入搜索词的情况下提交表单，浏览器将显示一条错误消息。

### 输入值长度

您可以使用 {{htmlattrxref("minlength", "input")}} 属性指定输入值的最小长度（以字符为单位）；同样，请使用 {{htmlattrxref("maxlength", "input")}} 设置输入值的最大长度（以字符为单位）。

下面的示例要求输入的值的长度为 4–8 个字符。

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name" required size="10"
           placeholder="Username"
           minlength="4" maxlength="8">
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div { margin-bottom: 10px; position: relative; } input + span { padding-right: 30px; } input:invalid+span:after { position: absolute; content: '✖'; padding-left: 5px; } input:valid+span:after { position: absolute; content: '✓'; padding-left: 5px; }
```

如下所示：

{{ EmbedLiveSample('Input_value_length', 600, 70) }}

如果您尝试提交少于 4 个字符的表单，则会收到一条相应的错误消息（不同的浏览器会有所不同）。如果您尝试输入 8 个以上的字符，浏览器将不允许您输入。

> **备注：** 如果您指定了 `minlength` 但未指定 `required`, 则输入被视为有效，因为不需要用户指定值。

### 指定模式

您可以使用 {{htmlattrxref("pattern","input")}} 属性指定输入值必须匹配才能被认为是有效的正则表达式 (请参照 [Validating against a regular expression](/zh-CN/docs/Learn/HTML/Forms/Form_validation#Validating_against_a_regular_expression)).

下面的示例将值限制为 4-8 个字符，并要求该值仅包含小写字母。

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name" required size="45"
           pattern="[a-z]{4,8}">
    <span class="validity"></span>
    <p>Usernames must be lowercase and 4-8 characters in length.</p>
  </div>
  <div>
    <button>Submit</button>
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

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

如下所示：

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

## 示例

您可以在 [Your first HTML form](/zh-CN/docs/Learn/HTML/Forms/Your_first_HTML_form) 和 [How to structure an HTML form](/zh-CN/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form) 文章中看到一些好的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [HTML Forms](/zh-CN/docs/Learn/HTML/Forms)
- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface it's based upon.
- [`<input type="search">`](/zh-CN/docs/Web/HTML/Element/input/search)
- {{HTMLElement("textarea")}}: Multi-line text inputmaxlength
