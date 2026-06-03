---
title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
---

**`range`** 类型的 {{HTMLElement("input")}} 元素允许用户指定一个数值，该数值必须不小于给定值，并且不得大于另一个给定值。但是，其精确值并不重要。通常使用滑块或拨号控件而不是像 {{HTMLElement('input/number', 'number')}} 输入类型这样的文本输入框来表示。

由于这种小部件不精确，因此除非控件的确切值不重要，否则通常不应使用它。

{{InteractiveExample("HTML Demo: &lt;input type=&quot;range&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Audio settings:</p>

<div>
  <input type="range" id="volume" name="volume" min="0" max="11" />
  <label for="volume">Volume</label>
</div>

<div>
  <input
    type="range"
    id="cowbell"
    name="cowbell"
    min="0"
    max="100"
    value="90"
    step="10" />
  <label for="cowbell">Cowbell</label>
</div>
```

```css interactive-example
p,
label {
  font:
    1rem "Fira Sans",
    sans-serif;
}

input {
  margin: 0.4rem;
}
```

如果用户的浏览器不支持 `range` 类型，它将回退并将其视为 `{{HTMLElement('input/text', 'text')}}` 输入。

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>一个代表已选择数值的字符串表示，使用 {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}} 来将此值作为数值获取。</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{domxref("HTMLElement/change_event", "change")}} 和 {{domxref("Element/input_event", "input")}}</td>
  </tr>
  <tr>
   <td><strong>支持的常用属性</strong></td>
   <td><a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#max"><code>max</code></a>、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#min"><code>min</code></a> 和 <a href="/zh-CN/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a></td>
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
   <td>{{domxref("HTMLInputElement.stepDown", "stepDown()")}} 和 {{domxref("HTMLInputElement.stepUp", "stepUp()")}}</td>
  </tr>
 </tbody>
</table>

### 验证方式

没有可用的模式验证。但是，执行以下形式的自动验证：

- 如果将 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value) 设置为无法转换为有效浮点数的值，则验证将失败，因为输入框的值是错误的。
- 该值不得小于 [`min`](/zh-CN/docs/Web/HTML/Reference/Elements/input#min)，默认值为 0。
- 该值将不大于 [`max`](/zh-CN/docs/Web/HTML/Reference/Elements/input#max)，默认值为 100。
- 该值将是 [`step`](/zh-CN/docs/Web/HTML/Reference/Elements/input#step) 的整倍数，默认值为 1。

### 值

[`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value) 属性包含所选数字的字符串表示形式。该值绝不能为空字符串（`""`）。默认值介于指定的最小值和最大值之间，除非最大值实际上小于最小值，在这种情况下，默认值将设置 `min` 属性的值。确定默认值的算法是：

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

如果尝试将值设置为小于最小值，则将其设置为最小值。类似地，尝试将值设置为大于最大值会导致将其设置为最大值。

## 其他属性

除了所有 {{HTMLElement("input")}} 元素共享的属性之外，range 输入还提供以下属性。

### list

list 属性指定了一个 {{HTMLElement("datalist")}} 元素的 {{domxref("Element.id", "id")}}，用来提供输入建议。{{HTMLElement("datalist")}} 提供了一个预定义的值列表，向用户建议这个输入。列表中任何与 type 不兼容的值都不包括在建议选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

有关在支持的浏览器中如何表示范围中的选项的示例，请参见下面的[添加井号标记](#添加井号标记)。

### max

允许值范围内的最大值。如果输入到元素中的 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value) 超过此值，则该元素将无法通过[约束验证](/zh-CN/docs/Web/HTML/Guides/Constraint_validation)。如果 [`max`](/zh-CN/docs/Web/HTML/Reference/Attributes/max) 属性的值不是数字，则元素没有最大值。

此值必须大于或等于 `min` 属性的值。请参见 HTML [`max`](/zh-CN/docs/Web/HTML/Reference/Attributes/max) 属性。

### min

允许值范围内的最小值。如果元素的[`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value) 小于此值，则该元素将无法通过[约束验证](/zh-CN/docs/Web/HTML/Guides/Constraint_validation)。如果 `min` 指定的值不是有效数字，则输入没有最小值。

该值必须小于或等于 [`max`](/zh-CN/docs/Web/HTML/Reference/Attributes/max) 属性的值。请参见 HTML [`min`](/zh-CN/docs/Web/HTML/Reference/Attributes/min) 属性。

### step

`step` 属性指定了值必须满足的粒度，或者是下文描述的特殊值 `any`。值必须满足基础的步进值，才有效。如果指定了 [`min`](#min) 属性，则由 min 属性决定，否则，使用 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value) 属性的值，如果上述两个值都不存在，则提供适当的默认值。

字符串值 `any` 意味着不使用步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#min) 之外）。

> [!NOTE]
> 当用户输入的数据不符合步进配置时，{{Glossary("user agent","用户代理")}}可能会四舍五入到最近的有效值，当有两个同样接近的选项时，更倾向于正方向的数字。

`range` 输入的默认步进值为 1，*除非*步进基数不是整数，否则仅允许输入整数；否则，默认值为 1。例如，如果将 `min` 设置为 -10 并将 `value` 设置为 1.5，则 1 的 `step` 将只允许正方向上的值为 1.5、2.5、3.5 等，以及负方向上的值为 -0.5，-1.5，-2.5 等。请参阅 [HTML `step` 属性](/zh-CN/docs/Web/HTML/Reference/Attributes/step)。

## 非标准属性

### orient

类似于影响 {{htmlelement('progress')}} 和 {{htmlelement('meter')}} 元素的非标准 CSS 属性 -moz-orient，`orient` 属性定义范围滑块的方向。值包括 `horizontal` 和 `vertical`，分别代表范围的水平呈现和垂直呈现。

> [!NOTE]
> 以下输入属性不适用于 range 输入：`accept`、`alt`、`checked`、`dirname`、`formaction`、`formenctype`、`formmethod`、`formnovalidate`、`formtarget`、`height`、`maxlength`、`minlength`、`multiple`、`pattern`、`placeholder`、`readonly`、`required`、`size`、`src` 和 `width`。如果包含了这些属性中的任何一个，都将被忽略。

## 示例

虽然 `number` 类型允许用户输入带有可选约束的数字，以强制其值介于最小值和最大值之间，但它确实要求输入特定值。`range` 输入类型可以在用户甚至不关心或不知道所选的特定数字值是什么的情况下，向用户询问一个值。

常用范围输入的一些情况示例：

- 音频控件（例如音量和平衡）或过滤器控件。
- 颜色配置控件，例如颜色通道、透明度、亮度等。
- 游戏配置控件，例如难度、可见性距离、世界范围等等。
- 密码管理员生成的密码的密码长度。

通常，如果用户对最小值和最大值之间的距离的百分比比实际数字本身更感兴趣，则 range 输入是一个不错的选择。例如，在家庭立体声音量控制的情况下，用户通常会想到“将音量设置为最大音量的一半”而不是“将音量设置为 0.5”。

### 指定最小值和最大值

默认情况下，最小值为 0，最大值为 100。如果这不是想要的值，则可以通过更改 [`min`](/zh-CN/docs/Web/HTML/Reference/Elements/input#min) 和/或 [`max`](/zh-CN/docs/Web/HTML/Reference/Elements/input#max) 属性。这些可以是任何浮点值。

例如，要要求用户输入介于 -10 和 10 之间的值，可以使用：

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("指定最小值和最大值", 600, 40)}}

### 设置值的粒度

默认情况下，粒度为 1，表示该值始终是整数。可以通过更改 [`step`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#step) 属性控制粒度。例如，如果需要一个介于 5 到 10 之间的值（精确到两位小数），则应将 `step` 的值设置为 0.01：

#### 设置 step 属性

```html
<input type="range" min="5" max="10" step="0.01" />
```

{{EmbedLiveSample("设置值的粒度", 600, 40)}}

#### 设置 step 为“any”

如果要接受任何值而不论扩展到小数点后多少位，可以为 [`step`](/zh-CN/docs/Web/HTML/Reference/Elements/input#step) 属性指定值 `any`。

```html
<input type="range" min="0" max="3.14" step="any" />
```

{{EmbedLiveSample("设置 step 为“any”", 600, 40)}}

该示例使用户可以选择 0 到 π 之间的任何值，而对所选值的小数部分没有任何限制。

### 添加井号标记

为了在 range 控制器中添加井号标记，要包含 `list` 属性，赋予它某个定义了一系列控件上的井号标记 {{HTMLElement("datalist")}} 元素的 `id`。每个点使用带有 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/option#value) 属性的 {{HTMLElement("option")}} 元素设置需要添加标记的点。

#### HTML

```html
<label for="temp">选择一个适宜的温度：</label><br />
<input type="range" id="temp" name="temp" list="tickmarks" />

<datalist id="tickmarks">
  <option value="0"></option>
  <option value="25"></option>
  <option value="50"></option>
  <option value="75"></option>
  <option value="100"></option>
</datalist>
```

#### 结果

{{EmbedLiveSample("添加井号标记")}}

### 添加标签

你可以通过给 `<option>` 元素赋予 `label` 属性来标记这些井号标记，然而，你需要使用 CSS 令标签显示且定位正确。以下是可以实现这点的方法之一。

#### HTML

```html
<label for="temp">选择一个适宜的温度：</label><br />
<input type="range" id="temp" name="temp" list="tickmarks" />

<datalist id="tickmarks">
  <option value="0" label="很冷！"></option>
  <option value="25" label="凉爽"></option>
  <option value="50" label="适中"></option>
  <option value="75" label="变得暖和了！"></option>
  <option value="100" label="很热！"></option>
</datalist>
```

#### CSS

```css
datalist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  writing-mode: vertical-lr;
  width: 200px;
}

option {
  padding: 0;
}

input[type="range"] {
  width: 200px;
  margin: 0;
}
```

#### 结果

{{EmbedLiveSample("添加标签")}}

### 创建垂直 range 控件

默认情况下，浏览器将 range 输入渲染为可左右滑动的旋钮。

要创建一个垂直滑动的 range 输入，请将 CSS {{cssxref('appearance')}} 属性设置为 `slider-vertical`，并包含 Firefox 的非标准 `orient` 属性。

#### 水平 range 控件

考虑以下 range 控件：

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1" />
```

{{EmbedLiveSample("水平 range 控件", 200, 200)}}

该控件是水平的（至少在大部分主流浏览器中，其他的根据情况会有所不同）。

#### 使用 appearance 属性

{{cssxref('appearance')}} 属性包含了一个非标准值 `slider-vertical` 使得滑块垂直。

我们使用与前例相同的 HTML 代码：

```html
<input type="range" min="0" max="11" value="7" step="1" />
```

我们以 range 类型的 input 作为目标：

```css
input[type="range"] {
  appearance: slider-vertical;
}
```

{{EmbedLiveSample("使用 appearance 属性", 200, 200)}}

#### 使用 orient 属性

仅在 Firefox 中，有一个非标准的 `orient` 属性。

使用与前例类似的代码，只是添加一个值为 `vertical` 的该属性：

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical" />
```

{{EmbedLiveSample("使用 orient 属性", 200, 200)}}

#### writing-mode: bt-lr

{{cssxref('writing-mode')}} 属性一般不应用于改变文本方向以达到国际化或本地化的目的，但可用于特殊效果。

我们使用与前例类似的 HTML 代码：

```html
<input type="range" min="0" max="11" value="7" step="1" />
```

我们以 range 类型的 input 作为目标，将写作模式从默认改为 `bt-lr`（从底部向上，从左到右）：

```css
input[type="range"] {
  writing-mode: bt-lr;
}
```

{{EmbedLiveSample("writing-mode_bt-lr", 200, 200)}}

#### 将它们放在一起

由于以上这些示例会在不同的浏览器中奏效，你可以将它们放在一起，使得纵向 range 输入可以跨浏览器工作：

我们会在 Firefox 浏览器中保持使用 `orient` 属性的 `vertical` 值：

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical" />
```

我们只对 range 类型的 input 施加 CSS 样式，将写作模式从默认改为 `bt-lr`，或 bottom-to-top 和 left-to-right（对于 Edge 和 Internet Explorer 浏览器）。对 Blink 和 Webkit 浏览器可以添加 `appearance: slider-vertical` 配置：

```css
input[type="range"] {
  writing-mode: bt-lr;
  appearance: slider-vertical;
}
```

{{EmbedLiveSample("将它们放在一起", 200, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参考

- [HTML 表单](/zh-CN/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} 元素和其基于的 {{domxref("HTMLInputElement")}} 接口
- [`<input type="number">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/number)
- {{domxref('validityState.rangeOverflow')}} 和 {{domxref('validityState.rangeUnderflow')}}
- [使用 ConstantSourceNode 控制多个参数](/zh-CN/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [设置范围元素的样式](https://css-tricks.com/sliding-nightmare-understanding-range-input)
- [表单控件 CSS 兼容性列表](/zh-CN/docs/Learn_web_development/Extensions/Forms)
