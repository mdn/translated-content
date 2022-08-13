---
title: Operator typeof
slug: Web/JavaScript/Reference/Operators/typeof
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Operators/typeof
original_slug: Web/JavaScript/Referencje/Operatory/Operator_typeof
---
### Podsumowanie

Operator `typeof` używa się na jeden z poniższych sposobów:

1.  `typeof operand`
2.  `typeof (operand )`

Operator `typeof` zwraca łańcuch zawierający type of unevaluated operand: jak przetłumaczyć unevaluated?typ operandu. `operand` jest łańcuchem znaków, zmienną, słowem kluczowym lub obiektem, którego typ ma zostać zwrócony. Zastosowanie nawiasów jest opcjonalne.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Operator</td>
    </tr>
    <tr>
      <td>Zaimplementowany w:</td>
      <td>JavaScript 1.1</td>
    </tr>
    <tr>
      <td>Wersja ECMA:</td>
      <td>ECMA-262</td>
    </tr>
  </tbody>
</table>

Zakładamy, że możemy zdefiniować następujące zmienne:

    var myFun = new Function("5+2")
    var shape="round"
    var size=1
    var today=new Date()

Operator `typeof` zwróci następujący rezultat dla tych zmiennych:

    typeof myFun is object
    typeof shape is string
    typeof size is number
    typeof today is object
    typeof dontExist is undefined

Dla słów kluczowych `true` oraz `null`, operator `typeof` zwraca następujący rezultat:

    typeof true is boolean
    typeof null is object

Dla liczby lub łańcucha znaków, operator `typeof` zwraca następujący rezultat:

    typeof 62 is number
    typeof 'Hello world' is string

Dla własności wartości, operator `typeof` zwraca typ wartości własności, jakie składają się na treść:

    typeof document.lastModified is string
    typeof window.length is number
    typeof Math.LN2 is number

Dla metod i funkcji, operator `typeof` zwraca następujący rezultat:

    typeof blur is function
    typeof eval is function
    typeof parseInt is function
    typeof shape.split is function

Dla obiektów predefiniowanych, operator `typeof` zwraca następujący rezultat:

    typeof Date is function
    typeof Function is function
    typeof Math is function
    typeof Option is function
    typeof String is function
