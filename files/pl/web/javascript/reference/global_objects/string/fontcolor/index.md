---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/fontcolor
original_slug: Web/JavaScript/Referencje/Obiekty/String/fontcolor
---
{{JSRef}} {{deprecated_header}}

## Podsumowanie

Powoduje, iż łańcuch zostanie wyświetlony podanym kolorem tak jakby był wewnątrz znacznika {{HTMLElement("font")}}.

## Składnia

    str.fontcolor(color)

### Parametry

- `color`
  - : Łańcuch znaków wyrażający kolor jako trójka heksadecymalna RGB lub jako łańcuch znaków. Lista nazw w postaci łańcucha znaków dla kolorów jest dostępna w [przewodniku po języku JavaScript 1.5](pl/Przewodnik_po_j%c4%99zyku_JavaScript_1.5).

## Opis

Jeśli wyrażamy kolor w postaci trójki heksadecymalnej RGB, to musisz zastosować format `rrggbb`. Na przykład, wartość heksadecymalna koloru łososiowego składa się z red=FA, green=80 i blue=72, więc trójka RGB dla łososiowego będzie miała wartość "`FA8072`".

## Przykłady

### Przykład: Zastosowanie `fontcolor()`

Następujący przykład stosuje metodę `string` do zmiany koloru łańcucha znaków:

```js
var worldString="Witaj, Świecie";

console.log(worldString.fontcolor("red") + " jest koloru czerwonego w tej linii");
// <font color="red">Witaj, Świecie</font> jest koloru czerwonego w tej linii

console.log(worldString.fontcolor("FF00") +" linia jest czerwona i podany kolor heksadecymalny");
// <font color="FF00">Witaj, Świecie</font> linia jest czerwona i podany kolor heksadecymalny
```
