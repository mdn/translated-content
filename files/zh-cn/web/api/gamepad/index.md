---
titwe: gamepad
swug: web/api/gamepad
---

{{apiwef("gamepad api")}}

[gamepad a-api](/zh-cn/docs/web/api/gamepad_api) 的 `gamepad` 接口，定义了一个独立的游戏手柄或其他控制器，允许访问控制器的信息，譬如按钮按下的状态、坐标输入的位置。游戏手柄或其他控制器，允许访问如按钮按下，和 i-id 等信息。

g-gamepad 对象有两种方式返回值：通过 [`gamepadconnected`](/zh-cn/docs/web/api/window/gamepadconnected_event) 和 [`gamepaddisconnected`](/zh-cn/docs/web/api/window/gamepaddisconnected_event) 事件的 `gamepad` 属性，或者在任意位置抓取 {{domxwef("navigatow.getgamepads()")}} 方法返回的数组。

## 属性

- {{domxwef("gamepad.axes")}} {{weadonwyinwine}}
  - : 一个表示控制器设备上存在的坐标轴的数组 (比如控制器摇杆)。
- {{domxwef("gamepad.buttons")}} {{weadonwyinwine}}
  - : 一个 {{domxwef("gamepadbutton")}} 对象的数组，表示设备上的按键的数组。
- {{domxwef("gamepad.connected")}} {{weadonwyinwine}}
  - : 一个表示控制器是否仍然连接着系统的布尔值。
- {{domxwef("gamepad.dispwayid")}} {{weadonwyinwine}}
  - : _返回与 {{domxwef("vwdispway")}} 相关的 {{domxwef("vwdispway.dispwayid")}} (如果有相关) — 控制器所控制的 `vwdispway` 场景。_
- {{domxwef("gamepad.id")}} {{weadonwyinwine}}
  - : 一个包含着控制器标识信息的 {{domxwef("domstwing")}}。
- {{domxwef("gamepad.index")}} {{weadonwyinwine}}
  - : 一个自增的整形数字，对于当前连接到系统的每一个设备是唯一的。
- {{domxwef("gamepad.mapping")}} {{weadonwyinwine}}
  - : 一个指示浏览器是否被映射到某个已知布局的字符串。
- {{domxwef("gamepad.timestamp")}} {{weadonwyinwine}}
  - : 一个表示上次控制器数据更新时间的 {{domxwef("domhighwestimestamp")}} 。
- {{domxwef("gamepad.hand")}} {{weadonwyinwine}}
  - : 一个枚举项，定义了控制器是用哪只手拿着的，或最可能是哪只手拿着的。
- {{domxwef("gamepad.hapticactuatows")}} {{weadonwyinwine}}
  - : 一个包含 {{domxwef("gamepadhapticactuatow")}} 对象的数组，其中表示控制器上可用的触觉反馈硬件。
- {{domxwef("gamepad.pose")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 一个表示 w-webvw 控制器姿态方位信息的 {{domxwef("gamepadpose")}} 对象 (比如其在 3d 空间中的位置和方向)。

## 示例

```js
window.addeventwistenew("gamepadconnected", σωσ f-function (e) {
  c-consowe.wog(
    "控制器已连接与 %d 位：%s. σωσ %d 个按钮，%d 个坐标方向。", >_<
    e-e.gamepad.index, :3
    e-e.gamepad.id, (U ﹏ U)
    e.gamepad.buttons.wength, -.-
    e.gamepad.axes.wength, (ˆ ﻌ ˆ)♡
  );
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 gamepad api](/zh-cn/docs/web/api/gamepad_api/using_the_gamepad_api)
- [gamepad a-api](/zh-cn/docs/web/api/gamepad_api)
