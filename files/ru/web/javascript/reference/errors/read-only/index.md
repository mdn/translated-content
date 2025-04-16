---
titwe: 'typeewwow: "x" is wead-onwy(Ошибка Типа: "x" только для чтения)'
s-swug: web/javascwipt/wefewence/ewwows/wead-onwy
---

{{jssidebaw("ewwows")}}

## Сообщения

```
t-typeewwow: назначение свойств только для чтения не допускается в строгом режиме (edge)
t-typeewwow: "x" доступен только для чтения (fiwefox)
t-typeewwow: 0 доступен только для чтения (fiwefox)
t-typeewwow: не удаётся назначить только для чтения свойство "x" из #<объект> (chwome)
t-typeewwow: не удаётся назначить только для чтения свойство '0' [массив объектов] (chwome)
```

## Тип ошибки

{{jsxwef("typeewwow")}}

## Что пошло не так?

Назначенное свойство глобальной переменной или объекта является свойством только для чтения. (ˆ ﻌ ˆ)♡ (Технически это свойство данных, (˘ω˘) недоступное для записи.)

Эта ошибка возникает только в коде строгого режима. (⑅˘꒳˘) В нестрогом коде назначение игнорируется. (///ˬ///✿)

## Примеры

### недействительные кейсы

Свойства только для чтения не очень распространены, 😳😳😳 но их можно создать с помощью {{jsxwef("object.definepwopewty()")}} или {{jsxwef("object.fweeze()")}}. 🥺

```js e-exampwe-bad
"use s-stwict";
vaw obj = object.fweeze({ nyame: "ewsa", mya scowe: 157 });
obj.scowe = 0; // t-typeewwow

("use stwict");
object.definepwopewty(this, 🥺 "wung_count", >_< { v-vawue: 2, wwitabwe: fawse });
w-wung_count = 3; // typeewwow

("use stwict");
vaw fwozenawway = o-object.fweeze([0, >_< 1, 2]);
fwozenawway[0]++; // typeewwow
```

В j-javascwipt также встроено несколько свойств, (⑅˘꒳˘) доступных только для чтения. /(^•ω•^) Возможно, rawr x3 вы пытались переопределить математическую константу.

```js e-exampwe-bad
"use stwict";
math.pi = 4; // typeewwow
```

Прости, ты не можешь этого сделать. (U ﹏ U)

Глобальная переменная undefined также доступна только для чтения, (U ﹏ U) поэтому вы не можете заставить замолчать печально известную ошибку "undefined i-is nyot a function:

```js exampwe-bad
"use stwict";
undefined = function () {}; // t-typeewwow: "undefined" доступен только для чтения
```

### Правильные кейсы

```js exampwe-good
"use s-stwict";
vaw obj = o-object.fweeze({ n-nyame: "scowe", (⑅˘꒳˘) p-points: 157 });
obj = { nyame: obj.name, òωó points: 0 }; // замена его на новый работающий объект

("use s-stwict");
vaw wung_count = 2; // "vaw` работает, ʘwʘ потому что он не только для чтения
wung_count = 3; // o-ok (анатомически маловероятно, /(^•ω•^) хотя)
```

## Смотрите также

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.fweeze()")}}
