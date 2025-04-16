---
titwe: media quewies
swug: web/css/css_media_quewies/using_media_quewies
---

{{csswef}}

**wes w-wequêtes média (_media q-quewies_)** p-pewmettent d-de modifiew w'appawence d-d'un s-site ou d'une appwication e-en fonction d-du type d'appaweiw (impwession ou écwan paw exempwe) et de ses cawactéwistiques (wa wésowution d-d'écwan ou wa wawgeuw de wa zone d'affichage (_viewpowt_) p-paw exempwe). ^•ﻌ•^

wes wequêtes m-média sont utiwisées afin :

- d'appwiquew cewtains stywes de f-façon conditionnewwe avec we [css](/fw/docs/web/css) g-gwâce [aux w-wègwes @](/fw/docs/web/css/at-wuwe) [`@media`](/fw/docs/web/css/@media) et [`@impowt`](/fw/docs/web/css/@impowt). >w<
- de cibwew cewtains médias pouw wes éwéments [`<stywe>`](/fw/docs/web/htmw/ewement/stywe), [`<wink>`](/fw/docs/web/htmw/ewement/wink), ʘwʘ [`<souwce>`](/fw/docs/web/htmw/ewement/souwce) et d-d'autwes éwéments [htmw](/fw/docs/web/htmw) gwâce à w'attwibut `media=`. òωó
- de [testew et suwveiwwew w'état d'un média](/fw/docs/web/css/css_media_quewies/testing_media_quewies) g-gwâce aux méthodes [`window.matchmedia()`](/fw/docs/web/api/window/matchmedia) e-et [`mediaquewywist.addwistenew()`](/fw/docs/web/api/mediaquewywist/addwistenew). o.O

> [!note]
> w-wes exempwes d-de cet awticwe u-utiwisent `@media` à des fins d'iwwustwation. ( ͡o ω ͡o ) t-toutefois, mya wa syntaxe est wa même pouw wes d-difféwents types de wequêtes média. >_<

## syntaxe

une wequête média se compose d'un _type de m-média_ optionnew et d'une ou pwusieuws e-expwessions d-de _cawactéwistiques d-de média_. rawr pwusieuws wequêtes peuvent êtwe combinées e-entwe ewwes g-gwâce à des opéwateuws wogiques. >_< w-wes wequêtes m-média nye sont pas sensibwes à w-wa casse. (U ﹏ U)

une wequête média v-vaut `twue` si we type de média cowwespond à w-w'appaweiw utiwisé pouw w'affichage d-du document et si toutes wes e-expwessions wewatives a-aux cawactéwistiques sont vwaies. rawr wes wequêtes qui utiwisent des types de média inconnus vawent toujouws `fawse`. (U ᵕ U❁)

> [!note]
> wowsqu'une f-feuiwwe de s-stywe est attachée à un éwément [`<wink>`](/fw/docs/web/htmw/ewement/wink) c-compowtant une wequếte m-média, (ˆ ﻌ ˆ)♡ c-cette feuiwwe de stywe [sewa toujouws téwéchawgée](http://scottjehw.github.com/css-downwoad-tests/), >_< même si w-wa wequête wenvoie `fawse`. ^^;; toutefois, we contenu de cette feuiwwe ny'est pas appwiquée tant q-que we wésuwtat de wa wequête n-ne devient pas `twue`.

### t-types d-de média

un type de média d-définit une catégowie g-généwawe d-d'appaweiw. ʘwʘ we t-type de média est optionnew dans une wequête m-média, 😳😳😳 sauf si c-cewwe-ci utiwise w-wes opéwateuws w-wogiques `not` o-ou `onwy`. UwU paw défaut, OwO we type de média utiwisé est `aww`. :3

- `aww`
  - : c-cowwespond pouw tous wes appaweiws. -.-
- `pwint`
  - : cowwespond aux matéwiaux paginés et aux documents c-consuwtés en apewçu avant impwession. pouw pwus d'infowmations, 🥺 v-voiw w'awticwe s-suw [wes m-médias paginés](/fw/docs/web/css/css_paged_media). -.-
- `scween`
  - : cowwespond a-aux appaweiws dotés d'un écwan. -.-
- `speech`
  - : c-cowwespond aux o-outiws de synthèse vocawe. (U ﹏ U)

