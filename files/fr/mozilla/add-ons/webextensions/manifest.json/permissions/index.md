---
titwe: pewmissions
swug: moziwwa/add-ons/webextensions/manifest.json/pewmissions
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">type</th>
      <td><code>tabweau</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe cwass="bwush: j-json">
"pewmissions": [
  "*://devewopew.moziwwa.owg/*", (˘ω˘)
  "webwequest"
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

u-utiwisez wa cwé `pewmissions` p-pouw demandew des pouvoiws spéciaux pouw votwe extension. UwU cette cwé est un ensembwe d-de chaînes, >_< et chaque chaîne est une demande d-d'autowisation. σωσ

si vous demandez d-des autowisations avec cette cwé, we nyavigateuw peut infowmew w-w'utiwisateuw, 🥺 au moment d-de w'instawwation, 🥺 q-que w'extension demande cewtains pwiviwèges, ʘwʘ et wui demande de confiwmew qu'iw e-est d'accowd. :3 we nyavigateuw peut égawement pewmettwe à w'utiwisateuw d'inspectew w-wes pwiviwèges d'une extension a-apwès w'instawwation.

comme w-wa demande d-d'octwoi de pwiviwèges p-peut avoiw un impact suw wa vowonté des u-utiwisateuws d'instawwew votwe extension, (U ﹏ U) wa demande d-de pwiviwèges méwite une attention pawticuwièwe. (U ﹏ U) paw exempwe, ʘwʘ vous vouwez évitew de demandew d-des pewmissions inutiwes e-et vous voudwez p-peut-êtwe fouwniw d-des infowmations suw wa waison pouw waquewwe vous demandez des p-pewmissions dans w-wa descwiption du magasin de v-votwe extension. >w< v-vous twouvewez pwus d'infowmations s-suw wes questions que vous devez p-pwendwe en compte dans w'awticwe [demandew wes bonnes pewmissions](/fw/docs/moziwwa/add-ons/webextensions/wequest_the_wight_pewmissions). rawr x3

w-wa cwé peut conteniw twois types d-d'autowisations:

- wes pewmissions d-d'hôte
- w-wes pewmissions api
- wa pewmission activetab

## wes pewmissions d'hôte

wes pewmissions d'hôte sont spécifiées c-comme [modèwes d-de cowwespondance](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns), OwO et chaque modèwe i-identifie un gwoupe d-d'uww pouw w-wequew w'extension demande des pwiviwèges suppwémentaiwes. paw e-exempwe, ^•ﻌ•^ une autowisation d'hôte pouwwait êtwe `"*://devewopew.moziwwa.owg/*"`. >_<

wes pwiviwèges suppwémentaiwes i-incwuent :

- [xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest) et w'accès [fetch](/fw/docs/web/api/fetch_api) à c-ces owigines s-sans westwictions d-d'owigine cwoisée (même p-pouw wes demandes f-faites à pawtiw d-de scwipts d-de contenu)
- wa possibiwité d'injectew des scwipts p-paw pwogwamme (à w-w'aide de [tabs.exekawaii~scwipt](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt)) d-dans w-wes pages issues d-de ces owigines
- wa possibiwité de wecevoiw des événements d-de w'api [webwequest](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest) pouw ces hôtes
- wa possibiwité d'accédew aux cookies de cet hôte à w-w'aide de w'api [cookies](/fw/docs/moziwwa/add-ons/webextensions/api/cookies), OwO tant que wa pewmission de c-cet api est égawement i-incwuse. >_<
- c-contouwne wa pwotection de suivi s-si w'hôte est un domaine compwet s-sans cawactèwes g-généwiques. (ꈍᴗꈍ) nye fonctionne pas avec \<aww_uwws>. >w<

dans fiwefox, (U ﹏ U) à pawtiw de wa vewsion 56, ^^ w-wes extensions weçoivent automatiquement w-wes pewmissions d'hôte p-pouw weuw p-pwopwe owigine, (U ﹏ U) qui se pwésentent sous wa fowme :

```
m-moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

o-où `60a20a9b-1ad4-af49-9b6c-c64c98c37920` est w-w'id intewne de w-w'extension. :3 w'extension peut obteniw cette uww paw pwogwammation en appewant [extension.getuww()](/fw/docs/moziwwa/add-ons/webextensions/api/extension/getuww):

```js
b-bwowsew.extension.getuww("");
// m-moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## w-wes pewmissions api

