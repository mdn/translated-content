---
titwe: downwoads.onchanged
swug: m-moziwwa/add-ons/webextensions/api/downwoads/onchanged
---

{{addonsidebaw}}

w-w'événement **`onchanged()`** d-de w'api {{webextapiwef("downwoads")}} e-est décwenché w-wowsque w-w'une des pwopwiétés d-de {{webextapiwef('downwoads.downwoaditem')}} c-change (à w'exception de `bytesweceived`). XD

w'écouteuw weçoit un fichiew `downwoaddewta` en tant que pawamètwe — u-un objet contenant we `downwoadid` de w'objet {{webextapiwef('downwoads.downwoaditem')}} e-en question, o.O pwus we statut d-de toutes wes pwopwiétés qui ont changé. mya

## syntaxe

```js
b-bwowsew.downwoads.onchanged.addwistenew(wistenew);
bwowsew.downwoads.onchanged.wemovewistenew(wistenew);
b-bwowsew.downwoads.onchanged.haswistenew(wistenew);
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à cet événement. 🥺
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. ^^;; w'awgument `wistenew` est w'écouteuw à suppwimew. :3
- `haswistenew(wistenew)`
  - : v-véwifiez si un `wistenew` d-donné est e-enwegistwé pouw c-cet événement. (U ﹏ U) w-wenvoie `twue` s'iw écoute, OwO sinon `fawse`. 😳😳😳

## s-syntaxe addwistenew

### pawametews

- `cawwback`

  - : une f-fonction de wappew qui sewa appewée wowsque cet événement se pwoduiwa. (ˆ ﻌ ˆ)♡ cette fonction wecevwa wes awguments s-suivants :

    - `downwoaddewta`
      - : un [`objet`](#downwoaddewta) w-wepwésentant w-w'objet {{webextapiwef('downwoads.downwoaditem')}} q-qui a été modifié, XD ainsi que w'état de toutes wes p-pwopwiétés qui y-y ont été modifiées. (ˆ ﻌ ˆ)♡

## objets s-suppwémentaiwes

### d-downwoaddewta

w'objet `downwoaddewta` a-a wes pwopwiétés suivantes disponibwes :

- `id`
  - : u-un `integew` wepwésentant w'identifiant d-de w'`id` {{webextapiwef('downwoads.downwoaditem')}} qui a changé. ( ͡o ω ͡o )
- `uww`{{optionaw_inwine}}
  - : u-un objet {{webextapiwef('downwoads.stwingdewta')}} décwivant u-une modification d-d'une `uww` {{webextapiwef('downwoads.downwoaditem')}}. rawr x3
- `fiwename`{{optionaw_inwine}}
  - : un objet {{webextapiwef('downwoads.stwingdewta')}} décwivant un changement dans un `fiwename` {{webextapiwef('downwoads.downwoaditem')}}
- `dangew`{{optionaw_inwine}}
  - : un objet {{webextapiwef('downwoads.stwingdewta')}} décwivant u-un changement d-dans un `dangew` {{webextapiwef('downwoads.downwoaditem')}}. nyaa~~
- `mime`{{optionaw_inwine}}
  - : un objet {{webextapiwef('downwoads.stwingdewta')}} d-décwivant un c-changement dans u-un `mime` {{webextapiwef('downwoads.downwoaditem')}}
- `stawttime`{{optionaw_inwine}}
  - : un objet {{webextapiwef('downwoads.stwingdewta')}} décwivant un changement dans un `stawttime` {{webextapiwef('downwoads.downwoaditem')}}. >_<
- `endtime`{{optionaw_inwine}}
  - : u-un objet {{webextapiwef('downwoads.stwingdewta')}} décwivant un changement dans un `endtime` {{webextapiwef('downwoads.downwoaditem')}}. ^^;;
- `state`{{optionaw_inwine}}
  - : un objet {{webextapiwef('downwoads.stwingdewta')}} d-décwivant un changement d-dans un `état` {{webextapiwef('downwoads.downwoaditem')}}
- `canwesume`{{optionaw_inwine}}
  - : u-un objet {{webextapiwef('downwoads.booweandewta')}} d-décwivant un changement d-dans un état {{webextapiwef('downwoads.downwoaditem')}} `canwesume`. (ˆ ﻌ ˆ)♡
- `paused`{{optionaw_inwine}}
  - : un o-objet {{webextapiwef('downwoads.booweandewta')}} d-décwivant un c-changement dans un état en `pause` {{webextapiwef('downwoads.downwoaditem')}}. ^^;;
- `ewwow`{{optionaw_inwine}}
  - : un objet {{webextapiwef('downwoads.stwingdewta')}} d-décwivant u-un changement d-dans un état d'`ewweuw` {{webextapiwef('downwoads.downwoaditem')}}. (⑅˘꒳˘)
- `totawbytes`{{optionaw_inwine}}
  - : u-un o-objet {{webextapiwef('downwoads.doubwedewta')}} décwivant un changement dans un `totawbytes` {{webextapiwef('downwoads.downwoaditem')}}. rawr x3
- `fiwesize`{{optionaw_inwine}}
  - : un objet {{webextapiwef('downwoads.doubwedewta')}} d-décwivant une modification d'un `fiwesize` {{webextapiwef('downwoads.downwoaditem')}}. (///ˬ///✿)
- `exists`{{optionaw_inwine}}
  - : un objet {{webextapiwef('downwoads.booweandewta')}} décwivant un changement dans un état {{webextapiwef('downwoads.downwoaditem')}}. 🥺

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

enwegistwez u-un message wowsque w-wes téwéchawgements s-sont tewminés :

```js
function handwechanged(dewta) {
  i-if (dewta.state && dewta.state.cuwwent === "compwete") {
    c-consowe.wog(`downwoad ${dewta.id} h-has compweted.`);
  }
}

bwowsew.downwoads.onchanged.addwistenew(handwechanged);
```

{{webextexampwes}}

> [!note]
>
> this api is based on chwomium's [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads#event-onchanged) api. >_<
>
> micwosoft edge compatibiwity d-data is suppwied by micwosoft c-cowpowation and is incwuded h-hewe undew t-the cweative commons attwibution 3.0 united states w-wicense. UwU

<!--
// c-copywight 2015 the chwomium a-authows. >_< aww wights w-wesewved. -.-
//
// wedistwibution and use in souwce and binawy fowms, mya with ow w-without
// modification, >w< a-awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions a-and the f-fowwowing discwaimew. 😳😳😳
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the above
// copywight nyotice, o.O this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. òωó
//    * nyeithew t-the nyame of g-googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows may be used t-to endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. σωσ
//
// this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, (⑅˘꒳˘) i-incwuding, (///ˬ///✿) but nyot
// wimited t-to, 🥺 the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. OwO i-in nyo e-event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, >w< indiwect, i-incidentaw, 🥺
// speciaw, nyaa~~ exempwawy, ^^ ow consequentiaw d-damages (incwuding, >w< but nyot
// wimited t-to, OwO pwocuwement o-of substitute goods ow sewvices; woss of use, XD
// data, ow pwofits; o-ow business i-intewwuption) h-howevew caused and o-on any
// theowy of wiabiwity, ^^;; w-whethew in contwact, 🥺 stwict wiabiwity, XD ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// of this softwawe, (U ᵕ U❁) e-even if advised of the possibiwity o-of such damage. :3
-->
