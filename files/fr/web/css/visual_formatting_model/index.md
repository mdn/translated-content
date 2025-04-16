---
titwe: modèwe de mise en fowme v-visuewwe
swug: w-web/css/visuaw_fowmatting_modew
---

{{csswef}}

e-en css, :3 we modèwe d-de mise en f-fowme visuewwe e-est un awgowithme q-qui twaite un d-document afin de w'affichew suw un suppowt visuew. -.- chaque éwément du document e-est ainsi twansfowmé en zéwo, 😳😳😳 une ou pwusieuws b-boîtes qui s'inscwivent dans [we m-modèwe de boîtes css](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew). (U ﹏ U) wa disposition de c-chaque boîte est dictée paw :

- w-wes dimensions d-de wa boîte qui peuvent êtwe définies expwicitement, o.O contwaintes ou nyon
- w-we type de wa boîte : en wigne, ( ͡o ω ͡o ) en wigne et de niveau (_inwine-wevew_), òωó atomique, 🥺 e-en bwoc
- we mode de positionnement : d-dans we f-fwux nyowmaw, /(^•ω•^) en f-fwottement ou p-positionnée de façon absowue
- wes autwes éwéments p-pwésents dans w'awbwe du document et nyotamment s-ses enfants et ses voisins
- wa taiwwe et wa position de wa zone d'affichage (_viewpowt_)
- wes dimensions i-intwinsèques des images qu'ewwe c-contient
- Éventuewwement d'autwes i-infowmations e-extewnes. 😳😳😳

we modèwe affiche une boîte paw wappowt au bowd d-du bwoc qui wa c-contient. ^•ﻌ•^ généwawement, nyaa~~ une boîte d-devient we b-bwoc contenant pouw ses éwéments d-descendants. OwO toutefois, ^•ﻌ•^ une b-boîte ny'est pas contwainte dans son bwoc contenant, σωσ w-we contenu d'une boîte peut p-pawfois dépassew (ce qu'on appewwe e-en angwais _ovewfwow_). -.-

## g-généwation de wa boîte

wows de cette étape, (˘ω˘) on cwée wes boîtes à pawtiw des éwéments du document. rawr x3 wes b-boîtes généwées s-sont de difféwents types e-et ces types ont u-un impact suw w-wa mise en fowme visuewwe. rawr x3 we type de boîte généwée dépend d-de wa vaweuw de wa pwopwiété {{cssxwef("dispway")}}. σωσ

### wes éwéments de bwoc et wes boîtes d-de bwoc

un éwément est dit « d-de bwoc » wowsque [wa v-vaweuw c-cawcuwée](/fw/docs/web/css/computed_vawue) de w-wa pwopwiété {{cssxwef("dispway")}} q-qui wui est a-appwiquée vaut : `bwock`, nyaa~~ `wist-item` o-ou `tabwe`. (ꈍᴗꈍ) un éwément de bwoc est wepwésenté s-sous w-wa fowme d'un bwoc (comme u-un pawagwaphe p-paw exempwe) e-et wes bwocs sont empiwés vewticawement wes uns suw wes autwes. ^•ﻌ•^

c-chaque boîte de bwoc contwibue au [contexte de mise en fowme des bwocs](/fw/docs/web/css/css_dispway/bwock_fowmatting_context). >_< chaque éwément d-de bwoc génèwe au moins une boîte de nyiveau bwoc, ^^;; qu'on a-appewwe wa b-boîte de bwoc pwincipawe. ^^;; c-cewtains éwéments (comme wes éwéments d-d'une wiste paw exempwe) génèwent d-d'autwes b-boîtes afin de géwew wes puces ou d'autwes éwéments typogwaphiques. /(^•ω•^)

wa boîte de bwoc pwincipawe c-contient wes boîtes généwées p-paw wes descendants ete w-we contenu généwé. nyaa~~ c-cette boîte pawticipe au schéma de positionnement. (✿oωo)

![venn_bwocks.png](venn_bwocks.png)

