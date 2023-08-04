---
title: orientationchange
slug: Web/API/Window/orientationchange_event
---

`orientationchange`事件在设备的纵横方向改变时触发。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler</th>
      <td>
        {{domxref("Window/onorientationchange", "onorientationchange")}}
      </td>
    </tr>
  </tbody>
</table>

## 示例

你可以在{{domxref("EventTarget/addEventListener", "addEventListener")}} 方法中使用 `orientationchange` 事件：

```js
window.addEventListener("orientationchange", function () {
  console.log(
    "the orientation of the device is now " + screen.orientation.angle,
  );
});
```

或者使用 {{domxref("Window/onorientationchange", "onorientationchange")}} 事件处理程序属性：

```js
window.onorientationchange = function () {
  console.log(
    "the orientation of the device is now " + screen.orientation.angle,
  );
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
