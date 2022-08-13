---
title: Funkcje
slug: Web/JavaScript/Guide/Functions
translation_of: Web/JavaScript/Guide/Functions
original_slug: Web/JavaScript/Guide/Funkcje
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_Operators")}}

Funkcje są jednym z podstawowych 'klocków' JavaScriptu. Funkcja jest zbiorem wyrażeń, które wykonują jakieś zadanie, bądź obliczają wartość. Aby użyć funkcji, musisz najpierw zdefiniować ją gdzieś w zasięgu, z którego zostanie wywołana.

See also the [exhaustive reference chapter about JavaScript functions](/pl/docs/Web/JavaScript/Reference/Functions) to get to know the details.

## Definiowanie funkcji

### Deklaracje funkcji

**Definicja funkcji** (zwana też **deklaracją funkcji**, lub **instrukcją funkcji**) składa się ze słowa kluczowego [`function`](/pl/docs/Web/JavaScript/Reference/Statements/function "function") oraz:

- Nazwy funkcji.
- Listy argumentów zamkniętych w nawiasach i oddzielonych przecinkami.
- Instrukcji JavaScript, które definiują funkcję, zamkniętych w nawiasach klamrowych, `{ }`.

Poniższy przykład przedstawia definicję funkcji obliczającej kwadrat liczby:

```js
function square(number) {
  return number * number;
}
```

Funkcja `square` przyjmuje jeden argument, nazwany `number`. Funkcja składa się z jednej instrukcji, która zwraca argument (`number`) pomnożony przez siebie. Instrukcja [`return`](/pl/docs/Web/JavaScript/Reference/Statements/return "return") oznacza wartość zwracaną przez funkcję.

```js
return number * number;
```

Podstawowe parametry (takie jak liczby) są przekazywane do funkcji **przez wartość**; wartośc przekazywana jest do funkcji, ale jeśli funkcja zmienia wartość, ta zmiana nie jest rejestrowana globalnie, lub w funkcji wywołującej.

Jeśli przekażesz obiekt (n.p. {{jsxref("Array")}}) jako parametr a funkcja zmieni właściwości obiektu, zmiana ta jest rejestrowana poza funkcją, tak jak jest to pokazane w przykładzie:

```js
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make; // x dostaje wartość "Honda"

myFunc(mycar);
y = mycar.make; // y dodaje wartość "Toyota"
                // (właściwość make została zmieniona przez funkcję)
```

> **Note:** Przypisanie nowego obiektu do parametru **nie** będzie miało żadnego skutku poza funkcją, ponieważ jest to zmiana wartości parametru, a nie zmiana jednej z właściwości obiektu:

```js
function myFunc(theObject) {
  theObject = {make: "Ford", model: "Focus", year: 2006};
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make; // x dostaje wartość "Honda"

myFunc(mycar);
y = mycar.make; // y wciąż dostaje wartość "Honda"
```

### Wyrażenia funkcyjne

Podczas gdy powyższa deklaracja jest syntaktycznie wyrażeniem, funkcje mogą być utworzone także przez **wyrażenie funkcyjne.** Taka funkcja może być **anonimowa;** nie posiadająca nazwy. Dla przykładu, funkcja `square `może być zdefiniowana następująco:

```js
var square = function(number) { return number * number };
var x = square(4) // x gets the value 16
```

Deklaracja funkcji przy  pomocy wyrażenia funkcyjnego nie oznacza, że funkcja musi być anonimowa. Nadal może ona posiadać swoją nazwę, która może przydać się do wywołania samej siebie czy do identyfikacji w śladzie stosu podczas debugowania kodu.

```js
var factorial = function fac(n) { return n<2 ? 1 : n*fac(n-1) };

console.log(factorial(3));
```

Function expressions are convenient when passing a function as an argument to another function. The following example shows a `map` function being defined and then called with an expression function as its first parameter:

```js
function map(f,a) {
  var result = [], // Create a new Array
      i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
```

Poniższy kod:

```js
map(function(x) {return x * x * x}, [0, 1, 2, 5, 10]);
```

zwraca \[0, 1, 8, 125, 1000].

In JavaScript, a function can be defined based on a condition. For example, the following function definition defines `myFunc` only if `num` equals 0:

```js
var myFunc;
if (num == 0){
  myFunc = function(theObject) {
    theObject.make = "Toyota"
  }
}
```

In addition to defining functions as described here, you can also use the {{jsxref("Function")}} constructor to create functions from a string at runtime, much like {{jsxref("eval()")}}.

