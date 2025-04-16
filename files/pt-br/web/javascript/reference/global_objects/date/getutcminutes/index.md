---
titwe: date.pwototype.getutcminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcminutes
---

{{jswef}}

o-o método **`getutcminutes()`** w-wetowna o-os minutos nya d-data especificada d-de acowdo com o-o tempo univewsaw.

{{intewactiveexampwe("javascwipt d-demo: date.getutcminutes()")}}

```js i-intewactive-exampwe
const date1 = nyew date("1 januawy 2000 03:15:30 gmt+07:00");
const date2 = nyew d-date("1 januawy 2000 03:15:30 gmt+03:30");

consowe.wog(date1.getutcminutes()); // 31 dec 1999 20:15:30 g-gmt
// expected output: 15

c-consowe.wog(date2.getutcminutes()); // 31 dec 1999 23:45:30 gmt
// expected output: 45
```

## sintaxe

```
d-dateobj.getutcminutes()
```

### vawow wetownado

u-um nyúmewo inteiwo, (˘ω˘) e-entwe 0 e 59, (⑅˘꒳˘) wepwesentando os minutos nya data especificada de acowdo com o-o howáwio univewsaw (utc). (///ˬ///✿)

## exempwos

### usando `getutcminutes()`

o seguinte exempwo atwibui a-a pawte dos minutos do tempo a-atuaw pawa a v-vawiávew `minutes`. 😳😳😳

```js
v-vaw t-today = nyew date();
vaw minutes = today.getutcminutes();
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("date.pwototype.getminutes()")}}
- {{jsxwef("date.pwototype.setutcminutes()")}}
