---
title: <input type="search">
slug: Web/HTML/Element/Input/search
---

{{HTMLRef}}

`{{HTMLElement("input")}}` 元素的 **`search`** 类型是 专为用户输入搜索查询而设计的文本字段。功能上与 [`text`](/zh-CN/docs/Web/HTML/Element/input/text) 输入相同，但是可以通过 `{{Glossary("user agent")}}` 进行不同样式的设置。

{{EmbedInteractiveExample("pages/tabbed/input-search.html", "tabbed-standard")}}

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td><code>{{domxref("DOMString")}}</code> 代表搜索字段中包含的值。</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td><code>{{domxref("HTMLElement/change_event", "change")}}</code> 和 <code>{{domxref("HTMLElement/input_event", "input")}}</code></td>
  </tr>
  <tr>
   <td><strong>支持的通用属性</strong></td>
   <td><code>{{htmlattrxref("autocomplete", "input")}}</code>, <code>{{htmlattrxref("list", "input")}}</code>, <code>{{htmlattrxref("maxlength", "input")}}</code>, <code>{{htmlattrxref("minlength", "input")}}</code>, <code>{{htmlattrxref("pattern", "input")}}</code>, <code>{{htmlattrxref("placeholder", "input")}}</code>, <code>{{htmlattrxref("required", "input")}}</code>, <code>{{htmlattrxref("size", "input")}}</code>。</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>value</code></td>
  </tr>
  <tr>
   <td><strong>方法</strong></td>
   <td><code>{{domxref("HTMLInputElement.select", "select()")}}</code>, <code>{{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}</code>, <code>{{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}</code>。</td>
  </tr>
 </tbody>
</table>

## 值

`{{htmlattrxref("value", "input")}}` 属性包含 `{{domxref("DOMString")}}` 代表搜索字段中包含的值。您可以在 JavaScript 使用 `{{domxref("HTMLInputElement.value")}}` 属性。

```js
searchTerms = mySearch.value;
```

如果没有针对输入的验证约束 (请参见[验证方式](#验证方式))，该值可以是任何文本字符串或空字符串 (`""`)。

## 其他属性

除了可在所有 `{{HTMLElement("input")}}` 上的属性（无论其类型）之外，搜索字段输入还支持以下属性：

| 属性                          | 描述                                                             |
| ----------------------------- | ---------------------------------------------------------------- |
| [`list`](#list)               | `<datalist>` 元素的 ID，其中包含可选的预定义自动完成选项。       |
| [`maxlength`](#maxlength)     | 输入应接受的最大字符数。                                         |
| [`minlength`](#minlength)     | 输入可以且仍被认为有效的最小字符数。                             |
| [`pattern`](#pattern)         | 输入内容必须匹配的正则表达式才能有效。                           |
| [`placeholder`](#placeholder) | 空时在输入字段中显示的示例值。                                   |
| [`readonly`](#readonly)       | 一个布尔属性，指示输入的内容是否应为只读。                       |
| [`size`](#size)               | 一个数字，指示输入字段应宽多少个字符。                           |
| [`spellcheck`](#spellcheck)   | 控制是否对输入字段启用拼写检查，或者是否应使用默认拼写检查配置。 |

{{page("/zh-CN/docs/Web/HTML/Element/input/text", "list", 0, 1, 2)}}

### maxlength

用户可以在搜索字段中输入的最大字符数（以 UTF-16 代码为单位）。必须为 0 或更高的整数。如果未指定 `maxlength` 或指定了无效值，则搜索字段没有最大长度。此值还必须大于或等于 `minlength` 的值。

如果输入到字段中的文本的长度大于 `maxlength` UTF-16 代码单元的长度，则输入无法通过约束验证（[constraint validation](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation)）。

### minlength

用户可以在搜索字段中输入的最小字符数（以 UTF-16 代码为单位）。该值必须是小于或等于 `maxlength` 指定的值的非负整数值。如果未指定 `minlength` 或指定了无效值，则搜索输入没有最小长度。

如果在字段中输入的文本的长度小于 `minlength` UTF-16 代码单元的长度，则搜索字段将无法通过约束验证（[constraint validation](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation)）。

### pattern

{{page("/zh-CN/docs/Web/HTML/Element/input/text", "pattern-include")}}

有关详细信息和示例，请参见 [指定模式](#指定模式) 部分。

{{page("/zh-CN/docs/Web/HTML/Element/input/text", "placeholder", 0, 1, 2)}}

{{page("/zh-CN/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

{{page("/zh-CN/docs/Web/HTML/Element/input/text", "size", 0, 1, 2)}}

### spellcheck

{{page("/zh-CN/docs/Web/HTML/Element/input/text", "spellcheck-include")}}

## 非标准属性

以下非标准属性可用于搜索输入字段。通常，除非没有帮助，否则应避免使用它们。

| 属性                              | 描述                                                                                                                                                              |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`autocorrect`](#autocorrect)     | 编辑此输入字段时是否允许自动更正。**Safari only.**                                                                                                                |
| [`incremental`](#incremental)     | 是否发送重复的 {{event("search")}} 事件以允许在用户仍在编辑字段的值时更新实时搜索结果。**WebKit and Blink only (Safari, Chrome, Opera, etc.).**              |
| [`mozactionhint`](#mozactionhint) | 一个字符串，指示当用户在编辑字段时按 <kbd>Enter</kbd> 或 <kbd>Return</kbd> 键时将执行的操作类型；用于确定虚拟键盘上该键的适当标签。**Firefox for Android only.** |
| [`results`](#results)             | 先前搜索查询的下拉列表中应显示的最大项目数。**Safari only.**                                                                                                      |

### autocorrect

{{page("/zh-CN/docs/Web/HTML/Element/input/text", "autocorrect-include")}}

### incremental

布尔值 `incremental` 属性是 WebKit 和 Blink 扩展（因此被 Safari, Opera, Chrome 等支持）如果存在，它会告诉 {{Glossary("user agent")}} 将输入作为实时搜索进行处理。当用户编辑字段的值时，用户代理将 `{{event("search")}}` 事件发送到代表搜索框的 `{{domxref("HTMLInputElement")}}` 对象。这允许您的代码在用户编辑搜索时实时更新搜索结果。

如果 `incremental` 没有被指定，则仅当用户显式启动搜索时（例如，在编辑字段时按 <kbd>Enter</kbd> 或 <kbd>Return</kbd> ）才发送 `{{event("search")}}` 事件。

`search` 事件受速率限制，因此发送事件的频率不会超过实现定义的间隔。

### mozactionhint

{{page("/zh-CN/docs/Web/HTML/Element/input/text", "mozactionhint-include")}}

### results

`results` 属性是一个数字值（仅受 Safari 支持），可让您覆盖要在 `{{HTMLElement("input")}}` 元素的本机提供的先前搜索查询的下拉菜单中显示的最大条目数。

该值必须是非负十进制数字。如果未提供或给出了无效值，则使用浏览器的默认最大条目数。

## 使用搜索输入

`<input>` 元素 `search` 类型与 `text` 类型的元素非常相似，不同之处在于它们专门用于处理搜索项。它们的行为基本相同，但是用户代理可以默认选择不同的样式（当然，站点可以使用样式表向其应用自定义样式）。

### 基本例子

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q">
    <button>Search</button>
  </div>
</form>
```

如下：

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` 是搜索输入中最常用 `name` ，尽管不是强制性的。提交后，发送到服务器的键值对数据将为 `q=searchterm`。

> **备注：** 你一定要记住设置 `{{htmlattrxref("name", "input")}}` 输入，否则不会提交任何内容。

### 搜索类型和文本类型之间的差异

主要的基本区别在于浏览器处理它们的方式。首先要注意的是，某些浏览器显示一个十字图标，如果需要，可以单击该十字图标以立即删除搜索词。以下屏幕截图来自 Chrome：

![](chrome-cross-icon.png)

此外，现代浏览器还倾向于自动存储先前在各个域中输入的搜索词，然后在该域的搜索输入中执行后续搜索时，这些搜索词会作为自动完成选项出现。这有助于随着时间的流逝倾向于在相同或相似搜索查询上进行搜索的用户。此屏幕截图来自 Firefox：

![](firefox-auto-complete.png)现在，让我们看看可以应用于搜索表单的一些有用的技巧。

### 设置占位符

您可以在搜索输入中提供一个有用的占位符，使用`{{htmlattrxref("placeholder","input")}}` 属性来提示要做什么。看下面的例子：

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q"
     placeholder="Search the site...">
    <button>Search</button>
  </div>
</form>
```

您可以在下面看到占位符的呈现方式：

{{EmbedLiveSample("Setting_placeholders", 600, 40)}}

### 搜索表单标签和辅助功能

搜索表单的一个问题是它们的无障碍。常见的设计惯例是不为搜索字段提供标签（尽管可能会有放大镜图标或类似图标），因为由于放置位置的原因，搜索表单的目的通常对于视力正常的用户而言相当明显（[这个例子展示了一个典型的模式](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)）。

但是，这可能会使屏幕阅读器用户感到困惑，因为他们不会对搜索输入内容有任何口头指示。解决此问题而不会影响您的视觉设计的一种方法是使用 [WAI-ARIA](/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics) 功能：

- `<form>` 元素上， `search` 值的 `role` 属性 使屏幕阅读器用户声明该表单是搜索表单。
- 您还可以在 `{{HTMLElement("input")}}` 上使用 `aria-label` 属性。这应该是一个描述性的文本标签，屏幕阅读器会读出该标签；它用作 `<label>`的非可视等效项。

让我们看一个例子：

```html
<form role="search">
  <div>
    <input type="search" id="mySearch" name="q"
     placeholder="Search the site..."
     aria-label="Search through site content">
    <button>Search</button>
  </div>
</form>
```

您可以在下面看到它的呈现方式：

{{EmbedLiveSample("Search_form_labels_and_accessibility", 600, 40)}}

与上一个示例没有视觉上的区别，但是屏幕阅读器用户可以使用更多信息。

> **备注：** 有关此类辅助功能的更多信息，请参见 [Signposts/Landmarks](/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics#SignpostsLandmarks) 。

### 输入框元素大小

可以使用 `{{htmlattrxref("size", "input")}}` 属性来控制输入框的尺寸。使用它，您可以指定输入框一次可以显示的字符数。例如，在此示例中，搜索框为 30 个字符宽：

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q"
    placeholder="Search the site..." size="30">
    <button>Search</button>
  </div>
</form>
```

结果是这个更宽的输入框：

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

## 验证方式

`<input>` 元素的 `search` 类型具有与常规文本 `text` 输入相同的验证功能。通常，您不太可能希望对搜索框使用验证功能。在许多情况下，应该只允许用户搜索任何内容，但是有几种情况需要考虑，例如搜索已知格式的数据。

> **备注：** HTML 表单验证不能替代确保输入数据格式正确的脚本。对于某人来说，对 HTML 进行调整以使其绕过验证或完全删除验证太容易了。有人也可以完全绕开您的 HTML 并将数据直接提交到您的服务器。如果服务器端代码无法验证接收到的数据，则当将格式不正确的数据（或太大，类型错误的数据等等）输入数据库时，灾难可能会发生。

### 样式注意事项

有一些有用的伪类可用于设置有效/无效表单元素的样式： `{{cssxref(":valid")}}` 和 `{{cssxref(":invalid")}}`。在本节中，我们将使用以下 CSS，它将在包含有效值的输入旁边放置一个复选标记（勾号），并在包含无效值的输入旁边放置一个叉号。

```css
input:invalid ~ span:after {
    content: '✖';
    padding-left: 5px;
    position: absolute;
}

input:valid ~ span:after {
    content: '✓';
    padding-left: 5px;
    position: absolute;
}
```

该技巧还需要将 `{{htmlelement("span")}}` 元素放置在`form`元素之后，该`form`元素充当图标的持有者。这是必要的，因为某些浏览器上的某些输入类型不能很好地显示直接位于其后的图标。

### 输入要求

您可以使用 `{{htmlattrxref("required", "input")}}` 属性作为在允许提交表单之前输入所需值的简单方法：

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q"
    placeholder="Search the site..." required>
    <button>Search</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span:after {
    content: '✖';
    padding-left: 5px;
    position: absolute;
}

input:valid ~ span:after {
    content: '✓';
    padding-left: 5px;
    position: absolute;
}
```

如下所示：

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

另外，如果您尝试在未输入搜索词的情况下提交表单，浏览器将显示一条消息。以下示例来自 Firefox：

![form field with attached message that says Please fill out this field](firefox-required-message.png)

当您尝试使用输入中包含的不同类型的无效数据提交表单时，将显示不同的消息；请参阅以下示例。

### 输入值长度

您可以使用 `{{htmlattrxref("minlength", "input")}}` 属性为输入的值指定最小长度（以字符为单位）；同样，使用 `{{htmlattrxref("maxlength", "input")}}` 设置输入值的最大长度。

下面的示例要求输入的值的长度为 4–8 个字符。

```html
<form>
  <div>
    <label for="mySearch">Search for user</label>
    <input type="search" id="mySearch" name="q"
    placeholder="User IDs are 4–8 characters in length" required
    size="30" minlength="4" maxlength="8">
    <button>Search</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span:after {
    content: '✖';
    padding-left: 5px;
    position: absolute;
}

input:valid ~ span:after {
    content: '✓';
    padding-left: 5px;
    position: absolute;
}
```

如下所示：

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

如果您尝试提交少于 4 个字符的表单，则会收到相应的错误消息（不同的浏览器会有所不同）。如果尝试超过 8 个字符，浏览器将不允许您访问。

### 指定模式

您可以使用 `{{htmlattrxref("pattern", "input")}}` 属性指定一个正则表达式，输入值必须遵循该正则表达式才能被视为有效 (请参照 [Validating against a regular expression](/zh-CN/docs/Learn/HTML/Forms/Form_validation#Validating_against_a_regular_expression)).

让我们看一个例子。假设我们想提供一个产品 ID 搜索表格，这些 ID 都是由两个字母和四个数字组成的代码。以下示例对此进行了介绍：

```html
<form>
  <div>
    <label for="mySearch">Search for product by ID:</label>
    <input type="search" id="mySearch" name="q"
    placeholder="two letters followed by four numbers" required
    size="30" pattern="[A-z]{2}[0-9]{4}">
    <button>Search</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span:after {
    content: '✖';
    padding-left: 5px;
    position: absolute;
}

input:valid ~ span:after {
    content: '✓';
    padding-left: 5px;
    position: absolute;
}
```

如下所示：

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

## 例子

您可以在我们的网站 [website-aria-roles](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-aria-roles) 示例中看到一个在上下文中使用搜索表单的一个好例子 ([see it live](http://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 表单](/zh-CN/docs/Learn/HTML/Forms)
- {{HTMLElement("input")}} 及其所基于的接口 {{domxref("HTMLInputElement")}}
- [`<input type="text">`](/zh-CN/docs/Web/HTML/Element/input/text)
- [CSS 属性的兼容性](/zh-CN/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
