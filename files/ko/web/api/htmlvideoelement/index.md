---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
---

{{APIRef("HTML DOM")}}

**`HTMLVideoElement`** 인터페이스는 Video object를 조작하는데 필요한 프로퍼티와 메소드를 제공합니다. {{domxref("HTMLMediaElement")}}와 {{domxref("HTMLElement")}}를 상속합니다.

[지원하는 미디어 포맷](/ko/docs/HTML/Supported_media_formats) 목록은 브라우저마다 다릅니다. 여러분은 적절한 범위의 브라우저에서 지원하는 한가지 비디어 포맷을 제공하던가, 지원할 모든 브라우저를 위한 여러 종류의 미디어 포맷을 제공해야 합니다.

{{InheritanceDiagram(600, 140)}}

## 속성(Properties)

_{{domxref("HTMLMediaElement")}}와_ _{{domxref("HTMLElement")}}의 속성들도 상속 받습니다._

- {{domxref("HTMLVideoElement.height")}}
  - : 표시 영역의 높이를 나타내는 HTML Attribute [`height`](/ko/docs/Web/HTML/Element/video#height)의 값을 {{domxref("DOMString")}}으로 반환합니다. 단위는 pixel입니다.
- {{domxref("HTMLVideoElement.poster")}}
  - : 비디오 데이터가 없을 때 보여줄 이미지를 지정하는 HTML Attribute [`poster`](/ko/docs/Web/HTML/Element/video#poster)의 값을 {{domxref("DOMString")}}로 반환합니다.
- {{domxref("HTMLVideoElement.videoHeight")}} {{readonlyInline}}
  - : 비디오의 height를 부호 없는 정수로 나타낸 값을 반환합니다. 비디오가 없는 경우 0을 반환합니다.
- {{domxref("HTMLVideoElement.videoWidth")}} {{readonlyInline}}
  - : 비디오의 width를 부호 없는 정수로 나타낸 값을 반환합니다. 비디오가 없는 경우 0을 반환합니다.
- {{domxref("HTMLVideoElement.width")}}
  - : 표시 영역의 높이를 나타내는 HTML Attribute [`width`](/ko/docs/Web/HTML/Element/video#width)의 값을 {{domxref("DOMString")}}으로 반환합니다. 단위는 pixel입니다.

### Gecko 전용 속성

- {{domxref("HTMLVideoElement.mozParsedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : 미디어 소스에서 파싱된 비디오 프레임 수를 `unsigned long` 값으로 반환합니다.
- {{domxref("HTMLVideoElement.mozDecodedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : 화상으로 디코딩 된 비디오 프레임 수를 `unsigned long` 값으로 반환합니다.
- {{domxref("HTMLVideoElement.mozPresentedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : 렌더링 파이프 라인을 통해 출력된 디코드 프레임 수를 `unsigned long` 값으로 반환합니다.
- {{domxref("HTMLVideoElement.mozPaintedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : 화면에 그려진 프레임 수를 `unsigned long` 값으로 반환합니다.
- {{domxref("HTMLVideoElement.mozFrameDelay")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : 지연 출력된 비디오 프레임을 초 단위로 `double` 값으로 반환한다.
- {{domxref("HTMLVideoElement.mozHasAudio")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : 비디오와 연관된 오디오 존재 여부를 {{JSxRef("Boolean","boolean")}} 값으로 반환한다.

### Microsoft 확장 속성

- {{DOMxRef("HTMLVideoElement.msFrameStep()")}} {{Non-standard_Inline}}
  - : 프레임 단위로 앞/뒤로 이동합니다.
- {{DOMxRef("HTMLVideoElement.msHorizontalMirror")}} {{Non-standard_Inline}}
  - : 비디오의 좌/우 반전 시키거나 반전된 상태를 반환합니다.
- {{DOMxRef("HTMLVideoElement.msInsertVideoEffect()")}} {{Non-standard_Inline}}
  - : 미디어 파이프라인에 특정 비디오 효과를 추가합니다.
- {{DOMxRef("HTMLVideoElement.msIsLayoutOptimalForPlayback")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : 더 효과적인 비디오 렌더링이 가능하면 true를 반환합니다.
- {{DOMxRef("HTMLVideoElement.msIsStereo3D")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : 시스템이 비디오를 stereo 3-D로 판단하였는지 여부를 반환합니다. 값을 true로 지정한다면 video를 stereo 3-D로 인식합니다..
- {{DOMxRef("HTMLVideoElement.msZoom")}} {{Non-standard_Inline}}
  - : 비디오 프레임을 출력부에 딱 맞게 트림합니다.

## 메소드

_{{domxref("HTMLMediaElement")}}와 {{domxref("HTMLElement")}}의 메소드도 상속 받습니다._

- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} {{experimental_inline}}
  - : 현재 재생 결과를 담고 있는 {{domxref("VideoPlaybackQuality")}} 객체를 반환합니다. 전체 프레임 중 drop 되거나 손실된 프레임 등 재생 정보를 포함합니다.

## Events

_{{domxref("HTMLMediaElement")}}와 {{domxref("HTMLElement")}}의 이벤트를 상속합니다._ [`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener) 메소드 또는 `oneventname` 프로퍼티에 리스너를 전달하여 이벤트를 수신합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- HTML 엘리먼트 구현체: {{HTMLElement("video")}}.
- [Demo of video paint statistics](http://people.mozilla.org/~cpearce/paint-stats-demo.html)(링크 소멸)
- [지원하는 미디어 포맷](/ko/docs/HTML/Supported_media_formats)
