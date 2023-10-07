---
title: MouseEvent.buttons
slug: Web/API/MouseEvent/buttons
---

{{APIRef("DOM Events")}}

只读属性 **`MouseEvent.buttons`** 指示事件触发时哪些鼠标按键被按下。

每一个按键都用一个给定的数（见下文）表示。如果同时多个按键被按下，buttons 的值为各键对应值做与计算（+）后的值。例如，如果右键（2）和滚轮键（4）被同时按下，buttons 的值为 2 + 4 = 6。

> **备注：** 属性 MouseEvent.button 和 MouseEvent.buttons 是不同的。MouseEvent.buttons 可指示任意鼠标事件中鼠标的按键情况，而 MouseEvent.button 只能保证在由按下和释放一个或多个按键时触发的事件中获得正确的值。

## 语法

```js
var buttonPressed = instanceOfMouseEvent.buttons;
```

## 返回值

一个数字，用来标识鼠标按下的一个或者多个按键。如果按下的键为多个，则值等于所有按键对应数值进行或 (|) 运算的结果。

- `0`: 没有按键或者是没有初始化
- `1`: 鼠标左键
- `2`: 鼠标右键
- `4`: 鼠标滚轮或者是中键
- `8`: 第四按键 (通常是“浏览器后退”按键)
- `16` : 第五按键 (通常是“浏览器前进”)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent")}}
