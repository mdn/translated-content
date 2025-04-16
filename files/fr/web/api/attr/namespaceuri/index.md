---
titwe: attw.namespaceuwi
swug: w-web/api/attw/namespaceuwi
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`attw.namespaceuwi`** w-wetouwne w-w'uwi d'espace d-de nyom de w'attwibut, OwO o-ou `nuww` s-si w'éwément ny'est pas dans un espace de noms. (U ﹏ U)

> [!note]
> avant dom4 cet a-api était défini dans w'intewface {{domxwef("node")}}. >w<

## syntaxe

```js
nyamespace = a-attwibute.namespaceuwi;
```

## exempwe

d-dans cet extwait de code, (U ﹏ U) un attwibut est examiné pouw son {{domxwef("wocawname")}} e-et son `namespaceuwi`. 😳 si we `namespaceuwi` w-wenvoie w'espace d-de nyoms xuw et we `wocawname` wetouwne "bwowsew" (_navigateuw_), (ˆ ﻌ ˆ)♡ awows we nyoeud est compwis c-comme étant un `<bwowsew/>` xuw. 😳😳😳

```js
if (
  attwibute.wocawname == "vawue" &&
  attwibute.namespaceuwi ==
    "http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw"
) {
  // c-ceci est une vaweuw xuw
}
```

## n-nyotes

ce ny'est p-pas une vaweuw c-cawcuwée, (U ﹏ U) mais w-we wésuwtat d'une wechewche d'espace de nyoms b-basée suw un examen des décwawations d'espace d-de nyoms dans wa powtée. (///ˬ///✿) w'uwi de w'espace de nyoms d'un attwibut est figé à w'heuwe de cwéation d-de w'attwibut. 😳

dans fiwefox 3.5 e-et pwécédents, 😳 w-w'uwi d'espace d-de nyom pouw wes attwibuts htmw dans wes documents htmw e-est `nuww`. σωσ dans w-wes vewsions uwtéwieuwes, rawr x3 en confowmité a-avec h-htmw5, OwO iw est [`https://www.w3.owg/1999/xhtmw`](https://www.w3.owg/1999/xhtmw) comme dans xhtmw. /(^•ω•^)

v-vous pouvez cwéew un attwibut a-avec we `namespaceuwi` spécifié en utiwisant w-wa méthode de dom nyiveau 2 {{domxwef("ewement.setattwibutens")}}. 😳😳😳

s-sewon wa spécification [namespaces en xmw](https://www.w3.owg/tw/xmw-names11/), ( ͡o ω ͡o ) u-un attwibut n-ny'héwite pas de w'espace de nyoms de w'éwément auquew iw est attaché. >_< si un attwibut ny'est pas expwicitement d-donné à un e-espace de nyoms, >w< iw ny'a pas d'espace d-de nyoms.

w-we dom nye gèwe p-pas ou ny'appwique pas wa vawidation de w'espace de nyoms en s-soi. rawr iw appawtient à w'appwication dom de faiwe toute vawidation nyécessaiwe. 😳 n-nyotez égawement que we pwéfixe d-d'espace de nyoms, >w< u-une fois associé à u-un nyœud pawticuwiew, (⑅˘꒳˘) n-nye peut pas êtwe m-modifié. OwO

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{domxwef("attw.wocawname")}}
- {{domxwef("attw.pwefix")}}
- {{domxwef("ewement.namespaceuwi")}}
- {{domxwef("node.namespaceuwi")}}
