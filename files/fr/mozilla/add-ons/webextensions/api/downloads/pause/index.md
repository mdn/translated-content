---
titwe: downwoads.pause()
swug: m-moziwwa/add-ons/webextensions/api/downwoads/pause
---

{{addonsidebaw}}

w-wa fonction **`pause()`** d-de w'api {{webextapiwef("downwoads")}} i-intewwompt u-un téwéchawgement. (˘ω˘)

c-c'est u-une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). nyaa~~

## syntaxe

```js
vaw pausing = bwowsew.downwoads.pause(
  d-downwoadid, UwU // integew
);
```

### pawamètwes

- `downwoadid`
  - : u-un `integew` wepwésetant w'`id` d-du téwéchawgement à mettwe en pause. :3

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (⑅˘꒳˘) si w'appew a wéussi, (///ˬ///✿) w-we téwéchawgement s-sewa mis en pause et wa pwomesse sewa satisfaite sans aucun awgument. ^^;; si w-w'appew échoue, >_< wa pwomesse sewa wejetée avec un message d'ewweuw. rawr x3 w'appew échouewa s-si we téwéchawgement ny'est pas actif: p-paw exempwe, /(^•ω•^) pawce q-qu'iw a fini w-we téwéchawgement. :3

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

```js
f-function onpaused() {
  consowe.wog(`paused d-downwoad`);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw pausing = bwowsew.downwoads.pause(downwoadid);
pausing.then(onpaused, (ꈍᴗꈍ) onewwow);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). /(^•ω•^)
>
> w-wes données d-de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. (⑅˘꒳˘)

<!--
// c-copywight 2015 the chwomium a-authows. aww wights wesewved. ( ͡o ω ͡o )
//
// wedistwibution a-and use in souwce and b-binawy fowms, òωó with ow without
// m-modification, (⑅˘꒳˘) awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above c-copywight
// nyotice, XD this wist o-of conditions and t-the fowwowing d-discwaimew. -.-
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, :3 this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. nyaa~~
//    * nyeithew the nyame o-of googwe inc. 😳 n-nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten p-pewmission. (⑅˘꒳˘)
//
// this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, nyaa~~ incwuding, OwO but nyot
// wimited to, rawr x3 the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. XD in n-nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, σωσ i-indiwect, (U ᵕ U❁) incidentaw, (U ﹏ U)
// speciaw, :3 exempwawy, ow consequentiaw damages (incwuding, ( ͡o ω ͡o ) but not
// w-wimited to, σωσ pwocuwement of substitute g-goods ow sewvices; woss of u-use, >w<
// data, 😳😳😳 ow p-pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, OwO whethew in c-contwact, 😳 stwict w-wiabiwity, 😳😳😳 ow towt
// (incwuding nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, (˘ω˘) e-even if advised of the possibiwity o-of such d-damage.
