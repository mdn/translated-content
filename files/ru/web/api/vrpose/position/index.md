---
title: VRPose.position
slug: Web/API/VRPose/position
l10n:
  sourceCommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Доступное только для чтения свойство **`position`** интерфейса {{domxref ("VRPose")}} возвращает позицию {{domxref ("VRDisplay")}} в текущий момент времени {{domxref ("VRPose.timestamp")}} в виде 3D-вектора.

> [!NOTE]
> Это свойство было частью старого [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), который был заменён на [WebXR Device API](https://immersive-web.github.io/webxr/).

Система координат выглядит следующим образом:

- Положительное значение X — справа от пользователя.
- Положительное значение Y — сверху.
- Положительное значение Z — позади от пользователя.

Позиции измеряются в метрах от исходной точки — эта точка является либо положением, в котором датчик был впервые считан, либо положением датчика в точке, в которой в последний раз вызывали {{domxref ("VRDisplay.resetPose ()")}}.

> [!NOTE]
> По умолчанию все позиции даны как имеющие горизонтальное расположение. Преобразование этой точки с помощью параметра {{domxref ("VRStageParameters.sittingToStandingTransform")}}, например, когда вы работаете с отображением комнаты, преобразует это в вертикальное расположение.

### Значение

{{domxref("Float32Array")}} или `null`, если VR-датчик не может предоставить данные о местоположении.

> [!NOTE]
> Пользовательские агенты могут предоставлять эмулированные значения положения с помощью таких методов, как моделирование шеи; при этом {{domxref ("VRDisplayCapabilities.hasPosition")}} должен возвращать `false`.

## Пример

Смотрите примеры использования в [`VRDisplay.getFrameData()`](/ru/docs/Web/API/VRDisplay/getFrameData#examples).

## Спецификации

Это свойство было частью старого [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), который был заменён на [WebXR Device API](https://immersive-web.github.io/webxr/). Больше не планируется сделать его стандартом.

Пока все браузеры не реализуют новые [WebXR API](/ru/docs/Web/API/WebXR_Device_API/Fundamentals), рекомендуется использовать такие фреймворки как [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), [Three.js](https://threejs.org/) или [полифил](https://github.com/immersive-web/webxr-polyfill) для разработки приложений WebXR, которые будут работать [во всех браузерах](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebVR API](/ru/docs/Web/API/WebVR_API)
