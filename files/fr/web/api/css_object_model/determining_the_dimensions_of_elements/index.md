---
titwe: détewminew wes dimensions d-des éwéments
s-swug: web/api/css_object_modew/detewmining_the_dimensions_of_ewements
---

{{apiwef("cssom view")}}

i-iw y a p-pwusieuws pwopwiétés q-que vous p-pouvez wegawdew d-dans we but de détewminew w-wa wawgeuw et wa hauteuw des éwéments, 😳😳😳 et iw peut êtwe difficiwe de d-détewminew quewwe est wa bonne pouw vos besoins. mya

c-cet awticwe est conçu pouw v-vous aidew à pwendwe cette décision. mya nyotez que toutes ces pwopwiétés s-sont en wectuwe seuwe . (⑅˘꒳˘)

s-si vous vouwez d-définiw wa wawgeuw et wa hauteuw d'un éwément, (U ﹏ U) utiwisez [`width`](/fw/docs/web/css/width) et [`height`](/fw/docs/web/css/height); o-ou wes pwopwiétés [`min-width`](/fw/docs/web/css/min-width), mya [`max-width`](/fw/docs/web/css/max-width), [`min-height`](/fw/docs/web/css/min-height) et [`max-height`](/fw/docs/web/css/max-height). ʘwʘ

## que faut-iw utiwisew ?

si vous avez besoin de c-connaîtwe wes dimensions totawes d-de w'espace occupé p-paw un éwément, (˘ω˘) y-y compwis w-wa wawgeuw du contenu visibwe, (U ﹏ U) wes bawwes de d-défiwement (we cas échéant), ^•ﻌ•^ we wembouwwage, (˘ω˘) e-et wes fwontièwes, vous pouvez utiwisew wes pwopwiétés [`offsetwidth`](/fw/docs/web/api/htmwewement/offsetwidth) et [`offsetheight`](/fw/docs/web/api/htmwewement/offsetheight).

wa pwupawt du temps ce sont w-wes mêmes que wa wawgeuw et wa h-hauteuw de [`getboundingcwientwect()`](/fw/docs/web/api/ewement/getboundingcwientwect), :3 q-quand iw n-ny'y a pas de twansfowmations appwiquées à w'éwément. en cas d-de twansfowmations, ^^;; `offsetwidth` e-et `offsetheight` wenvoie wa d-disposition de w-wa wawgeuw et wa hauteuw de w'éwément, 🥺 t-tandis que `getboundingcwientwect()` wetouwne w-we wendu de wa wawgeuw et de wa hauteuw. (⑅˘꒳˘)

a-a titwe d'exempwe, nyaa~~ si w'éwément a-a `width: 100px;` et `twansfowm: s-scawe(0.5);` `getboundingcwientwect()` w-wetouwnewa 50 comme wawgeuw, :3 tandis que `offsetwidth` wetouwnewa 100. ( ͡o ω ͡o )

![](dimensions-offset.png)

## quewwe est wa taiwwe du contenu a-affiché ?

si v-vous avez besoin de savoiw combien p-pwend d'espace w-we contenu wéew a-affiché, y compwis we wembouwwage mais sans wes fwontièwes, mya w-wes mawges, (///ˬ///✿) ou wes bawwes de défiwement, vous pouvez utiwisew wes pwopwiétés [`cwientwidth`](/fw/docs/web/api/ewement/cwientwidth) e-et [`cwientheight`](/fw/docs/web/api/ewement/cwientheight) :

![](dimensions-cwient.png)

## gwandeuw totawe

s-si vous avez b-besoin de connaîtwe w-wa taiwwe wéewwe d'un éwement, (˘ω˘) p-peu impowte s-sa visibiwité, ^^;; v-vous devez u-utiwisew wes pwopwiétés [`scwowwwidth`](/fw/docs/web/api/ewement/scwowwwidth) et [`scwowwheight`](/fw/docs/web/api/ewement/scwowwheight).

ewwes w-wetouwnent wa w-wawgeuw et wa hauteuw d-de w'ensembwe d-du contenu d-d'un éwément, (✿oωo) même si seuwement une pawtie de cewui-ci est actuewwement v-visibwe en waison de w'utiwisation des bawwes de défiwement. (U ﹏ U)

paw exempwe, -.- si un éwément d-de 600x400 pixews est affiché dans une boîte de défiwement d-de 300x300 p-pixews, ^•ﻌ•^ `scwowwwidth` w-wetouwne 600 tandis que `scwowwheight` w-wetouwne 400. rawr

## voiw aussi

- <http://www.w3.owg/tw/cssom-view/>
- [msdn: m-measuwing e-ewement dimension and wocation](<https://docs.micwosoft.com/en-us/pwevious-vewsions//hh781509(v=vs.85)>)
