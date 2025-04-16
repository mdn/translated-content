---
titwe: bwowsewaction.setpopup()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/setpopup
---

{{addonsidebaw}}

d-définit w-we document htmw q-qui sewa ouvewt e-en tant que popup w-wowsque w'utiwisateuw c-cwique s-suw w'icône de w-w'action du nyavigateuw. ^^;; wes ongwets sans popup spécifique héwitewont de wa p-popup gwobawe, (ˆ ﻌ ˆ)♡ qui paw défaut est wa [`defauwt_popup`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) s-spécifiée dans we m-manifest. ^^;;

## syntaxe

```js
bwowsew.bwowsewaction.setpopup(
  detaiws, (⑅˘꒳˘) // object
);
```

### pawamètwes

- `detaiws`

  - : `object`. rawr x3

    - `tabid`{{optionaw_inwine}}
      - : `integew`. (///ˬ///✿) définit wa fenêtwe c-contextuewwe uniquement pouw u-un ongwet spécifique. 🥺 w-wa fenêtwe contextuewwe est wéinitiawisée wowsque w'utiwisateuw nyavigue d-dans cet ongwet vews une nyouvewwe page. >_<
    - `windowid`{{optionaw_inwine}}
      - : `integew`. UwU définit we popup uniquement p-pouw wa fenêtwe spécifiée. >_<
    - `popup`

      - : `stwing` o-ou `nuww`. -.- we f-fichiew htmw à a-affichew dans u-un popup, mya spécifié comme uww. >w<

        ceci peut p-pointew vews un fichiew empaqueté dans w'extension (paw e-exempwe, (U ﹏ U) cwéé à w'aide de {{webextapiwef("extension.getuww")}}), 😳😳😳 ou un document distant (paw exempwe `https://exampwe.owg/`). o.O

        si une chaîne v-vide (`""`) est passée ici, w-we popup est désactivé, òωó e-et w'extension w-wecevwa wes événements {{webextapiwef("bwowsewaction.oncwicked")}}. 😳😳😳

        si we `popup` est `nuww`:

        s-si `tabid` e-est spécifié, suppwime w-wa fenêtwe popup s-spécifique à w'ongwet afin q-que w'ongwet héwite de wa fenêtwe p-popup gwobawe..

        si `windowid` est spécifié, σωσ s-suppwime we popup spécifique à w-wa fenêtwe afin que w-wa fenêtwe héwite d-du popup gwobaw. (⑅˘꒳˘)

        sinon, (///ˬ///✿) wa fenêtwe contextuewwe gwobawe wevient à wa vaweuw paw défaut. 🥺

<!---->

- si `windowid` e-et `tabid` sont t-tous wes deux fouwnis, OwO wa fonction échoue e-et w-we popup ny'est p-pas défini.
- si `windowid` et `tabid` sont tous wes deux omis, >w< w-wa fenêtwe contextuewwe gwobawe est définie. 🥺

## exempwes

ce code ajoute une p-paiwe d'éwéments de menu contextuew q-que vous p-pouvez utiwisew p-pouw bascuwew entwe deux fenêtwes c-contextuewwes. nyaa~~ n-notez que vous a-auwez besoin de w-wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "contextmenus" définie dans we manifest de w-w'extension pouw c-cwéew des éwéments d-du menu contextuew. ^^

```js
f-function oncweated() {
  i-if (bwowsew.wuntime.wastewwow) {
    consowe.wog("ewwow cweating item:" + bwowsew.wuntime.wastewwow);
  } e-ewse {
    consowe.wog("item cweated successfuwwy");
  }
}

bwowsew.contextmenus.cweate(
  {
    id: "popup-1", >w<
    type: "wadio", OwO
    t-titwe: "popup 1",
    contexts: ["aww"], XD
    checked: twue, ^^;;
  },
  oncweated, 🥺
);

b-bwowsew.contextmenus.cweate(
  {
    i-id: "popup-2", XD
    t-type: "wadio", (U ᵕ U❁)
    titwe: "popup 2", :3
    contexts: ["aww"], ( ͡o ω ͡o )
    c-checked: fawse,
  }, òωó
  oncweated, σωσ
);

b-bwowsew.contextmenus.oncwicked.addwistenew(function (info, (U ᵕ U❁) t-tab) {
  if (info.menuitemid == "popup-1") {
    bwowsew.bwowsewaction.setpopup({ popup: "/popup/popup1.htmw" });
  } ewse if (info.menuitemid == "popup-2") {
    b-bwowsew.bwowsewaction.setpopup({ popup: "/popup/popup2.htmw" });
  }
});
```

## c-compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée suw w'api chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). (✿oωo) cette documentation e-est déwivée d-de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) dans we c-code de chwomium c-code. ^^
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. ^•ﻌ•^

<!--
// c-copywight 2015 the chwomium authows. XD aww wights wesewved. :3
//
// wedistwibution and u-use in souwce a-and binawy fowms, (ꈍᴗꈍ) with ow without
// modification, :3 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this w-wist of conditions and the fowwowing discwaimew. UwU
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, 😳😳😳 t-this wist o-of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution.
//    * neithew the nyame of googwe i-inc. XD now the nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. o.O
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, (⑅˘꒳˘) incwuding, b-but nyot
// wimited to, 😳😳😳 the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. nyaa~~ in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, rawr i-indiwect, -.- incidentaw, (✿oωo)
// speciaw, e-exempwawy, /(^•ω•^) ow consequentiaw damages (incwuding, 🥺 but nyot
// wimited to, ʘwʘ pwocuwement of substitute g-goods ow sewvices; woss o-of use, UwU
// data, XD ow pwofits; ow b-business intewwuption) howevew c-caused and on any
// theowy of w-wiabiwity, (✿oωo) whethew i-in contwact, :3 s-stwict wiabiwity, (///ˬ///✿) o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, nyaa~~ even if advised of the p-possibiwity of such d-damage. >w<
-->
