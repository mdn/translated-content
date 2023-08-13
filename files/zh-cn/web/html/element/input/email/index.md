---
title: <input type="email">
slug: Web/HTML/Element/input/email
---

{{HTMLSidebar}}

**`"email"`** 类型的 {{HTMLElement("input")}} 元素能够让用户输入或编辑一个电子邮箱地址，如果指定了 [`multiple`](/zh-CN/docs/Web/HTML/Attributes/multiple) 属性，则可以输入多个电子邮箱地址。

{{EmbedInteractiveExample("pages/tabbed/input-email.html", "tabbed-shorter")}}

在表单提交前，输入框会自动验证输入值是否是一个或多个合法的电子邮箱地址（非空值且符合电子邮箱地址格式）。CSS 伪标签 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}} 能够在校验后自动应用，代表被校验的邮箱地址是否合法。

## 值

{{HTMLElement("input")}} 元素的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性包含会自动验证是否为正确邮件地址形式的字符串。具体来说，此处有三种格式可以通过验证：

1. 一个空字符串（“”），表示用户未输入值或该值已被删除。
2. 单个符合格式的电子邮件地址。并不代表该邮件地址存在，而是说它至少在格式上是正确的，简单地讲就是 `username@domain` 或者 `username@domain.tld`，当然并不局限于此，关于匹配电子邮件地址验证算法的{{Glossary("regular expression","正则表达式")}}，参见[验证](#验证)一节。
3. 当且仅当指定了 [`multiple`](/zh-CN/docs/Web/HTML/Element/input#multiple) 属性时，值可以是一个列表，该列表包含一串符合格式的电子邮件地址，且每个地址之间用逗号分隔。列表中，位于每个地址之前和之后的任何空白字符都会被移除。

关于如何验证电子邮件地址以保证其格式正确的细节，参见[验证](#验证)一节。

## 额外属性

除了所有 {{HTMLElement("input")}} 元素支持的属性以外，`email` 输入还支持以下属性：

### list

list 属性指定了一个 {{HTMLElement("datalist")}} 元素的 {{domxref("Element.id", "id")}}，用来提供输入建议。{{HTMLElement("datalist")}} 提供了一个预定义的值列表，向用户建议这个输入。列表中任何与 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 不兼容的值都不包括在建议选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

### maxlength

用户可以输入到 `email` 输入框中的最大字符数（以 UTF-16 代码单元为单位）。必须为大于等于 0 的整数。如果未指定 `maxlength` 或指定了无效的值，则 `email` 输入框将没有最大长度。这个值也必须大于等于 `minlength` 的值。

如果文本框中的字符数大于 `maxlength` UTF-16 编码单元长度，则输入将无法通过[约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)。约束验证仅作用于用户修改输入值的时候。

### minlength

用户可以输入到 `email` 输入框中的最小字符数（以 UTF-16 代码单元为单位）。该值必须是小于等于 `maxlength` 指定的值的非负整数值。如果未指定 `minlength` 或指定了无效的值，则 `email` 输入将没有最小长度。

如果输入到字段中的文本的长度小于 `minlength` UTF-16 代码单元的长度，则输入将无法通过[约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)。约束验证仅作用于用户修改输入值的时候。

### multiple

一个布尔属性，如果存在，代表用户可以输入多个由逗号和可选空白字符分开的电子邮件地址。参见示例[允许多个邮件地址](#允许多个邮件地址)，或 [HTML 属性：multiple](/zh-CN/docs/Web/HTML/Attributes/multiple) 一文以获取更多信息。

> **备注：** 一般地，如果你指定了 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性，那么用户将必须输入一个合法的邮件地址。然而，如果你添加了 `multiple` 属性，一系列零地址（一个空字符串，或完全为空白字符的字符串）也是合法的。也就是说，当指定了 `multiple` 时，用户甚至不需要输入一个邮件地址，无论是否指定了 `required`。

### pattern

如果指定了 `pattern` 属性，为了使 `value` 通过[约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)，必须满足该属性给定的正则表达式。它必须是 {{jsxref("RegExp")}} 类型的有效 JavaScript 正则表达式，并且已在我们的[正则表达式指南](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)中进行了说明；在编译正则表达式时指定了 `'u'` 标志，因此该模式被视为 Unicode 代码点的序列，而不是 ASCII。模式文本周围无需指定正斜杠。

如果没有指定模式，或指定了无效的模式，则不会应用任何正则表达式，且该属性将被完全忽略。

> **备注：** 使用 [`title`](/zh-CN/docs/Web/HTML/Element/input#title) 属性来指定大多数浏览器将作为工具提示的文本，以解释匹配该模式的要求是什么。还应该在附近包括其他解释性的文本。

参阅[模式验证](#模式验证)一节以获取详细说明和示例。

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

## 使用 email 输入

电子邮件地址是网络上最经常输入的文本数据形式之一；它们被用于登录网站、请求信息、允许订单确认、网络邮件等等。因此，`email` 输入类型可以使你作为一个网络开发者的工作变得更加容易，因为它可以帮助你在建立用户界面和电子邮件地址的逻辑时简化工作。当你用适当的 `type` 值创建一个电子邮件输入时，你会得到自动验证，即输入的文本至少是正确的形式，可能是一个合法的电子邮件地址。这可以帮助避免用户错误输入他们的地址，或提供一个无效的地址。

然而，重要的是要注意，这不足以确保指定的文本是实际存在的电子邮件地址，对应于站点的用户，或者以任何其他方式可接受。它只是确保将字段的值正确格式化为电子邮件地址。

> **备注：** 记住用户可以在幕后修改 HTML 也很重要，因此你的站点*不得*出于任何安全目的使用此验证。在任何事务中，如果所提供的文本可能有任何形式的安全影响，你必须在服务器端验证该电子邮件地址。

### 一个简单的 email 输入

目前，所有实现此元素的浏览器都将其实现为具有基本验证功能的标准文本输入字段。但是，该规范允许浏览器有一定的自由度。例如，该元素可以与用户设备的内置地址簿集成，以允许从该列表中挑选电子邮件地址。在最基本的形式中，电子邮件输入可以像这样实现：

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('一个简单的 email 输入', 600, 40) }}

请注意，在空的时候和输入一个有效格式的电子邮件地址的时候，它被认为是有效的，但在其他情况下，则不被认为是有效的。通过添加 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性，只允许输入有效格式的电子邮件地址；当输入为空时不再被视为有效。

### 允许多个邮件地址

通过添加 [`multiple`](/zh-CN/docs/Web/HTML/Element/input#multiple) 布尔属性，输入框可以接受多个邮件地址。

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('允许多个邮件地址', 600, 40) }}

现在，当输入一个电子邮件地址时，或当任何数量的电子邮件地址由逗号分隔，并可选地含有空白字符时，输入被认为是有效的。

> **备注：** 当使用了 `multiple` 属性时，值*允许*为空。

当指定了 `multiple` 属性时，一些有效字符串示例如下：

- `""`
- `"me@example"`
- `"me@example.org"`
- `"me@example.org,you@example.org"`
- `"me@example.org, you@example.org"`
- `"me@example.org,you@example.org, us@example.org"`

一些无效字符串示例如下：

- `","`
- `"me"`
- `"me@example.org you@example.org"`

### 占位符

有时，提供一个上下文提示，说明输入数据应该采取什么形式，是很有帮助的。如果页面设计没有为每个 {{HTMLElement("input")}} 提供描述性的标签，这一点就特别重要。这就是**占位符**的作用。占位符是一个值，它通过展示一个有效值的例子来证明 `value` 应该采取的形式，当元素的 `value` 为 "" 时，它将显示在编辑框内。一旦数据被输入框中，占位符就会消失；如果框被清空，占位符会重新出现。

这里，我们有一个含有占位符 `sophie@example.com` 的 `email` 输入框。请注意在改变编辑框的内容时占位符如何消失和重新出现。

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('占位符', 600, 40) }}

### 控制输入框大小

不仅可以控制输入框的物理长度，还可以控制输入文本本身允许的最小和最大长度。

#### 输入框物理大小

输入框的物理尺寸可以用 [`size`](/zh-CN/docs/Web/HTML/Element/input#size) 属性来控制。通过它，你可以指定输入框一次可以显示的字符数。在这个例子中，`email` 编辑框有 15 个字符宽：

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('输入框物理大小', 600, 40) }}

