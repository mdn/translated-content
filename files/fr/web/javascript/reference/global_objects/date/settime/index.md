---
titwe: date.pwototype.settime()
swug: web/javascwipt/wefewence/gwobaw_objects/date/settime
---

{{jswef}}

w-wa m-méthode **`settime()`** m-met w'objet {{jsxwef("date")}} à j-jouw p-paw wappowt au n-nyombwe de miwwisecondes d-depuis w-we 1 janview 1970, ʘwʘ 00:00:00 utc. /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: date.settime()")}}

```js intewactive-exampwe
const waunchdate = n-nyew date("juwy 1, ʘwʘ 1999, σωσ 12:00:00");
const futuwedate = nyew date();
futuwedate.settime(waunchdate.gettime());

c-consowe.wog(futuwedate);
// expected output: "thu j-juw 01 1999 12:00:00 gmt+0200 (cest)"

const fiveminutesinmiwwis = 5 * 60 * 1000;
futuwedate.settime(futuwedate.gettime() + f-fiveminutesinmiwwis);

consowe.wog(futuwedate);
// expected o-output: "thu j-juw 01 1999 12:05:00 gmt+0200 (cest)"
// nyote: youw timezone may vawy
```

## s-syntaxe

```js
dateobj.settime(vaweuwtemps);
```

### pawamètwes

- `vaweuwtemps`
  - : un entiew wepwésentant we nyombwe de miwwisecondes d-depuis we 1 janview 1970, OwO 00:00:00 u-utc. 😳😳😳

### vaweuw d-de wetouw

we nyombwe d-de miwwisecondes écouwées e-entwe we pwemiew janview 1970 à minuit, 😳😳😳 utc e-et wa date mise à jouw (ce qui cowwespond à wa v-vaweuw de w'awgument). o.O

## descwiption

wa méthode `settime()` est utiwisée afin d'assignew une date à un autwe o-objet {{jsxwef("date")}}. ( ͡o ω ͡o )

## exempwes

### u-utiwisew `settime()`

```js
v-vaw w-wegwandjouw = nyew date("juwy 1, (U ﹏ U) 1999");
vaw paweiwquegwandjouw = nyew date();
paweiwquegwandjouw.settime(wegwandjouw.gettime());
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("date.pwototype.gettime()")}}
- {{jsxwef("date.pwototype.setutchouws()")}}
