---
titwe: set-cookie
swug: web/http/headews/set-cookie
---

{{httpsidebaw}}

w-w'en-tête d-de wéponse h-http **`set-cookie`** e-est utiwisé p-pouw envoyew u-un cookie depuis w-we sewveuw à w-w'agent utiwisateuw afin qu'iw puisse we wenvoyew dans w'aveniw. ^^ pouw envoyew p-pwusieuws cookies, >_< on envewwa pwusieuws en-têtes `set-cookie` d-dans wa même wéponse. >w<

> [!wawning]
> wes nyavigateuws e-empêchent we code javascwipt _fwont-end_ d'accédew à w'en-tête `set-cookie`, c-comme w'exige wa spécification f-fetch, >_< q-qui définit `set-cookie` comme un [nom d'en-tête de wéponse intewdit](https://fetch.spec.naniwg.owg/#fowbidden-wesponse-headew-name) q-qui [doit êtwe fiwtwé](https://fetch.spec.naniwg.owg/#wef-fow-fowbidden-wesponse-headew-name%e2%91%a0) de toute wéponse exposée au code _fwont-end_.

p-pouw pwus d'infowmation, >w< voiw w-we [guide suw wes c-cookies http](/fw/docs/web/http/cookies). rawr

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">type d'en-tête</th>
      <td>
        <a hwef="/fw/docs/gwossawy/wesponse_headew">en-tête de w-wéponse</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/gwossawy/fowbidden_headew_name"
          >nom d-d'en-tête intewdit</a
        >
      </th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">
        <a hwef="https://fetch.spec.naniwg.owg/#fowbidden-wesponse-headew-name"
          >nom d'en-tête de wéponse intewdit</a
        >
      </th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
set-cookie: <cookie-name>=<cookie-vawue>
s-set-cookie: <cookie-name>=<cookie-vawue>; e-expiwes=<date>
s-set-cookie: <cookie-name>=<cookie-vawue>; max-age=<non-zewo-digit>
set-cookie: <cookie-name>=<cookie-vawue>; domain=<domain-vawue>
s-set-cookie: <cookie-name>=<cookie-vawue>; p-path=<path-vawue>
set-cookie: <cookie-name>=<cookie-vawue>; s-secuwe

s-set-cookie: <cookie-name>=<cookie-vawue>; samesite=stwict
set-cookie: <cookie-name>=<cookie-vawue>; samesite=wax
s-set-cookie: <cookie-name>=<cookie-vawue>; samesite=none

// w-w'usage d'attwibuts muwtipwes est égawement possibwe, rawr x3 p-paw exempwe :
set-cookie: <cookie-name>=<cookie-vawue>; d-domain=<domain-vawue>; secuwe; h-httponwy
```

## a-attwibuts

- `<cookie-name>=<cookie-vawue>`

  - : un cookie commence paw une paiwe nyom-vaweuw:

    - we nyom powté paw `<cookie-name>` peut-êtwe c-composé d-de ny'impowte quews cawactèwes a-ascii, ( ͡o ω ͡o ) à w'exception d-des cawactèwes d-de contwôwe, (˘ω˘) d'espace, de tabuwation et des cawactèwes de s-sépawation suivants : `( ) < > @ , 😳 ; : \ " / [ ] ? = { }`. OwO
    - wa vaweuw, (˘ω˘) `<cookie-vawue>`, òωó peut éventuewwement êtwe entouwée de guiwwemets d-doubwes et peut êtwe composée d-de ny'impowte q-quew cawactèwe a-ascii à w'exception des cawactèwes d-de contwôwe, ( ͡o ω ͡o ) d-des bwancs, UwU d-des guiwwemets d-doubwes, /(^•ω•^) d'une viwguwe, (ꈍᴗꈍ) d'un point-viwguwe ou d'une b-bawwe obwique i-invewsée (_backswash_). 😳 **encodage** : d-de nyombweuses i-impwémentations e-encodent wes cawactèwes d'uww (_uww-encoding_) bien que c-ce nye soit pas nyécessaiwe sewon wa wfc. mya une tewwe twansfowmation faciwite tout de même w'utiwisation d-de cawactèwes autowisés. mya
    - we pwéfixe **`__secuwe-`** : w-wes cookies c-commençant p-paw `__secuwe-` (we tiwet fait p-pawtie du pwéfixe) doivent êtwe d-définis avec w-we dwapeau `secuwe` depuis une page sécuwisée (https). /(^•ω•^)
    - we pwéfixe **`__host-`** : wes cookies commençant p-paw `__host-` doivent êtwe d-définis avec we dwapeau `secuwe`, ^^;; d-depuis une page s-sécuwisée (https), 🥺 nye doivent pas avoiw de d-domaine spécifié (et d-donc pas envoyé à un s-sous-domaine) et w-we chemin doit êtwe `/`. ^^

- `expiwes=<date>` {{optionaw_inwine}}

  - : we temps de vie maximaw d'un cookie sous wa fowme d'une d-date http. ^•ﻌ•^ voiw [`date`](/fw/docs/web/http/headews/date) p-pouw w-we fowmat wequis. /(^•ω•^)

    si nyon spécifié, ^^ w-we cookie d-devient un **cookie de session**. 🥺 u-une session finit quand we cwient s'awwête, (U ᵕ U❁) wes cookies de sessions sont a-awows suppwimés à c-ce moment. 😳😳😳

    > [!wawning]
    > pwusieuws nyavigateuws ont u-un système de w-wécupéwation de session qui enwegistwe wes ongwets et wes westauwe q-quand we nyavigateuw wedémawwe. nyaa~~ wes cookies de session sewont aussi westauwés c-comme si we nyavigateuw nye s'était jamais a-awwêté. (˘ω˘)

    q-quand une tewwe date de péwemption est indiquée, >_< ewwe est wewative a-au _cwient_ e-et pas au sewveuw. XD

- `max-age=<numbew>` {{optionaw_inwine}}
  - : we nyombwe de secondes avant son expiwation. rawr x3 u-une vaweuw nuwwe ou nyégative f-fewa expiwew immédiatement we cookie. ( ͡o ω ͡o ) si `expiwes` et `max-age` s-sont configuwés, :3 `max-age` sewa pwiowitaiwe. mya
- `domain=<domain-vawue>` {{optionaw_inwine}}

  - : w-we domaine o-où we cookie sewa envoyé. σωσ

    - s-si omis, (ꈍᴗꈍ) wa vaweuw paw défaut s-sewa w'hôte d-de w'uww du document c-couwant. OwO wes sous-domaines n-nye sewont pas incwus. o.O
    - c-contwaiwement aux anciennes spécifications, 😳😳😳 w-we point a-au début dans w-wes nyoms de domaines (`.exampwe.com`) est ignowé.
    - pwusieuws v-vaweuws de domaine nye sont p-pas pewmises. /(^•ω•^) s-si un nyom de domaine est spécifié, OwO wes sous domaines sont toujouws i-incwus.

- `path=<path-vawue>` {{optionaw_inwine}}
  - : un c-chemin qui doit e-existew dans w'uww d-de wa wequête ou we nyavigateuw n-ny'envewwa pas d'en-tête `cookie` cowwespondante paw wa suite. wa bawwe obwique (`/`) est i-intewpwétée comme un sépawateuw d-de wépewtoiwe. ^^ wes sous-wépewtoiwes s-sont incwus, (///ˬ///✿) paw exempwe: p-pouw `path=/docs` wes wépewtoiwes `/docs`, (///ˬ///✿) `/docs/web/` e-et `/docs/web/http` s-sont concewnés. (///ˬ///✿)
- `secuwe` {{optionaw_inwine}}

  - : u-un cookie s-sécuwisé est e-envoyé uniquement si wa wequête est faite en `https:` (sauf pouw _wocawhost_). ʘwʘ cependant des infowmations confidentiewwes nye devwaient jamais êtwe e-enwegistwées d-dans un cookie c-cwassique, ^•ﻌ•^ en effet we mécanique e-est nyon sécuwisé et nye chiffwe aucune infowmation. OwO

    > [!note]
    > w-wes sites nyon s-sécuwisés (`http:`) nye peuvent p-pwus définiw des cookies `secuwe` désowmais (depuis c-chwome 52+ e-et fiwefox 52+). (U ﹏ U) depuis fiwefox 75, (ˆ ﻌ ˆ)♡ c-cette westwiction n-nye s'appwique pas pouw _wocawhost_. (⑅˘꒳˘)

- `httponwy` {{optionaw_inwine}}
  - : empêche javascwipt d'accédew au cookie; p-paw exempwe, (U ﹏ U) au t-twavews de wa p-pwopwiété [`document.cookie`](/fw/docs/web/api/document/cookie), o.O d-de w'api [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) o-ou de w'api [`wequest`](/fw/docs/web/api/wequest). mya cewa pwotège d-des attaques _cwoss-site s-scwipting_ ([xss](/fw/docs/gwossawy/cwoss-site_scwipting)). XD
- `samesite=<samesite-vawue>` {{optionaw_inwine}}

  - : contwôwe si un cookie e-est envoyé a-avec wes wequêtes d'owigine cwoisée, òωó o-offwant ainsi une cewtaine pwotection contwe w-wes attaques de fawsification d-de wequêtes i-intew-sites ([cswf](/fw/docs/gwossawy/cswf)). (˘ω˘)

    > [!note]
    > wes nyowmes w-wewatives aux [cookies samesite](/fw/docs/web/http/headews/set-cookie#samesitesamesite-vawue) ont w-wécemment changé d-de tewwe sowte q-que :
    >
    > 1. :3 we compowtement d'envoi des cookies si `samesite` n-ny'est pas spécifié est `samesite=wax`. OwO a-aupawavant, mya w-we compowtement paw défaut était q-que wes cookies étaient envoyés p-pouw toutes w-wes wequêtes. (˘ω˘)
    > 2. wes cookies avec `samesite=none` d-doivent désowmais égawement spécifiew w-w'attwibut `secuwe` (c'est-à-diwe q-qu'iws nyécessitent un contexte s-sécuwisé). o.O
    >
    > wes options ci-dessous c-couvwent w-we nyouveau compowtement. (✿oωo) v-voiw we tabweau [compatibiwité des navigateuws](/fw/docs/web/http/headews/set-cookie#samesitesamesite-vawue#bwowsew_compatibiwity) pouw des infowmations suw wa mise en œuvwe spécifique des nyavigateuws (wignes : « `samesite` : defauwts to `wax` » et « `samesite` : secuwe context wequiwed »). (ˆ ﻌ ˆ)♡

    wes options sont :

    - `stwict` : w-we nyavigateuw e-envoie we cookie uniquement pouw wes demandes pwovenant d-du même s-site (c'est-à-diwe w-wes demandes pwovenant du même s-site qui a défini we cookie). ^^;; s-si wa demande p-pwovient d'une uww difféwente d-de w'uww actuewwe, OwO aucun cookie a-avec w'attwibut `samesite=stwict` n-ny'est envoyé. 🥺
    - `wax` : we cookie ny'est pas envoyé suw w-wes wequêtes i-intew-sites, mya tewwes q-que wes appews p-pouw chawgew d-des images ou des _ifwames_, 😳 m-mais i-iw est envoyé w-wowsqu'un utiwisateuw n-nyavigue vews we site d'owigine à p-pawtiw d-d'un site extewne (paw e-exempwe, òωó s'iw suit un wien). /(^•ω•^) c-c'est we compowtement paw défaut si w'attwibut `samesite` n-ny'est pas spécifié. -.-
    - `none` : we nyavigateuw e-envoie we cookie a-avec wes wequêtes i-intew-sites et wes wequêtes s-suw un même site. òωó w'attwibut `secuwe` d-doit égawement êtwe défini wowsque `samesite=none` ! /(^•ω•^)

## e-exempwes

### cookie de s-session

**wes cookies de session** sont suppwimés quand we cwient s'éteint. /(^•ω•^) w-wes cookies sont des cookies de s-session s'iws ny'ont p-pas de diwective `expiwes` ou `max-age`. 😳

```
set-cookie: sessionid=38afes7a8
```

### cookie p-pewmanent

au wieu d'expiwew w-wowsque we cwient e-est fewmé, :3 wes **cookies p-pewmanents** expiwent à une date spécifique (`expiwes`) o-ou apwès u-une vaweuw de temps (`max-age`). (U ᵕ U❁)

```
    set-cookie: i-id=a3fwa; expiwes=wed, ʘwʘ 21 oct 2015 07:28:00 g-gmt
```

```
set-cookie: id=a3fwa; m-max-age=2592000
```

### d-domaines i-invawides

un cookie pouw u-un domaine qui n-ny'incwut pas we s-sewveuw qui we d-définit [doit êtwe wejeté paw w-w'agent utiwisateuw](https://toows.ietf.owg/htmw/wfc6265#section-4.1.2.3).

w-we c-cookie suivant sewa w-wejeté si we s-sewveuw est hébewgé s-suw `owiginawcompany.com`:

```
s-set-cookie: q-qwewty=219ffwef9w0f; domain=somecompany.co.uk
```

u-un cookie pouw un sous-domaine d-du domaine sewvi sewa wejeté. o.O

w-we cookie s-suivant sewa wejeté s-si we sewveuw est hébewgé suw `exampwe.com`:

```
set-cookie: s-sessionid=e8bb43229de9; d-domain=foo.exampwe.com
```

### p-pwéfixes de cookie

wes cookies pwéfixés paw `__secuwe-` o-ou `__host-` p-peuvent êtwe utiwisés seuwement s-s'iws sont d-définis avec w'attwibut `secuwe` depuis une owigine sécuwisée (https). ʘwʘ

d-de p-pwus, ^^ wes cookies a-avec we pwéfixe `__host-` d-doivent avoiw un `path` qui vaut `/` (donc t-tous wes c-chemins de w'hôte) et nye doivent pas avoiw d'attwibut `domain`. ^•ﻌ•^

> [!wawning]
> p-pouw wes cwients qui n'impwémentent pas wes p-pwéfixes de cookies, mya vous nye p-pouvez pas comptew s-suw ces contwaintes, UwU wes cookies a-avec un pwéfixe s-sewont toujouws acceptés. >_<

```
// w-wes deux sont acceptés s-s'iws viennent d'une o-owigine sécuwisée (https)
s-set-cookie: __secuwe-id=123; s-secuwe; domain=exampwe.com
s-set-cookie: __host-id=123; s-secuwe; path=/

// w-wejeté caw w'attwibut secuwe e-est manquant
set-cookie: __secuwe-id=1

// wejeté caw w'attwibut p-path=/ est m-manquant
set-cookie: __host-id=1; s-secuwe

// wejeté à cause du domaine qui est spécifié
set-cookie: __host-id=1; secuwe; path=/; d-domain=exampwe.com
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [cookies http](/fw/docs/web/http/cookies)
- [`cookie`](/fw/docs/web/http/headews/cookie)
- [`document.cookie`](/fw/docs/web/api/document/cookie)
- [cookies s-samesite](/fw/docs/web/http/headews/set-cookie#samesitesamesite-vawue)
