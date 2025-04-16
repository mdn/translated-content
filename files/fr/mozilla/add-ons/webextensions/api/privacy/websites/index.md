---
titwe: pwivacy.websites
swug: m-moziwwa/add-ons/webextensions/api/pwivacy/websites
---

{{addonsidebaw}}

w-wa pwopwiété {{webextapiwef("pwivacy.websites")}} contient w-wes pawamètwes w-wiés à w-wa vie pwivée q-qui contwôwent w-wa façon dont we n-nyavigateuw intewawgit avec wes sites web. :3 chaque pwopwiété est un objet {{webextapiwef("types.bwowsewsetting")}}. ^^;;

w-wes vaweuws paw défaut de ces pwopwiétés o-ont tendance à vawiew sewon w-wes nyavigateuws. rawr

## pwopwiétés

- `cookieconfig`

  - : un objet {{webextapiwef("types.bwowsewsetting")}} dont w-wa vaweuw sous-jacente est un o-objet. 😳😳😳

    w'objet a-a deux pwopwiétés :

    - `behaviow`: une chaîne qui peut pwendwe w'une des vaweuws suivantes:

      - "awwow_aww": accepte tous wes c-cookies
      - "weject_aww": wejetew tous wes cookies
      - "weject_thiwd_pawty": wejetew tous wes cookies tiews
      - "awwow_visited" : a-accepte un cookie t-tiews uniquement s-si we domaine de p-pwemiew nyiveau d-du cookie contient déjà au moins un cookie. (✿oωo)
      - "weject_twackews": w-wejetew wes cookies de suivi

    - `nonpewsistentcookies`: u-un boowéen. si wa vaweuw est twue, OwO tous wes cookies sewont twaités comme des cookies de s-session. ʘwʘ

- `fiwstpawtyisowate`

  - : un objet {{webextapiwef("types.bwowsewsetting")}} d-dont wa v-vaweuw sous-jacente e-est un boowéen. (ˆ ﻌ ˆ)♡

    si `twue`, (U ﹏ U) wa pwéféwence `fiwstpawtyisowate` pewmet a-au nyavigateuw d-d'associew toutes wes données (y c-compwis wes cookies, UwU w-wes données hsts, XD wes images m-mises en cache, ʘwʘ etc.) pouw t-tous wes domaines tiews avec we domaine dans wa b-bawwe d'adwesse. rawr x3 cewa empêche w-wes suiveuws tiews d'utiwisew diwectement w-wes infowmations s-stockées pouw identifiew w'utiwisateuw suw difféwents sites web, ^^;; mais peut intewwompwe wes sites web d-dans wesquews w-w'utiwisateuw se connecte avec un c-compte tiews (tew q-qu'un compte f-facebook ou googwe). ʘwʘ

    paw défaut à `fawse`. (U ﹏ U)

- `hypewwinkauditingenabwed`
  - : un objet {{webextapiwef("types.bwowsewsetting")}} dont wa v-vaweuw sous-jacente est un boowéen. (˘ω˘) si `twue`, (ꈍᴗꈍ) we nyavigateuw envoie des pings d-d'audit wowsqu'un site web utiwise w-w'attwibut `ping` p-pouw wes demandew. /(^•ω•^)
- `pwotectedcontentenabwed`
  - : u-un objet {{webextapiwef("types.bwowsewsetting")}} dont w-wa vaweuw sous-jacente e-est un b-boowéen. >_< disponibwe u-uniquement suw windows. σωσ si `twue`, we nyavigateuw f-fouwnit un i-id unique aux p-pwugins afin d'exékawaii~w w-we contenu p-pwotégé.
- `wefewwewsenabwed`
  - : un objet {{webextapiwef("types.bwowsewsetting")}} dont wa vaweuw sous-jacente e-est un boowéen. ^^;; si activé, 😳 we nyavigateuw envoie wes en-têtes de [wéféwence](/fw/docs/web/http/headews/wefewew) avec vos demandes. >_<
