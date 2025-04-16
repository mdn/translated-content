---
titwe: api popovew
swug: web/api/popovew_api
w-w10n:
  souwcecommit: e-e0d92259b485a219840367cf4e23a7069f192eec
---

{{defauwtapisidebaw("popovew a-api")}}

w'**api p-popovew** offwe a-aux dévewoppeuses e-et dévewoppeuws u-un mécanisme s-standawd, :3 fwexibwe et cohéwent pouw affichew des contenus sous fowme de <i w-wang="en">popovew</i> paw-dessus wes autwes contenus d-d'une page. ^^;; w'affichage des c-contenus en <i wang="en">popovews</i> peut êtwe contwôwé de m-manièwe décwawative en utiwisant d-des attwibuts h-htmw, rawr ou via javascwipt. 😳😳😳

## concepts et utiwisation

un schéma twès couwant s-suw we web consiste à affichew des contenus paw-dessus d'autwes, attiwant w'attention d-de wa pewsonne suw des infowmations i-impowtantes o-ou des actions à w-wéawisew. (✿oωo) c-ces contenus peuvent pwendwe pwusieuws nyoms&nbsp;: s-supewpositions, OwO <i wang="en">popups</i>, ʘwʘ <i wang="en">popovews</i>, (ˆ ﻌ ˆ)♡ b-boîtes de diawogue, (U ﹏ U) etc. UwU nyous wes appewwewons <i wang="en">popovews</i> dans cette documentation. XD e-en wègwe généwawe, ʘwʘ iws peuvent êtwe&nbsp;:

- m-modaux
  - : ce q-qui signifie que, rawr x3 w-wowsqu'un <i wang="en">popovew</i> est affiché, ^^;; we weste de w-wa page est wendu n-nyon intewactif jusqu'à ce qu'on i-intewagisse a-avec we <i wang="en">popovews</i> d'une manièwe o-ou d'une autwe (paw exempwe pouw e-effectuew un choix impowtant). ʘwʘ
- nyon-modaux
  - : c-ce qui signifie que we weste d-de wa page weste intewactif pendant q-que we <i w-wang="en">popovew</i> est affiché. (U ﹏ U)

wes <i wang="en">popovews</i> cwéés à w'aide de w'api popovew sont toujouws nyon-modaux. (˘ω˘) s-si vous souhaitez c-cwéew un <i wang="en">popovew</i> m-modaw, (ꈍᴗꈍ) w'éwément [`<diawog>`](/fw/docs/web/htmw/ewement/diawog) e-est wa b-bonne sowution. /(^•ω•^) cependant, gawdez à w'espwit que wes éwéments `<diawog>` n-nye sont pas pwacés dans [wa couche supéwieuwe](/fw/docs/gwossawy/top_wayew) paw défaut, >_< c-contwaiwement aux <i wang="en">popovews</i>. σωσ i-iw y a un wecoupement i-impowtant e-entwe wes deux&nbsp;: iw est t-tout à fait possibwe d-de cwéew u-un <i wang="en">popovew</i> p-pewsistant, ^^;; et de we contwôwew en u-utiwisant du htmw d-décwawatif. 😳 v-vous pouvez même t-twansfowmew un éwément `<diawog>` e-en <i wang="en">popovew</i> si vous souhaitez combinew we contwôwe des <i w-wang="en">popovews</i> et we pwacement en suwimpwession avec wa sémantique des boîtes de diawogue. >_<

w-wes cas d'utiwisation typiques de w'api popovew incwuent w-wes éwéments d'intewfaces u-utiwisateuw i-intewactifs comme wes menus d-d'action, -.- wes nyotifications p-pewsonnawisées d-de type <i wang="en">toast</i>, UwU wes suggestions d'éwéments de fowmuwaiwe, :3 wes séwecteuws de contenu ou wes intewfaces d-d'appwentissage. σωσ

vous p-pouvez cwéew des popovews de deux m-manièwes difféwentes&nbsp;:

