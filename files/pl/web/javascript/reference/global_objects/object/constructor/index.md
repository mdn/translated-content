---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
tags:
  - JavaScript
  - Object
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Object/constructor
original_slug: Web/JavaScript/Referencje/Obiekty/Object/constructor
---
{{JSRef}}

## Podsumowanie

Określa funkcję tworzącą prototyp obiektu. Należy pamiętać, że wartość tej własności jest referencją do funkcji, a nie łańcuchem znaków zawierającym jej nazwę.

## Opis

Wszystkie obiekty dziedziczą własność `constructor` z ich prototypu (`prototype`):

```js
var o = {};
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true
```

## Przykłady

### Przykład: Wyświetlanie konstruktora obiektu

Poniższy przykład tworzy prototyp, `Drzewo` i obiekt tego typu `sosna`. Następnie wyświetlana jest własność `constructor` obiektu `Drzewo`.

```js
function Drzewo(nazwa) {
   this.nazwa=nazwa;
}

sosna = new Drzewo("sosna");
console.log("sosna.constructor to " + sosna.constructor)
```

Przykład ten wyświetla:

    sosna.constructor to function Drzewo(nazwa) {
       this.nazwa = nazwa;
    }
