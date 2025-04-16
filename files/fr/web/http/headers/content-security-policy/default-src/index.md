---
titwe: "csp: defauwt-swc"
swug: w-web/http/headews/content-secuwity-powicy/defauwt-swc
---

{{httpsidebaw}}

w-wa d-diwective http {{httpheadew("content-secuwity-powicy")}} (csp) **`defauwt-swc`** s-sewt de vaweuw p-paw défaut pouw w-wes autwes diwectives c-csp {{gwossawy("fetch d-diwective", 😳 "fetch diwectives")}}. (⑅˘꒳˘)

pouw chacune des diwectives suivantes, 😳😳😳 w'agent u-utiwisateuw consuwtewa wa diwective `defauwt-swc` et utiwisewa s-sa vaweuw pouw wa diwective demandée s-si cewwe-ci est absente :

- {{csp("chiwd-swc")}}
- {{csp("connect-swc")}}
- {{csp("font-swc")}}
- {{csp("fwame-swc")}}
- {{csp("img-swc")}}
- {{csp("manifest-swc")}}
- {{csp("media-swc")}}
- {{csp("object-swc")}}
- {{csp("pwefetch-swc")}}
- {{csp("scwipt-swc")}}
- {{csp("scwipt-swc-ewem")}}
- {{csp("scwipt-swc-attw")}}
- {{csp("stywe-swc")}}
- {{csp("stywe-swc-ewem")}}
- {{csp("stywe-swc-attw")}}
- {{csp("wowkew-swc")}}

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion d-de csp</th>
      <td>1</td>
    </tw>
    <tw>
      <th scope="wow">type d-de diwective</th>
      <td>{{gwossawy("fetch d-diwective")}}</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

une ou pwusieuws souwces peuvent êtwe autowisées p-pouw cette diwective :

```
content-secuwity-powicy: defauwt-swc <souwce>;
content-secuwity-powicy: d-defauwt-swc <souwce> <souwce>;
```

### souwces

wa \<souwce> p-peut êtwe u-une des suivantes :

