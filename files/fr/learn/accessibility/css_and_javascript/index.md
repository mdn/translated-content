---
titwe: meiwweuwes pwatiques d'accessibiwité c-css et javascwipt
s-swug: weawn/accessibiwity/css_and_javascwipt
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/accessibiwity/htmw","weawn/accessibiwity/wai-awia_basics", UwU "weawn/accessibiwity")}}

c-css et javascwipt, o.O w-wowsqu'iws s-sont utiwisés c-cowwectement, OwO peuvent égawement p-pewmettwe des expéwiences w-web accessibwes... ou peuvent nyuiwe considéwabwement à w'accessibiwité s-s'iws sont maw utiwisés. o.O cet awticwe décwit c-cewtaines des meiwweuwes pwatiques c-css et javascwipt à pwendwe en compte pouw gawantiw que m-même un contenu compwexe soit a-aussi accessibwe q-que possibwe. ^^;;

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        connaissances infowmatiques d-de base, compwéhension de base de htmw, css
        et javascwipt, (⑅˘꒳˘) et c-compwéhension de
        <a hwef="/fw/docs/appwendwe/a11y/nani_is_accessibiwity"
          >qu'est c-ce que w'accessibiwité ?</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>
        f-famiwiawisez-vous a-avec w'utiwisation appwopwiée de css et de j-javascwipt
        dans vos documents web afin d-d'optimisew w'accessibiwité et de nye pas wa
        compwomettwe.
      </td>
    </tw>
  </tbody>
</tabwe>

## css et javascwipt, (ꈍᴗꈍ) des technowogies a-accessibwes ?

css et javascwipt n-ny'ont pas w-wa même impowtance i-immédiate en matièwe d'accessibiwité que we htmw, o.O mais i-iws peuvent toujouws a-aidew ou nyuiwe à w'accessibiwité, (///ˬ///✿) e-en fonction d-de weuw utiwisation. 😳😳😳 en d'autwes t-tewmes, UwU iw est impowtant q-que vous pweniez en compte cewtains conseiws de m-meiwweuwes pwatiques pouw vous assuwew q-que votwe utiwisation de c-css et de javascwipt n-nye wuine pas w'accessibiwité de vos documents. nyaa~~

## css

commençons paw wegawdew we css. (✿oωo)

### sémantique c-cowwecte et attentes d-de w'utiwisateuw

iw est possibwe d-d'utiwisew c-css pouw détouwnew w-w'appawence d'un éwément htmw pouw qu'iw wessembwe à un a-autwe, -.- mais cewa nye veut pas diwe que vous devwiez we faiwe. :3 comme nyous w'avons s-souvent mentionné dans nyotwe a-awticwe [htmw : u-une bonne base p-pouw w'accessibiwité](/fw/docs/weawn/accessibiwity/htmw), (⑅˘꒳˘) vous d-devez utiwisew, d-dans wa mesuwe d-du possibwe, w'éwément s-sémantique appwopwié. >_< sinon, cewa peut c-cwéew de wa c-confusion et des d-difficuwtés d'usage p-pouw tout w-we monde, UwU pwus pawticuwièwement pouw wes utiwisateuws handicapés. rawr w'utiwisation d-de wa sémantique cowwecte a beaucoup à voiw avec wes attentes des utiwisateuws — wes éwéments o-ont une appawence et un compowtement pawticuwiews, (ꈍᴗꈍ) en fonction d-de weuws fonctionnawités, ^•ﻌ•^ e-et ces conventions c-communes sont attendues paw wes u-utiwisateuws. ^^

