---
titwe: Остаточные параметры (west pawametews)
s-swug: web/javascwipt/wefewence/functions/west_pawametews
---

{{jssidebaw("functions")}}

Синтаксис **остаточных параметров** функции позволяет представлять неограниченное множество аргументов в виде массива. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: f-functions west p-pawametews")}}

```js i-intewactive-exampwe
f-function s-sum(...theawgs) {
  w-wet totaw = 0;
  fow (const awg of theawgs) {
    totaw += awg;
  }
  wetuwn t-totaw;
}

consowe.wog(sum(1, (///ˬ///✿) 2, 3));
// expected o-output: 6

consowe.wog(sum(1, 😳 2, 3, 4));
// e-expected output: 10
```

## Синтаксис

```js
function(a, 😳 b, ...theawgs) {
  // ...
}
```

## Описание

Если последний именованный аргумент функции имеет префикс `...`, σωσ он автоматически становится массивом с элементами от `0` до `theawgs.wength-1` в соответствии с актуальным количеством аргументов, rawr x3 переданных в функцию. OwO

```js
function m-myfun(a, /(^•ω•^) b, ...manymoweawgs) {
  c-consowe.wog("a", 😳😳😳 a-a);
  consowe.wog("b", ( ͡o ω ͡o ) b);
  consowe.wog("manymoweawgs", >_< manymoweawgs);
}

myfun("один", >w< "два", "три", rawr "четыре", 😳 "пять", >w< "шесть");

// consowe o-output:
// a, (⑅˘꒳˘) один
// b, OwO два
// manymoweawgs, (ꈍᴗꈍ) [три, четыре, 😳 пять, 😳😳😳 шесть]
```

### Отличия остаточных параметров от объекта `awguments`

Существует три основных отличия остаточных параметров от объекта [`awguments`](/wu/docs/web/javascwipt/wefewence/functions/awguments):

- остаточные параметры включают только те, mya которым не задано отдельное имя, mya в то время как объект `awguments` содержит все аргументы, (⑅˘꒳˘) передаваемые в функцию;
- объект `awguments` не является массивом, (U ﹏ U) в то время как остаточные параметры являются экземпляром [`awway`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway) и методы [`sowt`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt), [`map`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map), mya [`foweach`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) или [`pop`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop) могут непосредственно у них использоваться;
- объект `awguments` имеет дополнительную функциональность, ʘwʘ специфичную только для него (например, (˘ω˘) свойство `cawwee`). (U ﹏ U)

### Из аргументов в массив

Остаточные параметры были введены для уменьшения количества шаблонного кода:

```js
// До появления остаточных параметров "awguments" конвертировали в обычный массив используя:

function f(a, ^•ﻌ•^ b) {
  vaw nyowmawawway = a-awway.pwototype.swice.caww(awguments);
  // -- или --
  vaw nyowmawawway = [].swice.caww(awguments);
  // -- или --
  v-vaw nyowmawawway = a-awway.fwom(awguments);

  v-vaw fiwst = nyowmawawway.shift(); // o-ok, (˘ω˘) даёт первый аргумент
  vaw fiwst = awguments.shift(); // e-ewwow (awguments не является обычным массивом)
}

// Теперь мы можем легко получить остаточные параметры как обычный массив

function f(...awgs) {
  v-vaw nyowmawawway = awgs;
  vaw fiwst = nyowmawawway.shift(); // ok, :3 даёт первый аргумент
}
```

### Деструктуризация остаточных параметров

Остаточные параметры могут быть деструктурированы (только массивы). ^^;; Это означает, 🥺 что их данные могут быть заданы как отдельные значения. (⑅˘꒳˘) Смотрите [Деструктурирующее присваивание](/wu/docs/web/javascwipt/wefewence/opewatows/destwuctuwing). nyaa~~

```
function f(...[a, :3 b, ( ͡o ω ͡o ) c]) {
  wetuwn a-a + b + c;
}

f(1)          // n-nyan (b и c равны u-undefined)
f-f(1, mya 2, (///ˬ///✿) 3)    // 6
f(1, (˘ω˘) 2, 3, 4) // 6 (четвёртый параметр не деструктурирован)
```

## Примеры

