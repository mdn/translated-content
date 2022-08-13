---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
tags:
  - BigInt
  - JavaScript
  - Referencja
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt
original_slug: Web/JavaScript/Referencje/Obiekty/BigInt
---
{{JSRef}}

**`BigInt`** jest wbudowanym obiektem umożliwiającym reprezentowanie całych liczb większch niż 253 - 1, ile wynosi największa liczba, którą JavaScript może faktycznie reprezentować przez prymityw {{JSxRef("Number")}}, co jest też reprezentowane przez stałą {{JSxRef("Number.MAX_SAFE_INTEGER")}}. **`BigInt`** może być używany do dowolnie dużych liczb całkowitych.

## Opis

`BigInt` jest tworzony przez dodanie `n` na końcu literału liczby — `10n` — lub przez wywołanie funkcji `BigInt()`.

```js
const najwiekszyInt = 9007199254740991n

const tezDuzaLiczba = BigInt(9007199254740991)
// ↪ 9007199254740991n

const duzyString = BigInt("9007199254740991")
// ↪ 9007199254740991n

const duzyHex = BigInt("0x1fffffffffffff")
// ↪ 9007199254740991n

const duzyBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
// ↪ 9007199254740991n
```

`BigInt` jest w pewnym sensie podobny do {{JSxRef("Number")}} ale też różni się od niego w kilku kluczowych sprawach — nie może być używany z metodami wbudowanego obiektu {{JSxRef("Math")}}, a także nie może być mieszany z instancjami `Number` w żadnych operacjach; konieczne jest wymuszenie tego samego typu operandów. Należy uważać z wymuszaniem typów w jedną i drugą stronę, w szczególności precyzja `BigInt` może być utracona przy wymuszonej konwersji do typu `Number`.

### Informacje o typie

Przy sprawdzeniu za pomocą `typeof`, `BigInt` zwróci "bigint":

```js
typeof 1n === 'bigint'           // true
typeof BigInt('1') === 'bigint'  // true
```

Obudowany w `Object`, `BigInt` będzie rozważany jako zwykły "obiekt":

```js
typeof Object(1n) === 'object'  // true
```

### Operatory

Z `BigInt`ami (lub `BigInt`ami obudowanymi w obiekty) mogą być używane następujące operatory: : `+`, `*`, `-`, `**`, `%`.

[Operatory bitowe](/pl/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) także są wspierane, z wyjątkiem `>>>` (przesunięcie w prawo z dopełnieniem zerami), gdyż wszystkie `BigInt`y mają znak.

Niewspierany jest także operator jednoargumentowy (`+`), [aby nie złamać zasad asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER)
// ↪ 9007199254740991n

const maxPlusOne = previousMaxSafe + 1n
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n
// ↪ 9007199254740993n, this works now!

const multi = previousMaxSafe * 2n
// ↪ 18014398509481982n

const subtr = multi – 10n
// ↪ 18014398509481972n

const mod = multi % 10n
// ↪ 2n

const bigN = 2n ** 54n
// ↪ 18014398509481984n

bigN * -1n
// ↪ –18014398509481984n
```

Operator `/` także działa zgodnie z założeniami z całymi liczbami.

Jako że są to `BigInt`y, a nie `BigDecimal`, operacja dzielenia będzie zaokroąglała wynik do `0` (zatem można prościej powiedzieć, że nie zwraca ułamkowej części wyniku).

> **Warning:** Ułamkowy wynik operacji będzie przycięty, kiedy używany jest  `BigInt`.

```js
const expected = 4n / 2n
// ↪ 2n

const rounded = 5n / 2n
// ↪ 2n, not 2.5n
```

### Porównania

`BigInt` nie jest ściśle równy {{JSxRef("Number")}}, ale jest równy w luźnym sensie, zatem:

```js
0n === 0
// ↪ false

0n == 0
// ↪ true
```

{{JSxRef("Global_Objects/Number", "Number")}} i `BigInt` mogą być porównywane w zwyczajny sposób:

```js
1n < 2
// ↪ true

2n > 1
// ↪ true

2 > 2
// ↪ false

2n > 2
// ↪ false

2n >= 2
// ↪ true
```

Mogą być też mieszane w tablicach i sortowane:

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n]
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort()
// ↪ [-12n, 0, 0n, 4n, 4, 6, 10]
```

Zauważ, że porównania z `BigInt`ami opakowanymi w obiekty działają jak z innymi obiektami, wskazując równość tylko wtedy, kiedy ta sama instancja obiektu znajduje się po obu stronach porównania:

