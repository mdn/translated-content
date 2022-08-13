---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
original_slug: Web/JavaScript/Referencje/Obiekty/Object/toLocaleString
---
{{JSRef}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący obiekt. Ta metoda najczęściej jest przysłonięta przez pochodne obiekty.

## Składnia

    obj.toLocaleString();

### Parametry

Brak.

## Opis

`Object` `toLocaleString` zwraca rezultat, który nazywamy {{jsxref("Object.toString", "toString()")}}.

Ta metoda jest dostarczona dając obiektom generującą metodę `toLocaleString()`, nawet mimo to nie wszystkie go używają. Aktualnie, tylko `Array`, `Number` i `Date` nadpisują `toLocaleString`.

## Zobacz także

- {{jsxref("Object.prototype.toString()")}}
