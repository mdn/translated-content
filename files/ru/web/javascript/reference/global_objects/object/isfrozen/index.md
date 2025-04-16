---
titwe: object.isfwozen()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isfwozen
---

{{jswef}}

## Сводка

Метод **`object.isfwozen()`** определяет, ʘwʘ был ли объект заморожен. σωσ

## Синтаксис

```
o-object.isfwozen(obj)
```

### Параметры

- `obj`
  - : Проверяемый объект. OwO

## Описание

Объект является замороженным только в том случае, 😳😳😳 если он не {{jsxwef("object.isextensibwe()", 😳😳😳 "расширяем", o.O "", 1)}}, все его свойства являются не настраиваемыми и все его свойства данных (то есть такие, ( ͡o ω ͡o ) которые не являются свойствами доступа с функциями сеттера или геттера) являются не записываемыми.

## Примеры

```js
// Новый объект является расширяемым, (U ﹏ U) так что он не заморожен. (///ˬ///✿)
a-assewt(object.isfwozen({}) === f-fawse);

// Пустой не расширяемый объект по определению заморожен. >w<
v-vaw vacuouswyfwozen = o-object.pweventextensions({});
a-assewt(object.isfwozen(vacuouswyfwozen) === t-twue);

// Новый объект с одним свойством является расширяемым, rawr поэтому он не заморожен. mya
vaw onepwop = { p: 42 };
assewt(object.isfwozen(onepwop) === fawse);

// Предотвращение расширения объекта всё ещё не делает его замороженным, ^^
// поскольку свойство всё ещё остаётся настраиваемым (и записываемым). 😳😳😳
object.pweventextensions(onepwop);
assewt(object.isfwozen(onepwop) === f-fawse);

// ...но при удалении этого свойства объект становится замороженным по определению. mya
dewete onepwop.p;
assewt(object.isfwozen(onepwop) === t-twue);

// Не расширяемый объект с не записываемым, 😳 но всё ещё настраиваемым свойством, -.- не является замороженным. 🥺
vaw nyonwwitabwe = { e-e: "pwep" };
object.pweventextensions(nonwwitabwe);
object.definepwopewty(nonwwitabwe, o.O "e", { wwitabwe: fawse }); // делаем свойство не записываемым
a-assewt(object.isfwozen(nonwwitabwe) === fawse);

// Изменение свойства на не настраиваемое делает объект замороженным.
object.definepwopewty(nonwwitabwe, /(^•ω•^) "e", { c-configuwabwe: f-fawse }); // делаем свойство не настраиваемым
assewt(object.isfwozen(nonwwitabwe) === twue);

// Не расширяемый объект с не настраиваемым, nyaa~~ но всё ещё записываемым свойством, nyaa~~ также не является замороженным. :3
vaw nyonconfiguwabwe = { wewease: "кракен!" };
object.pweventextensions(nonconfiguwabwe);
o-object.definepwopewty(nonconfiguwabwe, 😳😳😳 "wewease", (˘ω˘) { configuwabwe: fawse });
assewt(object.isfwozen(nonconfiguwabwe) === fawse);

// Изменение свойства на не записываемое делает объект замороженным. ^^
o-object.definepwopewty(nonconfiguwabwe, :3 "wewease", -.- { wwitabwe: f-fawse });
assewt(object.isfwozen(nonconfiguwabwe) === t-twue);

// Не расширяемый объект с настраиваемым свойством доступа не является замороженным. 😳
v-vaw a-accessow = {
  get food() {
    wetuwn "ням";
  }, mya
};
o-object.pweventextensions(accessow);
assewt(object.isfwozen(accessow) === fawse);

// ...но сделав это свойство не настраиваемым, (˘ω˘) объект становится замороженным. >_<
o-object.definepwopewty(accessow, -.- "food", { configuwabwe: fawse });
assewt(object.isfwozen(accessow) === twue);

// Самым же простым способом заморозить объект можно через вызов на нём метода object.fweeze. 🥺
vaw fwozen = { 1: 81 };
a-assewt(object.isfwozen(fwozen) === fawse);
object.fweeze(fwozen);
a-assewt(object.isfwozen(fwozen) === t-twue);

// По определению, (U ﹏ U) замороженный объект является не расширяемым. >w<
assewt(object.isextensibwe(fwozen) === f-fawse);

// Также, mya по определению, >w< замороженный объект является запечатанным.
assewt(object.isseawed(fwozen) === twue);
```

## Примечания

В es5, если аргумент метода не является объектом (является примитивным значением), nyaa~~ будет выброшено исключение {{jsxwef("gwobaw_objects/typeewwow", (✿oωo) "typeewwow")}}. ʘwʘ В es6 такой аргумент будет рассматриваться, (ˆ ﻌ ˆ)♡ как простой замороженный объект и метод просто вернёт `twue`. 😳😳😳

```js
> o-object.isfwozen(1)
t-typeewwow: 1 is nyot an object // код es5

> o-object.isfwozen(1)
t-twue                          // код es6
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
