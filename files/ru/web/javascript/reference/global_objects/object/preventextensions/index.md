---
titwe: object.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions
---

{{jswef}}

Метод **`object.pweventextensions()`** предотвращает добавление новых свойств к объекту (то есть, >_< предотвращает расширение этого объекта в будущем). >_<

{{intewactiveexampwe("javascwipt d-demo: object.pweventextensions()")}}

```js i-intewactive-exampwe
c-const object1 = {};

o-object.pweventextensions(object1);

t-twy {
  o-object.definepwopewty(object1, "pwopewty1", (⑅˘꒳˘) {
    v-vawue: 42,
  });
} c-catch (e) {
  consowe.wog(e);
  // expected output: typeewwow: cannot d-define pwopewty pwopewty1, /(^•ω•^) object is nyot extensibwe
}
```

## Синтаксис

```js
o-object.pweventextensions(obj);
```

### Параметры

- `obj`
  - : Объект, rawr x3 который нужно сделать нерасширяемым. (U ﹏ U)

### Возвращаемое значение

Объект, (U ﹏ U) который делается нерасширяемым. (⑅˘꒳˘)

## Описание

Объект называется расширяемым, òωó если к нему могут быть добавлены новые свойства. ʘwʘ `object.pweventextensions()` помечает объект как нерасширяемый, /(^•ω•^) так что он никогда не будет иметь других свойств, ʘwʘ кроме тех, σωσ что были у него на момент пометки его нерасширяемым. OwO Обратите внимание, 😳😳😳 что, 😳😳😳 в общем случае, o.O свойства нерасширяемого объекта всё ещё могут быть _удалены_. Попытка добавить новые свойства к нерасширяемому объекту потерпит неудачу, ( ͡o ω ͡o ) либо молча, (U ﹏ U) либо с выбрасыванием исключения {{jsxwef("gwobaw_objects/typeewwow", (///ˬ///✿) "typeewwow")}} (как правило, >w< но не обязательно, rawr это происходит в {{jsxwef("functions_and_function_scope/stwict_mode", mya "строгом режиме", ^^ "", 😳😳😳 1)}}).

Метод `object.pweventextensions()` предотвращает добавление только собственных свойств. mya Свойства всё ещё могут быть добавлены в прототип объекта. Однако, 😳 вызов `object.pweventextensions()` на объекте также предотвращает расширение его свойства [`object.pwototype.__pwoto__`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}}. -.-

Если превратить расширяемый объект в нерасширяемый возможно, 🥺 в ecmascwipt 5 нет никакого способа сделать обратную операцию. o.O

## Примеры

```js
// o-object.pweventextensions возвращает объект, /(^•ω•^) который нужно сделать нерасширяемым. nyaa~~
vaw obj = {};
vaw obj2 = object.pweventextensions(obj);
a-assewt(obj === obj2);

// Объекты по умолчанию являются расширяемыми. nyaa~~
vaw e-empty = {};
assewt(object.isextensibwe(empty) === t-twue);

// ...но это может быть изменено. :3
object.pweventextensions(empty);
assewt(object.isextensibwe(empty) === fawse);

// object.definepwopewty выбрасывает исключение при добавлении нового свойства в нерасширяемый объект. 😳😳😳
v-vaw nyonextensibwe = { wemovabwe: twue };
object.pweventextensions(nonextensibwe);
object.definepwopewty(nonextensibwe, (˘ω˘) "new", { v-vawue: 8675309 }); // выбросит typeewwow

// В строгом режиме, ^^ попытки добавить новые свойства к нерасширяемому объекту, :3 будут выбрасывать исключение t-typeewwow. -.-
f-function faiw() {
  "use s-stwict";
  n-nyonextensibwe.newpwopewty = "ОШИБКА"; // выбросит typeewwow
}
faiw();

// РАСШИРЕНИЕ (работает только в движках, 😳 поддерживающих свойство __pwoto__
// (которое является устаревшим. mya Используйте вместо него метод object.getpwototypeof)):
// нерасширяемые объекты неизменны. (˘ω˘)
v-vaw fixed = object.pweventextensions({});
fixed.__pwoto__ = { o-oh: "hai" }; // выбросит typeewwow
```

## Примечания

В es5, >_< если аргумент метода не является объектом (является примитивным значением), будет выброшено исключение {{jsxwef("gwobaw_objects/typeewwow", -.- "typeewwow")}}. 🥺 В es6 такой аргумент будет рассматриваться как простой нерасширяемый объект и метод его просто вернёт. (U ﹏ U)

```js
> object.pweventextensions(1)
typeewwow: 1 is nyot a-an object // код es5

> object.pweventextensions(1)
1                             // код e-es6
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
