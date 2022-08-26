---
title: <input type="date">
slug: Web/HTML/Element/Input/date
---
{{HTMLRef}}

日期类{{htmlelement("input")}}元素会创建一个让用户输入一个日期的输入区域，可以使用自动验证内容的文本框，也可以使用特殊的日期选择器界面。结果值包括年份，月份和日期，但不包括时间。[time](/zh-CN/docs/Web/HTML/Element/input/time) 和 [datetime-local](/zh-CN/docs/Web/HTML/Element/input/datetime-local)输入类支持 time 和 date/time 输入。

通常来说控件的 UI 界面因浏览器的不同而有变化，到目前为止此控件还不被所有浏览器支持，具体细节请参阅[浏览器兼容性](#浏览器兼容性)。在不支持的浏览器当中，控件因此会被优雅的降级为普通的[\<input type="text">](/zh-CN/docs/Web/HTML/Element/input/text)输入框。

```html
<input id="date" type="date">
```

{{ EmbedLiveSample('Basic_example', 600, 40) }}

其中，Chrome/Opera 浏览器为用户选择日期提供了一个普通的操作界面，看起来是下面的样子：

![](https://mdn.mozillademos.org/files/14909/date-picker-chrome.png)

Edge 的日期控件看起来是这样子的：

![](https://mdn.mozillademos.org/files/14911/date-picker-edge.png)

Firefox 的日期控件看起来是这样子的：

![Datepicker UI in firefox](https://mdn.mozillademos.org/files/15644/firefox_datepicker.png)

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#value">Value</a></strong></td>
   <td>一个代表按照 YYYY-MM-DD 格式化过的日期 {{domxref("DOMString")}}，或者是为空</td>
  </tr>
  <tr>
   <td><strong>Events</strong></td>
   <td>{{event("change")}} 事件和 {{event("input")}}事件</td>
  </tr>
  <tr>
   <td><strong>Supported Common Attributes</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("readonly", "input")}}, 和 {{htmlattrxref("step", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL attributes</strong></td>
   <td><code>list</code>, <code>value</code>, <code>valueAsDate</code>, <code>valueAsNumber</code>.</td>
  </tr>
  <tr>
   <td><strong>Methods</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.stepDown", "stepDown()")}}, {{domxref("HTMLInputElement.stepUp", "stepUp()")}}</td>
  </tr>
 </tbody>
</table>

## Value

一个 {{domxref("DOMString")}} 代表着输入到输入框的日期值。您可以通过在 {{htmlattrxref("value", "input")}} 属性中包含日期来为输入设置默认值，如下所示：

```html
<input id="date" type="date" value="2017-06-01">
```

{{ EmbedLiveSample('Value', 600, 40) }}

有一点需要注意的是，在格式方面显示的日期与实际的不一样 — 显示的日期格式取决于用户浏览器的区域设定，而日期值的格式始终为 `yyyy-mm-dd。`

当然你也可以在 JavaScript 中通过 input 元素的 {{domxref("HTMLInputElement.value", "value")}} 属性获取和设置日期值，例如：

```js
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';
```

这行代码查找类型为 date 的第一个 input 元素，并且将其值设置为 2017-06-01（2017 年 6 月 1 日）

## 使用日期输入控件

日期控件，一开始听起来可能觉得很方便。它们不仅提供了一个简单的日期选择 UI 界面，还规范了发往后台的数据格式，无论用户在什么区域。但是，由于浏览器支持的限制，\<input type="date"> 仍然存在一些问题。

我们将探寻一些关于 \<input type="date"> 基础的和更复杂的的用法，然后就以后减轻浏览器支持问题提供建议（请参阅[处理浏览器支持问题](#处理浏览器支持问题)）。

### 日期控件基本用法

一个基础的 \<input> 和 {{htmlelement("label")}} 元素组合是 \<input type="date"> 最简单的使用方法，如下所示：

```html
<form>
  <div>
    <label for="bday">Enter your birthday:</label>
    <input type="date" id="bday" name="bday">
  </div>
</form>
```

{{ EmbedLiveSample('Basic_uses_of_date', 600, 40) }}

### 设置日期最大和最小值

你可以通过 {{htmlattrxref("min", "input")}} 和 {{htmlattrxref("max", "input")}} 属性去限制用户的可选日期范围。在随后的例子中，我们将设定日期最小值为 `2017-04-01` 最大值为 `2017-04-30`。

```html
<form>
  <div>
    <label for="party">Choose your preferred party date:</label>
    <input type="date" id="party" name="party" min="2017-04-01" max="2017-04-30">
  </div>
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40) }}

在结果中我们可以看到，只有 2017 年 4 月份的日期可选 — 输入框中可以编辑的部分只有 “日” 这部分，并且超出 4 月份以外的日期不能通过日期控件的选择小部件选择。

> **备注：** 您应该可以使用 step 属性来改变每次最佳日期时步进（增加值）的天数（例如：或许你只希望使周六可以选）。但是，在编写本文的任何实现中，这似乎并不奏效。

### 控制输入框大小

`<input type="date">` 不支持表单属性 {{htmlattrxref("size", "input")}}. 对于大小需求，你必须祈求于 [CSS](/zh-CN/docs/Web/CSS) 的帮助。

## 验证

默认情况下，`<input type="date">` 对输入的值不会做任何校验。 UI 实现通常不会让你输入任何不适日期的东西 — 这一点很有帮助 — 但是你任然可以留空或者 (在被优雅降级为 `text` 类型的输入框) 输入一个不合法的值 (例如： 4 月 32 号)。

如果你使用 {{htmlattrxref("min", "input")}} 和 {{htmlattrxref("min", "input")}} 属性去限制可用日期 (参见 [设置日期最大和最小值](#设置日期最大和最小值)),对于支持的浏览器来说如果你尝试提交一个超出给定范围的日期，那么它将抛出一个错误。然而， 你必须检查这些结果以确保他们在这些日期范围内， 因为只有在用户设备上完全支持日期选择器的情况下，才能执行这些操作。

另外， 您可以使用 {{htmlattrxref("required", "input")}} 属性强制填写日期， 如果你尝试提交一个未填写日期的域那么将会抛出错误。 至少在大多数浏览器是可以工作的。

让我们看一个例子 — 我们设置了日期的最大和最小值， 并且设定为必填：

```html
<form>
  <div>
    <label for="party">Choose your preferred party date (required, April 1st to 20th):</label>
    <input type="date" id="party" name="party" min="2017-04-01" max="2017-04-20" required>
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit">
  </div>
</form>
```

如果你尝试提交一个不完整日期的表单 (或者超出日期选择设定范围), 浏览器将会出现一个错误。 尝试一下这个例子：

{{ EmbedLiveSample('Validation', 600, 100) }}

这个截图是为那些浏览器不支持的人准备的：

![](https://mdn.mozillademos.org/files/14913/date-picker-chrome-error-message.png)

这是上面例子使用的 css。我们用 {{cssxref(":valid")}} and {{cssxref(":invalid")}} 属性去命名，以区别当前值的有效性 。我们必须把图标放在 input 旁边的 {{htmlelement("span")}}里面，而并不是它本身， 因为在 Chrome 中被放置在表单中生成的内容不能有效的样式化或者显示。

```css
div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

label {
  display: inline-block;
  width: 300px;
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

> **警告：** HTML 表单验证并不能替代脚本去确保输入值是有效的格式。一些人很容易调整 HTML 绕过验证，或者完全移除验证.。当然一些人也可能很容易的绕过你的验证，直接把数据提交到你的服务器。如果你的服务器无法验证它接收到的数据，当提交了不正确的数据之后可能会导致灾难性的后果 (或者数据量太大，错误的类型等等).

## 处理浏览器支持问题

正如刚才提到的，在编写本文时使用日期输入的主要问题就是 [浏览器兼容性](#浏览器兼容性)。举一个例子， 在安卓系统的 Firefox 中选择器是这样子的：

![](https://mdn.mozillademos.org/files/14915/date-picker-fxa.png)

在不支持的浏览器上会被降级为文本输入框， 但这同时带来了用户界面不统一（呈现的控件不同）和数据处理方面的问题。

第二个问题更为严重；正如我们早些时候提到的，对于日期输入框， 实际值总是会被格式化微 `yyyy-mm-dd`。另一方面对于文本输入框，默认情况下浏览器并不知道日期格式应该怎么样被格式化， 而且人们书写日期格式的方式有很多，例如：

- `ddmmyyyy`
- `dd/mm/yyyy`
- `mm/dd/yyyy`
- `dd-mm-yyyy`
- `mm-dd-yyyy`
- `Month dd yyyy`

解决这些问题的方法之一就是放置一个 {{htmlattrxref("pattern", "input")}} 属性在日期控件上 。即使日期输入不使用它，文本输入将会用到。例如， 请尝试在不支持的浏览器上看下面的例子：

```html
<form>
  <div>
    <label for="bday">Enter your birthday:</label>
    <input type="date" id="bday" name="bday" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit">
  </div>
</form>
```

{{ EmbedLiveSample('Handling_browser_support', 600, 100) }}

如果你尝试提交，如果你的输入不符合正则表达式 `nnn-nn-nn`（`n` 是 0 到 9 的数字）， 你将会看到浏览器显示一个错误 (并且高亮显示输入无效) 。 当然，这并不能阻止人们输入无效的日期或者格式不正确的日期，例如`yyyy-dd-mm` (而我们想要的 `yyyy-mm-dd`)。因此我们仍然有一个问题。

```css hidden
div {
  margin-bottom: 10px;
}

input:invalid + span {
  position: relative;
}

input:invalid + span:after {
  content: '✖';
  position: absolute;
  right: -18px;
}

input:valid + span {
  position: relative;
}

input:valid + span:after {
  content: '✓';
  position: absolute;
  right: -18px;
}
```

目前以跨浏览器方式处理表单中日期的最佳方式是让用户在单独的控件中输入 日 ， 月 和 年 ({{htmlelement("select")}} 元素正越来越受欢迎; 请看下面的实现), 或者使用 JavaScript 库， 例如 [jQuery date picker](https://jqueryui.com/datepicker/).

## 例子

在这个例子中，我们创建了两组用于选择日期的 UI 元素: 一个本地 `<input type="date">` 选择器 和 一组三个 {{htmlelement("select")}} 元素用于选择不支持本地输入的旧浏览器中的日期。

{{ EmbedLiveSample('例子', 600, 100) }}

### HTML

HTML 看起来像这样：

```html
<form>
    <div class="nativeDatePicker">
      <label for="bday">Enter your birthday:</label>
      <input type="date" id="bday" name="bday">
      <span class="validity"></span>
    </div>
    <p class="fallbackLabel">Enter your birthday:</p>
    <div class="fallbackDatePicker">
      <span>
        <label for="day">Day:</label>
        <select id="day" name="day">
        </select>
      </span>
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
</form>
```

月份是写死的 (因为月份是固定的), 而日和年的值是根据当前选择的月份和年份（日的判定需要月份和年份）以及当年 动态生成的 (请参阅下面的代码注释，他们详细的阐释了这些功能是如何工作的。)

```css hidden
input:invalid+span:after {
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  content: '✓';
  padding-left: 5px;
}
```

### JavaScript

代码的另一部分也可能是最有意思的部分那就是特征检验代码 — 去检测浏览器是否支持 `<input type="date">`, 我们创建一个新的 {{htmlelement("input")}} 元素， 设置它的 `type` 为 `date`,然后立刻检查它的类型 —不支持的浏览器将会返回 `text`, 因为 `date` 类型会被优雅的降级为`text`。如果 `<input type="date">` 不被浏览器支持， 我们隐藏本地选取器并用备用选取器 UI ({{htmlelement("select")}}) 替代。

```js
// define variables
var nativePicker = document.querySelector('.nativeDatePicker');
var fallbackPicker = document.querySelector('.fallbackDatePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');

// hide fallback initially
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// test whether a new date input falls back to a text input or not
var test = document.createElement('input');
test.type = 'date';

// if it does, run the code inside the if() {} block
if(test.type === 'text') {
  // hide the native picker and show the fallback
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // populate the days and years dynamically
  // (the months are always the same, therefore hardcoded)
  populateDays(monthSelect.value);
  populateYears();
}

function populateDays(month) {
  // delete the current set of <option> elements out of the
  // day <select>, ready for the next set to be injected
  while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }

  // Create variable to hold new number of days to inject
  var dayNum;

  // 31 or 30 days?
  if(month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
    dayNum = 31;
  } else if(month === 'April' || month === 'June' || month === 'September' || month === 'November') {
    dayNum = 30;
  } else {
  // If month is February, calculate whether it is a leap year or not
    var year = yearSelect.value;
    (year - 2016) % 4 === 0 ? dayNum = 29 : dayNum = 28;
  }

  // inject the right number of new <option> elements into the day <select>
  for(i = 1; i <= dayNum; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // if previous day has already been set, set daySelect's value
  // to that day, to avoid the day jumping back to 1 when you
  // change the year
  if(previousDay) {
    daySelect.value = previousDay;

    // If the previous day was set to a high number, say 31, and then
    // you chose a month with less total days in it (e.g. February),
    // this part of the code ensures that the highest day available
    // is selected, rather than showing a blank daySelect
    if(daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // get this year as a number
  var date = new Date();
  var year = date.getFullYear();

  // Make this year, and the 100 years before it available in the year <select>
  for(var i = 0; i <= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
}

// when the month or year <select> values are changed, rerun populateDays()
// in case the change affected the number of available days
yearSelect.onchange = function() {
  populateDays(monthSelect.value);
}

monthSelect.onchange = function() {
  populateDays(monthSelect.value);
}

//preserve day selection
var previousDay;

// update what day has been set to previously
// see end of populateDays() for usage
daySelect.onchange = function() {
  previousDay = daySelect.value;
}
```

> **备注：** 请记住有些年份有 53 周 (请看 [Weeks per year](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! 当你开发应用程序时需要考虑到这一点。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 通用的 {{HTMLElement("input")}} 元素 和 用于操作他的接口，{{domxref("HTMLInputElement")}}
- [Date and Time picker tutorial](/zh-CN/docs/Web/Guide/HTML/Forms/The_native_form_widgets#Date_and_time_picker)
