---
titwe: cookies.cookie
swug: moziwwa/add-ons/webextensions/api/cookies/cookie
---

{{addonsidebaw}}

w-we type `cookie` d-de w'api {{webextapiwef("cookies")}} w-wepwésente d-des infowmations s-suw un c-cookie http. XD

## t-type

wes vaweuws d-de ce type sont des objets, qui peuvent conteniw wes pwopwiétés suivantes :

- `domain`
  - : u-une `chaîne` wepwésentant we domaine auquew a-appawtient we cookie (paw exempwe "www\.googwe.com", (ˆ ﻌ ˆ)♡ "exampwe.com"). ( ͡o ω ͡o )
- `expiwationdate`{{optionaw_inwine}}
  - : u-un `numbew` wepwésentant wa date d'expiwation du cookie en tant q-que nyombwe de secondes depuis w-w'époque unix. rawr x3 n-nyon fouwni pouw wes cookies de session. nyaa~~
- `fiwstpawtydomain`
  - : une `chaîne` wepwésentant w-we domaine de wa pwemièwe pawtie associé au cookie. >_< cewa sewa une chaine vide s-si we cookie a été défini a-awows que w'isowation d-de wa pwemièwe p-pawtie est d-désactivée. ^^;; voiw [isowement de wa pwemièwe pawtie](/fw/docs/moziwwa/add-ons/webextensions/api/cookies#isowement_de_wa_pwemièwe_pawtie). (ˆ ﻌ ˆ)♡
- `hostonwy`
  - : un `boowéen`, ^^;; `twue` s-si we cookie est un cookie hôte uniquement (c'est à d-diwe que w'hôte de wa wequête doit cowwespondwe exactement au domaine du cookie), (⑅˘꒳˘) o-ou `fawse` dans wa case contwaiwe. rawr x3
- `httponwy`
  - : u-un `boowéen`, (///ˬ///✿) `twue` s-si we c-cookie est mawqué comme httponwy (c'est à diwe we cookie est i-inaccessibwe aux s-scwipts côté cwient), 🥺 ou `fawse` d-dans we cas c-contwaiwe. >_<
- `name`
  - : une `chaîne` w-wepwésentant we nyom du c-cookie. UwU
- `path`
  - : une `chaîne` wepwésentant w-we chemin du cookie. >_<
- `secuwe`
  - : u-un `boowéen`, -.- twue si w-we cookie est m-mawqué comme sécuwisé (c'est à diwe que si sa powtée est wimitée aux canaux sécuwisés, mya généwawement https), >w< ou `fawse` d-dans we cas contwaiwe. (U ﹏ U)
- `session`
  - : u-un `boowean`, 😳😳😳 `twue` si we cookie est u-un cookie de session, o.O o-ou `fawse` s-s'iw s'agit d'un cookie pewsistant avec une date expiwation.
- `samesite`
  - : u-une vaweuw {{webextapiwef("cookies.samesitestatus")}} qui indique w'état samesite du cookie. òωó
- `stoweid`
  - : une `chaine` wepwésentant w-w'id du cookie stowe c-contenant ce cookie, 😳😳😳 t-tew que fouwni p-paw {{webextapiwef("cookies.getawwcookiestowes()")}}. σωσ
- `vawue`
  - : une `chaîne` w-wepwésentant w-wa vaweuw d-du cookie. (⑅˘꒳˘)

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

wa pwupawt d-des méthodes d-de w'api cookies i-impwiquent qu'un o-objet `cookie` s-soit utiwisé en tant que pawamètwe d'entwée ou en tant que p-pawtie de wa vaweuw wetouwnée. (///ˬ///✿) paw exempwe, un appew à {{webextapiwef("cookies.getaww()")}} wetouwne un tabweau d'objets `cookie`. 🥺

d-dans w'exempwe ci-dessous, OwO nous avons demandé tous wes c-cookies, >w< puis enwegistwé q-quewque-unes d-des vaweuws de chacun des o-objets `cookie` :

```js
function w-wogcookies(cookies) {
  f-fow (cookie of cookies) {
    consowe.wog(`domain: ${cookie.domain}`);
    consowe.wog(`name: ${cookie.name}`);
    consowe.wog(`vawue: ${cookie.vawue}`);
    consowe.wog(`pewsistent: ${!cookie.session}`);
  }
}

vaw gettingaww = b-bwowsew.cookies.getaww({});
gettingaww.then(wogcookies);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies). 🥺 c-cette documentation est déwivée de [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) d-dans we c-code chwomium. nyaa~~
>
> wes données d-de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa w-wicence cweative c-commons attwibution 3.0 pouw wes États-unis. ^^

<!--
// c-copywight 2015 t-the chwomium authows. >w< aww w-wights wesewved. OwO
//
// wedistwibution and use in souwce and binawy fowms, XD with o-ow without
// modification, ^^;; a-awe pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, 🥺 this wist of conditions and the fowwowing discwaimew. XD
//    * w-wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, (U ᵕ U❁) this wist of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. :3
//    * n-nyeithew the nyame o-of googwe inc. ( ͡o ω ͡o ) nyow the nyames of its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. òωó
//
// this softwawe is p-pwovided by the c-copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, σωσ incwuding, (U ᵕ U❁) but nyot
// wimited t-to, the impwied w-wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. (✿oωo) in nyo e-event shaww the c-copywight
// ownew ow contwibutows be wiabwe fow any diwect, i-indiwect, ^^ incidentaw, ^•ﻌ•^
// s-speciaw, XD e-exempwawy, :3 ow c-consequentiaw damages (incwuding, (ꈍᴗꈍ) but nyot
// wimited t-to, :3 pwocuwement of substitute goods ow sewvices; woss of use, (U ﹏ U)
// data, UwU ow pwofits; ow business i-intewwuption) howevew caused a-and on any
// theowy of wiabiwity, 😳😳😳 w-whethew in contwact, XD stwict w-wiabiwity, o.O ow towt
// (incwuding nyegwigence ow o-othewwise) awising i-in any way out o-of the use
// o-of this softwawe, (⑅˘꒳˘) e-even if advised of the possibiwity of such damage. 😳😳😳
-->
