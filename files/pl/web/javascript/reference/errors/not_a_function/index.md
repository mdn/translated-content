---
title: 'TypeError: "x" nie jest funkcją'
slug: Web/JavaScript/Reference/Errors/Not_a_function
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_function
---
{{jsSidebar("Errors")}}

## Wiadomość

    TypeError: "x" is not a function

## Typ błędu

{{jsxref("TypeError")}}.

## Co poszło źle?

Próbowano wywołać wartość jak funkcję, ale wartość nie jest funkcją. Kod oczekuje od Ciebie przekazania funkcji, co nie miało miejsca.

Może zrobiłeś literówkę w nazwie funkcji? Może objekt na którym wywołujesz tę metodę nie posiada tej funkcji? Na przykład, objekt JavaScript nie posiada funkcji _map,_ natomiast objekt JavaScript Array posiada.

Istnieje mnóstwo wbudowanych funkcji wymagających (callback) funkcji. Będziesz musiał wprowadzić funkcję, by metody te działały poprawnie:

- Gdy pracujesz z {{jsxref("Array")}} lub {{jsxref("TypedArray")}} objektami:

  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}},  {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- Gdy pracujesz z {{jsxref("Map")}} i {{jsxref("Set")}} objektami:

  - {{jsxref("Map.prototype.forEach()")}} and {{jsxref("Set.prototype.forEach()")}}

## Przykłady

### Literówka w nazwie funkcji

W tym wypadku, co zdarza się zbyt często, jest literówka w nazwie metody:

```js example-bad
var x = document.getElementByID('foo');
// TypeError: document.getElementByID is not a function
```

Poprawna naywa metody to `getElementById`:

```js example-good
var x = document.getElementById('foo');
```

### Funkcje wywołane na nieodpowiednim objekcie

Dla pewnych metod, musisz podać (callback) funkcję, która będzie działała tylko dla specyficznych objektów. W tym przykładzie, {{jsxref("Array.prototype.map()")}} jest użyta, podczas gdy działa tylko z objektami {{jsxref("Array")}}

```js example-bad
var obj = {a: 13, b: 37, c: 42};

obj.map(function(num) {
  return num * 2;
});

// TypeError: obj.map is not a function
```

Użyj w zamian _array:_

```js example-good
var numbers = [1, 4, 9];

numbers.map(function(num) {
  return num * 2;
});

// Array [2, 8, 18]
```

## Zobacz również

- [Functions](/pl/docs/Web/JavaScript/Reference/Functions)
