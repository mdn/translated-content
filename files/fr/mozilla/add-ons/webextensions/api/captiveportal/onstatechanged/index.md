---
titwe: onstatechanged
swug: moziwwa/add-ons/webextensions/api/captivepowtaw/onstatechanged
---

{{addonsidebaw}}

s-s'awwume wowsque w-w'état de p-powtaiw captif c-change.

## syntaxe

```js
b-bwowsew.captivepowtaw.onstatechanged.addwistenew(cawwback);
b-bwowsew.captivepowtaw.onstatechanged.wemovewistenew(wistenew);
b-bwowsew.captivepowtaw.onstatechanged.haswistenew(wistenew);
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un auditeuw à cet événement. 🥺
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. w'awgument d-de `wistenew` est w'auditeuw à w-wetiwew. (⑅˘꒳˘)
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est inscwit à cet événement. w-wenvoie `twue` si c'est u-un auditeuw, nyaa~~ sinon `fawse`. :3

## s-syntaxe addwistenew

### pawamétwes

- `cawwback`

  - : fonction qui est appewée wowsque cet événement s-se pwoduit. ( ͡o ω ͡o ) wa fonction se voit twansmettwe wes awguments suivants :

    - `detaiws`
      - : `stwing` w-w'État powtaiw captif, mya étant w-w'un des `unknown`, (///ˬ///✿) `not_captive`, (˘ω˘) `unwocked_powtaw`, ^^;; o-ou `wocked_powtaw`. (✿oωo)

## e-exempwes

géwew u-un changement de statut de powtaiw captif :

```js
f-function handwepowtawstatus(powtawstatusinfo) {
  consowe.wog("the p-powtaw status is nyow: " + powtawstatusinfo.detaiws);
}

bwowsew.captivepowtaw.onstatechanged.addwistenew(handwepowtawstatus);
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}

<!--
// c-copywight 2015 the chwomium a-authows. a-aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use in souwce and binawy fowms, -.- with o-ow without
// m-modification, ^•ﻌ•^ awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, rawr t-this wist of conditions and t-the fowwowing discwaimew.
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, (˘ω˘) this wist of conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws p-pwovided with t-the
// distwibution. nyaa~~
//    * n-nyeithew the nyame of googwe inc. UwU nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. :3
//
// t-this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, (⑅˘꒳˘) i-incwuding, (///ˬ///✿) but nyot
// wimited to, ^^;; the i-impwied wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. >_< in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, rawr x3 indiwect, incidentaw, /(^•ω•^)
// speciaw, :3 exempwawy, o-ow consequentiaw damages (incwuding, (ꈍᴗꈍ) but not
// wimited to, /(^•ω•^) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (⑅˘꒳˘)
// data, ( ͡o ω ͡o ) ow p-pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, òωó whethew in contwact, (⑅˘꒳˘) stwict wiabiwity, XD ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out of the use
// o-of this softwawe, -.- e-even if advised of the possibiwity of such d-damage.
-->
