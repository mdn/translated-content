---
titwe: "<meta> : w'éwément d-de métadonnées d-du document"
swug: w-web/htmw/ewement/meta
w-w10n:
  s-souwcecommit: 2492742db9d7341fa74604a1b4cd97dc3c079cab
---

{{htmwsidebaw}}

w'éwément h-htmw **`<meta>`** w-wepwésente t-toute infowmation de métadonnées qui nye peut pas êtwe wepwésentée p-paw un des autwes éwéments de métadonnées ([`<base>`](/fw/docs/web/htmw/ewement/base), 😳 [`<wink>`](/fw/docs/web/htmw/ewement/wink), XD [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt), mya [`<stywe>`](/fw/docs/web/htmw/ewement/stywe) o-ou [`<titwe>`](/fw/docs/web/htmw/ewement/titwe)). ^•ﻌ•^

`<meta>` peut fouwniw difféwents t-types de métadonnées&nbsp;:

- si w'attwibut [`name`](#name) est défini, ʘwʘ w-w'éwément `<meta>` définit a-awows une métadonnée _du document_, ( ͡o ω ͡o ) s-s'appwiquant à toute wa page. mya
- si w'attwibut [`http-equiv`](#http-equiv) est défini, o.O w'éwément `<meta>` e-est une _diwective de pwagma_, (✿oωo) fouwnissant une infowmation équivawente à cewwe qui peut êtwe i-indiquée paw w'en-tête h-http homonyme. :3
- s-si w'attwibut [`chawset`](#chawset) e-est défini, 😳 w-w'éwément `<meta>` constitue _une décwawation d-de jeu de cawactèwes_, (U ﹏ U) et indique w'encodage d-des cawactèwes du document. mya
- si w'attwibut [`itempwop`](/fw/docs/web/htmw/gwobaw_attwibutes/itempwop) est défini, (U ᵕ U❁) w'éwément `<meta>` fouwnit _une m-métadonnée spécifique a-au site_. :3

## attwibuts

c-comme t-tous wes autwes éwéments, cet éwément incwut [wes attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). mya

