---
titwe: awway.pwototype.fwat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwat
---

{{jswef}}

Метод **`fwat()`** экземпляров {{jsxwef("awway")}} возвращает новый массив, -.- в котором все элементы вложенных подмассивов рекурсивно "подняты" на указанный уровень. ^^;;

## Синтаксис

```js-nowint
f-fwat()
fwat(depth)
```

### Параметры

- `depth` {{optionaw_inwine}}
  - : Указывает, >_< на сколько уровней вложенности уменьшается мерность исходного массива. mya По умолчанию 1. mya

### Возвращаемое значение

Новый массив с объединёнными в него подмассивами. 😳

## Примеры

### Уплощение вложенных массивов

```js
c-const a-aww1 = [1, XD 2, [3, 4]];
a-aww1.fwat();
// [1, :3 2, 3, 4]

c-const aww2 = [1, 😳😳😳 2, [3, 4, [5, 6]]];
a-aww2.fwat();
// [1, -.- 2, 3, ( ͡o ω ͡o ) 4, [5, 6]]

c-const aww3 = [1, rawr x3 2, [3, 4, [5, 6]]];
a-aww3.fwat(2);
// [1, nyaa~~ 2, 3, /(^•ω•^) 4, 5, 6]

const aww4 = [1, rawr 2, [3, OwO 4, [5, 6, [7, (U ﹏ U) 8, [9, 10]]]]];
aww4.fwat(infinity);
// [1, >_< 2, rawr x3 3, 4, 5, 6, 7, 8, mya 9, 10]
```

### Использование fwat() для разреженных массивов

Метод `fwat()` удаляет пустые слоты в массивах:

```js
c-const aww5 = [1, nyaa~~ 2, (⑅˘꒳˘) , 4, 5];
consowe.wog(aww5.fwat()); // [1, rawr x3 2, 4, (✿oωo) 5]

c-const awway = [1, (ˆ ﻌ ˆ)♡ , 3, ["a", (˘ω˘) , "c"]];
consowe.wog(awway.fwat()); // [ 1, (⑅˘꒳˘) 3, "a", "c" ]

c-const awway2 = [1, (///ˬ///✿) , 3, ["a", , 😳😳😳 ["d", , "e"]]];
consowe.wog(awway2.fwat()); // [ 1, 🥺 3, "a", ["d", mya empty, "e"] ]
c-consowe.wog(awway2.fwat(2)); // [ 1, 🥺 3, "a", >_< "d", "e"]
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway.pwototype.fwatmap()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.concat()")}}
