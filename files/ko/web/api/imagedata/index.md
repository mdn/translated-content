---
title: ImageData
slug: Web/API/ImageData
---

{{APIRef("Canvas API")}}

**`ImageData`** 인터페이스는 {{HTMLElement("canvas")}} 요소 영역의 기본 픽셀 데이터를 나타냅니다.

캔버스와 연결된 {{domxref("CanvasRenderingContext2D")}} 객체의 {{domxref("ImageData.ImageData", "ImageData()")}} 생성자 또는 생성자 메서드인 {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} 및 {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} 를 사용하여 생성됩니다. {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}} 를 사용하여 캔버스의 일부를 설정하는 데에도 사용할 수 있습니다.

## Constructors

- {{domxref("ImageData.ImageData", "ImageData()")}} {{experimental_inline}}
  - : 인자로 주어진 {{jsxref("Uint8ClampedArray")}}로 부터 해당 크기에 맞는 ImageData객체를 생성합니다. 만약 인자가 주어지지 않으면 검정색 사각형 이미지를 생성합니다. {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}}는 worker에서 사용할 수 없기 때문에, ImageData의 생성자를 이용하는 것이 가장 일반적인 방법입니다.

## Properties

- {{domxref("ImageData.data")}} {{readonlyInline}}
  - : {{jsxref("Uint8ClampedArray")}}형식이며 1차원 배열로 RGBA순서로 정의된 이미지 데이터를 나타내니다. 각 원소는 정수값으로 0에서 255사이의 값을 갖습니다.
- {{domxref("ImageData.height")}} {{readonlyInline}}
  - : unsigned long형식으로 ImageData의 pixel기준의 실제 높이값입니다.
- {{domxref("ImageData.width")}} {{readonlyInline}}
  - : unsigned long형식으로 ImageData의 pixel기준의 실제 가로값입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D")}}
- The {{HTMLElement("canvas")}} element and its associated interface, {{domxref("HTMLCanvasElement")}}.
