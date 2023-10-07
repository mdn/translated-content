---
title: console.error()
slug: Web/API/console/error
---

{{APIRef("Console API")}}

Выводит сообщение об ошибке в веб-консоль.

{{AvailableInWorkers}}

## Синтаксис

```
console.error(obj1 [, obj2, ..., objN]);
console.error(msg [, subst1, ..., substN]);
console.exception(obj1 [, obj2, ..., objN]);
console.exception(msg [, subst1, ..., substN]);
```

> **Примечание:** `console.exception()` — это псевдоним для `console.error()`; они функционально идентичны.

### Параметры

- `obj1` ... `objN`
  - : Список объектов JavaScript для вывода. Строковое представление каждого из этих объектов объединяются в указанном порядке и выводятся.
- `msg`
  - : Строка JavaScript, содержащая 0 или более [подстановочных символов](/ru/docs/Web/API/console#Using_string_substitutions) для замены.
- `subst1` ... `substN`
  - : Объекты JavaScript, с помощью которых произойдёт замена символов в msg. Это предоставляет дополнительный контроль над форматом вывода.

Смотрите раздел [Вывод текста в консоль](/ru/docs/Web/API/console#Outputting_text_to_the_console) в документации {{domxref("console")}} для подробностей.

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Chrome Developer Tools: Using the Console](https://developers.google.com/chrome-developer-tools/docs/console#errors_and_warnings)
