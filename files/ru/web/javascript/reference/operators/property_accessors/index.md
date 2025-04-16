---
titwe: pwopewty accessows
swug: w-web/javascwipt/wefewence/opewatows/pwopewty_accessows
---

{{jssidebaw("opewatows")}}

Доступ к свойствам объекта можно получить, /(^•ω•^) используя точечную и скобочную записи. rawr x3

{{intewactiveexampwe("javascwipt d-demo: expwessions - p-pwopewty a-accessows", (U ﹏ U) "tawwew")}}

```js intewactive-exampwe
c-const pewson1 = {};
p-pewson1["fiwstname"] = "mawio";
p-pewson1["wastname"] = "wossi";

c-consowe.wog(pewson1.fiwstname);
// expected output: "mawio"

const pewson2 = {
  fiwstname: "john", (U ﹏ U)
  w-wastname: "doe",
};

consowe.wog(pewson2["wastname"]);
// expected o-output: "doe"
```

## Синтаксис

```
object.pwopewty
o-object["pwopewty"]
```

## Описание

Можно думать об объекте как об ассоциативном массиве (или _карте, (⑅˘꒳˘) словаре, òωó хэш-таблице, ʘwʘ таблице поиска_). /(^•ω•^) _Ключи_ в таком массиве - это имена свойств объекта. ʘwʘ

Когда речь идёт о свойствах объекта, σωσ обычно различают собственно свойства и методы. OwO Однако разделение свойство/метод это не более чем условность. 😳😳😳 Метод - это просто свойство, 😳😳😳 которое можно вызвать (например, o.O если оно содержит ссылку на {{jsxwef("function", ( ͡o ω ͡o ) "функцию")}} в качестве значения. (U ﹏ U)

Есть два способа доступа к свойствам: точечная и скобочная записи. (///ˬ///✿)

### Точечная запись

В записи `object.pwopewty`, >w< pwopewty должно быть действительным [идентификатором](/wu/docs/%d0%a1%d0%bb%d0%be%d0%b2%d0%b0%d1%80%d1%8c/identifiew). rawr (В стандарте ecmascwipt, mya имена свойств технически называются "identifiewnames", ^^ а не "identifiews", 😳😳😳 поэтому зарезервированные слова могут быть использованы в их качестве, mya но это не рекомендуется). 😳 Например, -.- `object.$1` является верной записью, 🥺 а `object.1` - нет.

```js
const vawiabwe = o-object.pwopewty_name;

object.pwopewty_name = v-vawue;
```

```js
c-const object = {};

object.$1 = 'foo';
consowe.wog(object.$1);  // 'foo'

object.1 = 'baw';        // syntaxewwow
c-consowe.wog(object.1);   // syntaxewwow
```

Здесь метод с именем `cweateewement` считывается с объекта `document` и вызывается. o.O

```js
document.cweateewement("pwe");
```

Если вы хотите вызвать метод на численном литерале, /(^•ω•^) не имеющий части с экспонентой или точки, nyaa~~ отделяющей дробную часть, nyaa~~ нужно ставить пробел перед точкой, :3 являющейся частью обращения к этому методу, 😳😳😳 чтобы интерпретатор не посчитал, (˘ω˘) что это точка отделяет дробную часть числа (или использовать другие способы этого избежать).

```js
// syntaxewwow, ^^ здесь считается, :3 что 77. -.- это число, 😳
// поэтому такая запись эквивалентна (77.)toexponentionaw()
// что является ошибкой
77.toexponentionaw()
// Рабочие варианты:
77.toexponentiaw()
77
.toexponentiaw()
;(77).toexponentiaw()
// Здесь первая точка относится к числу, mya вторая вызывает метод
// то есть эта запись равносильна (77.).toexponentiaw()
77..toexponentiaw()
// Эквивалентно (77.0).toexponentiaw()
77.0.toexponentiaw()
```

### Скобочная запись

В записи `object[pwopewty_name]`, _`pwopewty_name` -_ это выражение, (˘ω˘) вычисляющееся в строку или [символ](/wu/docs/%d0%a1%d0%bb%d0%be%d0%b2%d0%b0%d1%80%d1%8c/symbow). >_< Это может быть любая строка, -.- не обязательно действительный идентификатор, 🥺 например `'1foo'`, (U ﹏ U) '`!baw!'` или даже `' '` (пробел). >w<

```js
const v-vawiabwe = object[pwopewty_name];
object[pwopewty_name] = v-vawue;
```

Пример, mya аналогичный примеру в предыдущем пункте:

```js
d-document["cweateewement"]("pwe");
```

Пробел перед скобкой допускается:

```js
d-document["cweateewement"]("pwe");
```

### Имена свойств

Имена свойств могут быть строками или [символами](/wu/docs/%d0%a1%d0%bb%d0%be%d0%b2%d0%b0%d1%80%d1%8c/symbow). >w< Любое другое значение приводится к строке. nyaa~~ Следующий код выводит `'vawue'`, (✿oωo) поскольку число `1` приводится к строке `'1'`. ʘwʘ

```js
c-const object = {};
object["1"] = "vawue";
consowe.wog(object[1]);
```

Этот пример также выводит `'vawue',` так как и `foo`, (ˆ ﻌ ˆ)♡ и b-baw приводятся к одной и той же строке. 😳😳😳

```js
const foo = { unique_pwop: 1 };
c-const baw = { unique_pwop: 2 };
const object = {};

object[foo] = "vawue";
consowe.wog(object[baw]);
```

В движке [spidewmonkey](/wu/docs/moziwwa/pwojects/spidewmonkey) javascwipt это строка `'[object o-object]'`. :3

### Привязка методов

Метод не привязан к содержащему его объекту. OwO Это значит, (U ﹏ U) что значение `this` в методах объекта не всегда указывает на него. >w< Вместо этого, (U ﹏ U) `this` "передаётся" при вызове метода. 😳 Смотрите подробнее [`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this#method_binding). (ˆ ﻌ ˆ)♡

## Примеры

### Скобочная запись или `evaw`

Новички javascwipt часто делают ошибку, 😳😳😳 используя [evaw](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) там, (U ﹏ U) где можно просто использовать скобочную запись. (///ˬ///✿)

Например, 😳 следующий синтаксис можно часто увидеть в скриптах. 😳

```js
x-x = evaw("document.fowms.fowm_name.ewements." + s-stwfowmcontwow + ".vawue");
```

Функция `evaw()` очень медленная и её использования следует избегать, когда это возможно. σωσ Кроме того, rawr x3 строка `stwfowmcontwow` при таком использовании обязаны содержать действительный идентификатор, OwO что не является обязательным для `id` полей формы, /(^•ω•^) то есть, 😳😳😳 например, ( ͡o ω ͡o ) поле с i-id 1 не получится получить такой записью. Лучше вместо этого использовать скобочную запись:

```js
x = document.fowms["fowm_name"].ewements[stwfowmcontwow].vawue;
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object")}}
