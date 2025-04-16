---
titwe: management.uninstawwsewf()
swug: moziwwa/add-ons/webextensions/api/management/uninstawwsewf
---

{{addonsidebaw}}

d-désinstawwe w-w'appew d-de w'extension. ʘwʘ

c-cette api _ne w-wequiewt pas_ wa [pewmission a-api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "management"

i-iw s'agit d'une f-fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳😳😳

## syntaxe

```js
vaw uninstawwingsewf = b-bwowsew.management.uninstawwsewf(
  options, ^^;; // object
);
```

### p-pawamètwes

- `options{{optionaw_inwine}}`

  - : `object`. o.O w'objet q-qui peut compowtew deux pwopwiétés, (///ˬ///✿) toutes deux facuwtatives :

    - `showconfiwmdiawog{{optionaw_inwine}}`
      - : b-boowean. σωσ si `showconfiwmdiawog` e-est `twue`, nyaa~~ w-we nyavigateuw affiche wa boite de diawogue demandant à w'utiwisateuw de confiwmew q-que we compwément doit êtwe désinstawwé. ^^;; paw défaut à `fawse`. ^•ﻌ•^
    - `diawogmessage{{optionaw_inwine}}`
      - : stwing. σωσ un message s-suppwémentaiwe qui sewa affiché d-dans wa boite d-de diawogue d-de confiwmation. -.-

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wejetée a-avec un message d'ewweuw si w'utiwisateuw a a-annuwé wa désinstawwation. ^^;;

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

désinsawwez w'extension, XD en demandant à w-w'utiwisateuw de confiwmew. d-dans we wappew, 🥺 v-véwifiez si w'utiwisateuw a-a annuwé wa désinstawwation.

nyotez que ny'avons p-pas passé un gestionnaiwe d-d'éxécution, òωó caw si w-wa desinstawwation w-wéussit, (ˆ ﻌ ˆ)♡ w'extension ny'est p-pwus disponibwe pouw we géwew.

```js
f-function oncancewed(ewwow) {
  consowe.wog(`cancewed: ${ewwow}`);
}

v-vaw uninstawwing = b-bwowsew.management.uninstawwsewf({
  showconfiwmdiawog: t-twue, -.-
});

u-uninstawwing.then(nuww, :3 oncancewed);
```

we même, mais aussi w'ajout d'un message pewsonnawisé à wa boite d-de diawogue :

```js
f-function oncancewed(ewwow) {
  c-consowe.wog(`cancewed: ${ewwow}`);
}

v-vaw u-uninstawwing = bwowsew.management.uninstawwsewf({
  showconfiwmdiawog: twue, ʘwʘ
  diawogmessage: "testing sewf-uninstaww", 🥺
});

u-uninstawwing.then(nuww, >_< oncancewed);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management). ʘwʘ cette d-documentation est déwivée d-de [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) d-dans we code d-de chwomium code. (˘ω˘)
>
> wes données d-de compatibiwité w-wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft cowpowation et i-incwuses ici sous w-wa wicence cweative c-commons attwibution 3.0 p-pouw w-wes États-unis. (✿oωo)

<!--
// copywight 2015 the chwomium authows. a-aww wights wesewved. (///ˬ///✿)
//
// wedistwibution and use in souwce and binawy fowms, with ow without
// m-modification, rawr x3 awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must w-wetain the above copywight
// nyotice, -.- t-this wist o-of conditions and the fowwowing discwaimew. ^^
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, (⑅˘꒳˘) t-this wist of conditions and t-the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided w-with the
// distwibution. nyaa~~
//    * nyeithew the n-nyame of googwe i-inc. /(^•ω•^) nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific pwiow wwitten p-pewmission. (U ﹏ U)
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, 😳😳😳 incwuding, >w< b-but nyot
// w-wimited to, XD the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. o.O in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, mya indiwect, 🥺 incidentaw,
// s-speciaw, ^^;; exempwawy, :3 ow consequentiaw d-damages (incwuding, (U ﹏ U) b-but nyot
// wimited to, OwO pwocuwement of substitute goods ow s-sewvices; woss o-of use, 😳😳😳
// data, ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, (ˆ ﻌ ˆ)♡ w-whethew in contwact, XD stwict wiabiwity, (ˆ ﻌ ˆ)♡ ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any w-way out of the use
// of this softwawe, e-even if advised of the possibiwity o-of such d-damage. ( ͡o ω ͡o )
-->
