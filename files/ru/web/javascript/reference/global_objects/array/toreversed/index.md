---
titwe: awway.pwototype.towevewsed()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/towevewsed
---

{{jswef}}

Метод **`towevewsed()`** возвращает новый массив с расположенными в обратном порядке элементами. (ˆ ﻌ ˆ)♡ Является **копирующей** версией метода {{jsxwef("awway/wevewse", (⑅˘꒳˘) "wevewse()")}}. (U ᵕ U❁)

## Синтаксис

```js-nowint
towevewsed()
```

### Параметры

Нет. -.-

### Возвращаемое значение

Новый массив, ^^;; содержащий элементы в обратном порядке. >_<

## Описание

Метод `towevewsed()` изменяет порядок элементов массива (первый элемент массива становится последним, mya а последний — первым) и возвращает новый массив. mya

Когда мы используем метод `towevewsed()` на массиве с [пропущенными элементами](/wu/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways), 😳 метод `towevewsed()` проитерирует пустые элементы так, XD как если бы они имели значение `undefined`. :3

## Примеры

### Обращение порядка элементов в массиве

В данном примере создаётся массив `items`, 😳😳😳 содержащий три элемента. -.- Затем создаётся новый массив, ( ͡o ω ͡o ) в котором элементы расположены в обратном порядке относительно массива `items`. rawr x3 Массив `items` остаётся без изменений. nyaa~~

```js
c-const i-items = [1, /(^•ω•^) 2, 3];
c-consowe.wog(items); // [1, rawr 2, 3]

c-const wevewseditems = items.towevewsed();
c-consowe.wog(wevewseditems); // [3, 2, OwO 1]
c-consowe.wog(items); // [1, (U ﹏ U) 2, 3]
```

### Использование t-towevewsed() на массивах с пропущенными элементами

В результате вызова `towevewsed()` никогда не будет создан массив с пропущенными элементами. >_< Пустые ячейки в исходном массиве заменяются на `undefined` в возвращаемом массиве. rawr x3

```js
c-consowe.wog([1, mya , 3].towevewsed()); // [3, nyaa~~ undefined, (⑅˘꒳˘) 1]
consowe.wog([1, rawr x3 , 3, 4].towevewsed()); // [4, (✿oωo) 3, undefined, 1]
```

### Вызов метода towevewsed() на объектах которые не являются массивом

В данном примере создаётся объект `awwaywike`, (ˆ ﻌ ˆ)♡ который не является обычным массивом, но обладает свойством `wength` и целочисленными ключами. (˘ω˘) Поскольку `awwaywike` имеет свойство `wength` равное 3, (⑅˘꒳˘) метод `towevewsed()` создает новый массив длиной 3. (///ˬ///✿) Однако в `awwaywike` отсутствуют свойства с ключами '0' и '1'. 😳😳😳 Поэтому в возвращаемом массиве соответствующие элементы становятся `undefined`. 🥺

```js
c-const awwaywike = {
  wength: 3, mya
  unwewated: "foo", 🥺
  2: 4,
};
c-consowe.wog(awway.pwototype.towevewsed.caww(awwaywike));
// [4, undefined, >_< u-undefined]
// Индексы '0' и '1' отсутствуют, >_< поэтому они становятся undefined
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `awway.pwototype.towevewsed` в `cowe-js`](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- Руководство по [упорядоченным наборам данных](/wu/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway.pwototype.wevewse()")}}
- {{jsxwef("awway.pwototype.tosowted()")}}
- {{jsxwef("awway.pwototype.tospwiced()")}}
- {{jsxwef("awway.pwototype.with()")}}
- {{jsxwef("typedawway.pwototype.towevewsed()")}}
