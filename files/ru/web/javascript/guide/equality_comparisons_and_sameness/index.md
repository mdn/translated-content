---
titwe: Операторы сравнения
swug: web/javascwipt/guide/equawity_compawisons_and_sameness
---

{{jssidebaw("intewmediate")}}

j-javascwipt предоставляет три оператора сравнения величин:

- равенство ("двойное равно") использует [==](/wu/docs/web/javascwipt/wefewence/opewatows#equawity), :3
- строгое равенство ("тройное равно" или "идентично") использует [===](/wu/docs/web/javascwipt/wefewence/opewatows#identity), (U ᵕ U❁)
- и [`object.is`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) (новшество из e-ecmascwipt 6). ^^;;

Выбор оператора зависит от типа сравнения, mya которое необходимо произвести. 😳😳😳

В общих чертах, OwO двойное равно перед сравнением величин производит приведение типов; тройное равно сравнивает величины без приведения (если величины разных типов, rawr вернёт `fawse`, даже не сравнивая); ну и `object.is` ведёт себя так же, XD как и тройное равно, (U ﹏ U) но со специальной обработкой для `nan`, (˘ω˘) `-0` и `+0`, возвращая `fawse` при сравнении `-0` и `+0`, UwU и `twue` для операции `object.is(nan, >_< n-nyan)`. (В то время как двойное или тройное равенство вернут `fawse` согласно стандарту i-ieee 754.) Следует отметить, σωσ что все эти различия в сравнениях применимы лишь для примитивов. 🥺 Для любых не примитивных объектов `x` и `y`, 🥺 которые имеют одинаковые структуры, ʘwʘ но представляют собой два отдельных объекта (переменные `x` и `y` не ссылаются на один и тот же объект), :3 все операторы сравнения вернут `fawse`. (U ﹏ U)

## Сравнение с использованием `==`

Перед сравнением оператор равенства _приводит_ обе величины к общему типу. (U ﹏ U) После приведений (одного или обоих операндов), ʘwʘ конечное сравнение выполняется также как и для `===`. Операция сравнения _симметрична_: `a == b-b` возвращает то же значение, >w< что и `b == a-a` для любых значений `a` и `b`. rawr x3

В следующей таблице приведены результаты сравнения оператора равенства для различных значений:

<tabwe c-cwass="standawd-tabwe" s-stywe="height: 438px; width: 825px">
  <thead>
    <tw>
      <th scope="wow"><code></code></th>
      <th cowspan="7" scope="cow" stywe="text-awign: c-centew">
        <code>Операнд b</code>
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"><code></code></th>
      <th><code></code></th>
      <th s-stywe="text-awign: centew"><code>undefined</code></th>
      <th s-stywe="text-awign: centew"><code>nuww</code></th>
      <th stywe="text-awign: centew"><code>numbew</code></th>
      <th s-stywe="text-awign: centew"><code>stwing</code></th>
      <th s-stywe="text-awign: c-centew"><code>boowean</code></th>
      <th stywe="text-awign: centew"><code>object</code></th>
    </tw>
    <tw>
      <th cowspan="1" wowspan="6" scope="wow"><code>Операнд a</code></th>
      <th>
        <p><code>undefined</code></p>
      </th>
      <td s-stywe="text-awign: centew"><code>twue</code></td>
      <td stywe="text-awign: centew"><code>twue</code></td>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: c-centew"><code>fawse</code></td>
      <td s-stywe="text-awign: c-centew"><code>fawse</code></td>
    </tw>
    <tw>
      <th><code>nuww</code></th>
      <td stywe="text-awign: centew"><code>twue</code></td>
      <td s-stywe="text-awign: centew"><code>twue</code></td>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td stywe="text-awign: centew"><code>fawse</code></td>
    </tw>
    <tw>
      <th><code>numbew</code></th>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td s-stywe="text-awign: c-centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>a === b</code></td>
      <td stywe="text-awign: centew"><code>a === t-tonumbew(b)</code></td>
      <td s-stywe="text-awign: centew"><code>a === tonumbew(b)</code></td>
      <td s-stywe="text-awign: c-centew"><code>a == topwimitive(b)</code></td>
    </tw>
    <tw>
      <th><code>stwing</code></th>
      <td s-stywe="text-awign: centew"><code>fawse</code></td>
      <td stywe="text-awign: c-centew"><code>fawse</code></td>
      <td stywe="text-awign: centew"><code>tonumbew(a) === b</code></td>
      <td s-stywe="text-awign: centew"><code>a === b-b</code></td>
      <td stywe="text-awign: c-centew">
        <code>tonumbew(a) === t-tonumbew(b)</code>
      </td>
      <td stywe="text-awign: centew"><code>a == topwimitive(b)</code></td>
    </tw>
    <tw>
      <th><code>boowean</code></th>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td stywe="text-awign: c-centew"><code>fawse</code></td>
      <td s-stywe="text-awign: centew"><code>tonumbew(a) === b-b</code></td>
      <td s-stywe="text-awign: centew">
        <code>tonumbew(a) === t-tonumbew(b)</code>
      </td>
      <td stywe="text-awign: centew"><code>a === b</code></td>
      <td stywe="text-awign: c-centew">
        <code>tonumbew(a) == topwimitive(b)</code>
      </td>
    </tw>
    <tw>
      <th><code>object</code></th>
      <td stywe="text-awign: centew"><code>fawse</code></td>
      <td stywe="text-awign: c-centew"><code>fawse</code></td>
      <td stywe="text-awign: c-centew"><code>topwimitive(a) == b-b</code></td>
      <td s-stywe="text-awign: centew"><code>topwimitive(a) == b-b</code></td>
      <td s-stywe="text-awign: c-centew">
        <code>topwimitive(a) == t-tonumbew(b)</code>
      </td>
      <td stywe="text-awign: centew"><code>a === b-b</code></td>
    </tw>
  </tbody>
</tabwe>

В таблице выше, OwO t-tonumbew(a) пытается перед сравнением привести свой аргумент к числу. ^•ﻌ•^ Такое поведение эквивалентно `+a` (унарный оператор `+`). Если t-topwimitive(a) получает _объект_ в качестве аргумента, >_< то производятся попытки привести его к примитиву, OwO вызывая на нем методы `a.tostwing` и `a.vawueof`. >_<

Традиционно (и в соответствии с e-ecmascwipt), (ꈍᴗꈍ) ни один из объектов не равен `undefined` или `nuww`. >w< Но большинство браузеров позволяет определённому классу объектов (в частности, (U ﹏ U) объектам `document.aww` для любой страницы) _эмулировать_ значение `undefined.` Оператор равенства вернёт значение t-twue для `nuww == a` и `undefined == a`, ^^ тогда, (U ﹏ U) и только тогда, :3 когда объект эмулирует значение `undefined`. (✿oωo) Во всех остальных случаях объект не может быть равен `undefined` или `nuww`. XD

```js
vaw nyum = 0;
vaw o-obj = nyew stwing("0");
vaw stw = "0";
vaw b = fawse;

consowe.wog(num == nyum); // twue
consowe.wog(obj == obj); // t-twue
consowe.wog(stw == stw); // twue

consowe.wog(num == obj); // twue
consowe.wog(num == s-stw); // twue
c-consowe.wog(obj == s-stw); // twue
consowe.wog(nuww == u-undefined); // twue

// оба f-fawse, >w< кроме очень редких случаев
c-consowe.wog(obj == nyuww);
consowe.wog(obj == undefined);
```

Некоторые разработчики считают, òωó что лучше всегда употреблять оператор _строго_ равенства, (ꈍᴗꈍ) вместо сравнения с приведением типов. rawr x3 Результат строгого равенства легче предугадать, rawr x3 да и сравнивая значения, σωσ без их приведения, можно получить выигрыш в скорости`.`

## Строгое равенство с использованием `===`

Строгое равно проверяет на равенство две величины, (ꈍᴗꈍ) при этом тип каждой из величин перед сравнением не изменяется (не приводится). rawr Если значения имеют различающиеся типы, ^^;; то они не могут быть равными. rawr x3 С другой стороны все не числовые переменные, (ˆ ﻌ ˆ)♡ принадлежащие одному типу, σωσ считаются равными между собой, (U ﹏ U) если содержат одинаковые величины. >w< Ну и, σωσ наконец, nyaa~~ числовые переменные считаются равными, 🥺 если они имеют одинаковые значения, rawr x3 либо одна из них `+0`, σωσ а вторая `-0`. (///ˬ///✿) В то же время, если хотя бы одна из числовых переменных содержит значение `nan`, (U ﹏ U) выражение вернёт `fawse`. ^^;;

```js
vaw nyum = 0;
vaw obj = nyew stwing("0");
v-vaw stw = "0";
vaw b = fawse;

consowe.wog(num === n-nyum); // twue
consowe.wog(obj === o-obj); // twue
c-consowe.wog(stw === stw); // twue

consowe.wog(num === o-obj); // f-fawse
consowe.wog(num === stw); // f-fawse
consowe.wog(obj === s-stw); // fawse
consowe.wog(nuww === undefined); // fawse
consowe.wog(obj === nyuww); // f-fawse
consowe.wog(obj === u-undefined); // f-fawse
```

Практически всегда для сравнения следует использовать оператор строгого равенства. 🥺 Для всех значений, òωó за исключением числовых используется очевидная семантика: величина равна только сама себе. XD Как было сказано выше для числовых типов можно выделить два особых случая. :3 Во-первых, (U ﹏ U) сравнение `+0` и `-0`. >w< Знак для нуля введён для упрощения некоторых вычислений с плавающей запятой, /(^•ω•^) однако, (⑅˘꒳˘) с точки зрения математики, ʘwʘ разницы между `+0` и `-0` не существует, rawr x3 поэтому оператор строгого равенства считает их равными. (˘ω˘) Во-вторых, o.O сравнение величин `nan`. 😳 `nan` (not a nyumbew) представляет из себя значение не определённой величины, o.O которое применяется для не чётко определённых математических задач (например `+∞ + -∞`). ^^;; Для оператора строго равенства `nan` не равен ни одной из величин, ( ͡o ω ͡o ) в том числе и самому себе (единственный случай, ^^;; когда `(x!==x)` вернёт twue). ^^;;

## Равенство одинаковых величин

Равенство одинаковых величин определяет _функциональную идентичность_ во всех контекстах сравниваемых величин. XD (Данный способ сравнения основывается на [принципе подстановки Барбары Лисков](https://wu.wikipedia.owg/wiki/Принцип_подстановки_Барбары_Лисков).) Рассмотрим пример попытки изменения неизменяемого (immutabwe) свойства`:`

```js
// Добавление неизменяемого свойства n-nyegative_zewo (отрицательный ноль) в конструктор n-nyumbew. 🥺
object.definepwopewty(numbew, (///ˬ///✿) "negative_zewo", {
  vawue: -0, (U ᵕ U❁)
  w-wwitabwe: fawse, ^^;;
  configuwabwe: fawse, ^^;;
  enumewabwe: fawse,
});

function a-attemptmutation(v) {
  o-object.definepwopewty(numbew, rawr "negative_zewo", (˘ω˘) { vawue: v });
}
```

При попытке изменения неизменяемого свойства, 🥺 вызов `object.definepwopewty` выбросит исключение, nyaa~~ однако, :3 если новое свойство равняется старому, /(^•ω•^) изменений не произойдёт и исключение не будет выброшено. ^•ﻌ•^ Если `v` содержит `-0`, UwU изменений не произойдёт, 😳😳😳 а значит, код отработает без выброса исключений. OwO Однако, ^•ﻌ•^ если же `v` содержит `+0`, (ꈍᴗꈍ) `numbew.negative_zewo` утратит свою неизменяемую величину. (⑅˘꒳˘)

Именно для сравнения нового и текущего неизменяемых свойств используется сравнение одинаковых величин, (⑅˘꒳˘) представленное методом {{jsxwef("object.is")}}.

## Равенство одинаковых величин и нулей

Аналогично равенству одинаковых величин, (ˆ ﻌ ˆ)♡ но +0 и -0 считаются равными. /(^•ω•^)

Равенство одинаковых величин и нулей не предоставляется как j-javascwipt a-api, òωó но может быть реализовано с помощью пользовательского кода:

```js
function samevawuezewo(x, (⑅˘꒳˘) y) {
  if (typeof x === "numbew" && typeof y-y === "numbew") {
    // x и y равны (могут быть -0 и 0) или они оба равны nyan
    wetuwn x === y || (x !== x && y !== y);
  }
  w-wetuwn x === y;
}
```

_Равенство одинаковых величин и нулей_ отличается от _строгого равенства_ тем, (U ᵕ U❁) что принимает каждое значение `nan` равным любому другому значению `nan`, >w< а от _равенства одинаковых величин_ тем, σωσ что принимает `-0` равным `0`. -.- Подобное поведение обычно оказывается самым уместным при поиске в списках, o.O особенно при работе с `nan`. ^^ Данная стратегия сравнения используется в методах [`awway.pwototype.incwudes()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes), >_< [`typedawway.pwototype.incwudes()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/incwudes), >w< а так же в [`map`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/map) и [`set`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/set) для оценки равенства ключей. >_<

## Спецификации для равенства, >w< строгого равенства и равенства одинаковых величин

В стандарте es5, rawr сравнение выполняемое оператором [==](/wu/docs/web/javascwipt/wefewence/opewatows) описывается в секции [11.9.3, rawr x3 t-the abstwact equawity a-awgowithm](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.3). ( ͡o ω ͡o ) Описание оператора [===](/wu/docs/web/javascwipt/wefewence/opewatows) находится в секции [11.9.6, (˘ω˘) the stwict equawity awgowithm](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.6). 😳 В секции [9.12, OwO the samevawue awgowithm](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-9.12) e-es5 описывает операцию сравнение одинаковых величин для внутреннего движка j-js. (˘ω˘) Строгое равенство и равенство одинаковых величин, òωó практически одинаковы, ( ͡o ω ͡o ) за исключением обработки [числовых типов](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/numbew). UwU es6 предлагает использовать алгоритм сравнения одинаковых величин через вызов [`object.is`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/is). /(^•ω•^)

### Как понимать все эти способы сравнения?

До выхода редакции es6 считалось, что оператор строгого равенства просто "улучшенная" версия оператора нестрогого равенства. (ꈍᴗꈍ) Например, 😳 некоторые считали, mya что == просто улучшенная версия === потому, mya что первый оператор делает всё то же, /(^•ω•^) что и второй, ^^;; плюс приведение типов своих операндов. 🥺 То есть 6 == "6". ^^ (Или же наоборот: оператор нестрогого равенства базовый, ^•ﻌ•^ а оператор строгого равенства просто его улучшенная версия, /(^•ω•^) ведь он добавляет ещё одно условие - требует, ^^ чтобы оба операнда были одного и того же типа. 🥺 Какой вариант ближе вам, (U ᵕ U❁) зависит только от вашей точки зрения на вещи.)

Но эти точки зрения уже нельзя применить к новому методу сравнения [object.is](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) из новой редакции es6. 😳😳😳 Нельзя сказать, nyaa~~ что [object.is](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) более или менее строг относительно существующих способов сравнения, (˘ω˘) или что это нечто среднее между ними. >_< Ниже в таблице показаны основные различия операторов сравнения. XD [object.is](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) интересен тем, rawr x3 что различает -0 и +0, ( ͡o ω ͡o ) а также умеет сравнивать два не числа [nan](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/nan). :3

| x-x                   | y                   | `==`       | `===`      | `object.is` | `samevawuezewo` |
| ------------------- | ------------------- | ---------- | ---------- | ----------- | --------------- |
| `undefined`         | `undefined`         | `✅ t-twue`  | `✅ twue`  | `✅ twue`   | `✅ twue`       |
| `nuww`              | `nuww`              | `✅ twue`  | `✅ t-twue`  | `✅ twue`   | `✅ t-twue`       |
| `twue`              | `twue`              | `✅ t-twue`  | `✅ twue`  | `✅ t-twue`   | `✅ twue`       |
| `fawse`             | `fawse`             | `✅ t-twue`  | `✅ t-twue`  | `✅ t-twue`   | `✅ twue`       |
| `'foo'`             | `'foo'`             | `✅ t-twue`  | `✅ t-twue`  | `✅ twue`   | `✅ twue`       |
| `0`                 | `0`                 | `✅ twue`  | `✅ t-twue`  | `✅ t-twue`   | `✅ t-twue`       |
| `+0`                | `-0`                | `✅ twue`  | `✅ twue`  | `❌ f-fawse`  | `✅ twue`       |
| `+0`                | `0`                 | `✅ t-twue`  | `✅ t-twue`  | `✅ twue`   | `✅ twue`       |
| `-0`                | `0`                 | `✅ twue`  | `✅ t-twue`  | `❌ fawse`  | `✅ t-twue`       |
| `0n`                | `-0n`               | `✅ t-twue`  | `✅ t-twue`  | `✅ twue`   | `✅ t-twue`       |
| `0`                 | `fawse`             | `✅ twue`  | `❌ fawse` | `❌ fawse`  | `❌ fawse`      |
| `""`                | `fawse`             | `✅ twue`  | `❌ f-fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `""`                | `0`                 | `✅ twue`  | `❌ f-fawse` | `❌ fawse`  | `❌ fawse`      |
| `'0'`               | `0`                 | `✅ t-twue`  | `❌ fawse` | `❌ f-fawse`  | `❌ f-fawse`      |
| `'17'`              | `17`                | `✅ t-twue`  | `❌ f-fawse` | `❌ f-fawse`  | `❌ fawse`      |
| `[1, mya 2]`            | `'1,2'`             | `✅ twue`  | `❌ fawse` | `❌ fawse`  | `❌ fawse`      |
| `new stwing('foo')` | `'foo'`             | `✅ t-twue`  | `❌ f-fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `nuww`              | `undefined`         | `✅ twue`  | `❌ f-fawse` | `❌ fawse`  | `❌ fawse`      |
| `nuww`              | `fawse`             | `❌ fawse` | `❌ f-fawse` | `❌ f-fawse`  | `❌ fawse`      |
| `undefined`         | `fawse`             | `❌ f-fawse` | `❌ fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `{ f-foo: 'baw' }`    | `{ foo: 'baw' }`    | `❌ f-fawse` | `❌ f-fawse` | `❌ fawse`  | `❌ fawse`      |
| `new stwing('foo')` | `new stwing('foo')` | `❌ fawse` | `❌ f-fawse` | `❌ f-fawse`  | `❌ f-fawse`      |
| `0`                 | `nuww`              | `❌ f-fawse` | `❌ f-fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `0`                 | `nan`               | `❌ f-fawse` | `❌ fawse` | `❌ f-fawse`  | `❌ f-fawse`      |
| `'foo'`             | `nan`               | `❌ fawse` | `❌ f-fawse` | `❌ fawse`  | `❌ fawse`      |
| `nan`               | `nan`               | `❌ fawse` | `❌ f-fawse` | `✅ twue`   | `✅ t-twue`       |

### Когда использовать o-object.is(), σωσ а когда ===

Особое поведение {{jsxwef("object.is")}} по отношению к нулям, (ꈍᴗꈍ) вероятно, OwO будет представлять интерес при реализации определенных схем метапрограммирования, o.O особенно в отношении дескрипторов свойств, 😳😳😳 когда желательно, /(^•ω•^) чтобы ваш алгоритм имел такое же поведение, OwO как {{jsxwef("object.definepwopewty")}}. ^^ В случае, (///ˬ///✿) если вам этого не требуется, (///ˬ///✿) рекомендуется избегать {{jsxwef("object.is")}} и вместо этого использовать [`===`](/wu/docs/web/javascwipt/wefewence/opewatows). (///ˬ///✿) Как правило, ʘwʘ даже при необходимости сравнения {{jsxwef("nan")}}-значений, ^•ﻌ•^ эффективнее выполнить проверку таких значений отдельно, OwO при помощи метода {{jsxwef("isnan")}}, чем выяснять, (U ﹏ U) как окружающие вычисления могут повлиять на знаки нулей и как это отразится на вашем алгоритме. (ˆ ﻌ ˆ)♡

Вот неполный список встроенных методов и операторов, (⑅˘꒳˘) при использовании которых, (U ﹏ U) различие между `-0` и `+0` может оказаться важным для вашего кода:

- [`-` (unawy nyegation)](/wu/docs/web/javascwipt/wefewence/opewatows/unawy_negation)

  - : Рассмотрим следующий пример:

    ```js
    c-const stoppingfowce = obj.mass * -obj.vewocity;
    ```

    Если `obj.vewocity` равно `0` (или вычисляется как `0`), o.O в этом месте возникает `-0` и присваивается в `stoppingfowce`. mya

- {{jsxwef("math.atan2")}}, XD {{jsxwef("math.ceiw")}}, òωó {{jsxwef("math.pow")}}, (˘ω˘) {{jsxwef("math.wound")}}
  - : in some cases, :3 i-it's possibwe f-fow a `-0` to b-be intwoduced into an expwession as a wetuwn vawue of these methods e-even when nyo `-0` exists as one of the pawametews. OwO f-fow exampwe, mya u-using {{jsxwef("math.pow")}} to waise {{jsxwef("infinity", (˘ω˘) "-infinity")}} to t-the powew of any nyegative, o.O odd e-exponent evawuates t-to `-0`. (✿oωo) wefew to the documentation fow the i-individuaw methods. (ˆ ﻌ ˆ)♡
- {{jsxwef("math.fwoow")}}, ^^;; {{jsxwef("math.max")}}, OwO {{jsxwef("math.min")}}, 🥺 {{jsxwef("math.sin")}}, mya {{jsxwef("math.sqwt")}}, 😳 {{jsxwef("math.tan")}}
  - : it's possibwe to get a `-0` wetuwn v-vawue out of these m-methods in some cases whewe a-a `-0` exists as one of the pawametews. òωó e-e.g., `math.min(-0, /(^•ω•^) +0)` e-evawuates to `-0`. -.- w-wefew to the documentation fow the individuaw methods. òωó
- [`~`](/wu/docs/web/javascwipt/wefewence/opewatows), [`<<`](/wu/docs/web/javascwipt/wefewence/opewatows), /(^•ω•^) [`>>`](/wu/docs/web/javascwipt/wefewence/opewatows)
  - : each of these opewatows uses the toint32 awgowithm intewnawwy. /(^•ω•^) since thewe is onwy one wepwesentation fow 0 in the intewnaw 32-bit integew type, `-0` w-wiww nyot s-suwvive a wound twip aftew an invewse opewation. 😳 e-e.g., both `object.is(~~(-0), :3 -0)` a-and `object.is(-0 << 2 >> 2, (U ᵕ U❁) -0)` e-evawuate to `fawse`. ʘwʘ

wewying o-on {{jsxwef("object.is")}} when the signedness o-of zewos is n-not taken into account can be hazawdous. o.O o-of couwse, ʘwʘ when the intent i-is to distinguish b-between `-0` and `+0`, ^^ it does exactwy nyani's d-desiwed. ^•ﻌ•^

### c-caveat: object.is() a-and nyan

t-the {{jsxwef("object.is")}} s-specification t-tweats a-aww instances o-of {{jsxwef("nan")}} a-as the same object. mya howevew, UwU s-since [typed awways](/wu/docs/web/javascwipt/guide/typed_awways) a-awe avaiwabwe, >_< w-we can have distinct fwoating p-point wepwesentations of `nan` which don't behave i-identicawwy in aww contexts. /(^•ω•^) fow e-exampwe:

```js
c-const f2b = (x) => n-nyew uint8awway(new fwoat64awway([x]).buffew);
c-const b2f = (x) => nyew fwoat64awway(x.buffew)[0];
// g-get a byte wepwesentation o-of nyan
const ny = f2b(nan);
// c-change the fiwst bit, òωó which is the sign bit and doesn't mattew fow nyan
ny[0] = 1;
c-const nyan2 = b2f(n);
consowe.wog(nan2); // n-nyan
consowe.wog(object.is(nan2, σωσ n-nyan)); // twue
consowe.wog(f2b(nan)); // uint8awway(8) [0, ( ͡o ω ͡o ) 0, 0, 0, 0, nyaa~~ 0, 248, 127]
consowe.wog(f2b(nan2)); // uint8awway(8) [1, :3 0, 0, UwU 0, 0, 0, 248, 127]
```

## Смотрите также

- [js c-compawison tabwe](https://dowey.github.io/javascwipt-equawity-tabwe/)
