---
title: VRDisplayCapabilities
slug: Web/API/VRDisplayCapabilities
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Интерфейс **VRDisplayCapabilities** WebVR API описывает возможности {{domxref ("VRDisplay")}} - его функции можно использовать для тестирования возможностей устройства Виртуальной Реальности (VR), например, он может возвращать информацию о местоположении.

Данный интерфейс доступен в свойстве {{domxref ("VRDisplay.capabilities")}}.

## Свойства

- {{domxref("VRDisplayCapabilities.canPresent")}} {{readonlyInline}}
  - : Возвращает параметр {{domxref ("Boolean")}}, указывающий, способен ли дисплей VR представлять контент (например, через HMD - Наголовный дисплей).
- {{domxref("VRDisplayCapabilities.hasExternalDisplay")}} {{readonlyInline}}
  - : Возвращает параметр {{domxref ("Boolean")}}, указывающий, является ли дисплей VR отдельным от основного дисплея устройства.
- {{domxref("VRDisplayCapabilities.hasOrientation")}} {{deprecated_inline()}} {{readonlyInline}}
  - : Возвращает параметр {{domxref ("Boolean")}}, указывающий, может ли дисплей VR отслеживать и возвращать информацию об ориентации в пространстве .
- {{domxref("VRDisplayCapabilities.hasPosition")}} {{readonlyInline}}
  - : Возвращает параметр {{domxref ("Boolean")}}, указывающий, может ли дисплей VR отслеживать и возвращать информацию о положении.
- {{domxref("VRDisplayCapabilities.maxLayers")}} {{readonlyInline}}
  - : Возвращает число, указывающее максимальное значение {{domxref ("VRLayer")}}, которое дисплей VR может представить одновременно (например, максимальную длину массива, который {{domxref ("VRDisplay.requestPresent ()")}} может принять.)

## Примеры

```js
function reportDisplays() {
  navigator.getVRDisplays().then(function (displays) {
    for (var i = 0; i < displays.length; i++) {
      var cap = displays[i].capabilities;
      // cap is a VRDisplayCapabilities object
      var listItem = document.createElement("li");
      listItem.innerHTML =
        "<strong>Display " +
        (i + 1) +
        "</strong>" +
        "<br>VR Display ID: " +
        displays[i].displayId +
        "<br>VR Display Name: " +
        displays[i].displayName +
        "<br>Display can present content: " +
        cap.canPresent +
        "<br>Display is separate from the computer's main display: " +
        cap.hasExternalDisplay +
        "<br>Display can return position info: " +
        cap.hasPosition +
        "<br>Display can return orientation info: " +
        cap.hasOrientation +
        "<br>Display max layers: " +
        cap.maxLayers;
      list.appendChild(listItem);
    }
  });
}
```

## Спецификации

{{Specifications}}

## Режим совместимости браузера

{{Compat}}

## Дополнительно

- [WebVR API homepage](/ru/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — демонстрационные, материалы для загрузки и другие ресурсы команды Mozilla VR team.
