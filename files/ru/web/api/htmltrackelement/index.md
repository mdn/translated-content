---
title: HTMLTrackElement
slug: Web/API/HTMLTrackElement
---

{{ APIRef("HTML DOM") }}

**`HTMLTrackElement`**

{{InheritanceDiagram(600, 120)}}

## Свойства

_Наследует свойства своего родителя, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTrackElement.kind")}}
  - : Тип данных {{domxref("DOMString")}}, так как отображает значение HTML-атрибута [`kind`](/ru/docs/Web/HTML/Element/track#kind). Показывает, как будет использоваться текстовый трек. Возможные значения: `subtitles`, `captions`, `descriptions`, `chapters`, `metadata` (субтитры, подписи, описания, главы или метаданные).
- {{domxref("HTMLTrackElement.src")}}
  - : Тип данных {{domxref("DOMString")}}, так как отображает значение HTML-атрибута [`src`](/ru/docs/Web/HTML/Element/track#src). Указывает адрес файла текстового трека.
- {{domxref("HTMLTrackElement.srclang")}}
  - : Тип данных {{domxref("DOMString")}}, так как отображает значение HTML-атрибута [`srclang`](/ru/docs/Web/HTML/Element/track#srclang). Указывает язык текстового трека.
- {{domxref("HTMLTrackElement.label")}}
  - : Тип данных {{domxref("DOMString")}} , так как отображает значение HTML-атрибута [`label`](/ru/docs/Web/HTML/Element/track#label). Определяет видимый пользователю заголовок трека.
- {{domxref("HTMLTrackElement.default")}}
  - : Тип данных {{domxref("Boolean")}}, отображает значение HTML-атрибута [`default`](/ru/docs/Web/HTML/Element/track#default). Указывает, что это текстовый трек по умолчанию, если пользовательские настройки не определят другой трек, как более уместный.
- {{domxref("HTMLTrackElement.readyState")}} {{ReadOnlyInline}}

  - : Возвращает значение типа `unsigned short`, которое показывает доступность трека для чтения:

    | Константа | Значение | Описание                                                                                                                                                                                              |
    | --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NONE`    | 0        | Показывает, что метки текстового трека не получены.                                                                                                                                                   |
    | `LOADING` | 1        | Показывает, что текстовый трек загружается, и пока не было обнаружено фатальных ошибок. Дополнительные метки могут быть добавлены в трек парсером.                                                    |
    | `LOADED`  | 2        | Указывает, что текстовая дорожка загружена без фатальных ошибок.                                                                                                                                      |
    | `ERROR`   | 3        | Указывает, что текстовый трек был получен, но когда пользовательский агент попытался его использовать, произошла какая-то ошибка. Некоторые или все метки, вероятно, отсутствуют и не будут получены. |

- {{domxref("HTMLTrackElement.track")}} {{ReadOnlyInline}}
  - : Возвращает {{Domxref("TextTrack")}} is the track element's text track data.

| `track` {{ReadOnlyInline}} | {{Domxref("TextTrack")}} | The track element's text track data. |
| -------------------------- | ------------------------ | ------------------------------------ |

## Методы

_Нет специфичных методов; наследует методы из родительского элемента, {{domxref("HTMLElement")}}._

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("track") }}.
