---
title: <input type="month">
slug: Web/HTML/Element/input/month
original_slug: Web/HTML/Element/Input/月份
---

{{HTMLRef}}

类型为 **`month`** 的 {{htmlelement("input")}} 可以让你容易地创建一个方便输入年份或月份的一个 {{htmlelement("input")}}。

{{EmbedInteractiveExample("pages/tabbed/input-month.html", "tabbed-shorter")}}

这个控件在各个浏览器支持都不同，目前是支持部分浏览器。在桌面上支持情况为 Chrome/Opera 和 Edge。在移动端支持大部分现代浏览器。在其他浏览器中，这个控件会被优雅的降级到[`<input type="text">`](/zh-CN/docs/Web/HTML/Element/input/text).

对于那些使用不支持的浏览器的用户，Chrome / Opera 月份控制如下图所示。单击右侧的向下箭头会显示日期选择器，以便您选择日期;你必须手动输入时间。

![](month-control-chrome.png)

Edge 的 `month` 看起来像这样的：

![](month-control-edge.png)

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#value">Value</a></strong></td>
   <td>一个 {{domxref("DOMString")}} 代表一个月，一年，或者是空。</td>
  </tr>
  <tr>
   <td><strong>Events</strong></td>
   <td>{{event("change")}} 和 {{event("input")}}.</td>
  </tr>
  <tr>
   <td><strong>Supported Common Attributes</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("readonly", "input")}}, 和 {{htmlattrxref("step", "input")}}.</td>
  </tr>
  <tr>
   <td><strong>IDL attributes</strong></td>
   <td><code>value</code>.</td>
  </tr>
  <tr>
   <td><strong>Methods</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.stepDown", "stepDown()")}}, {{domxref("HTMLInputElement.stepUp", "stepUp()")}}.</td>
  </tr>
 </tbody>
</table>

## Value

{{domxref("DOMString")}} 表示输入输入的月份和年份的值，in the form YYYY-MM (four or more digit year, then a hyphen ("`-`"), followed by the two-digit month). The format of the month string used by this input type is described in {{SectionOnPage("/en-US/docs/Web/HTML/Date_and_time_formats", "Format of a valid local month string")}}.

你可以设置一个默认的属性值插入到 {{htmlattrxref("value", "input")}} 里，像这样：

```html
<label for="bday-month">What month were you both in?</label>
<input id="bday-month" type="month" name="bday-month" value="2017-06">
```

{{EmbedLiveSample('value-example-1', 600, 60)}}

需要注意的是显示的如期格式不同于实际的`value` — 日期显示的格式将根据用户的操作系统的时区设置，而时间的格式通常会格式化为 `yyyy-MM`。

在向服务器提交上述值的时候他们看起来像这样：`bday-month=1978-06`.

你也可以使用 JavaScript 的 {{domxref("HTMLInputElement.value")}} 来设置日期的值。例如：

```js
var monthControl = document.querySelector('input[type="month"]');
monthControl.value = '1978-06';
```

{{EmbedLiveSample("value-example-2", 600, 60)}}

## Additional attributes

In addition to the attributes common to {{HTMLElement("input")}} elements, month inputs offer the following attributes:

