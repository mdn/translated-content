---
title: "Element:  键盘按下事件"
slug: Web/API/Element/keydown_event
---

{{APIRef}}

**`keydown`**事件触发于键盘按键按下的时候。

与[`keypress`](/zh-CN/docs/Web/API/Element/keypress_event) 事件不同的是，所有按键均会触发`keydown`事件，无论这些按键是否会产生字符值。

<table class="properties">
  <thead></thead>
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("KeyboardEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onkeydown", "onkeydown")}}
      </td>
    </tr>
  </tbody>
</table>

`keydown` 与 [`keyup`](/zh-CN/docs/Web/API/Element/keyup_event) 事件捕获了键盘按键的操作，而 `keypress` 反映了具体输入某个字符的值。比如，小写"a" 在`keydown` 和 `keyup`事件中输出的是大写 A 的 Unicode 编码 65，但是在`keypress`中输出的就是小写"a"的 Unicode 编码 97。大写 "A"在这些事件中输出的都是 Unicode 编码 65。

键盘事件只能由 `<inputs>`, `<textarea>` 以及任何具有 `contentEditable` 或 `tabindex="-1"`属性的组件触发。

自 Firefox 65 起， `keydown` 与 [`keyup`](/zh-CN/docs/Web/API/Element/keyup_event) 事件会在 IME（输入法编辑器）复合事件中被触发，目的是为了提升 CJKT（中日韩台地区）用户跨浏览器性能，([Firefox bug 354358](https://bugzil.la/354358)). 若要忽略复合事件中所有 `keydown` 事件，可以按照如下代码修改 (229 是某个在 IME 中触发的键盘事件对应的 `keyCode`):

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

## 示例

### addEventListener keydown 示例

这个例子展示了当你在{{HtmlElement("input")}}元素中按下一个按键时， {{domxref("KeyboardEvent.code")}} 的取值

```html
<input placeholder="Click here, then press down a key." size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keydown_示例")}}

### onkeydown 示例

```js
input.onkeydown = logKey;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`input`](/zh-CN/docs/Web/API/HTMLElement/input_event)
- [`keypress`](/zh-CN/docs/Web/API/Element/keypress_event)
- [`keyup`](/zh-CN/docs/Web/API/Element/keyup_event)
- [Document `keydown` event](/zh-CN/docs/Web/API/Document/keydown_event)
