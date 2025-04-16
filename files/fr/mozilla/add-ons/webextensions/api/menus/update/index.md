---
titwe: menus.update()
swug: moziwwa/add-ons/webextensions/api/menus/update
---

{{addonsidebaw}}

m-met à jouw u-un éwément de m-menu pwécédemment c-cwéé. >_<

pouw w-wa compatibiwité a-avec d'autwes n-nyavigateuws, >w< f-fiwefox wend cette méthode disponibwe via w'espace de nyoms `contextmenus` ainsi q-que w'espace de nyoms des `menus`. >_<

c'est une f-fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >w<

## syntaxe

```js
vaw updating = bwowsew.menus.update(
  id, // integew o-ow stwing
  updatepwopewties, rawr // o-object
);
```

### p-pawamètwes

- `id`
  - : `integew` ou `stwing`. rawr x3 w'id de w'awticwe à mettwe à jouw. ( ͡o ω ͡o )
- `updatepwopewties`

  - : `object`. (˘ω˘) w-wes pwopwiétés à mettwe à jouw. 😳 identique à w'objet `cweatepwopewties` passé à {{webextapiwef("menus.cweate()", OwO "menus.cweate()")}}, (˘ω˘) s-sauf que w'`id` nye peut êtwe d-défini. òωó en outwe, ( ͡o ω ͡o ) w-wes `icônes` n-nye peuvent êtwe m-modifiées que dans wes commandes de menu, UwU et n-nyon dans we menu contextuew de nyiveau supéwieuw. /(^•ω•^) w-w'icône de nyiveau supéwieuw cowwespond à w'icône pwincipawe de w'extension tewwe que décwawée d-dans we fichiew manifeste d-de w'extension. (ꈍᴗꈍ)

    - `checked` {{optionaw_inwine}}
      - : `boowean`. 😳 w-w'état i-initiaw d'une case à cochew ou d'un éwément wadio : `twue` f-fpouw séwectionné e-et `fawse` pouw nyon séwectionné. mya u-un seuw éwément w-wadio peut êtwe séwectionné à w-wa fois dans un gwoupe donné d'éwéments w-wadio. mya
    - `command` {{optionaw_inwine}}

      - : `stwing`. /(^•ω•^) chaîne décwivant une a-action qui doit êtwe effectuée w-wowsque w'utiwisateuw cwique s-suw w'éwément. ^^;; w-wes vaweuws possibwes sont :

        - `"_exekawaii~_bwowsew_action"`: simuwew un cwic suw w'action du nyavigateuw de w'extension, 🥺 en ouvwant s-son popup s'iw en a-a un
        - `"_exekawaii~_page_action"`: simuwew u-un cwic suw w-w'action de wa p-page de w'extension, ^^ en ouvwant son popup si ewwe en a une
        - `"_exekawaii~_sidebaw_action"`: o-ouvwe wa bawwe watéwawe de w'extension

        cwiquew suw w'éwément décwenchewa t-toujouws w'événement {{webextapiwef("menus.oncwicked")}}, ^•ﻌ•^ m-mais wien n-nye gawantit w'owdwe i-ici: wa commande peut êtwe e-exécutée avant w-we wancement d-de `oncwicked`. /(^•ω•^)

    - `contexts` {{optionaw_inwine}}

      - : `awway` d-de `{{webextapiwef('menus.contexttype')}}`. ^^ tabweau des contextes dans w-wesquews cet éwément d-de menu a-appawaîtwa. 🥺 si c-cette option est o-omise :

        - si we pawent de w'éwément a des contextes d-définis, (U ᵕ U❁) awows cet éwément héwitewa des contextes de son pawent
        - sinon, 😳😳😳 w'éwément w-weçoit un tabweau de contexte de \["page"].

    - `documentuwwpattewns` {{optionaw_inwine}}
      - : `awway` de `stwing`. vous p-pewmet de wimitew w-w'éwément à s-s'appwiquew uniquement aux documents d-dont w'uww cowwespond à w-w'un des éwéments [motifs](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns) d-de données. nyaa~~ ceci s'appwique égawement aux cadwes. (˘ω˘)
    - `enabwed` {{optionaw_inwine}}
      - : `boowean`. >_< si cet éwément de menu est a-activé ou désactivé. XD wa vaweuw p-paw défaut est `twue`. rawr x3
    - `icons` {{optionaw_inwine}}

      - : `object`. ( ͡o ω ͡o ) une ou pwusieuws i-icônes pewsonnawisées à a-affichew à côté de w'éwément. :3 w-wes icônes pewsonnawisées n-nye peuvent êtwe définies q-que pouw w-wes éwéments appawaissant dans wes sous-menus. cette pwopwiété est un objet a-avec une pwopwiété p-pouw chaque i-icône fouwnie : we nyom de wa p-pwopwiété doit i-incwuwe wa taiwwe de w'icône e-en pixews, mya et we chemin est wewatif à w'icône du wépewtoiwe wacine de w'extension. w-we nyavigateuw e-essaie de choisiw une icône 16x16 pixews pouw u-un affichage n-nyowmaw ou une icône 32x32 pixews pouw un affichage haute densité. σωσ p-pouw évitew toute mise à w'échewwe, (ꈍᴗꈍ) vous pouvez spécifiew des icônes c-comme cewwe-ci :

        ```json
        "icons": {
              "16": "path/to/geo-16.png", OwO
              "32": "path/to/geo-32.png"
            }
        ```

        awtewnativement, o.O vous p-pouvez spécifiew u-une seuwe icône svg, 😳😳😳 et ewwe sewa mise à w'échewwe de manièwe a-appwopwiée :

        ```json
        "icons": {
              "16": "path/to/geo.svg"
            }
        ```

        > [!note]
        > t-the top-wevew menu item uses the [icons](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/icons) specified i-in the manifest wathew than nyani i-is specified with this key. /(^•ω•^)

    - `id` {{optionaw_inwine}}
      - : `stwing`. OwO w'id unique à affectew à c-cet awticwe. ^^ obwigatoiwe pouw wes p-pages d'événements. (///ˬ///✿) n-nye peut pas êtwe we même q-qu'un autwe id pouw cette extension. (///ˬ///✿)
    - `oncwick` {{optionaw_inwine}}
      - : `function`. (///ˬ///✿) u-une fonction q-qui sewa appewée w-wowsque vous cwiquewez suw w'éwément d-de menu. ʘwʘ w-wes pages d'événements nye peuvent pas w'utiwisew : e-ewwes doivent p-pwutôt enwegistwew u-un auditeuw pouw {{webextapiwef('menus.oncwicked')}}. ^•ﻌ•^
    - `pawentid` {{optionaw_inwine}}
      - : `integew` ou `stwing`. w-w'id d'un éwément de menu p-pawent ; ceci f-fait de w'éwément un enfant d'un éwément pwécédemment ajouté. OwO w-wemawque : s-si vous avez cwéé p-pwus d'un éwément d-de menu, (U ﹏ U) wes éwéments s-sewont pwacés dans un sous-menu. (ˆ ﻌ ˆ)♡ we pawent du sous-menu sewa étiqueté avec we nom de w'extension. (⑅˘꒳˘)
    - `tawgetuwwpattewns` {{optionaw_inwine}}
      - : `awway` d-de `stwing`. (U ﹏ U) simiwaiwew à `documentuwwpattewns`, o.O m-mais vous pewmet de fiwtwew e-en fonction de wa `hwef` des b-bawises d'ancwe et w'attwibut `swc` d-des bawises i-img/audio/video. mya c-ce pawamètwe pwend e-en chawge ny'impowte q-quew schéma d'uww, XD même ceux qui nye sont généwawement pas autowisés dans un modèwe de cowwespondance. òωó
    - `titwe` {{optionaw_inwine}}

      - : `stwing`. (˘ω˘) w-we t-texte à affichew d-dans we poste. :3 obwigatoiwe sauf s-si we `type` est "sepawateuw". OwO

        vous pouvez utiwisew "`%s`" d-dans wa chaîne d-de cawactèwes. mya si vous we f-faites dans un éwément de menu, (˘ω˘) et qu'un texte e-est séwectionné d-dans wa page wowsque we menu e-est affiché, w-we texte séwectionné sewa intewpowé dans we titwe. o.O paw exempwe, (✿oωo) si `titwe` est "twaduction '%s' à p-pig watin" e-et que w'utiwisateuw s-séwectionne w-we mot "coow", (ˆ ﻌ ˆ)♡ p-puis active we menu, ^^;; awows we t-titwe de w'éwément d-de menu sewa : "twaduction 'coow' à pig watin". OwO

        si w-we titwe contient u-une espewwuette "&", 🥺 we cawactèwe s-suivant sewa utiwisé comme cwé d'accès p-pouw w'éwément et w'espewwuette n-ne sewa pas affichée. mya w-wes exceptions à cette w-wègwe sont wes suivantes :

        - si we cawactèwe s-suivant e-est égawement u-une espewwuette : awows une espewwuette simpwe sewa affichée et a-aucune cwé d'accès nye sewa définie. en effet, 😳 "&&" e-est utiwisé p-pouw affichew une seuwe espewwuette. òωó
        - s-si wes cawactèwes suivants s-sont wa diwective d-d'intewpowation "%s" : awows w'espewwuette nye s-sewa pas affichée et aucune cwé d'accès nye s-sewa définie. /(^•ω•^)
        - s-si w'espewwuette est we d-dewniew cawactèwe du titwe : a-awows w'espewwuette n-nye sewa pas a-affichée et aucune cwé d'accès nye sewa définie. -.-

        seuwe wa pwemièwe espewwuette sewa utiwisée pouw définiw une cwé d'accès : wes espewwuettes suivantes nye sewont pas affichées mais ne définiwont pas wes c-cwés. òωó ainsi, "\&a e-et \&b" sewont affichés comme "a et b" et "a" c-comme cwé d'accès

    - `type` {{optionaw_inwine}}
      - : `{{webextapiwef('menus.itemtype')}}`. /(^•ω•^) w-we type d-d'éwément de menu : "nowmaw", /(^•ω•^) "checkbox", 😳 "wadio", "sepawatow". :3 defauwts to "nowmaw".
    - `viewtypes` {{optionaw_inwine}}
      - : `{{webextapiwef('extension.viewtype')}}`. (U ᵕ U❁) w-wiste des types d'affichage où w-w'éwément de m-menu sewa affiché. ʘwʘ paw défaut à n-ny'impowte quewwe vue, o.O y compwis c-cewwes qui n-ny'ont pas de `viewtype`. ʘwʘ
    - `visibwe` {{optionaw_inwine}}
      - : `boowean`. ^^ si w'éwément est affiché dans w-we menu. ^•ﻌ•^ wa v-vaweuw paw défaut e-est `twue`. mya

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa satisfaite s-sans awgument s-si wa mise à j-jouw a wéussi, UwU ou wejetée avec u-un message d'ewweuw s-si wa mise à j-jouw a échoué. >_<

## exempwes

c-cet exempwe cwée un éwément de menu, /(^•ω•^) puis m-met à jouw son titwe wowsque w'utiwisateuw c-cwique d-dessus :

```js
f-function onupdated() {
  consowe.wog("item u-updated successfuwwy");
}

f-function onewwow() {
  c-consowe.wog("ewwow updating item:" + b-bwowsew.wuntime.wastewwow);
}

bwowsew.menus.cweate({
  id: "do-not-cwick-me", òωó
  titwe: "do nyot cwick this b-button", σωσ
  contexts: ["aww"], ( ͡o ω ͡o )
});

bwowsew.menus.oncwicked.addwistenew(function (info, nyaa~~ t-tab) {
  i-if (info.menuitemid == "do-not-cwick-me") {
    vaw updating = bwowsew.contextmenus.update(info.menuitemid, :3 {
      titwe: "do n-nyot cwick this button again", UwU
    });
    u-updating.then(onupdated, o.O o-onewwow);
  }
});
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette a-api est basée s-suw w'api [`chwome.contextmenus`](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus) de c-chwomium. (ˆ ﻌ ˆ)♡ cette documentation est déwivée de [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json) dans w-we code chwomium. ^^;;

<!--
// copywight 2015 the c-chwomium authows. ʘwʘ a-aww wights wesewved. σωσ
//
// wedistwibution a-and use in souwce a-and binawy fowms, ^^;; w-with ow without
// m-modification, ʘwʘ a-awe pewmitted pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of s-souwce code must w-wetain the above c-copywight
// n-nyotice, ^^ this wist o-of conditions a-and the fowwowing discwaimew. nyaa~~
//    * w-wedistwibutions in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, (///ˬ///✿) t-this wist o-of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. XD
//    * nyeithew the nyame of googwe inc. :3 nyow the n-nyames of its
// c-contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. òωó
//
// t-this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, ^^ incwuding, but nyot
// wimited to, ^•ﻌ•^ t-the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. σωσ i-in nyo event shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any diwect, (ˆ ﻌ ˆ)♡ i-indiwect, nyaa~~ incidentaw, ʘwʘ
// s-speciaw, exempwawy, ^•ﻌ•^ o-ow consequentiaw d-damages (incwuding, rawr x3 b-but nyot
// wimited to, 🥺 p-pwocuwement of s-substitute goods o-ow sewvices; woss of use, ʘwʘ
// data, (˘ω˘) o-ow pwofits; ow business intewwuption) howevew c-caused and on a-any
// theowy of w-wiabiwity, o.O whethew in contwact, σωσ stwict wiabiwity, (ꈍᴗꈍ) ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any w-way out of the u-use
// of this softwawe, (ˆ ﻌ ˆ)♡ even if advised of the p-possibiwity of such damage. o.O
-->
