---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean
original_slug: Web/JavaScript/Referencje/Obiekty/Boolean
---
{{JSRef("Global_Objects", "Boolean")}}

## Podsumowanie

Obiekt `Boolean` jest obiektem opakowującym (ang._wrapper_ ) dla wartości logicznych.

## Składnia

    new Boolean([wartosc])

### Parametry

- `wartosc`
  - : Początkowa wartość obiektu `Boolean`.

## Opis

Wartość przekazana jako pierwszy parametr jest w razie konieczności konwertowana do wartości logicznej. Jeśli wartość zostanie pominięta lub będzie równa 0, -0, null, false, `NaN`, będzie pustym łańcuchem znaków ("") lub będzie niezdefiniowana, obiekt przyjmie początkową wartość false. Dowolna inna wartość, włączając łańcuch znaków `"false"`, spowoduje utworzenie obiektu z początkową wartością true.

Nie należy mylić prostych wartości logicznych true i false z wartościami `true` i `false` obiektu Boolean.

Każdy obiekt, którego wartością nie jest wartość `undefined` lub `null`, w tym obiekt Boolean posiadający wartość `false`, traktowany jest w instrukcjach warunkowych jako `true`. Przykładowo warunek w poniższej instrukcji if będzie miał wartość `true`:

    x = new Boolean(false);
    if (x) {
      // . . . ten kod zostanie wykonany
    }

Taka sytuacja nie zachodzi przy prostych wartościach logicznych. Przykładowo warunek w poniższej instrukcji if będzie miał wartość `false`::

    x = false;
    if (x) {
      // . . . ten kod nie zostanie wykonany
    }

Nie należy zatem używać obiektu `Boolean` do konwersji wartości nie będącej wartością logiczną na wartość typu Boolean. Zamiast tego należy skorzystać z funkcji `Boolean()`:

    x = Boolean(wyrazenie);     // zalecane
    x = new Boolean(wyrazenie); // nie należy używać

Jeśli jako wartość początkową określony zostanie dowolny obiekt, w tym obiekt Boolean o wartości `false`, nowy obiekt Boolean będzie miał wartość `true`.

    myFalse = new Boolean(false);   // wartość początkowa: false
    g = new Boolean(myFalse);       // wartość początkowa: true
    myString = new String("Hello"); // obiekt String (łańcuch znaków)
    s = new Boolean(myString);      // wartość początkowa: true

**Nie należy** używać obiektu Boolean zamiast prostej wartości logicznej.

## Własności

- `Boolean.length`
  - : Length property whose value is 1.

- {{jsxref("Boolean.prototype")}}
  - : Definiuje własność współdzieloną przez wszystkie obiekty Boolean.

## Metody

Globalny obiekt `Boolean` sam w sobie nie zawiera żadnych metod, jednak dziedziczy on niektóre metody poprzez łańcuch prototypu.

{{jsOverrides("Function", "Methods")}}

## Przykłady

### Tworzenie obiektów `Boolean` z początkową wartością „fałsz”

```js
bNoParam = new Boolean();
bZero = new Boolean(0);
bNull = new Boolean(null);
bEmptyString = new Boolean("");
bfalse = new Boolean(false);
```

### Tworzenie obiektów `Boolean` z początkową wartością „prawda”

```js
btrue = new Boolean(true);
btrueString = new Boolean("true");
bfalseString = new Boolean("false");
bSuLin = new Boolean("Su Lin");
```

## Zobacz także

- {{jsxref("Boolean.prototype")}}
- {{Glossary("Boolean")}}
- [Boolean data type (Wikipedia)](http://en.wikipedia.org/wiki/Boolean_data_type)
