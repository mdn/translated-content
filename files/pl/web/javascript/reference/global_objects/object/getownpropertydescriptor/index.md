---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
translation_of: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
original_slug: Web/JavaScript/Referencje/Obiekty/Object/getOwnPropertyDescriptor
---
{{JSRef}}

Metoda **`Object.getOwnPropertyDescriptor()`** zwraca deskryptor definiujący stan właściwości (właściwość musi być zdefiniowana bezpośrednio na obiekcie, ponieważ metoda nie sprawdza właściwości w łańcuchu prototypów obiektu) dla podanego obiektu.

## Składnia

    Object.getOwnPropertyDescriptor(obj, prop)

### Argumenty

- `obj`
  - : Obiekt, w którym będzie poszukiwana właściwość.
- `prop`
  - : Nazwa właściwości, dla której będzie pobrany deskryptor.

### Wartość zwracana

Jeżeli obiekt posiada podaną właściwość, wówczas zostanie zwrócony jej deskryptor, w przeciwnym razie zostanie zwrócony {{jsxref("undefined")}}.

## Opis

Metoda ta pozwala na dokładne zbadanie stanu właściwości. W rzeczywistości właściwość obiektu w JavaScript to nie tylko jej nazwa oraz wartość ale również odpowiadający jej deskryptor. Więcej informacji o atrybutach deskryptora można znaleźć w {{jsxref("Object.defineProperty()")}}.

Deskryptor właściwości jest obiektem zawierającym poniższe atrybuty:

- `value`
  - : Wartość związana z odpowiadającą właściwością (tylko dla deskryptorów danych).
- **`writable`**
  - : Jeżeli `true` odpowiadająca wartość właściwości może być zmieniona (tylko dla deskryptorów danych).
- `get`
  - : Funkcja, która zwraca getter dla odpowiadającej właściwości lub {{jsxref("undefined")}} jeżeli getter nie występuje (tylko dla deskryptorów dostępowych).
- `set`
  - : Funkcja, która zwraca setter dla odpowiadającej właściwości lub {{jsxref("undefined")}} jeżeli setter nie występuje (tylko dla deskryptorów dostępowych).
- `configurable`
  - : Jeżeli `true` odpowiadająca wartość właściwości może być zmieniona (również ich rodzaj - z właściwości danych na właściwość funkcji dostępowych, i odwrotnie) oraz usunięta z odopowiadającego obiektu.
- `enumerable`
  - : Jeżeli `true` odpowiadająca wartość właściwości będzie dostępna podczas iteracji po właściwosciach odpowiadającego obiektu.

## Przykłady

```js
var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, 'foo');
// d is { configurable: true, enumerable: true, get: /*the getter function*/, set: undefined }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, 'bar');
// d is { configurable: true, enumerable: true, value: 42, writable: true }

o = {};
Object.defineProperty(o, 'baz', { value: 8675309, writable: false, enumerable: false });
d = Object.getOwnPropertyDescriptor(o, 'baz');
// d is { value: 8675309, writable: false, enumerable: false, configurable: false }
```

## Uwagi

W ES5, jeżeli pierwszy argument dla podanej metody nie jest obiektem (jest typem prostym), wówczas zostanie wyrzucony wyjątek {{jsxref("TypeError")}}. Natomiast w ES2015, na typie prymitywnym najpierw zostanie wykonana koercja do obiektu.

```js
Object.getOwnPropertyDescriptor('foo', 0);
// TypeError: "foo" is not an object  // ES5 code

Object.getOwnPropertyDescriptor('foo', 0);
// {configurable:false, enumerable:true, value:"f", writable:false}  // ES2015 code
```

## Specyfikacje

| Specification                                                                                                                        | Status                       | Comment                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.3', 'Object.getOwnPropertyDescriptor')}}                                     | {{Spec2('ES5.1')}}     | Initial definition. Implemented in JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.getownpropertydescriptor', 'Object.getOwnPropertyDescriptor')}}         | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-object.getownpropertydescriptor', 'Object.getOwnPropertyDescriptor')}} | {{Spec2('ESDraft')}} |                                                      |

## Kompatybilność przeglądarkowa

{{Compat("javascript.builtins.Object.getOwnPropertyDescriptor")}}



## Zobacz również

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
