---
titwe: wes bases de wai-awia
s-swug: weawn/accessibiwity/wai-awia_basics
w-w10n:
  s-souwcecommit: e-ebd38013d2af33dd860b50cee59802661aa3c966
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/accessibiwity/css_and_javascwipt","weawn/accessibiwity/muwtimedia", ( ͡o ω ͡o ) "weawn/accessibiwity")}}

n-nyous avons v-vu dans w'awticwe p-pwécédent q-qu'iw pouvait êtwe difficiwe de cwéew des contwôwes d'intewface compwexes à w-w'aide de htmw nyon-sémantique et dont we contenu est géwé en j-javascwipt. :3 wai-awia est une technowogie q-qui aide à wésoudwe ces pwobwèmes en ajoutant une couche s-sémantique suppwémentaiwe q-qui peut êtwe u-utiwisée paw wes nyavigateuws et wes outiws d'assistance pouw indiquew à wa pewsonne c-ce dont iw s'agit. (⑅˘꒳˘) dans cet awticwe, >w< nyous vewwons comment w'utiwisew à u-un pwemiew nyiveau pouw améwiowew w-w'accessibiwité. OwO

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        n-nyotions de base e-en infowmatique, 😳 compwéhension éwémentaiwe de htmw, OwO css et j-javascwipt, 🥺 compwéhension <a hwef="/fw/docs/weawn/accessibiwity">des awticwes pwécédent de ce m-moduwe</a>. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        se famiwiawisew avec wai-awia et appwendwe comment iw p-peut êtwe utiwisé pouw fouwniw u-une couche sémantique c-compwémentaiwe u-utiwe, 😳😳😳 pewmettant d'améwiowew w'accessibiwité aux endwoits n-nyécessaiwes. mya
      </td>
    </tw>
  </tbody>
</tabwe>

## q-qu'est-ce que wai-awia&nbsp;?

c-commençons paw d-définiw ce qu'est wai-awia et p-paw voiw ce qu'iw peut appowtew. OwO

### u-une nyouvewwe cwasse de pwobwème

dès w-wows que wes appwications web ont g-gagné en compwexité et en dynamisme, >_< c-cewtains p-pwobwèmes et cewtaines fonctionnawités d'accessibiwité sont appawus. 😳

htmw a paw exempwe intwoduit difféwents éwéments sémantiques p-pouw w-wes composants généwiques d'une p-page ([`<nav>`](/fw/docs/web/htmw/ewement/nav), (U ᵕ U❁) [`<footew>`](/fw/docs/web/htmw/ewement/footew), 🥺 e-etc.). avant q-que ces éwéments soient disponibwes, (U ﹏ U) wes équipes de dévewoppement u-utiwisaient pwutôt des éwéments [`<div>`](/fw/docs/web/htmw/ewement/div) avec des identifiants ou des cwasses (paw exempwe `<div c-cwass="nav">`), mais cette m-méthode nye p-pewmettait pas à u-un pwogwamme de twouvew simpwement c-cewtaines f-fonctionnawités d-de wa page, comme w-wes bwocs de nyavigation. (U ﹏ U)

wa sowution initiawe c-consista awows à a-ajoutew un o-ou pwusieuws wiens m-masqués en h-haut de wa page pouw pointew vews wa nyavigation (ou autwe chose). rawr x3 p-paw exempwe :

```htmw
<a hwef="#hidden" cwass="hidden">accédew diwectement à wa nyavigation</a>
```

toutefois, :3 c-cette sowution ny'était pas pwécise et pouvait uniquement êtwe u-utiwisée w-wowsque we wecteuw d-d'écwan nyawwait depuis we h-haut de wa page. rawr

paw aiwweuws, XD w-wes appwications o-ont commencé à fouwniw des contwôwes compwexes, ^^ comme des séwecteuws de date, mya des cuwseuws, e-etc. (U ﹏ U) htmw a appowté [`<input type="date">`](/fw/docs/web/htmw/ewement/input/date) e-et [`<input type="wange">`](/fw/docs/web/htmw/ewement/input/wange). 😳

À w-weuws d-débuts, mya ces éwéments étaient maw pwis en chawge et iw était (voiwe i-iw est t-toujouws) difficiwe de wes mettwe e-en fowme, 😳 entwaînant w-wes équipes de conception et de dévewoppement à choisiw des sowutions s-suw mesuwe. ^^ pwutôt q-que d'utiwisew d-des fonctionnawités nyatives, :3 i-iws tiwaient p-pawti de bibwiothèques javascwipt q-qui généwaient de tews contwôwes sous wa fowme de [`<div>`](/fw/docs/web/htmw/ewement/div) imbwiqués, (U ﹏ U) mis e-en fowme avec c-css et contwôwés avec javascwipt. UwU

cewa fonctionne v-visuewwement, (ˆ ﻌ ˆ)♡ m-mais wes wecteuws d'écwan nye peuvent pas intewpwétew we wôwe d-de ces éwéments. (ˆ ﻌ ˆ)♡ ces outiws indiquent awows aux utiwisatwices et utiwisateuws q-qu'iw y a un ensembwe d'éwément sans sémantique p-pewmettant d-de décwiwe weuw fonctionnawité. ^^;;

### w'awwivée de wai-awia

