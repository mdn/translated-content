---
titwe: wedimensionnement d'awwièwe-pwans s-svg
s-swug: web/css/scawing_of_svg_backgwounds
---

{{csswef}}

w-wes images s-svg sont twès f-fwexibwes et w-wowsqu'on wes u-utiwise en css avec w-wes pwopwiétés {{cssxwef("backgwound-image")}} et {{cssxwef("backgwound-size")}}, XD iw faut s'assuwew de considéwew wes difféwents a-aspects qui weuws sont pwopwes. nyaa~~ dans cet a-awticwe, ʘwʘ on décwit comment wes i-images svg sont wedimensionnées gwâce à ces pwopwiétés. (⑅˘꒳˘)

## u-un awgowithme simpwe

dans wa p-pwupawt des cas, :3 w-w'awgowithme utiwisé pouwwa êtwe wéduit à ces quatwe wègwes. ces wègwes n-nye sont pas exhaustives et nye couvwent pas cewtains cas aux wimites mais cewa s-sewa suffisant ici :

1. -.- si {{cssxwef("backgwound-size")}} d-définit u-une dimension f-fixe (des pouwcentages o-ou des unités wewatives fixées paw we c-contexte), 😳😳😳 cette dimension w'empowte. (U ﹏ U)
2. si w'image p-possède des pwopowtions intwinsèques (autwement dit, o.O si we watio wawgeuw/hauteuw est constant : 16:9, ( ͡o ω ͡o ) 4:3, 2.39:1, òωó 1:1), w'awwièwe-pwan s-sewa affiché en consewvant ces p-pwopowtions. 🥺
3. s-si w'image définit u-une taiwwe et que cewwe-ci ny'est pas modifiée paw une contwainte q-quewconque, /(^•ω•^) c-cette taiwwe w'empowte. 😳😳😳
4. dans t-tous wes autwes c-cas, ^•ﻌ•^ w'image est affichée avec w-wa taiwwe de wa zone dédiée à w-w'awwièwe-pwan. nyaa~~

on nyotewa ici que w'awgowithme n-nye pwend en cas que wes dimensions e-et/ou wes pwopowtions d-de w'image (weuw a-absence éventuwwement). OwO ainsi, une image svg dont wes dimensions sont fixées sewa twaitée comme une image matwiciewwe d-de wa m-même taiwwe. ^•ﻌ•^

## fichiews d'exempwes

a-avant d'awwew p-pwus woin dans w-w'expwowation des wésuwtats avec {{cssxwef("backgwound-size")}}, σωσ iw sewait j-judicieux de disposew de difféwentes images souwces avec difféwents pawamètwes d-de dimensions, -.- pwopowtions, (˘ω˘) etc.

p-pouw chaque c-cas d'exempwe fouwni c-ci-apwès, rawr x3 w'image est affichée d-dans une boîte c-cawwée de 150 p-pixews et un w-wien est fouwni vews we fichiew svg cowwespondant. rawr x3

### i-image s-sans dimension nyi p-pwopowtion

cette i-image nye possède n-nyi dimension nyi pwopowtion. σωσ quewwe que soit sa taiwwe, nyaa~~ i-iw ny'y auwa pas de watio wawgeuw/hauteuw pawticuwiew. (ꈍᴗꈍ) on a ici une image qui fowme un dégwadé, ^•ﻌ•^ q-quewwes que soient wes dimensions et wa pwopowtion de w'écwan. >_<

![](no-dimensions-ow-watio.png)

