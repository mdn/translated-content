---
title: 媒体追踪约束
slug: Web/API/MediaTrackConstraints
---

{{APIRef("媒体捕获与媒体流")}}

The **`MediaTrackConstraints`** dictionary is used to describe a set of capabilities and the value or values each can take on. A constraints dictionary is passed into {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} to allow a script to establish a set of exact (required) values or ranges and/or preferred values or ranges of values for the track, and the most recently-requested set of custom constraints can be retrieved by calling {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}}.

For each constraint, you can typically specify an exact value you need, an ideal value you want, a range of acceptable values, and/or a value which you'd like to be as close to as possible. The specifics vary somewhat depending on the type of the constrainable property.

To learn more about how constraints work, see [Capabilities, constraints, and settings](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Properties

Some combination—but not necessarily all—of the following properties will exist on the object.

### Properties of all media tracks

- {{domxref("MediaTrackConstraints.deviceId", "deviceId")}}
  - : A {{domxref("ConstrainDOMString")}} object specifying a device ID or an array of device IDs which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.groupId", "groupId")}}
  - : A {{domxref("ConstrainDOMString")}} object specifying a group ID or an array of group IDs which are acceptable and/or required.

### Properties of audio tracks

- {{domxref("MediaTrackConstraints.autoGainControl", "autoGainControl")}}
  - : 一个 {{domxref("ConstrainBoolean")}} 对象，用来指明是否首选或要求使用声音的自动增益。
- {{domxref("MediaTrackConstraints.channelCount", "channelCount")}}
  - : 一个 {{domxref("ConstrainLong")}}，用来指明可选或要求的声道数或者是声道数的范围。
- {{domxref("MediaTrackConstraints.echoCancellation", "echoCancellation")}}
  - : 一个 {{domxref("ConstrainBoolean")}} 对象，用来指明是否首选或需要开启回声消除。
- {{domxref("MediaTrackConstraints.latency", "latency")}}
  - : 一个 {{domxref("ConstrainDouble")}}，用来指明多大延迟是被可接受的。
- {{domxref("MediaTrackConstraints.noiseSuppression", "noiseSuppression")}}
  - : 一个 {{domxref("ConstrainBoolean")}}，用来指明是否首选或需要开启降噪。
- {{domxref("MediaTrackConstraints.sampleRate", "sampleRate")}}
  - : 一个 {{domxref("ConstrainLong")}}，用来指明可接受的或要求的音频采样率/采样率范围。
- {{domxref("MediaTrackConstraints.sampleSize", "sampleSize")}}
  - : 一个 {{domxref("ConstrainLong")}}，用来指明可接受的或要求的音频采样大小/采样范围。
- {{domxref("MediaTrackConstraints.volume", "volume")}}
  - : 一个 {{domxref("ConstrainDouble")}}，用来指明可接受的或要求的音量大小/范围。

### Properties of image tracks

- {{domxref("MediaTrackConstraints.whiteBalanceMode","whiteBalanceMode")}}
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"sigle-shot"`, or `"continuous"`.
- {{domxref("MediaTrackConstraints.exposureMode","exposureMode")}}
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"sigle-shot"`, or `"continuous"`.
- {{domxref("MediaTrackConstraints.focusMode","focusMode")}}
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"sigle-shot"`, or `"continuous"`.
- {{domxref("MediaTrackConstraints.pointsOfInterest","pointsOfInterest")}}
  - : The pixel coordinates on the sensor of one or more points of interest. This is either an object in the form { x:_value_, y:_value_ } or an array of such objects, where _value_ is a double-precision integer.
- {{domxref("MediaTrackConstraints.expsureCompensation","exposureCompensation")}}
  - : A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying f-stop adjustment by up to ±3.
- {{domxref("MediaTrackConstraints.colorTemperature","colorTemperature")}}
  - : A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying a desired color temperature in degrees kelvin.
- {{domxref("MediaTrackConstraints.iso","iso")}}
  - : A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying a desired iso setting.
- {{domxref("MediaTrackConstraints.brightness","brightness")}}
  - : A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying a desired brightness setting.
- {{domxref("MediaTrackConstraints.contrast","contrast")}}
  - : A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying the degree of difference between light and dark.
- {{domxref("MediaTrackConstraints.saturation","saturation")}}
  - : A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying the degree of color intensity.
- {{domxref("MediaTrackConstraints.sharpness","sharpness")}}
  - : A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying the intensity of edges.
- {{domxref("MediaTrackConstraints.focusDistance","focusDistance")}}
  - : A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying distance to a focused object.
- {{domxref("MediaTrackConstraints.zoom","zoom")}}
  - : A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying the desired focal length.
- {{domxref("MediaTrackConstraints.torch","torch")}}
  - : A {{jsxref("Boolean")}} whter the fill light continuously connected, meaning it stays on as long as the track is active.

### Properties of video tracks

- {{domxref("MediaTrackConstraints.aspectRatio", "aspectRatio")}}
  - : A {{domxref("ConstrainDouble")}} specifying the video aspect ratio or range of aspect ratios which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.facingMode", "facingMode")}}
  - : A {{domxref("ConstrainDOMString")}} object specifying a facing or an array of facings which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.frameRate", "frameRate")}}
  - : A {{domxref("ConstrainDouble")}} specifying the frame rate or range of frame rates which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.height", "height")}}
  - : A {{domxref("ConstrainLong")}} specifying the video height or range of heights which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.width", "width")}}
  - : A {{domxref("ConstrainLong")}} specifying the video width or range of widths which are acceptable and/or required.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
