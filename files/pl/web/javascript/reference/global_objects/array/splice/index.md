---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/splice
original_slug: Web/JavaScript/Referencje/Obiekty/Array/splice
---
{{JSRef}}

## Podsumowanie

Zmienia zawartość tablicy, dodając nowe elementy podczas usuwania starych elementów.

## Składnia

    array.splice(start, deleteCount[, item1[, item2[, ...]]])

### Parametry

- `start`
  - : Indeks od którego rozpoczynamy modyfikację tablicy.

- `deleteCount`
  - : Liczba całkowita określająca liczbę starych elementów tablicy do usunięcia. Jeżeli deleteCount wynosi 0, nic nie zostanie usunięte. W tym przypadku należy podać co najmniej jeden nowy element. W przypadku gdy parametr deleteCount nie został podany (druga forma składni podana powyżej, która jest rozszerzeniem SpiderMonkey), wszystkie elementy o indeksach wyższych `lub równych index` są usuwane.

- `itemN`
  - : Elementy dodawane do tablicy. Jeżeli nie określimy żadnych elementów, `splice` usunie tylko podaną liczbę elementów.

## Opis

Jeżeli podamy różną liczbę wstawianych elementów od liczby usuwanych elementów, tablica będzie posiadała inną długość po wywołaniu metody `splice`.

Metoda `splice` zwraca tablicę zawierającą usunięte elementy. Jeżeli usunięty został tylko jeden element, zwracana jest tablica jednoelementowa.

## Przykłady

### Przykład: Zastosowanie `splice`

Następujący skrypt ilustruje użycie splice:

```js
myFish = ["anioł", "klaun", "mandarynka", "jesiotr"];
console.log("myFish: " + myFish);

removed = myFish.splice(2, 0, "bęben");
console.log("Po dodaniu 1: " + myFish);
console.log("Usunięty jest: " + removed);

removed = myFish.splice(3, 1)
console.log("Po usunięciu 1: " + myFish);
console.log("Usunięty jest: " + removed);

removed = myFish.splice(2, 1, "trąba")
console.log("Po zastąpieniu 1: " + myFish);
console.log("Usunięty jest: " + removed);

removed = myFish.splice(0, 2, "papuga", "zawilec", "niebieski")
console.log("Po zastąpieniu 2: " + myFish);
console.log("Usunięty jest: " + removed);
```

Ten skrypt wyświetli:

    myFish: ["anioł", "klaun", "mandarynka", "jesiotr"]

    Po dodaniu 1: ["anioł", "klaun", "bęben", "mandarynka", "jesiotr"]
    Usunięty jest: undefined

    Po usunięciu 1: ["anioł", "klaun", "bęben, "jesiotr"]
    Usunięty jest: mandarynka

    Po zastąpieniu 1: ["anioł", "klaun", "trąba", "jesiotr"]
    Usunięty jest: bęben

    Po zastąpieniu 2: ["papuga", "zawilec", "niebieski", "trąba", "jesiotr"]
    Usunięty jest: ["anioł", "klaun"]
