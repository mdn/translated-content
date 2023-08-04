---
title: NavigatorPlugins
slug: orphaned/Web/API/NavigatorPlugins
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Интерфейс **`NavigatorPlugins`** содержит методы и свойства, связанные с установленными плагинами в браузере.

`NavigatorPlugins` не содержит в себе объектов другого типа, но другие интерфейсы, такие как {{domxref("Navigator")}} реализуют его`.`

## Свойства

- {{domxref("NavigatorPlugins.mimeTypes")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает {{domxref("MimeTypeArray")}} листинг MIME типов поддерживаемые браузером.
- {{domxref("NavigatorPlugins.plugins")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает листинг плагинов {{domxref("PluginArray")}}, установленных в браузере.

## Методы

Интерфейс _`NavigatorPlugins`_ не наследует никаких методов.

- {{domxref("NavigatorPlugins.javaEnabled")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает флаг {{domxref("Boolean")}} показывающий включён ли java в браузере или нет.

## Спецификации

| Спецификация                                                                                 | Статус                           | Комментарий           |
| -------------------------------------------------------------------------------------------- | -------------------------------- | --------------------- |
| {{SpecName('HTML WHATWG', '#navigatorplugins', 'NavigatorPlugins')}} | {{Spec2('HTML WHATWG')}} | Начальное определение |

## Доступность в браузерах

{{Compat("api.NavigatorPlugins")}}

## Смотрите также

- Интерфейс {{domxref("Navigator")}} реализующий его.
