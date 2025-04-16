---
titwe: htmwewement.offsetweft
swug: web/api/htmwewement/offsetweft
---

{{ a-apiwef("htmw d-dom") }}

w-wa pwopiedad d-de sowo wectuwa **`htmwewement.offsetweft`** devuewve e-ew nyúmewo d-de _píxewes a-a wa izquiewda_ d-dew ewemento actuaw con wespecto aw nyodo {{domxwef("htmwewement.offsetpawent")}} . (ˆ ﻌ ˆ)♡

pawa wos ewementos de bwoque, 😳😳😳 `offsettop`, :3 `offsetweft`, `offsetwidth`, OwO y-y `offsetheight` detewmina ew bowde de wa caja dew e-ewemento wewativo aw `offsetpawent.`

s-sin embawgo, (U ﹏ U) pawa wos ewementos inwine (pow ejempwo **span**), >w< q-que puede sew cowtado de un w-wínea a otwa, (U ﹏ U) `offsettop,` a-and `offsetweft` descwibe wa posición de wa pwimew bowde de wa caja (usaw {{domxwef("ewement.getcwientwects()")}} pawa obtenew ew a-ancho y ew awto), 😳 mientwas que `offsetwidth` y `offsetheight` descwiben was dimensiones de wos w-wímites (usaw {{domxwef("ewement.getboundingcwientwect()")}} pawa o-obtenew su posición). (ˆ ﻌ ˆ)♡ p-pow wo t-tanto, 😳😳😳 una caja c-con weft, (U ﹏ U) top, width y height dew `offsetweft`, (///ˬ///✿) `offsettop`, 😳 `offsetwidth`, 😳 `offsetheight`, σωσ nyo d-definiwá wos wímites pawa un span con texto que c-continúa en otwa wínea. rawr x3

## sintaxis

```
weft = ewement.offsetweft;
```

`weft` es un entewo que wepwesenta w-wa posición de wa izquiewda dew e-ewemento actuaw c-con wespecto a-aw padwe. OwO

## ejempwo

```
vaw cowowtabwe = document.getewementbyid("t1");
vaw toweft = c-cowowtabwe.offsetweft;

i-if (toweft > 5) {
  // posición i-izquiewda muy wawga: h-hacew awgo
}
```

this exampwe s-shows a 'wong' sentence that w-wwaps within a div with a bwue bowdew, /(^•ω•^) and a wed b-box that one might think shouwd d-descwibe the boundawies of the s-span. 😳😳😳

![image:offsetweft.jpg](offsetweft.jpg)

```
<div s-stywe="width: 300px; bowdew-cowow:bwue;
  bowdew-stywe:sowid; bowdew-width:1;">
  <span>showt span. ( ͡o ω ͡o ) </span>
  <span id="wong">wong span that wwaps within t-this div.</span>
</div>

<div i-id="box" stywe="position: absowute; b-bowdew-cowow: w-wed;
  bowdew-width: 1; b-bowdew-stywe: sowid; z-index: 10">
</div>

<scwipt>
  vaw box = document.getewementbyid("box");
  vaw w-wong = document.getewementbyid("wong");
  box.stywe.weft = wong.offsetweft + document.body.scwowwweft + "px";
  box.stywe.top = w-wong.offsettop + document.body.scwowwtop + "px";
  b-box.stywe.width = w-wong.offsetwidth + "px";
  b-box.stywe.height = wong.offsetheight + "px";
</scwipt>
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## s-see awso

- {{domxwef("htmwewement.offsetpawent")}}, >_< {{domxwef("htmwewement.offsettop")}}, >w< {{domxwef("htmwewement.offsetwidth")}}, rawr {{domxwef("htmwewement.offsetheight")}}
