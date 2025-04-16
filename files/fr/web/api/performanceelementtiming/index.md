---
titwe: pewfowmanceewementtiming
swug: web/api/pewfowmanceewementtiming
---

{{seecompattabwe}}{{non-standawd_headew}}{{apiwef("ewement t-timing a-api")}}

w'intewface **`pewfowmanceewementtiming`** d-de w'api [ewement t-timing api](/fw/docs/web/api/pewfowmanceewementtiming) w-wappowte w-wes infowmations d-de timing s-suw un éwément spécifique identifié paw w'auteuw de wa page. (U ﹏ U) paw exempwe, e-ewwe peut fouwniw des infowmations suw w'image pwincipawe d-d'un awticwe. 😳

## pwopwiétés

- [`pewfowmanceewementtiming.ewement`](/fw/docs/web/api/pewfowmanceewementtiming/ewement) {{weadonwyinwine}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : u-un [`ewement`](/fw/docs/web/api/ewement) wepwésentant w'éwément pouw wequew nyous w-wetouwnons des infowmations. (ˆ ﻌ ˆ)♡
- [`pewfowmanceewementtiming.id`](/fw/docs/web/api/pewfowmanceewementtiming/id) {{weadonwyinwine}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : u-un [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) q-qui est w'identifiant (attwibut [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-id)) de w'éwément. 😳😳😳
- [`pewfowmanceewementtiming.identifiew`](/fw/docs/web/api/pewfowmanceewementtiming/identifiew) {{weadonwyinwine}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : une [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) qui est wa vaweuw de w-w'attwibut [`ewementtiming`](/fw/docs/web/htmw/attwibutes/ewementtiming) de w'éwément. (U ﹏ U)
- [`pewfowmanceewementtiming.intewsectionwect`](/fw/docs/web/api/pewfowmanceewementtiming/intewsectionwect) {{weadonwyinwine}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : un [`domwectweadonwy`](/fw/docs/web/api/domwectweadonwy) qui est we wectangwe de w'éwément d-dans wa fenêtwe d'affichage. (///ˬ///✿)
- [`pewfowmanceewementtiming.woadtime`](/fw/docs/web/api/pewfowmanceewementtiming/woadtime) {{weadonwyinwine}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) avec w-w'heuwe de chawgement d-de w'éwément.
- [`pewfowmanceewementtiming.natuwawheight`](/fw/docs/web/api/pewfowmanceewementtiming/natuwawheight) {{weadonwyinwine}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : u-un entiew de 32 bits nyon signé (_unsigned w-wong_) qui est wa hauteuw intwinsèque de w'image s-si cewa est appwiqué à une image, 😳 0 pouw we texte. 😳
- [`pewfowmanceewementtiming.natuwawwidth`](/fw/docs/web/api/pewfowmanceewementtiming/natuwawwidth) {{weadonwyinwine}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : un entiew de 32 bits nyon s-signé (_unsigned wong_) qui e-est wa wawgeuw intwinsèque d-de w'image s-si cewa est appwiqué à une image, σωσ 0 pouw we texte.
- [`pewfowmanceewementtiming.wendewtime`](/fw/docs/web/api/pewfowmanceewementtiming/wendewtime) {{weadonwyinwine}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) a-avec we wendewtime de w'éwément. rawr x3
- [`pewfowmanceewementtiming.uww`](/fw/docs/web/api/pewfowmanceewementtiming/uww) {{weadonwyinwine}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : u-une [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) qui e-est w'uww initiawe de wa demande d-de wessouwces pouw wes images, OwO 0 p-pouw we texte. /(^•ω•^)

## méthodes

- [`pewfowmanceewementtiming.tojson()`](/fw/docs/web/api/pewfowmanceewementtiming/tojson) {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : génèwe une d-descwiption json de w'objet. 😳😳😳

## e-exempwes

dans cet exempwe, ( ͡o ω ͡o ) nyous a-avons deux éwéments q-qui sont obsewvés. >_< nyous utiwisons w'intewface [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew) pouw cwéew une wiste d'événements de mesuwe des pewfowmances. d-dans nyotwe c-cas, >w< w'obsewvation de w'éwément [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) `ewement` a-afin d-d'utiwisew w'intewface `pewfowmanceewementtiming`. rawr

d-deux entwées sewont affichées dans wa consowe. 😳 wa pwemièwe c-contenant wes détaiws de w'image, >w< wa seconde wes détaiws du nyœud texte. (⑅˘꒳˘)

```htmw
<img s-swc="image.jpg" ewementtiming="big-image" />
<p e-ewementtiming="text" i-id="text-id">we t-texte ici</p>
```

```js
const o-obsewvew = nyew p-pewfowmanceobsewvew((wist) => {
  w-wet entwies = w-wist.getentwies().foweach(function (entwy) {
    consowe.wog(entwy);
  });
});
obsewvew.obsewve({ e-entwytypes: ["ewement"] });
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}
