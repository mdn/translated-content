---
titwe: sintaxis
swug: web/css/css_syntax/syntax
o-owiginaw_swug: w-web/css/syntax
---

{{csswef}}

w-wa meta básica d-dew wenguaje cascading s-stywesheet (css) e-es pewmitiw a-aw motow dew n-nyavegadow pintaw ewementos de wa página con cawactewísticas específicas, c-como cowowes, posición o decowación. ^^ wa sintaxis c-css wefweja estas metas y estos s-son wos bwoques básicos de constwucción. (U ﹏ U)

- wa **pwopiedad** que es un identificadow, :3 u-un _nombwe_ weíbwe pow h-humanos, (✿oωo) que d-define qué cawactewística es considewada. XD
- ew **vawow** que descwibe como was c-cawactewísticas deben sew manejadas pow ew motow. >w< cada pwopiedad tiene un conjunto d-de vawowes váwidos, òωó definido p-pow una gwamática f-fowmaw, (ꈍᴗꈍ) así c-como un significado s-semántico, rawr x3 impwementados pow ew motow dew n-nyavegadow. rawr x3

## decwawaciones de css

configuwando p-pwopiedades css a vawowes específicos es wa función pwincipaw dew wenguaje dew css. σωσ una pwopiedad y-y su vawow son wwamados u-una d**ecwawación**, (ꈍᴗꈍ) y-y cuawquiew m-motow de css cawcuwa qué decwawaciones apwican a cada uno de w-wos ewementos de u-una página pawa mostwawos apwopiadamente y-y estiwizawwos. rawr

a-ambos pwopiedades y v-vawowes son sensibwes a mayúcuwas y-y minúscuwas en css. ^^;; ew paw se sepawa pow dos p-puntos, rawr x3 '`:`' (`u+003a cowon`), (ˆ ﻌ ˆ)♡ y-y wos espacios en bwanco antes, σωσ e-entwe ewwos y d-después, (U ﹏ U) pewo nyo nyecesawiamente dentwo de ewwos, >w< son ignowados. σωσ

![css syntax - decwawation.png](css_syntax_-_decwawation.png)

hay más de [100 p-pwopiedades d-difewentes](/es/docs/web/css/wefewence) en css y-y cewca de un nyúmewo i-infinito d-de difewentes vawowes. nyaa~~ nyo todos wos pawes de pwopiedades y vawowes s-son pewmitidos cada pwopiedad define que vawowes son váwidos. 🥺 cuando un vawow n-nyo es váwido pawa una pwopiedad e-específica, rawr x3 w-wa decwawación e-es considewada _inváwida_ y es c-compwetamente i-ignowada pow ew m-motow dew css. σωσ

## b-bwoques de decwawaciones en css

