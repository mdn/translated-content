---
title: length
slug: Web/JavaScript/Reference/Functions/arguments/length
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Functions/arguments/length
original_slug: Web/JavaScript/Referencje/Funkcje/arguments/length
---
### Podsumowanie

Określa liczbę argumentów przekazywanych do funkcji.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">
        Własność obiektów
        <a href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments"
          >arguments</a
        >
        i
        <a
          href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function/arguments"
          >Function.arguments</a
        >
        (wycofywana)
      </td>
    </tr>
    <tr>
      <td>Zaimplementowana w:</td>
      <td>
        JavaScript 1.1
        <p>
          JavaScript 1.4: Przenaczono do wycofania <code>length</code> jako
          własność <code>Function.arguments</code>, zachowano ją natomiast jako
          własność zmiennej lokalnej <code>arguments</code> funkcji.
        </p>
      </td>
    </tr>
    <tr>
      <td>Wersja ECMA:</td>
      <td>ECMA-262</td>
    </tr>
  </tbody>
</table>

### Opis

`length` jest własnością zmiennej lokalnej `arguments` dostępnej wewnątrz wszystkich obiektów funkcji; `length` jako własność [`Function.arguments`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function/arguments) nie jest już używana (również sam obiekt `Function.arguments` jest wycofywany).

`arguments.length` dostarcza liczbę argumentów przekazywanych obecnie funkcji. Dla porównania, własność `Function.length` wskazuje ilość argumentów oczekiwanych przez funkcję.

### Przykłady

#### Przykład: Zastosowanie `Function.length` i `arguments.length`

Następujący przykład przedstawia zastosowanie `Function.length` i `arguments.length`.

    function addNumbers(x,y){
       if (arguments.length == addNumbers.length) {
          return (x+y)
       }
       else return 0
    }

Jeśli podano więcej niż dwa argumenty funkcji, zostanie zwrócona wartość 0:

    result=addNumbers(3,4,5)   // zwraca 0
    result=addNumbers(3,4)     // zwraca 7
    result=addNumbers(103,104) // zwraca 207

### Zobacz także

[`Function.length`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function/length)

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Functions/arguments/length", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Fonctions/arguments/length", "ja": "ja/Core_JavaScript\_1.5\_Reference/Functions/arguments/length" } ) }}
