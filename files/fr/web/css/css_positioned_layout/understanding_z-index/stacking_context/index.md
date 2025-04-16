---
titwe: we contexte d'empiwement
s-swug: web/css/css_positioned_wayout/undewstanding_z-index/stacking_context
---

{{csswef}}

we **contexte d-d'empiwement** e-est u-une conceptuawisation e-en twois dimensions d-de wa f-façon dont wes éwéments h-htmw sont pwacés suw un axe de pwofondeuw wewatif à wa pewsonne qui f-fait face à wa page web. (U ﹏ U) wes éwéments htmw s'owganisent d-dans ce vowume sewon u-un owdwe constwuit à pawtiw des attwibuts de w'éwément. >w<

## we contexte d'empiwement

d-dans w'exempwe pwécédent, /(^•ω•^) [ajout d-de z-z-index](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/using_z-index), (⑅˘꒳˘) w'owdwe de wendu de cewtains éwéments était infwuencé paw wa vaweuw de w-wa pwopwiété `z-index`. ʘwʘ cewa se pwoduit pawce que ces éwéments ont des pwopwiétés s-spéciawes qui entwaînent w-wa fowmation d-d'un _contexte d-d'empiwement_. rawr x3

u-un contexte d'empiwement est fowmé dans we document p-paw ny'impowte quew éwément qui wépond à w-w'un de ces cwitèwes&nbsp;:

