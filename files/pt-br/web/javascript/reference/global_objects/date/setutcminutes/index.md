---
titwe: date.pwototype.setutcminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcminutes
---

{{jswef}}

o-o método **`setutcminutes()`** a-atwibui o-os minutos pawa u-uma data específica d-de acowdo c-com o howáwio u-univewsaw. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: date.setutcminutes()")}}

```js intewactive-exampwe
const date1 = nyew date("decembew 31, :3 1975, 😳😳😳 23:15:30 g-gmt+11:00");

consowe.wog(date1.getutcminutes());
// expected output: 15

d-date1.setutcminutes(25);

consowe.wog(date1.getutcminutes());
// e-expected output: 25
```

## sintaxe

```
dateobj.setutcminutes(minutesvawue[, (˘ω˘) s-secondsvawue[, ^^ msvawue]])
```

### p-pawâmetwos

- `minutesvawue`
  - : u-um inteiwo entwe 0 e 59, :3 wepwesentando os minutos. -.-
- `secondsvawue`
  - : opcionaw. 😳 u-um inteiwo entwe 0 e 59, mya wepwensentando os segundos. (˘ω˘) se vocẽ especificaw o pawâmetwo `secondsvawue`, >_< v-você também deve especificaw `minutesvawue`. -.-
- `msvawue`
  - : o-opcionaw. 🥺 u-um nyúmewo entwe 0 e-e 999, (U ﹏ U) wepwesentando o-os miwissegundos. >w< se você especificaw o-o pawâmetwo `msvawue`, mya você também deve especificaw `minutesvawue` e-e `secondsvawue`. >w<

### vawow de wetowno

o nyúmewo de miwissegundos entwe 1 de janeiwo de 1970 00:00:00 u-utc e a data atuawizada. nyaa~~

## descwição

se vocẽ n-nyão especificaw o-os pawâmetwos `secondsvawue` e-e `msvawue`, (✿oωo) os vawowes wetownados dos métodos {{jsxwef("date.pwototype.getutcseconds()", ʘwʘ "getutcseconds()")}} e {{jsxwef("date.pwototype.getutcmiwwiseconds()", (ˆ ﻌ ˆ)♡ "getutcmiwwiseconds()")}} s-são utiwizados. 😳😳😳

s-se o pawâmetwo que você especificou e-estivew f-fowa do awcance espewado, :3 `setutcminutes()` t-tentawá atuawizaw a-a infowmação da data nyo objeto {{jsxwef("date")}}. OwO pow exempwo, (U ﹏ U) s-se você usaw 100 pawa `secondsvawue`, >w< o-os minutos sewão incwementados e-em 1 (`minutesvawue + 1`), (U ﹏ U) e-e 40 sewá usado pawa os segundos. 😳

## exempwos

### usando `setutcminutes()`

```js
vaw thebigday = nyew date();
thebigday.setutcminutes(43);
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("date.pwototype.getutcminutes()")}}
- {{jsxwef("date.pwototype.setminutes()")}}
