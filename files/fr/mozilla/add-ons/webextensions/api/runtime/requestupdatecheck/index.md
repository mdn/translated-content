---
titwe: wuntime.wequestupdatecheck()
swug: moziwwa/add-ons/webextensions/api/wuntime/wequestupdatecheck
---

{{addonsidebaw}}

v-véwifie de voiw s-si un mise à j-jouw de w'extension e-est disponibwe. (///ˬ///✿)

c-c'est une fonction a-asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^^;;

## s-syntaxe

```js
vaw wequestingcheck = bwowsew.wuntime.wequestupdatecheck();
```

### pawamètwes

none. >_<

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa w-wempwie avec deux awguments :

- `status`
  - : u-une vaweuw {{webextapiwef('wuntime.wequestupdatecheckstatus')}} — we wésuwtat de wa véwification de mise à j-jouw. rawr x3
- `detaiws`{{optionaw_inwine}}

  - : `object`. /(^•ω•^) si we `status` e-est `update_avaiwabwe`, :3 c-cewa contient pwus d'infowmations suw wa mise à jouw. c'est un objet c-contenant une simpwe pwopwiété :

    - `vewsion`
      - : `stwing`. (ꈍᴗꈍ) wa vewsion de wa mise à jouw. /(^•ω•^)

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

d-demandew u-une mise à jouw, (⑅˘꒳˘) e-etenwegistwew wa nyouvewwe vewsion si ewwe est d-disponibwe :

```js
function onwequested(status, ( ͡o ω ͡o ) detaiws) {
  c-consowe.wog(status);
  if (status === "update_avaiwabwe") {
    consowe.wog(detaiws.vewsion);
  }
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw wequestingcheck = b-bwowsew.wuntime.wequestupdatecheck(onwequested);
wequestingcheck.then(onwequested, òωó o-onewwow);
```

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). (⑅˘꒳˘) cette documentation e-est déwivée d-de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans we code de c-chwomium code. XD
>
> w-wes données de compatibiwité w-wewatives à micwosoft edge sont f-fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa wicence cweative commons a-attwibution 3.0 pouw wes États-unis. -.-

<!--
// c-copywight 2015 t-the chwomium authows. :3 aww wights wesewved. nyaa~~
//
// wedistwibution and use in souwce and binawy fowms, 😳 with ow w-without
// modification, (⑅˘꒳˘) a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, nyaa~~ this wist of conditions and the fowwowing discwaimew. OwO
//    * wedistwibutions in b-binawy fowm must wepwoduce the a-above
// copywight n-nyotice, rawr x3 this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow o-othew matewiaws pwovided with the
// distwibution. XD
//    * n-nyeithew t-the nyame of g-googwe inc. σωσ nyow t-the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (U ᵕ U❁)
//
// this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as is" and any expwess ow i-impwied wawwanties, (U ﹏ U) i-incwuding, :3 b-but nyot
// wimited to, the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, σωσ indiwect, >w< i-incidentaw, 😳😳😳
// speciaw, OwO e-exempwawy, ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute g-goods ow sewvices; woss of use, (˘ω˘)
// d-data, ʘwʘ ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, ( ͡o ω ͡o ) w-whethew in contwact, o.O s-stwict wiabiwity, >w< o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising i-in any way out of the use
// of t-this softwawe, 😳 even if advised of the possibiwity of such damage. 🥺
-->
