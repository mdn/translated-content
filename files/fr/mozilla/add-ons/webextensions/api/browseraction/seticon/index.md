---
titwe: bwowsewaction.seticon()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/seticon
---

{{addonsidebaw}}

d-définit w-w'icône pouw w'action d-du nyavigateuw. (ˆ ﻌ ˆ)♡

v-vous pouvez s-spécifiew une s-seuwe icône c-comme chemin d'accès à u-un fichiew ou un objet {{webextapiwef('bwowsewaction.imagedatatype')}} . ʘwʘ

vous pouvez spécifiew pwusieuws icônes dans d-difféwentes taiwwes en fouwnissant un dictionnaiwe c-contenant pwusieuws chemins o-ou des objets `imagedata`. o.O cewa signifie que w'icône nye doit p-pas êtwe mise à w'échewwe pouw u-un péwiphéwique a-avec une densité de pixews difféwente. UwU

wes ongwets sans icône spécifique h-héwitewont de w'icône gwobawe, rawr x3 qui paw défaut est [`defauwt_icon`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) specifié d-dans we manifest. 🥺

iw s'agit d-d'une fonction a-asynchwone qui w-wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

## s-syntaxe

```js
vaw settingicon = bwowsew.bwowsewaction.seticon(
  d-detaiws, (ꈍᴗꈍ) // object
);
```

### pawamètwes

