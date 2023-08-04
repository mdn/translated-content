---
title: "Window: orientationchange event"
slug: Web/API/Window/orientationchange_event
---

{{APIRef}}

`orientationchange` 事件在設備方向改變時被觸發。

| 冒泡       | No                                                                      |
| ---------- | ----------------------------------------------------------------------- |
| 可取消     | No                                                                      |
| 介面       | {{domxref("Event")}}                                                    |
| 事件處理器 | [`onorientationchange`](/zh-TW/docs/Web/API/Window/onorientationchange) |

## 範例

可於 [`addEventListener`](/zh-TW/docs/Web/API/EventTarget/addEventListener) 方法中使用 `abort` 事件：

```js
window.addEventListener("orientationchange", function () {
  console.log(
    "the orientation of the device is now " + screen.orientation.angle,
  );
});
```

或使用 [`onorientationchange`](/zh-TW/docs/Web/API/Window/onorientationchange) 事件處理器屬性：

```js
window.onorientationchange = function () {
  console.log(
    "the orientation of the device is now " + screen.orientation.angle,
  );
};
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
