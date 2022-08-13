---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
translation_of: Web/JavaScript/Reference/Global_Objects/Object/freeze
original_slug: Web/JavaScript/Referencje/Obiekty/Object/freeze
---
{{JSRef}}Metoda `Object.freeze() `"zamraża" obiekt, tzn. uniemożliwia dodawania nowych właściwości do obiektu; uniemożliwia usuwanie istniejących właściwości; uniemożliwia zmianę istniejących właściwości; oraz uniemożliwia zmianę prototypu obiektu. W efekcie obiekt jest naprawdę stały. Metoda zwraca obiekt w stanie "zamrożonym".

## Składnia

    Object.freeze(obj)

### Argumenty

- `obj`
  - : Obiekt który ma zostać "zamrożony".

### Zwracana wartość

"Zamrożony" obiekt.

## Opis

Nic nie może zostać dodane ani usunięte z "zamrożonego" obiektu. Każda próba tego wywoła błąd, albo po cichu, albo rzucając wyjątek {{jsxref("TypeError")}}(zawzwyczaj, choć nie zawsze, w przypadku używania {{jsxref("Strict_mode", "strict mode", "", 1)}}).

Nie ma możliwości zmiany wartości właściwości obiektu. Metody dostępu (gettery i settery) działają bez zmian (sprawiają wrażenie skutecznej zmiany właściwości obiektu). Zwróć uwagę na to, że wartości, które są obiektami w dalszym ciągu mogą być modyfikowane, chyba że również są "zamrożone". Z uwagi na to, że Tablica (Array) jest obiektem, również może zostać zamrożona co uniemożliwi zmianę jej elementów, ich usuwanie oraz dodawanie nowych.

## Przykłady



### Zamrażanie Obiektów



```js
var obj = {
  prop: function() {},
  foo: 'bar'
};

// Nowe właściwości mogą być dodawane, istniejące mogą być zmieniane oraz usuwane
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// Zarówno obiekt przekazywany w funkcji freeze() jak i obiekt zwracany bedą "zamrożone"
// Nie ma potrzeby przypisywania zwracanego obiektu do zmiennej jeśli chcemy tylko "zamrozić" obiekt przekazywany w funkcji
var o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // === true

// Teraz wszelkie zmiany są niemożliwe
obj.foo = 'quux'; // brak rezultatu nieskutkujący wyświetleniem błędu
obj.quaxxor = 'the friendly duck'; // brak rezultatu nieskutkujący wyświetleniem błędu

// przy strict mode tego typu próby spowodują wyświetlenie komunikatu o błędzie
function fail(){
  'use strict';
  obj.foo = 'sparky'; // TypeError
  delete obj.quaxxor; // TypeError
  obj.sparky = 'arf'; // TypeError
}

fail();

// Próby zmian poprzez Object.defineProperty spowodują wyświetlenie komunikatu o błędzie
Object.defineProperty(obj, 'ohai', { value: 17 }); // TypeError
Object.defineProperty(obj, 'foo', { value: 'eit' }); // TypeError

// Niemożliwa jest również zmiana prototypu obiektu. Obie instrukcje poniżej wygenerują błąd
Object.setPrototypeOf(obj, { x: 20})
obj.__proto__ = { x: 20}
```

### Zamrażanie Tablic (Array)



```js
let a = [0];
Object.freeze(a); // Tablica nie może być teraz modyfikowana

a[0]=1; // brak rezultatu nieskutkujący wyświetleniem błędu
a.push(2); // brak rezultatu nieskutkujący wyświetleniem błędu

// przy strict mode tego typu próby spowodują wyświetlenie komunikatu o błędzie TypeErrors
function fail() {
  "use strict"
  a[0] = 1;
  a.push(2);
}

fail();
```

"Zamrożony" obiekt jest _niemutowalny_. Nie jest on jednak _stałą_. Obrazuje to poniższy przykład.

```js
obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

obj1.internal.a // 'aValue'
```



To be a constant object, the entire reference graph (direct and indirect references to other objects) must reference only immutable frozen objects.  The object being frozen is said to be immutable because the entire object *state* (values and references to other objects) within the whole object is fixed.  Note that strings, numbers, and booleans are always immutable and that Functions and Arrays are objects.

To make an object constant, recursively freeze each property which is of type object (deep freeze).  Use the pattern on a case-by-case basis based on your design when you know the object contains no *[cycles](https://en.wikipedia.org/wiki/Cycle*\(graph_theory\)) _in the reference graph, otherwise an endless loop will be triggered.   An enhancement to deepFreeze() would be to have an internal function that receives a path (e.g. an Array) argument so you can supress calling deepFreeze() recursively when an object is in the process of being made constant.  You still run a risk of freezing an object that shouldn't be frozen, such as \[window].

```js
// To do so, we use this function.
function deepFreeze(obj) {

  // Retrieve the property names defined on obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach(function(name) {
    var prop = obj[name];

    // Freeze prop if it is an object
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
}

obj2 = {
  internal: {}
};

deepFreeze(obj2);
obj2.internal.a = 'anotherValue';
obj2.internal.a; // unde
```





## Notes

In ES5, if the argument to this method is not an object (a primitive), then it will cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be treated as if it were a frozen ordinary object, and be simply returned.

```js
> Object.freeze(1)
TypeError: 1 is not an object // ES5 code

> Object.freeze(1)
1                             // ES2015 code
```

## Specifications

| Specification                                                                        | Status                       | Comment                                              |
| ------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.9', 'Object.freeze')}}             | {{Spec2('ES5.1')}}     | Initial definition. Implemented in JavaScript 1.8.5. |
| {{SpecName('ES2015', '#sec-object.freeze', 'Object.freeze')}}     | {{Spec2('ES2015')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-object.freeze', 'Object.freeze')}} | {{Spec2('ESDraft')}} |                                                      |

## Browser compatibility

{{Compat("javascript.builtins.Object.freeze")}}

## See also

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
