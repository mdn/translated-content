---
title: <input type="week">
slug: Web/HTML/Element/input/week
---

{{HTMLSidebar("Input_types")}}

{{HTMLElement("input")}} 类型为 **`week`** 的元素会创建输入字段，以便轻松输入年份以及该年（即第 1 周到第 [52 或 53](https://zh.wikipedia.org/zh-cn/ISO_8601#日历星期表示法) 周）的 [ISO 8601 星期数](https://zh.wikipedia.org/zh-cn/ISO_8601#日历星期表示法)

{{EmbedInteractiveExample("pages/tabbed/input-week.html", "tabbed-shorter")}}

控件的用户界面因浏览器而异；跨浏览器的支持目前受到限制，目前只有 Chrome/Opera 和 Microsoft Edge 支持。在不支持的浏览器中，该控件会优雅降级至与 [`<input type="text">`](/zh-CN/docs/Web/HTML/Element/Input/text) 相同的功能。

在 Chrome/Opera 中，`week` 控件提供了用于填写星期和年的插槽，弹出式日历界面（可以更直观地选择它们）以及“X”按钮以清除控件的值。

![An input reading 'week 01, 2017'. The background of the 2017 is the same blue as the focus ring. There are 3 icons in the input: x or clear, a spinner with small up and down arrows, and a larger down arrow. A calendar is a pop-up below the input set to January 2017. The first column of the calendar is the week: 52, 1, 2, 3, 4, 5. the full month calendar is to the right of that. The row with Week 1 and January 2 to 8 is highlighted. On the same line as the month, there are buttons to move right and left for the next and previous months.](week-control-chrome.png)

Edge 的 `week` 控制更加精细，使用滚动的滚轮打开星期和年的选择器。

![An input reading 'week 01, 2017'. A popup is open below with two columns. The left column has a list of weeks, from week 48 to Week 52, continuing with week 01 to week 05. The right side has years, from 2012 to 2022. Week 01 and 2017 are in the middle, highlighted with a blue background. At the bottom, there is a row with a checkbox and an X; likely buttons.](week-control-edge.png)

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>代表周数和年份的字符串，或为空字符串</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{domxref("HTMLElement/change_event", "change")}} 和 {{domxref("HTMLElement/input_event", "input")}}</td>
  </tr>
  <tr>
   <td><strong>支持的常用属性</strong></td>
   <td><a href="/zh-CN/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#list"><code>list</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a> 和 <a href="/zh-CN/docs/Web/HTML/Element/input#step"><code>step</code></a></td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>value</code>、<code>valueAsDate</code>、<code>valueAsNumber</code> 和 <code>list</code></td>
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

一个字符串代表所输入的星期/年的值。[星期字符串](/zh-CN/docs/Web/HTML/Date_and_time_formats#星期字符串)中描述了此输入类型使用的日期和时间值的格式。

你可以通过在 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性中包含一个值来为输入设置默认值，如下所示：

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('值', 600, 60)}}

要注意的一件事是，显示的格式可能与实际的 `value` 不同，后者始终采用 `yyyy-Www` 格式。当将上述例子中的值提交给服务器时，浏览器可能会将其显示为 `Week 01, 2017`，但是提交的值始终为 `week=2017-W01`。

你还可以使用输入元素的 {{domxref("HTMLInputElement.value", "value")}} 属性获取并设置 JavaScript 中的值，例如：

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## 其他属性

除了 {{HTMLElement("input")}} 元素共有的属性外，星期输入还提供以下属性：

### max

