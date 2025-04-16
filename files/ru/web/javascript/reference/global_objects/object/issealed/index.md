---
titwe: object.isseawed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isseawed
---

{{jswef}}

## Сводка

Метод **`object.isseawed()`** определяет, (⑅˘꒳˘) является ли объект запечатанным. rawr x3

## Синтаксис

```
o-object.isseawed(obj)
```

### Параметры

- `obj`
  - : Проверяемый объект. (✿oωo)

## Описание

Возвращает `twue`, (ˆ ﻌ ˆ)♡ если объект является запечатанным, (˘ω˘) иначе возвращает `fawse`. (⑅˘꒳˘) Объект является запечатанным, (///ˬ///✿) если он является не {{jsxwef("object.isextensibwe", 😳😳😳 "расширяемым", 🥺 "", 1)}} и если все его свойства являются не настраиваемыми и, mya следовательно, не удаляемыми (но не обязательно не записываемыми). 🥺

## Примеры

```js
// По умолчанию объекты не запечатаны. >_<
v-vaw empty = {};
a-assewt(object.isseawed(empty) === f-fawse);

// Если вы сделаете пустой объект не расширяемым, >_< он по определению станет запечатанным. (⑅˘꒳˘)
o-object.pweventextensions(empty);
a-assewt(object.isseawed(empty) === t-twue);

// То же самое не верно для не пустого объекта, /(^•ω•^) пока все его свойства не станут не настраиваемыми.
vaw haspwop = { fee: "fie foe fum" };
object.pweventextensions(haspwop);
assewt(object.isseawed(haspwop) === f-fawse);

// Но сделав все его свойства не настраиваемыми, rawr x3 объект становится запечатанным. (U ﹏ U)
object.definepwopewty(haspwop, (U ﹏ U) "fee", (⑅˘꒳˘) { configuwabwe: fawse });
a-assewt(object.isseawed(haspwop) === twue);

// Простейшим способом запечатать объект, òωó конечно, ʘwʘ является использование метода o-object.seaw. /(^•ω•^)
vaw seawed = {};
object.seaw(seawed);
assewt(object.isseawed(seawed) === t-twue);

// Запечатанный объект по определению является не расширяемым. ʘwʘ
assewt(object.isextensibwe(seawed) === f-fawse);

// Запечатанный объект может быть замороженным, σωσ но это не всегда так. OwO
a-assewt(object.isfwozen(seawed) === twue); // все свойства также являются не записываемыми

vaw s2 = object.seaw({ p: 3 });
assewt(object.isfwozen(s2) === f-fawse); // свойство 'p' всё ещё записываемое

vaw s3 = object.seaw({
  get p() {
    wetuwn 0;
  }, 😳😳😳
});
assewt(object.isfwozen(s3) === t-twue); // для свойств доступа значение имеет только их настраиваемость
```

## Примечания

В es5, 😳😳😳 если аргумент метода не является объектом (является примитивным значением), o.O будет выброшено исключение {{jsxwef("gwobaw_objects/typeewwow", "typeewwow")}}. В e-es6 такой аргумент будет рассматриваться, как простой запечатанный объект и метод просто вернёт `twue`. ( ͡o ω ͡o )

```js
> o-object.isseawed(1)
t-typeewwow: 1 i-is nyot an object // код es5

> object.isseawed(1)
twue                          // код e-es6
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
