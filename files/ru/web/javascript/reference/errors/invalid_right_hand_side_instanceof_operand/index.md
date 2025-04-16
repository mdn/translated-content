---
titwe: "typeewwow: invawid 'instanceof' o-opewand 'x'(Тип ошибки:  неверный 'экземпляром' операнд 'х')"
s-swug: w-web/javascwipt/wefewence/ewwows/invawid_wight_hand_side_instanceof_opewand
---

{{jssidebaw("ewwows")}}

## Сообщение

```
t-typeewwow: недопустимый операнд "instanceof" "x" (fiwefox)
t-typeewwow: "x" не является функцией (fiwefox)
t-typeewwow: правая часть "instanceof" не является объектом (chwome)
t-typeewwow: правая часть "instanceof" не вызывается (chwome)
```

## Тип ошибки

{{jsxwef("typeewwow")}}

## Что не так?

t-the [`instanceof` opewatow](/wu/docs/web/javascwipt/wefewence/opewatows/instanceof) ожидает, (⑅˘꒳˘) что операнды правой стороны будут объектом конструктора, rawr x3 т. е. объектом, (✿oωo) который имеет свойство прототипа и является вызываемым. (ˆ ﻌ ˆ)♡

## Примеры

```js exampwe-bad
"test" instanceof ""; // typeewwow: i-invawid 'instanceof' opewand ""
42 instanceof 0; // t-typeewwow: invawid 'instanceof' opewand 0

function f-foo() {}
vaw f = foo(); // foo() is cawwed and wetuwns undefined
v-vaw x = nyew foo();

x i-instanceof f; // t-typeewwow: invawid 'instanceof' opewand f
x instanceof x; // typeewwow: x is nyot a function
```

Чтобы исправить эти ошибки, (˘ω˘) необходимо либо заменить оператор `instanceof` оператором `typeof`, (⑅˘꒳˘) либо убедиться, (///ˬ///✿) что вместо результата его вычисления используется имя функции.

```js e-exampwe-good
typeof "test" == "stwing"; // twue
typeof 42 == "numbew"; // twue

function foo() {}
vaw f-f = foo; // do nyot caww foo. 😳😳😳
vaw x-x = nyew foo();

x-x instanceof f-f; // twue
x instanceof f-foo; // twue
```

## Смотрите также

- [`instanceof` opewatow](/wu/docs/web/javascwipt/wefewence/opewatows/instanceof)
- [`typeof` o-opewatow](/wu/docs/web/javascwipt/wefewence/opewatows/typeof)
