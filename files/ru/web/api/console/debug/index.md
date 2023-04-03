---
title: Console.debug()
slug: Web/API/console/debug
translation_of: Web/API/Console/debug
---

{{APIRef("Console API")}}

Выводит сообщение в веб.консоль Сообщение отображается только если консоль настроена на показ сообщений уровня отладки.

{{AvailableInWorkers}}

## Синтаксис

```
console.debug(obj1 [, obj2, ..., objN]);
console.debug(msg [, subst1, ..., substN]);
```

### Параметры

- `obj1` ... `objN`
  - : Список объектов JavaScript для вывода. Строковые представления каждого из этих объектов соединяются вместе в указанном порядке и выводятся.
- `msg`
  - : Строка JavaScript, содержащая 0 и более подстановочных символов для замены (см. `subst1` ... `substN`).
- `subst1` ... `substN`
  - : JavaScript-объекты, с помощью которых произойдёт замена подстановочных символов в `msg`. Это даст вам дополнительный контроль над форматом вывода. (см. {{SectionOnPage("/ru/docs/Web/API/Console", "Преобразование строк с использованием масок")}}).

Читайте [Вывод текста в консоль](/ru/docs/Web/API/Console#Outputting_text_to_the_console) в документации {{domxref("console")}} для получения дополнительной информации.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
