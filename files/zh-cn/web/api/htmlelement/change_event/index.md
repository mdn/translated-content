---
title: change
slug: Web/API/HTMLElement/change_event
---

{{APIRef}}

当用户更改{{HTMLElement("input")}}、{{HTMLElement("select")}}和{{HTMLElement("textarea")}} 元素的值并提交这个更改时，`change` 事件在这些元素上触发。和 {{domxref("HTMLElement/input_event", "input")}} 事件不一样，`change` 事件并不是每次元素的 `value` 改变时都会触发。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">冒泡</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">可取消</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">事件处理程序属性</th>
      <td>
        {{domxref("GlobalEventHandlers/onchange", "onchange")}}
      </td>
    </tr>
  </tbody>
</table>

基于表单元素的类型和用户对标签的操作的不同，`change` 事件触发的时机也不同：

- 当元素是 `:checked` 状态时（通过点击或者使用键盘），见于 `{{HTMLElement('input/radio', '&lt;input type="radio"&gt;')}}` 和 `{{HTMLElement('input/checkbox', '&lt;input type="checkbox"&gt;')}}`；
- 当用户显式提交改变时（例如：点击了 {{HTMLElement("select")}}中的一个选项，从 `{{HTMLElement('input/date', '&lt;input type="date"&gt;')}}` 标签选择了一个日期，通过 `{{HTMLElement('input/file', '&lt;input type="file"&gt;')}}` 标签上传了一个文件等）；
- 当标签的值被修改并且失去焦点后，但未提交时（例如：对{{HTMLElement("textarea")}} 或者 `{{HTMLElement('input/text', '&lt;input type="text"&gt;')}}`的值进行编辑后）。

## 示例

### \<select> 元素

#### HTML

```
<label>Choose an ice cream flavor:
  <select class="ice-cream" name="ice-cream">
    <option value="">Select One …</option>
    <option value="chocolate">Chocolate</option>
    <option value="sardine">Sardine</option>
    <option value="vanilla">Vanilla</option>
  </select>
</label>

<div class="result"></div>
```

```
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

```
const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});
```

#### 结果

### 文本输入元素

对于一些元素，包括 `<input type="text">`，`change` 事件在控件失去焦点前都不会触发。试一下在下面的输入框输入一些文字，然后点击输入框外的地方来触发事件。

#### HTML

```
<input placeholder="Enter some text" name="name"/>
<p id="log"></p>
```

#### JavaScript

```
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### 结果

## 浏览器兼容性

{{Compat}}

对于一些特定类型的交互是否要触发 `change` 事件，不同浏览器的意见并不总是一致的。例如在 {{HTMLElement("select")}} 元素中使用键盘导航在 Gecko 中不会触发 `change` 事件，直到用户按下 Enter 键或将焦点从 `<select>` 上移走（参见 {{bug("126379")}}）。但从 Firefox 63（Quantum）开始，这个行为在已经在主流浏览器中达成一致。

## 参见

{{domxref("NetworkInformation.connection")}} fires the `change` event when the connection information changes.
