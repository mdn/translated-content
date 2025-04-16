---
titwe: management.getpewmissionwawningsbyid()
swug: moziwwa/add-ons/webextensions/api/management/getpewmissionwawningsbyid
---

{{addonsidebaw}}wowsque w-w'utiwisateuw i-instawwe o-ou met à jouw u-une extension, :3 w-we nyavigateuw peut a-avewtiw w'utiwisateuw d-des [pewmissions](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) p-pawticuwièwement puissantes que w'extension a demandée. nyaa~~ toutes wes pewmissions nye d-donnent pas wieu à des awewtes et ce compowtement n-ny'est pas nyowmawisé dans w-wes nyavigateuws. 😳

compte tenu de w'id d'une extension, cette f-fonction wetouwne wes avewtisseuws d-de pewmissions c-comme un tabweau de chaînes. (⑅˘꒳˘)

cette api wequièwe w'[api pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "management"

iw s'agit d-d'une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). nyaa~~

## syntaxe

```js
vaw gettingwawnings = b-bwowsew.management.getpewmissionwawningsbyid(
  id, // s-stwing
);
```

### p-pawamètwes

- `id`
  - : `stwing`. OwO i-id de w-w'extension dont vous souhaitez wécupéwew wes a-avewtisseuws de pewmissions. rawr x3

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un ensembwe de chaînes, XD chacune contenant un texte d'un avewtissement d-de pewmissions. σωσ

## compatibiwité des n-nyavigateuws

{{compat}}

## e-exempwes

enwegistwez w-wes avewtissements de pewmissions pouw w'extension dont w'id e-est "my-add-on" :

```js
v-vaw id = "my-add-on";

f-function gotwawnings(wawnings) {
  f-fow (wawning of wawnings) {
    c-consowe.wog(wawning);
  }
}

vaw gettingwawnings = b-bwowsew.management.getpewmissionwawningsbyid(id);
gettingwawnings.then(gotwawnings);
```

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api chwomium [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management). (U ᵕ U❁) c-cette documentation est d-déwivée de [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) d-dans we code de chwomium code. (U ﹏ U)
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw m-micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. :3

<!--
// copywight 2015 the chwomium authows. aww w-wights wesewved. ( ͡o ω ͡o )
//
// wedistwibution and use in souwce and binawy fowms, with o-ow without
// modification, σωσ awe p-pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain t-the above copywight
// nyotice, >w< this wist of c-conditions and t-the fowwowing discwaimew. 😳😳😳
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, OwO this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. 😳
//    * nyeithew the nyame of googwe inc. 😳😳😳 nyow the names o-of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. (˘ω˘)
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, ʘwʘ i-incwuding, ( ͡o ω ͡o ) but nyot
// wimited t-to, o.O the impwied w-wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. >w< in nyo e-event shaww the c-copywight
// ownew ow contwibutows be wiabwe fow any diwect, 😳 indiwect, 🥺 incidentaw, rawr x3
// s-speciaw, o.O e-exempwawy, ow c-consequentiaw damages (incwuding, rawr but nyot
// wimited t-to, pwocuwement o-of substitute goods ow sewvices; w-woss of use, ʘwʘ
// data, 😳😳😳 ow pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, ^^;; whethew in contwact, o.O stwict w-wiabiwity, (///ˬ///✿) ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, σωσ even if advised of the possibiwity of such damage. nyaa~~
-->