#### 元素值的长度

`size` 与输入的电子邮件地址本身的长度限制是分开的，所以你可以让字段在一个小空间里适应，同时仍然允许输入更长的电子邮件地址字符串。你可以使用 [`minlength`](/zh-CN/docs/Web/HTML/Element/input#minlength) 属性为输入的电子邮件地址指定一个最小长度，以字符为单位；同样，使用 [`maxlength`](/zh-CN/docs/Web/HTML/Element/input#maxlength) 来设置输入电子邮件地址的最大长度。

下面的例子创建了一个 32 个字符宽的电子邮件地址输入框，要求内容不能短于 3 个字符，不能长于 64 个字符。

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("元素值的长度", 600, 40) }}

### 提供默认选项

#### 使用 value 属性提供单个默认值

像往常一样，你可以通过设置 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性，为 `email` 输入框提供一个默认值：

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("使用 value 属性提供单个默认值", 600, 40)}}

#### 提供推荐值列表

再进一步，你可以提供一个默认选项的列表，用户可以通过指定 [`list`](/zh-CN/docs/Web/HTML/Element/input#list) 属性从中选择。这并不限制用户使用这些选项，但可以让他们更快地选择常用的电子邮件地址。这也为 [`autocomplete`](/zh-CN/docs/Web/HTML/Element/input#autocomplete) 提供提示。`list` 属性指定了 {{HTMLElement("datalist")}} 的 ID，它又包含了每个建议值的一个 {{HTMLElement("option")}} 元素；每个 `option` 的 `value` 是电子邮件输入框的对应建议值。

```html
<input type="email" size="40" list="defaultEmails" />

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk"></option>
  <option value="jbourne@unknown.net"></option>
  <option value="nfury@shield.org"></option>
  <option value="tony@starkindustries.com"></option>
  <option value="hulk@grrrrrrrr.arg"></option>
</datalist>
```

{{EmbedLiveSample("提供推荐值列表", 600, 40)}}

有了 {{HTMLElement("datalist")}} 元素及其 {{HTMLElement("option")}}，浏览器将提供指定的值作为电子邮件地址的潜在值；这通常以弹出式或下拉式菜单的形式呈现，其中包含建议。虽然具体的用户体验可能因浏览器而异，但通常情况下，点击编辑框就会出现建议的电子邮件地址的下拉菜单。然后，当用户输入时，该列表被过滤，只显示匹配的值。每个键入的字符都会缩小列表的范围，直到用户做出选择或键入一个自定义值。

## 验证

`email` 输入有两个级别的内容验证。首先，所有 {{HTMLElement("input")}} 都有标准的验证级别，它自动确保内容符合有效电子邮件地址的要求。但也可以选择添加额外的过滤功能，以确保满足你自己的特殊需求。

> **警告：** HTML 表单验证*不能*替代确保输入的数据格式正确的脚本。对于某些人来说，调整 HTML 非常容易，因为它允许他们绕过验证，或者完全删除它。某人也可以完全绕过 HTML 并将数据直接提交给您的服务器。如果服务器端代码无法验证它收到的数据，则当数据格式不正确（或数据太大，类型错误等等）输入数据库时，灾难可能会发生。

### 基本验证

浏览器自动提供验证，以确保只有符合互联网电子邮件地址标准格式的文本被输入到输入框。浏览器使用一种相当于以下正则表达式的算法：

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

要了解更多关于表单验证的工作原理，以及如何利用 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}} 这两个 CSS 属性，根据当前值是否有效来设计输入的样式，请参阅[表单数据验证](/zh-CN/docs/Learn/HTML/Forms/Form_validation)一文。

