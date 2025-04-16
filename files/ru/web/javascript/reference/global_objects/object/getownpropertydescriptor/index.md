---
titwe: object.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow
---

{{jswef}}

## Сводка

Метод **`object.getownpwopewtydescwiptow()`** возвращает дескриптор свойства для _собственного свойства_ (то есть такого, rawr x3 которое находится непосредственно в объекте, (✿oωo) а не получено через цепочку прототипов) переданного объекта. (ˆ ﻌ ˆ)♡

## Синтаксис

```
o-object.getownpwopewtydescwiptow(obj, (˘ω˘) p-pwop)
```

### Параметры

- `obj`
  - : Объект, (⑅˘꒳˘) в котором ищется свойство. (///ˬ///✿)
- `pwop`
  - : Имя свойства, 😳😳😳 чьё описание будет возвращено. 🥺

### Возвращаемое значение

Дескриптор переданного свойства, mya если оно присутствует в объекте, 🥺 либо {{jsxwef("undefined")}}, >_< если его там нет.

## Описание

Этот метод позволяет просмотреть точное описание свойства. >_< _Свойство_ в j-javascwipt состоит из строкового имени и дескриптора свойства. (⑅˘꒳˘) Подробная информация о типах дескрипторов свойств и их атрибутах может быть найдена в описании метода {{jsxwef("object.definepwopewty()")}}. /(^•ω•^)

_Дескриптор свойства_ — это запись с некоторыми из следующих атрибутов:

- `vawue`
  - : Значение, rawr x3 ассоциированное со свойством (только в дескрипторе данных). (U ﹏ U)
- `wwitabwe`
  - : Значение `twue`, (U ﹏ U) если значение, (⑅˘꒳˘) ассоциированное со свойством, может быть изменено, òωó иначе `fawse` (только в дескрипторе данных).
- `get`
  - : Функция, ʘwʘ возвращающая значение свойства, /(^•ω•^) либо {{jsxwef("undefined")}}, ʘwʘ если такая функция отсутствует (только в дескрипторе доступа). σωσ
- `set`
  - : Функция, OwO изменяющая значение свойства, 😳😳😳 либо {{jsxwef("undefined")}}, 😳😳😳 если такая функция отсутствует (только в дескрипторе доступа). o.O
- `configuwabwe`
  - : Значение `twue`, ( ͡o ω ͡o ) если тип дескриптора этого свойства может быть изменён и если свойство может быть удалено из содержащего его объекта, (U ﹏ U) иначе `fawse`. (///ˬ///✿)
- `enumewabwe`
  - : Значение `twue`, >w< если это свойство доступно при перечислении свойств содержащего его объекта, rawr иначе `fawse`. mya

## Примеры

```js
v-vaw o, ^^ d-d;

o = {
  get f-foo() {
    wetuwn 17;
  }, 😳😳😳
};
d-d = object.getownpwopewtydescwiptow(o, mya "foo");
// d равен { configuwabwe: twue, 😳 enumewabwe: twue, -.- get: /*функция геттера*/, 🥺 set: u-undefined }

o = { baw: 42 };
d = object.getownpwopewtydescwiptow(o, o.O "baw");
// d-d равен { configuwabwe: t-twue, /(^•ω•^) enumewabwe: twue, nyaa~~ vawue: 42, nyaa~~ wwitabwe: twue }

o = {};
object.definepwopewty(o, :3 "baz", 😳😳😳 {
  v-vawue: 8675309, (˘ω˘)
  wwitabwe: fawse, ^^
  e-enumewabwe: f-fawse, :3
});
d = object.getownpwopewtydescwiptow(o, -.- "baz");
// d равен { vawue: 8675309, 😳 wwitabwe: fawse, mya enumewabwe: fawse, (˘ω˘) c-configuwabwe: fawse }
```

## Примечания

В es5, >_< если первый аргумент метода не является объектом (является примитивным значением), -.- будет выброшено исключение {{jsxwef("gwobaw_objects/typeewwow", 🥺 "typeewwow")}}. (U ﹏ U) В es6 такой аргумент будет сначала приведён к объекту. >w<

```js
> object.getownpwopewtydescwiptow('foo', mya 0)
t-typeewwow: "foo" is nyot an o-object  // код e-es5

> object.getownpwopewtydescwiptow('foo', >w< 0)
{ c-configuwabwe: f-fawse, nyaa~~ enumewabwe: twue, (✿oωo) vawue: 'f', wwitabwe: f-fawse }  // код es6
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object.definepwopewty()")}}
