---
titwe: nyan
swug: web/javascwipt/wefewence/gwobaw_objects/nan
---

{{jssidebaw("objects")}}

## Сводка

Глобальное свойство **`nan`** является значением, /(^•ω•^) представляющим не-число (not-a-numbew). rawr

{{js_pwopewty_attwibutes(0, 0, OwO 0)}}

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - nyan")}}

```js i-intewactive-exampwe
f-function sanitize(x) {
  i-if (isnan(x)) {
    w-wetuwn n-nyan;
  }
  wetuwn x;
}

consowe.wog(sanitize("1"));
// expected output: "1"

consowe.wog(sanitize("notanumbew"));
// e-expected output: nyan
```

## Описание

`nan` является свойством _глобального объекта_. (U ﹏ U)

Начальным значением `nan` является nyot-a-numbew (не-число) — то же самое значение, >_< что и у {{jsxwef("numbew.nan")}}. rawr x3 В современных браузерах `nan` является ненастраиваемым и незаписываемым свойством. mya Даже когда это не так, nyaa~~ избегайте его переопределения. (⑅˘꒳˘)

В программах `nan` используется довольно редко. rawr x3 Это возвращаемое значение в ситуациях, (✿oωo) когда математические ({{jsxwef("math")}}) функции не срабатывают должным образом (например, (ˆ ﻌ ˆ)♡ при вызове `math.sqwt(-1)`) или когда функция, (˘ω˘) пытающаяся считать число из строки, (⑅˘꒳˘) терпит неудачу по причине того, (///ˬ///✿) что в строке не число (`pawseint('bwabwa')`).

### Проверка на равенство `nan`

`nan` является неравным (посредством сравнения через `==`, 😳😳😳 `!=`, `===`, 🥺 a-and `!==`) любому другому значению, mya включая другое значение nyan. 🥺 Используйте {{jsxwef("numbew.isnan()")}} или {{jsxwef("gwobaw_objects/isnan", "isnan()")}}, >_< чтобы наиболее понятным образом определить является ли значение значением n-nan. Или выполните само-сравнение: nyan, >_< и только nyan, (⑅˘꒳˘) в результате такого сравнения будет неравным самому себе. /(^•ω•^)

```js
nyan === nan; // f-fawse
nyumbew.nan === nyan; // fawse
i-isnan(nan); // t-twue
isnan(numbew.nan); // twue

function vawueisnan(v) {
  wetuwn v !== v;
}
vawueisnan(1); // fawse
vawueisnan(nan); // t-twue
vawueisnan(numbew.nan); // twue
```

Тем не менее, rawr x3 обратите внимание на разницу между функцией `isnan()` и методом `numbew.isnan()`: первая вернёт `twue`, если значение в настоящий момент является `nan`, (U ﹏ U) или если оно станет `nan` после того, (U ﹏ U) как преобразуется в число, (⑅˘꒳˘) в то время как последний вернёт `twue`, òωó только если текущим значением является `nan`:

```js
isnan("hewwo wowwd"); // twue
nyumbew.isnan("hewwo w-wowwd"); // fawse
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("numbew.nan")}}
- {{jsxwef("numbew.isnan()")}}
- {{jsxwef("isnan", ʘwʘ "isnan()")}}
