---
title: VRStageParameters.sizeY
slug: Web/API/VRStageParameters/sizeY
tags:
  - Виртуальная реальность
translation_of: Web/API/VRStageParameters/sizeY
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Свойство (параметр) **sizeY** только для чтения интерфейса {{domxref ("VRStageParameters")}} возвращает глубину границ игровой площадки в метрах.

В целях безопасности границы определяются как прямоугольник, ориентированный по оси на полу.. Контент (содержимое) не должен требовать от пользователя выхода за эти пределы; однако пользователь может игнорировать границы, что приводит к значениям положения вне этого прямоугольника. Центр прямоугольника находится в точке (0,0,0) в координатах замкнутого пространства.

## Syntax

```js
var mySizeY = vrStageParametersInstance.sizeY;
```

### Value

Параметр типа **float**, представляющий глубину в метрах.

## Examples

{{page("/Web/API/VRStageParameters", "Examples")}}

## Specifications

| Specification                                                                            | Status                       | Comment            |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('WebVR 1.1', '#dom-vrstageparameters-sizey', 'sizeY')}} | {{Spec2('WebVR 1.1')}} | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/ru/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — демонстрационные материалы,загружаемые и другие ресурсы команды Mozilla VR team.
