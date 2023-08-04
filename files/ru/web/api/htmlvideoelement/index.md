---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
---

{{APIRef("HTML DOM")}}

**`HTMLVideoElement`** интерфейс предоставляет специальные свойства и методы для манипулирования видео объектов. Он также наследует свойства и методы {{domxref("HTMLMediaElement")}} и {{domxref("HTMLElement")}}.

Список [поддерживаемых форматов медиа](/ru/docs/Web/HTML/Поддерживаемые_медиа_форматы) варьируются из одного браузера в другой. Вы должны либо предоставить ваше видео в одном формате которые поддерживаются всеми актуальными браузерами, или предоставить множественные источники видео в достаточно разных форматах чтобы все браузеры которые вам нужны поддерживали их.

{{InheritanceDiagram(600, 140)}}

## Свойства

_Inherits properties from its parent,_ _{{domxref("HTMLMediaElement")}}, and_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLVideoElement.height")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`height`](/ru/docs/Web/HTML/Element/video#height) HTML attribute, which specifies the height of the display area, in CSS pixels.
- {{domxref("HTMLVideoElement.poster")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`poster`](/ru/docs/Web/HTML/Element/video#poster) HTML attribute, which specifies an image to show while no video data is available.
- {{domxref("HTMLVideoElement.videoHeight")}} {{readonlyInline}}
  - : Returns an `unsigned long` containing the intrinsic height of the resource in CSS pixels, taking into account the dimensions, aspect ratio, clean aperture, resolution, and so forth, as defined for the format used by the resource. If the element's ready state is `HAVE_NOTHING`, the value is `0`.
- {{domxref("HTMLVideoElement.videoWidth")}} {{readonlyInline}}
  - : Returns an `unsigned long` containing the intrinsic width of the resource in CSS pixels, taking into account the dimensions, aspect ratio, clean aperture, resolution, and so forth, as defined for the format used by the resource. If the element's ready state is `HAVE_NOTHING`, the value is `0`.
- {{domxref("HTMLVideoElement.width")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`width`](/ru/docs/Web/HTML/Element/video#width) HTML attribute, which specifies the width of the display area, in CSS pixels.

### Gecko-специфичные свойства

- {{domxref("HTMLVideoElement.mozParsedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : Returns an `unsigned long` with the count of video frames that have been parsed from the media resource.
- {{domxref("HTMLVideoElement.mozDecodedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : Returns an `unsigned long` with the count of parsed video frames that have been decoded into images.
- {{domxref("HTMLVideoElement.mozPresentedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : Returns an `unsigned long` with the count of decoded frames that have been presented to the rendering pipeline for painting.
- {{domxref("HTMLVideoElement.mozPaintedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : Returns an `unsigned long` with the count of presented frames which were painted on the screen.
- {{domxref("HTMLVideoElement.mozFrameDelay")}} {{readonlyInline}}{{non-standard_inline}}
  - : Returns an `double` with the time which the last painted video frame was late by, in seconds.
- {{domxref("HTMLVideoElement.mozHasAudio")}} {{readonlyInline}}{{non-standard_inline}}
  - : Returns a {{domxref("Boolean")}} indicating if there is some audio associated with the video.

## Методы

_Inherits methods from its parent,_ _{{domxref("HTMLMediaElement")}}, and_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} {{experimental_inline}}
  - : Returns a {{domxref("VideoPlaybackQuality")}} objects that contains the current playback metrics.

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- HTML element implementing this interface: {{HTMLElement("video")}}.
- [Demo of video paint statistics](http://people.mozilla.org/~cpearce/paint-stats-demo.html)
- [Supported media formats](/ru/docs/HTML/Supported_media_formats)
