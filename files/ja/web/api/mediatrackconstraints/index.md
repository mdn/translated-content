---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

**`MediaTrackConstraints`** 辞書は、一連の能力とそれぞれが取り得る値や値の範囲を記述するために使用されます。この制約辞書は {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} に渡され、スクリプトがトラックに対して正確な（要求された）値や範囲、もしくは理想的な値や値の範囲のセットを指定できるようにします。また、最後に要求されたカスタム制約のセットは、{{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} を呼び出すことで取得できます。

## 制約

以下の型は、プロパティに対する制約を指定するために使用されます。これらを使用すると、そのうちどれか 1 つがパラメーターの値として使用されるべき `exact` 値を 1 つ以上指定できます。あるいは、可能であれば使用されるべき `ideal` 値のセットを指定することもできます。さらに、単一の値（または値の配列）を指定することもでき、ユーザーエージェントは、より厳しい制約がすべて適用された後に、その値を満たすよう最善を尽くします。

制約の仕組みについて詳しく知りたい場合は、[能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)を参照してください。

> **メモ:** `min` および `exact` 値は、{{domxref("MediaDevices.getDisplayMedia()")}} 呼び出しで使用される制約では許可されておらず、`TypeError` が発生します。ただし、これらは {{domxref("MediaStreamTrack.applyConstraints()")}} 呼び出しで使用される制約では許可されています。

### ConstrainBoolean

`ConstrainBoolean` 制約型は真偽値を持つプロパティの制約を指定するために使用されます。その値は真偽値 (`true` または `false`) または次のプロパティを含むオブジェクトを設定できます。

- `exact`
  - : プロパティの値となるべき真偽値です。プロパティをこの値に設定できない場合、制約に失敗します。
- `ideal`
  - : プロパティの理想的な値を指定する真偽値です。可能であればこの値が使用されますが、不可能な場合はユーザーエージェントは最も近い値を使用します。

### ConstrainDouble

`ConstrainDouble` 制約型は倍精度浮動小数点数の値を持つプロパティの制約を指定するために使用されます。その値は数値または次のプロパティを含むオブジェクトを設定できます。

- `max`
  - : プロパティの値として許容できる最大の値を指定する数値です。値がこの値以下にならない場合、制約に失敗します。
- `min`
  - : プロパティの値として許容できる最小の値を指定する数値です。値がこの値以上にならない場合、制約に失敗します。
- `exact`
  - : プロパティが受け入れる必要がある、要求された特定の値を指定する十進数です。
- `ideal`
  - : プロパティの理想的な値を指定する十進数です。可能であればこの値が使用されますが、不可能な場合はユーザーエージェントは最も近い値を使用します。

### ConstrainDOMString

`ConstrainDOMString` 制約型は文字列の値を持つプロパティの制約を指定するために使用されます。その値は文字列、文字列の配列、または次のプロパティを含むオブジェクトを設定できます。

- `exact`
  - : 文字列またはそのうちひとつがプロパティの値となるべき文字列の配列です。プロパティをこれらの値のいずれかに設定できない場合、制約に失敗します。
- `ideal`
  - : プロパティの理想的な値を指定する文字列またはその配列です。可能であればこれらの値が使用されますが、不可能な場合はユーザーエージェントは最も近い値を使用します。

### ConstrainULong

`ConstrainULong` 制約型は整数の値を持つプロパティの制約を指定するために使用されます。その値は数値または次のプロパティを含むオブジェクトを設定できます。

- `max`
  - : プロパティの値として許容できる最大の値を指定する整数です。値がこの値以下にならない場合、制約に失敗します。
- `min`
  - : プロパティの値として許容できる最小の値を指定する整数です。値がこの値以上にならない場合、制約に失敗します。
- `exact`
  - : プロパティが受け入れる必要がある、要求された特定の値を指定する整数です。
- `ideal`
  - : プロパティの理想的な値を指定する整数です。可能であればこの値が使用されますが、不可能な場合はユーザーエージェントは最も近い値を使用します。

## Instance properties

Some combination—but not necessarily all—of the following properties will exist on the object. This may be because a given browser doesn't support the property, or because it doesn't apply. For example, because {{Glossary("RTP")}} doesn't provide some of these values during negotiation of a WebRTC connection, a track associated with a {{domxref("RTCPeerConnection")}} will not include certain values, such as {{domxref("MediaTrackConstraints.facingMode", "facingMode")}} or {{domxref("MediaTrackConstraints.groupId", "groupId")}}.

### Instance properties of all media tracks

- {{domxref("MediaTrackConstraints.deviceId", "deviceId")}}
  - : A [`ConstrainDOMString`](#constraindomstring) object specifying a device ID or an array of device IDs which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.groupId", "groupId")}}
  - : A [`ConstrainDOMString`](#constraindomstring) object specifying a group ID or an array of group IDs which are acceptable and/or required.

### Instance properties of audio tracks

- {{domxref("MediaTrackConstraints.autoGainControl", "autoGainControl")}}
  - : A [`ConstrainBoolean`](#constrainboolean) object which specifies whether automatic gain control is preferred and/or required.
- {{domxref("MediaTrackConstraints.channelCount", "channelCount")}}
  - : A [`ConstrainULong`](#constrainulong) specifying the channel count or range of channel counts which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.echoCancellation", "echoCancellation")}}
  - : A [`ConstrainBoolean`](#constrainboolean) object specifying whether or not echo cancellation is preferred and/or required.
- {{domxref("MediaTrackConstraints.latency", "latency")}}
  - : A [`ConstrainDouble`](#constraindouble) specifying the latency or range of latencies which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.noiseSuppression", "noiseSuppression")}}
  - : A [`ConstrainBoolean`](#constrainboolean) which specifies whether noise suppression is preferred and/or required.
- {{domxref("MediaTrackConstraints.sampleRate", "sampleRate")}}
  - : A [`ConstrainULong`](#constrainulong) specifying the sample rate or range of sample rates which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.sampleSize", "sampleSize")}}
  - : A [`ConstrainULong`](#constrainulong) specifying the sample size or range of sample sizes which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.volume", "volume")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A [`ConstrainDouble`](#constraindouble) specifying the volume or range of volumes which are acceptable and/or required.

### Instance properties of image tracks

- whiteBalanceMode
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"single-shot"`, or `"continuous"`.
- exposureMode
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"single-shot"`, or `"continuous"`.
- focusMode
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"single-shot"`, or `"continuous"`.
- pointsOfInterest
  - : The pixel coordinates on the sensor of one or more points of interest. This is either an object in the form { x:_value_, y:_value_ } or an array of such objects, where _value_ is a double-precision integer.
- exposureCompensation
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying f-stop adjustment by up to ±3.
- colorTemperature
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying a desired color temperature in degrees kelvin.
- iso
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying a desired iso setting.
- brightness
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying a desired brightness setting.
- contrast
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the degree of difference between light and dark.
- saturation
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the degree of color intensity.
- sharpness
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the intensity of edges.
- focusDistance
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying distance to a focused object.
- zoom
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the desired focal length.
- torch
  - : A boolean value defining whether the fill light is continuously connected, meaning it stays on as long as the track is active.

### Instance properties of video tracks

- {{domxref("MediaTrackConstraints.aspectRatio", "aspectRatio")}}
  - : A [`ConstrainDouble`](#constraindouble) specifying the video {{glossary("Aspect_ratio")}} or range of aspect ratios which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.facingMode", "facingMode")}}
  - : A [`ConstrainDOMString`](#constraindomstring) object specifying a facing or an array of facings which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.frameRate", "frameRate")}}
  - : A [`ConstrainDouble`](#constraindouble) specifying the frame rate or range of frame rates which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.height", "height")}}
  - : A [`ConstrainULong`](#constrainulong) specifying the video height or range of heights which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.width", "width")}}
  - : A [`ConstrainULong`](#constrainulong) specifying the video width or range of widths which are acceptable and/or required.
- resizeMode
  - : A [`ConstrainDOMString`](#constraindomstring) object specifying a mode or an array of modes the UA can use to derive the resolution of a video track. Allowed values are `none` and `crop-and-scale`. `none` means that the user agent uses the resolution provided by the camera, its driver or the OS. `crop-and-scale` means that the user agent can use cropping and downscaling on the camera output in order to satisfy other constraints that affect the resolution.

### Instance properties of shared screen tracks

These constraints apply to the `video` property of the object passed into {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} to obtain a stream for screen sharing.

- {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}}

  - : A [`ConstrainDOMString`](#constraindomstring) which specifies the types of display surface that may be selected by the user. This may be a single one of the following strings, or a list of them to allow multiple source surfaces:

    - `browser`
      - : The stream contains the contents of a single browser tab selected by the user.
    - `monitor`
      - : The stream's video track contains the entire contents of one or more of the user's screens.
    - `window`
      - : The stream contains a single window selected by the user for sharing.

- {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}}

  - : A [`ConstrainBoolean`](#constrainboolean) value which may contain a single Boolean value or a set of them, indicating whether or not to allow the user to choose source surfaces which do not directly correspond to display areas. These may include backing buffers for windows to allow capture of window contents that are hidden by other windows in front of them, or buffers containing larger documents that need to be scrolled through to see the entire contents in their windows.

- {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback", "suppressLocalAudioPlayback")}} {{Experimental_Inline}}
  - : A [`ConstrainBoolean`](#constrainboolean) value describing the requested or mandatory constraints placed upon the value of the {{domxref("MediaTrackSettings.suppressLocalAudioPlayback","suppressLocalAudioPlayback")}} constrainable property. This property controls whether the audio playing in a tab will continue to be played out of a user's local speakers when the tab is captured.

## Specifications

{{Specifications}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
