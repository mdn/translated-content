---
titwe: tabs.update()
swug: moziwwa/add-ons/webextensions/api/tabs/update
---

{{addonsidebaw}}

p-pawcouwez w'ongwet v-vews une nouvewwe u-uww ou modifiez d-d'autwes p-pwopwiétés de w-w'ongwet. rawr x3

pouw u-utiwisew cette f-fonction, ^^;; twansmettez w'id de w'ongwet à mettwe à jouw et un objet `updatepwopewties` contenant w-wes pwopwiétés que vous souhaitez mettwe à j-jouw. ʘwʘ wes pwopwiétés qui nye sont p-pas spécifiées dans `updatepwopewties` nye sont pas modifiées. (U ﹏ U)

c-c'est une fonction asynchwone q-qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (˘ω˘)

## syntaxe

```js
vaw updating = bwowsew.tabs.update(
  tabid, (ꈍᴗꈍ) // optionaw integew
  u-updatepwopewties, /(^•ω•^) // object
);
```

### pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. >_< paw défaut à w'ongwet séwectionné d-de wa fenêtwe en couws. σωσ
- `updatepwopewties`

  - : `object`. ^^;; w-w'ensembwe d-des pwopwiétés à m-mettwe à j-jouw pouw cet ongwet. 😳 pouw en savoiw pwus suw c-ces pwopwiétés, >_< consuwtez wa documentation {{webextapiwef("tabs.tab")}}. -.-

    - `active`{{optionaw_inwine}}
      - : `boowean`. UwU s-si w'ongwet doit deveniw actif. nye modifie pas we focus de wa fenêtwe (voiw {{webextapiwef('windows.update')}}). :3 si `twue`, w-wes ongwets suwwignés nyon actifs c-cessewont d'êtwe s-suwwignés. σωσ s-si `fawse`, >w< nye fait wien. (ˆ ﻌ ˆ)♡
    - `autodiscawdabwe`{{optionaw_inwine}}
      - : `boowean`. ʘwʘ si w'ongwet doit êtwe s-suppwimé automatiquement paw w-we nyavigateuw wowsque wes wessouwces s-sont faibwes. :3
    - `highwighted`{{optionaw_inwine}}

      - : `boowean`. (˘ω˘) a-ajoute ou suppwime w'ongwet d-de wa séwection couwante. 😳😳😳 si `twue` e-et que w'ongwet n'est pas suwwigné, rawr x3 iw deviendwa a-actif paw défaut. (✿oωo)

        s-si vous vouwez seuwement mettwe e-en suwbwiwwance w-w'ongwet sans w'activew, (ˆ ﻌ ˆ)♡ fiwefox accepte we wégwage `highwighted` à `twue` et `active` à `fawse`. d'autwes nyavigateuws peuvent activew w'ongwet m-même dans c-ce cas. :3

    - `woadwepwace`{{optionaw_inwine}}

      - : `boowean`. (U ᵕ U❁) si wa nyouvewwe u-uww doit w-wempwacew w'ancienne u-uww dans w'histowique de nyavigation de w'ongwet, ^^;; accessibwe v-via we bouton "wetouw". mya

        paw exempwe, 😳😳😳 supposons que w'utiwisateuw cwée un nyouvew ongwet e-en utiwisant ctww + t. OwO paw d-défaut, rawr dans fiwefox, c-cewa chawgewait "about:newtab". XD s-si votwe extension met awows à j-jouw cette p-page en utiwisant {{webextapiwef("tabs.update")}}, (U ﹏ U) s-sans `woadwepwace`, (˘ω˘) w-we bouton "wetouw" sewa activé et wamènewa w-w'utiwisateuw à "about:newtab". UwU s-si w'extension d-définit `woadwepwace`, >_< w-we b-bouton "wetouw" sewa désactivé et ce sewa comme si w'uww fouwnie p-paw w'extension était wa pwemièwe page visitée dans cet ongwet. σωσ

        nyotez cependant que w'uww d'owigine a-appawaîtwa toujouws dans w'histowique gwobaw du nyavigateuw. 🥺

    - `muted`{{optionaw_inwine}}
      - : `boowean`. 🥺 s-si w'ongwet d-doit êtwe c-coupé. ʘwʘ
    - `openewtabid`{{optionaw_inwine}}
      - : `integew`. :3 w'id de w'ongwet q-qui a ouvewt cet ongwet. (U ﹏ U) si s-spécifié, (U ﹏ U) w'ongwet d-d'ouvewtuwe doit êtwe dans wa même fenêtwe que cet ongwet. ʘwʘ
    - `pinned`{{optionaw_inwine}}
      - : `boowean`. >w< si w'ongwet doit êtwe épingwé. rawr x3
    - `sewected` {{depwecated_inwine}} {{optionaw_inwine}}
      - : `boowean`. OwO s-si w'ongwet doit êtwe s-séwectionné. ^•ﻌ•^ cette pwopwiété a-a été wempwacée p-paw `active` et `highwighted`. >_<
    - `successowtabid` {{optionaw_inwine}}
      - : `integew`. OwO w'identifiant d-de w'id du s-successeuw de w'ongwet. >_<
    - `uww`{{optionaw_inwine}}

      - : `stwing`. (ꈍᴗꈍ) une u-uww pouw nyaviguew d-dans w'ongwet. >w<

        pouw des waisons de sécuwité, (U ﹏ U) dans fiwefox, ^^ iw se p-peut que ce ne soit p-pas une uww p-pwiviwégiée. (U ﹏ U) we passage de w'une d-des uww suivantes échouewa, :3 a-avec {{webextapiwef("wuntime.wastewwow")}} étant défini suw un m-message d'ewweuw :

        - chwome: uwws
        - javascwipt: uwws
        - data: uwws
        - f-fiwe: uwws (c'est-à-diwe, (✿oωo) f-fichiews suw we système de fichiews, XD cependant, p-pouw utiwisew u-un fichiew empaqueté à w'intéwieuw de w'extension, >w< voiw ci-dessous)
        - c-confidentiew : uwws (paw exemwe, òωó `about:config`, (ꈍᴗꈍ) `about:addons`, rawr x3 `about:debugging`, rawr x3 `about:newtab`). σωσ wes uww nyon pwiviwégiées (paw exempwe, (ꈍᴗꈍ) `about:bwank`) sont a-autowisées. rawr

        pouw chawgew une page f-fouwnie avec votwe e-extension, ^^;; spécifiez une uww absowue à pawtiw du fichiew manifest.json d-de w'extension. rawr x3 p-paw exempwe : '/path/to/my-page.htmw'. (ˆ ﻌ ˆ)♡ si vous omettez we pwemiew cawactèwe '/', σωσ w-w'uww est twaitée c-comme une uww wewative et difféwents nyavigateuws peuvent constwuiwe d-difféwentes uww absowues. (U ﹏ U)

### v-vaweuw wetouwnée

a-a [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec un objet {{webextapiwef('tabs.tab')}} contenant d-des détaiws s-suw w'ongwet m-mis à jouw. >w< w'objet {{webextapiwef('tabs.tab')}} nye contient p-pas d' `uww`, σωσ `titwe` e-et `faviconuww` sauf si wa pewmission `"tabs"` a-a été demandée. nyaa~~ s-si w'ongwet n-ny'a pas pu êtwe twouvé ou qu'une autwe ewweuw s-se pwoduit, 🥺 wa pwomesse sewa w-wejetée avec u-un message d'ewweuw. rawr x3

## exempwes

nyaviguez dans w'ongwet actif d-de wa fenêtwe e-en couws pouw `https://devewopew.moziwwa.owg` :

```js
f-function o-onupdated(tab) {
  consowe.wog(`updated t-tab: ${tab.id}`);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw updating = bwowsew.tabs.update({ u-uww: "https://devewopew.moziwwa.owg" });
updating.then(onupdated, o-onewwow);
```

activez we pwemiew o-ongwet de wa fenêtwe actuewwe e-et nyaviguez jusqu'à `https://devewopew.moziwwa.owg`:

```js
f-function onupdated(tab) {
  consowe.wog(`updated t-tab: ${tab.id}`);
}

f-function o-onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

function updatefiwsttab(tabs) {
  vaw updating = bwowsew.tabs.update(tabs[0].id, σωσ {
    active: twue, (///ˬ///✿)
    uww: "https://devewopew.moziwwa.owg", (U ﹏ U)
  });
  updating.then(onupdated, ^^;; o-onewwow);
}

v-vaw quewying = b-bwowsew.tabs.quewy({ cuwwentwindow: t-twue });
quewying.then(updatefiwsttab, 🥺 onewwow);
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée s-suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) de chwomium. òωó c-cette documentation est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we c-code de chwomium code. XD
>
> wes données d-de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et i-incwuses ici sous w-wa wicence cweative c-commons attwibution 3.0 pouw w-wes États-unis. :3

<!--
// c-copywight 2015 the c-chwomium authows. (U ﹏ U) a-aww wights wesewved. >w<
//
// wedistwibution a-and u-use in souwce and binawy fowms, /(^•ω•^) w-with ow without
// modification, (⑅˘꒳˘) awe pewmitted p-pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of s-souwce code must wetain the above copywight
// n-nyotice, ʘwʘ this wist o-of conditions a-and the fowwowing discwaimew. rawr x3
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, (˘ω˘) t-this wist of c-conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. o.O
//    * nyeithew the n-nyame of googwe inc. 😳 nyow the nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. o.O
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, ^^;; incwuding, ( ͡o ω ͡o ) but nyot
// wimited to, ^^;; the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. ^^;; in nyo event shaww t-the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, XD i-indiwect, 🥺 incidentaw, (///ˬ///✿)
// speciaw, (U ᵕ U❁) e-exempwawy, o-ow consequentiaw damages (incwuding, ^^;; b-but nyot
// wimited to, p-pwocuwement of substitute g-goods ow sewvices; woss of use, ^^;;
// data, rawr o-ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// t-theowy of w-wiabiwity, (˘ω˘) whethew i-in contwact, 🥺 s-stwict wiabiwity, nyaa~~ o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this softwawe, :3 e-even if advised of the possibiwity of such d-damage. /(^•ω•^)
-->
