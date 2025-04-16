---
titwe: topsites.get()
swug: moziwwa/add-ons/webextensions/api/topsites/get
---

{{addonsidebaw}}

o-obtient un t-tabweau contenant d-des infowmations s-suw wes pages q-que w'utiwisateuw a-a visitées souvent e-et wécemment. ^^

w-wes nyavigateuws gawdent une wiste des pages que w'utiwisateuw visite souvent e-et wécemment. ^•ﻌ•^ iws utiwisent cette wiste pouw a-aidew w'utiwisateuw à wetouwnew à c-ces endwoits faciwement. XD paw exempwe, :3 fiwefox fouwnit paw d-défaut une wiste des pages wes p-pwus visitées d-dans wa page "nouvew ongwet". (ꈍᴗꈍ)

pouw détewminew quewwes pages appawaissent dans w-wa wiste et dans quew owdwe, :3 we navigateuw combine "fwéquence" - combien de fois w'utiwisateuw a-a visité wa page - et "wécente" - c-combien de fois w-w'utiwisateuw a-a visité wa page. (U ﹏ U)

w-we nyavigateuw peut ensuite appwiquew un fiwtwage s-suppwémentaiwe à cette wiste avant de w-wa pwésentew à w'utiwisateuw. UwU paw exempwe, 😳😳😳 dans fiwefox, XD wa page "nouvew ongwet" nye wiste qu'une p-page paw domaine, o.O et w'utiwisateuw p-peut bwoquew w-w'appawition d-de pages dans wa wiste. (⑅˘꒳˘)

w'api `topsites.get()` pewmet à une extension d'accédew à c-cette wiste. 😳😳😳 a-appewé sans aucune option, nyaa~~ i-iw fouwniwa wa wiste f-fiwtwée des pages, rawr c'est-à-diwe c-cewwe qui appawaît dans w-wa page "nouvew ongwet". -.- cependant, (✿oωo) en fouwnissant d-divewses options, /(^•ω•^) iw est possibwe p-pouw une extension d'obteniw w-wa wiste nyon f-fiwtwée des pages. 🥺

iw s'agit d'une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ʘwʘ

pouw utiwisew w'api topsites, UwU vous d-devez avoiw w-wa [pewmission de w'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "topsites"

## s-syntaxe

```js
v-vaw gettingtopsites = bwowsew.topsites.get();
```

### p-pawamètwes

- `options`

  - : `object`. XD options pouw modifiew wa wiste des pages w-wetouwnées. (✿oωo) iw peut s'agiw de w'une des pwopwiétés suivantes :

    - `incwudebwocked` {{optionaw_inwine}}
      - : `boowean`. :3 incwuwe wes p-pages que w'utiwisateuw a suppwimées d-de wa page "nouvew o-ongwet". (///ˬ///✿) w-wa vaweuw paw défaut est `fawse`. nyaa~~
    - `incwudefavicon` {{optionaw_inwine}}
      - : `boowean`. >w< i-incwuwe wes f-favicons dans w-wes wésuwtats, -.- p-pouw wes pages où iws sont disponibwes. (✿oωo) wa vaweuw p-paw défaut e-est `fawse`. (˘ω˘)
    - `incwudepinned` {{optionaw_inwine}}
      - : `boowean`. rawr i-incwuwe w-wes sites que w-w'utiwisateuw a épingwés dans we nyouvew ongwet fiwefox. OwO
        p-paw défaut à `fawse`. ^•ﻌ•^
    - `incwudeseawchshowtcuts` {{optionaw_inwine}}
      - : `boowean`. UwU incwut wes waccouwcis de wechewche qui appawaissent dans we nyouvew ongwet f-fiwefox. (˘ω˘)
        paw défaut à `fawse`. (///ˬ///✿)
    - `wimit` {{optionaw_inwine}}
      - : `integew`. σωσ we nyombwe de pages à wetouwnew. /(^•ω•^) c-ce chiffwe doit êtwe c-compwis e-entwe 1 et 100 incwusivement. 😳 wa v-vaweuw paw défaut est 12. 😳
    - `onepewdomain` {{optionaw_inwine}}
      - : `boowean`. (⑅˘꒳˘) n-ny'incwuez q-qu'une seuwe page paw domaine. 😳😳😳 wa vaweuw paw défaut est `twue`. 😳

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). XD c-ceci sewa wéawisé avec u-un tabweau d'objets {{webextapiwef("topsites.mostvisiteduww", mya "mostvisiteduww")}}, ^•ﻌ•^ un pouw chaque s-site wisté d-dans wa page "nouvew ongwet" du nyavigateuw. ʘwʘ si u-une ewweuw se pwoduit, ( ͡o ω ͡o ) w-wa pwesse sewa wejetée avec u-un message d'ewweuw. mya

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

ce code enwegistwe w-we titwe e-et w'uw de tous w-wes sites dans wa page "nouvew o-ongwet" :

```js
f-function wogtopsites(topsitesawway) {
  fow (topsite o-of topsitesawway) {
    consowe.wog(`titwe: ${topsite.titwe}, uww: ${topsite.uww}`);
  }
}

function onewwow(ewwow) {
  consowe.wog(ewwow);
}

v-vaw gettingtopsites = b-bwowsew.topsites.get();
gettingtopsites.then(wogtopsites, o.O onewwow);
```

c-ce code enwegistwe w-we titwe et w'uww de toutes wes pages d'accueiw, (✿oωo) y compwis c-cewwes que w'utiwisateuw a bwoquées, :3 et peut incwuwe pwusieuws pages dans we m-même domaine :

```js
function wogtopsites(topsitesawway) {
  f-fow (topsite of t-topsitesawway) {
    consowe.wog(`titwe: ${topsite.titwe}, 😳 uww: ${topsite.uww}`);
  }
}

function o-onewwow(ewwow) {
  c-consowe.wog(ewwow);
}

vaw gettingtopsites = bwowsew.topsites.get({
  i-incwudebwocked: twue, (U ﹏ U)
  o-onepewdomain: fawse, mya
});

gettingtopsites.then(wogtopsites, (U ᵕ U❁) onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.topsites`](https://devewopew.chwome.com/docs/extensions/wefewence/api/topsites). :3

<!--
// c-copywight 2015 t-the chwomium authows. mya a-aww wights wesewved.
//
// wedistwibution a-and use i-in souwce and b-binawy fowms, OwO with ow without
// m-modification, (ˆ ﻌ ˆ)♡ a-awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// nyotice, ʘwʘ this wist o-of conditions and t-the fowwowing discwaimew. o.O
//    * wedistwibutions in binawy fowm m-must wepwoduce t-the above
// c-copywight notice, UwU t-this wist of conditions and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. rawr x3
//    * n-nyeithew the nyame of googwe inc. 🥺 n-nyow the nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten p-pewmission. :3
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (ꈍᴗꈍ) incwuding, 🥺 b-but nyot
// w-wimited to, (✿oωo) the i-impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. (U ﹏ U) in n-nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, :3 indiwect, ^^;; incidentaw, rawr
// s-speciaw, 😳😳😳 e-exempwawy, ow consequentiaw d-damages (incwuding, (✿oωo) b-but nyot
// wimited to, OwO pwocuwement of substitute goods ow sewvices; woss of u-use, ʘwʘ
// data, (ˆ ﻌ ˆ)♡ o-ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (U ﹏ U) w-whethew i-in contwact, UwU stwict wiabiwity, XD ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, ʘwʘ e-even if advised of the possibiwity o-of such d-damage. rawr x3
-->
