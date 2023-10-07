---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
---

{{APIRef("HTML DOM")}}

**`HTMLAudioElement`** позволяет получить доступ к элементу {{HTMLElement("audio")}} и имеет DOM-элемент {{domxref("HTMLMediaElement")}}.

## Свойства

_Не имеет своих свойств; наследует свойства от родителя {{domxref("HTMLMediaElement")}} и от {{domxref("HTMLElement")}}._

## Методы

_Наследует методы от родителя {{domxref("HTMLMediaElement")}} и от {{domxref("HTMLElement")}}._

### Конструктор

#### Синтаксис

```
mySound = new Audio([URLString]);
```

#### Описание

Конструктор audio элемента. Свойство `preload` по умолчанию задано как `auto`, а `src` равно значению аргумента _URLString._ Перед воспроизведением, браузер асинхронно загружает объект в кеш и впоследствии берёт данные оттуда.

Параметры

- `URLString` (expected type: {{domxref("DOMString")}}; optional)
  - : 'src' для 'audio' тега. (URL , с которого должен получать mp3 файл)

### Регулярные методы

| Name & Arguments                                                           | Return               | Description                                                                                                                                                                          |
| -------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mozCurrentSampleOffset()` {{non-standard_inline}}                         | `unsigned long long` | `Отображает текущую нагрузку аудиострима, который был создан методом mozWriteAudio()`. Эта цифра отражает количество сэмплов с момента начала стрима                                 |
| `mozSetup(in PRUint32 channels, in PRUint32 rate)` {{non-standard_inline}} | `void`               | Создаёт аудиострима для записи. Вы можете указать такие параметры, как количество каналов (`1` for mono or `2` for stereo), так и частота сэмпла (`44100` for 44.1kHz, for example). |
| `mozWriteAudio(in jsval data)` {{non-standard_inline}}                     | `unsigned long`      | Запускает аудио стрим на текущую частоту. Возвращает количество байтов, которые записаны в стрим                                                                                     |

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML element implementing this interface: {{HTMLElement("audio")}}.
