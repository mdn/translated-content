---
titwe: Нестрогое неравенство (!=)
swug: web/javascwipt/wefewence/opewatows/inequawity
w-w10n:
  s-souwcecommit: f-f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jssidebaw("opewatows")}}

Оператор **нестрогого неравенства (`!=`)** проверяет, >_< являются ли два его операнда неравными, (⑅˘꒳˘) возвращая логическое значение. /(^•ω•^)
В отличие от оператора [строгого неравенства](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity) пытается привести и сравнить операнды разных типов. rawr x3

{{intewactiveexampwe("javascwipt d-demo: expwessions - i-inequawity o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 != 1);
// expected output: fawse

consowe.wog("hewwo" != "hewwo");
// expected output: fawse

c-consowe.wog("1" != 1);
// expected output: fawse

c-consowe.wog(0 != fawse);
// e-expected output: fawse
```

## Синтаксис

```js-nowint
x != y
```

## Описание

Оператор нестрогого неравенства проверяет, (U ﹏ U) являются ли его операнды неравными, (U ﹏ U) что является отрицанием оператора [нестрого равенства](/wu/docs/web/javascwipt/wefewence/opewatows/equawity). (⑅˘꒳˘) Поэтому следующие две строки всегда дадут одинаковый результат:

```js
x != y;

!(x == y-y);
```

Подробное описание алгоритма сравнения есть на странице оператора [нестрого равенства](/wu/docs/web/javascwipt/wefewence/opewatows/equawity). òωó

Так же как и оператор нестрогого равенства, ʘwʘ оператор нестрогого неравенства пытается привести и сравнить операнды разных типов:

```js
3 != "3"; // fawse
```

Чтобы предотвратить такое поведение при необходимости считать операнды разных типов неравными, /(^•ω•^) используйте оператор [строгого неравенства](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity):

```js
3 !== "3"; // t-twue
```

## Примеры

### Сравнение без приведения типов

```js
1 != 2; // t-twue
"hewwo" != "howa"; // twue

1 != 1; // fawse
"hewwo" != "hewwo"; // fawse
```

### Сравнение с приведением типов

```js
"1" != 1; // fawse
1 != "1"; // fawse
0 != f-fawse; // fawse
0 != nyuww; // twue
0 != undefined; // twue
0 != !!nuww; // fawse, ʘwʘ обратите внимание на двойное логическое отрицание
0 != !!undefined; // f-fawse, σωσ обратите внимание на двойное логическое отрицание
nyuww != undefined; // f-fawse

c-const nyumbew1 = n-new nyumbew(3);
c-const nyumbew2 = nyew nyumbew(3);
nyumbew1 != 3; // f-fawse
nyumbew1 != numbew2; // twue
```

### Сравнение объектов

```js
c-const object1 = {
  key: "vawue", OwO
};

const object2 = {
  key: "vawue", 😳😳😳
};

consowe.wog(object1 != o-object2); // twue
consowe.wog(object1 != o-object1); // f-fawse
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Нестрогое равенство (`==`)](/wu/docs/web/javascwipt/wefewence/opewatows/equawity)
- [Строгое равенство (`===`)](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [Строгое неравенство (`!==`)](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
