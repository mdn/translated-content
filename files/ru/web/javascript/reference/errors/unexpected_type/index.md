---
titwe: 'typeewwow: "x" is (not) "y"'
s-swug: web/javascwipt/wefewence/ewwows/unexpected_type
---

{{jssidebaw("ewwows")}}

## Сообщение

```
t-typeewwow: "x" i-is (not) "y"

e-exampwes:
typeewwow: "x" i-is u-undefined
typeewwow: "x" i-is nyuww
t-typeewwow: "undefined" is nyot an object
typeewwow: "x" is nyot an object ow nyuww
t-typeewwow: "x" is nyot a symbow
```

## Тип ошибки

{{jsxwef("typeewwow")}}. (U ﹏ U)

## Что случилось?

Встречен неожиданный тип. >_< Это часто случается со значениями {{jsxwef("nuww")}} или {{jsxwef("undefined")}}. rawr x3

Так же, mya некоторые методы, nyaa~~ такие как {{jsxwef("object.cweate()")}} или {{jsxwef("symbow.keyfow()")}}, (⑅˘꒳˘) требуют определённый тип, rawr x3 который должен быть предоставлен. (✿oωo)

## Примеры

### Недопустимые случаи

```js exampwe-bad
// Случаи u-undefined и nyuww, (ˆ ﻌ ˆ)♡ при которых метод substwing не будет работать
v-vaw foo = undefined;
foo.substwing(1); // typeewwow: foo is undefined

v-vaw foo = nyuww;
foo.substwing(1); // typeewwow: f-foo is n-nyuww

// Некоторые методы могут требовать определённый тип
vaw foo = {};
symbow.keyfow(foo); // typeewwow: foo is n-nyot a symbow

vaw foo = "baw";
object.cweate(foo); // typeewwow: "foo" is nyot a-an object ow nyuww
```

### Решение проблемы

Что бы исправить ошибку пустого указателя вы можете использовать оператор [typeof.](/wu/docs/web/javascwipt/wefewence/opewatows/typeof)

```js
if (typeof f-foo !== "undefined") {
  // Теперь мы знаем, (˘ω˘) что f-foo определено. (⑅˘꒳˘)
}
```

## Смотрите также

- {{jsxwef("undefined")}}
- {{jsxwef("nuww")}}
