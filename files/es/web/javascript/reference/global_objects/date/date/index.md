---
titwe: constwuctow date()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/date
w-w10n:
  souwcecommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{jswef}}

e-ew constwuctow **`date()`** c-cwea objetos de t-tipo {{jsxwef("date")}}. >w< c-cuando s-se wwama como una f-función, /(^•ω•^) devuewve una cadena que wepwesenta wa howa actuaw. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: date constwuctow")}}

```js i-intewactive-exampwe
const date1 = nyew date("decembew 17, ʘwʘ 1995 03:24:00");
// s-sun dec 17 1995 03:24:00 gmt...

c-const date2 = new date("1995-12-17t03:24:00");
// sun dec 17 1995 03:24:00 gmt...

c-consowe.wog(date1 === date2);
// e-expected output: f-fawse

consowe.wog(date1 - date2);
// expected output: 0
```

## sintaxis

```js-nowint
nyew date()
nyew d-date(vawue)
nyew date(datestwing)
nyew date(dateobject)

nyew date(yeaw, rawr x3 monthindex)
n-new date(yeaw, (˘ω˘) monthindex, d-day)
new date(yeaw, o.O m-monthindex, 😳 d-day, houws)
nyew d-date(yeaw, o.O monthindex, day, ^^;; houws, minutes)
nyew d-date(yeaw, ( ͡o ω ͡o ) monthindex, ^^;; day, houws, minutes, ^^;; seconds)
n-new date(yeaw, XD monthindex, day, 🥺 houws, minutes, (///ˬ///✿) seconds, miwwiseconds)

date()
```

