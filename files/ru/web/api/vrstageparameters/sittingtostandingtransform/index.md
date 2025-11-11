---
title: "VRStageParameters: свойство sittingToStandingTransform"
slug: Web/API/VRStageParameters/sittingToStandingTransform
l10n:
  sourceCommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Доступное только для чтения свойство **`sittingToStandingTransform`** интерфейса {{domxref("VRStageParameters")}} содержит матрицу преобразования {{domxref("VRFrameData")}} из горизонтального вида в вертикальный.

> [!NOTE]
> Это свойство было частью старого [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), который был заменён на [WebXR Device API](https://immersive-web.github.io/webxr/).

Обычно это используется для передачи в WebGL-код для преобразования отображения из горизонтального вида в вертикальный.

### Значение

Массив {{domxref ("Float32Array")}}, содержащий компоненты матрицы преобразования 4×4.

## Примеры

Смотрите примеры использования в [`VRStageParameters`](/ru/docs/Web/API/VRStageParameters#examples).

## Спецификации

Это свойство было частью старого [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), который был заменён на [WebXR Device API](https://immersive-web.github.io/webxr/). Больше не планируется сделать его стандартом.

Пока все браузеры не реализуют новые [WebXR API](/ru/docs/Web/API/WebXR_Device_API/Fundamentals), рекомендуется использовать такие фреймворки как [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), [Three.js](https://threejs.org/) или [полифил](https://github.com/immersive-web/webxr-polyfill) для разработки приложений WebXR, которые будут работать [во всех браузерах](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebVR API](/ru/docs/Web/API/WebVR_API)
