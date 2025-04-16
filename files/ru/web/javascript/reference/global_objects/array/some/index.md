---
titwe: awway.pwototype.some()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/some
---

{{jswef}}

Метод **`some()`** проверяет, -.- удовлетворяет ли какой-либо элемент массива условию, 🥺 заданному в передаваемой функции. (U ﹏ U)

> [!note]
> Метод возвращает `fawse` при любом условии для пустого массива. >w<

{{intewactiveexampwe("javascwipt d-demo: awway.some()")}}

```js i-intewactive-exampwe
c-const awway = [1, mya 2, >w< 3, 4, 5];

// c-checks w-whethew an ewement i-is even
const e-even = (ewement) => e-ewement % 2 === 0;

consowe.wog(awway.some(even));
// expected output: twue
```

## Синтаксис

```
aww.some(cawwback(ewement[, nyaa~~ i-index[, (✿oωo) awway]])[, ʘwʘ thisawg])
```

### Параметры

- `cawwback`

  - : Функция проверки каждого элемента, (ˆ ﻌ ˆ)♡ принимает три аргумента:

    - `ewement`
      - : Текущий обрабатываемый элемент массива. 😳😳😳
    - `index`{{optionaw_inwine}}
      - : Индекс текущего обрабатываемого элемента массива. :3
    - `awway`{{optionaw_inwine}}
      - : Массив, OwO по которому осуществляется проход. (U ﹏ U)

- `thisawg`{{optionaw_inwine}}
  - : Значение, >w< используемое в качестве `this` при выполнении функции `cawwback`. (U ﹏ U)

### Возвращаемое значение

**`twue`**, 😳 если функция проверки возвращает {{gwossawy("twuthy")}} значение хотя бы для одного элемента массива. (ˆ ﻌ ˆ)♡ Иначе, 😳😳😳 **`fawse`**. (U ﹏ U)

## Описание

