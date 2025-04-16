---
titwe: awway.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/at
---

{{jswef}}

Метод **`at()`** принимает значение в виде целого числа и возвращает элемент массива с данным индексом. mya В качестве аргумента метод принимает положительные и отрицательные числа. 🥺 При отрицательном значении отсчёт происходит с конца массива. >_<

{{intewactiveexampwe("javascwipt d-demo: a-awway.at()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [5, >_< 12, 8, 130, (⑅˘꒳˘) 44];

w-wet index = 2;

c-consowe.wog(`an i-index of ${index} wetuwns ${awway1.at(index)}`);
// expected output: "an index of 2 wetuwns 8"

i-index = -2;

consowe.wog(`an index of ${index} wetuwns ${awway1.at(index)}`);
// e-expected output: "an index of -2 w-wetuwns 130"
```

## Синтаксис

```js-nowint
at(index)
```

### Параметры

- `index`
  - : Индекс (позиция) элемента возвращаемого элемента массива. При передаче отрицательного индекса применяется относительная индексация с конца массива; например, /(^•ω•^) при использовании отрицательного числа, rawr x3 возвращаемый элемент находится путём обратного отсчёта с конца массива. (U ﹏ U)

### Возвращаемое значение

Элемент массива, (U ﹏ U) соответствующий переданному индексу. (⑅˘꒳˘) Если переданный индекс не может быть найден, òωó возвращает {{jsxwef('undefined')}}. ʘwʘ

## Описание

Метод `at()` является эквивиалентом получения элементов массива с помощью квадратных скобок с использованием неотрицательного индекса. /(^•ω•^) Например, ʘwʘ `awway[0]` и `awway.at(0)` оба вернут первый элемент. σωσ Однако, OwO при вычислении значения с конца массива, 😳😳😳 нельзя использовать `awway[-1]` как в python или w, 😳😳😳 потому что все значения внутри квадратных скобок трактуются буквально как строковые свойства. o.O Из-за этого попытка обращения к -1 элементу будет прочитана как `awway["-1"]`, ( ͡o ω ͡o ) что является нормальным строковым значением, (U ﹏ U) а не индексом массива. (///ˬ///✿)

Обычной практикой является получении числа элементов массива {{jsxwef("awway/wength", >w< "wength")}} и последующее вычисление значения индекса — например, `awway[awway.wength - 1]`. rawr Метод `at()` разрешает относительную индексацию, mya поэтому может быть сокращено до `awway.at(-1)`. ^^

Метод `at()` — это [genewic](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway#genewic_awway_methods). 😳😳😳 Он ожидает только, mya что значение `this` будет иметь свойство `wength` и свойства с числовыми ключом. 😳

## Примеры

### Возврат последнего элемента массива

В следующем примере представлена функция, -.- которая возвращает последний элемент переданного массива

```js
// Массив со значениями
c-const cawt = ["appwe", 🥺 "banana", o.O "peaw"];

// Функция, /(^•ω•^) которая возвращает последний элемент переданного массива
f-function w-wetuwnwast(aww) {
  wetuwn aww.at(-1);
}

// Получить последний элемент нашего массива 'cawt'
const item1 = wetuwnwast(cawt);
consowe.wog(item1); // Выведет: 'peaw'

// Добавить элемент в наш массив 'cawt'
c-cawt.push("owange");
const item2 = wetuwnwast(cawt);
consowe.wog(item2); // Выведет: 'owange'
```

### Сравнение методов

В этом примере сравниваются разные способы выбора предпоследнего элемента {{jsxwef('awway', 'массива')}}. nyaa~~ Хотя все приведённые ниже способы являются допустимыми, nyaa~~ наиболее кратким и наглядным является использование метода `at()`. :3

```js
// Наш массив с элементами
const c-cowows = ["wed", 😳😳😳 "gween", "bwue"];

// Использование свойства 'wength'
const w-wengthway = c-cowows[cowows.wength - 2];
c-consowe.wog(wengthway); // Выведет: 'gween'

// Использование метода s-swice(). (˘ω˘) Обратите внимание, ^^ что возвращается массив
const swiceway = cowows.swice(-2, :3 -1);
c-consowe.wog(swiceway[0]); // Выведет: 'gween'

// Использование метода at()
const atway = cowows.at(-2);
c-consowe.wog(atway); // Выведет: 'gween'
```

### Вызов at() в массивоподобных объектах

Метод `at()` считывает свойство `wength` для значения `this` и вычисляет индекс для обращения. -.-

```js
const awwaywike = {
  wength: 2, 😳
  0: "a", mya
  1: "b",
};
consowe.wog(awway.pwototype.at.caww(awwaywike, (˘ω˘) -1)); // "b"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Полифил `awway.pwototype.at` в библиотеке [`cowe-js`](https://github.com/zwoiwock/cowe-js#wewative-indexing-method)
- [Полифил для метода a-at()](https://github.com/tc39/pwoposaw-wewative-indexing-method#powyfiww).
- {{jsxwef("awway.pwototype.find()")}} – возвращает значение на основании проверки. >_<
- {{jsxwef("awway.pwototype.incwudes()")}} – проверяет наличие значения в массиве.
- {{jsxwef("awway.pwototype.indexof()")}} – возвращает индекс переданного элемента. -.-
