---
title: <input type="number">
slug: Web/HTML/Element/input/number
---

{{HTMLSidebar("Input_types")}}

**`number`** 类型的 {{HTMLElement("input")}} 元素用于让用户输入一个数字，其包括内置验证以拒绝非数字输入。

浏览器可能会选择提供步进箭头，让用户可以使用鼠标增加和减少输入的值，或者只需用指尖敲击即可。

{{EmbedInteractiveExample("pages/tabbed/input-number.html", "tabbed-shorter")}}

不支持 `number` 类型的浏览器会回退为标准的 `text` 输入框。

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>表示一个数字的 {{jsxref("Number")}}，或为空</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{domxref("HTMLElement/change_event", "change")}} 和 {{domxref("HTMLElement/input_event", "input")}}</td>
  </tr>
  <tr>
   <td><strong>支持的公共属性</strong></td>
   <td><a href="/zh-CN/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#list"><code>list</code></a>、<a href="/zh-CN/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a> 和 <a href="/zh-CN/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a></td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>list</code>、<code>value</code> 和 <code>valueAsNumber</code></td>
  </tr>
    <tr>
      <td><strong>DOM 接口</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
  <tr>
   <td><strong>方法</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}、{{domxref("HTMLInputElement.stepUp", "stepUp()")}} 和 {{domxref("HTMLInputElement.stepDown", "stepDown()")}}</td>
  </tr>
 </tbody>
</table>

## 值

填写到输入框中的数值文字的 {{jsxref("Number")}} 表示。你可以通过在 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性中包含一个数字来设置输入框的默认值，如下所示：

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('值', 600, 40)}}

## 附加属性

除了 {{HTMLElement("input")}} 元素共有的属性外，数字输入还提供以下属性。

### `list`

list 属性的值是位于同一文档中的 {{HTMLElement("datalist")}} 元素的 {{domxref("Element.id", "id")}}。{{HTMLElement("datalist")}} 提供了可输入到当前输入框的一个预定义的值列表。列表中任何与 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 不兼容的值都不包括在建议选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

### `max`

允许值范围内的最大值。如果输入到元素中的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 超过此值，则元素将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果 `max` 属性的值不是数字，则元素没有最大值。

此值必须大于或等于 `min` 属性的值。

### `min`

允许值范围内的最小值。如果元素的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 小于此值，则该元素将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果为 `min` 指定的值不是有效数字，则输入没有最小值。

该值必须小于或等于 `max` 属性的值。

### `placeholder`

`placeholder` 属性是一个字符串，可向用户提供有关该字段中需要什么样的信息的简短提示。它应该是说明预期的数据类型的单词或短语，而不是说明性消息。文本中*不得*包含回车符或换行符。

