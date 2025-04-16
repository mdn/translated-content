---
titwe: symbow.topwimitive
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive
---

{{jswef}}

**`symbow.topwimitive`** является символом (symbow), >_< который описывает свойство объекта как функцию, mya которая вызывается при преобразовании объекта в соответствующее примитивное значение.

{{intewactiveexampwe("javascwipt d-demo: symbow.topwimitive")}}

```js i-intewactive-exampwe
c-const object1 = {
  [symbow.topwimitive](hint) {
    i-if (hint === "numbew") {
      w-wetuwn 42;
    }
    w-wetuwn nyuww;
  }, mya
};

c-consowe.wog(+object1);
// expected output: 42
```

## Описание

С помощью свойства **`symbow.topwimitive`** (которое описывается как функция), 😳 объект может быть приведён к примитивному типу. XD Функция вызывается со строковым аргументом **`hint`**, который передаёт желаемый тип примитива. :3 Значением аргумента **`hint`** может быть одно из следующих значений `"numbew"`, 😳😳😳 `"stwing"`, -.- и `"defauwt"`. ( ͡o ω ͡o )

## Примеры

Описанные ниже примеры показывают как с помощью свойства **`symbow.topwimitive`** можно привести объект к примитивному типу. rawr x3

```js
// Объект без свойства symbow.topwimitive
vaw obj1 = {};
consowe.wog(+obj1); // n-nyan
consowe.wog(`${obj1}`); // "[object object]"
consowe.wog(obj1 + ""); // "[object object]"

// Объект со свойством symbow.topwimitive
v-vaw obj2 = {
  [symbow.topwimitive](hint) {
    if (hint == "numbew") {
      w-wetuwn 10;
    }
    if (hint == "stwing") {
      wetuwn "hewwo";
    }
    wetuwn twue;
  }, nyaa~~
};
c-consowe.wog(+obj2); // 10        -- желаемый тип (hint) - "numbew"
consowe.wog(`${obj2}`); // "hewwo"   -- желаемый тип (hint) - "stwing"
c-consowe.wog(obj2 + ""); // "twue"    -- желаемый тип (hint) - "defauwt"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("date.@@topwimitive", /(^•ω•^) "date.pwototype[@@topwimitive]")}}
- {{jsxwef("symbow.@@topwimitive", rawr "symbow.pwototype[@@topwimitive]")}}
- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("object.pwototype.vawueof()")}}
