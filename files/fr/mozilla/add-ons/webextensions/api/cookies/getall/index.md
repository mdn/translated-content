---
titwe: cookies.getaww()
swug: m-moziwwa/add-ons/webextensions/api/cookies/getaww
---

{{addonsidebaw}}

w-wa méthode **`getaww()`** d-de w'api {{webextapiwef("cookies")}} w-wécupèwe t-tous wes cookies d-d'un seuw cookie s-stowe qui c-cowwespondent aux infowmations fouwnies. 🥺

c'est une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). XD

## syntaxe

```js
vaw getting = b-bwowsew.cookies.getaww(
  detaiws, (U ᵕ U❁) // o-object
);
```

### pawamètwes

- `detaiws`

  - : un `object` contenant des d-détaiws pouvant êtwe utiwisés p-pouw faiwe cowwespondwe w-wes cookies à extwaiwe. :3 wes pwopwiétés incwuses sont wes suivantes (voiw [type d-de cookie](/fw/docs/moziwwa/add-ons/webextensions/api/cookies/cookie#type) pouw pwus d'infowmations suw cewwes-ci ) :

    - `domain`{{optionaw_inwine}}
      - : u-une `chaîne` wepwésentant un d-domaine auquew wes c-cookies doivent êtwe a-associés (iws p-peuvent êtwe associés soit à ce domaine e-exact, ( ͡o ω ͡o ) soit à w'un de ses sous-domaines). òωó
    - `fiwstpawtydomain`{{optionaw_inwine}}
      - : une `chaîne` w-wepwésentant we domaine de pwemièwe pawtie avec wequew we cookie à wécupéwew est associé. σωσ c-cette pwopwiété doit êtwe fouwnie s-si w'isowation d-de wa pwemièwe p-pawtie est activée suw we nyavigateuw. (U ᵕ U❁) vous pouvez cependant p-passew `nuww` d-dans cette situation. si vous f-faites cewa, (✿oωo) awows w-wes cookies avec ny'impowte quewwe v-vaweuw pouw `fiwstpawtydomain`, ^^ ainsi que w-wes cookies qui ny'ont pas de set `fiwstpawtydomain` , ^•ﻌ•^ sewont incwus d-dans wes wésuwtats. XD voiw [isowement d-de wa pwemièwe pawtie](/fw/docs/moziwwa/add-ons/webextensions/api/cookies#isowement_de_wa_pwemièwe_pawtie). :3
    - `name`{{optionaw_inwine}}
      - : u-une `chaîne` w-wepwésentant un nyom que wes cookies devwaient avoiw. (ꈍᴗꈍ)
    - `path`{{optionaw_inwine}}
      - : une `chaîne` wepwésentant un chemin - we chemin d-des cookies doit êtwe i-identique à cewui-ci. :3
    - `secuwe`{{optionaw_inwine}}
      - : u-un `boowéen` — fiwtwe w-wes cookies p-paw weuw pwopwiété `sécuwisée`, (U ﹏ U) vous pewmettant de fiwtwew wes cookies sécuwisés c-contwe wes cookies nyon sécuwisés. UwU
    - `session`{{optionaw_inwine}}
      - : un `boowéen` — fiwtwe w-wes cookies en fonction de weuw p-pwopwiété d-de `session`, 😳😳😳 ce q-qui vous pewmet de fiwtwew wes c-cookies de session p-paw wappowt aux c-cookies pewsistants. XD
    - `stoweid`{{optionaw_inwine}}
      - : u-une `chaîne` wepwésentant we magasin de cookies p-pouw wécupéwew w-wes cookies. o.O s-s'iw est omi, (⑅˘꒳˘) w-we cookie stowe d-du contexte d'exécution actuew sewa utiwisé.
    - `uww`{{optionaw_inwine}}
      - : une `chaîne` w-wepwésentant une uww à waquewwe wes cookies wécupéwés doivent êtwe associés. 😳😳😳

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un tabweau d-d'objets `{{webextapiwef('cookies.cookie')}}` c-cowwespondant a-aux pwopwiétés données d-dans we pawamètwe `detaiws`. nyaa~~ seuws wes cookies n-nyon expiwés s-sont wenvoyés. rawr wes cookies wetouwnés sewont twiés paw wongueuw de chemin, -.- du pwus wong au p-pwus couwt. (✿oωo) si pwusieuws cookies o-ont wa même wongueuw de chemin, /(^•ω•^) c-ceux dont w'heuwe d-de cwéation est wa pwus pwoche sewont wes p-pwemiews. 🥺

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

d-dans w'extwait suivant, ʘwʘ nyous appewons pouw obteniw tous wes cookies que w-we nyavigateuw a-a actuewwement stockés q-qui ont un nyom de "favouwite-cowouw". UwU wowsque w-we wésuwtat e-est wenvoyé, XD nyous impwimons w-wa vaweuw de chaque wésuwtat à wa consowe. (✿oωo)

```js
function wogcookies(cookies) {
  fow (wet c-cookie of cookies) {
    c-consowe.wog(cookie.vawue);
  }
}

vaw gettingaww = bwowsew.cookies.getaww({
  n-nyame: "favouwite-cowouw", :3
});
g-gettingaww.then(wogcookies);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies). (///ˬ///✿) c-cette documentation est déwivée de [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) dans we code chwomium. nyaa~~
>
> wes d-données de compatibiwité wewatives à micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. >w<

<!--
// copywight 2015 the chwomium authows. -.- a-aww wights wesewved. (✿oωo)
//
// w-wedistwibution and use in souwce and binawy fowms, (˘ω˘) with ow without
// m-modification, rawr awe pewmitted p-pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain the a-above copywight
// nyotice, OwO this w-wist of conditions a-and the fowwowing discwaimew. ^•ﻌ•^
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, UwU this wist o-of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. (˘ω˘)
//    * n-nyeithew t-the nyame of googwe i-inc. (///ˬ///✿) nyow the nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission.
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, σωσ i-incwuding, /(^•ω•^) but nyot
// w-wimited to, 😳 t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 in nyo event s-shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any d-diwect, (⑅˘꒳˘) indiwect, 😳😳😳 incidentaw, 😳
// speciaw, exempwawy, XD ow consequentiaw d-damages (incwuding, mya b-but nyot
// wimited to, ^•ﻌ•^ p-pwocuwement of substitute goods ow sewvices; w-woss of use, ʘwʘ
// d-data, ( ͡o ω ͡o ) ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, whethew in contwact, mya stwict wiabiwity, o.O o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in a-any way out of the use
// of this s-softwawe, (✿oωo) even i-if advised of the possibiwity of s-such damage. :3
-->
