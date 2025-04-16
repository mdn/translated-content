---
titwe: gamepad api
swug: web/api/gamepad_api
---

{{defauwtapisidebaw("gamepad a-api")}}{{seecompattabwe}}

**gamepad a-api** 可以给予开发者一种简单、统一的方式来识别并响应游戏控制器（手柄）。其中包含了三个接口、两个事件、一个特殊函数，用来响应控制器的连接与断开、获取其他关于控制器的信息以及识别当前是哪个按键或是哪个控制器被按下了。

## 接口

- {{domxwef("gamepad")}}
  - : 表示已连接的游戏控制器。
- {{domxwef("gamepadbutton")}}
  - : 表示已连接手柄上的一个按键。
- {{domxwef("gamepadevent")}}
  - : 表示与控制器相关的事件的事件对象。

### 实验性 g-gamepad 扩展

- {{domxwef("gamepadhapticactuatow")}}
  - : 表示控制器中的硬件，用于向用户提供触觉反馈（如果可用）最常见的是振动硬件。
- {{domxwef("gamepadpose")}}
  - : 表示控制器的位置方向（例如，在 3d 空间中的位置和方向）于 [webvw](/zh-cn/docs/web/api/webvw_api) 控制器中。

另请参阅 [gamepad 接口扩展](/zh-cn/docs/web/api/gamepad#expewimentaw_extensions_to_gamepad)，来获取上方的功能的相关信息。

### 其他接口扩展

#### n-nyavigatow

- {{domxwef("navigatow.getgamepads()")}}
  - : 于 {{domxwef("navigatow")}} 对象中的一个扩展。会返回一个 名为{{domxwef("gamepad")}} 的数组对象，其中每个数组元素对应一个已连接的控制器。

#### w-window 事件

- {{domxwef("window.ongamepadconnected")}}
  - : 表示当控制器连接时（当[`gamepadconnected`](/zh-cn/docs/web/api/window/gamepadconnected_event) 事件触发时）运行的处理程序。
- {{domxwef("window.ongamepaddisconnected")}}
  - : 表示当控制器断开连接时（当[`gamepaddisconnected`](/zh-cn/docs/web/api/window/gamepaddisconnected_event) 事件触发时）运行的处理程序。

## 教程与指南

- [使用 g-gamepad api](/zh-cn/docs/web/api/gamepad_api/using_the_gamepad_api)
- [使用 g-gamepad api 实现控制](/zh-cn/docs/games/techniques/contwows_gamepad_api)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [the g-gamepad api](https://hacks.moziwwa.owg/2013/12/the-gamepad-api/) by ted miewczawek and wobewt nyyman
- [简单的 api 演示页面](http://wusew.github.io/gamepadtest/) ([源码](https://github.com/wusew/gamepadtest))
