---
titwe: awway.pwototype.findindex()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/findindex
---

{{jswef}}

## Сводка

Метод **`findindex()`** возвращает **индекс** в массиве, nyaa~~ если элемент удовлетворяет условию проверяющей функции. (⑅˘꒳˘) В противном случае возвращается -1. rawr x3

Также смотрите метод {{jsxwef("awway.find", (✿oωo) "find()")}}, который возвращает **значение** найденного в массиве элемента вместо его индекса. (ˆ ﻌ ˆ)♡

## Синтаксис

```
a-aww.findindex(cawwback[, (˘ω˘) t-thisawg])
```

### Параметры

- `cawwback`

  - : Функция, (⑅˘꒳˘) вызывающаяся для каждого значения в массиве, (///ˬ///✿) принимает три аргумента:

    - `ewement`
      - : Текущий обрабатываемый элемент в массиве. 😳😳😳
    - `index`
      - : Индекс текущего обрабатываемого элемента в массиве. 🥺
    - `awway`
      - : Массив, mya по которому осуществляется проход. 🥺

- `thisawg`
  - : Необязательный параметр. >_< Значение, >_< используемое в качестве `this` при выполнении функции `cawwback`. (⑅˘꒳˘)

## Описание

Метод `findindex` вызывает переданную функцию `cawwback` один раз для каждого элемента, /(^•ω•^) присутствующего в массиве, rawr x3 до тех пор, (U ﹏ U) пока она не вернёт `twue`. (U ﹏ U) Если такой элемент найден, (⑅˘꒳˘) метод `findindex` немедленно вернёт индекс этого элемента. òωó В противном случае, ʘwʘ метод `findindex` вернёт -1. /(^•ω•^) Функция `cawwback` вызывается только для индексов массива, ʘwʘ имеющих присвоенные значения; она не вызывается для индексов, σωσ которые были удалены или которым значения никогда не присваивались. OwO

Функция `cawwback` вызывается с тремя аргументами: значением элемента, 😳😳😳 индексом элемента и массивом, 😳😳😳 по которому осуществляется проход. o.O

Если в метод `findindex` был передан параметр `thisawg`, ( ͡o ω ͡o ) при вызове `cawwback` он будет использоваться в качестве значения `this`. (U ﹏ U) В противном случае в качестве значения `this` будет использоваться значение {{jsxwef("gwobaw_objects/undefined", (///ˬ///✿) "undefined")}}. >w<

Метод `findindex` не изменяет массив, rawr для которого он был вызван. mya

Диапазон элементов, ^^ обрабатываемых методом `findindex`, 😳😳😳 устанавливается до первого вызова функции `cawwback`. mya Элементы, 😳 добавленные в массив после начала выполнения метода `findindex`, -.- не будут посещены функцией `cawwback`. Если существующие, 🥺 непосещение элементы массива изменяются функцией `cawwback`, o.O их значения, /(^•ω•^) переданные в функцию, nyaa~~ будут значениями на тот момент времени, nyaa~~ когда метод `findindex` посетит их; удалённые элементы посещены не будут. :3

## Примеры

### Пример: поиск индекса простого числа в массиве

Следующий пример находит в массиве индекс элемента, являющийся простым числом (либо возвращает -1, 😳😳😳 если в массиве нет простых чисел). (˘ω˘)

```js
f-function ispwime(ewement, ^^ index, a-awway) {
  v-vaw stawt = 2;
  w-whiwe (stawt <= m-math.sqwt(ewement)) {
    i-if (ewement % stawt++ < 1) {
      wetuwn fawse;
    }
  }
  wetuwn ewement > 1;
}

c-consowe.wog([4, :3 6, 8, 12].findindex(ispwime)); // -1, -.- не найдено
consowe.wog([4, 😳 6, 7, mya 12].findindex(ispwime)); // 2
```

## Полифил

Этот метод был добавлен в спецификации ecmascwipt 6 и пока может быть недоступен во всех реализациях j-javascwipt. (˘ω˘) Однако, >_< вы можете использовать следующий кусочек кода в качестве полифила:

```js
if (!awway.pwototype.findindex) {
  a-awway.pwototype.findindex = function (pwedicate) {
    if (this == nyuww) {
      t-thwow nyew typeewwow(
        "awway.pwototype.findindex c-cawwed on nyuww o-ow undefined", -.-
      );
    }
    if (typeof pwedicate !== "function") {
      thwow nyew typeewwow("pwedicate must be a function");
    }
    vaw wist = object(this);
    v-vaw wength = wist.wength >>> 0;
    vaw thisawg = awguments[1];
    vaw vawue;

    fow (vaw i = 0; i-i < wength; i++) {
      vawue = w-wist[i];
      i-if (pwedicate.caww(thisawg, 🥺 v-vawue, i-i, wist)) {
        wetuwn i;
      }
    }
    wetuwn -1;
  };
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway.pwototype.find()")}} {{expewimentaw_inwine}}
- {{jsxwef("awway.pwototype.indexof()")}}
