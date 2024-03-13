---
title: Navigator.vibrate()
slug: Web/API/Navigator/vibrate
---

{{APIRef("HTML DOM")}}

**`Navigator.vibrate()`** 方法使设备（有震动硬件）产生有频率的震动。若设备不支持震动，该方法将无效。若某震动方式已经在进行中（当该方法调用时），则前一个震动方式停止，新的取而代之。

该方法若因为提供无效的参数使得无法使设备震动，它将返回 false，否则返回 true。若振动方案导致长时间的震动，它会被截断：最大震动时长取决于每个浏览器的具体实现。

## 语法

```plain
var successBool = window.navigator.vibrate(pattern);
```

- _pattern_
  - : 提供一个震动、暂停间隔的模式。每一个值表示交替震动或者暂停的毫秒数。你可以提供一个单个的值（震动一次的毫秒数）或者一个包含整数的数组来交替的震动、暂停、震动。详情参见 [Vibration API](/zh-CN/docs/WebAPI/Vibration)。

传递一个 `0`、一个空数组或者一个元素全部为 `0` 的数组会结束当前正在运行中的震动模式。

## 示例

```js
window.navigator.vibrate(200); // vibrate for 200ms
window.navigator.vibrate([
  100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30, 100,
]); // Vibrate 'SOS' in Morse.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- [Vibration API](/zh-CN/docs/WebAPI/Vibration)
