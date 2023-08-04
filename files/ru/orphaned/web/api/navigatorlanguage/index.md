---
title: NavigatorLanguage
slug: orphaned/Web/API/NavigatorLanguage
---

{{APIRef("HTML DOM")}}

**`NavigatorLanguage`** содержит методы и свойства, связанные с языком навигатора.

В нем нет объекта типа `NavigatorLanguage`, но другие интерфейсы, такие как {{domxref("Navigator")}} или {{domxref("WorkerNavigator")}}, реализуют его.

## Свойства

_Интерфейс `NavigatorLanguage` не наследует других свойств._

- {{domxref("NavigatorLanguage.language")}} {{readonlyInline}}
  - : Возвращает {{domxref("DOMString")}} представляющий собой предпочитаемый язык пользователя, как правило, язык пользовательского интерфейса браузера.
- {{domxref("NavigatorLanguage.languages")}} {{readonlyInline}}
  - : Возвращает массив {{domxref("DOMString")}} представляющий собой языки известные пользователю в порядке предпочтения.

## Методы

_Интерфейс_ _`NavigatorLanguage`_ _ничего не реализовывает и ничего не наследует._

## Спецификации

| Спецификация                                                                                 | Статус                           | Комментарий                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', '#navigatorlanguage', 'NavigatorLanguage')}} | {{Spec2('HTML WHATWG')}} | Со времени последнего снимка {{SpecName('HTML5 W3C')}}, языковое свойство было добавлено. |
| {{SpecName('HTML5 W3C', '#navigatorlanguage', 'NavigatorLanguage')}} | {{Spec2('HTML5 W3C')}}     | Первоначальная спецификация; снимок ранней версии {{SpecName('HTML WHATWG')}}.          |

## Доступность в браузерах

{{Compat("api.NavigatorLanguage")}}

## Смотрите также

- Интерфейс {{domxref("Navigator")}} который реализует его.
