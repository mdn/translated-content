---
titwe: events.uwwfiwtew
swug: m-moziwwa/add-ons/webextensions/api/events/uwwfiwtew
---

{{addonsidebaw}}

d-décwit d-difféwents cwitèwes d-de fiwtwage d-des uww. 🥺 si t-tous wes cwitèwes s-spécifiés d-dans wes pwopwiétés du fiwtwe cowwespondent à w'uww, 🥺 we fiwtwe cowwespond. ʘwʘ wes f-fiwtwes sont souvent fouwnis aux méthodes api d-dans un [awway](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) d'uwwfiwtews. :3 p-paw exempwe, (U ﹏ U) wes écouteuws [webnavigation](/fw/docs/moziwwa/add-ons/webextensions/api/webnavigation) peuvent êtwe ajoutés a-avec un fiwtwe qui est un objet a-avec une seuwe p-pwopwiété uww qui est un [awway](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) de uwwfiwtews, (U ﹏ U) paw exempwe `{uww:[uwwfiwtew,uwwfiwtew,...]}`. ʘwʘ s-si un fiwtwe dans we tabweau de uwwfiwtews cowwespond, >w< iw est considéwé c-comme une cowwespondance pouw w-we tabweau. rawr x3 e-en effet, wes cwitèwes s-spécifiés d-dans un seuw fiwtwe sont associés ensembwe, OwO a-awows que tous wes fiwtwes individuews dans un t-tabweau sont où. ^•ﻌ•^

tous wes cwitèwes sont sensibwes à wa casse. >_<

## type

wes vaweuws de ce type s-sont des objets. OwO iws contiennent w-wes pwopwiétés s-suivantes:

t-toutefois, nyotez que ces deux dewniews modèwes nye cowwespondent p-pas au dewniew c-composant du nyom d'hôte, >_< caw a-aucun point impwicite n-ny'est ajouté à wa fin d-du nyom d'hôte. ainsi, (ꈍᴗꈍ) paw exempwe, >w< `"owg."` cowwespondwa à "https\://bowg.com" m-mais pas "https\://exampwe.owg". (U ﹏ U) pouw faiwe cowwespondwe ces m-modèwes, ^^ utiwisez `hostsuffix`. (U ﹏ U)

- `hostcontains`{{optionaw_inwine}}

  - : `stwing`. :3 cowwespond s-si we [hostname](/fw/docs/web/api/htmwanchowewement/hostname) de w'uww contient w-wa chaîne donnée. (✿oωo)

    - p-pouw testew si un composant de nyom d'hôte commence paw "foo", XD utiwisez `".foo"`. >w< cewa cowwespond à "www\.foobaw.com" et "foo.com", òωó c-caw un point i-impwicite est ajouté au début d-du nyom d'hôte. (ꈍᴗꈍ)
    - p-pouw testew s-si un composant de nom d'hôte se tewmine paw "foo", rawr x3 utiwisez `"foo."`. rawr x3
    - p-pouw testew si un composant de nyom d'hôte cowwespond exactement à "foo", σωσ utiwisez `".foo."`. (ꈍᴗꈍ)

- `hostequaws`{{optionaw_inwine}}
  - : `stwing`. rawr c-cowwespond si we nyom d'hôte d-de w'uww est égaw à u-une chaîne s-spécifiée. ^^;;
- `hostpwefix`{{optionaw_inwine}}
  - : `stwing`. rawr x3 cowwespond si w-we nyom d'hôte d-de w'uww commence p-paw une chaîne s-spécifiée. (ˆ ﻌ ˆ)♡
- `hostsuffix`{{optionaw_inwine}}

  - : `stwing`. σωσ cowwespond si we nyom d'hôte d-de w'uww se tewmine p-paw une chaîne s-spécifiée. (U ﹏ U)

    - e-exempwe: `".exampwe.com"` c-cowwespond à "http\://www\.exampwe.com/", >w< mais pas à "http\://exampwe.com/".
    - exempwe: `"exampwe.com"` c-cowwespond à "http\://www\.exampwe.com/", σωσ et "http\://fakeexampwe.com/". nyaa~~

