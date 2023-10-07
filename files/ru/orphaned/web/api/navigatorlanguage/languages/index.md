---
title: NavigatorLanguage.languages
slug: orphaned/Web/API/NavigatorLanguage/languages
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Свойство **`NavigatorLanguage.languages`** только для чтения, возвращающее массив {{domxref("DOMString")}} показывающее предпочитаемые пользователем языки. language описывает использование языковых тегов [BCP 47](http://tools.ietf.org/html/bcp47). В возвращаемом массиве они отсортированы по предпочтению с наиболее предпочитаемые языком в первую очередь.

Значение {{domxref("NavigatorLanguage.language","navigator.language")}} это первый элемент в полученном массиве.

Когда значение изменится, так как изменится предпочитаемый язык пользователя {{event("languagechange")}} событие уведомит объект {{domxref("Window")}}.

HTTP Заголовок `Accept-Language` в каждом HTTP запросе от браузера пользователя, использует такое же значение как и в свойстве `navigator.languages` кроме дополнительного `qvalues` (quality values) поля (например: `en-US;q=0.8`).

## Синтаксис

```
preferredLanguages = globalObj.navigator.languages
```

## Примеры

```js
navigator.language   //"en-US"
navigator.languages  //["en-US", "zh-CN", "ja-JP"]
```

## Спецификации

| Спецификация                                                                                                     | Статус                       | Комментарий        |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{ SpecName('HTML5.1', '#dom-navigator-languages', 'NavigatorLanguage.languages') }} | {{ Spec2('HTML5.1') }} | Начальное описание |

## Совместимость с браузерами

{{Compat("api.NavigatorLanguage.languages")}}

## Смотрите также

- {{domxref("NavigatorLanguage.language","navigator.language")}}
- {{domxref("Navigator")}}
- {{domxref("Window.onlanguagechange")}}
