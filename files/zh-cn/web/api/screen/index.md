---
title: Screen
slug: Web/API/Screen
---

{{APIRef("CSSOM View")}}

`Screen` 接口表示一个屏幕窗口，往往指的是当前正在被渲染的 window 对象，可以使用 `window.screen` 获取它。

请注意：由浏览器决定提供屏幕对象，此对象一般通过当前浏览器窗口活动状态动态检测来得到。

## 属性

- {{domxref("Screen.availTop")}}
  - : Specifies the y-coordinate of the first pixel that is not allocated to permanent or semipermanent user interface features.
- {{domxref("Screen.availLeft")}}
  - : 返回屏幕左边边界的第一个像素点
- {{domxref("Screen.availHeight")}}
  - : Specifies the height of the screen, in pixels, minus permanent or semipermanent user interface features displayed by the operating system, such as the Taskbar on Windows.
- {{domxref("Screen.availWidth")}}
  - : 返回窗口中水平方向可用空间的像素值。
- {{domxref("Screen.colorDepth")}}
  - : 返回屏幕的色彩深度。
- {{domxref("Screen.height")}}
  - : 以像素为单位返回屏幕的高度。
- {{domxref("Screen.left")}}
  - : 返回从最左边界到当前屏幕的像素值。
- {{domxref("Screen.orientation")}}
  - : 返回当前屏幕的转向。
- {{domxref("Screen.pixelDepth")}}
  - : 获取屏幕的像素点
- {{domxref("Screen.top")}}
  - : 返回最上边界到当前屏幕的像素值。
- {{domxref("Screen.width")}}
  - : 返回屏幕的宽度。
- {{domxref("Screen.mozEnabled")}}
  - : 布尔值。如果设置为 false 将关闭设备的屏幕。
- {{domxref("Screen.mozBrightness")}}
  - : 控制设备屏幕的亮度。期望参数是 0-1.0 之间的浮点数。

### Events handler

- {{domxref("Screen.onorientationchange")}}
  - : 对[`orientationchange`](/zh-CN/docs/Web/API/Window/orientationchange_event) 事件的时间处理器。

## 方法

_方法继承自其父接口 {{domxref("EventTarget")}}。_

- {{domxref("Screen.lockOrientation")}} {{Deprecated_Inline}}
  - : 锁定屏幕转向（仅在全屏或者已安装的 APP 中生效）
- {{domxref("Screen.unlockOrientation")}} {{Deprecated_Inline}}
  - : 解锁屏幕转向（仅在全屏或者已安装的 APP 中生效）

## 示例

```js
if (screen.pixelDepth < 8) {
  // use low-color version of page
} else {
  // use regular, colorful page
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
