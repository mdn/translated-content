---
title: Screen.lockOrientation()
slug: Web/API/Screen/lockOrientation
---

{{APIRef("CSSOM View")}}{{SeeCompatTable}}

`lockOrientation` 此方法会把屏幕锁定为指定的方向。

> **备注：** 此方法仅适用于已安装的 Web apps 或 [全屏模式](/zh-CN/docs/Web/Guide/DOM/Using_full_screen_mode) 的 Web 页面。

## 使用方法

```js
lockedAllowed = window.screen.lockOrientation(orientation);
```

### 参数介绍

- _orientation_
  - : 需要锁定屏幕的方向。这个参数是一个字符串或者是一个由字符串组成的数组。通过多个字符串可以让屏幕只在选定的方向上进行旋转。

以下的字符串即表示你也许会指定的一些可能的方向。

- `portrait-primary`
  - : 它表示屏幕处于主要的肖像模式时的方向。如果设备处于正常位置且该位置处于纵向位置，或设备的正常位置处于横向并且设备保持顺时针转动 90°，则会在主肖像模式下考虑屏幕。正常的位置是依赖于设备的。
- `portrait-secondary`
  - : 它表示屏幕处于辅助肖像模式时的方向。如果设备与正常位置保持 180°，并且该位置处于纵向位置，或者设备的正常位置处于横向位置，并且持有的设备逆时针转动 90°，则屏幕将处于辅助人像模式。正常的位置是依赖于设备的。
- `landscape-primary`
  - : 它代表了屏幕处于主要风景模式时的方向。如果设备保持在正常位置，并且该位置处于横向位置，或者设备的正常位置处于纵向位置，并且所保持的设备顺时针旋转 90°，则会将其视为主要横向模式。正常的位置是依赖于设备的。
- `landscape-secondary`
  - : 它代表了屏幕处于次要风景模式时的方向。如果设备与其正常位置保持 180° 并且该位置处于横向，或者如果设备的正常位置是纵向的，并且所保持的设备逆时针旋转 90°，则将其视为次要横向模式。正常的位置是依赖于设备的。
- `portrait`
  - : 它表示同时包含 `portrait-primary` 和 `portrait-secondary`.
- `landscape`
  - : 它表示同时包含 `landscape-primary` 和 `landscape-secondary`.
- `default`
  - : 它代表 `portrait-primary` 和 `landscape-primary` 主要取决于设备的自然方向。例如，如果面板分辨率为 1280 \* 800，则 `default` 为横向，如果分辨率为 800 \* 1280，则 `default` 为纵向。

> **备注：** 可同时设置多个锁定值。因此，如果锁定设置为只有一个方向，屏幕方向将永远不会改变，直到屏幕方向解锁。否则，只要方向在设备锁定的方向之中，屏幕方向就会从一个方向改变到另一个方向。

## 返回值

如果方向被授权锁定，则返回 `true` ;如果方向锁定被拒绝，则返回 `false`。请注意，返回值并不表示屏幕方向确实被锁定：可能会有延迟。

## 示例

### 使用 `DOMString` 参数

```js
screen.lockOrientationUniversal =
  screen.lockOrientation ||
  screen.mozLockOrientation ||
  screen.msLockOrientation;

if (screen.lockOrientationUniversal("landscape-primary")) {
  // 方向已锁定成功
} else {
  // 方向锁定失败
}
```

### 使用 `Array` 参数

```js
screen.lockOrientationUniversal =
  screen.lockOrientation ||
  screen.mozLockOrientation ||
  screen.msLockOrientation;

if (
  screen.lockOrientationUniversal(["landscape-primary", "landscape-secondary"])
) {
  // 方向已锁定成功
} else {
  // 方向锁定失败
}
```

## 规范

不属于任何规范，也不再有望成为标准。

请使用 {{domxref("ScreenOrientation.lock()")}} 代替。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Screen.orientation")}}
- {{domxref("Screen.unlockOrientation()")}}
- {{domxref("Screen.onorientationchange")}}
- [控制屏幕方向](/zh-CN/docs/Managing_screen_orientation)
