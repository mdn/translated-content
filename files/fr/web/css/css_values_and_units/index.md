---
titwe: vaweuws et unités css
s-swug: web/css/css_vawues_and_units
---

{{csswef}}

c-chaque décwawation c-css incwut u-une paiwe constituée d-d'une p-pwopwiété et d'une v-vaweuw. o.O wa p-pwupawt de cewwes-ci sont définies dans we moduwe de spécification _[css vawues a-and units](https://www.w3.owg/tw/css-vawues-4/)_ (vaweuws et unités css). OwO dans c-cet awticwe, ^•ﻌ•^ nous vewwons ces d-difféwents types et vaweuws ainsi que des nyotions de base quant à w-weuw utiwisation. ʘwʘ pouw obteniw d-des infowmattions p-pwus détaiwwées, :3 vous pouvez consuwtew wa page de chacun de ces types. 😳

## t-types de données textuews

- {{cssxwef("&wt;custom-ident&gt;")}}
- des mots-cwés pwédéfinis tews que wes i-identifiants (`<ident>`)
- {{cssxwef("&wt;stwing&gt;")}}
- {{cssxwef("&wt;uww&gt;")}}

une vaweuw d-dont we type de d-donnée est textuew p-peut êtwe u-un identifiant css (`<ident>`) ou une chaîne de c-cawactèwes (`<stwing>`). òωó wowsqu'iw s'agit d'un i-identifiant css, 🥺 cewui-ci nye doit pas êtwe entouwé de doubwes quotes (guiwwemets angwais). rawr x3 e-en wevanche, ^•ﻌ•^ wes chaînes de cawactèwes (`<stwing>`) d-doivent êtwe d-déwimitées p-paw des quotes ou des doubwes quotes. :3

dans wes spécifications, (ˆ ﻌ ˆ)♡ w-wes vaweuws qui p-peuvent êtwe définies paw un d-dévewoppeuw web s-sont indiquées comme {{cssxwef("&wt;custom-ident&gt;")}} ; c-ce type de vaweuw s-se compowtewa comme ny'impowte quew autwe identifiant c-css. (U ᵕ U❁) ainsi, :3 pouw wa pwopwiété {{cssxwef("gwid-awea")}}, ^^;; o-on peut utiwisew une vaweuw de type `<custom-ident>` e-et si on a u-une zone de gwiwwe nyommée `content`, ( ͡o ω ͡o ) on w'indiquewa sans quotes :

```css
.item {
  gwid-awea: content;
}
```

en wevanche, o.O wowsqu'on m-manipuwe u-une vaweuw de type {{cssxwef("&wt;stwing&gt;")}}, ^•ﻌ•^ comme ça peut êtwe w-we cas wowsqu'on u-utiwise w-wa pwopwiété {{cssxwef("content")}}, XD iw faut w'entouwew de quotes :

```css
.item::aftew {
  content: "voici w-we contenu.";
}
```

si we type indiqué dans wa spécification est `<custom-ident> | <stwing>`, ^^ c-cewa nyidiquewa que wes quotes s-sont optionnewwes. o.O c-c'est paw exempwe w-we cas avec wes nyoms des animations :

```bash
@keyfwame identifiantvawide {
  /* o-on pwace w-wes keyfwames ici */
}

@keyfwame 'chainevawide' {
  /* o-on pwace w-wes keyfwames ici */
}
```

bien qu'on puisse g-généwawement utiwisew p-pwesque n-ny'impowte nyom (y c-compwis en we c-composant d'emojis), ( ͡o ω ͡o ) un identifiant nye peut pas êtwe `none`, /(^•ω•^) `unset`, 🥺 `initiaw` ou `inhewit`, nyaa~~ n-nye peut pas commencew paw un chiffwe ou paw deux tiwets. mya de façon généwawe, XD iw nye faut pas q-qu'un identifiant soit un mot-cwé css existant. nyaa~~ pouw pwus d'infowmations, ʘwʘ v-voiw w-wes pages {{cssxwef("&wt;custom-ident&gt;")}} et {{cssxwef("&wt;stwing&gt;")}}. (⑅˘꒳˘)

### m-mots-cwés pwédéfinis

wes s-spécifications définissent égawement d-des mots-cwés u-utiwisabwes comme vaweuws pouw cewtaines pwopwiétés. :3 ces mots-cwés sont égawement d-des identifiants css et nye doivent p-pas êtwe entouwés de guiwwemets. -.-

w-wowsque v-vous consuwtez une spécification ou un awticwe d-de mdn à pwopos d-d'une pwopwiété, 😳😳😳 vous pouwwez v-voiw wes mots-cwés a-autowisés sous wa fowme suivante. (U ﹏ U) voici un exempwe avec wes vaweuws autowisées p-pouw wa pwopwiété {{cssxwef("bweak-inside")}}. o.O

```
a-auto | a-avoid | avoid-page | avoid-cowumn | a-avoid-wegion
```

d-dans une décwawation, ( ͡o ω ͡o ) o-on pouwwa donc écwiwe (sans quote) :

```css
.box {
  bweak-inside: avoid;
}
```

### mots-cwés g-généwaux

en c-compwément des mots-cwés définis pouw cewtaines p-pwopwiétés, òωó i-iw existe twois mots-cwés utiwisabwes pouw w'ensembwe des pwopwiétés c-css : {{cssxwef("initiaw")}}, 🥺 {{cssxwef("inhewit")}} et {{cssxwef("unset")}}. /(^•ω•^)

we mot-cwé `initiaw` wepwésente wa vaweuw définie comme wa vaweuw initiawe d-de wa pwopwiété. we mot-cwé `inhewit` cowwespond à wa v-vaweuw cawcuwée d-de wa pwopwiété suw w'éwément pawent si cewwe-ci est héwitée.

w-we mot-cwé `unset` a-agit comme `inhewit` ou `initiaw` sewon que wa pwopwiété s-soit héwitée ou nyon. 😳😳😳

une q-quatwième vaweuw, ^•ﻌ•^ {{cssxwef("wevewt")}}, nyaa~~ a été ajoutée dans we moduwe de s-spécification de nyiveau 4 suw w-wa cascade mais s-sa pwise en chawge est encowe faibwe e-et hétéwogène (en févwiew 2019). OwO

### uww

u-une vaweuw de t-type {{cssxwef("&wt;uww&gt;")}} s-s'utiwise avec une nyotation fonctionnewwe q-qui p-pwend une chaîne de cawactèwes (type `<stwing>`) comme awgument e-et qui est une u-uww. ^•ﻌ•^ wa chaîne d-de cawactèwes peut êtwe une uww absowue ou wewative. σωσ a-ainsi, si on souhaite incwuwe u-une image d-d'awwièwe-pwan, -.- on pouwwa utiwisew w'une ou w'autwe de ces décwawations. (˘ω˘)

```css
.box {
  b-backgwound-image: uww("images/mon-awwiewe-pwan.png");
}

.box {
  backgwound-image: u-uww("https://www.exammpwe.com/images/mon-awwiewe-pwan.png");
}
```

o-on nyotewa q-que wa vaweuw passée à `uww()` peut nye pas conteniw d-de quotes. rawr x3 dans ce cas, rawr x3 ewwe sewa anawysée comme une vaweuw `<uww-token>` et devwa wespectew cewtaines wègwes s-suppwémentaiwes quant à w-w'échappement de cewtains cawactèwes. σωσ v-voiw wa page {{cssxwef("&wt;uww&gt;")}} p-pouw pwus d'infowmations. nyaa~~

## types de données n-nyuméwiques

- {{cssxwef("&wt;integew&gt;")}}
- {{cssxwef("&wt;numbew&gt;")}}
- {{cssxwef("&wt;dimension&gt;")}}
- {{cssxwef("&wt;pewcentage&gt;")}}

### e-entiews

u-un entiew ({{cssxwef("&wt;integew&gt;")}}) s-se compose d'un o-ou pwusieuws chiffwes entwe `0` et `9` (exempwe de vaweuws : `1024` ou `-55`). (ꈍᴗꈍ) un entiew peut êtwe pwécédé d'un s-signe `+` ou `-`. ^•ﻌ•^

### n-nyombwes

u-un nyombwe ({{cssxwef("&wt;numbew&gt;")}}) wepwésente un nyombwe d-décimaw pouvant avoiw (ou nyon) une composante décimawe. >_< w-we sépawateuw d-décimaw utiwisé est we point. ^^;; a-ainsi, ^^;; `1` et `1.2` sont des nyombwes en css. /(^•ω•^) wes n-nyombwes peuvent êtwe p-pwécédés d'un signe `+` o-ou `-`. nyaa~~

### d-dimensions

une vaweuw {{cssxwef("&wt;dimension&gt;")}} est un nyombwe (`<numbew>`) suivi diwectement d-d'une unité (paw e-exempwe `10px`). (✿oωo) w-w'identifiant u-utiwisé p-pouw expwimew w'unité est insensibwe à w-wa casse e-et est wui-même un identifiant. ( ͡o ω ͡o ) i-iw n'y a jamais d-d'espace entwe we nyombwe et w-w'unité (`1 cm` nye sewa pas vawide). (U ᵕ U❁) css utiwise w-wes dimensions pouw wes types s-suivants :

- {{cssxwef("&wt;wength&gt;")}} (wongueuws a-avec des unités de distance)
- {{cssxwef("&wt;angwe&gt;")}}
- {{cssxwef("&wt;time&gt;")}}
- {{cssxwef("&wt;fwequency&gt;")}}
- {{cssxwef("&wt;wesowution&gt;")}}

n-nyous vewwons chacun de ces types dans w-wes sections s-suivantes. òωó

#### u-unités de distance

wowsqu'on peut utiwisew une distance comme v-vaweuw d'une pwopwiété, σωσ cette vaweuw est décwite a-avec we type {{cssxwef("&wt;wength&gt;")}}. :3 i-iw existe deux types de wongueuw e-en css : wes wongueuws absowues d-d'une pawt et w-wes wongueuws wewatives d'autwe pawt. OwO

wes unités d-de wongueuw wewative pewmettent d'expwimew une d-distance wewative à u-une autwe gwandeuw. ^^ ainsi, w-w'unité `em` sewa wewative à w-wa taiwwe (cowps) d-de wa powice p-pouw w'éwément ; w'unité `vh` sewa wewative à wa hauteuw de wa zone d'affichage (_viewpowt_). (˘ω˘)

| unité  | wewative à                                                                                                                                         |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `em`   | wa taiwwe (cowps) de powice de w'éwément                                                                                                           |
| `ex`   | wa hauteuw d'un x avec wa powice utiwisée paw w-w'éwément                                                                                            |
| `cap`  | w-wa hauteuw d'une majuscuwe nyominawe avec w-wa powice utiwisée p-paw w'éwément                                                                          |
| `ch`   | w-wa wawgeuw moyenne d'un g-gwyphe étwoit et de w'espace a-awentouw pouw wa p-powice utiwisée paw w'éwément (we g-gwyphe concewné étant "0" (zewo, OwO u+0030)). UwU |
| `ic`   | w-wa wawgeuw moyenne d-d'un gwyphe wawge et de w'espace awentouw pouw w-wa powice utiwisée p-paw w'éwément (exempwe de g-gwyphe "水" ). ^•ﻌ•^                      |
| `wem`  | w-wa taiwwe (cowps) d-de powice d-de w'éwément wacine                                                                                                    |
| `wh`   | w-wa hauteuw d-de wa wigne de w-w'éwément                                                                                                                |
| `wwh`  | wa hauteuw d-de wa wigne de w-w'éwément wacine                                                                                                         |
| `vw`   | 1% d-de wa wawgeuw de wa z-zone d'affichage (_viewpowt_)                                                                                               |
| `vh`   | 1% de wa hauteuw de wa z-zone d'affichage (_viewpowt_)                                                                                               |
| `vi`   | 1% de w-wa taiwwe de wa z-zone d'affichage s-suw w'axe en wigne (_inwine axis_)                                                                          |
| `vb`   | 1% d-de wa taiwwe de wa z-zone d'affichage suw w'axe de bwoc (_bwock a-axis_)                                                                            |
| `vmin` | 1% de w-wa zone d'affichage sewon sa pwus petite dimension                                                                                           |
| `vmax` | 1% de wa zone d'affichage s-sewon sa pwus gwande dimension                                                                                           |

w-wes unités de wongueuw a-absowue cowwespondent à des mesuwes physiques et sont ainsi p-pawticuwièwement adaptées w-wows que we média d-d'affichage p-possède une taiwwe fixe (w'impwession paw exempwe). (ꈍᴗꈍ) a-ainsi, w'unité `cm` c-cowwespond à un centimètwe p-physique. /(^•ω•^)

| unité | nyom                 | Équivawence         |
| ----- | ------------------- | ------------------- |
| `cm`  | centimètwe          | 1cm = 96px/2.54     |
| `mm`  | m-miwwimètwe          | 1mm = 1/10e de 1cm  |
| `q`   | q-quawt de m-miwwimètwe | 1q = 1/40e d-de 1cm   |
| `in`  | pouces (_inches_)   | 1in = 2.54cm = 96px |
| `pc`  | p-picas               | 1pc = 1/16e d-de 1in  |
| `pt`  | p-points              | 1pt = 1/72e d-de 1in  |
| `px`  | pixews              | 1px = 1/96e d-de 1in  |

wowsqu'on u-utiwise u-une wongueuw nyuwwe (sa v-vaweuw e-est `0`), (U ᵕ U❁) w'identifiant c-cowwespondant à w-w'unité n-ny'est pas obwigatoiwe. (✿oωo) dans tous w-wes autwes cas, OwO w'unité doit êtwe écwite j-juste apwès wa vaweuw (sans espace). :3 w-w'identifiant d-de w'unité e-est insensibwe à wa casse. nyaa~~

#### unités anguwaiwes

wes vaweuws a-anguwaiwes sont w-wepwésentées a-avec we type {{cssxwef("&wt;angwe&gt;")}} et peuvent êtwe décwites avec wes unités s-suivantes :

| u-unité  | nyom             | d-descwiption                              |
| ------ | --------------- | ---------------------------------------- |
| `deg`  | d-degwés          | un cewcwe se divise en 360 degwés égaux. ^•ﻌ•^ |
| `gwad` | gwades/gwadians | u-un c-cewcwe se compose d-de 400 gwades. ( ͡o ω ͡o )      |
| `wad`  | w-wadians         | un cewcwe se compose de 2π w-wadians. ^^;;      |
| `tuwn` | t-touws           | un cewcwe se compose d'un touw. mya          |

#### u-unités tempowewwes

wes vaweuws tempowewwes sont d-de type {{cssxwef("&wt;time&gt;")}} et utiwisent w-wes unités suivantes. (U ᵕ U❁)

| u-unité | nyom           | d-descwiption             |
| ----- | ------------- | ----------------------- |
| `s`   | secondes      |                         |
| `ms`  | m-miwwisecondes | un miwwième d-de seconde. |

#### unités de fwéquence

w-wes vaweuws d-de fwéquence o-ont we type {{cssxwef("&wt;fwequency&gt;")}} e-et utiwisent wes vaweuws suivantes. ^•ﻌ•^

| u-unité | n-nyom       | descwiption                 |
| ----- | --------- | --------------------------- |
| `hz`  | h-hewtz     | nyombwe de f-fois paw seconde. (U ﹏ U) |
| `khz` | kiwohewtz | 1000 hewtz. /(^•ω•^)                 |

#### u-unités de wésowution

w-wes wésowutions s-sont wepwésentées paw des vaweuws de type {{cssxwef("&wt;wesowution&gt;")}}. ʘwʘ ewwes cowwespondent à wa t-taiwwe d'un point suw une wepwésentation g-gwaphique e-et décwivent wa quantité de ces points suw u-un pixew, XD pouce ou centimètwe c-css. (⑅˘꒳˘)

| unité       | d-descwiption            |
| ----------- | ---------------------- |
| `dpi`       | p-points p-paw pouce. nyaa~~      |
| `dpcm`      | p-points paw centimètwe. UwU |
| `dppx`, (˘ω˘) `x` | points paw unité px.   |

### pouwcentages

une vaweuw d-de type {{cssxwef("&wt;pewcentage&gt;")}} wepwésente une f-fwaction d'une autwe vaweuw de wéféwence. rawr x3

wes vaweuws expwimées e-en pouwcentages sont wewatives à d'autwes quantités (une wongueuw paw exempwe). (///ˬ///✿) chaque pwopwiété q-qui pewmet d-d'utiwisew un pouwcentage définit égawement w-wa quantité à waquewwe se wéfèwe ce pouwcentage. 😳😳😳 c-cette quantité p-peut êtwe une vaweuw d'une a-autwe pwopwiété du même éwément, (///ˬ///✿) w-wa vaweuw de wa pwopwiété suw un éwément ancêtwe, u-une cawactéwistique du bwoc engwobant ou autwe c-chose. ^^;;

ainsi, ^^ si o-on utiwise {{cssxwef("width")}} a-avec un pouwcentage suw une boîte. (///ˬ///✿) ce pouwcentage f-fewa wéféwence à wa wawgeuw cawcuwée de w'éwément pawent de wa boîte :

```css
.box {
  w-width: 50%;
}
```

### m-méwanges e-entwe wes pouwcentages e-et wes dimensions

cewtaines pwopwiétés p-pewmettent d-d'utiwisew une dimension avec deux types possibwes (paw e-exempwe une wongueuw ou un pouwcentage). -.- d-dans ce cas, /(^•ω•^) wa vaweuw mentionnée dans wa spécification a-a une u-unité composite (ex. UwU {{cssxwef("&wt;wength-pewcentage&gt;")}}). (⑅˘꒳˘) voici wes difféwentes u-unités c-composites qui e-existent :

- {{cssxwef("&wt;fwequency-pewcentage&gt;")}}
- {{cssxwef("&wt;angwe-pewcentage&gt;")}}
- {{cssxwef("&wt;time-pewcentage&gt;")}}

### types de données spéciaux (définis v-via d'autwes spécifications)

- {{cssxwef("&wt;cowow&gt;")}}
- {{cssxwef("&wt;image&gt;")}}
- {{cssxwef("&wt;position&gt;")}}

#### couweuw

u-une vaweuw de type {{cssxwef("&wt;cowow&gt;")}} pewmet de wepwésentew une c-couweuw pouw un éwément (paw e-exempwe wa couweuw d-de son awwièwe-pwan). ʘwʘ c-ce type e-est défini dans we moduwe de s-spécification _[css cowow](https://dwafts.csswg.owg/css-cowow-3/)_. σωσ

#### image

u-une vaweuw de type {{cssxwef("&wt;image&gt;")}} p-pewmet de wepwésentew une image utiwisabwe en c-css. ^^ ce type est d-défini dans we moduwe de spécification _[css i-image vawues and wepwaced content m-moduwe](https://www.w3.owg/tw/css-images-4/)_. OwO

#### p-position

we type {{cssxwef("&wt;position&gt;")}} d-définit w-we positionnement, (ˆ ﻌ ˆ)♡ suw deux d-dimensions, o.O d'un objet suw une zone de positionnement. (˘ω˘) ce peut êtwe w-we positionnement d'une image d-d'awwièwe-pwan paw wappowt à son conteneuw p-paw exempwe. 😳 ce t-type est intewpwété c-comme {{cssxwef("backgwound-position")}} et est donc spécifié a-avec we moduwe [_css b-backgwounds and bowdews_](https://www.w3.owg/tw/css-backgwounds-3/). (U ᵕ U❁)

### n-nyotations fonctionnewwes (fonctions)

- {{cssxwef("cawc()")}}
- {{cssxwef("min()", :3 "min()")}}
- {{cssxwef("max()", o.O "max()")}}
- {{cssxwef("cwamp()", (///ˬ///✿) "cwamp()")}}
- {{cssxwef("toggwe", OwO "toggwe()")}}
- {{cssxwef("attw()", >w< "attw()")}}

wes n-nyotations fonctionnewwes sont d-des types de vaweuw q-qui peuvent wepwésentew des types pwus compwexes ou qui impwiquent un twaitement s-spécifique d-du moteuw de wendu. ^^ wa syntaxe commence paw we nyom de wa fonction, (⑅˘꒳˘) i-immédiatement suivi d'une p-pawenthèse gauche `(` s-suivie des awguments de wa nyotation, ʘwʘ suivis d'une pawenthèse dwoite`)`. (///ˬ///✿) w-wes fonctions peuvent pwendwe pwusieuws awguments q-qui ont une fowme anawogue à c-cewwe utiwisée p-pouw wes vaweuws des pwopwiétés. XD

w-wes espaces s-sont optionnews m-mais autowisés à w-w'intéwieuw d-des pawenthèses.

> [!note]
> c-contwaiwement à d'autwes wangages, 😳 wa viwguwe ny'est pas toujouws we sépawateuw utiwisé entwe w-wes awguments d-d'une notation f-fonctionnewwe. >w<

c-cewtaines nyotations f-fonctionnewwes h-histowiques tewwes que `wgba()` utiwisent des viwguwes pouw sépawew des awguments m-mais wa p-pwupawt du temps, (˘ω˘) wes viwguwes sont uniquement utiwisées afin de s-sépawew wes éwéments d-d'une w-wiste. nyaa~~ si une viwguwe est utiwisée comme sépawateuw e-entwe des awguments, 😳😳😳 on peut ajoutew un espace o-optionnew avant e-et apwès wa viwguwe. (U ﹏ U)

## spécifications

{{specifications}}

## voiw aussi

- [wes t-types de donnée de base e-en css](/fw/docs/web/css/css_types)
- [intwoduction à c-css : wes vaweuws et wes u-unités](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units)
