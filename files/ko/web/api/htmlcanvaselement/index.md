---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement`** 인터페이스는 \<canvas> 요소의 레이아웃이나 프레젠테이션을 조작하는 여러 프로퍼티와 메서드들을 제공합니다. 또한 `HTMLCanvasElement` 인터페이스는 {{domxref("HTMLElement")}} 인터페이스의 여러 프로퍼티와 메서드들을 상속받습니다.

## 프로퍼티

_부모객체인 _{{domxref("HTMLElement")}} 로*부터 프로퍼티를 상속받음.*

- {{domxref("HTMLCanvasElement.height")}}
  - : 는 {{HTMLElement("canvas")}} 요소에서 HTML 속성인 [`height`](/ko/docs/Web/HTML/Element/canvas#height)를 반영하는 양의 정수이며, CSS의 픽셀값으로 해석되어집니다. 속성값이 주어지지 않거나, 음수와 같이 올바르지 않은 값이 주어진 경우에는 기본 값인 150이 사용됩니다.
- {{domxref("HTMLCanvasElement.mozOpaque")}} {{non-standard_inline}}
  - : 는 {{HTMLElement("canvas")}} 요소에서 HTML 속성인 [`moz-opaque`](/ko/docs/Web/HTML/Element/canvas#moz-opaque)를 반영하는 {{jsxref("Boolean")}} 객체입니다. 이는 `<canvas>`에게 반투명이 인자로 사용될지에 대한 여부를 알려줍니다. 만약 반투명 요소가 없다면, `<canvas>`의 성능이 최적화될 수 있습니다.
- {{domxref("HTMLCanvasElement.width")}}
  - : 는 {{HTMLElement("canvas")}} 요소에서 HTML 속성인 [`width`](/ko/docs/Web/HTML/Element/canvas#width)를 반영하는 양의 정수이며, CSS의 픽셀값으로 해석되어집니다. 속성값이 주어지지 않거나, 음수와 같이 올바르지 않은 값이 주어진 경우에는 기본 값인 300이 사용됩니다.
- {{domxref("HTMLCanvasElement.mozPrintCallback")}}{{non-standard_inline}}
  - : 는 페이지가 프린트 되는 경우 호출되는 함수입니다. 사용자는 해당 객체에 특정 자바스크립트 함수를 등록함으로써, 만약 프린터가 사용되는 경우 `<canvas>`를 더욱 고해상도로 다시 그리게 할 수 있습니다. 기본적으로 null 값을 갖습니다. [다음의 블로그 글을 참조하세요.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## 메서드

_부모객체인 {{domxref("HTMLElement")}} 로부터 메서드를 상속받음._

- {{domxref("HTMLCanvasElement.captureStream()")}} {{experimental_inline}}
  - : \<canvas> 상의 화면을 실시간 비디오로 캡처할 수 있는 {{domxref("CanvasCaptureMediaStream")}} 을 반환합니다.
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : \<canvas> 상의 드로잉 컨텍스트를 반환합니다. 만약 컨텍스트 ID가 지원되지 않는 경우 null값을 반환합니다. 드로잉 컨텍스트는 \<canvas> 상에 그림을 그릴 수 있게 해줍니다. getContext를 `"2d"` 를 매개 변수로 호출한다면 {{domxref("CanvasRenderingContext2D")}} 객체를 반환할 것이며, `"experimental-webgl"` (또는 `"webgl"`) 를 매개 변수로 호출한다면 {{domxref("WebGLRenderingContext")}} 객체를 반환할 것입니다. 후자의 컨텍스트의 경우 [WebGL](/ko/docs/Web/WebGL) 이 구현된 브라우저에서만 사용 가능합니다.
- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : `type` 파라미터에서 지정하고 있는 포맷(기본: png) 의 이미지를 나타내는 data-URL을 반환합니다. 반환된 이미지는 96dpi의 해상도를 갖습니다.
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : \<canvas>가 포함하고 있는 이미지를 나타내는 {{domxref("Blob")}} 객체를 생성합니다. 이 파일은 사용자의 브라우저에 따라 디스크나 메모리에 캐싱되거나 저장될 수 있습니다.
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} {{experimental_inline}}
  - : 메인 쓰레드나 워커 쓰레드에서 {{domxref("OffscreenCanvas")}} 객체에게 제어 권한을 넘깁니다.
- {{domxref("HTMLCanvasElement.mozGetAsFile()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : \<canvas>가 포함하고 있는 이미지를 나타내는 {{domxref("File")}} 객체를 반환합니다. 이 파일은 메모리 기반의 파일이며, `name` 의 이름을 갖습니다. 만약 `type` 이 지정되지 않는다면, 이미지는 기본적으로 `image/png`의 타입을 갖게 될 것입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- 이 인터페이스를 구현한 HTML 요소: {{HTMLElement("canvas")}}.