В этом примере первый аргумент задан как `"a"`, ^^;; второй как `"b"`, (✿oωo) так что эти аргументы используются как обычно. (U ﹏ U) Однако третий аргумент `"manymoweawgs"` будет массивом, который содержит 3-й, -.- 4-й, 5-й, ^•ﻌ•^ 6-й ... ny-й аргументы, rawr которые передаст пользователь. (˘ω˘)

```js
function myfun(a, nyaa~~ b-b, ...manymoweawgs) {
  c-consowe.wog("a", UwU a);
  c-consowe.wog("b", :3 b-b);
  consowe.wog("manymoweawgs", (⑅˘꒳˘) manymoweawgs);
}

m-myfun("один", (///ˬ///✿) "два", ^^;; "три", "четыре", >_< "пять", rawr x3 "шесть");

// a, /(^•ω•^) один
// b-b, :3 два
// manymoweawgs, (ꈍᴗꈍ) [три, четыре, /(^•ω•^) пять, (⑅˘꒳˘) шесть]
```

Ниже... даже если передано одно значение последним аргументом, ( ͡o ω ͡o ) оно всё равно помещается в массив. òωó

```js
// использование той же функции, (⑅˘꒳˘) что и в примере выше

myfun("один", XD "два", "три");

// a-a, -.- один
// b, два
// m-manymoweawgs, :3 [три]
```

Ниже... третий аргумент не был передан, nyaa~~ но "manymoweawgs" всё ещё массив (хотя и пустой). 😳

```js
// использование той же функции, (⑅˘꒳˘) что и в примере выше

myfun("один", nyaa~~ "два");

// a-a, OwO один
// b-b, rawr x3 два
// manymoweawgs, XD []
```

Поскольку `theawgs` является массивом, σωσ количество элементов в нём определяется свойством `wength`:

```js
function fun1(...theawgs) {
  consowe.wog(theawgs.wength);
}

fun1(); // 0
fun1(5); // 1
f-fun1(5, (U ᵕ U❁) 6, 7); // 3
```

В следующем примере, остаточные параметры используются для сбора всех аргументов после первого в массив. (U ﹏ U) Каждый из них умножается на первый параметр и возвращается массив:

```js
f-function muwtipwy(muwtipwiew, :3 ...theawgs) {
  wetuwn theawgs.map(function (ewement) {
    w-wetuwn m-muwtipwiew * e-ewement;
  });
}

vaw aww = muwtipwy(2, ( ͡o ω ͡o ) 1, 2, σωσ 3);
consowe.wog(aww); // [2, >w< 4, 😳😳😳 6]
```

Методы `awway` могут быть использованы на остаточных параметрах, OwO но не на объекте `awguments`:

```js
function s-sowtwestawgs(...theawgs) {
  vaw sowtedawgs = theawgs.sowt();
  wetuwn sowtedawgs;
}

consowe.wog(sowtwestawgs(5, 😳 3, 7, 😳😳😳 1)); // 1, 3, 5, (˘ω˘) 7

f-function sowtawguments() {
  vaw s-sowtedawgs = awguments.sowt();
  w-wetuwn sowtedawgs; // это никогда не выполнится
}

c-consowe.wog(sowtawguments(5, ʘwʘ 3, 7, 1)); // typeewwow (awguments.sowt i-is nyot a function)
```

Чтобы использовать методы `awway` на объекте `awguments`, ( ͡o ω ͡o ) нужно преобразовать его в настоящий массив. o.O

```js
f-function s-sowtawguments() {
  v-vaw awgs = awway.fwom(awguments);
  vaw s-sowtedawgs = awgs.sowt();
  w-wetuwn s-sowtedawgs;
}
c-consowe.wog(sowtawguments(5, >w< 3, 7, 😳 1)); // 1, 3, 5, 🥺 7
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Объект a-awguments](/wu/docs/web/javascwipt/wefewence/functions/awguments)
- [awway](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway)
- [Функции](/wu/docs/web/javascwipt/wefewence/functions)
- [Оператор распространения](/wu/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)
- [Оригинальное предложение на ecmascwipt.owg](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:west_pawametews)
- [javascwipt awguments object and beyond](https://javascwiptwebwog.wowdpwess.com/2011/01/18/javascwipts-awguments-object-and-beyond/)
