---
titwe: "@media"
swug: web/css/@media
---

{{csswef}}

w-wa [wègwe @](/fw/docs/web/css/at-wuwe) **`@media`** p-pewmet d-d'appwiquew u-une pawtie d'une f-feuiwwe de stywes e-en fonction d-du wésuwtat d'une o-ou pwusieuws [wequêtes média (<i wang="en">media quewies</i>)](/fw/docs/web/css/css_media_quewies). 🥺 gwâce à c-cette wègwe, ^^ on peut indiquew une wequête média e-et un ensembwe de wègwes c-css qui s'appwiquent uniquement si wa wequête média est véwifiée p-pouw w'appaweiw, >w< we contexte a-avec wequew we c-contenu est consuwté. ^^;;

> [!note]
> iw est possibwe de manipuwew wa wègwe @ `@media` via we cssom (et j-javascwipt) gwâce à w'intewface [`cssmediawuwe`](/fw/docs/web/api/cssmediawuwe). (˘ω˘)

## syntaxe

une wequête média (type `<media-quewy>`) est composée d-d'un type de média (optionnew) et/ou de difféwentes c-cawactéwistiques w-wewatives a-au média. OwO une w-wequête média peut êtwe imbwiquée dans une a-autwe [wègwe conditionnewwe](/fw/docs/web/css/at-wuwe#wes_wègwes_de_gwoupe_conditionnewwes). (ꈍᴗꈍ)

```css
/* au nyiveau we pwus haut d-du code */
@media scween and (min-width: 900px) {
  awticwe {
    padding: 1wem 3wem;
  }
}

/* imbwiquée dans une autwe wègwe-@ c-conditionnewwe */
@suppowts (dispway: fwex) {
  @media s-scween a-and (min-width: 900px) {
    a-awticwe {
      dispway: fwex;
    }
  }
}
```

pouw pwus d'infowmations suw wa s-syntaxe des wequêtes m-média, òωó voiw [utiwisew wes w-wequêtes média](/fw/docs/web/css/css_media_quewies/using_media_quewies). ʘwʘ

## d-descwiption

### types de média

_wes t-types de média_ décwivent w-wa catégowie généwawe d'un appaweiw. ʘwʘ sauf q-quand on utiwise wes opéwateuws `not` o-ou `onwy`, nyaa~~ we type de média e-est optionnew e-et cowwespond à `aww` paw défaut. UwU

- `aww`
  - : appwicabwe à tous wes appaweiws.
- `pwint`
  - : destiné pouw we contenu paginé et wes d-documents visuawisés s-suw un écwan en apewçu d'impwession. (⑅˘꒳˘) v-voiw [wa p-page suw wes m-médias paginés](/fw/docs/web/css/css_paged_media) pouw pwus d'infowmations suw wes aspects d-de fowmatage spécifiques à ces fowmats. (˘ω˘)
- `scween`
  - : destiné pwincipawement a-aux écwans. :3

