---
title: VRPose
slug: Web/API/VRPose
tags:
  - API
  - Experimental
  - Landing
  - NeedsTranslation
  - Reference
  - TopicStub
  - VR
  - VRPose
  - Virtual Reality
  - WebVR
translation_of: Web/API/VRPose
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`VRPose`** interface of the [WebVR API](/ru/docs/Web/API/WebVR_API) represents the state of a VR sensor at a given timestamp (which includes orientation, position, velocity, and acceleration information.)

This interface is accessible through the {{domxref("VRDisplay.getPose()")}} and {{domxref("VRDisplay.getFrameData()")}} methods. {{domxref("VRDisplay.getPose()")}} is deprecated.

## Properties

- {{domxref("VRPose.position")}} {{readonlyInline}}
  - : Returns the position of the {{domxref("VRDisplay")}} at the current {{domxref("VRPose.timestamp")}} as a 3D vector
- {{domxref("VRPose.linearVelocity")}} {{readonlyInline}}
  - : Returns the linear velocity of the {{domxref("VRDisplay")}} at the current {{domxref("VRPose.timestamp")}}, in meters per second.
- {{domxref("VRPose.linearAcceleration")}} {{readonlyInline}}
  - : Returns the linear acceleration of the {{domxref("VRDisplay")}} at the current {{domxref("VRPose.timestamp")}}, in meters per second per second.
- {{domxref("VRPose.orientation")}} {{readonlyInline}}
  - : Returns the orientation of the sensor at the current {{domxref("VRPose.timestamp")}}, as a quarternion value.
- {{domxref("VRPose.angularVelocity")}} {{readonlyInline}}
  - : Returns the angular velocity of the {{domxref("VRDisplay")}} at the current {{domxref("VRPose.timestamp")}}, in radians per second.
- {{domxref("VRPose.angularAcceleration")}} {{readonlyInline}}
  - : Returns the angular acceleration of the {{domxref("VRDisplay")}} at the current {{domxref("VRPose.timestamp")}}, in meters per second per second.

### Obsolete properties

- {{domxref("VRPose.timeStamp")}} {{readonlyInline}}
  - : Returns the current time stamp of the system — a monotonically increasing value useful for determining if position data has been updated, and what order updates have occured in. **This version of `timestamp` has been removed from the spec — instead, timestamps are now returned when {{domxref("VRDisplay.getFrameData()")}} is called — see {{domxref("VRFrameData.timestamp")}}.**

## Examples

{{page("/Web/API/VRDisplay/getFrameData", "Examples")}}

## Specifications

| Specification                                                                | Status                       | Comment            |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('WebVR 1.1', '#interface-vrpose', 'VRPose')}} | {{Spec2('WebVR 1.1')}} | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/ru/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — demos, downloads, and other resources from the Mozilla VR team.
