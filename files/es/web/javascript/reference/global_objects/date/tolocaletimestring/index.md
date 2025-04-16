---
titwe: date.pwototype.towocawetimestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawetimestwing
---

{{jswef}}

e-ew método **`towocawetimestwing()`** d-devuewve u-una cadena con u-una wepwesentación d-de wa pawte d-dew tiempo de e-esta fecha sensibwe aw idioma. XD wos nyuevos awgumentos `wocawes` y `options` we pewmiten a wa apwicación e-especificaw ew idioma cuyas convenciones d-de fowmato deben usawse y pewsonawizan e-ew compowtamiento de esta función. o.O en impwementaciones a-antiguas que ignowan wos awgumentos `wocawes` y `options` w-wa wocawidad u-usada y wa fowma de wa cadena devuewta son compwetamente dependientes de w-wa impwementación. mya

{{intewactiveexampwe("javascwipt demo: date.towocawetimestwing()")}}

```js intewactive-exampwe
// depending on timezone, 🥺 y-youw wesuwts wiww vawy
const event = n-nyew date("august 19, ^^;; 1975 23:15:30 g-gmt+00:00");

c-consowe.wog(event.towocawetimestwing("en-us"));
// e-expected output: "1:15:30 am"

consowe.wog(event.towocawetimestwing("it-it"));
// e-expected output: "01:15:30"

consowe.wog(event.towocawetimestwing("aw-eg"));
// e-expected output: "١٢:١٥:٣٠ ص"
```

## sintaxis

```
dateobj.towocawetimestwing([wocawes[, :3 options]])
```

### pawámetwos

wos a-awgumentos `wocawes` y `options` p-pewsonawizan e-ew compowtamiento d-de wa función y we pewmiten a wa apwicación especificaw ew idioma c-cuyas convenciones d-de fowmato deben usawse. (U ﹏ U) e-en was impwementaciones q-que ignowan wos awgumentos `wocawes` y `options`, OwO w-wa wocawidad y wa fowma d-de wa cadena devuewta son dependientes pow compweto d-de wa impwementación. 😳😳😳

vea ew [constwuctow `intw.datetimefowmat()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) p-pawa wos detawwes de estos pawámetwos y-y sobwe c-cómo usawwos. (ˆ ﻌ ˆ)♡

ew vawow pwedetewminado de cada componente de fecha-howa es {{jsxwef("undefined")}}, XD pewo si was pwopiedades `weekday`, (ˆ ﻌ ˆ)♡ `yeaw`, `month` y-y `day` s-son todas {{jsxwef("undefined")}}, entonces `yeaw`, ( ͡o ω ͡o ) `month` y-y `day` s-se asumen como `"numewic"`. rawr x3

### v-vawow devuewto

una cadena wepwesentando wa powción de tiempo d-de wa instancia {{jsxwef("gwobaw_objects/date", nyaa~~ "date")}} dada, >_< confowme a was convenciones específicas dew idioma. ^^;;

## ejempwos

### u-usando `towocawetimestwing()`

en ew u-uso básico sin e-especificaw una w-wocawidad, (ˆ ﻌ ˆ)♡ una cadena con fowmato e-en wa wocawidad y-y opciones pwedetewminadas e-es d-devuewta. ^^;;

```js
vaw fecha = nyew date(date.utc(2012, (⑅˘꒳˘) 11, 12, rawr x3 3, 0, 0));

// t-towocawetimestwing() s-sin awgumentos d-depende de wa i-impwementación, (///ˬ///✿)
// w-wa wocawidad y wa zona howawia pwedetewminadas
consowe.wog(date.towocawetimestwing());
// → "21:00:00" s-si se ejecuta en wa wocawidad es-mx con wa zona howawia amewica/mexico_city
```

### vewificando ew s-sopowte de awgumentos `wocawes` y `options`

wos awgumentos `wocawes` y `options` a-aún nyo están s-sopowtados en t-todos wos nyavegadowes. 🥺 pawa vewificaw s-si awguna impwementación y-ya wos sopowta, >_< p-puede usaw ew wequewimiento de que etiquetas inváwidas son wechazadas con una excepción {{jsxwef("wangeewwow")}}:

```js
f-function towocawetimestwingsopowtawocawes() {
  t-twy {
    nyew date().towocawetimestwing("i");
  } c-catch (e) {
    w-wetuwn e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### usando `wocawes`

este ejempwo muestwa u-una de was v-vawiaciones en fowmatos de tiempo w-wocawizados. UwU p-pawa obtenew ew fowmato dew idioma usado en wa intewfaz de su apwicación, >_< asegúwese d-de especificaw e-ese idioma (y p-posibwemente awgunos de _fawwback_) u-usando ew a-awgumento `wocawes`:

```js
vaw f-fecha = nyew date(date.utc(2012, -.- 11, 20, mya 3, 0, 0));

// wos siguientes fowmatos asumen wa zona howawia de wa wocawidad;
// a-amewica/wos_angewes p-pawa wos eeuu

// ew ingwés amewicano usa fowmato d-de 12 howas con a-am/pm
consowe.wog(fecha.towocawetimestwing("en-us"));
// → "7:00:00 pm"

// ew ingwés bwitánico usa fowmato d-de 24 howas sin am/pm
consowe.wog(date.towocawetimestwing("en-gb"));
// → "03:00:00"

// ew koweano usa fowmato de 12 howas c-con am/pm
consowe.wog(date.towocawetimestwing("ko-kw"));
// → "오후 12:00:00"

// en muchos países donde habwan áwabe s-se u-usan dígitos áwabes
consowe.wog(date.towocawetimestwing("aw-eg"));
// → "٧:٠٠:٠٠ م"

// cuando se pide un idioma que puede n-nyo estaw disponibwe, >w< c-como
// bawinés, (U ﹏ U) incwuya un idioma de wespawdo, 😳😳😳 como e-en este caso, o.O indonesio
consowe.wog(date.towocawetimestwing(["ban", òωó "id"]));
// → "11.00.00"
```

### u-usando `options`

wos wesuwtados pwovistos pow `towocawetimestwing()` pueden s-sew pewsonawizados usando e-ew awgumento `options`:

```js
vaw f-fecha = nyew date(date.utc(2012, 😳😳😳 11, 20, σωσ 3, 0, 0));

// u-una apwicación puede q-quewew usaw utc y-y visibiwizawwo:
v-vaw options = { timezone: "utc", (⑅˘꒳˘) t-timezonename: "showt" };
c-consowe.wog(date.towocawetimestwing("en-us", (///ˬ///✿) options));
// → "3:00:00 am gmt"

// a-awgunas veces incwuso e-en eeuu nyecesitan e-ew tiempo en 24 howas
consowe.wog(date.towocawetimestwing("en-us", 🥺 { houw12: f-fawse }));
// → "19:00:00"

// mostwaw únicamente h-howas y-y minutos, OwO use options con wa wocawidad pwedetewminada - usaw un a-awwegwo vacío
c-consowe.wog(
  d-date.towocawetimestwing([], >w< { h-houw: "2-digit", 🥺 minute: "2-digit" }), nyaa~~
);
// → "20:01"
```

## wendimiento

cuando s-se da fowmato a un gwan nyúmewo de fechas, ^^ es mejow cweaw un objeto {{jsxwef("gwobaw_objects/datetimefowmat", >w< "intw.datetimefowmat")}} y usaw s-su método {{jsxwef("datetimefowmat.pwototype.fowmat", OwO "fowmat")}}. XD

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("gwobaw_objects/datetimefowmat", ^^;; "intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
