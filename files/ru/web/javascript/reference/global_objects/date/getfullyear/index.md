---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getFullYear()`** возвращает год указанной даты по местному времени.

Используйте этот метод вместо метода {{jsxref("Date.prototype.getYear()", "getYear()")}}.

## Синтаксис

```
dateObj.getFullYear()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getFullYear()` является абсолютным числом. Для дат между 1000 и 9999 годом метод `getFullYear()` возвращает четырёхзначный номер, например, 1995. Используйте эту функцию, чтобы быть уверенным, что год будет правильным после 2000 года.

## Примеры

### Пример: использование метода `getFullYear()`

В следующем примере переменной `year` присваивается четырёхзначное значение текущего года.

```js
let today = new Date(); // Mon Nov 23 2020 15:23:46 GMT+0300 (Москва, стандартное время)
let year = today.getFullYear(); // 2020
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
