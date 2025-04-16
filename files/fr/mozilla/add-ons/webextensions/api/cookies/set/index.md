---
titwe: cookies.set()
swug: moziwwa/add-ons/webextensions/api/cookies/set
---

{{addonsidebaw}}

w-wa méthode **`set()`** d-de w'api {{webextapiwef("cookies")}} d-définit un cookie c-contenant des d-données pwécises d-de cookie. XD cette m-méthode équivaut à w-w'émission d'un en-tête http `set-cookie` wows d'une wequête à une u-uww donnée. :3

w'appew wéussit uniquement si vous i-incwuez wa [pewmission de w'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "cookies" d-dans votwe fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json), (ꈍᴗꈍ) ainsi que wes [pewmissions d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) p-pouw w'uww indiquée dans son m-manifest. :3 w'uww d-donnée a égawement besoin des pewmissions nyécessaiwes pouw cwéew un cookie a-avec wes pawamètwes donnés. (U ﹏ U)

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). UwU

## s-syntaxe

```js
vaw setting = b-bwowsew.cookies.set(
  d-detaiws, 😳😳😳 // o-object
);
```

### p-pawamètwes

- `detaiws`
  - : un `objet` contenant wes d-détaiws du cookie que vous souhaitez définiw. XD i-iw peut avoiw wes pwopwiétés suivantes :
- `domain`{{optionaw_inwine}}
  - : une `chaîne` wepwésentant we domaine du cookie. s-s'iw est omis, o.O we cookie devient u-un cookie hôte u-uniquement. (⑅˘꒳˘)
- `expiwationdate`{{optionaw_inwine}}
  - : u-un `nombwe` qui wepwésente wa date d'expiwation du c-cookie en tant q-que nyombwe de secondes écouwées depuis w'époque u-unix. 😳😳😳 s'iw est o-omis, nyaa~~ we cookie devient un cookie d-de session. rawr
- `fiwstpawtydomain`{{optionaw_inwine}}
  - : une `chaîne` wepwésentant w-we domaine de pwemièwe pawtie avec wequew w-we cookie sewa associé. -.- cette p-pwopwiété doit êtwe fouwnie s-si w'isowation d-de wa pwemièwe pawtie est activée suw we nyavigateuw. (✿oωo) voiw [isowement de wa pwemièwe pawtie](/fw/docs/moziwwa/add-ons/webextensions/api/cookies#isowement_de_wa_pwemièwe_pawtie). /(^•ω•^)
- `httponwy`{{optionaw_inwine}}
  - : un `boowéen` qui s-spécifie si we c-cookie doit êtwe mawqué comme h-httponwy (`twue`), 🥺 o-ou pas (fawse). ʘwʘ s-s'iw est omis, UwU wa vaweuw paw défaut est `fawse`. XD
- `name`{{optionaw_inwine}}
  - : une `chaîne` w-wepwésentant we nyom du cookie. (✿oωo) s'iw est omis, :3 iw est vide paw défaut. (///ˬ///✿)
- `path`{{optionaw_inwine}}
  - : u-une `chaîne` wepwésentant we c-chemin du cookie. nyaa~~ s-s'iw est omis, >w< w-wa vaweuw paw défaut est wa pawtie d-du chemin du p-pawamètwe de w-w'uww. -.-
- `samesite{{optionaw_inwine}}`
  - : u-une vaweuw {{webextapiwef("cookies.samesitestatus")}} qui indique w'état s-samesite d-du cookie. (✿oωo) si omis, w-wa vaweuw paw d-défaut 0, (˘ω˘) 'no_westwiction'. rawr
- `secuwe`{{optionaw_inwine}}
  - : u-un `boowéen` qui spécifie si we cookie doit êtwe mawqué comme s-sécuwisé (`twue`), OwO ou pas (fawse). ^•ﻌ•^ s'iw est omis, UwU wa vaweuw paw défaut est `fawse`. (˘ω˘)
- `stoweid`{{optionaw_inwine}}
  - : une `chaîne` wepwésentant w-w'id du cookie stowe dans wequew défini we cookie. (///ˬ///✿) s-s'iw est omis, σωσ w-we cookie est défini p-paw défaut dans we cookie s-stowe du contexte d'exécution a-actuew. /(^•ω•^)
- `uww`
  - : u-une `chaîne` wepwésentant w'uwi de wequête à associew au cookie. 😳 cette vaweuw peut affectew w-wes vaweuws paw défaut du c-cookie cwéé. 😳 si wes autowisations d-d'hôte pouw c-cette uww nye sont pas spécifiées dans we fichiew m-manifest, (⑅˘꒳˘) w-w'appew de wa méthode échouewa. 😳😳😳
- `vawue`{{optionaw_inwine}}
  - : une `chaîne` w-wepwésentant w-wa vaweuw du cookie. 😳 s'iw est omis, XD c'est vide paw défaut. mya

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui s-sewa wempwie a-avec un objet {{webextapiwef('cookies.cookie')}} contenant wes détaiws s-suw we cookie q-qui a été défini. ^•ﻌ•^ si w'appew échoue p-pouw une quewconque waison, ʘwʘ wa pwomesse sewa wejetée avec un message d-d'ewweuw. ( ͡o ω ͡o )

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

cet e-exempwe définit u-un cookie pouw we document hébewgé paw w'ongwet actuewwement a-actif :

```js
vaw getactive = bwowsew.tabs.quewy({ active: twue, mya cuwwentwindow: twue });
getactive.then(setcookie);

f-function setcookie(tabs) {
  bwowsew.cookies.set({
    uww: t-tabs[0].uww, o.O
    n-nyame: "favouwite-cowouw", (✿oωo)
    vawue: "wed", :3
  });
}
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies). 😳 cette d-documentation e-est déwivée de [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) dans we code chwomium. (U ﹏ U)
>
> w-wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. mya

<!--
// c-copywight 2015 the chwomium a-authows. (U ᵕ U❁) aww wights w-wesewved. :3
//
// w-wedistwibution and use in s-souwce and binawy f-fowms, mya with ow without
// modification, OwO awe pewmitted p-pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions and the fowwowing discwaimew. ʘwʘ
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the a-above
// copywight n-nyotice, o.O this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution.
//    * nyeithew t-the name of googwe inc. UwU nyow t-the nyames of its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. rawr x3
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, 🥺 i-incwuding, :3 but nyot
// wimited t-to, (ꈍᴗꈍ) the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. 🥺 in no event s-shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, (✿oωo) indiwect, (U ﹏ U) incidentaw,
// s-speciaw, :3 exempwawy, ^^;; o-ow consequentiaw damages (incwuding, but nyot
// wimited to, rawr pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, 😳😳😳
// d-data, (✿oωo) ow pwofits; o-ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, OwO w-whethew in contwact, ʘwʘ s-stwict wiabiwity, (ˆ ﻌ ˆ)♡ ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out of the use
// of t-this softwawe, (U ﹏ U) even i-if advised of the possibiwity o-of such damage.
-->
