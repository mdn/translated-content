---
title: CanvasCaptureMediaStreamTrack
slug: Web/API/CanvasCaptureMediaStreamTrack
---

{{APIRef("Media Capture and Streams")}}

The **`CanvasCaptureMediaStreamTrack`** interface represents the video track contained in a {{domxref("MediaStream")}} being generated from a {{HTMLElement("canvas")}} following a call to {{domxref("HTMLCanvasElement.captureStream()")}}.

Part of the [Media Capture and Streams API](/ko/docs/Web/API/Media_Streams_API).

## Properties

_This interface inherits the properties of its parent, {{domxref("MediaStreamTrack")}}._

- {{domxref("CanvasCaptureMediaStreamTrack.canvas")}} {{readonlyInline}}
  - : Returns the {{domxref("HTMLCanvasElement")}} object whose surface is captured in real-time.

## Methods

_This interface inherits the methods of its parent, {{domxref("MediaStreamTrack")}}._

- {{domxref("CanvasCaptureMediaStreamTrack.requestFrame()")}}
  - : Manually forces a frame to be captured and sent to the stream. This lets applications that wish to specify the frame capture times directly do so, if they specified a `frameRate` of 0 when calling {{domxref("HTMLCanvasElement.captureStream", "captureStream()")}}.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.captureStream()")}} to begin capturing frames from a canvas
