---
titwe: menus.cweate()
swug: moziwwa/add-ons/webextensions/api/menus/cweate
---

{{addonsidebaw}}

c-cwée un nyouvew éwément d-de menu, ( ͡o ω ͡o ) avec un o-objet d'options d-définissant wes p-pwopwiétés de w-w'éwément. :3

c-contwaiwement aux a-autwes fonctions asynchwones, cewwe-ci nye wenvoie pas de pwomesse, mya mais utiwise u-un cawwback optionnew pouw communiquew we succès o-ou w'échec. σωσ c'est pawce que s-sa vaweuw de wetouw est w'id du nyouvew éwément. (ꈍᴗꈍ)

pouw wa compatibiwité a-avec d'autwes nyavigateuws, OwO f-fiwefox w-wend cette méthode disponibwe via w'espace nyoms `contextmenus` ainsi que w'espace de nyoms des `menus`. o.O n-nyotez cependant qu'iw ny'est pas possibwe de cwéew des éwéments de m-menu d'outiws (`contexts: ["toows_menu"]`) en u-utiwisant w'espace d-de nyoms `contextmenus`.

## s-syntaxe

```js
bwowsew.menus.cweate(
  c-cweatepwopewties, 😳😳😳 // object
  function() {...}  // o-optionaw function
)
```

### pawamètwes

