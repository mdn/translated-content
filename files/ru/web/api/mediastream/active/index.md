---
title: active
slug: Web/API/MediaStream/active
---

{{APIRef("Media Capture and Streams")}}

Свойство только для чтения **`active`** интерфейса {{domxref("MediaStream")}} возвращает логическое значение, которое может быть `true`, если стрим активен; во всех остальных случаях, будет возвращён `false`. Стрим считается **активным,** если хотя бы один из {{domxref("MediaStreamTrack")}} не находится в состоянии {{domxref("MediaStreamTrack.ended")}}. Как только все track завершатся, свойство `active` переключится в состояние `false`.

## Синтаксис

```
var isActive = MediaStream.active;
```

### Значение

Логическое значение равно `true`, если стрим активен; в противном случае, возвращается `false`.

## Пример

В этом примере, стрим ведётся с пользовательского микрофона и веб-камеры, запрошенных с помощью {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}. Когда стрим становится активным (а это тогда, когда выполнен {{jsxref("Promise")}}, кнопка на странице обновляется, опираясь на состояние стрима, активен он или же нет.

```js
var promise = navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true
});

promise.then(function(stream) {
  var startBtn = document.querySelector('#startBtn');
  startBtn.disabled = stream.active;
};)
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
