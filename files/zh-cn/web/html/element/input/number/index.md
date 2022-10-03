---
title: <input type="number">
slug: Web/HTML/Element/Input/number
---

{{HTMLRef}}

**`"number"`**类型的 {{HTMLElement("input")}} 元素用于让用户输入一个数字。其包括内置验证以拒绝非数字输入。浏览器可能会选择提供步进箭头，让用户可以使用鼠标增加和减少输入的值，或者只需用指尖敲击即可。

> **备注：** 不支持 `"number"` 类型的浏览器会改用标准的 [`"text"`](/zh-CN/docs/Web/HTML/Element/input/text) 输入框。

```html
<input id="number" type="number">
```

{{ EmbedLiveSample('Basic_example', 600, 40) }}

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>表示一个数字的 {{jsxref("Number")}} ，或 空</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{event("change")}} 和 {{event("input")}}</td>
  </tr>
  <tr>
   <td><strong>支持的公共属性</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("readonly", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>list</code>, <code>value</code>, <code>valueAsNumber</code></td>
  </tr>
  <tr>
   <td><strong>方法</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.stepUp", "stepUp()")}}, {{domxref("HTMLInputElement.stepDown", "stepDown()")}}</td>
  </tr>
 </tbody>
</table>

## 值

填写到输入框中的数值文字的{{jsxref("Number")}}表示。你可以通过把一个数字放在{{htmlattrxref("value", "input")}} 属性中来设置输入框的默认值，如下：

```html
<input id="number" type="number" value="42">
```

{{ EmbedLiveSample('值', 600, 40) }}

## 使用 number 输入框

`<input type ="number">`元素可以帮助您在构建用户界面和将数字输入到表单中的逻辑时简化你的工作。当你使用正确的 type 值 `"number"` 创建数字输入时，会自动验证你输入的文本是否为数字，通常是一组向上和向下按钮。

> **备注：** 记住用户可以在幕后修改 HTML 是至关重要的，因此您的网站不得使用简单的客户端验证来实现任何安全目的。您必须在服务器端验证所提供的值可能具有任何安全含义的任何事务。

此外，移动浏览器通过在用户尝试输入值时显示更适合输入数字的特殊键盘，进一步帮助用户体验。以下屏幕截图来自 Firefox for Android：

![](https://mdn.mozillademos.org/files/14963/number-keyboard-fxa.png)

### 一个简单的 number 输入框

在最基本的形式中，数字输入可以像这样实现：

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0">
```

{{ EmbedLiveSample('一个简单的_number_输入框', 600, 40) }}

数字输入在为空的时候以及输入单个数字时被认为是有效的，但是否则是无效的。如果使用{{htmlattrxref("required","input")}}属性，则输入在空时不再被视为有效。

> **备注：** 任何数字都是可接受的值，只要它是[有效的浮点数](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number)（即不是 [NaN](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 或 [Infinity](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity)）。

### 占位符

有时，提供一个如何输入表单数据的上下文提示是非常友好的。尤其当页面所有{{HTMLElement("input")}} 元素都没有说明标签时，会非常重要。这就是使用**占位符**的原因。占位符是一个通常用于说明一个输入框的 `value` 应该如何输入的提示值，当元素的 `value` 为 `""` 时，该提示将出现在编辑框里面。一旦有数据输入到编辑框中，占位符就会消失；如果该框被清空，占位符将重新出现。

这里，我们有一个占位符为"Multiple of 10"的`"number"` 输入框。请注意当你在编辑字段内容时占位符是如何消失的又是如何重现的。

```html
<input type="number" placeholder="Multiple of 10">
```

{{ EmbedLiveSample('占位符', 600, 40) }}

### 控制步进大小

默认情况下，向上和向下按钮可以将值增加或减小 1。您可以通过使用{{htmlattrxref("step","input")}} 属性来更改此步长值。我们上面的例子中的占位符提示我们其值是 10 的倍数，所以设置 `step` 的值为 10 是合理的：

```html
<input type="number" placeholder="multiple of 10" step="10">
```

{{ EmbedLiveSample('控制步进大小', 600, 40) }}

在这个例子中，你会发现上下箭头每次会将其值增加和减少 10，而不是 1。你仍然可以手动输入一个不是 10 的倍数的数字，但它会被认为是无效的。

### 指定最小和最大值

可以使用{{htmlattrxref("min","input")}} 和{{htmlattrxref("max","input")}} 属性指定该字段可以具有的最小值和最大值。例如，给例子指定最小值为 0，最大值为 100：

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100">
```

{{ EmbedLiveSample('指定最小和最大值', 600, 40) }}

修改过后，你会发现点击上下按钮不会让你低于 0 或高于 100 . 可以在这些界限之外手动输入数字，但它将被视为无效。

### 允许小数值

数字输入的一个问题是，步长默认为 1——如果你尝试输入带小数的数字，例如"1.0"，则它将被视为无效。如果要输入一个需要小数的值，则需要修改 `step` 值（例如，`step="0.01"` 以允许 2 位小数）。这里有一个简单的例子：

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10">
```

{{EmbedLiveSample("允许小数值", 600, 40)}}

你可以看到这个例子允许 0.0 到 10.0 之间的任何值，小数点为 2 位。本例中，"9.52" 是有效的，但" 9.521" 无效。

### 控制输入框大小

类型为`"number"` 的 {{HTMLElement("input")}} 元素不支持像 {{htmlattrxref("size", "input")}} 之类的调整大小属性。你必须通过借助 [CSS](/zh-CN/docs/Web/CSS) 来改变它们的尺寸大小。

例如，要调整输入框的宽度为仅可输入 3 位数字的宽度，我们可以在 HTML 中添加 一个 ID 并缩短很长的占位符文本，如下：

```html
<input type="number" placeholder="x10" step="10" min="0" max="100" id="number">
```

然后我们添加一些 CSS 来缩小 id 为 `"number"` 的元素的宽度：

```css
#number {
  width: 3em;
}
```

效果如下：

{{ EmbedLiveSample('控制输入框大小', 600, 40) }}

### 提供建议值

You can provide a list of default options from which the user can select by specifying the {{htmlattrxref("list", "input")}} attribute, which contains as its value the ID of a {{HTMLElement("datalist")}}, which in turn contains one {{HTMLElement("option")}} element per suggested value; each `option`'s `value` is the corresponding suggested value for the number entry box.

```html
<input id="ticketNum" type="number" name="ticketNum" list="defaultNumbers">
<span class="validity"></span>

<datalist id="defaultNumbers">
  <option value="10045678">
  <option value="103421">
  <option value="11111111">
  <option value="12345678">
  <option value="12999922">
</datalist>
```

{{EmbedLiveSample("提供建议值", 600, 40)}}

> **备注：** 并非所有浏览器都支持`"number"` 输入框的 {{htmlattrxref("list", "input")}} 属性。它在 Chrome 和 Opera 中有效，但在 Firefox 中无效。

## 验证

We have alread mentioned a number of validation features of number inputs, but let's review them now:

- `<input type="number">` elements automatically invalidate any entry that isn't a number (or empty, unless `required` is specified).
- You can use the {{htmlattrxref("required", "input")}} attribute to make an empty entry invalid, i.e. the input has to be filled in.
- You can use the {{htmlattrxref("step", "input")}} attribute to constrain valid values to a certain set of steps (e.g. multiples of 10).
- You can use the {{htmlattrxref("min", "input")}} and {{htmlattrxref("max", "input")}} attributes to constrain valid values to lower and upper bounds.

The following example exhibits all of the above features, as well as using some CSS to display valid and invalid icons when the input value is valid/invalid:

```html
<form>
  <div>
    <label for="balloons">Number of balloons to order (multiples of 10):</label>
    <input id="balloons" type="number" name="balloons" step="10" min="0" max="100" required>
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit">
  </div>
</form>
```

{{EmbedLiveSample("验证", 600, 80)}}

Try submitting the form with different invalid values entered — e.g. no value, a value below 0 or above 100, a value that is not a multiple of 10, or a non-numerical value — and see how the error messages the browser gives you differ with different ones.

The CSS applied to this example is as follows:

```css
div {
  margin-bottom: 10px;
}

input:invalid+span:after {
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  content: '✓';
  padding-left: 5px;
}
```

Here we use the {{cssxref(":invalid")}} and {{cssxref(":valid")}} pseudo classes to display an appropriate invalid or valid icon as generated content on the adjacent {{htmlelement("span")}} element, indicating if the current value is valid. We put it on a separate `<span>` element for added flexibility; some browsers don't display generated content very effectively on some types of form inputs (read for example the section on [`<input type="date">` validation](/zh-CN/docs/Web/HTML/Element/input/date#Validation)).

> **警告：** HTML form validation is _not_ a substitute for server-side scripts that ensure that the entered data is in the proper format. It's far too easy for someone to make adjustments to the HTML that allow them to bypass the validation, or to remove it entirely. It's also possible for someone to bypass your HTML and submit the data directly to your server. If your server-side code fails to validate the data it receives, disaster could strike when improperly-formatted data is submitted (or data which is too large, is of the wrong type, and so forth).

### 验证模式

`<input type="number">` elements do not support use of the {{htmlattrxref("pattern", "input")}} attribute for making entered values conform to a specific regex pattern. The rationale for this is that number inputs can't contain anything except numbers, and you can constrain the minimum and maximum number of valid digits using the {{htmlattrxref("min", "input")}} and {{htmlattrxref("max", "input")}} attributes, as explained above.

## 示例

We've already covered the fact that by default, the increment is 1, and you can use the {{htmlattrxref("step", "input")}} attribute to allow decimal inputs. Let's take a closer look. In the following example we've set up a form for entering the user's height; it defaults to accepting a height in meters, but you can click the relevant button to change the form to accept feet and inches instead. The input for the height in meters accepts decimals to two places.

{{EmbedLiveSample("示例", 600, 100)}}

The HTML looks like this:

```html
<form>
    <div class="metersInputGroup">
        <label for="meters">Enter your height — meters:</label>
        <input id="meters" type="number" name="meters" step="0.01" min="0" placeholder="e.g. 1.78" required>
        <span class="validity"></span>
    </div>
        <span>Enter your height — </span>
        <label for="feet">feet:</label>
        <input id="feet" type="number" name="feet" min="0" step="1">
        <span class="validity"></span>
        <label for="inches">inches:</label>
        <input id="inches" type="number" name="inches" min="0" max="11" step="1">
        <span class="validity"></span>
    </div>
    <div>
      <input type="button" class="meters" value="Enter height in feet and inches">
    </div>
    <div>
        <input type="submit" value="Submit form">
    </div>
</form>
```

You'll see that we are using many of the attributes we've already looked at in the article earlier on. Since we want to accept a meter value in centimeters, we've set the `step` value to `0.01`, so that values like 1.78 are not seen as invalid. We've also provided a placeholder for that input.

We've hidden the feet and inches inputs initially using `class="hidden"` so that meters is the default entry type.

Now on to the CSS — this looks very similar to the validation styling we saw before; nothing remarkable here:

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

And finally, the JavaScript:

```js
var metersInputGroup = document.querySelector('.metersInputGroup');
var feetInputGroup = document.querySelector('.feetInputGroup');
var metersInput = document.querySelector('#meters');
var feetInput = document.querySelector('#feet');
var inchesInput = document.querySelector('#inches');
var switchBtn = document.querySelector('input[type="button"]');

switchBtn.addEventListener('click', function() {
  if(switchBtn.getAttribute('class') === 'meters') {
    switchBtn.setAttribute('class', 'feet');
    switchBtn.value = 'Enter height in meters';

    metersInputGroup.style.display = 'none';
    feetInputGroup.style.display = 'block';

    feetInput.setAttribute('required', '');
    inchesInput.setAttribute('required', '');
    metersInput.removeAttribute('required');

    metersInput.value = '';
  } else {
    switchBtn.setAttribute('class', 'meters');
    switchBtn.value = 'Enter height in feet and inches';

    metersInputGroup.style.display = 'block';
    feetInputGroup.style.display = 'none';

    feetInput.removeAttribute('required');
    inchesInput.removeAttribute('required');
    metersInput.setAttribute('required', '');

    feetInput.value = '';
    inchesInput.value = '';
  }
});
```

After declaring a few variables, we add an event listener to the button to control the switching mechanism. This is pretty simple, mostly involving changing over the button class and label, and updating the display values of the two sets of inputs when the button is pressed. Note that we're not converting back and forth between meters and feet/inches here, which a real-life web application would probably do.

> **备注：** Note that when the user clicks the button, we remove the `required` attribute(s) from the input(s) we are hiding, and empty the `value` attribute(s). This is so that we can submit the form if both input sets aren't filled in, and won't submit data that we didn't mean to submit. If we didn't do this, you'd have to fill in both feet/inches **and** meters to submit the form!

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [HTML forms guide](/zh-CN/docs/Learn/HTML/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/zh-CN/docs/Web/HTML/Element/input/tel)
