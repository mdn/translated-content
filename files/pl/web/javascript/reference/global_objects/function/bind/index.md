---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
translation_of: Web/JavaScript/Reference/Global_Objects/Function/bind
original_slug: Web/JavaScript/Referencje/Obiekty/Function/bind
---
{{JSRef}}
Metoda **`bind()`** tworzy nową funkcję, której wywołanie powoduje ustawienie **this** na podaną wartość, z podaną sekwencją argumentów poprzedzającą dowolną podaną podczas wywołania nowej funkcji.
 {{EmbedInteractiveExample ("pages/js/function-bind.html", "taller")}}
Źródło tego interaktywnego przykładu jest przechowywane w repozytorium GitHub. Jeśli chcesz przyczynić się do projektu interaktywnych przykładów, sklonuj https\://github.com/mdn/interactive-examples i wyślij nam prośbę o pobranie.

## Syntax

    let boundFunc = func.bind(thisAtr[, arg1[, arg2[, ...argN]]])

### Parametry

- `thisAtr`
  - : Wartość, która ma być przekazana jako **this** do funkcji docelowej func po wywołaniu funkcji powiązanej. Wartość jest ignorowana, jeśli funkcja powiązana jest konstruowana przy użyciu operatora {{jsxref ("Operators/new", "new")}}. Podczas używania funkcji **bind** do utworzenia funkcji (dostarczonej jako wywołanie zwrotne) wewnątrz setTimeout, każda prymitywna wartość przekazywana, gdy **thisAtr** jest konwertowany na obiekt. Jeśli nie podano żadnych argumentów, aby powiązać (bind), lub jeśli thisArg jest **null** lub **undefined**, **this** z zakresu wykonania jest traktowany jako **thisAtr** dla nowej funkcji.
- `arg1, arg2, ...argN` {{optional_inline}}
  - : Argumenty poprzedzające argumenty dostarczone funkcji powiązanej podczas wywoływania func.

### Zwracana wartość

Kopia podanej funkcji z podaną tą wartością i początkowymi argumentami (jeśli podano).

## Opis

Funkcja **bind**() tworzy nową funkcję wiązania (bound function), która jest exotic function object (termin z ECMAScript 2015), który zawija oryginalny obiekt funkcji. Wywołanie funkcji powiązanej zazwyczaj skutkuje wykonaniem jej owrapowanej funkcji.

Funckja wiązania **(bound function)** ma następujące właściwości wewnętrzne:

- **`[[BoundTargetFunction]]`**
  - : The wrapped function object
- **`[[BoundThis]]`**
  - : The value that is always passed as `this` value when calling the wrapped function.
- **`[[BoundArguments]]`**
  - : A list of values whose elements are used as the first arguments to any call to the wrapped function.
- **`[[Call]]`**
  - : Executes code associated with this object. Invoked via a function call expression. The arguments to the internal method are a `this` value and a list containing the arguments passed to the function by a call expression.

When a bound function is called, it calls internal method `[[Call]]` on `[[BoundTargetFunction]]`, with following arguments `Call(boundThis, ...args)`. Where `boundThis` is `[[BoundThis]]`, `args` is `[[BoundArguments]]`, followed by the arguments passed by the function call.

A bound function may also be constructed using the {{jsxref("Operators/new", "new")}} operator. Doing so acts as though the target function had instead been constructed. The provided `this` value is ignored, while prepended arguments are provided to the emulated function.

## Examples

### Creating a bound function

The simplest use of `bind()` is to make a function that, no matter how it is called, is called with a particular `this` value.

A common mistake for new JavaScript programmers is to extract a method from an object, then to later call that function and expect it to use the original object as its `this` (e.g., by using the method in callback-based code).

Without special care, however, the original object is usually lost. Creating a bound function from the function, using the original object, neatly solves this problem:

```js
this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX();
//  returns 81

const retrieveX = module.getX;
retrieveX();
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
boundGetX();
//  returns 81
```

**Funkcje częściowo zastosowane**
Kolejnym najprostszym zastosowaniem bind () jest utworzenie funkcji z wcześniej określonymi argumentami początkowymi.

Argumenty te (jeśli występują) są zgodne z podaną wartością, a następnie są wstawiane na początku argumentów przekazywanych do funkcji docelowej, a następnie wszelkie argumenty przekazywane funkcja powiązana w momencie jej wywołania.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2
}

const list1 = list(1, 2, 3);
//  [1, 2, 3]

const result1 = addArguments(1, 2);
//  3

// Create a function with a preset leading argument
const leadingThirtysevenList = list.bind(null, 37);

// Create a function with a preset first argument.
const addThirtySeven = addArguments.bind(null, 37);