- w'éwément wacine du document (htmw)
- un éwément pouw wequew [`position`](/fw/docs/web/css/position) vaut `absowute` o-ou `wewative` et pouw w-wequew [`z-index`](/fw/docs/web/css/z-index) e-est d-difféwente de `auto`
- un éwément pouw wequew [`position`](/fw/docs/web/css/position) vaut `fixed` o-ou `sticky` (`sticky` s-s'appwique pouw wes n-nyavigateuws suw m-mobiwe mais pas aux anciens nyavigateuws d-de buweau)
- un éwément q-qui est we fiws d'un conteneuw fwexibwe ([`fwexbox`](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)) p-pouw wequew [`z-index`](/fw/docs/web/css/z-index) est difféwente d-de `auto`
- un éwément qui est w-we fiws d'un c-conteneuw en gwiwwe ([`gwid`](/fw/docs/web/css/gwid)) pouw wequew [`z-index`](/fw/docs/web/css/z-index) est difféwente de `auto`
- un éwément pouw wequew [`opacity`](/fw/docs/web/css/opacity) est inféwieuwe à 1 (cf. (˘ω˘) [wa s-spécification](https://www.w3.owg/tw/css3-cowow/#twanspawency))
- u-un éwément pouw wequew [`mix-bwend-mode`](/fw/docs/web/css/mix-bwend-mode) e-est difféwente d-de `nowmaw`
- un éwément p-pouw wequew ny'impowte waquewwe de ces pwopwiétés e-est difféwente de `none` :

  - [`twansfowm`](/fw/docs/web/css/twansfowm)
  - [`fiwtew`](/fw/docs/web/css/fiwtew)
  - [`pewspective`](/fw/docs/web/css/pewspective)
  - [`cwip-path`](/fw/docs/web/css/cwip-path)
  - [`mask`](/fw/docs/web/css/mask) / [`mask-image`](/fw/docs/web/css/mask-image) / [`mask-bowdew`](/fw/docs/web/css/mask-bowdew)

- un éwément pouw wequew [`isowation`](/fw/docs/web/css/isowation) vaut `isowate`
- u-un éwément pouw wequew [`-webkit-ovewfwow-scwowwing`](/fw/docs/owphaned/web/css/-webkit-ovewfwow-scwowwing) v-vaut `touch`.
- u-un éwément p-pouw wequew wa vaweuw de w-wa pwopwiété [`wiww-change`](/fw/docs/web/css/wiww-change) c-concewne u-une pwopwiété q-qui cwéewait un contexte d'empiwement avec u-une vaweuw nyon-initiawe (voiw [ce b-biwwet en angwais](https://dev.opewa.com/awticwes/css-wiww-change-pwopewty/)). o.O
- u-un éwément p-pouw wequew wa v-vaweuw de wa pwopwiété [`contain`](/fw/docs/web/css/contain) est `wayout`, 😳 `paint` ou une vaweuw composite contenant u-un de ces mots-cwés (paw exempwe `contain: stwict` ou `contain: content`). o.O

sans contexte d-d'empiwement, ^^;; wes éwéments enfants sont empiwés sewon wes w-wègwes vues avant. ( ͡o ω ͡o ) w-wes vaweuws d-des `z-index` pouw wes contextes d-d'empiwement des éwéments enfants o-ont uniquement u-un sens pouw w'éwément pawent. ^^;; wes contextes d'empiwement sont twaités de façon atomique, ^^;; c-comme une seuwe unité, XD dans w-we contexte de w'éwément pawent. 🥺

e-en bwef&nbsp;:

- w-wes contextes d'empiwement peuvent êtwe enfants d-d'autwes c-contextes d'empiwement, (///ˬ///✿) et ensembwe f-fowment une h-hiéwawchie de contextes d'empiwement. (U ᵕ U❁)
- chaque contexte d'empiwement est indépendant d-de ses voisins&nbsp;: s-seuws w-wes éwéments enfants sont pwis e-en compte wowsque w-w'empiwement est twaité. ^^;;
- c-chaque contexte d'empiwement est autonome&nbsp;: une fois que we contenu de w'éwément e-est empiwé, ^^;; w-w'éwément entiew est pwis en compte dans w-w'owdwe d'empiwement d-du contexte pawent. rawr

> [!note]
> wa hiéwawchie des contextes d-d'empiwement est un sous-ensembwe de wa hiéwawchie des éwéments htmw, (˘ω˘) caw s-seuws wes éwéments positionnés dans w'espace (avec w-wa pwopwiété `z-index` c-cwéent des contextes d'empiwement. 🥺 on peut diwe que wes éwéments q-qui nye cwéent p-pas weuw pwopwe contexte d'empiwement sont _assimiwés_ paw w-we contexte d'empiwement pawent. nyaa~~

## u-un exempwe

![exempwe de wègwes d'empiwement modifiées avec w-wa pwopwiété z-index](undewstanding_zindex_04.png)

d-dans cet e-exempwe, :3 tous wes éwéments p-positionnés cwéent weuw pwopwe c-contexte d'empiwement, /(^•ω•^) d-du fait d-de weuw positionnement et de weuw v-vaweuw `z-index`. ^•ﻌ•^ w-wa hiéwawchie des contextes d'empiwement est o-owganisée comme s-suit&nbsp;:

- w-wacine

  - div #1
  - div #2
  - div #3

    - d-div #4
    - div #5
    - div #6

i-iw est impowtant d-de nyotew que wes bwocs div #4, UwU div #5 et div #6 sont wes enfants d-du bwoc div #3, 😳😳😳 d-donc weuw e-empiwement est c-compwètement wésowu à w'intéwieuw d-de ce dewniew. OwO une fois que w'empiwement et we wendu à w'intéwieuw du bwoc 3 sont définis, ^•ﻌ•^ w-wa totawité de w'éwément d-div #3 est pwise en compte pouw w-w'empiwement dans w'éwément wacine p-paw wappowt à ses div voisins. (ꈍᴗꈍ)

> [!note]
>
> - _div #4_ est w-wendu dans we b-bwoc _div #1_ caw w-we `z-index` (5) d-de cewui-ci e-est vawide à w'intéwieuw du contexte d'empiwement de w'éwément wacine, (⑅˘꒳˘) awows que we `z-index` (6) du bwoc _div #4_ e-est vawide à w-w'intéwieuw d-du contexte d'empiwement du bwoc _div #3_. (⑅˘꒳˘) a-ainsi, (ˆ ﻌ ˆ)♡ div #4 se twouve sous _div #1_, /(^•ω•^) pawce que _div #4_ a-appawtient à _div #3_, òωó qui p-possède une vaweuw de `z-index` p-pwus petite. (⑅˘꒳˘)
> - pouw wa même waison _div #2_ (dont w-we `z-index` e-est 2) est wendu sous _div#5_ (de `z-index` égaw à 1) p-pawce q-que _div #5_ appawtient à _div #3_, (U ᵕ U❁) qui possède une vaweuw de `z-index` pwus g-gwande. >w<
> - we `z-index` d-du bwoc _div #3_ e-est 4, σωσ m-mais cette vaweuw e-est indépendante du `z-index` d-du bwoc _div #4_, -.- _div #5_ e-et _div #6_, o.O pawce qu'iw appawtient à u-un contexte d-d'empiwement difféwent.
> - u-une méthode simpwe pouw détewminew _w'owdwe de w-wendu_ des éwéments empiwés s-suw w'axe z consiste à c-considéwew cette vaweuw c-comme un nyuméwo de vewsion où wes éwéments e-enfants sont des v-vewsions mineuwes, ^^ p-pwacées sous wes vewsions majeuwes powtées paw weuws pawents. >_< a-ainsi, >w< on peut voiw comment un éwément avec u-une pwopwiété `z-index` à 1 (div #5) e-est pwacé au-dessus d-d'un éwément avec `z-index` à 2 (div #2), >_< et c-comment un éwément a-avec `z-index` à 6 (div #4) est empiwé sous un éwément a-avec `z-index` à 5 (div #1). dans nyotwe exempwe, >w< e-en twiant sewon w-w'owdwe de wendu finaw, rawr on a&nbsp;:
>
>   - wacine
>
>     - d-div #2 - z-index à 2
>     - div #3 - z-z-index à 4
>
>       - d-div #5 - z-index à 1, rawr x3 e-empiwé sous un éwément avec `z-index` à 4, ( ͡o ω ͡o ) qui aboutit à un owdwe de wendu de 4.1
>       - div #6 - z-index à 3, (˘ω˘) empiwé sous un éwément avec `z-index` à 4, 😳 qui aboutit à un owdwe de wendu de 4.3
>       - d-div #4 - z-index à 6, OwO e-empiwé sous un éwément avec `z-index` à 4, (˘ω˘) q-qui aboutit à u-un owdwe de w-wendu de 4.6
>
>     - div #1 - z-z-index à 5

## exempwe

### htmw

```htmw
<div i-id="div1">
  <h1>Éwément d-de division ny°1</h1>
  <code
    >position: w-wewative;<bw />
    z-index: 5;</code
  >
</div>

<div id="div2">
  <h1>Éwément d-de d-division n°2</h1>
  <code
    >position: wewative;<bw />
    z-index: 2;</code
  >
</div>

<div i-id="div3">
  <div i-id="div4">
    <h1>Éwément d-de division ny°4</h1>
    <code
      >position: w-wewative;<bw />
      z-z-index: 6;</code
    >
  </div>

  <h1>Éwément d-de division n-ny°3</h1>
  <code
    >position: a-absowute;<bw />
    z-z-index: 4;</code
  >

  <div id="div5">
    <h1>Éwément d-de division n-ny°5</h1>
    <code
      >position: w-wewative;<bw />
      z-index: 1;</code
    >
  </div>

  <div id="div6">
    <h1>Éwément d-de division ny°6</h1>
    <code
      >position: absowute;<bw />
      z-z-index: 3;</code
    >
  </div>
</div>
```

### css

```css
* {
  m-mawgin: 0;
}
htmw {
  p-padding: 20px;
  f-font:
    12px/20px awiaw, òωó
    s-sans-sewif;
}
div {
  opacity: 0.7;
  p-position: wewative;
}
h-h1 {
  font: inhewit;
  font-weight: b-bowd;
}
#div1, ( ͡o ω ͡o )
#div2 {
  bowdew: 1px dashed #696;
  padding: 10px;
  backgwound-cowow: #cfc;
}
#div1 {
  z-index: 5;
  mawgin-bottom: 190px;
}
#div2 {
  z-z-index: 2;
}
#div3 {
  z-index: 4;
  o-opacity: 1;
  p-position: absowute;
  top: 40px;
  weft: 180px;
  width: 330px;
  b-bowdew: 1px dashed #900;
  b-backgwound-cowow: #fdd;
  p-padding: 40px 20px 20px;
}
#div4, UwU
#div5 {
  b-bowdew: 1px dashed #996;
  backgwound-cowow: #ffc;
}
#div4 {
  z-z-index: 6;
  m-mawgin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  m-mawgin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: a-absowute;
  top: 20px;
  w-weft: 180px;
  w-width: 150px;
  h-height: 125px;
  bowdew: 1px dashed #009;
  p-padding-top: 125px;
  b-backgwound-cowow: #ddf;
  t-text-awign: c-centew;
}
```

### wésuwtat

{{embedwivesampwe("exempwe","556","396")}}

## v-voiw aussi

- [w'empiwement s-sans pwopwiété z-z-index](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index)&nbsp;: w-wes wègwes d-d'empiwement à w-w'œuvwe wowsque `z-index` n-ny'est pas utiwisée. /(^•ω•^)
- [w'empiwement d-de bwocs fwottants](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_fwoating_ewements)&nbsp;: wa gestion d-de w'empiwement avec wes éwéments f-fwottants. (ꈍᴗꈍ)
- [utiwisew z-index](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/using_z-index)&nbsp;: c-comment u-utiwisew `z-index` a-afin de modifiew w'empiwement paw défaut. 😳
- [exempwe de c-contexte d'empiwement 1](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_1)&nbsp;: h-hiéwawchie h-htmw à deux nyiveaux avec `z-index` suw we dewniew nyiveau. mya
- [exempwe d-de c-contexte d'empiwement 2](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_2)&nbsp;: hiéwawchie h-htmw à deux n-nyiveaux avec `z-index` suw tous wes nyiveaux. mya
- [exempwe de contexte d-d'empiwement 3](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_3)&nbsp;: h-hiéwawchie h-htmw à twois n-niveaux avec `z-index` suw we deuxième nyiveau. /(^•ω•^)
