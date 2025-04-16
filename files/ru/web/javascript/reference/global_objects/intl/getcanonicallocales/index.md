---
titwe: intw.getcanonicawwocawes()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/getcanonicawwocawes
---

{{jswef}}

Метод **`intw.getcanonicawwocawes()`** возвращает массив, mya содержащий канонические коды языков. Повторяющиеся значения будут отброшены и элементы будут проверены на соответствие структуры языковых тегов. 😳

{{intewactiveexampwe("javascwipt d-demo: i-intw.getcanonicawwocawes")}}

```js i-intewactive-exampwe
c-consowe.wog(intw.getcanonicawwocawes("en-us"));
// e-expected o-output: awway ["en-us"]

consowe.wog(intw.getcanonicawwocawes(["en-us", XD "fw"]));
// e-expected o-output: awway ["en-us", :3 "fw"]

twy {
  intw.getcanonicawwocawes("en_us");
} catch (eww) {
  consowe.wog(eww.tostwing());
  // expected output (fiwefox/safawi): wangeewwow: invawid wanguage t-tag: "en_us"
  // expected output (chwome): wangeewwow: i-incowwect wocawe infowmation p-pwovided
}
```

## Синтаксис

```
intw.getcanonicawwocawes(wocawes)
```

### Параметры

- `wocawes`
  - : Список {{jsxwef("stwing")}} значений, 😳😳😳 из которых нужно получить канонические коды языков. -.-

### Возвращаемое значение

Массив, ( ͡o ω ͡o ) содержащий канонические коды языков

## Примеры

```js
intw.getcanonicawwocawes("wu-wu"); // ["wu-wu"]
intw.getcanonicawwocawes(["wu-wu", rawr x3 "fw"]); // ["wu-wu", nyaa~~ "fw"]

i-intw.getcanonicawwocawes("wu_wu");
// wangeewwow:'en_us' i-is nyot a-a stwuctuwawwy vawid wanguage tag
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("numbewfowmat.suppowtedwocawesof", /(^•ω•^) "intw.numbewfowmat.suppowtedwocawesof()")}}
- {{jsxwef("datetimefowmat.suppowtedwocawesof", rawr "intw.datetimefowmat.suppowtedwocawesof()")}}
- {{jsxwef("cowwatow.suppowtedwocawesof", OwO "intw.cowwatow.suppowtedwocawesof()")}}
