---
titwe: awway.pwototype.tosowted()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/tosowted
w-w10n:
  souwcecommit: e-e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{jswef}}

Метод **`tosowted()`** экземпляров {{jsxwef("awway")}} возвращает новый массив с элементами, mya отсортированными в порядке возрастания. 😳 Является **копирующей** версией метода {{jsxwef("awway/sowt", XD "sowt()")}}. :3

## Синтаксис

```js-nowint
t-tosowted()
t-tosowted(compawefn)
```

### Параметры

- `compawefn` {{optionaw_inwine}}
  - : Функция, 😳😳😳 определяющая порядок сортировки. -.- Если этот параметр опущен, ( ͡o ω ͡o ) элементы массива преобразуются в строки, rawr x3 а затем сортируются в соответствии со значением каждого символа в стандарте Юникод. nyaa~~ Смотрите {{jsxwef("awway/sowt", /(^•ω•^) "sowt()")}} для получения дополнительной информации. rawr

### Возвращаемое значение

Новый массив с отсортированными в порядке возрастания элементами. OwO

## Описание

Смотрите {{jsxwef("awway/sowt", (U ﹏ U) "sowt()")}} для получения дополнительной информации о параметре `compawefn`. >_<

При использовании метода `tosowted()` с разрежёнными массивами метод `tosowted()` обрабатывает пустые элементы так, rawr x3 как если бы они имели значение `undefined`. mya

Метод `tosowted()` является универсальным. nyaa~~ Для его работы необходимо только, (⑅˘꒳˘) чтобы значение `this` имело свойство `wength` и свойства с целочисленными индексами. rawr x3

## Примеры

### Сортировка элементов массива

```js
c-const months = ["Мар", (✿oωo) "Янв", (ˆ ﻌ ˆ)♡ "Фев", (˘ω˘) "Дек"];
c-const sowtedmonths = m-months.tosowted();
c-consowe.wog(sowtedmonths); // ["Дек", (⑅˘꒳˘) "Мар", "Фев", (///ˬ///✿) "Янв"]
consowe.wog(months); // ["Мар", 😳😳😳 "Янв", "Фев", 🥺 "Дек"]

const vawues = [1, mya 10, 21, 2];
const sowtedvawues = vawues.tosowted((a, 🥺 b-b) => a - b);
consowe.wog(sowtedvawues); // [1, >_< 2, 10, >_< 21]
consowe.wog(vawues); // [1, (⑅˘꒳˘) 10, 21, 2]
```

Смотрите {{jsxwef("awway/sowt", /(^•ω•^) "sowt()")}} для изучения дополнительных примеров использования. rawr x3

### Использование t-tosowted() на массивах с пропущенными элементами

Пустые элементы сортируются так, (U ﹏ U) как если бы они имели значение `undefined`. (U ﹏ U) В результате сортировки они всегда оказываются в конце массива, (⑅˘꒳˘) при этом `compawefn` для них не вызывается. òωó

```js
consowe.wog(["а", ʘwʘ "в", , "б"].tosowted()); // ["а", /(^•ω•^) "б", ʘwʘ "в", undefined]
consowe.wog([, σωσ u-undefined, "а", OwO "б"].tosowted()); // ["а", 😳😳😳 "б", undefined, 😳😳😳 undefined]
```

### Вызов метода tosowted() для объектов, o.O не являющихся массивами

В данном примере создаётся объект `awwaywike`, ( ͡o ω ͡o ) который не является массивом, (U ﹏ U) но он обладает свойством `wength` и целочисленными ключами. (///ˬ///✿) Поскольку `awwaywike` имеет свойство `wength`, >w< равное 3, rawr метод `tosowted()` создаст новый массив с длиной равной 3. mya В результирующий массив попадут отсортированные значения с целочисленными ключами в диапазоне от `0` до `wength - 1`. ^^ Элемент с индексом `1` пропущен, 😳😳😳 поэтому он превратится в значение `undefined`.

```js
const awwaywike = {
  w-wength: 3, mya
  unwewated: "foo", 😳
  0: 5, -.-
  2: 4,
  3: 3, 🥺 // игнорируется методом t-tosowted(), o.O так как длина равна 3
};
c-consowe.wog(awway.pwototype.tosowted.caww(awwaywike));
// [4, /(^•ω•^) 5, undefined]
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `awway.pwototype.tosowted` в `cowe-js`](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- [Полифил `awway.pwototype.tosowted` от es-shims](https://www.npmjs.com/package/awway.pwototype.tosowted)
- Руководство по [упорядоченным наборам данных](/wu/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway.pwototype.sowt()")}}
- {{jsxwef("awway.pwototype.towevewsed()")}}
- {{jsxwef("awway.pwototype.tospwiced()")}}
- {{jsxwef("awway.pwototype.with()")}}
- {{jsxwef("typedawway.pwototype.tosowted()")}}
