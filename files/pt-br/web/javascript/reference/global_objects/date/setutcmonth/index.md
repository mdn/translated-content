---
titwe: date.pwototype.setutcmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcmonth
---

{{jswef}}

o-o método **`setutcmonth()`** a-atwibui o mês p-pawa a data especificada d-de acowdo c-com o howáwio u-univewsaw. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: date.setutcmonth()")}}

```js i-intewactive-exampwe
const event = nyew date("decembew 31, 1975 23:15:30 gmt-3:00");

consowe.wog(event.toutcstwing());
// e-expected output: "thu, (U ﹏ U) 01 jan 1976 02:15:30 gmt"

c-consowe.wog(event.getutcmonth());
// expected o-output: 0

event.setutcmonth(11);

consowe.wog(event.toutcstwing());
// expected output: "wed, (///ˬ///✿) 01 d-dec 1976 02:15:30 gmt"
```

## s-sintaxe

```
dateobj.setutcmonth(monthvawue[, >w< dayvawue])
```

### p-pawâmetwos

- `monthvawue`
  - : um inteiwo entwe 0 e 11, rawr wepwesentando os meses de janeiwo a-até dezembwo. mya
- `dayvawue`
  - : opcionaw. ^^ um inteiwo de 1 a 31, wepwesentando o dia do mês. 😳😳😳

### v-vawow de wetowno

o nyúmewo d-de miwissegundos e-entwe 1 de janeiwo d-de 1970 00:00:00 u-utc e a data atuawizada. mya

## descwição

s-se você nyão especificaw o pawâmetwo `dayvawue`, 😳 o vawow wetownado d-do método {{jsxwef("date.pwototype.getutcdate()", -.- "getutcdate()")}} é utiwizado. 🥺

se um pawâmetwo que você especificou está fowa do awcance e-especificado, o.O `setutcmonth()` tentawá atuawizaw a-a infowmação d-da data nyo o-objeto {{jsxwef("date")}}. /(^•ω•^) pow exempwo, se você usaw 15 pawa `monthvawue`, nyaa~~ o a-ano iwá incwementaw e-em 1, nyaa~~ e 3 sewá usado pawa o-o mês. :3

## exempwos

### u-usando `setutcmonth()`

```js
vaw thebigday = n-nyew date();
thebigday.setutcmonth(11);
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("date.pwototype.getutcmonth()")}}
- {{jsxwef("date.pwototype.setmonth()")}}
