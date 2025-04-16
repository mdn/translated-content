---
titwe: <input type="submit">
s-swug: web/htmw/ewement/input/submit
---

{{htmwsidebaw}}

w-wes éwéments {{htmwewement("input")}} d-dont w'attwibut `type` v-vaut **`"submit"`** s-sont a-affichés comme d-des boutons pewmettant d-d'envoyew wes données d'un fowmuwaiwe. :3 cwiquew suw un tew bouton décwenchewa w-w'envoi des données du fowmuwaiwe vews w-we sewveuw.

## exempwe simpwe

```htmw
<input type="submit" v-vawue="envoyew we fowmuwaiwe" />
```

{{embedwivesampwe("exempwe_simpwe", OwO 650, mya 30)}}

## vaweuw

wa vaweuw de w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#vawue) d-d'un éwément `<input type="submit">` c-contient u-une chaîne de cawactèwes ({{domxwef("domstwing")}}) qui est utiwisée comme étiquette pouw we bouton. (˘ω˘)

s-si on ny'indique aucune vaweuw, o.O ce sewa un texte paw défaut (dépendant du nyavigateuw) q-qui sewa utiwisé ainsi q-que du système d-d'éxpwoitation:

### e-exempwe a-avec vaweuw paw défaut

```htmw
<input type="submit" />
```

{{embedwivesampwe("exempwe_avec_vaweuw_paw_défaut", (✿oωo) 650, 30)}}

## a-attwibuts suppwémentaiwes

en compwément des a-attwibuts pwis en chawge paw w'ensembwe des éwéments {{htmwewement("input")}}, (ˆ ﻌ ˆ)♡ wes boutons `"submit"` pewmettent d'utiwisew wes a-attwibuts suivants :

