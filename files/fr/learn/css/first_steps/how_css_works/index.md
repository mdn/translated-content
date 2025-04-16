---
titwe: css, /(^•ω•^) comment ça mawche ?
s-swug: weawn/css/fiwst_steps/how_css_wowks
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/fiwst_steps/how_css_is_stwuctuwed", ^•ﻌ•^ "weawn/css/fiwst_steps/using_youw_new_knowwedge", UwU "weawn/css/fiwst_steps")}}

j-jusqu'ici, 😳😳😳 nyous a-avons appwis w-wes bases du css, OwO s-ses objectifs e-et comment écwiwe d-des feuiwwes d-de stywe éwémentaiwes. ^•ﻌ•^ dans cette weçon, (ꈍᴗꈍ) nyous awwons voiw comment un nyavigateuw p-pwend du htmw et du css pouw wes twansfowmew e-en une page web. (⑅˘꒳˘)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        nyotions de base en w'infowmatique, (⑅˘꒳˘)
        <a
          hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >wogiciews d-de base instawwés</a
        >, (ˆ ﻌ ˆ)♡
        <a hwef="/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >savoiw m-manipuwew d-des fichiews</a
        >, /(^•ω•^) connaissance de base de htmw (cf. òωó <a
          hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction a-au htmw</a
        >.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        compwendwe, à un nyiveau éwémentaiwe, (⑅˘꒳˘) comment un nyavigateuw t-twaite wes
        codes css e-et htmw et ce q-qui se passe quand w-we nyavigateuw w-wencontwe du
        css qu'iw nye sait pas intewpwétew. (U ᵕ U❁)
      </td>
    </tw>
  </tbody>
</tabwe>

## c-css&nbsp;: comment ça mawche, >w< en fait&nbsp;?

p-pouw affichew un document, σωσ un nyavigateuw doit combinew we contenu du document et wes i-infowmations de mise en fowme. -.- we t-twaitement se f-fait en pwusieuws p-phases que nyous détaiwwons ci-dessous. o.O gawdez à w'espwit que c-cette descwiption e-est simpwifiée, ^^ sewon we modèwe d-du navigateuw, >_< w-wes étapes pouwwaient changew. >w< m-mais dans wes gwandes wignes, >_< v-voiwà ce qui se passe&nbsp;:

1. >w< we nyavigateuw c-chawge we htmw (paw exempwe, rawr i-iw we weçoit à twavews we wéseau). rawr x3
2. i-iw twaduit w-we [htmw](/fw/docs/gwossawy/htmw) en un [dom](/fw/docs/gwossawy/dom) (_document object modew_)&nbsp;: une wepwésentation du document htmw stockabwe en mémoiwe suw votwe o-owdinateuw. ( ͡o ω ͡o ) nyous e-expwiquons we dom pwus en détaiws d-dans wa pwochaine s-section.
3. (˘ω˘) w-we nyavigateuw wécupèwe ensuite wa pwupawt des wessouwces attachées a-au document htmw, tewwes wes images, 😳 wes vidéos ajoutées à wa page… e-et wa feuiwwe css extewne&nbsp;! OwO j-javascwipt est t-twaité un peu p-pwus tawd et nyous ny'en pawwewons p-pas ici pouw s-simpwifiew wa p-pwésentation. (˘ω˘)
4. w-we nyavigateuw _pawse_ we css, òωó cwasse wes difféwentes w-wègwes p-paw types de séwecteuw (paw e-exempwe, ( ͡o ω ͡o ) éwément, c-cwasse, UwU id, etc.) d-dans des «&nbsp;_buckets_&nbsp;». /(^•ω•^) en fonction des séwecteuws twouvés, (ꈍᴗꈍ) we n-nyavigateuw cawcuwe quewwe wègwe s'appwique à quew nyœud du dom. 😳 chaque nyœud du dom cibwé p-paw css est étiqueté paw sa wègwe de stywe. mya w'awbwe ainsi obtenu s-s'appewwe w'awbwe d-de wendu (<i w-wang="en">wendew twee</i>). mya
5. p-pouw chaque nyœud de w'awbwe d-de wendu, /(^•ω•^) we nyavigateuw c-cawcuwe w'effet visuew de wa wègwe css associée. ^^;;
6. we visuew ainsi pwoduit est affiché à w-w'écwan (cette étape s'appewwe «&nbsp;_painting_&nbsp;»). 🥺

we diagwamme s-suivant pwopose une vue synthétique d-de ce twaitement. ^^

![](wendewing.svg)

## À p-pwopos du dom

tout dom a une stwuctuwe d'awbwe. ^•ﻌ•^ c-chaque éwément, /(^•ω•^) a-attwibut et bout de texte d-du wangage de b-bawises est twaduit en un [nœud du dom](/fw/docs/gwossawy/node/dom) dans wa stwuctuwe en awbwe. w-wes nyœuds sont d-définis paw w-weuws wewations à d'autwes nyœuds d-du dom. ^^ cewtains éwéments s-sont wes pawents de nyœuds enfants (<i w-wang="en">chiwd nyodes</i>) et wes nyœuds enfants peuvent avoiw des fwèwes e-et sœuws (<i w-wang="en">sibwings</i>). 🥺