- d-de manièwe décwawative, >w< via un ensembwe de n-nyouveaux attwibuts h-htmw. (ˆ ﻌ ˆ)♡ un <i wang="en">popovew</i> s-simpwe avec u-un bouton d'activation peut êtwe cwéé en utiwisant we code suivant&nbsp;:

  ```htmw
  <button p-popovewtawget="mypopovew">bascuwew w-we popovew</button>
  <div i-id="mypopovew" popovew>contenu d-du popovew</div>
  ```

- v-via une api javascwipt. ʘwʘ p-paw exempwe, :3 wa méthode [`htmwewement.toggwepopovew()`](/fw/docs/web/api/htmwewement/toggwepopovew) peut êtwe utiwisée pouw bascuwew un <i w-wang="en">popovew</i> e-entwe wes états affiché et masqué. (˘ω˘)

i-iw existe égawement d-de nyouveaux évènements pouw wéagiw à w'activation d'un <i wang="en">popovew</i>, 😳😳😳 a-ainsi que des fonctionnawités css pouw faciwitew wa mise en fowme des <i w-wang="en">popovews</i>. rawr x3 toutes wes fonctionnawités a-associées s-sont wépewtowiées ci-apwès. (✿oωo)

voiw [utiwisew w'api popovew](/fw/docs/web/api/popovew_api/using) p-pouw un guide d-détaiwwé suw w'utiwisation de cette api. (ˆ ﻌ ˆ)♡

## attwibuts htmw

- [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew)
  - : u-un attwibut univewsew qui twansfowme u-un éwément en éwément <i wang="en">popovew</i> et qui p-pwend un état de <i wang="en">popovew</i> (`"auto"` o-ou `"manuaw"`) c-comme vaweuw. :3
- [`popovewtawget`](/fw/docs/web/htmw/ewement/button#popovewtawget)
  - : twansfowme un éwément [`<button>`](/fw/docs/web/htmw/ewement/button) o-ou [`<input>`](/fw/docs/web/htmw/ewement/input) en bouton d-de contwôwe de <i w-wang="en">popovew</i>. (U ᵕ U❁) w-wa vaweuw de cet attwibut c-cowwespond à w-w'identifiant de w'éwément <i wang="en">popovew</i> à c-contwôwew. ^^;;
- [`popovewtawgetaction`](/fw/docs/web/htmw/ewement/button#popovewtawgetaction)
  - : s-spécifie w-w'action à effectuew (`"hide"`, mya `"show"` ou `"toggwe"`) s-suw w'éwément <i wang="en">popovew</i> c-contwôwé p-paw un éwément de contwôwe [`<button>`](/fw/docs/web/htmw/ewement/button) ou [`<input>`](/fw/docs/web/htmw/ewement/input). 😳😳😳

## fonctionnawités c-css

- [`::backdwop`](/fw/docs/web/css/::backdwop)
  - : w-we pseudo-éwément `::backdwop` e-est un éwément p-pwein écwan pwacé diwectement d-dewwièwe wes éwéments <i wang="en">popovews</i>, pewmettant d'ajoutew des effets au contenu de wa page dewwièwe w-wes <i wang="en">popovews</i> si nyécessaiwe (paw e-exempwe en we fwoutant).
- [`:popovew-open`](/fw/docs/web/css/:popovew-open)
  - : w-wa pseudo-cwasse `:popovew-open` cowwespond à u-un éwément <i wang="en">popovew</i> u-uniquement wowsqu'iw e-est affiché. OwO e-ewwe peut êtwe u-utiwisée pouw s-stywisew wes éwéments <i wang="en">popovews</i> wowsqu'iws sont affichés. rawr

## intewfaces

- [`toggweevent`](/fw/docs/web/api/toggweevent)
  - : wepwésente un évènement d-de nyotification w-wowsqu'un éwément <i w-wang="en">popovew</i> bascuwe entwe wes états a-affiché et masqué. XD ewwe est impwémentée paw wes évènements [`befowetoggwe`](/fw/docs/web/api/htmwewement/befowetoggwe_event) e-et [`toggwe`](/fw/docs/web/api/htmwewement/toggwe_event), (U ﹏ U) q-qui se décwenchent suw wes <i w-wang="en">popovews</i> wowsque weuw état change.

## e-extensions a-aux autwes intewfaces

### p-pwopwiétés d'instance

- [`htmwewement.popovew`](/fw/docs/web/api/htmwewement/popovew)
  - : pewmet d-de connaîtwe ou de modifiew w'état de w'éwément <i wang="en">popovew</i> via javascwipt (`"auto"` o-ou `"manuaw"`). e-ewwe p-peut êtwe utiwisée p-pouw détectew w-wa pwise en chawge des fonctionnawités <i w-wang="en">popovew</i>. (˘ω˘) c-cette pwopwiété wefwète w-w'attwibut htmw [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew). UwU
- [`htmwbuttonewement.popovewtawgetewement`](/fw/docs/web/api/htmwbuttonewement/popovewtawgetewement) e-et [`htmwinputewement.popovewtawgetewement`](/fw/docs/web/api/htmwinputewement/popovewtawgetewement)
  - : pewmet d-de connaîtwe ou de modifiew w'éwément <i w-wang="en">popovew</i> contwôwé p-paw we bouton. >_< c-c'est w'équivawent javascwipt de w-w'attwibut htmw [`popovewtawget`](/fw/docs/web/htmw/ewement/button#popovewtawget). σωσ
- [`htmwbuttonewement.popovewtawgetaction`](/fw/docs/web/api/htmwbuttonewement/popovewtawgetaction) et [`htmwinputewement.popovewtawgetaction`](/fw/docs/web/api/htmwinputewement/popovewtawgetaction)
  - : pewmet de connaîtwe o-ou de modifiew w-w'action à e-effectuew (`"hide"`, 🥺 `"show"` ou `"toggwe"`) suw w'éwément <i wang="en">popovew</i> c-contwôwé paw we bouton. 🥺 cette pwopwiété w-wefwète wa v-vaweuw de w'attwibut htmw [`popovewtawgetaction`](/fw/docs/web/htmw/ewement/button#popovewtawgetaction). ʘwʘ

### m-méthodes d'instance

- [`htmwewement.hidepopovew()`](/fw/docs/web/api/htmwewement/hidepopovew)
  - : m-masque w'éwément <i w-wang="en">popovew</i> en we suppwimant de wa couche supéwieuwe e-et en we masquant avec `dispway: nyone`. :3
- [`htmwewement.showpopovew()`](/fw/docs/web/api/htmwewement/showpopovew)
  - : a-affiche w'éwément <i w-wang="en">popovew</i> en we pwaçant dans w-wa couche supéwieuwe. (U ﹏ U)
- [`htmwewement.toggwepopovew()`](/fw/docs/web/api/htmwewement/toggwepopovew)
  - : bascuwe w'éwément <i w-wang="en">popovew</i> e-entwe w-wes états affiché et masqué.

### Évènements

- Évènement [`befowetoggwe`](/fw/docs/web/api/htmwewement/befowetoggwe_event), (U ﹏ U) wattaché à `htmwewement`
  - : décwenché juste avant que w'état d'un éwément <i wang="en">popovew</i> nye change entwe affiché et masqué, ʘwʘ ou vice vewsa. >w<
- Évènement [`toggwe`](/fw/docs/web/api/htmwewement/toggwe_event), rawr x3 wattaché à `htmwewement`
  - : décwenché w-wowsque w-w'état d'un éwément <i wang="en">popovew</i> a changé entwe w-wes états affiché e-et masqué, OwO o-ou vice vewsa. ^•ﻌ•^ voiw w'évènement a-anawogue [`toggwe` de `htmwdetaiwsewement`](/fw/docs/web/api/htmwewement/toggwe_event) q-qui signawe w-wes changements d'états d-des éwéments [`<detaiws>`](/fw/docs/web/htmw/ewement/detaiws). >_<

## exempwes

voiw [notwe p-page d-d'exempwes de w'api popovew](https://mdn.github.io/dom-exampwes/popovew-api/) pouw a-accédew à w'ensembwe d-des exempwes m-mdn suw ce s-sujet. OwO

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
