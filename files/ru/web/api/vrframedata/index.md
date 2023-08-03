---
title: VRFrameData
slug: Web/API/VRFrameData
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Интерфейс VRFrameData API WebVR представляет всю информацию, необходимую для визуализации одного кадра сцены Виртуальной реальности; сконструирован с помощью {{domxref ("VRDisplay.getFrameData ()")}}.

## Конструктор

- {{domxref("VRFrameData.VRFrameData()")}}
  - : Создаёт экземпляр объекта VRFrameData.

## Свойства

- {{domxref("VRFrameData.leftProjectionMatrix")}} {{readonlyInline}}
  - : Параметр {{Domxref ("Float32Array")}}, представляющий матрицу 4x4, которая описывает проекцию, которая будет использоваться для рендеринга левого глаза.
- {{domxref("VRFrameData.leftViewMatrix")}} {{readonlyInline}}
  - : Параметр {{Domxref ("Float32Array")}}, представляющий матрицу 4x4, которая описывает преобразование вида, которое будет использоваться для визуализации для левого глаза.
- {{domxref("VRFrameData.pose")}} {{readonlyInline}}
  - : Параметр {{Domxref ("VRPose")}} {{domxref ("VRDisplay")}} в текущем {{domxref ("VRFrameData.timestamp")}}.
- {{domxref("VRFrameData.rightProjectionMatrix")}} {{readonlyInline}}
  - : Параметр {{Domxref ("Float32Array")}}, представляющий матрицу 4x4, которая описывает проекцию, которая будет использоваться для рендеринга для правого глаза.
- {{domxref("VRFrameData.rightViewMatrix")}} {{readonlyInline}}
  - : {{Domxref ("Float32Array")}}, представляющий матрицу 4x4, которая описывает преобразование вида, которое будет использоваться для визуализации для правого глаза.
- {{domxref("VRFrameData.timestamp")}} {{readonlyInline}}
  - : Постоянно увеличивающееся значение отметки времени, представляющее время, когда произошло обновление кадра.

## Примеры

{{page("/Web/API/VRDisplay/getFrameData", "Examples")}}

## Спецификации

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Дополнительно

- [WebVR API homepage](/ru/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — демонстрационные материалы, материалы доступные для загрузки и другие ресурсы команды Mozilla VR team.
