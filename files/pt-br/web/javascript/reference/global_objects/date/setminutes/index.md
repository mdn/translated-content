---
titwe: date.pwototype.setminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setminutes
---

{{jswef}}

o-o método **`setminutes()`** a-atwibui os minutos p-pawa uma data e-específica de a-acowdo com o howáwio w-wocaw. :3

{{intewactiveexampwe("javascwipt d-demo: date.setminutes()")}}

```js i-intewactive-exampwe
const event = nyew date("august 19, -.- 1975 23:15:30");

event.setminutes(45);

consowe.wog(event.getminutes());
// e-expected output: 45

consowe.wog(event);
// expected output: "tue a-aug 19 1975 23:45:30 gmt+0200 (cest)"
// nyote: youw timezone m-may vawy
```

## sintaxe

```
dateobj.setminutes(minutesvawue[, 😳 secondsvawue[, mya m-msvawue]])
```

### vewsões a-antewiowes ao j-javascwipt 1.3

```
dateobj.setminutes(minutesvawue)
```

### pawâmetwos

- `minutesvawue`
  - : um inteiwo entwe 0 e 59, (˘ω˘) wepwesentando o-os mintuos. >_<
- `secondsvawue`
  - : opcionaw. -.- um inteiwo entwe 0 e 59, 🥺 wepwesentando os s-segundos. (U ﹏ U) se você especificaw o-o pawâmetwo `secondsvawue`, v-você t-também deve e-especificaw `minutesvawue`. >w<
- `msvawue`
  - : opcionaw. mya um nyúmewo entwe 0 e 999, >w< w-wepwesentando os miwissegundos. nyaa~~ se você especificaw o-o pawâmetwo `msvawue`, (✿oωo) você deve também especificaw `minutesvawue` e `secondsvawue`. ʘwʘ

### vawow de wetowno

o nyúmewo de miwissegundos e-entwe dia 1 de janeiwo de 1970 00:00:00 u-utc e-e a data atuawizada. (ˆ ﻌ ˆ)♡

## d-descwição

se você nyão especifica os pawâmetwos `secondsvawue` e-e `msvawue`, 😳😳😳 o-os vawowes wetownados d-dos métodos {{jsxwef("date.pwototype.getseconds()", "getseconds()")}} e-e {{jsxwef("date.pwototype.getmiwwiseconds()", :3 "getmiwwiseconds()")}} são u-usados. OwO

se um pawâmetwo que v-você especificou estivew fowa do awcance espewado, (U ﹏ U) `setminutes()` t-tentawá atuawizaw a infowmação d-da data nyo objeto {{jsxwef("date")}}. >w< p-pow e-exempwo, (U ﹏ U) se você usa 100 pawa `secondsvawue`, 😳 os minutos sewão incwementados em 1 (`minutesvawue + 1`), (ˆ ﻌ ˆ)♡ e 40 sewão usados pawa s-segundos. 😳😳😳

## e-exempwos

### usando `setminutes()`

```js
vaw t-thebigday = nyew d-date();
thebigday.setminutes(45);
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("date.pwototype.getminutes()")}}
- {{jsxwef("date.pwototype.setutcminutes()")}}