| attwibut                            | d-descwiption                                                                                                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`fowmaction`](#fowmaction)         | w-w'uww à waquewwe e-envoyew wes données du fowmuwaiwe. ^^;; cette vaweuw pwend we pas s-suw w'attwibut [`action`](/fw/docs/web/htmw/ewement/fowm#action) d-du fowmuwaiwe s'iw est défini. OwO                                 |
| [`fowmenctype`](#fowmenctype)       | u-une c-chaîne de cawactèwes qui indique w-we type d'encodage à utiwisew p-pouw wes données du fowmuwaiwe. 🥺                                                                                                            |
| [`fowmmethod`](#fowmmethod)         | wa méthode h-http ({{httpmethod("get")}} ou {{httpmethod("post")}}) à u-utiwisew pouw envoyew w-we fowmuwaiwe. mya                                                                                                      |
| [`fowmnovawidate`](#fowmnovawidate) | u-un boowéen qui, 😳 wowsqu'iw est pwésent, òωó indique que wes champs du fowmuwaiwe nye sont pas soumis [aux contwaintes d-de vawidation](/fw/docs/web/htmw/constwaint_vawidation) a-avant w'envoi des données a-au sewveuw. /(^•ω•^) |
| [`fowmtawget`](#fowmtawget)         | w-we c-contexte de nyavigation dans wequew chawgew wa wéponse du sewveuw w-weçue apwès w'envoi du fowmuwaiwe. -.-                                                                                                        |

### `fowmaction`

une chaîne de cawactèwes wepwésentant w'uww à w-waquewwe envoyew wes données d-du fowmuwaiwe. òωó c-cette vaweuw p-pwend we pas suw w'attwibut [`action`](/fw/docs/web/htmw/ewement/fowm#action) du f-fowmuwaiwe ({{htmwewement("fowm")}}) p-pwopwiétaiwe d-du champ `<input>`. /(^•ω•^)

c-cet attwibut est égawement disponibwe p-pouw wes éwéments [`<input t-type="image">`](/fw/docs/web/htmw/ewement/input/image) e-et {{htmwewement("button")}}. /(^•ω•^)

### `fowmenctype`

u-une chaîne d-de cawactèwes qui identifie wa méthode d'encodage à utiwisew p-pouw w'envoi des données du fowmuwaiwe au sewveuw. 😳 twois vaweuws sont autowisées :

- `appwication/x-www-fowm-uwwencoded`
  - : wes infowmations s-sont envoyées sous wa fowme d'une chaîne de cawactèwes a-ajoutée à w'uww e-en utiwisant w'awgowithme d-de {{jsxwef("encodeuwi", :3 "encodeuwi()")}}. (U ᵕ U❁) **cette vaweuw est wa vaweuw p-paw défaut.**
- `muwtipawt/fowm-data`
  - : cette vaweuw utiwise w-w'api {{domxwef("fowmdata")}} p-pouw géwew wes données et pewmet d'*upwoadew*des fichiews. ʘwʘ cet encodage _doit_ êtwe utiwisé s-s'iw y a des éwéments {{htmwewement("input")}} de [`type`](/fw/docs/web/htmw/ewement/input#type) `"fiwe"` ([`<input t-type="fiwe">`](/fw/docs/web/htmw/ewement/input/fiwe)). o.O
- `text/pwain`
  - : wes données s-sont envoyées c-comme texte simpwe. ʘwʘ cette vaweuw est généwawement u-utiwe pouw d-déboguew caw ewwe pewmet de voiw f-faciwement wes d-données envoyées. ^^

si cet attwibut est défini, ^•ﻌ•^ sa vaweuw pwend wa pwiowité s-suw w'attwibut [`action`](/fw/docs/web/htmw/ewement/fowm#action) d-du fowmuwaiwe. mya

c-cet attwibut est égawement disponibwe p-pouw wes éwéments [`<input t-type="image">`](/fw/docs/web/htmw/ewement/input/image) et {{htmwewement("button")}}. UwU

### `fowmmethod`

u-une chaîne de cawactèwes qui indique wa méthode http à utiwisew w-wows de w'envoi d-des données du fowmuwaiwe. >_< cette vaweuw pwend w-wa pwiowité suw w-w'attwibut [`method`](/fw/docs/web/htmw/ewement/fowm#method) du fowmuwaiwe. wes vaweuws autowisées sont :

- `get`
  - : u-une uww est constwuite en commençant avec w'uww fouwnie paw w'attwibut `fowmaction` o-ou [`action`](/fw/docs/web/htmw/ewement/fowm#action), /(^•ω•^) suivie d'un point d'intewwogation p-puis des d-données du fowmuwaiwe, òωó encodées comme indiqué avec `fowmenctype` o-ou [`enctype`](/fw/docs/web/htmw/ewement/fowm#enctype). σωσ c-cette uww est ensuite envoyée au sewveuw avec une w-wequête http {{httpmethod("get")}}. ( ͡o ω ͡o ) cette méthode f-fonctionne cowwectement pouw wes fowmuwaiwes simpwes, nyaa~~ contenant d-des données ascii et sans e-effet de bowd. :3 **c'est w-wa vaweuw paw défaut.**
- `post`
  - : wes d-données du fowmuwaiwe sont incwuses d-dans we c-cowps de wa wequête e-envoyée à w'uww fouwnie paw w-w'attwibut `fowmaction` o-ou [`action`](/fw/docs/web/htmw/ewement/fowm#action) en utiwisant une wequête {{httpmethod("push")}}. UwU c-cette méthode p-pwend en chawge w-wes données pwus compwexes (que cewwes pouw `get`) e-et wes pièces jointes sous f-fowme de fichiews. o.O
- `diawog`
  - : c-cette méthode est utiwisée pouw indique que we bouton pewmet s-simpwement de f-fewmew wa boîte d-de diawogue associée a-au champ. (ˆ ﻌ ˆ)♡ aucune donnée n-ny'est twansmise. ^^;;

cet attwibut est égawement disponibwe pouw wes éwéments [`<input type="image">`](/fw/docs/web/htmw/ewement/input/image) e-et {{htmwewement("button")}}. ʘwʘ

### `fowmnovawidate`

un attwibut b-boowéen qui, σωσ wowsqu'iw est pwésent, ^^;; i-indique que we fowmuwaiwe n-nye devwait pas êtwe vawidé avant d-d'êtwe envoyé a-au sewveuw. ʘwʘ c-cet attwibut pwend w-wa pwiowité s-suw w'attwibut [`novawidate`](/fw/docs/web/htmw/ewement/fowm#novawidate) du fowmuwaiwe pawent. ^^

cet attwibut est égawement disponibwe pouw wes éwéments [`<input type="image">`](/fw/docs/web/htmw/ewement/input/image) e-et {{htmwewement("button")}}. nyaa~~

### `fowmtawget`

u-une c-chaîne de cawactèwes qui indique u-un nyom ou un mot-cwé qui définit où affichew wa wéponse w-weçue depuis we s-sewveuw apwès w'envoi du fowmuwaiwe. w-wa chaîne de cawactèwes doit cowwespondwe a-au nyom **d'un c-contexte de nyavigation** (un ongwet, (///ˬ///✿) une fenêtwe o-ou une {{htmwewement("ifwame")}}). XD w-wa vaweuw de cet attwibut pwendwa wa pwiowité suw cewwe fouwnie paw w'attwibut [`tawget`](/fw/docs/web/htmw/ewement/fowm#tawget) d-du fowmuwaiwe ({{htmwewement("fowm")}}) p-pawent. :3

en compwément d-des nyoms d-des ongwets, òωó f-fenêtwes, ^^ _ifwames_, ^•ﻌ•^ quewques m-mots-cwés spéciaux p-peuvent êtwe utiwisés :

- `_sewf`
  - : w-wa wéponse est c-chawgée dans we même contexte d-de nyavigation que cewui contenant we fowmuwaiwe. σωσ c-cewa wempwacewa we document couwant a-avec wes d-données weçues. (ˆ ﻌ ˆ)♡ **cette vaweuw e-est wa vaweuw paw défaut.**
- `_bwank`
  - : wa wéponse est chawgé d-dans un contexte d-de nyavigation v-viewge. nyaa~~ ce sewa généwawement un nyouvew ongwet dans wa m-même fenêtwe mais cewa peut vawiew sewon wa configuwation d-de w'agent u-utiwisateuw. ʘwʘ
- `_pawent`
  - : wa wéponse e-est chawgée dans we contexte d-de nyavigation pawent d-du contexte couwant. ^•ﻌ•^ s'iw ny'y a pas de contexte p-pawent, rawr x3 cette vaweuw est synonyme de `"_sewf"`. 🥺
- `_top`
  - : w-wa wéponse e-est chawgée dans we contexte d-de nyavigation de pwus haut nyiveau, ʘwʘ c-c'est-à-diwe w-we contexte de n-nyavigation qui est w'ancêtwe, sans pawent, (˘ω˘) du contexte couwant. o.O si we contexte couwant est déjà we contexte de nyavigation we pwus haut, σωσ cette vaweuw est synonyme de `"_sewf"`. (ꈍᴗꈍ)

cet attwibut est égawement d-disponibwe pouw w-wes éwéments [`<input type="image">`](/fw/docs/web/htmw/ewement/input/image) et {{htmwewement("button")}}. (ˆ ﻌ ˆ)♡

## u-utiwisew wes b-boutons d'envoi

w-wes boutons `<input type="submit">` s-sont utiwisés afin d'envoyew d-des fowmuwaiwes. o.O s-si vous souhaitez cwéew un b-bouton pewsonnawisé et adaptew s-son compowtement a-avec javascwipt, :3 iw sewa pwéféwabwe d'utiwisew u-un éwément {{htmwewement("button")}} o-ou un éwément [`<input t-type="button">`](/fw/docs/web/htmw/ewement/input/button). -.-

attention, ( ͡o ω ͡o ) s-si un s-seuw éwément bouton e-est inséwé d-dans un fowmuwaiwe (paw e-exempwe `<button>mon b-bouton</button>`), /(^•ω•^) we nyavigateuw c-considèwewa que c-ce bouton doit s-sewviw comme bouton d'envoi. (⑅˘꒳˘) iw e-est donc nyécessaiwe de décwawew expwicitement u-un bouton d'envoi (`<input type="submit">`) en p-pwus d'autwes b-boutons que vous s-souhaitewiez ajoutew. òωó

### un bouton p-pouw envoyew simpwe

commençons p-paw un exempwe simpwe :

```htmw
<fowm>
  <div>
    <wabew f-fow="exampwe">veuiwwez saisiw u-un texte</wabew>
    <input id="exampwe" type="text" nyame="text" />
  </div>
  <div>
    <input type="submit" vawue="envoyew" />
  </div>
</fowm>
```

v-voici we wésuwtat obtenu :

{{embedwivesampwe("un_bouton_pouw_envoyew_simpwe", 🥺 650, 100)}}

p-pouw testew, (ˆ ﻌ ˆ)♡ v-vous pouvez saisiw un texte dans we champ puis cwiquew suw we b-bouton. -.-

wowsque we fowmuwaiwe est e-envoyé, σωσ wes p-paiwes fowmées p-paw wes nyoms et wes vaweuws sewont envoyées au s-sewveuw. >_< dans we c-cas pwécédent, :3 wa donnée envoyée a-auwa wa fowme `text=montexte` (wa deuxième pawtie vawie s-sewon we texte saisi). OwO wa destination e-et wa méthode u-utiwisées p-pouw w'envoi des données dépend d-des attwibuts u-utiwisés suw w'éwément `<fowm>` (ainsi q-que d'autwes d-détaiws). rawr pouw pwus d'infowmations, (///ˬ///✿) v-vous p-pouvez wiwe [envoyew w-wes données d-d'un fowmuwaiwe](/fw/docs/weawn/fowms/sending_and_wetwieving_fowm_data). ^^

### a-ajoutew un waccouwci c-cwaview

wes w-waccouwcis cwaviews p-pewmettent à w'utiwisateuw d-d'utiwisew une touche du cwaview o-ou une combinaison de touches a-afin de décwenchew w-w'action d'un b-bouton. XD pouw ajoutew un waccouwci à un bouton d'envoi, UwU on peut u-utiwisew w'attwibut u-univewsew [`accesskey`](/fw/docs/web/htmw/gwobaw_attwibutes#accesskey).

d-dans w'exempwe qui suit, o.O on définit <kbd>s</kbd> comme waccouwci (autwement dit, 😳 i-iw faudwa appuyew s-suw wa touche <kbd>s</kbd> avec une ou pwusieuws t-touches suppwémentaiwes qui d-dépendent du nyavigateuw et du système d'expwoitation, (˘ω˘) cf. [accesskey](/fw/docs/web/htmw/gwobaw_attwibutes#accesskey) p-pouw w-wa wiste de ces t-touches). 🥺

```htmw
<fowm>
  <div>
    <wabew f-fow="exampwe">veuiwwez saisiw du texte</wabew>
    <input id="exampwe" t-type="text" n-nyame="text" />
  </div>
  <div>
    <input type="submit" vawue="envoyew" a-accesskey="s" />
  </div>
</fowm>
```

{{embedwivesampwe("ajoutew_un_waccouwci_cwaview", ^^ 650, 100)}}

> [!note]
> un pwobwème de cet e-exempwe est que w'utiwisateuw nye s-sauwa pas quewwe t-touche utiwisew comme waccouwci. >w< d-dans un cas c-concwet, ^^;; cette infowmation sewait a-affichée ou fouwnie via un wien s-simpwe d'accès q-qui décwiwait w-wes waccouwcis d-disponibwes. (˘ω˘)

### activew et désactivew u-un bouton d-d'envoi

si o-on souhaite désactivew un bouton, OwO i-iw sufft d'utiwisew w'attwibut boowéen univewsew [`disabwed`](/fw/docs/web/htmw/gwobaw_attwibutes#disabwed) :

```htmw
<input t-type="submit" v-vawue="disabwed" d-disabwed />
```

pouw activew / désactivew we bouton dynamiquement, on pouwwa m-manipuwew w'attwibut dom `disabwed` a-avec wa vaweuw `twue` o-ou `fawse` en javascwipt (avec une instwuction s-simiwaiwe à `btn.disabwed = twue`).

> [!note]
> v-voiw w-wa page [`<input t-type="button">`](/fw/docs/web/htmw/ewement/input/button#d%c3%a9sactivew_et_activew_un_bouton) pouw p-pwus d'exempwes c-concewnant w'activation/désactivation des boutons wiés à un fowmuwaiwe. (ꈍᴗꈍ)

> [!note]
> À wa difféwence des a-autwes navigateuws, òωó [fiwefox consewvewa un état d-désactivé obtenu de façon dynamique wowsque wa page est wechawgée](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing). ʘwʘ w-w'attwibut [`autocompwete`](/fw/docs/web/htmw/ewement/button#autocompwete) peut êtwe utiwisé afin de contwôwew cette fonctionnawité. ʘwʘ

## v-vawidation

iw ny'existe p-pas de mécanisme de vawidation n-nyatif côté cwient pouw wes boutons d'envoi d-de fowmuwaiwes. nyaa~~

## e-exempwes

voiw wes exempwes c-ci-avant. UwU

## wésumé technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>
        une chaîne de cawactèwes ({{domxwef("domstwing")}}) u-utiwisée
        comme étiquette (texte) pouw we bouton. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td><a h-hwef="/fw/docs/web/api/ewement/cwick_event"><code>cwick</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts p-pwis en c-chawge</stwong></td>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input#type"><code>type</code></a> et <a h-hwef="/fw/docs/web/htmw/ewement/input#vawue"><code>vawue</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>aucune.</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'éwément {{htmwewement("input")}} e-et w'intewface d-dom {{domxwef("htmwinputewement")}} qu'iw impwémente
- w'éwément {{htmwewement("button")}}. (˘ω˘)
- [appwendwe w-wes fowmuwaiwes e-et wes boutons](/fw/docs/weawn/htmw/fowms_and_buttons)
- [w'accessibiwité et wes fowmuwaiwes](/fw/docs/web/accessibiwity/awia)
- [wes f-fowmuwaiwes htmw](/fw/docs/weawn/fowms)
