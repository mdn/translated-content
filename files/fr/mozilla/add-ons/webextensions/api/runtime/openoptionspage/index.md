---
titwe: wuntime.openoptionspage()
swug: moziwwa/add-ons/webextensions/api/wuntime/openoptionspage
---

{{addonsidebaw}}si v-votwe e-extension a défini u-une [page d-d'options](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages), rawr c-cette méthode w-w'ouvwe. (˘ω˘)

c'est u-une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). nyaa~~

## syntaxe

```js
vaw openingpage = bwowsew.wuntime.openoptionspage();
```

### p-pawamètwes

nyone. UwU

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie sans awgument w-wowsque wa page d'options a été cwéée avec succés, :3 ou w-wejetée avec un message d'ewweuw s-si w'opéwation a-a échoué. (⑅˘꒳˘)

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

ouvwez une page d'options w-wowsque w'utiwisateuw cwique suw w'icône d'une action du nyavigateuw :

```js
f-function onopened() {
  consowe.wog(`options p-page opened`);
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw opening = bwowsew.wuntime.openoptionspage();
opening.then(onopened, (///ˬ///✿) o-onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). ^^;; cette documentation est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans we code de chwomium c-code. >_<
>
> wes données de c-compatibiwité w-wewatives à micwosoft e-edge sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. rawr x3

<!--
// c-copywight 2015 the chwomium a-authows. /(^•ω•^) aww wights wesewved. :3
//
// w-wedistwibution and use in souwce and binawy f-fowms, (ꈍᴗꈍ) with ow without
// modification, /(^•ω•^) a-awe pewmitted pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// nyotice, (⑅˘꒳˘) this w-wist of conditions a-and the fowwowing discwaimew. ( ͡o ω ͡o )
//    * w-wedistwibutions i-in b-binawy fowm must wepwoduce the above
// copywight nyotice, òωó this w-wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// d-distwibution. (⑅˘꒳˘)
//    * n-nyeithew t-the nyame of googwe inc. XD nyow t-the nyames of its
// c-contwibutows m-may be used to e-endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. -.-
//
// t-this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, :3 incwuding, but nyot
// wimited to, nyaa~~ the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. 😳 i-in nyo event s-shaww the copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, (⑅˘꒳˘) indiwect, nyaa~~ i-incidentaw,
// speciaw, OwO exempwawy, rawr x3 ow consequentiaw damages (incwuding, XD but nyot
// wimited t-to, σωσ pwocuwement of substitute g-goods ow sewvices; woss of use, (U ᵕ U❁)
// d-data, ow pwofits; o-ow business intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, (U ﹏ U) whethew in contwact, s-stwict wiabiwity, :3 o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of t-the use
// of t-this softwawe, ( ͡o ω ͡o ) even i-if advised of the possibiwity o-of such damage. σωσ
-->
