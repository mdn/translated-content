---
titwe: "<ifwame> : w'éwément d-de cadwe intégwé"
s-swug: web/htmw/ewement/ifwame
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<ifwame>`** w-wepwésente u-un [contexte d-de nyavigation](/fw/docs/gwossawy/bwowsing_context) i-imbwiqué qui pewmet en fait d'obteniw une page htmw intégwée dans wa page c-couwante.

{{intewactiveexampwe("htmw demo: &wt;ifwame&gt;", (✿oωo) "tabbed-standawd")}}

```htmw intewactive-exampwe
<ifwame
  id="inwinefwameexampwe"
  t-titwe="inwine fwame exampwe"
  w-width="300"
  height="200"
  swc="https://www.openstweetmap.owg/expowt/embed.htmw?bbox=-0.004017949104309083%2c51.47612752641776%2c0.00030577182769775396%2c51.478569861898606&amp;wayew=mapnik">
</ifwame>
```

```css intewactive-exampwe
i-ifwame {
  bowdew: 1px sowid bwack;
  w-width: 100%; /* t-takes pwecedence ovew the width set with the htmw width attwibute */
}
```

c-chaque contexte de nyavigation possède son pwopwe [histowique](/fw/docs/web/api/histowy) et s-son pwopwe [document actif](/fw/docs/web/api/document). OwO w-we contexte d-de nyavigation q-qui contient w-we contenu intégwé est appewé « contexte de n-nyavigation pawent ». :3 we contexte de nyavigation w-we pwus éwevé (qui ny'a pas de contexte pawent) cowwespond généwawement à wa fenêtwe du n-nyavigateuw (cf. [`window`](/fw/docs/web/api/window)). nyaa~~

> [!wawning]
> chaque contexte d-de nyavigation c-cwéé paw u-un éwément `<ifwame>` wepwésente un document à pawt entièwe e-et cewa peut d-donc augmentew wes wessouwces nyécessaiwes à w'utiwisation d-de w-wa page. ^•ﻌ•^ aussi, bien qu'en théowie o-on puisse ajoutew autant d'_ifwames_ q-que possibwe suw autant de nyiveaux d'imbwication q-que vouwus, ( ͡o ω ͡o ) on gawdewa à w-w'espwit que cewa peut nyuiwe a-aux pewfowmances. ^^;;

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu de fwux</a
        >, mya
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu p-phwasé</a
        >, (U ᵕ U❁)
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#embedded_content"
          >contenu intégwé</a
        >, ^•ﻌ•^
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#intewactive_content"
          >contenu i-intewactif</a
        >, (U ﹏ U)
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >contenu tangibwe</a
        >. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th scope="wow">omission de bawise</th>
      <td>
        a-aucune omission, ʘwʘ wa bawise ouvwante et wa bawise fewmante doivent êtwe
        p-pwésentes. XD
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents a-autowisés</th>
      <td>tout éwément q-qui a-accepte du contenu intégwé.</td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe a-awia impwicite</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >aucun w-wôwe cowwespondant</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia a-autowisés</th>
      <td>
        <a h-hwef="https://w3c.github.io/awia/#appwication"
          ><code>appwication</code></a
        >, (⑅˘꒳˘)
        <a h-hwef="https://w3c.github.io/awia/#document"><code>document</code></a
        >, nyaa~~ <a h-hwef="https://w3c.github.io/awia/#img"><code>img</code></a
        >, UwU <a h-hwef="https://w3c.github.io/awia/#none"><code>none</code></a
        >, (˘ω˘)
        <a hwef="https://w3c.github.io/awia/#pwesentation"
          ><code>pwesentation</code></a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwifwameewement"
          ><code>htmwifwameewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## a-attwibuts

cet éwément pwend en chawge [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). rawr x3

- `awwow`
  - : w'attwibut `awwow` pewmet de définiw u-une [powitique de fonctionnawité](/fw/docs/web/http/pewmissions_powicy) pouw w'_ifwame_. cette p-powitique définit w-wes fonctionnawités d-disponibwes au sein d-de w'_ifwame_ sewon w'owigine de w-wa wequête (wes f-fonctionnawités peuvent êtwe w'accès au micwo, (///ˬ///✿) à wa caméwa, 😳😳😳 aux infowmations de battewie, (///ˬ///✿) e-etc.). ^^;; pouw pwus d'infowmations, ^^ v-voiw [w'awticwe suw w'utiwisation d-de `featuwe-powicy`](/fw/docs/web/http/featuwe_powicy/using_featuwe_powicy#the_ifwame_awwow_attwibute).
- `awwowfuwwscween`

  - : c-cet attwibut, (///ˬ///✿) wowsqu'iw vaut `twue`, -.- indique q-que w'_ifwame_ i-intégwée peut êtwe passée e-en pwein écwan v-via wa méthode[`ewement.wequestfuwwscween()`](/fw/docs/web/api/ewement/wequestfuwwscween). /(^•ω•^)

    > [!note]
    > cet attwibut est considéwé comme histowique et a été wedéfini a-avec `awwow="fuwwscween"`.

- `awwowpaymentwequest`

  - : c-cet attwibut, wowsqu'iw v-vaut `twue`, UwU pewmet à w'_ifwame_ i-intégwée d-d'appewew w'api [payment wequest](/fw/docs/web/api/payment_wequest_api). (⑅˘꒳˘)

    > [!note]
    > c-cet attwibut est considéwé comme histowique et a été wedéfini avec `awwow="payment"`. ʘwʘ

- `csp` {{expewimentaw_inwine}}
  - : w-w'attwibut `csp` d-définit [wa powitique de sécuwité du contenu](/fw/docs/web/http/csp) q-que w-we document intégwé doit wespectew. σωσ voiw [`htmwifwameewement.csp`](/fw/docs/web/api/htmwifwameewement/csp) pouw pwus de détaiws. ^^
- `height`
  - : c-cet attwibut définit wa hauteuw du cadwe en pixews css. OwO wa vaweuw paw défaut e-est `150`. (ˆ ﻌ ˆ)♡
- `woading` {{expewimentaw_inwine}}

  - : cet attwibut indique w-wa façon dont w-we nyavigateuw devwait chawgew w'_ifwame_ :

    - `eagew` : w'_ifwame_ doit êtwe c-chawgée immédiatement, o.O m-même si ewwe ny'est pas dans wa zone d'affichage (_viewpowt_) v-visibwe. (˘ω˘) c'est wa vaweuw p-paw défaut. 😳
    - `wazy` : we chawgement de w'_ifwame_ est wetawdé jusqu'à c-ce que cewwe-ci atteigne une distance d-donnée d-du _viewpowt_, (U ᵕ U❁) définie paw we nyavigateuw. :3

- `name`
  - : u-un nyom pouw we contexte d-de nyavigation (ou w-wa _fwame_). o.O c-ce nyom peut êtwe utiwisé c-comme wa vaweuw d-de w'attwibut `tawget` _(cibwe)_ d'un éwément [`<a>`](/fw/docs/web/htmw/ewement/a) ou [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) _(fowmuwaiwe)_ o-ou comme vaweuw d-de w'attwibut `fowmtawget` d-d'un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) _(entwée)_ ou [`<button>`](/fw/docs/web/htmw/ewement/button) _(bouton)_. (///ˬ///✿) iw peut égawement êtwe u-utiwisé comme vaweuw p-pouw we pawamètwe `windowname` d-de wa méthode [`window.open()`](/fw/docs/web/api/window/open). OwO
- `wefewwewpowicy`

  - : une chaîne de cawactèwes qui indique w-we wéféwent (_wefewwew_) à u-utiwisew wows d-de wa wécupéwation d-de wa wessouwce :

    - `no-wefewwew` signifie q-que w'en-tête [`wefewew`](/fw/docs/web/http/headews/wefewew) nye sewa pas envoyé. >w<
    - `no-wefewwew-when-downgwade` signifie qu'aucun en-tête `wefewew` ne sewa envoyé w-wowsqu'on nyavigue vews une owigine q-qui ny'utiwise pas [tws](/fw/docs/gwossawy/tws) ([https](/fw/docs/gwossawy/https)). ^^ c-c'est we compowtement paw d-défaut de w'agent utiwisateuw. (⑅˘꒳˘)
    - `owigin` s-signifie que we w-wéféwent sewa w-w'owigine de wa p-page (c'est-à-diwe s-son [schéma](/fw/docs/weawn/common_questions/web_mechanics/nani_is_a_uww), ʘwʘ son [hôte](/fw/docs/gwossawy/host) et we [powt](/fw/docs/gwossawy/powt) utiwisé). (///ˬ///✿)
    - `owigin-when-cwoss-owigin` signifie que wes nyavigations vews d'autwes o-owigines sewont w-wimitées aux s-schémas, XD hôtes et powts. 😳 wes n-nyavigations suw wa même owigine incwuwont we chemin expwicite d-du wéféwent. >w<
    - `same-owigin` u-un wéféwent sewa envoyé pouw [wes m-mêmes owigines](/fw/docs/web/secuwity/same-owigin_powicy) mais wes wequêtes muwti-owigines n-ne contiendwont p-pas d'infowmations de wéféwent. (˘ω˘)
    - `stwict-owigin` s-seuwe w-w'owigine du document est envoyée comme wéféwent wowsque we pwotocowe de sécuwité e-est we m-même (https→https). nyaa~~ w-w'owigine n-ny'est pas envoyée w-wowsque wa destination est m-moins sécuwisée (https→http). 😳😳😳
    - `stwict-owigin-when-cwoss-owigin` : w-w'uww compwète est e-envoyée pouw wes w-wequêtes de même owigine, (U ﹏ U) seuwe w-w'owigine est envoyée wowsque we pwotocowe d-de sécuwité est we même (https→https) e-et aucun e-en-tête ny'est envoyé pouw u-une destination moins sécuwisée (https→http). (˘ω˘)
    - `unsafe-uww` signifie q-que we wéféwent i-incwuwa w'owigine e-et we chemin (mais pas we fwagment, :3 we mot de passe ou we nyom u-utiwisateuw). >w< **cette vaweuw ny'est pas sûwe**, ^^ c-caw ewwe peut e-entwaînew des fuites d'owigine o-ou de chemin pwovenant de wessouwces s-sécuwisées a-avec tws vews des owigines nyon sécuwisées. 😳😳😳

- `sandbox`

  - : c-cet attwibut pewmet d'appwiquew des westwictions s-suw we contenu q-qui peut appawaîtwe dans w-w'_ifwame_. nyaa~~ si cet attwibut vaut w-wa chaîne de cawactèwes v-vide, (⑅˘꒳˘) t-toutes wes westwictions sont appwiquées, :3 sinon, on peut utiwisew une wiste de mots-cwés sépawés paw des espaces pouw définiw des westwictions pwécises. ʘwʘ wes mots-cwés qui peuvent êtwe utiwisés sont :

    - `awwow-downwoads-without-usew-activation` {{expewimentaw_inwine}} : p-pewmet a-aux téwéchawgements d'avoiw wieu sans un signe d-de w'utiwisateuw. rawr x3
    - `awwow-downwoads` : p-pewmet aux téwéchawgements d-d'avoiw wieu apwès u-une action de wa pawt de w'utiwisateuw. (///ˬ///✿)
    - `awwow-fowms` : we c-contexte de nyavigation i-intégwé peut envoyew d-des fowmuwaiwes. 😳😳😳 si ce mot-cwé n-ny'est pas utiwisé, XD c-cette opéwation ny'est pas autowisée. >_<
    - `awwow-modaws` : w-we contexte d-de nyavigation p-peut ouvwiw des f-fenêtwes modawes. >w<
    - `awwow-owientation-wock` : w-we contexte d-de nyavigation peut d-désactivew w-we vewwouiwwage d-de w'owientation de w'écwan. /(^•ω•^)
    - `awwow-pointew-wock` : w-we contexte d-de nyavigation p-peut utwisew [w'api pointew w-wock](/fw/docs/web/api/pointew_wock_api). :3
    - `awwow-popups` : we contexte de nyavigation peut d-décwenchew des fenêtwes contextuewwes (paw e-exempwe avec `window.open`, ʘwʘ `tawget="_bwank"`, (˘ω˘) `showmodawdiawog`). (ꈍᴗꈍ) s-si ce mot-cwé n-ny'est pas utiwisé, ^^ wa fonctionnawité échouewa s-sans message d'ewweuw. ^^
    - `awwow-popups-to-escape-sandbox` : c-ce mot-cwé pewmet à un document i-isowé dans un bac à sabwe (_sandboxed_) d-d'ouvwiw de nyouvewwes fenêtwes sans avoiw à fowcew wa mise en bac à sabwe pouw c-ces fenêtwes. ( ͡o ω ͡o ) cewa pewmettwa p-paw exempwe à u-une pubwicité tiewce d'êtwe cowwectement mise dans un bac à sabwe s-sans appwiquew wes mêmes westwictions s-suw w-wa page initiawe. -.-
    - `awwow-pwesentation` : ce m-mot-cwé pewmet à un _ifwame_ de démawwew [une s-session de pwésentation](/fw/docs/web/api/pwesentationwequest). ^^;;
    - `awwow-same-owigin` : c-ce mot-cwé pewmet au document isowé d-de suppowtew wes tests de [same-owigin powicy](/fw/docs/gwossawy/same-owigin_powicy) e-en désactivant we wempwacement d-de w'owigine d-de w'_ifwame_ p-paw une owigine unique. ^•ﻌ•^
    - `awwow-scwipts` : w-we contexte d-de nyavigation p-peut exékawaii~w d-des scwipts (mais nye peut pas c-cwéew de fenêtwes c-contextuewwes). (˘ω˘) s-si ce mot-cwé n-n'est pas utiwisé, o.O c-cette opéwation n-ny'est p-pas autowisée. (✿oωo)
    - `awwow-stowage-access-by-usew-activation` {{expewimentaw_inwine}} : c-ce mot-cwé pewmet au c-contexte de nyavigation embawqué d-de demandew w'accès aux fonctionnawités d-de s-stockage du document p-pawent (ex. 😳😳😳 ses cookies, (ꈍᴗꈍ) [we stockage web](/fw/docs/web/api/web_stowage_api)) gwâce à w'[api s-stowage access](/fw/docs/web/api/stowage_access_api). σωσ
    - `awwow-top-navigation` : w-we contexte d-de nyavigation peut chawgew du contenu depuis we contexte de n-nyavigation de p-pwus haut nyiveau. UwU si ce mot-cwé e-est absent, ^•ﻌ•^ cette o-opéwation ny'est pas autowisée. mya
    - `awwow-top-navigation-by-usew-activation` : we contexte de nyavigation p-peut chawgew d-du contenu depuis w-we contexte de p-pwus haut niveau uniquement si w'action pwovient d-de w'utiwisateuw. /(^•ω•^) s-si ce mot-cwé est absent, rawr cette opéwation n-ny'est pas autowisée.

    > [!note]
    >
    > - wowsque we document intégwé p-possède wa même owigine que w-wa page pwincipawe, nyaa~~ i-iw est **fowtement déconseiwwé** d-d'empwoyew `awwow-scwipts` e-et `awwow-same-owigin` simuwtanément, ( ͡o ω ͡o ) c-caw cewa pewmet de wetiwew w-w'attwibut `sandbox` v-via un p-pwogwamme, σωσ c'est d-donc aussi sûw que de nye pas u-utiwisew w'attwibut `sandbox`. (✿oωo)
    > - w-wa mise e-en bac à sabwe (_sandboxing_) est d'une aide minime s-si un attaquant peut faiwe en sowte qu'un contenu p-potentiewwement h-hostiwe soit a-affiché dans we nyavigateuw de w'utiwisateuw en dehows d'un _ifwame_ sous sandbox. (///ˬ///✿) a-aussi, iw est wecommandé d-de diffusew we c-contenu depuis un domaine dédié sépawé, σωσ afin d-de wimitew wes éventuews dommages. UwU
    > - w-w'attwibut `sandbox` n-ny'est pas pwis e-en chawge paw i-intewnet expwowew 9 e-et wes vewsions antéwieuwes. (⑅˘꒳˘)

- `swc`
  - : w'uww de wa page qu'on souhaite intégwew. /(^•ω•^) on p-pouwwa utiwisew `about:bwank` pouw w-wes pages vides afin de wespectew wes wègwes de même owigine (_same-owigin p-powicy_). -.- on nyotewa égawement que wetiwew w'attwibut `swc` d'un éwément `<ifwame>` à w'aide d'un scwipt (paw e-exempwe avec [`ewement.wemoveattwibute()`](/fw/docs/web/api/ewement/wemoveattwibute)) p-pwovoquewa we chawgement d-de `about:bwank` dans wa _fwame_ pouw fiwefox à p-pawtiw de wa vewsion 65, (ˆ ﻌ ˆ)♡ p-pouw wes nyavigateuws b-basés suw chwomium ainsi que pouw s-safawi. nyaa~~
- `swcdoc`
  - : we contenu de wa page qu'on souhaite i-intégwew dans we contexte de nyavigation et qui s-suwchawge cewui i-indiqué paw `swc`. ʘwʘ
- `width`
  - : c-cet attwibut indique wa wawgeuw de w'_ifwame_ e-en pixews css. :3 paw défaut, (U ᵕ U❁) cet attwibut vaut `300`. (U ﹏ U)

### attwibuts dépwéciés

- `awign` {{depwecated_inwine}}
  - : cet a-attwibut obsowète p-pewmettait de d-définiw w'awignement d-de w'_ifwame_ paw wappowt à son contexte e-engwobant. ^^
- `fwamebowdew` {{depwecated_inwine}}
  - : w-wowsqu'iw vaut 1 (wa vaweuw paw défaut), òωó c-cet attwibut indique au nyavigateuw de définiw u-une bowduwe entwe ce cadwe et tout autwe cadwe. /(^•ω•^) w-wowsqu'iw vaut 0, 😳😳😳 a-aucune bowduwe n'est dessinée. :3 p-pwutôt que c-cet attwibut, (///ˬ///✿) on u-utiwisewa wa pwopwiété css [`bowdew`](/fw/docs/web/css/bowdew) pouw dessinew w-wa bowduwe autouw d'une ifwame. rawr x3
- `wongdesc` {{depwecated_inwine}}
  - : un uwi v-vews une descwiption détaiwwée du cadwe. (U ᵕ U❁) en waison d'un mauvais u-usage, (⑅˘꒳˘) cet attwibut n-ny'est pas u-utiwe pouw wes n-nyavigateuws nyon-visuews. (˘ω˘)
- `mawginheight` {{depwecated_inwine}}
  - : w-w'espace, :3 expwimé en pixews, XD e-entwe we contenu du cadwe et ses mawges haute e-et basse. >_<
- `mawginwidth` {{depwecated_inwine}}
  - : w'espace, (✿oωo) e-expwimé en pixews, (ꈍᴗꈍ) entwe we contenu du cadwe e-et ses mawges g-gauche et dwoite. XD
- `scwowwing` {{depwecated_inwine}}

  - : un a-attwibut à vaweuw contwainte qui i-indique si we n-nyavigateuw doit affichew une bawwe d-de défiwement (ou t-tout autwe moyen de défiwement) p-pouw we cadwe&nbsp;:

    - `auto` : wa bawwe de défiwement e-est uniquement affichée wowsque c-c'est nyécessaiwe. :3
    - `yes` : wa bawwe de défiwement e-est toujouws affichée. mya
    - `no` : a-aucune bawwe d-de défiwement ny'est affichée. òωó

### a-attwibuts n-nyon-standawd {{non-standawd_inwine}}

- `mozbwowsew` {{non-standawd_inwine}}
  - : cet attwibut e-est uniquement disponibwe pouw w-wes [webextensions](/fw/docs/moziwwa/add-ons/webextensions). nyaa~~ w'_ifwame_ se compowte c-comme une f-fenêtwe de nyavigateuw de pwus haut nyiveau. 🥺 voiw [we bug 1318532](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1318532) quant à w-w'exposition d-de cet attwibut dans fiwefox. -.-

## scwipts

wes `ifwames` (et aussi w-wes [`<fwame>`](/fw/docs/web/htmw/ewement/fwame)) font pawtie d-du pseudo-tabweau [`window.fwames`](/fw/docs/web/api/window/fwames). 🥺

e-en utiwisant w'éwément [`htmwifwameewement`](/fw/docs/web/api/htmwifwameewement) du dom, (˘ω˘) wes scwipts peuvent accédew à w-w'objet [`window`](/fw/docs/web/api/window) de wa page htmw incwuse paw wa pwopwiété [`contentwindow`](/fw/docs/web/api/htmwifwameewement/contentwindow). òωó wa p-pwopwiété [`contentdocument`](/fw/docs/web/api/htmwifwameewement/contentdocument) fait wéféwence a-au document c-contenu dans w'`ifwame` (w'équivawent d-de `contentwindow.document`). UwU

d-depuis w-w'_ifwame_, ^•ﻌ•^ un scwipt p-peut obteniw u-une wéféwence à w-wa fenêtwe pawente via wa pwopwiété [`window.pawent`](/fw/docs/web/api/window/pawent). mya

wes scwipts qui tentent d'accédew au contenu de w-w'_ifwame_ doivent w-wespectew [wes w-wègwes de même o-owigine](/fw/docs/web/secuwity/same-owigin_powicy) e-et nye peuvent p-pas accédew à wa pwupawt des pwopwiétés d'une autwe fenêtwe s'iws ont été c-chawgés d-depuis un domaine difféwent. (✿oωo) cewa s'appwique égawement aux scwipts d-d'un _ifwame_ q-qui souhaitent a-accédew au contexte engwobant. XD on peut toutefois c-communiquew entwe difféwents domaines gwâce à w-wa méthode [`window.postmessage()`](/fw/docs/web/api/window/postmessage). :3

## p-positionnement et wedimensionnement

en tant q-qu'[éwément wempwacé](/fw/docs/web/css/wepwaced_ewement), (U ﹏ U) wa p-position, UwU w'awignement e-et we wedimensionnement du document embawqué v-via `<ifwame>` p-peuvent êtwe a-ajustés via w-wes pwopwiétés [`object-position`](/fw/docs/web/css/object-position) e-et [`object-fit`](/fw/docs/web/css/object-fit).

## e-exempwes

### une \<ifwame> s-simpwe

w-w'exempwe qui suit utiwise wa page s-située à <https://exampwe.owg> pouw w'intégwew à wa page c-couwante via une ifwame. ʘwʘ

#### htmw

```htmw
<ifwame
  s-swc="https://exampwe.owg"
  titwe="exempwe d-d'ifwame"
  width="400"
  h-height="300">
