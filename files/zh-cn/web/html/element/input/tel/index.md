---
title: <input type="tel">
slug: Web/HTML/Element/Input/tel
---

{{HTMLRef}}

{{HTMLElement("input")}} **`"tel"`** 类型的元素用于让用户输入和编辑电话号码。不同于[`<input type="email">`](/zh-CN/docs/Web/HTML/Element/input/email) 和 [`<input type="url">`](/zh-CN/docs/Web/HTML/Element/input/url) , 在提交表格之前，输入值不会被自动验证为特定格式，因为世界各地的电话号码格式差别很大。

尽管 `tel` 类型的输入在功能上和 `text` 输入一致，但它们确实有用; 其中最明显的就是移动浏览器— 特别是在手机上 — 可能会选择提供为输入电话号码而优化的自定义键盘。使用电话号码的特定输入类型也使添加自定义验证和处理电话号码更方便。

> **备注：** 不支持 `"tel"` 类型的浏览器会默认使用 [`"text"`](/zh-CN/docs/Web/HTML/Element/input/text) 类型输入。

```html
<input id="telNo" type="tel">
```

{{ EmbedLiveSample('Basic_example', 600, 40) }}

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>A {{domxref("DOMString")}} representing a telephone number, or empty</td>
  </tr>
  <tr>
   <td><strong>Events</strong></td>
   <td>{{event("change")}} and {{event("input")}}</td>
  </tr>
  <tr>
   <td><strong>Supported Common Attributes</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("maxlength", "input")}}, {{htmlattrxref("minlength", "input")}}, {{htmlattrxref("pattern", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("readonly", "input")}}, and {{htmlattrxref("size", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL attributes</strong></td>
   <td><code>list</code>, <code>selectionStart</code>, <code>selectionEnd</code>, <code>selectionDirection</code>, and <code>value</code></td>
  </tr>
  <tr>
   <td><strong>Methods</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}, {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}</td>
  </tr>
 </tbody>
</table>

## 值

{{HTMLElement("input")}} 元素的 {{htmlattrxref("value", "input")}} 属性包含一个{{domxref("DOMString")}} 表示一个电话号码或者一个空字符串 (`""`).

## 使用 tel 输入

电话号码是网络上非常普遍收集的数据类型。例如，在创建任何类型的注册或电子商务网站时，无论出于商业目的还是出于紧急联系目的，您都可能需要向用户索要电话号码。鉴于通常输入的电话号码是多少，不幸的是，用于验证电话号码的“一刀切”解决方案是不实际的。

幸运的是，您可以考虑自己网站的要求，并自行实施适当的验证级别。有关详细信息，请参阅下面的 [验证](#验证)

### 自定义键盘

`<input type="tel">` 主要优势是它可以在移动浏览器显示一个特殊的电话号码输入键盘，For 例如，这是键盘在几种设备上的外观。

| Firefox for Android                                    | WebKit iOS (Safari/Chrome/Firefox)                           |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| ![Firefox for Android screen shot](fx-android-tel.png) | ![Firefox for iOS screenshot](iphone-tel-keyboard-50pct.png) |

### 一个简单的 tel 输入

在最基本的形式中，tel 输入可以这样实现：

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel">
```

{{ EmbedLiveSample('A_simple_tel_input', 600, 40) }}

这里没有什么神奇的事情发生。当提交给服务器时，上述输入的数据将被表示为 `"telNo=+12125553151"`.

### 占位字符

有时候提供关于输入数据应该采用什么形式的上下文提示是很有帮助的。如果页面设计没有为每个{{HTMLElement("input")}}页面提供描述性标签，这可能是特别重要的。所以需要占位符。一个占位符是一个值，它通过提供一个有效值的例子来演示值的形式，当元素的值是“”时，它显示在编辑框中。一旦数据输入框中，占位符消失;如果该框被清空，占位符重新出现。

在这里，我们有`"tel"` 输入的占位符`"123-4567-8901"`。请注意占位符如何消失并在编辑字段内容时重新出现。

```html
<input id="telNo" name="telNo" type="tel"
       placeholder="123-4567-8901">
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### 控制输入 ​​ 大小

您不仅可以控制输入框的物理长度，还可以控制输入文本自身允许的最小和最大长度。

#### 物理输入元素大小

可以使用 {{htmlattrxref("size", "input")}} 属性来控制输入框的物理大小，使用它，你可以指定输入框一次可显示的字符数，在下面的例子中 `tel` 编辑框是 20 个字符的宽度：

```html
<input id="telNo" name="telNo" type="tel"
       size="20">
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### 元素值的长度

`size` 和电话号码的长度限制是分开的，你可以使用 {{htmlattrxref("minlength", "input")}} 属性为输入电话的最小长度;同样使用 {{htmlattrxref("maxlength", "input")}} 设置输入电话号码的最大长度。

下面的示例创建了一个 20 个字符的电话号码输入框，要求内容不少于 9 个字符且不超过 14 个字符。

```html
<input id="telNo" name="telNo" type="tel"
       size="20" minlength="9" maxlength="14">
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

> **备注：** 上述属性确实会影响 [验证](#验证) — 如果值的长度小于 9 个字符，或者大于 14 个，上述示例的输入将被视为无效。甚至不会让你输入超过最大长度的值。

### 提供默认选项

与往常一样，你可以通过设置其 {{htmlattrxref("value", "input")}} 属性为`"tel"`输入框提供默认值：

```html
<input id="telNo" name="telNo" type="tel"
       value="333-4444-4444">
```

{{EmbedLiveSample("Default_value", 600, 40)}}

#### 提供建议值

Taking it a step farther, you can provide a list of default phone number values from which the user can select. To do this, use the {{htmlattrxref("list", "input")}} attribute. This doesn't limit the user to those options, but does allow them to select commonly-used telephone numbers more quickly. This also offers hints to {{htmlattrxref("autocomplete", "input")}}. The `list` attribute specifies the ID of a {{HTMLElement("datalist")}} element, which in turn contains one {{HTMLElement("option")}} element per suggested value; each `option`'s `value` is the corresponding suggested value for the telephone number entry box.

```html
<label for="telNo">Phone number: </label>
<input id="telNo" name="telNo" type="tel" list="defaultTels">

<datalist id="defaultTels">
  <option value="111-1111-1111">
  <option value="122-2222-2222">
  <option value="333-3333-3333">
  <option value="344-4444-4444">
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

With the {{HTMLElement("datalist")}} element and its {{HTMLElement("option")}}s in place, the browser will offer the specified values as potential values for the email address; this is typically presented as a popup or drop-down menu containing the suggestions. While the specific user experience may vary from one browser to another, typically clicking in the edit box presents a drop-down of the suggested email addresses. Then, as the user types, the list is adjusted to show only filtered matching values. Each typed character narrows down the list until the user makes a selection or types a custom value.

Here's a screenshot of what that might look like:

![](phone-number-with-options.png)

## 验证

正如我们之前谈到的那样，为电话号码提供一种通用的客户端验证解决方案是相当困难的。所以，我们能做些什么？让我们考虑一些选项。

> **警告：** HTML 表单验证不能替代服务器端脚本，以确保输入的数据在被允许进入数据库之前是正确的格式。对于有些人来说，调整 html 是非常容易的，这样他们就可以绕过验证，或者完全删除它。也有人可能完全绕过你的 html，直接提交数据到你的服务器。如果您的服务器端代码无法验证接收到的数据，那么当格式不正确的数据（或数据太大，类型错误等等）输入到数据库时，可能会导致灾难。

### 要求电话号码必填

You can make it so that an empty input is invalid and won't be submitted to the server using the {{htmlattrxref("required", "input")}} attribute. For example, let's use this HTML:

```html
<form>
  <div>
    <label for="telNo">Enter a telephone number (required): </label>
    <input id="telNo" name="telNo" type="tel" required>
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

And let's include the following CSS to highlight valid entries with a checkmark and invalid entries with a cross:

```css
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

input:invalid+span:after {
  position: absolute; content: '✖';
  padding-left: 5px;
  color: #8b0000;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
  color: #009000;
}
```

The output looks like this:

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### Pattern validation

If you want to further restrict entered numbers so they also have to conform to a specific pattern, you can use the {{htmlattrxref("pattern","input")}} attribute, which takes as its value a {{Glossary("regular expression")}} that entered values have to match.

In this example we'll use the same CSS as before, but our HTML is changed to look like this:

```html
<form>
  <div>
    <label for="telNo">Enter a telephone number (in the form xxx-xxx-xxxx): </label>
    <input id="telNo" name="telNo" type="tel" required
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
    <span class="validity"></span>
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

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute; content: '✖';
  padding-left: 5px;
  color: #8b0000;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
  color: #009000;
}
```

{{EmbedLiveSample("Pattern_validation", 700, 70)}}

Notice how the entered value is reported as invalid unless the pattern xxx-xxx-xxxx is matched; for instance, 41-323-421 won't be accepted. Neither will 800-MDN-ROCKS. However, 865-555-6502 will be accepted. This particular pattern is obviously only useful for certain locales — in a real application you'd probably have to vary the pattern used depending on the locale of the user.

## Examples

In this example, we present a simple interface with a {{htmlelement("select")}} element that lets the user choose which country they're in, and a set of `<input type="tel">` elements to let them enter each part of their phone number; there is no reason why you can't have multiple `tel` inputs.

Each input has a {{htmlattrxref("placeholder","input")}} attribute to show a hint to sighted users about what to enter into it, a {{htmlattrxref("pattern","input")}} to enforce a specific number of characters for the desired section, and an `aria-label` attribute to contain a hint to be read out to screenreader users about what to enter into it.

```html
<form>
  <div>
    <label for="country">Choose your country:</label>
    <select id="country" name="country">
      <option>UK</option>
      <option selected>US</option>
      <option>Germany</option>
    </select>
  </div>
  <div>
    <p>Enter your telephone number: </p>
    <span class="areaDiv">
      <input id="areaNo" name="areaNo" type="tel" required
             placeholder="Area code" pattern="[0-9]{3}"
             aria-label="Area code">
      <span class="validity"></span>
    </span>
    <span class="number1Div">
      <input id="number1" name="number1" type="tel" required
             placeholder="First part" pattern="[0-9]{3}"
             aria-label="First part of number">
      <span class="validity"></span>
    </span>
    <span class="number2Div">
      <input id="number2" name="number2" type="tel" required
             placeholder="Second part" pattern="[0-9]{4}"
             aria-label="Second part of number">
      <span class="validity"></span>
    </span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

The JavaScript is relatively simple — it contains an {{domxref("GlobalEventHandlers.onchange", "onchange")}} event handler that, when the `<select>` value is changed, updates the `<input>` element's `pattern`, `placeholder`, and `aria-label` to suit the format of telephone numbers in that country/territory.

```js
var selectElem = document.querySelector("select");
var inputElems = document.querySelectorAll("input");

selectElem.onchange = function() {
  for(var i = 0; i < inputElems.length; i++) {
    inputElems[i].value = "";
  }

  if(selectElem.value === "US") {
    inputElems[2].parentNode.style.display = "inline";

    inputElems[0].placeholder = "Area code";
    inputElems[0].pattern = "[0-9]{3}";

    inputElems[1].placeholder = "First part";
    inputElems[1].pattern = "[0-9]{3}";
    inputElems[1].setAttribute("aria-label","First part of number");

    inputElems[2].placeholder = "Second part";
    inputElems[2].pattern = "[0-9]{4}";
    inputElems[2].setAttribute("aria-label","Second part of number");
  } else if(selectElem.value === "UK") {
    inputElems[2].parentNode.style.display = "none";

    inputElems[0].placeholder = "Area code";
    inputElems[0].pattern = "[0-9]{3,6}";

    inputElems[1].placeholder = "Local number";
    inputElems[1].pattern = "[0-9]{4,8}";
    inputElems[1].setAttribute("aria-label","Local number");
  } else if(selectElem.value === "Germany") {
    inputElems[2].parentNode.style.display = "inline";

    inputElems[0].placeholder = "Area code";
    inputElems[0].pattern = "[0-9]{3,5}";

    inputElems[1].placeholder = "First part";
    inputElems[1].pattern = "[0-9]{2,4}";
    inputElems[1].setAttribute("aria-label","First part of number");

    inputElems[2].placeholder = "Second part";
    inputElems[2].pattern = "[0-9]{4}";
    inputElems[2].setAttribute("aria-label","Second part of number");
  }
}
```

The example looks like this:

{{EmbedLiveSample('Examples', 600, 140)}}

这是一个有趣的想法，它显示了处理国际电话号码问题的潜在解决方案。你将不得不扩大这个范例，为潜在的每个国家提供正确的模式，这将是很多工作，并且仍然没有万无一失的保证，用户将正确地输入他们的号码。

它让你想知道是否值得在客户端面对所有这些麻烦，当你可以让用户以他们想要的任何格式在客户端输入他们的号码，然后在服务器上验证和审查。但是这个选择是你的。

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

input:invalid+span:after {
  position: absolute; content: '✖';
  padding-left: 5px;
  color: #8b0000;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
  color: #009000;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML forms guide](/zh-CN/docs/Learn/HTML/Forms)
- [Forms and accessibility](/zh-CN/docs/Web/Accessibility/ARIA/forms)
- {{HTMLElement("input")}}

  - [`<input type="text">`](/zh-CN/docs/Web/HTML/Element/input/text)
  - [`<input type="email">`](/zh-CN/docs/Web/HTML/Element/input/email)
