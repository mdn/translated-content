---
title: GamepadPose
slug: Web/API/GamepadPose
---

{{APIRef("Gamepad API")}}{{SeeCompatTable}}

[Gamepad API](/zh-CN/docs/Web/API/Gamepad_API)的接口**`GamepadPose`** 表示 WebVR 的控制者在某个给定时间点的姿势， (包括方向、位置、速率、加速度信息)

这个接口通过 {{domxref("Gamepad.pose")}} 属性使用。

## 属性

- {{domxref("GamepadPose.hasOrientation")}} {{readonlyInline}}
  - : Returns a boolean indicating whether the gamepad is capable of returning orientation information (`true`) or not (`false`).
- {{domxref("GamepadPose.hasPosition")}} {{readonlyInline}}
  - : Returns a boolean indicating whether the gamepad is capable of returning position information (`true`) or not (`false`).
- {{domxref("GamepadPose.position")}} {{readonlyInline}}
  - : Returns the position of the {{domxref("Gamepad")}} as a 3D vector.
- {{domxref("GamepadPose.linearVelocity")}} {{readonlyInline}}
  - : Returns the linear velocity of the {{domxref("Gamepad")}}, in meters per second.
- {{domxref("GamepadPose.linearAcceleration")}} {{readonlyInline}}
  - : Returns the linear acceleration of the {{domxref("Gamepad")}}, in meters per second per second.
- {{domxref("GamepadPose.orientation")}} {{readonlyInline}}
  - : Returns the orientation of the {{domxref("Gamepad")}}, as a quarternion value.
- {{domxref("GamepadPose.angularVelocity")}} {{readonlyInline}}
  - : Returns the angular velocity of the {{domxref("Gamepad")}}, in radians per second.
- {{domxref("GamepadPose.angularAcceleration")}} {{readonlyInline}}
  - : Returns the angular acceleration of the {{domxref("Gamepad")}}, in meters per second per second.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/zh-CN/docs/Web/API/WebVR_API)
- [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API)
