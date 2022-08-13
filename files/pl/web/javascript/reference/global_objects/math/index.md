---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Math
original_slug: Web/JavaScript/Referencje/Obiekty/Math
---
{{JSRef}}

## Podsumowanie

Wbudowany obiekt zawierający własności i metody związane z funkcjami i stałymi matematycznymi. Na przykład własność {{jsxref("Math.PI", "PI")}} obiektu `Math` zawiera wartość liczby pi.

## Tworzony przez

Obiekt `Math` w języku JavaScript jest predefiniowanym obiektem najwyższego poziomu. Można z niego korzystać od razu, bez korzystania z konstruktora lub wywoływania tworzącej metody.

## Opis

Wszystkie własności i metody obiektu `Math` są statyczne. Do stałej pi odwołujemy się poprzez `Math.PI`, a funkcję sinus wywołujemy jako `Math.sin(x)`, gdzie `x` jest argumentem metody. Stałe zdefiniowane są z pełną precyzją liczb rzeczywistych JavaScriptu.

Czasami wygodniej jest skorzystać z polecenia {{jsxref("with")}}, kiedy w pewnym fragmencie kodu wykonywane jest wiele obliczeń korzystających z metod i stałych obiektu `Math`. Unika się wtedy wielokrotnego wpisywania "Math". Na przykład:

```js
with (Math) {
   a = PI * r*r;
   y = r*sin(theta);
   x = r*cos(theta);
}
```

## Własności

- {{jsxref("Math.E")}}
  - : stała Eulera, podstawa logarytmu naturalnego, w przybliżeniu 2.718.
- {{jsxref("Math.LN2")}}
  - : logarytm naturalny liczby 2, w przybliżeniu 0.693.
- {{jsxref("Math.LN10")}}
  - : logarytm naturalny liczby 10, w przybliżeniu 2.302.
- {{jsxref("Math.LOG2E")}}
  - : logarytm o podstawie 2 z liczby E, w przybliżeniu 1.442.
- {{jsxref("Math.LOG10E")}}
  - : logarytm o podstawie 10 z liczby E, w przybliżeniu 0.434.
- {{jsxref("Math.PI")}}
  - : stosunek obwodu okręgu do jego średnicy, w przybliżeniu 3.14159.
- {{jsxref("Math.SQRT1_2")}}
  - : pierwiastek kwadratowy z liczby 1/2, albo, inaczej mówiąc, odwrotność pierwiastka kwadratowego z liczby 2, w przybliżeniu 0.707.
- {{jsxref("Math.SQRT2")}}
  - : pierwiastek kwadratowy z liczby 2, w przybliżeniu 1.414.

## Metody

- {{jsxref("Math.abs()")}}
  - : zwraca wartość bezwzględną danej liczby.
- {{jsxref("Math.acos()")}}
  - : zwraca arcus cosinus (w radianach) danej liczby.
- {{jsxref("Math.asin()")}}
  - : zwraca arcus sinus (w radianach) danej liczby.
- {{jsxref("Math.atan()")}}
  - : zwraca arcus tangens (w radianach) danej liczby.
- {{jsxref("Math.atan2()")}}
  - : zwraca kąt (w radianach) utworzony przez oś OX i prostą przechodzącą przez punkt o podanych współrzędnych.
- {{jsxref("Math.ceil()")}}
  - : zwraca najmniejszą liczbę całkowitą większą od lub równą danej.
- {{jsxref("Math.cos()")}}
  - : zwraca cosinus danej liczby.
- {{jsxref("Math.exp()")}}
  - : zwraca `Ex`, gdzie `x` to argument, a `E` to stała Eulera.
- {{jsxref("Math.floor()")}}
  - : zwraca największą liczbę całkowitą mniejszą od lub równą danej.
- {{jsxref("Math.log()")}}
  - : zwraca logarytm naturalny (tj. o podstawie E) z danej liczby.
- {{jsxref("Math.max()")}}
  - : zwraca większą z dwóch liczb.
- {{jsxref("Math.min()")}}
  - : zwraca mniejszą z dwóch liczb.
- {{jsxref("Math.pow()")}}
  - : zwraca daną liczbę podniesioną do danej potęgi.
- {{jsxref("Math.random()")}}
  - : zwraca liczbą pseudolosową z przedziału \[0, 1).
- {{jsxref("Math.round()")}}
  - : zwraca daną liczbę zaokrągloną do najbliższej liczby całkowitej.
- {{jsxref("Math.sin()")}}
  - : zwraca sinus danej liczby.
- {{jsxref("Math.sqrt()")}}
  - : zwraca pierwiastek kwadratowy danej liczby.
- {{jsxref("Math.tan()")}}
  - : zwraca tangens danej liczby.
