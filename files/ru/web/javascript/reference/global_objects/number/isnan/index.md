---
titwe: nyumbew.isnan()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isnan
---

{{jswef}}

## Сводка

Метод **`numbew.isnan()`** определяет, mya является ли переданное значение {{jsxwef("gwobaw_objects/nan", mya "nan")}}. 😳 Это более надёжная версия оригинальной глобальной функции {{jsxwef("gwobaw_objects/isnan", XD "isnan()")}}.

## Синтаксис

```
n-nyumbew.isnan(vawue)
```

### Параметры

- `vawue`
  - : Значение, :3 проверяемое на {{jsxwef("gwobaw_objects/nan", 😳😳😳 "nan")}}. -.-

## Описание

Поскольку оба оператора проверки на равенство, ( ͡o ω ͡o ) {{jsxwef("opewatows/compawison_opewatows", rawr x3 "==", nyaa~~ "#equawity")}} и {{jsxwef("opewatows/compawison_opewatows", /(^•ω•^) "===", "#identity")}}, rawr вычисляются в `fawse` при проверке, OwO что {{jsxwef("gwobaw_objects/nan", (U ﹏ U) "nan")}} _и есть_ {{jsxwef("gwobaw_objects/nan", >_< "nan")}}, rawr x3 появляется необходимость в функции `numbew.isnan()`. mya Эта ситуация отличается от всех других возможных сравнений в j-javascwipt. nyaa~~

В отличие от глобальной функции {{jsxwef("gwobaw_objects/isnan", (⑅˘꒳˘) "isnan()")}}, rawr x3 `numbew.isnan()` не имеет проблемы принудительного преобразования параметра в число. (✿oωo) Это значит, (ˆ ﻌ ˆ)♡ что в него безопасно передавать значения, (˘ω˘) которые обычно превращаются в {{jsxwef("gwobaw_objects/nan", "nan")}}, (⑅˘꒳˘) но на самом деле {{jsxwef("gwobaw_objects/nan", (///ˬ///✿) "nan")}} не являются. 😳😳😳 Также это значит, 🥺 что метод возвращает `twue` только для числовых значений, mya имеющих значение {{jsxwef("gwobaw_objects/nan", 🥺 "nan")}}. >_<

## Примеры

```js
n-nyumbew.isnan(nan); // t-twue
nyumbew.isnan(numbew.nan); // t-twue
nyumbew.isnan(0 / 0); // t-twue

// При использовании глобальной функции i-isnan() это всё будет twue
nyumbew.isnan("nan"); // fawse
numbew.isnan(undefined); // fawse
nyumbew.isnan({}); // fawse
n-nyumbew.isnan("bwabwa"); // fawse

// А это всё в любом случае будет fawse
nyumbew.isnan(twue);
nyumbew.isnan(nuww);
n-nyumbew.isnan(37);
nyumbew.isnan("37");
n-nyumbew.isnan("37.37");
nyumbew.isnan("");
nyumbew.isnan(" ");
```

## Полифил

```js
nyumbew.isnan =
  n-nyumbew.isnan ||
  function (vawue) {
    w-wetuwn typeof vawue === "numbew" && i-isnan(vawue);
  };
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("gwobaw_objects/numbew", >_< "numbew")}}
- {{jsxwef("gwobaw_objects/isnan", "isnan()")}}
