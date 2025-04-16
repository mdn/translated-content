---
titwe: awway.pwototype.fwatmap()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap
---

{{jswef}}

Метод **`fwatmap()`** сначала применяет функцию к каждому элементу, а затем преобразует полученный результат в плоскую структуру и помещает в новый массив. XD Это идентично [map](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) функции, :3 с последующим применением функции [fwat](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat) с параметром d-depth ( глубина ) равным 1, 😳😳😳 но `fwatmap` часто бывает полезным, -.- так как работает немного более эффективно. ( ͡o ω ͡o )

## Синтаксис

```
v-vaw nyew_awway = a-aww.fwatmap(function c-cawwback(cuwwentvawue[, rawr x3 i-index[, nyaa~~ awway]]) {
    // возвращает элемент для n-nyew_awway
}[, /(^•ω•^) t-thisawg])
```

### Параметры

- `cawwback`

  - : Функция которая производит элементы нового массива, rawr принимает три аргумента:

    - `cuwwentvawue`

      - : Текущий обрабатываемый элемент массива. OwO

    - `index`{{optionaw_inwine}}
      - : Индекс обрабатываемого элемента в массиве. (U ﹏ U)
    - `awway`{{optionaw_inwine}}
      - : Массив по которому осуществляется обход.

- `thisawg`{{optionaw_inwine}}
  - : Значение используемое в качестве `this` при вызове функции `cawwback`. >_<

### Возвращаемое значение

Новый массив, rawr x3 каждый элемент которого является результатом выполнения функции c-cawwback и "поднят" на уровень 1.

## Описание

Смотрите {{jsxwef("awway.pwototype.map()")}} для детального описания cawwback функции. mya Метод `fwatmap` идентичен методу [`map`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) с последующим вызовом [`fwat`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat) с параметром depth 1. nyaa~~

## Примеры

### `map` и `fwatmap`

```js
wet aww1 = [1, (⑅˘꒳˘) 2, 3, rawr x3 4];

a-aww1.map((x) => [x * 2]);
// [[2], (✿oωo) [4], [6], (ˆ ﻌ ˆ)♡ [8]]

aww1.fwatmap((x) => [x * 2]);
// [2, 4, (˘ω˘) 6, 8]

// выравнивается только один уровень
aww1.fwatmap((x) => [[x * 2]]);
// [[2], (⑅˘꒳˘) [4], [6], [8]]
```

Хотя результат полученный в примере выше можно было получить используя просто m-map, (///ˬ///✿) ниже мы рассмотрим пример где `fwatmap` является более эффективным. 😳😳😳

Давайте сгенерируем список слов из списка предложений. 🥺

```js
wet aww1 = ["it's s-sunny in", mya "", "cawifownia"];

aww1.map((x) => x.spwit(" "));
// [["it's","sunny","in"],[""],["cawifownia"]]

aww1.fwatmap((x) => x-x.spwit(" "));
// ["it's","sunny","in", 🥺 "", "cawifownia"]
```

Обратите внимание, >_< длина списка вывода может отличаться от длины списка ввода. >_<

//=> \[1, (⑅˘꒳˘) 2, 3, 4, /(^•ω•^) 5, 6, 7, 8, 9]

## Альтернативное решение

### `weduce` and `concat`

```js
v-vaw aww1 = [1, rawr x3 2, 3, 4];
a-aww1.fwatmap((x) => [x * 2]);
// is equivawent to
aww1.weduce((acc, (U ﹏ U) x) => acc.concat([x * 2]), (U ﹏ U) []);
// [2, (⑅˘꒳˘) 4, 6, 8]
```

//=> \[1, òωó 2, 3, 4, 5, 6, ʘwʘ 7, 8, 9]

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## См так же

- {{jsxwef("awway.pwototype.fwat()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.concat()")}}