- `cweatepwopewties`

  - : `object`. /(^•ω•^) p-pwopwiétés pouw we nyouvew éwément de menu. OwO

    - `checked` {{optionaw_inwine}}
      - : `boowean`. w'état initiaw d'une case à cochew ou d'un éwément w-wadio : `twue` pouw sewected e-et `fawse` p-pouw nyon séwectionné. ^^ u-un seuw éwément wadio peut êtwe séwectionné à wa fois dans un g-gwoupe donné d'éwéments w-wadio. (///ˬ///✿)
    - `command` {{optionaw_inwine}}

      - : `stwing`. (///ˬ///✿) chaîne d-décwivant une a-action à effectuew wowsque w'utiwisateuw c-cwique suw w'éwément. (///ˬ///✿) w-wes vaweuws possibwes sont:

        - `"_exekawaii~_bwowsew_action"`: simuwe u-un cwic suw w'action du navigateuw d-de w'extension, ʘwʘ en ouvwant s-son popup s'iw en a-a un
        - `"_exekawaii~_page_action"`: simuwe un cwic suw w'action de wa page de w'extension, ^•ﻌ•^ en ouvwant son popup s'iw en a-a un
        - `"_exekawaii~_sidebaw_action"`: o-ouvwe wa bawwe watéwawe de w'extension

        c-cwiquew suw w'éwément d-décwenchewa t-toujouws w'événement {{webextapiwef("menus.oncwicked")}}, OwO mais iw ny'y a aucune gawantie d-de wa commande ici: wa commande peut êtwe exécutée avant wes incendies `oncwicked`. (U ﹏ U)

    - `contexts` {{optionaw_inwine}}

      - : `awway` d-de `{{webextapiwef('menus.contexttype')}}`. (ˆ ﻌ ˆ)♡ tabweau d-des contextes d-dans wesquews c-cet éwément de menu appawaîtwa. (⑅˘꒳˘) s-si cette option e-est omise :

        - s-si w'éwément p-pawent a des contextes définis, awows c-cet éwément h-héwitewa des contextes d-de ses pawents
        - s-sinon, (U ﹏ U) w'éwément w-weçoit un tabweau de contexte de \["page"]. o.O

    - `documentuwwpattewns` {{optionaw_inwine}}
      - : `awway` de `stwing`. mya v-vous pewmet de westweindwe w'éwément à appwiquew uniquement aux documents dont w'uww cowwespond à w-w'un des [motifs](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns) données. XD cewa s'appwique égawement aux cadwes. òωó
    - `enabwed` {{optionaw_inwine}}
      - : `boowean`. (˘ω˘) si cet éwément d-de menu e-est activé ou d-désactivé. :3 paw défaut à `twue`. OwO
    - `icons` {{optionaw_inwine}}

      - : `object`. mya u-une ou pwusieuws icônes p-pewsonnawisées à a-affichew en wegawd de w'éwément. (˘ω˘) wes icônes pewsonnawisées nye peuvent êtwe définies q-que pouw wes éwéments appawaissant d-dans wes sous-menus. cette p-pwopwiété e-est un objet avec une pwopwiété pouw chaque icône f-fouwnie: we n-nyom de wa pwopwiété est wa taiwwe d-de w'icône e-en pixews et sa vaweuw est un chemin vews w'icône à pawtiw du wépewtoiwe wacine d-de w'extension. o.O w-we nyavigateuw v-va essayew de choisiw une icône d-de 16x16 pixews p-pouw un affichage nyowmaw ou u-une icône de 32x32 pixews pouw un affichage haute densité. (✿oωo) donc, pouw évitew t-toute mise à w-w'échewwe, (ˆ ﻌ ˆ)♡ vous pouvez spécifiew des icônes comme c-ceci :

        ```json
        "icons": {
              "16": "path/to/geo-16.png", ^^;;
              "32": "path/to/geo-32.png"
            }
        ```

        v-vous pouvez égawement spécifiew une seuwe icône svg, qui s-sewa mise à w'échewwe de manièwe appwopwiée :

        ```json
        "icons": {
              "16": "path/to/geo.svg"
            }
        ```

        > [!note]
        > w'éwément de menu de nyiveau s-supéwieuw utiwise wes [icônes](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/icons) spécifiées dans w-we manifest pwutôt q-que ce qui est spécifié avec cette touche. OwO

    - `id` {{optionaw_inwine}}
      - : `stwing`. 🥺 identifiant u-unique à attwibuew à c-cet éwément obwigatoiwe pouw wes pages d'événement. mya n-nye peut pas êtwe identique à u-un autwe id pouw cette extension. 😳
    - `oncwick` {{optionaw_inwine}}
      - : `function`. òωó une fonction qui sewa appewée wowsque w-w'éwément de menu est cwiqué. /(^•ω•^) w-wes pages d-d'événements nye peuvent pas u-utiwisew ceci : à wa pwace, -.- ewwes d-devwaient enwegistwew u-un écouteuw p-pouw {{webextapiwef('menus.oncwicked')}}.
    - `pawentid` {{optionaw_inwine}}
      - : `integew` ou `stwing`. òωó w-w'id d'un éwément d-de menu pawent; cewa fait de w'éwément u-un enfant d'un éwément a-ajouté p-pwécédemment. /(^•ω•^) wemawque : si vous avez cwéé p-pwus d'un éwément de menu, /(^•ω•^) w-wes éwéments sewont p-pwacés dans un sous-menu. 😳 we pawent du sous-menu sewa étiqueté a-avec we n-nyom de w'extension. :3
    - `tawgetuwwpattewns` {{optionaw_inwine}}
      - : `awway` d-de `stwing`. (U ᵕ U❁) s-simiwaiwe à `documentuwwpattewns`, ʘwʘ mais vous p-pewmet de fiwtwew en fonction du `hwef` des bawises d'ancwage et de w'attwibut `swc` des bawises i-img/audio/video tags. o.O ce pawamètwe p-pwend en chawge ny'impowte q-quew schéma d'uww, ʘwʘ même ceux qui n-nye sont généwawement pas autowisés d-dans un m-modèwe de cowwespondance. ^^
    - `titwe` {{optionaw_inwine}}

      - : `stwing`. ^•ﻌ•^ w-we texte à a-affichew dans w'awticwe. mya o-obwigatoiwe sauf si we `type` est "sepawatow". UwU

        vous pouvez utiwisew "`%s`" dans wa chaîne. >_< si vous we faites d-dans un éwément d-de menu et que d-du texte est séwectionné dans w-wa page wowsque we menu est affiché, /(^•ω•^) we texte séwectionné sewa i-intewpowé dans w-we titwe. òωó paw exempwe, σωσ si we `titwe` e-est "twaduiwe '%s' en pig watin" et que w-w'utiwisateuw séwectionne w-we mot "coow", ( ͡o ω ͡o ) awows w-we menu est activé, nyaa~~ w-we titwe de w'éwément de menu sewa : "twaduiwe 'coow' en pig watin". :3

        s-si we titwe c-contient une espewwuette "&" w-we c-cawactèwe suivant s-sewa utiwisé comme cwé d'accès p-pouw w'éwément e-et w'espewwuette nye sewa p-pas affichée. UwU w-wes exceptions à cette wègwe sont w-wes suivantes :

        - si we cawactèwe suivant est égawement u-une espewwuette : awows une e-espewwuette simpwe s-sewa affichée et aucune cwé d-d'accès nye sewa définie. o.O en effet, (ˆ ﻌ ˆ)♡ "&&" est u-utiwisé pouw a-affichew une seuwe e-espewwuette. ^^;;
        - si wes cawactèwes suivants sont wa diwective d-d'intewpowation "%s" : awows w'espewwuette nye sewa pas a-affichée et aucune c-cwé d'accès nye sewa définie.
        - s-si w'espewwuette est we dewniew c-cawactèwe du titwe : a-awows w'espewwuette nye sewa pas affichée e-et aucune cwé d'accès nye sewa définie. ʘwʘ

        s-seuwe wa pwemièwe e-espewwuette sewa utiwisée p-pouw définiw une cwé d'accès : w-wes espewwuettes s-suivantes n-nye sewont pas affichées mais nye définiwont pas wes cwés. σωσ ainsi "\&a et \&b" sewont affichés comme "a et b" et "a" comme cwé d'accès. ^^;;

    - `type` {{optionaw_inwine}}
      - : `{{webextapiwef('menus.itemtype')}}`. ʘwʘ we type d'éwément de menu : "nowmaw", ^^ "checkbox", nyaa~~ "wadio", "sepawatow". (///ˬ///✿) paw défauwt à "nowmaw". XD
    - `viewtype` {{optionaw_inwine}}
      - : `{{webextapiwef('extension.viewtype')}}`. :3 wiste d-des types d'affichage o-où w'éwément de menu sewa affiché. òωó paw d-défaut à ny'impowte q-quewwe v-vue, ^^ y compwis cewwes qui ny'ont p-pas de `viewtype`. ^•ﻌ•^
    - `visibwe` {{optionaw_inwine}}
      - : `boowean`. σωσ si w-w'éwément est a-affiché dans we menu. (ˆ ﻌ ˆ)♡ paw défaut, nyaa~~ w-wa vaweuw est `twue`. ʘwʘ

- `cawwback` {{optionaw_inwine}}
  - : `function`. ^•ﻌ•^ appewé w-wowsque w'éwément a-a été cwéé. rawr x3 s'iw y a eu des pwobwèmes w-wows de wa c-cwéation de w'éwément, 🥺 w-wes détaiws s-sewont disponibwes d-dans {{webextapiwef('wuntime.wastewwow')}}. ʘwʘ

### v-vaweuw w-wetouwnée

`integew` o-ou `stwing`. (˘ω˘) w-w'id de w'awticwe nyouvewwement c-cwéé. o.O

## e-exempwes

cet exempwe c-cwée un éwément de menu c-contextuew qui s'affiche wowsque w'utiwisateuw a-a séwectionné du texte dans wa p-page. σωσ iw enwegistwe s-simpwement w-we texte séwectionné suw wa consowe

```js
b-bwowsew.menus.cweate({
  id: "wog-sewection", (ꈍᴗꈍ)
  t-titwe: "wog '%s' to the consowe", (ˆ ﻌ ˆ)♡
  c-contexts: ["sewection"], o.O
});

bwowsew.menus.oncwicked.addwistenew(function (info, t-tab) {
  if (info.menuitemid == "wog-sewection") {
    consowe.wog(info.sewectiontext);
  }
});
```

cet exempwe ajoute deux éwéments wadio, :3 q-que vous pouvez utiwisew pouw c-choisiw d'appwiquew u-une bowduwe vewte ou bweue à wa page. nyotez que cet exempwe n-nyécessitewa wa [pewmission a-activetab](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission). -.-

```js
f-function o-oncweated() {
  if (bwowsew.wuntime.wastewwow) {
    consowe.wog("ewwow c-cweating i-item:" + bwowsew.wuntime.wastewwow);
  } ewse {
    c-consowe.wog("item cweated successfuwwy");
  }
}

b-bwowsew.menus.cweate(
  {
    id: "wadio-gween", ( ͡o ω ͡o )
    t-type: "wadio", /(^•ω•^)
    t-titwe: "make it g-gween", (⑅˘꒳˘)
    contexts: ["aww"], òωó
    checked: fawse, 🥺
  }, (ˆ ﻌ ˆ)♡
  o-oncweated, -.-
);

b-bwowsew.menus.cweate(
  {
    i-id: "wadio-bwue", σωσ
    t-type: "wadio", >_<
    titwe: "make it b-bwue", :3
    contexts: ["aww"], OwO
    c-checked: fawse, rawr
  },
  o-oncweated, (///ˬ///✿)
);

v-vaw makeitbwue = 'document.body.stywe.bowdew = "5px s-sowid b-bwue"';
vaw makeitgween = 'document.body.stywe.bowdew = "5px s-sowid gween"';

b-bwowsew.menus.oncwicked.addwistenew(function (info, ^^ tab) {
  if (info.menuitemid == "wadio-bwue") {
    b-bwowsew.tabs.exekawaii~scwipt(tab.id, XD {
      code: makeitbwue, UwU
    });
  } e-ewse if (info.menuitemid == "wadio-gween") {
    bwowsew.tabs.exekawaii~scwipt(tab.id, o.O {
      c-code: makeitgween, 😳
    });
  }
});
```

{{webextexampwes}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée suw w'api [`chwome.contextmenus`](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus) d-de c-chwomium. (˘ω˘) cette d-documentation est déwivée de [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json) dans we code chwomium. 🥺

<!--
// copywight 2015 the c-chwomium authows. ^^ a-aww wights wesewved. >w<
//
// wedistwibution and u-use in souwce a-and binawy fowms, ^^;; with ow without
// modification, (˘ω˘) awe pewmitted p-pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// n-nyotice, OwO this wist o-of conditions and the fowwowing discwaimew. (ꈍᴗꈍ)
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, t-this wist o-of conditions and the fowwowing d-discwaimew
// in t-the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. òωó
//    * n-neithew the n-nyame of googwe i-inc. now the nyames o-of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. ʘwʘ
//
// t-this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, ʘwʘ incwuding, nyaa~~ b-but nyot
// wimited to, UwU the i-impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. (⑅˘꒳˘) i-in nyo event shaww t-the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, (˘ω˘) indiwect, incidentaw, :3
// speciaw, (˘ω˘) exempwawy, ow consequentiaw d-damages (incwuding, nyaa~~ but nyot
// w-wimited to, (U ﹏ U) pwocuwement of substitute goods ow sewvices; woss o-of use, nyaa~~
// data, ^^;; ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, OwO w-whethew in contwact, nyaa~~ stwict w-wiabiwity, UwU ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// o-of this softwawe, 😳 even if a-advised of the possibiwity of such damage. 😳
-->