接受以上[值](#值)部分中讨论的字符串格式的按时间最新年份和星期数。如果输入到该元素中的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 超过此值，则元素将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果 `max` 属性的值不是有效的星期字符串，则该元素没有最大值。

此值必须大于或等于 `min` 属性指定的年和星期。

### min

最早接受的年和星期数。如果输入到该元素中的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 小于此值，则该元素将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果 `min` 属性的值不是有效的星期字符串，则输入没有最小值。

该值必须小于或等于 `max` 属性的值。

### readonly

布尔属性值，如果存在，说明此字段不能由用户编辑。然而，其 `value` 值仍然可以通过 JavaScript 代码直接设置 {{domxref("HTMLInputElement")}} 的 `value` 属性来改变。

> **备注：** 由于只读字段不可以拥有值，`required` 不会对指定了 `readonly` 属性的字段起作用。

### step

`step` 属性指定了值必须满足的粒度，或者是下文描述的特殊值 `any`。值必须满足基础的步进值，才有效。如果指定了 [`min`](#min) 属性，则由 `min` 属性决定，否则，使用 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性的值，如果上述两个值都不存在，则提供适当的默认值。

字符串值 `any` 意味着不使用步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#max) 之外）。

> **备注：** 当用户输入的数据不符合步进配置时，{{Glossary("user agent", "用户代理")}}可能会四舍五入到最近的有效值，当有两个同样接近的选项时，更倾向于正方向的数字。

对于 `week` 输入，`step` 的值以周为单位，比例因子为 604,800,000（因为基础数值以毫秒为单位）。`step` 的默认值为 1，表示 1 周。默认的步进基数是 -259,200,000，这是 1970 年第一周的开始（`"1970-W01"`）。

_目前，尚不清楚当与 `week` 输入一起使用时，`"any"` 的值对 `step` 意味着什么。确定该信息后，将对其进行更新。_

## 使用星期输入

乍看之下，星期输入听起来很方便，因为它们提供了用于选择星期的简单 UI，并且标准化了发送到服务器的数据格式，而与用户的浏览器或区域设置无关。但是，`<input type="week">` 存在问题，因为不能保证所有浏览器都支持该特性。

我们将研究 `<input type="week">` 的基本和更复杂的用法，然后在以后提供有关缓解浏览器支持问题的建议（请参阅[处理浏览器支持](#处理浏览器支持)）。

### 星期的基本用途

`<input type="week">` 的最简单用法涉及基本的 `<input>` 和 {{htmlelement("label")}} 元素组合，如下所示：

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('星期的基本用途', 600, 40)}}

### 控制输入框大小

`<input type="week">` 不支持诸如 [`size`](/zh-CN/docs/Web/HTML/Element/input#size) 的表单大小属性。您必须依靠 [CSS](/zh-CN/docs/Web/CSS) 来确定大小。

### 使用 step 属性

你应该能够使用 [`step`](/zh-CN/docs/Web/HTML/Element/input#step) 属性来更改每次递增或递减的跳转周数，但是这似乎对支持浏览器没有任何影响。

## 验证方式

默认情况下，`<input type="week">` 不会对输入的值应用任何验证。UI 实现通常不允许指定不是有效的星期或年的任何内容，尽管这很有用，但是仍然可以在字段为空的情况下提交，并且你可能希望限制可选择的周数范围。

### 设置最大和最小星期

您可以使用 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性来限制用户可以选择的有效周数。在以下示例中，我们设置了可供选择的最小值 `Week 01, 2017` 和最大值 `Week 52, 2017`：

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('设置最大和最小星期', 600, 40)}}

这是上面示例中使用的 CSS。在这里，我们利用 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}} CSS 伪类属性根据当前值是否有效来设置输入的样式。我们必须将图标放在输入旁边的 {{htmlelement("span")}} 而不是输入本身上，因为在 Chrome 中，生成的内容位于表单控件内，无法设置样式或显示有效性。

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

结果是，在支持的浏览器中，2017 年 W01 到 W52 之间只有几周才被视为有效，并且可以选择。

### 使星期值成为必需值

另外，你可以使用 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性来强制填写星期。因此，如果您尝试提交空白的星期字段，则支持的浏览器将显示错误。

让我们看一个例子；在这里，我们设置了最小和最大星期，并令该字段必填：