A **method** is a function that is a property of an object. Read more about objects and methods in [Working with objects](/pl/docs/Web/JavaScript/Guide/Working_with_Objects "en-US/docs/JavaScript/Guide/Working with Objects").

## Wywoływanie funkcji

Definicja fukcji nie wykonuje jej. Definiowanie funkcji nazywa fukncję i określa co robić kiedy fukcja zostanie wywołana. **Wywołanie** funkcji inicjiuje wykonanie określonych akcji wraz z wskazanymi parametrami. Na przykład, jeśli zdefiniujesz funkcję square, możesz ją wywołać w następujący sposób:

```js
square(5);
```

Powyższy kod wywołuje funkcję dla argumentu 5. Funkcja wykonuje się i zwraca wartość 25.

Funkcja musi znajdować się w obecnym zakresie by mogła zostać wywołana. Jej wywołanie może jednak znajdować się powyżej jej deklaracji. Mamy wtedy do czynienia ze zjawiskiem hoistingu.

```js
console.log(square(5));
/* ... */
function square(n) { return n*n }
```

Zakres funkcji jest funkcją w której została ona zadeklarowana co oznacza, że deklarując funkcję na najwyższym poziomie programu, znajduje się ona w zakresie globalnym.

> **Note:** **Notka:** Zjawisko hoistingu funkcji zachodzi wyłącznie w przypadku powyższego sposobu deklaracji (`function funcName(){}`). Poniższy kod nie zadziała, w tym przypadku funkcja została zadeklarowana za pomocą wyrażenia.

```js example-bad
console.log(square(5));
square = function (n) {
  return n * n;
}
```

Argumenty funkcji mogą być nie tylko łańcuchami lub liczbami.Funkcja `show_props()` (zdefiniowana w [Working with objects](/pl/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_Properties "https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Working_with_Objects#Objects_and_Properties")) jest przykładem funkcji przyjmującej objekt jako argument.

Funkcja może wywoływać samą siebie. Na przykład, poniżej mamy funkcję rekurencyjnie obliczającą silnię.

```js
function factorial(n){
  if ((n == 0) || (n == 1))
    return 1;
  else
    return (n * factorial(n - 1));
}
```

Poniżej znajdują się wyniki funkcji dla liczb z zakresu 1-5.

```js
var a, b, c, d, e;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
d = factorial(4); // d gets the value 24
e = factorial(5); // e gets the value 120
```

Istnieją inne sposoby wywołania funkcji. Często zdarzają się sytuacje gdy funkcja musi zostać wywołana dynamicznie, przyjmuje różna liczbę argumentów lub zmienia sie kontekst jej wywołania. Okazuje się, że funkcje są tak naprawdę obiektami, które posiadaja własne metody (sprawdź obiekt {{jsxref("Function")}}). Jednej z tych metod {{jsxref("Function.apply", "apply()")}} możemy użyć do zmiany kontekstu wywołania funkcji.

## Zakres funkcji

Zmienne zdefiniowane wewnątrz funkcji nie są dostępne poza nią, ponieważ są zdefiniowane tylko w wewnętrznym zakresie funkcji. Sama funkcja ma dostęp do innych zmiennych i funkcji zdefiniowanych w tym samym zakresie, w którym została zdefiniowana. Innymi słowy, funkcja zdefiniowana w zakresie globalnym ma dostęp do wszystkich zmiennych zdefiniowanych w zakresie globalnym. Funkcja zdefiniowana w innej funkcji ma dostęp do wszystkich zmiennych zdefiniowanych w funkcji macierzystej oraz zmiennych, do których ma dostęp funkcja macierzysta.

```js
// Poniższe zmienne są zdefiniowane z zakresie globalnym
var num1 = 20,
    num2 = 3,
    name = "Chamahk";

// Ta funkcja jest zdefiniowana w zakresie globalnym
function multiply() {
  return num1 * num2;
}

multiply(); // Zwraca 60

// Przykład funkcji zagnieżdżonej
function getScore () {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Zwraca "Chamahk scored 5"
```

## Zakres i stos funkcji

### Rekurencja

Funkcja może się odwoływać i wywoływać samą siebie. Istnieją trzy sposoby odwoływania się funkcji do siebie:

1.  przez nazwę funkcji
2.  [`arguments.callee`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee)
3.  przez zmienną dostępna w zakresie, która odwołuje się do funkcji

Na przykład, rozważ następującą definicję funkcji:

```js
var foo = function bar() {
   // statements go here
};
```

Within the function body, the following are all equivalent:

1.  `bar()`
2.  `arguments.callee()`
3.  `foo()`