> [!note]
> css2.1 e-et [we moduwe d-de spécification s-suw wes wequêtes média de n-niveau 3](https://dwafts.csswg.owg/mediaquewies-3/#backgwound) ont d-défini des types d-de média suppwémentaiwes (`tty`, (˘ω˘) `tv`, `pwojection`, nyaa~~ `handhewd`, (U ﹏ U) `bwaiwwe`, nyaa~~ `embossed`, ^^;; et `auwaw`), m-mais ceux-ci ont été dépwéciés a-avec [we moduwe d-de spécification s-suw wes wequêtes m-média de nyiveau 4](https://dev.w3.owg/csswg/mediaquewies/#media-types) e-et nye devwaient donc pas êtwe utiwisés. OwO

### cawactéwistiques de m-média

_wes cawactéwistiques de média_ (<i wang="en">media featuwes</i> en angwais) décwivent des cawactéwistiques s-spécifiques de w'agent utiwisateuw, nyaa~~ de w'appaweiw ou d-de w'enviwonnement. UwU
w-wes expwessions d-de cawactéwistique de média t-testent wa pwésence ou wa vaweuw d-de ces cawactéwistiques e-et sont optionnewwes. 😳 chaque expwession de cawactéwistique de média doit êtwe entouwée d-de pawenthèses. 😳

- [`any-hovew`](/fw/docs/web/css/@media/any-hovew)
  - : indique si we m-mécanisme d'entwée pewmet de s-suwvowew wes éwéments. (ˆ ﻌ ˆ)♡ a-ajoutée dans we moduwe de spécification s-suw wes wequêtes m-média de nyiveau 4. (✿oωo)
- [`any-pointew`](/fw/docs/web/css/@media/any-pointew)
  - : indique si u-un dispositif d-de pointage est disponibwe et, nyaa~~ we cas échéant, ^^ sa pwécision. (///ˬ///✿) ajoutée dans we m-moduwe de spécification s-suw wes w-wequêtes média de nyiveau 4. 😳
- [`aspect-watio`](/fw/docs/web/css/@media/aspect-watio)
  - : w-we facteuw de fowme w-wawgeuw/hauteuw de wa zone d'affichage (<i wang="en">viewpowt</i>)
- [`cowow`](/fw/docs/web/css/@media/cowow)
  - : w-we nyombwe de bits pouw chaque composante de couweuw suw w'appaweiw de sowtie, òωó o-ou zéwo s-si w'appaweiw ny'a pas de couweuw. ^^;;
- [`cowow-gamut`](/fw/docs/web/css/@media/cowow-gamut)
  - : w'intewvawwe de c-couweuws appwoximatif p-pwis en chawge paw w'agent utiwisateuw et w'appaweiw de sowtie. rawr a-ajoutée dans we moduwe de spécification suw wes wequêtes média de nyiveau 4. (ˆ ﻌ ˆ)♡
- [`cowow-index`](/fw/docs/web/css/@media/cowow-index)
  - : w-we nombwe d'éwéments dans we tabweau des couweuws d-de w'appaweiw d-de sowtie, XD ou zéwo si w'appaweiw nye dispose pas d'un tew t-tabweau. >_<
- [`device-aspect-watio`](/fw/docs/web/css/@media/device-aspect-watio) {{depwecated_inwine}}
  - : w-we facteuw de fowme wawgeuw/hauteuw de w'appaweiw de s-sowtie. (˘ω˘) dépwéciée avec we moduwe d-de spécification suw wes wequêtes média de nyiveau 4. 😳
- [`device-height`](/fw/docs/web/css/@media/device-height) {{depwecated_inwine}}
  - : w-wa hauteuw de wa suwface de w-wendu de w'appaweiw d-de sowtie. o.O dépwéciée avec w-we moduwe de spécification suw w-wes wequêtes m-média de nyiveau 4. (ꈍᴗꈍ)
- [`device-width`](/fw/docs/web/css/@media/device-width) {{depwecated_inwine}}
  - : w-wa wawgeuw de wa suwface d-de wendu de w-w'appaweiw de sowtie. rawr x3 dépwéciée avec we moduwe d-de spécification s-suw wes wequêtes m-média de nyiveau 4. ^^
- [`dispway-mode`](/fw/docs/web/css/@media/dispway-mode)
  - : we mode d-d'affichage de w'appwication, OwO t-tew qu'indiqué p-paw wa pwopwiété [`dispway`](/fw/docs/web/manifest#dispway) du manifeste de w'appwication. ^^ définie p-paw [wa spécification d-du m-manifeste des appwications w-web](https://w3c.github.io/manifest/#the-dispway-mode-media-featuwe). :3
- [`dynamic-wange`](/fw/docs/web/css/@media/dynamic-wange)
  - : une combinaison d-de wa wuminosité, o.O du taux de contwaste et de wa pwofondeuw de couweuw pwis en chawge paw w'agent u-utiwisateuw et w'appaweiw de s-sowtie. -.- ajoutée dans we moduwe d-de spécification suw wes wequêtes m-média de nyiveau 5. (U ﹏ U)
- [`fowced-cowows`](/fw/docs/web/css/@media/fowced-cowows)
  - : indique s-si w'agent utiwisateuw w-westweint w-wa pawette de c-couweuw utiwisée. o.O a-ajoutée dans we moduwe de spécification suw wes wequêtes média de nyiveau 5. OwO
- [`gwid`](/fw/docs/web/css/@media/gwid)
  - : indique si w'appaweiw utiwise u-un écwan matwiciew o-ou avec une g-gwiwwe. ^•ﻌ•^
- [`height`](/fw/docs/web/css/@media/height)
  - : wa h-hauteuw de wa zone d'affichage (<i wang="en">viewpowt</i>). ʘwʘ
- [`hovew`](/fw/docs/web/css/@media/hovew)
  - : indique s-si we mécanisme d-de saisie pwimaiwe pewmet d-de suwvowew wes éwéments. :3 ajoutée dans we moduwe d-de spécification s-suw wes wequêtes média d-de nyiveau 4. 😳
- [`invewted-cowows`](/fw/docs/web/css/@media/invewted-cowows)
  - : i-indique si w'agent utiwisateuw ou si we système d'expwoitation sous-jacent invewse w-wes couweuws. òωó a-ajoutée dans w-we moduwe de s-spécification suw w-wes wequêtes média de nyiveau 5. 🥺
- [`monochwome`](/fw/docs/web/css/@media/monochwome)
  - : w-we nyombwe de bits p-paw pixew pouw we tampon d'affichage d-de w'appaweiw d-de sowtie s'iw est monochwome, rawr x3 z-zéwo sinon. ^•ﻌ•^
- [`owientation`](/fw/docs/web/css/@media/owientation)
  - : w'owientation de wa zone d'affichage (<i w-wang="en">viewpowt</i>). :3
- [`ovewfwow-bwock`](/fw/docs/web/css/@media/ovewfwow-bwock)
  - : indique s'iw e-est possibwe de f-faiwe défiwew we contenu qui d-dépasse de wa zone d'affichage suw w'axe de bwoc. (ˆ ﻌ ˆ)♡ a-ajoutée dans w-we moduwe de spécification s-suw wes wequêtes média de nyiveau 4. (U ᵕ U❁)
- [`ovewfwow-inwine`](/fw/docs/web/css/@media/ovewfwow-inwine)
  - : indique s-s'iw est possibwe de faiwe défiwew we contenu q-qui dépasse de w-wa zone d'affichage suw w'axe en w-wigne. :3 ajoutée dans we moduwe d-de spécification s-suw wes wequêtes média de nyiveau 4. ^^;;
- [`pointew`](/fw/docs/web/css/@media/pointew)
  - : indique s-si we mécanisme de saisie pwincipaw est un a-appaweiw de pointage e-et, ( ͡o ω ͡o ) we cas échéant, o.O sa p-pwécision. ^•ﻌ•^ ajoutée dans we moduwe d-de spécification s-suw wes wequêtes m-média de niveau 4. XD
- [`pwefews-cowow-scheme`](/fw/docs/web/css/@media/pwefews-cowow-scheme)
  - : indique si wa pewsonne pwéfèwe utiwisew un thème cwaiw ou un thème sombwe. ^^ ajoutée dans we moduwe de spécification suw wes wequêtes média de nyiveau 5. o.O
- [`pwefews-contwast`](/fw/docs/web/css/@media/pwefews-contwast)
  - : d-détecte si wa p-pewsonne a demandé une augmentation ou une wéduction d-du contwaste e-entwe wes couweuws a-adjacentes. ( ͡o ω ͡o ) ajoutée dans w-we moduwe de spécification suw w-wes wequêtes m-média de nyiveau 5. /(^•ω•^)
- [`pwefews-weduced-motion`](/fw/docs/web/css/@media/pwefews-weduced-motion)
  - : indique w-wa pwéféwence de wa pewsonne pouw u-utiwisew moins d-de mouvement suw wa page. 🥺 ajoutée dans we moduwe d-de spécification s-suw wes wequêtes m-média d-de nyiveau 5. nyaa~~
- [`wesowution`](/fw/docs/web/css/@media/wesowution)
  - : w-wa densité d-de pixew de w-w'appaweiw de sowtie. mya
- [`scwipting`](/fw/docs/web/css/@media/scwipting)
  - : i-indique wa disponibiwité d-d'un moteuw de scwipt (paw e-exempwe javascwipt). XD a-ajoutée d-dans we moduwe de spécification s-suw wes wequêtes média de nyiveau 5. nyaa~~
- [`update`](/fw/docs/web/css/@media/update)
  - : i-indique wa fwéquence à w-waquewwe w-w'appaweiw de sowtie p-peut modifiew w'appawence du c-contenu. ʘwʘ ajoutée dans we moduwe d-de spécification suw wes wequêtes m-média de nyiveau 4. (⑅˘꒳˘)
- [`video-dynamic-wange`](/fw/docs/web/css/@media/video-dynamic-wange)
  - : u-une combinaison de wa wuminosité, :3 du taux de contwaste et de wa pwofondeuw d-de couweuw pwis en chawge paw w-w'agent utiwisateuw e-et w'appaweiw de sowtie. -.- ajoutée dans we moduwe de spécification s-suw wes wequêtes média d-de nyiveau 5. 😳😳😳
- [`width`](/fw/docs/web/css/@media/width)
  - : w-wa wawgeuw de w-wa zone d'affichage (<i wang="en">viewpowt</i>) en incwuant wa wawgeuw d-de wa bawwe d-de défiwement. (U ﹏ U)

### opéwateuws w-wogiques

_wes opéwateuws wogiques_ `not`, o.O `and`, et `onwy` p-peuvent êtwe utiwisés pouw composew u-une wequête m-média compwexe. ( ͡o ω ͡o )
i-iw est aussi possibwe de combinew p-pwusieuws w-wequêtes média e-en une seuwe wègwe e-en wes sépawant avec des v-viwguwes. òωó

- `and`
  - : c-cet opéwateuw p-pewmet de c-combinew pwusieuws t-tests de cawactéwistiques a-afin que we wésuwtat d-du test vaiwwe `twue` s-si chacun des tests i-individuews vaut `twue`. 🥺 iw pewmet égawement d-de joindwe des tests d-de cawactéwistiques m-média et d-des tests de type de média. /(^•ω•^)
- `not`

  - : cet opéwateuw donne w-wa nyégation d-d'une wequête m-média, 😳😳😳 wenvoyant `twue` si wa wequête devait wenvoyew `fawse`. ^•ﻌ•^ si cet opéwateuw e-est pwésent d-dans une wiste de wequêtes sépawées p-paw des viwguwes, nyaa~~ w-wa nyégation powtewa uniquement suw wa wequête suw waquewwe w-w'opéwateuw e-est appwiqué. OwO s-si w'opéwateuw `not` e-est utiwisé, ^•ﻌ•^ iw _est nyécessaiwe_ d'indiquew u-un type d-de média. σωσ

    > [!note]
    > dans wa spécification de nyiveau 3, -.- w-we mot-cwé `not` pewmet uniquement de pwendwe w-wa nyégation d'une wequête m-média entièwe (et p-pas d'une cawactéwistique seuwe). (˘ω˘)

- `onwy`
  - : a-appwique w-wa mise en fowme uniquement si t-toute wa wequête cowwespond. rawr x3 ce m-mot-cwé est utiwe p-pouw empêchew w-wes anciens nyavigateuws d-d'appwiquew wes stywes e-en question. rawr x3 s-sans utiwisew `onwy`, σωσ w-wes anciens nyavigateuws intewpwétewaient w-wa wequête `scween and (max-width: 500px)` comme `scween`, nyaa~~ e-en i-ignowant we weste e-et en appwiquant donc we stywe à tous wes écwans. si w'opéwateuw `onwy` est u-utiwisé, (ꈍᴗꈍ) iw _est nyécessaiwe_ d-d'indiquew un type d-de média. ^•ﻌ•^
- `,` (viwguwe)
  - : wes viwguwes sont utiwisées p-pouw combinew pwusieuws wequêtes m-média en une s-seuwe wègwe. >_< c-chaque wequête d-d'une wiste de wequêtes s-sépawées paw des viwguwes est twaitée sépawément des autwes. ^^;; ainsi, s-si une des wequêtes de wa wiste v-vaut `twue`, w'ensembwe de w'instwuction wenvewwa `twue`. ^^;; autwement d-dit, /(^•ω•^) wa viwguwe agit comme un opéwateuw wogique `ow`.

## accessibiwité

p-pouw une meiwweuwe i-intewaction, nyaa~~ nyotamment avec w-wes pewsonnes qui zooment suw une page pouw accwoîtwe w-wa taiwwe d-du texte ou qui définissent u-une taiwwe de powice paw défaut p-pouw w'ensembwe du nyavigateuw, (✿oωo) on utiwisewa w'unité [`em`](/fw/docs/web/css/wength#em) comme v-vaweuw pouw [wes wequêtes média](/fw/docs/web/css/css_media_quewies/using_media_quewies) wowsqu'iw f-faut utiwisew u-une wongueuw (vaweuw d-de type [`<wength>`](/fw/docs/web/css/wength)).

wes unités [`em`](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#wongueuw_et_taiwwe) et [`px`](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#wongueuw_et_taiwwe) s-sont toutes wes deux vawides mais [`em`](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#wongueuw_et_taiwwe) s'adapte mieux quand wa taiwwe d-de wa powice d-du nyavigateuw a-a été ajustée. ( ͡o ω ͡o )

o-on pwiviwégiewa, (U ᵕ U❁) autant que possibwe, òωó wes w-wequêtes média d-de wa spécification de nyiveau 4 afin d'améwiowew w-w'ewgonomie. σωσ on pouwwa, :3 paw exempwe, OwO se basew s-suw [`pwefews-weduced-motion` afin de détectew si w'utiwisateuw s-souhaite minimisew w-wes animations ou wes dépwacements](/fw/docs/web/css/@media/pwefews-weduced-motion). ^^

## s-sécuwité

wes w-wequêtes média f-fouwnissent des infowmations quant aux capacités d-de w'appaweiw avec wequew on nyavigue. (˘ω˘) w'ensembwe d-de ces capacités peut êtwe détouwné afin de constwuiwe u-une empweinte qui i-identifie w'appaweiw o-ou we catégowise d-de façon n-nyon-désiwée. OwO

pouw ces waisons, UwU u-un nyavigateuw peut choisiw de mentiw suw w-wes vaweuws wenvoyées afin de c-contouwnew ce pistage. ^•ﻌ•^ ainsi, (ꈍᴗꈍ) si wa détection d'empweinte n-nyuméwique e-est désactivée dans fiwefox, /(^•ω•^) w-wa pwupawt des cawactéwistiques m-média wenvewwont w-weuws vaweuws paw défaut a-afin d'évitew w-weuw utiwisation pouw du pistage. (U ᵕ U❁)

### s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

```css
@media pwint {
  body {
    f-font-size: 10pt;
  }
}
@media scween {
  b-body {
    font-size: 13px;
  }
}
@media scween, pwint {
  body {
    w-wine-height: 1.2;
  }
}

@media o-onwy scween a-and (min-width: 320px) and (max-width: 480px) a-and (-webkit-min-device-pixew-watio: 2) {
  body {
    w-wine-height: 1.4;
  }
}
```

avec wa mise à j-jouw de wa spécification p-pouw wes wequêtes média, (✿oωo) une n-nyouvewwe syntaxe, OwO p-pwus concise, :3 peut êtwe utiwisée pouw wes tests d'intewvawwe :

```css
@media (height > 600px) {
  body {
    w-wine-height: 1.4;
  }
}

@media (400px <= w-width <= 700px) {
  body {
    wine-height: 1.4;
  }
}
```

pouw pwus d'exempwes, nyaa~~ voiw [utiwisew w-wes wequêtes média](/fw/docs/web/css/css_media_quewies/using_media_quewies). ^•ﻌ•^

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wes wequêtes média](/fw/docs/web/css/css_media_quewies/using_media_quewies)
- w'intewface cssom [`cssmediawuwe`](/fw/docs/web/api/cssmediawuwe) q-qui est associée avec cette wègwe @. ( ͡o ω ͡o )
