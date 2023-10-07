---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
---

{{JSRef}}

**`BigInt`** это встроенный объект, который предоставляет способ представлять целые числа больше 253 - 1, наибольшего числа, которое JavaScript может надёжно представить с {{JSxRef("Number")}} примитивом. Это максимальное значение можно получить, обратившись к {{JSxRef("Number.MAX_SAFE_INTEGER")}}.

## Описание

`BigInt` создаётся путём добавления `n` в конец целочисленного литерала — `10n` — или вызовом функции `BigInt()`.

```js
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// ↪ 9007199254740991n
```

В некотором смысле он похож на {{JSxRef ("Number")}}, но отличается в некоторых ключевых моментах — его нельзя использовать с методами во встроенном объекте {{JSxRef ("Math")}} и нельзя смешивать в операциях с любыми экземплярами Number.

> **Предупреждение:** {{JSxRef("Number")}} и `BigInt` нельзя смешивать в операциях — они должны быть приведены к тому же типу.
>
> Будьте осторожны приводя значения туда и обратно, так как точность BigInt может быть потеряна при приведении к числу (`Number)`.

### Тип

При проверке с использованием оператора `typeof`, `BigInt` выдаёт тип `"bigint"`:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

При оборачивании в объект, BigInt будет представлен как обычный объект:

```js
typeof Object(1n) === "object"; // true
```

### Операторы

Следующие операторы могут использоваться с `BigInt` (или объектом-обёрткой `BigInt`): `+`, `*`, `-`, `**`, `%`.

[Побитовые операции](/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) также поддерживаются, кроме `>>>` (сдвиг вправо с заполнением нулями).

Не поддерживаемый унарный оператор (`+`) [больше не ломает asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
// ↪ 9007199254740991n

const maxPlusOne = previousMaxSafe + 1n;
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n;
// ↪ 9007199254740993n, это работает!

const multi = previousMaxSafe * 2n;
// ↪ 18014398509481982n

const subtr = multi – 10n;
// ↪ 18014398509481972n

const mod = multi % 10n;
// ↪ 2n

const bigN = 2n ** 54n;
// ↪ 18014398509481984n

bigN * -1n
// ↪ –18014398509481984n
```

Оператор `/` также работает, как и ожидалось, с целыми числами. Однако, поскольку это BigInt, эта операция будет округляться в меньшую сторону, то есть она не будет возвращать какие-либо дробные цифры.

> **Предупреждение:** Результат операции с дробным результатом будет округлён в **меньшую** сторону при использовании `BigInt`.

```js
const expected = 4n / 2n;
// ↪ 2n

const rounded = 5n / 2n;
// ↪ 2n, not 2.5n
```

### Сравнения

`BigInt` равен {{JSxRef ("Number")}} только при нестрогом сравнении.

```js
0n === 0;
// ↪ false

0n == 0;
// ↪ true
```

{{JSxRef("Global_Objects/Number", "Обычные числа")}} и `BigInt` можно сравнивать как обычно.

```js
1n < 2;
// ↪ true

2n > 1;
// ↪ true

2 > 2;
// ↪ false

2n > 2;
// ↪ false

2n >= 2;
// ↪ true
```

Они могут быть смешаны в массивах и отсортированы:

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort();
// ↪ [-12n, 0, 0n, 10, 4n, 4, 6]
```

Обратите внимание, что сравнения с `обьектом`-обёрткой `BigInt` действуют как с другими объектами, указывая на равенство только когда сравнивается идентичный экземпляр объекта:

```js
0n === Object(0n); // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

### Условные выражения

`BigInt` ведёт себя как {{JSxRef("Global_Objects/Number", "обычное число")}} в следующих случаях:

- Преобразуется в {{JSxRef("Global_Objects/Boolean", "Boolean")}} через функцию {{JSxRef("Global_Objects/Boolean", "Boolean")}}
- Используется с логическими операторами {{JSxRef("Operators/Logical_Operators", "Logical Operators")}} `||`, `&&` и `!`
- В условном тесте, таком как {{JSxRef("Statements/if...else", "if statement")}}.

```js
if (0n) {
  console.log("Привет из if!");
} else {
  console.log("Привет из else!");
}

// ↪ "Привет из else!"

0n || 12n;
// ↪ 12n

0n && 12n;
// ↪ 0n

Boolean(0n);
// ↪ false

Boolean(12n);
// ↪ true

!12n;
// ↪ false

!0n;
// ↪ true
```

## Конструктор

- [`BigInt()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
  - : Создаёт объект {{jsxref("BigInt")}}.

## Статические методы

- {{JSxRef("BigInt.asIntN()")}}
  - : Оборачивает BigInt в пределах от -2width-1 до 2width-1-1
- {{JSxRef("BigInt.asUintN()")}}
  - : Оборачивает a BigInt в пределах от 0 до 2width-1

## Методы экземпляра

- {{JSxRef("BigInt.prototype.toLocaleString()")}}
  - : Возвращает строку с языкозависимым представлением числа. Переопределяет метод {{JSxRef("Object.prototype.toLocaleString()")}}.
- {{JSxRef("BigInt.prototype.toString()")}}
  - : Возвращает строку, представляющую указанный объект по указанному основанию системы счисления. Переопределяет метод {{JSxRef("Object.prototype.toString()")}}.
- {{JSxRef("BigInt.prototype.valueOf()")}}
  - : Возвращает примитивное значение указанного объекта. Переопределяет метод {{JSxRef("Object.prototype.valueOf()")}}.

## Рекомендации по использованию

### Приведение

Поскольку приведение между {{JSxRef("Number")}} и `BigInt` может привести к потере точности, рекомендуется использовать `BigInt` только тогда, когда разумно ожидаются значения, превышающие 253 и не приводить между двумя типами.

### Криптография

Операции поддерживаемые `BigInt` не постоянны во времени. `BigInt` следовательно [не пригоден для использования в криптографии](https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html).

### Использование вместе с JSON

Использование {{jsxref("JSON.stringify()")}} с любым значением типа `BigInt` приведёт к `TypeError`, поскольку значения `BigInt` не преобразуется в JSON по умолчанию, однако вы можете реализовать свой собственный метод `toJSON`, если вам необходимо:

```js
BigInt.prototype.toJSON = function () {
  return this.toString();
};
```

Теперь вместо ошибки, `JSON.stringify` будет создавать строку:

```js
JSON.stringify(BigInt(1));
// '"1"'
```

## Примеры

### Расчёт простых чисел

```js
// Возвращает true, если BigInt — простое число
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// Берет BigInt в качестве аргумента и возвращает BigInt
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--;
      prime = maybePrime;
    }
    maybePrime++;
  }

  return prime;
}

nthPrime(20n);
// ↪ 73n
```

## Спецификации

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- {{JSxRef("Number")}}
- {{JSxRef("Number.MAX_SAFE_INTEGER")}}
