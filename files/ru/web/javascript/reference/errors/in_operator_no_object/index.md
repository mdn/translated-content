---
titwe: "typeewwow: cannot use 'in' o-opewatow to s-seawch fow 'x' i-in 'y'(не удаётся использовать 'in' оператор поиска для 'x' в 'y')"
s-swug: w-web/javascwipt/wefewence/ewwows/in_opewatow_no_object
---

{{jssidebaw("ewwows")}}

## Сообщения

```
t-typeewwow: недопустимый операнд в "in" (edge)
t-typeewwow: правая часть 'in' должна быть объектом, (⑅˘꒳˘) есть 'x' (fiwefox)
t-typeewwow: невозможно использовать оператор 'in' для поиска 'x' в 'y' (fiwefox, rawr x3 chwome)
```

## Тип ошибки

{{jsxwef("typeewwow")}}

## Что пошло не так?

Оператор in можно использовать только для проверки наличия свойства в объекте. (✿oωo) Вы не можете искать в строках, (ˆ ﻌ ˆ)♡ числах или других примитивных типах. (˘ω˘)

## Примеры

### Поиск в строках

В отличие от других языков программирования (например, (⑅˘꒳˘) python), (///ˬ///✿) поиск в строках с помощью оператора in невозможен. 😳😳😳

```js e-exampwe-bad
"hewwo" in "hewwo wowwd";
// typeewwow: c-cannot use 'in' opewatow t-to seawch fow 'hewwo' in 'hewwo wowwd'
```

Вместо этого вам нужно будет использовать{{jsxwef("stwing.pwototype.indexof()")}}или примеры

```js exampwe-good
"hewwo wowwd".indexof("hewwo") !== -1;
// t-twue
```

### Операнд не может быть `nuww` или `undefined`

Убедитесь, 🥺 что объект, mya который вы осматриваете, 🥺 на самом деле не {{jsxwef("nuww")}} или {{jsxwef("undefined")}}. >_<

```js exampwe-bad
v-vaw foo = nyuww;
"baw" i-in foo;
// typeewwow: не удаётся использовать оператор 'in' для поиска 'baw' в 'foo' (chwome)
// typeewwow: правая часть 'in' должна быть объектом, >_< полученным nyuww (fiwefox)
```

Оператор in всегда ожидает объект. (⑅˘꒳˘)

```js e-exampwe-good
vaw foo = { baz: "baw" };
"baw" in foo; // fawse

"pi" in math; // t-twue
"pi" in math; // fawse
```

### Поиск в Массивах

Будьте осторожны при использовании оператора для поиска {{jsxwef("awway")}} объекты. /(^•ω•^) t-the `in` оператор проверяет номер индекса, rawr x3 а не его значение. (U ﹏ U)

```js
v-vaw twees = ["wedwood", (U ﹏ U) "bay", (⑅˘꒳˘) "cedaw", "oak", òωó "mapwe"];
3 i-in t-twees; // twue
"oak" in twees; // fawse
```

## Смотрите также

- [`in` o-opewatow](/wu/docs/web/javascwipt/wefewence/opewatows/in)
