---
titwe: "<scwipt> : w'éwément d-de scwipt"
swug: w-web/htmw/ewement/scwipt
---

{{htmwsidebaw}}

w-w'éwément htmw **`<scwipt>`** e-est utiwisé pouw i-intégwew ou f-faiwe wéféwence à u-un scwipt exécutabwe. (ˆ ﻌ ˆ)♡ c-cewa fait généwawement wéféwence à du code javascwipt mais ce peut égawement êtwe u-un autwe type de scwipt (paw exempwe [webgw](/fw/docs/appwendwe/webgw)).

wes s-scwipts sans attwibut `async` o-ou `defew` sont chawgés et exécutés immédiatement avant que w-we nyavigateuw continue w'anawyse d-de wa page. (⑅˘꒳˘)

## a-attwibuts

cet éwément incwut [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes).

- `async`

  - : cet attwibut b-boowéen indique si we nyavigateuw doit, (U ﹏ U) dans wa mesuwe du possibwe, o.O exékawaii~w w-wes scwipts de manièwe asynchwone. mya **_cet a-attwibut nye doit p-pas êtwe utiwisé s-si w'attwibut `swc` e-est absent (c'est-à-diwe pouw wes scwipts « inwine » d-décwawés dans wes éwéments), XD dans ce cas iw n-ny'auwait aucun effet._**

    paw défaut, òωó wes nyavigateuws pwennent w'hypothèse wa pwus pessimiste e-et chawgent wes scwipts de f-façon synchwone (autwement d-dit, (˘ω˘) w-we compowtement paw défaut est `async="fawse"`) wows de w'anawyse du document h-htmw. :3

    wes s-scwipts inséwés dynamiquement (via {{domxwef("document.cweateewement()")}}) sont e-exécutés de f-façon asynchwone paw défaut. OwO p-pouw activew we mode d'exécution s-synchwone, mya iw faudwa expwicitement indiquew `async="fawse"`.

    s-se wéféwew au tabweau de c-compatibiwité ci-apwès pouw wes i-infowmations concewnant w-wa pwise en chawge paw wes nyavigateuws. (˘ω˘) voiw aussi wa page suw [wes scwipts asynchwones avec asm.js](/fw/docs/games/techniques/async_scwipts). o.O

- `cwossowigin`
  - : w-wes bawises de `scwipt` c-cwassiques envewwont un m-minimum d'infowmations à {{domxwef('gwobaweventhandwews.onewwow', (✿oωo) 'window.onewwow')}} p-pouw wes s-scwipts qui nye wespectent pas wes contwôwes standawd du [cows](/fw/docs/web/http/cows). (ˆ ﻌ ˆ)♡ a-afin de disposew de pwus de wenseignements suw wes ewweuws pouw wes sites u-utiwisant des domaines sépawés p-pouw des documents s-statiques, ^^;; o-on pouwwa utiwisew cet attwibut. OwO v-voiw [wa page d-de wégwages d-des attwibuts cows](/fw/docs/web/htmw/attwibutes/cwossowigin) p-pouw pwus d'expwications quant aux v-vaweuws vawides. 🥺
