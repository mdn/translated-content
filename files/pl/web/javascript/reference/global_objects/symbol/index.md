---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol
original_slug: Web/JavaScript/Referencje/Obiekty/Symbol
---
{{JSRef}}

Funkcja `Symbol()` zwraca wartość typu **symbol**, posiada statyczne własności wystawiające kilka wartości używanych we wbudowanych obiektach, posiada statyczne metody wystawiające globalny rejestr symboli i przypomina wbudowaną klasę obiektu, jest jednak niekompletna jako konstruktor ponieważ nie wspiera składni "`new Symbol()`".

Każdy symbol zwrócony przez `Symbol()` jest unikalny. Symbol powinien być użyty jako identyfikator własności obiektu, został zaprojektowany jedynie w tym celu. Pełniejsze wyjaśnienie dotyczące jego przeznaczenia i użycia można znaleźć w [poświęconym mu wpisie w glosariuszu](/pl/docs/Glossary/Symbol).

Typ **symbol** jest {{Glossary("Primitive", "typem prostym")}}.

{{EmbedInteractiveExample("pages/js/symbol-constructor.html")}}

## Składnia

    Symbol([opis])

### Parametry

- `opis` {{optional_inline}}
  - : Ciąg znaków, parametr opcjonalny. Opis symbolu, może być użyty do debugowania, ale nie do dostania się do samego symbolu.

## Opis

Aby stworzyć nowy symbol należy użyć funkcji `Symbol()`, opcjonalnie przekazując jej opisowy ciąg znaków:

```js
var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');
```

Powyższy kod tworzy trzy nowe symbole. Należy zwrócić uwagę, że `Symbol("foo")` nie konwertuje ciągu znaków "foo" na symbol, tylko tworzy za każdym razem nowy symbol:

```js
Symbol('foo') === Symbol('foo'); // false
```

Następująca składnia z operatorem {{jsxref("Operators/new", "new")}} spowoduje wyjątek {{jsxref("TypeError")}}:

```js
var sym = new Symbol(); // TypeError
```

Dzieje się tak dlatego żeby powstrzymać programistów przed opakowywaniem wartości symboli w obiekty i może być zaskakujące, gdyż tworzenie opakowanych wartości dla typów prostych jest zazwyczaj możliwe (na przykład `new Boolean`, `new String` i `new Number`).

Jeśli stworzenie opakowanego symbolu jest dokładnie tym czego chce programista, może do tego użyć funkcji `Object()`:

```js
var sym = Symbol('foo');
typeof sym;     // "symbol"
var symObj = Object(sym);
typeof symObj;  // "object"
```

### Symbole współdzielone w globalnym rejestrze symboli

Powyższa składnia używająca funkcji `Symbol()` nie stworzy globalnego symbolu, który będzie dostępny w całym kodzie. Aby stworzyć symbol dostępny między plikami, a nawet między sferami (z których każda ma swoją globalną przestrzeń) należy użyć metody {{jsxref("Symbol.for()")}}. Z kolei metody {{jsxref("Symbol.keyFor()")}} można użyć aby uzyskać nazwę globalnego klucza dla posiadanego symbolu.

### Znajdowanie własności indeksowanych symbolami na obiekcie

Metoda {{jsxref("Object.getOwnPropertySymbols()")}} zwraca tablicę symboli i pozwala znaleźć własności indeksowane symbolami na danym obiekcie. Każdy obiekt jest inicjowany bez takich własności, więc metoda ta zwróci pustą tablicę do czasu ustawienia na obiekcie własności pod kluczem typu symbol.

## Własności

- `Symbol.length`
  - : Własność length której wartością jest 0.
- {{jsxref("Symbol.prototype")}}
  - : Reprezentuje prototyp konstruktora `Symbol`.

### Znane symbole

Oprócz symboli zdefiniowanych przez programistę, JavaScript posiada wbudowane symbole reprezentujące wewnętrzne mechanizmy języka, które nie były widoczne dla programisty w wersji ECMAScript 5 i wcześniejszych. Dostęp do tych symboli jest możliwy za pomocą następujących własności statycznych:

#### Symbole iteracji

- {{jsxref("Symbol.iterator")}}
  - : Metoda zwracająca domyślny iterator dla obiektu. Używana przez [`for...of`](/pl/docs/Web/JavaScript/Reference/Statements/for...of).
- {{jsxref("Symbol.asyncIterator")}} {{experimental_inline}}
  - : Metoda zwracająca domyślny asynchroniczny iterator dla obiektu. Używana przez [`for await of`](/pl/docs/Web/JavaScript/Reference/Statements/for-await-of).

#### Symbole wyrażeń regularnych

- {{jsxref("Symbol.match")}}
  - : Metoda dopasowująca dla ciągu znaków, używana również dla określenia czy obiekt może zostać użyty jako wyrażenie regularne. Używana przez {{jsxref("String.prototype.match()")}}.
- {{jsxref("Symbol.replace")}}
  - : Metoda zastępująca dopasowany ciąg w ciągu znaków. Używana przez {{jsxref("String.prototype.replace()")}}.
- {{jsxref("Symbol.search")}}
  - : Metoda zwracająca indeks początku ciągu znaków który został dopasowany do wyrażenia regularnego. Używana przez {{jsxref("String.prototype.search()")}}.