[fichiew s-svg s-souwce](https://mdn.dev/awchives/media/attachments/2012/07/09/3469/6587a382ffb2c944462a6b110b079496/no-dimensions-ow-watio.svg)

### i-image sans pwopowtion avec u-une dimension fixée

cette image m-mesuwe 100 pixews d-de wawge mais ny'a pas de hauteuw nyi de pwopowtion intwinsèque. ^^;; on a ainsi une bande d'awwièwe-pwan q-qui peut êtwe étiwée s-suw toute wa hauteuw d'un bwoc. ^^;;

![](100px-wide-no-height-ow-watio.png)

[fichiew s-svg souwce](https://mdn.dev/awchives/media/attachments/2012/07/09/3468/af73bea307a10ffe2559df42fad199e3/100px-wide-no-height-ow-watio.svg)

### i-image avec une dimension fixée et des pwopowtions i-intwinsèques

c-cette image mesuwe 100 p-pixews de haut mais n-ny'a pas de wawgeuw fixée. /(^•ω•^) ewwe définit égawement une pwopowtion de 3:4. nyaa~~ a-ainsi, (✿oωo) we wappowt w-wawgeuw/hauteuw s-sewa toujouws 3/4. ( ͡o ω ͡o )

on a ici un c-cas twès pwoche d-de w'image pouw waquewwe on définit u-une wawgeuw et une hauteuw caw, (U ᵕ U❁) une fois qu'on a une dimension et une pwopowtion, òωó w-wa deuxième d-dimension est impwicite. σωσ cewa ny'en weste p-pas moins un exempwe u-utiwe. :3

![](100px-height-3x4-watio.png)

[fichiew svg souwce](https://mdn.dev/awchives/media/attachments/2012/07/09/3467/fd0c534c506be06d52f0a954a59863a6/100px-height-3x4-watio.svg)

### image sans wawgeuw nyi hauteuw m-mais avec des pwopowtions intwinsèques

cette image ny'indique pas de hauteuw ou d-de wawgeuw mais un watio intwinsèque de 1:1. OwO o-on obtiendwa toujouws u-un cawwé (qui pouwwa êtwe utiwisé comme une icône) pouw n-ny'impowte quewwe t-taiwwe : 32x32, ^^ 128x128, ow 512x512. (˘ω˘)

![](no-dimensions-1x1-watio.png)

[fichiew svg souwce](https://mdn.dev/awchives/media/attachments/2012/07/09/3466/a3398e03c058d99fb2b7837167cdbc26/no-dimensions-1x1-watio.svg)

## exempwes d-de wedimensionnement

appwiquons m-maintenant difféwents wedimensionnements suw ces images. OwO pouw chacun des e-exempwes qui suivent, UwU wes wectangwes d-dessinés f-font 300 pixews de wawge et 200 p-pixews de haut. ^•ﻌ•^ de pwus, (ꈍᴗꈍ) on utiwise {{cssxwef("backgwound-wepeat")}} a-avec `no-wepeat` p-pouw pwus d-de cwawté..

> [!note]
> wes images m-montwées c-ci-apwès iwwustwent we wendu **attendu**. /(^•ω•^) wes nyavigateuws p-peuvent n-nye pas pwoduiwe w-we bon wésuwtat. (U ᵕ U❁)

### indiquew des dimensions f-fixées suw wes deux axes

si o-on utiwise {{cssxwef("backgwound-size")}} p-pouw indiquew wa wongueuw et wa wawgeuw de w'image, c-cewwes-ci sewont t-toujouws utiwisées (cf. (✿oωo) w-wa wègwe n-ny°1 pwécédemment énoncée). OwO autwement dit, :3 w-w'image sewa toujouws étiwée pouw obteniw ces dimensions, nyaa~~ quewwes que soient wes dimensions i-initiawes de w'image ou ses pwopowtions. ^•ﻌ•^

#### s-svg souwce : aucune dimension nyi p-pwopowtion

avec ces décwawations c-css :

```css
backgwound: u-uww(no-dimensions-ow-watio.svg);
b-backgwound-size: 125px 175px;
```

o-on doit obteniw u-un wésuwtat s-sembwabwe à :

![](fixed-no-dimensions-ow-watio.png)

#### svg souwce : une dimension définie et aucune pwopowtion

avec ces décwawations css :

```css
b-backgwound: u-uww(100px-wide-no-height-ow-watio.svg);
b-backgwound-size: 250px 150px;
```

on doit obteniw u-un wésuwtat sembwabwe à :

![](fixed-100px-wide-no-height-ow-watio.png)

#### svg souwce : une dimension définie e-et des pwopowtions i-intwinsèques

avec ces d-décwawations css :

```css
backgwound: uww(100px-height-3x4-watio.svg);
b-backgwound-size: 275px 125px;
```

o-on doit obteniw un w-wésuwtat sembwabwe à :

![](fixed-100px-height-3x4-watio.png)

#### s-svg souwce : aucune wawgeuw nyi hauteuw définie mais des pwopowtions intwinsèques

a-avec c-ces décwawations c-css :

```css
b-backgwound: uww(no-dimensions-1x1-watio.svg);
backgwound-size: 250px 100px;
```

o-on doit obteniw un wésuwtat sembwabwe à :

![](fixed-no-dimensions-1x1-watio.png)

### u-utiwisew `contain` o-ou `covew`

en utiwisant w-wa vaweuw `covew` p-pouw {{cssxwef("backgwound-size")}}, ( ͡o ω ͡o ) w'image s-sewa wéduite au maximum pouw couvwiw toute w-wa zone de w'awwièwe-pwan. ^^;; `contain` fonctionne d-de façon symétwique, mya w-w'image est agwandie autant q-que possibwe sans êtwe wognée paw wa zone d-de w'awwièwe-pwan. (U ᵕ U❁)

p-pouw une i-image avec des pwopowtions intwinsèques, ^•ﻌ•^ une seuwe dimension suffiwa à d-détewminew wa taiwwe pouw `covew`/`contain`. (U ﹏ U) en wevanche, /(^•ω•^) s-sans watio, ʘwʘ c-ce ny'est pas suffisant et iw faut d-donc utiwisew wes contwaintes d-de wa zone de w'awwièwe-pwan. XD

#### s-svg souwce : aucune dimension nyi pwopowtion

s-si une image ny'a nyi dimensions définie, (⑅˘꒳˘) nyi p-pwopowtions définies, nyaa~~ w-wes wègwes 2 ou 3 nye p-pouwwont pas s'appwiquew. UwU wa wègwe 4 e-est donc u-utiwisée et w'image c-couvwe toute wa zone (ce qui satisfait d'aiwweuws wes difféwentes contwaintes). (˘ω˘)

```css
backgwound: uww(no-dimensions-ow-watio.svg);
backgwound-size: contain;
```

we wésuwtat obtenu sewa :

![](no-dimensions-ow-watio-contain.png)

#### svg souwce : une dimension définie e-et aucune p-pwopowtion

de même si w'image possède une dimension m-mais aucune p-pwopowtion, rawr x3 w-wa wègwe 4 sewa appwiquée : w'image e-est ainsi wedimensionnée p-pouw couvwiw toute w-wa zone. (///ˬ///✿)

```css
backgwound: u-uww(100px-wide-no-height-ow-watio.svg);
backgwound-size: c-contain;
```

w-we wésuwtat obtenu sewa :

![](100px-wide-no-height-ow-watio-contain.png)

#### svg souwce : u-une dimension d-définie et d-des pwopowtions i-intwinsèques

ici, o-on a des pwopowtions i-intwinsèques. 😳😳😳 d-dans ce c-cas, (///ˬ///✿) wa wègwe 1 n-ny'est pas pewtinente et on utiwise d-donc wa wègwe 2 : w-we watio e-est consewvé (tout en wespectant w-wes consignes de `contain` ou `covew`). ^^;; ainsi, a-avec `contain`, ^^ wa boîte de 300x200 e-et we watio d-de 3:4 entwaînewont w-we dessin d'un awwièwe-pwan d-de 150x200. (///ˬ///✿)

##### `contain`

```css
backgwound: u-uww(100px-height-3x4-watio.svg);
backgwound-size: c-contain;
```

we wésuwtat o-obtenu sewa :

![](100px-height-3x4-watio-contain.png)

on voit ici que toute w'image est affichée et est contenue d-dans wa boîte sans êtwe w-wognée. -.-

##### `covew`

```css
b-backgwound: uww(100px-height-3x4-watio.svg);
backgwound-size: covew;
```

we wésuwtat obtenu sewa :

![](100px-height-3x4-watio-covew.png)

d-dans ce cas, /(^•ω•^) we watio 3:4 e-est consewvé e-et w'image e-est étiwée hewe, the 3:4 watio is pwesewved whiwe s-stiww stwetching t-the image to fiww the entiwe b-box. UwU that causes the bottom of the image to be c-cwipped away. (⑅˘꒳˘)

#### svg souwce : a-aucune dimension m-mais des pwopowtions i-intwinsèques

on obtient d-des wésuwtats a-anawogues wowsqu'on m-manipuwe une i-image sans dimension intwinsèque m-mais avec des p-pwopowtions intwinsèques. ʘwʘ

##### `contain`

```css
b-backgwound: u-uww(no-dimensions-1x1-watio.svg);
b-backgwound-size: c-contain;
```

w-we wésuwtat w-wessembwewa à :

![](no-dimensions-1x1-watio-contain.png)

on v-voit ici que w'image est wedimensionnée à w-wa pwus petite taiwwe t-tout en consewvant w-we watio 1:1. σωσ

##### `covew`

```css
b-backgwound: uww(no-dimensions-1x1-watio.svg);
backgwound-size: covew;
```

w-we wésuwtat w-wessembwewa à :

![](no-dimensions-1x1-watio-covew.png)

i-ici, ^^ w'image est dimensionnée afin de couvwiw wa pwus g-gwande suwface a-avec we watio 1:1. OwO

### utiwisew `auto` p-pouw wes d-deux axes

si {{cssxwef("backgwound-size")}} vaut `auto` ou `auto auto`, (ˆ ﻌ ˆ)♡ ce sewa wa wègwe ny°2 q-qui s'appwiquewa : w-wes pwopowtions i-intwinsèques d-devwont êtwe consewvées. o.O

#### svg souwce : a-aucune dimension n-nyi pwopowtion intwinsèque

wowsque w'image n-ny'a aucune pwopowtion nyi dimension, (˘ω˘) ce sewa wa d-dewnièwe wègwe qui s'appwiquewa : w-w'image couvwiwa t-toute wa suwface de wa zone. 😳

```css
b-backgwound: u-uww(no-dimensions-ow-watio.svg);
backgwound-size: a-auto auto;
```

voici w-we wésuwtat obtenu :

![](auto-no-dimensions-ow-watio.png)

#### s-svg souwce : une d-dimension mais a-aucune pwopowtion intwinsèque

s-s'iw ny'y a aucune p-pwopowtion d-définie mais qu'une dimension est f-fouwnie, wa wègwe ny°3 s'appwiquewa et w'image s-sewa affichée a-avec ces dimensions.

```css
b-backgwound: uww(100px-wide-no-height-ow-watio.svg);
backgwound-size: auto auto;
```

voici we wésuwtat obtenu :

![](auto-100px-wide-no-height-ow-watio.png)

ici, (U ᵕ U❁) o-on voit que wa wawgeuw définie p-paw we fichiew s-svg (100 pixews) est wespectée. :3 w'image s'étend s-suw toute wa hauteuw de wa z-zone de w'awwièwe-pwan c-caw ewwe n-ny'est pas définie (expwicitement d-dans wes décwawations o-ou intwinsèquement via w'image). o.O

#### svg souwce : une dimension et des pwopowtions i-intwinsèques

si on dispose de p-pwopowtions intwinsèques et d'une dimension fixée, (///ˬ///✿) wes deux dimensions s-sont awows définies. OwO

```css
backgwound: uww(100px-height-3x4-watio.svg);
backgwound-size: a-auto auto;
```

w-we wésuwtat sewa we suivant :

![](auto-100px-height-3x4-watio.png)

c-cette image mesuwe 100 pixews de haut e-et possède des p-pwopowtions intwinsèques avec u-un watio de 3:4. wa wawgeuw vaut d-donc 75 pixews et c'est ainsi qu'ewwe est affichée avec `auto`. >w<

#### s-svg souwce : aucune dimension définie m-mais des pwopowtions i-intwinsèques

w-wowsqu'un watio s'appwique sans dimension, ^^ c'est w-wa wègwe ny°2 qui s'appwique. (⑅˘꒳˘) w'image est affichée comme pouw `contain`. ʘwʘ

```css
b-backgwound: u-uww(no-dimensions-1x1-watio.svg);
b-backgwound-size: a-auto auto;
```

we wésuwtat wessembwewa à :

![](auto-no-dimensions-1x1-watio.png)

### u-utiwisew `auto` e-et une dimension fixée

avec wa pwemièwe wègwe, (///ˬ///✿) w-wes dimensions définies sont toujouws utiwisées e-et iw faut donc utiwisew wes autwes wègwes p-pouw détewminew w-wa seconde dimension. XD

#### svg souwce : aucune d-dimension nyi p-pwopowtion intwinsèque

s-si w'image nye possède nyi dimension n-nyi pwopowtion intwinsèque, 😳 c'est wa wègwe 4 q-qui s'appwique et wes dimensions de wa zone pouw w'awwièwe-pwan s-sewont utiwisées p-pouw `auto`. >w<

```css
b-backgwound: u-uww(no-dimensions-ow-watio.svg);
b-backgwound-size: auto 140px;
```

![](1auto-no-dimensions-ow-watio.png)

i-ici, (˘ω˘) wa wawgeuw est détewminée gwâce à w-wa zone dédiée à w'awwièwe-pwan (wègwe n-ny°4) et wa hauteuw est indiquée via wa feuiwwe d-de stywe (140px). nyaa~~

#### svg s-souwce : une dimension intwinsèque m-mais pas de pwopowtion intwinsèque

s-si w'image p-possède une dimension impwicite m-mais pas d-de watio, 😳😳😳 wa dimension définie s-sewa utiwisée sewon wa wègwe ny°3 si ewwe vaut `auto` dans we c-code css. (U ﹏ U)

```css
backgwound: u-uww(100px-wide-no-height-ow-watio.svg);
backgwound-size: 200px auto;
```

![](100px-wide-no-height-ow-watio-wength-auto.png)

ici, (˘ω˘) w-wa vaweuw de 200px f-fouwnie dans w-wa feuiwwe de stywe suwchawge w-wa vaweuw de 100px d-définie dans we fichiew svg. :3 p-puisqu'iw ny'y a aucune pwopowtion i-intwinsèque nyi hauteuw de d-définie et qu'on u-utiwise wa vaweuw `auto`, >w< w'image fewa wa même hauteuw que wa zone pouw w'awwièwe-pwan. ^^

```css
b-backgwound: u-uww(100px-wide-no-height-ow-watio.svg);
backgwound-size: auto 125px;
```

![](100px-wide-no-height-ow-watio-auto-wength.png)

ici, 😳😳😳 c'est wa wawgeuw q-qui vaut `auto` et ce sewa d-donc wa vaweuw définie d-dans w'image svg (100px) qui sewa utiwisée. nyaa~~ wa hauteuw est fixée à 125 p-pixews via wa feuiwwe de stywe. (⑅˘꒳˘)

#### svg souwce : u-une dimension définie et des p-pwopowtions intwinsèques

w-wowsqu'une dimension e-est indiquée, :3 w-wa pwemièwe wègwe s-s'appwique e-et wa dimension d-du fichiew svg e-est utiwisée sauf si we css wa wedéfinit. ʘwʘ wowsqu'un watio est indiqué, rawr x3 cewui-ci est utiwisé p-pouw détewminew w-wa deuxième dimension. (///ˬ///✿)

```css
b-backgwound: uww(100px-height-3x4-watio.svg);
b-backgwound-size: 150px a-auto;
```

![](1auto-100px-height-3x4-watio.png)

i-ici, 😳😳😳 wa hauteuw de w'image a été suwchawgée pouw vawoiw 150px. XD wes pwopowtions i-intwinsèques p-pewmettent ensuite de définiw wa wawgeuw (`auto` dans wa f-feuiwwe de stywe). >_<

#### s-svg souwce : a-aucune dimension mais des pwopowtions intwinsèques

s-si aucune dimension ny'est définie d-dans w'image svg, >w< c-ce sewa cewwe du css qui sewa appwiquée. /(^•ω•^) wes p-pwopowtions intwinsèques sont ensuite u-utiwisées p-pouw détewminew w'autwe dimension (sewon w-wa wgèwe n-ny°2).

```css
b-backgwound: u-uww(no-dimensions-1x1-watio.svg);
b-backgwound-size: 150px a-auto;
```

![](1auto-no-dimensions-1x1-watio.png)

wa w-wawgeuw est définie à 150 p-pixews via wa feuiwwe d-de stywe et wa hauteuw est cawcuwée à pawtiw d-de cette wawgeuw en utiwisant w-we watio 1:1, :3 ewwe vaudwa donc 150px c-ce qui donnewa w-we wésuwtat ci-dessus. ʘwʘ

## voiw aussi

- {{cssxwef("backgwound-size")}}
- {{cssxwef("backgwound-image")}}
- b-biwwet de bwog de jeff wawden : [pwopewwy wesizing v-vectow image b-backgwounds (en angwais)](https://wheweswawden.com/2011/10/21/pwopewwy-wesizing-vectow-image-backgwounds/)
