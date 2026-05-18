---
title: ImageData
slug: Web/API/ImageData
l10n:
  sourceCommit: eba7ce08cf50c5d9e344652748f6bcfb19f3a396
---

{{APIRef("Canvas API")}}

**`ImageData`** 인터페이스는 {{HTMLElement("canvas")}} 요소 영역의 기본 픽셀 데이터를 나타냅니다.

캔버스와 연결된 {{domxref("CanvasRenderingContext2D")}} 객체의 {{domxref("ImageData.ImageData", "ImageData()")}} 생성자 또는 생성자 메서드인 {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} 및 {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} 를 사용하여 생성됩니다. {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}} 를 사용하여 캔버스의 일부를 설정하는 데에도 사용할 수 있습니다.

## Constructors

- {{domxref("ImageData.ImageData", "ImageData()")}}
  - : 주어진 {{jsxref("Uint8ClampedArray")}} 또는 {{jsxref("Float16Array")}} 와 해당 배열이 포함하는 이미지의 크기로 `ImageData` 객체를 생성합니다. 배열이 주어지지 않으면, 투명한 검은색 사각형 이미지를 생성합니다. {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} 는 워커에서 사용할 수 없으므로 워커에서 이러한 객체를 생성하는 가장 일반적인 방법임을 유의해야합니다.

## Instance properties

- {{domxref("ImageData.data")}} {{ReadOnlyInline}}
  - : RGBA 순서로 데이터를 포함하는 1차원 배열을 나타내는 {{jsxref("Uint8ClampedArray")}} 또는 {{jsxref("Float16Array")}} 입니다. 순서는 왼쪽 상단 픽셀부터 오른쪽 하단까지 행 단위로 진행됩니다.
- {{domxref("ImageData.colorSpace")}} {{ReadOnlyInline}}
  - : 이미지 데이터의 색 공간을 나타내는 문자열.
- {{domxref("ImageData.height")}} {{ReadOnlyInline}}
  - : `ImageData` 의 픽셀 단위 실제 높이를 나타내는 `unsigned long`.
- {{domxref("ImageData.width")}} {{ReadOnlyInline}}
  - : `ImageData` 의 픽셀 단위 실제 너비를 나타내는 `unsigned long`.
- {{domxref("ImageData.pixelFormat")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : `ImageData` 에 사용할 형식을 나타내는 문자열.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("CanvasRenderingContext2D")}}
- {{HTMLElement("canvas")}} 관련 요소와 관련 인터페이스, {{domxref("HTMLCanvasElement")}}.