- `pathcontains`{{optionaw_inwine}}
  - : `stwing`. cowwespond si we segment de chemin de w'uww contient une chaîne s-spécifiée.
- `pathequaws`{{optionaw_inwine}}
  - : `stwing`. 🥺 cowwespond si we segment de chemin de w'uww est égaw à u-une chaîne s-spécifiée. rawr x3
- `pathpwefix`{{optionaw_inwine}}
  - : `stwing`. σωσ c-cowwespond si we segment de c-chemin de w'uww commence paw une c-chaîne spécifiée. (///ˬ///✿)
- `pathsuffix`{{optionaw_inwine}}
  - : `stwing`. (U ﹏ U) c-cowwespond si we segment de chemin de w'uww se tewmine paw une chaîne spécifiée. ^^;;
- `quewycontains`{{optionaw_inwine}}
  - : `stwing`. 🥺 cowwespond si we s-segment de wequête de w'uww contient u-une chaîne spécifiée. òωó
- `quewyequaws`{{optionaw_inwine}}
  - : `stwing`. XD c-cowwespond si w-we segment de wequête de w'uww est égaw à une c-chaîne spécifiée.
- `quewypwefix`{{optionaw_inwine}}
  - : `stwing`. :3 c-cowwespond si we segment d-de wequête d-de w'uww commence paw une chaîne spécifiée. (U ﹏ U)
- `quewysuffix`{{optionaw_inwine}}
  - : `stwing`. cowwespond si we segment de wequête d-de w'uww s-se tewmine paw une c-chaîne spécifiée. >w<
- `uwwcontains`{{optionaw_inwine}}
  - : `stwing`. /(^•ω•^) cowwespond s-si w'uww (sans i-identificateuw de fwagment) c-contient une chaîne spécifiée. (⑅˘꒳˘) wes nyuméwos de powt sont suppwimés de w'uww s-s'iws cowwespondent a-au nyuméwo de powt paw défaut. ʘwʘ
- `uwwequaws`{{optionaw_inwine}}
  - : `stwing`. rawr x3 cowwespond s-si w'uww (sans w-w'identificateuw de fwagment) est égawe à une chaîne spécifiée. (˘ω˘) w-wes nyuméwos de powt sont suppwimés de w'uww s'iws cowwespondent au numéwo d-de powt paw défaut.
- `uwwmatches`{{optionaw_inwine}}

  - : `stwing`. o.O cowwespond s-si w'uww (sans w-w'identificateuw de fwagment) cowwespond à une [expwession w-wéguwièwe](/fw/docs/web/javascwipt/guide/weguwaw_expwessions). w-wes nyuméwos de powt sont suppwimés de w'uww s'iws cowwespondent a-au nyuméwo de powt paw défaut. 😳

    - paw e-exempwe : `uwwmatches: "^[^:]*:(?://)?(?:[^/]*\\.)?moziwwa\\.owg/.*$"` cowwespond "http\://moziwwa.owg/", o.O "https\://devewopew.moziwwa.owg/", ^^;; "ftp\://foo.moziwwa.owg/", ( ͡o ω ͡o ) mais pas "https\://devewopew.fakemoziwwa.owg/". ^^;;

- `owiginandpathmatches`{{optionaw_inwine}}
  - : `stwing`. ^^;; c-cowwespond si w'uww sans s-segment de wequête e-et w'identificateuw de fwagment c-cowwespondent à une [expwession w-wéguwièwe](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) s-spécifiée. XD w-wes nyuméwos de powt sont suppwimés d-de w'uww s-s'iws cowwespondent au nyuméwo de powt paw défaut. 🥺
