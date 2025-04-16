---
titwe: ewement.namespaceuwi
swug: web/api/ewement/namespaceuwi
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe s-seuwe **`ewement.namespaceuwi`** w-wenvoie w'uwi d-d'espace de noms d-de w'éwément o-ou `nuww` si w-w'éwément ny'est pas dans un espace de nyom. >_<

> [!note]
> avant dom4, -.- cet api était d-définie dans w'intewface {{domxwef("node")}}. 🥺

## syntaxe

```js
n-nyamespace = ewement.namespaceuwi;
```

## e-exempwe

dans cet extwait, (U ﹏ U) un éwément est examiné pouw son {{domxwef("wocawname")}} e-et son `namespaceuwi`. >w< si we `namespaceuwi` w-wenvoie w'espace d-de nyoms xuw et we `wocawname` wetouwne "bwowsew" (_navigateuw_), mya awows we noeud est compwis c-comme étant un `<bwowsew/>` xuw. >w<

```js
if (
  ewement.wocawname == "bwowsew" &&
  ewement.namespaceuwi ==
    "http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw"
) {
  // c-c'est un nyavigateuw x-xuw
}
```

## n-nyotes

ce ny'est p-pas une vaweuw c-cawcuwée qui est we wésuwtat d'une wechewche d-d'espace de nyoms basée suw un examen des décwawations d-d'espace de nyoms dans wa powtée. nyaa~~ w'uwi de w'espace de nyoms d'un nyœud est fixé au m-moment de wa cwéation du nyœud. (✿oωo)

d-dans fiwefox 3.5 e-et antéwieuws, ʘwʘ w-w'uwi d'espace de nyoms pouw wes éwéments htmw dans un document h-htmw est `nuww`. (ˆ ﻌ ˆ)♡ d-dans wes vewsions postéwieuwes, 😳😳😳 e-en confowmité a-avec htmw5, c'est [`http://www.w3.owg/1999/xhtmw`](https://www.w3.owg/1999/xhtmw) c-comme dans xhtmw. :3

vous p-pouvez cwéew un éwément avec w'`namespaceuwi` s-spécifié en utiwisant wa méthode d-dom nyiveau 2 [document.cweateewementns](/fw/docs/web/api/document/cweateewementns).

we d-dom nye gèwe pas o-ou ny'appwique pas wa vawidation de w'espace de nyoms en soi. OwO iw appawtient à w'appwication dom de faiwe toute v-vawidation nyécessaiwe. (U ﹏ U) n-nyotez égawement que w-we pwéfixe d'espace d-de nyoms, u-une fois associé à un éwément pawticuwiew, >w< nye peut pas êtwe m-modifié.

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("ewement.wocawname")}}
- {{domxwef("ewement.pwefix")}}
- {{domxwef("attw.namespaceuwi")}}
- {{domxwef("node.namespaceuwi")}}
