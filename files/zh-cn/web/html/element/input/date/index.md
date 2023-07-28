---
title: <input type="date">
slug: Web/HTML/Element/input/date
---

{{HTMLSidebar}}

**`type="date"`** 类型的 {{htmlelement("input")}} 元素会创建一个让用户输入一个日期的输入区域，可以使用自动验证内容的文本框，也可以使用特殊的日期选择器界面。结果值包括年份，月份和日期，但*不*包括时间。{{HTMLElement("input/time", "time")}} 和 {{HTMLElement("input/datetime-local", "datetime-local")}} 类型支持时间和日期时间输入。

{{EmbedInteractiveExample("pages/tabbed/input-date.html", "tabbed-shorter")}}

通常来说控件的 UI 界面因浏览器的不同而有变化，到目前为止此控件还不被所有浏览器支持，具体细节请参阅[浏览器兼容性](#浏览器兼容性)。在不支持的浏览器当中，控件因此会被优雅的降级为普通的 [`<input type="text">`](/zh-CN/docs/Web/HTML/Element/Input/text) 输入框。

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>按照 YYYY-MM-DD 格式化过的代表日期的字符串，或者为空字符串</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{domxref("HTMLElement/change_event", "change")}} 事件和 {{domxref("HTMLElement/input_event", "input")}} 事件</td>
  </tr>
  <tr>
   <td><strong>支持的常用属性</strong></td>
   <td><a href="/zh-CN/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#list"><code>list</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a> 和 <a href="/zh-CN/docs/Web/HTML/Element/input#step"><code>step</code></a></td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>list</code>、<code>value</code>、<code>valueAsDate</code> 和 <code>valueAsNumber</code></td>
  </tr>
    <tr>
      <td><strong>DOM 接口</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
  <tr>
   <td><strong>方法</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}、{{domxref("HTMLInputElement.stepDown", "stepDown()")}} 和 {{domxref("HTMLInputElement.stepUp", "stepUp()")}}</td>
  </tr>
 </tbody>
</table>

## 值

