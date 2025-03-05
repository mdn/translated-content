---
title: "VRDisplayEvent: свойство display"
slug: Web/API/VRDisplayEvent/display
l10n:
  sourceCommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Доступное только для чтения свойство **`display`** интерфейса {{domxref ("VRDisplayEvent")}} возвращает объект {{domxref ("VRDisplay")}}, связанный с этим событием.

> [!NOTE]
> Это свойство было частью старого [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), который был заменён на [WebXR Device API](https://immersive-web.github.io/webxr/).

### Значение

Объект {{domxref("VRDisplay")}}.

## Примеры

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Устройство ${e.display.displayId} отображения было изменено по причине: ${e.reason}.`,
  );
});
```

## Спецификации

Это свойство было частью старого [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), который был заменён на [WebXR Device API](https://immersive-web.github.io/webxr/). Больше не планируется сделать его стандартом.

Пока все браузеры не реализуют новые [WebXR API](/ru/docs/Web/API/WebXR_Device_API/Fundamentals), рекомендуется использовать такие фреймворки как [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), [Three.js](https://threejs.org/) или [полифил](https://github.com/immersive-web/webxr-polyfill) для разработки приложений WebXR, которые будут работать [во всех браузерах](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebVR API](/ru/docs/Web/API/WebVR_API)