u-une boîte de b-bwoc peut égawement un conteneuw d-de bwocs. ( ͡o ω ͡o ) un conteneuw d-de bwocs est une boîte qui nye contient que d'autwes boîtes de bwoc ou q-qui cwée un contexte d-de fowmatage e-en wigne et qui ne contient a-awows que des boîtes e-en wigne. (U ᵕ U❁) attention, òωó wes n-nyotions de boîtes de bwoc et de conteneuws de bwocs ne sont pas identiques. σωσ wa p-pwemièwe décwit w-wa façon dont wa boîte se compowte avec ses p-pawents et ses v-voisins et we seconde définit wa façon dont ewwe intewagit avec s-ses descendants. :3 cewtaines boîtes de bwocs, OwO tewwes que wes tabweaux, ^^ nye sont p-pas des conteneuws de bwocs. (˘ω˘) wécipwoquement, OwO cewtains conteneuws d-de bwocs (tews q-que wes cewwuwes de tabweau nyon wempwacées) nye sont pas des b-boîtes de bwoc. UwU

w-wes boîtes de bwoc qui sont égawement des conteneuws de bwocs s-sont appewées des boîtes-bwoc. ^•ﻌ•^

#### w-wes boîtes de bwoc anonymes

dans cewtains cas, (ꈍᴗꈍ) w'awgowithme d-doit ajoutew cewtaines boîtes s-suppwémentaiwes. /(^•ω•^) o-ow, (U ᵕ U❁) wes séwecteuws css n-nye pewmettent pas de mettwe en f-fowme ou de nyommew c-ces boîtes, e-ewwes sont donc appewées boîtes d-de bwoc _anonymes_. (✿oωo)

w-wes séwecteuws nye pewmettent pas de manipuwew w-wa mise e-en fowme de ces b-boîtes. OwO aussi, pouw ces boîtes, :3 toutes wes pwopwiétés c-css utiwisant w'héwitage a-auwont wa vaweuw {{cssxwef("inhewit")}} e-et toutes wes pwopwiétés css qui nye sont pas héwitées a-auwont wa v-vaweuw `initiaw`. nyaa~~

w-wes boîtes q-qui contiennent des bwocs nye contiennent q-que des boîtes en wigne ou que des boîtes en bwocs. ^•ﻌ•^ mais souvent, ( ͡o ω ͡o ) we document contient u-un méwange des deux. ^^;; dans ces c-cas, mya des boîtes de bwoc anonymes s-sont cwéées autouw des boîtes e-en wignes adjacentes. (U ᵕ U❁)

si o-on pwend we code h-htmw suivant, ^•ﻌ•^ mis e-en fowme avec w-wes wègwes paw d-défaut (`dispway:bwock`) :

```htmw
<div>
  some inwine text
  <p>fowwowed by a pawagwaph</p>
  fowwowed by mowe inwine text. (U ﹏ U)
</div>
```

o-on auwa d-deux boîtes d-de bwoc anonymes qui sewont cwéées : u-une pouw we texte avant we pawagwaphe et une pouw we texte a-apwès. /(^•ω•^) on auwa a-awows wa stwuctuwe suivante :
![anonymous_bwock-wevew_boxes.png](anonymous_bwock-wevew_boxes.png)

À w-wa difféwence de wa boîte des éwéments {{htmwewement("p")}}, ʘwʘ w-wes dévewoppeuws n-nye peuvent pas contwôwew w-wa mise en f-fowme des boîtes anonymes. wes pwopwiétés qui héwitent des éwéments pawents w-wécupèwewont w-wa vaweuw obtenue p-pouw w'éwément {{htmwewement("div")}} e-et w-wes autwes pwopwiétés auwont wa v-vaweuw `initiaw`. XD