如果控件的内容具有方向（{{Glossary("LTR")}} 或 {{Glossary("RTL")}}），但需要以相反的方向显示占位符，则可以使用 Unicode 双向算法来格式化字符，从而覆盖原有占位符的方向；请参见[如何针对双向文本使用 Unicode 控制符](https://www.w3.org/International/questions/qa-bidi-unicode-controls)获取更多信息。

> **备注：** 请尽可能避免使用 `placeholder` 属性，它在语义上没有其他解释表单的方式有用，并且可能会导致额外的问题。参见 [`<input>` 标签](/zh-CN/docs/Web/HTML/Element/input#标签)以获取更多信息。

### `readonly`

如果该布尔属性存在，意味着用户将不能编辑此字段。然而其 `value` 值仍然可以直接通过 JavaScript 代码设置 {{domxref("HTMLInputElement")}} 的 `value` 属性改变。

> **备注：** 由于只读字段不可以拥有值，`required` 不会对指定了 `readonly` 属性的字段起作用。

### `step`

`step` 属性指定了值必须满足的粒度，或者是下文描述的特殊值 `any`。值必须满足基础的步进值，才有效。如果指定了 [`min`](#min) 属性，则由 min 属性决定，否则，使用 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性的值，如果上述两个值都不存在，则提供适当的默认值。

字符串值 `any` 意味着不使用步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#max) 之外）。

> **备注：** 当用户输入的数据不符合步进配置时，{{Glossary("user agent","用户代理")}}可能会四舍五入到最近的有效值，当有两个同样接近的选项时，更倾向于正方向的数字。

`number` 输入的默认步进值为 `1`，且只允许数字输入——*除非*步进值不是数字。

## 使用 number 输入框

`number` 输入类型只能用于可增长的数字，特别是在使用按钮增减值有助于用户体验的时候。`number` 输入类型对于显示那些不能严格表示数字（可能只是碰巧包含数字）的值（例如邮政编码、信用卡号等）并不合适。对于非数字输入，请考虑使用不同的 input 类型，例如 [`<input type="tel">`](/zh-CN/docs/Web/HTML/Element/input/tel) 或其他包含 [`inputmode`](/zh-CN/docs/Web/HTML/Global_attributes#inputmode) 属性的 {{HTMLElement('input')}} 类型。

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type ="number">` 元素可以帮助简化构建在表单中输入数字的用户界面和逻辑。当你使用正确的 `type` 值 `number` 创建数字输入时，会自动验证你输入的文本是否为数字，而且通常会一同设置一组用于步进数字值的向上向下按钮。

> **警告：** 逻辑上，不应该向数字输入框输入数字以外的字符。某些浏览器允许这些不合法字符，另外一些浏览器不允许；请查看 [Firefox bug 1398528](https://bugzil.la/1398528)。

> **备注：** 记住，用户可以在幕后修改 HTML，因此网站*不得*使用简单的客户端验证来实现任何安全目的。你*必须*在服务器端验证所提供的值，以确保这些值没有任何安全问题。

此外，移动浏览器通过在用户尝试输入值时显示更适合输入数字的特殊键盘，进一步帮助用户体验。

### 一个简单的 number 输入框

在最基本的形式中，数字输入可以像这样实现：

```html
<label for="ticketNum">需要买票的数量：</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('一个简单的_number_输入框', 600, 40)}}

数字输入在为空的时候以及输入单个数字时被认为是有效的，否则是无效的。如果使用了 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性，则输入在空时不再被视为有效。

> **备注：** 任何数字都是可接受的值，只要它是[有效的浮点数](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number)（即不是 [NaN](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 或 [Infinity](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity)）。

### 占位符

有时，提供一个如何输入表单数据的上下文提示是非常友好的。尤其当页面所有{{HTMLElement("input")}} 元素都没有说明标签时，会非常重要。这就是使用**占位符**的原因。占位符是一个通常用于说明一个输入框的 `value` 应该如何输入的提示值，当元素的 `value` 为 `""` 时，该提示将出现在编辑框里面。一旦有数据输入到编辑框中，占位符就会消失；如果该框被清空，占位符将重新出现。

这里，我们有一个占位符为 "`Multiple of 10`" 的 `number` 输入框。请注意在编辑字段内容时占位符是如何消失的，又是如何重现的。

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('占位符', 600, 40)}}

### 控制步进大小

默认情况下，向上和向下按钮可以将值增加或减小 1。你可以使用 [`step`](/zh-CN/docs/Web/HTML/Element/input#step) 属性来更改此步长值。我们上面的例子中的占位符提示我们其值是 10 的倍数，所以设置 `step` 的值为 `10` 是合理的：

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('控制步进大小', 600, 40)}}

在这个例子中，你会发现上下箭头每次会将其值增加和减少 10，而不是 1。你仍然可以手动输入一个不是 10 的倍数的数字，但它会被认为是无效的。

### 指定最小和最大值

可以使用 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性指定该字段可以具有的最小值和最大值。例如，可以给我们的示例指定最小值为 `0`，最大值为 `100`：

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{ EmbedLiveSample('指定最小和最大值', 600, 40) }}

修改过后，你会发现点击上下按钮不会让你低于 0 或高于 100 . 可以在这些界限之外手动输入数字，但它将被视为无效。

### 允许小数值

数字输入的一个问题是，步长默认为 1——如果你尝试输入带小数的数字（例如“1.0”），则它将被视为无效。如果要输入一个需要小数的值，则需要修改 `step` 值（例如，`step="0.01"` 以允许 2 位小数）。这里有一个简单的例子：

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("允许小数值", 600, 40)}}

你可以看到这个例子允许 `0.0` 到 `10.0` 之间的任何值，小数点为 2 位。本例中，“9.52”是有效的，但“9.521”无效。

### 控制输入框大小

