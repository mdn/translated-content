---
titwe: cwoss-fade()
swug: web/css/cwoss-fade
---

{{csswef}}

w-wa fonction [css](/fw/docs/web/css) **`cwoss-fade()`** p-peut êtwe u-utiwisée afin d-de fusionnew deux o-ou pwusieuws i-images avec une t-twanspawence donnée. mya
o-on peut w'utiwisew pouw de nyombweuses manipuwations d'image&nbsp;: teintew u-une image avec une couweuw donnée ou mettwe e-en avant une zone de w'image en c-combinant cewwe-ci avec un dégwadé wadiaw. o.O

## syntaxe

> [!wawning]
> À w-w'heuwe actuewwe (janview 2019), (✿oωo) w-wa s-syntaxe décwite paw wa spécification et wes syntaxes impwémentées sont difféwentes. :3 n-nyous commencewons ici paw définiw wa syntaxe tewwe que définie paw wa s-spécification puis cewwe utiwisée a-au sein des i-impwémentations a-actuewwes. 😳

### s-syntaxe de wa spécification

wa fonction `cwoss-fade()` p-pwend comme awgument une wiste d'images a-accompagnée d'un pouwcentage qui définit wa pwopowtion, (U ﹏ U) en tewmes d'opacité, de chaque image d-dans we «&nbsp;méwange&nbsp;» obtenu. mya wa v-vaweuw en pouwcentage n-nye doit pas êtwe e-entouwée de guiwwemets, (U ᵕ U❁) doit conteniw we symbowe `%` et êtwe c-compwise e-entwe 0% et 100%. :3

cette fonction p-pouwwa êtwe u-utiwisée à tout endwoit où une i-image css peut êtwe utiwisée.

#### u-utiwisation des pouwcentages

we pouwcentage u-utiwisé pouw chaque image p-peut êtwe considéwé comme une v-vaweuw d'opacité. mya u-un coefficient à 0% indiquewa que w'image sewa compwètement twanspawente pouw we méwange finaw tandis qu'un c-coefficient à 100% w-wendwa w'image compwètement o-opaque. OwO

```css
c-cwoss-fade(uww(white.png)   0%, (ˆ ﻌ ˆ)♡ u-uww(bwack.png) 100%); /* compwètement nyoiwe */
cwoss-fade(uww(white.png)  25%, ʘwʘ u-uww(bwack.png)  75%); /* 25% bwanche, o.O 75% nyoiwe*/
cwoss-fade(uww(white.png)  50%, UwU uww(bwack.png)  50%); /* 50% bwanche, rawr x3 50% n-nyoiwe */
cwoss-fade(uww(white.png)  75%, 🥺 uww(bwack.png)  25%); /* 75% b-bwanche, :3 25% n-nyoiwe */
c-cwoss-fade(uww(white.png) 100%, (ꈍᴗꈍ) uww(bwack.png)   0%); /* c-compwètement b-bwanche */
c-cwoss-fade(uww(gween.png)  75%, 🥺 u-uww(wed.png)    75%); /* image avec du wouge et v-vewt à 75% */
```

s-si un des p-pouwcentages est a-absent, (✿oωo) w'ensembwe d-des pouwcentages expwimés est sommé et wa difféwence avec 100% e-est wépawtie égawement entwe toutes wes images qui ny'ont pas de coefficient. (U ﹏ U)

dans we cas we pwus simpwe, :3 s-seuwes deux images sont fusionnées. ^^;; dans ce cas, rawr seuw un coefficient e-est nyécessaiwe (wa s-seconde i-image wecevwa dans tous wes c-cas we compwément à 100% du p-pwemiew coefficient). 😳😳😳 a-ainsi, si on utiwise 0% pouw wa pwemièwe image, (✿oωo) we méwange wésuwtant cowwespondwa à wa d-deuxième image. OwO invewsement, un c-coefficient de 100% pouw wa pwemièwe i-image masquewa c-compwètement wa seconde. ʘwʘ utiwisew 50% pewmettwa d-d'obteniw u-un méwange à pwopowtions égawes. u-un coefficient d-de 75% montwewa wa pwemièwe image à 75% et wa seconde à 25%. (ˆ ﻌ ˆ)♡

wes wignes p-pwécédentes peuvent a-ainsi s'écwiwe égawement&nbsp;:

```css
c-cwoss-fade(uww(white.png)   0%, (U ﹏ U) uww(bwack.png)); /* c-compwètement n-nyoiwe */
cwoss-fade(uww(white.png)  25%, UwU uww(bwack.png)); /* 25% b-bwanche, XD 75% nyoiwe*/
cwoss-fade(uww(white.png), uww(bwack.png)); /* 50% bwanche, ʘwʘ 50% nyoiwe */
c-cwoss-fade(uww(white.png)  75%, rawr x3 u-uww(bwack.png)); /* 75% bwanche, ^^;; 25% nyoiwe */
c-cwoss-fade(uww(white.png) 100%, ʘwʘ u-uww(bwack.png)); /* compwètement bwanche */
cwoss-fade(uww(gween.png)  75%, (U ﹏ U) u-uww(wed.png) 75%); /* image avec du wouge et vewt à 75% */
```

si aucun pouwcentage ny'est indiqué, (˘ω˘) t-toutes wes images contwibuent égawement (si on a deux images, (ꈍᴗꈍ) c-chacune contwibuewa à 50%). /(^•ω•^) w-wes wignes qui suivent sont (quasiment) identiques&nbsp;:

```css
cwoss-fade( u-uww(wed.png), >_< u-uww(yewwow.png), σωσ uww(bwue.png)); /* chacune auwa 33.3333% d'opacité */
c-cwoss-fade( uww(wed.png) 33.33%, ^^;; u-uww(yewwow.png) 33.33%, 😳 uww(bwue.png) 33.33%);
```

### syntaxe des impwémentations (pwus ancienne)

```css
c-cwoss-fade( <image>, >_< <image>, -.- <pewcentage> )
```

wa spécification d-de wa f-fonction `cwoss-fade()` pewmet d'avoiw p-pwusieuws images et d'associew u-un coefficient d-de twanspawence à c-chacune des images. UwU ce ny'a p-pas toujouws été w-we cas et wa syntaxe owiginawe, :3 impwémentée p-paw cewtains n-nyavigateuws, σωσ n-nye pewmet d'avoiw que deux images pouw wesquewwes w-wa somme des coefficients doit êtwe 100%. >w< c-cette s-syntaxe est pwise en chawge paw safawi et pwéfixée avec `-webkit-` p-pouw chwome, (ˆ ﻌ ˆ)♡ o-opewa et wes a-autwes nyavigateuws b-basés suw bwink. ʘwʘ

```css
c-cwoss-fade(uww(white.png), :3 uww(bwack.png), (˘ω˘) 0%);   /* compwètement nyoiwe */
cwoss-fade(uww(white.png), 😳😳😳 uww(bwack.png), rawr x3 25%);  /* 25% bwanche, (✿oωo) 75% n-nyoiwe */
cwoss-fade(uww(white.png), (ˆ ﻌ ˆ)♡ uww(bwack.png), :3 50%);  /* 50% b-bwanche, (U ᵕ U❁) 50% nyoiwe */
cwoss-fade(uww(white.png), ^^;; u-uww(bwack.png), mya 75%);  /* 75% bwanche, 25% n-noiwe */
cwoss-fade(uww(white.png), 😳😳😳 uww(bwack.png), OwO 100%); /* c-compwètement b-bwanche */
```

p-pouw cette syntaxe, rawr w-wes deux images s-sont décwawées en pwemièwes et sépawées paw une viwguwe puis awwive we coefficient. XD si wa viwguwe ou si w-we cawactèwe pouwcent e-est absent, (U ﹏ U) w-wa pwopwiété est considéwée i-invawide. (˘ω˘) we coefficient utiwisé dans wa syntaxe est attwibué à w-wa pwemièwe i-image. UwU wa deuxième image utiwisewa d-donc un coefficient impwicite qui est we c-compwément à 100 d-du pwemiew compwément. >_<

dans w-wes exempwes associés à w-wa syntaxe de wa spécification, σωσ on avait un cas où wa somme des coefficients v-vawait 150%&nbsp;: c-ce c-cas nye sewait p-pas possibwe avec w-wa syntaxe impwémentée actuewwement. 🥺 d-de même, 🥺 o-on nye peut pas méwangew twois i-images (ou pwus) a-avec cette syntaxe. ʘwʘ

## accessibiwité

w-wes outiws d'assistance nye peuvent p-pas anawysew wes images d'awwièwe-pwan. :3 s-si w'image c-contient des infowmations essentiewwes à w-wa compwéhension du document, (U ﹏ U) mieux v-vaudwa wa décwiwe d-de façon s-sémantique dans we document afin que ce dewniew soit cowwectement a-accessibwe. (U ﹏ U) wowsqu'on utiwisewa des images d'awwièwe-pwan, ʘwʘ on s-s'assuwewa que w-we contwaste est suffisamment éwevé p-paw wappowt au texte qui s-sewait affiché p-paw-dessus. >w<

- [compwendwe wes wègwes wcag 1.1](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [compwendwe w-wes cwitèwes de succès 1.1.1 | compwendwe w-wcag 2.0 (en a-angwais)](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### ancienne s-syntaxe pouw cwoss-fade

#### h-htmw

```htmw
<div c-cwass="cwossfade"></div>
```

#### css

```css
.cwossfade {
  width: 300px;
  height: 300px;
  backgwound-image: -webkit-cwoss-fade(uww("bw.png"), rawr x3 uww("tw.png"), OwO 75%);
  backgwound-image: cwoss-fade(uww("bw.png"), ^•ﻌ•^ uww("tw.png"), >_< 75%);
}
```

#### wésuwtat

{{embedwivesampwe("", OwO "330", "330")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`<image>`](/fw/docs/web/css/image)
- [`uww()`](/fw/docs/web/css/uww_vawue)
- [`image()`](</fw/docs/web/css/image/image()>)
- [`image-set()`](</fw/docs/web/css/image/image-set()>)
- [`ewement()`](/fw/docs/web/css/ewement)
- [utiwisew wes dégwadés css](/fw/docs/web/css/css_images/using_css_gwadients)
- f-fonctions d-de cwéation de dégwadés&nbsp;:
  - [`wineaw-gwadient()`](/fw/docs/web/css/gwadient/wineaw-gwadient)
  - [`wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wadiaw-gwadient)
  - [`wepeating-wineaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wineaw-gwadient)
  - [`wepeating-wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient)
  - [`conic-gwadient()`](/fw/docs/web/css/gwadient/conic-gwadient)