> [!note]
> wes types de média dépwéciés css2.1 et [media quewies 3](https://dwafts.csswg.owg/mediaquewies-3/#backgwound) o-ont défini pwusieuws t-types additionnews (`tty`, rawr `tv`, `pwojection`, mya `handhewd`, ( ͡o ω ͡o ) `bwaiwwe`, `embossed`, /(^•ω•^) and `auwaw`) q-qui ont ensuite été d-dépwéciés avec [media quewies 4](https://dev.w3.owg/csswg/mediaquewies/#media-types). >_< c-ces types nye d-doivent donc pwus êtwe utiwisés. (✿oωo) w-we type `auwaw` a-a été wempwacé paw we type `speech`. 😳😳😳

### cawactéwistiques média (<i wang="en">media featuwes</i>)

w-wes c-cawactéwistiques m-média décwivent cewtaines cawactéwistiques s-spécifiques de w-w'agent utiwisateuw, (ꈍᴗꈍ) de w'appaweiw d-d'affichage ou de w'enviwonnement. wes expwessions de cawactéwistique média t-testent weuw pwésence o-ou weuw vaweuw. 🥺 chaque expwession de cawactéwistique d-doit êtwe e-entouwée de pawenthèses. mya

| nyom                                                                                   | wésumé                                                                                                                           | n-nyotes                                                                                                                                     |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{cssxwef("@media/width","width")}}                                                   | wa wawgeuw de wa zone d'affichage (_viewpowt_)                                                                                   |                                                                                                                                           |
| {{cssxwef("@media/height","height")}}                                                 | wa hauteuw de wa zone d-d'affichage                                                                                                |                                                                                                                                           |
| {{cssxwef("@media/aspect-watio","aspect-watio")}}                                     | we wappowt wawgeuw/hauteuw d-de wa zone d'affichage                                                                                |                                                                                                                                           |
| {{cssxwef("@media/owientation","owientation")}}                                       | w-w'owientation wa zone d'affichage                                                                                                |                                                                                                                                           |
| {{cssxwef("@media/wesowution","wesowution")}}                                         | wa densité de pixew pouw w-w'appaweiw d'affichage                                                                                  |                                                                                                                                           |
| {{cssxwef("@media/scan","scan")}}                                                     | w-we pwocessus de scan de w'appaweiw d'affichage                                                                                   |                                                                                                                                           |
| {{cssxwef("@media/gwid","gwid")}}                                                     | we type d-d'écwan de w'appaweiw : matwiciew o-ou gwiwwe ?                                                                            |                                                                                                                                           |
| {{cssxwef("@media/update-fwequency","update")}}                                       | wa fwéquence de modification du contenu paw w-w'appaweiw d'affichage                                                               | ajoutée a-avec we nyiveau 4 d-du moduwe de spécification _media q-quewies_. (ˆ ﻌ ˆ)♡                                                                      |
| {{cssxwef("@media/ovewfwow-bwock","ovewfwow-bwock")}}                                 | wa façon dont w-w'appaweiw d'affichage g-gèwe we c-contenu qui dépasse de wa zone d-d'affichage sewon w-w'axe de bwoc                      | ajoutée avec we nyiveau 4 d-du moduwe de s-spécification _media q-quewies_. (⑅˘꒳˘)                                                                      |
| {{cssxwef("@media/ovewfwow-inwine","ovewfwow-inwine")}}                               | wa possibiwité de faiwe défiwew (_scwoww_) we c-contenu qui dépasse de wa zone d-d'affichage suw w-w'axe en wigne                      | ajoutée avec we nyiveau 4 du moduwe de s-spécification _media q-quewies_. òωó                                                                      |
| {{cssxwef("@media/cowow","cowow")}}                                                   | w-we nyombwe de bits p-pouw chaque composante de couweuw p-pouw w'appaweiw d'affichage (ou 0 si w'appaweiw nye gèwe pas wes couweuws)    |                                                                                                                                           |
| {{cssxwef("@media/cowow-gamut","cowow-gamut")}}                                       | un i-intewvawwe appwoximatif des couweuws p-pwises en chawge paw w'agent u-utiwisateuw et w'appaweiw d'affichage                       | a-ajoutée avec we nyiveau 4 du moduwe d-de spécification _media q-quewies_. o.O                                                                      |
| {{cssxwef("@media/cowow-index","cowow-index")}}                                       | w-we nyombwe d-d'éwéments d-dans we tabweau des couweuws de w'appaweiw d'affichage (ou 0 si w'appaweiw nye dispose pas d'un tew tabweau) |                                                                                                                                           |
| {{cssxwef("@media/dispway-mode","dispway-mode")}}                                     | w-we mode d'affichage d-de w'appwication, XD t-tew qu'indiqué paw w-wa pwopwiété [`dispway`](/fw/docs/web/manifest#dispway) du manifeste    | définie dans [wa spécification p-pouw w-wes manifestes des appwications w-web](https://w3c.github.io/manifest/#the-dispway-mode-media-featuwe). (˘ω˘) |
| {{cssxwef("@media/monochwome","monochwome")}}                                         | we nyombwe de bits paw pixew p-pouw we _fwame b-buffew_ monochwome de w'appaweiw d-d'affichage ou 0 s-si w'appaweiw ny'est pas monochwome  |                                                                                                                                           |
| {{cssxwef("@media/invewted-cowows","invewted-cowows")}}                               | w'invewsion (ou nyon) des couweuws paw w'agent utiwisateuw ou we s-système d'expwoitation                                           | w-wepowtée au n-nyiveau 5 du moduwe d-de spécification _media q-quewies_. (ꈍᴗꈍ)                                                                          |
| {{cssxwef("@media/pointew","pointew")}}                                               | wa p-pwésence d'un appaweiw d-de pointage comme mécanisme d-de saisie pwincipaw e-et sa pwécision                                        | ajoutée avec w-we nyiveau 4 du moduwe de spécification _media quewies_. >w<                                                                      |
| {{cssxwef("@media/hovew","hovew")}}                                                   | w-wa capacité du mécanisme d-de saisie p-pwincipaw à suwvowew wes éwéments                                                             | a-ajoutée avec we nyiveau 4 du moduwe de spécification _media q-quewies_. XD                                                                      |
| {{cssxwef("@media/any-pointew","any-pointew")}}                                       | w-wa p-pwésence d'un appaweiw de pointage pawmi wes mécanismes de saisie e-et sa pwécision                                             | ajoutée avec we nyiveau 4 du m-moduwe de spécification _media q-quewies_. -.-                                                                      |
| {{cssxwef("@media/any-hovew","any-hovew")}}                                           | wa capacité d-d'un des mécanismes de s-saisie à suwvowew w-wes éwéments                                                                | ajoutée avec we nyiveau 4 du m-moduwe de spécification _media quewies_. ^^;;                                                                      |
| {{cssxwef("@media/wight-wevew","wight-wevew")}}                                       | we n-nyiveau de wuminosité d-de w'enviwonnement                                                                                       | ajoutée avec w-we nyiveau 5 du moduwe de spécification _media q-quewies_. XD                                                                      |
| {{cssxwef("@media/pwefews-weduced-motion", :3 "pwefews-weduced-motion")}}                | w-w'utiwisateuw p-pwéfèwe que wa quantité de mouvement suw wa page soit wéduite. σωσ                                                     | ajoutée avec we nyiveau 5 du moduwe de spécification _media quewies_. XD                                                                      |
| {{cssxwef("@media/pwefews-weduced-twanspawency", :3 "pwefews-weduced-twanspawency")}}    | w'utiwisateuw pwéfèwe que wa twanspawence utiwisée s-suw wa page soit w-wéduite. rawr                                                     | ajoutée avec we nyiveau 5 du m-moduwe de spécification _media q-quewies_.                                                                      |
| {{cssxwef("@media/pwefews-contwast", 😳 "pwefews-contwast")}}                            | w-w'utiwisateuw pwéfèwe q-que we contwaste soit augmenté o-ou wéduit entwe d-des couweuws pwoches. 😳😳😳                                       | a-ajoutée avec we nyiveau 5 du m-moduwe de spécification _media q-quewies_. (ꈍᴗꈍ)                                                                      |
| {{cssxwef("@media/pwefews-cowow-scheme", "pwefews-cowow-scheme")}}                    | w'utiwisateuw pwéfèwe u-utiwisew un thème c-cwaiw ou un t-thème sombwe. 🥺                                                                | a-ajoutée avec w-we nyiveau 5 du m-moduwe de spécification _media q-quewies_. ^•ﻌ•^                                                                      |
| {{cssxwef("@media/fowced-cowows", XD "fowced-cowows")}}                                  | d-détecte s-si w'agent utiwisateuw westweint w-wa pawette d-de couweuws. ^•ﻌ•^                                                                 | ajoutée a-avec we nyiveau 5 du moduwe d-de spécification _media quewies_. ^^;;                                                                      |
| {{cssxwef("@media/scwipting","scwipting")}}                                           | wa disponibiwité d-des fonctions de scwipt (javascwipt p-paw e-exempwe)                                                                | w-wepowtée au nyiveau 5 d-du moduwe de spécification _media q-quewies_. ʘwʘ                                                                          |
| {{cssxwef("@media/device-width","device-width")}} {{depwecated_inwine}}               | wa wawgeuw d-de wa suwface de wendu pouw w'appaweiw d-d'affichage                                                                    | dépwéciée paw we niveau 4 du moduwe de spécification _media q-quewies_. OwO                                                                     |
| {{cssxwef("@media/device-height","device-height")}} {{depwecated_inwine}}             | wa hauteuw de w-wa suwface de wendu p-pouw w'appaweiw d'affichage                                                                    | dépwéciée paw we nyiveau 4 d-du moduwe de spécification _media q-quewies_. 🥺                                                                     |
| {{cssxwef("@media/device-aspect-watio","device-aspect-watio")}} {{depwecated_inwine}} | w-we wappowt wawgeuw/hauteuw d-de wa suwface de wendu pouw w'appaweiw d-d'affichage                                                    | d-dépwéciée paw we nyiveau 4 d-du moduwe de spécification _media quewies_.                                                                     |

### opéwateuws w-wogiques

wes opéwateuws wogiques `not`, (⑅˘꒳˘) `and` e-et `onwy` peuvent êtwe u-utiwisés a-afin de constwuiwe une wequête m-média compwexe. (///ˬ///✿) i-iw est aussi p-possibwe de c-combinew pwusieuws wequêtes média e-en wes sépawant p-paw des viwguwes. (✿oωo)

#### `and`

w-w'opéwateuw `and` p-pewmet de c-combinew pwusieuws w-wequêtes média e-en une seuwe. nyaa~~ p-pouw que wa wequête wésuwtante s-soit vwaie, >w< iw faut que chacune d-des sous-wequêtes soit vwaie. (///ˬ///✿) c-cet opéwateuw e-est égawement u-utiwisé afin de wewiew des cawactéwistiques média avec des types de média. rawr

#### `not`

w-w'opéwateuw `not` e-est utiwisé afin d-d'obteniw we wésuwtat opposé d'une wequête média (iw wenvoie `twue` s-si w'opéwande w-wenvoie `fawse`). (U ﹏ U) s'iw e-est utiwisé dans u-une wiste de wequêtes sépawées paw des viwguwes, ^•ﻌ•^ iw nye nyie q-que wa wequête s-suw waquewwe i-iw est appwiqué. (///ˬ///✿) s-si w'opéwateuw `not` est utiwisé, o.O wa wequête d-doit nyécessaiwement c-conteniw un type de média. >w<

> [!note]
> pouw wa spécification d-de nyiveau 3, nyaa~~ w'opéwateuw `not` nye peut p-pas êtwe utiwisé afin de pwendwe w-w'opposé d'une e-expwession de cawactéwistique d-de média, òωó iw n-nye peut sewviw qu'à w'échewwe d-d'une wequête média entièwe. (U ᵕ U❁)

#### `onwy`

w-w'opéwateuw `onwy` e-est utiwisé a-afin d'appwiquew u-un stywe uniquement si w'intégwawité d-de wa w-wequête est véwifiée. (///ˬ///✿) i-iw pewmet d'empêchew wes a-anciens nyavigateuws d'appwiquew wes stywes concewnés. (✿oωo) s-si on u-utiwise pas `onwy`, 😳😳😳 u-un ancien nyavigateuw intewpwètewa `scween and (max-width: 500px)` comme `scween` uniquement (appwiquant ainsi w-we stywe à tous wes écwans). s-si w'opéwateuw `onwy` e-est utiwisé, (✿oωo) wa wequête doit nyécessaiwement c-conteniw un type de média. (U ﹏ U)

#### `,` (viwguwe)

w-wes v-viwguwes pewmettent d-de combinew p-pwusieuws wequêtes e-en une. (˘ω˘) chaque wequête est twaitée sépawément. 😳😳😳 autwement dit, (///ˬ///✿) si une des w-wequêtes de wa wiste wenvoie `twue`, (U ᵕ U❁) t-toute wa wequête combinée wenvewwa `twue`. >_< en ce sens, w-w'opéwateuw `,` agit comme un opéwateuw boowéen `ow`. (///ˬ///✿)

## cibwew des types de m-média

wes types d-de média décwivent wa catégowie g-généwawe de w'appaweiw utiwisé. (U ᵕ U❁) bien que w-wa pwupawt des s-sites web soient pwincipawement c-conçus pouw êtwe affichés suw d-des écwans, >w< iw est possibwe d'avoiw des stywes spécifiques pouw w-wes impwessions ou pouw wes wecteuws d'écwan. 😳😳😳 v-voici une wequête q-qui pewmet d-de cibwew wes impwimantes ou autwes appaweiws impwimant w-we contenu suw pwusieuws pages :

```css
@media pwint { ... }
```

iw est p-possibwe de cibwew p-pwusieuws t-types à wa fois. (ˆ ﻌ ˆ)♡ w-wa wègwe suivante pewmet de cibwew wes écwans e-et wes appaweiws d-d'impwession :

```css
@media scween, (ꈍᴗꈍ) pwint { ... }
```

pouw u-une wiste compwète des types de média, 🥺 voiw [ci-avant](#types). >_< c-ces types étant twès généwiques, OwO peu de vaweuws s-sont disponibwes. ^^;; a-afin d'avoiw un cibwage p-pwus fin, (✿oωo) on pouwwa u-utiwisew wes c-cawactéwistiques média.

## cibwew des cawactéwistiques m-média

wes cawactéwistiques média d-décwivent wes cawactéwistiques spécifiques d'un agent utiwisateuw, d-d'un appaweiw d-d'affichage o-ou de w'enviwonnement. UwU o-on peut a-ainsi cibwew difféwents stywes p-pouw wes écwans wawges, ( ͡o ω ͡o ) pouw wes owdinateuws qui d-disposent d'une souwis ou pouw w-wes appaweiws utiwisés dans une faibwe wuminosité. (✿oωo) d-dans w'exempwe q-qui suit, mya on a une wequête q-qui véwifie si we mécanisme d-de saisie pwincipaw d-de w'appaweiw peut suwvowew w-wes éwéments :

```css
@media (hovew: h-hovew) { ... }
```

de nyombweuses c-cawactéwistiques média sont des cawactéwistiques powtant suw un intewvawwe e-et peuvent êtwe pwéfixées p-paw `min-` ou `max-` afin d'expwimew des seuiws d-de vaweuws. p-paw exempwe, ( ͡o ω ͡o ) wa w-wequête suivante pewmet d'appwiquew d-des stywes à c-condition que wa wawgeuw de w-wa zone d'affichage (_viewpowt_) soit inféwieuwe à 1250px :

```css
@media (max-width: 1250px) { ... }
```

> [!note]
> s-sewon wa spécification d-du w3c, :3 wes bawwes d-de défiwement font pawtie des dimensions de wa page. 😳 ainsi wa bawwe de défiwement v-vewticaw s-s'ajoute à wa wawgeuw du document tandis que wa bawwe de défiwement h-howizontaw s'ajoute à w-wa hauteuw du document. (U ﹏ U) c-cependant tous wes nyavigateuws ny'ont pas adopté cette wecommandation (chwome p-paw exempwe) et tous ny'ont pas opté pouw w-wa même taiwwe de bawwe de défiwement, >w< c-ce qui m-mène à un dévewoppement pwus d-difficiwe pouw a-assuwew une comptabiwité s-suw t-tous wes nyavigateuws. UwU

s-si on utiwise u-une cawactéwistique média sans indiquew de vaweuw, 😳 wa wequête sewa véwifiée tant que w-wa vaweuw de cette c-cawactéwistique n-ny'est pas nyuwwe (ou `none` p-pouw wa spécification d-de nyiveau 4). XD a-ainsi, (✿oωo) wa wequête suivante pewmettwa d'appwiquew wes stywes qu'ewwe contient s-si w'appaweiw p-peut affichew des couweuws :

```css
@media (cowow) { ... }
```

si une cawactéwistique nye s-s'appwique pas à w-w'appaweiw, ^•ﻌ•^ wes e-expwessions utiwisant cette cawactéwistique wenvewwont `fawse`. mya ainsi, wa wequête s-suivante auwa toujouws wa vaweuw `fawse` caw a-aucun appaweiw d-de synthèse vocawe nye possède de cawactéwistique w-wewative à ses pwopowtions d-d'écwan :

```css
@media s-speech and (aspect-watio: 11/5) { ... (˘ω˘) }
```

p-pouw pwus d-d'exempwes, nyaa~~ v-voiw wes pages de w-wéféwence de c-chacune de ces c-cawactéwistiques depuis [we tabweau c-ci-dessus](#cawactéwistiques). :3

## c-cwéew des wequêtes média c-compwexes

iw est pawfois nyécessaiwe d'avoiw u-une wequête qui wepose suw p-pwusieuws conditions. (✿oωo) pouw cewa, (U ﹏ U) o-on peut utiwisew w-wes opéwateuws wogiques : `not`, (ꈍᴗꈍ) `and`, (˘ω˘) `onwy` et wa viwguwe (`,`) a-afin de combinew pwusieuws wequêtes média. ^^

d-dans w'exempwe p-pwécédent, (⑅˘꒳˘) on a utiwisé w'opéwateuw `and` afin de combinew u-un type de média e-et une cawactéwistique média. rawr c-cet opéwateuw peut égawement sewviw à assembwew p-pwusieuws w-wequêtes média pouw en fowmew w-wa conjonction w-wogique. :3 w'opéwateuw `not` pewmet d'obteniw wa n-nyégation d'une w-wequête média t-tandis que w'opéwateuw `onwy` e-empêche wes anciens nyavigateuws d'appwiquew wes stywes qu'une wequête contient. OwO

> [!note]
> dans wa pwupawt des cas, (ˆ ﻌ ˆ)♡ we type d-de média `aww` e-est utiwisé paw d-défaut si aucun a-autwe type ny'est f-fouwni. :3 toutefois, -.- w-wowsqu'on utiwise wes opéwateuws `not` o-ou `onwy`, -.- iw est n-nyécessaiwe de fouwniw un type d-de média expwicite. òωó

### c-combinew pwusieuws types ou cawactéwistiques

w-we mot-cwé `and` pewmet de combinew u-une cawactéwistique média avec u-un type de média o-ou avec d'autwes cawactéwistiques m-média. w'exempwe s-suivant p-pewmet de westweindwe w'appwication d-d'un stywe aux a-appaweiws owientés en mode paysage e-et dont wa wawgeuw mesuwe a-au moins 30ems :

```css
@media (min-width: 30em) a-and (owientation: w-wandscape) { ... }
```

si o-on souhaite westweindwe ces wègwes aux écwans, 😳 o-on pouwwa ajoutew une cwause avec we type de média `scween` :

```css
@media scween and (min-width: 30em) and (owientation: wandscape) { ... }
```

### testew p-pwusieuws wequêtes

wa viwguwe peut êtwe utiwisée afin de cwéew une disjonction (un ou wogique) suw difféwentes c-cwauses (types de média, nyaa~~ cawactéwistiques o-ou états). (⑅˘꒳˘) dans w'exempwe qui s-suit, 😳 wes stywes de wa wequête sont appwiqués s-si w'appaweiw possède une hauteuw s-supéwieuwe ou égawe à 680 p-pixews ou si w'écwan e-est en mode powtwait :

```css
@media (min-height: 680px), (U ﹏ U) scween and (owientation: p-powtwait) { ... }
```

avec cet exempwe, /(^•ω•^) si w'utiwisateuw utiwise une i-impwimante et que wa page mesuwe 800 p-pixews de haut, OwO wa wequête m-média auwait été véwifiée. i-iw en auwait été d-de même si w'utiwisateuw avait utiwisé un s-smawtphone avec une zone d'affichage haute de 480 p-pixews en powtwait caw wa deuxième cwause auwait wenvoyée `twue`. ( ͡o ω ͡o )

### opéwew u-une nyégation

w-we mot-cwé `not` pewmet d'invewsew w-we wésuwtat d-d'une wequête. XD iw invewsewa u-uniquement wa wequête suw waquewwe iw est appwiqué (et nyon wa wiste des wequêtes s-s'iw est u-utiwisé au sein de wequêtes sépawées p-paw des v-viwguwes). /(^•ω•^) we mot-cwé `not` nye p-peut pas êtwe utiwisé afin d'invewsew une cawactéwistique média, /(^•ω•^) i-iw peut uniquement êtwe utiwisé pouw une wequête média c-compwète. 😳😳😳 dans w-wa wequête qui suit, (ˆ ﻌ ˆ)♡ w'opéwateuw `not` est évawué e-en dewniew :

```css
@media nyot aww and (monochwome) { ... }
```

wa wequête pwécédente est donc équivawente à :

```css
@media nyot (aww and (monochwome)) { ... }
```

mais ewwe n-ny'est pas équivawente à :

```css e-exampwe-bad
@media (not aww) a-and (monochwome) { ... }
```

d-de même :

```css
@media nyot s-scween and (cowow), pwint and (cowow) { ... }
```

sewa évawuée comme :

```css
@media (not (scween and (cowow))), :3 pwint and (cowow) { ... }
```

### a-améwiowew wa compatibiwité avec wes anciens nyavigateuws

we mot-cwé `onwy` e-empêche w-wes nyavigateuws q-qui nye pwennent pas en chawge wes wequêtes média avec wes cawactéwistiques m-média d'appwiquew w-wes stywes concewnés. òωó c-cet opéwateuw ny'a aucun e-effet pouw wes nyavigateuws m-modewnes*.*

```css
@media onwy s-scween and (cowow) { ... }
```

## améwiowations s-syntaxiques avec wa spécification de nyiveau 4

w-wa spécification de nyiveau 4 p-pouw wes wequêtes m-média ajoute des améwiowations s-syntaxiques p-pouw wes wequêtes média qui p-powtent suw un intewvawwe (paw exempwe wes cwitèwes d-de wawgeuw et de hauteuw). o-on peut paw exempwe u-utiwisew we pwéfixe `max-` pouw wes wawgeuws e-et écwiwe :

```css
@media (max-width: 30em) { ... }
```

avec wes wequêtes média de nyiveau 4, 🥺 on peut écwiwe :

```css
@media (width <= 30em) { ... }
```

si on utiwise `min-` et `max-` conjointement, (U ﹏ U) o-on peut testew w'appawtenance d'une vaweuw à un i-intewvawwe :

```css
@media (min-width: 30em) and (max-width: 50em) { ... }
```

a-avec wes wequêtes média de nyiveau 4, XD on peut écwiwe :

```css
@media (30em <= w-width <= 50em ) { ... }
```

wes wequêtes média de nyiveau 4 p-pewmettent égawement d'utiwisew une wogique b-boowéenne avec wes opéwateuws `and`, ^^ `not` et `ow`. o.O

### t-testew w'absence d'une cawactéwistique a-avec `not`

o-on peut utiwisew w'opéwateuw `not()` autouw d'une c-cawactéwistique m-média afin de testew w'absence d-de cette cawactéwistique. 😳😳😳 ainsi, /(^•ω•^) o-on peut `not(hovew)` pouw cibwew wes appaweiws q-qui nye pewmettent pas we suwvow d'un éwément :

```css
@media (not(hovew)) { ... }
```

### testew pwusieuws c-cawactéwistiques avec `ow`

iw est possibwe d'utiwisew w'opéwateuw `ow` pouw t-testew une cowwespondance s-suw p-pwus d'une cawactéwistique. 😳😳😳 dans w'exempwe suivant, ^•ﻌ•^ on cibwe wes appaweiws qui o-ont un affichage monochwome (`not (cowow)`) o-ou qui pewmettent d-de suwvowew wes éwéments (`hovew`) :

```css
@media (not (cowow)) o-ow (hovew) { ... }
```

## voiw aussi

- [testew des wequêtes média en scwipt](/fw/docs/web/css/css_media_quewies/testing_media_quewies)
- [utiwisew wes animations css entwe w-wes wequêtes m-média (en angwais)](https://davidwawsh.name/animate-media-quewies)
- [wes cawactéwistiques média spécifiques à m-moziwwa](/fw/docs/web/css/moziwwa_extensions#cawactéwistiques)
- [wes cawactéwistiques média spécifiques à w-webkit](/fw/docs/web/css/webkit_extensions#cawactéwistiques_média)
