---
title: <input type="datetime-local">
slug: Web/HTML/Element/Input/datetime-local
translation_of: Web/HTML/Element/input/datetime-local
---
{{HTMLRef}}

{{htmlelement("input")}} 元素的 **`datetime-local `**类型创建让用户便捷输入日期和时间的输入控件，包括 “年”、“月”、“日”，以及 “时” 和 “分”。

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

所使用的是用户所在时区。此控件的样式因浏览器而异；目前支持的浏览器为数不多，桌面端仅有 Chrome/Opera 和 Edge，移动端大多数较新版本的览器提供能使用的实现方案。在其它的浏览器中，此类型会降级显示为简单的 [`<input type="text">`](/en-US/docs/Web/HTML/Element/input/text) 控件。

控件不支持输入秒。

由于 `datetime-local` 类型受限于浏览器支持，并且不同浏览器在输入方法上存在差异，目前最好是使用第三方框架或库来展示，或者实现一个自己的输入控件。另一个方法是拆分为 `date` 和 `time` 输入控件，这两个的支持都比 `datetime-local` 更广泛。

一部分浏览器可能会用一个普通的文本输入元素代替显示，并在输入内容提交到服务器之前验证它们是否是合法的日期/时间格式，但你不可信赖于此行为，因为用户使用的浏览器不可预知的。

如果你们没有在使用支持此功能的浏览器，下面的 Chrome/Opera `datetime-local` 控件截图样式可作参考。点击输入框右侧的向下箭头弹出的日期选择器可选择日期；时间需要手动地输入。

![](https://mdn.mozillademos.org/files/14949/datetime-local-chrome.png)

Edge 浏览器的 `datetime-local` 控件样式如下；点击日期和时间数值的部分会分别显示两个独立的控件，这样你可以轻松地设定日期和时间。这有点像为你创建了一个将 `date` 和 `time` 拼接在一起的控件。

![](https://mdn.mozillademos.org/files/14953/datetime-local-picker-edge1.png)

![](https://mdn.mozillademos.org/files/14955/datetime-local-picker-edge2.png)

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#取值">取值</a></strong></td>
   <td>一个表示日期和时间的 {{domxref("DOMString")}}（本地时区）或空值。</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{event("change")}} 及 {{event("input")}}.</td>
  </tr>
  <tr>
   <td><strong>支持的通用属性</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("readonly", "input")}}, 及 {{htmlattrxref("step", "input")}}.</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>list</code>, <code>value</code>, <code>valueAsNumber</code>.</td>
  </tr>
  <tr>
   <td><strong>方法</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.stepDown", "stepDown()")}}, {{domxref("HTMLInputElement.stepUp", "stepUp()")}}.</td>
  </tr>
 </tbody>
</table>

## 取值

一个输入到控件上的表示日期的 {{domxref("DOMString")}} 。你可以将一个包含日期和时间的值放在 {{htmlattrxref("value", "input")}} 属性中以为控件设置一个默认值，像这样：

```html
<label for="party">输入预订宴会的日期和时间：</label>
<input id="party" type="datetime-local" name="partydate" value="2017-06-01T08:30">
```

{{ EmbedLiveSample('取值', 600, 60) }}

一件需要注意的事情是显示的日期时间的格式与实际 `value` 里的格式不同，显示的日期和时间格式以用户操作系统所的区域设置信息为准，而控件的日期/时间值 `value` 总是 `yyyy-MM-ddThh:mm` 格式。例如，当上例中的值被提供到服务器之后，将会像这样 `partydate=2017-06-01T08:30`.

> **备注：** 另外请注意，如果这样的数据以 HTTP [`GET`](/en-US/docs/Web/HTTP/Methods/GET) 提交，时间部分的冒号 “:” 需要编码之后才能放在 URL 参数中，例如 `partydate=2017-06-01T08%3A30`。编码方法请参见 {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} 。

你也可以在 JavaScript 中使用 {{domxref("HTMLInputElement.value")}} 属性来获取和设置日期的值，例如：

```js
var dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = '2017-06-01T08:30';
```

## 使用 datetime-local 输入控件

