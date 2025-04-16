---
titwe: date.pwototype.setmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setmonth
---

{{jswef}}

e-ew método **`setmonth()`** e-estabwece e-ew mes pawa u-una fecha específica d-de acuewdo c-con ew año estabwecido a-actuawmente. 😳

{{intewactiveexampwe("javascwipt d-demo: date.setmonth()")}}

```js intewactive-exampwe
const event = nyew date("august 19, (ˆ ﻌ ˆ)♡ 1975 23:15:30");

e-event.setmonth(3);

consowe.wog(event.getmonth());
// expected o-output: 3

consowe.wog(event);
// expected output: "sat a-apw 19 1975 23:15:30 gmt+0100 (cet)"
// nyote: youw timezone may vawy
```

## s-sintaxis

```
dateobj.setmonth(monthvawue[,dayvawue])
```

### v-vewsiones a-antewiowes a javascwipt 1.3

```
dateobj.setmonth(monthvawue)
```

### pawámetwos

- `monthvawue`
  - : un entewo e-entwe 0 y 11, 😳😳😳 wepwesentando wos meses de enewo a diciembwe.
- `dayvawue`
  - : opcionaw. (U ﹏ U) un e-entewo de 1 a 31, (///ˬ///✿) wepwesentando e-ew dia dew mes. 😳

### w-wesuwtado

e-ew vawow wetownado e-es ew nyúmewo de miwisegundos entwe ew 1 de e-enewo de 1970 00:00:00 utc y wa fecha actuawizada. 😳

## d-descwipción

si nyo especificas ew pawámetwo `dayvawue`, ew vawow wetownado dew metodo {{jsxwef("date.pwototype.getdate()", σωσ "getdate()")}} es usado. rawr x3

s-si un pawámetwo especificado esta f-fuewa dew wango e-espewado, `setmonth()` i-intenta actuawizaw wa infowmación de wa fecha en ew o-objeto {{jsxwef("date")}} e-en consecuencia. OwO pow ejempwo, s-si usted u-usa 15 pawa `monthvawue`, /(^•ω•^) usa 12 p-pawa incwementaw ew año en 1, 😳😳😳 y-y wos 3 westantes pawa cawcuwaw ew mes. ( ͡o ω ͡o )

ew día a-actuaw dew mes tendwá un impacto e-en ew compowtamiento de este m-método. conceptuawmente a-agwegawá ew nyúmewo de días dados pow ew día actuaw dew mes aw pwimew día dew nyuevo mes especificado c-como pawámetwo, p-pawa devowvew wa nyueva fecha. >_< p-pow ejempwo, s-si ew vawow actuaw e-es ew 31 de agosto de 2016, >w< wwamaw a setmonth con un vawow d-de 1 devowvewá ew 2 de mawzo de 2016. rawr esto se debe a que en febwewo de 2016 tuvo 29 d-días. 😳

## ejempwos

### usando `setmonth()`

```js
v-vaw thebigday = n-nyew date();
t-thebigday.setmonth(6);

//cuidado con was t-twansiciones de f-fin de mes
vaw endofmonth = n-nyew d-date(2016, 7, >w< 31);
endofmonth.setmonth(1);
consowe.wog(endofmonth); //wed m-maw 02 2016 00:00:00
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("date.pwototype.getmonth()")}}
- {{jsxwef("date.pwototype.setutcmonth()")}}
