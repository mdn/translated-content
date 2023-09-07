---
title: Console.log()
slug: Web/API/console/log
---

{{APIRef("Console API")}}

Выводит сообщение в веб-консоль.

{{AvailableInWorkers}}

## Синтаксис

```
console.log(obj1 [, obj2, ..., objN]);
console.log(msg [, subst1, ..., substN]);
```

## Параметры

- `obj1` ... `objN`
  - : Список объектов JavaScript для вывода. Объекты выводятся в том порядке, в котором они были указаны при вызове метода. Пожалуйста, обратите внимание, что если вы логируете объекты в последних версиях Chrome и Firefox, в консоль залогируется не значение объекта, а _ссылка_ на него. Это означает, что, возможно, в консоль будет выведено не значение объекта на момент вызова `console.log()`, а будет выведено значение объекта на момент открытия консоли.
- `msg`
  - : Строка JavaScript, содержащая 0 и более [подстановочных символов](/ru/docs/Web/API/console#Using_string_substitutions) для замены (см. `subst1` ... `substN`).
- `subst1` ... `substN`
  - : JavaScript-объекты, с помощью которых произойдёт замена подстановочных символов в `msg`. Это даст вам дополнительный контроль над форматом вывода.

Больше подробностей смотрите в разделе [Вывод текста в консоль](/ru/docs/DOM/console#Outputting_text_to_the_console) документации {{domxref("console")}}.

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Отличия от console.dir()

Вы можете спросить какая разница между console.dir() и console.log(). Это полезное отличие.

![](http://i.imgur.com/DozDcYR.png)

Примечание:

- `console.log` выводит элемент как HTML-дерево
- `console.dir` выводит элемент как JSON-объект

А именно, `console.log` даёт специальное обращение к DOM-элементам, тогда как `console.dir` - нет. Это особенно полезно, когда нужно видеть полное представление DOM JS-объектов.

Больше информации об этой и других функциях в [Chrome Console API reference](https://developers.google.com/chrome-developer-tools/docs/console-api#consoledirobject).

## Логирование объектов

Не используйте `console.log(obj);`,
Используйте `console.log(JSON.parse(JSON.stringify(obj)));`.

Так вы можете быть уверены, что видите значение `obj` в момент, его логирования.

## Смотрите также

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Firebug wiki: Console API](http://getfirebug.com/wiki/index.php/Console_API) - Firebug поддерживает дополнительные возможности реализации console.log(), такие как [styled logging](http://www.softwareishard.com/blog/firebug/firebug-tip-styled-logging/).
- [NodeJS: Console API](http://nodejs.org/docs/latest/api/console.html#console_console_log_data)
