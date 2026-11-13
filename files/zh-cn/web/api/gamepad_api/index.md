---
title: Gamepad API
slug: Web/API/Gamepad_API
---

{{DefaultAPISidebar("Gamepad API")}}{{SeeCompatTable}}

**Gamepad API** 可以给予开发者一种简单、统一的方式来识别并响应游戏控制器（手柄）。其中包含了三个接口、两个事件、一个特殊函数，用来响应控制器的连接与断开、获取其他关于控制器的信息以及识别当前是哪个按键或是哪个控制器被按下了。

## 接口

- {{domxref("Gamepad")}}
  - : 表示已连接的游戏控制器。
- {{domxref("GamepadButton")}}
  - : 表示已连接手柄上的一个按键。
- {{domxref("GamepadEvent")}}
  - : 表示与控制器相关的事件的事件对象。

### 实验性 Gamepad 扩展

- {{domxref("GamepadHapticActuator")}}
  - : 表示控制器中的硬件，用于向用户提供触觉反馈（如果可用）最常见的是振动硬件。
- {{domxref("GamepadPose")}}
  - : 表示控制器的位置方向（例如，在 3D 空间中的位置和方向）于 [WebVR](/zh-CN/docs/Web/API/WebVR_API) 控制器中。

另请参阅 [Gamepad 接口扩展](/zh-CN/docs/Web/API/Gamepad#experimental_extensions_to_gamepad)，来获取上方的功能的相关信息。

### 其他接口扩展

#### Navigator

- {{domxref("Navigator.getGamepads()")}}
  - : 于 {{domxref("Navigator")}} 对象中的一个扩展。会返回一个 名为{{domxref("Gamepad")}} 的数组对象，其中每个数组元素对应一个已连接的控制器。

#### Window 事件

- {{domxref("Window.ongamepadconnected")}}
  - : 表示当控制器连接时（当[`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event) 事件触发时）运行的处理程序。
- {{domxref("Window.ongamepaddisconnected")}}
  - : 表示当控制器断开连接时（当[`gamepaddisconnected`](/zh-CN/docs/Web/API/Window/gamepaddisconnected_event) 事件触发时）运行的处理程序。

## 教程与指南

- [使用 Gamepad API](/zh-CN/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [使用 Gamepad API 实现控制](/zh-CN/docs/Games/Techniques/Controls_Gamepad_API)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) by Ted Mielczarek and Robert Nyman
- [简单的 API 演示页面](http://luser.github.io/gamepadtest/) ([源码](https://github.com/luser/gamepadtest))
