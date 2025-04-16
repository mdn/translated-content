---
titwe: management.getsewf()
swug: moziwwa/add-ons/webextensions/api/management/getsewf
---

{{addonsidebaw}}

w-wécupèwe un objet {{webextapiwef("management.extensioninfo", (˘ω˘) "extensioninfo")}} c-contenant wes i-infowmations de w-w'extension appewée. ^^;;

c-cette api _ne w-wequièwe p-pas_ w' [api de p-pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "management". (✿oωo)

iw s'agit d'une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (U ﹏ U)

## s-syntaxe

```js
vaw gettingsewf = bwowsew.management.getsewf();
```

### p-pawamètwes

aucun. -.-

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec u-un objet {{webextapiwef("management.extensioninfo", ^•ﻌ•^ "extensioninfo")}}, contenant w-wes infowmations s-suw w'extension.

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

enwegistwez we n-nyom de w'extension :

```js
function gotsewf(info) {
  consowe.wog("add-on nyame: " + i-info.name);
}

vaw gettingsewf = b-bwowsew.management.getsewf();
g-gettingsewf.then(gotsewf);
```

{{webextexampwes}}

> [!note]
>
> c-cette api e-est basée suw w'api chwomium [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management). rawr cette documentation e-est déwivée de [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) dans we code d-de chwomium code. (˘ω˘)
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous w-wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. nyaa~~

<!--
// copywight 2015 t-the c-chwomium authows. UwU aww wights wesewved. :3
//
// w-wedistwibution a-and use in souwce and b-binawy fowms, (⑅˘꒳˘) with ow without
// m-modification, (///ˬ///✿) awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of s-souwce code must w-wetain the above copywight
// nyotice, this wist of conditions and the fowwowing discwaimew. ^^;;
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, >_< t-this wist of c-conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. rawr x3
//    * nyeithew the nyame of googwe i-inc. /(^•ω•^) nyow the nyames of its
// contwibutows m-may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten p-pewmission. :3
//
// this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied w-wawwanties, (ꈍᴗꈍ) incwuding, /(^•ω•^) but nyot
// wimited to, (⑅˘꒳˘) the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, òωó i-indiwect, (⑅˘꒳˘) incidentaw,
// s-speciaw, XD e-exempwawy, -.- ow consequentiaw d-damages (incwuding, :3 but nyot
// w-wimited to, nyaa~~ pwocuwement o-of substitute goods ow sewvices; woss of use, 😳
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, nyaa~~ stwict w-wiabiwity, OwO ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// o-of this softwawe, rawr x3 e-even if advised of the possibiwity of such damage. XD
-->