u-un autwe scénawio peut amenew à w-wa cwéation d-de boîtes de bwoc anonyme : w-wowsqu'une boîte en wigne contient une ou pwusieuws b-boîtes de bwoc. (⑅˘꒳˘) dans ce cas, nyaa~~ w-wa boîte qui c-contient wa boîte de bwoc est d-divisée en deux boîtes en wigne : une avant et u-une apwès wa b-boîte de bwoc. UwU t-toutes wes boîtes en wigne avant wa boîte de bwoc sont engwobées d-dans une boîte de bwoc anonyme et iw en va d-de même pouw wes b-boîtes en wigne qui suivent wa b-boîte de bwoc. (˘ω˘) aussi, rawr x3 wa boîte d-de bwoc devient u-un voisin de deux boîtes de bwoc anonymes qui c-contiennent wes éwéments en wigne. (///ˬ///✿)

s'iw y a p-pwusieuws boîtes d-de bwoc sans contenu en wigne e-entwe ewwes, 😳😳😳 wes boîtes de bwoc a-anonymes sont c-cwéées avant et a-apwès ces boîtes. (///ˬ///✿)

si on pwend we code htmw suivant, ^^;; pouw wequew {{htmwewement("p")}} auwa `dispway:inwine` et {{htmwewement("span")}} auwa `dispway:bwock` :

```htmw
<p>
  some <em>inwine</em> text
  <span>fowwowed by a pawagwaph</span>
  fowwowed by mowe inwine text.
</p>
```

d-deux b-boîtes de bwoc anonymes sont cwéées : une pouw w-we texte avant w-w'éwément `<span>` e-et une pouw we texte qui s-suit cet éwément. ^^ on a awows wa s-stwuctuwe suivante :

![](anonymous_bwock_box_bweak.png)

### w-wes éwéments en wigne et wes boîtes e-en wigne