Funkcja, która wywołuje samą siebie to _funkcja rekurencyjna_. W pewnym sensie rekurencja jest analogiczna z pętlą. Zarówno funkcja rekurencyjna, jak i pętla wykonują ten sam kod wiele razy, potrzebują warunku końca (aby uniknąć wiecznej pętli lub bardziej w tym przypadku wiecznej rekurencji). Dla przykładu następująca pętla:

```js
var x = 0;
while (x < 10) { // "x < 10" is the loop condition
   // zrób jakieś rzeczy
   x++;
}
```

może być przekształcona w funkcję rekurencyjną i wywołanie tej funkcji:

```js
function loop(x) {
  if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  loop(x + 1); // rekurencyjne wywołanie
}
loop(0);
```

Niektóre algorytmy nie mogą być wykonane w zwykłej iteracji pętli. Dla przykładu, wydobycie wszystkich nodów ze struktury drzewiastej (np. dla [DOM](/pl/docs/DOM)) jest łatwiej wykonać za pomocą rekurencji:

```js
function walkTree(node) {
  if (node == null) //
    return;
  // zrób coś z node
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

Porównując do funkcji z pętlą `loop`, każde rekurencyjne wywołanie wykonuje wiele rekurencyjnych wowołań.

Każdy algorytm rekurencyjny można zmienić na nie rekurencyjny, lecz logika w tym drugim przypadku jest znacznie bardziej skomplikowana i wymaga użycia stosu. Faktycznie, sama rekurencja używa stosu: stosu funkcyjnego.

W poniższym przykładzie widać zachowanie przypominające użycie stosu:

```js
function foo(i) {
  if (i < 0)
    return;
  console.log('begin:' + i);
  foo(i - 1);
  console.log('end:' + i);
}
foo(3);

// Output:

// begin:3
// begin:2
// begin:1
// begin:0
// end:0
// end:1
// end:2
// end:3
```

### Funkcje zagnieżdżone i domknięcia

Możesz zagnieżdżać funkcję w funkcji. Zagnieżdżona (wewnętrzna) funkcja jest prywatna dla funkcji (zewnętrznej), która ją zawiera. W ten sposób tworzy się domknięcie (_closure)_. Domknięcie jest wyrażeniem (zwykle funkcją), które może posiadać dodatkowe zmienne razem ze środowiskiem, które "wiąże" te zmienne (w ten sposób domknięcie jest zamykane).

Ponieważ funkcja zagnieżdżona jest równocześnie domknięciem, to oznacza, że może "dziedziczyć" wszystkie argumenty i zmienne funkcji, która ją zawiera. Innymi słowy, funkcja wewnętrzna zawiera zakres funkcji zewnętrznej.

Podsumowując:

- Funkcja wewnętrzna może być dostępna tylko przez instrukcje z funkcji zewnętrznej.

- Funkcja wewnętrzna tworzy domknięcie: może używać argumentów i zmiennych funkcji zewnętrznej, podczas gdy funkcja zewnętrzna nie może używać argumentów i zmiennych funkcji wewnętrznej.

Poniższy przykład obrazuje funkcje zagnieżdżone:

```js
function addSquares(a,b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2,3); // returns 13
b = addSquares(3,4); // returns 25
c = addSquares(4,5); // returns 41
```

Ponieważ funkcja wewnętrzna tworzy domknięcie, możesz wywołać funkcję zewnętrzną i podać argumenty zarówno dla zewnętrznej, jak i wewnętrznej funkcji:

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8
```

### Zachowywanie zmiennych

Zwróć uwagę jak zmienna `x` jest zachowana, kiedy zwracana jest funkcja `inside`. Domknięcie musi zachować argumenty i zmienne we wszystkich zakresach, do których się odwołuje. Jako że każde wywołanie potencjalnie dostarcza różne wartości argumentów, przy każdym wywołaniu outside jest tworzone nowe domknięcie. Pamięć może być zwolniona, tylko jeśli zwracany `inside` nie jest więcej dostępny.

Ten sposób nie różni się od zachowywania referencji w innych obiektach, lecz jest mniej oczywisty, ponieważ referencje nie są tworzone bezpośrednio i nie można ich zweryfikować.

### Wielokrotnie zagnieżdżone funkcje

