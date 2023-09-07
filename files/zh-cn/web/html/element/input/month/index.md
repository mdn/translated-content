---
title: <input type="month">
slug: Web/HTML/Element/input/month
---

{{HTMLSidebar}}

类型为 **`month`** 的 {{htmlelement("input")}} 可以让你容易地创建一个方便输入年份或月份的一个 {{htmlelement("input")}}。输入的值是一个经过“`YYYY-MM`”格式化的字符串，其中 `YYYY` 是四位数的年份，而 `MM` 是月份的数值表示。

{{EmbedInteractiveExample("pages/tabbed/input-month.html", "tabbed-shorter")}}

通常来说控件的 UI 界面因浏览器的不同而有变化，到目前为止此控件还不被所有浏览器支持，在桌面浏览器中只有 Chrome/Opera 和 Edge 支持；在移动端被大部分现代浏览器所支持。在不支持的浏览器中，这个控件会被优雅的降级到 [`<input type="text">`](/zh-CN/docs/Web/HTML/Element/input/text)，不过对输入的文字会有自动的验证，保证它按照预期进行格式化。

对于那些使用不支持 `month` 控制器的浏览器用户，以下的截图呈现了 Chrome 和 Opera 的月份控制器。单击右侧的向下箭头会显示日期选择器，以便选择年份和月份。

![Chrome 浏览器的月份控制器](month-control-chrome.png)

Edge 的 `month` 控制器看起来像这样的：

![Edge 浏览器的月份控制器](month-control-edge.png)

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>代表月份和年份的字符串，或为空字符串</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>
     {{domxref("HTMLElement/change_event", "change")}} 和 {{domxref("HTMLElement/input_event", "input")}}
    </td>
  </tr>
  <tr>
   <td><strong>支持的共有属性</strong></td>
   <td><a href="/zh-CN/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#list"><code>list</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a> 和 <a href="/zh-CN/docs/Web/HTML/Element/input#step"><code>step</code></a></td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>value</code></td>
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

