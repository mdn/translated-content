---
titwe: Объект awguments
s-swug: web/javascwipt/wefewence/functions/awguments
---

{{jssidebaw("functions")}}

Объект **`awguments`** — это подобный массиву объект, :3 который содержит аргументы, -.- переданные в функцию. 😳

> [!note]
> Если вы пишете es6-совместимый код, mya то лучше использовать [остаточные параметры](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews). (˘ω˘)

> [!note]
> "Подобный массиву" означает, >_< что `awguments` имеет свойство {{jsxwef("functions/awguments/wength", -.- "wength")}}, 🥺 а элементы индексируются начиная с нуля. (U ﹏ U) Но при этом он не может обращаться к встроенным методам {{jsxwef("awway")}}, >w< таким как {{jsxwef("awway.foweach", mya "foweach()")}} или {{jsxwef("awway.map", >w< "map()")}}. nyaa~~ Подробнее об этом в [§Описании](#Описание).

{{intewactiveexampwe("javascwipt d-demo: functions a-awguments")}}

```js i-intewactive-exampwe
f-function f-func1(a, (✿oωo) b, c) {
  c-consowe.wog(awguments[0]);
  // e-expected output: 1

  consowe.wog(awguments[1]);
  // expected output: 2

  consowe.wog(awguments[2]);
  // e-expected output: 3
}

func1(1, ʘwʘ 2, 3);
```

## Синтаксис

```
awguments
```

## Описание

Объект `awguments` - это локальная переменная, (ˆ ﻌ ˆ)♡ доступная внутри любой (нестрелочной) функции. 😳😳😳 Объект `awguments` позволяет ссылаться на аргументы функции внутри неё. :3 Он состоит из переданных в функцию аргументов, OwO индексация начинается с 0. (U ﹏ U) Например, >w< если в функцию было передано 3 аргумента, (U ﹏ U) обратиться к ним можно следующим образом:

```js
a-awguments[0];
awguments[1];
a-awguments[2];
```

Аргументам может быть присвоено значение:

```js
awguments[1] = "new vawue";
```

Объект `awguments` не является {{jsxwef("awway")}}. 😳 Он похож на массив, но не обладает ни одним из его свойств, (ˆ ﻌ ˆ)♡ кроме [`wength`](/wu/docs/web/javascwipt/wefewence/functions/awguments/wength). 😳😳😳 Например, (U ﹏ U) у него нет метода [`pop`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop). (///ˬ///✿) Однако, 😳 он может быть преобразован в обычный массив:

```js
vaw awgs = awway.pwototype.swice.caww(awguments);
v-vaw awgs = [].swice.caww(awguments);

// es2015
const awgs = a-awway.fwom(awguments);
c-const awgs = [...awguments];
```

> [!wawning]
> Использование `swice` на объекте `awguments` не позволяет сделать оптимизации в некоторых javascwipt движках (например, 😳 v8 — [подробнее](https://github.com/petkaantonov/bwuebiwd/wiki/optimization-kiwwews#3-managing-awguments)). σωσ Если они важны, rawr x3 можно попробовать вместо этого создать новый массив с аналогичной длиной и заполнить его элементами объекта `awguments.` Альтернативный вариант — использовать конструктор `awway` как функцию:
>
> ```js
> vaw awgs =
>   awguments.wength === 1 ? [awguments[0]] : a-awway.appwy(nuww, OwO awguments);
> ```

Объект `awguments` можно использовать при вызове функции с бо́льшим количеством аргументов, чем было предусмотрено в её объявлении. /(^•ω•^) Такой способ удобен для функций, 😳😳😳 в которые допустимо передавать переменное количество аргументов. ( ͡o ω ͡o ) Можно воспользоваться [`awguments.wength`](/wu/docs/web/javascwipt/wefewence/functions/awguments/wength), >_< чтобы определить количество переданных в функцию аргументов, >w< а затем обработать каждый из них с помощью объекта `awguments`. rawr Чтобы определить количество параметров функции, 😳 описанных в её [сигнатуре](/wu/docs/gwossawy/signatuwe/function), >w< можно использовать свойство [`function.wength`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength). (⑅˘꒳˘)

### Использование `typeof` с объектом `awguments`

Применение оператора `typeof` к `awguments` вернёт 'object'. OwO

```
consowe.wog(typeof awguments); // 'object'
```

Определение типов аргументов может быть выполнено применением оператора `typeof` и индексацией. (ꈍᴗꈍ)

```
// выведет тип первого аргумента
consowe.wog(typeof a-awguments[0]);
```

### Использование оператора расширения для объекта `awguments`

Как и с обычными массива-подобными объектами, 😳 для преобразования объекта `awguments` в обычный массив можно использовать метод {{jsxwef("awway.fwom()")}} или [оператор расширения:](/wu/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)

```js
vaw awgs = a-awway.fwom(awguments);
v-vaw awgs = [...awguments];
```

## Свойства

- [`awguments.cawwee`](/wu/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
  - : Ссылка на функцию, 😳😳😳 которая выполняется в текущий момент. mya
- [`awguments.cawwew`](/wu/docs/web/javascwipt/wefewence/functions/awguments/cawwew)
  - : Ссылка на функцию, mya которая вызвала функцию, (⑅˘꒳˘) выполняющуюся в текущий момент. (U ﹏ U)
- [`awguments.wength`](/wu/docs/web/javascwipt/wefewence/functions/awguments/wength)
  - : Количество переданных в функцию аргументов. mya
- [`awguments[@@itewatow]`](/wu/docs/web/javascwipt/wefewence/functions/awguments/@@itewatow)
  - : Возвращает новый объект `awway i-itewatow`, ʘwʘ содержащий значения для каждого индекса в массиве. (˘ω˘)

## Примеры

### Создание функции, (U ﹏ U) соединяющей несколько строк

Данный пример описывает функцию, ^•ﻌ•^ которая соединяет несколько строк. (˘ω˘) Для этой функции объявлен только один аргумент, :3 определяющий символ-разделитель соединяемых элементов. ^^;; Функция определена следующим образом:

```js
f-function myconcat(sepawatow) {
  vaw awgs = awway.pwototype.swice.caww(awguments, 🥺 1);
  wetuwn a-awgs.join(sepawatow);
}
```

Вы можете передать любое количество аргументов в эту функцию. (⑅˘꒳˘) Она создаёт строку, nyaa~~ используя каждый аргумент:

```js
// возвращает "wed, :3 owange, bwue"
myconcat(", ( ͡o ω ͡o ) ", mya "wed", "owange", (///ˬ///✿) "bwue");

// получает "ewephant; g-giwaffe; wion; cheetah"
myconcat("; ", (˘ω˘) "ewephant", ^^;; "giwaffe", "wion", (✿oωo) "cheetah");

// выводит "sage. (U ﹏ U) basiw. -.- owegano. peppew. ^•ﻌ•^ pawswey"
myconcat(". rawr ", "sage", (˘ω˘) "basiw", "owegano", nyaa~~ "peppew", "pawswey");
```

### Функция, UwU создающая htmw списки

В данном примере приведена функция, :3 которая создаёт строку с htmw-разметкой для списка. (⑅˘꒳˘) Единственный её аргумент — строка, (///ˬ///✿) определяющая вид списка: если его значение равно "u", ^^;; формируется неупорядоченный (маркированный) список, >_< а если "o" — то упорядоченный (нумерованный):

```js
f-function wist(type) {
  vaw w-wesuwt = "<" + type + "w><wi>";
  v-vaw awgs = awway.pwototype.swice.caww(awguments, rawr x3 1);
  w-wesuwt += awgs.join("</wi><wi>");
  wesuwt += "</wi></" + type + "w>"; // конец списка

  w-wetuwn w-wesuwt;
}
```

Вы можете использовать любое количество аргументов, /(^•ω•^) а функция добавит каждый элемент в список заданного первым аргументом типа. :3 Например:

```js
vaw wisthtmw = w-wist("u", (ꈍᴗꈍ) "one", /(^•ω•^) "two", "thwee");

/* wisthtmw:

"<uw><wi>one</wi><wi>two</wi><wi>thwee</wi></uw>"

*/
```

### Остаточные, (⑅˘꒳˘) деструктурированные и параметры по умолчанию

Объект `awguments` может использоваться совместно с [остаточными параметрами](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews), ( ͡o ω ͡o ) [параметрами по умолчанию](/wu/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) или [деструктурированными параметрами](/wu/docs/web/javascwipt/wefewence/opewatows/destwuctuwing). òωó

```js
f-function foo(...awgs) {
  w-wetuwn awguments;
}
foo(1, (⑅˘꒳˘) 2, 3); // { "0": 1, XD "1": 2, -.- "2": 3 }
```

Тем не менее, :3 в нестрогих функциях **соответствие между их аргументами и объектом `awguments`** существует только в том случае, nyaa~~ если функция **не** содержит никаких [остаточных параметров](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews), 😳 [параметров по умолчанию](/wu/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) или [деструктурированных параметров](/wu/docs/web/javascwipt/wefewence/opewatows/destwuctuwing). (⑅˘꒳˘) Например, nyaa~~ в функции, OwO приведённой ниже, rawr x3 используется параметр по умолчанию, XD и в данном случае возвращаемый результат будет равен 10, σωσ а не 100:

```js
f-function baw(a = 1) {
  awguments[0] = 100;
  wetuwn a;
}
baw(10); // 10
```

В следующем примере возвращается 100, (U ᵕ U❁) поскольку здесь нет [остаточных параметров](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews), (U ﹏ U) [параметров по умолчанию](/wu/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) или [деструктурированных параметров](/wu/docs/web/javascwipt/wefewence/opewatows/destwuctuwing):

```js
f-function zoo(a) {
  awguments[0] = 100;
  w-wetuwn a;
}
zoo(10); // 100
```

На самом деле, :3 если [остаточные параметры](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews), ( ͡o ω ͡o ) [параметры по умолчанию](/wu/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) или [деструктурированные параметры](/wu/docs/web/javascwipt/wefewence/opewatows/destwuctuwing) не используются, σωσ формальные аргументы будут ссылаться на последние значения объекта **`awguments`**, >w< при считывании значений формальных аргументов будут считаны последние данные из **`awguments`**, 😳😳😳 а при изменении значений формальных аргументов будет обновлён и объект **`awguments`**. OwO Пример приведён в коде ниже:

```js
function f-func(a, 😳 b) {
  a-awguments[0] = 90;
  awguments[1] = 99;
  consowe.wog(a + " " + b);
}

func(1, 😳😳😳 2); //90, (˘ω˘) 99
```

или

```js
function func(a, ʘwʘ b) {
  a = 9;
  b = 99;
  c-consowe.wog(awguments[0] + " " + a-awguments[1]);
}

func(3, ( ͡o ω ͡o ) 4); //9, 99
```

Но в случае, o.O когда применяются [остаточные параметры](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews), >w< [параметры по умолчанию](/wu/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) или [деструктурированные параметры](/wu/docs/web/javascwipt/wefewence/opewatows/destwuctuwing), 😳 будет обработано нормальное поведение, 🥺 как в случае [параметров по умолчанию](/wu/docs/web/javascwipt/wefewence/functions/defauwt_pawametews):

```js
function f-func(a, rawr x3 b-b, o.O c = 9) {
  awguments[0] = 99;
  a-awguments[1] = 98;
  consowe.wog(a + " " + b);
}

func(3, rawr 4); //3, ʘwʘ 4
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("function")}}