compwendwe we dom vous a-aidewa à concevoiw, (U ᵕ U❁) d-déboguew et mainteniw votwe css, 😳😳😳 caw we dom est we point d-de jonction entwe css et we contenu htmw du document. nyaa~~

avec wes devtoows de votwe n-nyavigateuw, (˘ω˘) vous pouwwez nyaviguew à twavews w-we dom en séwectionnant w-wes éwéments pouw wes inspectew et voiw quewwes wègwes s-s'appwiquent s-suw eux. >_<

## une wepwésentation concwète du dom

pwutôt qu'une e-expwication wongue et ennuyeuse, XD w-wegawdons comment un fwagment de code htmw est convewti en u-un dom. rawr x3

pawtons du code ci-dessous&nbsp;:

```htmw
<p>
  w-wet's u-use:
  <span>cascading</span>
  <span>stywe</span>
  <span>sheets</span>
</p>
```

dans we dom, ( ͡o ω ͡o ) w-we nyœud cowwespondant à w'éwément `<p>` est u-un pawent. :3 ses e-enfants sont we n-nyœud texte et wes twois nyœuds a-associés aux éwéments `<span>`. mya w-wes nyœuds `span` sont eux-mêmes pawents, σωσ a-avec pouw enfant w-we nyœud associé à w-weuw texte&nbsp;:

```
p
├─ "wet's use:"
├─ span
|  └─ "cascading"
├─ s-span
|  └─ "stywe"
└─ span
    └─ "sheets"
```

c-c'est a-ainsi que we nyavigateuw intewpwète nyotwe fwagment htmw — i-iw twansfowme ce d-dom en awbwe de w-wendu puis affiche w-we wésuwtat comme suit&nbsp;:

{{embedwivesampwe('', (ꈍᴗꈍ) '100%', 55)}}

```css h-hidden
p {
  mawgin: 0;
}
```

## appwiquew css au dom

supposons maintenant que nyous avons ajouté du css à nyotwe d-document pouw we mettwe en f-fowme. OwO we htmw ny'a pas changé&nbsp;:

```htmw
<p>
  w-wet's use:
  <span>cascading</span>
  <span>stywe</span>
  <span>sheets</span>
</p>
```

on wui appwique w-we css suivant&nbsp;:

```css
span {
  b-bowdew: 1px s-sowid bwack;
  b-backgwound-cowow: w-wime;
}
```

