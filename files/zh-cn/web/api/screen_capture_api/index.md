---
title: 屏幕捕捉 API
slug: Web/API/Screen_Capture_API
---

{{DefaultAPISidebar("Screen Capture API")}}

屏幕捕获 API 对现有的媒体捕获和流 API 进行了补充，让用户选择一个屏幕或屏幕的一部分（如一个窗口）作为媒体流进行捕获。然后，该流可以被记录或通过网络与他人共享。

## 屏幕捕捉 API 的概念和用法

屏幕捕捉 API 使用起来相对简单。其唯一的方法是{{domxref("MediaDevices.getDisplayMedia()")}}，它的任务是以捕获的形式要求用户选择一个屏幕或屏幕的一部分的{{domxref("MediaStream")}}。

要开始从屏幕上捕捉视频，你需要在 `getDisplayMedia()` 的实例上调用 `Media` `navigator.mediaDevices`：

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

The {{jsxref("Promise")}} returned by `getDisplayMedia()` resolves to a {{domxref("MediaStream")}} which streams the captured media.

See the article [Using the Screen Capture API](/zh-CN/docs/Web/API/Screen_Capture_API/%E4%BD%BF%E7%94%A8%E5%B1%8F%E5%B9%95%E6%8D%95%E8%8E%B7API) for a more in-depth look at how to use the API to capture screen contents as a stream.

## 增加现有接口

屏幕捕捉 API 没有自己的任何接口，而是在现有的 {{domxref("MediaDevices")}} 接口上添加了一个方法。

### MediaDevices 接口

- {{domxref("MediaDevices.getDisplayMedia()")}}
  - : The `getDisplayMedia()` method is added to the `MediaDevices` interface. Similar to {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, this method creates a promise that resolves with a {{domxref("MediaStream")}} containing the display area selected by the user, in a format that matches the specified options.

## Additions to existing dictionaries

The Screen Capture API adds properties to the following dictionaries defined by other specifications.

### MediaTrackConstraints

- {{domxref("MediaTrackConstraints.cursor")}}
  - : A {{domxref("ConstrainDOMString")}} indicating whether or not the cursor should be included in the captured display surface's stream, and if it should always be visible or if it should only be visible while the mouse is in motion.
- {{domxref("MediaTrackConstraints.displaySurface")}}
  - : A {{domxref("ConstrainDOMString")}} indicating what type of display surface is to be captured. The value is one of `application`, `browser`, `monitor`, or `window`.
- {{domxref("MediaTrackConstraints.logicalSurface")}}
  - : Indicates whether or not the video in the stream represents a logical display surface (that is, one which may not be entirely visible onscreen, or may be completely offscreen). A value of `true` indicates a logical display surface is to be captured.

### MediaTrackSettings

- {{domxref("MediaTrackSettings.cursor")}}
  - : A string which indicates whether or not the display surface currently being captured includes the mouse cursor, and if so, whether it's only visible while the mouse is in motion or if it's always visible. The value is one of `always`, `motion`, or `never`.
- {{domxref("MediaTrackSettings.displaySurface")}}
  - : A string indicating what type of display surface is currently being captured. The value is one of `application`, `browser`, `monitor`, or `window`.
- {{domxref("MediaTrackSettings.logicalSurface")}}
  - : A Boolean value which is `true` if the video being captured doesn't directly correspond to a single onscreen display area.

### MediaTrackSupportedConstraints

- {{domxref("MediaTrackSupportedConstraints.cursor")}}
  - : A Boolean which is `true` if the user agent and device support the {{domxref("MediaTrackConstraints.cursor")}} constraint.
- {{domxref("MediaTrackSupportedConstraints.displaySurface")}}
  - : A Boolean which is `true` if the current environment supports the {{domxref("MediaTrackConstraints.displaySurface")}} constraint.
- {{domxref("MediaTrackSupportedConstraints.logicalSurface")}}
  - : A Boolean which is `true` if the current environment supports the constraint {{domxref("MediaTrackConstraints.logicalSurface")}}.

## Dictionaries

The following dictionaries are defined by the Screen Capture API.

- `CursorCaptureConstraint`
  - : An enumerated string type used to provide the value for the `cursor` property for the settings and constraints. The possible values are `always`, `motion`, and `never`.
- `DisplayCaptureSurfaceType`
  - : An enumerated string type which is used to identify the kind of display surface to capture. This type is used for the `displaySurface` property in the constraints and settings objects, and has the possible values `application`, `browser`, `monitor`, and `window`.

## Feature Policy validation

{{Glossary("User agent", "User agents")}} that support Feature Policy (either using HTTP's {{HTTPHeader("Permissions-Policy")}} header or the {{HTMLElement("iframe")}} attribute [`allow`](/zh-CN/docs/Web/HTML/Element/iframe#allow)) can specify a desire to use the Screen Capture API using the policy control directive `display-capture`:

```html
<iframe allow="display-capture" src="/some-other-document.html"></iframe>
```

The default allow list is `self`, which lets the any content within the document use Screen Capture.

See [Using Feature Policy](/zh-CN/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy) for a more in-depth explanation of how Feature Policy is used.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Screen Capture API](/zh-CN/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getDisplayMedia()")}}
