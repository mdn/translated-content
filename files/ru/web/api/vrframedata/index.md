---
title: VRFrameData
slug: Web/API/VRFrameData
l10n:
  sourceCommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Интерфейс **`VRFrameData`** из [WebVR API](/ru/docs/Web/API/WebVR_API) предоставляет всю необходимую информацию для отображения одного кадра VR-сцены, создаётся с помощью {{domxref("VRDisplay.getFrameData()")}}.

> [!NOTE]
> Это свойство было частью старого [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), который был заменён на [WebXR Device API](https://immersive-web.github.io/webxr/).

## Конструктор

- {{domxref("VRFrameData.VRFrameData", "VRFrameData()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Создаёт экземпляр объекта `VRFrameData`.

## Свойства экземпляра

- {{domxref("VRFrameData.leftProjectionMatrix")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Массив {{Domxref ("Float32Array")}}, представляющий матрицу 4x4, которая описывает проекцию отображения для левого глаза.
- {{domxref("VRFrameData.leftViewMatrix")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Массив {{Domxref ("Float32Array")}}, представляющий матрицу 4x4, которая описывает преобразование отображения для левого глаза.
- {{domxref("VRFrameData.pose")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Объект {{Domxref ("VRPose")}} с данными о положении устройства {{domxref ("VRDisplay")}} в текущий момент времени {{domxref ("VRFrameData.timestamp")}}.
- {{domxref("VRFrameData.rightProjectionMatrix")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Массив {{Domxref ("Float32Array")}}, представляющий матрицу 4x4, которая описывает проекцию отображения для правого глаза
- {{domxref("VRFrameData.rightViewMatrix")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Массив {{Domxref ("Float32Array")}}, представляющий матрицу 4x4, которая описывает преобразование отображения для правого глаза.
- {{domxref("VRFrameData.timestamp")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Постоянно увеличивающееся значение отметки времени, представляющее время, когда произошло обновление кадра.

## Примеры

Смотрите примеры использования в [`VRDisplay.getFrameData()`](/ru/docs/Web/API/VRDisplay/getFrameData#examples).

## Спецификации

Это свойство было частью старого [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), который был заменён на [WebXR Device API](https://immersive-web.github.io/webxr/). Больше не планируется сделать его стандартом.

Пока все браузеры не реализуют новые [WebXR API](/ru/docs/Web/API/WebXR_Device_API/Fundamentals), рекомендуется использовать такие фреймворки как [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), [Three.js](https://threejs.org/) или [полифил](https://github.com/immersive-web/webxr-polyfill) для разработки приложений WebXR, которые будут работать [во всех браузерах](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebVR API](/ru/docs/Web/API/WebVR_API)
