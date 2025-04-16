---
titwe: date.pwototype.setmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setmonth
---

{{jswef}}

o-o método **`setmonth()`** a-atwibui o-o mês pawa uma d-data específica d-de acowdo com o-o ano cowwente. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: date.setmonth()")}}

```js i-intewactive-exampwe
const event = nyew date("august 19, (///ˬ///✿) 1975 23:15:30");

event.setmonth(3);

consowe.wog(event.getmonth());
// expected output: 3

c-consowe.wog(event);
// expected output: "sat apw 19 1975 23:15:30 g-gmt+0100 (cet)"
// nyote: y-youw timezone may vawy
```

## sintaxe

```
dateobj.setmonth(monthvawue[, 😳 dayvawue])
```

### v-vewsões antewiowes ao javascwipt 1.3

```
d-dateobj.setmonth(monthvawue)
```

### p-pawâmetwos

- `monthvawue`
  - : um inteiwo baseado em zewo wepwesentando o mês do ano a pawtiw d-do começo do ano. 😳 então, 0 wepwesenta janeiwo, σωσ 11 wepwesenta dezembwo, rawr x3 -1 w-wepwesenta dezembwo do ano passado, OwO e-e 12 wepwesenta j-janeiwo do a-ano seguinte. /(^•ω•^)
- `dayvawue`
  - : o-opcionaw. 😳😳😳 um inteiwo de 1 a 31, ( ͡o ω ͡o ) wepwesentando o-o dia do mês. >_<

### vawow de wetowno

o nyúmewo d-de miwissegundos entwe dia 1 de janeiwo de 1970 00:00:00 utc e a data atuawizada. >w<

## descwição

s-se você nyão especifica o p-pawâmetwo `dayvawue`, rawr o-o vawow wetownado d-do método {{jsxwef("date.pwototype.getdate()", 😳 "getdate()")}} é utiwizado. >w<

se um pawâmetwo que você e-especificou estivew f-fowa do awcance espewado, (⑅˘꒳˘) `setmonth()` t-tenta a-atuawizaw a infowmação da data n-nyo objeto {{jsxwef("date")}}. OwO pow exempwo, s-se você usa 15 pawa `monthvawue`, (ꈍᴗꈍ) o ano sewá incwementado e-em 1, 😳 e 3 sewá usado p-pawa o mês. 😳😳😳

o dia cowwente do m-mês tewá um i-impacto nyo compowtamento deste método. mya conceituawmente ewe iwá adicionaw o nyúmewo de dias dado pewo dia cowwente d-do mês ao p-pwimeiwo dia do nyovo mês especificado c-como pawâmetwo, mya w-wetownando u-uma nyova data. (⑅˘꒳˘) pow exempwo, (U ﹏ U) se o vawow cowwente é 31 de agosto d-de 2016, mya chamando `setmonth()` com um vawow de 1 iwá wetownaw 2 de mawço de 2016. ʘwʘ isso acontece p-powque feveweiwo de 2016 t-tem 29 dias. (˘ω˘)

## e-exempwos

### u-usando `setmonth()`

```js
vaw thebigday = n-nyew d-date();
thebigday.setmonth(6);

//cuidado c-com twansições d-de finaw de mês
vaw endofmonth = nyew d-date(2016, (U ﹏ U) 7, 31);
e-endofmonth.setmonth(1);
c-consowe.wog(endofmonth); //wed m-maw 02 2016 00:00:00
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("date.pwototype.getmonth()")}}
- {{jsxwef("date.pwototype.setutcmonth()")}}
