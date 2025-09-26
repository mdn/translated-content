---
title: "VRStageParameters: свойство sizeY"
slug: Web/API/VRStageParameters/sizeY
l10n:
  sourceCommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Доступное только для чтения свойство **`sizeY`** интерфейса {{domxref("VRStageParameters")}} возвращает глубину границ игровой зоны в метрах.

> [!NOTE]
> Это свойство было частью старого [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), который был заменён на [WebXR Device API](https://immersive-web.github.io/webxr/).

В целях безопасности границы определяются как прямоугольник на полу. Приложение не должно требовать от пользователя выходить за эти границы, однако пользователь может игнорировать границы, что будет приводит к выходу значений за границы этого прямоугольника. Центр прямоугольника находится в точке с координатами (0,0,0).

### Значение

Число типа float, представляющее глубину в метрах.

## Examples

Смотрите примеры использования в [`VRStageParameters`](/ru/docs/Web/API/VRStageParameters#examples).

## Спецификации

Это свойство было частью старого [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), который был заменён на [WebXR Device API](https://immersive-web.github.io/webxr/). Больше не планируется сделать его стандартом.

Пока все браузеры не реализуют новые [WebXR API](/ru/docs/Web/API/WebXR_Device_API/Fundamentals), рекомендуется использовать такие фреймворки как [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), [Three.js](https://threejs.org/) или [полифил](https://github.com/immersive-web/webxr-polyfill) для разработки приложений WebXR, которые будут работать [во всех браузерах](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebVR API](/ru/docs/Web/API/WebVR_API)