一个字符串，代表着输入到输入框的日期值。输入的日期按照[日期字符串格式](/zh-CN/docs/Web/HTML/Date_and_time_formats#日期字符串)所描述的 ISO8601 标准进行格式化。

你可以通过在 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性中包含日期来为输入设置默认值，如下所示：

```html
<input type="date" value="2017-06-01" />
```

{{ EmbedLiveSample('值', 600, 40) }}

> **备注：** 有一点需要注意的是，在格式方面显示的日期与实际的 `value` 不一样——显示的日期格式*取决于用户浏览器的区域设定*，而经解析的 `value` 的格式始终为 `yyyy-mm-dd`。

当然你也可以通过 JavaScript 代码获取和设置 {{domxref("HTMLInputElement")}} 的 `value` 和 `valueAsNumber` 属性，例如：

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

这行代码查找 `type` 为 `date` 的第一个 {{HTMLElement("input")}} 元素，并且将其值设置为 `2017-06-01`（2017 年 6 月 1 日）。稍后将以字符串和数字的形式读取出这个值。

## 其他属性

对于所有 {{HTMLElement("input")}} 元素的大部分通用属性也对 `date` 输入起作用，但可能不会影响它的表现，如 `size` 和 `placeholder` 属性。除了共有属性外，`date` 输入还提供以下属性。

### max

所接受最新的日期。如果输入到该元素中的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 发生在此之后，则元素将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果 `max` 属性的值不是格式为 `yyyy-mm-dd` 的有效日期星期字符串，则该元素没有最大日期值。

如果同时设置了 `max` 和 `min` 值，此值必须**晚于或等于** `min` 属性指定的日期值。

### min

所接受最早的日期。如果输入到该元素中的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 发生在此之前，则元素将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果 `min` 属性的值不是格式为 `yyyy-mm-dd` 的有效日期星期字符串，则该元素没有最小日期值。

如果同时设置了 `max` 和 `min` 值，此值必须**早于或等于** `max` 属性指定的日期值。

### step

`step` 属性指定了值必须满足的粒度，或者是下文描述的特殊值 `any`。值必须满足基础的步进值，才有效。如果指定了 [`min`](#min) 属性，则由 `min` 属性决定，否则，使用 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性的值，如果上述两个值都不存在，则提供适当的默认值。

字符串值 `any` 意味着不使用步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#max) 之外）。

> **备注：** 当用户输入的数据不符合步进配置时，{{Glossary("user agent", "用户代理")}}可能会四舍五入到最近的有效值，当有两个同样接近的选项时，更倾向于正方向的数字。

对于 `date` 输入，`step` 的值以天为单位，并被视为等于 86,400,000 乘以 `step` 值的毫秒数（基础数值是毫秒）。`step` 的默认值为 1，表示 1 天。

> **备注：** 将 `date` 输入的 `step` 值指定为 `any` 与指定为 `1` 的效果相同。

## 使用日期输入控件

日期控件提供了一个简单的日期选择 UI 界面，还标准化了发送到服务器的数据格式，而与用户的浏览器或区域设置无关。

在本章，我们将研究 `<input type="date">` 基础的和更复杂的用法。

### 日期控件基本用法

`<input>` 和 {{htmlelement("label")}} 元素组合是 `<input type="date">` 最简单的使用方法，如下所示：

```html
<form action="https://example.com">
  <label>
    Enter your birthday:
    <input type="date" name="bday" />
  </label>

  <p><button>Submit</button></p>
</form>
```

{{ EmbedLiveSample('日期控件基本用法', 600, 40) }}

这段 HTML 代码将所输入的日期作为 `bday` 的参数发送至 `https://example.com`，获得了像这样的 URL `https://example.com/?bday=1955-06-08` 。

### 设置日期最大和最小值

你可以通过 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性去限制用户的可选日期范围。在随后的例子中，我们将设定日期最小值为 `2017-04-01`，最大值为 `2017-04-30`：

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{ EmbedLiveSample('设置日期最大和最小值', 600, 40) }}

在结果中我们可以看到，只有 2017 年 4 月份的日期可选——输入框中可以编辑的部分只有“日”这部分，并且超出 4 月份以外的日期不能通过日期控件的选择组件选择。

> **备注：** 你*应该*可以使用 [`step`](/zh-CN/docs/Web/HTML/Element/input#step) 属性来改变每次最佳日期时步进（增加值）的天数（例如：或许你只希望使周六可以选）。但是，在撰写这篇文章的时候，还没有可靠的实现。

### 控制输入框大小

`<input type="date">` 不支持诸如 [`size`](/zh-CN/docs/Web/HTML/Element/input#size) 的表单大小属性。你必须依靠 [CSS](/zh-CN/docs/Web/CSS) 来确定大小。

## 验证

默认情况下，`<input type="date">` 对输入的值不会做任何校验。接口实现通常不会让你输入任何非日期的东西（这一点很有帮助），但是你仍然可以留空或者（在被优雅降级为 `text` 类型的输入框时）输入一个不合法的值（例如 4 月 32 日）。

如果你使用 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 属性去限制可用日期（参见[设置日期最大和最小值](#设置日期最大和最小值)），对于支持的浏览器来说如果你尝试提交一个超出给定范围的日期，那么它将抛出一个错误。然而，你必须检查这些结果以确保他们在这些日期范围内，因为只有在用户设备上完全支持日期选择器的情况下，才能执行这些操作。

另外，你可以使用 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性强制填写日期，如果你尝试提交一个未填写日期的字段，将会抛出错误。即使优雅降级为 `text` 类型输入框，在大多数浏览器也是可以工作的。

让我们看一个例子——我们设置了日期的最大和最小值，并且将日期字段设定为必填：

```html
<form>
  <label>
    Choose your preferred party date (required, April 1st to 20th):
    <input
      type="date"
      name="party"
      min="2017-04-01"
      max="2017-04-20"
      required />
    <span class="validity"></span>
  </label>

  <p>
    <button>Submit</button>
  </p>
</form>
```

如果你尝试提交一个不完整日期的表单（或者超出日期选择设定范围），浏览器将会显示一个错误。尝试一下这个例子：

{{ EmbedLiveSample('验证', 600, 100) }}

这是上面例子使用的 CSS。我们基于 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}} [伪类](/zh-CN/docs/Web/CSS/Pseudo-elements)来在输入框旁边添加小图标。我们必须把图标放在 input 旁边的 {{htmlelement("span")}} 里面，而并不是它本身，因为在 Chrome 中被放置在表单中生成的内容不能有效的样式化或者显示。

```css
label {
  display: flex;
  align-items: center;
}

span::after {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

> **警告：** 客户端表单验证*不能替代*服务端验证。对于某人来说，对 HTML 进行调整以使其绕过验证或完全删除验证太容易了，甚至也可以完全绕开 HTML 并将数据直接提交到服务器。如果服务器端代码无法验证其接收到的数据，则在提交格式不正确的（或太大，类型错误……）的数据时，灾难可能会发生。

## 处理浏览器支持问题

在不支持的浏览器上，日期输入框会被降级为文本输入框，但这同时带来了用户界面不统一（呈现的控件不同）和数据处理方面的问题。

第二个问题更为严重；正如我们早些时候提到的，对于日期输入框，实际值总是会被格式化为 `yyyy-mm-dd`。另一方面对于文本输入框，默认情况下浏览器并不知道日期格式应该怎么样被格式化，而且人们书写日期格式的方式有很多，例如：

- `ddmmyyyy`
- `dd/mm/yyyy`
- `mm/dd/yyyy`
- `dd-mm-yyyy`
- `mm-dd-yyyy`
- `Month dd yyyy`

解决这些问题的方法之一就是对日期控件设置 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性。即使日期输入不使用它，文本输入也会用到它。例如，请尝试在不支持的浏览器上看下面的例子：

```html
<form>
  <label>
    Enter your birthday:
    <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" />
    <span class="validity"></span>
  </label>
  <p>
    <button>Submit</button>
  </p>
</form>
```

{{ EmbedLiveSample('处理浏览器支持问题', 600, 100) }}

如果你尝试提交不符合模式 `####-##-##`（其中 `#` 是 0 到 9 的数字）的输入，你将会看到浏览器显示一个错误，并且高亮显示输入无效。当然，这并不能阻止人们输入无效的日期或者格式不正确的日期，因此我们需要更进一步。

```css hidden
span {
  position: relative;
}

span::after {
  right: -18px;
  position: absolute;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

目前以跨浏览器方式处理表单中日期的最佳方式是让用户在单独的控件中输入日、月和年，或者使用 JavaScript 库，例如 [jQuery 日期选择器](https://jqueryui.com/datepicker/)。

## 示例

在这个例子中，我们创建了两组用于选择日期的 UI 元素：一个原生 `<input type="date">` 选择器和一组由三个 {{htmlelement("select")}} 元素用于在不支持本地输入的旧浏览器中提供日期选择。

{{ EmbedLiveSample('示例', 600, 100) }}

### HTML

HTML 看起来像这样：

```html
<form>
  <div class="nativeDatePicker">
    <label for="bday">Enter your birthday:</label>
    <input type="date" id="bday" name="bday" />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">Enter your birthday:</p>
  <div class="fallbackDatePicker">
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
</form>
```

月份是写死的（因为月份是固定的），而日和年的值是根据当前选择的月份和年份（日的判定需要月份和年份）以及当前年份动态生成的。请参阅下面的代码注释，它们详细的阐释了这些功能是如何工作的。

```css hidden
span {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

### JavaScript

该代码中可能有趣的另一部分是特性检测代码——检测浏览器是否支持 `<input type="date">`。

我们创建一个新的 {{htmlelement("input")}} 元素，尝试将其 `type` 设置为 `date`，然后立即检查其 `type` 值。不支持的浏览器将返回 `text`，因为 `date` 类型将回退为 `text` 类型。如果不支持 `<input type="date">`，我们将隐藏原生选择器并显示后备选择器 UI（{{htmlelement("select")}} 元素）。

```js
// 获取 UI 元素
const nativePicker = document.querySelector(".nativeDatePicker");
const fallbackPicker = document.querySelector(".fallbackDatePicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const monthSelect = document.querySelector("#month");
const daySelect = document.querySelector("#day");

// 最初，隐藏回退元素
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// 测试一个新的 date 输入框是否会回退至 text 输入框
const test = document.createElement("input");

try {
  test.type = "date";
} catch (e) {
  console.log(e.message);
}

// 如果回退了，运行 if 代码块中的代码
if (test.type === "text") {
  // 隐藏原生选择器，显示回退元素
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // 动态生成天数和年数
  // 由于硬编码的缘故，月份总是相同的
  populateDays(monthSelect.value);
  populateYears();
}

function populateDays(month) {
  // 从当前的 <select> 中删除当前的 <option> 元素集，
  // 为下一个集合的注入做准备。
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }

  // 创建保存注入新的天数的变量
  let dayNum;

  // 31 天还是 30 天？
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
    // 如果是 2 月，计算其是否为闰年
    const year = yearSelect.value;
    const isLeap = new Date(year, 1, 29).getMonth() === 1;
    dayNum = isLeap ? 29 : 28;
  }

  // 将适当数量的新 <option> 元素注入到当前的 <select> 元素中。
  for (let i = 1; i <= dayNum; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // 如果之前的天数已经设定，将 daySelect 的值设置为那一天，以防止当年数改变时天数被重置为1
  if (previousDay) {
    daySelect.value = previousDay;

    // 如果前一天被设定为一个较高的数字，例如31，然后你选择了一个总天数较少的月份（例如2月），
    // 这部分代码就会确保可用的最大日期被选中，而不是显示一个空白的 daySelect
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
  // 获取今年的年份数字
  const date = new Date();
  const year = date.getFullYear();

  // 使今年以及之前的 100 年都能在 <select> 中选取。
  for (let i = 0; i <= 100; i++) {
    const option = document.createElement("option");
    option.textContent = year - i;
    yearSelect.appendChild(option);
  }
}

// 当月或年的 <select> 值改变时，重新运行 populateDays()
// 使得该变化影响到可用的天数
yearSelect.onchange = () => {
  populateDays(monthSelect.value);
};

monthSelect.onchange = () => {
  populateDays(monthSelect.value);
};

// 保留选择的天数
let previousDay;

// 更新之前设定的日期
// 用法请查看 populateDays() 的结尾
daySelect.onchange = () => {
  previousDay = daySelect.value;
};
```

> **备注：** 请记住有些年份有 53 周（见[**每年的周数**](https://zh.wikipedia.org/wiki/ISO週日曆#每年的星期)）！当你在开发产品应用时应当考虑这个问题。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 通用的 {{HTMLElement("input")}} 元素和用于操作该元素的接口 {{domxref("HTMLInputElement")}}
- [日期时间选择器教程](/zh-CN/docs/Learn/Forms/HTML5_input_types#日期和时间选择器)
- [HTML 中使用的日期和时间格式](/zh-CN/docs/Web/HTML/Date_and_time_formats)
- [表单控件 CSS 兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