const list2 = leadingThirtysevenList();
//  [37]

const list3 = leadingThirtysevenList(1, 2, 3);
//  [37, 1, 2, 3]

const result2 = addThirtySeven(5);
//  37 + 5 = 42

const result3 = addThirtySeven(5, 10);
//  37 + 5 = 42
//  (the second argument is ignored)
```

### With `setTimeout()`

By default within [`window.setTimeout()`](/pl/docs/Web/API/Window/setTimeout "REDIRECT WindowTimers.setTimeout"), the `this` keyword will be set to the [`window`](/pl/docs/Web/API/Window "The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.") (or `global`) object. When working with class methods that require `this` to refer to class instances, you may explicitly bind `this` to the callback function, in order to maintain the instance.

```js
function LateBloomer() {
  this.petalCount = Math.floor(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
};

const flower = new LateBloomer();
flower.bloom();
//  after 1 second, calls 'flower.declare()'
```

### Funkcje powiązane używane jako kostruktory

> **Ważne:** Ostrzeżenie: ta sekcja pokazuje możliwości JavaScript i dokumentuje niektóre przypadki krawędzi metody bind ().Metody przedstawione poniżej nie są najlepszym sposobem na robienie rzeczy i prawdopodobnie nie powinny być stosowane w żadnym środowisku produkcyjnym.

Funkcje powiązane są automatycznie odpowiednie do użycia z operatorem {{jsxref ("Operators/new", "new")}} do tworzenia nowych instancji utworzonych przez funkcję docelową. Gdy do utworzenia wartości używana jest funkcja powiązana, pod warunkiem, że jest to ignorowane.

Jednak pod warunkiem, że argumenty są nadal dołączane do wywołania konstruktora:

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'


//  not supported in the polyfill below,

//  works fine with native bind:

const YAxisPoint = Point.bind(null, 0/*x*/);


const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0/*x*/);

const axisPoint = new YAxisPoint(5);
axisPoint.toString();                    // '0,5'

axisPoint instanceof Point;              // true
axisPoint instanceof YAxisPoint;         // true
new YAxisPoint(17, 42) instanceof Point; // true
```

Zauważ, że nie musisz robić nic specjalnego, aby utworzyć powiązaną funkcję do użycia z {{jsxref ("Operators/new", "new")}}.

Następstwem jest to, że nie musisz robić nic specjalnego, aby utworzyć funkcję powiązaną, która będzie wywoływana w sposób jawny, nawet jeśli wolisz, aby funkcja powiązana była wywoływana tylko za pomocą {{jsxref ("Operators/new", "new")}} .

```js
//  Example can be run directly in your JavaScript console
//  ...continued from above

//  Can still be called as a normal function
//  (although usually this is undesired)
YAxisPoint(13);

`${emptyObj.x},${emptyObj.y}`;
// >  '0,13'
```

If you wish to support the use of a bound function only using {{jsxref("Operators/new", "new")}}, or only by calling it, the target function must enforce that restriction.

### Tworzenie skrótów

bind () jest również pomocny w przypadkach, w których chcesz utworzyć skrót do funkcji, która wymaga podania tej wartości.

Weźmy na przykład {{jsxref ("Array.prototype.slice ()")}}, którego chcesz użyć do konwersji obiektu podobnego do tablicy na prawdziwą tablicę. Możesz utworzyć taki skrót:

```js
const slice = Array.prototype.slice;

// ...

slice.apply(arguments);
```

Za pomocą bind () można to uprościć.

W poniższym fragmencie kodu slice () jest funkcją powiązaną z funkcją {{jsxref ("Function.prototype.apply ()", "Apply ()")}} z {{jsxref ("Function.prototype") }}, z tą wartością ustawioną na {{jsxref ("Array.prototype.slice ()", "slice ()")}} funkcji {{jsxref ("Array.prototype")}}. Oznacza to, że dodatkowe wywołania apply () można wyeliminować:

```js
//  same as "slice" in the previous example
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
```

Polyfill
Ponieważ starsze przeglądarki są na ogół również wolniejszymi przeglądarkami, jest to o wiele bardziej krytyczne niż większość ludzi rozpoznaje tworzenie polifillów wydajności, aby przeglądanie w przestarzałych przeglądarkach było nieco mniej straszne.

W związku z tym poniżej przedstawiono dwie opcje dla funkcji wypełniania funkcji Function.prototype.bind ():

Pierwszy jest znacznie mniejszy i bardziej wydajny, ale nie działa, gdy używasz nowego operatora.
Drugi jest większy i mniej wydajny, ale pozwala na pewne użycie nowego operatora na powiązanych funkcjach.
Zasadniczo w większości kodów bardzo rzadko widuje się nowe używane w funkcji powiązanej, więc najlepiej jest wybrać pierwszą opcję.

```js
//  Does not work with `new funcA.bind(thisArg, args)`
if (!Function.prototype.bind) (function(){
  var slice = Array.prototype.slice;
  Function.prototype.bind = function() {
    var thatFunc = this, thatArg = arguments[0];
    var args = slice.call(arguments, 1);
    if (typeof thatFunc !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - ' +
             'what is trying to be bound is not callable');
    }
    return function(){
      var funcArgs = args.concat(slice.call(arguments))
      return thatFunc.apply(thatArg, funcArgs);
    };
  };
})();
```

Możesz częściowo obejść ten problem, wstawiając następujący kod na początku skryptów, umożliwiając korzystanie z większości funkcji bind () w implementacjach, które nie obsługują go natywnie.

```js
//  Yes, it does work with `new funcA.bind(thisArg, args)`
if (!Function.prototype.bind) (function(){
  var ArrayPrototypeSlice = Array.prototype.slice;
  Function.prototype.bind = function(otherThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var baseArgs= ArrayPrototypeSlice .call(arguments, 1),
        baseArgsLength = baseArgs.length,
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          baseArgs.length = baseArgsLength; // reset to default base arguments
          baseArgs.push.apply(baseArgs, arguments);
          return fToBind.apply(
                 fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs
          );
        };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
})();
```

Niektóre z wielu różnic (mogą być też inne, ponieważ ta lista nie próbuje być wyczerpująca) między tym algorytmem a określonym algorytmem to:

Częściowa implementacja opiera się na {{jsxref ("Array.prototype.slice ()")}}, {{jsxref ("Array.prototype.concat ()")}}, {{jsxref ("Function.prototype.call ( ) ")}} i {{jsxref (" Function.prototype.apply () ")}}, wbudowane metody mające swoje oryginalne wartości.
Częściowa implementacja tworzy funkcje, które nie mają niezmiennej „pigułki trucizny” {{jsxref ("Function.caller", "caller")}} i właściwości argumentów, które wyrzucają {{jsxref ("Global_Objects/TypeError", "TypeError") }} przy pobieraniu, ustawianiu lub usuwaniu. (Można to dodać, jeśli implementacja obsługuje {{jsxref ("Object.defineProperty")}} lub częściowo zaimplementowana \[bez zachowania polegającego na rzucaniu przy usuwaniu], jeśli implementacja obsługuje {{jsxref ("Object .__ zdefiniujGetter__", " __defineGetter__ ")}} i {{jsxref (" Object .__ definiSetter__ "," __defineSetter__ ")}}).
Częściowa implementacja tworzy funkcje, które mają właściwość prototypu. (Właściwie powiązane funkcje nie mają żadnych.)
Częściowa implementacja tworzy powiązane funkcje, których właściwość {{jsxref ("Function.length", "length")}}} nie zgadza się z właściwością nakazaną przez ECMA-262: tworzy funkcje o długości 0. Pełna implementacja - w zależności od długość funkcji docelowej i liczba wcześniej określonych argumentów - może zwrócić niezerową długość.
Częściowa implementacja tworzy powiązane funkcje, których właściwość {{jsxref ("Function.name", "name")}} nie jest pochodną oryginalnej nazwy funkcji. Według ECMA-262 nazwa zwróconej funkcji powiązanej powinna być „związana” + nazwa funkcji docelowej.
Jeśli zdecydujesz się użyć tej częściowej implementacji, nie możesz polegać na przypadkach, w których zachowanie odbiega od ECMA-262, wydanie 5! Na szczęście te odchylenia od specyfikacji rzadko (jeśli w ogóle) pojawiają się w większości sytuacji kodowania. Jeśli nie rozumiesz żadnego z odchyleń od powyższej specyfikacji, w tym konkretnym przypadku można bezpiecznie nie martwić się o te niezgodne szczegóły odchylenia.

Jeśli jest to absolutnie konieczne, a wydajność nie stanowi problemu, znacznie wolniejsze (ale bardziej zgodne ze specyfikacją rozwiązanie) można znaleźć na stronie https\://github.com/Raynos/function-bind.

## Dane techniczne

| Specyfikacja                                                                                                 |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-function.prototype.bind', 'Function.prototype.bind')}} |

##### Kompatybilność z przeglądarkami<br>Tabela zgodności na tej stronie jest generowana z danych strukturalnych. Jeśli chcesz przyczynić się do danych, sprawdź https\://github.com/mdn/browser-compat-data i wyślij nam żądanie ściągnięcia.<br>{{Compat ("javascript.builtins.Function.bind")}}

## See also

- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions", "", 1)}}