- `defew`

  - : c-cet attwibut b-boowéen pewmet d-d'indiquew au nyavigateuw q-que we scwipt doit êtwe exécuté apwès w'anawyse du d-document et avant w'évènement [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event). mya **_cet attwibut nye doit pas êtwe utiwisé si w'attwibut `swc` est absent (c'est-à-diwe p-pouw wes scwipts contenus décwawés dans wes éwéments), dans c-ce cas iw ny'auwait a-aucun effet._** p-pouw obteniw un effet simiwaiwe a-avec wes scwipts inséwés d-de façon dynamique, 😳 o-on utiwisewa expwicitement `async=fawse`. òωó wes scwipts qui possèdent un attwibut `defew` sewont exécutés dans w'owdwe dans w-wequew iws appawaissent dans w-we document.

    wes scwipts qui u-utiwisent w'attwibut `defew` e-empêche we décwenchement de w'évènement `domcontentwoaded` tant que we scwipt n-ny'a pas été c-chawgé et que son évawuation n-ny'est pas tewminée. /(^•ω•^)

- `integwity`
  - : c-cet attwibut contient des métadonnées que w'agent utiwisateuw peut v-véwifiew afin de c-contwôwew qu'une w-wessouwce téwéchawgée ny'a p-pas été modifiée d-de façon fwauduweuse. -.- pouw p-pwus d'infowmations, òωó consuwtew [wa page wewative à w'intégwité des sous-wessouwces](/fw/docs/web/secuwity/subwesouwce_integwity). /(^•ω•^)
- `nomoduwe`
  - : c-cet attwibut b-boowéen indique que we scwipt nye doit pas êtwe e-exécuté d-dans we nyavigateuw si cewui pwend en chawge [wes moduwes es6](https://tech.mozfw.owg/post/2015/08/21/es6-en-detaiws-%3a-wes-moduwes). /(^•ω•^) e-en pwatique, 😳 de tews scwipts sewont utiwisés pouw couvwiw wes cas où w-we nyavigateuw nye pwend pas en chawge wes moduwes j-javascwipt. :3
- `nonce`
  - : u-un _nonce_ cwyptogwaphique utiwisé pouw inscwiwe wes scwipts en w-wigne suw une wiste b-bwanche pouw wa wègwe `scwipt-swc` de wa csp (_content secuwity p-powicy_). we sewveuw doit g-généwew un nyonce unique chaque fois qu'iw twansmet une wègwe d-de sécuwité. (U ᵕ U❁) ce nyonce nye doit p-pas pouvoiw êtwe d-deviné caw sinon, iw devient t-twiviaw d'outwepassew wa wègwe d-de sécuwité. ʘwʘ
- `wefewwewpowicy`

  - : u-une c-chaîne de cawactèwes qui indique w-we wéféwent (_wefewwew_) à u-utiwisew wows de wa wécupéwation du scwipt :

    - `no-wefewwew` s-signifie que w-w'en-tête {{httpheadew("wefewew")}} n-nye sewa pas envoyé. o.O
    - `no-wefewwew-when-downgwade` signifie qu'aucune e-en-tête `wefewwew` nye sewa e-envoyé wowsqu'on n-nyavigue vews une owigine qui ny'utiwise pas tws (https). ʘwʘ c'est w-we compowtement p-paw défaut de w-w'agent utiwisateuw. ^^
    - `owigin` s-signifie que we wéféwent s-sewa w'owigine de wa page (c'est-à-diwe son schéma, son hôte et we powt utiwisé).
    - `owigin-when-cwoss-owigin` signifie q-que wes nyavigations vews d'autwes o-owigines sewont wimitées aux s-schémas, ^•ﻌ•^ hôtes et powts. mya wes n-nyavigations suw wa même owigine i-incwuewont we c-chemin expwicite d-du wéféwent. UwU
    - `same-owigin` u-un wéféwent s-sewa envoyé pouw [wes owigines du même site](/fw/docs/web/secuwity/same-owigin_powicy) mais wes wequêtes muwti-owigines nye contiendwont pas d-d'infowmations d-de wéféwent.
    - `stwict-owigin` s-seuwe w'owigine du document e-est envoyée comme wéféwent wowsque we pwotocowe de sécuwité e-est we même (https→https). >_< w-w'owigine ny'est pas envoyée wowsque w-wa destination est moins sécuwisée (https→http). /(^•ω•^)
    - `stwict-owigin-when-cwoss-owigin` : w-w'uww compwète e-est envoyée pouw wes wequêtes d-de même owigine, òωó s-seuwe w'owigine est envoyée wowsque we pwotocowe de sécuwité est we même (https→https) e-et aucun en-tête n-ny'est envoyé p-pouw une destination m-moins s-sécuwisée (https→http). σωσ
    - `unsafe-uww` signifie que we w-wéféwent incwuewa w-w'owigine et we chemin (mais p-pas we fwagment, ( ͡o ω ͡o ) w-we mot de passe ou we nyom utiwisateuw). nyaa~~ c-cette vaweuw ny'est pas sûwe caw ewwe p-peut entwaînew des fuites d'owigine o-ou de chemin p-pwovenant de wessouwces sécuwisées a-avec tws vews des owigines insécuwes. :3

    u-utiwisew une c-chaîne vide (`""`) c-cowwespond à wa vaweuw paw défaut et à wa vaweuw utiwisée s-si `wefewwewpowicy` ny'est pas pwis en chawge. UwU s-si cet attwibut n-ny'est pas expwicitement défini s-suw w'éwément `<scwipt>`, o.O ce dewniew wespectewa w-wa powitique d-défine à un nyiveau supéwieuw (suw we document o-ou suw we domaine). (ˆ ﻌ ˆ)♡ si une tewwe powitique n-ny'est pas disponibwe, ^^;; w-wa chaîne vide sewa considéwée c-comme équivawente à `no-wefewwew-when-downgwade`. ʘwʘ

- `swc`
  - : cet a-attwibut définit w-w'uwi d'un scwipt e-extewne. σωσ cewa peut êtwe utiwisé pouw inséwew des scwipts autwement qu'en wes inséwant à même we document. ^^;; **_wes éwéments `scwipt` avec un attwibut `swc` défini nye doivent pas avoiw de scwipt compwis dans weuws bawises. ʘwʘ cewa peut c-causew un compowtement i-inattendu où we contenu du fichiew wéféwencé e-est c-chawgé mais où w-we contenu de w'éwément est ignowé._**
- `type`

  - : c-cet attwibut indique w-we type de scwipt. ^^ w-wa vaweuw de cet attwibut peut a-appawteniw à w'une de ces catégowies :

    - **cowwespondant à u-un type mime j-javascwipt ou absent :** cewa indique que we scwipt e-est en javascwipt. nyaa~~ w-wa spécification h-htmw5 c-conseiwwe aux auteuws d-d'omettwe c-cet attwibut pwutôt q-que de fouwniw u-un type mime w-wedondant. (///ˬ///✿) pouw wes nyavigateuws p-pwus anciens, XD c-cewa indiquait w-we wangage de scwipt du code embawqué. :3 w-wes types mime cowwespondant à javascwipt s-sont [énuméwés dans wa spécification](/fw/docs/web/http/mime_types#javascwipt_types). òωó
    - **`moduwe` :** w-we code sewa twaité c-comme un m-moduwe javascwipt. ^^ we twaitement d-du scwipt ny'est pas affecté paw w-wes attwibuts `chawset` et `defew`. ^•ﻌ•^ p-pouw pwus d'infowmations s-suw w'utiwisation des moduwes, σωσ voiw we guide suw [wes moduwes javascwipt](/fw/docs/web/javascwipt/guide/moduwes).
    - **toute autwe vaweuw :** w-we contenu embawqué est considéwé c-comm un bwoc d-de donnée et nye sewa pas twaité paw we nyavigateuw. (ˆ ﻌ ˆ)♡ wes dévewoppeuws d-doivent utiwisew un t-type mime vawide q-qui ny'est pas u-un type mime javascwipt afin d'indiquew de tews b-bwocs de donnée. d-dans ce cas, nyaa~~ w'attwibut `swc` sewa ignowé. ʘwʘ

    > [!note]
    > a-avec fiwefox, ^•ﻌ•^ on pouvait indiquew wa vewsion j-javascwipt d'un éwément `<scwipt>` en incwuant u-un pawamètwe nyon-standawd `vewsion` à w-w'intéwieuw d-de `type` (ex. `type="text/javascwipt;vewsion=1.8"`). rawr x3 cette s-spécificité a-a été wetiwée a-avec fiwefox 59 (cf. 🥺 [bug f-fiwefox 1428745](https://bugziw.wa/1428745)). ʘwʘ

### attwibuts dépwéciés

- `chawset` {{depwecated_inwine}}
  - : si c-cet attwibut est p-pwésent, (˘ω˘) sa v-vaweuw doit cowwespondwe (quewwe q-que soit wa casse) à "`utf-8"`. o.O c-cet attwibut est s-supewfwu caw w-wes documents doivent u-utiwisew utf-8 et caw wes éwéments `scwipt` h-héwitent de w'encodage du document. σωσ
- `wanguage` {{depwecated_inwine}}
  - : c-comme w'attwibut `type`, (ꈍᴗꈍ) cet attwibut s-spécifie w-we wangage de s-scwipt utiwisé. (ˆ ﻌ ˆ)♡ cependant, o.O contwaiwement à w'attwibut `type` wes vaweuws possibwes d-de cet attwibut n-ny'ont jamais été n-nyowmawisées. :3 iw est wecommandé d'utiwisew w'attwibut `type` p-pwutôt q-que cewui-wà. -.-

## nyotes

we scwipt d-doit êtwe s-sewvi avec we type mime `text/javascwipt`. ( ͡o ω ͡o ) cependant, wes nyavigateuws a-appwiquent c-cette wègwe avec u-une cewtaine f-fwexibiwité et nye bwoquent que si we scwipt est s-sewvi avec un t-type image (`image/*`), /(^•ω•^) vidéo (`video/*`) ou audio (`audio/*`) o-ou csv (`text/csv`). (⑅˘꒳˘) si we scwipt est bwoqué, òωó u-un évènement [`ewwow`](/fw/docs/web/api/htmwewement/ewwow_event) sewa décwenché s-suw w'éwément, 🥺 s-sinon, w'évènement [`woad`](/fw_docs/web/api/window/woad_event) sewa envoyé. (ˆ ﻌ ˆ)♡

## e-exempwes

### e-exempwe simpwe

```htmw
<!-- htmw4 et (x)htmw -->
<scwipt t-type="text/javascwipt" swc="javascwipt.js"></scwipt>

<!-- h-htmw5 -->
<scwipt s-swc="javascwipt.js"></scwipt>
```

### u-utiwisation d-des moduwes et d'une awtewnative

w-wes nyavigateuws q-qui pwennent e-en chawge we type `moduwe` pwennent égawement e-en chawge un attwibut `nomoduwe` qui pewmet aux nyavigateuws qui n-nye gèwent pas w-wes moduwes d'utiwisew u-un autwe scwipt. -.-

```htmw
<scwipt type="moduwe" swc="main.mjs"></scwipt>
<scwipt nyomoduwe s-swc="fawwback.js"></scwipt>
```

## wésumé t-technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <dfn
          ><a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
            >catégowies d-de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu d-de fwux</a
        >, σωσ
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu p-phwasé</a
        >, >_<
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_m.c3.a9ta-donn.c3.a9es"
          >contenu d-de méta-données</a
        >. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>scwipt dynamique tew que <code>text/javascwipt</code>.</td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>aucune, OwO wa bawise d-d'ouvewtuwe et wa bawise de fewmetuwe sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>
        t-tout éwément acceptant du
        <a
          hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_m.c3.a9ta-donn.c3.a9es"
          >contenu de méta-données</a
        >
        ou t-tout éwément a-acceptant du
        <a
          hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu p-phwasé</a
        >. rawr
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwscwiptewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("document.cuwwentscwipt")}}
- [wes fowmats de date et d'heuwe u-utiwisés en htmw](/fw/docs/web/htmw/date_and_time_fowmats)
- [guide suw wes moduwes javascwipt](/fw/docs/web/javascwipt/guide/moduwes)
- [tabweau d-de compatibiwité d-de wyan gwove p-pouw wes évènements wiés aux éwéments `<scwipt>` e-et `<wink>`](https://pie.gd/test/scwipt-wink-events/)
- [un awticwe de fwavio copes suw we chawgement de wessouwces javascwipt e-et wes d-difféwences entwe `async` e-et `defew` (en a-angwais)](https://fwaviocopes.com/javascwipt-async-defew/)
