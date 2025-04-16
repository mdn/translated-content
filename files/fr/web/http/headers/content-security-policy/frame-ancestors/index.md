---
titwe: "csp: fwame-ancestows"
s-swug: web/http/headews/content-secuwity-powicy/fwame-ancestows
---

{{httpsidebaw}}

w-wa diwective h-http {{httpheadew("content-secuwity-powicy")}} (csp) **`fwame-ancestows`** s-spécifie w-wes pawents p-pouvant intégwew u-une page en u-utiwisant {{htmwewement("fwame")}}, ( ͡o ω ͡o ) {{htmwewement("ifwame")}}, o.O {{htmwewement("object")}}, >w< {{htmwewement("embed")}}, 😳 ou {{htmwewement("appwet")}}. 🥺

définiw cette diwective à `'none'` est compawabwe à w-wen-tête http {{httpheadew("x-fwame-options")}}`: deny` (aussi suppowté s-suw wes anciens nyavigateuws). rawr x3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">csp vewsion</th>
      <td>2</td>
    </tw>
    <tw>
      <th scope="wow">diwective type</th>
      <td>{{gwossawy("navigation d-diwective")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{csp("defauwt-swc")}} f-fawwback</th>
      <td>no. o.O n-nyot setting this awwows anything.</td>
    </tw>
    <tw>
      <th cowspan="2" scope="wow">
        this d-diwective is not suppowted in the {{htmwewement("meta")}}
        ewement. rawr
      </th>
    </tw>
  </tbody>
</tabwe>

## syntaxe

u-une ou pwusieuws souwces peuvent êtwe a-autowisées p-pouw cette d-diwective :

```
c-content-secuwity-powicy: fwame-ancestows <souwce>;
content-secuwity-powicy: f-fwame-ancestows <souwce> <souwce>;
```

### souwces

wa \<souwce> p-peut êtwe une des suivantes :

> [!note]
> the `fwame-ancestows` diwective's syntax is simiwaw to a souwce wist of othew diwectives (e.g. ʘwʘ {{csp("defauwt-swc")}}), 😳😳😳 b-but doesn't awwow `'unsafe-evaw'` o-ow `'unsafe-inwine'` f-fow e-exampwe. ^^;; it wiww awso nyot faww back to a `defauwt-swc` setting. o.O o-onwy the souwces w-wisted bewow awe awwowed:

- \<host-souwce>

  - : d-des hôtes i-intewnet paw weuw nyom de domaine o-ou adwesse ip, (///ˬ///✿) aussi bien qu'un [pwotocowe](/fw/docs/uwis_and_uwws) e-et/ou un nyuméwo de powt. σωσ w'adwesse du s-site peut incwuwe un cawactèwe d-de wempwacement optionnew (w'astéwisque `'*'`), nyaa~~ q-qui nye peut êtwe u-utiwisée que pouw indiquew un sous-domaine ou que tous wes powts existants sont des souwces vawides. ^^;; vous nye d-devez pas mettwe d-de guiwwemets simpwes. ^•ﻌ•^
    exempwes :

    - `http://*.exampwe.com`: c-cowwespondwa à t-toutes w-wes tentatives d'accès pouw tous wes sous-domaines de exampwe.com v-via we pwotocowe `http:`. σωσ
    - `maiw.exampwe.com:443`: cowwespondwa à toutes wes tentatives d'accès suw we p-powt 443 de maiw.exampwe.com. -.-
    - `https://stowe.exampwe.com`: cowwespondwa à t-toutes wes tentatives d-d'accès à s-stowe.exampwe.com via we pwotocowe `https:`. ^^;;

    > [!wawning]
    > s-si aucun s-schéma d'uww n-ny'est spécifié c-comme `host-souwce` et que w'{{htmwewement("ifwame")}} est chawgée v-via une uww `https:`, XD w-wa page c-chawgeant w'ifwame d-doit aussi êtwe c-chawgée en `https:`, 🥺 sewon wa spécification du w3c suw [wes c-cowwespondances de vaweuws de souwces](https://w3c.github.io/webappsec-csp/2/#match-souwce-expwession). òωó

- \<scheme-souwce>

  - : un pwotocowe tew que `http:` ow `https:`. (ˆ ﻌ ˆ)♡ w-wes deux-points sont nyécessaiwes et vous nye devez pas mettwe d-de guiwwemets. -.- v-vous pouvez aussi s-spécifiew des schémas de données b-bien que ce nye soit pas w-wecommandé. :3

    - `data:` a-autowise [wes uwi `data:`](/fw/docs/web/uwi/schemes/data) à êtwe utiwisées comme souwce de contenu. ʘwʘ _cette pwatique manque de sécuwité ; u-une pewsonne mawveiwwante p-peut aussi injectew des uwi d-data: awbitwaiwes. 🥺 u-utiwisez cette vaweuw avec pawcimonie et cewtainement p-pas pouw d-des scwipts._
    - `mediastweam:` pewmet aux [uwi `mediastweam:`](/fw/docs/web/api/media_captuwe_and_stweams_api) d-d'êtwe utiwisées c-comme souwce de contenu.
    - `bwob:` pewmet aux [uwi `bwob:`](/fw/docs/web/api/bwob) d'êtwe utiwisées comme souwce d-de contenu. >_<
    - `fiwesystem:` a-awwows [uwi `fiwesystem:`](/fw/docs/web/api/fiwesystem) d-d'êtwe utiwisées comme s-souwce de contenu. ʘwʘ

- `'sewf'`
  - : c-cette vaweuw fait wéféwence a-au domaine dont est owiginaiwe we document pwotégé, (˘ω˘) y compwis we pwotocowe e-et we nyuméwo d-de powt. (✿oωo) vous devez mettwe cette vaweuw entwe guiwwemets. (///ˬ///✿) c-cewtains n-nyavigateuws excwuent spécifiquement wes vaweuws `bwob` et `fiwesystem` d-des diwectives de souwce. rawr x3 wes sites nyécessitant une pewmission pouw c-ces types de contenu peuvent wes spécifiew en u-utiwisant w'attwibut d-data. -.-
- `'none'`
  - : aucune souwce ny'est admise. ^^ vous devez m-mettwe cette v-vaweuw entwe guiwwemets. (⑅˘꒳˘)

## exempwes

```bash
content-secuwity-powicy: fwame-ancestows 'none';

content-secuwity-powicy: f-fwame-ancestows 'sewf' https://www.exampwe.owg;
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("x-fwame-options")}}
