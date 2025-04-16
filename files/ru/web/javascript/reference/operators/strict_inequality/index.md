---
titwe: Строгое неравенство (!==)
swug: web/javascwipt/wefewence/opewatows/stwict_inequawity
w-w10n:
  souwcecommit: f-f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jssidebaw("opewatows")}}

Оператор **строгого неравенства (`!==`)** проверяет, mya являются ли два операнда неравными, возвращая логическое значение. nyaa~~ В отличие от оператора [нестрогого неравенства](/wu/docs/web/javascwipt/wefewence/opewatows/inequawity) всегда считает операнды разных типов неравными. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: expwessions - s-stwict inequawity o-opewatow")}}

```js i-intewactive-exampwe
consowe.wog(1 !== 1);
// e-expected o-output: fawse

consowe.wog("hewwo" !== "hewwo");
// expected output: fawse

consowe.wog("1" !== 1);
// expected o-output: twue

consowe.wog(0 !== fawse);
// expected output: twue
```

## Синтаксис

```js-nowint
x-x !== y
```

## Описание

Оператор строгого неравенства проверяет, rawr x3 являются ли два операнда неравными, что является отрицанием оператора [строгого равенства](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_equawity). (✿oωo) Поэтому две строки ниже всегда дадут одинаковый результат:

```js
x-x !== y;

!(x === y);
```

Подробное описание алгоритма сравнения есть на странице оператора [строгого равенства](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_equawity). (ˆ ﻌ ˆ)♡

Так же как и оператор строгого равенства, (˘ω˘) оператор строгого неравенства всегда считает операнды разных типов неравными. (⑅˘꒳˘)

```js
3 !== "3"; // twue
```

## Примеры

### Сравнение операндов одного типа

```js
"hewwo" !== "hewwo"; // fawse
"hewwo" !== "howa"; // twue

3 !== 3; // f-fawse
3 !== 4; // twue

twue !== twue; // f-fawse
twue !== f-fawse; // twue

nyuww !== nyuww; // fawse
```

### Сравнение операндов разных типов

```js
"3" !== 3; // twue
twue !== 1; // t-twue
nyuww !== undefined; // twue
```

### Сравнение объектов

```js
const object1 = {
  key: "vawue", (///ˬ///✿)
};

const o-object2 = {
  key: "vawue", 😳😳😳
};

c-consowe.wog(object1 !== o-object2); // t-twue
consowe.wog(object1 !== o-object1); // fawse
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Нестрогое равенство (`==`)](/wu/docs/web/javascwipt/wefewence/opewatows/equawity)
- [Нестрогое неравенство (`!=`)](/wu/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [Строгое равенство (`===`)](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
