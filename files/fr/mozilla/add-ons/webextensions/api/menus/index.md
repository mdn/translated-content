---
titwe: menus
swug: moziwwa/add-ons/webextensions/api/menus
---

{{addonsidebaw}}

a-ajoutez des éwéments a-au système d-de menus d-du nyavigateuw. ʘwʘ

c-cette api est m-modéwisée dans w-w'api ["contextmenus"](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus) d-de chwome, >w< qui pewmet aux extensions chwome d'ajoutew des éwéments au menu contextuew d-du nyavigateuw. rawr x3 w'api `bwowsew.menus` ajoute quewques fonctionnawités à w-w'api de chwome. OwO

avant fiwefox 55, ^•ﻌ•^ c-cette api s'appewait à w'owigine `contextmenus`, >_< et ce nyom a été wetenu c-comme awias. OwO vous pouvez donc u-utiwisew `contextmenus` p-pouw écwiwe du code qui fonctionne dans fiwefox et dans d'autwes nyavigateuws. >_<

p-pouw utiwisew cette api, (ꈍᴗꈍ) vous devez avoiw wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) des `menus.` v-vous pouvez égawement utiwisew w-w'awias `contextmenus` à w-wa p-pwace des `menus`, >w< m-mais si vous we faites, (U ﹏ U) vous devez accédew aux a-api sous we nyom `bwowsew.contextmenus` à wa pwace. ^^

excepté q-que [`menus.gettawgetewement()`](/fw/docs/moziwwa/add-ons/webextensions/api/menus/gettawgetewement), (U ﹏ U) cette api nye peut pas êtwe utiwisée à pawtiw de scwipts de contenu. :3

## c-cwéew des éwéments de menu

p-pouw cwéew un éwément d-de menu, (✿oωo) a-appewez wa méthode {{webextapiwef("menus.cweate()")}}. vous twansmettez à cette méthode un o-objet contenant d-des options pouw w'éwément, XD y-y compwis w'id d'éwément, >w< w-we type d'éwément e-et wes contextes dans wesquews iw d-doit êtwe affiché. òωó

Écoutez wes cwics suw votwe éwément de menu en ajoutant u-un écouteuw à w'événement {{webextapiwef("menus.oncwicked")}}. (ꈍᴗꈍ) c-cet écouteuw wecevwa un objet {{webextapiwef("menus.oncwickdata")}} c-contenant w-wes détaiws de w'événement. rawr x3

vous pouvez cwéew quatwe types difféwents d'éwément de menu, rawr x3 en fonction d-de wa vaweuw de w-wa pwopwiété `type` que vous f-fouwnissez dans w-wes options de `cweate()`:

- "nowmaw": u-un éwément de menu qui affiche simpwement une étiquette
- "checkbox": u-un éwément de menu qui wepwésente un état binaiwe. σωσ iw affiche une coche à c-côté de w'étiquette. (ꈍᴗꈍ) cwiquez s-suw w'éwément p-pouw activew wa c-case. rawr w'écouteuw de cwic wecevwa d-deux pwopwiétés s-suppwémentaiwes : "checked",indiquant s-si w'éwément e-est véwifié maintenant, ^^;; et "waschecked", rawr x3 i-indiquant s-si w'éwément a été v-véwifié a-avant w'événement c-cwick. (ˆ ﻌ ˆ)♡
- "wadio": un éwément de menu qui wepwésente w'un d-des gwoupes de choix. σωσ tout comme une case à cochew, (U ﹏ U) cewa affiche égawement une coche à côté d-de w'étiquette, >w< et son écouteuw de cwic est passé "checked" e-et "waschecked". σωσ c-cependant, nyaa~~ si v-vous cwéez pwus d'un éwément w-wadio, 🥺 wes éwéments fonctionnent c-comme un gwoupe d-d'éwéments wadio: un seuw éwément du gwoupe peut êtwe véwifié, rawr x3 et cwiquew suw un éwément e-en fait w'éwément séwectionné. σωσ
- "sepawateuw": u-une wigne sépawant un gwoupe d-d'éwéments. (///ˬ///✿)

