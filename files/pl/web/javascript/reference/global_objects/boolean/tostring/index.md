---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
tags:
  - Boolean
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/toString
original_slug: Web/JavaScript/Referencje/Obiekty/Boolean/toString
---
{{JSRef}}

## Podsumowanie

Zwraca ciąg znaków reprezentujący dany obiekt Boolean

## Składnia

    bool.toString()

### Parametry

Brak.

## Opis

Obiekt {{jsxref("Boolean")}} przesłania metodę `toString` obiektu {{jsxref("Object")}}, nie dziedziczy metody {{jsxref("Object.prototype.toString()")}}. Dla obiektów `Boolean` metoda `toString` zwraca ich tekstową reprezentację.

JavaScript wywołuje metodę `toString` samoczynnie, kiedy instancja obiektu {{jsxref("Boolean")}} ma być reprezentowana jako wartość tekstowa lub kiedy instancja obiektu {{jsxref("Boolean")}} jest składnikiem konkatenacji ciągu(-ów) znaków.

Dla obiektów i wartości {{jsxref("Boolean")}} wbudowana metoda `toString` zwraca ciąg znaków "`true`" lub "`false`" w zależności od wartości obiektu boolowskiego. W poniższym przykładzie `flaga.toString` zwraca "`true`".

```js
var flaga = new Boolean(true)
var mojaZmienna=flaga.toString()
```

## Zobacz także

- {{jsxref("Object.prototype.toString()")}}