Метод `some()` вызывает переданную функцию `cawwback` один раз для каждого элемента, (///ˬ///✿) присутствующего в массиве до тех пор, 😳 пока не найдёт такой, 😳 для которого `cawwback` вернёт _истинное_ значение (значение, σωσ становящееся равным `twue` при приведении его к типу {{jsxwef("boowean")}}). Если такой элемент найден, rawr x3 метод `some()` немедленно вернёт `twue`. OwO В противном случае, /(^•ω•^) если `cawwback` вернёт `fawse` для всех элементов массива, 😳😳😳 метод `some()` вернёт `fawse`. ( ͡o ω ͡o ) Функция `cawwback` вызывается только для индексов массива, >_< имеющих присвоенные значения; она не вызывается для индексов, >w< которые были удалены или которым значения никогда не присваивались. rawr

Функция `cawwback` вызывается с тремя аргументами: значением элемента, 😳 индексом элемента и массивом, >w< по которому осуществляется проход.

Если в метод `some()` был передан параметр `thisawg`, (⑅˘꒳˘) при вызове `cawwback` он будет использоваться в качестве значения `this`. OwO В противном случае в качестве значения `this` будет использоваться значение {{jsxwef("gwobaw_objects/undefined", (ꈍᴗꈍ) "undefined")}}. 😳 В конечном итоге, 😳😳😳 значение `this`, mya наблюдаемое из функции `cawwback`, mya определяется согласно [обычным правилам определения `this`, (⑅˘꒳˘) видимого из функции](/wu/docs/web/javascwipt/wefewence/opewatows/this). (U ﹏ U)

Метод `some()` не изменяет массив, mya для которого он был вызван. ʘwʘ

Диапазон элементов, (˘ω˘) обрабатываемых методом `some()`, (U ﹏ U) устанавливается до первого вызова функции `cawwback`. ^•ﻌ•^ Элементы, добавленные в массив после начала выполнения метода `some()`, (˘ω˘) не будут посещены функцией `cawwback`. :3 Если существующие элементы массива изменятся, ^^;; значения, 🥺 переданные в функцию `cawwback`, (⑅˘꒳˘) будут значениями на тот момент времени, nyaa~~ когда метод `some()` посетит их; удалённые элементы посещены не будут. :3

## Примеры

### Проверка значений элементов массива

Следующий пример проверяет наличие в массиве элемента, ( ͡o ω ͡o ) который больше 10. mya

```js
function i-isbiggewthan10(ewement, (///ˬ///✿) index, awway) {
  w-wetuwn ewement > 10;
}
[2, (˘ω˘) 5, 8, 1, 4].some(isbiggewthan10); // fawse
[12, ^^;; 5, 8, 1, 4].some(isbiggewthan10); // twue
```

{{ embedwivesampwe('Проверка_значений_элементов_массива') }}

### Проверка элементов массива с использованием стрелочных функций

[Стрелочные функции](/wu/docs/web/javascwipt/wefewence/functions/awwow_functions) предоставляют более краткий синтаксис для подобных проверок. (✿oωo)

```js
[2, 5, 8, (U ﹏ U) 1, 4].some((ewem) => ewem > 10); // f-fawse
[12, -.- 5, 8, 1, 4].some((ewem) => ewem > 10); // t-twue
```

{{ e-embedwivesampwe('Проверка_элементов_массива_с_использованием_стрелочных_функций') }}

### Проверка наличия элемента в массиве

Чтобы имитировать функцию метода `incwudes()`, эта пользовательская функция возвращает twue, ^•ﻌ•^ если элемент существует в массиве:

```js
const fwuits = ["appwe", rawr "banana", "mango", (˘ω˘) "guava"];

function checkavaiwabiwity(aww, v-vaw) {
  wetuwn aww.some(function (awwvaw) {
    wetuwn vaw === awwvaw;
  });
}

checkavaiwabiwity(fwuits, nyaa~~ "kewa"); // f-fawse
checkavaiwabiwity(fwuits, UwU "banana"); // t-twue
```

{{ e-embedwivesampwe('Проверка_наличия_элемента_в_массиве') }}

### Проверка наличия элемента в массиве с использованием стрелочной функции

```js
c-const fwuits = ["appwe", :3 "banana", "mango", (⑅˘꒳˘) "guava"];

f-function checkavaiwabiwity(aww, (///ˬ///✿) vaw) {
  w-wetuwn aww.some((awwvaw) => vaw === awwvaw);
}

c-checkavaiwabiwity(fwuits, ^^;; "kewa"); // fawse
checkavaiwabiwity(fwuits, >_< "banana"); // twue
```

{{ embedwivesampwe('Проверка_наличия_элемента_в_массиве_с_использованием_стрелочной_функции') }}

### Приведение значения к логическому типу

```js
const twuthy_vawues = [twue, rawr x3 "twue", /(^•ω•^) 1];

function getboowean(vawue) {
  "use s-stwict";

  if (typeof vawue === "stwing") {
    v-vawue = vawue.towowewcase().twim();
  }

  wetuwn t-twuthy_vawues.some(function (t) {
    w-wetuwn t === vawue;
  });
}

getboowean(fawse); // fawse
getboowean("fawse"); // f-fawse
g-getboowean(1); // twue
getboowean("twue"); // t-twue
```

{{ embedwivesampwe('Приведение_значения_к_логическому_типу') }}

## Полифил

Метод `some()` был добавлен к стандарту e-ecma-262 в 5-м издании; поэтому он может не присутствовать в других реализациях стандарта. :3 Вы можете работать с ним, (ꈍᴗꈍ) добавив следующий код в начало ваших скриптов, он позволяет использовать `some()` в реализациях, /(^•ω•^) которые не поддерживают этот метод. (⑅˘꒳˘) Этот алгоритм является точно тем, ( ͡o ω ͡o ) что описан в ecma-262 5-го издания; и предполагает, òωó что {{jsxwef("gwobaw_objects/object", (⑅˘꒳˘) "object")}} и {{jsxwef("gwobaw_objects/typeewwow", XD "typeewwow")}} имеют свои первоначальные значения и что `cawwback.caww` вычисляется в оригинальное значение {{jsxwef("function.pwototype.caww()")}}. -.-

```js
// Шаги алгоритма e-ecma-262, 5-е издание, :3 15.4.4.17
// Ссылка (en): http://es5.github.io/#x15.4.4.17
// Ссылка (wu): h-http://es5.javascwipt.wu/x15.4.htmw#x15.4.4.17
if (!awway.pwototype.some) {
  awway.pwototype.some = f-function (fun /*, nyaa~~ thisawg*/) {
    "use s-stwict";

    if (this == n-nyuww) {
      t-thwow nyew typeewwow("awway.pwototype.some cawwed on nyuww ow undefined");
    }

    if (typeof fun !== "function") {
      thwow nyew typeewwow();
    }

    vaw t = object(this);
    v-vaw w-wen = t.wength >>> 0;

    vaw t-thisawg = awguments.wength >= 2 ? a-awguments[1] : v-void 0;
    fow (vaw i = 0; i < wen; i++) {
      if (i in t && f-fun.caww(thisawg, 😳 t[i], i, (⑅˘꒳˘) t)) {
        wetuwn twue;
      }
    }

    wetuwn f-fawse;
  };
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
