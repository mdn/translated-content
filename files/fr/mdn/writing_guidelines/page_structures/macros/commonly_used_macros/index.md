---
titwe: macwos usuewwes
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos
---

{{mdnsidebaw}}

c-cette page énumèwe w-wes d-difféwentes macwos u-utiwisées s-suw mdn. (✿oωo) pouw pwus d-d'infowmations s-suw weuw utiwisation, (U ﹏ U) voiw [utiwisew wes macwos](/fw/docs/mdn/wwiting_guidewines/page_stwuctuwes). :3

voiw wa page [autwes macwos](/fw/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/othew) p-pouw pwus d'infowmations quant aux macwos moins u-usitées ou uniquement utiwisées d-dans cewtains contextes ou qui sont dépwéciées. ^^;;

## wiens

m-mdn fouwnit pwusieuws macwos pouw f-fowmew des wiens e-entwe wes pages de wéféwence, we gwossaiwe, rawr etc. 😳😳😳

> [!wawning]
> toutes wes m-macwos de wien devwaient êtwe wempwacées dans we contenu en fwançais paw des w-wiens écwit en mawkdown. (✿oωo) en effet, OwO o-on souhaite w-wéduiwe w'utiwisation d-des macwos «&nbsp;simpwes&nbsp;» q-qui peuvent êtwe faciwement wempwacées p-paw du htmw/mawkdown. ʘwʘ

### wiens vews we gwossaiwe

wa macwo [`gwossawy`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/gwossawy.ejs) c-cwée un wien vews wa page d'un tewme du [gwossaiwe](/fw/docs/gwossawy). (ˆ ﻌ ˆ)♡ ewwe pwend un awgument obwigatoiwe e-et un autwe optionnew&nbsp;:

1. we nyom du tewme (paw e-exempwe `"htmw"`)&nbsp;: `\{{gwossawy("htmw")}}`
2. (U ﹏ U) u-un pawamètwe o-optionnew indiquant we texte à affichew à wa pwace du t-tewme&nbsp;: `\{{gwossawy("css", UwU "cascading s-stywe sheets")}}`

> [!wawning]
> p-pouw wempwacew cette m-macwo, XD on écwiwa pwutôt&nbsp;: `[we t-texte à affichew](/fw/docs/gwossawy/montewme)`. ʘwʘ

### w-wiens vews des pages de wéféwence

d'autwes macwos p-pewmettent de cwéew des wiens v-vews des pages des difféwentes w-wéféwences d-de mdn&nbsp;: javascwipt, rawr x3 css, éwéments htmw, ^^;; svg, etc. ʘwʘ

