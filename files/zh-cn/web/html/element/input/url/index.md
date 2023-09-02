---
title: <input type="url">
slug: Web/HTML/Element/input/url
---

{{HTMLSidebar}}

**`url`** 类型的 {{HTMLElement("input")}} 元素用来让用户输入和编辑 URL。

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

所输入的值在表单提交前会自动经过验证，以确认它为空，或为一个合法的 URL 格式。{{cssxref(":valid")}} 和 {{cssxref(":invalid")}} CSS 伪类会适当地自动应用，以在视觉上表示当前值是否为一个合法的 URL 值。

对于不支持类型为 `url` 的输入框的浏览器，它会回退为标准的 {{HTMLElement("input/text", "text")}} 输入框。

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>代表 URL 的字符串，或为空</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>
    {{domxref("HTMLElement/change_event", "change")}} 和 {{domxref("HTMLElement/input_event", "input")}}
   </td>
  </tr>
  <tr>
   <td><strong>支持的通用属性</strong></td>
   <td><a href="/zh-CN/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#list"><code>list</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#required"><code>required</code></a> 和 <a href="/zh-CN/docs/Web/HTML/Element/input#size"><code>size</code></a></td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>list</code>、<code>value</code>、<code>selectionEnd</code> 和 <code>selectionDirection</code></td>
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

{{HTMLElement("input")}} 元素的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性包含了自动验证为 URL 格式的字符串。具体来说，有两种可能的格式可以通过验证：

1. 一个空字符串（""），代表用户没有输入任何值，或者有值被移除。
2. 一个正确的绝对 URL 格式。这并不代表 URL 所指地址实际存在，但至少要符合格式。简单来说，要类似于 `urlscheme://restofurl`。

查看[验证](#验证)小节，以了解 URL 如何经过验证来确保格式正确性。

## 附加属性

除了所有 {{HTMLElement("input")}} 元素上共有的可操作的属性外，`url` 输入框还支持以下属性：

### list

`list` 属性指定了一个 {{HTMLElement("datalist")}} 元素的 id，用来提供输入建议。{{HTMLElement("datalist")}} 提供了一个预定义的值列表，向用户建议这个输入。列表中任何与 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 不兼容的值都不包括在建议选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

### maxlength

用户可以输入到 `url` 输入框中的最大字符数（以 UTF-16 代码单元为单位）。必须为大于等于 0 的整数。如果未指定 `maxlength` 或指定了无效的值，则 `url` 输入框将没有最大值。这个值也必须大于等于 `minlength` 的值。

如果文本框中的字符数大于 `maxlength` UTF-16 编码单元长度，则输入将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。约束验证仅作用于用户修改输入值的时候。

### minlength

用户可以输入到 `url` 输入框中的最小字符数（以 UTF-16 代码单元为单位）。该值必须是小于等于 `maxlength` 指定的值的非负整数值。如果未指定 `minlength` 或指定了无效的值，则 `url` 输入将没有最小值。

如果输入到字段中的文本的长度小于 `minlength` UTF-16 代码单元的长度，则输入将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。约束验证仅作用于用户修改输入值的时候。

### pattern

如果指定了 `pattern` 属性，为了使 `value` 通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)，必须满足该属性给定的正则表达式。它必须是 {{jsxref("RegExp")}} 类型的有效 JavaScript 正则表达式，并且已在我们的[正则表达式指南](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)中进行了说明；在编译正则表达式时指定了 `'u'` 标志，因此该模式被视为 Unicode 代码点的序列，而不是 ASCII。模式文本周围无需指定正斜杠。

如果模式未指定或无效，则不应用任何正则表达式，并且将完全忽略此属性。

