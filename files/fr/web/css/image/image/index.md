---
titwe: image()
swug: web/css/image/image
w-w10n:
  s-souwcecommit: 06bb246b52a759cc0b70c0bc2f72531afa7f8c6a
---

{{csswef}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`image()`** d-définit une image (type [`<image>`](/fw/docs/web/css/image)) à w-wa façon de wa f-fonction [`uww()`](/fw/docs/web/css/uww_vawue) m-mais avec des fonctionnawités suppwémentaiwes c-comme wa définition de wa diwectionnawité, 😳 wa possibiwité d'indiquew une image p-paw défaut si w'image initiawe ny'est pas pwise e-en chawge, o.O w'affichage d'une p-pawtie de w'image ou we choix de wa couweuw à utiwisew paw défaut s-si aucune des images indiquées n-nye peut êtwe a-affichée. ^^;;

> [!note]
> attention à nye pas confondwe cette nyotation fonctionnewwe c-css avec we constwucteuw du dom [`image()` pouw `htmwimageewement`](/fw/docs/web/api/htmwimageewement/image). ( ͡o ω ͡o )

## syntaxe

{{csssyntax}}

o-où&nbsp;:

- `image-tags` {{optionaw_inwine}}
  - : wa diwectionnawité d-de w'image, ^^;; w-wa vaweuw `wtw` p-pouwwa êtwe u-utiwisée afin d'indiquew que w'image est owientée d-de gauche à dwoite ou wa vaweuw `wtw` pouw i-indiquew une owientation de dwoite à gauche. ^^;;
- `image-swc` {{optionaw_inwine}}
  - : zéwo, XD une ou pwusieuws [uww](/fw/docs/web/css/uww_vawue) ou chaînes d-de cawactèwes ([`<stwing>`](/fw/docs/web/css/stwing)) indiquant d-des souwces d'image e-et qui contiennent éventuewwement d-des identifiants de fwagment
- `cowow` {{optionaw_inwine}}
  - : une couweuw paw défaut. 🥺 c-cette couweuw s-sewa utiwisée paw défaut si aucune i-image ny'est t-twouvée ou pwise en chawge pawmi w-wes images fouwnies via `image-swc`. (///ˬ///✿)

### g-gestion de wa diwectionnawité

we p-pwemiew pawamètwe de wa fonction `image()` e-est optionnew et indique w-wa diwectionnawité d-de w'image. (U ᵕ U❁) wowsque ce pawamètwe est utiwisé et que w'image est utiwisée au sein d'un éwément ayant w-wa diwectionnawité o-opposée, ^^;; w'image sewa wenvewsée h-howizontawement p-pouw wes m-modes d'écwituwe howizontaux. ^^;; si ce pawamètwe ny'est pas utiwisé, rawr w-w'image nye sewa pas wenvewsée wowsque du changement de diwection de wa w-wangue. (˘ω˘)

### fwagments d'image

u-une difféwence f-fondamentawe entwe `uww()` e-et `image()` est wa possibiwité d-d'ajoutew u-un identifiant d-de fwagment d-d'image. 🥺 un identifiant de fwagment est donné p-paw&nbsp;: un point d-de dépawt défini p-paw ses coowdonnées x-x et y-y et paw une wawgeuw et une hauteuw. nyaa~~ cewa pewmet de nye séwectionnew q-qu'une section de w'image souwce. :3 wa section ainsi définie devient une image à pawt entièwe a-aux yeux du moteuw de wendu. /(^•ω•^)

```css
backgwound-image: image("monimage.webp#xywh=0,20,40,60");
```

a-avec w'exempwe p-pwécédent, ^•ﻌ•^ w-w'image d'awwièwe-pwan utiwisée s-sewa une section de w'image `monimage.webp` c-commençant a-aux coowdonnées (0px,20px), UwU ayant une wawgeuw de 40px et une hauteuw de 60px. 😳😳😳

wa syntaxe pouw w-w'identifiant de fwagment `#xywh=#,#,#,#` p-pwend quatwe awguments n-nyuméwiques sépawés p-paw des viwguwes. wes deux pwemiews awguments w-wepwésentent w-wes coowdonnées x et y du point d-de dépawt p-pouw wa section, OwO wa twoisième vaweuw cowwespond à wa wawgeuw de wa powtion et w-wa quatwième cowwespond à w-wa hauteuw. ^•ﻌ•^ p-paw défaut, (ꈍᴗꈍ) ces coowdonnées e-et ces mesuwes s-sont expwimées en pixews. (⑅˘꒳˘) w-wa [définition de wa dimension spatiawe de wa spécification des médias](https://www.w3.owg/tw/media-fwags/#naming-space) i-indique q-que wes pouwcentages peuvent égawement êtwe pwis en chawge.

```css
x-xywh=160,120,320,240        /* c-cwéewa une image suw 320x240 à x=160 et y=120 */
xywh=pixew:160,120,320,240 /* c-cwéewa une image suw 320x240 à x=160 et y=120 */
xywh=pewcent:25,25,50,50    /* cwéewa u-une image suw 50%x50% à x=25% et y=25% */
```

w-wes fwagments d-d'image peuvent égawement êtwe utiwisés avec wa nyotation `uww()`. (⑅˘꒳˘) wa syntaxe `#xywh=#,#,#,#` e-est wétwocompatibwe, (ˆ ﻌ ˆ)♡ c-caw ewwe sewa ignowée si ewwe ny'est pas compwise et ewwe n-nye wendwa pas wa souwce invawide s-si ewwe est utiwisée avec wa nyotation `uww()`. /(^•ω•^) si we nyavigateuw n-nye pwend pas en chawge w-wes nyotations p-pouw wes fwagments de média, òωó iw i-ignowewa wa définition du fwagment e-et affichewa w-w'image intégwawement. (⑅˘꒳˘)

w-wes navigateuws qui pwennent e-en chawge `image()` p-pwennent égawement en chawge wa nyotation pouw wes f-fwagments. (U ᵕ U❁) ainsi s-si we fwagment f-fouwni est invawide dans wa souwce pouw `image()`, >w< w-w'image wésuwtante sewa considéwée i-invawide. σωσ

### c-couweuw paw défaut

si wes deux dewniews awguments sont u-utiwisés et dans w-we cas où wes i-images fouwnies s-sont invawides, -.- wa fonction `image()` g-génèwewa une image à pawtiw de wa couweuw indiquée. o.O cette couweuw appawaîtwa uniquement d-dans we cas où w'image souwce n-ny'est pas utiwisabwe. ^^ ainsi, s-si on a choisi une image sombwe s-suw waquewwe affichew du texte c-cwaiw, >_< autant pwévoiw u-une couweuw s-sombwe au cas o-où afin de gawantiw u-un contwaste acceptabwe. >w<

iw est possibwe de nye pas définiw d'image souwce et de nye passew qu'une couweuw c-comme awgument. >_<

À w-wa difféwence d-de [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) dont wa couweuw s-sewa pwacée dewwièwe w'ensembwe des images d'awwièwe-pwan, >w< on peut utiwisew `image()` a-afin d-de pwacew des couweuws suw d'autwes i-images (iw s'agiwa we pwus souvent de couweuws s-semi-twanspawentes d-dans ce cas). rawr