```js
0n === Object(0n)          // false
Object(0n) === Object(0n)  // false

const o = Object(0n)
o === o                    // true
```

### Instrukcje warunkowe

`BigInt` zachowuje się jak {{JSxRef("Global_Objects/Number", "Number")}} w przypadkach, gdy:

- jest konwertowany na {{JSxRef("Global_Objects/Boolean", "Boolean")}} za pomocą funkcji {{JSxRef("Global_Objects/Boolean", "Boolean")}};
- jest używany z [operatorami logicznymi](/pl/docs/Web/JavaScript/Referencje/Operatory/Logical_Operators) `||`, `&&` lub `!`;
- w instrukcjach warunkowych {{JSxRef("Statements/if...else", "if")}}.

```js
if (0n) {
  console.log('Hello from the if!')
} else {
  console.log('Hello from the else!')
}

// ↪ "Hello from the else!"

0n || 12n
// ↪ 12n

0n && 12n
// ↪ 0n

Boolean(0n)
// ↪ false

Boolean(12n)
// ↪ true

!12n
// ↪ false

!0n
// ↪ true
```

## Konstruktor

- [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
  - : Tworzy obiekty {{jsxref("BigInt")}}.

## Metody statyczne

- {{JSxRef("BigInt.asIntN()")}}
  - : Opakowuje wartość `BigInt` w liczbę całkowitą ze znakiem o wartości między `-2width-1` a `2width-1 - 1`.
- {{JSxRef("BigInt.asUintN()")}}
  - : Opakowuje wartość `BigInt` w liczbę całkowitą bez znaku o wartości między `0` a `2width - 1`.

## Metody instancyjne

- {{JSxRef("BigInt.prototype.toLocaleString()")}}
  - : Zwraca string z zależną od języka reprezentacją danej liczby. Nadpisuje metodę {{JSxRef("Object.prototype.toLocaleString()")}}.
- {{JSxRef("BigInt.prototype.toString()")}}
  - : Zwraca string reprezentujący dany obiekt w określonym źródle. Nadpisuje metodę {{JSxRef("Object.prototype.toString()")}}.
- {{JSxRef("BigInt.prototype.valueOf()")}}
  - : Zwraca prymitywną wartość danego obiektu. Nadpisuje metodę {{JSxRef("Object.prototype.valueOf()")}}.

## Zalecenia w użyciu

### Wymuszanie typów

Ponieważ wymuszanie tupów między {{JSxRef("Number")}} a `BigInt` może prowadzić do utraty precyzji, zaleca się używanie jedynie typu `BigInt`, gdy można się spodziewać, że pojawią się wartości przekraczające 253 i nie należy wówczas przeprowadzać konwersji między tymi typami.

### Kryptografia

Operacje wspierane dla `BigInt`ów nie są stałe czasowo, dlatego też typ `BigInt` [nie nadaje się do użycia w kryptografii](https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html).

### Użycie w JSON

Użycie {{jsxref("JSON.stringify()")}} z dowolną wartością typu `BigInt` spowoduje błąd `TypeError`, ponieważ wartości `BigInt` nie są domyślnie serialozowane w JSONie. Jednakże, jeśli taka operacja jest potrzebna, możesz zaimplemntować własną metodę `toJSON`:

```js
BigInt.prototype.toJSON = function() { return this.toString()  }
```

Zamiast wyrzucania wyjątku, `JSON.stringify` będzie teraz zwracać string:

```js
JSON.stringify(BigInt(1))
// '"1"'
```

## Przykłady

### Obliczanie liczb pierwszych

```js
// Zwraca true jeśl dany BigInt jest liczbą pierwszą
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true
}

// Przyjmuje BigInt n jako argument, zwraca n-tą liczbę pierwszą jako BigInt
function nthPrime(nth) {
  let maybePrime = 2n
  let prime = 0n

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--
      prime = maybePrime
    }
    maybePrime++
  }

  return prime
}

nthPrime(20n)
// ↪ 73n
```

## Specyfikacje

| Specyfikacja                                                                                             |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName("ESDraft", "#sec-bigint-objects", "<code>BigInt</code> objects")}} |

## Wsparcie przeglądarek

{{Compat("javascript.builtins.BigInt")}}

## Zobacz też

- {{JSxRef("Number")}}
- {{JSxRef("Number.MAX_SAFE_INTEGER")}}
