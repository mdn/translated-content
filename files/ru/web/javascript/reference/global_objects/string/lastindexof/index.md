---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`lastIndexOf()`** возвращает индекс последнего вхождения указанного значения в строковый объект {{jsxref("Global_Objects/String", "String")}}, на котором он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу, начиная с индекса `fromIndex`.

## Синтаксис

```
str.lastIndexOf(searchValue[, fromIndex])
```

### Параметры

- `searchValue`
  - : Строка, представляющая искомое значение.
- `fromIndex`
  - : Необязательный параметр. Местоположение внутри строки, откуда начинать поиск, нумерация индексов идёт слева направо. Может быть любым целым числом. Значение по умолчанию установлено в `str.length`. Если оно отрицательно, трактуется как 0. Если `fromIndex > str.length`, параметр `fromIndex` будет трактоваться как `str.length`.

## Описание

Символы в строке идут слева направо. Индекс первого символа равен 0, а последнего символа в строке `stringName` равен `stringName.length - 1`.

```js
"канал".lastIndexOf("а"); // вернёт 3
"канал".lastIndexOf("а", 2); // вернёт 1
"канал".lastIndexOf("а", 0); // вернёт -1
"канал".lastIndexOf("ч"); // вернёт -1
```

### Регистрозависимость

Метод `lastIndexOf()` является регистрозависимым. Например, следующее выражение вернёт -1:

```js
"Синий кит, касатка".lastIndexOf("синий"); // вернёт -1
```

## Примеры

### Пример: использование методов `indexOf()` и `lastIndexOf()`

В следующем примере используются методы {{jsxref("String.prototype.indexOf()", "indexOf()")}} и `lastIndexOf()` для нахождения значений в строке `"Дивный новый мир"`.

```js
var anyString = "Дивный новый мир";

console.log(
  "Индекс первого вхождения «й» с начала строки равен " +
    anyString.indexOf("й"),
);
// Отобразит 5
console.log(
  "Индекс первого вхождения «й» с конца строки равен " +
    anyString.lastIndexOf("й"),
);
// Отобразит 11

console.log(
  "Индекс вхождения «новый» с начала строки равен " +
    anyString.indexOf("новый"),
);
// Отобразит 7
console.log(
  "Индекс вхождения «новый» с конца строки равен " +
    anyString.lastIndexOf("новый"),
);
// Отобразит 7
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
