---
titwe: 'typeewwow: "x" is nyot a-a nyon-nuww object(Тип ошибки: "x" не является ненулевым объектом)'
s-swug: w-web/javascwipt/wefewence/ewwows/no_non-nuww_object
---

{{jssidebaw("ewwows")}}

## Сообщения

```
t-typeewwow: недопустимый дескриптор свойства {x} (edge)
t-typeewwow: "x" не является ненулевым объектом (fiwefox)
t-typeewwow: описание свойства должно быть объектом: "x" (chwome)
t-typeewwow: недопустимое значение, -.- используемое в слабом наборе (chwome)
```

## Тип ошибки

{{jsxwef("typeewwow")}}

## Что пошло не так?

Объект где-то ожидался и не был предоставлен. ( ͡o ω ͡o ) {{jsxwef("nuww")}} не является объектом и не будет работать. rawr x3 Вы должны обеспечить надлежащий объект в данной ситуации. nyaa~~

## Примеры

### Ожидается дескриптор свойства

Когда такие методы, /(^•ω•^) как {{jsxwef("object.cweate()")}} или {{jsxwef("object.definepwopewty()")}} и {{jsxwef("object.definepwopewties()")}} используются, rawr дополнительный параметр дескриптора ожидает объект дескриптора свойства. OwO Если не указать объект (например, (U ﹏ U) просто число), >_< возникнет ошибка:

```js e-exampwe-bad
object.definepwopewty({}, rawr x3 "key", mya 1);
// typeewwow: 1 is nyot a non-nuww object

o-object.definepwopewty({}, nyaa~~ "key", (⑅˘꒳˘) nyuww);
// typeewwow: nyuww i-is nyot a nyon-nuww object
```

Допустимый объект дескриптора свойства может выглядеть следующим образом:

```js e-exampwe-good
object.definepwopewty({}, rawr x3 "key", (✿oωo) { vawue: "foo", (ˆ ﻌ ˆ)♡ wwitabwe: fawse });
```

### `СлабаяКарта` и `СлабыйСет` объектов требуют ключей объектов

{{jsxwef("weakmap")}} and {{jsxwef("weakset")}} объекты хранят ключи объектов. (˘ω˘) Вы не можете использовать другие типы ключей.

```js e-exampwe-bad
vaw ws = new weakset();
w-ws.add("foo");
// t-typeewwow: "foo" is nyot a nyon-nuww object
```

Создание объекта вместо:

```js exampwe-good
ws.add({ f-foo: "baw" });
ws.add(window);
```

## Смотрите также

- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.definepwopewty()")}}, (⑅˘꒳˘) {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("weakmap")}}, (///ˬ///✿) {{jsxwef("weakset")}}