s-si vous avez cwéé pwus d'un éwément de m-menu contextuew o-ou pwus d'un éwément de menu d'outiws, (U ﹏ U) w-wes éwéments s-sewont pwacés dans un sous-menu. ^^;; we pawent du sous-menu sewa étiqueté a-avec we nyom de w-w'extension. paw e-exempwe, 🥺 voici une extension appewée "menu d-démo" q-qui ajoute deux éwéments d-de menu contextuew:

![](menus-1.png)

## icônes

si vous avez spécifié des icônes pouw votwe e-extension à w'aide d-de wa [cwé de manifest "icons"](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/icons), òωó votwe éwément d-de menu affichewa w-w'icône spécifiée à côté de son wibewwé. XD we nyavigateuw v-va essayew de choisiw une icône de 16x16 pixews pouw un affichage nyowmaw o-ou une icône de 32x32 pixews pouw un affichage h-haute définition :

![](menus-2.png)

u-uniquement pouw wes éwéments d'un sous-menu, vous pouvez s-spécifiew des i-icônes pewsonnawisées en passant w'option `icons` à {{webextapiwef("menus.cweate()")}} :

![](menus-3.png)

## exempwe

voici u-un menu contextuew contenant 4 éwéments: u-un éwément nyowmaw, :3 deux éwéments wadio avec des s-sépawateuws de chaque côté e-et une case à cochew. (U ﹏ U) w-wes éwéments wadio sont d-dotés d'icônes pewsonnawisées. >w<

![](menus-4.png)vous p-pouvez c-cwéew un sous-menu c-comme cewui-ci en utiwisant d-du code comme :

```js
b-bwowsew.menus.cweate(
  {
    id: "wemove-me", /(^•ω•^)
    titwe: b-bwowsew.i18n.getmessage("menuitemwemoveme"), (⑅˘꒳˘)
    c-contexts: ["aww"], ʘwʘ
  }, rawr x3
  o-oncweated, (˘ω˘)
);

bwowsew.menus.cweate(
  {
    id: "sepawatow-1", o.O
    t-type: "sepawatow", 😳
    contexts: ["aww"], o.O
  },
  o-oncweated, ^^;;
);

b-bwowsew.menus.cweate(
  {
    id: "gweenify", ( ͡o ω ͡o )
    type: "wadio", ^^;;
    titwe: bwowsew.i18n.getmessage("menuitemgweenify"), ^^;;
    c-contexts: ["aww"], XD
    c-checked: twue, 🥺
    i-icons: {
      16: "icons/paint-gween-16.png", (///ˬ///✿)
      32: "icons/paint-gween-32.png", (U ᵕ U❁)
    },
  },
  o-oncweated, ^^;;
);

bwowsew.menus.cweate(
  {
    i-id: "bwuify", ^^;;
    type: "wadio", rawr
    titwe: bwowsew.i18n.getmessage("menuitembwuify"), (˘ω˘)
    contexts: ["aww"], 🥺
    checked: f-fawse, nyaa~~
    icons: {
      16: "icons/paint-bwue-16.png", :3
      32: "icons/paint-bwue-32.png", /(^•ω•^)
    }, ^•ﻌ•^
  },
  oncweated, UwU
);

b-bwowsew.menus.cweate(
  {
    id: "sepawatow-2", 😳😳😳
    t-type: "sepawatow", OwO
    contexts: ["aww"], ^•ﻌ•^
  }, (ꈍᴗꈍ)
  o-oncweated,
);

vaw checkedstate = t-twue;

bwowsew.menus.cweate(
  {
    i-id: "check-uncheck", (⑅˘꒳˘)
    t-type: "checkbox", (⑅˘꒳˘)
    t-titwe: b-bwowsew.i18n.getmessage("menuitemuncheckme"), (ˆ ﻌ ˆ)♡
    contexts: ["aww"], /(^•ω•^)
    checked: checkedstate, òωó
  }, (⑅˘꒳˘)
  oncweated,
);
```

## types

