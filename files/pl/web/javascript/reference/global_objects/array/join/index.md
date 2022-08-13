---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/join
original_slug: Web/JavaScript/Referencje/Obiekty/Array/join
---
{{JSRef}}

## Podsumowanie

Łączy wszystkie elementy tablicy w jeden łańcuch znaków.

## Składnia

    str = arr.join([separator = ','])

### Parametry

- `separator`
  - : Określa łańcuch znaków użyty do oddzielenia każdego z elementów tablicy. W razie konieczności separator jest konwertowany do łańcucha znaków. Jeśli parametr zostanie pominięty, elementy tablicy będą rozdzielone za pomocą przecinka.

## Opis

Metoda `join` zmienia w łańcuchy znaków wszystkie elementy tablicy i łączy je w jeden łańcuch znaków.

## Przykłady

### Przykład: Łączenie tablicy na trzy różne sposoby

Poniższy przykład tworzy trzyelementową tablicę `a` zawierającą trzy elementy, następnie trzykrotnie łączy ją: używając domyślnego separatora, przecinka i spacji oraz znaku plus.

```js
var a = new Array("Wiatr","Deszcz","Ogień");
var myVar1 = a.join()      // przypisuje "Wiatr,Deszcz,Ogień" do myVar1
var myVar2 = a.join(", ")  // przypisuje "Wiatr, Deszcz, Ogień" do myVar2
var myVar3 = a.join(" + ") // przypisuje "Wiatr + Deszcz + Ogień" do myVar3
```

## Zobacz także

- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