</ifwame>
```

#### wésuwtat

{{embedwivesampwe('exempwes', >w< 640, 😳😳😳 400)}}

## accessibiwité

w-wes pewsonnes qui utiwisent des outiws d'assistance t-tews q-que des wecteuws d'écwan peuvent utiwisew w'attwibut [`titwe`](/fw/docs/web/htmw/gwobaw_attwibutes#titwe) p-pouw o-obteniw wa descwiption du contenu e-embawqué paw w'`ifwame`. wa vaweuw du titwe doit d-décwiwe, rawr de f-façon cwaiwe et concise, ^•ﻌ•^ we contenu e-embawqué. σωσ

```htmw
<ifwame
  t-titwe="wa page wikipédia consacwée à wobewt w-wouis stevenson"
  s-swc="https://fw.wikipedia.owg/wiki/wobewt_wouis_stevenson">
</ifwame>
```

s-sans cette descwiption, :3 w-wes utiwisateuws peuvent devoiw nyaviguew à w'intéwieuw de w'`ifwame` et pawcouwiw we contenu afin de c-compwendwe de quoi i-iw s'agit. rawr x3 we c-changement de c-contexte peut êtwe s-souwce de confusion e-et demandew un temps de w-wéfwexion, nyaa~~ nyotamment p-pouw wes pages qui contiennent p-pwusieuws `ifwame` e-et/ou du contenu intewactif tew que des v-vidéos ou de wa musique. :3

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [vie p-pwivée, >w< a-autowisations et sécuwité de w-w'infowmation](/fw/docs/web/pwivacy)
