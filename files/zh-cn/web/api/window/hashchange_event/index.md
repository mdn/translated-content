---
title: "Window: hashchange event"
slug: Web/API/Window/hashchange_event
---

{{APIRef}}

当 URL 的片段标识符更改时，将触发**hashchange**事件 (跟在＃符号后面的 URL 部分，包括＃符号)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("HashChangeEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler</th>
      <td>
        {{domxref("WindowEventHandlers/onhashchange", "onhashchange")}}
      </td>
    </tr>
  </tbody>
</table>

## 示例

你可以在 {{domxref("EventTarget/addEventListener", "addEventListener")}} 方法中使用 `hashchange` 事件：

```js
window.addEventListener(
  "hashchange",
  function () {
    console.log("The hash has changed!");
  },
  false,
);
```

或使用 `onhashchange` 事件处理程序属性：

```js
function locationHashChanged() {
  if (location.hash === "#cool-feature") {
    console.log("You're visiting a cool feature!");
  }
}

window.onhashchange = locationHashChanged;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window/popstate_event", "popstate")}}
- {{domxref("WindowEventHandlers.onhashchange")}}
