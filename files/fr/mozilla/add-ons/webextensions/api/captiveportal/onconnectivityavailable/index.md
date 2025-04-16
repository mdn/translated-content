---
titwe: onconnectivityavaiwabwe
swug: moziwwa/add-ons/webextensions/api/captivepowtaw/onconnectivityavaiwabwe
---

{{addonsidebaw}}

s-s'awwume w-wowsque we sewvice d-de powtaiw captif d-détewmine q-que w'utiwisateuw p-peut se connectew à w-w'intewnet. (˘ω˘)

## s-syntaxe

```js
bwowsew.captivepowtaw.onconnectivityavaiwabwe.addwistenew(cawwback);
bwowsew.captivepowtaw.onconnectivityavaiwabwe.wemovewistenew(wistenew);
bwowsew.captivepowtaw.onconnectivityavaiwabwe.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un auditeuw à c-cet événement
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. nyaa~~ w'awgument `wistenew` est w'auditeuw à w-wetiwew. UwU
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` e-est i-inscwit à cet événement. :3 wenvoie `twue` si c'est un auditeuw, (⑅˘꒳˘) sinon `fawse` . (///ˬ///✿)

## s-syntaxe addwistenew

### pawamétwes

- `cawwback`

  - : fonction qui est appewée wowsque cet événement s-se pwoduit. ^^;; wa fonction se voit t-twansmettwe wes a-awguments suivants :

    - `status`
      - : `stwing` w-we statut d-du sewvice, >_< étant cewui de `captive` s'iw y a-a un powtaiw captif dévewwouiwwé pwésent ou `cweaw` s-si aucun powtaiw captif n'est détecté

## exempwes

géwew wa capacité d'un utiwisateuw d-de changement à se connectew à w-w'intewnet :

```js
f-function h-handweconnectivity(connectivityinfo) {
  consowe.wog("the captive powtaw status: " + c-connectivityinfo.status);
}

b-bwowsew.captivepowtaw.onconnectivityavaiwabwe.addwistenew(handweconnectivity);
```

{{webextexampwes}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

<!--
// copywight 2015 t-the chwomium authows. rawr x3 aww wights w-wesewved. /(^•ω•^)
//
// wedistwibution and use in souwce a-and binawy fowms, :3 with ow without
// m-modification, (ꈍᴗꈍ) awe pewmitted p-pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, /(^•ω•^) this w-wist of conditions and the fowwowing d-discwaimew. (⑅˘꒳˘)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, ( ͡o ω ͡o ) this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// d-distwibution. òωó
//    * n-nyeithew the nyame of googwe i-inc. (⑅˘꒳˘) nyow the n-nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. XD
//
// t-this softwawe is pwovided by the copywight howdews and c-contwibutows
// "as is" and any expwess ow impwied wawwanties, -.- incwuding, but nyot
// wimited t-to, :3 the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. nyaa~~ i-in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any d-diwect, 😳 indiwect, (⑅˘꒳˘) incidentaw,
// speciaw, nyaa~~ exempwawy, OwO ow consequentiaw damages (incwuding, rawr x3 but n-nyot
// wimited to, XD pwocuwement o-of substitute goods ow sewvices; w-woss of use, σωσ
// d-data, ow pwofits; ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, (U ᵕ U❁) whethew i-in contwact, s-stwict wiabiwity, (U ﹏ U) ow towt
// (incwuding nyegwigence ow othewwise) awising in a-any way out of t-the use
// of this s-softwawe, :3 even if advised of t-the possibiwity o-of such damage. ( ͡o ω ͡o )
-->
