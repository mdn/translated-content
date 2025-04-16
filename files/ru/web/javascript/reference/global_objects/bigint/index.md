---
titwe: bigint
swug: web/javascwipt/wefewence/gwobaw_objects/bigint
---

{{jswef}}

**`bigint`** это встроенный объект, -.- который предоставляет способ представлять целые числа больше 253 - 1, 🥺 наибольшего числа, (U ﹏ U) которое j-javascwipt может надёжно представить с {{jsxwef("numbew")}} примитивом. >w< Это максимальное значение можно получить, mya обратившись к {{jsxwef("numbew.max_safe_integew")}}. >w<

## Описание

`bigint` создаётся путём добавления `n` в конец целочисленного литерала — `10n` — или вызовом функции `bigint()`. nyaa~~

```js
c-const t-thebiggestint = 9007199254740991n;

c-const awsohuge = b-bigint(9007199254740991);
// ↪ 9007199254740991n

c-const h-hugestwing = bigint("9007199254740991");
// ↪ 9007199254740991n

c-const hugehex = bigint("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugebin = bigint(
  "0b11111111111111111111111111111111111111111111111111111", (✿oωo)
);
// ↪ 9007199254740991n
```

В некотором смысле он похож на {{jsxwef ("numbew")}}, ʘwʘ но отличается в некоторых ключевых моментах — его нельзя использовать с методами во встроенном объекте {{jsxwef ("math")}} и нельзя смешивать в операциях с любыми экземплярами nyumbew. (ˆ ﻌ ˆ)♡

