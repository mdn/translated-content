---
title: VRStageParameters.sizeX
slug: Web/API/VRStageParameters/sizeX
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Неизменяемое свойство **sizeX** (только для чтения) интерфейса "VRStageParameters" возвращает ширину границ игровой зоны в метрах.

В целях безопасности границы определяются как прямоугольник, ориентированный по оси основания. Контент не должен требовать от пользователя выхода за эти пределы; однако пользователь может игнорировать границы, что приводит к значениям положения вне этого прямоугольника. Центр прямоугольника находится в точке с координатами (0,0,0).

## Syntax

```js
var mySizeX = vrStageParametersInstance.sizeX;
```

### Value

Параметр типа float, представляющий ширину в метрах..

## Examples

{{page("/Web/API/VRStageParameters", "Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/ru/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — демонстрационные, материалы для загрузки и другие ресурсы команды Mozilla VR team.
