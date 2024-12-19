---
title: Console.warn()
slug: Web/API/console/warn_static
---

{{APIRef("Console API")}}Выводит предупреждение в веб-консоль.

{{AvailableInWorkers}}

> [!NOTE]
> В Firefox, предупреждения имеют небольшое изображение восклицательного знака перед сообщением.

## Синтаксис

```
console.warn(obj1 [, obj2, ..., objN]);
console.warn(msg [, subst1, ..., substN]);
```

## Параметры

- `obj1` ... `objN`
  - : Список объектов JavaScript для вывода. Строковые представления каждого из этих объектов соединяются вместе в указанном порядке и выводятся.
- `msg`
  - : Строка JavaScript, содержащая 0 и более [подстановочных символов](/ru/docs/Web/API/console#using_string_substitutions) для замен.
- `subst1` ... `substN`
  - : JavaScript-объекты, с помощью которых произойдёт замена подстановочных символов в `msg`. Это даст вам дополнительный контроль над форматом вывода.

Больше подробностей смотрите в разделе [Вывод текста в консоль](/ru/docs/Web/API/console#outputting_text_to_the_console) документации {{domxref("console")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Opera Dragonfly documentation: Console](https://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
