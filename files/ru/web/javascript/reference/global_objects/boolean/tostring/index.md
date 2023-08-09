---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
---

{{JSRef("Global_Objects", "Boolean")}}

## Сводка

Метод **`toString()`** возвращает строковое представление указанного объекта {{jsxref("Global_Objects/Boolean", "Boolean")}}.

## Синтаксис

```
bool.toString()
```

### Параметры

Нет.

## Описание

Объект {{jsxref("Global_Objects/Boolean", "Boolean")}} переопределяет метод `toString` объекта {{jsxref("Global_Objects/Object", "Object")}}; он не наследует метод {{jsxref("Object.prototype.toString()")}}. Для объектов {{jsxref("Global_Objects/Boolean", "Boolean")}} метод `toString` возвращает строковое представление объекта.

JavaScript вызывает метод `toString` автоматически, когда объект {{jsxref("Global_Objects/Boolean", "Boolean")}} должен быть представлен в виде текста или когда объект {{jsxref("Global_Objects/Boolean", "Boolean")}} находится в контексте строковой конкатенации.

Для объектов и значений {{jsxref("Global_Objects/Boolean", "Boolean")}} встроенный метод `toString` возвращает строки «`true`» или «`false`» в зависимости от значения логического объекта.

## Примеры

### Пример: использование `toString`

В следующем коде вызов `flag.toString()` вернёт строку `"true"`:

```js
var flag = new Boolean(true);
var myVar = flag.toString();
```

## Спецификации

| Спецификация                                                                         | Статус             | Комментарии                                            |
| ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                              | Стандарт           | Изначальное определение. Реализована в JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.6.4.2', 'Boolean.prototype.toString')}}                 | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-boolean.prototype.tostring', 'Boolean.prototype.toString')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toString()")}}
