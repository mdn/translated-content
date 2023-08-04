---
title: <input type="password">
slug: Web/HTML/Element/input/password
---

{{HTMLSidebar}}

**`"password"`** 类型的 `<input>` 元素可以让用户更加安全的输入密码。

这个元素是作为单行纯文本编辑器控件呈现的，其中文本被遮蔽，无法读取。通常通过用诸如星号（“\*”）或点（“•”）等符号替换每个字符来实现。根据用户的{{Glossary("user agent","用户代理")}}和操作系统不同，显示的字符也会不同。

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

输入过程的具体细节可能因浏览器而异。例如，有的浏览器经常在隐藏它之前显示键入的字符一段时间，而另外一些浏览器允许用户切换明文显示模式。移动端设备上检查是否输入了预期的密码通常比较困难，而这两种机制都能解决这个问题。

> **备注：** 任何涉及密码等敏感信息的表单（例如登录表格）都应通过 HTTPS 提供。许多浏览器现在都实现了警告不安全登录表单的机制，参阅[不安全的密码](/zh-CN/docs/Web/Security/Insecure_passwords)。

## 值

[`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性包含了用于输入密码的文本编辑控件的当前内容的字符串。如果用户还没有输入任何内容，则此值为空字符串（`""`）。如果指定了 [`required`](/zh-CN/docs/Web/HTML/Global_attributes#required) 属性，则密码编辑框必须包含一个非空的有效值。

如果指定了 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性，则 `password` 中的内容只有通过验证才有效；参见[验证](#验证)一节以获得更多信息。

> **备注：** 换行（U+000A）和回车（U+000D）符不允许在 `password` 中出现。当对密码控件设置值时，换行和回车符都会从值中删除。

## 额外属性

除了所有 {{HTMLElement("input")}} 元素支持的属性外，密码字段输入还支持以下属性：

### maxlength

用户可以输入到密码输入框中的最大字符数（以 UTF-16 代码单元为单位）。必须为大于等于 0 的整数。如果未指定 `maxlength` 或指定了无效的值，则密码输入框将没有最大长度。这个值也必须大于等于 `minlength` 的值。

如果文本框中的字符数大于 `maxlength` UTF-16 编码单元长度，则输入将无法通过[约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)。

### minlength

用户可以输入到密码输入框中的最小字符数（以 UTF-16 代码单元为单位）。该值必须是小于等于 `maxlength` 指定的值的非负整数值。如果未指定 `minlength` 或指定了无效的值，则密码输入将没有最小长度。

如果输入到字段中的文本的长度小于 `minlength` UTF-16 代码单元的长度，则输入将无法通过[约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)。

### pattern

如果指定了 `pattern` 属性，为了使 [`value`](/zh-CN/docs/Web/HTML/Global_attributes#value) 通过[约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)，必须满足该属性给定的正则表达式。它必须是 {{jsxref("RegExp")}} 类型的有效 JavaScript 正则表达式，并且已在我们的[正则表达式指南](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)中进行了说明；在编译正则表达式时指定了 `'u'` 标志，因此该模式被视为 Unicode 代码点的序列，而不是 ASCII。模式文本周围无需指定正斜杠。

如果没有指定模式，或指定了无效的模式，则不会应用任何正则表达式，且该属性将被完全忽略。

> **备注：** 使用 [`title`](/zh-CN/docs/Web/HTML/Element/input#title) 属性来指定大多数浏览器将作为工具提示的文本，以解释匹配该模式的要求是什么。还应该在附近包括其他解释性的文本。

强烈建议在密码输入中使用模式，以帮助确保用户选择和使用有效的密码，并使用广泛的字符类别。通过一个模式，你可以规定大小写规则、要求使用一些数字和/或标点符号，等等。参阅[验证](#验证)一节以获取详细说明和示例。

### placeholder

`placeholder` 属性是一个字符串，可向用户提供有关该字段中需要什么样的信息的简短提示。它应该是一个单词或短语来说明预期的数据类型，而不是说明性消息。文本中*不得*包含回车符或换行符。

如果控件的内容具有方向（{{Glossary("LTR")}} 或 {{Glossary("RTL")}}），但需要以相反的方向显示占位符，则可以使用 Unicode 双向算法来格式化字符，从而覆盖原有占位符的方向；请参见[如何针对双向文本使用 Unicode 控制符](https://www.w3.org/International/questions/qa-bidi-unicode-controls)获取更多信息。

> **备注：** 尽可能避免使用 `placeholder` 属性。它在语义上没有其他解释表单的方式有用，并且可能导致内容出现意外的问题。请参见 [`<input>` 标签](/zh-CN/docs/Web/HTML/Element/input#标签)以获取更多信息。

### readonly

一个布尔属性，如果存在，则表示该字段不能由用户编辑。但是，仍可以通过 JavaScript 代码直接设置 {{domxref("HTMLInputElement","HTMLInputElement.value")}} 的 `value` 属性来更改。

> **备注：** 因为只读字段不能有值，所以 `required` 对指定了 `readonly` 属性的输入没有任何影响。

### size

`size` 属性是一个数字值，指示输入字段应有多少个字符宽。该值必须是一个大于零的数字，默认值是 20。由于字符宽度各不相同，这可能是也可能不是精确的，不应依赖于此；结果输入可能比指定的字符数更窄或更宽，这取决于字符和字体（使用的 {{cssxref("font")}} 设置）。

这并*不*限制用户可以在该字段中输入多少个字符，仅能指定一次可以看到多少个。要设置输入数据长度的上限，请使用 [`maxlength`](#maxlength) 属性。

## 使用密码输入框

密码输入框的工作方式通常与其他文本输入框一样；主要区别在于遮挡内容，以防止用户附近的人读取密码。

### 一个简单的密码输入框

在这里，我们看到了最基本的密码输入，并使用了 {{HTMLElement("label")}} 元素创建了相应的标签。

```html
<label for="userPassword">密码：</label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("一个简单的密码输入框", 600, 40)}}

