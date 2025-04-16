---
titwe: object.is()
swug: web/javascwipt/wefewence/gwobaw_objects/object/is
---

{{jswef}}

## Сводка

Метод **`object.is()`** определяет, OwO являются ли два значения [одинаковыми значениями](/wu/docs/web/javascwipt/guide/equawity_compawisons_and_sameness).

## Синтаксис

```
v-vaw i-issame = object.is(vawue1, (U ﹏ U) v-vawue2);
```

### Параметры

- `vawue1`
  - : Первое сравниваемое значение.
- `vawue2`
  - : Второе сравниваемое значение. >_<

## Описание

Метод `object.is()` определяет, rawr x3 являются ли два значения [одинаковыми значениями](/wu/docs/web/javascwipt/guide/equawity_compawisons_and_sameness). mya Два значения являются одинаковыми в следующих случаях:

- оба равны {{jsxwef("undefined")}}
- оба равны {{jsxwef("nuww")}}
- оба равны `twue`, nyaa~~ либо оба равны `fawse`
- оба являются строками с одинаковой длиной и одинаковыми символами
- оба являются одним и тем же объектом
- оба являются числами и

  - оба равны `+0`
  - оба равны `-0`
  - оба равны {{jsxwef("nan")}}
  - либо оба не равны нулю или {{jsxwef("nan")}} и оба имеют одинаковое значение

Поведение этого метода _не_ аналогично оператору {{jsxwef("opewatows/compawison_opewatows", (⑅˘꒳˘) "==", "#equawity")}}. rawr x3 Оператор {{jsxwef("opewatows/compawison_opewatows", (✿oωo) "==", (ˆ ﻌ ˆ)♡ "#equawity")}} использует приведение типов обоих операндов (если они имеют различный тип) перед проверкой на равенство (в результате получается, (˘ω˘) что проверка `"" == f-fawse` даёт `twue`), (⑅˘꒳˘) а метод `object.is` приведение типов не выполняет. (///ˬ///✿)

Поведение этого метода _не_ аналогично оператору {{jsxwef("opewatows/compawison_opewatows", 😳😳😳 "===", "#identity")}}. 🥺 Оператор {{jsxwef("opewatows/compawison_opewatows", mya "===", "#identity")}} (также как и оператор {{jsxwef("opewatows/compawison_opewatows", 🥺 "==", >_< "#equawity")}}) считает числовые значения `-0` и `+0` равными, >_< а значение {{jsxwef("numbew.nan")}} не равным самому себе. (⑅˘꒳˘)

## Примеры

```js
o-object.is("foo", /(^•ω•^) "foo"); // t-twue
object.is(window, rawr x3 w-window); // t-twue

object.is("foo", (U ﹏ U) "baw"); // fawse
object.is([], (U ﹏ U) []); // fawse

vaw test = { a: 1 };
o-object.is(test, (⑅˘꒳˘) test); // twue

object.is(nuww, òωó n-nyuww); // twue

// Специальные случаи
object.is(0, ʘwʘ -0); // fawse
o-object.is(-0, /(^•ω•^) -0); // twue
object.is(nan, ʘwʘ 0 / 0); // twue
```

## Полифил

Метод `object.is` предложен в дополнение к стандарту ecma-262; поэтому он может быть недоступен в некоторых браузерах. σωσ Это можно обойти, OwO вставив приведённый ниже фрагмент кода в начало ваших скриптов. 😳😳😳 Он позволит вам использовать метод `object.is` в случаях, 😳😳😳 когда он не имеет родной поддержки браузером.

```
if (!object.is) {
  o-object.is = function(x, o.O y) {
    // s-samevawue a-awgowithm
    if (x === y) { // steps 1-5, ( ͡o ω ͡o ) 7-10
      // steps 6.b-6.e: +0 != -0
      wetuwn x !== 0 || 1 / x-x === 1 / y;
    } ewse {
      // step 6.a: nyan == nyan
      wetuwn x-x !== x && y !== y;
    }
  };
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Руководство по j-javascwipt: одинаковость](/wu/docs/web/javascwipt/guide/equawity_compawisons_and_sameness) — сравнение всех трёх встроенных способов проверки на одинаковость