| Attribute                    | Description                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| [`max`](#attr-max)           | The latest year and month to accept as a valid input                                       |
| [`min`](#attr-min)           | The earliest year and month to accept as a valid input                                     |
| [`readonly`](#attr-readonly) | A Boolean which, if present, indicates that the input's value can't be edited              |
| [`step`](#attr-step)         | A stepping interval to use when incrementing and decrementing the value of the input field |

### {{htmlattrdef("max")}}

The latest year and month, in the string format discussed in the [Value](#value) section above, to accept. If the {{htmlattrxref("value", "input")}} entered into the element exceeds this, the element fails [constraint validation](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation). If the value of the `max` attribute isn't a valid string in "`yyyy-MM`" format, then the element has no maximum value.

This value must specify a year-month pairing later than or equal to the one specified by the `min` attribute.

### {{htmlattrdef("min")}}

The latest year and month to accept, in the same "`yyyy-MM`" format described above. If the {{htmlattrxref("value", "input")}} of the element is less than this, the element fails [constraint validation](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation). If a value is specified for `min` that isn't a valid year and month string, the input has no minimum value.

This value must be a year-month pairing which is earlier than or equal to the one specified by the `max` attribute.

### {{htmlattrdef("readonly")}}

A Boolean attribute which, if present, means this field cannot be edited by the user. Its `value` can, however, still be changed from JavaScript code that directly sets the value of the {{domxref("HTMLInputElement.value")}} property.

> **备注：** Because a read-only field cannot have a value, `required` does not have any effect on inputs with the `readonly` attribute also specified.

### {{htmlattrdef("step")}}

{{page("/en-US/docs/Web/HTML/Element/input/number", "step-include")}}

For `month` inputs, the value of `step` is given in months, with a scaling factor of 1 (since the underlying numeric value is also in months). The default value of `step` is 1 month.

## Using month inputs

与日期相关的输入乍一看很方便，它们提供了一个简单的用户界面来选择日期，并且它们将发送到服务器的数据格式规范化，而不考虑用户的本地环境。但是，由于浏览器支持有限，所以这个 `<input type="month">`还是存在兼容性问题。

我们在往下看更多关于`<input type="month">`基础和更多的高级的用法

, 下面将讲有关缓解浏览器支持问题的建议 (请参阅[Handling browser support](#handling_browser_support)).

### Basic uses of month

最简单的`<input type="month">` 涉及到基础的 `<input>` 和 {{htmlelement("label")}} 的元素组合，像下面这样：

```html
<form>
  <label for="bday-month">What month were you both in?</label>
  <input id="bday-month" type="month" name="bday-month">
</form>
```

{{ EmbedLiveSample('Basic_uses_of_month', 600, 40) }}

### 设置最长和最短日期

你可以使用{{htmlattrxref("min", "input")}} 和 {{htmlattrxref("max", "input")}} 属性 来限制用户选择日期。在下列的例子中我们设置最小月份`1900-01` 最大月份到 `2017-08`:

```html
<form>
  <label for="bday-month">What month were you both in?</label>
  <input id="bday-month" type="month" name="bday-month"
         min="1900-01" max="2017-08">
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40) }}

结果是这样：

- 月份只有在 2017 年八月份到 1900 年一月可以选择 — 在这个控件里这个范围以外的月份不能滚动选择。
- Depending on what browser you are using, you might find that times outside the specified values might not be selectable in the time picker (e.g. Edge), or invalid (see [Validation](#validation)) but still available (e.g. Chrome).

> **备注：** You should be able to use the {{htmlattrxref("step", "input")}} attribute to vary the number of days jumped each time the date is incremented (e.g. maybe you only want to make Saturdays selectable). However, this does not seem to work effectively in any implementation at the time of writing.

### Controlling input size

`<input type="month">` doesn't support form sizing attributes such as {{htmlattrxref("size", "input")}}. You'll have to resort to [CSS](/zh-CN/docs/Web/CSS) for sizing needs.

## Validation

By default, `<input type="month">` does not apply any validation to entered values. The UI implementations generally don't let you enter anything that isn't a date — which is helpful — but you can still not fill in a date and submit, or enter an invalid date (e.g. the 32th of April).

You can use {{htmlattrxref("min", "input")}} and {{htmlattrxref("max", "input")}} to restrict the available dates (see [Setting maximum and minimum dates](#设置最长和最短日期), and in addition use the {{htmlattrxref("required", "input")}} attribute to make filling in the date mandatory. As a result, supporting browsers will display an error if you try to submit a date that is outside the set bounds, or an empty date field.

Let's look at an example — here we've set minimum and maximum dates, and also made the field required:

```html
<form>
  <div>
    <label for="month">What Month would you like to visit us? (Summer months only.)</label>
    <input id="month" type="month" name="month"
           min="2017-06" max="2017-09" required>
    <span class="validity"></span>
  </div>
  <div>
      <input type="submit" value="Submit form">
  </div>
</form>
```

If you try to submit the form with an incomplete date (or with a date outside the set bounds), the browser displays an error. Try playing with the example now:

{{ EmbedLiveSample('Validation', 600, 120) }}

Here's'a screenshot for those of you who aren't using a supporting browser:

![](month-required.png)

Here's the CSS used in the above example. Here we make use of the {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS properties to style the input based on whether or not the current value is valid. We had to put the icons on a {{htmlelement("span")}} next to the input, not on the input itself, because in Chrome the generated content is placed inside the form control, and can't be styled or shown effectively.

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

> **警告：** HTML form validation is _not_ a substitute for scripts that ensure that the entered data is in the proper format. It's far too easy for someone to make adjustments to the HTML that allow them to bypass the validation, or to remove it entirely. It's also possible for someone to simply bypass your HTML entirely and submit the data directly to your server. If your server-side code fails to validate the data it receives, disaster could strike when improperly-formatted data is submitted (or data which is too large, of the wrong type, and so forth).

## Handling browser support

As mentioned above, the major problem with using date inputs at the time of writing is browser support — only Chrome/Opera and Edge support it on desktop, and most modern browsers on mobile. As an example, the `month` picker on Chrome for Android looks like this:

![](month-android.png)

Non-supporting browsers gracefully degrade to a text input, but this creates problems both in terms of consistency of user interface (the presented control will be different), and data handling.

The second problem is the most serious — as we mentioned earlier, with a `month` input the actual value is always normalized to the format `yyyy-mm`. With a text input on the other hand, by default the browser has no recognition of what format the date should be in, and there multiple ways in which people write dates, for example:

- `mmyyyy`
- `mm/yyyy`
- `mm-yyyy`
- `yyyy-mm`
- etc.

One way around this is to put a {{htmlattrxref("pattern", "input")}} attribute on your `month` input. Even though the `month` input doesn't use it, the text input fallback will. For example, try viewing the following demo in a non-supporting browser:

```html
<form>
  <div>
    <label for="month">What Month would you like to visit us? (Summer months only, yyyy-mm)</label>
    <input id="month" type="month" name="month"
           min="2017-06" max="2017-09" required
           pattern="[0-9]{4}-[0-9]{2}">
    <span class="validity"></span>
  </div>
  <div>
      <input type="submit" value="Submit form">
  </div>
</form>
```

{{ EmbedLiveSample('Handling_browser_support', 600, 100) }}

If you try submitting it, you'll see that the browser now displays an error message (and highlights the input as invalid) if your entry doesn't match the pattern `nnnn-nn`, where `n` is a number from 0 to 9. Of course, this doesn't stop people from entering invalid dates, or incorrectly formatted dates that follow the pattern.

And what user is going to understand the pattern they need to enter the date in?

We still have a problem.

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

The best way to deal with dates in forms in a cross-browser way at the moment is to get the user to enter the month and year in separate controls ({{htmlelement("select")}} elements being popular — see below for an implementation), or use JavaScript libraries such as [jQuery date picker](https://jqueryui.com/datepicker/), and the [jQuery timepicker plugin](http://timepicker.co/).

## Examples

In this example we create two sets of UI elements for choosing dates — a native picker created with `<input type="month">`, and a set of two {{htmlelement("select")}} elements for choosing months/years in older browsers that don't support the native input.

{{ EmbedLiveSample('Examples', 600, 140) }}

The HTML looks like so:

```html
<form>
  <div class="nativeDatePicker">
    <label for="month-visit">What Month would you like to visit us?</label>
    <input type="month" id="month-visit" name="month-visit">
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">What Month would you like to visit us?</p>
  <div class="fallbackDatePicker">
    <div>
      <span>
        <label for="month">Month:</label>
        <select id="month" name="month">
          <option selected>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </span>
      <span>
        <label for="year">Year:</label>
        <select id="year" name="year">
        </select>
      </span>
    </div>
  </div>
</form>
```

The months are hardcoded (as they are always the same), while the year values are dynamically generated depending on the current year (see the code comments below for detailed explanations of how these functions work.)

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

The other part of the code that may be of interest is the feature detection code — to detect whether the browser supports `<input type="month">`, we create a new {{htmlelement("input")}} element, set its `type` to `month`, then immediately check what its type is set to — non-supporting browsers will return `text`, because the `date` type falls back to type `text`. If `<input type="month">` is not supported, we hide the native picker and show the fallback picker UI ({{htmlelement("select")}}) instead.

```js
// define variables
var nativePicker = document.querySelector('.nativeDatePicker');
var fallbackPicker = document.querySelector('.fallbackDatePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');

// hide fallback initially
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// test whether a new date input falls back to a text input or not
var test = document.createElement('input');
test.type = 'month';
// if it does, run the code inside the if() {} block
if(test.type === 'text') {
  // hide the native picker and show the fallback
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // populate the years dynamically
  // (the months are always the same, therefore hardcoded)
  populateYears();
}

function populateYears() {
  // get the current year as a number
  var date = new Date();
  var year = date.getFullYear();

  // Make this year, and the 100 years before it available in the year <select>
  for(var i = 0; i <= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The generic {{HTMLElement("input")}} element and the interface used to manipulate it, {{domxref("HTMLInputElement")}}
- [Date and time formats used in HTML](/zh-CN/docs/Web/HTML/Date_and_time_formats)
- [Date and Time picker tutorial](/zh-CN/docs/Web/Guide/HTML/Forms/The_native_form_widgets#Date_and_time_picker)
- [`<input type="datetime-local">`](/zh-CN/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/zh-CN/docs/Web/HTML/Element/input/date), [`<input type="time">`](/zh-CN/docs/Web/HTML/Element/input/time), and [`<input type="week">`](/zh-CN/docs/Web/HTML/Element/input/week)