### 允许自动补全

为了让用户的密码管理器自动输入密码，可以指定 [`autocomplete`](/zh-CN/docs/Web/HTML/Element/input#autocomplete) 属性。对于密码输入框，通常是下列值之一：

- `on`
  - : 允许浏览器或密码管理器自动填写密码字段。这不像使用 `current-password` 或 `new-password` 那样提供信息。
- `off`
  - : 不允许浏览器或密码管理器自动填写密码字段。请注意，某些软件会忽略此值，因为它通常会损害用户维护安全密码操作的能力。
- `current-password`
  - : 允许浏览器或密码管理器输入网站的当前密码。这提供了比 `on` 更多的信息，因为它允许浏览器或密码管理器自动在该字段中输入当前已知的网站密码，但不建议新密码。
- `new-password`
  - : 允许浏览器或密码管理器自动输入网站的新密码；这用于“更改密码”和“新用户”表单，在该字段询问用户新密码。新密码可能以多种方式生成，具体取决于使用的密码管理器。它可能只是填写新的建议密码，或者它可能会向用户显示创建密码的界面。

```html
<label for="userPassword">密码：</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("允许自动补全", 600, 40)}}

### 让密码必须输入

为了告知用户的浏览器在提交表单前，密码字段必须拥有一个合法的值，只要指定布尔属性 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 就可以了。

```html
<label for="userPassword">密码：</label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("让密码必须输入", 600, 40)}}

### 指定输入模式

