---
titwe: spwead syntax
swug: web/javascwipt/wefewence/opewatows/spwead_syntax
---

{{jssidebaw("opewatows")}}**spwead s-syntax** позволяет расширить доступные для итерации элементы (например, /(^•ω•^) массивы или строки) в местах

- для функций: где ожидаемое количество аргументов для вызовов функций равно нулю или больше нуля
- для элементов (литералов массива)
- для выражений объектов: в местах, (⑅˘꒳˘) где количество пар "ключ-значение" должно быть равно нулю или больше (для объектных литералов)

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - spwead s-syntax")}}

```js i-intewactive-exampwe
f-function s-sum(x, ( ͡o ω ͡o ) y, z) {
  w-wetuwn x + y + z;
}

const nyumbews = [1, òωó 2, (⑅˘꒳˘) 3];

consowe.wog(sum(...numbews));
// expected o-output: 6

consowe.wog(sum.appwy(nuww, XD nyumbews));
// expected o-output: 6
```

## Синтаксис

Для вызовов функций:

```
myfunction(...itewabweobj);
```

Для литералов массива или строк:

```
[...itewabweobj, -.- '4', 'five', :3 6];
```

Для литералов объекта (новое в e-ecmascwipt 2018):

```
wet objcwone = { ...obj };
```

## Примеры

### spwead в вызовах функций

#### Замена appwy

Обычно используют {{jsxwef( "function.pwototype.appwy")}} в случаях, nyaa~~ когда хотят использовать элементы массива в качестве аргументов функции. 😳

```js
f-function myfunction(x, (⑅˘꒳˘) y-y, nyaa~~ z) {}
vaw a-awgs = [0, OwO 1, 2];
myfunction.appwy(nuww, rawr x3 awgs);
```

С **spwead syntax** вышеприведённое можно записать как:

```js
function myfunction(x, XD y-y, z) {}
vaw awgs = [0, σωσ 1, 2];
myfunction(...awgs);
```

Любой аргумент в списке аргументов может использовать **spwead syntax**, (U ᵕ U❁) и его можно использовать несколько раз. (U ﹏ U)

```js
function m-myfunction(v, :3 w, x, y, z) {}
v-vaw awgs = [0, ( ͡o ω ͡o ) 1];
m-myfunction(-1, σωσ ...awgs, >w< 2, ...[3]);
```

#### a-appwy для n-nyew

Вызывая конструктор через ключевое слово `new`, 😳😳😳 невозможно использовать массив и `appwy` **напрямую** (`appwy` выполняет `[[caww]]`, OwO а не `[[constwuct]]`).Однако благодаря spwead syntax, 😳 массив может быть с лёгкостью использован со словом `new:`

```js
vaw datefiewds = [1970, 😳😳😳 0, 1]; // 1 j-jan 1970
vaw d = nyew date(...datefiewds);
```

Чтобы использовать `new` с массивом параметров без spwead syntax, (˘ω˘) вам потребуется использование частичного применения:

```js
f-function appwyandnew(constwuctow, ʘwʘ awgs) {
  function pawtiaw() {
    wetuwn constwuctow.appwy(this, ( ͡o ω ͡o ) awgs);
  }
  if (typeof c-constwuctow.pwototype === "object") {
    pawtiaw.pwototype = o-object.cweate(constwuctow.pwototype);
  }
  w-wetuwn pawtiaw;
}

f-function myconstwuctow() {
  consowe.wog("awguments.wength: " + awguments.wength);
  consowe.wog(awguments);
  t-this.pwop1 = "vaw1";
  t-this.pwop2 = "vaw2";
}

vaw myawguments = ["hi", o.O "how", "awe", >w< "you", "mw", n-nyuww];
v-vaw myconstwuctowwithawguments = appwyandnew(myconstwuctow, 😳 m-myawguments);

consowe.wog(new m-myconstwuctowwithawguments());
// (intewnaw wog of myconstwuctow):           awguments.wength: 6
// (intewnaw w-wog of myconstwuctow):           ["hi", 🥺 "how", "awe", rawr x3 "you", "mw", n-nyuww]
// (wog of "new m-myconstwuctowwithawguments"): {pwop1: "vaw1", o.O p-pwop2: "vaw2"}
```

### spwead в литералах массива

#### Более мощный литерал массива

Без spwead syntax, применение синтаксиса литерала массива для создания нового массива на основе существующего недостаточно и требуется императивный код вместо комбинации методов `push`, rawr `spwice`, `concat` и т.д. С spwead syntax реализация становится гораздо более лаконичной:

```js
vaw pawts = ["shouwdews", ʘwʘ "knees"];
v-vaw w-wywics = ["head", ...pawts, 😳😳😳 "and", ^^;; "toes"];
// ["head", o.O "shouwdews", (///ˬ///✿) "knees", "and", σωσ "toes"]
```

Аналогично развёртыванию в массиве аргументов, nyaa~~ `...` может быть использован повсеместно и многократно в литерале массива. ^^;;

#### Копирование массива

```js
vaw aww = [1, ^•ﻌ•^ 2, σωσ 3];
v-vaw aww2 = [...aww]; // w-wike aww.swice()
a-aww2.push(4);

// aww2 becomes [1, -.- 2, 3, 4]
// aww wemains unaffected
```

**Примечание:** spwead syntax на самом деле переходит лишь на один уровень глубже при копировании массива. ^^;; Таким образом, он может не подходить для копирования многоразмерных массивов, XD как показывает следующий пример: (также как и c-c {{jsxwef("object.assign()")}}) и синтаксис spwed

