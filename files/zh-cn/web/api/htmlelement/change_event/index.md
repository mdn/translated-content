---
title: HTML 元素：change 事件
slug: Web/API/HTMLElement/change_event
---

{{APIRef}}

当用户更改 {{HTMLElement("input")}}、{{HTMLElement("select")}} 和 {{HTMLElement("textarea")}} 元素的值时，`change` 事件在这些元素上触发。和 {{domxref("HTMLElement/input_event", "input")}} 事件不同的是，并不是每次元素的 `value` 改变时都会触发 `change` 事件。

基于表单元素的类型和用户对元素的操作的不同，`change` 事件触发的时机也不同：

- 当 `{{HTMLElement('input/checkbox', '&lt;input type="checkbox"&gt;')}}` 元素被选中或取消选中时（通过点击或使用键盘）；
- 当 `{{HTMLElement('input/radio', '&lt;input type="radio"&gt;')}}` 元素被选中时（但不是取消选中时）；
- 当用户显式提交改变时（例如：通过鼠标点击了 {{HTMLElement("select")}} 中的一个下拉选项，通过 `{{HTMLElement('input/date', '&lt;input type="date"&gt;')}}` 元素选择了一个日期，通过 `{{HTMLElement('input/file', '&lt;input type="file"&gt;')}}` 元素上传了一个文件等）；
- 当标签的值被修改并且失去焦点后，但未提交时（例如：对{{HTMLElement("textarea")}}、 `{{HTMLElement('input/text', 'text')}}`、`{{HTMLElement('input/search', 'search')}}`、`{{HTMLElement('input/url', 'url')}}`、`{{HTMLElement('input/tel', 'tel')}}`、`{{HTMLElement('input/email', 'email')}}` 或 `{{HTMLElement('input/password', 'password')}}` 类型的 {{HTMLElement('input')}} 元素进行编辑后）。

HTML 标准列出了[应该触发 `change` 事件的 `<input>` 类型](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply)。

## 语法

在方法（如 {{domxref("EventTarget.addEventListener", "addEventListener()")}}）中使用事件的名称，或设置事件处理器属性。

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## 事件类型

通用 {{domxref("Event")}}。

## 示例

### \<select> 元素

#### HTML

```html
<label>
  选择一种冰淇淋口味：
  <select class="ice-cream" name="ice-cream">
    <option value="">选择一个...</option>
    <option value="chocolate">巧克力</option>
    <option value="sardine">沙丁鱼</option>
    <option value="vanilla">香草</option>
  </select>
</label>

<div class="result"></div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "select result";
}

select {
  grid-area: select;
}

.result {
  grid-area: result;
}
```

#### JavaScript

```js
const selectElement = document.querySelector(".ice-cream");

selectElement.addEventListener("change", (event) => {
  const result = document.querySelector(".result");
  result.textContent = `你喜欢 ${event.target.value}`;
});
```

#### 结果

{{ EmbedLiveSample('select_元素', '100%', '75px') }}

### 文本输入元素

对于像 `<input type="text">` 这样的元素，`change` 事件在控件失去焦点前都不会触发。试一下在下面的输入框输入一些文字，然后点击输入框外的地方来触发事件。

#### HTML

```html
<input placeholder="输入一些文本" name="name" />
<p id="log"></p>
```

#### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("change", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### 结果

{{ EmbedLiveSample('文本输入元素', '100%', '90px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

对于一些特定类型的交互是否要触发 `change` 事件，不同浏览器的意见并不总是一致的。例如，在 Gecko 的 {{HTMLElement("select")}} 元素中使用键盘导航，除非用户按下 Enter 键或将焦点从 `<select>` 上移走（参见 [Firefox bug 126379](https://bugzil.la/126379)），否则不会触发 `change` 事件。但从 Firefox 63（Quantum）开始，这个行为在已经在主流浏览器中达成一致。
