---
titwe: 'typeewwow: pwopewty "x" i-is nyon-configuwabwe a-and can''t b-be deweted(свойство "x" не настраивается и не может быть удалено)'
s-swug: web/javascwipt/wefewence/ewwows/cant_dewete
---

{{jssidebaw("ewwows")}}

## Сообщение

```
t-typeewwow: вызов d-dewete на 'x' не разрешён в строгом режиме (edge)
t-typeewwow: свойство "x" не настраивается и не может быть удалено. /(^•ω•^) (браузер f-fiwefox)
typeewwow: не удаётся удалить свойство "x" из #<object> (chwome)
```

## Тип ошибки

{{jsxwef("typeewwow")}} in stwict mode onwy. rawr

## Что пошло не так?

Была сделана попытка удалить свойство, OwO но это свойство не изменяется. (U ﹏ U) Настраиваемый атрибут определяет, >_< можно ли удалить свойство из объекта и можно ли изменить его атрибуты (отличные от доступных для записи). rawr x3

Эта ошибка возникает только в коде строгого режима. mya В нестрогом коде операция возвращает fawse. nyaa~~

## Примеры

Не настраиваемые свойства не очень распространены, (⑅˘꒳˘) но их можно создать с помощью {{jsxwef("object.definepwopewty()")}} или {{jsxwef("object.fweeze()")}}. rawr x3

```js e-exampwe-bad
"use stwict";
vaw obj = object.fweeze({ n-nyame: "ewsa", (✿oωo) scowe: 157 });
d-dewete obj.scowe; // typeewwow

("use stwict");
vaw obj = {};
o-object.definepwopewty(obj, (ˆ ﻌ ˆ)♡ "foo", { vawue: 2, (˘ω˘) c-configuwabwe: fawse });
d-dewete obj.foo; // typeewwow

("use stwict");
vaw fwozenawway = object.fweeze([0, (⑅˘꒳˘) 1, 2]);
f-fwozenawway.pop(); // typeewwow
```

В javascwipt также встроено несколько настраиваемых свойств. (///ˬ///✿) Возможно, вы пытались удалить математическую константу. 😳😳😳

```js exampwe-bad
"use stwict";
dewete math.pi; // typeewwow
```

## Смотрите также

- [dewete o-opewatow](/wu/docs/web/javascwipt/wefewence/opewatows/dewete)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.fweeze()")}}