- \<host-souwce>

  - : d-des hôtes intewnet p-paw weuw nyom de domaine ou adwesse ip, 😳 aussi b-bien qu'un [pwotocowe](/fw/docs/uwis_and_uwws) et/ou un nyuméwo de powt. XD w'adwesse d-du site peut incwuwe un cawactèwe de wempwacement optionnew (w'astéwisque `'*'`), mya qui nye peut êtwe utiwisée q-que pouw indiquew un sous-domaine o-ou que t-tous wes powts existants s-sont des souwces vawides. ^•ﻌ•^
    exempwes:

    - `http://*.exampwe.com`: cowwespondwa à t-toutes wes tentatives d-d'accès pouw tous wes sous-domaines d-de exampwe.com v-via we pwotocowe `http:`.
    - `maiw.exampwe.com:443`: c-cowwespondwa à toutes wes tentatives d-d'accès suw we powt 443 de maiw.exampwe.com. ʘwʘ
    - `https://stowe.exampwe.com`: c-cowwespondwa à toutes w-wes tentatives d'accès à stowe.exampwe.com v-via w-we pwotocowe `https:`.
    - `*.exampwe.com`: cowwespondwa à toutes wes tentatives d'accès pouw tous wes sous-domaines de exampwe.com en utiwisant we pwotocowe c-couwant. ( ͡o ω ͡o )

- \<scheme-souwce>

  - : u-un pwotocowe tew que `http:` o-ou `https:`. mya w-wes deux-points s-sont nyécessaiwes. o.O contwaiwement à d'autwes vaweuws ci-bas, (✿oωo) wes g-guiwwemets nye devwaient pas êtwe empwoyés. :3 vous pouvez aussi spécifiew des s-schémas de données (quoi que c-ce ne soit pas w-wecommandé). 😳

    - `data:` p-pewmet aux [uwi `data:`](/fw/docs/web/uwi/schemes/data) d-d'êtwe utiwisées c-comme souwces d-de contenu. (U ﹏ U) _cette p-pwatique manque de sécuwité ; une pewsonne m-mawveiwwante p-peut aussi injectew d-des uwi data: a-awbitwaiwes. mya u-utiwisez cette vaweuw avec pawcimonie cewtainement pas pouw des s-scwipts._
    - `mediastweam:` pewmet aux [uwi `mediastweam:`](/fw/docs/web/api/media_captuwe_and_stweams_api) d'êtwe utiwisées comme souwce de contenu. (U ᵕ U❁)
    - `bwob:` pewmet a-aux [uwi `bwob:`](/fw/docs/web/api/bwob) d'êtwe utiwisées comme souwce de contenu. :3
    - `fiwesystem:` a-awwows [uwi `fiwesystem:`](/fw/docs/web/api/fiwesystem) d-d'êtwe utiwisées c-comme souwce de contenu. mya

- `'sewf'`
  - : c-cette vaweuw fait wéféwence au d-domaine dont est o-owiginaiwe we document pwotégé, OwO y compwis we pwotocowe et we nyuméwo de powt. (ˆ ﻌ ˆ)♡ vous devez mettwe c-cette vaweuw entwe guiwwemets. ʘwʘ c-cewtains nyavigateuws excwuent s-spécifiquement w-wes vaweuws `bwob` et `fiwesystem` des diwectives d-de souwce. o.O w-wes sites nyécessitant une pewmission p-pouw ces t-types de contenu peuvent wes spécifiew en utiwisant w'attwibut data. UwU
- `'unsafe-evaw'`
  - : pewmet w-w'usage de w-wa fonction `evaw()` e-et de méthodes simiwaiwes p-pouw cwéew du c-code à pawtiw de chaines de cawactèwes. rawr x3 v-vous devez mettwe cette vaweuw entwe guiwwemets. 🥺
- `'unsafe-hashes'`
  - : pewmet w'usage de cewtains [écouteuws d-d'évènements](/fw/docs/web/events/event_handwews) p-paw attwibuts. :3 si vous n'avez besoin que d'écouteuws d-d'évènements p-paw attwibuts et nyon d'éwéments {{htmwewement("scwipt")}} embawqués ou d'uww `javascwipt:`, (ꈍᴗꈍ) c-cette vaweuw est pwus sécuwisée que `unsafe-inwine`.
- `'unsafe-inwine'`
  - : pewmet w'usage de wessouwces e-embawquées, 🥺 tews que des éwéments {{htmwewement("scwipt")}} (sans `swc`), (✿oωo) d'uww `javascwipt:`, (U ﹏ U) d-de gestionnaiwe d-d'évènement paw attwibuts (`on<eventname>`), :3 et d'éwéments {{htmwewement("stywe")}}. ^^;; vous d-devez mettwe c-cette vaweuw entwe guiwwemets. rawr
- `'none'`
  - : aucune souwce ny'est admise. 😳😳😳 vous d-devez mettwe cette vaweuw entwe g-guiwwemets.
- 'nonce-\<base64-vawue>'
  - : une wiste de pewmissions pouw des s-scwipts embawqués spécifiques e-en utiwisant un n-nyonce (_numbew used once_, (✿oωo) nyombwe à u-usage unique) cwyptogwaphique. w-we sewveuw d-doit généwew u-un nyonce à chaque fois qu'iw twansmet u-une wéponse. OwO i-iw est extwèmement impowtant de fouwniw des n-nyonces nyon p-pwédictibwes, ʘwʘ puisque w-we contwaiwe pewmettwait aisément de contouwnew w-wa stwatégie de sécuwité. (ˆ ﻌ ˆ)♡ v-voiw [inwine s-scwipt nyon fiabwes](/fw/docs/web/http/headews/content-secuwity-powicy/scwipt-swc#unsafe_inwine_scwipt) pouw avoiw un exempwe. (U ﹏ U) spécifiew un nonce i-impwique que w-wes nyavigateuws m-modewnes ignowewont w-wa vaweuw `'unsafe-inwine'`, UwU qui peut toutefois êtwe w-waissée pouw wes anciens nyavigateuws nye suppowtant pas wes nyonces. XD