Funkcje mogą być zagnieżdżone wielokrotnie, np. funkcja (A) zawierająca funkcję (B) zawierającą funkcję (C). Obydwie funkcje B i C tworzą domknięcia więc B ma dostęp do A a C ma dostęp do B. Dodatkowo, ponieważ C ma dostęp do B która ma dostęp do A, więc C również ma dostęp do A. W ten sposób domknięcia mogą zawierać wiele zakresów; zawierają rekurencyjne zakresy funkcji, które je zawierają. Efekt ten nazywa się _wiązaniem zakresów (\_\_scope chaining)_. (Później zostanie wyjaśnione określenie "chaining".)

Rozważ poniższy przykład:

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)
```

W tym przykładzie `C` ma dostęp do zmiennej `y` w `B` i `x` w `A`. Jest to możliwe, ponieważ:

1.  `B` tworzy domknięcie zawierające `A` i dlatego `B` ma dostęp do argumentów i zmiennych `A`.
2.  `C` tworzy domknięcie zawierające `B`.
3.  Ponieważ domknięcie `B` zawiera `A`, to domknięcie `C` również zawiera `A`. `C` ma dostęp do zmiennych i argumentów zarówno `B` jak i `A`. Innymi słowy `C` wiąże zakresy `B` i `A`.

Jednak sytuacja odwrotna nie jest już prawdziwa. `A` nie ma dostępu do `C`, ponieważ `A` nie może dostać się do żadnego argumentu i zmiennej `B`, dla której `C` jest zmienną. Zatem `C` pozostaje prywatny (dostępny) tylko dla `B`.

### Konflikty nazw

Gdy dwa argumenty lub zmienne w zakresach danego zamknięcia mają tę samą nazwę, wtedy występuje konflikt nazw. Czym bardziej wewnętrzny zakres, tym większe pierwszeństwo, więc najbardziej wewnętrzny zakres ma najwyższy priorytet, a najbardziej zewnętrzny zakres ma najniższy. Sytuacja ta, określana jest wiązaniem zakresów. Pierwszy w łańcuchu to najbardziej wewnętrzny zakres, a ostatni to najbardziej zewnętrzny. Rozważ następujący przykład:

```js
function outside() {
  var x = 10;
  function inside(x) {
    return x;
  }
  return inside;
}
result = outside()(20); // returns 20 instead of 10
```

The name conflict happens at the statement `return x` and is between `inside`'s parameter `x` and `outside`'s variable `x`. The scope chain here is {`inside`, `outside`, global object}. Therefore `inside`'s `x` takes precedences over `outside`'s `x`, and 20 (`inside`'s `x`) is returned instead of 10 (`outside`'s `x`).

## Closures

Closures are one of the most powerful features of JavaScript. JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to). However, the outer function does not have access to the variables and functions defined inside the inner function. This provides a sort of security for the variables of the inner function. Also, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the outer function itself, if the inner function manages to survive beyond the life of the outer function. A closure is created when the inner function is somehow made available to any scope outside the outer function.

```js
var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
},
myPet = pet("Vivie");