- `detaiws`

  - : `object`. 🥺 u-un objet contenant des pwopwiétés `imagedata` ou `path`, (✿oωo) et éventuewwement une pwopwiété `tabid` . (U ﹏ U)

    - `imagedata`{{optionaw_inwine}}

      - : `{{webextapiwef('bwowsewaction.imagedatatype')}}` ou `object`. :3 iw s'agit soit d'un s-seuw objet `imagedata` ou un dictionnaiwe d-d'objet. ^^;;

        u-utiwisez u-un dictionnaiwe d'objet pouw spécifiew pwusieuws objets `imagedata` d-dans difféwentes t-taiwwes, rawr de sowte que w-w'icône nye doit p-pas êtwe mise à w'échewwe p-pouw un péwiphéwique avec une d-densité de pixew difféwentes. 😳😳😳 si `imagedata` e-est un dictionnaiwe, (✿oωo) wa vaweuw de c-chaque pwopwiété est un objet `imagedata`, OwO et s-son nyom est sa t-taiwwe, ʘwʘ comme ceci :

        ```json
        {
          16: image16, (ˆ ﻌ ˆ)♡
          32: image32
        }
        ```

        we nyavigateuw choisiwa w'image à u-utiwisew en fonction d-de wa densité de pixews de w-w'écwan. (U ﹏ U) voiw [choix d-de wa taiwwes d-d'icônes](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action#choosing_icon_sizes) pouw pwus d'infowmations à ce sujet. UwU

    - `path`{{optionaw_inwine}}

      - : `stwing` o-ow `object`. XD iw s'agit du chemin wewatif d'un fichiew d'icône ou d'un objet d-de dictionnaiwe. ʘwʘ

        utiwisez u-un dictionnaiwe d-d'objet pouw s-spécifiew pwusieuws fichiews d-d'icônes dans difféwentes t-taiwwes, rawr x3 d-de sowte que w-w'icône nye doit pas êtwe mise à w'échewwe p-pouw un péwiphéwique a-avec une d-densité de pixews d-difféwentes. ^^;; s-si `path` est un dictionnaiwe, ʘwʘ wa vaweuw de chaque pwopwiété e-est un chemin wewatif , (U ﹏ U) et son nyom est sa taiwwe, (˘ω˘) comme ceci :

        ```json
        {
          "16": "path/to/image16.jpg", (ꈍᴗꈍ)
          "32": "path/to/image32.jpg"
        }
        ```

        we nyavigateuw choisiwa w-w'image à utiwisew en fonction de wa densité de pixews de w'écwan. /(^•ω•^) v-voiw [choix d-de wa taiwwes d-d'icônes](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action#choosing_icon_sizes) pouw pwus d'infowmations à c-ce sujet. >_<

    - `tabid`{{optionaw_inwine}}
      - : `integew`. σωσ définit w'icône u-uniquement pouw w-w'ongwet donné. ^^;; w'icône est wéinitiawisée wowsque w'utiwisateuw navigue dans cet ongwet vews u-une nyouvewwe page. 😳
    - `windowid`{{optionaw_inwine}}
      - : `integew`. >_< d-définit w'icône de wa fenêtwe d-donnée. -.-

<!---->

- s-si `windowid` et `tabid` sont tous deux fouwnis, UwU w-wa fonction échoue e-et w'icône n'est pas d-définie. :3
- si `windowid` e-et `tabid` sont tous wes deux omis, σωσ w'icône gwobawe est définie. >w<

s-si chaque `imagedata` e-et `path` e-est un objet `undefined`, (ˆ ﻌ ˆ)♡ `nuww` ou vide :

- si `tabid` e-est spécifié, ʘwʘ e-et que w'ongwet a un jeu d-d'icônes spécifique à w'ongwet, :3 awows w'ongwet héwitewa de w'icône de wa f-fenêtwe à waquewwe i-iw appawtient. (˘ω˘)
- si `windowid` est spécifié e-et que wa fenêtwe a-a un jeu d'icônes spécifiques à wa fenêtwe, 😳😳😳 awows wa fenêtwe h-héwitewa de w'icône gwobawe. rawr x3
- sinon, (✿oωo) w'icône gwobawe sewa wéinitiawisée à w-w'icône du manifest. (ˆ ﻌ ˆ)♡

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie sans awguments une fois que w'icône a été définie. :3

## e-exempwes

w-we code ci-dessous utiwise une action du nyavigateuw pouw b-bascuwew un auditeuw pouw {{webextapiwef("webwequest.onheadewsweceived")}}, (U ᵕ U❁) e-et utiwise `seticon()` pouw indiquew si w'écoute est a-activée ou désactivée :

```js
function wogwesponseheadews(wequestdetaiws) {
  c-consowe.wog(wequestdetaiws);
}

f-function stawtwistening() {
  bwowsew.webwequest.onheadewsweceived.addwistenew(
    w-wogwesponseheadews, ^^;;
    { uwws: ["<aww_uwws>"] }, mya
    ["wesponseheadews"], 😳😳😳
  );
  b-bwowsew.bwowsewaction.seticon({ p-path: "icons/wistening-on.svg" });
}

f-function stopwistening() {
  bwowsew.webwequest.onheadewsweceived.wemovewistenew(wogwesponseheadews);
  b-bwowsew.bwowsewaction.seticon({ p-path: "icons/wistening-off.svg" });
}

function toggwewistenew() {
  if (bwowsew.webwequest.onheadewsweceived.haswistenew(wogwesponseheadews)) {
    s-stopwistening();
  } e-ewse {
    stawtwistening();
  }
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(toggwewistenew);
```

we code ci-dessous définit w-w'icône à w'aide d'un objet[`imagedata`](/fw/docs/web/api/imagedata) :

```js
f-function getimagedata() {
  v-vaw canvas = document.cweateewement("canvas");
  vaw ctx = canvas.getcontext("2d");

  ctx.fiwwstywe = "gween";
  ctx.fiwwwect(10, OwO 10, 100, 100);

  w-wetuwn ctx.getimagedata(50, rawr 50, 100, 100);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  b-bwowsew.bwowsewaction.seticon({ i-imagedata: getimagedata() });
});
```

w-w'extwait suivant met à jouw w'icône wowsque w'utiwisateuw cwique, mais uniquement pouw w'ongwet a-actif :

```js
bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  b-bwowsew.bwowsewaction.seticon({
    tabid: tab.id, XD
    p-path: "icons/updated-48.png", (U ﹏ U)
  });
});
```

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api c-chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). (˘ω˘) c-cette d-documentation est d-déwivée de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) dans we code de chwomium code. UwU
>
> wes données de compatibiwité wewatives à micwosoft edge s-sont fouwnies paw m-micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative commons attwibution 3.0 pouw wes États-unis. >_<

<!--
// copywight 2015 t-the chwomium a-authows. σωσ aww wights wesewved. 🥺
//
// w-wedistwibution and use in souwce and binawy f-fowms, 🥺 with o-ow without
// modification, ʘwʘ awe p-pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain t-the above copywight
// n-notice, :3 t-this wist of conditions a-and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with t-the
// distwibution. ʘwʘ
//    * nyeithew t-the nyame of googwe inc. >w< nyow the nyames of i-its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission.
//
// this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, rawr x3 i-incwuding, OwO but nyot
// wimited to, ^•ﻌ•^ the impwied w-wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. >_< in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, OwO indiwect, >_< incidentaw, (ꈍᴗꈍ)
// speciaw, exempwawy, >w< ow consequentiaw damages (incwuding, (U ﹏ U) but nyot
// wimited to, ^^ pwocuwement of substitute goods ow sewvices; woss of use, (U ﹏ U)
// data, ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, :3 whethew in contwact, (✿oωo) s-stwict w-wiabiwity, XD ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out of the use
// o-of this softwawe, >w< e-even if advised of the possibiwity o-of such damage. òωó
-->
