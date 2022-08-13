---
title: Object.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Object/toString
tags:
  - JavaScript
  - Method
  - Non-standard
  - Object
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/Object/toSource
---
{{JSRef}} {{non-standard_header}}

## Podsumowanie

Zwraca literał obiektowy reprezentujący kod źródłowy danego obiektu.

## Składnia

    Object.toSource();
    obj.toSource();

### Parametry

Brak.

## Opis

Metoda `toSource()` zwraca następujące wartości:

- dla obiektu wbudowanego {{jsxref("Object")}} metoda `toSource()` zwraca następujący ciąg znaków, wskazujący na niedostępność kodu źródłowego:

  ```js
  function Object() {
     [native code]
  }
  ```

- dla instancji {{jsxref("Object")}} metoda `toSource()` zwraca ciąg reprezentujący ich kod źródłowy.

Metoda ta zazwyczaj jest używana wewnętrznie przez interpreter JavaScriptu, a nie bezpośrednio w kodzie. Można jednak wywołać `toSource()` podczas debugowania, by zbadać zawartość danego obiektu.

## Przykłady

### Przykład: Zastosowanie `toSource()`

Poniższy kod definiuje typ obiektowy `Pies` i tworzy instancję `piesek` jako obiekt typu `Pies`:

```js
function Pies(nazwa) {
  this.nazwa = nazwa;
}

Pies.prototype.toSource = function Pies_toSource() {
  return 'new Pies(' + uneval(this.nazwa) + ')';
};

console.log(new Pies('Joe').toSource()); // ---> new  Pies("Joe")
```

## Zobacz także

- {{jsxref("Array.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Global_Objects/Array", "Array")}} Object method.
- {{jsxref("Boolean.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Global_Objects/Boolean", "Boolean")}} Object method.
- {{jsxref("Date.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Global_Objects/Date", "Date")}} Object method.
- {{jsxref("Function.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Global_Objects/Function", "Function")}} Object method.
- {{jsxref("Number.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Global_Objects/Number", "Number")}} Object method.
- {{jsxref("Regexp.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Global_Objects/RegExp", "RegExp")}} Object method.
- {{jsxref("String.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Global_Objects/String", "String")}} Object method.
- {{jsxref("Symbol.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Global_Objects/Symbol", "Symbol")}} Object method.
- `Math.toSource()` — Returns the String "Math".