Date/time 输入控件乍看非常实用；它们提供了方便的用户接口来选择日期和时间，并且无论用户端是什么样的本地化设置，都会以标准化数据发送给服务器。但是受限于浏览器的支持， `<input type="datetime-local">` 也有不少问题。

我们先来看看 `<input type="datetime-local">` 基本的和高级的用法，之后在（参见[处理浏览器支持](#处理浏览器支持)）会提供一些减少浏览器兼容问题的建议。

### datetime-local 的基本用法

`<input type="datetime-local">` 最简单的用法是将 `<input>` 和 {{htmlelement("label")}} 组合在一起，像下面这样：

```html
<form>
    <label for="party">输入预订宴会的日期和时间：</label>
    <input id="party" type="datetime-local" name="partydate">
</form>
```

{{ EmbedLiveSample('datetime-local_的基本用法', 600, 40) }}

### 设定日期时间的最大值和最小值

你可以使用 {{htmlattrxref("min", "input")}} 和 {{htmlattrxref("max", "input")}} 属性来限制用户可选择的日期/时间。在下面的例子中我们设定最小的日期时间 `2017-06-01T08:30` 和最大的日期时间 `2017-06-30T16:30`：

```html
  <form>
    <label for="party">输入预订宴会的日期和时间：</label>
    <input id="party" type="datetime-local" name="partydate" min="2017-06-01T08:30" max="2017-06-30T16:30">
  </form>
```

{{ EmbedLiveSample('设定日期时间的最大值和最小值', 600, 40) }}

结果如下：

- 只有 “2017 年 6 月” 可供选择 —— 只有 “日期” 部分的值可修改，并且 6 月以外的日期不能被选到日期控件内
- 视你所使用的浏览器，你或许会发现时间选择控件中特定值以外的时间可能不可选（如 Edge），或是无效（参见 [校验](#校验)）但仍可选（如 Chrome）

> **备注：** 你可以使用 {{htmlattrxref("step", "input")}} 属性设置不同值来控制日期每次增减的天数（例如，或许你希望只有星期六可选）。但是，截止到本文档编写之时，好像还没有浏览器实现此功能。

### 控制输入框大小

`<input type="datetime-local">` 并不支持如 {{htmlattrxref("size", "input")}} 这样的表单大小属性。你可使用 [CSS](/zh-CN/docs/Web/CSS) 来控制大小。

### 设置时区

`datetime-local` 控件并没有地方可以设置日期/时间的时区和/或区域属性。在 [`datetime`](/en-US/docs/Web/HTML/Element/input/datetime) 输入类型上提供过此功能，但这个类型现在已被废弃，也已从标准中移除。这项被移除的主要原因是缺少浏览器的支持，以及出于用户交互/用户体验方法的考量。相比之下，仅使用一个（或多个）控件来设置日期/时间，然后单独在另一控件处理时区，这样更容易一些。

例如，如果你在开发一套系统，某位用户可能已经登录进来，并且已经设置了时区，你可以把时区放在一个 [`hidden`](/en-US/docs/Web/HTML/Element/input/hidden) 输入控件里。例如：

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00">
```

另一方面，如果你被要求在用户输入日期时间时提供时区输入，你可以提供给用户一种输入方式，例如 {{htmlelement("select")}} 元素：

```html
<select name="timezone_offset" id="timezone-offset" class="span5">
    <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
    <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
    <option value="-10:00">(GMT -10:00) Hawaii</option>
    <option value="-09:50">(GMT -9:30) Taiohae</option>
    <option value="-09:00">(GMT -9:00) Alaska</option>
    <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>

  ...

</select>
```

以上两例中，日期/时间和时区可以独立的数据提交到服务器，之后你需要做的就是把它们保存到服务器数据库恰当的位置。

> **备注：** 以上代码来自 [All world timezones in an HTML select element](https://gist.github.com/nodesocket/3919205).

## 校验

默认情况下 `<input type="datetime-local">` 不对输入内容进行验证。用户交互（UI）的实现通常不允许你输入不是日期/时间的值 —— 这非常有用 —— 但用户也仍会在不填写任何值的情况下提交数据，或者输入一个不无效的日期/时间（如：4 月 32 日）。

你可以使用 {{htmlattrxref("min", "input")}} 及 {{htmlattrxref("max", "input")}} 来限制可选择的日期（参见 [设定日期时间的最大值和最小值](#设定日期时间的最大值和最小值)），并且使用 {{htmlattrxref("required", "input")}} 属性使日期/时间为强制的输入项。这样做的结果是，可以使相应的浏览器在你输入一个超出范围的日期或不输入时显示一个错误信息。

让我们来看个例子，这里我们设置日期/时间的最小值和最大值，并且设置该项为必填：

```html
<form>
    <div>
        <label for="party">Choose your preferred party date and time (required, June 1st 8.30am to June 30th 4.30pm):</label>
        <input id="party" type="datetime-local" name="partydate" min="2017-06-01T08:30" max="2017-06-30T16:30" required>
        <span class="validity"></span>
    </div>
    <div>
        <input type="submit" value="Book party!">
    </div>
</form>
```

如果你试图提交一个不完整的日期（或者日期超出设定范围），浏览器会显示一条错误信息。来试试这个例子：

{{ EmbedLiveSample('校验', 600, 120) }}

如果你不在使用相应支持的浏览器，这里有一个截图供参考：

![](https://mdn.mozillademos.org/files/14957/datetime-local-error.png)

这里有上面例子的 CSS。在这里我们使用 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}} CSS 属性来控制当前值正确和错误的样式。我们需要这两个图标放一个 {{htmlelement("span")}} 到输入元素后面，而非使用输入元素本身，因为在 Chrome 下生成的内容会被放在表单控件里面，不能设置样式或显示出来。

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

> **警告：** HTML 表单验证并不能取代脚本校验输入数据是否符合格式要求。有人可以非常容易地修改 HTML 以绕过验证，亦或是完全删除这个元素。同样可能的是，有人可以非常轻易做到完全绕过 HTML 而直接向你的服务器提交数据。如果你服务器代码不对接收到的数据进行校验，灾难性的打击就可能发生在这些错误格式数据提交的时候（或是数据太大，或是格式错误，等等）。

## 处理浏览器支持

正如前面所提到的，当前使用日期/时间输入控件最主要的问题是浏览器支持 —— 只有桌面端的 Chrome、Opera 和 Edge 浏览器，以及移动端大多数的现代浏览器支持它。举例来说，安卓系统上的 Firefox 的 `datetime-local` 选择器看上去像这样：

![](https://mdn.mozillademos.org/files/14951/datetime-local-fxa.png)

不支持此特性的浏览器会降级显示为文件输入框，但这在用户界面的一致性方面（呈现的控件不一样），以及数据处理方面造成了问题。

第二个问题是最严重的。正如我们之前提到的，采用 `datetime-local` 输入，实际值总是会被转换成 `yyyy-mm-ddThh:mm` 格式。但换成文本输入框之后，浏览器默认情况下无知道应当输入什么格式的日期，人们有很多不同的书写日期和时间的方式，如：

- `ddmmyyyy`
- `dd/mm/yyyy`
- `mm/dd/yyyy`
- `dd-mm-yyyy`
- `mm-dd-yyyy`
- `mm-dd-yyyy hh:mm` （12 小时制）
- `mm-dd-yyyy HH:mm` （24 小时制）
- 等等

一个变通的方法是放一个 {{htmlattrxref("pattern", "input")}} 属性在 `datetime-local` 输入元素里。虽然 `datetime-local` 输入控件本身不使用这个属性，但降级显示的文本输入框将会用到。例如，在不支持的浏览器上试一下这个例子：

```html
<form>
  <div>
    <label for="party">Choose your preferred party date and time (required, June 1st 8.30am to June 30th 4.30pm):</label>
    <input id="party" type="datetime-local" name="partydate"
           min="2017-06-01T08:30" max="2017-06-30T16:30"
           pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required>
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Book party!">
  </div>
  <input type="hidden" id="timezone" name="timezone" value="-08:00">
</form>
```

{{ EmbedLiveSample('处理浏览器支持', 600, 100) }}

你试一下提交数据，如果你输入的内容不满足 `nnnn-nn-nnTnn:nn` 格式（n 为 0 \~ 9 的数字），你会看到浏览器显示一条错误信息（并高亮输入框标记为无效），但这并不能妨碍用户输入无效的日期或是不正确的日期和时间。

然而什么样的用户会去理解这样一个他们要输入的日期和时间格式呢？

我们仍有问题待解决。

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

目前处理跨浏览器表单中输入日期的最好办法是让用户分别在不同的控件中输入年、月、日和时间（{{htmlelement("select")}} 元素很流行 —— 参见下面的实现），或者使用 JavaScript 库，如 [jQuery date picker](https://jqueryui.com/datepicker/) 及 [jQuery timepicker plugin](http://timepicker.co/)。

## 例子

在这个例子中，我们创建两套 UI 元素来选择日期时间 —— 一套原生的 `<input type="datetime-local">` ，另一套是一系列 {{htmlelement("select")}} 元素以在不支持原生控件的浏览器下选择日期和时间。

{{ EmbedLiveSample('例子', 600, 140) }}

HTML 代码如下：

```html
<form>
  <div class="nativeDateTimePicker">
    <label for="party">Choose a date and time for your party:</label>
    <input type="datetime-local" id="party" name="bday">
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">Choose a date and time for your party:</p>
  <div class="fallbackDateTimePicker">
    <div>
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
    <div>
      <span>
        <label for="hour">Hour:</label>
        <select id="hour" name="hour">
        </select>
      </span>
      <span>
        <label for="minute">Minute:</label>
        <select id="minute" name="minute">
        </select>
      </span>
    </div>
  </div>
</form>
```

月份是固定写死的（它们是不变的），日期和年份的值是依据选中的月和年动态生成的，并且目前的年份顺序排列（代码的注释以详细解释了解这些函数是如何工作的），我们也决定动态生成小时和分种，它们的数量实在是多了点！

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

代码的另一部分也许会引起一定的兴趣，那就是功能检查代码 —— 检查浏览器是否支持 `<input type="datetime-local">`，我们可以创建一个新的 {{htmlelement("input")}} 元素，设置它的 `type` 为 `datetime-local`，然后立即检查它被设置的类型。不支持 `datetime-local` 的浏览器返回 `text`，因为这就是 `datetime-local` 要回退的类型。 如果 `<input type="datetime-local">` 不被支持，我们隐藏原生的控件并显示备用的控件 UI （{{htmlelement("select")}}）来替代。

```js
// define variables
var nativePicker = document.querySelector('.nativeDateTimePicker');
var fallbackPicker = document.querySelector('.fallbackDateTimePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');
var hourSelect = document.querySelector('#hour');
var minuteSelect = document.querySelector('#minute');

// hide fallback initially
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// test whether a new datetime-local input falls back to a text input or not
var test = document.createElement('input');
test.type = 'datetime-local';
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
  populateHours();
  populateMinutes();
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
  if(month === 'January' | month === 'March' | month === 'May' | month === 'July' | month === 'August' | month === 'October' | month === 'December') {
    dayNum = 31;
  } else if(month === 'April' | month === 'June' | month === 'September' | month === 'November') {
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

function populateHours() {
  // populate the hours <select> with the 24 hours of the day
  for(var i = 0; i <= 23; i++) {
    var option = document.createElement('option');
    option.textContent = (i < 10) ? ("0" + i) : i;
    hourSelect.appendChild(option);
  }
}

function populateMinutes() {
  // populate the minutes <select> with the 60 hours of each minute
  for(var i = 0; i <= 59; i++) {
    var option = document.createElement('option');
    option.textContent = (i < 10) ? ("0" + i) : i;
    minuteSelect.appendChild(option);
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

> **备注：** 请记住某些年份有 53 个星期（见[**Weeks per year**](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year)）！当你在开发产品应用时应当考虑这个问题。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 通用 {{HTMLElement("input")}} 元素以及操作它的接口 {{domxref("HTMLInputElement")}}
- [`<input type="date">`](/en-US/docs/Web/HTML/Element/input/date) and [`<input type="time">`](/en-US/docs/Web/HTML/Element/input/time)
- [Date and Time picker tutorial](/zh-CN/docs/Web/Guide/HTML/Forms/The_native_form_widgets#Date_and_time_picker)