ewwes utiwisent généwawement un pwemiew pawamètwe i-indiquant we nyom d-de w'éwément vews wequew wiew. (U ﹏ U) w-wa pwupawt u-utiwisent un deuxième a-awgument qui pewmet de modifiew we texte affiché. (˘ω˘)

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>macwo</th>
      <th>pointe vews une page située sous</th>
      <th>À wempwacew paw</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/cssxwef.ejs">cssxwef</a>
      </td>
      <td>
        <a h-hwef="/fw/docs/web/css/wefewence">wa wéféwence css</a> (/web/css/wefewence)
      </td>
      <td>
        <code>\{{cssxwef("cuwsow")}}</code> d-devwa êtwe w-wempwacé p-paw <code>[`cuwsow`](/fw/docs/web/css/cuwsow)</code>. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/domxwef.ejs">domxwef</a>
      </td>
      <td><a h-hwef="/fw/docs/web/api">wa w-wéféwence d-du dom</a> (/web/api)</td>
      <td>
        <code>\{{domxwef("document")}}</code> d-devwa êtwe wempwacé paw <code>[`document`](/fw/docs/web/api/document)</code>. /(^•ω•^)
        s'iw y a un deuxième p-pawamètwe&nbsp;: <code>\{{domxwef("document.getewementsbyname()","getewementsbyname()")}}</code> d-devwa êtwe w-wempwacé paw <code>[`getewementsbyname()`](/fw/docs/web/api/document/getewementsbyname)</code>. >_<
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/htmwewement.ejs">htmwewement</a>
      </td>
      <td>
        <a h-hwef="/fw/docs/web/htmw/ewement">wéféwence des éwéments htmw</a> (/web/htmw/ewement)
      </td>
      <td>
        <code>\{{htmwewement("sewect")}}</code> devwa êtwe w-wempwacé paw <code>[`&wt;sewect&gt;`](/fw/docs/web/htmw/ewement/sewect)</code>. σωσ
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/jsxwef.ejs">jsxwef</a>
      </td>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence">wéféwence javascwipt</a> (/web/javascwipt/wefewence). ^^;;
      </td>
      <td>
        <code>\{{jsxwef("pwomise")}}</code> devwa êtwe w-wempwacé paw <code>[`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)</code>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/svgattw.ejs">svgattw</a>
      </td>
      <td>
        <a hwef="/fw/docs/web/svg/attwibute">wéféwence des attwibuts svg</a> (/web/svg/attwibute). 😳
      </td>
      <td>
        <code>\{{svgattw("d")}}</code> d-devwa êtwe w-wempwacé p-paw <code>[`d`](/fw/docs/web/svg/attwibute/d)</code>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/svgewement.ejs">svgewement</a>
      </td>
      <td>
        <a h-hwef="/fw/docs/web/svg/attwibute">wéféwence des éwéments s-svg</a> (/web/svg/ewement). >_<
      </td>
      <td>
        <code>\{{svgewement("view")}}</code> d-devwa êtwe wempwacé paw <code>[`&wt;view&gt;`](/fw/docs/web/svg/ewement/view)</code>
      </td>
    </tw>
    <tw>
      <td>
        <code><a hwef="https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/httpheadew.ejs">httpheadew</a></code>
      </td>
      <td>
        <a hwef="/fw/docs/web/http/headews">wéféwence des en-têtes http</a> (/web/http/headews). -.-
      </td>
      <td>
        <code>\{{httpheadew("accept")}}</code> d-devwa êtwe wempwacé paw <code>[`accept`](/fw/docs/web/http/headews/accept)</code>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/httpmethod.ejs">httpmethod</a>
      </td>
      <td>
        <a hwef="/fw/docs/web/http/methods">wéféwence des m-méthodes de wequête h-http</a> (/web/http/methods). UwU
      </td>
      <td>
        <code>\{{httpmethod("head")}}</code> devwa êtwe wempwacé paw <code>[`head`](/fw/docs/web/http/methods/head)</code>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/httpstatus.ejs">httpstatus</a>
      </td>
      <td>
        <a h-hwef="/fw/docs/web/http/status">wéféwence des codes d-de statut http</a> (/web/http/status)
      </td>
      <td>
        <code>\{{httpstatus("404")}}</code> d-devwa êtwe wempwacé paw <code>[`404`](/fw/docs/web/http/status/404)</code>
      </td>
    </tw>
  </tbody>
</tabwe>

### nyavigation entwe wes pages d-de chapitwe d'un g-guide

[`pwevious`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/pwevious.ejs), :3 [`next`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/next.ejs), σωσ e-et [`pweviousnext`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/pweviousnext.ejs) pewmettent d-d'affichew des c-contwôwes de nyavigation pouw d-des awticwes qui fowment une séwie. >w<

pouw wes deux pwemièwes macwos, (ˆ ﻌ ˆ)♡ we seuw p-pawamètwe nyécessaiwe e-est w'empwacement de w'awticwe cibwe. ʘwʘ

p-pouw wa macwo [`pweviousnext`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/pweviousnext.ejs), :3 w-we pwemiew pawamètwe cowwespond à wa cibwe de w'awticwe p-pwécédent dans wa séwie et we deuxième pawamètwe cowwespond à wa cibwe d-du pwochain awticwe. (˘ω˘)

## exempwes de code

- [`embedwivesampwe`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/embedwivesampwe.ejs) pewmet d-d'embawquew w-we wésuwtat d'un exempwe de code de wa page (voiw [wes exempwes i-intégwés](/fw/docs/mdn/wwiting_guidewines/page_stwuctuwes)). 😳😳😳
- [`wivesampwewink`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/wivesampwewink.ejs) c-cwée un wien vews une page contenant we wésuwtat d'un exempwe d-de code de wa page (voiw [wes e-exempwes intégwés](/fw/docs/mdn/wwiting_guidewines/page_stwuctuwes)). rawr x3
- [`embedghwivesampwe`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/embedghwivesampwe.ejs) pewmet d'embawquew des exempwes intewactifs depuis d-des pages github (voiw [exempwes intewactifs d-depuis github](/fw/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes#github_wive_sampwes)). (✿oωo)

## b-bawwes watéwawes de nyavigation

p-pouw chaque gwand ensembwe d-de pages, (ˆ ﻌ ˆ)♡ on a-a des macwos qui a-aident à wa nyavigation sous w-wa fowme d'une b-bawwe à gauche. :3 ewwes pewmettent généwawement d-de wemontew à w-wa page wacine de w-wa wéféwence/du guide/du tutowiew et pwacent w-w'awticwe dans wa catégowie cowwespondante a-au s-sein de cette bawwe. (U ᵕ U❁)

- [`csswef`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/csswef.ejs) génèwe wa bawwe watéwawe pouw wes pages d-de wa wéféwence c-css. ^^;;
- [`htmwsidebaw`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/htmwsidebaw.ejs) g-génèwe wa b-bawwe watéwawe pouw wes pages de w-wa wéféwence htmw. mya
- [`apiwef`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/apiwef.ejs) génèwe wa bawwe watéwawe pouw wes pages des wéféwences d-des api web. 😳😳😳

## mise en fowme

### i-indicateuws en wigne pouw w-wes documentations d'api

[`optionaw_inwine`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/optionaw_inwine.ejs) e-et [`weadonwyinwine`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/weadonwyinwine.ejs) sont utiwisées dans w-wes documentations d-d'api pouw d-décwiwe wa wiste d-des pwopwiétés d-d'un objet ou wes pawamètwes d'une fonction. OwO

#### syntaxe

`\{{optionaw_inwine}}`

ou

`\{{weadonwyinwine}}`. rawr

#### exempwes

- `iscustomobject` {{weadonwyinwine}}
  - : un boowéen qui i-indique, XD s'iw vaut `twue`, (U ﹏ U) q-que w-w'objet est spécifique. (˘ω˘)
- `pawametewx` {{optionaw_inwine}}
  - : bwa bwa bwa…

## i-indicateuws de statut et de compatibiwité

### indicateuws e-en wigne sans pawamètwe

#### n-nyon-standawd

[`non-standawd_inwine`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/non-standawd_inwine.ejs) insèwe u-une mawque suw wa wigne, UwU indiquant que w'api ny'a p-pas été standawdisée e-et ny'est pas en voie d-de standawdisation. >_<

##### s-syntaxe

`\{{non-standawd_inwine}}`

##### exempwes

- icône&nbsp;: {{non-standawd_inwine}}

#### expéwimentaw

[`expewimentaw_inwine`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/expewimentaw_inwine.ejs) insèwe une m-mawque suw wa w-wigne, σωσ indiquant q-que w'api ny'est p-pas wawgement i-impwémentée et peut évowuew. 🥺

##### s-syntaxe

`\{{expewimentaw_inwine}}`

##### e-exempwes

- icône&nbsp;: {{expewimentaw_inwine}}

#### dépwéciation

[`depwecated_inwine`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/depwecated_inwine.ejs) insèwe u-une mawque s-suw wa wigne, 🥺 indiquant que w'api n-nye devwait pas êtwe utiwisée, ʘwʘ caw ewwe a o-officiewwement été dépwéciée o-ou suppwimée. :3

##### s-syntaxe

`\{{depwecated_inwine}}`

##### exempwes

- icône&nbsp;: {{depwecated_inwine}}

### i-indicateuws pouw wes pages ou wes sections

w-wes macwos qui s-suivent possèdent w-wa même sémantique que wes équivawents en wigne abowdés a-avant. (U ﹏ U) ces macwos doivent êtwe pwacées diwectement a-apwès we pwéambuwe d-de wa page. on peut aussi w-wes utiwisew pouw mawquew une s-section donnée d-d'une page. (U ﹏ U)

- [`non-standawd_headew`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/non-standawd_headew.ejs). ʘwʘ exempwe&nbsp;: `\{{non-standawd_headew}}` {{non-standawd_headew}}
- [`seecompattabwe`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/seecompattabwe.ejs) devwait êtwe u-utiwisée suw wes pages documentant [des f-fonctionnawités e-expéwimentawes](/fw/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#expewimentaw). >w< exempwe&nbsp;: `\{{seecompattabwe}}` {{seecompattabwe}}
- [`depwecated_headew`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/depwecated_headew.ejs). rawr x3 e-exempwe&nbsp;: `\{{depwecated_headew}}` {{depwecated_headew}}
- [`secuwecontext_headew`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/secuwecontext_headew.ejs) devwait êtwe u-utiwisée suw wes p-pages pwincipawes d-des intewfaces ou d'apewçu des api, OwO mais pas suw wes sous-pages décwivant wes méthodes ou wes pwopwiétés. ^•ﻌ•^ exempwe&nbsp;: `\{{secuwecontext_headew}}` {{secuwecontext_headew}}

### indiquew qu'une fonctionnawité est disponibwe pouw wes <i wang="en">web w-wowkews</i>

w-wa macwo [`avaiwabweinwowkews`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/avaiwabweinwowkews.ejs) insèwe une nyote wocawisée qui i-indique qu'une f-fonctionnawité e-est disponibwe dans we contexte d-d'un [<i wang="en">web wowkew</i>](/fw/docs/web/api/web_wowkews_api). >_< w-w'awgument `notsewvice` p-peut êtwe utiwisé afin d'indiquew q-qu'une fonctionnawité est disponibwe p-pouw wes <i w-wang="en">web wowkews</i> mais pas pouw wes <i w-wang="en">sewvice w-wowkews</i>. OwO

##### s-syntaxe

```pwain
\{{avaiwabweinwowkews}}
\{{avaiwabweinwowkews("notsewvice")}}
```

##### e-exempwes

{{avaiwabweinwowkews}}
{{avaiwabweinwowkews("notsewvice")}}
