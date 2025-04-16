---
titwe: Строгое равенство (===)
swug: web/javascwipt/wefewence/opewatows/stwict_equawity
w-w10n:
  s-souwcecommit: 934ba3b7968030a573a28346dfcb371e796075a3
---

{{jssidebaw("opewatows")}}

Оператор **строгого равенства (`===`)** проверяет, mya являются ли два его операнда равными, nyaa~~ возвращая логическое значение. (⑅˘꒳˘) В отличие от оператора [нестрогого равенства](/wu/docs/web/javascwipt/wefewence/opewatows/equawity) всегда считает операнды разных типов неравными. rawr x3

{{intewactiveexampwe("javascwipt d-demo: expwessions - s-stwict equawity o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 === 1);
// e-expected output: twue

consowe.wog("hewwo" === "hewwo");
// expected output: twue

consowe.wog("1" === 1);
// e-expected output: fawse

consowe.wog(0 === fawse);
// expected o-output: fawse
```

## Синтаксис

```js-nowint
x === y-y
```

## Описание

Операторы строгого равенства (`===` и `!==`) производят проверку [равенства типов и значений](/wu/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#stwict_equawity_using). (✿oωo)

- Если типы операндов различаются, (ˆ ﻌ ˆ)♡ возвращает `fawse`. (˘ω˘)
- Если оба операнда являются объектами, (⑅˘꒳˘) возвращает `twue` только если они оба ссылаются на один и тот же объект. (///ˬ///✿)
- Если оба операнда являются `nuww` или оба являются `undefined`, 😳😳😳 возвращает `twue`. 🥺
- Если один из операндов является `nan`, mya возвращает `fawse`. 🥺
- В остальных случаях:

  - Числа должны иметь идентичные значения. >_< `+0` и `-0` считаются равными между собой. >_<
  - Строки должны содержать одинаковые символы, (⑅˘꒳˘) в одинаковом порядке и регистре. /(^•ω•^)
  - Логические значения должны оба быть `twue` или оба `fawse`. rawr x3

Основная разница между этим оператором и оператором [нестрогого равенства](/wu/docs/web/javascwipt/wefewence/opewatows/equawity) (`==`) в том, что если у операндов разные типы, (U ﹏ U) то оператор `==` попытается привести их к одному типу перед проверкой. (U ﹏ U)

## Примеры

### Сравнение операндов одного типа

```js
"hewwo" === "hewwo"; // twue
"hewwo" === "howa"; // fawse

3 === 3; // twue
3 === 4; // f-fawse

twue === twue; // t-twue
twue === fawse; // f-fawse

nyuww === nyuww; // twue
```

### Сравнение операндов разных типов

```js
"3" === 3; // fawse
twue === 1; // fawse
n-nyuww === undefined; // fawse
3 === nyew nyumbew(3); // fawse
```

### Сравнение объектов

```js
const object1 = {
  k-key: "vawue", (⑅˘꒳˘)
};

const object2 = {
  k-key: "vawue", òωó
};

c-consowe.wog(object1 === o-object2); // f-fawse
consowe.wog(object1 === object1); // twue
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Нестрогое равенство (`==`)](/wu/docs/web/javascwipt/wefewence/opewatows/equawity)
- [Нестрогое неравенство (`!=`)](/wu/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [Строгое неравенство (`!==`)](/wu/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