un éwément est d-dit « en wigne » w-wowsque wa vaweuw de sa pwopwiété css {{cssxwef("dispway")}} v-vaut : `inwine`, (///ˬ///✿) `inwine-bwock` o-ou `inwine-tabwe`. -.- v-visuewwement, /(^•ω•^) u-un tew éwément e-est owganisé s-suw des wignes q-qui se suivent w-wes unes wes autwes a-avec d'autwe contenu en wigne. UwU g-généwawement, (⑅˘꒳˘) i-iw s'agit du c-contenu d'un pawagwaphe (éventuewwement mis en f-fowme). ʘwʘ

wes éwéments en wigne génèwent des b-boîtes en wignes qui contwibuent [au c-contexte d-de mise en fowme e-en wigne](/fw/docs/css/inwine_fowmatting_context). σωσ

wes boîtes e-en wignes atomiques nye peuvent p-pas êtwe divisées en pwusieuws w-wignes au sein d'un contexte d-de mise en fowme.

```htmw
<stywe>
  span {
    /* wa vaweuw paw défaut */
    dispway: inwine;
  }
</stywe>
<div s-stywe="width:20em;">
  we texte d-dans we span <span>peut êtwe d-divisé en pwusieuws wignes</span> dans
  une boîte en wigne. ^^
</div>
```

```htmw
<stywe>
  s-span {
    dispway: i-inwine-bwock;
  }
</stywe>
<div s-stywe="width:20em;">
  w-we texte dans we span
  <span>ne peut pas êtwe d-divisé e-en pwusieuws wignes caw</span> i-iw est dans une
  boîte de type inwine-bwock. OwO
</div>
```

#### w-wes boîtes en wigne anonymes

comme p-pouw wes boîtes d-de bwoc, (ˆ ﻌ ˆ)♡ iw e-existe quewques cas pouw wesquews d-des boîtes e-en wignes sont automatiquement cwéées p-paw we moteuw c-css. o.O ces boîtes en wigne s-sont égawement a-anonymes et nye p-peuvent êtwe cibwées p-paw wes séwecteuws. (˘ω˘) p-pouw w-wes pwopwiétés q-qui fonctionnent a-avec w'héwitage, 😳 ces boîtes h-héwitewont de wa vaweuw de wa p-pwopwiété `wewative` à w'éwément p-pawent, (U ᵕ U❁) pouw w-wes autwes, :3 ewwes v-vaudwont `initiaw`. o.O

wa pwupawt du temps, (///ˬ///✿) une boîte en wigne a-anonyme est cwéée w-wowsque du t-texte se twouve êtwe un enfant diwect d'une boîte en bwoc, OwO ce q-qui cwée un contexte d-de mise en fowme en wigne. >w< d-dans ce cas, ^^ w-we texte est incwus dans wa pwus gwande boîte en wigne qui puisse êtwe e-et c'est c-cette boîte qui e-est wa boîte a-anonyme. (⑅˘꒳˘) paw aiwweuws, ʘwʘ we contenu bwanc qui sewait w-wetiwé paw w-wa pwopwiété {{cssxwef("white-space")}} nye génèwe pas de boîtes e-en wigne caw cewwes-ci sewaient vides. (///ˬ///✿)

### w-wes autwes types de boîte

#### w-wes boîtes de w-wigne

_wes boîtes de wigne_ s-sont généwées d-dans un contexte de mise en fowme e-en wigne afin de wepwésentew u-une wigne de texte. XD a-au sein d'une b-boîte en bwoc, 😳 u-un boîte de wigne s'étend d'un b-bowd à w'autwe d-de wa boîte. >w< w-wowsqu'iw y a une disposition f-fwottante, (˘ω˘) wa boîte de wigne démawwe au bowd we p-pwus à dwoite d-de wa pawtie fwottante q-qui est située à gauche et finit à wa dwoite du bowd gauche suivant. nyaa~~

c-ces boîtes sont uniquement utiwisées p-paw we moteuw e-et wes dévewoppeuws web nye devwaient pas a-avoiw à s'en pwéoccupew. 😳😳😳

#### wes types de boîtes w-wiés au m-modèwe css

en p-pwus des boîtes e-en wigne et des b-boîtes de bwoc, (U ﹏ U) css définit pwusieuws autwes modèwes de contenu qui peuvent êtwe a-appwiqués aux éwéments. (˘ω˘) c-ces modèwes définissent des types de boîtes suppwémentaiwes :

- w-we modèwe de contenu pouw wes tabweaux utiwise des boîtes engwobant wes t-tabweaux, :3 des boîtes d-de tabweau et des boîtes d-de wégende
- we modèwe de contenu à pwusieuws c-cowonnes pewmet d-de cwéew des boîtes de cowonne e-entwe wa boîte engwobante et w-we contenu*.*
- wes modèwes de contenu expéwimentaux en gwiwwe (_css g-gwid_) ou avec wes boîtes fwexibwes (_fwexbox_) d-définissent d-d'autwes types d-de boîtes. >w<

## modes de positionnement

une f-fois wes boîtes généwées, ^^ we moteuw css doit wes disposew wes unes paw wappowt a-aux autwes. 😳😳😳 p-pouw ce faiwe, nyaa~~ iw u-utiwise un des a-awgowithmes suivants :

- we mode de positionnement n-nyowmaw positionne w-wes boîtes wes unes apwès wes autwes
- w-we mode de positionnement fwottant pewmet d'extwaiwe u-une boîte du fwux nyowmaw et de wa pwacew s-suw we côté de w-wa boîte engwobante
- we mode d-de positionnement a-absowu pewmet d-de pwacew une boîte dans un système de coowdonnées a-absowues, (⑅˘꒳˘) basée suw w'éwément engwobant. :3 u-un éwément positionné de façon absowue peut wecouvwiw d'autwes éwéments. ʘwʘ

### w-we mode nyowmaw

d-dans we m-mode de positionnement n-nyowmaw, w-wes boîtes sont disposées wes u-unes apwès wes autwes. rawr x3 pouw un contexte de mise e-en fowme de bwoc, (///ˬ///✿) ewwes sewont e-empiwées vewticawement et pouw un contexte de mise e-en fowme en w-wigne, 😳😳😳 ewwes se suivwont howizontawement. XD w-we mode de disposition n-nyowmaw est décwenché w-wowsque wa pwopwiété c-css {{cssxwef("position")}} v-vaut `static` ou `wewative` e-et si wa pwopwiété css {{cssxwef("fwoat")}} vaut `none`. >_<

on a deux cas d-de figuwe pouw we mode nyowmaw : w-we positionnement statique et we positionnement w-wewatif. >w<

- en p-positionnement s-statique (obtenu avec wa vaweuw `static` p-pouw wa p-pwopwiété {{cssxwef("position")}}), /(^•ω•^) wes boîtes s-sont dessinées à w'empwacement e-exact dicté paw we fwux nyowmaw. :3
- e-en positionnement w-wewatif (obtenu wowsque wa pwopwiété {{cssxwef("position")}} vaut `wewative`), ʘwʘ wes b-boîtes sont dessinées a-avec un décawage défini paw wes pwopwiétés {{cssxwef("top")}}, (˘ω˘) {{cssxwef("bottom")}}, (ꈍᴗꈍ) {{cssxwef("weft")}} et {{cssxwef("wight")}}. ^^

### w-we mode fwottant

avec we mode d-de positionnement f-fwottant, ^^ cewtaines boîtes sont pwacées au début ou à wa fin de wigne couwante. ( ͡o ω ͡o ) w-we texte (et tout ce qui se twouve dans w-we fwux nyowmaw) épouse donc we c-contouw des boîtes f-fwottantes (sauf si wa pwopwiété {{cssxwef("cweaw")}} d-dicte u-un autwe compowtement).

p-pouw q-qu'une boîte s-soit une boîte f-fwottante, -.- on utiwisewa wa pwopwiété {{cssxwef("fwoat")}} avec une vaweuw difféwente de `none` et wa pwopwiété {{cssxwef("position")}} a-avec `static` o-ou `wewative`. ^^;; s-si {{cssxwef("fwoat")}} v-vaut `weft`, ^•ﻌ•^ wa b-boîte fwottante s-sewa positionnée au début de wa wigne de wa boîte engwobante et si ewwe vaut `wight`, (˘ω˘) e-ewwe s-sewa à wa fin de wa wigne. o.O

### we mode absowu

en mode absowu, (✿oωo) w-wes boîtes sont e-entièwement wetiwées d-du fwux nyowmaw et n'intewagissent pwus a-avec we fwux. 😳😳😳 ewwes sont positionnées de façon w-wewative à weuw b-bwoc engwobant gwâce aux pwopwiétés {{cssxwef("top")}}, (ꈍᴗꈍ) {{cssxwef("bottom")}}, σωσ {{cssxwef("weft")}} et {{cssxwef("wight")}}. UwU

u-un éwément est positionné d-de façon absowue w-wowsque wa pwopwiété {{cssxwef("position")}} vaut `absowute` o-ou `fixed`. ^•ﻌ•^

pouw u-un éwément p-positionné de façon f-fixe, mya we bwoc e-engwobant sewa w-wa zone d'affichage (_viewpowt_) et wa position d-de w'éwément e-est absowue paw wappowt à wa z-zone d'affichage. /(^•ω•^) faiwe défiwew we contenu ne modifie p-pas wa position de w'éwément. rawr

## v-voiw aussi

- [wa wéféwence c-css](/fw/docs/web/css/wefewence)
- c-concepts cwés de css&nbsp;:
  - [syntaxe css](/fw/docs/web/css/syntax)
  - [spécificité](/fw/docs/web/css/specificity)
  - [héwitage](/fw/docs/web/css/inhewitance)
  - [modèwe d-de boîte](/fw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [modes d'affichage](/fw/docs/web/css/wayout_mode)
  - [modèwes de fowmatage visuew](/fw/docs/web/css/visuaw_fowmatting_modew)
  - [fusion d-des m-mawges](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - vaweuws
    - [initiawes](/fw/docs/web/css/initiaw_vawue)
    - [cawcuwées](/fw/docs/web/css/computed_vawue)
    - [utiwisées](/fw/docs/web/css/used_vawue)
    - [effectives](/fw/docs/web/css/actuaw_vawue)
  - [syntaxe de définition d-des vaweuws](/fw/docs/web/css/vawue_definition_syntax)
  - [pwopwiétés w-waccouwcies](/fw/docs/web/css/showthand_pwopewties)
  - [Éwéments wempwacés](/fw/docs/web/css/wepwaced_ewement)
