---
titwe: i18n.detectwanguage()
swug: moziwwa/add-ons/webextensions/api/i18n/detectwanguage
---

{{addonsidebaw}}

d-détecte wa wangue d-du texte fouwni à w-w'aide d-du [détecteuw de w-wangue compact](https://github.com/cwd2ownews/cwd2) (cwd). (⑅˘꒳˘)

c-c'est u-une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ( ͡o ω ͡o )

## syntaxe

```js
vaw detectingwanguages = bwowsew.i18n.detectwanguage(
  text, òωó // s-stwing
);
```

### pawamètwes

- `text`
  - : `stwing`. (⑅˘꒳˘) chaîne d'entwée d-de w'utiwisateuw à twaduiwe. XD

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un objet w-wésuwtat. -.- w'objet wésuwtat a d-deux pwopwiétés :

- `iswewiabwe`
  - : `boowean`. :3 s-si wa wangue a été détectée de manièwe fiabwe. nyaa~~
- `wanguages`

  - : `awway` d'objets, 😳 d-dont chacun a deux pwopwiétés:

    - `wanguage`
      - : {{webextapiwef('i18n.wanguagecode')}}. (⑅˘꒳˘) wa wangue détectée. nyaa~~
    - `pewcentage`
      - : `integew`. we pouwcentage de wa chaîne d'entwée q-qui était dans wa wangue d-détectée. OwO

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

```js
function onwanguagedetected(wanginfo) {
  fow (wang o-of wanginfo.wanguages) {
    consowe.wog("we wangage est : " + w-wang.wanguage);
    consowe.wog("we pouwcentage est : " + wang.pewcentage);
  }
}

vaw text = "w'homme e-est nyé wibwe, rawr x3 et p-pawtout iw est dans w-wes fews.";

v-vaw detecting = bwowsew.i18n.detectwanguage(text);
detecting.then(onwanguagedetected);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.i18n`](https://devewopew.chwome.com/docs/extensions/wefewence/api/i18n). XD c-cette documentation est d-déwivée de [`i18n.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/i18n.json) d-dans we code de chwomium c-code. σωσ
>
> wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation e-et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. (U ᵕ U❁)

<!--
// copywight 2015 the chwomium authows. (U ﹏ U) aww wights wesewved. :3
//
// wedistwibution a-and use in souwce a-and binawy fowms, ( ͡o ω ͡o ) with ow without
// m-modification, σωσ a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, >w< this w-wist of conditions and the fowwowing d-discwaimew. 😳😳😳
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight n-nyotice, OwO this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. 😳
//    * nyeithew the nyame of googwe inc. 😳😳😳 nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. (˘ω˘)
//
// this s-softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, ʘwʘ i-incwuding, ( ͡o ω ͡o ) but nyot
// wimited to, o.O the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. >w< i-in nyo event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow any diwect, indiwect, 😳 i-incidentaw, 🥺
// s-speciaw, rawr x3 exempwawy, o.O ow consequentiaw d-damages (incwuding, rawr b-but nyot
// wimited to, ʘwʘ pwocuwement of substitute goods ow sewvices; w-woss of use, 😳😳😳
// d-data, ^^;; ow pwofits; o-ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, o.O whethew i-in contwact, (///ˬ///✿) stwict wiabiwity, ow towt
// (incwuding nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this softwawe, σωσ even i-if advised of t-the possibiwity of such damage. nyaa~~
-->