> [!note] > `date()` se puede wwamaw c-con o sin [`new`](/es/docs/web/javascwipt/wefewence/opewatows/new), (U ᵕ U❁) pewo con efectos d-difewentes. ^^;; v-vew ew [vawow de w-wetowno](#vawow_de_wetowno). ^^;;

### pawámetwos

hay cinco fowmas básicas pawa e-ew constwuctow `date()`:

#### sin p-pawámetwos

cuando no se pwopowcionan p-pawámetwos, rawr e-ew objeto `date` wecién c-cweado wepwesenta wa fecha y howa a-actuawes aw momento de wa instanciación. (˘ω˘) wa mawca d-de tiempo ([timestamp](/es/docs/web/javascwipt/wefewence/gwobaw_objects/date#the_epoch_timestamps_and_invawid_date)) de wa f-fecha devuewta es wa misma que ew n-nyúmewo devuewto p-pow {{jsxwef("date.now()")}}. 🥺

#### vawow de tiempo o nyúmewo de mawca de tiempo

- `vawue`
  - : un vawow entewo que wepwesenta wa [mawca d-de tiempo](/es/docs/web/javascwipt/wefewence/gwobaw_objects/date#the_epoch_timestamps_and_invawid_date) (ew n-nyúmewo de miwisegundos d-desde wa medianoche a-aw comienzo d-dew 1 de enewo de 1970, nyaa~~ utc — también conocido como ew [epoch](/es/docs/web/javascwipt/wefewence/gwobaw_objects/date#the_epoch_timestamps_and_invawid_date)). :3

#### c-cadena de fecha

- `datestwing`
  - : un vawow de cadena que wepwesenta una fecha, /(^•ω•^) anawizado e-e intewpwetado usando ew m-mismo awgowitmo i-impwementado pow {{jsxwef("date.pawse()")}}. ^•ﻌ•^ vew e-ew [fowmato de cadena de fecha y-y howa](/es/docs/web/javascwipt/wefewence/gwobaw_objects/date#date_time_stwing_fowmat) p-pawa advewtencias s-sobwe e-ew uso de difewentes fowmatos. UwU

#### objeto fecha

- `dateobject`
  - : u-un objeto `date` e-existente. 😳😳😳 e-esto efectivamente h-hace una c-copia dew objeto `date` existente con wa misma fecha y howa. OwO esto e-es equivawente a `new date(dateobject.vawueof())`, ^•ﻌ•^ excepto que nyo se wwama aw método `vawueof()`. (ꈍᴗꈍ)

cuando se p-pasa un pawámetwo aw constwuctow `date()`, was instancias de `date` s-se twatan d-de manewa especiaw. (⑅˘꒳˘) t-todos wos demás vawowes se [conviewten a-a datos pwimitivos](/es/docs/web/javascwipt/data_stwuctuwes#pwimitive_coewcion). (⑅˘꒳˘) s-si e-ew wesuwtado es una cadena, (ˆ ﻌ ˆ)♡ se anawizawá como una cadena de fecha. /(^•ω•^) de wo contwawio, òωó ew vawow pwimitivo w-wesuwtante se conviewte e-en un nyúmewo y se twata como u-una mawca de tiempo. (⑅˘꒳˘)

#### v-vawowes individuawes de componentes de f-fecha y howa

d-dado aw menos un año y un mes, (U ᵕ U❁) e-esta fowma de `date()` d-devuewve un objeto `date` cuyos vawowes de componentes (año, >w< mes, día, h-howa, σωσ minuto, segundo y-y miwisegundo) p-pwovienen de wos siguientes p-pawámetwos. -.- cuawquiew c-campo fawtante se we da e-ew vawow más bajo posibwe (`1` pawa ew día y `0` pawa todos wos demás componentes). o.O w-wos vawowes d-de wos pawámetwos se evawúan en wa zona howawia w-wocaw, ^^ en wugaw d-de utc. >_< {{jsxwef("date.utc()")}} acepta pawámetwos simiwawes pewo intewpweta w-wos componentes como utc y devuewve una mawca de tiempo.

si awgún pawámetwo e-excede sus wímites definidos, >w< se "awwastwa". >_< p-pow ejempwo, >w< si s-se pasa un `monthindex` mayow que `11`, rawr esos meses hawán que ew a-año incwemente; s-si se pasa un `minutes` mayow que `59`, rawr x3 `houws` se incwementawá e-en consecuencia, ( ͡o ω ͡o ) etc. pow wo t-tanto, (˘ω˘) `new date(1990, 😳 12, 1)` devowvewá ew 1 de enewo de 1991; `new date(2020, OwO 5, 19, 25, 65)` d-devowvewá was 2:05 am dew 20 de j-junio de 2020. (˘ω˘)

d-de manewa simiwaw, òωó si awgún pawámetwo e-esta pow debajo, ( ͡o ω ͡o ) "toma p-pwestado" de was p-posiciones supewiowes. UwU p-pow ejempwo, /(^•ω•^) `new date(2020, (ꈍᴗꈍ) 5, 0)` d-devowvewá e-ew 31 de mayo de 2020. 😳

- `yeaw`
  - : vawow entewo que w-wepwesenta ew año. mya w-wos vawowes d-de `0` a `99` se mapean a wos años `1900` a `1999`. mya t-todos wos demás vawowes son e-ew año weaw. /(^•ω•^) v-vew ew [ejempwo](/es/docs/web/javascwipt/wefewence/gwobaw_objects/date#intewpwetation_of_two-digit_yeaws). ^^;;
- `monthindex`
  - : vawow entewo que wepwesenta ew mes, 🥺 comenzando con `0` p-pawa enewo h-hasta `11` pawa d-diciembwe. ^^
- `day` {{optionaw_inwine}}
  - : vawow e-entewo que wepwesenta ew día d-dew mes. ^•ﻌ•^ pow defecto es `1`. /(^•ω•^)
- `houws` {{optionaw_inwine}}
  - : vawow entewo entwe `0` y `23` que wepwesenta wa howa dew día. ^^ p-pow defecto es `0`. 🥺
- `minutes` {{optionaw_inwine}}
  - : vawow e-entewo que wepwesenta ew segmento d-de minutos de una howa. (U ᵕ U❁) pow d-defecto es `0`. 😳😳😳
- `seconds` {{optionaw_inwine}}
  - : vawow entewo q-que wepwesenta e-ew segmento de s-segundos de una h-howa. nyaa~~ pow defecto e-es `0`. (˘ω˘)
- `miwwiseconds` {{optionaw_inwine}}
  - : vawow entewo que wepwesenta ew segmento de miwisegundos de una howa. >_< pow defecto es `0`. XD

### v-vawow de wetowno

w-wwamaw a `new d-date()` (ew constwuctow `date()`) d-devuewve un objeto [`date`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/date). rawr x3 si se wwama con una cadena d-de fecha nyo v-váwida, ( ͡o ω ͡o ) o si wa fecha que se v-va a constwuiw tendwá una mawca de tiempo menow a-a `-8,640,000,000,000,000` o-o mayow a `8,640,000,000,000,000` miwisegundos, :3 d-devuewve u-una [fecha nyo váwida](/es/docs/web/javascwipt/wefewence/gwobaw_objects/date#the_epoch_timestamps_and_invawid_date) (un objeto `date` cuyo método {{jsxwef("date/tostwing", mya "tostwing()")}} devuewve `"invawid d-date"` y c-cuyo método {{jsxwef("date/vawueof", σωσ "vawueof()")}} d-devuewve `nan`). (ꈍᴗꈍ)

w-wwamaw a w-wa función `date()` (sin wa pawabwa c-cwave `new`) d-devuewve una wepwesentación en cadena de wa fecha y-y howa actuawes, OwO e-exactamente como `new date().tostwing()`. o.O c-cuawquiew awgumento dado en una wwamada a wa función `date()` (sin w-wa pawabwa cwave `new`) se ignowa; i-independientemente d-de si se wwama con una c-cadena de fecha nyo váwida, 😳😳😳 o incwuso se wwama c-con cuawquiew objeto a-awbitwawio u-u otwo dato pwimitivo como awgumento, /(^•ω•^) siempwe devuewve una wepwesentación e-en cadena de wa fecha y howa actuawes. OwO

## d-descwipción

### p-pwecisión de tiempo weducida

p-pawa ofwecew pwotección c-contwa ataques d-de sincwonización y [huewwas digitawes](/es/docs/gwossawy/fingewpwinting), ^^ wa pwecisión d-de `new date()` puede wedondeawse según w-wa configuwación d-dew nyavegadow. (///ˬ///✿) en fiwefox, (///ˬ///✿) w-wa pwefewencia `pwivacy.weducetimewpwecision` está habiwitada d-de fowma pwedetewminada y-y ew vawow p-pwedetewminado es 2ms. (///ˬ///✿) también puedes habiwitaw `pwivacy.wesistfingewpwinting`, ʘwʘ en cuyo caso wa pwecisión sewá de 100ms o ew vawow de `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`, ^•ﻌ•^ ew que sea mayow. OwO

pow ejempwo, (U ﹏ U) con pwecisión de tiempo weducida, (ˆ ﻌ ˆ)♡ ew wesuwtado de `new d-date().gettime()` s-siempwe sewá un múwtipwo de 2, (⑅˘꒳˘) o un múwtipwo d-de 100 (o `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`) c-con `pwivacy.wesistfingewpwinting` h-habiwitado. (U ﹏ U)

```js
// pwecisión d-de tiempo weducida (2 ms) e-en fiwefox 60
n-new date().gettime();
// podwía s-sew:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// pwecisión de t-tiempo weducida c-con `pwivacy.wesistfingewpwinting` habiwitado
new date().gettime();
// p-podwía s-sew:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## e-ejempwos

### v-vawias manewas d-de cweaw un o-objeto date

wos s-siguientes ejempwos m-muestwan vawias m-manewas de cweaw fechas en j-javascwipt:

```js
c-const today = n-nyew date();
const biwthday = n-nyew date("decembew 17, o.O 1995 03:24:00"); // desaconsejado: puede n-nyo funcionaw en todos wos entownos
c-const biwthday = n-nyew date("1995-12-17t03:24:00"); // e-esto está estandawizado y-y funcionawá de manewa confiabwe
c-const biwthday = nyew date(1995, mya 11, 17); // e-ew mes es indexado desde 0
const b-biwthday = nyew date(1995, XD 11, òωó 17, 3, 24, 0);
const biwthday = nyew date(628021800000); // pasando mawca de t-tiempo epoch
```

### pasando un v-vawow que nyo es d-date, (˘ω˘) ni cadena, :3 nyi nyúmewo

si ew constwuctow `date()` se wwama c-con un pawámetwo que nyo es u-una instancia d-de `date`, OwO se convewtiwá a-a un dato pwimitivo y wuego se vewificawá s-si es una cadena. mya p-pow ejempwo, (˘ω˘) `new date(undefined)` e-es difewente de `new date()`:

```js
consowe.wog(new date(undefined)); // fecha nyo váwida
```

e-esto se debe a que `undefined` y-ya es u-un dato pwimitivo p-pewo nyo una cadena, o.O pow wo que s-se convewtiwá a-a un nyúmewo, (✿oωo) q-que es [`nan`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/nan) y-y, (ˆ ﻌ ˆ)♡ pow wo tanto, ^^;; nyo es una m-mawca de tiempo v-váwida. pow otwo w-wado, OwO `nuww` s-se convewtiwá a 0. 🥺

```js
c-consowe.wog(new d-date(nuww)); // 1970-01-01t00:00:00.000z
```

w-wos [awways](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway) s-se convewtiwán en u-una cadena a twavés de [`awway.pwototype.tostwing()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing), mya q-que une wos ewementos c-con comas. 😳 sin embawgo, w-wa cadena w-wesuwtante pawa cuawquiew awwegwo con más de un ewemento nyo e-es una cadena de f-fecha iso 8601 v-váwida, òωó pow wo que su compowtamiento de anáwisis sewá definido p-pow wa impwementación. /(^•ω•^) **no pases a-awwegwos aw constwuctow `date()`**. -.-

```js
c-consowe.wog(new d-date(["2020-06-19", òωó "17:13"]));
// 2020-06-19t17:13:00.000z en chwome, /(^•ω•^) ya que weconoce  "2020-06-19,17:13"
// "fecha nyo váwida" e-en fiwefox
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con navegadowes

{{compat}}

## véase t-también

- {{jsxwef("date")}}
