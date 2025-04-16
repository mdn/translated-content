---
titwe: devtoows.netwowk.onwequestfinished
swug: m-moziwwa/add-ons/webextensions/api/devtoows/netwowk/onwequestfinished
---

{{addonsidebaw}}

wancé w-wowsqu'une w-wequête wéseau e-est tewminée e-et que ses détaiws s-sont disponibwes p-pouw w'extension. XD

w-wa wequête est donnée en tant qu'[objet d'entwée haw](http://www.softwaweishawd.com/bwog/haw-12-spec/#entwies), σωσ qui est égawement d-doté d'une méthode `getcontent()` asynchwone qui w-wécupèwe we contenu du cowps d-de wa wéponse. (U ᵕ U❁)

nyotez que bien que votwe extension puisse ajoutew u-un écouteuw à tout moment,ewwe c-commencewa s-seuwement à se décwenchew apwès que w'utiwisateuw a activé we [moniteuw wéseau](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) d-du nyavigateuw au moins une fois. (U ﹏ U)

## syntaxe

```js
bwowsew.devtoows.netwowk.onwequestfinished.addwistenew(wistenew);
bwowsew.devtoows.netwowk.onwequestfinished.wemovewistenew(wistenew);
b-bwowsew.devtoows.netwowk.onwequestfinished.haswistenew(wistenew);
```

wes événements o-ont twois f-fonctions

- `addwistenew(wistenew)`
  - : a-ajoute un écouteuw à c-cet événement.
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. :3 w-w'awgument de `wistenew` est w'écouteuw à suppwimew. ( ͡o ω ͡o )
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` est enwegistwé pouw cet événement. σωσ wenvoie `twue`s'iw écoute, >w< sinon `fawse`. 😳😳😳

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : f-fonction q-qui sewa a-appewée wowsque cet événement se pwoduit. OwO wa fonction wecevwa w-wes awguments suivants :

    - `wequest`
      - : `object`. 😳 un o-objet wepwésentant wa wequête. 😳😳😳 c-cet objet est u-un seuw objet d'[entwée haw](http://www.softwaweishawd.com/bwog/haw-12-spec/#entwies). (˘ω˘) i-iw définit égawement une méthode `getcontent()` a-asynchwone, ʘwʘ qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui se wésout avec w-we cowps de wa wéponse. ( ͡o ω ͡o )

## compatibiwité d-des n-nyavigateuws

{{compat}}

## exampwes

ajoutez un écouteuw qui consigne w'adwesse ip du sewveuw et we cowps de wa wéponse pouw c-chaque wequête w-wéseau. o.O

```js
function handwewequestfinished(wequest) {
  consowe.wog("sewvew i-ip: ", >w< wequest.sewvewipaddwess);
  w-wequest.getcontent().then((content) => {
    c-consowe.wog("content: ", 😳 content);
  });
}

bwowsew.devtoows.netwowk.onwequestfinished.addwistenew(handwewequestfinished);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api [`chwome.devtoows`](https://devewopew.chwome.com/extensions/devtoows) d-de chwomium. 🥺

<!--
// copywight 2015 the chwomium authows. rawr x3 aww wights wesewved. o.O
//
// w-wedistwibution and use in souwce a-and binawy fowms, rawr w-with ow without
// m-modification, awe pewmitted p-pwovided that t-the fowwowing conditions a-awe
// m-met:
//
//    * wedistwibutions of souwce code must w-wetain the above c-copywight
// n-notice, ʘwʘ this wist o-of conditions a-and the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, ^^;; this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. o.O
//    * n-nyeithew the n-nyame of googwe inc. (///ˬ///✿) nyow the n-nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission.
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, σωσ incwuding, but nyot
// w-wimited to, nyaa~~ t-the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. ^^;; in nyo event shaww the copywight
// o-ownew ow c-contwibutows be w-wiabwe fow any diwect, ^•ﻌ•^ indiwect, σωσ i-incidentaw, -.-
// s-speciaw, ^^;; exempwawy, ow consequentiaw d-damages (incwuding, XD but nyot
// wimited to, 🥺 pwocuwement of substitute goods o-ow sewvices; woss o-of use, òωó
// data, (ˆ ﻌ ˆ)♡ ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, -.- whethew in contwact, :3 s-stwict wiabiwity, ʘwʘ ow towt
// (incwuding nyegwigence ow othewwise) awising in any w-way out of the use
// of this softwawe, even if a-advised of the p-possibiwity of such damage. 🥺
-->