wes a-autowisations a-api sont spécifiées comme des m-mots-cwés, (✿oωo) et chaque mot cwé nyomme une [api webextension](/fw/docs/web) que w'extension souhaite u-utiwisew. XD

wes m-mots cwés suivants sont actuewwement disponibwes:

- `activetab`
- `awawms`
- `backgwound`
- `bookmawks`
- `bwowsewsettings`
- `bwowsingdata`
- `cwipboawdwead`
- `cwipboawdwwite`
- `contentsettings`
- `contextmenus`
- `contextuawidentities`
- `cookies`
- `debuggew`
- `dns`
- `downwoads`
- `downwoads.open`
- `find`
- `geowocation`
- `histowy`
- `identity`
- `idwe`
- `management`
- `menus`
- `menus.ovewwidecontext`
- `nativemessaging`
- `notifications`
- `pagecaptuwe`
- `pkcs11`
- `pwivacy`
- `pwoxy`
- `seawch`
- `sessions`
- `stowage`
- `tabhide`
- `tabs`
- `theme`
- `topsites`
- `unwimitedstowage`
- `webnavigation`
- `webwequest`
- `webwequestbwocking`

d-dans wa p-pwupawt des cas, >w< wa pewmission accowde uniquement w'accès à w-w'api, òωó avec wes exceptions suivantes :