类型为 `number` 的 {{HTMLElement("input")}} 元素不支持像 [`size`](/zh-CN/docs/Web/HTML/Element/input#size) 之类的调整大小属性。你必须通过借助 [CSS](/zh-CN/docs/Web/CSS) 来改变它们的尺寸大小。

例如，要调整输入框的宽度为仅可输入 3 位数字的宽度，我们可以在 HTML 中添加一个 ID 并缩短很长的占位符文本（这个字段对于目前的示例来说太窄了），如下：

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

然后我们使用 `id` 选择器 `#number` 缩小元素的宽度：

```css
#number {
  width: 3em;
}
```

效果如下：

{{ EmbedLiveSample('控制输入框大小', 600, 40) }}

### 提供建议值

你可以通过指定 [`list`](/zh-CN/docs/Web/HTML/Element/input#list) 属性来提供一个默认选项列表，用户可以从中选择，该属性包含一个 {{HTMLElement("datalist")}} 的 ID 作为其值，而该 ID 又包含一个 {{HTMLElement("option")}} 元素的每个建议值；每个 `option` 的 `value` 就是数字输入框的相应建议值。

```html
<input id="ticketNum" type="number" name="ticketNum" list="defaultNumbers" />
<span class="validity"></span>

<datalist id="defaultNumbers">
  <option value="10045678"></option>
  <option value="103421"></option>
  <option value="11111111"></option>
  <option value="12345678"></option>
  <option value="12999922"></option>
</datalist>
```

{{EmbedLiveSample("提供建议值", 600, 40)}}

## 验证

我们已经提及了一些数字输入的验证特性，来做个回忆：

- `<input type="number">` 元素自动拒绝任何非数字输入（如果指定了 `required`，也会拒绝空的输入）。
- 你可以使用 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性来使得空的输入无效，也就是说，该输入框*必须*有值填入。
- 你可以使用 [`step`](/zh-CN/docs/Web/HTML/Element/input#step) 属性来将有效值限制在一系列步进值中（如 10 的倍数）。
- 你可以使用 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性来限制输入的最大与最小值。

以下示例展示了上面所述的所有特性，也使用了 CSS 来根据 `input` 的不同值，显示合法及不合法的图标：

```html
<form>
  <div>
    <label for="balloons">要购买气球的数量（10 的倍数）：</label>
    <input
      id="balloons"
      type="number"
      name="balloons"
      step="10"
      min="0"
      max="100"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" />
  </div>
</form>
```

{{EmbedLiveSample("验证", 600, 80)}}

请尝试以非法的值提交该表单，如空值、小于 0 或大于 100 的值、不是 10 的倍数的值、或非数字值——来观察一下浏览器如何提示这些错误信息。

该示例应用的 CSS 如下所示：

```css
div {
  margin-bottom: 10px;
}

input:invalid + span::after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  content: "✓";
  padding-left: 5px;
}
```

我们使用了 {{cssxref(":invalid")}} 和 {{cssxref(":valid")}} 伪类，在相邻的 {{htmlelement("span")}} 元素上显示一个适当的无效或有效图标作为生成内容，作为有效性的视觉指标。

我们把它放在一个单独的 `<span>`元素上，以增加灵活性；一些浏览器在某些类型的表单输入上不能很有效地显示生成的内容（请阅读 [`<input type="date">` 验证](/zh-CN/docs/Web/HTML/Element/input/date#Validation)一节的示例以了解）。

> **警告：** 客户端表单验证*不能*替代服务端验证。对于某人来说，对 HTML 进行调整以使其绕过验证或完全删除验证太容易了，甚至也可以完全绕开 HTML 并将数据直接提交到服务器。如果服务器端代码无法验证其接收到的数据，则在提交格式不正确的（或太大，类型错误……）的数据时，灾难可能会发生。

### 模式验证

`<input type="number">` 不支持 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性以验证输入值是否满足特定的正则表达式。

这样做的理由是，如果数字输入中包含除数字以外的任何内容，则不会有效，你可以使用 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性来限制有效数字的最小和最大数量（如上所述）。

## 示例

我们已经介绍过，默认情况下，增量是 `1`，你可以使用 [`step`](/zh-CN/docs/Web/HTML/Element/input#step) 属性来允许小数输入。

在下面的例子中，我们设置了一个用于输入用户身高的表单；它默认接受以米为单位的身高，但你可以点击相关按钮来改变表单，使其接受英尺和英寸。输入米的身高可以接受小数点后两位。

{{EmbedLiveSample("示例", 600, 150)}}

HTML 代码看起来像这样：

```html
<form>
  <div class="metersInputGroup">
    <label for="meters">Enter your height — meters:</label>
    <input
      id="meters"
      type="number"
      name="meters"
      step="0.01"
      min="0"
      placeholder="e.g. 1.78"
      required />
    <span class="validity"></span>
  </div>
  <div class="feetInputGroup" style="display: none;">
    <span>Enter your height — </span>
    <label for="feet">feet:</label>
    <input id="feet" type="number" name="feet" min="0" step="1" />
    <span class="validity"></span>
    <label for="inches">inches:</label>
    <input id="inches" type="number" name="inches" min="0" max="11" step="1" />
    <span class="validity"></span>
  </div>
  <div>
    <input
      type="button"
      class="meters"
      value="Enter height in feet and inches" />
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

你会看到，我们正在使用许多我们已经在前面的文章中看过的属性。由于我们想接受以厘米为单位的米值，我们将 `step` 值设置为 `0.01`，这样像 _1.78_ 这样的值就不会被视为无效。我们还为这个输入提供了一个占位符。

我们使用 `style="display: none;"` 隐藏了英尺和英寸的输入，所以米是默认的输入类型。

现在来看看 CSS 代码——跟之前的验证部分样式看起来是一样的，没什么可说的：

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

最后是一些 JavaScript 代码：

```js
const metersInputGroup = document.querySelector(".metersInputGroup");
const feetInputGroup = document.querySelector(".feetInputGroup");
const metersInput = document.querySelector("#meters");
const feetInput = document.querySelector("#feet");
const inchesInput = document.querySelector("#inches");
const switchBtn = document.querySelector('input[type="button"]');

switchBtn.addEventListener("click", () => {
  if (switchBtn.getAttribute("class") === "meters") {
    switchBtn.setAttribute("class", "feet");
    switchBtn.value = "Enter height in meters";

    metersInputGroup.style.display = "none";
    feetInputGroup.style.display = "block";

    feetInput.setAttribute("required", "");
    inchesInput.setAttribute("required", "");
    metersInput.removeAttribute("required");

    metersInput.value = "";
  } else {
    switchBtn.setAttribute("class", "meters");
    switchBtn.value = "Enter height in feet and inches";

    metersInputGroup.style.display = "block";
    feetInputGroup.style.display = "none";

    feetInput.removeAttribute("required");
    inchesInput.removeAttribute("required");
    metersInput.setAttribute("required", "");

    feetInput.value = "";
    inchesInput.value = "";
  }
});
```

在声明了一些变量之后，我们为按钮添加一个事件监听器来控制切换机制。这很简单，主要是改变按钮的类别和标签，并在按钮被按下时更新两组输入的显示值。请注意，我们不是在米和英尺/英寸之间来回转换，现实生活中的网络应用可能会这么做。

> **备注：** 请注意，当用户点击按钮时，我们从隐藏的输入中移除 `required` 属性，并清空 `value` 属性。这样我们就可以在两个输入组都没有填写的情况下提交表单，而不会提交那些我们不想提交的数据。如果我们不这样做，你就必须同时填入英尺/英寸**和**米来提交表单了！

## 无障碍

`<input type="number">` 元素的隐含 [role](/zh-CN/docs/Web/Accessibility/ARIA/Roles) 是 [`spinbutton`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/spinbutton_role) 。如果 spinbutton 对你的表单控件来说不是一个重要的功能，那就*不要*使用 `type="number"`；此时，请使用带有 [`pattern`](/zh-CN/docs/Web/HTML/Attributes/pattern) 属性的 [`inputmode="numeric"`](/zh-CN/docs/Web/HTML/Global_attributes/inputmode)，将字符限制在数字和相关字符。如果坚持使用 `<input type="number">`，用户在试图做其他事情时，有可能意外地增加一个数字。此外，如果用户试图输入不是数字的东西，也没有明确的反馈说明他们做错了什么。

也可以考虑使用 [`autocomplete`](/zh-CN/docs/Web/HTML/Attributes/autocomplete) 属性，帮助用户更快完成表单，减少出错的机会。例如，要在一个邮编字段上启用自动填写功能，请设置 `autocomplete="postal-code"`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 表单指南](/zh-CN/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/zh-CN/docs/Web/HTML/Element/input/tel)
- [表单控件 CSS 兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
- [文章：为什么 Gov.UK 为数字输入改变了输入类型](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