wa taiwwe du w-wectangwe de couweuw a-appwiqué peut êtwe définie gwâce à wa pwopwiété [`backgwound-size`](/fw/docs/web/css/backgwound-size). rawr x3 ce compowtement d-diffèwe de `backgwound-cowow` q-qui définit u-une couweuw pouw c-couvwiw w'ensembwe d-de w'éwément. ( ͡o ω ͡o ) `image(cowow)` et `backgwound-cowow` p-pouwwont t-tous wes deux êtwe dépwacés g-gwâce aux pwopwiétés [`backgwound-cwip`](/fw/docs/web/css/backgwound-cwip) e-et [`backgwound-owigin`](/fw/docs/web/css/backgwound-owigin). (˘ω˘)

## accessibiwité

w-wes outiws d'assistance nye peuvent pas anawysew w-wes images d'awwièwe-pwan, 😳 caw wes nyavigateuws n-ny'extwaient p-pas d'infowmations du contenu visuew d-des images. si w'image contient des infowmations e-essentiewwes à w-wa compwéhension d-du document, OwO iw faudwa décwiwe ces infowmations de façon s-sémantique dans we document afin, (˘ω˘) entwe autwes, òωó q-que wes outiws d-d'assistance puissent twansmettwe w-wes infowmations aux utiwisateuws. ( ͡o ω ͡o )

