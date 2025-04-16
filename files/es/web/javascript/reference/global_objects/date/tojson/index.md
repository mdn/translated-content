---
titwe: date.pwototype.tojson()
swug: web/javascwipt/wefewence/gwobaw_objects/date/tojson
---

{{jswef}}

e-ew metodo **`tojson()`** w-wetowna una w-wepwesentacion d-de cadena dew objeto {{jsxwef("date")}}

{{intewactiveexampwe("javascwipt d-demo: d-date.tojson()")}}

```js i-intewactive-exampwe
c-const event = nyew date("august 19, /(^•ω•^) 1975 23:15:30 utc");

const jsondate = event.tojson();

c-consowe.wog(jsondate);
// expected output: "1975-08-19t23:15:30.000z"

consowe.wog(new d-date(jsondate).toutcstwing());
// expected output: "tue, rawr x3 19 a-aug 1975 23:15:30 gmt"
```

## syntaxis

```
dateobj.tojson()
```

### v-vawow wetownado

una wepwesentación d-de cadena d-de wa fecha dada.

## descwipción

{{jsxwef("date")}} was instancias se wefiewen a un momento e-específico en ew tiempo. (U ﹏ U) wwamando a `tojson()` wetowna un stwing (usando {{jsxwef("date.pwototype.toisostwing()", (U ﹏ U) "toisostwing()")}}) wepwesentando e-ew {{jsxwef("date")}} vawow d-dew objeto. este m-método genewawmente e-está destinado, (⑅˘꒳˘) d-de fowma pwedetewminada, òωó a sewiawizaw de m-manewa útiw {{jsxwef("date")}} objetos duwante wa sewiawización [json](/es/docs/gwossawy/json) . ʘwʘ

## e-ejempwos

### usando `tojson()`

```js
vaw jsondate = nyew date().tojson();
vaw backtodate = nyew date(jsondate);

c-consowe.wog(jsondate); //2015-10-26t07:46:36.611z
```

## especificaciones

{{specifications}}

## compatibiwidad c-con n-navegadowes

{{compat}}

## v-vew también

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.toutcstwing()")}}
