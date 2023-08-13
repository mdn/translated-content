---
title: Gamepad
slug: Web/API/Gamepad
---

{{APIRef("Gamepad API")}}

[Gamepad API](/zh-CN/docs/Web/API/Gamepad_API) 的 `Gamepad` 接口，定义了一个独立的游戏手柄或其他控制器，允许访问控制器的信息，譬如按钮按下的状态、坐标输入的位置。游戏手柄或其他控制器，允许访问如按钮按下，和 ID 等信息。

Gamepad 对象有两种方式返回值：通过 [`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event) 和 [`gamepaddisconnected`](/zh-CN/docs/Web/API/Window/gamepaddisconnected_event) 事件的 `gamepad` 属性，或者在任意位置抓取 {{domxref("Navigator.getGamepads()")}} 方法返回的数组。

## 属性

- {{domxref("Gamepad.axes")}} {{readonlyInline}}
  - : 一个表示控制器设备上存在的坐标轴的数组 (比如控制器摇杆)。
- {{domxref("Gamepad.buttons")}} {{readonlyInline}}
  - : 一个 {{domxref("gamepadButton")}} 对象的数组，表示设备上的按键的数组。
- {{domxref("Gamepad.connected")}} {{readonlyInline}}
  - : 一个表示控制器是否仍然连接着系统的布尔值。
- {{domxref("Gamepad.displayId")}} {{readonlyInline}}
  - : _返回与 {{domxref("VRDisplay")}} 相关的 {{domxref("VRDisplay.displayId")}} (如果有相关) — 控制器所控制的 `VRDisplay` 场景。_
- {{domxref("Gamepad.id")}} {{readonlyInline}}
  - : 一个包含着控制器标识信息的 {{domxref("DOMString")}}。
- {{domxref("Gamepad.index")}} {{readonlyInline}}
  - : 一个自增的整形数字，对于当前连接到系统的每一个设备是唯一的。
- {{domxref("Gamepad.mapping")}} {{readonlyInline}}
  - : 一个指示浏览器是否被映射到某个已知布局的字符串。
- {{domxref("Gamepad.timestamp")}} {{readonlyInline}}
  - : 一个表示上次控制器数据更新时间的 {{domxref("DOMHighResTimeStamp")}} 。
- {{domxref("Gamepad.hand")}} {{readonlyInline}}
  - : 一个枚举项，定义了控制器是用哪只手拿着的，或最可能是哪只手拿着的。
- {{domxref("Gamepad.hapticActuators")}} {{readonlyInline}}
  - : 一个包含 {{domxref("GamepadHapticActuator")}} 对象的数组，其中表示控制器上可用的触觉反馈硬件。
- {{domxref("Gamepad.pose")}} {{readonlyInline}} {{Experimental_Inline}}
  - : 一个表示 WebVR 控制器姿态方位信息的 {{domxref("GamepadPose")}} 对象 (比如其在 3D 空间中的位置和方向)。

## 示例

```js
window.addEventListener("gamepadconnected", function (e) {
  console.log(
    "控制器已连接与 %d 位：%s. %d 个按钮，%d 个坐标方向。",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Gamepad API](/zh-CN/docs/Web/Guide/API/Gamepad)
- [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API)
