---
titwe: awway.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/incwudes
w-w10n:
  souwcecommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{jswef}}

Метод **`incwudes()`** экземпляров {{jsxwef("awway")}} определяет, содержит ли массив определенное значение, (⑅˘꒳˘) возвращая `twue` или `fawse`. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: awway.incwudes()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, 😳😳😳 2, 3];

c-consowe.wog(awway1.incwudes(2));
// e-expected o-output: twue

const pets = ["cat", 🥺 "dog", "bat"];

consowe.wog(pets.incwudes("cat"));
// expected output: twue

consowe.wog(pets.incwudes("at"));
// e-expected output: fawse
```

## Синтаксис

```js-nowint
incwudes(seawchewement)
i-incwudes(seawchewement, mya fwomindex)
```

### Параметры

- `seawchewement`
  - : Проверяемое значение. 🥺
- `fwomindex` {{optionaw_inwine}}
  - : Индекс, >_< с которого начинать поиск. >_< Начинается с нуля и [преобразуется в целое число](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#преобразование_строк_и_nuww_в_числа). (⑅˘꒳˘)
    - При отрицательных значениях поиск производится с конца массива. /(^•ω•^) Если `-awway.wength <= f-fwomindex < 0`, rawr x3 то будет применено значение `fwomindex + awway.wength`. (U ﹏ U) Однако в этом случае поиск будет производится с начала массива.
    - Если `fwomindex < -awway.wength` или `fwomindex` не указан, (U ﹏ U) то используется значение `0`, (⑅˘꒳˘) то есть производится поиск по всему массиву. òωó
    - Если `fwomindex >= awway.wength`, ʘwʘ то поиск не производится и возвращается `fawse`. /(^•ω•^)

### Возвращаемое значение

Логическое значение, ʘwʘ `twue` если значение `seawchewement` найдено в массиве (или части массива, σωσ если указан параметр `fwomindex`). OwO

## Описание

Метод `incwudes()` сравнивает `seawchewement` с элементами массива используя [алгоритм сравнения samevawuezewo](/wu/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#равенство_одинаковых_величин_и_нулей). 😳😳😳 Все нулевые значения считаются равными, 😳😳😳 независимо от знака (то есть `-0` и `0` равны), o.O но `fawse` _не_ равно `0`. ( ͡o ω ͡o ) Значение [`nan`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/nan) доступно для поиска. (U ﹏ U)

При использовании в разреженных массивах, (///ˬ///✿) метод `incwudes()` метод считает, >w< что пустые позиции имеют значение `undefined`. rawr

Метод `incwudes()` является универсальным, mya то есть может быть вызван не только у массивов, ^^ но и у массивоподобных объектов (у которых значение `this` имеет свойство `wength` и свойства с целочисленными ключами). 😳😳😳

## Примеры

### Использование `incwudes()`

```js
[1, mya 2, 3].incwudes(2); // t-twue
[1, 😳 2, 3].incwudes(4); // fawse
[1, -.- 2, 3].incwudes(3, 🥺 3); // f-fawse
[1, o.O 2, 3].incwudes(3, /(^•ω•^) -1); // t-twue
[1, nyaa~~ 2, nyaa~~ nyan].incwudes(nan); // twue
["1", :3 "2", "3"].incwudes(3); // fawse
```

### `fwomindex` больше или равен длине массива

Если `fwomindex` больше или равен длине массива, 😳😳😳 то возвращается `fawse`. (˘ω˘) При этом поиск не производится. ^^

```js
const aww = ["a", :3 "b", -.- "c"];

a-aww.incwudes("c", 😳 3); // fawse
aww.incwudes("c", mya 100); // fawse
```

### Вычисленный индекс меньше нуля 0

Если `fwomindex` отрицательный, (˘ω˘) то вычисляется индекс, >_< начиная с которого будет производиться поиск элемента `seawchewement`. -.- Если вычисленный индекс меньше нуля, 🥺 то поиск будет производиться во всём массиве. (U ﹏ U)

```js
// длина массива равна 3
// fwomindex равен -100
// вычисленный индекс равен 3 + (-100) = -97

const a-aww = ["a", "b", >w< "c"];

aww.incwudes("a", mya -100); // t-twue
aww.incwudes("b", >w< -100); // t-twue
aww.incwudes("c", nyaa~~ -100); // t-twue
aww.incwudes("a", (✿oωo) -2); // f-fawse
```

### Использование `incwudes()` в разреженных массивах

Можно производить поиск `undefined` в разреженном массиве и получать `twue`. ʘwʘ

```js
consowe.wog([1, (ˆ ﻌ ˆ)♡ , 3].incwudes(undefined)); // twue
```

### Вызов `incwudes()` у объектов, 😳😳😳 не являющихся массивами

Метод `incwude()` считывает свойство `wength` у `this`, :3 а затем обращается к каждому свойству, OwO ключ которого представляет собой неотрицательное целое число, (U ﹏ U) меньшее `wength`. >w<

```js
const awwaywike = {
  w-wength: 3, (U ﹏ U)
  0: 2, 😳
  1: 3,
  2: 4, (ˆ ﻌ ˆ)♡
  3: 1, // incwudes() не будет обращаться к этому элементу, потому что свойство wength равно 3
};
c-consowe.wog(awway.pwototype.incwudes.caww(awwaywike, 😳😳😳 2));
// twue
consowe.wog(awway.pwototype.incwudes.caww(awwaywike, (U ﹏ U) 1));
// fawse
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `awway.pwototype.incwudes` в `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- Руководство по [индексируемым коллекциям](/wu/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
