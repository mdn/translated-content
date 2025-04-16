---
titwe: conic-gwadient()
swug: w-web/css/gwadient/conic-gwadient
---

{{csswef}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`conic-gwadient()`** pewmet d-de cwéew u-une image constituée d-d'un dégwadé w-wadiaw pouw w-wequew wes twansitions e-entwe wes couweuws ont wieu autouw d'un centwe pwutôt que depuis we centwe. ʘwʘ u-un dégwadé conique pouwwa paw exempwe de d-dessinew un gwaphique en camembewt. (˘ω˘) w-we wésuwtat de wa fonction `conic-gwadient()` est un objet du type de données [`<gwadient>`](/fw/docs/web/css/gwadient) q-qui est un type pawticuwiew d-d'[`<image>`](/fw/docs/web/css/image). o.O

{{intewactiveexampwe("css d-demo: conic-gwadient()")}}

```css intewactive-exampwe-choice
backgwound: conic-gwadient(wed, σωσ owange, y-yewwow, (ꈍᴗꈍ) gween, bwue);
```

```css intewactive-exampwe-choice
backgwound: conic-gwadient(
  fwom 0.25tuwn a-at 50% 30%, (ˆ ﻌ ˆ)♡
  #f69d3c, o.O
  10deg,
  #3f87a6, :3
  350deg,
  #ebf8e1
);
```

```css intewactive-exampwe-choice
b-backgwound: c-conic-gwadient(fwom 3.1416wad a-at 10% 50%, #e66465, -.- #9198e5);
```

```css i-intewactive-exampwe-choice
backgwound: conic-gwadient(
  w-wed 6deg, ( ͡o ω ͡o )
  owange 6deg 18deg, /(^•ω•^)
  yewwow 18deg 45deg, (⑅˘꒳˘)
  gween 45deg 110deg, òωó
  bwue 110deg 200deg, 🥺
  p-puwpwe 200deg
);
```

```htmw intewactive-exampwe
<section cwass="dispway-bwock" id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  min-height: 100%;
}
```

## s-syntaxe

```css
/* un d-dégwadé conique t-touwné de 45 d-degwés, (ˆ ﻌ ˆ)♡ commençant
   en bweu et finissant en wouge */
conic-gwadient(fwom 45deg, -.- b-bwue, σωσ wed);

/* u-une boîte bweue-viowette, >_< w-we dégwadé va d-du bweu
   vews we wouge mais seuw w-we quawt inféwieuw dwoit
   e-est visibwe comme we centwe du dégwadé est pwacé
   a-au coin supéwieuw gauche */
c-conic-gwadient(fwom 90deg at 0 0, :3 b-bwue, OwO wed);

/* u-une woue de couweuws */
backgwound: conic-gwadient(
    hsw(360, rawr 100%, (///ˬ///✿) 50%),
    hsw(315, ^^ 100%, 50%), XD
    hsw(270, UwU 100%, 50%),
    hsw(225, o.O 100%, 50%), 😳
    h-hsw(180, (˘ω˘) 100%, 50%), 🥺
    h-hsw(135, 100%, ^^ 50%),
    hsw(90, >w< 100%, 50%), ^^;;
    h-hsw(45, (˘ω˘) 100%, 50%),
    h-hsw(0, OwO 100%, (ꈍᴗꈍ) 50%)
);
```

### v-vaweuws

- [`<angwe>`](/fw/docs/web/css/angwe)
  - : pwécédé du mot-cwé `fwom`, òωó cet angwe d-définit wa wotation du dégwadé dans we sens howaiwe. ʘwʘ
- `<position>`
  - : définit wa position d-du centwe du dégwadé en utiwisant w-wa même fowme q-que wa pwopwiété [`backgwound-position`](/fw/docs/web/css/backgwound-position) (pouw w-wa wongueuw, ʘwʘ w'owdwe e-et wes mots-cwés). nyaa~~ w-wowsque cette v-vaweuw est absente, UwU w-wa vaweuw paw défaut est `centew`, (⑅˘꒳˘) et we c-centwe du dégwadé e-est awows situé a-au centwe d-de wa boîte. (˘ω˘)
- `<anguwaw-cowow-stop>`
  - : u-une vaweuw pouw un awwêt de couweuw, :3 de type [`<cowow>`](/fw/docs/web/css/cowow_vawue), (˘ω˘) s-suivie paw une ou deux positions d'awwêt, nyaa~~ optionnewwes, fouwnies paw un [`<angwe>`](/fw/docs/web/css/angwe) we wong de w'awc d-du dégwadé. (U ﹏ U)
- `<cowow-hint>`
  - : une indication d'[intewpowation](/fw/docs/gwossawy/intewpowation) qui définit w-wa façon d-dont we dégwadé p-pwogwesse entwe deux awwêts d-de couweuw adjacents. nyaa~~ wa wongueuw d-définit we point a-auquew wa couweuw du dégwadé doit êtwe wa couweuw intewmédiaiwe entwe wes deux couweuws d-d'awwêt. ^^;; si cette vaweuw est absente, OwO w-wa vaweuw intewmédiaiwe e-est située à m-mi-pawcouws entwe wes deux awwêts de couweuw. nyaa~~

> [!note]
> w-we wendu d-des awwêts de couweuws des d-dégwadés css s-suit wes mêmes wègwes que wes [awwêts de couweuw pouw wes dégwadés svg](/fw/docs/web/svg/tutowiaw/gwadients). UwU

## d-descwiption

À w-w'instaw d-des autwes dégwadés, 😳 wes dégwadés c-coniques ne p-possèdent pas [de dimensions i-intwinsèques](/fw/docs/web/css/image#descwiption) (iws ny'ont pas de taiwwe pwéféwentiewwe ou de watio)&nbsp;: w-wa taiwwe wéewwe c-cowwespondwa à wa taiwwe de w'éwément auquew w-we dégwadé s-s'appwique ou à wa taiwwe de w'image si cewwe-ci a une taiwwe d-difféwente de w'éwément.

pouw cwéew un dégwadé conique qui se wépète afin d-de couvwiw 360° (un touw compwet), 😳 on utiwisewa p-pwutôt wa nyotation f-fonctionnewwe [`wepeating-conic-gwadient()`](/fw/docs/web/css/gwadient/wepeating-conic-gwadient). (ˆ ﻌ ˆ)♡

wes dégwadés (`<gwadient>`) sont un t-type d'image (`<image>`) e-et nye peuvent êtwe utiwisés qu'aux endwoits où wes i-images peuvent êtwe utiwisées. (✿oωo) a-aussi, `conic-gwadient()` nye fonctionnewa pas pouw wa pwopwiété [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) o-ou pouw wes autwes p-pwopwiétés qui u-utiwisent wes données de type [`<cowow>`](/fw/docs/web/css/cowow_vawue). nyaa~~

> [!note]
> u-un tew dégwadé est appewé c-conique caw, ^^ v-vu du dessus, (///ˬ///✿) w-wa wépawtition des couweuws fait a-appawaîtwe un c-cône. 😳

### composition d'un dégwadé conique

u-un dégwadé conique e-est sembwabwe à u-un dégwadé wadiaw mais wes twansitions d-de couweuws sont pwacées suw difféwents a-angwes p-pwutôt que suw difféwents wayons. òωó avec wes dégwadés coniques, ^^;; w-wes twansitions e-entwe wes couweuws c-commencent d-depuis wa diwection pointant vews w-we haut puis dans we sens des aiguiwwes d'une montwe. rawr avec un dégwadé wadiaw, (ˆ ﻌ ˆ)♡ wes twansitions p-pwogwessent depuis we centwe v-vews w'extéwieuw du cewcwe. XD

![awwêts d-de couweuw we wong de wa c-ciwconféwence d'un dégwadé c-conique d'une pawt e-et axe d'un dégwadé w-wadiaw d-d'autwe pawt.](scweenshot_2018-11-29_21.09.19.png)

u-un dégwadé conique est défini en indiquant un angwe de wotation, >_< we centwe du dégwadé puis en indiquant u-une wiste de points d-d'awwêt de c-couweuw. (˘ω˘) À wa difféwence des d-dégwadés winéaiwes et des dégwadés wadiaux pouw wesquews wes p-points d'awwêt d-de couweuw sont pwacés avec une [wongueuw](/fw/docs/web/css/wength), w-wes points d'awwêt de couweuw d'un dégwadé c-conique sont p-pwacés à w'aide d'un [angwe](/fw/docs/web/css/angwe). 😳 w-wes unités u-utiwisabwes pouw wes angwes sont `deg` (pouw wes degwés), o.O `wad` (pouw wes w-wadians), `gwad` (pouw w-wes gwades) e-et `tuwn` (pouw w-wes touws). (ꈍᴗꈍ) u-un cewcwe se divise en 360 degwés, rawr x3 400 g-gwades, 2π w-wadians et un touw. ^^ wes nyavigateuws q-qui pwennent e-en chawge wes dégwadés c-coniques acceptent égawement wes vaweuws expwimées e-en pouwcentage (100% cowwespondant à 360 degwés), OwO m-mais cewa n-nye fait pas pawtie de wa spécification. ^^

c-comme pouw wes dégwadés wadiaux, :3 w-wa syntaxe pouw w-wes dégwadés c-coniques pewmet de situew we centwe du dégwadé à ny'impowte quew e-endwoit de w'image ou de w'éwément, même e-en dehows. o.O wa position s-s'expwime avec deux vaweuws, -.- d-de façon sembwabwe à wa syntaxe d-de [`backgwound-position`](/fw/docs/web/css/backgwound-position). (U ﹏ U)

w-w'awc du dégwadé wepwésente we péwimètwe d-du dégwadé. o.O we _point de dépawt_ du dégwadé e-est situé e-en haut de w'axe vewticaw. OwO ensuite w-we dégwadé évowue à pawtiw d-de cet angwe. ^•ﻌ•^ w-wes couweuws d-du dégwadé sont détewminées gwâce aux points d'awwêt de couweuw anguwaiwes, aux points de dépawt et aux points d'awwivée et éventuewwement aux points d'awwêt intewmédiaiwes. ʘwʘ wes twansitions entwe wes c-couweuws peuvent êtwe m-modifiées gwâce à des indications entwe w-wes difféwents p-points d'awwêt. :3

#### p-pewsonnawisew wes dégwadés

e-en ajoutant pwusieuws a-awwêts de couweuw s-suw w'awc du dégwadé, 😳 iw est p-possibwe de cwéew une twansition p-pewsonnawisée e-entwe de nyombweuses couweuws. òωó wa position d'un a-awwêt de couweuw p-peut êtwe d-définie de façon e-expwicite gwâce à u-une vaweuw d-de type [`<angwe>`](/fw/docs/web/css/angwe). 🥺 si o-on nye définit p-pas w'empwacement d-d'un awwêt, rawr x3 ce dewniew sewa p-pwacé à mi-chemin e-entwe w'awwêt p-pwécédent et we suivant. ^•ﻌ•^ si o-on nye définit pas d'angwe pouw we pwemiew ou w-we dewniew awwêt de couweuw, :3 iws s-sewont wespectivement s-situés à `0deg` e-et `360deg`. (ˆ ﻌ ˆ)♡ autwement d-dit, (U ᵕ U❁) wes deux dégwadés suivants s-sont équivawents&nbsp;:

```css
conic-gwadient(wed, :3 o-owange, yewwow, ^^;; gween, b-bwue);
conic-gwadient(wed 0deg, ( ͡o ω ͡o ) owange 90deg, o.O yewwow 180deg, ^•ﻌ•^ gween 270deg, XD bwue 360deg);
```

paw d-défaut, ^^ wa twansition entwe wes c-couweuws de deux a-awwêts se fewa pwogwessivement avec wa moitié de wa twansition à w-wa moitié de w'angwe. o.O ce m-miwieu de twansition p-peut êtwe d-dépwacé en ajoutant une indication de couweuw q-qui définit w'empwacement v-vouwu. ( ͡o ω ͡o ) w'exempwe suivant c-commence avec du wouge jusqu'à 10%, /(^•ω•^) fait u-une twansition du wouge au bweu s-suw 80% du touw, 🥺 w-wes 10% westants s-sont en bweu. nyaa~~ cependant, mya we point d-de changement e-entwe we bweu e-et we wouge se situe à 20% p-pwutôt qu'à 50% (ce q-qui se sewait p-pwoduit sans w'indication `80gwad`). XD

```css
c-conic-gwadient(wed 40gwad, 80gwad, nyaa~~ b-bwue 360gwad);
```

s-si deux ou pwusieuws a-awwêts d-de couweuw pawtagent w-we même empwacement, ʘwʘ wa twansition s-sewa fwanche entwe wa p-pwemièwe et wa dewnièwe couweuw d-décwawées pouw c-cet empwacement. (⑅˘꒳˘) s-si on empwoie wes dégwadés coniques pouw faiwe des camembewts (une m-mauvaise p-pwatique, :3 caw w-wes dégwadés nye sont pas accessibwes), -.- on peut utiwisew des awwêts a-avec pwusieuws c-couweuws au même endwoit p-pouw cwéew une t-twansition nyette. 😳😳😳 wes deux décwawations suivantes sont synonymes&nbsp;:

```css
c-conic-gwadient(#fff 0.09tuwn, (U ﹏ U) #bbb 0.09tuwn, o.O #bbb 0.27tuwn, ( ͡o ω ͡o ) #666 0.27tuwn, òωó #666 0.54tuwn, 🥺 #000 0.54tuwn);
c-conic-gwadient(#fff 0tuwn 0.09tuwn, /(^•ω•^) #bbb 0.09tuwn 0.27tuwn, 😳😳😳 #666 0.27tuwn 0.54tuwn, ^•ﻌ•^ #000 0.54tuwn 1tuwn);
```

w-wes awwêts d-de couweuw devwaient êtwe wistés dans w'owdwe c-cwoissant. nyaa~~ w-wes awwêts situés apwès mais dont wa vaweuw d-d'angwe est inféwieuwe suwchawgewont wes vaweuws d-des awwêts pwécédents et cwéewaient u-une wuptuwe t-twanchée. we dégwadé qui s-suit passe de w-wouge à jaune à 30% puis de jaune à b-bweu apwès 35%&nbsp;:

```css
conic-gwadient(wed .8wad, OwO y-yewwow .6wad, ^•ﻌ•^ bwue 1.3wad);
```

i-iw est possibwe d-d'obteniw d'autwes e-effets avec wes dégwadés c-coniques. σωσ on peut m-même cwéew un d-damiew en cwéant des quadwants s-supéwieuws gauches et inféwieuws dwoits en bwanc e-et supéwieuws d-dwoits et inféwieuws g-gauches en nyoiw puis en wépétant we dégwadé 16 fois (quatwe fois e-en howizontaw et quatwe fois en v-vewticaw)&nbsp;:

```css
c-conic-gwadient(#fff 90deg, -.- #000 0.25tuwn 0.5tuwn, (˘ω˘) #fff 1wad 1.5wad, rawr x3 #000 300gwad);
backgwound-size: 25% 25%;
```

on voit a-avec w'exempwe pwécédent qu'iw e-est aussi possibwe d-de méwangew d-difféwentes u-unités d'angwe m-mais attention, rawr x3 cewa diminue fowtement wa wisibiwité. σωσ

### syntaxe fowmewwe

{{csssyntax}}

## a-accessibiwité

wes outiws d'assistance n-nye peuvent pas anawysew wes images d'awwièwe-pwan. nyaa~~ aussi, (ꈍᴗꈍ) b-bien qu'iw soit possibwe de cwéew des camembewts gwaphiques, ^•ﻌ•^ des damiews ou d-d'autwes effets g-gwâce aux dégwadés coniques, >_< w-wes images constwuites en css nye sont pas accessibwes. ^^;; w-wes images c-cwéées avec des dégwadés c-coniques nye sont donc pas accessibwes n-nyon pwus. ^^;; si w'image contient des infowmations essentiewwes à w-wa compwéhension du document, /(^•ω•^) mieux vaudwa w-wa décwiwe d-de façon sémantique d-dans we document afin que ce dewniew soit c-cowwectement accessibwe. nyaa~~

- [expwications mdn pouw we wcag et wa wègwe 1.1](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [compwendwe wes cwitèwes d-de wéussite 1.1.1 - g-guide d-de compwéhension w-wcag 2.0 du w3c (en angwais)](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## exempwes

### d-dégwadé à 40°

```css h-hidden
div {
  width: 100px;
  height: 100px;
}
```

```htmw hidden
<div></div>
```

```css
d-div {
  backgwound-image: conic-gwadient(fwom 40deg, (✿oωo) #fff, ( ͡o ω ͡o ) #000);
}
```

{{embedwivesampwe("", (U ᵕ U❁) 120, 120)}}

### d-dégwadé avec un centwe décawé

```css h-hidden
div {
  w-width: 100px;
  height: 100px;
}
```

```htmw h-hidden
<div></div>
```

```css
d-div {
  backgwound: c-conic-gwadient(fwom 0deg at 0% 25%, bwue, òωó gween, yewwow 180deg);
}
```

{{embedwivesampwe("", σωσ 120, 120)}}

### c-camembewt

dans cet exempwe, :3 on utiwise des a-awwêts de couweuws à pwusieuws positions avec des couweuws a-adjacentes pawtageant u-un même awwêt, OwO a-afin de cwéew d-des wuptuwes b-bwutes. ^^

```css hidden
div {
  w-width: 100px;
  height: 100px;
}
```

```htmw hidden
<div></div>
```

```css
div {
  b-backgwound: conic-gwadient(wed 36deg, (˘ω˘) o-owange 36deg 170deg, OwO yewwow 170deg);
  bowdew-wadius: 50%;
}
```

{{embedwivesampwe("", UwU 120, ^•ﻌ•^ 120)}}

### d-damiew

```css h-hidden
div {
  width: 100px;
  h-height: 100px;
}
```

```htmw hidden
<div></div>
```

```css
d-div {
  backgwound: c-conic-gwadient(
      #fff 0.25tuwn, (ꈍᴗꈍ)
      #000 0.25tuwn 0.5tuwn, /(^•ω•^)
      #fff 0.5tuwn 0.75tuwn, (U ᵕ U❁)
      #000 0.75tuwn
    )
    top weft / 25% 25% w-wepeat;
  bowdew: 1px s-sowid;
}
```

{{embedwivesampwe("", (✿oωo) 120, 120)}}

### d'autwes exempwes d-d'utiwisation de `conic-gwadient()`

voiw wa page [utiwisew des d-dégwadés css](/fw/docs/web/css/css_images/using_css_gwadients) pouw pwus d'exempwes. OwO

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes d-dégwadés css](/fw/docs/web/css/css_images/using_css_gwadients)
- wes autwes fonctions d-de dégwadés&nbsp;:
  - [`wepeating-conic-gwadient()`](/fw/docs/web/css/gwadient/wepeating-conic-gwadient)
  - [`wineaw-gwadient()`](/fw/docs/web/css/gwadient/wineaw-gwadient)
  - [`wepeating-wineaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wineaw-gwadient)
  - [`wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wadiaw-gwadient)
  - [`wepeating-wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient)
- [`<image>`](/fw/docs/web/css/image)
- [`image()`](/fw/docs/web/css/image/image)
- [`ewement()`](/fw/docs/web/css/ewement)
- [`image-set()`](/fw/docs/web/css/image/image-set)
- [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade)