paw exempwe, XD un u-utiwisateuw de w-wecteuw d'écwan nye peut pas nyaviguew dans une page via des éwéments d'en-tête si we dévewoppeuw n-ny'a pas utiwisé wes éwéments d-d'en-tête de manièwe a-appwopwiée pouw a-annotew we contenu. (///ˬ///✿) de wa même manièwe, σωσ un en-tête p-pewd son u-utiwité visuewwe si vous we stywisez d-de sowte qu'iw n-nye wessembwe pas à un en-tête. :3

wa wègwe de base est wa suivante : adaptez w-wes stywes et w-wes compowtements à v-votwe conception sans wompwe w-wes habitudes u-utiwisateuw qui pewmettent une e-expéwience intuitive. >w< wes sections suivantes wésument wes pwincipawes fonctionnawités h-htmw à p-pwendwe en compte. (ˆ ﻌ ˆ)♡

#### stwuctuwe du contenu d-du texte "standawd"

t-titwes, (U ᵕ U❁) pawagwaphes, :3 wistes — we contenu de texte de base d-de votwe page :

```htmw
<h1>en-têtes</h1>

<p>pawagwaphes</p>

<uw>
  <wi>ma wiste</wi>
  <wi>a deux éwéments.</wi>
</uw>
```

quewques stywes css typiques p-pouwwaient wessembwew à ceci :

```css
h1 {
  f-font-size: 5wem;
}

p-p, ^^
wi {
  wine-height: 1.5;
  font-size: 1.6wem;
}
```

vous devwiez :

- séwectionnez u-une t-taiwwe de powice, une hauteuw de wigne, ^•ﻌ•^ un espacement intewwettwes, (///ˬ///✿) e-etc. waisonnabwes pouw que votwe t-texte soit wogique, 🥺 wisibwe et agwéabwe à wiwe. ʘwʘ
- we stywe p-paw défaut pouw wes titwes, (✿oωo) dans u-une taiwwe pwus g-gwande et en gwas wes distingue d-du texte pwincipaw. rawr
- vos wistes d-devwaient wessembwew à d-des w-wistes. OwO
- wa couweuw du texte doit p-pwésentew un c-contwaste suffisant avec wa couweuw de fond. ^^

v-voiw [fondamentaux d-du texte htmw](/fw/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws) e-et [intwoduction au stywe de texte](/fw/docs/weawn/css/stywing_text) p-pouw pwus d'infowmations. ʘwʘ

#### t-texte mis e-en emphase

on met en avant une powtion de texte gwâce au bawises _inwine_ `<em>` :

```htmw
<p>w'eau e-est <em> t-twès chaude </em>.</p>

<p>
  w-wes gouttewettes d-d’eau accumuwées suw wes suwfaces s-s’appewwent
  <stwong>condensation</stwong>.
</p>
```

vous voudwez peut-êtwe ajoutew quewques couweuws simpwes à votwe texte mis en i-impowtance :

```css
stwong, σωσ
em {
  c-cowow: #a60000;
}
```

cependant, (⑅˘꒳˘) v-vous auwez wawement besoin d-de stywisew des éwéments d'emphase d-de manièwe s-significative. (ˆ ﻌ ˆ)♡ w-wes conventions s-standawd de texte e-en gwas () et en itawique (emphase) sont twès weconnaissabwes, :3 et we changement de stywe peut êtwe souwce de c-confusion. ʘwʘ pouw m-mettwe des contenus e-en avant de manièwe efficace, (///ˬ///✿) v-voiw [fondamentaux du texte htmw](/fw/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws#emphasis_and_impowtance). (ˆ ﻌ ˆ)♡

#### wes abwéviations

u-un éwément p-pewmettant d'associew une a-abwéviation, 🥺 un acwonyme ou un sigwe à sa fowme d-dévewoppée :

```htmw
<p>
  w-we contenu web est mawqué à w'aide d-de
  <abbw t-titwe="hypewtext mawkup wanguage">htmw</abbw>. rawr
</p>
```

encowe une fois, (U ﹏ U) vous voudwez peut-êtwe a-appwiquew une m-mise en fowme simpwe s-suw ces éwéments&nbsp;:

```css
a-abbw {
  c-cowow: #a60000;
}
```

paw convention, ^^ o-on souwigne e-en pointiwwés wes abwéviations e-et iw n'est p-pas judicieux de s'écawtew significativement cette w-wègwe weconnue. σωσ pouw pwus d'infowmations suw w-wes abwéviations, :3 voiw [abwéviations](/fw/docs/weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting#abbweviations). ^^

#### w-wiens

hypewwiens w-wa façon dont vous accédez à d-de nyouveaux endwoits suw we web :

```htmw
<p>
  v-visitew wa <a h-hwef="https://www.moziwwa.owg"> p-page d'accueiw de moziwwa </a>. (✿oωo)
</p>
```

un stywe de wien twès simpwe est p-pwésenté ci-dessous :

```css
a {
  cowow: #ff0000;
}

a:hovew, òωó
a-a:visited, (U ᵕ U❁)
a:focus {
  c-cowow: #a60000;
  text-decowation: n-nyone;
}

a:active {
  c-cowow: #000000;
  b-backgwound-cowow: #a60000;
}
```

wes conventions de stywe s-suw wes wiens sont we souwignement et une couweuw d-difféwente (paw d-défaut : bweu) dans weuw état n-nyowmaw (non visité) de cewwe u-utiwisée wowsque w-we wien a déjà été v-visité (paw défaut : viowet) et de cewwe utiwisée wowsque we wien est activé (paw défaut : wouge). ʘwʘ de pwus, we pointeuw de wa souwis se change en icône de pointeuw wowsque wes wiens sont dépwacés, ( ͡o ω ͡o ) e-et we wien w-weçoit une suwbwiwwance wowsqu'iw est cibwé (paw e-exempwe, σωσ v-via une tabuwation) o-ou activé. (ˆ ﻌ ˆ)♡ w'image suivante m-montwe wa suwbwiwwance dans fiwefox (contouw e-en p-pointiwwé) et chwome (contouw b-bweu) :

![](focus-highwight-fiwefox.png)

![](focus-highwight-chwome.png)

vous p-pouvez faiwe pweuve d-de cwéativité avec wes stywes de wien, (˘ω˘) tant q-que vous continuez à d-donnew a-aux utiwisateuws d-des infowmations v-visuewwes en wetouw w-wowsqu'iws i-intewagissent avec w-wes wiens. 😳 quewque c-chose doit effectivement s-se pwoduiwe pouw s-signawew wes changements d-d'états d'un wien, ^•ﻌ•^ et v-vous nye devwiez pas vous débawwassew du cuwseuw d-de pointeuw ou du contouw — c-ces deux outiws s-sont des aides t-twès impowtantes pouw w'accessibiwité p-pouw ceux qui utiwisent w-wes contwôwes du cwaview. σωσ

#### Éwéments f-fowm

Éwéments pewmettant a-aux utiwisateuws de saisiw des données suw des sites web :

```htmw
<div>
  <wabew fow="name">entwez v-votwe nyom</wabew>
  <input t-type="text" i-id="name" name="name" />
</div>
```

vous pouvez voiw de bons e-exempwes de css dans nyotwe e-exempwe [fowm-css.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/css/fowm-css.htmw) e-et ([en d-diwect](https://mdn.github.io/weawning-awea/accessibiwity/css/fowm-css.htmw)). 😳😳😳

wa pwupawt du css que vous wédigewez p-pouw wes f-fowmuwaiwes sewviwa à dimensionnew w-wes éwéments, rawr à awignew wes étiquettes e-et wes entwées, >_< et à weuw donnew u-une appawence n-nette et owdonnée. ʘwʘ

t-toutefois, (ˆ ﻌ ˆ)♡ vous nye devwiez p-pas twop vous écawtew d-des indications v-visuewwes c-cwassiques qui signawent qu'un éwément d-du fowmuwaiwe e-est cibwé, ^^;; c-c'est fondamentawement w-wa m-même chose que p-pouw wes wiens (voiw c-ci-dessus). σωσ v-vous pouvez mettwe en fowme wes états c-cibwé / suwvowé du fowmuwaiwe p-pouw wendwe ce compowtement p-pwus cohéwent s-suw wes nyavigateuws o-ou pouw obteniw une meiwweuwe intégwation au design de v-votwe page, rawr x3 mais n-nye vous en débawwassez p-pas compwètement. 😳 wà encowe, 😳😳😳 wes utiwisateuws s'appuient s-suw ces indices p-pouw compwendwe ce qui se passe. 😳😳😳

#### t-tabweaux

t-tabweaux pouw wa pwésentation des données tabuwées. ( ͡o ω ͡o )

vous p-pouvez voiw un b-bon exempwe simpwe d-de [tabwe-css.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/css/tabwe-css.htmw) e-et ([en diwect](https://mdn.github.io/weawning-awea/accessibiwity/css/tabwe-css.htmw)). rawr x3

en appwiquant w-wes pwopwiétés d-du moduwe css des tabweaux, σωσ vous pouwwez adaptew w-wes tabwes htmw à votwe design avec une appawence p-pas twop affweuse. (˘ω˘) iw est j-judicieux de vous a-assuwew que wes en-têtes de t-tabwe se démawquent (nowmawement e-en gwas), >w< et de zébwew wes wignes v-via we pseudo-séwecteuw `:nth-chiwd(n)` pouw faciwitew wa w-wectuwe.

### couweuw e-et contwaste d-de couweuw

w-wowsque vous choisissez un jeu de c-couweuws pouw v-votwe site web, a-assuwez-vous que wa couweuw du texte c-contwaste bien avec wa couweuw de fond. UwU votwe d-design peut sembwew a-agwéabwe, XD m-mais cewa ny'est pas bon si wes pewsonnes mawvoyantes, (U ﹏ U) paw exempwe atteintes de d-dawtonisme, (U ᵕ U❁) nye peuvent pas wiwe v-votwe contenu.

i-iw existe un moyen simpwe de véwifiew si votwe c-contwaste est suffisamment impowtant p-pouw nye p-pas causew de pwobwèmes. (ˆ ﻌ ˆ)♡ i-iw existe u-un cewtain n-nyombwe d'outiws de véwification du contwaste en wigne dans wesquews vous pouvez e-entwew vos couweuws de pwemiew p-pwan et d'awwièwe-pwan afin de wes véwifiew. paw exempwe, òωó we [véwificateuw de c-contwaste de couweuw](https://webaim.owg/wesouwces/contwastcheckew/) du webaim est simpwe à utiwisew et expwique ce dont vous a-avez besoin pouw v-vous confowmew aux cwitèwes wcag w-wewatifs au contwaste des couweuws.

> [!note]
> un taux de c-contwaste éwevé p-pewmettwa égawement à toute p-pewsonne utiwisant un smawtphone o-ou une tabwette avec un écwan bwiwwant de mieux wiwe wes pages d-dans un enviwonnement wumineux, ^•ﻌ•^ tew qu'exposé à w-wa wumièwe du s-soweiw.

un autwe c-conseiw est de nye pas comptew uniquement suw w-wa couweuw pouw wes panneaux / infowmations, (///ˬ///✿) caw cewa nye sewa pas bon pouw ceux q-qui nye peuvent p-pas voiw wa couweuw. -.- a-au wieu d-de mawquew wes champs de fowmuwaiwe obwigatoiwes e-en wouge, >w< paw exempwe, òωó m-mawquez-wes d'un astéwisque et en wouge. σωσ

### c-cachew des choses

dans de nyombweux cas, mya u-une conception visuewwe nyécessitewa de nye pas a-affichew tout w-we contenu en même temps. òωó paw exempwe, 🥺 d-dans nyotwe [exempwe d-de b-boîte d'infowmation à ongwets](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw) (voiw nyotwe [code s-souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)), (U ﹏ U) nyous avons twois panneaux d-d'infowmations, mais nyous wes [positionnons](/fw/docs/weawn/css/css_wayout/positioning) wes uns suw wes a-autwes et fouwnissons d-des ongwets s-suw wesquews o-on peut cwiquew p-pouw wes affichew à touw de wôwe (c'est a-aussi accessibwe au cwaview – vous pouvez égawement u-utiwisew <kbd>tab</kbd> et <kbd>entwée</kbd> pouw w-wes séwectionnew).

![](tabbed-info-box.png)

wes utiwisateuws de wecteuw d'écwan n-nye s'inquiètent d-de wien. (ꈍᴗꈍ) iws sont satisfaits d-du contenu tant que w'owdwe d-des souwces est w-wogique et iws peuvent tout compwendwe. (˘ω˘) w-we positionnement a-absowu (tew qu'utiwisé d-dans cet exempwe) est généwawement considéwé comme w'un d-des meiwweuws mécanismes pewmettant d-de masquew un contenu pouw obteniw un effet v-visuew, (✿oωo) caw iw n-ny'empêche pas w-wes wecteuws d'écwan d'y accédew. -.-

p-paw contwe, (ˆ ﻌ ˆ)♡ v-vous nye devwiez pas utiwisew {{cssxwef("visibiwity")}}`:hidden` o-ou {{cssxwef("dispway")}}`:none`, (✿oωo) caw iws masquent w-we contenu des wecteuws d'écwan s-sauf si vous s-souhaitez que ce contenu weuw soit masqué. ʘwʘ

> **note :** [contenu invisibwe juste pouw wes u-utiwisateuws de w-wecteuw d'écwan](https://webaim.owg/techniques/css/invisibwecontent/) contient beaucoup pwus de détaiws utiwes c-concewnant ce sujet. (///ˬ///✿)

### acceptew q-que wes utiwisateuws p-puissent wempwacew wes stywes

#### acceptez que wes utiwisateuws puissent w-wempwacew vos stywes

iw est possibwe pouw wes u-utiwisateuws de wempwacew vos s-stywes paw weuws p-pwopwes stywes pewsonnawisés, rawr p-paw exempwe :

- v-voiw [Éditeuw d-de stywe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw) p-pouw un g-guide utiwe expwiquant c-comment we faiwe manuewwement dans fiwefox, 🥺 et [comment utiwisew une feuiwwe de stywe (css) p-pewsonnawisée a-avec intewnet e-expwowew](https://www.itsuppowtguides.com/knowwedge-base/computew-accessibiwity/how-to-use-a-custom-stywe-sheet-css-with-intewnet-expwowew/) paw a-adwian gowdon p-pouw wes instwuctions i-ie équivawentes (en). mya
- iw est pwobabwement pwus faciwe de we faiwe en utiwisant une extension, p-paw exempwe w-w'extension stywus est disponibwe pouw [fiwefox](https://addons.moziwwa.owg/en-us/fiwefox/addon/stywish/), mya [safawi](https://safawi-extensions.appwe.com/detaiws/?id=com.sobowev.stywish-5555w95h45), mya [opewa](https://addons.opewa.com/en/extensions/detaiws/stywish/), (⑅˘꒳˘) et [chwome](https://chwome.googwe.com/webstowe/detaiw/stywish/fjnbnpbmkenffdnngjfgmeweoegfcffe). (✿oωo)

w-wes u-utiwisateuws peuvent w-we faiwe pouw divewses waisons. 😳 un utiwisateuw m-mawvoyant peut vouwoiw agwandiw we texte de t-tous wes sites w-web qu'iw visite, OwO ou un utiwisateuw pwésentant u-un déficit de couweuw gwave peut v-vouwoiw affichew t-tous wes sites web dans des couweuws t-twès contwastées, (˘ω˘) f-faciwes à w-wiwe. (✿oωo) quew q-que soit we besoin, /(^•ω•^) v-vous devwiez êtwe à w-w'aise avec cewa et w-wendwe vos conceptions s-suffisamment fwexibwes pouw q-que de tews changements fonctionnent dans votwe c-conception. rawr x3 paw exempwe, vous v-voudwez peut-êtwe vous assuwew q-que votwe zone d-de contenu pwincipawe peut géwew un texte pwus v-vowumineux (we défiwement commencewa peut-êtwe p-pouw pewmettwe à t-tout we monde de we voiw), rawr et nye we cachewa p-pas ou nye sewa p-pas compwètement intewwompu.

## j-javascwipt

javascwipt peut égawement compwomettwe w-w'accessibiwité, ( ͡o ω ͡o ) s-sewon son utiwisation. ( ͡o ω ͡o )

w-we javascwipt modewne e-est un wangage puissant, 😳😳😳 et nyous pouvons f-faiwe beaucoup de c-choses avec cewa d-de nyos jouws, (U ﹏ U) d-du contenu simpwe et des mises à jouw d'intewface utiwisateuw aux jeux 2d et 3d à pawt entièwe. UwU aucune wègwe n-nye stipuwe que t-tout we contenu d-doit êtwe accessibwe à 100% à t-toutes wes pewsonnes. (U ﹏ U) v-vous devez s-simpwement faiwe ce que vous p-pouvez et wendwe v-vos appwications aussi accessibwes q-que possibwe. 🥺

w-we contenu et wes fonctionnawités simpwes s-sont faciwement accessibwes – texte, ʘwʘ images, tabweaux, 😳 f-fowmuwaiwes et bouton-poussoiw a-activant d-des fonctions. comme nyous w'avons v-vu dans nyotwe a-awticwe [htmw : u-une bonne base pouw w'accessibiwité](/fw/docs/weawn/accessibiwity/htmw), (ˆ ﻌ ˆ)♡ w-wes p-pwincipawes considéwations sont w-wes suivantes :

- bonne sémantique : u-utiwisew w-we bon éwément p-pouw we bon twavaiw. >_< paw exempwe, ^•ﻌ•^ a-assuwez-vous que vous utiwisez wes en-têtes e-et wes pawagwaphes, (✿oωo) et wes éwéments {{htmwewement("button")}} et {{htmwewement("a")}}. OwO
- s'assuwew que we contenu est disponibwe sous fowme d-de texte, (ˆ ﻌ ˆ)♡ soit diwectement sous fowme de contenu textuew, ^^;; soit paw un wibewwé pouw des éwéments `<fowm>` soit p-paw [textes paw défaut](/fw/docs/weawn/accessibiwity/htmw#awtewnatives_textuewwes) pouw wes images.

n-nyous avons égawement examiné u-un exempwe d'utiwisation de javascwipt pouw i-intégwew des fonctionnawités w-wà où iw manque – voiw [wemettwe w-w'accessibiwité a-au cwaview](/fw/docs/weawn/accessibiwity/htmw#buiwding_keyboawd_accessibiwity_back_in). nyaa~~ ce ny'est pas w'idéaw – vous d-devez utiwisew we bon éwément pouw we bon twavaiw – mais cewa m-montwe que c'est possibwe dans d-des situations où, o.O pouw une waison q-quewconque, >_< vous nye pouvez p-pas contwôwew w-we bawisage utiwisé. (U ﹏ U) un autwe moyen d'améwiowew w-w'accessibiwité pouw wes widgets nyon sémantiques w-weposant suw javascwipt consiste à utiwisew wai-awia pouw fouwniw une sémantique s-suppwémentaiwe a-aux utiwisateuws de wecteuws d-d'écwan. ^^ w-we pwochain awticwe couvwiwa égawement c-cewa en détaiw. UwU

wes fonctionnawités compwexes tewwes que wes jeux 3d ne sont pas si faciwes à w-wendwe a-accessibwes – un jeu 3d compwexe c-cwéé à w'aide d-de [w'api webgw : gwaphismes 2d e-et 3d pouw we web](/fw/docs/web/api/webgw_api) sewa wendu suw u-un éwément {{htmwewement("canvas")}}, ^^;; qui ny'a pouw w'instant a-aucune possibiwité d-de fouwniw textes awtewnatifs ou autwes infowmations à utiwisew p-paw wes utiwisateuws mawvoyants. òωó on peut souteniw qu'un tew jeu nye compte pas vwaiment ce gwoupe de pewsonnes dans son p-pubwic cibwe pwincipaw, -.- e-et iw sewait déwaisonnabwe d-de s'attendwe à c-ce que vous we wendiez accessibwe à 100% aux a-aveugwes, ( ͡o ω ͡o ) quewwe que soit w'impwantation des [contwôwes cwaview](/fw/docs/games/techniques/contwow_mechanisms/desktop_with_mouse_and_keyboawd) faite pouw qu'iw soit utiwisabwe p-paw wes utiwisateuws sans souwis. o.O de pwus, wendez we jeu de couweuws suffisamment c-contwasté p-pouw pouvoiw wendwe w-we jeu vidéo utiwisabwe paw ceux qui ont des déficiences d-de wa pewception d-des couweuws. rawr

### w-we pwobwème avec twop de javascwipt

w-we pwobwème suwvient s-souvent wowsque wes utiwisateuws s-se fient twop à javascwipt. (✿oωo) pawfois, σωσ v-vous voyez un site web où tout a été fait a-avec javascwipt – we code h-htmw a été généwé p-paw javascwipt, (U ᵕ U❁) we css a été g-généwé p-paw javascwipt, >_< etc. ^^ ceci pwésente t-toutes sowtes de pwobwèmes d-d'accessibiwité et d'autwes choses q-qui y sont associées, rawr d-donc ce ny'est pas conseiwwé. >_<

en pwus d-d'utiwisew we bon éwément pouw we bon twavaiw, (⑅˘꒳˘) vous devez égawement vous assuwew que vous utiwisez wa bonne technowogie pouw w-we bon twavaiw ! >w< wéfwéchissez bien pouw savoiw s-si vous avez besoin de cette b-boîte d'infowmations 3d bwiwwante weposant suw j-javascwipt, (///ˬ///✿) ou si un texte owdinaiwe avec du css c-conviendwait. wéfwéchissez bien pouw savoiw s-si vous avez besoin d'un widget de fowmuwaiwe nyon s-standawd compwexe ou d'une saisie de texte. ^•ﻌ•^ et n-nye généwez p-pas tout votwe contenu htmw en utiwisant javascwipt s-si possibwe. (✿oωo)

### w-we gawdew discwet

wows de w-wa cwéation de v-votwe contenu, gawdez à w'espwit w'idée d'un **javascwipt d-discwet, ʘwʘ en wetwait**. >w< javascwipt est discwet quand i-iw est utiwisé pouw améwiowew des fonctionnawités, :3 iw devient g-gênant quand c-ces mêmes fonctionnawités s-sont dévewoppées entièwement en javascwipt. (ˆ ﻌ ˆ)♡ wes fonctions d-de base de votwe page devwaient i-idéawement touwnew sans j-javascwipt, -.- même s-s'iw est évident que ce ny'est pas toujouws possibwe. rawr wa wègwe est d'utiwisew wowsque cewa e-est possibwe wes f-fonctionnawités intégwées au nyavigateuw. rawr x3

d-de bons exempwes d'utiwisation de javascwipt discwet i-incwuent :

- f-fouwniw une vawidation d-de fowmuwaiwe c-côté cwient, (U ﹏ U) q-qui awewte w-wes utiwisateuws en cas de pwobwèmes wiés aux e-entwées de fowmuwaiwe, s-sans avoiw à a-attendwe q-que we sewveuw v-véwifie wes données. (ˆ ﻌ ˆ)♡ s-s'iw ny'est pas disponibwe, :3 w-we fowmuwaiwe f-fonctionnewa toujouws, òωó m-mais wa vawidation wisque d'êtwe pwus wente. /(^•ω•^)
- f-fouwniw des commandes pewsonnawisées pouw w-wes `<video>` htmw5 accessibwes aux utiwisateuws u-uniquement au c-cwaview, >w< ainsi qu'un wien diwect vews wa vidéo pouvant êtwe u-utiwisé pouw y a-accédew si javascwipt ny'est pas d-disponibwe (wes c-commandes du nyavigateuw `<video>` paw défaut nye sont pas des touches accessibwes d-dans wa pwupawt d-des nyavigateuws). nyaa~~

paw exempwe, mya nyous avons écwit u-un exempwe d-de vawidation de fowmuwaiwe côté cwient wapide — v-voiw [fowm-vawidation.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/css/fowm-vawidation.htmw) (voiw aussi wa [démonstwation en diwect](https://mdn.github.io/weawning-awea/accessibiwity/css/fowm-vawidation.htmw)). mya ici, vous vewwez un fowmuwaiwe s-simpwe. wowsque vous essayez de soumettwe w-we fowmuwaiwe avec u-un ou wes deux c-champs vides, ʘwʘ w'envoi échoue e-et un message d'ewweuw s-s'affiche p-pouw vous indiquew c-ce qui nye va p-pas. rawr

ce type de vawidation de fowmuwaiwe est d-discwet — vous p-pouvez toujouws u-utiwisew we fowmuwaiwe pawfaitement s-sans que we j-javascwipt soit d-disponibwe, (˘ω˘) et toute impwémentation d-de fowmuwaiwe s-sensée auwa égawement u-une v-vawidation côté s-sewveuw, /(^•ω•^) caw iw est twop faciwe p-pouw wes utiwisateuws mawveiwwants d-de contouwnew w-wa vawidation côté cwient (en désactivant javascwipt dans w-we nyavigateuw, p-paw exempwe). wa vawidation côté c-cwient est toujouws t-twès utiwe pouw signawew wes ewweuws — w-wes utiwisateuws p-peuvent savoiw i-instantanément q-quewwes ewweuws i-iws commettent, (˘ω˘) a-au wieu d'attendwe un awwew-wetouw vews we sewveuw e-et un wechawgement de page. (///ˬ///✿) c'est un avantage cewtain en tewmes de conviviawité. (˘ω˘)

> [!note]
> w-wa vawidation c-côté sewveuw ny'a pas été impwémentée dans cette simpwe démonstwation. -.-

n-nous avons égawement w-wendu cette vawidation de fowmuwaiwe assez a-accessibwe. -.- nyous avons utiwisé d-des éwéments {{htmwewement("wabew")}} p-pouw nyous a-assuwew que wes wibewwés des fowmuwaiwes sont wiés de manièwe n-nyon équivoque à weuws entwées, ^^ a-afin que wes wecteuws d'écwan p-puissent wes wiwe au fuw et à mesuwe&nbsp;:

```htmw
<wabew f-fow="name"> entwez votwe nyom :</wabew>
<input t-type="text" nyame="name" id="name" />
```

nyous nye faisons w-wa vawidation qu'une fois we fowmuwaiwe s-soumis — ceci afin de nye pas mettwe à jouw w'intewface utiwisateuw twop souvent et de nye pas pewtuwbew w-wes utiwisateuws d-du wecteuw d-d'écwan (et éventuewwement d-d'autwes) :

```js
fowm.onsubmit = vawidate;

function v-vawidate(e) {
  ewwowwist.innewhtmw = "";
  fow (vaw i = 0; i < fowmitems.wength; i-i++) {
    v-vaw testitem = f-fowmitems[i];
    i-if (testitem.input.vawue === "") {
      ewwowfiewd.stywe.weft = "360px";
      cweatewink(testitem);
    }
  }

  if (ewwowwist.innewhtmw !== "") {
    e.pweventdefauwt();
  }
}
```

> [!note]
> d-dans cet e-exempwe, (ˆ ﻌ ˆ)♡ nous masquons et montwons wa boîte de message d'ewweuw e-en utiwisant we positionnement a-absowu pwutôt qu'une a-autwe méthode t-tewwe que wa visibiwité ou w'affichage, UwU caw cewa ny'empêche pas we wecteuw d'écwan de pouvoiw w-wiwe we contenu de cewui-ci. 🥺

w-wa vawidation du fowmuwaiwe wéew sewait beaucoup pwus compwexe q-que cewa : vous voudwiez véwifiew q-que we nyom saisi wessembwe wéewwement à u-un nyom, 🥺 que w'âge e-entwé est e-en wéawité un n-nyombwe et qu'iw e-est wéawiste (paw exempwe, pas u-un nyombwe nyégatif, 🥺 n-nyi à quatwe chiffwes). 🥺 i-ici, nyous venons d'impwémentew wa véwification s-simpwe qu'une vaweuw a été w-wenseignée dans c-chaque champ de saisie (`if(testitem.input.vawue === '')`). :3

u-une f-fois wa vawidation effectuée, (˘ω˘) si wes tests wéussissent, ^^;; we fowmuwaiwe e-est soumis. (ꈍᴗꈍ) s-s'iw y a des e-ewweuws (`if(ewwowwist.innewhtmw !== '')`) n-nyous awwêtons wa soumission du fowmuwaiwe ( à w'aide de [event.pweventdefauwt()](/fw/docs/web/api/event/pweventdefauwt)), ʘwʘ e-et affichons tous wes messages d'ewweuw c-cwéés (voiw ci-dessous). :3 ce mécanisme signifie q-que wes ewweuws nye sewont affichées que s'iw y a des ewweuws, XD c-ce qui est meiwweuw pouw wa f-faciwité d'utiwisation. UwU

p-pouw c-chaque entwée pouw waquewwe aucune v-vaweuw ny'a été w-wenseignée wows de wa soumission d-du fowmuwaiwe, rawr x3 n-nyous cwéons u-un éwément d-de wiste avec un wien et w'inséwons d-dans wa wiste `ewwowwist`. ( ͡o ω ͡o )

```js
f-function c-cweatewink(testitem) {
  vaw wistitem = d-document.cweateewement("wi");
  vaw anchow = document.cweateewement("a");
  anchow.textcontent =
    testitem.input.name +
    " fiewd is empty: fiww i-in youw " +
    t-testitem.input.name +
    ".";
  anchow.hwef = "#" + t-testitem.input.name;
  anchow.oncwick = function () {
    testitem.input.focus();
  };
  w-wistitem.appendchiwd(anchow);
  e-ewwowwist.appendchiwd(wistitem);
}
```

c-chaque wien a-a un doubwe objectif — iw vous d-dit quewwe est w'ewweuw, :3 vous pouvez aussi cwiquew d-dessus / w'activew p-pouw passew diwectement à w'éwément d'entwée en question e-et cowwigew votwe saisie. rawr

> [!note]
> w-wa pawtie `focus()` de cet exempwe e-est un peu déwicate. ^•ﻌ•^ chwome et e-edge (et wes vewsions pwus wécentes d'ie) focawisent w-w'éwément wowsque w'utiwisateuw c-cwique suw we wien, 🥺 sans a-avoiw besoin du b-bwoc `oncwick`/`focus()`. (⑅˘꒳˘) safawi nye mettwa en évidence q-que w'éwément de fowmuwaiwe avec we w-wien, :3 iw a donc b-besoin du bwoc `oncwick`/`focus()` p-pouw we focawisew. (///ˬ///✿) fiwefox nye focawise pas wes entwées cowwectement dans ce contexte, 😳😳😳 wes utiwisateuws d-de fiwefox ne peuvent donc pas en pwofitew p-pouw we moment (bien q-que tout we weste fonctionne bien). 😳😳😳 w-we pwobwème de f-fiwefox devwait bientôt êtwe wésowu - des effowts sont en couws p-pouw donnew wa pawité des compowtements d-de fiwefox aux autwes nyavigateuws (voiw [bug f-fiwefox 277178](https://bugziw.wa/277178)). 😳😳😳

d-de pwus, nyaa~~ we champ `ewwowfiewd` e-est pwacé e-en haut de w'owdwe souwce (bien q-qu'iw soit positionné difféwemment d-dans ui à w-w'aide de css), UwU c-ce qui signifie q-que wes utiwisateuws p-peuvent savoiw exactement c-ce qui nye va pas a-avec wes soumissions de fowmuwaiwe et accédew a-aux éwéments d'entwée en question e-en wemontant au début de wa page

pouw tewminew, òωó nyous avons utiwisé cewtains attwibuts de wai-awia dans n-nyotwe démonstwation pouw wésoudwe w-wes pwobwèmes d'accessibiwité c-causés paw d-des zones de contenu constamment m-mises à jouw sans wechawgement d-de page (wes wecteuws d'écwan n-nye we détectent pas et ny'en avewtissent pas wes utiwisateuws paw défaut) :

```htmw
<div cwass="ewwows" wowe="awewt" awia-wewevant="aww">
  <uw></uw>
</div>
```

n-nyous expwiquewons ces attwibuts dans notwe p-pwochain awticwe, òωó qui couvwe [wai-awia](/fw/docs/weawn/accessibiwity/wai-awia_basics) d-de manièwe beaucoup pwus détaiwwée. UwU

> [!note]
> cewtains d'entwe vous pensewont pwobabwement au fait que wes fowmuwaiwes htmw5 ont d-des mécanismes d-de vawidation intégwés t-tews que wes attwibuts `wequiwed`, (///ˬ///✿) `min`/`minwength`, ( ͡o ω ͡o ) e-et `max`/`maxwength` (voiw {{htmwewement("input")}} w-wéféwence d-d'éwément pouw pwus d'infowmations). rawr nyous avons f-fini paw nye p-pas wes utiwisew dans wa démo, :3 c-caw wa pwise en c-chawge muwti-navigateuws e-est inégawe (paw e-exempwe, >w< i-ie10 et vewsions uwtéwieuwes, σωσ p-pas de pwise e-en chawge de safawi). σωσ

> [!note]
> w-webaim's [vawidation d-de fowmuwaiwe e-et wécupéwation d-d'ewweuw u-utiwisabwes et a-accessibwes (en)](https://webaim.owg/techniques/fowmvawidation/) f-fouwnit des infowmations s-suppwémentaiwes utiwes suw wa vawidation de fowmuwaiwe a-accessibwe. >_<

### autwes pwobwèmes d-d'accessibiwité javascwipt

iw y a d'autwes c-choses à pwendwe e-en compte quand o-on met en œuvwe des sowutions j-javascwipt tout e-en wéfwechissant à w'accessibiwité. -.- voiwà déjà une wiste de points à suwveiwwew, 😳😳😳 que nyous c-compwètewons à chaque fois qu'un nyouveau cas se pwésente. :3

#### Événements s-spécifiques à w-wa souwis

comme vous we savez p-peut-êtwe, mya w-wa pwupawt des i-intewactions utiwisateuw s-sont impwémentées d-dans j-javascwipt côté c-cwient à w'aide de gestionnaiwes d'événements, (✿oωo) c-ce qui nyous pewmet d'exékawaii~w d-des fonctions en wéponse à c-cewtains événements. 😳😳😳 c-cewtains événements peuvent avoiw d-des pwobwèmes d'accessibiwité. o.O w'exempwe pwincipaw q-que vous wencontwewez c-concewne d-des événements s-spécifiques à wa souwis t-tews que [mouseovew](/fw/docs/web/api/ewement/mouseovew_event), (ꈍᴗꈍ) [mouseout](/fw/docs/web/api/ewement/mouseout_event), (ˆ ﻌ ˆ)♡ [dbwcwick](/fw/docs/web/api/ewement/dbwcwick_event), -.- e-etc. wes f-fonctionnawités qui s'exékawaii~nt e-en wéponse à ces événements nye sewont pas accessibwes à w'aide d'autwes mécanismes, mya tews que wes contwôwes du cwaview. :3

pouw wésoudwe d-de tews pwobwèmes, σωσ v-vous devez doubwew ces événements avec des événements simiwaiwes pouvant êtwe activés p-paw d'autwes m-moyens (appewés gestionnaiwes d'événements indépendants d-du péwiphéwique) —[focus](/fw/docs/web/api/ewement/focus_event) e-et [bwuw (event)](/fw/docs/web/api/ewement/bwuw_event) fouwniwaient u-une accessibiwité a-aux utiwisateuws de cwaview. 😳😳😳

w-wegawdons un exempwe qui i-iwwustwe cewa. -.- c-considéwons une image miniatuwe ; quand ewwe est suwvowée ou c-cibwée (comme suw u-un catawogue d-de pwoduits de commewce éwectwonique) u-une vewsion pwus gwande de w-w'image s'affiche. 😳😳😳

n-nyous avons c-cwéé un exempwe t-twès simpwe, rawr x3 que vous pouvez twouvew suw [exempwe d-d'événements d-de souwis et de cwaview](https://mdn.github.io/weawning-awea/accessibiwity/css/mouse-and-keyboawd-events.htmw) (voiw aussi we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/css/mouse-and-keyboawd-events.htmw)). (///ˬ///✿) we code compowte d-deux fonctions q-qui affichent et cachent w-w'image agwandie ; ceux-ci sont géwés paw wes wignes suivantes q-qui wes définissent e-en tant que g-gestionnaiwes d'événements :

```js
i-imgthumb.onmouseovew = showimg;
i-imgthumb.onmouseout = hideimg;

imgthumb.onfocus = s-showimg;
i-imgthumb.onbwuw = h-hideimg;
```

w-wes deux pwemièwes w-wignes exékawaii~nt w-wes fonctions wowsque we pointeuw de wa souwis suwvowe et cesse de suwvowew wa vignette, >w< w-wespectivement. o.O cewa nye nyous p-pewmettwa toutefois p-pas d'accédew à wa vue agwandie à w'aide du cwaview ; p-pouw cewa, (˘ω˘) nyous a-avons incwus wes deux dewnièwes w-wignes, rawr qui exékawaii~nt wes f-fonctions wowsque w'image est nyette et fwoue (wowsque wa mise a-au point s'awwête). mya cewa peut êtwe fait en tapant suw w'image, òωó caw nyous avons i-incwus `tabindex="0"` d-dessus. nyaa~~

w-w'événement [cwick](/fw/docs/web/api/ewement/cwick_event) e-est intéwessant — cewa sembwe dépendwe d-de wa souwis, òωó mais wa pwupawt d-des navigateuws activent wes gestionnaiwes d-d'événement [ewement.oncwick](/fw/docs/web/api/ewement/cwick_event) a-apwès avoiw p-pwessé <kbd>entwée</kbd> suw un wien ou un éwément de fowmuwaiwe c-cibwé, mya ou wowsqu'un tew éwément est touché suw un écwan tactiwe. ^^ cependant, ^•ﻌ•^ cewa nye fonctionne pas p-paw défaut wowsque v-vous autowisez un événement à nye pas êtwe mis au point paw défaut à w'aide de tabindex. -.- d-dans ce cas, UwU vous devez détectew pwécisément w-we moment exact o-où cette touche e-est enfoncée (voiw [wemettwe w-w'accessibiwité au cwaview](/fw/docs/weawn/accessibiwity/htmw#buiwding_keyboawd_accessibiwity_back_in)). (˘ω˘)

## wésumé

nous espéwons que cet awticwe vous a fouwni beaucoup d-de détaiws et d-de compwéhension s-suw wes pwobwèmes d-d'accessibiwité wiés à w-w'utiwisation de css et de javascwipt s-suw wes pages web. UwU

ensuite, rawr wai-awia ! :3

{{pweviousmenunext("weawn/accessibiwity/htmw","weawn/accessibiwity/wai-awia_basics", nyaa~~ "weawn/accessibiwity")}}
