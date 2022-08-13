---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
tags:
  - Function
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Function/toString
original_slug: Web/JavaScript/Referencje/Obiekty/Function/toString
---
{{JSRef}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący kod źródłowy funkcji.

### Składnia

    function.toString(indentation)

### Parametry

- `indentation` {{non-standard_inline}} {{obsolete_inline(17)}}
  - : The amount of spaces to indent the string representation of the source code. If `indentation` is less than or equal to `-1`, most unnecessary spaces are removed.

## Opis

Obiekt {{jsxref("Function")}} przesłania metodę {{jsxref("Object.prototype.toString", "toString")}} obiektu {{jsxref("Function")}}; nie dziedziczy {{jsxref("Object.prototype.toString")}}. Dla obiektów `Function`, metoda `toString()` zwraca łańcuch znaków reprezentujący obiekt.

JavaScript wywołuje metodę `toString()` automatycznie, gdy {{jsxref("Function")}} jest reprezentowana jako wartość tekstowa lub kiedy `Function` jest odsyłana do połączenia łańcuchów znaków.

Dla obiektów {{jsxref("Function")}}, wbudowana metoda `toString)=` dekompiluje funkcję z powrotem do kodu JavaScript, który tę funkcję definiuje. Łańcuch znaków zawiera słowa kluczowe `function`, listę argumentów, nawiasy klamrowe oraz ciało funkcji.

Załóżmy na przykład, że masz poniższy kod, który definiuje obiektowy typ `Dog` i tworzy `theDog`, obiekt typu `Dog`:

```js
function Dog(name, breed, color, sex) {
   this.name = name
   this.breed = breed
   this.color = color
   this.sex = sex
}

theDog = new Dog( "Gabby", "Lab", "chocolate", "girl" );
```

W dowolnej chwili, gdy `Dog` jest użyty w kontekście jako łańcuch znaków, JavaScript automatycznie wywołuje funkcję `toString`, która zwraca poniższy łańcuch znaków:

```js
function Dog(name, breed, color, sex) { this.name = name; this.breed = breed; this.color = color; this.sex = sex; }
```

## Zobacz także

- {{jsxref("Object.prototype.toString()")}}
