---
title: Operator in
slug: Web/JavaScript/Reference/Operators/in
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Operators/in
original_slug: Web/JavaScript/Referencje/Operatory/Operator_in
---
### Podsumowanie

Operator `in` zwraca wartość `true` (prawda), jeśli określona własność jest w określonym obiekcie.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Operator</td>
    </tr>
    <tr>
      <td>Zaimplementowany w:</td>
      <td>JavaScript 1.4</td>
    </tr>
  </tbody>
</table>

### Składnia

`propNameOrNumberinobjectName`

### Parametry

- `propNameOrNumber`
  - : Łańcuch znaków lub wartość liczbowa reprezentujące nazwę własności lub indeks tablicy.

<!---->

- `objectName`
  - : Nazwa obiektu.

### Opis

Poniższe przykłady pokazują wybrane sposoby użycia operatora `in`.

    // Tablice
    trees=new Array("redwood","bay","cedar","oak","maple")
    0 in trees        // zwraca true
    3 in trees        // zwraca true
    6 in trees        // zwraca false
    "bay" in trees    // zwraca false (musisz określić numer indeksu,
                      // nie wartość w tym indeksie)
    "length" in trees // zwraca true (length jest własnością tablicy Array)

    // Obiekty predefiniowane
    "PI" in Math          // zwraca true
    myString=new String("coral")
    "length" in myString  // zwraca true

    // Custom objects
    mycar = {make:"Honda",model:"Accord",year:1998}
    "make" in mycar  // zwraca true
    "model" in mycar // zwraca true

Musisz określić obiekt z prawej strony operatora `in`. Na przykład: możesz określić łańcuch znaków stworzony za pomocą konstruktora `String`, ale nie możesz określić łańcucha znaków wprost.

    color1=new String("green")
    "length" in color1 // zwraca true
    color2="coral"
    "length" in color2 // generuje błąd (color nie jest obiektem typu String)

#### Zastosowanie `in` z usuniętymi lub niezdefiniowanymi własnościami

Jeśli usuniesz własność za pomocą operatora [`delete`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Operatory/Operatory_specjalne/Operator_delete), operator `in` zwróci wartość false (fałsz) dla tej własności.

    mycar = {make:"Honda",model:"Accord",year:1998}
    delete mycar.make
    "make" in mycar  // zwraca false

    trees=new Array("redwood","bay","cedar","oak","maple")
    delete trees[3]
    3 in trees // zwraca false

Jeśli ustalisz własność jako niezdefiniowaną, ale nie usuniesz jej, operator `in` zwróci wartość true (prawda) dla tej własności.

    mycar = {make:"Honda",model:"Accord",year:1998}
    mycar.make=undefined
    "make" in mycar  // zwraca true

    trees=new Array("redwood","bay","cedar","oak","maple")
    trees[3]=undefined
    3 in trees // zwraca true

Aby uzyskać dodatkowe informacje o zastosowaniu operatora `in` z usuniętymi elementami tablicy, zobacz [delete](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Operatory/Operatory_specjalne/Operator_delete).