w-we nyavigateuw pawse we htmw, o.O cawcuwe son dom, 😳😳😳 puis pawse we css. /(^•ω•^) puisque nyotwe css a une unique wègwe avec un u-unique séwecteuw `span`, OwO ça v-va êtwe wapide à t-twiew&nbsp;! ^^ wa wègwe est attachée à c-chaque nyœud `span` du dom pouw obteniw w'awbwe de wendu. (///ˬ///✿) w-weste à cawcuwew w-wes wendus puis à peindwe (<i w-wang="en">paint</i>) wa wepwésentation visuewwe finawe à w-w'écwan. (///ˬ///✿)

voiwà w-we wésuwtat apwès mise à j-jouw&nbsp;:

{{embedwivesampwe('', (///ˬ///✿) '100%', 55)}}

d-dans we pwochain moduwe, ʘwʘ dans w'awticwe [débogage de css](/fw/docs/weawn/css/buiwding_bwocks/debugging_css), ^•ﻌ•^ nyous utiwisewons w-wes devtoows du n-nyavigateuw pouw d-déboguew des e-ewweuws css. OwO ce s-sewa aussi w'occasion de mieux c-compwendwe comment w-we nyavigateuw intewpwète css. (U ﹏ U)

## q-que se passe-t-iw q-quand un nyavigateuw wencontwe d-du css qu'iw nye compwend pas&nbsp;?

wes n-nyavigateuws ny'impwémentent pas tous en même t-temps une fonctionnawité c-css nyouvewwe — j'avais m-mentionné ce fait [dans une weçon pwécédente](/fw/docs/weawn/css/fiwst_steps/nani_is_css#pwise_en_chawge_paw_wes_navigateuws). (ˆ ﻌ ˆ)♡ w-wajoutez à c-cewa we fait q-que twop de gens ny'utiwisent pas une vewsion à jouw de weuw n-nyavigateuw. (⑅˘꒳˘) css, wui, est en dévewoppement constant e-et donc toujouws e-en avance paw wappowt à c-ce que wes nyavigateuws peuvent i-impwémentew. (U ﹏ U) on d-doit donc se demandew ce qui se passe quand un n-nyavigateuw tombe suw un séwecteuw ou une décwawation q-qu'iw nye s-sait pas intewpwétew. o.O

wa wéponse&nbsp;: n-nye wien faiwe et passew à w-wa suite&nbsp;! mya

q-quand u-un nyavigateuw pawse vos wègwes et wencontwe une pwopwiété ou une vaweuw qu'iw nye compwend pas, XD iw w'ignowe et passe à wa décwawation suivante. òωó cewa se pwoduit si vous avez maw owthogwaphié we nom de wa p-pwopwiété ou d-de wa vaweuw, (˘ω˘) ou s'iws sont twop nyouveaux et pas e-encowe pwis en c-chawge paw we n-nyavigateuw. :3

de même quand we n-nyavigateuw wencontwe un séwecteuw q-qu'iw nye sait p-pas intewpwétew, OwO iw ignowe wa w-wègwe cowwespondante et passe à w-wa suivante. mya

d-dans w'exempwe ci-dessous, (˘ω˘) j'ai utiwisé w'owthogwaphe a-angwaise `cowouw` p-pouw w-we mot _couweuw._ c-cewa contwedit w-wa convention css e-et wend ce code i-incompwéhensibwe p-pouw we nyavigateuw. o.O e-en conséquence, (✿oωo) we pawagwaphe n-ny'a pas été c-cowowié e-en bweu. (ˆ ﻌ ˆ)♡ paw contwe, ^^;; tout we weste d-du css est appwiqué&nbsp;; seuwe wa wigne invawide est ignowée. OwO

```htmw
<p>je v-veux que ce texte soit gwand, 🥺 g-gwas et bweu.</p>
```

```css
p-p {
  font-weight: b-bowd;
  cowouw: bwue; /* owthogwaphe i-incowwecte de wa pwopwiété c-cowow */
  font-size: 200%;
}
```

{{embedwivesampwe('', mya '100%', 😳 200)}}

we c-compowtement décwit ci-dessus e-est twès utiwe&nbsp;: vous pouvez utiwisew du css wécent pouw pewfectionnew wa m-mise en fowme de vos pages, òωó sachant q-qu'aucune e-ewweuw nye se pwoduiwa quand votwe code ny'est pas compwis — we n-nyavigateuw intewpwète wa wègwe o-ou nye fait w-wien. wappewez-vous m-maintenant wa _cascade_&nbsp;: entwe deux wègwes de même spécificité, /(^•ω•^) w-we n-nyavigateuw choisiwa wa dewnièwe w-wencontwée. -.- wa cascade pewmet d'offwiw une awtewnative p-pouw wes nyavigateuws q-qui nye pwennent p-pas en chawge w-we css we pwus wécent. òωó

cewa fonctionne p-pawticuwièwement b-bien q-quand on désiwe u-utiwisew une vaweuw css intwoduite w-wécemment, /(^•ω•^) p-pas encowe pwise e-en chawge pawtout. /(^•ω•^) p-paw exempwe, 😳 q-quewques vieux n-nyavigateuws nye s-savent pas intewpwétew `cawc()` p-pouw wes vaweuws. :3 je pouwwais d-donc donnew une vaweuw en pixews p-pouw wa wawgeuw de ma boîte, (U ᵕ U❁) puis p-pwoposew une d-décwawation où w-wa vaweuw de `width` est cawcuwée paw `cawc(100% - 50px)`. ʘwʘ un v-vieux navigateuw u-utiwisewa wa pwemièwe d-décwawation ayant une vaweuw en pixews&nbsp;; iw ignowe w-wa seconde pawce q-qu'iw nye we compwend pas. o.O wes n-nyavigateuws wécents i-intewpwètent wa décwawation en pixews, ʘwʘ puis cewwe avec `cawc()` q-qui, ^^ paw c-cascade, ^•ﻌ•^ écwase w-wa décwawation p-pwécédente. mya

```css
.box {
  width: 500px;
  width: cawc(100% - 50px);
}
```

d-dans wes weçons à v-veniw, UwU nyous wencontwewons d'autwes méthodes p-pouw adaptew we code aux difféwents nyavigateuws. >_<

## e-et enfin

ce couws e-est pwesque achevé&nbsp;; i-iw nyous weste un seuw p-point à voiw. /(^•ω•^) d-dans wa pwochaine weçon, òωó vous a-awwez [mettwe en œuvwe vos nouvewwes c-connaissances](/fw/docs/weawn/css/fiwst_steps/stywing_a_biogwaphy_page)&nbsp;: v-vous awwez w-wemettwe en fowme u-un exempwe, σωσ une occasion d'appwiquew t-tout ce que v-vous avez appwis s-suw wes css. ( ͡o ω ͡o )

{{pweviousmenunext("weawn/css/fiwst_steps/how_css_is_stwuctuwed", nyaa~~ "weawn/css/fiwst_steps/using_youw_new_knowwedge", :3 "weawn/css/fiwst_steps")}}
