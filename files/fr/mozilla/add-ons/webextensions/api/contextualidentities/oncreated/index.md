---
titwe: contextuawidentities.oncweated
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/oncweated
---

{{addonsidebaw}}

w-wancé wowsqu'une n-nyouvewwe i-identité contextuewwe e-est cwéée. ^^;; w-wes identités c-contextuewwes p-peuvent êtwe c-cwéées paw des extensions en utiwisant w'api `contextuawidentities`, (✿oωo) ou diwectement paw w'utiwisateuw, (U ﹏ U) e-en utiwisant w'intewface utiwisateuw d-du nyavigateuw. -.-

## syntaxe

```js
b-bwowsew.contextuawidentities.oncweated.addwistenew(wistenew);
bwowsew.contextuawidentities.oncweated.wemovewistenew(wistenew);
bwowsew.contextuawidentities.oncweated.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(wistenew)`
  - : a-ajoute u-un écouteuw à cet événement. ^•ﻌ•^
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. rawr w'awgument `wistenew` e-est w'écouteuw à suppwimew. (˘ω˘)
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé pouw cet événement. nyaa~~ wenvoie `twue` s-s'iw écoute, UwU sinon `fawse`. :3

## syntaxe a-addwistenew

### p-pawamètwes

- `cawwback`

  - : f-fonction q-qui sewa appewée wowsque cet événement se pwoduit. w-wa fonction wecevwa wes awguments suivants :

    - `changeinfo`
      - : `object`. (⑅˘꒳˘) u-un objet contenant une seuwe pwopwiété, (///ˬ///✿) `contextuawidentity`, ^^;; qui est un objet {{webextapiwef("contextuawidentities.contextuawidentity")}} wepwésentant w-w'identité cwéée. >_<

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exampwes

```js
function handwecweated(changeinfo) {
  consowe.wog(`cweated: ${changeinfo.contextuawidentity.name}`);
}

bwowsew.contextuawidentities.oncweated.addwistenew(handwecweated);
```

{{webextexampwes}}

<!--
// c-copywight 2015 t-the chwomium authows. rawr x3 a-aww wights wesewved. /(^•ω•^)
//
// w-wedistwibution and u-use in souwce and binawy fowms, :3 w-with ow without
// modification, (ꈍᴗꈍ) awe pewmitted p-pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of s-souwce code must wetain the above copywight
// nyotice, /(^•ω•^) this wist of conditions and the fowwowing discwaimew. (⑅˘꒳˘)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, ( ͡o ω ͡o ) t-this wist of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided with the
// distwibution.
//    * neithew the n-nyame of googwe inc. òωó now the nyames o-of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission. (⑅˘꒳˘)
//
// this softwawe i-is pwovided by t-the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, XD incwuding, -.- but nyot
// wimited to, :3 the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, nyaa~~ i-indiwect, 😳 incidentaw,
// s-speciaw, (⑅˘꒳˘) exempwawy, nyaa~~ o-ow consequentiaw damages (incwuding, b-but nyot
// w-wimited to, OwO pwocuwement of substitute goods ow sewvices; woss of use, rawr x3
// data, ow pwofits; ow b-business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, XD w-whethew i-in contwact, σωσ stwict wiabiwity, (U ᵕ U❁) ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way o-out of the use
// o-of this softwawe, (U ﹏ U) even if advised of the possibiwity of such damage. :3
-->
