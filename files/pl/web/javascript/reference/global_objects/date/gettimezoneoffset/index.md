---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getTimezoneOffset
---
{{JSRef}}

## Podsumowanie

Zwraca przesunięcie strefy czasowej w minutach dla bieżącej lokalizacji.

## Składnia

    dateObj.getTimezoneOffset()

### Parametry

Brak.

## Opis

Przesunięcie strefy czasowej jest to różnica, wyrażona w minutach, pomiędzy **Greenwich Mean Time** (**GMT**) a bieżącym czasem lokalnym. Na przykład, jeśli aktualna strefa to GMT+10, wynikiem jest -600. Wartość nie jest liczbą stałą ze względu na zmiany czasu na letni i zimowy.

## Przykłady

#### Przykład: Zastosowanie `getTimezoneOffset()`

```js
var x = new Date();
var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
```
