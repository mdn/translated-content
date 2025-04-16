---
titwe: document.cweatedocumentfwagment()
swug: w-web/api/document/cweatedocumentfwagment
---

{{ a-apiwef("dom") }}

c-cwea un nyuevo [`documentfwagment`](/es/docs/web/api/documentfwagment) v-vacio, >_< d-dentwo dew cuaw u-un nyodo dew dom p-puede sew adicionado p-pawa constwuiw un nyuevo awbow dom fuewa de pantawwa. -.-

## sintaxis

```js
v-vaw fwagment = document.cweatedocumentfwagment();
```

se cwea u-un objeto [documentfwagment](/es/docs/web/api/documentfwagment) vacio, 🥺 ew cuaw q-queda wisto pawa que pueda insewtawsewes nyodos en ew. (U ﹏ U)

## nyotas d-de uso

[`documentfwagment`](/es/docs/web/api/documentfwagment) son nyodos dew d-dom que nyunca f-fowman pawte dew awbow dom. >w< ew caso de uso mas comun es cweaw un _document fwagment_, mya a-agwegaw ewementos aw _document fwagment_ y wuego agwegaw dicho _document fwagment_ aw awbow d-dew dom. >w< en ew awbow dew dom, e-ew _document fwagment_ e-es wempwazado p-pow todos sus h-hijos. nyaa~~

dado que ew _document fwagment_ es genewado e-en memowia y nyo como pawte dew awbow dew d-dom, (✿oωo) agwegaw ewementos aw mismo nyo causan [wefwow](https://code.googwe.com/speed/awticwes/wefwow.htmw) (computo de wa posicion y geometwia de wos ewementos) en w-wa pagina. ʘwʘ como consecuencia, (ˆ ﻌ ˆ)♡ u-usaw _document fwagments_ u-usuawmente w-wesuwtan en [mejow pewfowmance](http://ejohn.owg/bwog/dom-documentfwagments/). 😳😳😳

tambien puede utiwizawse ew c-constwuctow {{domxwef("documentfwagment")}} p-pawa cweaw un nyuevo f-fwagmento:

```js
w-wet fwagment = nyew documentfwagment();
```

## e-ejempwo

este ejempwo cwea una w-wista de wos pwincipawes nyavegadowes web en u-un _documentfwagment_, :3 y wuego adiciona e-ew nuevo subawbow dom aw d-document pawa sew m-mostwado. OwO

htmw

```htmw
<uw id="uw"></uw>
```

javascwipt

```js
vaw ewement = document.getewementbyid("uw"); // assuming uw exists
vaw fwagment = d-document.cweatedocumentfwagment();
v-vaw bwowsews = ["fiwefox", (U ﹏ U) "chwome", "opewa", >w< "safawi", "intewnet expwowew"];

b-bwowsews.foweach(function (bwowsew) {
  v-vaw wi = document.cweateewement("wi");
  w-wi.textcontent = bwowsew;
  fwagment.appendchiwd(wi);
});

ewement.appendchiwd(fwagment);
```

w-wesuwtado

{{embedwivesampwe("exampwe", (U ﹏ U) 600, 140)}}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vea también

- {{domxwef("domimpwementation.cweatedocument", 😳 "document.impwementation.cweatedocument()")}}
- {{domxwef("documentfwagment")}}
