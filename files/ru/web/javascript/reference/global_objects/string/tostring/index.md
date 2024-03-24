---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
---

{{JSRef}}

## Сводка

Метод **`toString()`** возвращает строку, представляющую указанный объект.

## Синтаксис

```
str.toString()
```

## Описание

Объект {{jsxref("Global_Objects/String", "String")}} переопределяет метод `toString()`, унаследованный из объекта {{jsxref("Global_Objects/Object", "Object")}}; он не наследует метод {{jsxref("Object.prototype.toString()")}}. Для объектов {{jsxref("Global_Objects/String", "String")}} метод `toString()` возвращает строку, представляющую объект и делает тоже самое, что и метод {{jsxref("String.prototype.valueOf()")}}.

## Примеры

### Пример: использование метода `toString()`

В следующем примере выводится строковое значение объекта {{jsxref("Global_Objects/String", "String")}}:

```js
var x = new String("Привет, мир");

console.log(x.toString()); // Отобразит 'Привет, мир'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