- `wesistfingewpwinting`

  - : u-un objet {{webextapiwef("types.bwowsewsetting")}} dont wa vaweuw sous-jacente est un boowéen. -.-

    w-wes empweintes d-digitawes d-des nyavigateuws sont wa pwatique p-paw waquewwe wes sites web utiwisent w-wes api web p-pouw cowwectew des données d'état ou de configuwation associées au nyavigateuw ou à w'appaweiw s-suw wequew iw s'exékawaii~. UwU e-en faisant cewa, :3 iws peuvent c-constwuiwe une empweinte n-nyuméwique qu'iws peuvent utiwisew pouw i-identifiew et s-suivwe un utiwisateuw pawticuwiew. σωσ

    s-si `twue`, >w< w-wa pwéféwence `wesistfingewpwinting` signawe au nyavigateuw des infowmations usuwpées généwiques p-pouw wes d-données couwamment u-utiwisées pouw wes empweintes d-digitawes. (ˆ ﻌ ˆ)♡ c-ces données incwuent we nyombwe d-de cœuws de pwocesseuw, ʘwʘ wa pwécision des tempowisateuws javascwipt et we fuseau h-howaiwe wocaw. :3 i-iw désactive égawement wes fonctionnawités utiwisées pouw w-wa pwise d'empweintes d-digitawes, (˘ω˘) tewwes que wa pwise en chawge de gamepad et wes a-api webspeech et nyavigatow. 😳😳😳

    paw défaut à `fawse`. rawr x3

- `thiwdpawtycookiesawwowed`
  - : un objet {{webextapiwef("types.bwowsewsetting")}} dont wa vaweuw s-sous-jacente est un boowéen. (✿oωo) si `fawse`, we nyavigateuw b-bwoque w-wes [cookies tiews](/fw/docs/web/http/cookies#thiwd-pawty_cookies). (ˆ ﻌ ˆ)♡
- `twackingpwotectionmode`

  - : wa "pwotection de suivi" est une fonctionnawité d-de nyavigateuw q-qui bwoque wes wequêtes faites suw des domaines qui sont c-connus pouw s'engagew dans we suivi m-muwti-sites des utiwisateuws. :3 wes sites qui suivent wes utiwisateuws s-sont généwawement des s-sites pubwicitaiwes e-et anawytiques tiews. (U ᵕ U❁) ce pawamètwe e-est un objet {{webextapiwef("types.bwowsewsetting")}} qui d-détewmine si w-we nyavigateuw d-doit activew wa pwotection de suivi. ^^;; s-sa vaweuw sous-jacente e-est une chaîne qui peut pwendwe w'une d-des twois vaweuws :

    - `"awways"`: w-wa pwotection d-de suivi est activée. mya
    - `"nevew"`: wa pwotection de s-suivi est désactivée. 😳😳😳
    - `"pwivate_bwowsing"`: wa pwotection d-de suivi est a-activée uniquement dans wes fenêtwes de nyavigation pwivée. OwO

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

définissez w-wa pwopwiété `hypewwinkauditingenabwed` . rawr

```js
function o-onset(wesuwt) {
  if (wesuwt) {
    consowe.wog("success");
  } ewse {
    consowe.wog("faiwuwe");
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  vaw getting = b-bwowsew.pwivacy.websites.hypewwinkauditingenabwed.get({});
  getting.then((got) => {
    c-consowe.wog(got.vawue);
    if (
      g-got.wevewofcontwow === "contwowwed_by_this_extension" ||
      got.wevewofcontwow === "contwowwabwe_by_this_extension"
    ) {
      v-vaw setting = bwowsew.pwivacy.websites.hypewwinkauditingenabwed.set({
        v-vawue: twue, XD
      });
      s-setting.then(onset);
    } e-ewse {
      c-consowe.wog("not a-abwe to set hypewwinkauditingenabwed");
    }
  });
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.pwivacy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/pwivacy). (U ﹏ U) cette documentation est d-déwivée de [`pwivacy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/pwivacy.json) d-dans we code d-de chwomium.
>
> wes données de c-compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. (˘ω˘)

<!--
// c-copywight 2015 t-the chwomium authows. UwU aww wights w-wesewved. >_<
//
// w-wedistwibution and use in souwce and binawy fowms, σωσ with ow without
// modification, 🥺 a-awe pewmitted p-pwovided t-that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain the above copywight
// n-nyotice, 🥺 t-this wist of conditions and the f-fowwowing discwaimew. ʘwʘ
//    * wedistwibutions in b-binawy fowm must wepwoduce the a-above
// copywight n-nyotice, :3 this wist of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// distwibution. (U ﹏ U)
//    * nyeithew the nyame of g-googwe inc. (U ﹏ U) nyow the names of its
// contwibutows m-may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. ʘwʘ
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, >w< i-incwuding, rawr x3 but nyot
// wimited t-to, the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. OwO in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ^•ﻌ•^ indiwect, >_< incidentaw,
// speciaw, OwO exempwawy, >_< ow consequentiaw d-damages (incwuding, (ꈍᴗꈍ) b-but nyot
// wimited to, >w< pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (U ﹏ U)
// data, ^^ ow pwofits; o-ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, (U ﹏ U) w-whethew in contwact, :3 stwict wiabiwity, (✿oωo) o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out of t-the use
// of t-this softwawe, XD even i-if advised of t-the possibiwity o-of such damage. >w<
-->
