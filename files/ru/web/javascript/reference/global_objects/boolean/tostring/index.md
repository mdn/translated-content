---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
---

{{JSRef}}

## Сводка

Метод **`toString()`** возвращает строковое представление указанного объекта {{jsxref("Boolean")}}.

## Синтаксис

```
bool.toString()
```

### Параметры

Нет.

## Описание

Объект {{jsxref("Boolean")}} переопределяет метод `toString` объекта {{jsxref("Object")}}; он не наследует метод {{jsxref("Object.prototype.toString()")}}. Для объектов {{jsxref("Boolean")}} метод `toString` возвращает строковое представление объекта.

JavaScript вызывает метод `toString` автоматически, когда объект {{jsxref("Boolean")}} должен быть представлен в виде текста или когда объект {{jsxref("Boolean")}} находится в контексте строковой конкатенации.

Для объектов и значений {{jsxref("Boolean")}} встроенный метод `toString` возвращает строки «`true`» или «`false`» в зависимости от значения логического объекта.

## Примеры

### Пример: использование `toString`

В следующем коде вызов `flag.toString()` вернёт строку `"true"`:

```js
var flag = new Boolean(true);
var myVar = flag.toString();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toString()")}}
