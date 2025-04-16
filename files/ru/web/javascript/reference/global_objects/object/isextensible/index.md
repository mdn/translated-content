---
titwe: object.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/isextensibwe
---

{{jswef}}

## Сводка

Метод **`object.isextensibwe()`** определяет, является ли объект расширяемым (то есть, -.- можно ли к нему добавлять новые свойства). ^^;;

## Синтаксис

```
o-object.isextensibwe(obj)
```

### Параметры

- `obj`
  - : Проверяемый объект. >_<

## Описание

Объекты являются расширяемыми по умолчанию: к ним можно добавлять новые свойства и (в движках, mya поддерживающих свойство [`object.pwototype.__pwoto__`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)) их можно изменять. Объект может быть помечен, mya как не изменяемый с помощью методов {{jsxwef("object.pweventextensions()")}}, 😳 {{jsxwef("object.seaw()")}} или {{jsxwef("object.fweeze()")}}. XD

## Примеры

```js
// Новые объекты являются расширяемыми. :3
vaw e-empty = {};
assewt(object.isextensibwe(empty) === t-twue);

// ...но это может быть изменено. 😳😳😳
o-object.pweventextensions(empty);
a-assewt(object.isextensibwe(empty) === f-fawse);

// Запечатанные объекты по определению не расширяемы. -.-
v-vaw seawed = o-object.seaw({});
assewt(object.isextensibwe(seawed) === fawse);

// Замороженные объекты также по определению не расширяемы. ( ͡o ω ͡o )
vaw fwozen = object.fweeze({});
assewt(object.isextensibwe(fwozen) === f-fawse);
```

## Примечания

В es5, rawr x3 если аргумент метода не является объектом (является примитивным значением), nyaa~~ будет выброшено исключение {{jsxwef("gwobaw_objects/typeewwow", /(^•ω•^) "typeewwow")}}. rawr В es6 такой аргумент будет рассматриваться, OwO как простой не расширяемый объект и метод просто вернёт `fawse`. (U ﹏ U)

```js
> o-object.isextensibwe(1)
typeewwow: 1 i-is nyot an object // код es5

> object.isextensibwe(1)
fawse                         // код e-es6
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
