---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
tags:
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/NaN
original_slug: Web/JavaScript/Referencje/Obiekty/Number/NaN
---
{{JSRef}}

## Podsumowanie

Wartość reprezentująca Not-A-Number (Nie-Liczbę).

{{js_property_attributes(0, 0, 0)}}

## Opis

Wartością `Number.NaN` jest Not-A-Number, taką samą jak wartość własności {{jsxref("Obiekty/NaN", "NaN")}} obiektu globalnego.

Keep text below in sync with Properties:NaN page `NaN` jest zawsze różna od dowolnej liczby, włączając również `NaN`; nie możesz sprawdzić wartości nieliczbowej poprzez porównanie do `Number.NaN`. Użyj zamiast tego funkcji {{jsxref("Obiekty/isNaN", "isNaN()")}}.

Kilka metod JavaScript (takie jak konstruktor `Number`, `parseFloat` i `parseInt`) zwracają `NaN`, jeśli wartość określona w parametrze nie może być przetworzona jako liczba.

Możesz użyć własności `NaN`, aby wskazać warunek błędu dla Twojej funkcji, która zwraca liczbę w przypadku sukcesu.

JavaScript wyświetla wartość `Number.NaN` jako `NaN`.

## Przykłady

### Przykład: Zastosowanie `Number.NaN`

W poniższym przykładzie, jeśli miesiąc (month) jest wartość większą niż 12, zostaje mu przypisane `NaN` i wyświetlana jest informacja o nieprawidłowych wartościach.

```js
var month = 13;
if (month < 1 || month > 12) {
   month = Number.NaN;
   console.log("Miesiąc musi być liczbą między 1 i 12.");
}
```

## Zobacz także

- {{jsxref("Obiekty/NaN", "NaN")}}
- The {{jsxref("Number")}}