myPet();                     // Returns "Vivie"
```

It can be much more complex than the code above. An object containing methods for manipulating the inner variables of the outer function can be returned.

```js
var createPet = function(name) {
  var sex;

  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet("Vivie");
pet.getName();                  // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex();                   // male
pet.getName();                  // Oliver
```

In the code above, the `name` variable of the outer function is accessible to the inner functions, and there is no other way to access the inner variables except through the inner functions. The inner variables of the inner function act as safe stores for the inner functions. They hold "persistent", yet secure, data for the inner functions to work with. The functions do not even have to be assigned to a variable, or have a name.

```js
var getCode = (function(){
  var secureCode = "0]Eal(eh&2";    // A code we do not want outsiders to be able to modify...

  return function () {
    return secureCode;
  };
})();

getCode();    // Returns the secureCode
```

There are, however, a number of pitfalls to watch out for when using closures. If an enclosed function defines a variable with the same name as the name of a variable in the outer scope, there is no way to refer to the variable in the outer scope again.

```js
var createPet = function(name) {  // Outer function defines a variable called "name"
  return {
    setName: function(name) {    // Enclosed function also defines a variable called "name"
      name = name;               // ??? How do we access the "name" defined by the outer function ???
    }
  }
}
```

The magical `this` variable is very tricky in closures. They have to be used carefully, as what `this` refers to depends completely on where the function was called, rather than where it was defined.

## Using the arguments object

The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:

```js
arguments[i]
```

where `i` is the ordinal number of the argument, starting at zero. So, the first argument passed to a function would be `arguments[0]`. The total number of arguments is indicated by `arguments.length`.

Using the `arguments` object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function. You can use `arguments.length` to determine the number of arguments actually passed to the function, and then access each argument using the `arguments` object.

For example, consider a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:

```js
function myConcat(separator) {
   var result = "", // initialize list
       i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}
```

You can pass any number of arguments to this function, and it concatenates each argument into a string "list":

```js
// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

> **Note:** The `arguments` variable is "array-like", but not an array. It is array-like in that is has a numbered index and a `length` property. However, it does not possess all of the array-manipulation methods.

See the {{jsxref("Function")}} object in the JavaScript reference for more information.

## Function parameters

Starting with ECMAScript 6, there are two new kinds of parameters: default parameters and rest parameters.

### Default parameters

In JavaScript, parameters of functions default to `undefined`. However, in some situations it might be useful to set a different default value. This is where default parameters can help.

In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are `undefined`. If in the following example, no value is provided for `b` in the call, its value would be `undefined`  when evaluating `a*b` and the call to `multiple` would have returned `NaN`. However, this is caught with the second line in this example:

```js
function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a*b;
}

multiply(5); // 5
```

With default parameters, the check in the function body is no longer necessary. Now, you can simply put `1` as the default value for `b` in the function head:

```js
function multiply(a, b = 1) {
  return a*b;
}

multiply(5); // 5
```

Fore more details, see [default parameters](/pl/docs/Web/JavaScript/Reference/Functions/Default_parameters) in the reference.

### Rest parameters

The [rest parameter](/pl/docs/Web/JavaScript/Reference/Functions/rest_parameters) syntax allows to represent an indefinite number of arguments as an array. In the example, we use the rest parameters to collect arguments from the second one to the end. We then multiply them by the first one. This example is using an arrow function, which is introduced in the next section.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Arrow functions

An [arrow function expression](/pl/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (also known as **fat arrow function**) has a shorter syntax compared to function expressions and lexically binds the `this` value. Arrow functions are always anonymous. See also this hacks.mozilla.org blog post: "[ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)".

Two factors influenced the introduction of arrow functions: shorter functions and lexical `this`.

### Shorter functions

In some functional patterns, shorter functions are welcome. Compare:

```js
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( s => s.length );
```

### Lexical `this`

Until arrow functions, every new function defined its own [this](/pl/docs/Web/JavaScript/Reference/Operators/this) value (a new object in case of a constructor, undefined in strict mode function calls, the context object if the function is called as an "object method", etc.). This proved to be annoying with an object-oriented style of programming.

```js
function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();
```

In ECMAScript 3/5, this issue was fixed by assigning the value in `this` to a variable that could be closed over.

```js
function Person() {
  var self = this; // Some choose `that` instead of `self`.
                   // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
```

## Predefined functions

JavaScript has several top-level, built-in functions:

- {{jsxref("Global_Objects/eval", "eval()")}}
  - : The **`eval()`** method evaluates JavaScript code represented as a string.
- {{jsxref("Global_Objects/uneval", "uneval()")}} {{non-standard_inline}}
  - : The **`uneval()`** method creates a string representation of the source code of an {{jsxref("Object")}}.
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
  - : The global **`isFinite()`** function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
  - : The **`isNaN()`** function determines whether a value is {{jsxref("Global_Objects/NaN", "NaN")}} or not. Note: coercion inside the `isNaN` function has [interesting](/pl/docs/Web/JavaScript/Reference/Global_Objects/isNaN#Description) rules; you may alternatively want to use {{jsxref("Number.isNaN()")}}, as defined in ECMAScript 6, or you can use [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) to determine if the value is Not-A-Number.
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
  - : The **`parseFloat()`** function parses a string argument and returns a floating point number.
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
  - : The **`parseInt()`** function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
  - : The **`decodeURI()`** function decodes a Uniform Resource Identifier (URI) previously created by {{jsxref("Global_Objects/encodeURI", "encodeURI")}} or by a similar routine.
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
  - : The **`decodeURIComponent()`** method decodes a Uniform Resource Identifier (URI) component previously created by {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}} or by a similar routine.
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
  - : The **`encodeURI()`** method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
  - : The **`encodeURIComponent()`** method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).
- {{jsxref("Global_Objects/escape", "escape()")}} {{deprecated_inline}}
  - : The deprecated **`escape()`** method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. Use {{jsxref("Global_Objects/encodeURI", "encodeURI")}} or {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}} instead.
- {{jsxref("Global_Objects/unescape", "unescape()")}} {{deprecated_inline}}
  - : The deprecated **`unescape()`** method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like {{jsxref("Global_Objects/escape", "escape")}}. Because `unescape()` is deprecated, use {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} or {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} instead.

{{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_Operators")}}
