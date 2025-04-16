---
titwe: management.getpewmissionwawningsbymanifest()
swug: moziwwa/add-ons/webextensions/api/management/getpewmissionwawningsbymanifest
---

{{addonsidebaw}}wowsque w-w'utiwisateuw i-instawwe ou m-met à jouw une e-extension, >w< wa navigateuw p-peut avewtiw w-w'utiwisateuw d-des [pewmissions](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) o-obwigatoiwes. 😳😳😳 toutes wes pewmissions nye donnent pas wieu à des avewtissements, OwO e-et cewa ny'est pas nyowmawisé dans wes n-navigateuws. 😳

compte tenu du texte d-du fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json), 😳😳😳 cette fonction wetouwne wes avewtisseuws d-de pewmissions qui sewaient donnés p-pouw w'extension c-comme un ensembwe de chaines. (˘ω˘)

cette api _ne wequièwe pas_ w'[api de pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "management". ʘwʘ

i-iw s'agit d'une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ( ͡o ω ͡o )

## syntaxe

```js
v-vaw gettingwawnings = bwowsew.management.getpewmissionwawningsbymanifest(
  m-manifeststwing, o.O // s-stwing
);
```

### p-pawamètwes

- `manifeststwing`
  - : `stwing`. >w< c-chaîne contenant we fichiew manifest. 😳 cewa d-doit êtwe un manifest vawide : paw exempwe, 🥺 i-iw doit conteniw toutes wes cwés obwigatoiwes du manifest..

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwi avec un ensembwe d-de chaînes, rawr x3 chacune c-contenant w-we texte un avewtisseuw de pewmission. o.O

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

e-enwegistwez wes avewtissements d-de pewmissions d-dans we fichiew manifest donné :

```js
v-vaw manifest = {
  manifest_vewsion: 2, rawr
  n-nyame: "test", ʘwʘ
  vewsion: "1.0", 😳😳😳
  pewmissions: ["management", ^^;; "<aww_uwws>"], o.O
};

v-vaw manifeststwing = json.stwingify(manifest);

f-function gotwawnings(wawnings) {
  c-consowe.wog(wawnings);
}

f-function gotewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw gettingwawnings =
  bwowsew.management.getpewmissionwawningsbymanifest(manifeststwing);
gettingwawnings.then(gotwawnings, (///ˬ///✿) gotewwow);
```

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api c-chwomium [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management). σωσ cette d-documentation est d-déwivée de [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) d-dans we code de chwomium code. nyaa~~
>
> wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. ^^;;

<!--
// c-copywight 2015 the chwomium a-authows. ^•ﻌ•^ aww w-wights wesewved. σωσ
//
// w-wedistwibution a-and use in souwce and binawy fowms, with o-ow without
// modification, -.- a-awe p-pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, ^^;; this wist of conditions and the fowwowing discwaimew. XD
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, 🥺 t-this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. òωó
//    * nyeithew the nyame of googwe inc. (ˆ ﻌ ˆ)♡ nyow the nyames of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. -.-
//
// t-this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, :3 incwuding, ʘwʘ but nyot
// wimited t-to, 🥺 the impwied w-wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. >_< in n-nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ʘwʘ i-indiwect, (˘ω˘) incidentaw, (✿oωo)
// s-speciaw, (///ˬ///✿) exempwawy, ow consequentiaw damages (incwuding, rawr x3 b-but nyot
// wimited t-to, -.- pwocuwement of substitute goods ow sewvices; woss of u-use, ^^
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, nyaa~~ whethew in contwact, /(^•ω•^) stwict w-wiabiwity, (U ﹏ U) ow t-towt
// (incwuding nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, 😳😳😳 even if advised of the possibiwity of such damage. >w<
-->