一个以 YYYY-MM 形式（4 个或更多位数的年，接一个连字符 `-`，再接一个两位数月份）表示月份和年份的字符串。月份字符串的格式在[月份字符串](/zh-CN/docs/Web/HTML/Date_and_time_formats#月份字符串)中有描述。

### 设置默认值

你可以通过在 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性中包含月份和年份来设置该输入控件的默认值，像这样：

```html
<label for="bday-month">你在哪个月出生？</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('设置默认值', 600, 60)}}

需要注意的是显示的如期格式不同于实际的 `value` ；大部分{{Glossary("user agent", "用户代理")}}基于操作系统，根据合适的本地化形式显示月份和年份，而日期的 `value` 总是会格式化为 `yyyy-MM`。

在向服务器提交上述值的时候它们看起来像这样：`bday-month=1978-06`。

### 通过 JavaScript 代码设置 value

当然你也可以使用 JavaScript 代码通过 {{domxref("HTMLInputElement.value")}} 属性来获取或设置日期的值。例如：

```html
<label for="bday-month">你在哪个月出生？</label>
<input id="bday-month" type="month" name="bday-month" />
```

```js
const monthControl = document.querySelector('input[type="month"]');
monthControl.value = "2001-06";
```

{{EmbedLiveSample("通过 JavaScript 代码设置 value", 600, 60)}}

## 其他属性

除了 {{HTMLElement("input")}} 元素的共有属性外，month 输入还提供以下属性：

### list

列表属性的值是位于同一文档中的 {{HTMLElement("datalist")}} 元素的 {{domxref("Element.id", "id")}}。{{HTMLElement("datalist")}} 提供了一个预定义的值列表，向用户建议这个输入。列表中任何与 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 不兼容的值都不包括在建议选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

### max

使用在[值](#值)章节中讨论的字符串格式指定的所接受的最大年份和月份。如果输入到该元素的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 超过了这个，则该元素无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果 `max` 属性的值不是格式为 `yyyy-MM` 的有效字符串，则该元素没有最大值。

该值必须晚于或等于 `min` 属性所指定的年份—月份对。

### min

使用在[值](#值)章节中讨论的字符串格式指定的所接受的最小年份和月份。如果输入到该元素的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 小于这个，则该元素无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果 `min` 属性的值不是格式为 `yyyy-MM` 的有效字符串，则该元素没有最小值。

该值必须早于或等于 `max` 属性所指定的年份—月份对。

### readonly

一个布尔属性，如果存在，则表示该字段不能由用户编辑。但是，仍可以通过 JavaScript 代码直接设置 {{domxref("HTMLInputElement.value")}} 属性来更改。

> **备注：** 因为只读字段不能有值，所以 `required` 对指定了 `readonly` 属性的输入没有任何影响。

### step

`step` 属性指定了值必须满足的粒度，或者是下文描述的特殊值 `any`。值必须满足基础的步进值，才有效。如果指定了 [`min`](#min) 属性，则由 `min` 属性决定，否则，使用 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性的值，如果上述两个值都不存在，则提供适当的默认值。

字符串值 `any` 意味着不使用步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#max) 之外）。

> **备注：** 当用户输入的数据不符合步进配置时，{{Glossary("user agent", "用户代理")}}可能会四舍五入到最近的有效值，当有两个同样接近的选项时，更倾向于正方向的数字。

对于 `month` 输入，`step` 的值以月份为单位，缩放因子为 1（基础数值也是以月份为单位的）。`step` 的默认值为 1，表示 1 个月。

## 使用 month 输入

与日期相关的输入（包含 `month`）乍一看很方便：它们提供了一个简单的用户界面来选择日期，并且它们将发送到服务器的数据格式规范化，无论用户的本地化配置如何。但是，`<input type="month">` 还是存在兼容性问题，大多数主流浏览器还没有支持它。

我们先看看 `<input type="month">` 的基础和高级的用法，然后再讨论有关缓解浏览器支持问题的建议（请参阅[处理浏览器支持问题](#处理浏览器支持问题)）。

### 基本使用方法

最简单的 `<input type="month">` 涉及到基础的 {{HTMLElement("input")}} 和 {{htmlelement("label")}} 的元素组合，像下面这样：

```html
<form>
  <label for="bday-month">你在哪个月出生？</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{ EmbedLiveSample('基本使用方法', 600, 40) }}

### 设置最大和最小日期

你可以使用 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性来限制用户选择日期的范围。在下列的例子中我们指定最小月份 `1900-01` 和最大月份 `2013-12`：

```html
<form>
  <label for="bday-month">你在哪个月出生？</label>
  <input
    id="bday-month"
    type="month"
    name="bday-month"
    min="1900-01"
    max="2013-12" />
</form>
```

{{ EmbedLiveSample('设置最大和最小日期', 600, 40) }}

结果是这样：

