---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/valueOf
original_slug: Web/JavaScript/Referencje/Obiekty/Object/valueOf
---
{{jsRef}}

## Podsumowanie

Zwraca wartość podstawową danego obiektu.

## Składnia

    object.valueOf()

### Parametry

Brak.

## Opis

JavaScript wywołuje metodę `valueOf()` by przekonwertować obiekt do wartości podstawowej. Metodę `valueOf` rzadko wykorzystuje się w pisanych programach, zazwyczaj JavaScript wywołuje ją automatycznie, kiedy oczekując wartości podstawowej napotka obiekt.

Domyślnie metoda `valueOf()` jest dziedziczona przez każdy obiekt potomny obiektu {{jsxref("Object")}}. Każdy wbudowany obiekt jądra JavaScriptu przesłania tę metodą by zwracała właściwą wartość. Jeśli obiekt nie ma wartości podstawowej, `valueOf()` zwraca sam obiekt, który jest wyświetlany jako:

    [object Object]

We własnych programach można oczywiście używać metody `valueOf` do konwersji obiektów na wartości podstawowe. Kiedy użytkownik tworzy własne obiekty, może przesłonić metodę `valueOf()` własną wersją.

### Przesłanianie metody `valueOf` dla własnych obiektów

Można utworzyć funkcję, która będzie wywoływana zamiast domyślnej metody `valueOf`. Taka funkcja nie powinna mieć argumentów.

Załóżmy, że mamy typ obiektowy `MojTypLiczbowy` i chcemy utworzyć dla niego metodę `valueOf`. Poniższy kod przypisuje zdefiniowaną przez użytkownika funkcję do metody `valueOf` obiektu:

```js
MojTypLiczbowy.prototype.valueOf = new Function(tekstFunkcji);
```

Dzięki powyższej instrukcji za każdym razem, kiedy obiekt typu `MojTypLiczbowy` jest używany w kontekście wartości prostej, JavaScript automatycznie wywoła funkcję zdefiniowaną powyżej.

Metoda `valueOf` obiektu jest zwykle wywoływana przez interpreter JavaScriptu, ale można ją wywołać samodzielnie:

```js
mojaLiczba.valueOf();
```

### Uwaga

Obiekty używane w kontekście łańcucha znaków konwertowane są przy użyciu metody [`toString`](/pl/docs/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Object/toString), co różni się od konwertowania obiektów `String` do prostych łańcuchów znaków poprzez `valueOf`. Wszystkie obiekty posiadają konwersję do łańcucha znaków, choćby `[objecttyp]`. Ale wiele obiektów nie posiada domyślnej konwersji do liczby, wartości logicznej lub funkcji.

## Zobacz także

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
