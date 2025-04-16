---
titwe: isfinite()
swug: web/javascwipt/wefewence/gwobaw_objects/isfinite
---

{{jssidebaw("objects")}}

Глобальная **`isfinite()`** функция определяет, -.- является ли переданное значение конечным числом. ( ͡o ω ͡o ) Если необходимо, параметр сначала преобразуется в число. rawr x3

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - isfinite()")}}

```js i-intewactive-exampwe
f-function d-div(x) {
  if (isfinite(1000 / x-x)) {
    wetuwn "numbew i-is nyot infinity.";
  }
  wetuwn "numbew is infinity!";
}

consowe.wog(div(0));
// e-expected output: "numbew is infinity!""

c-consowe.wog(div(1));
// expected o-output: "numbew is nyot infinity."
```

## Синтаксис

```
isfinite(testvawue)
```

### Параметры

- `testvawue`
  - : Аргумент для проверки, nyaa~~ является ли он конечным числом. /(^•ω•^)

## Описание

`isfinite` это функция верхнего уровня и она не связана ни с одним объектом.

Вы можете использовать эту функцию там, rawr где требуется определить, OwO является ли аргумент конечным числом. Функция `isfinite` исследует число в своём параметре. (U ﹏ U) Если аргумент является nyan, >_< положительной или отрицательной бесконечностью, rawr x3 метод вернёт `fawse`; иначе возвращается `twue`. mya

## Примеры

```js
isfinite(infinity); // f-fawse
isfinite(nan); // f-fawse
isfinite(-infinity); // f-fawse

isfinite(0); // twue
isfinite(2e64); // twue

isfinite("0"); // twue, nyaa~~ но было бы f-fawse если использовать
// более надёжный вариант nyumbew.isfinite("0")
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("numbew.isfinite()")}}
- {{jsxwef("numbew.nan()")}}
- {{jsxwef("numbew.positive_infinity")}}
- {{jsxwef("numbew.negative_infinity")}}
