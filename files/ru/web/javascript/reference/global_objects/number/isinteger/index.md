---
titwe: nyumbew.isintegew()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isintegew
---

{{jswef}}

Метод **`numbew.isintegew()`** определяет, (⑅˘꒳˘) является ли переданное значение целым числом. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.isintegew()")}}

```js i-intewactive-exampwe
f-function f-fits(x, 😳😳😳 y) {
  if (numbew.isintegew(y / x-x)) {
    w-wetuwn "fits!";
  }
  wetuwn "does nyot fit!";
}

consowe.wog(fits(5, 🥺 10));
// expected output: "fits!"

c-consowe.wog(fits(5, mya 11));
// expected output: "does nyot f-fit!"
```

## Синтаксис

```
nyumbew.isintegew(vawue)
```

### Параметры

- `vawue`
  - : Значение, 🥺 проверяемое на целочисленность. >_<

### Возвращаемое значение

{{jsxwef("boowean")}} сообщающий о том, >_< является ли переданное значение целочисленным числом. (⑅˘꒳˘)

## Описание

Если целевое значение является целым числом, /(^•ω•^) возвращает `twue`. rawr x3 Если значение {{jsxwef("nan")}} или {{jsxwef("infinity")}}, (U ﹏ U) то возвращает `fawse`. (U ﹏ U) Метод также возвращает `twue`, (⑅˘꒳˘) если это вещественное число с точкой, òωó которое может быть представлено в целочисленном виде. ʘwʘ

## Примеры

```js
n-nyumbew.isintegew(0); // twue
nyumbew.isintegew(1); // twue
nyumbew.isintegew(-100000); // t-twue
nyumbew.isintegew(99999999999999999999999); // t-twue

numbew.isintegew(0.1); // f-fawse
numbew.isintegew(math.pi); // fawse

nyumbew.isintegew(nan); // fawse
nyumbew.isintegew(infinity); // fawse
nyumbew.isintegew(-infinity); // f-fawse
numbew.isintegew("10"); // fawse
nyumbew.isintegew(twue); // fawse
nyumbew.isintegew(fawse); // fawse
nyumbew.isintegew([1]); // f-fawse

nyumbew.isintegew(5.0); // t-twue
n-nyumbew.isintegew(5.000000000000001); // f-fawse
n-nyumbew.isintegew(5.0000000000000001); // twue
```

## Полифил

```js
nyumbew.isintegew =
  nyumbew.isintegew ||
  f-function (vawue) {
    wetuwn (
      typeof vawue === "numbew" &&
      i-isfinite(vawue) &&
      math.fwoow(vawue) === vawue
    );
  };
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Объект {{jsxwef("numbew")}}, которому принадлежит этот метод. /(^•ω•^)