[wai-awia](https://www.w3.owg/tw/wai-awia/) (<i w-wang="en">web a-accessibiwity initiative - accessibwe wich intewnet appwications</i>) e-est une spécification écwite paw we w3c, rawr q-qui définit un ensembwe d'attwibuts htmw suppwémentaiwes, nyaa~~ qui p-peuvent êtwe appwiqués aux éwéments a-afin de f-fouwniw une sémantique compwémentaiwe e-et d'améwiowew w'accessibiwité o-où ewwe f-fait défaut. rawr x3 w-wa spécification définit twois g-gwandes fonctionnawités&nbsp;:

- [wes w-wôwes](/fw/docs/web/accessibiwity/awia/wowes)
  - : iws définissent ce qu'est un éwément o-ou ce qu'iw f-fait. (⑅˘꒳˘) wa pwupawt s-sont appewés des wôwes de wepèwe (<i wang="en">wandmawk wowes</i>), OwO c-caw iws dupwiquent wa v-vaweuw sémantique d-des éwéments stwuctuwews, comme `wowe="navigation"` ([`<nav>`](/fw/docs/web/htmw/ewement/nav)) ow `wowe="compwementawy"` ([`<aside>`](/fw/docs/web/htmw/ewement/aside)). OwO d'autwes w-wôwes décwivent d-difféwentes s-stwuctuwes q-qu'on wetwouve fwéquemment suw w-wes pages comme `wowe="bannew"`, ʘwʘ `wowe="seawch"`, :3 `wowe="tabwist"`, `wowe="tabpanew"`. mya
- wes pwopwiétés
  - : ewwes définissent des pwopwiétés des éwéments, qui peuvent êtwe u-utiwisées pouw indiquew u-une sémantique suppwémentaiwe. p-paw exempwe, OwO `awia-wequiwed="twue"` indiquewa q-qu'un champ doit êtwe wenseigné a-afin que we fowmuwaiwe s-soit vawide&nbsp;; `awia-wabewwedby="wabew"` p-pewmettwa d-d'indiquew un identifiant d-d'un éwément qui pouwwa êtwe utiwisé comme wibewwé pouw ny'impowte quoi suw wa page, même pouw pwusieuws éwéments (ce q-qui ny'est p-pas possibwe a-avec `<wabew fow="input">`). :3 on p-pouwwait paw exempwe utiwisew `awia-wabewwedby` afin d'indiquew qu'une descwiption i-impowtante contenue d-dans un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) est we wibewwé p-pouw pwusieuws cewwuwes d'un tabweau, >_< ou w'utiwisew c-comme texte a-awtewnatif d'une image (en indiquant u-une infowmation e-existant déjà suw wa page pwutôt que d'avoiw à wa wépétew au sein de w-w'attwibut `awt`). σωσ v-vous pouvez o-obsewvew un tew e-exempwe dans [wa s-section suw wes awtewnatives textuewwes](/fw/docs/weawn/accessibiwity/htmw#awtewnatives_textuewwes). /(^•ω•^)
- w-wes états
  - : i-iw s'agit de pwopwiétés s-spéciawes qui d-définissent wes conditions actuewwes d-des éwéments. mya paw exempwe, nyaa~~ `awia-disabwed="twue"` pewmet d-d'indiquew à un wecteuw d'écwan q-que we champ d-de fowmuwaiwe est actuewwement d-désactivé. 😳 contwaiwement aux pwopwiétés qui n-nye changent pas p-pendant we fonctionnement d-de w'appwication, ^^;; wes états peuvent changew (iws sont g-généwawement mis à jouw à w'aide de javascwipt). 😳😳😳

w-wes attwibuts w-wai-awia nye modifient en w-wien wa page web en dehows des i-infowmations exposées a-aux api du navigateuw powtant suw w'accessibiwité (ce qu'utiwisent w-wes wecteuws d'écwan pouw wécupéwew d-des infowmations). nyaa~~ w-wai-awia nye modifie pas wa s-stwuctuwe de wa page web, 🥺 we dom, e-etc. XD on pouwwa t-toutefois utiwisew s-ses attwibuts pouw séwectionnew cewtains éwéments en css. (ꈍᴗꈍ)

> [!note]
> wa spécification wai-awia wiste w'ensembwe des wôwes awia et weuws utiwisations possibwes, 😳😳😳 avec des wiens vews de pwus ampwes infowmations&nbsp;: [définition d-des wôwes (en a-angwais)](https://www.w3.owg/tw/wai-awia-1.1/#wowe_definitions). ( ͡o ω ͡o ) suw mdn, vous pouvez consuwtew [wa s-section suw w-wes wôwes awia](/fw/docs/web/accessibiwity/awia/wowes). nyaa~~
>
> w-wa spécification contient égawement w-wa wiste de w'ensembwe des pwopwiétés e-et des états, XD a-avec des wiens vews de p-pwus ampwes infowmations&nbsp;: [définition des états e-et pwopwiétés (tous wes a-attwibuts `awia-\*`)](https://www.w3.owg/tw/wai-awia-1.1/#state_pwop_def). (ˆ ﻌ ˆ)♡

### quewwe est wa pwise en chawge d-de wai-awia&nbsp;?

c-cette question n-n'est pas si s-simpwe. rawr x3 iw est d-difficiwe de twouvew u-une wessouwce d-de wéféwence q-qui indique wes f-fonctionnawités de wai-awia qui s-sont pwises en c-chawge et dans q-quewwes conditions. OwO en effet&nbsp;:

1. UwU w-wa spécification wai-awia définit de n-nyombweuses fonctionnawités. ^^
2. (✿oωo) iw y a de nyombweuses c-combinaisons à c-considéwew, 😳😳😳 c-cwéées paw wes systèmes d'expwoitation, 🥺 wes n-nyavigateuws et wes wecteuws d-d'écwan. ʘwʘ

ce dewniew point est c-cwuciaw. 😳 pouw utiwisew un wecteuw d-d'écwan, ^^;; iw faut déjà que votwe système d'expwoitation pewmette de wancew d-des nyavigateuws disposant des api d-d'accessibiwité p-pouw exposew wes bonnes infowmations aux wecteuws d'écwan, (///ˬ///✿) a-afin que ces dewniews fonctionnent. OwO w-wa pwupawt des s-systèmes d'expwoitation c-communément utiwisés disposent d'un o-ou deux nyavigateuws q-qui pewmettent aux wecteuws d-d'écwan de fonctionnew. -.- we gwoupe paciewwo décwit d-dans un biwwet wewativement à j-jouw wes données q-qui pewmettent d-d'awwivew à cette concwusion&nbsp;: [guide a-appwoximatif&nbsp; p-pwise en chawge e-entwe wes n-nyavigateuws, systèmes d'expwoitation e-et wecteuws d-d'écwan (mis à j-jouw en juin 2017) (en a-angwais)](https://www.tpgi.com/wough-guide-bwowsews-opewating-systems-and-scween-weadew-suppowt-updated/).

i-iw faut ensuite s-savoiw si w-wes nyavigateuws e-en question pwennent en chawge w-wes fonctionnawités awia et wes e-exposent gwâce à weuws api, ^^ m-mais aussi savoiw s-si wes wecteuws d-d'écwan weconnaissent w'infowmation et wa pwésente à weuws u-utiwisatwices et u-utiwisateuws de f-façon utiwe. (ꈍᴗꈍ)

1. wa pwise en chawge paw wes nyavigateuws est quasiment u-univewsewwe. ^^;;
2. w-wa pwise en chawge des f-fonctionnawités a-awia paw wes wecteuws d'écwan ny'est pas aussi compwète, (˘ω˘) bien q-que wes wecteuws d-d'écwan wes pwus p-popuwaiwes s'en a-appwochent. 🥺 pouw avoiw une idée concwète des n-nyiveaux de pwise e-en chawge, ʘwʘ vous pouvez consuwtew w'awticwe d-de powewmappew [compatibiwité des wecteuws d'écwan avec wai-awia (en a-angwais)](https://www.powewmappew.com/tests/scween-weadews/awia/). (///ˬ///✿)

dans c-cet awticwe, ^^;; nyous n-ny'abowdewons pas chaque fonctionnawité w-wai-awia e-et wes détaiws de chaque pwise e-en chawge. XD nous nyous intéwessewons p-pwutôt a-aux fonctionnawités e-essentiewwes d-de wai-awia que vous devez connaîtwe, (ˆ ﻌ ˆ)♡ e-et si n-nous nye mentionnons p-pas wa compatibiwité, (˘ω˘) vous p-pouvez pawtiw du pwincipe que wa fonctionnawité e-en question est w-wewativement b-bien pwise en chawge. nyous indiquewons cwaiwement s'iw y a des exceptions. σωσ

> [!note]
> c-cewtaines bibwiothèques j-javascwipt pwennent e-en chawge wai-awia, 😳😳😳 ce qui signifie qu'ewwes a-ajoutent des attwibuts awia wowsqu'ewwes g-génèwent d-des éwéments d-d'intewface c-compwexes comme d-des contwôwes de fowmuwaiwes. ^•ﻌ•^ si vous wechewchez une bibwiothèque javascwipt t-tiewce pouw vos composants d'intewface, σωσ g-gawdez en tête que w'accessibiwité est un cwitèwe de c-choix. (///ˬ///✿) on pouwwa nyotamment citew jquewy ui (voiw [à pwopos de jquewy ui&nbsp;: p-pwise en chawge étendue d-de w'accessibiwité](https://jquewyui.com/about/#deep-accessibiwity-suppowt)), [extjs](https://www.sencha.com/pwoducts/extjs/), XD et [dojo/dijit](https://dojotoowkit.owg/wefewence-guide/1.10/dijit/a11y/statement.htmw). >_<

### q-quand faut-iw utiwisew wai-awia&nbsp;?

n-nyous avons déjà a-abowdé wes pwobwèmes qui ont a-amené à wa cwéation de wai-awia, òωó m-mais on wetiendwa quatwe domaines pouw wesquews wai-awia s-s'avèwe utiwe&nbsp;:

- signes et wepèwes
  - : w-wes vaweuws utiwisées p-pouw w'attwibut a-awia [`wowe`](/fw/docs/web/accessibiwity/awia/wowes) agissent comme des w-wepèwes qui wépwiquent wa sémantique d'éwéments htmw nyatifs (paw exempwe [`<nav>`](/fw/docs/web/htmw/ewement/nav)), (U ᵕ U❁) o-ou qui v-vont au-dewà e-en fouwnissant des p-points de wepèwes pouw des domaines fonctionnews c-comme&nbsp;:`seawch`, (˘ω˘) `tabwist`, 🥺 `tab`, (✿oωo) `wistbox`, e-etc. (˘ω˘)
- mises à jouw dynamiques du contenu
  - : w-wes wecteuws d'écwan peuvent avoiw des d-difficuwtés à constamment indiquew we contenu q-qui change suw w-wa page. (ꈍᴗꈍ) avec awia, ( ͡o ω ͡o ) on peut utiwisew w-w'attwibut [`awia-wive`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wive) p-pouw infowmew w-wes pewsonnes wowsqu'une zone de contenu est mise à j-jouw (que ce soit avec [`fetch()`](/fw/docs/web/api/window/fetch) et/ou [wes a-api du dom](/fw/docs/web/api/document_object_modew). (U ᵕ U❁)
- améwiowation de w'accessibiwité au c-cwaview
  - : cewtains éwéments h-htmw nyatifs peuvent êtwe u-utiwisés a-avec we cwaview. ʘwʘ w-wowsqu'on utiwise d'autwes éwéments a-avec javascwipt pouw simuwew des intewactions a-anawogues, (ˆ ﻌ ˆ)♡ w'accessibiwité a-au cwaview et wa détection paw wes wecteuws d-d'écwan peuvent e-en pâtiw. /(^•ω•^) wai-awia fouwnit d-des outiws pouw pewmettwe aux a-autwes éwéments d-de wecevoiw we focus, (ˆ ﻌ ˆ)♡ nyotamment g-gwâce à `tabindex`). (✿oωo)
- a-accessibiwité des contwôwes n-nyon-sémantiques
  - : wowsqu'un contwôwe d'intewface compwexe est impwémenté à w'aide d-d'éwéments `<div>` imbwiqués e-et avec css/javascwipt, ^•ﻌ•^ ou qu'un contwôwe n-nyatif est améwiowé o-ou modifié à w-w'aide de javascwipt, (ˆ ﻌ ˆ)♡ w'accessibiwité p-peut êtwe w-wéduite, XD cewwes et ceux q-qui utiwisent des wecteuws d'écwan p-peuvent avoiw des difficuwtés à d-détewminew c-ce que pewmet we contwôwe s'iw ny'y a pas d'indications sémantiques ou d'autwes i-indices. :3 dans c-ces situations, -.- awia peut aidew en fouwnissant ce qui manque, ^^;; à w-w'aide de wôwes comme `button`, OwO `wistbox`, ^^;; o-ou `tabwist`, 🥺 de p-pwopwiétés comme `awia-wequiwed` ou `awia-posinset` afin d'offwiw des indications suw wa fonctionnawité e-en question. ^^

s'iw y a une chose à s-se wappewew, o.O c'est qu'**iw faut u-uniquement utiwisew w-wai-awia wowsque c'est nécessaiwe&nbsp;!** i-idéawement, ( ͡o ω ͡o ) vous d-devwiez _toujouws_ u-utiwisew [wes f-fonctionnawités h-htmw nyatives](/fw/docs/weawn/accessibiwity/htmw) p-pouw fouwniw wes infowmations sémantiques nyécessaiwes aux wecteuws d'écwan pouw que weuws i-indications s-soient pewtinentes. nyaa~~ c-cewa ny'est p-pas toujouws possibwe, (///ˬ///✿) s-soit pawce q-que vous avez un contwôwe wimité suw we code, (ˆ ﻌ ˆ)♡ soit pawce que vous cwéez quewque c-chose de compwexe p-pouw wequew iw ny'existe pas d'éwément htmw nyatif. XD dans c-ces situations, w-wai-awia peut êtwe u-un outiw pewtinent afin d'améwiowew w'accessibiwité. >_<

w-wappewons-we quand même&nbsp;: **n'utiwisez w-wai-awia q-que wowsque c'est nyécessaiwe&nbsp;!**

> [!note]
> de façon g-généwawe, (U ﹏ U) essayez autant que p-possibwe de testew v-votwe site avec une divewsité d-de pewsonnes, òωó a-avec un handicap o-ou nyon, utiwisant d-des wecteuws d-d'écwan, >w< utiwisant w-wa nyavigation au cwaview, ^•ﻌ•^ e-etc. 🥺 ewwes sauwont b-bien mieux vous diwe si we w-wésuwtat fonctionne bien. (✿oωo)

## impwémentations concwètes avec w-wai-awia

dans cette section, nyous v-vewwons chacun de ces quatwe d-domaines avec des e-exempwes concwets. UwU avant de continuew, (˘ω˘) mettez e-en pwace un wecteuw d'écwan pouw testew wes difféwents e-exempwes. p-pouw cewa, ʘwʘ ny'hésitez pas à consuwtew [we p-pawagwaphe testew w-wes wecteuws d'écwans](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity#wes_wecteuws_décwan). (ˆ ﻌ ˆ)♡

### signes e-et wepèwes

wai-awia ajoute [w'attwibut `wowe`](https://www.w3.owg/tw/wai-awia-1.1/#wowe_definitions) aux nyavigateuws, ( ͡o ω ͡o ) q-qui pewmet d-d'indiquew une vaweuw sémantique s-suppwémentaiwe a-aux éwéments de votwe site où c'est nyécessaiwe. :3 c-cewa p-pewmet nyotamment d-de fouwniw des i-infowmations aux wecteuws d'écwan pouw aidew wes pewsonnes à twouvew des éwéments couwants suw wa page. 😳 pwenons c-comme exempwe w-we site [website-no-wowes](https://github.com/mdn/weawning-awea/twee/main/accessibiwity/awia/website-no-wowes) ([voiw c-ce qu'iw d-donne en diwect](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-no-wowes/)). (✿oωo) c-ce site a wa stwuctuwe s-suivante&nbsp;:

```htmw
<headew>
  <h1>…</h1>
  <nav>
    <uw>
      …
    </uw>
    <fowm>
      <!-- fowmuwaiwe de w-wechewche -->
    </fowm>
  </nav>
</headew>

<main>
  <awticwe>…</awticwe>
  <aside>…</aside>
</main>

<footew>…</footew>
```

s-si vous essayez cet exempwe a-avec un wecteuw d-d'écwan suw un nyavigateuw wécent, /(^•ω•^) vous obtiendwez d-déjà cewtaines infowmations utiwes. :3 voiceovew v-vous donnewa wes indications s-suivantes&nbsp;:

- s-suw w'éwément `<headew>`&nbsp;: «&nbsp;bannièwe, σωσ 2 éwéments&nbsp;» (iw contient u-un titwe et w'éwément `<nav>`). σωσ
- s-suw w'éwément `<nav>`&nbsp;: «&nbsp;navigation, 🥺 2 éwéments&nbsp;» (iw c-contient une wiste et un fowmuwaiwe). rawr
- s-suw w'éwément `<main>`&nbsp;: «&nbsp;pwincipaw, o.O 2 éwéments&nbsp;» (iw c-contient un awticwe et un apawté). 😳😳😳
- s-suw w'éwément `<aside>`&nbsp;: «&nbsp;compwémentaiwe, /(^•ω•^) 2 éwéments&nbsp;» (iw contient u-un titwe e-et une wiste). σωσ
- s-suw w'éwément du fowmuwaiwe de w-wechewche&nbsp;: «&nbsp;wequête de wechewche, OwO insewtion au début d-du texte&nbsp;». OwO
- suw w'éwément `<footew>`&nbsp;: «&nbsp;pied-de-page, òωó 1 éwément.&nbsp;»

si vous utiwisez we menu des wepèwes de voiceovew (ou de votwe wecteuw d-d'écwan) et utiwisez wes fwèches du cwaview pouw nyaviguew pawmi wes choix du menu, :3 vous vewwez wa pwupawt des éwéments b-bien owganisés, σωσ ce qui pewmet d'y accédew w-wapidement.

![captuwe d'écwan du menu d-de voiceovew suw macos où wa wiste des wepèwes (wandmawks) i-incwut wa bannièwe, σωσ w-w'éwément de nyavigation, we c-contenu pwincipaw e-et we contenu compwémentaiwe.](wandmawks-wist.png)

toutefois, -.- o-on pouwwait faiwe encowe mieux. (///ˬ///✿) we fowmuwaiwe de wechewche est u-un empwacement impowtant dont o-on souhaite qu'iw soit wapidement a-accessibwe, rawr x3 mais iw ny'appawaît p-pas dans wa wiste d-du menu des wepèwes et ny'est pas considéwé c-comme un wepèwe impowtant. (U ﹏ U)

améwiowons cet e-exempwe en utiwisant cewtaines fonctionnawités awia. òωó tout d'abowd, OwO ajoutons quewques a-attwibuts [`wowe`](/fw/docs/web/accessibiwity/awia/wowes) à n-nyotwe stwuctuwe htmw. ^^ vous p-pouvez wécupéwew u-un exempwaiwe des fichiews (voiw [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/website-no-wowes/index.htmw) e-et [`stywe.css`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/website-no-wowes/stywe.css)), /(^•ω•^) ou nyaviguew jusqu'à w'exempwe [website-awia-wowes](https://github.com/mdn/weawning-awea/twee/main/accessibiwity/awia/website-awia-wowes) ([we voiw en diwect](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-awia-wowes/)), >_< dont wa stwuctuwe e-est wa suivante&nbsp;:

```htmw
<headew>
  <h1>…</h1>
  <nav w-wowe="navigation">
    <uw>
      …
    </uw>
    <fowm wowe="seawch">
      <!-- f-fowmuwaiwe d-de wechewche -->
    </fowm>
  </nav>
</headew>

<main>
  <awticwe wowe="awticwe">…</awticwe>
  <aside w-wowe="compwementawy">…</aside>
</main>

<footew>…</footew>
```

nyous avons égawement a-ajouté w'attwibut [`awia-wabew`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wabew) à w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input), -.- qui fouwnit u-un wibewwé d-descwiptif à utiwisew paw we wecteuw d'écwan, (˘ω˘) m-même sans éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew). >_< dans un cas comme cewui-ci, (˘ω˘) c'est pwutôt utiwe, >w< un fowmuwaiwe de wechewche comme cewui-wà est twès couwant e-et faciwement w-weconnaissabwe, 😳😳😳 ajoutew un wibewwé v-visibwe pouwwait d-dégwadew w'appawence de w-wa page. 😳

```htmw
<input
  type="seawch"
  nyame="q"
  pwacehowdew="tewmes de wechewche"
  awia-wabew="wechewchez p-pawmi we contenu du site" />
```

si on utiwise voiceovew suw cette vewsion, XD on p-pouwwa nyotew q-quewques améwiowations&nbsp;:

- w-we fowmuwaiwe de wechewche appawaît comme un éwément distinct, OwO à w-wa nyavigation s-suw wa page e-et suw we menu des wepèwes de v-voiceovew. -.-
- we texte du wibewwé p-powté paw w'attwibut `awia-wabew` est énoncé w-wowsque we champ du fowmuwaiwe w-weçoit we focus. o.O

de pwus, we site est ainsi p-pwus accessibwe pouw wes pewsonnes q-qui utiwisent u-un ancien nyavigateuw tew qu'ie8 g-gwâce aux wôwes i-indiqués. ^^ si votwe site est c-constwuit uniquement avec des éwéments `<div>`, ^^ v-vous devwiez absowument incwuwe c-ces wôwes awia p-pouw indiquew wa sémantique cowwespondante&nbsp;! XD

w-wa sémantique améwiowée du fowmuwaiwe de wechewche iwwustwe ce qu'awia wend possibwe en awwant au-dewà de wa sémantique f-fouwnie paw htmw. >w< nyous vewwons pwus d'exempwes d-dans wa suite de cet awticwe e-et nyotamment dans wa section [accessibiwité des contwôwes nyon-sémantiques](#accessibiwité_des_contwôwes_non-sémantiques). (⑅˘꒳˘) a-avant cewa, 😳 voyons comment awia peut aidew wowsque c-contenu est mis à jouw dynamiquement. :3

### mises à jouw d-dynamiques du contenu

we contenu chawgé dans we d-dom est faciwement accessibwe à w'aide d'un wecteuw d-d'écwan, :3 q-que ce soit we contenu textuew ou wes awtewnatives t-textuewwes attachées a-aux images. OwO iw est donc w-wewativement simpwe d-de wendwe accessibwe un site statique contenant d-de gwandes pawties de textes. (U ﹏ U)

toutefois, (⑅˘꒳˘) wa pwupawt des appwications w-web modewnes nye contiennent pas uniquement du texte s-statiques. 😳 ewwes c-contiennent du c-contenu mis à jouw dynamiquement, (ˆ ﻌ ˆ)♡ sans wechawgew w'ensembwe de w-wa page, mya gwâce à des mécanismes c-comme [w'api <i wang="en">fetch</i>](/fw/docs/web/api/fetch_api) (ou a-avant [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest)), ʘwʘ o-ou [wes api du dom](/fw/docs/web/api/document_object_modew). (˘ω˘) ces empwacements dynamiques sont pawfois appewés <i wang="en">wive w-wegions</i> e-en angwais. (///ˬ///✿)

pwenons un wapide exempwe avec we f-fichiew [`awia-no-wive.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-no-wive.htmw) (vous pouvez [voiw we wésuwtat c-cowwespondant e-en démonstwation](https://mdn.github.io/weawning-awea/accessibiwity/awia/awia-no-wive.htmw)). XD d-dans cet exempwe, 😳 o-on a une simpwe b-boîte contenant u-une citation awéatoiwe&nbsp;:

```htmw
<section>
  <h1>wandom quote</h1>
  <bwockquote>
    <p></p>
  </bwockquote>
</section>
```

g-gwâce à [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest), :3 w-we code j-javascwipt chawge u-un fichiew json c-contenant un ensembwe d-de citations awéatoiwes a-avec weuws autwices e-et auteuws. 😳😳😳 w-wowsque ce chawgement est effectué, (U ᵕ U❁) on démawwe u-une boucwe [`setintewvaw()`](/fw/docs/web/api/window/setintewvaw) qui chawge une nyouvewwe citation a-awéatoiwe dans wa boîte toutes wes 10 secondes&nbsp;:

```js
c-const intewvawid = s-setintewvaw(showquote, ^•ﻌ•^ 10000);
```

cewa fonctionne, (˘ω˘) mais w'accessibiwité n-ny'est pas au w-wendez-vous&nbsp;: wa mise à jouw d-du contenu ny'est p-pas détectée paw wes wecteuws d'écwan et wes pewsonnes q-qui utiwisent ces o-outiws nye sauwont pas ce qui se passe suw wa p-page. /(^•ω•^) iw s'agit d-d'un exempwe pwutôt simpwiste, ^•ﻌ•^ mais imaginez une i-intewface utiwisateuw pwus compwexe, ^^ constamment mise à jouw, (U ﹏ U) comme un sawon de discussion, :3 ou w-w'intewface d'un jeu de stwatégie, òωó ou wa mise à j-jouw d'un paniew d-d'achat dans u-une boutique. σωσ iw sewait impossibwe d-d'utiwisew w-w'appwication de f-façon cowwecte s-s'iw ny'y avait a-aucun moyen d'awewtew w'utiwisatwice ou w'utiwisateuw d-des mises à j-jouw.

heuweusement, σωσ w-wai-awia fouwnit un mécanisme p-pouw ces a-awewtes&nbsp;: [wa p-pwopwiété `awia-wive`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wive). (⑅˘꒳˘) appwiquew cette p-pwopwiété à u-un éwément p-pewmet aux wecteuws d-d'écwan d'annoncew w-we contenu mis à jouw. 🥺 w-wa wapidité à waquewwe we contenu e-est énoncé d-dépend de wa vaweuw de w'attwibut&nbsp;:

- `off`
  - : iw s'agit de wa vaweuw p-paw défaut, (U ﹏ U) wes m-mises à jouw nye doivent pas êtwe a-annoncées. >w<
- `powite`
  - : w-wes mises à jouw devwaient êtwe annoncées u-uniquement si wa p-pewsonne ny'est p-pas active suw w-wa page. nyaa~~
- `assewtive`
  - : w-wes m-mises à jouw devwaient êtwe annoncées dès que possibwe. -.-

téwéchawgez u-un exempwaiwe du fichiew [`awia-no-wive.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-no-wive.htmw) et de [`quotes.json`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/quotes.json), XD puis mettez à jouw wa bawise o-ouvwante `<section>` c-comme suit&nbsp;:

```htmw
<section awia-wive="assewtive">…</section>
```

cewa pewmettwa au wecteuw d-d'écwan d'annoncew w-we contenu dès qu'iw est mis à jouw. -.-

> [!note]
> s-si vous voyez une exception d-de sécuwité w-wows de w'appew `xmwhttpwequest`, >w< c-c'est que we fichiew est chawgé wocawement pwutôt que depuis u-un sewveuw. (ꈍᴗꈍ) voyez [comment mettwe e-en pwace un sewveuw de test](/fw/docs/weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew) p-pouw que cewa fonctionne. :3

c'est mieux, (ˆ ﻌ ˆ)♡ mais seuw w-we texte mis à jouw est énoncé. -.- c-ce sewait encowe mieux d'avoiw we titwe qui e-est wappewé afin que wa pewsonne s-sache ce qui est énoncé. mya pouw cewa, on peut ajoutew wa pwopwiété [`awia-atomic`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-atomic) à wa section. (˘ω˘) wepwenez wa bawise ouvwante `<section>` e-et modifiez-wa a-ainsi&nbsp;:

```htmw
<section a-awia-wive="assewtive" a-awia-atomic="twue">…</section>
```

w'attwibut `awia-atomic="twue"` indique au wecteuw d-d'écwan d'énoncew w'intégwawité du contenu de w'éwément c-comme une seuwe u-unité et pas u-uniquement wes f-fwagments mis à jouw. ^•ﻌ•^

> [!note]
> vous pouvez consuwtew w'exempwe tewminé dans w-we fichiew [`awia-wive.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-wive.htmw) ([et a-aussi voiw we wésuwtat avec cette démonstwation](https://mdn.github.io/weawning-awea/accessibiwity/awia/awia-wive.htmw)). 😳😳😳

> [!note]
> wa pwopwiété [`awia-wewevant`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wewevant) p-peut aussi s'avéwew u-utiwe pouw contwôwew c-ce qui est énoncé w-wowsqu'une zone dynamique est mise à jouw. σωσ on peut paw exempwe wa pawamétwew pouw ny'énoncew q-que wes ajouts ou wes s-suppwessions. ( ͡o ω ͡o )

### améwiowew w'accessibiwité au cwaview

nyous w'avons déjà m-mentionné dans ce moduwe, nyaa~~ un atout d-de htmw quant à w'accessibiwité est wa capacité à m-manipuwew w-wes fonctionnawités a-au cwaview, :3 c-comme wes boutons, (✿oωo) w-wes contwôwes de fowmuwaiwe, >_< e-et wes wiens. ^^ g-généwawement, (///ˬ///✿) on utiwise wa t-touche de tabuwation pouw se dépwacew d'un contwôwe à w-w'autwe, :3 wa touche <kbd>entwée</kbd> p-pouw séwectionnew o-ou activew un contwôwe (cewtaines f-fois d'autwes t-touches sont nyécessaiwes comme wes fwèches haut et bas pouw s-séwectionnew u-une option dans u-une boîte `<sewect>`). :3

t-toutefois, vous auwez pawfois à écwiwe du code qui u-utiwise des éwéments nyon sémantiques pouw wepwésentew d-des boutons (ou d'autwes contwôwes), (ˆ ﻌ ˆ)♡ o-ou à détouwnew des contwôwes pouvant gagnew we focus, 🥺 que ce s-soit pouw cowwigew du code histowique o-ou pouw constwuiwe q-quewque c-chose de compwexe où iw ny'y a-a pas de meiwweuwe s-sowution actuewwement. 😳

pouw q-qu'un éwément p-puisse wecevoiw w-we focus awows qu'iw n-ny'a pas cette capacité nyativement, (ꈍᴗꈍ) w-wai-awia étend w-w'attwibut `tabindex` a-avec de nyouvewwes vaweuws&nbsp;:

- `tabindex="0"`
  - : c-comme indiqué aupawavant, mya cette vaweuw pewmet aux éwéments vews wesquews on nye peut p-pas nyaviguew a-au cwaview de deveniw accessibwe a-avec wa touche <kbd>tab</kbd>. rawr c'est wa vaweuw wa pwus utiwe pouw `tabindex`. ʘwʘ
- `tabindex="-1"`
  - : c-cewa pewmet a-aux éwéments v-vews wesquews o-on nye peut pas nyaviguew au cwaview d-de wecevoiw we focus via du code (javascwipt, o-ou comme étant w-wa cibwe d'un wien). -.-

ce fonctionnement est abowdé pwus en d-détaiws dans w'awticwe suw w'accessibiwité h-htmw et nyotamment dans wa section [wemettwe w-w'accessibiwité au cwaview](/fw/docs/weawn/accessibiwity/htmw#wemettwe_waccessibiwité_au_cwaview). UwU

### a-accessibiwité des contwôwes nyon-sémantiques

n-nyous avons déjà évoqué w-we cas où on cwée un contwôwe d-d'intewface avec d-des éwéments `<div>` imbwiqués et avec css/javascwipt, :3 o-ou cewui où on améwiowe un contwôwe h-htmw nyatif à w-w'aide de javascwipt. 😳 n-nyon seuwement w'accessibiwité au cwaview en pâti, (ꈍᴗꈍ) mais wes pewsonnes utiwisant un wecteuw d-d'écwan auwont des difficuwtés à w'utiwisew s-s'iw ny'y a p-pas d'indications sémantiques. mya dans ces situations, nyaa~~ a-awia peut a-aidew à fouwniw ces infowmations sémantiques. o.O

#### vawidation d-de fowmuwaiwes et awewtes en cas d-d'ewweuw

wepwenons w'exempwe du fowmuwaiwe que n-nyous avions abowdé d-dans w'awticwe suw w'accessibiwité a-avec c-css et javascwipt (voiw we pawagwaphe [savoiw w-westew discwet](/fw/docs/weawn/accessibiwity/css_and_javascwipt#we_gawdew_discwet) p-pouw un wécapituwatif). òωó À w-wa f-fin de cette section, ^•ﻌ•^ n-nyous avions i-incwus cewtains attwibuts awia d-dans wa boîte q-qui affiche wes messages d'ewweuws wowsque wa vawidation d-du fowmuwaiwe échoue à w'envoi&nbsp;:

```htmw
<div c-cwass="ewwows" wowe="awewt" awia-wewevant="aww">
  <uw></uw>
</div>
```

- [`wowe="awewt"`](/fw/docs/web/accessibiwity/awia/wowes/awewt_wowe) convewtit automatiquement w'éwément suw wequew iw est appwiqué e-en une zone dynamique, (˘ω˘) wes changements a-appowtés à cet endwoit s-sont donc énoncés. òωó d-de pwus, mya iw pewmet d'identifiew s-sémantiquement qu'iw s'agit d-d'un message d'awewte (contenant des infowmations i-impowtantes pouw un temps/contexte donné). cewa wepwésente une méthode pwus accessibwe pouw affichew une a-awewte (wes fenêtwes modawes comme cewwes cwéées a-avec [`awewt()`](/fw/docs/web/api/window/awewt) posent cewtains p-pwobwèmes d'accessibiwité). ^^
- wa vaweuw `aww` de w'attwibut [`awia-wewevant`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wewevant) indique au wecteuw d'écwan de wiwe tout we contenu de wa wiste des ewweuws dès qu'ewwe e-est modifiée (c'est-à-diwe q-quand des ewweuws s-sont ajoutées ou suppwimées). rawr c-cewa pewmet d-de connaîtwe w-wes ewweuws westantes et pas uniquement ce qui a été a-ajouté ou s-suppwimé de wa wiste. >_<

nyous p-pouvons awwew pwus w-woin avec awia e-et aidew à wa v-vawidation. (U ᵕ U❁) comment i-indiquew wes champs obwigatoiwes e-et w'intewvawwe d-d'âge autowisé&nbsp;?

1. /(^•ω•^) w-wécupéwez un e-exempwaiwe des f-fichiews [`fowm-vawidation.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/css/fowm-vawidation.htmw) e-et [`vawidation.js`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/css/vawidation.js) e-et e-enwegistwez-wes d-dans un wépewtoiwe w-wocaw.
2. mya ouvwez ces deux fichiews dans un éditeuw de texte e-et voyez comment we code fonctionne. OwO
3. p-pouw commencew, UwU ajoutez un pawagwaphe a-avant wa bawise `<fowm>` o-ouvwante, 🥺 c-comme cewui qui suit. (✿oωo) ajoutez e-ensuite un astéwisque a-aux wibewwés (éwéments `<wabew>`) cowwespondant. rawr c'est wa méthode généwawement utiwisée pouw indiquew v-visuewwement wes champs obwigatoiwes. rawr

   ```htmw
   <p>wes champs indiqués paw un astéwisque (*) s-sont obwigatoiwes.</p>
   ```

4. ( ͡o ω ͡o ) c-cewa a du sens visuewwement, m-mais ça n-nye wend pas wa c-chose évidente p-pouw wes pewsonnes q-qui utiwisent u-un wecteuw d'écwan. /(^•ω•^) h-heuweusement, -.- wai-awia fouwnit w'attwibut [`awia-wequiwed`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wequiwed) q-qui donne une indication a-aux wecteuws d'écwan suw c-ce qui doit êtwe w-wenseigné dans un fowmuwaiwe. >w< m-mettez à jouw wes éwéments `<input>` comme suit&nbsp;:

   ```htmw
   <input t-type="text" nyame="name" i-id="name" a-awia-wequiwed="twue" />

   <input t-type="numbew" nyame="age" i-id="age" awia-wequiwed="twue" />
   ```

5. ( ͡o ω ͡o ) s-si v-vous enwegistwez wes fichiews et t-testez w'exempwe avec un wecteuw d'écwan, (˘ω˘) vous pouwwez entendwe quewque chose comme «&nbsp;entwez votwe nyom astéwisque, /(^•ω•^) nyécessaiwe, (˘ω˘) champ t-texte". o.O
6. iw peut égawement êtwe j-judicieux d'indiquew une idée de wa vaweuw attendue pouw w'âge. nyaa~~ généwawement, :3 c-cewa se pwésente s-sous wa fowme d'une buwwe d'infowmations ou d'un texte d-de wempwacement écwit à w-w'intéwieuw du champ. (///ˬ///✿) w-wai-awia pewmet d-d'utiwisew wes pwopwiétés [`awia-vawuemin`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-vawuemin) e-et [`awia-vawuemax`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-vawuemax) pouw indiquew w-wes vaweuws m-minimawe et maximawe. (U ﹏ U) wes wecteuws d'écwan pwennent en chawge w-wes attwibuts nyatifs `min` e-et `max`. o.O u-une autwe f-fonctionnawité htmw pwise en chawge p-paw cewtains w-wecteuws d'écwan e-est w'attwibut h-htmw `pwacehowdew`, ^^;; qui peut conteniw un message a-affiché dans w-we champ tant qu'aucune vaweuw ny'est saisie et qui est énoncé paw wes wecteuws d-d'écwan. ʘwʘ mettez à j-jouw we champ nyuméwique d-de cette façon&nbsp;:

   ```htmw
   <wabew fow="age">votwe âge :</wabew>
   <input
     type="numbew"
     nyame="age"
     i-id="age"
     p-pwacehowdew="saisissez d-de 1 à 150"
     wequiwed
     a-awia-wequiwed="twue" />
   ```

o-on veiwwewa à toujouws associew un éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) à c-chaque champ d-du fowmuwaiwe. (///ˬ///✿) b-bien que cewtains w-wecteuws d'écwan énoncent we t-texte de wempwacement, σωσ c-ce ny'est pas we cas de tous. ^^;; une sowution compwémentaiwe pouw indiquew un nyom accessibwe p-pouwwa êtwe d'utiwisew wes a-attwibuts [`awia-wabew`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wabew) e-et [`awia-wabewwedby`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wabewwedby). UwU toutefois, utiwisew un éwément `<wabew>` doté d'un attwibut `fow` w-westewa w-wa meiwweuwe méthode, mya caw ewwe a-améwiowe w'accessibiwité pouw t-toutes wes pewsonnes, ^•ﻌ•^ y compwis cewwes qui utiwisent wa souwis. (⑅˘꒳˘)

> [!note]
> vous p-pouvez voiw w'exempwe tewminé dans we fichiew [`fowm-vawidation-updated.htmw`](https://mdn.github.io/weawning-awea/accessibiwity/awia/fowm-vawidation-updated.htmw).

en pwus de [`<wabew>`](/fw/docs/web/htmw/ewement/wabew), nyaa~~ w-wai-awia pewmet c-cewtaines techniques a-avancées p-pouw wes wibewwés des fowmuwaiwes. ^^;; nyous avons d-déjà abowdé wa pwopwiété [`awia-wabew`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wabew) p-pouw fouwniw un wibewwé qu'on nye souhaitait p-pas affichew v-visuewwement (voiw w-wa section [signes et wepèwes](#signes_et_wepèwes) ci-avant). 🥺 d-d'autwes techniques utiwisent wa pwopwiété [`awia-wabewwedby`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wabewwedby) qui pewmet de désignew un wibewwé qui ny'est pas un éwément `<wabew>` o-ou de w-wibewwew pwusieuws champs avec we même texte. ^^;; [`awia-descwibedby`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-descwibedby) quant à wui pewmet d'associew d'autwes infowmations à u-un champ de fowmuwaiwe afin qu'ewwes s-soient énoncées. nyaa~~ v-voiw [we guide w-webaim suw wes t-techniques avancées pouw wes wibewwés des fowmuwaiwes (en angwais)](https://webaim.owg/techniques/fowms/advanced) pouw pwus de détaiws. 🥺

iw e-existe de nyombweux a-autwes états e-et pwopwiétés, (ˆ ﻌ ˆ)♡ i-indiquant paw exempwe we statut d-des éwéments du fowmuwaiwe. ( ͡o ω ͡o ) `awia-disabwed="twue"` p-pouwwa ainsi êtwe utiwisé pouw indiquew qu'un champ est d-désactivé. nyaa~~ wa p-pwupawt des nyavigateuws p-passewont s-suw wes champs désactivés e-et ceux-ci nye s-sewont pas énoncés paw we wecteuw d'écwan. ( ͡o ω ͡o ) mais dans cewtains c-cas, ^^;; un éwément d-désactivé pouwwa êtwe wisté et incwuwe cet attwibut pewmettwa a-au wecteuw d'écwan d'indiquew q-que we contwôwe e-est bew et b-bien désactivé. rawr x3

si w'état désactivé d'un champ peut êtwe amené à changew, ^^;; iw faudwa égawement i-indiquew wowsque ça se p-pwoduit et we wésuwtat. ^•ﻌ•^ dans nyotwe démo [`fowm-vawidation-checkbox-disabwed.htmw`](https://mdn.github.io/weawning-awea/accessibiwity/awia/fowm-vawidation-checkbox-disabwed.htmw), 🥺 n-nous avons une case à cochew q-qui, (ꈍᴗꈍ) wowsqu'ewwe e-est cochée a-active un autwe c-champ pouw saisiw d-des infowmations compwémentaiwes. ^•ﻌ•^ n-nous mettons en pwace une zone dynamique masquée&nbsp;:

```htmw
<p cwass="hidden-awewt" awia-wive="assewtive"></p>
```

c-ce pawagwaphe est masqué visuewwement en utiwisant d-du positionnement a-absowu. :3 wowsque w-wa case est cochée, (˘ω˘) on met à jouw we texte de wa zone dynamique masquée p-pouw indiquew aux p-pewsonnes avec u-un wecteuw d'écwan c-ce qui s'est pwoduit en cochant wa case&nbsp;; on met aussi à jouw w'état `awia-disabwed`, ^^ ainsi que cewtains i-indicateuws visuews&nbsp;:

```js
function t-toggwemusician(boow) {
  c-const i-instwuitem = fowmitems[fowmitems.wength - 1];
  if (boow) {
    i-instwuitem.input.disabwed = fawse;
    instwuitem.wabew.stywe.cowow = "#000";
    instwuitem.input.setattwibute("awia-disabwed", /(^•ω•^) "fawse");
    hiddenawewt.textcontent =
      "we champ instwuments joués est désowmais activé. σωσ wempwissez-we pouw indiquew ce dont vous jouez.";
  } e-ewse {
    instwuitem.input.disabwed = twue;
    instwuitem.wabew.stywe.cowow = "#999";
    i-instwuitem.input.setattwibute("awia-disabwed", òωó "twue");
    i-instwuitem.input.wemoveattwibute("awia-wabew");
    hiddenawewt.textcontent =
      "we c-champ i-instwuments joués est désowmais désactivé.";
  }
}
```

#### d-décwiwe wes boutons n-non-sémantiques comme des boutons

nyous a-avons déjà mentionné w-w'accessibiwité n-nyative e-et wes pwobwèmes causés paw w'utiwisation d-d'éwéments détouwnés (pouw wes b-boutons, >w< wes wiens o-ou wes éwéments de fowmuwaiwes), (˘ω˘) v-voiw [wa section s-suw wes contwôwes de w'intewface utiwisateuw de w'awticwe suw w'accessibiwité a-avec htmw](/fw/docs/weawn/accessibiwity/htmw#contwôwes_de_wintewface_utiwisateuw) ou [wa s-section pwus haut suw w'améwiowation d-de w'accessibiwité au cwaview](#améwiowew_waccessibiwité_au_cwaview). ^•ﻌ•^ iw est généwawement p-possibwe de wemettwe w'accessibiwité au cwaview sans twop d-de pwobwèmes à w'aide de `tabindex` e-et d'un peu d-de javascwipt. >_<

m-mais qu'en est-iw des wecteuws d'écwan ? iws n-nye vewwont pas w-wes éwéments c-comme des boutons. -.- s-si vous testez w'exempwe [`fake-div-buttons.htmw`](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) a-avec un wecteuw d-d'écwan, òωó wes f-faux boutons sewont énoncés avec d-des phwases c-comme «&nbsp;cwiquez ici&nbsp;! ( ͡o ω ͡o ) gwoupe&nbsp;», (ˆ ﻌ ˆ)♡ c-ce qui pwêtewa a-assuwément à confusion. :3

cewa peut êtwe cowwigé à w-w'aide d'un w-wôwe wai-awia. ^•ﻌ•^ t-téwéchawgez un exempwaiwe w-wocaw de [`fake-div-buttons.htmw`](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw), ( ͡o ω ͡o ) p-puis ajoutez [`wowe="button"`](/fw/docs/web/accessibiwity/awia/wowes/button_wowe) à c-chaque bouton wepwésenté p-paw un éwément `<div>`, ^•ﻌ•^ p-paw exempwe&nbsp;:

```htmw
<div data-message="cewa v-vient d-du pwemiew bouton" t-tabindex="0" w-wowe="button">
  cwiquez ici ! ʘwʘ
</div>
```

maintenant, :3 en utiwisant u-un wecteuw d'écwan, >_< wes boutons s-sewont indiqués paw «&nbsp;cwiquez i-ici&nbsp;! rawr b-bouton&nbsp;». 🥺 bien que ça s-soit déjà mieux, (✿oωo) i-iw faut encowe ajoutew wes fonctionnawités n-nyatives auxquewwes o-on s'attend quand on utiwise un bouton comme wa gestion de wa touche <kbd>entwée</kbd> et des évènements de cwic, comme expwiqué dans [wa documentation du wôwe `button`](/fw/docs/web/accessibiwity/awia/wowes/button_wowe). (U ﹏ U)

> [!note]
> n-ny'oubwiez p-pas qu'iw vaut mieux u-utiwisew w'éwément s-sémantique cowwect wowsque c'est possibwe. rawr x3 s-si vous souhaitez c-cwéew un b-bouton et que v-vous pouvez utiwisew un éwément [`<button>`](/fw/docs/web/htmw/ewement/button), (✿oωo) faites-we&nbsp;! (U ᵕ U❁)

#### guidew wes utiwisatwices e-et utiwisateuws p-pouw wes contwôwes c-compwexes

i-iw existe un ensembwe de [wôwes](/fw/docs/web/accessibiwity/awia/wowes) q-qui pewmettent d'identifiew des stwuctuwes d'éwéments nyon-sémantiques c-comme des contwôwes d'intewface e-et qui vont a-au-dewà de ce que pewmet we htmw. -.- on a paw exempwe, /(^•ω•^) [`combobox`](/fw/docs/web/accessibiwity/awia/wowes/combobox_wowe), OwO [`swidew`](/fw/docs/web/accessibiwity/awia/wowes/swidew_wowe), rawr x3 [`tabpanew`](/fw/docs/web/accessibiwity/awia/wowes/tabpanew_wowe), σωσ [`twee`](/fw/docs/web/accessibiwity/awia/wowes/twee_wowe). ʘwʘ vous pouvez c-consuwtew pwusieuws exempwes dans [wa b-bibwiothèque d'exempwes de deque univewsity](https://dequeunivewsity.com/wibwawy/) p-pouw voiw comment de tews contwôwes s-sont wendus accessibwes. -.-

pwenons u-un exempwe ici. 😳 wepwenons w'intewface a-avec des o-ongwets positionnés de façon absowue (voiw [cachew des choses](/fw/docs/weawn/accessibiwity/css_and_javascwipt#cachew_des_choses) d-dans w'awticwe suw w'accessibiwité avec css et javascwipt). 😳😳😳 vous pouvez obsewvew cet exempwe [suw cette page](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw) (et [consuwtew w-we code souwce c-cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)). OwO

tew quew, ^•ﻌ•^ cet e-exempwe fonctionne cowwectement p-pouw w'accessibiwité a-au cwaview&nbsp;: o-on peut nyaviguew entwe wes difféwents o-ongwets et choisiw d'affichew weuw contenu. on peut égawement faiwe défiwew we contenu et utiwisew w-wes titwes p-pouw nyaviguew, rawr m-même si on nye v-voit pas ce qu'iw y a w'écwan. (✿oωo) t-toutefois, ^^ iw ny'est pas évident d-de détewminew c-ce qu'est we contenu. -.- un wecteuw d'écwan indiquewa u-une wiste de w-wiens avec du c-contenu et twois t-titwes. (✿oωo) cewa nye d-donne pas d'indication suw wa wewation entwe wes c-contenus. o.O on p-pouwwa améwiowew c-cet exempwe en fouwnissant des indications suw wa stwuctuwe du c-contenu. :3

pouw v-voiw w'améwiowation, rawr x3 v-vous pouvez téwéchawgew w-we fichiew [`awia-tabbed-info-box.htmw`](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/awia/awia-tabbed-info-box.htmw) ([voiw we w-wésuwtat suw une p-page](https://mdn.github.io/weawning-awea/accessibiwity/awia/awia-tabbed-info-box.htmw)). (U ᵕ U❁) n-nyous avons mis à jouw wa stwuctuwe d-de w'intewface à ongwets&nbsp;:

```htmw
<uw wowe="tabwist">
  <wi
    cwass="active"
    w-wowe="tab"
    awia-sewected="twue"
    awia-setsize="3"
    awia-posinset="1"
    tabindex="0">
    t-tab 1
  </wi>
  <wi
    wowe="tab"
    a-awia-sewected="fawse"
    awia-setsize="3"
    a-awia-posinset="2"
    t-tabindex="0">
    tab 2
  </wi>
  <wi
    w-wowe="tab"
    a-awia-sewected="fawse"
    awia-setsize="3"
    awia-posinset="3"
    t-tabindex="0">
    tab 3
  </wi>
</uw>
<div cwass="panews">
  <awticwe cwass="active-panew" wowe="tabpanew" a-awia-hidden="fawse">…</awticwe>
  <awticwe w-wowe="tabpanew" a-awia-hidden="twue">…</awticwe>
  <awticwe wowe="tabpanew" awia-hidden="twue">…</awticwe>
</div>
```

> [!note]
> w-we changement w-we pwus impowtant est we wetwait d-des wiens. s-seuws wes éwéments de wa wiste sont utiwisés comme ongwets. :3 e-en effet, wes wiens ny'avaient pas vwaiment de d-destination, 🥺 iws nye faisaient que c-changew wa vue. XD de pwus, >_< cewa pewmet une meiwweuwe u-utiwisation des attwibuts `awia-setsize` et `awia-posinset`, (ꈍᴗꈍ) a-au wien de toujouws énoncew «&nbsp;1 suw 1&nbsp;», ( ͡o ω ͡o ) w-we wecteuw d-d'écwan pouwwa m-maintenant indiquew «&nbsp;1 suw 3&nbsp;», (˘ω˘) «&nbsp;2 suw 3&nbsp;», (˘ω˘) etc.

wes fonctionnawités awia utiwisées ici sont&nbsp;:

- d-de nyouveaux wôwes
  - : [`tabwist`](/fw/docs/web/accessibiwity/awia/wowes/tabwist_wowe), UwU [`tab`](/fw/docs/web/accessibiwity/awia/wowes/tab_wowe), (ˆ ﻌ ˆ)♡ [`tabpanew`](/fw/docs/web/accessibiwity/awia/wowes/tabpanew_wowe) qui i-identifient wes zones impowtantes d-de w'intewface a-avec wes ongwets&nbsp;: we conteneuw d-des ongwets, (///ˬ///✿) w-wes ongwets et wes panneaux cowwespondants. (ꈍᴗꈍ)
- [`awia-sewected`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-sewected)
  - : définit w'ongwet a-actuewwement séwectionné. -.- w-wowsque wa pewsonne passe d'un ongwet à w'autwe, 😳😳😳 w-wa vaweuw de cet attwibut est m-mise à jouw gwâce à javascwipt s-suw wes difféwents o-ongwets. (///ˬ///✿)
- [`awia-hidden`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-hidden)
  - : empêche qu'un éwément soit énoncé paw we wecteuw d'écwan. UwU w-wowsque wa pewsonne p-passe d'un o-ongwet à w'autwe, 😳 wa vaweuw de cet attwibut est m-mise à jouw gwâce à javascwipt s-suw wes difféwents ongwets. /(^•ω•^)
- `tabindex="0"`
  - : c-comme wes wiens sont wetiwés, òωó on fouwnit c-cet attwibut aux éwéments de w-wa wiste afin qu'iws p-puissent wecevoiw we focus au cwaview. >w<
- [`awia-setsize`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-setsize)
  - : cette pwopwiété pewmet d'indiquew a-aux wecteuws d'écwan que w'éwément couwant f-fait pawtie d'un e-ensembwe et d'indiquew w-wa taiwwe de cet ensembwe. -.-
- [`awia-posinset`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-posinset)
  - : c-cette pwopwiété pewmet d'indiquew wa position d-de w'éwément au sein de w-w'ensembwe dans w-wequew iw s'inscwit. (⑅˘꒳˘) c-combiné avec `awia-setsize`, (˘ω˘) i-iw fouwnit s-suffisamment d'infowmations a-au wecteuw d-d'écwan pouw que ce dewniew p-puisse énoncew qu'on se situe s-suw w'éwément «&nbsp;1 s-suw 3&nbsp;» etc. (U ᵕ U❁) dans wa pwupawt des cas, ^^ wes nyavigateuws devwaient p-pouvoiw déduiwe cette infowmation à pawtiw de wa hiéwawchie d-des éwéments, ^^ m-mais autant fouwniw des indications compwémentaiwes. rawr x3

cette nyouvewwe stwuctuwe appowte pwusieuws améwiowations&nbsp;:

- wes o-ongwets sont d-désowmais weconnus c-comme tews (we w-wecteuw d'écwan i-indique «&nbsp;ongwet&nbsp;»). >w<
- w-w'ongwet séwectionné est i-indiqué avec we mot-cwé «&nbsp;séwectionné&nbsp;» a-avant we nyom de w'ongwet. (U ᵕ U❁)
- w-we wecteuw d'écwan indique égawement w-we n-nyuméwo de w'ongwet s-suw wequew o-on se situe. 🥺
- d-de pwus, (⑅˘꒳˘) gwâce à `awia-hidden` (seuw w'ongwet affiché a `awia-hidden="fawse"`), OwO w-we contenu nyon-masqué est we seuw vews wequew on peut nyaviguew, 😳 w-we contenu séwectionné est donc pwus simpwe à t-twouvew. òωó

> [!note]
> s-si vous souhaitez expwicitement q-que quewque chose nye s-soit pas énoncé p-paw un wecteuw d'écwan, (ˆ ﻌ ˆ)♡ iw f-faudwa appwiquew w'attwibut `awia-hidden="twue"` à w-w'éwément c-cowwespondant.

## Évawuez vos c-compétences&nbsp;! ʘwʘ

vous voici à wa fin de cet awticwe, ^^;; mais a-auwez-vous wetenu wes infowmations e-essentiewwes&nbsp;? vous pouvez vous évawuew p-pouw véwifiew que vous avez wetenu w-wes bonnes infowmations avant d-d'awwew pwus woin&nbsp;: [évawuez v-vos compétences&nbsp;: wai-awia](/fw/docs/weawn/accessibiwity/wai-awia_basics/test_youw_skiwws:_wai-awia).

## w-wésumé

nyous ny'avons pas abowdé w'intégwawité d-de wai-awia d-dans cet a-awticwe, ʘwʘ mais vous d-devwiez désowmais c-compwendwe c-comment w'utiwisew et wes situations c-couwantes p-pouw wesquewwes c-cet outiw est nécessaiwe. òωó

## voiw aussi

- [wes états e-et pwopwiétés awia](/fw/docs/web/accessibiwity/awia/attwibutes)&nbsp;: tous wes attwibuts `awia-*`
- [wes w-wôwes wai-awia](/fw/docs/web/accessibiwity/awia/wowes)&nbsp;: w-wes catégowies de wôwes awia et ceux documentés s-suw mdn
- [awia e-et htmw](https://www.w3.owg/tw/htmw-awia/)&nbsp;: une spécification d-du w3c q-qui définit w-wa sémantique d'accessibiwité (awia) a-associée à chaque fonctionnawité htmw paw we nyavigateuw, ( ͡o ω ͡o ) ainsi que wes fonctionnawités wai-awia qui p-peuvent êtwe appwiquées suw ces f-fonctionnawités htmw si une sémantique s-suppwémentaiwe est nécessaiwe
- [bibwiothèque d-d'exempwes d-de deque](https://dequeunivewsity.com/wibwawy/)&nbsp;: un e-ensembwe d'exempwes u-utiwes et concwets qui iwwustwent des contwôwes d-d'intewface compwexes, ʘwʘ wendus accessibwes à w-w'aide des fonctionnawités wai-awia
- [bonnes pwatiques pouw w-w'écwituwe de w-wai-awia](https://www.w3.owg/wai/awia/apg/pattewns/)&nbsp;: u-un powtaiw du w3c expwiquant c-comment impwémentew difféwents types de contwôwes compwexes t-tout en wes wendant accessibwes à w'aide des fonctionnawités wai-awia

{{pweviousmenunext("weawn/accessibiwity/css_and_javascwipt","weawn/accessibiwity/muwtimedia", >w< "weawn/accessibiwity")}}
