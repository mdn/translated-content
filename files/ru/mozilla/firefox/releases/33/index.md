---
title: Firefox 33 для разработчиков
slug: Mozilla/Firefox/Releases/33
---

Хотите помочь с документацией к Firefox 33? Взгляните на [список багов нуждающихся в описании](http://beta.elchi3.de/doctracker/#list=fx&version=33.0) и помогите нам!

## Список изменения для веб - разработки

### Инструменты разработчика

_Нет изменений._

### CSS

- Реализовано **@counter-style** правило([Firefox bug 966166](https://bugzil.la/966166)).
- Больше нет необходимости использовать префикс **-moz-ethiopic-numeric**([Firefox bug 985825](https://bugzil.la/985825)).
- Добавлена поддержка **disclosure-open/disclosure-closed** стилей счётчиков([Firefox bug 982355](https://bugzil.la/982355)).
- CSS-анимация с пустыми keyframes свойствами обрабатывает события по умолчанию([Firefox bug 1004377](https://bugzil.la/1004377)).

### HTML

_Нет изменений._

### JavaScript

- Удалён нестандартный метод {{jsxref("Number.toInteger()")}} ([Firefox bug 1022396](https://bugzil.la/1022396)).
- Методы {{jsxref("Map.prototype.set()")}}, {{jsxref("WeakMap.prototype.set()")}} and {{jsxref("Set.prototype.add()")}} можно использовать последовательно, больше не возвращают `undefined` в место этого возвращают объект. ([Firefox bug 1031632](https://bugzil.la/1031632)).
- Добавлена поддержка типа данных "Symbol" из стандарта ECMAScript 6 ([Firefox bug 645416](https://bugzil.la/645416)):
  - {{jsxref("Symbol")}}
  - {{jsxref("Symbol.for()")}}
  - {{jsxref("Symbol.keyFor()")}}
  - {{jsxref("Object.getOwnPropertySymbols()")}}

- Параметры по умолчанию инициализированные до инициализации функции или в теле функции не могут быть использованы в качестве параметров по умолчанию ([Firefox bug 1022962](https://bugzil.la/1022962)).

### Interfaces/APIs/DOM

_Нет изменений._

### MathML

- Используются [Open Type MATH](https://wiki.mozilla.org/MathML:Open_Type_MATH_Table#Implementation_Status) для задания констант fractions, stacks, radicals и скриптов ([Firefox bug 961365](https://bugzil.la/961365)).

### SVG

_Нет изменений._

### Audio/Video

_Нет изменений._

## Безопасность

_Нет изменений._

## Изменения для плагинов и методов их разработки

_Нет изменений._

## Смотрите также

- [Совместимость сайтов для Firefox 33](/ru/docs/Mozilla/Firefox/Releases/33/Site_Compatibility)

### Предыдущие версии

{{Firefox_for_developers('32')}}