```html
<form>
  <div>
    <label for="week">What week would you like to start?</label>
    <input
      id="week"
      type="week"
      name="week"
      min="2017-W01"
      max="2017-W52"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

如果您尝试提交不带任何值的表单，浏览器将显示错误。现在尝试使用示例：

{{EmbedLiveSample('使星期值成为必需值', 600, 120)}}

这是使用不支持该控件的浏览器的屏幕截图：

![The week form control has two dashes where the week number should be. A popup with a yellow warning symbol and a 'Please fill out this field' is emanating from the two dashes, which are highlighted in blue, the same blue as the input's focus ring.](week-validation-chrome.png)

> **警告：** HTML 表单验证*不能*代替脚本来确保输入的数据采用正确的格式。对于某人来说，对 HTML 进行调整以使其绕过验证或完全删除验证太容易了，甚至也可以完全绕开 HTML 并将数据直接提交到服务器。如果服务器端代码无法验证其接收到的数据，则在提交格式不正确的（或太大，类型错误……）的数据时，灾难可能会发生。

## 处理浏览器支持

如上所述，现在使用星期输入的主要问题是浏览器支持：Safari 和 Firefox 在桌面上不支持它，而旧版本的 IE 不支持它。

诸如 Android 和 iOS 之类的移动平台确实很好地利用了这种输入类型，提供了专门的 UI 控件，使在触摸屏环境中选择值变得非常容易。例如，Android 版 Chrome 上的 `week` 选择器如下所示：

![A modal popup. The header reads 'set week'. There are two columns: the left has 36 in the middle at full opacity, with 35 above it and 37 below being semi-opaque. On the right side, 2017 is fully opaque. There are no other options. Three text links or buttons on the bottom include 'clear' on the 'left' and 'cancel' and 'set' on the right.](week-chrome-android.png)

不支持该控件的浏览器会优雅地降级为文本输入，但这在用户界面的一致性（所提供的控件将有所不同）和数据处理方面都产生了问题。

第二个问题是更严重的。如前所述，在输入一个 `week` 的情况下，实际值始终会归一化为 `yyyy-Www` 格式。当浏览器回退至通用文本输入时，没有什么可以指导用户正确格式化输入的格式（这肯定是不直观的）。人们可以通过多种方式来写星期值。例如：

- `Week 1 2017`
- `Jan 2-8 2017`
- `2017-W01`
- 等等。

目前，以跨浏览器方式处理星期/年的最佳方法是让用户在单独的控件中输入星期数和年份（特别是在 {{htmlelement("select")}} 元素中，参见下面的示例），或使用 JavaScript 库（例如 [jQuery 日期选择器](https://jqueryui.com/datepicker/)）。

## 示例

在此示例中，我们创建了两组用于选择星期的 UI 元素：使用 `<input type="week">` 创建的原生选择器，以及为不支持 `week` 输入类型的旧版浏览器准备的两个用于选择星期/年的 {{htmlelement("select")}} 元素。

{{EmbedLiveSample('示例', 600, 140)}}

HTML 看起来像这样：

```html
<form>
  <div class="nativeWeekPicker">
    <label for="week">What week would you like to start?</label>
    <input
      id="week"
      type="week"
      name="week"
      min="2017-W01"
      max="2018-W52"
      required />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">What week would you like to start?</p>
  <div class="fallbackWeekPicker">
    <div>
      <span>
        <label for="week">Week:</label>
        <select id="fallbackWeek" name="week"></select>
      </span>
      <span>
        <label for="year">Year:</label>
        <select id="year" name="year">
          <option value="2017" selected>2017</option>
          <option value="2018">2018</option>
        </select>
      </span>
    </div>
  </div>
</form>
```

星期值由下面的 JavaScript 代码动态生成。

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

该代码中可能有趣的另一部分是特性检测代码。要检测浏览器是否支持 `<input type="week">`，我们创建一个新的 {{htmlelement("input")}} 元素，尝试将其 `type` 设置为 `week`，然后立即检查其 `type` 值。不支持的浏览器将返回 `text`，因为 `week` 类型将回退为 `text` 类型。如果不支持，`<input type="week">` 我们将隐藏原生选择器并显示后备选择器 UI（{{htmlelement("select")}} 元素）。

```js
// 获取 UI 元素
const nativePicker = document.querySelector(".nativeWeekPicker");
const fallbackPicker = document.querySelector(".fallbackWeekPicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const weekSelect = document.querySelector("#fallbackWeek");

// 最初，隐藏回退元素
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// 测试一个新的 date 输入框是否会回退至 text 输入框
const test = document.createElement("input");

try {
  test.type = "week";
} catch (e) {
  console.log(e.description);
}

// 如果回退了，运行 if 代码块中的代码
if (test.type === "text") {
  // 隐藏原生选择器，显示回退元素
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // 动态生成星期数
  populateWeeks();
}

function populateWeeks() {
  // 生成含有 52 个选择的星期数
  for (let i = 1; i <= 52; i++) {
    const option = document.createElement("option");
    option.textContent = i < 10 ? `0${i}` : i;
    weekSelect.appendChild(option);
  }
}
```

> **备注：** 请记住，有些年份有 53 周（请参阅[每年的周数](https://zh.wikipedia.org/wiki/ISO週日曆#每年的星期))！在开发生产应用程序时，需要考虑到这一点。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 通用 {{HTMLElement("input")}} 元素和用于操作该元素的接口 {{domxref("HTMLInputElement")}}
- [HTML 中使用的日期和时间格式](/zh-CN/docs/Web/HTML/Date_and_time_formats)
- [`<input type="datetime-local">`](/zh-CN/docs/Web/HTML/Element/Input/datetime-local)、[`<input type="date">`](/zh-CN/docs/Web/HTML/Element/Input/date)、[`<input type="time">`](/zh-CN/docs/Web/HTML/Element/Input/time) 和 [`<input type="month">`](/zh-CN/docs/Web/HTML/Element/Input/month)
- [表单控件 CSS 兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