- 只有从 1900 年的 1 月到 2013 年的 12 月的月份才可以选择，在这个控件里这个范围以外的月份不能滚动选择。
- 取决于你使用的浏览器，你可能会发现不能在月份选择器中选择在所指定范围之外的月份（如 Edge），或显示不合法（参见[验证](#验证)小节）但仍然可选（例如 Chrome）。

### 控制输入大小

`<input type="month">` 不支持诸如 [`size`](/zh-CN/docs/Web/HTML/Element/input#size) 的表单大小属性，你必须依靠 [CSS](/zh-CN/docs/Web/CSS) 来确定大小。

## 验证

默认情况下，`<input type="month">` 不会对输入的值应用任何验证，用户界面实现会屏蔽所有非日期值的输入，尽管这很有用，但是仍然无法完全依赖于该值的合法性。你仍然可以不填入任何值而提交，或输入不合法的日期值（如 4 月 32 日）。

为了避免这种情况，你可以使用 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 来限制可用的日期（参见[设置最大和最小日期](#设置最大和最小日期)），并使用 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性令日期必填。在支持的浏览器中，当你尝试提交超出范围的日期，或空日期值时，会显示错误信息。

我们来看一个例子，这里我们设定了最小和最大的日期，并令该字段必填：

```html
<form>
  <div>
    <label for="month"> 你愿意在哪个月拜访（6 月至 9 月）？ </label>
    <input
      id="month"
      type="month"
      name="month"
      min="2022-06"
      max="2022-09"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="提交表单" />
  </div>
</form>
```

如果你尝试在未指定月份或年份，或指定超出给定范围的日期情况下提交表单，浏览器会显示错误。请试试以下实时演示：

{{ EmbedLiveSample('验证', 600, 120) }}

对于那些没有使用支持的浏览器的人们来说，以下是该错误的屏幕截图：

![Chrome 浏览器中的 Month 控件必填提示](month-required.png)

下面是上述例子中使用的 CSS。这里我们使用了 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}} 这两个 CSS 属性，根据当前值是否有效来为输入添加样式。我们不得不把图标放在 input 旁边的 {{htmlelement("span")}} 上，而不是放在 input 框本身，因为在 Chrome 中，生成的内容被放在表单控件里面，无法有效地进行样式设计或显示。

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

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

> **警告：** HTML 表单验证并*不能*替代确保输入数据格式正确的脚本。很容易对 HTML 进行调整，使他们能够绕过验证，或完全删除验证。也有可能会完全绕过 HTML 代码，直接将数据提交给你的服务器。如果你的服务器端代码不能验证它所收到的数据，那么当提交的数据格式不当（或数据过大、类型错误等等）时，灾难就会降临。

## 处理浏览器支持

如前所述，使用 month 输入的最大问题是大部分主流浏览器还没有实现它们；只有桌面端的 Chrome/Opera、Edge 和大部分的移动端现代浏览器支持它们。例如，安卓版 Chrome 的 `month` 选择器看起来像这样：

![Android 手机上 Chrome 的月份选择器样式](month-android.png)

不支持的浏览器会优雅地降级为文本输入，但这在用户界面的一致性（呈现的控件会有所不同）和数据处理方面都会产生问题。

第二个问题更为严重；如前所述，`month` 输入的值总是被规范为 `yyyy-mm` 的格式。另一方面，对于文本输入，默认情况下，浏览器不知道时间应该是什么格式，而且人们有多种写法，如：

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Month yyyy` (July 2022)
- 等等

一个办法是在你的 `month` 输入上添加 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性。即使 `month` 输入不使用它，text 输入回退也会使用。例如，试着在一个不支持 month 输入的浏览器中查看下面的演示：

```html
<form>
  <div>
    <label for="month"> 愿意在哪个月访问（6 月至 9 月）？ </label>
    <input
      id="month"
      type="month"
      name="month"
      min="2022-06"
      max="2022-09"
      required
      pattern="[0-9]{4}-[0-9]{2}" />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="提交表单" />
  </div>
</form>
```

{{ EmbedLiveSample('处理浏览器支持', 600, 100) }}

如果你尝试提交，你会发现，如果你的输入不符合模式 `nnnn-nn`（其中 `n` 是 0 到 9 的数字），不支持的浏览器现在会显示一个错误信息（并突出显示输入无效）。当然，这并不能阻止人们输入无效的日期（如 `0000-42`），或者不正确但遵循格式的日期。

还有一个问题，就是用户不知道到底应该输入什么格式的日期。还有一些事情要做。

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

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

目前，以跨浏览器方式处理时间的最佳方法（至少在所有主流浏览器实现它们之前）是让用户在单独的控件中输入月份和年份（特别是在 {{htmlelement("select")}} 元素中，参见下面的示例），或使用 JavaScript 库（例如 [jQuery 日期选择器](https://jqueryui.com/datepicker/)插件）。

## 示例

在此示例中，我们创建了两组用于选择日期的接口元素：使用 `<input type="month">` 创建的原生选择器，以及为不支持 month 输入类型的旧版浏览器准备的两个分别用于选择月份和年份的 {{HTMLElement("select")}} 元素。

{{ EmbedLiveSample('示例', 600, 140) }}

### HTML

用于请求月份和年份的表单看起来像这样：

```html
<form>
  <div class="nativeDatePicker">
    <label for="month-visit">What month would you like to visit us?</label>
    <input type="month" id="month-visit" name="month-visit" />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">What month would you like to visit us?</p>
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
        <select id="year" name="year"></select>
      </span>
    </div>
  </div>
</form>
```

ID 为 `nativeDatePicker` 的 {{HTMLElement("div")}} 使用 `month` 输入类型来请求月份和年份，而 ID 为 `fallbackDatePicker` 的 `<div>` 则使用一对 `<select>` 元素。第一个元素请求月份，第二个元素请求年份。

用于选择月份的 `<select>` 是硬编码的，因为月份的名称不会改变（不考虑本地化）。可用的年份值列表是根据当前年份动态生成的（关于这些函数如何工作的详细解释，见下面的代码注释）。

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

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

### JavaScript

处理选择哪种方案并设定一系列包含于非原生的 `<select>` 的年份列表的 JavaScript 代码如下所示。

该代码中可能有趣的另一部分是特性检测代码。要检测浏览器是否支持 `<input type="month">`，我们创建一个新的 {{htmlelement("input")}} 元素，尝试将其 `type` 设置为 `month`，然后立即检查其 `type` 值。不支持的浏览器将返回 `text`，与 month 的回退行为相符。如果不支持 `<input type="month">`，我们将隐藏原生选择器并显示作为回退的选择器 UI。

```js
// 获取 UI 元素
const nativePicker = document.querySelector(".nativeDatePicker");
const fallbackPicker = document.querySelector(".fallbackDatePicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const monthSelect = document.querySelector("#month");

// 最初，隐藏回退元素
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// 测试一个新的 date 输入框是否会回退至 text 输入框
const test = document.createElement("input");

try {
  test.type = "month";
} catch (e) {
  console.log(e.description);
}

// 如果回退了，运行 if 代码块中的代码
if (test.type === "text") {
  // 隐藏原生选择器，显示回退元素
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // 动态生成年份
  // 月份总是相同的，故将它们硬编码
  populateYears();
}

function populateYears() {
  // 获取当前年份的数值表示
  const date = new Date();
  const year = date.getFullYear();

  // 在年份 <select> 中，令该年和之前的 100 年可选
  for (let i = 0; i <= 100; i++) {
    const option = document.createElement("option");
    option.textContent = year - i;
    yearSelect.appendChild(option);
  }
}
```

> **备注：** 请记住有些年份有 53 周（见[每年的周数](https://zh.wikipedia.org/wiki/ISO週日曆#每年的星期)）！当你在开发产品应用时应当考虑这个问题。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 通用 {{HTMLElement("input")}} 元素和用于操作该元素的接口 {{domxref("HTMLInputElement")}}
- [HTML 中使用的日期和时间格式](/zh-CN/docs/Web/HTML/Date_and_time_formats)
- [日期时间选择器教程](/zh-CN/docs/Web/Guide/HTML/Forms/The_native_form_widgets#Date_and_time_picker)
- [`<input type="datetime-local">`](/zh-CN/docs/Web/HTML/Element/input/datetime-local)、[`<input type="date">`](/zh-CN/docs/Web/HTML/Element/input/date)、[`<input type="time">`](/zh-CN/docs/Web/HTML/Element/input/time) 和 [`<input type="week">`](/zh-CN/docs/Web/HTML/Element/input/week)
- [表单控件 CSS 兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
