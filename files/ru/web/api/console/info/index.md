---
title: Console.info()
slug: Web/API/console/info
---

{{APIRef("Console API")}}

Выводит сообщения, содержащие некоторую информацию, в Веб-консоль. В Firefox и Chrome, рядом с этими элементами в консоли отображается маленькая иконка "i".

{{AvailableInWorkers}}

## Синтаксис

```
console.info(obj1 [, obj2, ..., objN]);
console.info(msg [, subst1, ..., substN]);
```

## Параметры

- `obj1` ... `objN`
  - : Список объектов JavaScript, для вывода. Строковое представление каждого из них добавляется в указанном порядке вывода.
- `msg`
  - : Строка, содержащая 0 или более масок для замены.
- `subst1` ... `substN`
  - : Объекты JavaScript, которыми заменятся маски в строке `msg`. Так можно дополнительно контролировать формат вывода. Например, `console.info('Output %f', 234);` выведет в консоль: `Output 234.000000`

Смотрите [Вывод текста в консоль](/ru/docs/Web/API/console#Outputting_text_to_the_console) в документации {{domxref("console")}} для получения подробностей.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