如果你推荐（或要求）的密码语法规则会因替代的文字输入接口受益，你可以使用 [`inputmode`](/zh-CN/docs/Web/HTML/Element/input#inputmode) 属性来请求一个特定的输入模式。这方面最明显的用例是如果密码被要求是数字的（如 PIN）。此时，带有虚拟键盘的移动设备可能会选择切换到数字键盘布局，而不是全键盘，以使输入密码更容易。如果 PIN 码是一次性使用的，请将 [`autocomplete`](/zh-CN/docs/Web/HTML/Element/input#autocomplete) 属性设置为 `off` 或 `one-time-code`，以暗示它不被保存。

```html
<label for="pin">PIN：</label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("指定输入模式", 600, 40)}}

### 设置长度要求

你仍然可以使用 [`minlength`](/zh-CN/docs/Web/HTML/Element/input#minlength) 和 [`maxlength`](/zh-CN/docs/Web/HTML/Element/input#maxlength) 属性来设定密码的最小和最大可接受长度。此示例通过指定用户的 PIN 必须至少为 4 且不超过 8 位来扩展前一个示例。这里使用了 [`size`](/zh-CN/docs/Web/HTML/Element/input#size) 属性来确保密码输入控件的宽度为 8 个字符。

```html
<label for="pin">PIN：</label>
<input
  id="pin"
  type="password"
  inputmode="numeric"
  minlength="4"
  maxlength="8"
  size="8" />
```

{{EmbedLiveSample("设置长度要求", 600, 40)}}

### 选中字符

与其他文本输入控件一样，你可以使用 {{domxref("HTMLInputElement.select", "select()")}} 方法来选择密码字段的所有字符。

#### HTML

```html
<label for="userPassword">密码：</label>
<input id="userPassword" type="password" size="12" />
<button id="selectAll">全选</button>
```

#### JavaScript

```js
document.getElementById("selectAll").onclick = () => {
  document.getElementById("userPassword").select();
};
```

#### 结果

{{EmbedLiveSample("选中字符", 600, 40)}}

你还可以使用 {{domxref("HTMLInputElement.selectionStart", "selectionStart")}} 和 {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}} 来获取（或设置）当前选中的字符范围，以及 {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}} 来了解选择发生在哪个方向（或将被扩展，取决于你的平台；见其文档的解释）。然而，考虑到文本被遮挡，这些的用处就有些有限了。

## 验证

如果你的应用程序对输入密码的实际内容有字符集限制或任何其他要求，你可以使用 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性来建立一个正则表达式，用来自动确保你的密码符合这些要求。

在这个示例中，只有包含至少四个和不超过八个十六进制数字的值才是有效的。

```html
<label for="hexId">十六进制 ID：</label>
<input
  id="hexId"
  type="password"
  pattern="[0-9a-fA-F]{4,8}"
  title="输入包含 4~8 个十六进制字符的 ID"
  autocomplete="new-password" />
```

{{EmbedLiveSample("验证", 600, 40)}}

## 示例

### 申请社会安全号码

此示例仅接受与[有效的美国社会安全号码](https://zh.wikipedia.org/zh-cn/社會安全號碼)格式相匹配的输入。这些用于美国税务和识别目的的数字的格式为“123-45-6789”。还存在针对每个组中允许的值的各种规则。

#### HTML

```html
<label for="ssn">SSN：</label>
<input
  type="password"
  id="ssn"
  inputmode="numeric"
  minlength="9"
  maxlength="12"
  pattern="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
  required
  autocomplete="off" />
<br />
<label for="ssn">值：</label>
<span id="current"></span>
```

此示例使用了 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性，限制了输入为一个合法的社会安全号码。很显然，这个正则表达式并不能保证有效的 SSN（因为我们没有访问到社会保障局的数据库），但它确实保证输入的值可能是合法值之一。它通常会避免无效的值。此外，它允许三组数字由空格、短划线（“-”）分隔，或者没有分隔符。

[`inputmode`](/zh-CN/docs/Web/HTML/Element/input#inputmode) 被设置为 `numeric`，以鼓励有虚拟键盘的设备切换到数字键盘布局，以方便输入。[`minlength`](/zh-CN/docs/Web/HTML/Element/input#minlength) 和 [`maxlength`](/zh-CN/docs/Web/HTML/Element/input#maxlength)属性分别设置为 9 和 12，以要求值的长度至少为 9 个，不超过 12 个字符（前者在数字组之间没有分隔符，后者则有）。[`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性被用来表示该控件必须有一个值。最后，[`autocomplete`](/zh-CN/docs/Web/HTML/Element/input#autocomplete) 被设置为 `off`，以避免密码管理器和会话恢复功能试图设置其值，因为这根本就不是一个密码。

#### JavaScript

这只是一些简单的代码，用于在屏幕上显示输入的 SSN，以便你可以看到它。显然这会破坏密码字段的目的，但它有助于试验 `pattern`。

```js
const ssn = document.getElementById("ssn");
const current = document.getElementById("current");

ssn.oninput = (event) => {
  current.textContent = ssn.value;
};
```

#### 结果

{{EmbedLiveSample("申请社会安全号码", 600, 60)}}

## 技术总结

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">值</a></strong></td>
      <td>
        一个代表密码的字符串，或空值
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} 和
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>支持的通用属性</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#inputmode"><code>inputmode</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#required"><code>required</code></a> 和 <a href="/zh-CN/docs/Web/HTML/Element/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <code>selectionStart</code>、<code>selectionEnd</code>、<code>selectionDirection</code> 和 <code>value</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM 接口</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>方法</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}、{{domxref("HTMLInputElement.setRangeText", "setRangeText()")}} 和 {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 属性兼容性表格](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