- {{jsxref("Symbol.split")}}
  - : Metoda dzieląca łańcuch znaków w miejscu w którym został dopasowany do wyrażenia regularnego. Używana przez {{jsxref("String.prototype.split()")}}.

#### Pozostałe symbole

- {{jsxref("Symbol.hasInstance")}}
  - : Metoda określająca czy konstruktor rozpoznaje obiekt jako swoją instancję. Używana przez {{jsxref("Operators/instanceof", "instanceof")}}.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Wartość logiczna określająca czy obiekt powinien zostać spłaszczony do jego elementów tablicy. Używana przez {{jsxref("Array.prototype.concat()")}}.
- {{jsxref("Symbol.unscopables")}}
  - : Wartość obiektu którego własne i dziediczone nazwy własności są wykluczone ze środowiska [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) powiązanego obiektu.
- {{jsxref("Symbol.species")}}
  - : Funkcja konstruktora używana do tworzenia obiektów wywodzących się z danego.
- {{jsxref("Symbol.toPrimitive")}}
  - : Metoda konwertująca obiekt na typ prosty.
- {{jsxref("Symbol.toStringTag")}}
  - : Ciąg znaków używany dla domyślnego opisu obiektu. Używany przez {{jsxref("Object.prototype.toString()")}}.

## Metody

- {{jsxref("Symbol.for()", "Symbol.for(key)")}}
  - : Szuka istniejącego symbolu o podanym kluczu i zwraca go, jeśli został znaleziony. W przeciwnym razie w globalnym rejestrze tworzony jest nowy symbol o podanym kluczu i również zwracany.
- {{jsxref("Symbol.keyFor", "Symbol.keyFor(sym)")}}
  - : Zwraca klucz w globalnym rejestrze zapisany dla danego symbolu.

## `Symbol` prototype

Wszystkie symbole dziecidzą po {{jsxref("Symbol.prototype")}}.

### Własności

{{page('en-US/Web/JavaScript/Reference/Global_Objects/Symbol/prototype','Properties')}}

### Metody

{{page('en-US/Web/JavaScript/Reference/Global_Objects/Symbol/prototype','Methods')}}

## Przykłady

### Używanie operatora `typeof` z symbolami

Operator {{jsxref("Operators/typeof", "typeof")}} może pomóc w identyfikacji symboli.

```js
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'
```

### Konwersje typu symbol

- Podczas próby konwersji symbolu na liczbę zostanie rzucony wyjątek {{jsxref("TypeError")}}.
  (np. `+sym` lub `sym | 0`).
- Przy porównaniu z pominięciem typu `Object(sym) == sym` zwraca `true.`
- `Symbol("foo") + "bar" `wyrzuci {{jsxref("TypeError")}} (nie można skonwertować symbolu na ciąg znaków). Służy to powstrzymaniu programisty na przykład przed stworzeniem nowej nazwy własności z użyciem symbolu.
- ["Bezpieczniejsza" konwersja `String(sym)`](/pl/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion) działa jak wywołanie {{jsxref("Symbol.prototype.toString()")}} ale należy mieć na uwadze, że `new String(sym)` rzuci wyjątkiem.

### Symbole i iteracja `for...in`

Symbole nie są iterowalne w pętlach [`for...in`](/pl/docs/Web/JavaScript/Reference/Statements/for...in). Dodatkowo, {{jsxref("Object.getOwnPropertyNames()")}} nie zwróci własności obiektu zapisanych pod kluczem którym jest symbol, do tego celu można użyć {{jsxref("Object.getOwnPropertySymbols()")}}.

```js
var obj = {};

obj[Symbol('a')] = 'a';
obj[Symbol.for('b')] = 'b';
obj['c'] = 'c';
obj.d = 'd';

for (var i in obj) {
   console.log(i); // loguje "c" i "d"
}
```

### Symbole i `JSON.stringify()`

Własności obiektu znajdujące się pod kluczem w postaci symbolu są ignorowane przez `JSON.stringify()`:

```js
JSON.stringify({[Symbol('foo')]: 'foo'});
// '{}'
```

Żeby dowiedzieć się więcej zobacz {{jsxref("JSON.stringify()")}}.

### Symbole opakowane w obiekty jako klucze własności

Gdy symbol opakowany w obiekt jest użyty jako klucz własności, obiekt opakowujący zostanie skonwertowany do symbolu który opakowuje:

```js
var sym = Symbol('foo');
var obj = {[sym]: 1};
obj[sym];            // 1
obj[Object(sym)];    // nadal 1
```

## Specyfikacje

| Specyfikacja                                                                 | Status                       | Komentarz         |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------- |
| {{SpecName('ES2015', '#sec-symbol-objects', 'Symbol')}}     | {{Spec2('ES2015')}}     | Wstępna definicja |
| {{SpecName('ESDraft', '#sec-symbol-objects', 'Symbol')}} | {{Spec2('ESDraft')}} |                   |

## Kompatybilność przeglądarek

{{Compat("javascript.builtins.Symbol")}}

## Zobacz również

- [Glosariusz: typ Symbol](/pl/docs/Glossary/Symbol)
- {{jsxref("Operators/typeof", "typeof")}}
- [Typy i struktury danych](/pl/docs/Web/JavaScript/Data_structures)
- ["ES6 In Depth: Symbols" na hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)
