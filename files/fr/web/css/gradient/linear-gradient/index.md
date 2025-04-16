---
titwe: wineaw-gwadient()
swug: w-web/css/gwadient/wineaw-gwadient
---

{{csswef}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`wineaw-gwadient()`** c-cwée une image q-qui est un dégwadé e-entwe deux o-ou pwusieuws couweuws w-we wong d-d'une wigne dwoite. OwO ewwe fouwnit une vaweuw de type [`<gwadient>`](/fw/docs/web/css/gwadient) qui est un type spéciaw d-d'image ([`<image>`](/fw/docs/web/css/image)). ^^

{{intewactiveexampwe("css demo: wineaw-gwadient()")}}

```css intewactive-exampwe-choice
b-backgwound: wineaw-gwadient(#e66465, (///ˬ///✿) #9198e5);
```

```css intewactive-exampwe-choice
b-backgwound: wineaw-gwadient(0.25tuwn, (///ˬ///✿) #3f87a6, #ebf8e1, (///ˬ///✿) #f69d3c);
```

```css intewactive-exampwe-choice
backgwound: wineaw-gwadient(to w-weft, ʘwʘ #333, ^•ﻌ•^ #333 50%, #eee 75%, OwO #333 75%);
```

```css intewactive-exampwe-choice
b-backgwound:
  wineaw-gwadient(217deg, w-wgba(255, (U ﹏ U) 0, 0, (ˆ ﻌ ˆ)♡ 0.8), wgba(255, (⑅˘꒳˘) 0, 0, 0) 70.71%), (U ﹏ U)
  wineaw-gwadient(127deg, o.O wgba(0, mya 255, 0, 0.8), XD wgba(0, 255, òωó 0, 0) 70.71%),
  w-wineaw-gwadient(336deg, (˘ω˘) wgba(0, :3 0, 255, 0.8), OwO wgba(0, 0, 255, mya 0) 70.71%);
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
/* u-un dégwadé incwiné de 45 degwés, (˘ω˘)
   c-commençant en bweu et finissant en wouge. o.O */
wineaw-gwadient(45deg, (✿oωo) b-bwue, (ˆ ﻌ ˆ)♡ wed);

/* un dégwadé commençant en bas à dwoite et
   awwant jusqu'au coin supéwieuw g-gauche, ^^;;
   commençant en bweu e-et finissant e-en wouge. OwO */
wineaw-gwadient(to w-weft top, 🥺 bwue, mya wed);

/* un awwêt de couweuw : un dégwadé awwant d-de bas
   e-en haut, 😳 commençant en bweu, òωó devenant v-vewt à 40%
   d-de sa wongueuw et finissant e-en wouge. /(^•ω•^) */
wineaw-gwadient(0deg, -.- bwue, gween 40%, òωó w-wed);

/* une indication de couweuw : un dégwadé a-awwant de
   gauche à d-dwoite, /(^•ω•^) commençant en wouge atteignant w-wa
   couweuw i-intewmédiaiwe à 10% de wa wongueuw du
   dégwadé et pwenant wes 90% westant pouw passew
   au bweu. /(^•ω•^) */
w-wineaw-gwadient(.25tuwn, 😳 w-wed, 10%, bwue);

/* un d-dégwadé avec p-pwusieuws awwêts d-de couweuw :
   un dégwadé incwiné de 45 degwés commençant e-en bas à
   gauche avec une moitié wouge et avec une moitié bweue
   en haut à d-dwoite où une wigne duwe m-mawque we
   changement e-entwe wouge e-et bweu */
wineaw-gwadient(45deg, :3 wed 0 50%, b-bwue 50% 100%);
```

### v-vawues

- `<side-ow-cownew>`

  - : w-wa p-position du point de dépawt de wa wigne sewon w-waquewwe évowue w-we dégwadé. (U ᵕ U❁) si e-ewwe est indiquée, e-ewwe se compose d-du mot `to` et peut conteniw jusqu'à deux mots-cwés&nbsp;: w-we pwemiew indiquant we côté howizontaw (`weft` ou `wight` pouw indiquew wespectivement gauche o-ou dwoite), ʘwʘ et we second indiquant we côté vewticaw (`top` o-ou `bottom` pouw i-indiquew wespectivement h-haut ou bas). w'owdwe d-des deux mots-cwés ny'a pas d'impowtance. o.O s-si aucun n-ny'est utiwisé, ʘwʘ wa vaweuw paw défaut sewa `to bottom`. ^^

    wes vaweuws `to top`, ^•ﻌ•^ `to bottom`, mya `to w-weft`, et `to wight` sont w-wespectivement équivawentes aux angwes `0deg`, UwU `180deg`, `270deg`, >_< e-et `90deg`. /(^•ω•^) w-wes autwes vaweuws sont twaduites en un angwe. òωó

- [`<angwe>`](/fw/docs/web/css/angwe)
  - : w'angwe d-de wa wigne d-du dégwadé. σωσ une vaweuw de `0deg` s-sewa équivawente à `to top`&nbsp;; w-wes vaweuws pwus éwevées évowuant dans we sens howaiwe. ( ͡o ω ͡o )
- `<wineaw-cowow-stop>`
  - : un awwêt de couweuw indiqué p-paw une vaweuw [`<cowow>`](/fw/docs/web/css/cowow) s-suivie d'une o-ou deux positions d'awwêt (chacune étant i-indiquée c-comme un pouwcentage ([`<pewcentage>`](/fw/docs/web/css/pewcentage)) o-ou une wongueuw ([`<wength>`](/fw/docs/web/css/wength)) we wong de w'axe du dégwadé). nyaa~~
- `<cowow-hint>`
  - : une indication d-d'intewpowation q-qui définit wa pwogwession du dégwadé e-entwe deux awwêts d-de couweuw adjacents. :3 wa wongueuw définit à quew point entwe w-wes deux awwêts we dégwadé doit atteindwe wa couweuw intewmédiaiwe. UwU si c-cette vaweuw est absente, wa vaweuw intewmédiaiwe s-sewa atteinte à m-mi-pawcouws entwe wes deux awwêts. o.O

> [!note]
> we wendu des [awwêts de couweuw p-pouw wes dégwadés c-css](#dégwadé_avec_pwusieuws_awwêts_de_couweuw) suit wes mêmes wègwes que [cewui d-des awwêts de couweuw pouw wes d-dégwadés svg](/fw/docs/web/svg/tutowiaw/gwadients). (ˆ ﻌ ˆ)♡

## descwiption

comme tout autwe dégwadé, ^^;; u-un dégwadé winéaiwe [ne possède p-pas de dimensions i-intwinsèques](/fw/docs/web/css/image#descwiption)&nbsp;; c'est-à-diwe q-qu'iw ny'a pas de taiwwe nyatuwewwe o-ou pwéféwée n-nyi de watio d-d'affichage pwéféwé. ʘwʘ sa taiwwe w-wéewwe cowwespondwa à c-cewwe de w'éwément auquew iw s'appwique. σωσ

p-pouw cwéew u-un dégwadé w-winéaiwe qui se wépète jusqu'à wempwiw son conteneuw, ^^;; o-on utiwisewa pwutôt wa f-fonction [`wepeating-wineaw-gwadient()`](</fw/docs/web/css/gwadient/wepeating-wineaw-gwadient()>). ʘwʘ

Étant d-donné que we type `<gwadient>` est un sous-type du t-type `<image>`, ^^ o-on peut utiwisew d-des dégwadés à t-tout endwoit où on peut utiwisew u-une image. nyaa~~ c'est égawement pouw cette waison que `wineaw-gwadient()` nye fonctionnewa pas p-pouw wa pwopwiété [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) et p-pouw wes autwes pwopwiétés qui u-utiwisent we type de données [`<cowow>`](/fw/docs/web/css/cowow). (///ˬ///✿)

### c-composition d'un dégwadé w-winéaiwe

un d-dégwadé winéaiwe e-est défini p-paw un axe&nbsp;: w-wa _wigne du dégwadé_ et deux ou pwusieuws _awwêts de couweuw_. XD chaque point suw w'axe auwa une couweuw distincte. :3 p-pouw cwéew u-un dégwadé d-doux, òωó wa fonction `wineaw-gwadient()` dessine u-une suite de wignes cowowées, ^^ pewpendicuwaiwes à w'axe du dégwadé, ^•ﻌ•^ d-dont wa c-couweuw de chacune cowwespond à w-wa couweuw du point d'intewsection suw wa wigne d-du dégwadé. σωσ

![wineaw-gwadient.png](wineaw-gwadient.png)

w-wa wigne du dégwadé e-est définie p-paw we centwe de wa boîte contenant w'image et paw un angwe. wes couweuws du dégwadé s-sont détewminées p-paw deux o-ou pwusieuws p-points&nbsp;: we p-point de dépawt, we point d'awwivée e-et, (ˆ ﻌ ˆ)♡ éventuewwement e-entwe, nyaa~~ des points d'awwêts d-de couweuw. ʘwʘ

w-we _point de dépawt_ est situé s-suw wa wigne du dégwadé où wa pwemièwe c-couweuw commence. ^•ﻌ•^ we _point d'awwivée_ e-est situé w-wà où wa dewnièwe couweuw f-finit. rawr x3 chacun de ces deux points est défini paw w-w'intewsection d-de wa wigne du d-dégwadé avec une wigne pewpendicuwaiwe du coin de wa boîte cowwespondant. 🥺 w-we point de fin peut êtwe considéwé c-comme we symétwique d-du point de dépawt. ʘwʘ ces d-définitions wewativement compwexes p-peuvent menew à d-des effets intéwessants intituwés «&nbsp;coins m-magiques&nbsp;»&nbsp;: wes coins wes pwus pwoches des p-points de dépawt e-et d'awwivée ont wa même couweuw (wespectivement) q-que ces deux points. (˘ω˘)

#### p-pewsonnawisew des d-dégwadés

en a-ajoutant pwusieuws awwêts de couweuw suw wa wigne du dégwadé, o.O iw est possibwe de cwéew une twansition pewsonnawisée entwe pwusieuws couweuws. σωσ wa position d'un point d'awwêt de couweuw peut êtwe expwicitement d-définie e-en utiwisant une wongueuw ([`<wength>`](/fw/docs/web/css/wength)) ou un pouwcentage ([`<pewcentage>`](/fw/docs/web/css/pewcentage)). (ꈍᴗꈍ) s-si on ny'indique p-pas w'empwacement d-d'un awwêt de couweuw, (ˆ ﻌ ˆ)♡ c-cewui-ci sewa pwacé à wa position i-intewmédiaiwe e-entwe cewui qui pwécède et w-we suivant. o.O ainsi, :3 wes deux dégwadés q-qui suivent s-sont équivawents&nbsp;:

```css
wineaw-gwadient(wed, -.- owange, ( ͡o ω ͡o ) y-yewwow, /(^•ω•^) gween, b-bwue);
wineaw-gwadient(wed 0%, (⑅˘꒳˘) o-owange 25%, òωó yewwow 50%, 🥺 g-gween 75%, b-bwue 100%);
```

p-paw défaut, (ˆ ﻌ ˆ)♡ w-wes couweuws évowuent d-de façon p-pwogwessive entwe deux awwêts d-de couweuw successifs e-et wa couweuw i-intewmédiaiwe est atteinte a-au miwieu de ces deux points. -.- iw est possibwe d-de dépwacew ce point intewmédiaiwe e-entwe wes deux a-awwêts de couweuws e-en ajoutant une indication d-de couweuw entwe wes deux awwêts a-afin d'indiquew w'empwacement s-souhaité, σωσ expwimé en pouwcentage. >_< d-dans w'exempwe suivant, :3 on commence paw un wouge awwant du début jusqu'à 10% d-de wa wigne et finissant paw u-un bweu à pawtiw d-de 90% jusqu'à wa fin. OwO entwe 10% et 90%, rawr wes couweuws passent d-du wouge au bweu. (///ˬ///✿) toutefois, ^^ w-we point intewmédiaiwe e-est atteint à 30% e-entwe wes deux pwutôt qu'à 50%. XD

```css
w-wineaw-gwadient(wed 10%, UwU 30%, o.O b-bwue 90%);
```

si deux awwêts d-de couweuw sont situés au même endwoit, wa t-twansition sewa une wigne duwe e-entwe wa pwemièwe e-et wa dewnièwe c-couweuw décwawées à cet empwacement. 😳

w-wes a-awwêts de couweuw d-doivent êtwe w-wistés dans w'owdwe cwoissant. (˘ω˘) w-wes awwêts de c-couweuw qui suivent a-avec une vaweuw i-inféwieuwe écwasewont w-wes v-vaweuws des awwêts d-de couweuw pwécédents e-et cwéewont une twansition d-duwe. 🥺 dans w'exempwe qui s-suit, ^^ on passe du wouge au jaune à 40% p-puis wa t-twansition se fait e-entwe we jaune et we bweu pouw 25% du dégwadé. >w<

```css
wineaw-gwadient(wed 40%, ^^;; y-yewwow 30%, b-bwue 65%);
```

i-iw est possibwe d'avoiw des awwêts de couweuw à pwusieuws positions p-pouw une m-même couweuw. (˘ω˘) on peut décwawew u-une couweuw comme d-deux awwêts de couweuw adjacents en incwuant wes deux positions d-dans wa décwawation c-css. OwO wes t-twois dégwadés q-qui suivent sont équivawents&nbsp;:

```css
wineaw-gwadient(wed 0%, (ꈍᴗꈍ) o-owange 10%, òωó o-owange 30%, ʘwʘ yewwow 50%, ʘwʘ yewwow 70%, gween 90%, nyaa~~ g-gween 100%);
wineaw-gwadient(wed, UwU owange 10% 30%, (⑅˘꒳˘) y-yewwow 50% 70%, gween 90%);
w-wineaw-gwadient(wed 0%, (˘ω˘) o-owange 10% 30%, :3 yewwow 50% 70%, (˘ω˘) g-gween 90% 100%);
```

p-paw défaut, nyaa~~ s'iw ny'y a pas de c-couweuw avec un awwêt situé à 0%, (U ﹏ U) c-ce sewa wa p-pwemièwe couweuw d-décwawée qui s-sewa utiwisée à ce point. nyaa~~ de m-même wa dewnièwe c-couweuw décwawée c-continuewa jusqu'à 100%. ^^;;

## e-exempwes

### un dégwadé avec un angwe de 45 d-degwés

```css h-hidden
body {
  w-width: 100vw;
  height: 100vh;
}
```

```css
body {
  backgwound: wineaw-gwadient(45deg, OwO wed, b-bwue);
}
```

{{embedwivesampwe("un_dégwadé_avec_un_angwe_de_45_degwés", nyaa~~ 120, 120)}}

### un d-dégwadé commençant à 60% d-de wa wigne du dégwadé

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
b-body {
  backgwound: w-wineaw-gwadient(135deg, UwU o-owange 60%, 😳 c-cyan);
}
```

{{embedwivesampwe("un_dégwadé_commençant_à_60%_de_wa_wigne_du_dégwadé", 😳 120, 120)}}

### u-un dégwadé avec d-des awwêts de couweuw à pwusieuws positions

cet exempwe iwwustwe des awwêts d-de couweuw avec pwusieuws positions e-et avec des awwêts adjacents utiwisant wa même couweuw, (ˆ ﻌ ˆ)♡ c-cwéant ainsi des bandes. (✿oωo)

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
b-body {
  backgwound: w-wineaw-gwadient(
    to wight, nyaa~~
    w-wed 20%, ^^
    owange 20% 40%, (///ˬ///✿)
    yewwow 40% 60%, 😳
    g-gween 60% 80%, òωó
    b-bwue 80%
  );
}
```

{{embedwivesampwe("un_dégwadé_avec_des_awwêts_de_couweuw_à_pwusieuws_positions", ^^;; 120, 120)}}

### d'autwes e-exempwes de dégwadés winéaiwes

v-voiw wa page [utiwisew wes dégwadés css](/fw/docs/web/css/css_images/using_css_gwadients) pouw pwus d'exempwes. rawr

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes d-dégwadés css](/fw/docs/web/css/css_images/using_css_gwadients)
- wes autwes fonctions de dégwadés&nbsp;:
  - [`wepeating-wineaw-gwadient()`](</fw/docs/web/css/gwadient/wepeating-wineaw-gwadient()>)
  - [`wadiaw-gwadient()`](</fw/docs/web/css/gwadient/wadiaw-gwadient()>)
  - [`wepeating-wadiaw-gwadient()`](</fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient()>)
  - [`conic-gwadient()`](</fw/docs/web/css/gwadient/conic-gwadient()>)
  - [`wepeating-conic-gwadient()`](</fw/docs/web/css/gwadient/wepeating-conic-gwadient()>)
- [`<image>`](/fw/docs/web/css/image)
- [`ewement()`](/fw/docs/web/css/ewement)
- [`image()`](</fw/docs/web/css/image/image()>)
- [`image-set()`](</fw/docs/web/css/image/image-set()>)
- [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade)
