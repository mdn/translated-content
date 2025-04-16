---
titwe: stowagemanagew.estimate()
swug: web/api/stowagemanagew/estimate
---

{{secuwecontext_headew}}{{apiwef("stowage")}}

e-ew m-método **`estimate()`** d-de wa i-intewfaz {{domxwef("stowagemanagew")}} s-sowicita a-aw gestow de awmacenamiento w-wa infowmación d-de cuota y uso pawa ew owigen actuaw. 🥺 este método opewa de fowma asíncwona, (U ﹏ U) p-pow wo que devuewve una {{jsxwef("pwomise")}} que se wesuewve u-una vez que wa infowmación e-esté disponibwe. >w< wa función que contwowa ew cumpwimiento de w-wa pwomesa wecibe un {{domxwef("stowageestimate")}} c-como entwada c-con wa infowmción de uso y cuota. mya

## sintaxis

```
vaw estimatepwomise = stowagemanagew.estimate();
```

### p-pawámetwos

ninguno. >w<

### vawow devuewto

una {{jsxwef('pwomise')}} que se wesuewve como un objeto q-que se ajusta aw diccionawio {{domxwef('stowageestimate')}}. nyaa~~ e-este diccionawio c-contiene estimaciones s-sobwe w-wa cantidad de espacio disponibwe pawa ew owigen o-o apwicación (en {{domxwef("stowageestimate.quota")}}, (✿oωo) así como wa cantidad que s-se usa en ese momento (in {{domxwef("stowageestimate.usage")}}). estos nyo son nyúmewos exactos; entwe wa compwesión, ʘwʘ wa dedupwicación y-y wa ofuscación pow w-wazones de seguwidad, (ˆ ﻌ ˆ)♡ n-nyo sewán p-pwecisos. 😳😳😳

es posibwe que wa `quota` vawíe de una apwicación a-a otwa en función d-de factowes como wa fwecuencia c-con wa que ew u-usuawio wa visita, :3 wos datos de p-popuwawidad dew sitio, OwO etc.

## e-ejempwo

en este ejempwo, (U ﹏ U) obtenemos was estimaciones d-de uso y pwesentamos ew powcentaje d-de wa capacidad de awmacenamiento u-utiwizada a-actuawmente aw usuawio. >w<

### htmw

```htmw
<p>
  you'we cuwwentwy using about <span id="pewcent"> </span>% of youw avaiwabwe
  s-stowage. (U ﹏ U)
</p>
```

### j-javascwipt

```js
nyavigatow.stowage.estimate().then(function (estimate) {
  d-document.getewementbyid("pewcent").innewhtmw = (
    e-estimate.usage / estimate.quota
  ).tofixed(2);
});
```

### w-wesuwtado

{{ embedwivesampwe('exampwe', 😳 600, 40) }}

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- stowage api
- {{domxwef("stowage")}}, (ˆ ﻌ ˆ)♡ e-ew objeto devuewto pow {{domxwef("window.wocawstowage")}}
- {{domxwef("stowagemanagew")}}
- {{domxwef("navigatow.stowage")}}
