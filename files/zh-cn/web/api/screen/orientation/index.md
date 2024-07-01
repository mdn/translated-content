---
title: Screen.orientation
slug: Web/API/Screen/orientation
---

{{APIRef("Screen Orientation API")}}{{SeeCompatTable}}

**`orientation`** 是 {{DOMxRef("Screen")}} 接口的一个只读属性，返回屏幕当前的方向。

## 语法

```plain
var orientation = window.screen.orientation;
```

### 返回值

一个 {{DOMxRef("ScreenOrientation")}} 的实例，表示屏幕的方向。

注意在更早的、有前缀的版本中会返回一个 {{DOMxRef("DOMString")}} 值，相当于 {{DOMxRef("ScreenOrientation.type")}} 的值。

## 示例

```js
var orientation =
  (screen.orientation || {}).type ||
  screen.mozOrientation ||
  screen.msOrientation;

if (orientation === "landscape-primary") {
  console.log("That looks good.");
} else if (orientation === "landscape-secondary") {
  console.log("Mmmh... the screen is upside down!");
} else if (
  orientation === "portrait-secondary" ||
  orientation === "portrait-primary"
) {
  console.log("Mmmh... you should rotate your device to landscape");
} else if (orientation === undefined) {
  console.log("The orientation API isn't supported in this browser :(");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("ScreenOrientation")}}
- {{DOMxRef("Screen.onorientationchange")}}
- [Managing screen orientation](/zh-CN/docs/Managing_screen_orientation)
