---
title: "Element: keyup event"
slug: Web/API/Element/keyup_event
---

{{APIRef}}

**`keyup`** 事件在按键被松开时触发。

<table class="properties">
  <thead></thead>
  <tbody>
    <tr>
      <th>冒泡</th>
      <td>是</td>
    </tr>
    <tr>
      <th>可取消</th>
      <td>是</td>
    </tr>
    <tr>
      <th>接口</th>
      <td>{{domxref("KeyboardEvent")}}</td>
    </tr>
    <tr>
      <th>事件处理函数属性</th>
      <td>
        {{domxref("GlobalEventHandlers.onkeyup", "onkeyup")}}
      </td>
    </tr>
  </tbody>
</table>

[`keydown`](/zh-CN/docs/Web/API/Element/keydown_event) 和 `keyup` 事件提供指出哪个键被按下的代码，而 `keypress` 指出哪些字符被输入。例如，小写字母“a”在 `keydown` 和 `keyup` 时会被报告为 65，但在 `keypress` 时为 97。所有事件均将大写字母“A”报告为 65。

从 Firefox 65 开始，`keyup` 和 [`keydown`](/zh-CN/docs/Web/API/Element/keydown_event) 事件在 IME 编辑时也会被触发，以提升 CJKT 用户的跨浏览器兼容性（[Firefox bug 354358](https://bugzil.la/354358)）。要忽略 IME 编辑时的所有 `keyup` 事件，请执行以下操作（229 是一个关于被 IME 加工过的事件的 `keyCode` 的特殊值）：

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

## 例子

### addEventListener keyup 例子

在这个例子中，每当你在 {{HtmlElement("input")}} 元素里松开一个键，将会打印 {{domxref("KeyboardEvent.code")}} 的值。

```html
<input placeholder="Click here, then press and release a key." size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keyup", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keyup_例子")}}

### 等效的 onkeyup

```js
input.onkeyup = logKey;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- [`input`](/zh-CN/docs/Web/API/HTMLElement/input_event)
- [`keydown`](/zh-CN/docs/Web/API/Element/keydown_event)
- [`keypress`](/zh-CN/docs/Web/API/Element/keypress_event)
- [Document `keyup` event](/zh-CN/docs/Web/API/Document/keyup_event)
