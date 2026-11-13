---
title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

**`datetime-local`** 类型的 {{htmlelement("input")}} 元素创建让用户便捷输入日期和时间的输入控件，包括年、月、日，以及时、分。

{{InteractiveExample("HTML 演示：&lt;input type=&quot;datetime-local&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="meeting-time">选择预约的时间：</label>

<input
  type="datetime-local"
  id="meeting-time"
  name="meeting-time"
  value="2018-06-12T19:30"
  min="2018-06-07T00:00"
  max="2018-06-14T00:00" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

该控件的用户界面通常因浏览器而异。它旨在表示*本地日期和时间*，而非一定要代表*用户的本地日期和时间*。换言之，该输入允许任何有效的年、月、日、时、分组合——即便该组合在用户本地时区内可能无效（例如夏令时春季调整时段内的一小时过渡期）。

## 值

一个输入到控件上的表示日期的字符串。[本地日期时间字符串](/zh-CN/docs/Web/HTML/Guides/Date_and_time_formats#本地日期时间字符串)中描述了关于此类型的输入控件使用的日期和的输入格式。

你可以将一个包含日期和时间的值放在 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value) 属性中以为控件设置一个默认值，像这样：

```html
<label for="party">输入所预定聚会的日期和时间：</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('取值', 600, 60) }}

需要注意的是：显示的日期和时间的格式与实际 `value` 中的格式不同，显示的日期和时间格式以用户操作系统所的区域设置信息为准，而控件的日期/时间值 `value` 总是 `yyyy-MM-ddTHH:mm` 格式。例如，当上例中的值提交到服务器之后，将会像这样 `party-date=2017-06-01T08:30`。

> [!NOTE]
> 另外请注意，如果这样的数据以 HTTP [`GET`](/zh-CN/docs/Web/HTTP/Reference/Methods/GET) 提交，时间部分的冒号需要编码之后才能放在 URL 参数中，例如 `party-date=2017-06-01T08%3A30`。编码方法请参见 {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}。

你也可以在 JavaScript 中使用 {{domxref("HTMLInputElement")}} 的 `value` 属性来获取和设置日期的值，例如：

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## 额外的属性

除了 {{HTMLElement("input")}} 元素通用的属性外，`datetime-local` 输入控件还提供了以下属性。

### max

接受的最晚日期和时间的值。如果 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value) 的值晚于这一时间戳，则该元素不会通过[约束验证](/zh-CN/docs/Web/HTML/Guides/Constraint_validation)。如果 `max` 属性的值不是遵循 `YYYY-MM-DDTHH:mm` 格式的有效字符串，则该元素没有最大值。

该值必须指定一个日期字符串，其日期必须晚于或等于由 `min` 属性指定的日期。

### min

接受的最早日期和时间的值。如果早于这一时间戳，则该元素不会通过[约束验证](/zh-CN/docs/Web/HTML/Guides/Constraint_validation)。如果 `min` 属性的值不是遵循 `YYYY-MM-DDThh:mm` 格式的有效字符串，则该元素没有最小值。

该值必须指定一个日期字符串，其日期必须早于或等于由 `max` 属性指定的日期。

### step

`step` 属性是一个数字，用于指定值必须遵循的步长精度，或特殊值 `any`（详见下文说明）。仅当值与步长基准值的差为整数倍时才有效。步长基准值为：若已指定 [`min`](#min)，则为此值，否则为 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value)，若两者均未提供则为 `0`（Unix 纪元时间 `1970-01-01T00:00`）。

对于 `datetime-local` 输入，`step` 的值以秒为单位给出，并被视为等于 `step` 值乘以 1000 的毫秒数（底层数值单位为毫秒）。默认值为 60，表示 1 分钟。

字符串值 `any` 表示没有步长约束，此时用户可以使用任何的值输入（除了其他的约束，如：[`min`](#min) 和 [`max`](#max)）。实际上，对于 `datetime-local` 输入，其效果等同于 `60`，因为此时选择器界面仅允许选择整分钟。

> [!NOTE]
> 当用户输入的数据不符合配置的步长限制时，{{Glossary("user agent", "用户代理")}}可能会将其四舍五入到最近的有效值，当有两个差值相等的选项时，优先选择大于当前值的数值。

## 使用 datetime-local 输入控件

日期/时间输入对开发者而言十分便捷：它们提供了选择日期和时间的简易界面，并能将发送至服务器的数据格式标准化，不受用户区域设置影响。然而，考虑用户需求至关重要。切勿要求用户输入应用运行无需的数据。

### 控制输入框大小

`<input type="datetime-local">` 不支持表单控件的大小属性，例如 [`size`](/zh-CN/docs/Web/HTML/Reference/Elements/input#size)。需要借助 [CSS](/zh-CN/docs/Web/CSS) 来自定义这些元素的尺寸。

### 设置时区

`datetime-local` 控件并没有地方可以设置日期/时间的时区和/或区域属性。在 [`datetime`](/zh-CN/docs/Web/HTML/Reference/Elements/input/datetime-local) 输入类型上提供过此功能，但这个类型现在已被废弃，也已从标准中移除。这项被移除的主要原因是缺少浏览器的支持，以及出于用户交互/用户体验方法的考量。相比之下，仅使用一个（或多个）控件来设置日期/时间，然后单独在另一控件处理时区，这样更容易一些。

例如，如果你正在构建一个用户很可能已登录且区域设置已配置的系统，可通过 [`hidden`](/zh-CN/docs/Web/HTML/Reference/Elements/input/hidden) 输入类型提供时区。示例如下：

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

另一方面，若需允许用户在输入日期/时间时同时选择时区，可使用 {{htmlelement("select")}} 元素，通过从预设地点列表中选择特定位置，使用户能够设置正确的时区：

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">埃尼威托克，夸贾林</option>
  <option value="Pacific/Midway">中途岛，萨摩亚</option>
  <option value="Pacific/Honolulu">夏威夷</option>
  <option value="Pacific/Marquesas">泰奥海</option>
  <!-- 等等 -->
</select>
```

以上两例中，日期/时间和时区可以独立的数据提交到服务器，之后你需要做的就是把它们保存到服务器数据库恰当的位置。

## 校验

默认情况下 `<input type="datetime-local">` 不对输入内容进行验证。用户交互（UI）的实现通常不允许你输入不是日期/时间的值——这非常有用。但用户也仍会在不填写任何值的情况下提交数据，或者输入一个无效的日期/时间（如：4 月 32 日）。

你可以使用 [`min`](/zh-CN/docs/Web/HTML/Reference/Elements/input#min) 及 [`max`](/zh-CN/docs/Web/HTML/Reference/Elements/input#max) 来限制可选择的日期（参见[设定日期时间的最大值和最小值](#设定日期时间的最大值和最小值)），并且使用 [`required`](/zh-CN/docs/Web/HTML/Reference/Elements/input#required) 属性使日期/时间为强制的输入项。这样做的结果是，可以使相应的浏览器在你输入一个超出范围的日期或不输入时显示一个错误信息。

让我们来看个例子，这里我们设置日期/时间的最小值和最大值，并且设置该项为必填：

```html-nolint
<form>
  <div>
    <label for="party">
      请选择偏好的派对日期和时间（必填项，6 月 1 日上午 8:30 至 6 月 30 日下午 4:30）：
    </label>
    <input
      id="party"
      type="datetime-local"
      name="party-date"
      min="2017-06-01T08:30"
      max="2017-06-30T16:30"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="预定聚会！" />
  </div>
</form>
```

如果你试图提交一个不完整的日期（或者日期超出设定范围），浏览器会显示一条错误信息。来试试这个示例：

{{ EmbedLiveSample('校验', 600, 120) }}

这里有以上示例的 CSS。在这里我们利用 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}} CSS 属性，根据当前值是否有效来设置输入框样式。图标被放置在输入框旁边的 {{htmlelement("span")}} 标签中。

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

> [!WARNING]
> HTML 表单验证并*不*能取代脚本校验输入数据是否符合格式要求。用户可以非常容易地修改 HTML 以绕过验证，亦或是完全删除这个元素。同样可能的是，用户也可以非常轻易做到完全绕过 HTML 而直接向你的服务器提交数据。如果你服务器代码不对接收到的数据进行校验，在这些错误格式数据提交的时候就可能会产生灾难性问题（数据太大、格式错误等）。

> [!NOTE]
> 通过使用 `datetime-local` 输入，日期值总是被标准化为 `YYYY-MM-DDTHH:mm` 形式。

## 示例

### datetime-local 的基本用法

`<input type="datetime-local">` 的最基本用法涉及一个基础的 `<input>` 元素与 {{htmlelement("label")}} 元素的组合，如下所示：

```html
<form>
  <label for="party">输入所预定聚会的日期和时间：</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('datetime-local 的基本用法', 600, 40) }}

### 设置日期和时间的最大值和最小值

可以使用 [`min`](/zh-CN/docs/Web/HTML/Reference/Elements/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Reference/Elements/input#max) 属性来限制用户可选择的日期/时间范围。在下面的示例中，我们将最小日期时间设置为 `2025-06-01T08:30`，最大日期时间设置为 `2025-06-30T16:30`：

```html
<form>
  <label for="party">输入所预定聚会的日期和时间：</label>
  <input
    id="party"
    type="datetime-local"
    name="party-date"
    min="2025-06-01T08:30"
    max="2025-06-30T16:30" />
</form>
```

{{ EmbedLiveSample('设置日期和时间的最大值和最小值', 600, 40) }}

以上示例将仅可选择 2025 年 6 月的日期。根据使用的浏览器不同，超出指定范围的时间可能无法选择。在其他浏览器中，无效日期和时间虽可选择，但将匹配 {{CSSXref(":invalid")}} 和 {{CSSXref(":out-of-range")}} 样式，并导致[校验](#校验)失败。

部分浏览器（Chrome 和 Edge）仅允许编辑日期值中的“日期”部分，且无法滚动选择六月以外的日期。其他浏览器（Safari）虽显示日期选择器允许任意日期，但选定日期时值将自动限制在有效范围内。

有效范围涵盖 `min` 与 `max` 值之间的所有时间段；仅在范围首尾日期处对时间段进行限制。

> [!NOTE]
> 你应该能够使用 [`step`](/zh-CN/docs/Web/HTML/Reference/Elements/input#step) 属性来调整每次日期递增时跳跃的天数（例如，让用户只可以选择星期六）。然而，截至本文撰写之时，该属性在任何实现中似乎都未能有效发挥作用。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#值">值</a></strong></td>
      <td>
        一个表示日期和时间的字符串（本地时区）或空值。
      </td>
    </tr>
    <tr>
      <td><strong>事件</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} 和
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>支持的通用属性</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>
        和 <a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
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
    <tr>
      <td><strong>隐式 ARIA 角色</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">没有相应的角色</a></td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 通用 {{HTMLElement("input")}} 元素以及操作它的接口 {{domxref("HTMLInputElement")}}
- [`<input type="date">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/date) 和 [`<input type="time">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/time)
- [HTML 中的日期与时间格式](/zh-CN/docs/Web/HTML/Guides/Date_and_time_formats)
- [日期和时间选择器教程](/zh-CN/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#日期时间选择器)