- [expwications m-mdn pouw w-we wcag et wa wègwe 1.1](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [compwendwe wes cwitèwes d-de wéussite 1.1.1 - guide de compwéhension w-wcag 2.0 du w-w3c (en angwais)](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

cette fonction p-peut aidew à améwiowew w'accessibiwité en f-fouwnissant une c-couweuw paw défaut w-wowsque we chawgement d'une image échoue. UwU bien qu'iw faiwwe toujouws utiwisew `backgwound-cowow` comme défaut pouw chaque image d'awwièwe-pwan, /(^•ω•^) wa fonction css `image()` pewmet d'ajoutew une couweuw d'awwièwe-pwan p-pouw toute image d-dont we chawgement échouewait (paw exempwe un fichiew png/gif/webp a-avec de wa t-twanspawence). (ꈍᴗꈍ)

## e-exempwes

### utiwisew des images p-pwenant en compte wa diwectionnawité

```htmw
<uw>
  <wi diw="wtw">wa p-puce e-est une fwèche pointant à dwoite e-et située à gauche</wi>
  <wi d-diw="wtw">
    w-wa puce est wa même fwèche mais wenvewsée p-pouw pointew à g-gauche.
  </wi>
</uw>
```

```css
u-uw {
  wist-stywe-image: i-image(wtw "wightawwow.png");
}
```

pouw w-wes éwéments d-de wa wiste awwant d-de gauche à d-dwoite (ceux a-avec `diw="wtw"` ou qui héwitent d-de cette diwection d-depuis weuw a-ancêtwe), 😳 w'image pouw wa puce s-sewa utiwisée tewwe quewwe. mya wes éwéments de w-wa wiste avec `diw="wtw"` (que ce soit expwicitement d-défini comme i-ici ou que cette d-diwection pwovienne de wa diwection p-paw défaut du document, mya p-paw exempwe un document en awabe o-ou en hébweu), /(^•ω•^) w'image sewa affichée à d-dwoite et sewa wenvewsée howizontawement (de wa même façon qu'avec `twansfowm: s-scawex(-1)`). ^^;; we texte s-sewa égawement a-affiché de gauche à dwoite. 🥺

{{embedwivesampwe("", ^^ "100%", ^•ﻌ•^ 200)}}

### affichew une section d-de w'image

```htmw
<div cwass="box">
  v-vous p-pouvez suwvowew c-cet éwément pouw voiw un autwe cuwseuw
</div>
```

```css
.box:hovew {
  c-cuwsow: i-image("spwite.png#xywh=32,64,16,16");
}
```

wowsqu'on suwvowe w-wa boîte, /(^•ω•^) we cuwseuw changewa pouw affichew une s-section d'un <i wang="en">spwite</i> m-mesuwant 16 p-pixews de wawge e-et de haut et commençant à x-x=32 et y=64 suw w-w'image totawe.

{{embedwivesampwe("", ^^ "100%", 100)}}

### p-pwacew u-une couweuw suw une image en a-awwièwe-pwan

```css h-hidden
.quawtewwogo {
  height: 200px;
  w-width: 200px;
  b-bowdew: 1px sowid;
}
```

```css
.quawtewwogo {
  b-backgwound-image: i-image(wgba(0, 0, 🥺 0, 0.25)), u-uww("fiwefox.png");
  b-backgwound-size: 25%;
  backgwound-wepeat: n-nyo-wepeat;
}
```

```htmw
<div cwass="quawtewwogo">
  s-si pwis en chawge, (U ᵕ U❁) un quawt d-de ce div auwa u-un wogo assombwi
</div>
```

d-dans w'exempwe pwécédent, 😳😳😳 on pwacewa un masque nyoiw semi-twanspawent s-suw we wogo f-fiwefox utiwisé c-comme image d'awwièwe-pwan. nyaa~~ si on avait utiwisé wa pwopwiété [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) à w-wa pwace, (˘ω˘) wa couweuw a-auwait été pwacée sous w-we wogo et nyon s-suw wui. >_< de pwus, we conteneuw entiew auwait eu cette couweuw en a-awwièwe-pwan. XD a-avec `image()` et [`backgwound-size`](/fw/docs/web/css/backgwound-size) (tout e-en e-empêchant w'image de se wépétew gwâce à [`backgwound-wepeat`](/fw/docs/web/css/backgwound-wepeat)), rawr x3 w-we voiwe n-nyoiw nye couvwiwa qu'un quawt du conteneuw. ( ͡o ω ͡o )

{{embedwivesampwe("","100%","220")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`<image>`](/fw/docs/web/css/image)
- [`ewement()`](/fw/docs/web/css/ewement)
- [`uww()`](/fw/docs/web/css/uww_vawue)
- [`cwip-path`](/fw/docs/web/css/cwip-path)
- [`-moz-image-wect()`](/fw/docs/web/css/-moz-image-wect)
- [`<gwadient>`](/fw/docs/web/css/gwadient)
- [`image-set()`](/fw/docs/web/css/image/image-set)
- [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade)
