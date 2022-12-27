---
title: Screen
slug: Web/API/Screen
---

{{APIRef("CSSOM View")}}

`Screen` 介面表示了一個用戶端螢幕，通常是指呈現目前頁面的視窗。

一般來說為顯示目前網頁的視窗，可以透過 `window.screen` 取得物件實體。

## 屬性

- {{domxref("Screen.availTop")}}
  - : Specifies the y-coordinate of the first pixel that is not allocated to permanent or semipermanent user interface features.
- {{domxref("Screen.availLeft")}}
  - : Returns the first available pixel available from the left side of the screen.
- {{domxref("Screen.availHeight")}}
  - : Specifies the height of the screen, in pixels, minus permanent or semipermanent user interface features displayed by the operating system, such as the Taskbar on Windows.
- {{domxref("Screen.availWidth")}}
  - : Returns the amount of horizontal space in pixels available to the window.
- {{domxref("Screen.colorDepth")}}
  - : Returns the color depth of the screen.
- {{domxref("Screen.height")}}
  - : Returns the height of the screen in pixels.
- {{domxref("Screen.left")}}
  - : Returns the distance in pixels from the left side of the main screen to the left side of the current screen.
- {{domxref("Screen.orientation")}}
  - : Returns the current orientation of the screen.
- {{domxref("Screen.pixelDepth")}}
  - : Gets the bit depth of the screen.
- {{domxref("Screen.top")}}
  - : Returns the distance in pixels from the top side of the current screen.
- {{domxref("Screen.width")}}
  - : Returns the width of the screen.
- {{domxref("Screen.mozEnabled")}}
  - : Boolean. Setting to false will turn off the device's screen.
- {{domxref("Screen.mozBrightness")}}
  - : Controls the brightness of a device's screen. A double between 0 and 1.0 is expected.

### 事件處理器

- {{domxref("Screen.onorientationchange")}}
  - : A handler for the {{event("orientationchange")}} events.

## 方法

- {{domxref("Screen.lockOrientation")}}
  - : Lock the screen orientation (only works in fullscreen or for installed apps)
- {{domxref("Screen.unlockOrientation")}}
  - : Unlock the screen orientation (only works in fullscreen or for installed apps)

Methods inherit from {{domxref("EventTarget")}}

{{page("/en-US/docs/Web/API/EventTarget","Methods")}}

## 範例

```js
if (screen.pixelDepth < 8) {
  // use low-color version of page
} else {
  // use regular, colorful page
}
```

## 規範

{{Specifications}}
