---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
---

{{HTMLSidebar("Input_types")}}

{{htmlelement("input")}} 元素的 **`datetime-local`** 类型创建让用户便捷输入日期和时间的输入控件，包括“年”、“月”、“日”，以及“时”和“分”。

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

此控件的 UI 因浏览器而异。在不支持的浏览器中，其会优雅地降级为简单的 [`<input type="text">`](/zh-CN/docs/Web/HTML/Element/input/text) 控件。

该控件旨在表示*本地日期和时间*，不一定是*用户的本地日期和时间*。换句话说，其实现应该允许年、月、日、小时、分钟的任何有效的组合——即使某些组合在用户的本地时区是无效的（例如，夏令时的转换时差）。一部分手机浏览器（特别是 iOS 上的）目前没有正确地实现这一点。

由于 `datetime-local` 类型受限于浏览器支持，并且不同浏览器在输入方法上存在差异，目前最好是使用第三方框架或库来展示，或者实现一个自己的输入控件。另一个方法是拆分为 `date` 和 `time` 输入控件，这两个的支持都比 `datetime-local` 更广泛。

一部分浏览器可能会用一个普通的文本输入元素代替显示，并在输入内容提交到服务器之前验证它们是否是合法的日期/时间格式，但你不可信赖于此行为，因为用户使用的浏览器不可预知的。

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#取值">取值</a></strong></td>
      <td>
        一个表示日期和时间的字符串（本地时区）或空值。
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
        <a href="/zh-CN/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#list"><code>list</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>
        和 <a href="/zh-CN/docs/Web/HTML/Element/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <code>list</code>、<code>value</code>、<code>valueAsNumber</code>。
      </td>
    </tr>
    <tr>
      <td><strong>DOM 接口</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>方法</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}、{{domxref("HTMLInputElement.stepDown", "stepDown()")}}、{{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
  </tbody>
</table>

## 取值

一个输入到控件上的表示日期的字符串。[本地日期时间字符串](/zh-CN/docs/Web/HTML/Date_and_time_formats#本地日期时间字符串)中描述了关于此类型的输入控件使用的日期和的输入格式。

你可以将一个包含日期和时间的值放在 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性中以为控件设置一个默认值，像这样：

```html
<label for="party">输入预订宴会的日期和时间：</label>
<input
  id="party"
  type="datetime-local"
  name="partydate"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('取值', 600, 60) }}

需要注意的是：显示的日期和时间的格式与实际 `value` 中的格式不同，显示的日期和时间格式以用户操作系统所的区域设置信息为准，而控件的日期/时间值 `value` 总是 `yyyy-MM-ddThh:mm` 格式。例如，当上例中的值被提供到服务器之后，将会像这样 `partydate=2017-06-01T08:30`。

> **备注：** 另外请注意，如果这样的数据以 HTTP [`GET`](/zh-CN/docs/Web/HTTP/Methods/GET) 提交，时间部分的冒号需要编码之后才能放在 URL 参数中，例如 `partydate=2017-06-01T08%3A30`。编码方法请参见 {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}。

你也可以在 JavaScript 中使用 {{domxref("HTMLInputElement")}} 的 `value` 属性来获取和设置日期的值，例如：

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

JavaScript 的 {{jsxref("Date")}} 提供了几种用于将数值类型的日期转换为格式化字符串的方法。例如：{{jsxref("Date.toISOString()")}} 方法返回 UTC 时区的日期和时间，带有表示该时区的 `Z` 前缀；删除 `Z` 后将可以提供用于 `datetime-local` input 的格式化的值。

## 额外的属性

除了 {{HTMLElement("input")}} 元素通用的属性外，datetime-local 输入控件还提供了以下属性。

### max

接受的最晚日期和时间的值。如果 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 的值晚于这一时间戳，则该元素不会通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果 `max` 属性的值不是遵循 `YYYY-MM-DDThh:mm` 格式的有效字符串，则该元素没有最大值。

该属性指定的值必须晚于或等于 `min` 属性的值。

### min

接受的最早日期和时间的值。如果早于这一时间戳，则该元素不会通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果 `min` 属性的值不是遵循 `YYYY-MM-DDThh:mm` 格式的有效字符串，则该元素没有最小值。

该属性指定的值必须早于或等于 `max` 属性的值。

### step

`step` 属性是一个数字，用于指定值调整的步长；或使用特殊值 `any`。该属性的描述如下：仅能使用基础的调整步长（若 [`min`](#min) 已指定，则从其开始；否则使用 [`value`](/zh-CN/docs/Web/HTML/Element/input#value)；若两者均未提供，则为某一适当的默认值）。

字符串值 `any` 表示没有步长约束，任何的值均可使用（除了其他的约束，如：[`min`](#min) 和 [`max`](#max)）。

> **备注：** 当用户输入的数据不符合配置的步长限制时，{{Glossary("user agent", "用户代理")}}可能会将其四舍五入到最近的有效值，当有两个差值相等的选项时，优先选择大于当前值的数值。

对于 `datetime-local` 输入控件，`step` 值的单位是秒，最小分度为 1/1000（因为底层的数值以毫秒为单位）。默认的 `step` 值为 60，表示 60 秒（或一分钟、60000 毫秒）。

_目前，关于 `step` 的 `any` 值与 `datetime-local` 输入控件一起使用的意义尚不明确。一旦确定该信息，文档会立即更新。_

## 使用 datetime-local 输入控件

Date/time 输入控件乍看非常实用；它们提供了方便的用户接口来选择日期和时间，并且无论用户端是什么样的本地化设置，都会以标准化数据发送给服务器。但是受限于浏览器的支持，`<input type="datetime-local">` 也有不少问题。

我们先来看看 `<input type="datetime-local">` 基本的和高级的用法，之后在（参见[处理浏览器支持](#处理浏览器支持)）会提供一些减少浏览器兼容问题的建议。

### datetime-local 的基本用法

`<input type="datetime-local">` 最简单的用法是将 `<input>` 和 {{htmlelement("label")}} 组合在一起，像下面这样：

```html
<form>
  <label for="party">输入预订宴会的日期和时间：</label>
  <input id="party" type="datetime-local" name="partydate" />
</form>
```

{{ EmbedLiveSample('datetime-local_的基本用法', 600, 40) }}

### 设定日期时间的最大值和最小值

你可以使用 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性来限制用户可选择的日期/时间。在下面的例子中我们设定最小的日期时间 `2017-06-01T08:30` 和最大的日期时间 `2017-06-30T16:30`：

```html
<form>
  <label for="party">输入预订宴会的日期和时间：</label>
  <input
    id="party"
    type="datetime-local"
    name="partydate"
    min="2017-06-01T08:30"
    max="2017-06-30T16:30" />
</form>
```

{{ EmbedLiveSample('设定日期时间的最大值和最小值', 600, 40) }}

结果如下：

- 只有“2017 年 6 月”可供选择——只有“日期”部分的值可修改，并且 6 月以外的日期不能被选到日期控件内。
- 视你所使用的浏览器，你或许会发现时间选择控件中特定值以外的时间可能不可选（如 Edge），或是无效（参见[校验](#校验)）但仍可选（如 Chrome）

> **备注：** 你可以使用 [`step`](/zh-CN/docs/Web/HTML/Element/input#step) 属性设置不同值来控制日期每次增减的天数（例如，或许你希望只有星期六可选）。但是，截止到本文档编写之时，好像还没有浏览器实现此功能。

### 控制输入框大小

`<input type="datetime-local">` 并不支持如 [`size`](/zh-CN/docs/Web/HTML/Element/input#size) 这样的表单大小属性。你可使用 [CSS](/zh-CN/docs/Web/CSS) 来控制大小。

### 设置时区

`datetime-local` 控件并没有地方可以设置日期/时间的时区和/或区域属性。在 [`datetime`](/zh-CN/docs/Web/HTML/Element/input/datetime) 输入类型上提供过此功能，但这个类型现在已被废弃，也已从标准中移除。这项被移除的主要原因是缺少浏览器的支持，以及出于用户交互/用户体验方法的考量。相比之下，仅使用一个（或多个）控件来设置日期/时间，然后单独在另一控件处理时区，这样更容易一些。

例如，如果你在开发一套系统，某位用户可能已经登录进来，并且已经设置了时区，你可以把时区放在一个 [`hidden`](/zh-CN/docs/Web/HTML/Element/input/hidden) 输入控件里。例如：

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

另一方面，如果你被要求在用户输入日期时间时提供时区输入，你可以提供给用户一种输入方式，例如 {{htmlelement("select")}} 元素：

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

以上两例中，日期/时间和时区可以独立的数据提交到服务器，之后你需要做的就是把它们保存到服务器数据库恰当的位置。

## 校验

默认情况下 `<input type="datetime-local">` 不对输入内容进行验证。用户交互（UI）的实现通常不允许你输入不是日期/时间的值——这非常有用。但用户也仍会在不填写任何值的情况下提交数据，或者输入一个不无效的日期/时间（如：4 月 32 日）。

你可以使用 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 及 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 来限制可选择的日期（参见[设定日期时间的最大值和最小值](#设定日期时间的最大值和最小值)），并且使用 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性使日期/时间为强制的输入项。这样做的结果是，可以使相应的浏览器在你输入一个超出范围的日期或不输入时显示一个错误信息。

让我们来看个例子，这里我们设置日期/时间的最小值和最大值，并且设置该项为必填：

```html
<form>
  <div>
    <label for="party"
      >Choose your preferred party date and time (required, June 1st 8.30am to
      June 30th 4.30pm):</label
    >
    <input
      id="party"
      type="datetime-local"
      name="partydate"
      min="2017-06-01T08:30"
      max="2017-06-30T16:30"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Book party!" />
  </div>
</form>
```

如果你试图提交一个不完整的日期（或者日期超出设定范围），浏览器会显示一条错误信息。来试试这个示例：

{{ EmbedLiveSample('校验', 600, 120) }}

这里有以上示例的 CSS。在这里我们使用 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}} CSS 属性来控制当前值正确和错误的样式。我们需要这两个图标放一个 {{htmlelement("span")}} 到输入元素后面，而非使用输入元素本身，因为在 Chrome 下生成的内容会被放在表单控件里面，不能设置样式或显示出来。

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

input:invalid + span:after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span:after {
  content: "✓";
  padding-left: 5px;
}
```

> **警告：** HTML 表单验证并不能取代脚本校验输入数据是否符合格式要求。有人可以非常容易地修改 HTML 以绕过验证，亦或是完全删除这个元素。同样可能的是，有人可以非常轻易做到完全绕过 HTML 而直接向你的服务器提交数据。如果你服务器代码不对接收到的数据进行校验，灾难性的打击就可能发生在这些错误格式数据提交的时候（或是数据太大，或是格式错误，等等）。

## 处理浏览器支持

正如前面所提到的，不支持的浏览器会优雅地降级显示为文件输入框，但这在用户界面的一致性方面（呈现的控件不一样），以及数据处理方面造成了问题。

第二个问题是最严重的。正如我们之前提到的，采用 `datetime-local` 输入，实际值总是会被转换成 `yyyy-mm-ddThh:mm` 格式。但换成文本输入框之后，浏览器默认情况下不知道应当输入什么格式的日期，人们有很多不同的书写日期和时间的方式，如：

- `DDMMYYYY`
- `DD/MM/YYYY`
- `MM/DD/YYYY`
- `DD-MM-YYYY`
- `MM-DD-YYYY`
- `MM-DD-YYYY hh:mm`（12 小时制）
- `MM-DD-YYYY HH:mm`（24 小时制）
- 等等

一个变通的方法是放一个 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性在 `datetime-local` 输入元素里。虽然 `datetime-local` 输入控件本身不使用这个属性，但降级显示的文本输入框将会用到。例如，在不支持的浏览器上试一下这个例子：

```html
<form>
  <div>
    <label for="party"
      >Choose your preferred party date and time (required, June 1st 8.30am to
      June 30th 4.30pm):</label
    >
    <input
      id="party"
      type="datetime-local"
      name="partydate"
      min="2017-06-01T08:30"
      max="2017-06-30T16:30"
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Book party!" />
  </div>
  <input type="hidden" id="timezone" name="timezone" value="-08:00" />
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
  content: "✖";
  position: absolute;
  right: -18px;
}

input:valid + span {
  position: relative;
}

input:valid + span:after {
  content: "✓";
  position: absolute;
  right: -18px;
}
```

目前处理跨浏览器表单中输入日期的最好办法是让用户分别在不同的控件中输入年、月、日和时间（{{htmlelement("select")}} 元素很流行——参见下面的实现），或者使用 JavaScript 库，如 [jQuery date picker](https://jqueryui.com/datepicker/) 及 [jQuery timepicker plugin](https://timepicker.co/)。

## Y2K38 问题（通常是服务端）

JavaScript 使用双精度浮点数来存储日期（数值），这意味着 JavaScript 代码不会遇到 Y2K38 问题，除非使用强制转换为整数或位运算，因为所有 JavaScript 的位运算符都使用 32 位带符号二进制整数补码的形式。

问题出现在服务端：存储大于 2^31 - 1 的日期。要解决这个问题，你必须使用 32 位无符号整数、64 位带符号整数或双精度浮点数来存储所有的日期。如果你的服务端是用 PHP 编写的，那么修复只需要升级到 PHP 8 或 7，并升级硬件到 x86_64 或 IA64。如果你有硬件方面的问题，你可以尝试在 32 位计算机的虚拟机中模拟 64 位硬件，但大部分 VM 都不支持这种虚拟化，因为存在稳定性和性能的问题。

## Y10k 问题（通常是客户端）

在许多服务器中，日期存储为数字而非字符串——固定大小且与格式无关（大端对齐）。在 10000 年之后，这些数字只是会比以前更大一点，因此服务器上一般不会存在 10000 年之后提交表单的问题。

问题出现在客户端上：解析超过 4 位的年份。

```html
<!--midnight of January 1st, 10000: the exact time of Y10K-->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

就是这么简单，你只需要为任意位数的日期编写代码。不要只准备 5 位数的。以下是使用编程方式设置值的 JavaScript 代码：

```js
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

如果 Y10K 问题会在你离世以后的许多个世纪才发生，那为什么还要担心它呢？正因为你已经走了，且没有其他足够了解系统编码的人员去修复它，所以使用你的软件的公司将无法使用你的软件。

## 示例

在这个示例中，我们创建两套 UI 元素来选择日期时间——一套原生的 `<input type="datetime-local">`，另一套是一系列 {{htmlelement("select")}} 元素以在不支持原生控件的浏览器下选择日期和时间。

{{ EmbedLiveSample('示例', 600, 140) }}

HTML 代码如下：

```html
<form>
  <div class="nativeDateTimePicker">
    <label for="party">Choose a date and time for your party:</label>
    <input type="datetime-local" id="party" name="bday" />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">Choose a date and time for your party:</p>
  <div class="fallbackDateTimePicker">
    <div>
      <span>
        <label for="day">Day:</label>
        <select id="day" name="day"></select>
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
        <select id="year" name="year"></select>
      </span>
    </div>
    <div>
      <span>
        <label for="hour">Hour:</label>
        <select id="hour" name="hour"></select>
      </span>
      <span>
        <label for="minute">Minute:</label>
        <select id="minute" name="minute"></select>
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

input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

代码的另一部分也许会引起一定的兴趣，那就是功能检查代码——检查浏览器是否支持 `<input type="datetime-local">`，我们可以创建一个新的 {{htmlelement("input")}} 元素，设置它的 `type` 为 `datetime-local`，然后立即检查它被设置的类型。不支持 `datetime-local` 的浏览器返回 `text`，因为这就是 `datetime-local` 要回退的类型。如果 `<input type="datetime-local">` 不被支持，我们隐藏原生的控件并显示备用的控件 UI（{{htmlelement("select")}}）来替代。

```js
// Obtain UI widgets
const nativePicker = document.querySelector(".nativeDateTimePicker");
const fallbackPicker = document.querySelector(".fallbackDateTimePicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const monthSelect = document.querySelector("#month");
const daySelect = document.querySelector("#day");
const hourSelect = document.querySelector("#hour");
const minuteSelect = document.querySelector("#minute");

// hide fallback initially
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// test whether a new datetime-local input falls back to a text input or not
const test = document.createElement("input");

try {
  test.type = "datetime-local";
} catch (e) {
  console.log(e.description);
}

// if it does, run the code inside the if () {} block
if (test.type === "text") {
  // hide the native picker and show the fallback
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

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
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }

  // Create variable to hold new number of days to inject
  let dayNum;

  // 31 or 30 days?
  if (
    [
      "January",
      "March",
      "May",
      "July",
      "August",
      "October",
      "December",
    ].includes(month)
  ) {
    dayNum = 31;
  } else if (["April", "June", "September", "November"].includes(month)) {
    dayNum = 30;
  } else {
    // If month is February, calculate whether it is a leap year or not
    const year = yearSelect.value;
    const isLeap = new Date(year, 1, 29).getMonth() === 1;
    dayNum = isLeap ? 29 : 28;
  }

  // inject the right number of new <option> elements into the day <select>
  for (let i = 1; i <= dayNum; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // if previous day has already been set, set daySelect's value
  // to that day, to avoid the day jumping back to 1 when you
  // change the year
  if (previousDay) {
    daySelect.value = previousDay;

    // If the previous day was set to a high number, say 31, and then
    // you chose a month with less total days in it (e.g. February),
    // this part of the code ensures that the highest day available
    // is selected, rather than showing a blank daySelect
    if (daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if (daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if (daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // get this year as a number
  const date = new Date();
  const year = date.getFullYear();

  // Make this year, and the 100 years before it available in the year <select>
  for (let i = 0; i <= 100; i++) {
    const option = document.createElement("option");
    option.textContent = year - i;
    yearSelect.appendChild(option);
  }
}

function populateHours() {
  // populate the hours <select> with the 24 hours of the day
  for (let i = 0; i <= 23; i++) {
    const option = document.createElement("option");
    option.textContent = i < 10 ? `0${i}` : i;
    hourSelect.appendChild(option);
  }
}

function populateMinutes() {
  // populate the minutes <select> with the 60 hours of each minute
  for (let i = 0; i <= 59; i++) {
    const option = document.createElement("option");
    option.textContent = i < 10 ? `0${i}` : i;
    minuteSelect.appendChild(option);
  }
}

// when the month or year <select> values are changed, rerun populateDays()
// in case the change affected the number of available days
yearSelect.onchange = () => {
  populateDays(monthSelect.value);
};

monthSelect.onchange = () => {
  populateDays(monthSelect.value);
};

//preserve day selection
let previousDay;

// update what day has been set to previously
// see end of populateDays() for usage
daySelect.onchange = () => {
  previousDay = daySelect.value;
};
```

> **备注：** 请记住某些年份有 53 个星期（见[**每年的周数**](https://zh.wikipedia.org/wiki/ISO週日曆#每年的星期)）！当你在开发产品应用时应当考虑这个问题。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 通用 {{HTMLElement("input")}} 元素以及操作它的接口 {{domxref("HTMLInputElement")}}
- [`<input type="date">`](/zh-CN/docs/Web/HTML/Element/input/date) 和 [`<input type="time">`](/zh-CN/docs/Web/HTML/Element/input/time)
- [日期和时间选择器教程](/zh-CN/docs/Web/Guide/HTML/Forms/The_native_form_widgets#Date_and_time_picker)
