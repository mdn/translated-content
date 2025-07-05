---
title: Window：orientationchange 事件
slug: Web/API/Window/orientationchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{Deprecated_Header}}

當裝置的方向改變時，會觸發 `orientationchange` 事件。

此事件不可取消且不會冒泡。

此事件已被棄用。請改為監聽 {{domxref("ScreenOrientation")}} 介面的 {{domxref("ScreenOrientation.change_event", "change")}} 事件。

## 語法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名稱，或設定事件處理器屬性。

```js-nolint
addEventListener("orientationchange", (event) => { })

onorientationchange = (event) => { }
```

## 事件類型

一個通用的 {{domxref("Event")}}。

## 範例

你可以在 {{domxref("EventTarget/addEventListener", "addEventListener")}} 方法中使用 `orientationchange` 事件：

```js
window.addEventListener("orientationchange", (event) => {
  console.log(`裝置現在的方向是 ${event.target.screen.orientation.angle}`);
});
```

或使用 `onorientationchange` 事件處理器屬性：

```js
window.onorientationchange = (event) => {
  console.log(`裝置現在的方向是 ${event.target.screen.orientation.angle}`);
};
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