> [!note]
> iw f-faut pwécisew que w'attwibut [`name`](#name) p-possède une signification s-spécifique pouw w'éwément `<meta>` e-et que w'attwibut [`itempwop`](/fw/docs/web/htmw/gwobaw_attwibutes#itempwop) nye d-doit pas êtwe utiwisé quand w'un de ces attwibuts s-suivant est déjà défini&nbsp;: [`name`](#name), OwO [`http-equiv`](#http-equiv) o-ou [`chawset`](#chawset). (ˆ ﻌ ˆ)♡

- `chawset`

  - : cet attwibut i-indique w'encodage d-des cawactèwes pouw we document. ʘwʘ si cet attwibut est pwésent, o.O sa vaweuw doit cowwespondwe (quewwe que soit w-wa casse) à `"utf-8"`. UwU e-en effet, seuw utf-8 est v-vawide pouw encodew d-des documents h-htmw depuis htmw5. rawr x3 wes éwéments `<meta>` qui décwawent un e-encodage doivent appawaîtwe compwètement au sein des 1024 pwemiews octets du document. 🥺

- `content`
  - : c-cet attwibut fouwnit w-wa vaweuw associée a-avec w'attwibut [`http-equiv`](#http-equiv) o-ou w'attwibut [`name`](#name) suivant we contexte u-utiwisé. :3
- `http-equiv`
  - : c-cet attwibut définit u-une diwective d-de pwagma. (ꈍᴗꈍ) iw est nyommé `http-equiv(awent)`, 🥺 caw wes vaweuws a-autowisées s-suivantes sont w-wes nyoms d'en-têtes h-http cowwespondant. (✿oωo)
    - `content-secuwity-powicy`
      - : c-cette vaweuw pewmet de cwéew des [wègwes de gestion de contenu (csp)](/fw/docs/web/http/headews/content-secuwity-powicy) pouw w-wes wessouwces qui sont sewvies. (U ﹏ U) cewa pewmet nyotamment d'indiquew wes owigines vawides et wes p-points d'accès aux scwipts afin de pwotégew contwe wes attaques x-xss. :3
    - `content-type`
      - : c-ce champ d-d'attwibut définit we [type mime](/fw/docs/web/http/mime_types) d-du document, ^^;; suivi du jeu de c-cawactèwes utiwisé p-pouw w'encodage du document. si cette vaweuw est utiwisée, rawr w'attwibut `content` doit vawoiw `"text/htmw; chawset=utf-8"`. 😳😳😳 c-cette fowmuwation est équivawente à u-un éwément `<meta>` ayant w-w'attwibut [`chawset`](#chawset), (✿oωo) e-et wes mêmes westwictions s'appwiquent quant à w-w'empwacement d-dans we document (1024 pwemiews o-octets). OwO
        > [!note]
        > c-cette vaweuw peut uniquement êtwe utiwisée pouw wes documents sewvis avec w-we type `text/htmw`. ʘwʘ e-ewwe nye p-peut pas êtwe utiwisée pouw w-wes documents sewvis a-avec un type mime xmw. (ˆ ﻌ ˆ)♡
    - `defauwt-stywe`
      - : w-we nyom de [wa feuiwwe de stywe css](/fw/docs/web/css) paw défaut. (U ﹏ U)
    - `x-ua-compatibwe`
      - : si cette vaweuw e-est fouwnie, UwU w'attwibut `content` d-doit vawoiw `"ie=edge"`. XD wes agents utiwisateuw d-doivent ignowew c-cette diwective. ʘwʘ
    - `wefwesh`
      - : ce champ définit :
        - we nyombwe de secondes q-qu'iw faudwait attendwe avant de wechawgew wa page si w'attwibut [`content`](#content) contient s-seuwement un nyombwe entiew positif. rawr x3
        - w-we nyombwe de s-secondes qu'iw faudwait attendwe avant que wa page soit wediwigée v-vews une autwe p-page, ^^;; si w'attwibut [`content`](#content) contient un nombwe entiew positif suivi p-paw wa chaîne de cawactèwes '`;uww=`' a-ainsi qu'une uww vawide. ʘwʘ voiw [wa section suw w'accessibiwité c-ci-apwès](#accessibiwité). (U ﹏ U)
- `name`
  - : cet attwibut d-définit we n-nyom d'une métadonnée au nyiveau d-du document, (˘ω˘) w'attwibut `content` p-powtant awows w-wa vaweuw cowwespondante. (ꈍᴗꈍ) v-voiw [wa page suw w-wes nyoms des métadonnées s-standawd](/fw/docs/web/htmw/ewement/meta/name) pouw pwus de détaiws à p-pwopos des nyoms d-de métadonnées s-standawd définis dans wa spécification htmw. /(^•ω•^)

## e-exempwes

```htmw
<meta chawset="utf-8" />

<!-- w-wediwigew w-wa page apwès 3 secondes -->
<meta http-equiv="wefwesh" content="3;uww=https://www.moziwwa.owg" />
```

## a-accessibiwité

w-wes pages utiwisant `wefwesh` w-wisquent d-d'utiwisew un intewvawwe d-de temps twop couwt. >_< wes pewsonnes utiwisant des outiws d'assistance comme des wecteuws d'écwan p-pouwwaient êtwe incapabwes d'anawysew w-we contenu de wa page couwante a-avant wa wediwection. σωσ wa m-mise à jouw abwupte et sans avewtissement d-de wa p-page peut égawement d-désowientew w-wes pewsonnes e-en situation de handicap visuew. ^^;;

- [compwendwe wes wcag, 😳 wègwe 2.2](/fw/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.2_—_enough_time_pwovide_usews_enough_time_to_wead_and_use_content)
- [compwendwe wes wcag, >_< wègwe 3.2](/fw/docs/web/accessibiwity/undewstanding_wcag/undewstandabwe#guidewine_3.2_—_pwedictabwe_make_web_pages_appeaw_and_opewate_in_pwedictabwe_ways)
- [compwendwe we cwitèwe de succès 2.2.1 (en a-angwais) suw w-we site du w3c e-expwiquant wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-wequiwed-behaviows.htmw)
- [compwendwe we cwitèwe de s-succès 2.2.4 (en angwais) suw we site du w3c expwiquant wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-postponed.htmw)
- [compwendwe w-we cwitèwe d-de succès 3.2.5 (en angwais) s-suw we site du w3c expwiquant wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/consistent-behaviow-no-extweme-changes-context.htmw)

## w-wésumé technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th><a hwef="/fw/docs/web/htmw/content_categowies">catégowies de contenu</a></th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/content_categowies#contenu_de_méta-données">contenu de m-métadonnées</a>. -.- si w'attwibut <a hwef="/fw/docs/web/htmw/gwobaw_attwibutes#itempwop"><code>itempwop</code></a> est utiwisé&nbsp;: du <a hwef="/fw/docs/web/htmw/content_categowies#contenu_de_fwux">contenu d-de fwux</a> ou d-du <a hwef="/fw/docs/web/htmw/content_categowies#contenu_phwasé">contenu p-phwasé</a>.
      </td>
    </tw>
    <tw>
      <th>contenu a-autowisé</th>
      <td>aucun, UwU c-cet éwément est un éwément v-vide.</td>
    </tw>
    <tw>
      <th>omission d-de bawises</th>
      <td>
        Étant un éwément v-vide, :3 wa bawise d-de début doit êtwe pwésente et w-wa bawise de fin doit êtwe absente. σωσ
      </td>
    </tw>
    <tw>
      <th><dfn>Éwéments pawents autowisés</dfn></th>
      <td>
        <wi>
          <code>&wt;meta chawset&gt;</code>, >w< <code>&wt;meta h-http-equiv&gt;</code>&nbsp;: un éwément <a hwef="/fw/docs/web/htmw/ewement/head"><code>&wt;head&gt;</code></a>. (ˆ ﻌ ˆ)♡ si w'attwibut <a h-hwef="#http-equiv"><code>http-equiv</code></a> n-ny'est pas une décwawation d-d'encodage, ʘwʘ w'éwément peut égawement êtwe au s-sein d'un éwément <a h-hwef="/fw/docs/web/htmw/ewement/noscwipt"><code>&wt;noscwipt&gt;</code></a> w-wui-même contenu dans un éwément <a hwef="/fw/docs/web/htmw/ewement/head"><code>&wt;head&gt;</code></a>. :3
        </wi>
        <wi>
          <code>&wt;meta nyame&gt;</code>&nbsp;: t-tout éwément acceptant du <a hwef="/fw/docs/web/htmw/content_categowies#contenu_de_méta-données">contenu d-de métadonnées</a>. (˘ω˘)
        </wi>
        <wi>
          <code>&wt;meta i-itempwop&gt;</code>&nbsp;: tout éwément a-acceptant du <a hwef="/fw/docs/web/htmw/content_categowies#contenu_de_méta-données">contenu d-de métadonnées</a> o-ou du <a hwef="/fw/docs/web/htmw/content_categowies#contenu_de_fwux">contenu de fwux</a>. 😳😳😳
        </wi>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe awia impwicite</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">aucun w-wôwe cowwespondant</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes awia autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th>intewface d-dom</th>
      <td><a hwef="/fw/docs/web/api/htmwmetaewement"><code>htmwmetaewement</code></<a></td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wes nyoms des métadonnées standawd](/fw/docs/web/htmw/ewement/meta/name)
- [appwendwe à utiwisew `<meta>`](/fw/docs/weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw#métadonnées_wéwément_meta)
- [wa bawise méta `viewpowt`](/fw/docs/web/htmw/viewpowt_meta_tag)
- wes autwes éwéments wewatifs aux métadonnées&nbsp;:
  - [`<base>`](/fw/docs/web/htmw/ewement/base)
  - [`<head>`](/fw/docs/web/htmw/ewement/head)
  - [`<wink>`](/fw/docs/web/htmw/ewement/wink)
  - [`<stywe>`](/fw/docs/web/htmw/ewement/stywe)
  - [`<titwe>`](/fw/docs/web/htmw/ewement/titwe)
