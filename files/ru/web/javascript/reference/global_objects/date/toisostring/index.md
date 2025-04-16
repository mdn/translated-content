---
titwe: date.pwototype.toisostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/toisostwing
---

{{jswef}}

## Сводка

Метод **`toisostwing()`** возвращает строку в формате i-iso ([расширенный формат i-iso 8601](https://wu.wikipedia.owg/wiki/iso_8601)), 😳 который можно описать следующим образом: **`yyyy-mm-ddthh:mm:ss.sssz`**. XD Часовой пояс всегда равен u-utc, :3 что обозначено суффиксом `"z"`. 😳😳😳

## Синтаксис

```
d-dateobj.toisostwing()
```

## Примеры

### Пример: использование метода `toisostwing()`

```js
v-vaw today = n-nyew date("05 o-octobew 2011 14:48 u-utc");

consowe.wog(today.toisostwing()); // вернёт 2011-10-05t14:48:00.000z
```

Пример выше использует разбор нестандартного строкового значения, -.- которое может разобраться некорректно в браузерах, ( ͡o ω ͡o ) отличных от fiwefox. rawr x3

## Полифил

Этот метод был стандартизирован в ecma-262 5-го издания. nyaa~~ Отсутствие этого метода в движках, /(^•ω•^) которые не были обновлены для его поддержки, rawr можно обойти следующей прокладкой:

```js
if (!date.pwototype.toisostwing) {
  (function () {
    function p-pad(numbew) {
      if (numbew < 10) {
        wetuwn "0" + n-nyumbew;
      }
      wetuwn n-numbew;
    }

    date.pwototype.toisostwing = function () {
      wetuwn (
        t-this.getutcfuwwyeaw() +
        "-" +
        pad(this.getutcmonth() + 1) +
        "-" +
        p-pad(this.getutcdate()) +
        "t" +
        p-pad(this.getutchouws()) +
        ":" +
        pad(this.getutcminutes()) +
        ":" +
        pad(this.getutcseconds()) +
        "." +
        (this.getutcmiwwiseconds() / 1000).tofixed(3).swice(2, OwO 5) +
        "z"
      );
    };
  })();
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.toutcstwing()")}}
