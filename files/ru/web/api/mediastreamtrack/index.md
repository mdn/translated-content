---
title: MediaStreamTrack
slug: Web/API/MediaStreamTrack
---

{{APIRef("Media Capture and Streams")}}

Интерфейс **`MediaStreamTrack`** представляет один медиа трек в потоке; обычно это аудио или видео трек, но могут использоваться и другие типы.

## Свойства

В дополнение к свойствам, перечисленным ниже, `MediaStreamTrack` имеет свойства с ограничениями, которые можно установить с помощью {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} и просмотреть с через {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} и {{domxref("MediaStreamTrack.getSettings", "getSettings()")}}. Смотрите [capabilities, constraints, and settings](/ru/docs/Web/API/Media_Streams_API/Constraints), чтобы узнать, как правильно работать со свойствами с ограничениями. Если использовать их неправильно, ваш код будет ненадёжным.

- {{domxref("MediaStreamTrack.contentHint")}}
  - : Строка, которую веб приложение может использовать для создания подсказок, какой тип данных содержит трек, чтобы их могли различать пользователи API.
- {{domxref("MediaStreamTrack.enabled")}}

  - : Имеет значение `true`, если трек включён, то есть может может отображать поток медиа; или `false`, если он выключен, то есть отображает не поток данных, а чёрное изображение без звука. Если трек отключён, это свойство можно менять, но это не будет давать никакого эффекта.

    > **Примечание:** Вы можете создать стандартную функцию "заглушить звук", устанавливая свойство `enabled` в значение `false`. Свойство `muted` используется, когда данные отсутствуют из-за технической проблемы.

- {{domxref("MediaStreamTrack.id")}} {{readonlyInline}}
  - : Возвращает объект {{domxref("DOMString")}}, содержащий уникальный идентификатор (GUID) трека; генерируется браузером.
- {{domxref("MediaStreamTrack.isolated")}} {{readonlyInline}}
  - : Возвращает `true`, если трек **изолирован**, то есть не доступен документу, которому принадлежит. Это случается, когда устанавливается свойство {{domxref("MediaStreamTrack.peerIdentity", "peerIdentity")}} или трек исходит от cross-origin ресурса.
- {{domxref("MediaStreamTrack.kind")}} {{readonlyInline}}
  - : Возвращает объект {{domxref("DOMString")}} со значением `"audio"`, если это аудио трек или `"video"`, если это видео трек. Не меняется, когда трек отвязывается от источника.
- {{domxref("MediaStreamTrack.label")}} {{readonlyInline}}
  - : Возвращает объект {{domxref("DOMString")}}, содержащий установленные агентом метки, обозначающие источник трека, например `"internal microphone"` (внутренний микрофон). Строка может быть пустой и является таковой, если не подключён никакой источник. Когда трек отвязывается от источника, метка не меняется.
- {{domxref("MediaStreamTrack.muted")}} {{readonlyInline}}

  - : Возвращает `true`, если трек не может предоставить данные по техническим причинам.

    > **Примечание:** Вы можете создать стандартную функцию "заглушить звук", устанавливая свойство `enabled` в значение `false`, и возвращать звук, снова устанавливая его в значение `true`.

- {{domxref("MediaStreamTrack.readonly")}} {{readonlyInline}}
  - : Возвращает `true`, если трек предназначен только для чтения (например, если его источник - видео файл или камера, настройки которой не могут быть изменены), иначе `false`.
- {{domxref("MediaStreamTrack.readyState")}} {{readonlyInline}}

  - : Возвращает одно из следующих значений, обозначающих статус трека:

    - `"live"` означает, что источник подключён и делает всё, чтобы предоставить данные в реальном времени. В этом случае, поток данных можно включать и выключать с помощью свойство {{domxref("MediaStreamTrack.enabled", "enabled")}}.
    - `"ended"` означает, что источник больше не предоставляет и больше не будет предоставлять данные.

- {{domxref("MediaStreamTrack.remote")}} {{readonlyInline}} {{deprecated_inline}}
  - : Имеет значение `true`, если источником трека является {{domxref("RTCPeerConnection")}}, иначе `false`.

## Методы

- {{domxref("MediaStreamTrack.applyConstraints()")}}
  - : Позволяет приложению указывать желательные и/или допустимые диапазоны значений для любого количества свойств с ограничениями объекта `MediaStreamTrack`.
- {{domxref("MediaStreamTrack.clone()")}}
  - : Возвращает копию объекта `MediaStreamTrack`.
- {{domxref("MediaStreamTrack.getCapabilities()")}}
  - : Возвращает список свойств с ограничениями, доступных объекту `MediaStreamTrack`.
- {{domxref("MediaStreamTrack.getConstraints()")}}
  - : Возвращает объект {{domxref('MediaTrackConstraints')}}, содержащий установленные ограничения на трек; возвращаемое значение удовлетворяет ограничениям, установленным методом {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}.
- {{domxref("MediaStreamTrack.getSettings()")}}
  - : Возвращает объект {{domxref("MediaTrackSettings")}}, содержащий текущее значение всех свойств с ограничениями объекта `MediaStreamTrack`.
- {{domxref("MediaStreamTrack.stop()")}}
  - : Останавливает проигрывание источника, к которому привязан трек. И источник, и трек отвязываются. Состояние трека устанавливается в значение `ended`.

## События

- [`ended`](/ru/docs/Web/API/MediaStreamTrack/ended_event)
  - : Вызывается, когда проигрывание трека останавливается (когда значение {{domxref("MediaStreamTrack.readyState", "readyState")}} становится `ended`).
    Обработчик может быть установлен как свойство [`onended`](/ru/docs/Web/API/MediaStreamTrack/onended).
- [`mute`](/ru/docs/Web/API/MediaStreamTrack/mute_event)
  - : Вызывается, когда {{domxref("MediaStreamTrack.muted", "muted")}} принимает значение `true`, что означает, что трек временно не может предоставлять данные (например, при плохом подключении сети).
    Обработчик может быть установлен как свойство [`onmute`](/ru/docs/Web/API/MediaStreamTrack/onmute).
- [`isolationchange`](/ru/docs/Web/API/MediaStreamTrack/isolationchange_event)
  - : Вызывается, когда свойство {{domxref("MediaStreamTrack.isolated", "isolated")}} принимает значение `true` из-за того, что документ больше не имеет разрешение на доступ к треку.
    Обработчик может быть установлен как свойство [`onisolationchange`](/ru/docs/Web/API/MediaStreamTrack/onisolationchange).
- [`overconstrained`](/ru/docs/Web/API/MediaStreamTrack/overconstrained_event) {{deprecated_inline}}
  - : Вызывается, когда источник не удовлетворяет ограничениям трека, что делает его непригодным для использования.
    Обработчик может быть установлен как свойство [`onoverconstrained`](/ru/docs/Web/API/MediaStreamTrack/onoverconstrained).
- [`unmute`](/ru/docs/Web/API/MediaStreamTrack/unmute_event)
  - : Вызывается, когда данные снова становятся доступными, то есть пропадают технические проблемы.
    Обработчик может быть установлен как свойство [`onunmute`](/ru/docs/Web/API/MediaStreamTrack/onunmute).

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Media Capture and Streams API](/ru/docs/Web/API/Media_Streams_API)
- {{domxref("MediaStream")}}
