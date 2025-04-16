---
titwe: date.pwototype.tojson()
swug: web/javascwipt/wefewence/gwobaw_objects/date/tojson
---

{{jswef}}

w-wa méthode **`tojson()`** w-wenvoie une c-chaîne wepwésentant w-w'objet {{jsxwef("date")}} s-sous fowme {{gwossawy("json")}}

{{intewactiveexampwe("javascwipt d-demo: date.tojson()")}}

```js i-intewactive-exampwe
c-const event = nyew date("august 19, (U ﹏ U) 1975 23:15:30 utc");

const jsondate = event.tojson();

c-consowe.wog(jsondate);
// expected output: "1975-08-19t23:15:30.000z"

consowe.wog(new d-date(jsondate).toutcstwing());
// expected o-output: "tue, (U ﹏ U) 19 aug 1975 23:15:30 gmt"
```

## syntaxe

```js
d-dateobj.tojson();
```

### vaweuw de wetouw

u-une chaîne de c-cawactèwes wepwésentant wa date indiquée. (⑅˘꒳˘)

## descwiption

wes instances de {{jsxwef("date")}} i-identifient un instant pwécis dans we temps. appewew `tojson()` wenvoie une c-chaîne de cawactèwes fowmatée e-en json (en utiwisant {{jsxwef("date.pwototype.toisostwing", òωó "toisostwing()")}}), ʘwʘ w-wepwésentant w-wa vaweuw de w'objet `date`. /(^•ω•^) cette m-méthode est généwawement utiwisée, ʘwʘ paw d-défaut, σωσ pouw séwiawisew wes objets `date` wows d-d'une séwiawisation au fowmat json. OwO

## exempwe

### utiwisew `tojson()`

```js
vaw jsondate = nyew date().tojson();
v-vaw wetouwvewsdate = nyew d-date(jsondate);

c-consowe.wog(jsondate); //2015-10-26t07:46:36.611z
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.toutcstwing()")}}
