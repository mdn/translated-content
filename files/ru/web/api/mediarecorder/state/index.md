---
title: MediaRecorder.state
slug: Web/API/MediaRecorder/state
---

{{APIRef("MediaStream Recording")}}

Свойство только для чтения **`MediaRecorder.state`** возвращает текущее состояние определённого объекта `MediaRecorder`.

## Синтаксис

```
var state = MediaRecorder.state
```

### Значения

Объект [AnimationPlayState](http://w3c.github.io/web-animations/#enumdef-animationplaystate) содержит одно из нижеперечисленных значений:

| Значение    | Описание                                                                            |
| ----------- | ----------------------------------------------------------------------------------- |
| `inactive`  | Запись не ведётся — она ещё не была начата или уже была осуществлена и остановлена. |
| `recording` | Запись начата и UA собирает данные.                                                 |
| `paused`    | Запись была начата, но поставлена на паузу, не остановлена и ещё не возобновлена.   |

## Пример

```js
...

  record.onclick = function() {
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    // Должно вернуть "recording"
    console.log("захват начат");
  }

...
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование MediaRecorder API](/ru/docs/Web/API/MediaRecorder_API/Using_the_MediaRecorder_API)
- [Веб-диктофон](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API от [Chris Mills](https://twitter.com/chrisdavidmills) ([исходники на Github](https://github.com/mdn/web-dictaphone/).)
- [simpl.info Демонстрация MediaStream Recording](http://simpl.info/mediarecorder/) от [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