> **备注：** 使用 [`title`](/zh-CN/docs/Web/HTML/Element/input#title) 属性指定大多数浏览器将显示为文本的工具提示，以说明与模式匹配的要求。你还应该在附近添加其他说明性文字。

参见[模式验证](#模式验证)小节以获取细节和例子。

### placeholder

`placeholder` 属性是一个字符串，可向用户提供有关该字段中需要什么样的信息的简短提示。它应该是一个单词或短语来说明预期的数据类型，而不是说明性消息。文本中*不得*包含回车符或换行符。

如果控件的内容具有方向（{{Glossary("LTR")}} 或 {{Glossary("RTL")}}），但需要以相反的方向显示占位符，则可以使用 Unicode 双向算法来格式化字符，从而覆盖原有占位符的方向；请参见[如何针对双向文本使用 Unicode 控制符](https://www.w3.org/International/questions/qa-bidi-unicode-controls)获取更多信息。

> **备注：** 尽可能避免使用 `placeholder` 属性。它在语义上没有其他解释表单的方式有用，并且可能导致内容出现意外的问题。请参见 [`<input>` 标签](/zh-CN/docs/Web/HTML/Element/input#标签)以获取更多信息。

### readonly

一个布尔属性，如果存在，则表示该字段不能由用户编辑。但是，仍可以通过 JavaScript 代码直接设置 {{domxref("HTMLInputElement")}} 的 `value` 属性来更改。

> **备注：** 因为只读字段不能有值，所以 `required` 对指定了 `readonly` 属性的输入没有任何影响。

### size

`size` 属性是一个数字值，指示输入字段应有多少个字符宽。该值必须是一个大于零的数字，默认值是 20。由于字符宽度各不相同，这可能是也可能不是精确的，不应依赖于此；结果输入可能比指定的字符数更窄或更宽，这取决于字符和字体（{{cssxref("font")}} 使用中的设置）。

这并*不*限制用户可以在该字段中输入多少个字符，仅能指定一次可以看到多少个。要设置输入数据长度的上限，请使用 [`maxlength`](#maxlength) 属性。

### spellcheck

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

### autocorrect

Safari 扩展，`autocorrect` 属性是一个字符串，它指示在用户编辑此字段时是否激活自动更正。允许的值为：

- `on`
  - : 启用拼写错误的自动更正，以及配置文本替换（如果已配置）的处理。
- `off`
  - : 禁用自动更正和文本替换。

### mozactionhint

Mozilla 扩展，它提供了一个提示，提示用户在编辑字段时按 <kbd>Enter</kbd> 或 <kbd>Return</kbd> 键将采取何种操作。

此属性已经废弃：请使用全局属性 [`enterkeyhint`](/zh-CN/docs/Web/HTML/Global_attributes#enterkeyhint) 作为替代。

## 使用 URL 输入框

当你用适当的 `type` 值 `url` 创建一个 URL 输入时，所输入的文本会得到自动验证，它们至少可以形成一个合法的 URL。可以避免用户输入错误的网站地址，或者提供一个无效的地址。

然而，重要的是，这并不足以确保指定的文本是一个实际存在与网站的用户相对应的 URL，或在任何其他方面可以接受。它只是确保该字段的值被正确格式化为一个 URL。

> **备注：** 用户可以在背后改动你的 HTML 代码，所以你的站点*不能*依赖此验证提供安全性。*必须*在服务端验证用户所输入的 URL，以确认用户提供的文本不会产生任何额外的安全隐患。

### 简单的 URL 输入框

目前，所有浏览器都将此元素实现为带有基本认证特性的标准文本输入框。对于其最基本的形式，一个 URL 输入框看起来像这样：

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('简单的 URL 输入框', 600, 40) }}

请注意，当输入为空或输入一个有效格式的 URL 地址时，认为输入是有效的，但在其他情况下则不认为有效。通过添加 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性，只允许正确格式的 URL；当输入为空时不再被视为有效。

这里没什么特别的，提交这个表单会将 `myURL=http%3A%2F%2Fwww.example.com` 数据提交至服务器，注意其中的字符是如何进行必要的转义的。

### 占位符

有时，提供一个上下文提示，说明输入数据应该采取什么形式，是很有帮助的。如果页面设计没有为每个 {{HTMLElement("input")}} 提供描述性的标签，这一点就特别重要。这就是**占位符**的作用。占位符是一个值，它通过展示一个有效值的例子来证明 `value` 应该采取的形式，当元素的 `value` 为 "" 时，它将显示在编辑框内。一旦数据被输入框中，占位符就会消失；如果框被清空，占位符会重新出现。

在这里，我们有一个具有 `http://www.example.com` 占位符的 `url` 输入框。注意在编辑输入框的值的时候，占位符如何出现和消失。

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('占位符', 600, 40) }}

### 控制输入框大小

不仅可以控制输入框的物理大小，还可以控制允许输入的最大与最小文字的长度。

#### 物理元素大小

输入框的物理尺寸可以用 [`size`](/zh-CN/docs/Web/HTML/Element/input#size) 属性来控制。通过它，你可以指定输入框一次可以显示的字符数。例如，在这个例子中，`url` 编辑框的宽度为 30 个字符：

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('物理元素大小', 600, 40) }}

#### 元素值长度

输入框的 `size` 是与输入的 URL 本身的长度限制分开的。你可以使用 [`minlength`](/zh-CN/docs/Web/HTML/Element/input#minlength) 属性为输入的 URL 指定一个最小长度，以字符为单位；同样，使用 [`maxlength`](/zh-CN/docs/Web/HTML/Element/input#maxlength) 来设置输入 URL 的最大长度。如果 `maxLength` 超过 `size`，输入框的内容将根据内容操作需要滚动，以显示当前的选择或插入点。

下面的例子创建了一个 30 个字符宽的 URL 地址输入框，要求内容不能短于 10 个字符，不能长于 80 个字符。

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  size="30"
  minlength="10"
  maxlength="80" />
```

{{EmbedLiveSample("元素值长度", 600, 40) }}

> **备注：** 这些属性也影响验证；小于或大于指定的最小值或最大值的长度将会判定为不合法；而且大部分浏览器也会拒绝让用户输入长度大于指定限制的值。

### 提供默认值

#### 使用 value 属性提供单个默认值

你总是可以通过设置 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性来为 `url` 输入框提供一个默认值：

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("使用 value 属性提供单个默认值", 600, 40)}}

#### 提供一系列建议的值

让我们更进一步，你可以通过指定 [`list`](/zh-CN/docs/Web/HTML/Element/input#list) 属性来为用户提供一系列默认的选项。这并不使得用户限制在这些选项中，且允许他们更快选择常用的 URL 地址。它也为 [`autocomplete`](/zh-CN/docs/Web/HTML/Element/input#autocomplete) 提供提示。`list` 属性指定了 {{HTMLElement("datalist")}} 的 ID，对于每个可用的选项，包含一个 {{HTMLElement("option")}} 元素；每个 `option` 的 `value` 是 URL 输入框的相应建议值。

```html
<input id="myURL" name="myURL" type="url" list="defaultURLs" />

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/"></option>
  <option value="http://www.google.com/"></option>
  <option value="http://www.microsoft.com/"></option>
  <option value="https://www.mozilla.org/"></option>
  <option value="http://w3.org/"></option>
</datalist>
```

{{EmbedLiveSample("提供一系列建议的值", 600, 40)}}

有了 {{HTMLElement("datalist")}} 元素及其 {{HTMLElement("option")}}，浏览器将提供指定的值作为 URL 的潜在值；这通常以弹出式或下拉式菜单的形式呈现，其中包含建议。虽然具体的用户体验可能因浏览器而异，但通常情况下，点击编辑框会出现一个下拉的建议 URL。然后，随着用户的输入，列表被调整为只显示匹配的值。每个键入的字符都会缩小列表的范围，直到用户做出选择或键入一个自定义值。

#### 为建议值使用 label

你可以选择在一个或所有的 `<option>` 元素上包含 [`label`](/zh-CN/docs/Web/HTML/Element/option#label) 属性来提供文本标签。一些浏览器可能只显示标签，而其他浏览器可能同时显示标签和 URL。

```html
<input id="myURL" name="myURL" type="url" list="defaultURLs" />

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/" label="MDN Web Docs"></option>
  <option value="http://www.google.com/" label="Google"></option>
  <option value="http://www.microsoft.com/" label="Microsoft"></option>
  <option value="https://www.mozilla.org/" label="Mozilla"></option>
  <option value="http://w3.org/" label="W3C"></option>
</datalist>
```

{{EmbedLiveSample("为建议值使用 label", 600, 40)}}

## 验证

针对 `url` 输入，有两种等级的校验方式。首先，针对每一个 {{HTMLElement("input")}} 元素，有一种标准级别的校验方式，以验证其中的内容是一个合法的 URL。其次，你也可以额外添加一些过滤器，来满足自己的需求。

> **警告：** HTML 表单验证*不能*替代服务端代码，以确保输入的数据格式正确。对于某人来说，对 HTML 进行调整以使其绕过验证或完全删除验证太容易了。有人也可以完全绕开你的 HTML 并将数据直接提交到你的服务器。如果服务器端代码无法验证接收到的数据，则当将格式不正确的数据（或太大、类型错误的数据等等）输入数据库时，灾难可能会发生。

### 基本验证

支持 `url` 输入类型的浏览器会自动提供验证，以确保只有符合标准格式的 URL 文本被输入到输入框。

URL 的语法是相当复杂的。它由 WHATWG 的 [URL 动态标准](https://url.spec.whatwg.org/)定义，并在我们的文章[什么是 URL？](/zh-CN/docs/Learn/Common_questions/What_is_a_URL)中为初学者做了描述。

### 使 URL 必填

如前所述，要使一个 URL 表单项在表单提交前成为必填项（不能让该字段空白），只需要在输入项上包含 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性即可。

```html
<form>
  <input id="myURL" name="myURL" type="url" required />
  <button>提交</button>
</form>
```

{{EmbedLiveSample("使 URL 必填", 600, 40)}}

试试看，不输入任何值的时候提交上面的表单会发生什么。

### 模式验证

如果你需要进一步限制输入的 URL，不仅仅需要“任何看起来像 URL 的字符串”，你可以使用 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性来指定一个{{Glossary("regular expression","正则表达式")}}，该值必须与之匹配才有效。

例如，假设你正在为 Myco 公司的员工建立一个支持页面，如果他们的某个页面出现问题，他们可以联系 IT 部门寻求帮助。在我们的简化表单中，用户需要输入出现问题的页面的 URL，以及描述问题所在的信息。但我们希望只有当输入的 URL 在 Myco 域中时，才能成功地验证该 URL。

由于 `url` 类型的输入可同时进行标准的 URL *和*指定的 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 进行验证，你可以轻松实现。让我们来看看怎么做：

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
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

```html
<form>
  <div>
    <label for="myURL">输入出问题的网址：</label>
    <input
      id="myURL"
      name="myURL"
      type="url"
      required
      pattern=".*\.myco\..*"
      title="URL 必须属于 myco 域" />
    <span class="validity"></span>
  </div>
  <div>
    <label for="myComment">出了什么问题？</label>
    <input id="myComment" name="myComment" type="text" required />
    <span class="validity"></span>
  </div>
  <div>
    <button>提交</button>
  </div>
</form>
```

{{EmbedLiveSample("模式验证", 700, 150)}}

首先，表单指定了 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性，这意味着必须输入合法的 URL 地址。

其次，我们设定 `url` 输入框必须满足的 `pattern` 为 `".*\.myco\..*"`，这个简单的正则表达式要求任意长度的字符串，跟随一个点号，再跟随“myco”，再跟随一个点号，再跟随任意长度的字符串。由于浏览器对给定文字同时运行标准的 URL 过滤器和我们自定义的模式文字过滤器，以上两层认证方法可合并为“确保这是一个合法的 Myco 域 URL”。

这并不完美，但足以满足演示场景的需求。

建议在使用 `pattern` 属性的同时使用 [`title`](/zh-CN/docs/Web/HTML/Global_attributes#title)。如果你这样做，`title` 必须描述模式；它应该解释数据应该采取什么格式，而不是任何其他信息。这是因为 `title` 可以作为验证错误信息的一部分被显示或读出。例如，浏览器可能会显示”请与请求的格式相匹配。“然后跟随指定的 `title` 。如果你的 `title` 是类似于”URL“的东西，结果就是“请与请求的格式相匹配。URL”，用户体验并不好。

这就是为什么我们要指定字符串“URL 必须属于 myco 域”的原因。通过这样做，产生的完整错误信息可能是这样的：“请与请求的格式匹配。URL 必须属于 myco 域”。

> **备注：** 如果你在编写验证正则表达式时遇到麻烦，它们不能正常工作，请检查你的浏览器控制台；那里可能有有用的错误信息来帮助你解决问题。

## 示例

关于 `url` 类型的输入没有太多可说的地方了；请查看[模式验证](#模式验证)和[使用 URL 输入框](#使用_url_输入框)部分的大量例子。

你也可以找到我们的 [GitHub 上的模式验证例子](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html)（试试[在线运行](https://mdn.github.io/learning-area/html/forms/url-example/)它）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 表单指南](/zh-CN/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/zh-CN/docs/Web/HTML/Element/Input/tel)
- [`<input type="email">`](/zh-CN/docs/Web/HTML/Element/Input/email)
- [CSS 属性兼容性表格](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
