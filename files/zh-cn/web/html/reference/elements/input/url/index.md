---
title: '`<input type="url">` HTML 属性值'
short-title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

**`url`** 类型的 {{HTMLElement("input")}} 元素用来让用户输入和编辑 URL。

{{InteractiveExample("HTML 演示：&lt;input type=&quot;url&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<form>
  <label for="url">输入一个 https:// URL：</label>
  <input
    type="url"
    name="url"
    id="url"
    placeholder="https://example.com"
    pattern="https://.*"
    size="30"
    required />
</form>
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

所输入的值在表单提交前会自动经过验证，以确认它为空，或为一个合法的 URL 格式。{{cssxref(":valid")}} 和 {{cssxref(":invalid")}} CSS 伪类会适当地自动应用，以在视觉上表示当前值是否为一个合法的 URL 值。

## 值

{{HTMLElement("input")}} 元素的 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value) 属性包含了自动验证为符合 URL 语法的字符串。具体来说，有两种可能的格式可以通过验证：

1. 一个空字符串（`""`），表示用户没有输入任何值，或者该值已被移除。
2. 一个格式正确的绝对 URL。这并不意味着该 URL 地址实际存在，但至少格式正确。形如 `urlscheme://rest-of-url` 的条目也可以通过验证，即使所输入的 `urlscheme` 并不存在。

查看[验证](#验证)章节，以了解 URL 如何经过验证来确保格式正确。

## 附加属性

除了[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)，以及所有 {{HTMLElement("input")}} 元素（无论 `type` 如何）共有的属性外，`url` 输入框还支持以下属性。

> [!NOTE]
> 可以向 url 输入添加 [`autocorrect`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/autocorrect) 全局属性，但其存储状态始终为 `off`。

### list

`list` 属性的值是同一文档中某个 {{HTMLElement("datalist")}} 元素的 {{domxref("Element.id", "id")}}。{{HTMLElement("datalist")}} 提供一组预定义值，供用户在此输入时参考。列表中任何与 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/input#type) 不兼容的值都不会出现在建议选项中。所提供的值只是建议，不是要求：用户可以从该预定义列表中选择，也可以提供不同的值。

### maxlength

用户可以输入到 `url` 输入框中的最大字符串长度（以 {{glossary("UTF-16", "UTF-16 码元")}}计量）。必须为大于等于 `0` 的整数。如果未指定 `maxlength` 或指定了无效值，则 `url` 输入框没有最大长度。该值也必须大于等于 `minlength` 的值。

如果字段文本值的长度大于 `maxlength` 个 {{glossary("UTF-16", "UTF-16 码元")}}，则输入将无法通过[约束验证](/zh-CN/docs/Web/HTML/Guides/Constraint_validation)。约束验证仅在用户更改值时应用。

### minlength

用户可以输入到 `url` 输入框中的最小字符串长度（以 {{glossary("UTF-16", "UTF-16 码元")}} 计量）。该值必须是小于等于 `maxlength` 指定值的非负整数。如果未指定 `minlength` 或指定了无效值，则 `url` 输入没有最小长度。

如果字段中输入文本的长度少于 `minlength` 个 {{glossary("UTF-16", "UTF-16 代码单元")}}，则输入将无法通过[约束验证](/zh-CN/docs/Web/HTML/Guides/Constraint_validation)。约束验证仅在用户更改值时应用。

### pattern

如果指定了 `pattern` 属性，为了使输入的 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value) 通过[约束验证](/zh-CN/docs/Web/HTML/Guides/Constraint_validation)，必须与该属性给定的正则表达式匹配。它必须是 {{jsxref("RegExp")}} 类型所用的有效 JavaScript 正则表达式，并已在我们的[正则表达式指南](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)中说明；编译该正则表达式时会指定 `'u'` 标志，因此模式被视为 Unicode 代码点序列，而不是 {{Glossary("ASCII")}}。模式文本周围无需指定正斜杠。

如果未指定模式或模式无效，则不应用任何正则表达式，并完全忽略此属性。

> [!NOTE]
> 使用 [`title`](/zh-CN/docs/Web/HTML/Reference/Elements/input#title) 属性指定大多数浏览器将显示为工具提示的文本，以说明匹配该模式的要求。你还应该在附近添加其他说明性文字。

参见[模式验证](#模式验证)章节以获取细节和示例。

### placeholder

`placeholder` 属性是一个字符串，可向用户提供有关该字段中需要什么样的信息的简短提示。它应该是一个单词或短语来说明预期的数据类型，而不是说明性消息。文本中*不得*包含回车符或换行符。

如果控件的内容具有一种方向性（{{Glossary("LTR")}} 或 {{Glossary("RTL")}}），但需要以相反方向显示占位符，则可以使用 Unicode 双向算法格式化字符来覆盖占位符内的方向；请参见[如何针对双向文本使用 Unicode 控制符](https://www.w3.org/International/questions/qa-bidi-unicode-controls)获取更多信息。

> [!NOTE]
> 尽可能避免使用 `placeholder` 属性。它在语义上没有其他解释表单的方式有用，并且可能导致内容出现意外的问题。请参见 [`<input>` 标签](/zh-CN/docs/Web/HTML/Reference/Elements/input#标签)以获取更多信息。

### readonly

[`readonly`](/zh-CN/docs/Web/HTML/Reference/Attributes/readonly) 布尔属性如果存在，表示该字段不能由用户编辑。但是，仍可以通过 JavaScript 代码直接设置 {{domxref("HTMLInputElement")}} 的 `value` 属性来更改其 `value`。

> [!NOTE]
> 因为只读字段不能有值，所以 [`required`](/zh-CN/docs/Web/HTML/Reference/Attributes/required) 对同时指定了 `readonly` 属性的输入没有任何影响。

### size

`size` 属性是一个数字值，指示输入字段应有多少个字符宽。该值必须是一个大于零的数字，默认值是 20。由于字符宽度各不相同，这可能是也可能不是精确的，不应依赖于此；结果输入可能比指定的字符数更窄或更宽，这取决于字符和字体（{{cssxref("font")}} 使用中的设置）。

这并*不*限制用户可以在该字段中输入多少个字符，仅能大约指定一次可以看到多少个。要设置输入数据长度的上限，请使用 [`maxlength`](#maxlength) 属性。

### spellcheck

[`spellcheck`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/spellcheck) 是一个全局属性，用于指示是否启用元素的拼写检查。它可以用于任何可编辑的内容，但这里我们考虑在 {{HTMLElement("input")}} 元素上使用 `spellcheck` 的细节。`spellcheck` 的允许值为：

- `false`
  - ：禁用此元素的拼写检查。
- `true`
  - ：对此元素启用拼写检查。
- `""`（空字符串）或无值
  - ：遵循元素的默认行为进行拼写检查。这可能基于父元素的 `spellcheck` 设置或其他因素。

如果输入字段没有设置 [readonly](#readonly) 属性且未禁用，则可以启用拼写检查。

如果{{Glossary("user agent", "用户代理")}}的首选项覆盖了设置，则通过读取 `spellcheck` 返回的值可能无法反映控件中拼写检查的实际状态。

## 使用 URL 输入框

当你用适当的 `type` 值 `url` 创建一个 URL 输入时，所输入的文本会得到自动验证，它们至少可以形成一个合法的 URL。这有助于避免用户输错网站地址，或提供无效地址的情况。

然而，重要的是，这并不足以确保指定的文本是一个实际存在、与网站用户相对应，或以任何其他方式可接受的 URL。它只是确保该字段的值被正确格式化为一个 URL。

> [!NOTE]
> 用户可以在背后改动你的 HTML，所以你的站点*不能*将此验证用于任何安全目的。凡是所提供文本可能产生任何安全影响的事务，都*必须*在服务端验证该 URL。

### 简单的 URL 输入框

此元素实现为带有基本验证特性的标准文本输入框。在其最基本的形式中，URL 输入可以像这样实现：

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('简单的 URL 输入框', 600, 40) }}

请注意，当输入为空或输入一个有效格式的 URL 地址时，认为输入是有效的，但在其他情况下则不认为有效。通过添加 [`required`](/zh-CN/docs/Web/HTML/Reference/Elements/input#required) 属性，只允许正确格式的 URL；当输入为空时不再被视为有效。

这里没什么特别的。提交这个表单会将如下数据发送至服务器：`myURL=http%3A%2F%2Fwww.example.com`。注意其中的字符是如何进行必要的转义的。

### 占位符

有时，提供一个上下文提示，说明输入数据应该采取什么形式，是很有帮助的。如果页面设计没有为每个 {{HTMLElement("input")}} 提供描述性的标签，这一点就特别重要。这就是**占位符**的作用。占位符是一个值，它通过展示一个有效值的例子来说明 `value` 应该采取的形式，当元素的 `value` 为 `""` 时，它将显示在编辑框内。一旦向框中输入数据，占位符就会消失；如果框被清空，占位符会重新出现。

在这里，我们有一个具有 `http://www.example.com` 占位符的 `url` 输入框。注意在编辑输入框内容时，占位符如何出现和消失。

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('占位符', 600, 40) }}

### 控制输入框大小

你可以同时控制输入框的物理长度，以及允许输入文本的最小与最大长度。

#### 物理输入元素大小

输入框的物理尺寸可以用 [`size`](/zh-CN/docs/Web/HTML/Reference/Elements/input#size) 属性来控制。通过它，你可以指定输入框一次可以显示的字符数。例如，在这个例子中，`url` 编辑框的宽度为 30 个字符：

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('物理输入元素大小', 600, 40) }}

#### 元素值长度

输入框的 `size` 是与输入的 URL 本身的长度限制分开的。你可以使用 [`minlength`](/zh-CN/docs/Web/HTML/Reference/Elements/input#minlength) 属性为输入的 URL 指定一个以字符为单位的最小长度；同样，使用 [`maxlength`](/zh-CN/docs/Web/HTML/Reference/Elements/input#maxlength) 来设置输入 URL 的最大长度。如果 `maxLength` 超过 `size`，输入框的内容将根据需要滚动，以在操作内容时显示当前的选择或插入点。

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

> [!NOTE]
> 这些属性也会影响验证；短于或长于指定最小/最大长度的值会被判定为无效；此外，大多数浏览器也会拒绝让用户输入长于指定最大长度的值。

### 提供默认选项

#### 使用 value 属性提供单个默认值

与往常一样，你可以通过设置 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value) 属性来为 `url` 输入框提供一个默认值：

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("使用 value 属性提供单个默认值", 600, 40)}}

#### 提供建议值

更进一步，你可以通过指定 [`list`](/zh-CN/docs/Web/HTML/Reference/Elements/input#list) 属性，为用户提供一系列默认选项供其选择。这并不会将用户限制在这些选项中，但允许他们更快地选择常用的 URL。它也为 [`autocomplete`](/zh-CN/docs/Web/HTML/Reference/Elements/input#autocomplete) 提供提示。`list` 属性指定了 {{HTMLElement("datalist")}} 的 ID，其中每个建议值对应一个 {{HTMLElement("option")}} 元素；每个 `option` 的 `value` 是 URL 输入框的相应建议值。

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

{{EmbedLiveSample("提供建议值", 600, 40)}}

有了 {{HTMLElement("datalist")}} 元素及其 {{HTMLElement("option")}}，浏览器将提供指定的值作为 URL 的潜在值；这通常以弹出式或下拉式菜单的形式呈现，其中包含建议。虽然具体的用户体验可能因浏览器而异，但通常情况下，点击编辑框会出现一个下拉的建议 URL。然后，随着用户的输入，列表被调整为只显示匹配的值。每个键入的字符都会缩小列表的范围，直到用户做出选择或键入一个自定义值。

#### 为建议值使用标签

你可以选择在一个或所有的 `<option>` 元素上包含 [`label`](/zh-CN/docs/Web/HTML/Reference/Elements/option#label) 属性来提供文本标签。一些浏览器可能只显示标签，而其他浏览器可能同时显示标签和 URL。

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

{{EmbedLiveSample("为建议值使用标签", 600, 40)}}

## 验证

针对 `url` 输入，有两种等级的内容验证可用。首先，所有 {{HTMLElement("input")}} 都有标准级别的验证，它会自动确保内容满足成为合法 URL 的要求。但如果你有特殊需求，也可以添加额外过滤，以确保满足你自己的专门要求。

> [!WARNING]
> HTML 表单验证*不能*替代那些确保输入数据格式正确的脚本。对于某人来说，对 HTML 进行调整以绕过验证或完全删除验证太容易了。也有人可以完全绕开你的 HTML，并将数据直接提交到你的服务器。如果服务器端代码无法验证接收到的数据，则当格式不正确的数据（或太大、类型错误的数据等等）被写入数据库时，就可能发生灾难。

### 基本验证

支持 `url` 输入类型的浏览器会自动提供验证，以确保只有符合标准 URL 格式的文本被输入到输入框中。

URL 的语法相当复杂。它由 WHATWG 的 [URL 动态标准](https://url.spec.whatwg.org/)定义，并在我们的文章[什么是 URL？](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)中为初学者做了描述。

### 使 URL 必填

如前所述，要使一个 URL 在表单提交前成为必填项（不能让该字段空白），只需要在输入项上包含 [`required`](/zh-CN/docs/Web/HTML/Reference/Elements/input#required) 属性即可。

### 模式验证

如果你需要进一步限制输入的 URL，不仅仅需要“任何看起来像 URL 的字符串”，你可以使用 [`pattern`](/zh-CN/docs/Web/HTML/Reference/Elements/input#pattern) 属性来指定一个{{Glossary("regular expression", "正则表达式")}}，该值必须与之匹配才有效。

## 示例

### URL 验证

在此示例中，我们使用 [`required`](/zh-CN/docs/Web/HTML/Reference/Elements/input#required) 属性确保填写了 URL，并使用 [`pattern`](/zh-CN/docs/Web/HTML/Reference/Elements/input#pattern) 属性确保 URL 属于 `mozilla.org`（用于演示）。

#### HTML

在 `url` 输入中，我们将 `pattern` 设为 `".*\.mozilla\.org.*"`。该正则表达式验证的是：任意数量的字符，后跟 `.mozilla.org`，再后跟任意数量的字符。由于浏览器会对指定文本同时运行标准 URL 过滤器和我们的自定义模式，最终得到的验证效果是：“确保这是一个合法 URL，并且还包含 `.mozilla.org`。”

请注意，像 `https://developer\.mozilla\.org.*` 这样更严格的模式会更稳健，但在这种情况下会使 `type="url"` 属性显得多余。

[`title`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/title) 属性还为使用辅助技术的用户描述了该 `pattern`。

```html live-sample___url-validation
<form>
  <label for="myURL">
    输入本站的一个 URL：
    <input
      id="myURL"
      name="myURL"
      type="url"
      required
      pattern=".*\.mozilla\.org.*"
      title="URL 应包含 mozilla.org" />
    <span class="validity"></span>
  </label>
  <button>提交</button>
</form>
```

#### CSS

CSS 通过添加适当的 {{cssxref("content")}} 属性，为用户提供内容是 {{cssxref(":valid")}} 还是 {{cssxref(":invalid")}} 的视觉提示，并为使用辅助技术的用户包含[替代文本](/zh-CN/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter_attr)。

```css live-sample___url-validation
input:focus:invalid {
  outline: 2px solid red;
}

input:focus:valid {
  outline: 2px solid green;
}

input + span {
  padding: 0 0.3rem;
}

input:invalid + span::after {
  content: "✖" / "Content is not valid";
  color: red;
}

input:valid + span::after {
  content: "✓" / "Content is valid";
  color: green;
}
```

#### 结果

复制本页的 URL 并粘贴到输入字段中，你会看到绿色轮廓和绿色勾选。输入任何其他不包含 **mozilla.org** 的 URL，或无效 URL，则会看到红色轮廓和红色叉号。

{{EmbedLiveSample("url-validation", "40px", , , , , "allow-forms")}}

另请查看[模式验证](#模式验证)和[使用 URL 输入框](#使用_url_输入框)章节中的其他示例。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#值">值</a></strong></td>
      <td>代表 URL 的字符串，或为空</td>
    </tr>
    <tr>
      <td><strong>事件</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} 和
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>支持的通用属性</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a> 和
        <a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <code>list</code>、<code>value</code>、<code>selectionEnd</code>、<code>selectionDirection</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM 接口</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>隐式 ARIA 角色</strong></td>
      <td>
        无 <code>list</code> 属性时：
        <code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        有 <code>list</code> 属性时：
        <code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 表单指南](/zh-CN/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/tel)
- [`<input type="email">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/email)
