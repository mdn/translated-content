---
title: GamepadPose
slug: Web/API/GamepadPose
l10n:
  sourceCommit: 5e98fd9cfbec6e28044a27c58bffca5ae464ec8b
---

{{securecontext_header}}{{APIRef("Gamepad API")}}{{SeeCompatTable}}

[游戏手柄 API](/zh-CN/docs/Web/API/Gamepad_API) 的 **`GamepadPose`** 接口表示 [WebVR](/zh-CN/docs/Web/API/WebVR_API) 控制器在某个给定时间戳的姿态（包括方向、位置、速率、加速度信息）。

这个接口可通过 {{domxref("Gamepad.pose")}} 属性访问。

## 实例属性

- {{domxref("GamepadPose.hasOrientation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个表示游戏手柄是否能够返回方向信息的布尔值，能则返回 `true`，否则为 `false`。
- {{domxref("GamepadPose.hasPosition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个表示游戏手柄是否能够返回位置信息的布尔值，能则返回 `true`，否则为 `false`。
- {{domxref("GamepadPose.position")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回以 3D 向量的形式表示的 {{domxref("Gamepad")}} 的位置。
- {{domxref("GamepadPose.linearVelocity")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 {{domxref("Gamepad")}} 的线速度（以米每秒为单位）。
- {{domxref("GamepadPose.linearAcceleration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 {{domxref("Gamepad")}} 的线性加速度（以米每二次方秒为单位）
- {{domxref("GamepadPose.orientation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回以四元数值的形式表示的 {{domxref("Gamepad")}} 的方向。
- {{domxref("GamepadPose.angularVelocity")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 {{domxref("Gamepad")}} 的角速度（以弧度每秒为单位）
- {{domxref("GamepadPose.angularAcceleration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 {{domxref("Gamepad")}} 的角加速度（以米每二次方秒为单位）。

## 示例

待定。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebVR API](/zh-CN/docs/Web/API/WebVR_API)
- [游戏手柄 API](/zh-CN/docs/Web/API/Gamepad_API)