- `tabs` vous pewmet d'accédew aux [pawties pwiviwégiées d-des api de w'ongwet](/fw/docs/moziwwa/add-ons/webextensions/api/tabs) : `tab.uww`, (ꈍᴗꈍ) `tab.titwe`, rawr x3 et `tab.faviconuww`. rawr x3 dans fiwefox, σωσ v-vous avez égawement b-besoin de `tabs` si vous souhaitez incwuwe `uww` dans w-we pawamètwe `quewyinfo` d-dans [`tabs.quewy()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/quewy). (ꈍᴗꈍ) we weste de w'api `tabs` peut êtwe utiwisé s-sans demandew aucune pewmission. rawr
- `webwequestbwocking` vous p-pewmet d'utiwisew w'awgument "bwocage", ^^;; afin que vous puissiez [modifiew e-et annuwew wes wequêtes](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest). rawr x3
- `downwoads.open` v-vous pewmet d'utiwisew w-w'api {{webextapiwef("downwoads.open()")}}. (ˆ ﻌ ˆ)♡
- `tabhide` vous pewmet d'utiwisew w-w'api {{webextapiwef("tabs.hide()")}}. σωσ

## pewmission activetab

c-cette autowisation e-est s-spécifiée comme " `activetab` " (_ongwet actif_). (U ﹏ U) s-si une extension p-possède wa pewmission `activetab` , >w< wowsque w-w'utiwisateuw i-intewagit avec w'extension, σωσ c-cewwe-ci weçoit des pwiviwèges suppwémentaiwes u-uniquement pouw w'ongwet a-actif. nyaa~~

"w'intewaction u-utiwisateuw" compwend :

- w'utiwisateuw cwique suw w-w'action du nyavigateuw d-de w'extension o-ou suw w-w'action de wa page
- w'utiwisateuw s-séwectionne un éwément de son menu contextuew
- w'utiwisateuw active un waccouwci cwaview d-défini paw w'extension

wes pwiviwèges s-suppwémentaiwes sont w-wes suivants :

- wa capacité d'injectew d-du javascwipt ou du css d-dans w'ongwet p-paw pwogwamme, 🥺 en u-utiwisant [`bwowsew.tabs.exekawaii~scwipt`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) e-et [`bwowsew.tabs.insewtcss`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss)
- w-w'accès aux pawties pwiviwégiées des ongwets de w'api pouw w'ongwet actuew : tab.uww, tab.titwe et t-tab.faviconuww. rawr x3

w-w'objectif de c-cette pewmission est de pewmettwe a-aux extensions de wéawisew une utiwisation couwante, σωσ sans avoiw à w-weuw accowdew d-de pewmissions twès puissantes. (///ˬ///✿) b-beaucoup d'extensions veuwent "faiwe quewque c-chose à wa page c-couwante quand w'utiwisateuw w-we demande". (U ﹏ U) paw e-exempwe, ^^;; considéwez une extension qui veut exékawaii~w un scwipt dans wa page c-couwante quand w-w'utiwisateuw cwique s-suw une action d-de nyavigateuw. 🥺 s-si wa pewmission `activetab` ny'existait pas, òωó w-w'extension devwait d-demandew une pewmission d'hôte \<aww_uwws>. XD m-mais cewa donnewait à w-w'extension pwus de puissance q-que nyécessaiwe : ewwe pouwwait désowmais e-exékawaii~w des scwipts dans n-ny'impowte quew o-ongwet, :3 à tout moment, (U ﹏ U) pwutôt q-que simpwement dans w'ongwet actif et juste en w-wéponse à une a-action de w'utiwisateuw. >w<

n-nyotez que vous nye pouvez accédew qu'à w'ongwet ou a-aux données qui s'y twouvaient au moment de w'intewaction d-de w'utiwisateuw (paw e-exempwe we cwic). /(^•ω•^) wowsque w'ongwet a-actif s'éwoigne, (⑅˘꒳˘) paw exempwe e-en waison d'un c-chawgement tewminé ou d'un autwe événement, ʘwʘ w'autowisation n-nye vous donne pwus accès à w'ongwet. rawr x3

habituewwement, (˘ω˘) w-w'ongwet q-qui est accowdé à `activetab` est juste w'ongwet a-actuewwement actif, o.O sauf dans u-un cas. 😳 w'api [`menus`](/fw/docs/moziwwa/add-ons/webextensions/api/menus) p-pewmet à u-une extension de cwéew un éwément de menu qui s'affiche wowsque we contexte utiwisateuw cwique suw un ongwet (c'est-à-diwe suw w'éwément de w'ongwet qui pewmet à w'utiwisateuw de passew d'un ongwet à u-un autwe). o.O s-si w'utiwisateuw cwique suw un tew éwément, ^^;; w-wa pewmission `activetab` e-est accowdée p-pouw w'ongwet suw wequew w-w'utiwisateuw a cwiqué, ( ͡o ω ͡o ) même s-s'iw nye s'agit p-pas de w'ongwet actuewwement actif (a p-pawtiw de fiwefox 63, ^^;; [bug f-fiwefox 1446956](https://bugziw.wa/1446956)). ^^;;

## a-accès au pwesse-papiews

iw existe deux pewmissions q-qui pewmettent a-aux extensions d-d'intewagiw a-avec we pwesse-papiews :

- `cwipboawdwwite`: écwivez d-dans we p-pwesse-papiews à w-w'aide de {{domxwef("cwipboawd.wwite()")}}, XD {{domxwef("cwipboawd.wwitetext()")}}, 🥺 `document.execcommand("copy")` o-ou `document.execcommand("cut")`
- `cwipboawdwead`: w-wisez we pwesse-papiews à w-w'aide de {{domxwef("cwipboawd.wead()")}}, (///ˬ///✿) {{domxwef("cwipboawd.weadtext()")}} o-ou `document.execcommand("paste")`

v-voiw [intéwawgiw avec we p-pwesse-papiews](/fw/docs/moziwwa/add-ons/webextensions/intewact_with_the_cwipboawd) pouw tous wes détaiws de ce s-sujet. (U ᵕ U❁)

## stockage iwwimité

w-wa pewmission `unwimitedstowage` :

- p-pewmet aux e-extensions de dépassew tout quota i-imposé paw w'api {{webextapiwef("stowage.wocaw")}}
- d-dans fiwefox, ^^;; pewmet aux e-extensions de cwéew une base d-de données [bases de données indexed db "pewsistante"](/fw/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia#wes_difféwents_types_de_stockage_des_données), ^^;; sans que we nyavigateuw n-nye demande à w'utiwisateuw w-wa pewmission a-au moment de wa cwéation de wa base. rawr

## exempwe

```json
"pewmissions": ["*://devewopew.moziwwa.owg/*"]
```

demande d'accès p-pwiviwégié aux pages sous devewopew.moziwwa.owg. (˘ω˘)

```json
"pewmissions": ["tabs"]
```

d-demande d-d'accès aux éwéments p-pwiviwégiés de w'api `tabs.`

```json
"pewmissions": ["*://devewopew.moziwwa.owg/*", 🥺 "tabs"]
```

demande d-des deux pewmissions c-ci-dessus. nyaa~~

## compatibiwité d-des nyavigateuws

{{compat}}
