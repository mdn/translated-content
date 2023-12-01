---
title: MediaTrackConstraints.echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
---

{{APIRef("Media Capture and Streams")}}

Свойство **`echoCancellation`** объекта {{domxref("MediaTrackConstraints")}} это {{domxref("ConstrainBoolean")}} описывающее запрашиваемые или обязательные ограничения накладываемые на ограничивающее свойство {{domxref("MediaTrackSettings.echoCancellation", "echoCancellation")}}.

При необходимости вы можете определить, поддерживается ли это ограничение, проверив значение {{domxref("MediaTrackSupportedConstraints.echoCancellation")}} как результат вызова {{domxref("MediaDevices.getSupportedConstraints()")}}. Однако, обычно в этом нет необходимости, поскольку браузеры просто игнорируют любые незнакомые им ограничения.

Поскольку {{Glossary("RTP")}} не содержит эту информацию, медиа-треки связанные с [WebRTC](/ru/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} некогда не будут включать это свойство.

## Синтаксис

```
const constraintsObject = {
  echoCancellation: constraint,
};

constraintsObject.echoCancellation = constraint;
```

### Значение

Если это значение является простым `true` или `false`, пользовательский агент попытается получить медиа с включённым или отключённым эхоподавлением, если это возможно, но не вернёт ошибку, если это невозможно сделать. Иначе если значение передано как объект с полем `exact` , то логическое значение этого поля указывает обязательную настройку для эхоподавления; если это не может быть выполнены - запрос вернёт ошибку.

## Пример

Смотрите [Example: Constraint exerciser](/ru/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) для примера.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Media Capture and Streams API](/ru/docs/Web/API/Media_Streams_API)
- [Capabilities, constraints, and settings](/ru/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
