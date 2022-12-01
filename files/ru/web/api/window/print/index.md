---
title: Window.print()
slug: Web/API/Window/print
translation_of: Web/API/Window/print
---
{{ ApiRef() }}

## Описание

Открывает диалоговое окно для печати текущего документа.

## Синтаксис

```
window.print()
```

## Примечания

Начиная с Chrome 46.0 этот метод заблокирован внутри {{htmlelement("iframe")}} до тех пор, пока его атрибут sandbox не имеет значение `allow-modals`.

## Спецификации

| Спецификация                                                                                             | Статус                           | Комментарий |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', 'timers-and-user-prompts.html#printing', 'print()')}} | {{Spec2('HTML WHATWG')}} |             |

## Смотрите также

- [Printing](/en/Printing)
- {{ domxref("window.onbeforeprint") }}
- {{ domxref("window.onafterprint") }}
