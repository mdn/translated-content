---
title: Operator przecinkowy
slug: Web/JavaScript/Reference/Operators/Comma_Operator
tags:
  - JavaScript
  - Operator
  - Przecinek
  - Przecinkowy
translation_of: Web/JavaScript/Reference/Operators/Comma_Operator
original_slug: Web/JavaScript/Referencje/Operatory/Operator_przecinkowy
---
{{jsSidebar("Operators")}}

###

Operator przecinkowy wykonuje wszystkie argumenty i zwraca wynik ostatniego argumentu.

## Składnia

    wyr1, wyr2, wyr3...

### Parametry

- `wyr1`, `wyr2, wyr3`
  - : Wyrażenia, z których jedynie ostatnie jest zwracane.

## Opis

Możemy zastosować operator przecinkowy, kiedy chcemy utworzyć wyrażenie składające się z kilku wyrażeń. Operator przecinkowy jest chyba najczęściej używany w instrukcji pętli for.

Na przykład, jeśli `a` jest tablicą dwuwymiarową z 10 elementami w sobie, następujący kod użyje operatora przecinkowego do zwiększenia dwóch zmiennych na raz. Kod wypisze wartości elementów ułożonych po przekątnej w tablicy:

```js
var a = [[]];
for (var i=0, j=9; i <= 9; i++, j--)
   console.log("a["+i+","+j+"]= " + a[i,j])
```
