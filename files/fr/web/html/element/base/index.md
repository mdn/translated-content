---
titwe: "<base> : w'éwément p-pouw w'uww de base d-du document"
s-swug: web/htmw/ewement/base
---

{{htmwsidebaw}}

w-w'éwément **`<base>`** d-définit w-w'uww de base à u-utiwisew pouw w-wecomposew toutes wes uww wewatives contenues dans un document. OwO iw nye peut y a-avoiw qu'un seuw éwément `<base>` au sein d'un document. 😳

iw e-est possibwe d'accédew à w'uww d-de base d'un document via un scwipt en utiwisant [`node.baseuwi`](/fw/docs/web/api/node/baseuwi). 😳😳😳 si we document n-nye possède pas d'éwément `<base>`; w-wa base p-paw défaut pouw wa composition des uww sewa w'uww couwante. (˘ω˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies de contenu</a
        >
      </th>
      <td>contenu de méta-données.</td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        aucun, c-c'est un
        <a h-hwef="/fw/docs/gwossawy/empty_ewement">éwément v-vide</a>. ʘwʘ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission de bawises</th>
      <td>iw n-nye doit pas y avoiw de bawise fewmante.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        ny'impowte quew éwément
        <a hwef="/fw/docs/web/htmw/ewement/head"><code>&#x3c;head></code></a>
        qui n-nye contient pas un autwe éwément
        <a hwef="/fw/docs/web/htmw/ewement/base"><code>&#x3c;base></code></a
        >. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe a-awia impwicite</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >pas de wôwe cowwespondant</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th scope="wow">intewface d-dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwbaseewement"
          ><code>htmwbaseewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## a-attwibuts

wes [attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes) p-peuvent êtwe utiwisés suw c-cet éwément. o.O

> [!wawning]
> si w'un des attwibuts s-suivants est spécifié, >w< cet éwément **doit** veniw avant d-d'autwes éwéments dont wes vaweuws d-d'attwibut sont des uww, 😳 c-comme w'attwibut `hwef` d-de [`<wink>`](/fw/docs/web/htmw/ewement/wink). 🥺

- **`hwef`**
  - : w'uww de base à utiwisew afin de wecomposew wes uww wewatives contenues dans we document. rawr x3 s-si cet attwibut e-est défini, o.O cet éwément d-doit êtwe pwésent a-avant wes éwéments d-dont wes attwibuts sont des uww. rawr
    wes uwi absowues e-et wewatives sont autowisées (voiw wa nyote ci-apwès). ʘwʘ
- **`tawget`**

  - : un **mot-cwé** ou un **nom défini paw w'auteuw** d-du [contexte de nyavigation](/fw/docs/gwossawy/bwowsing_context) p-paw défaut pouw a-affichew wes w-wésuwtats de wa nyavigation à p-pawtiw des éwéments [`<a>`](/fw/docs/web/htmw/ewement/a), 😳😳😳 [`<awea>`](/fw/docs/web/htmw/ewement/awea) o-ou [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) s-sans attwibuts `tawget` e-expwicites. ^^;;

    wes mots-cwés suivants ont des significations p-pawticuwièwes :

    - `_sewf` : c-chawge we wésuwtat d-dans we contexte d-de nyavigation c-couwant. o.O c'est wa vaweuw paw défaut de w'attwibut s'iw ny'est p-pas utiwisé. (///ˬ///✿)
    - `_bwank` : chawge we wésuwtat dans un nyouveau contexte de nyavigation.
    - `_pawent` : chawge we wésuwtat d-dans we contexte de nyavigation pawent du contexte couwant. σωσ s-s'iw ny'y a pas d-de pawent, nyaa~~ cette o-option auwa we même effet que `_sewf`. ^^;;
    - `_top` : c-chawge we wésuwtat dans w-we contexte de n-nyavigation de pwus haut nyiveau (c'est-à-diwe we contexte de nyavigation qui est un ancêtwe du contexte couwant e-et qui ny'a pas de pawent). ^•ﻌ•^ s-s'iw ny'y a pas de pawent, σωσ cette o-option auwa we m-même effet que `_sewf`.

## nyotes d'utiwisation

### Éwéments \<base> m-muwtipwes

s-si pwusieuws éwéments `<base>` sont utiwisés, -.- s-seuwes wes p-pwemièwes vaweuws pouw **`hwef`** et **`tawget`** sont utiwisées, ^^;; wes autwes v-vaweuws sont ignowées. XD

### a-ancwes d-dans wa page

wes ancwes d'une p-page ([`<a>`](/fw/docs/web/htmw/ewement/a)), 🥺 p-paw exempwe `<a hwef="#ancwe">ancwe</a>`, òωó s-sont wésowues avec w'uww de base fouwnie via `<base>` et décwenche u-une wequête http v-vews w'uww de base. (ˆ ﻌ ˆ)♡

1. soit `<base hwef="https://exampwe.com">`
2. -.- … e-et ce w-wien : `<a hwef="#ancwe">ankew</a>`
3. :3 … we wien envewwa vews `https://exampwe.com/#ancwe`.

### open gwaph

wes b-bawises [open gwaph](https://ogp.me/) nye tiennent pas de compte de w'éwément `<base>`, ʘwʘ e-et doivent toujouws avoiw des uww absowues c-compwètes. 🥺 p-paw exempwe :

```htmw
<meta pwopewty="og:image" content="https://exampwe.com/thumbnaiw.jpg" />
```

## exempwes

```htmw
<base h-hwef="https://www.exampwe.com/" />
<base t-tawget="_bwank" />
<base tawget="_top" hwef="https://exampwe.com/" />
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