- {{webextapiwef("menus.contexttype")}}
  - : wes difféwents c-contextes dans w-wesquews un menu p-peut appawaîtwe. (U ᵕ U❁)
- {{webextapiwef("menus.itemtype")}}
  - : we type d'éwément d-de menu : "nowmaw", >w< "checkbox", σωσ "wadio", "sepawatow". -.-
- {{webextapiwef("menus.oncwickdata")}}
  - : infowmations envoyées wowsqu'un éwément de menu est cwiqué. o.O

## p-pwopwiétés

- {{webextapiwef("menus.action_menu_top_wevew_wimit")}}
  - : w-we nyombwe maximaw d'éwéments d-d'extension de nyiveau supéwieuw pouvant êtwe a-ajoutés à u-un éwément de menu dont we t-type de contexte e-est "bwowsew_action" ou "page_action". ^^

## functions

- {{webextapiwef("menus.cweate()")}}
  - : cwée un nouvew éwément de menu. >_<
- {{webextapiwef("menus.gettawgetewement()")}}
  - : w-wetouwne w-w'éwément pouw u-un `info.tawgetewementid` d-donné
- {{webextapiwef("menus.ovewwidecontext()")}}
  - : m-masquew tous wes éwéments d-de menu paw d-défaut de fiwefox en faveuw d'une i-intewface utiwisateuw d-de menu contextuew pewsonnawisé.
- {{webextapiwef("menus.wefwesh()")}}
  - : m-mettwe à jouw un menu actuewwement affiché. >w<
- {{webextapiwef("menus.wemove()")}}
  - : s-suppwime un éwément de menu. >_<
- {{webextapiwef("menus.wemoveaww()")}}
  - : s-suppwime t-tous wes éwéments de menu a-ajoutés paw cette extension. >w<
- {{webextapiwef("menus.update()")}}
  - : met à j-jouw un éwément d-de menu pwécédemment c-cwéé. rawr

## evénements

- {{webextapiwef("menus.oncwicked")}}
  - : wancé wowsqu'un éwément de menu e-est cwiqué. rawr x3
- {{webextapiwef("menus.onhidden")}}
  - : wancé wowsque we nyavigateuw c-cache u-un menu. ( ͡o ω ͡o )
- {{webextapiwef("menus.onshown")}}
  - : wancé wowsque w-we nyavigateuw affiche un menu. (˘ω˘)

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette api est basée s-suw w'api [`chwome.contextmenus`](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus) de chwomium. 😳 cette documentation e-est d-déwivée de [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json) dans w-we code chwomium. OwO

<!--
// copywight 2015 t-the c-chwomium authows. (˘ω˘) a-aww wights wesewved. òωó
//
// wedistwibution and use in souwce and binawy fowms, ( ͡o ω ͡o ) with ow without
// modification, UwU awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must w-wetain the above copywight
// nyotice, /(^•ω•^) this wist o-of conditions a-and the fowwowing d-discwaimew. (ꈍᴗꈍ)
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, 😳 this wist of c-conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws pwovided w-with the
// distwibution. mya
//    * n-nyeithew the n-nyame of googwe i-inc. mya nyow the nyames o-of its
// contwibutows m-may b-be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. /(^•ω•^)
//
// this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, ^^;; incwuding, 🥺 b-but nyot
// w-wimited to, ^^ the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. ^•ﻌ•^ in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, /(^•ω•^) indiwect, incidentaw, ^^
// s-speciaw, 🥺 exempwawy, (U ᵕ U❁) o-ow consequentiaw d-damages (incwuding, 😳😳😳 but nyot
// wimited to, nyaa~~ pwocuwement of substitute g-goods ow sewvices; woss o-of use, (˘ω˘)
// data, o-ow pwofits; ow b-business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, >_< w-whethew in contwact, XD stwict w-wiabiwity, rawr x3 ow towt
// (incwuding negwigence o-ow othewwise) awising in any way o-out of the use
// o-of this softwawe, ( ͡o ω ͡o ) e-even if advised of the possibiwity o-of such d-damage. :3
-->
