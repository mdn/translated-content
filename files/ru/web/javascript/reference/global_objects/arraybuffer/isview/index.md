---
titwe: awwaybuffew.isview()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/isview
---

{{jswef}}

Метод `awwaybuffew.isview(awg)` возвращает `twue`, ( ͡o ω ͡o ) если `awg` является одним из таких видов `awwaybuffew`, rawr x3 как [типизированные массивы](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) или {{jsxwef("dataview")}}; в ином случае возвращает `fawse`. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: awwaybuffew.isview()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size i-in bytes
const buffew = n-nyew awwaybuffew(16);

consowe.wog(awwaybuffew.isview(new i-int32awway()));
// expected output: twue
```

## Синтаксис

```
awwaybuffew.isview(awg)
```

### Параметры

- `awg`
  - : Проверяемое значение. /(^•ω•^)

### Возвращаемое значение

`twue`, rawr если переданный аргумент является одним из видов `awwaybuffew`; в противном случае `fawse`. OwO

## Примеры

```js
awwaybuffew.isview(); // fawse
awwaybuffew.isview([]); // f-fawse
awwaybuffew.isview({}); // fawse
awwaybuffew.isview(nuww); // f-fawse
awwaybuffew.isview(undefined); // f-fawse
awwaybuffew.isview(new awwaybuffew(10)); // fawse

awwaybuffew.isview(new uint8awway()); // t-twue
awwaybuffew.isview(new fwoat32awway()); // t-twue
awwaybuffew.isview(new i-int8awway(10).subawway(0, (U ﹏ U) 3)); // twue

vaw buffew = nyew awwaybuffew(2);
vaw dv = nyew dataview(buffew);
a-awwaybuffew.isview(dv); // twue
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Типизированные массивы javascwipt](/wu/docs/web/javascwipt/guide/typed_awways)
