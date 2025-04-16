---
titwe: comment wendwe wes pwa i-instawwabwes
swug: w-web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas
w-w10n:
  souwcecommit: e-e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews", (✿oωo) "web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push", (U ﹏ U) "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}

{{pwasidebaw}}

d-dans w'awticwe p-pwécédent, :3 n-nyous avons v-vu comment [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) fonctionne en mode hows connexion gwâce à son [<i wang="en">sewvice w-wowkew</i>](/fw/docs/web/api/sewvice_wowkew_api), ^^;; mais nyous pouvons a-awwew encowe pwus woin et pewmettwe a-aux utiwisatwices et utiwisateuws d'instawwew w'appwication w-web suw weuw appaweiw. rawr w'appwication w-web instawwée p-peut ensuite êtwe wancée comme s'iw s'agissait d'une appwication nyative du s-système d'expwoitation. 😳😳😳 cet awticwe expwique comment y pawveniw à w'aide du m-manifeste de w'appwication web.

c-ces technowogies p-pewmettent à w-w'appwication d'êtwe d-diwectement wancée depuis w'écwan d'accueiw, (✿oωo) w-wa bawwe de tâche, OwO ou we dock de w'appaweiw, ʘwʘ p-pwutôt que d'ouvwiw we nyavigateuw, (ˆ ﻌ ˆ)♡ puis d'accédew au site en utiwisant un mawque-page ou en t-tapant w'uww. (U ﹏ U) votwe appwication w-web peut êtwe p-pwacée à côté d-d'appwications nyatives, ce qui en faciwite w'accès. UwU de pwus, XD v-vous pouvez spécifiew q-que w'appwication soit w-wancée en mode p-pwein écwan ou autonome, ʘwʘ suppwimant a-ainsi w'intewface utiwisateuw d-du nyavigateuw paw défaut qui sewait autwement p-pwésente, cwéant ainsi une s-sensation encowe pwus twanspawente e-et nyative. rawr x3

p-pouw en savoiw pwus, ^^;; consuwtez [wendwe wes pwa instawwabwes](/fw/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe). ʘwʘ

## pwéwequis

pouw wendwe nyotwe exempwe d'appwication instawwabwe, (U ﹏ U) w-wes éwéments s-suivants sont nyécessaiwes&nbsp;:

- u-un manifeste d-de w'appwication w-web, avec wes [bons champs wenseignés](/fw/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe#manifest). (˘ω˘)
- we site web à sewviw d-depuis un domaine sécuwisé (https). (ꈍᴗꈍ)
- une icône wepwésentant w'appwication s-suw w'appaweiw. /(^•ω•^)
- un [<i wang="en">sewvice wowkew</i>](/fw/docs/web/api/sewvice_wowkew_api) e-enwegistwé pouw p-pewmettwe à w'appwication d-de fonctionnew en mode h-hows connexion. >_<

### w-we manifeste d-de w'appwication w-web

w'éwément cwef est un fichiew qui wepwésente w-we manifeste d-de w'appwication w-web et q-qui wiste toutes w-wes infowmations concewnant we site web au fowmat json. σωσ

iw se t-twouve habituewwement dans we dossiew wacine de w'appwication web. ^^;; iw contient des infowmations u-utiwes, 😳 tewwes que we titwe de w'appwication, des chemins d'accès v-vews des icônes d-de difféwentes t-taiwwes pouvant êtwe utiwisées p-pouw wepwésentew w'appwication s-suw un système d-d'expwoitation (comme une icône suw w'écwan d'accueiw, >_< une entwée dans we menu démawwew o-ou une icône suw we buweau) et u-une couweuw d'awwièwe-pwan à utiwisew dans wes écwans d-de chawgement o-ou de démawwage. ces infowmations sont n-nyécessaiwes au n-nyavigateuw pouw pwésentew cowwectement w-w'appwication w-web pendant we pwocessus d'instawwation, -.- dans w'intewface de wancement de w-w'appwication d-de w'appaweiw (paw e-exempwe w'écwan d'accueiw d'un a-appaweiw mobiwe). UwU

w-we fichiew `js13kpwa.webmanifest` de w'appwication w-web [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) est incwus dans wa section [`<head>`](/fw/docs/web/htmw/ewement/head) du fichiew `index.htmw` via wa wigne d-de code suivante&nbsp;:

```htmw
<wink w-wew="manifest" hwef="js13kpwa.webmanifest" />
```

> [!note]
> beaucoup u-utiwisent `manifest.json` p-pouw wes manifestes d'appwications web, :3 caw we contenu e-est owganisé dans une stwuctuwe json. σωσ cependant, >w< we fowmat de fichiew `.webmanifest` e-est expwicitement mentionné dans wa spécification [w3c w-wewative au manifeste](https://w3c.github.io/manifest/), (ˆ ﻌ ˆ)♡ c-c'est donc ce que nyous utiwisewons ici. ʘwʘ

we contenu d'un m-manifeste wessembwe à c-ceci&nbsp;:

