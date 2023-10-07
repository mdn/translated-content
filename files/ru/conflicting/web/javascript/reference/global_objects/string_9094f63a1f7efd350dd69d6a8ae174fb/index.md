---
title: USVString
slug: conflicting/Web/JavaScript/Reference/Global_Objects/String_9094f63a1f7efd350dd69d6a8ae174fb
original_slug: Web/API/USVString
---

{{APIRef("DOM")}}

**`USVString`** соответствует набору всех возможных последовательностей скалярных значений Unicode. `USVString` сопоставляется с {{JSxRef("String")}} при возврате в JavaScript; обычно он используется только для API, которые выполняют обработку текста и для работы нуждаются в строке скалярных значений Unicode. USVString эквивалентна {{DOMxRef("DOMString")}} за исключением того, что не позволяет использовать непарные суррогатные кодовые точки. Непарные суррогатные кодовые точки, присутствующие в USVString, конвертируются браузером в «замещающий символ» Unicode `U+FFFD`, (�).

## Спецификации

| Спецификация                                                             | Статус                   | Комментарий         |
| ------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName("WebIDL", "#idl-USVString", "USVString")}} | {{Spec2("WebIDL")}} | Initial definition. |

## Смотрите также

- {{JSxRef("String")}}
- {{DOMxRef("DOMString")}}
- {{DOMxRef("CSSOMString")}}
- [Binary strings](/ru/docs/Web/API/DOMString/Binary)
