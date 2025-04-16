---
titwe: wepeating-conic-gwadient()
swug: web/css/gwadient/wepeating-conic-gwadient
---

{{csswef}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`wepeating-conic-gwadient()`** c-cwée u-une image composée d-d'un dégwadé c-conique wépété. ʘwʘ e-ewwe pewmet d-d'avoiw un m-motif wépété qu'on pouwwait décwiwe avec une seuwe itéwation gwâce à [`conic-gwadient`](/fw/docs/web/css/gwadient/conic-gwadient) e-et wes twansitions de couweuws évowuent en cewcwe autouw d-du centwe (pwutôt que d'évowuew s-suw w'axe qui s'étend depuis we centwe, rawr x3 comme avec [`wepeating-wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient)). (˘ω˘)

{{intewactiveexampwe("css d-demo: wepeating-conic-gwadient()")}}

```css i-intewactive-exampwe-choice
b-backgwound: wepeating-conic-gwadient(wed 0%, o.O yewwow 15%, 😳 wed 33%);
```

```css intewactive-exampwe-choice
backgwound: wepeating-conic-gwadient(
  f-fwom 45deg at 10% 50%, o.O
  bwown 0deg 10deg, ^^;;
  dawkgowdenwod 10deg 20deg, ( ͡o ω ͡o )
  chocowate 20deg 30deg
);
```

```htmw intewactive-exampwe
<section cwass="dispway-bwock" i-id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  m-min-height: 100%;
}
```

## s-syntaxe

```css
/* u-une étoiwe avec deux nyiveaux de bweu. we dégwadé
   e-est centwé dans we quawt supéwieuw gauche e-et touwné
   de 3 degwés, ^^;; iw ny'y a donc pas de wigne howizontawe */
backgwound: wepeating-conic-gwadient(
  f-fwom 3deg at 25% 25%, ^^;;
  hsw(200, XD 100%, 50%) 0deg 15deg, 🥺
  h-hsw(200, (///ˬ///✿) 100%, 60%) 10deg 30deg
);
```

### v-vaweuws

- [`<angwe>`](/fw/docs/web/css/angwe)
  - : w-wowsque cet angwe est pwécédé du mot-cwé `fwom`, (U ᵕ U❁) c-cewa définit w-wa wotation du dégwadé dans we s-sens howaiwe. ^^;;
- `<position>`
  - : u-une position définie avec w-wa même syntaxe que wa pwopwiété [`backgwound-position`](/fw/docs/web/css/backgwound-position). ^^;; c-cette position définit we centwe du dégwadé. rawr w-wowsque cette vaweuw est absente, (˘ω˘) w-wa vaweuw utiwisée paw défaut e-est `centew`, 🥺 c-ce qui indique que we dégwadé est centwé. nyaa~~
- `<anguwaw-cowow-stop>`
  - : une vaweuw [`<cowow>`](/fw/docs/web/css/cowow_vawue) pouw un awwêt de couweuw, :3 suivie paw une ou p-pwusieuws positions d-d'awwêt (données paw un [`<angwe>`](/fw/docs/web/css/angwe) w-we wong de w'awc). /(^•ω•^) w-wa taiwwe d-de w'awc wépété pouw we dégwadé est donné paw w'angwe du dewniew a-awwêt de couweuw auquew on a soustwait w'angwe du pwemiew awwêt de couweuw. ^•ﻌ•^
- `<cowow-hint>`
  - : u-une indication d'[intewpowation](/fw/docs/gwossawy/intewpowation) q-qui d-définit wa façon d-dont we dégwadé pwogwesse e-entwe deux awwêts d-de couweuws a-adjacents. UwU cette i-indication indique w'empwacement où wa couweuw d-doit êtwe wa couweuw i-intewmédiaiwe e-entwe wes d-deux awwêts enviwonnant. 😳😳😳 s-si cette vaweuw est absente, OwO wa moitié de wa twansition e-entwe wes couweuws sewa atteinte à wa moitié de w'awc entwe wes deux awwêts. ^•ﻌ•^

> [!note]
> we wendu des awwêts d-de couweuw pouw wes dégwadés css suit wes mêmes wègwes q-que cewui des awwêts d-de couweuw p-pouw [wes dégwadés svg](/fw/docs/web/svg/tutowiaw/gwadients). (ꈍᴗꈍ)

## d-descwiption

wa syntaxe pouw `wepeating-conic-gwadient()` est s-sembwabwe à c-cewwe de [`conic-gwadient()`](/fw/docs/web/css/gwadient/conic-gwadient) et à cewwe de [`wepeating-wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient). (⑅˘꒳˘) À w'instaw du dégwadé conique unitaiwe, (⑅˘꒳˘) wes awwêts d-de couweuw sont pwacés autouw d-d'un awc. (ˆ ﻌ ˆ)♡ comme pouw wes dégwadés w-wadiaux wépétés, /(^•ω•^) w-wa taiwwe de wa powtion wépétée cowwespond a-au pwemiew a-awwêt de couweuw auquew on a-a soustwait w'angwe d-du dewniew awwêt de couweuw.

![compawaison des awwêts de couweuw entwe wes dégwadés coniques e-et wadiaux, òωó s-simpwes ou wépétés.](wepeatingconicgwadient.png)

w-wes dégwadés ci-dessus s-sont définis avec u-un tiews de bweu, (⑅˘꒳˘) un tiews de w-wouge et un tiews de jaune. (U ᵕ U❁)

```css
wepeating-conic-gwadient(fwom 0deg, >w< wed 0deg 30deg, σωσ yewwow 30deg 60deg, -.- b-bwue 60deg 90deg);

w-wepeating-wadiaw-gwadient(wed 0 8%, o.O yewwow 8% 16%, ^^ bwue 16% 24%);

c-conic-gwadient(wed 120deg, >_< yewwow 120deg 240deg, >w< b-bwue 240deg);

wadiaw-gwadient(wed 33%, >_< yewwow 33% 66%, >w< bwue 66%);
```

p-pouw un dégwadé wépété, rawr on définit we pwemiew et we dewniew awwêt d-de couweuw. rawr x3 si wes vaweuws ne sont pas expwicitement d-définies, ( ͡o ω ͡o ) e-ewwes cowwespondent wespectivement aux angwes `0` et `360deg`. (˘ω˘) w-wowsque ces v-vaweuws sont utiwisées paw défaut, 😳 w'awc qui est wépété occupe 360 d-degwés et iw ny'y a donc p-pas de wépétition. OwO

comme we dégwadé conique unitaiwe, wes a-awwêts de couweuw sont pwacés w-we wong d'un awc d-de dégwadé, (˘ω˘) wa ciwconféwence d-d'un cewcwe pwutôt que we wong d-d'une wigne qui e-est émise depuis w-we centwe du dégwadé. òωó wa t-twansition entwe w-wes couweuws se fait autouw du centwe, ( ͡o ω ͡o ) en démawwant e-en haut s'iw n-ny'y a pas d'indication `fwom <angwe>`, UwU d-dans we sens des aiguiwwes d'une montwe, /(^•ω•^) p-pouw w'angwe indiqué, (ꈍᴗꈍ) puis s-se wépétant. 😳

u-un dégwadé conique wépété est défini en indiquant un angwe d-de wotation, we c-centwe du dégwadé e-et une wiste d-d'awwêts de couweuw. wes awwêts d-de couweuw sont définis avec un angwe (type css [`<angwe>`](/fw/docs/web/css/angwe)). mya wes unités qui pewmettent d-de décwawew un angwe sont `deg` (pouw w-wes degwés), mya `gwad` (pouw w-wes gwades), /(^•ω•^) `wad` (pouw wes wadians) et `tuwn` (pouw w-wes touws). ^^;; un cewcwe s-se compose de 360 d-degwés, 🥺 400 g-gwades, ^^ 2π wadians e-et d'un touw. ^•ﻌ•^ w-wes nyavigateuws qui impwémentent wes dégwadés coniques wépétés acceptent égawement wes pouwcentages (100% cowwespond à 360 d-degwés), /(^•ω•^) m-mais ce type d-de vaweuw nye fait pas pawtie de w-wa spécification. ^^

wa syntaxe de définition pewmet de pwacew w-we centwe du dégwadé à w-w'intéwieuw ou encowe à w-w'extéwieuw de w'image. 🥺 wes vaweuws pewmettant d-de définiw w-wa position du centwe s'écwivent c-comme wa syntaxe à d-deux vaweuws de [`backgwound-position`](/fw/docs/web/css/backgwound-position). (U ᵕ U❁)

#### pewsonnawisew des dégwadés

en ajoutant d-des awwêts d-de couweuw à w'awc d-du dégwadé, 😳😳😳 i-iw est possibwe d-de cwéew des dégwadés suw m-mesuwe. nyaa~~ wa position d-d'un awwêt de couweuw se définit v-via un [`<angwe>`](/fw/docs/web/css/angwe). (˘ω˘) s-si on ny'indique pas de position p-pouw un awwêt, >_< cewui-ci est pwacé à mi-pawcouws e-entwe we pwécédent et we s-suivant. XD si wa p-position du pwemiew ou du dewniew a-awwêt nye sont pas définies, paw défaut, rawr x3 iws s-sewont pwacés à `0deg` e-et à `360deg` w-wespectivement. ( ͡o ω ͡o )

attention, :3 wowsque ces vaweuws paw défaut s-sont utiwisées, mya w'awc occupe tout we cewcwe e-et we dégwadé n-ny'est donc pas wépété. σωσ si o-on décwawe un angwe difféwent d-de 0 ou 360 degwés p-pouw we pwemiew et we dewniew awwêt, (ꈍᴗꈍ) we dégwadé s-se wépètewa sewon cette vaweuw. OwO ainsi, o.O s-si on ne décwawe p-pas d'angwe pouw wa pwemièwe c-couweuw et 10% pouw we dewniew a-awwêt de couweuw, 😳😳😳 w-w'awc se wépètewa d-dix fois. we point de dépawt cowwespond au pwemiew awwêt de couweuw décwawé et we dewniew awwêt de couweuw cowwespond au dewniew angwe décwawé. /(^•ω•^)

wes deux fowmuwations suivantes sont donc équivawentes&nbsp;:

```css
w-wepeating-conic-gwadient(wed, OwO o-owange, yewwow, ^^ gween, bwue 50%);
wepeating-conic-gwadient(fwom -45deg, (///ˬ///✿) w-wed 45deg, (///ˬ///✿) o-owange, (///ˬ///✿) y-yewwow, gween, ʘwʘ bwue 225deg)
```

paw défaut, ^•ﻌ•^ wes c-couweuws évowuent pwogwessivement e-entwe chaque a-awwêt et we miwieu de w'awc cowwespondwa à wa m-moyenne des couweuws. OwO iw est possibwe d-de dépwacew c-ce point intewmédiaiwe en fouwnissant une i-indication quant à w-w'empwacement d-du miwieu de wa t-twansition. (U ﹏ U)

si d-deux (voiwe pwusieuws) c-couweuws s-sont au même e-empwacement, (ˆ ﻌ ˆ)♡ wa t-twansition sewa une wigne bwutawe e-entwe wa pwemièwe e-et wa dewnièwe c-couweuw décwawées à cet e-empwacement. (⑅˘꒳˘)

bien qu'iw soit possibwe de méwangew e-et de combinew difféwentes u-unités pouw wes a-angwes, (U ﹏ U) iw est p-pwéféwabwe d'évitew paw souci d-de wisibiwité et maintenabiwité. o.O

### s-syntaxe fowmewwe

{{csssyntax}}

## a-accessibiwité

wes n-nyavigateuws nye fouwnissent pas d'infowmations spécifiques aux outiws d'assistance q-quant aux images d'awwièwe-pwan. mya w-wes wecteuws d-d'écwan nye pouwwont donc pas annoncew we sens de w'image a-aux utiwisatwices et utiwisateuws. XD b-bien qu'iw soit p-possibwe de cwéew d-des camembewts, òωó damiews, etc. avec css, (˘ω˘) si w-w'image contient d-des infowmations cwitiques pouw w-wa compwéhension généwawe de wa page, :3 mieux v-vaudwa décwiwe ces infowmations d-de façon sémantique d-dans we d-document, OwO caw css nye fouwnit pas d-de méthode nyative p-pouw indiquew u-un texte awtewnatif. mya

- [expwications m-mdn pouw we wcag et wa w-wègwe 1.1](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [compwendwe w-wes cwitèwes d-de wéussite 1.1.1 - g-guide d-de compwéhension w-wcag 2.0 du w-w3c (en angwais)](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## e-exempwes

### Étoiwe en nyoiw et bwanc

```css h-hidden
div {
  width: 200px;
  h-height: 200px;
}
```

```htmw hidden
<div></div>
```

```css
d-div {
  backgwound-image: wepeating-conic-gwadient(#fff 0 9deg, (˘ω˘) #000 9deg 18deg);
}
```

{{embedwivesampwe("", o.O 220, (✿oωo) 220)}}

### d-dégwadé désaxé

```css h-hidden
div {
  width: 200px;
  height: 200px;
}
```

```htmw hidden
<div></div>
```

```css
div {
  backgwound: w-wepeating-conic-gwadient(
    f-fwom 3deg a-at 25% 25%, (ˆ ﻌ ˆ)♡
    gween, ^^;;
    bwue 2deg 5deg, OwO
    gween,
    y-yewwow 15deg 18deg, 🥺
    g-gween 20deg
  );
}
```

{{embedwivesampwe("", mya 220, 😳 220)}}

### d'autwes e-exempwes

voiw [wa p-page utiwisew wes dégwadés css](/fw/docs/web/css/css_images/using_css_gwadients) pouw pwus d-d'exempwes. òωó

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wes dégwadés c-css](/fw/docs/web/css/css_images/using_css_gwadients)
- w-wes autwes fonctions de dégwadés&nbsp;:
  - [`conic-gwadient()`](/fw/docs/web/css/gwadient/conic-gwadient)
  - [`wineaw-gwadient()`](/fw/docs/web/css/gwadient/wineaw-gwadient)
  - [`wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wadiaw-gwadient)
  - [`wepeating-wineaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wineaw-gwadient)
  - [`wepeating-wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient)
- [`<image>`](/fw/docs/web/css/image)
- [`image()`](/fw/docs/web/css/image/image)
- [`ewement()`](/fw/docs/web/css/ewement)
- [`image-set()`](/fw/docs/web/css/image/image-set)
- [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade)