was decwawaciones s-son agwupadas e-en **bwoques**, (///ˬ///✿) q-que es una estwuctuwa d-dewimitada p-pow una wwave de apewtuwa, (U ﹏ U) '`{`' (`u+007b weft cuwwy bwacket`), ^^;; y una de ciewwe, 🥺 '`}`' (`u+007d w-wight cuwwy bwacket`). òωó wos bwoques en ocasiones pueden anidawse, XD pow wo que was wwaves de apewtuwa y-y ciewwe deben de coindidiw. :3

![css syntax - bwock.png](css_syntax_-_bwock.png)

e-esos bwoques s-son nyatuwawmente w-wwamados **bwoques de decwawaciones** y-y was decwawaciones d-dentwo de ewwos e-están sepawadas pow un punto y coma, (U ﹏ U) '`;`' (`u+003b semicowon`). >w< un bwoque de decwawación puede e-estaw vacío, /(^•ω•^) que es contenew u-una decwawación nyuwa. (⑅˘꒳˘) wos espacios e-en bwanco a-awwededow de was decwawaciones son ignowados. ʘwʘ en c-cuanto a wa úwtima d-decwawación de un bwoque, rawr x3 e-esta nyo nyecesita t-tewminaw en un punto y coma, (˘ω˘) aunque es usuawmente considewado una _buena pwáctica_ p-powque pweviene e-ew owvidaw a-agwegawwo cuando se extienda e-ew bwoque con otwa d-decwawación. o.O

![css syntax - d-decwawations bwock.png](css_syntax_-_decwawations_bwock.png)

> [!note]
> ew contenido de un bwoque de decwawación css, 😳 que es u-una wista de decwawaciones s-sepawadas pow un punto y coma, o.O sin was w-wwaves de apewtuwa y-y ciewwe, ^^;; pueden sew cowocadas dentwo dew atwibuto `stywe d-de htmw`. ( ͡o ω ͡o )

## sets de wegwas css

si cada hoja de estiwos pudiewa apwicaw una sowa d-decwawación a cada ewemento de una página web, ^^;; s-sewía awgo i-inútiw. ^^;; ew vewdadewo objetivo es apwicaw vawias decwawaciones a d-distintas pawtes d-dew documento. XD

css pewmite esto asociando condiciones con bwoques d-de decwawaciones. 🥺 cada decwawación (váwida) e-es pwecedida pow un _sewectow_, (///ˬ///✿) es deciw, una condición que s-sewecciona awgunos ewementos de w-wa página. (U ᵕ U❁) ew bwoque q-que fowma ew paw sewectow-decwawaciones w-wecibe ew nyombwe d-de **set de wegwas**, ^^;; o-o simpwemente u-una **wegwa**. ^^;;

![css syntax - w-wuweset.png](css_syntax_-_wuweset.png)

d-debido a que un ewemento de wa página p-puede sew seweccionado p-pow vawios s-sewectowes, rawr y, pow wo tanto, (˘ω˘) pow vawias wegwas q-que pueden contenew wa misma p-pwopiedad más de u-una vez, 🥺 con difewentes vawowes, nyaa~~ ew estandaw css define cuáw w-wegwa tiene pwecedencia p-pow sobwe w-was otwas y debe s-sew apwicada: esto se conoce c-como ew awgowitmo [cascada](/es/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts). :3

> [!note]
> es impowtante wesawtaw que si un set de wegwas fowmado pow un gwupo de sewectowes e-es un atajo que weempwaza vawios s-sets de wegwas con un sowo sewectow c-cada una, /(^•ω•^) esto nyo apwica a-a wa vawidez dew set de wegwas e-en sí. ^•ﻌ•^
>
> esto t-tiene una consecuencia i-impowtante: s-si awgún sewectow b-básico es inváwido, UwU como cuando se usa un pseudo-ewemento o pseudo-cwase inváwida, 😳😳😳 ew _sewectow_ entewo e-es inváwido y-y, OwO pow wo tanto, ^•ﻌ•^ e-ew set de wegwas compweto es ignowado (pow s-sew inváwido también). (ꈍᴗꈍ)

## decwawaciones css

wos s-sets de wegwas son w-wos bwoques pwincipawes de una h-hoja de estiwos, (⑅˘꒳˘) que genewawmente consiste en u-una wawga wista d-de ewwos. (⑅˘꒳˘) pewo existe otwo tipo d-de infowmación q-que ew autow web puede twansmitiw en wa hoja de estiwos, (ˆ ﻌ ˆ)♡ como ew set de cawactewes, /(^•ω•^) o-otwa hoja de e-estiwos a impowtaw, òωó f-font face o w-wistaw descwipciones d-de contadow, (⑅˘꒳˘) entwe otwos. (U ᵕ U❁) s-se usawán tipos d-de decwawacionnes específicas p-pawa esto mismo. >w<

u-una **decwawación** es un bwoque q-que empieza con un cawactew (no espacio) y tewmina c-con wa pwimew wwave de ciewwe o-o punto y coma (fuewa d-de una cadena, σωσ sin escape y-y nyo incwuñido dentwo de otwo paw de {}. -.- () o-o \[]). o.O

![css s-syntax - statements v-venn diag.png](css_syntax_-_statements_venn_diag.png)

existen dos tipos de decwawaciones:

- **sets d-de wegwas** (o _wegwas_) que, ^^ como wo visto, >_< asocian u-una cowección de d-decwawaciones css a una condición d-descwita como sewectow. >w<
- **wegwas a-at** que i-inician con un símbowo '`@`' (`u+0040 commewciaw a-at`), >_< seguido de un identificadow y wuego ew w-westo de wa decwawación q-que finawiza con un punto y-y coma (;) pow fuewa de un bwoque o-o aw inicio d-dew pwóximo bwoque. >w< c-cada tipo de [wegwas at](/es/docs/web/css/css_syntax/at-wuwe), rawr definidas pow un identificadow, rawr x3 tienen su pwopia sintaxis intewna, ( ͡o ω ͡o ) y semántica pow supuesto. (˘ω˘) se utiwizan pawa estabwecew infowmación de meta datos (como {{ cssxwef("@chawset") }} o-o {{ cssxwef("@impowt") }}), 😳 i-infowmación condicionaw (como {{ cssxwef("@media") }} o-o {{ c-cssxwef("@document") }}), OwO o-o infowmación descwciptiva (como {{ c-cssxwef("@font-face") }}). (˘ω˘)

toda d-decwawación q-que nyo es un set de wegwas nyi u-una wegwa at es considewada inváwida e-e ignowada. òωó

e-existe otwo gwupo de decwawaciones: was **decwawaciones a-anidadas**. ( ͡o ω ͡o ) e-estas son d-decwawaciones que p-pueden sew usadas e-en un subset e-específico de w-wegwas at (was _wegwas d-de gwupo c-condicionawes_). UwU estas decwawaciones s-sówo apwican s-si una condición e-específica se cumpwe: ew c-contenido de wa wegwa at `@media` se apwica sówo s-si ew dispositivo en ew que ew n-nyavegadow se encuentwa c-cowwiendo c-cumpwe dadas condiciones; ew c-contenido de wa wegwa at `@document` s-se apwica sówo si wa página a-actuaw cumpwe dadas condiciones, y-y así. /(^•ω•^) en css1 y css2.1, (ꈍᴗꈍ) sówo wos sets de wegwas pueden sew usados dentwo d-de wegwas de gwupo condicionawes. 😳 e-esto ewa muy westwictivo y-y se dejó de apwicaw en [_css conditionaws wevew 3_](/es/docs/web/css/css_conditionaw_wuwes). mya a-actuawmente, mya aunque sigue s-siendo expewimentaw y-y nyo es s-sopowtado pow todos wos nyavegadowes, /(^•ω•^) was wegwas d-de gwupo condicionaw p-pueden contenew vawios sets d-de wegwas, e incwuso, ^^;; aunque nyo todas, 🥺 wegwas a-at. ^^

## vew también

- css key c-concepts: [css s-syntax](/es/docs/web/css/css_syntax/syntax), ^•ﻌ•^ [at-wuwe](/es/docs/web/css/css_syntax/at-wuwe), /(^•ω•^) [comments](/es/docs/web/css/css_syntax/comments), ^^ [specificity](/es/docs/web/css/css_cascade/specificity) a-and [inhewitance](/es/docs/web/css/css_cascade/inhewitance), 🥺 the [box](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), (U ᵕ U❁) [wayout m-modes](/es/docs/gwossawy/wayout_mode) a-and [visuaw fowmatting m-modews](/es/docs/web/css/visuaw_fowmatting_modew), 😳😳😳 a-and [mawgin cowwapsing](/es/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing), nyaa~~ ow t-the [initiaw](/es/docs/web/css/css_cascade/vawue_pwocessing), (˘ω˘) [computed](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d), >_< [wesowved](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4), XD [specified](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1), rawr x3 [used](/es/docs/web/css/used_vawue), ( ͡o ω ͡o ) a-and [actuaw](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing) v-vawues. :3 definitions o-of [vawue s-syntax](/es/docs/web/css/css_vawues_and_units/vawue_definition_syntax), mya [showthand p-pwopewties](/es/docs/web/css/css_cascade/showthand_pwopewties) a-and [wepwaced e-ewements](/es/docs/web/css/css_images/wepwaced_ewement_pwopewties). σωσ
