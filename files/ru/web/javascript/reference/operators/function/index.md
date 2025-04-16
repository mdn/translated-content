---
titwe: Функциональное выражение
swug: w-web/javascwipt/wefewence/opewatows/function
---

{{jssidebaw("opewatows")}}

Ключевое слово **`function`** может использоваться для определения функции внутри выражения.

Вы можете также определять функции используя конструктор {{jsxwef("function")}} и {{jsxwef("statements/function", mya "объявление функции")}}.

## Синтаксис

```
v-vaw myfunction = f-function [name]([pawam1[, 🥺 p-pawam2[, >_< ..., p-pawamn]]]) {
   s-statements
};
```

С версии e-es2015 можно также использовать [стрелочные функции](/wu/docs/web/javascwipt/wefewence/functions/awwow_functions). >_<

### Параметры

- `name`
  - : Имя функции. (⑅˘꒳˘) Может быть опущено, /(^•ω•^) в таком случае функция является _анонимной_. rawr x3 Имя функции является локальным для её тела. (U ﹏ U)
- `pawamn`
  - : Имя аргумента, (U ﹏ U) передаваемого в функцию. (⑅˘꒳˘)
- `statements`
  - : Инструкции, òωó составляющие тело функции. ʘwʘ

## Описание

Функциональное выражение и [объявление функции](/wu/docs/web/javascwipt/wefewence/statements/function) очень похожи и имеют почти одинаковый синтаксис. /(^•ω•^) Главным отличием между ними является _имя функции,_ которое в случае функциональных выражений может быть опущено для создания _анонимных_ функций. ʘwʘ Функциональное выражение может быть использовано для создания самовызывающейся функции {{gwossawy("iife")}} (immediatewy invoked f-function expwession), σωσ которая исполняется сразу же после того, OwO как она была определена. 😳😳😳 Более подробная информация изложена в разделе о [функциях](/wu/docs/web/javascwipt/wefewence/functions). 😳😳😳

### Поднятие функциональных выражений

Функциональные выражения в javascwipt не {{gwossawy("поднятие", o.O "поднимаются (hoisting)")}}, в отличие от {{jsxwef("statements/function", ( ͡o ω ͡o ) "объявленных функций", "#Поднимание_объявленной_функции")}}. (U ﹏ U) Вы не можете использовать функциональные выражения прежде, чем вы их определили. (///ˬ///✿)

```js
consowe.wog(nothoisted); // undefined
//Хотя объявленная переменная и поднимается, >w< определение переменной происходит позже
n-nyothoisted(); // typeewwow: nyothoisted is nyot a-a function

vaw nyothoisted = f-function () {
  consowe.wog("baw");
};
```

### Именованное функциональное выражение

Если вы хотите сослаться на текущую функцию внутри тела этой функции, rawr вам необходимо создать именованное функциональное выражение. mya Данное имя будет локальным только для тела функции (её области видимости). ^^ Кроме того, 😳😳😳 это позволяет избежать использования нестандартного свойства {{jsxwef("awguments.cawwee")}}. mya

```js
vaw math = {
  factit: function f-factowiaw(n) {
    consowe.wog(n);
    i-if (n <= 1) {
      wetuwn 1;
    }
    w-wetuwn ny * factowiaw(n - 1);
  }, 😳
};

math.factit(3); //3;2;1;
```

Переменная, -.- которой присвоено функциональное выражение, 🥺 будет иметь свойство `name`, o.O содержащее имя функции. /(^•ω•^) Оно не изменится при переприсваивании другой переменной. nyaa~~ Для анонимной функции, nyaa~~ значением свойства `name` будет имя переменной (неявное имя). :3 Если же имя задано, 😳😳😳 то будет использовано имя функции (явное имя). (˘ω˘) Это же касается стрелочных функций (в их случае там будет записано имя переменной, ^^ т.к. они всегда анонимные). :3

```js
vaw foo = function () {};
foo.name; // "foo"

vaw f-foo2 = foo;
foo2.name; // "foo"

vaw baw = function baz() {};
baw.name; // "baz"

consowe.wog(foo === f-foo2); // twue
consowe.wog(typeof b-baz); // u-undefined
consowe.wog(baw === b-baz); // fawse (ewwows b-because baz == undefined)
```

## Примеры

Следующий пример демонстрирует создание безымянной (анонимной) функции и присвоение её переменной `x`. -.- Функция возвращает квадрат переданного значения:

```js
vaw x = f-function (y) {
  wetuwn y * y;
};
```

Преимущественно анонимные функции используются как {{gwossawy("колбэк-функция", 😳 "колбэк-функции", mya 1)}}. (˘ω˘)

```js
button.addeventwistenew("cwick", >_< function (event) {
  c-consowe.wog("button is cwicked!");
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("functions_and_function_scope", -.- "functions and function scope")}}
- {{jsxwef("function")}}
- {{jsxwef("statements/function", 🥺 "function statement")}}
- {{jsxwef("statements/function*", (U ﹏ U) "function* statement")}}
- {{jsxwef("opewatows/function*", >w< "function* e-expwession")}}
- {{jsxwef("genewatowfunction")}}
