---
title: Składnia rozwinięcia
slug: Web/JavaScript/Reference/Operators/Spread_syntax
translation_of: Web/JavaScript/Reference/Operators/Spread_syntax
original_slug: Web/JavaScript/Referencje/Operatory/Składnia_rozwinięcia
---
{{jsSidebar("Operators")}}**Składnia rozwinięcia** (ang. _spread syntax_) pozwala na rozwinięcie iterowalnego wyrażenia, takiego jak wyrażenie tablicowe lub ciąg znaków, tam gdzie oczekiwanych jest zero lub więcej argumentów (dla wywołań funkcji) lub elementów (dla literałów tablicowych). Pozwala również na rozwinięcie wyrażeń obiektowych w miejscach, gdzie oczekiwanych jest zero lub więcej par klucz-wartość (dla literałów obiektowych). {{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## Składnia

Dla wywołań funkcji:

    mojaFunkcja(...iterowalnyObiekt);

Dla literałów tablicowych lub łańcuchów znaków:

    [...iterowalnyObiekt, '3', 'cztery', 5];

Dla literałów obiektowych (nowe w ECMAScript 2018):

    let klonObiektu = { ...obiekt };

## Przykłady

### Rozwinięcie w wywołaniach funkcji

#### Zastąpienie `apply`

Powszechne jest używanie {{jsxref( "Function.prototype.apply")}} w przypadkach, w których chcemy użyć elementów tablicy jako argumentów funkcji.

```js
function mojaFunkcja(x, y, z) { }
var argumenty = [0, 1, 2];
mojaFunkcja.apply(null, argumenty);
```

Przy użyciu operatora rozpakowania można to zapisać jako:

```js
function mojaFunkcja(x, y, z) { }
var argumenty = [0, 1, 2];
mojaFunkcja(...argumenty);
```

Każdy argument na liście argumentów może użyć operatora rozpakowania, można go także używać wielokrotnie.

```js
function mojaFunkcja(v, w, x, y, z) { }
var argumenty = [0, 1];
mojaFunkcja(-1, ...argumenty, 2, ...[3]);
```

#### Apply for new

When calling a constructor with `new`, it's not possible to **directly** use an array and `apply` (`apply` does a `[[Call]]` and not a `[[Construct]]`). However, an array can be easily used with `new` thanks to spread syntax:

```js
var dateFields = [1970, 0, 1];  // 1 Jan 1970
var d = new Date(...dateFields);
```

To use new with an array of parameters without spread syntax, you would have to do it **indirectly** through partial application:

```js
function applyAndNew(constructor, args) {
   function partial () {
      return constructor.apply(this, args);
   };
   if (typeof constructor.prototype === "object") {
      partial.prototype = Object.create(constructor.prototype);
   }
   return partial;
}


function myConstructor () {
   console.log("arguments.length: " + arguments.length);
   console.log(arguments);
   this.prop1="val1";
   this.prop2="val2";
};

var myArguments = ["hi", "how", "are", "you", "mr", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments);
// (internal log of myConstructor):           arguments.length: 6
// (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
// (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}
```

### Rozwinięcie w literałach tablicowych

#### Potężniejszy literał tablicowy

Bez składni rozwinięcia, aby utworzyć nową tablicę, używając tablicy już istniejącej jako jej części, składnia literału tablicowego nie jest już wystarczająca i musimy użyć kodu imperatywnego, używając kombinacji `push`, `splice`, `concat` itd. Z użyciem składni rozwinięcia staje się to o wiele prostsze i bardziej zwięzłe:

```js
var czesci = ['kotek', 'na', 'plotek'];
var wierszyk = ['wlazl', ...czesci, 'i', 'mruga'];
// ["wlazl", "kotek", "na", "plotek", "i", "mruga"]
```

Tak jak dla list argumentów w wywołaniach funkcji, operator `...` może być użyty wielokrotnie i w każdym miejscu literału tablicowego.

#### Kopia tablicy

```js
var tab = [1, 2, 3];
var tab2 = [...tab]; // jak tab.slice()
tab2.push(4);

// tab2 staje się [1, 2, 3, 4]
// tab pozostaje niezmieniona
```

**Uwaga:** Składnia rozwinięcia skutecznie sięga tylko na jeden poziom wgłąb przy kopiowaniu tablicy. W związku z tym takie podejście może być nieodpowiednie przy kopiowaniu tablic wielowymiarowych, jak pokazuje poniższy przykład (tak samo jest z {{jsxref("Object.assign()")}}  i kładnią rozwinięcia).

```js
var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// Tablica a została zmodyfikowana: [[], [2], [3]]
```

#### Lepszy sposób na łączenie tablic

{{jsxref("Array.concat")}} jest często używane do dołączania elementów jednej tablicy na koniec drugiej. Bez składni rozwinięcia wygląda to tak:

```js
var tab1 = [0, 1, 2];
var tab2 = [3, 4, 5];
// Dołącz wszystkie elementy tab2 na koniec tab1
tab1 = tab1.concat(tab2);
```

Przy użyciu składni rozwinięcia wygląda to natomiast tak:

```js
var tab1 = [0, 1, 2];
var tab2 = [3, 4, 5];
tab1 = [...tab1, ...tab2];
```

{{jsxref("Array.unshift")}} jest często używane do dołączania elementów jednej tablicy na początek drugiej. Bez składni rozwinięcia wygląda to w następujący sposób:

```js
var tab1 = [0, 1, 2];
var tab2 = [3, 4, 5];
// Dodaj wszystkie elementy tab2 na początek tab1
Array.prototype.unshift.apply(tab1, tab2) // tab1 staje się [3, 4, 5, 0, 1, 2]
```

Przy użyciu składni rozwinięcia otrzymuje to następującą postać \[jednak zauważ, że w tym przypadku utworzona zostaje nowa tablica `tab1` – w odróżnieniu od {{jsxref("Array.unshift")}}, `tab1` nie jest automatycznie modyfikowana):

```js
var tab1 = [0, 1, 2];
var tab2 = [3, 4, 5];
tab1 = [...tab2, ...tab1]; // tab1 staje się [3, 4, 5, 0, 1, 2]
```

### Rozwinięcie w literałach tablicowych

The [Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) proposal (stage 4) adds spread properties to [object literals](/pl/docs/Web/JavaScript/Reference/Operators/Object_initializer). It copies own enumerable properties from a provided object onto a new object.

Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than {{jsxref("Object.assign()")}}.

```js
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

Note that {{jsxref("Object.assign()")}} triggers [setters](/pl/docs/Web/JavaScript/Reference/Functions/set) whereas spread syntax doesn't.

Note that you cannot replace nor mimic the {{jsxref("Object.assign()")}} function:

```js
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );

var mergedObj = merge ( obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

var mergedObj = merge ( {}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

In the above example, the spread syntax does not work as one might expect: it spreads an *array* of arguments into the object literal, due to the rest parameter.

### Tylko dla obiektów iterowalnych

Składnia rozwinięcia może być użyta jedynie dla obiektów[ iterowalnych](/pl/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator):

```js
var obiekt = {'klucz1': 'wartosc1'};
var tablica = [...obiekt]; // TypeError: obiekt is not iterable
```

### Rozwinięcie z wieloma wartościami

Kiedy używaż składni rozwinięcia do wywołań funkcji, musisz być świadomy możliwości przekroczenia limitu liczby argumentów w silniku JavaScript. Po więcej szczegółów zajrzyj do [`apply()`.](/pl/docs/Web/JavaScript/Referencje/Obiekty/Function/apply "The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).")

## Składnia reszty (parametry)

Składnia reszty ang. _rest syntax_) wygląda dokładnie jak składnia rozwinięcia, ale jest używana do destrukturyzacji tablic i obiektów. W pewnym sensie składnia reszty jest przeciwieństwem składni rozpakowania: rozwinięcie „rozpakowuje” elementy tablicy, natomiast składnia reszty „zbiera” wiele elementów i „pakuje” je do pojedynczego elementu. Zobacz: [rest parameters.](/pl/docs/Web/JavaScript/Reference/Functions_and_function_scope/rest_parameters)

## Specyfikacje

| Specification                                                        | Status                       | Comment                                                                                                                                                                                                                            |
| -------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES2015', '#sec-array-initializer')}}     | {{Spec2('ES2015')}}     | Defined in several sections of the specification: [Array Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer), [Argument Lists](http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists) |
| {{SpecName('ES2018', '#sec-object-initializer')}}     | {{Spec2('ES2018')}}     | Defined in [Object Initializer](http://www.ecma-international.org/ecma-262/9.0/#sec-object-initializer)                                                                                                                            |
| {{SpecName('ESDraft', '#sec-array-initializer')}}     | {{Spec2('ESDraft')}} | No changes.                                                                                                                                                                                                                        |
| {{SpecName('ESDraft', '#sec-object-initializer')}} | {{Spec2('ESDraft')}} | No changes.                                                                                                                                                                                                                        |

## Wsparcie przeglądarek

{{Compat("javascript.operators.spread")}}

## Zobacz też

- [Rest parameters](/pl/docs/Web/JavaScript/Reference/Functions_and_function_scope/rest_parameters) (również ‘`...`’)
- [fn.apply](/pl/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) (również ‘`...`’)
