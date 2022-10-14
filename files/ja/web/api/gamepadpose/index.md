---
title: GamepadPose
slug: Web/API/GamepadPose
---

{{APIRef("Gamepad API")}}{{SeeCompatTable}}

The **`GamepadPose`** interface of the [Gamepad API](/ja/docs/Web/API/Gamepad_API) represents the pose of a [WebVR](/ja/docs/Web/API/WebVR_API) controller at a given timestamp (which includes orientation, position, velocity, and acceleration information.)

This interface is accessible through the {{domxref("Gamepad.pose")}} property.

## Properties

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

| Specification                                                                                        | Status                                   | Comment            |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------ |
| {{SpecName('GamepadExtensions', '#gamepadpose-interface', 'GamepadPose')}} | {{Spec2('GamepadExtensions')}} | Initial definition |

## Browser compatibility

{{Compat("api.GamepadPose")}}

## See also

- [WebVR API](/ja/docs/Web/API/WebVR_API)
- [Gamepad API](/ja/docs/Web/API/Gamepad_API)