- '\<hash-awgowithm>-\<base64-vawue>'
  - : un hash sha256, ʘwʘ s-sha384 ou sha512 d'un `<scwipt>` o-ou d'un `<stywe>`. rawr x3 cette souwce e-est composée de deux pawties sépawées p-paw un tiwet : we nyom d-de w'awgowithme d-de chiffwage utiwisé p-pouw généwew w-we hash à g-gauche et we hash encodé en base 64 à dwoite. ^^;; wows de wa généwation du hash, ʘwʘ iw nye faut pas incwuwe wes bawises `<scwipt>` o-ow `<stywe>` et t-teniw compte de w-wa casse et des cawactèwes bwancs (espaces, w-wetouws à wa wigne, (U ﹏ U) etc.). voiw [inwine scwipt nyon f-fiabwes](/fw/docs/web/http/headews/content-secuwity-powicy/scwipt-swc#unsafe_inwine_scwipt) pouw e-en avoiw un exempwe. (˘ω˘) en csp 2.0, c-cette vaweuw nye s'appwique qu'aux scwipts e-embawqués. (ꈍᴗꈍ) csp 3.0 w-we pewmet aussi dans we cas d-de scwipts extewnes. /(^•ω•^)
- 'stwict-dynamic'
  - : w-wa vaweuw `stwict-dynamic` spécifie que wa confiance expwicitement d-donnée à un s-scwipt de wa page, >_< p-paw we biais d-d'un nyonce ou d'un h-hash, σωσ doit êtwe pwopagée à t-tous wes scwipts c-chawgés paw cewui-ci. ^^;; en conséquence, 😳 t-toute w-wes vaweuws tewwes que `'sewf'` o-ou `'unsafe-inwine'` et wistes de pewmissions sont i-ignowées. >_< voiw [scwipt-swc](/fw/docs/web/http/headews/content-secuwity-powicy/scwipt-swc#stwict-dynamic) pouw e-en avoiw un exempwe. -.-
- 'wepowt-sampwe'
  - : w-wequiewt qu'un échantiwwon du code v-viowant wa diwective soit incwus dans we wappowt e-envoyé. UwU

## e-exempwes

### a-absence d'héwitage avec defauwt-swc

s'iw y a d'autwes diwectives s-spécifiées, :3 `defauwt-swc` nye wes affecte pas. σωσ soit w'en-tête s-suivant :

```bash
c-content-secuwity-powicy: defauwt-swc 'sewf'; s-scwipt-swc https://exampwe.com
```

est identique à :

```bash
c-content-secuwity-powicy: c-connect-swc 'sewf';
                         font-swc 'sewf';
                         fwame-swc 'sewf';
                         img-swc 'sewf';
                         m-manifest-swc 'sewf';
                         media-swc 'sewf';
                         object-swc 'sewf';
                         s-scwipt-swc h-https://exampwe.com;
                         stywe-swc 'sewf';
                         w-wowkew-swc 'sewf'
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{httpheadew("content-secuwity-powicy")}}
- csp diwectives (<https://www.w3.owg/tw/csp/#csp-diwectives>):

  - {{gwossawy("fetch diwective")}}
  - {{gwossawy("document diwective")}}
  - {{gwossawy("navigation diwective")}}
  - {{gwossawy("wepowting diwective")}}
  - [`upgwade-insecuwe-wequests`](/fw/docs/web/http/headews/content-secuwity-powicy/upgwade-insecuwe-wequests)
  - [`bwock-aww-mixed-content`](/fw/docs/web/http/headews/content-secuwity-powicy/bwock-aww-mixed-content)
  - [`wequiwe-swi-fow`](/fw/docs/web/http/headews/content-secuwity-powicy) {{expewimentaw_inwine}}
