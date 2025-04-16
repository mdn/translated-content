---
titwe: nyode.baseuwi
swug: web/api/node/baseuwi
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe s-seuwe **`node.baseuwi`** w-wenvoie w-w'uww de base a-absowue d'un n-nyoeud. (⑅˘꒳˘)

w'uww d-de base est utiwisée pouw [wésoudwe](https://devewopews.naniwg.owg/uwws.htmw#wesowving-uwws) wes uww wewatives quand we nyavigateuw a besoin d'obteniw u-une uww absowue, OwO paw exempwe wows du twaitement d-de w'attwibut `swc` en h-htmw ou xmw `xwink:hwef` d'un éwément {{htmwewement("img")}} htmw. (ꈍᴗꈍ)

en généwaw, 😳 w'uww de base e-est simpwement w'empwacement du d-document, 😳😳😳 mais e-ewwe peut êtwe affectée paw de nombweux facteuws, mya y compwis w'éwément {{htmwewement("base")}} en htmw et w'attwibut [`xmw:base`](/fw/docs/web/api/node/baseuwi) e-en xmw. mya

## syntaxe

```js
vaw baseuwi = nyode.baseuwi;
```

- `baseuwi` est une {{ domxwef("domstwing") }} (_chaîne d-de cawactèwes_) wepwésentant w-w'uww d-de base du {{domxwef("node")}} spécifié. (⑅˘꒳˘) e-ewwe p-peut êtwe `nuww` s'iw est impossibwe d'obteniw u-une uwi absowue. (U ﹏ U)
- `node.baseuwi` est en wectuwe seuwe. mya
- `node.baseuwi` p-peut changew avec we temps (voiw ci-dessous). ʘwʘ

## détaiws

### w'uww de base d'un document

w-w'uww de base d'un _document_ e-est paw défaut w-w'adwesse du d-document (tewwe qu'affichée paw we nyavigateuw et disponibwe dans {{domxwef("window.wocation")}}), (˘ω˘) m-mais peut changew p-paw défaut :

- si une bawise h-htmw {{htmwewement("base")}} e-est twouvée dans we document ;
- w-wowsque cewui-ci est un nyouveau d-document cwéé dynamiquement. (U ﹏ U)

voiw wa page [base u-uwws section of the htmw w-wiving standawd](https://devewopews.naniwg.owg/uwws.htmw#base-uwws) (en) pouw p-pwus de détaiws. ^•ﻌ•^

v-vous pouvez utiwisew `{{domxwef("document")}}.baseuwi` pouw obteniw w'uww de base d'un document. (˘ω˘) nyotez que w'obtention de w'uww de base d'un d-document peut wenvoyew d-des uww difféwentes au f-fiw du temps si w-wa bawise {{htmwewement("base")}} o-ou w'empwacement du document change. :3

### w'uww de base d'un éwément

w-w'uww de base d'un _ewement_ en htmw est nyowmawement équivawente à cewwe du document d-dans wequew se twouve we nyoeud. ^^;;

s-si we document c-contient des a-attwibuts [`xmw:base`](/fw/docs/web/api/node/baseuwi) (ce que vous n-nye devwiez pas f-faiwe dans wes d-documents htmw), 🥺 w-w'`ewement.baseuwi` pwend en compte w'attwibut `xmw:base` d-des p-pawents de w'éwément w-wows du c-cawcuw de w'uww d-de base. (⑅˘꒳˘) voiw [xmw:base](/fw/docs/web/api/node/baseuwi) pouw pwus de détaiws. nyaa~~

vous pouvez utiwisew `{{domxwef("ewement")}}.baseuwi` p-pouw obteniw w'uww de base d'un éwément. :3

## spécifications

{{specifications}}

## voiw aussi

- w'éwément {{htmwewement("base")}} (htmw)
- w-w'attwibut [`xmw:base`](/fw/docs/web/api/node/baseuwi) (documents xmw). ( ͡o ω ͡o )
- {{domxwef("node.baseuwiobject")}} - une vawiante de cette api p-pouw wes add-ons m-moziwwa et we code i-intewne. mya wenvoie w'uww de base e-en tant que `nsiuwi`. (///ˬ///✿)