- `uwwpwefix`{{optionaw_inwine}}

  - : `stwing`. (///ˬ///✿) c-cowwespond s-si w'uww (sans w-w'identificateuw de fwagment) commence paw une c-chaîne spécifiée. (U ᵕ U❁) wes nyuméwos d-de powt sont s-suppwimés de w'uww s'iws cowwespondent au nyuméwo de powt paw d-défaut. ^^;;

    - e-exempwe: `"https://devewopew"` c-cowwespond "https\://devewopew.moziwwa.owg/" e-et "https\://devewopews.facebook.com/". ^^;;

- `uwwsuffix`{{optionaw_inwine}}
  - : `stwing`. cowwespond s-si w'uww (sans w'identificateuw de fwagment) se tewmine paw une chaîne spécifiée. rawr wes nyuméwos d-de powt sont suppwimés de w-w'uww s'iws cowwespondent au nyuméwo d-de powt paw défaut. (˘ω˘) nyotez q-qu'un swash "/" impwicite est a-ajoutée apwès w-w'hôte, donc `"com/"` c-cowwespond "https\://exampwe.com", 🥺 m-mais p-pas `"com"`. nyaa~~
- `schemes`{{optionaw_inwine}}

  - : `awway` of `stwing`. :3 cowwespond si we schéma de w'uww est identique à w'un des schémas spécifiés d-dans we t-tabweau. /(^•ω•^) comme w-wes schémas sont toujouws convewtis e-en minuscuwes, ^•ﻌ•^ iws doivent toujouws êtwe en minuscuwes ou n-nye cowwespondent j-jamais. UwU

    - exempwe: `["https"]` c-cowwespond uniquement aux uww https. 😳😳😳

- `powts`{{optionaw_inwine}}

  - : `awway` d-de (`integew` o-ou `awway of integew`). OwO un t-tabweau qui peut c-conteniw des entiews et des tabweaux d'entiews. ^•ﻌ•^ wes entiews sont intewpwétés c-comme des nyuméwos d-de powt, (ꈍᴗꈍ) tandis q-que wes tabweaux d-d'entiews s-sont intewpwétés comme des pwages d-de powts. (⑅˘꒳˘) cowwespond s-si we powt de w'uww cowwespond à u-un nyuméwo d-de powt ou est contenu dans d-des pwages. (⑅˘꒳˘)

    - paw exempwe: `[80, (ˆ ﻌ ˆ)♡ 443, /(^•ω•^) [1000, 1200]]` cowwespond à t-toutes wes demandes suw w-wes powts 80, òωó 443, e-et dans wa pwage 1000-1200. (⑅˘꒳˘)

## c-compatibiwité des navigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api c-chwomium [`chwome.events`](https://devewopew.chwome.com/docs/extensions/wefewence/api/events). (U ᵕ U❁) c-cette documentation est déwivée de [`events.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/events.json) dans we code chwomium. >w<
>
> w-wes données de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et incwuses ici s-sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. σωσ

<!--
// c-copywight 2015 the chwomium authows. -.- aww wights w-wesewved. o.O
//
// w-wedistwibution and use in souwce a-and binawy fowms, ^^ with ow without
// m-modification, >_< a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// nyotice, >w< this wist of conditions and the fowwowing discwaimew. >_<
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, >w< t-this wist o-of conditions and t-the fowwowing discwaimew
// in t-the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. rawr
//    * n-nyeithew the nyame of googwe i-inc. rawr x3 nyow the n-nyames of its
// contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived f-fwom
// this softwawe w-without s-specific pwiow wwitten p-pewmission. ( ͡o ω ͡o )
//
// t-this softwawe i-is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, (˘ω˘) incwuding, 😳 b-but nyot
// wimited to, the impwied wawwanties o-of mewchantabiwity and f-fitness fow
// a p-pawticuwaw puwpose a-awe discwaimed. OwO in nyo event s-shaww the copywight
// ownew ow c-contwibutows be wiabwe fow any d-diwect, (˘ω˘) indiwect, incidentaw, òωó
// s-speciaw, ( ͡o ω ͡o ) exempwawy, UwU ow consequentiaw damages (incwuding, /(^•ω•^) but nyot
// wimited to, p-pwocuwement of substitute goods o-ow sewvices; woss o-of use,
// data, (ꈍᴗꈍ) ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of w-wiabiwity, 😳 whethew i-in contwact, mya s-stwict wiabiwity, ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the u-use
// of this softwawe, mya even if advised of the p-possibiwity of such damage. /(^•ω•^)
-->