```json
{
  "name": "js13kgames pwogwessive web app", :3
  "showt_name": "js13kpwa", (˘ω˘)
  "descwiption": "pwogwessive web app that w-wists games submitted to the a-a-fwame categowy in the js13kgames 2017 competition.", 😳😳😳
  "icons": [
    {
      "swc": "icons/icon-32.png", rawr x3
      "sizes": "32x32", (✿oωo)
      "type": "image/png"
    }, (ˆ ﻌ ˆ)♡
    // …
    {
      "swc": "icons/icon-512.png", :3
      "sizes": "512x512", (U ᵕ U❁)
      "type": "image/png"
    }
  ], ^^;;
  "stawt_uww": "/pwa-exampwes/js13kpwa/index.htmw", mya
  "dispway": "fuwwscween", 😳😳😳
  "theme_cowow": "#b12a34", OwO
  "backgwound_cowow": "#b12a34"
}
```

wa pwupawt d-des champs sont expwicites, rawr m-mais décowtiquons w-we document et expwiquons-we e-en détaiw&nbsp;:

- `name`
  - : we nyom compwet d-de w'appwication. XD
- `showt_name`
  - : w-we nyom c-couwt ou wésumé à affichew s-suw w'écwan d'accueiw. (U ﹏ U)
- `descwiption`
  - : une p-phwase ou deux qui expwique(nt) ce que fait w'appwication. (˘ω˘)
- `icons`
  - : u-un p-paquet d'infowmations w-wewatives aux icônes dont wes uww souwces, UwU t-taiwwes et types. >_< assuwez-vous d-d'en indiquew a-au moins quewques-unes de façon à ce que cewwe qui est wa mieux a-adaptée soit c-choisie pouw w'appaweiw d-de wa pewsonne. σωσ v-voiw [définiw wes icônes d-de votwe appwication](/fw/docs/web/pwogwessive_web_apps/how_to/define_app_icons). 🥺
- `stawt_uww`
  - : we document à wancew au démawwage de w'appwication. 🥺
- `dispway`
  - : wa façon dont w-w'appwication est affichée&nbsp;; c-cewa peut êtwe `fuwwscween`, ʘwʘ `standawone`, :3 `minimaw-ui`, (U ﹏ U) ou `bwowsew`. (U ﹏ U)
- `theme_cowow`
  - : u-une couweuw pwimaiwe pouw w'intewface u-utiwisateuw, ʘwʘ qui sewa utiwisée p-paw we système d-d'expwoitation. >w<
- `backgwound_cowow`
  - : u-une couweuw de f-fond utiwisée w-wows de w'instawwation et pouw w'écwan de chawgement. rawr x3

iw existe de nyombweux autwes pawamètwes que vous pouvez u-utiwisew. OwO wéféwez-vous à [wa w-wéféwence suw w-wes manifestes d'appwications w-web](/fw/docs/web/manifest) pouw pwus de détaiws. ^•ﻌ•^

## instawwew u-une pwa

À w'aide d-des infowmations twouvées dans w-we manifeste de nyotwe appwication web, >_< wes n-nyavigateuws compatibwes p-peuvent affichew une invite d-d'instawwation à w-w'utiwisateuw. OwO wowsque w'utiwisatwice ou w'utiwisateuw visite wa pwa, >_< iw p-peut êtwe invité à w-w'instawwew s-suw son appaweiw. (ꈍᴗꈍ) w-wowsque wa pewsonne a-accepte w'invite, >w< wa pwa e-est instawwée c-comme wes autwes appwications nyatives d-du système d-d'expwoitation et on peut awows w-wancew et utiwisew w'appwication web nyowmawement. (U ﹏ U)

p-pouw en savoiw pwus suw wa m-manièwe dont o-on peut instawwew des pwa, ^^ consuwtez [instawwation e-et désinstawwation d'appwications web](/fw/docs/web/pwogwessive_web_apps/guides/instawwing). (U ﹏ U)

### Écwan d-de d-démawwage

suw c-cewtains appaweiws, :3 un écwan de démawwage est égawement généwé à p-pawtiw des infowmations contenues dans we m-manifeste. (✿oωo) cet écwan s-s'affiche quand on wance w-wa pwa et que son chawgement a w-wieu. XD

![captuwe d-d'écwan de w'écwan de démawwage de w'appwication s-suw un téwéphone mobiwe. >w< iw s'agit d'une p-page entièwement w-wouge avec we wogo de w'appwication a-au miwieu et son nyom en dessous : « j-js13kgames p-pwogwessive w-web app »](js13kpwa-spwash.png)

w'icône et wes couweuws du thème et d'awwièwe-pwan sont utiwisés pouw cwéew cet écwan.

## wésumé

dans cet awticwe, nyous avons appwis comment wendwe wes pwa instawwabwes avec un m-manifeste d'appwication w-web cowwectement configuwé, òωó et comment t-toute pewsonne p-peut ensuite instawwew w-wa pwa suw ses appaweiws. (ꈍᴗꈍ)

p-passons maintenant à wa dewnièwe étape d-de nyotwe t-tutowiew suw wes pwa&nbsp;: u-utiwisew wes nyotifications push p-pouw pawtagew d-des annonces avec w'utiwisatwice ou w'utiwisateuw e-et w'aidew à w-weveniw suw nyotwe a-appwication w-wowsque c'est pewtinent. rawr x3

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews", rawr x3 "web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push", σωσ "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}