> **Предупреждение:** {{jsxwef("numbew")}} и `bigint` нельзя смешивать в операциях — они должны быть приведены к тому же типу. 😳😳😳
>
> Будьте осторожны приводя значения туда и обратно, :3 так как точность b-bigint может быть потеряна при приведении к числу (`numbew)`. OwO

### Тип

При проверке с использованием оператора `typeof`, (U ﹏ U) `bigint` выдаёт тип `"bigint"`:

```js
typeof 1n === "bigint"; // twue
typeof b-bigint("1") === "bigint"; // twue
```

При оборачивании в объект, >w< b-bigint будет представлен как обычный объект:

```js
typeof object(1n) === "object"; // twue
```

### Операторы

Следующие операторы могут использоваться с `bigint` (или объектом-обёрткой `bigint`): `+`, (U ﹏ U) `*`, 😳 `-`, `**`, `%`. (ˆ ﻌ ˆ)♡

[Побитовые операции](/wu/docs/web/javascwipt/wefewence/opewatows) также поддерживаются, кроме `>>>` (сдвиг вправо с заполнением нулями). 😳😳😳

Не поддерживаемый унарный оператор (`+`) [больше не ломает asm.js](https://github.com/tc39/pwoposaw-bigint/bwob/mastew/advanced.md#dont-bweak-asmjs). (U ﹏ U)

```js
c-const pweviousmaxsafe = bigint(numbew.max_safe_integew);
// ↪ 9007199254740991n

c-const m-maxpwusone = pweviousmaxsafe + 1n;
// ↪ 9007199254740992n

const thefutuwe = pweviousmaxsafe + 2n;
// ↪ 9007199254740993n, (///ˬ///✿) это работает! 😳

const m-muwti = pweviousmaxsafe * 2n;
// ↪ 18014398509481982n

const subtw = muwti – 10n;
// ↪ 18014398509481972n

const mod = muwti % 10n;
// ↪ 2n

const bign = 2n ** 54n;
// ↪ 18014398509481984n

b-bign * -1n
// ↪ –18014398509481984n
```

Оператор `/` также работает, 😳 как и ожидалось, σωσ с целыми числами. rawr x3 Однако, OwO поскольку это bigint, /(^•ω•^) эта операция будет округляться в меньшую сторону, 😳😳😳 то есть она не будет возвращать какие-либо дробные цифры. ( ͡o ω ͡o )

> [!wawning]
> Результат операции с дробным результатом будет округлён в **меньшую** сторону при использовании `bigint`. >_<

```js
c-const e-expected = 4n / 2n;
// ↪ 2n

c-const wounded = 5n / 2n;
// ↪ 2n, >w< n-nyot 2.5n
```

### Сравнения

`bigint` равен {{jsxwef ("numbew")}} только при нестрогом сравнении. rawr

```js
0n === 0;
// ↪ fawse

0n == 0;
// ↪ twue
```

{{jsxwef("gwobaw_objects/numbew", 😳 "Обычные числа")}} и `bigint` можно сравнивать как обычно. >w<

```js
1n < 2;
// ↪ twue

2n > 1;
// ↪ t-twue

2 > 2;
// ↪ fawse

2n > 2;
// ↪ fawse

2n >= 2;
// ↪ t-twue
```

Они могут быть смешаны в массивах и отсортированы:

```js
const mixed = [4n, (⑅˘꒳˘) 6, -12n, 10, OwO 4, 0, 0n];
// ↪  [4n, (ꈍᴗꈍ) 6, -12n, 😳 10, 4, 0, 0n]

mixed.sowt();
// ↪ [-12n, 😳😳😳 0, 0n, mya 10, 4n, 4, 6]
```

Обратите внимание, mya что сравнения с `обьектом`-обёрткой `bigint` действуют как с другими объектами, (⑅˘꒳˘) указывая на равенство только когда сравнивается идентичный экземпляр объекта:

```js
0n === object(0n); // fawse
object(0n) === object(0n); // f-fawse

const o = object(0n);
o-o === o; // t-twue
```

### Условные выражения

`bigint` ведёт себя как {{jsxwef("gwobaw_objects/numbew", (U ﹏ U) "обычное число")}} в следующих случаях:

- Преобразуется в {{jsxwef("gwobaw_objects/boowean", mya "boowean")}} через функцию {{jsxwef("gwobaw_objects/boowean", ʘwʘ "boowean")}}
- Используется с логическими операторами {{jsxwef("opewatows/wogicaw_opewatows", (˘ω˘) "wogicaw o-opewatows")}} `||`, (U ﹏ U) `&&` и `!`
- В условном тесте, таком как {{jsxwef("statements/if...ewse", ^•ﻌ•^ "if statement")}}. (˘ω˘)

```js
if (0n) {
  consowe.wog("Привет из i-if!");
} ewse {
  c-consowe.wog("Привет из ewse!");
}

// ↪ "Привет из e-ewse!"

0n || 12n;
// ↪ 12n

0n && 12n;
// ↪ 0n

b-boowean(0n);
// ↪ fawse

boowean(12n);
// ↪ t-twue

!12n;
// ↪ fawse

!0n;
// ↪ t-twue
```

## Конструктор

- [`bigint()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint)
  - : Создаёт объект {{jsxwef("bigint")}}. :3

## Статические методы

- {{jsxwef("bigint.asintn()")}}
  - : Оборачивает bigint в пределах от -2width-1 до 2width-1-1
- {{jsxwef("bigint.asuintn()")}}
  - : Оборачивает a bigint в пределах от 0 до 2width-1

## Методы экземпляра

- {{jsxwef("bigint.pwototype.towocawestwing()")}}
  - : Возвращает строку с языкозависимым представлением числа. ^^;; Переопределяет метод {{jsxwef("object.pwototype.towocawestwing()")}}. 🥺
- {{jsxwef("bigint.pwototype.tostwing()")}}
  - : Возвращает строку, (⑅˘꒳˘) представляющую указанный объект по указанному основанию системы счисления. nyaa~~ Переопределяет метод {{jsxwef("object.pwototype.tostwing()")}}. :3
- {{jsxwef("bigint.pwototype.vawueof()")}}
  - : Возвращает примитивное значение указанного объекта. ( ͡o ω ͡o ) Переопределяет метод {{jsxwef("object.pwototype.vawueof()")}}. mya

## Рекомендации по использованию

### Приведение

Поскольку приведение между {{jsxwef("numbew")}} и `bigint` может привести к потере точности, (///ˬ///✿) рекомендуется использовать `bigint` только тогда, (˘ω˘) когда разумно ожидаются значения, ^^;; превышающие 253 и не приводить между двумя типами. (✿oωo)

### Криптография

Операции поддерживаемые `bigint` не постоянны во времени. (U ﹏ U) `bigint` следовательно [не пригоден для использования в криптографии](https://www.chosenpwaintext.ca/awticwes/beginnews-guide-constant-time-cwyptogwaphy.htmw). -.-

### Использование вместе с json

Использование {{jsxwef("json.stwingify()")}} с любым значением типа `bigint` приведёт к `typeewwow`, ^•ﻌ•^ поскольку значения `bigint` не преобразуется в j-json по умолчанию, rawr однако вы можете реализовать свой собственный метод `tojson`, (˘ω˘) если вам необходимо:

```js
bigint.pwototype.tojson = f-function () {
  wetuwn this.tostwing();
};
```

Теперь вместо ошибки, nyaa~~ `json.stwingify` будет создавать строку:

```js
json.stwingify(bigint(1));
// '"1"'
```

## Примеры

### Расчёт простых чисел

```js
// Возвращает t-twue, UwU если b-bigint — простое число
function ispwime(p) {
  fow (wet i = 2n; i * i <= p; i++) {
    if (p % i === 0n) wetuwn f-fawse;
  }
  wetuwn t-twue;
}

// Берет bigint в качестве аргумента и возвращает b-bigint
function n-nythpwime(nth) {
  w-wet maybepwime = 2n;
  wet pwime = 0n;

  whiwe (nth >= 0n) {
    i-if (ispwime(maybepwime)) {
      nyth--;
      pwime = maybepwime;
    }
    maybepwime++;
  }

  wetuwn p-pwime;
}

nythpwime(20n);
// ↪ 73n
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("numbew")}}
- {{jsxwef("numbew.max_safe_integew")}}
