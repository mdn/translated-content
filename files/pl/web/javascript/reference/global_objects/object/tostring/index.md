---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/toString
original_slug: Web/JavaScript/Referencje/Obiekty/Object/toString
---
{{JSRef}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący dany obiekt.

## Składnia

    obj.toString()

## Opis

Każdy obiekt posiada metodę `toString`, która jest wywoływana automatycznie, kiedy obiekt ma zostać przedstawiony jako wartość tekstowa, albo kiedy obiekt jest dołączany do ciągu znakowego. Poniższe przykłady wymagają, by `jakisPies` był reprezentowany jako łańcuch znaków:

```js
console.log(jakisPies);
console.log("jakisPies to " + jakisPies);
```

Domyślnie metoda `toString` jest dziedziczona przez każdy obiekt wyprowadzony z obiektu `Object`. Można przesłonić tę metodę dla własnych obiektów. Jeśli `toString` nie zostanie przesłonięta we własnych obiektach użytkownika, zwróci ona `[objecttyp]`, gdzie `typ`jest typem obiektu lub nazwą funkcji konstruktora, która utworzyła ten obiekt.

Na przykład:

```js
var o = new Object()
o.toString() // zwraca "[object Object]"
```

## Przykłady

### Przesłanianie domyślnej metody `toString()`

Można utworzyć funkcję, która będzie wywoływana zamiast domyślnej metody `toString()`. Metoda `toString()` nie pobiera żadnych argumentów i powinna zwrócić łańcuch znaków. Utworzona przez użytkownika metoda `toString()` może zwracać dowolną wartość, ale najlepiej, by przekazywała użyteczne informacje na temat obiektu.

Poniższy kod definiuje typ obiektowy `Pies` i tworzy obiekt `jakisPies` typu `Pies`:

```js
function Pies(nazwa,rasa,wiek,plec) {
   this.nazwa=nazwa;
   this.rasa=rasa;
   this.wiek=wiek;
   this.plec=plec;
}

jakisPies = new Pies("Szarik","owczarek niemiecki","5","samiec");
```

Jeśli wywołana zostanie metoda `toString` tego obiektu, zwrócona zostanie domyślna wartość odziedziczona po `Object`:

```js
jakisPies.toString(); // zwraca [object Object]
```

Poniższy kod tworzy funkcję `piesToString`, która to funkcja będzie przesłaniać domyślną metodę `toString`. Funkcja ta tworzy łańcuch znaków zawierający każdą własność; budowany łańcuch będzie postaci "`własność = wartość;`".

```js
function piesToString() {
   var ret = "Pies " + this.nazwa + " to: [\n";
   for (var prop in this)
      ret += " " + prop + " = " + this[prop] + ";\n";
   return ret + "]";
}
```

Poniższy kod przypisuje zdefiniowaną powyżej funkcję do metody `toString` obiektów typu obiektowego Pies:

```js
Pies.prototype.toString = piesToString;
```

Dzięki powyższemu kodowi za każdym razem, kiedy `jakisPies` używany jest w kontekście łańcucha znaków, interpreter JavaScriptu automatycznie wywołuje funkcję `piesToString`, która zwraca poniższy łańcuch:

    Pies Szarik to: [
      nazwa = Szarik;
      rasa = owczarek niemiecki;
      wiek = 5;
      plec = samiec;
    ]

Metoda `toString` danego obiektu jest zazwyczaj wywoływana przez interpreter JavaScriptu, ale można ją wywołać samodzielnie, jak poniżej:

```js
var piesString = jakisPies.toString();
```

## Zobacz także

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Object.prototype.valueOf()")}}