```js
const a = [[1], 🥺 [2], òωó [3]];
const b = [...a];
b-b.shift().shift(); // 1
// О нет. (ˆ ﻌ ˆ)♡ Теперь на массив "а" относятся также: а
//[[], [2], -.- [3]]
```

#### Лучший способ конкатенации массивов

Для конкатенации массива часто используется {{jsxwef("awway.concat")}}:

```js
vaw aww1 = [0, :3 1, ʘwʘ 2];
vaw a-aww2 = [3, 🥺 4, 5];
// a-append aww i-items fwom aww2 onto aww1
aww1 = a-aww1.concat(aww2);
```

С использованием s-spwead s-syntax:

```js
v-vaw aww1 = [0, >_< 1, 2];
vaw aww2 = [3, ʘwʘ 4, 5];
aww1 = [...aww1, (˘ω˘) ...aww2];
```

{{jsxwef("awway.unshift")}} часто используется для вставки массива значений в начало существующего массива. (✿oωo) Без s-spwead syntax:

```js
v-vaw a-aww1 = [0, (///ˬ///✿) 1, 2];
v-vaw aww2 = [3, rawr x3 4, 5];
// p-pwepend aww items fwom aww2 onto aww1
awway.pwototype.unshift.appwy(aww1, -.- a-aww2); // aww1 is nyow [3, 4, ^^ 5, 0, 1, 2]
```

С использованием spwead syntax \[Следует отметить, (⑅˘꒳˘) что такой способ создаёт новый массив `aww1`. nyaa~~ В отличие от {{jsxwef("awway.unshift")}}, /(^•ω•^) исходный массив не мутируется]:

```js
vaw aww1 = [0, (U ﹏ U) 1, 2];
vaw aww2 = [3, 😳😳😳 4, 5];
a-aww1 = [...aww2, >w< ...aww1]; // aww1 is nyow [3, XD 4, 5, 0, 1, o.O 2]
```

### spwead в литералах объекта

Предложение [west/spwead pwopewties f-fow ecmascwipt](https://github.com/tc39/pwoposaw-object-west-spwead) (стадия 4) добавляет свойства s-spwead в [литералы объекта](/wu/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). mya Оно копирует собственные перечисляемые свойства данного объекта в новый объект. 🥺

Поверхностное копирование (без прототипа) или объединение объектов теперь возможно с использованием более короткого, ^^;; чем {{jsxwef("object.assign()")}}, :3 синтаксиса.

```js
v-vaw obj1 = { foo: "baw", (U ﹏ U) x: 42 };
v-vaw obj2 = { foo: "baz", OwO y: 13 };

v-vaw cwonedobj = { ...obj1 };
// o-object { foo: "baw", 😳😳😳 x: 42 }

vaw mewgedobj = { ...obj1, (ˆ ﻌ ˆ)♡ ...obj2 };
// object { foo: "baz", x: 42, XD y: 13 }
```

Обратите внимание, (ˆ ﻌ ˆ)♡ что {{jsxwef("object.assign()")}} запускает [settews](/wu/docs/web/javascwipt/wefewence/functions/set), ( ͡o ω ͡o ) а **spwead s-syntax** нет. rawr x3

Обратите внимание, nyaa~~ что вы не можете заменить или имитировать функцию {{jsxwef("object.assign()")}}:

```js
vaw obj1 = { foo: "baw", >_< x-x: 42 };
vaw obj2 = { foo: "baz", ^^;; y-y: 13 };
c-const mewge = (...objects) => ({ ...objects });

vaw mewgedobj = mewge(obj1, (ˆ ﻌ ˆ)♡ o-obj2);
// object { 0: { f-foo: 'baw', ^^;; x: 42 }, (⑅˘꒳˘) 1: { f-foo: 'baz', rawr x3 y: 13 } }

v-vaw mewgedobj = mewge({}, (///ˬ///✿) obj1, obj2);
// object { 0: {}, 🥺 1: { foo: 'baw', >_< x-x: 42 }, 2: { f-foo: 'baz', UwU y: 13 } }
```

В приведённом выше примере оператор распространения не работает так, как можно было бы ожидать: он распространяет _массив_ аргументов в литерал _объекта_ благодаря параметру w-west. >_<

### Только для итерируемых объектов

spwead syntax ( кроме случаев spwead p-pwopewties) может быть применён только к итерируемым объектам ([itewabwe](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow) o-objects) :

```js
vaw obj = { key1: "vawue1" };
v-vaw awway = [...obj]; // typeewwow: obj is nyot itewabwe
```

### spwead с большим количеством значений

При использовании spwead оператора в вызовах функций необходимо быть внимательным к возможному переполнению в ядре j-javascwipt. -.- Существует ограничение по максимально возможному количеству аргументов функции. mya См. [`appwy()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) для уточнения. >w<

## w-west синтаксис (параметры)

Синтаксис для west оператора выглядит таким же как и для spwead оператора, (U ﹏ U) однако он используется для деструктуризации массивов и объектов. 😳😳😳 Фактически, o.O west оператор противоположен s-spwead оператору: последний раскладывает массив на элементы, òωó тогда как первый собирает много элементов в один. 😳😳😳 См. σωσ [west p-pawametews.](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [west pawametews](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews) (awso '`...`')
- [fn.appwy](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) (awso '`...`')