> **备注：** 有一些已知的规范问题与国际域名和 HTML 中电子邮件地址的验证有关。参阅 [W3C bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) 以了解详细内容。

### 模式验证

如果你需要进一步限制输入的邮件地址，不仅仅需要“任何看起来像邮件地址的字符串”，你可以使用 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性来指定一个{{Glossary("regular expression","正则表达式")}}，该值必须与之匹配才有效。如果指定了 [`multiple`](/zh-CN/docs/Web/HTML/Element/input#multiple) 属性，每个由逗号分开的值必须满足该{{Glossary("regular expression","正则表达式")}}。

例如，假设你正在为 Best Startup Ever, Inc. 公司的员工建立一个支持页面，如果他们的某个页面出现问题，他们可以联系 IT 部门寻求帮助。在我们的简化表单中，用户需要输入出现他们的邮箱地址，以及描述遇到的问题。为了安全起见，我们希望用户不仅提供了有效的邮箱地址，而且还是一个内部邮件地址。

由于 `email` 类型的输入会对标准邮箱地址*和*自定义 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 同时进行校验，你可以很方便地实现这些。我们来看看如何这样做：

```html
<form>
  <div class="emailBox">
    <label for="emailAddress">你的邮箱地址</label><br />
    <input
      id="emailAddress"
      type="email"
      size="64"
      maxlength="64"
      required
      placeholder="username@beststartupever.com"
      pattern=".+@beststartupever\.com"
      title="请仅提供 Best Startup Ever 公司邮件地址" />
  </div>

  <div class="messageBox">
    <label for="message">请求</label><br />
    <textarea
      id="message"
      cols="80"
      rows="8"
      required
      placeholder="我的鞋子太紧了，而且我忘记如何跳舞了。"></textarea>
  </div>
  <input type="submit" value="发送请求" />
</form>
```

{{EmbedLiveSample("模式验证", 700, 275)}}

我们的 {{HTMLElement("form")}} 表单包含一个 `email` 类型的 {{HTMLElement("input")}}，用于用户电子邮件地址，一个 {{HTMLElement("textarea")}}，用来输入他们的 IT 信息，以及一个 `<input>` 类型为 [`"submit"`](/zh-CN/docs/Web/HTML/Element/Input/submit) 的按钮，用来创建一个提交表单。每个文本输入框都有一个 {{HTMLElement("label")}} 与之相关，让用户知道对他们的期望。

让我们仔细看看电子邮件地址输入框。它的 [`size`](/zh-CN/docs/Web/HTML/Element/input#size) 和 [`maxlength`](/zh-CN/docs/Web/HTML/Element/input#maxlength) 属性都被设置为 64，以便为 64 个字符的电子邮件地址提供空间，并将实际输入的字符数限制在最大 64 个。这里还指定了 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性，使得用户必须提供一个有效的电子邮件地址。

表单中提供了一个适当的 [`placeholder`](/zh-CN/docs/Web/HTML/Element/input#placeholder)——`username@beststartupever.com`，以证明什么是有效的条目。这个字符串表明，应该输入一个电子邮件地址，并建议它应该是一个企业的 beststartupever.com 账户。此外，使用 `email` 类型将验证文本以确保它的格式像一个电子邮件地址。如果输入框中的文本不是电子邮件地址，你会得到一个错误信息，看起来像这样：

![Invalid email address in error state with a popout from the input reading 'please enter an email address'.](enter-valid-email-address.png)

如果我们让事情停留在这个阶段，我们至少会在合法的电子邮件地址上进行验证。但我们想走得更远：我们想确保电子邮件地址实际上是“_username_@beststartupever.com”的形式。这就是我们要使用 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 的地方。我们将 `pattern` 设置为 `.+@beststartupever.com`。这个简单的正则表达式要求一个至少由一个任何类型的字符组成的字符串，然后是“@”，后面是域名“beststartupever.com”。

请注意，这根本不是一个有效的电子邮件地址过滤器；它允许诸如“ @beststartupever.com”（注意前面的空格）或“@@beststartupever.com”这样的内容，它们都是无效的。然而，浏览器对指定的文本同时运行标准的电子邮件地址过滤器*和*我们的自定义模式。结果，我们的验证结果是：“确保这类似于一个有效的电子邮件地址，如果是的话，确保它也是一个 beststartupever.com 的地址。”

建议在使用 `pattern` 属性的同时使用 [`title`](/zh-CN/docs/Web/HTML/Global_attributes#title)。如果你这样做，`title` *必须*描述该模式。也就是说，它应该解释数据应该采取什么格式，而不是任何其他信息。这是因为 `title` 可以作为验证错误信息的一部分被显示或说出。例如，浏览器可能会显示“输入的文本不符合要求的模式。”，随后是你指定的 `title`。如果你的 `title` 是类似于“Email address”的字符串，结果将是“输入的文本不符合要求的模式。Email address”，这不太通顺。

这就是为什么我们指定字符串“请只提供 Best Startup Ever 公司的电子邮件地址”。通过这样做，所产生的完整错误信息可能是这样的：“输入的文本不符合要求的模式。请只提供 Best Startup Ever 公司的电子邮件地址”。

![A valid email address, but the input is in error state with a popout from the input reading 'The entered text doesn't match the required pattern. Please provide only a Best Startup Ever corporate email address.'](email-pattern-match-bad.png)

> **备注：** 如果你在编写验证正则表达式时遇到麻烦，它们不能正常工作，请检查你的浏览器控制台；那里可能有有用的错误信息来帮助你解决问题。

## 示例

这里我们有一个 ID 为 `emailAddress` 的电子邮件输入框，它最多可以有 256 个字符长。输入框本身的宽度为 64 个字符，并在字段为空时显示文本 `user@example.gov` 作为占位符。此外，通过使用[`multiple`](/zh-CN/docs/Web/HTML/Attributes/multiple)属性，该框被配置为允许用户输入零个或多个电子邮件地址，用逗号分隔，如[允许多个电子邮件地址](#允许多个电子邮件地址)中所述。最后，[`list`](/zh-CN/docs/Web/HTML/Attributes/list) 属性包含一个 {{HTMLElement("datalist")}} 的 ID，其 {{HTMLElement("option")}} 指定一组建议值，供用户选择。

作为补充，{{HTMLElement("label")}} 元素被用来为电子邮件输入框建立一个标签，其 [`for`](/zh-CN/docs/Web/HTML/Element/label#for) 属性引用了 {{HTMLElement("input")}} 元素的 `emailAddress` ID。通过这种方式将这两个元素联系起来，点击标签将聚焦输入元素。

```html
<label for="emailAddress">电子邮件</label><br />
<input
  id="emailAddress"
  type="email"
  placeholder="user@example.gov"
  list="defaultEmails"
  size="64"
  maxlength="256"
  multiple />

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk"></option>
  <option value="jbourne@unknown.net"></option>
  <option value="nfury@shield.org"></option>
  <option value="tony@starkindustries.com"></option>
  <option value="hulk@grrrrrrrr.arg"></option>
</datalist>
```

{{EmbedLiveSample('示例', 600, 50)}}

## 技术总结

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">值</a></strong></td>
      <td>
        代表电子邮件地址的字符串，或为空
      </td>
    </tr>
    <tr>
      <td><strong>事件</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} 和
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>支持的通用属性</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#list"><code>list</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#multiple"><code>multiple</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#name"><code>name</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#required"><code>required</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#size"><code>size</code></a> 和 <a href="/zh-CN/docs/Web/HTML/Element/input#type"><code>type</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>list</code> 和 <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM 接口</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>方法</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 表单指南](/zh-CN/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/zh-CN/docs/Web/HTML/Element/Input/tel)
- [`<input type="url">`](/zh-CN/docs/Web/HTML/Element/Input/url)
- 属性：

  - [`list`](/zh-CN/docs/Web/HTML/Attributes/list)
  - [`minlength`](/zh-CN/docs/Web/HTML/Attributes/minlength)
  - [`maxlength`](/zh-CN/docs/Web/HTML/Attributes/maxlength)
  - [`multiple`](/zh-CN/docs/Web/HTML/Attributes/multiple)
  - [`pattern`](/zh-CN/docs/Web/HTML/Attributes/pattern)
  - [`placeholder`](/zh-CN/docs/Web/HTML/Attributes/placeholder)
  - [`readonly`](/zh-CN/docs/Web/HTML/Attributes/readonly)
  - [`size`](/zh-CN/docs/Web/HTML/Attributes/size)

- [CSS 属性兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
