---
title: VRStageParameters.sittingToStandingTransform
slug: Web/API/VRStageParameters/sittingToStandingTransform
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Постоянное свойство **`sittingToStandingTransform`** (read-only, только для чтения ) интерфейса {{domxref("VRStageParameters")}} содержит матрицу, которая преобразует матрицы горизонтального вида {{domxref("VRFrameData")}} в вертикальный.

В основном, это может быть передано в ваш кроссплатформенный WebGL-код для преобразования визуализированного вида из горизонтального в вертикальный.

## Синтаксис

```js
var myTransform = vrStageParametersInstance.sittingToStandingTransform;
```

### Value

16-значный элемент {{domxref ("Float32Array")}}, содержащий компоненты матрицы преобразования вида 4 × 4.

## Пример

{{page("/Web/API/VRStageParameters", "Examples")}}

## Спецификации

{{Specifications}}

## Режим совместимости браузера

{{Compat}}

## Дополнительно

- [WebVR API homepage](/ru/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — демонстрационные, доступные для загрузки и другие материалы команды Mozilla VR team.
