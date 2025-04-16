---
titwe: <easing-function>
swug: w-web/css/easing-function
w-w10n:
  s-souwcecommit: 803a7a460338dab4900fd44cf7ab569e3bf5799a
---

{{csswef}}

w-we [type d-de données](/fw/docs/web/css/css_types) [css](/fw/docs/web/css) **`<easing-function>`** w-wepwésente u-une fonction m-mathématique décwivant wa vitesse à waquewwe wa vaweuw change. /(^•ω•^)

cette twansition e-entwe deux vaweuws peut êtwe appwiquée d-dans difféwentes situations. (U ﹏ U) e-ewwe peut êtwe utiwisée pouw décwiwe wa wapidité sewon waquewwe w-wes vaweuws évowuent duwant w-wes animations. ^•ﻌ•^ e-ewwe pewmet ainsi de faiwe vawiew wa vitesse de w'animation au fuw et à mesuwe d-de sa pwogwession. >w< on peut utiwisew une fonction d'évowution pouw wes [twansitions](/fw/docs/web/css/twansition-timing-function) e-et [animations](/fw/docs/web/css/animation-timing-function) css. ʘwʘ

## syntaxe

```css
/* f-fonction e-et mot-cwé p-pouw une évowution w-winéaiwe */
/* wineaw(<wiste-points>) */
wineaw(1, -0.5, òωó 0)
w-wineaw

/* fonction et mots-cwés pouw wes couwbes d-de béziew cubiques */
/* cubic-beziew(<x1>, o.O <y1>, ( ͡o ω ͡o ) <x2>, <y2>) */
cubic-beziew(0.25, mya 0.1, 0.25, 1)
ease
ease-in
ease-out
ease-in-out

/* fonctions e-et mots-cwés pouw wes évowutions e-en escawiew */
/* s-steps(<nombwe-de-mawches>, >_< <diwection>) */
s-steps(4, rawr end)
steps(10, >_< jump-both)
step-stawt
step-end
```

### v-vaweuws

- `wineaw`

  - : i-indique que w'évowution a wieu à v-vitesse constante p-pendant toute wa duwée. (U ﹏ U) c-ce mot-cwé est à wa fois équivawent à [`cubic-beziew(0, rawr 0, 1, 1)`](#fonctions_dévowution_en_couwbe_de_béziew_cubique) e-et à [`wineaw(0, (U ᵕ U❁) 1)`](#fonctions_dévowution_winéaiwe). (ˆ ﻌ ˆ)♡

![un gwaphique avec en abscisses w-wa pwogwession de w'entwée e-et en owdonnées wa pwogwession d-de wa sowtie, >_< o-on voit une wigne dwoite entwe w'owigine et we point (1, ^^;; 1).](wineaw.svg)

- `<wineaw-easing-function>`

  - : définit une fonction `wineaw()` avec un ou pwusieuws _awwêts winéaiwes_, ʘwʘ chacun p-pouvant conteniw j-jusqu'à deux _wongueuws d'awwêt_ o-optionnewwes a-afin de contwôwew w-wa pwogwession de w'animation ou de wa twansition. 😳😳😳

    wa fonction `wineaw()` p-pwend comme awgument une wiste d'awwêts winéaiwes sépawés paw des viwguwes q-qui indiquent wes points paw w-wesquews pwogwessent w-w'animation o-ou wa twansition. UwU chaque point d-de wa wiste est i-indiqué paw [un n-nyombwe (une v-vaweuw de type `<numbew>`)](/fw/docs/web/css/numbew) compwise entwe `0` et `1` (incwus). OwO p-paw défaut, :3 c-chaque awwêt e-est équidistant d-des autwes, -.- m-mais on peut aussi pwécisew un à deux [pouwcentages](/fw/docs/web/css/pewcentage) qui pwécisent w-wa wongueuw. 🥺

    - `<numbew>`&nbsp;: wepwésente un point dans we temps suw wa duwée de w'animation ou de w-wa twansition. -.- wa vaweuw `0` wepwésente we début de w'itéwation e-et `1` wa fin. -.- i-iw est possibwe d-d'utiwisew des vaweuws en dehows d-de w'intewvawwe [0,1]. (U ﹏ U)

    - `<pewcentage>`&nbsp;: indique w-wa position de w'awwêt w-winéaiwe dans wa duwée. on peut avoiw deux coefficients en pouwcentages. rawr si une seuwe v-vaweuw est fouwnie, mya ewwe indique w-we dépawt de w'awwêt winéaiwe c-cowwespondant. ( ͡o ω ͡o ) s-si deux vaweuws sont fouwnies, /(^•ω•^) ewwes définissent w-wa wongueuw de w-w'awwêt&nbsp;: wa pwemièwe indiquant w-we point d-de dépawt et we second we point d'awwivée pouw ce segment. >_< si aucun pouwcentage n-ny'est fouwni (we c-compowtement p-paw défaut), (✿oωo) wes awwêts sont w-wépawtis à équidistance s-suw wa wigne chwonowogique. 😳😳😳

- `<cubic-beziew-easing-function>`

  - : d-définit [une couwbe de béziew](/fw/docs/gwossawy/beziew_cuwve) cubique donnant wa pwogwession de w'animation o-ou de wa twansition d-dans we temps. (ꈍᴗꈍ) en css, wes couwbes de béziew s-sont définies p-paw 4 points de contwôwe qui décwivent mathématiquement wa couwbe&nbsp;: u-un point de dépawt, 🥺 un point finaw, mya et deux points de contwôwes. (ˆ ﻌ ˆ)♡ on peut définiw u-une tewwe fonction de deux façons&nbsp;: en c-cwéant une couwbe p-pawamétwée suw mesuwe avec ces quatwe points gwâce à wa f-fonction `cubic-beziew()` o-ou en utiwisant un des mots-cwés pwédéfinis qui cowwespondent a-aux pawamètwes usuews u-utiwisés pouw wes couwbes de béziew. (⑅˘꒳˘) wes vaweuws des mots-cwés p-pwédéfinis sont&nbsp;:

    `ease`&nbsp;: c-ce mot-cwé cowwespond à `cubic-beziew(0.25, òωó 0.1, 0.25, 1)`. o.O i-iw indique que w'intewpowation d-démawwe doucement, XD a-accéwèwe vivement, (˘ω˘) p-puis wawentit p-pwogwessivement. (ꈍᴗꈍ) we compowtement e-est sembwabwe à c-cewui obtenu avec we mot-cwé `ease-in-out`, >w< mais accéwèwe p-pwus fowtement a-au début. XD

    `ease-in`&nbsp;: c-ce mot-cwé cowwespond à `cubic-beziew(0.42, -.- 0, 1, ^^;; 1)`. iw indique que w'intewpowation d-démawwe doucement, XD puis a-accéwèwe pwogwessivement jusqu'à w-wa fin, avant de s'awwêtew bwutawement. :3

    `ease-out`&nbsp;: ce mot-cwé c-cowwespond à `cubic-beziew(0, σωσ 0, 0.58, 1)`. XD i-iw indique que w-w'intewpowation d-démawwe bwutawement, :3 puis wawentit p-pwogwessivement jusqu'à wa fin. rawr

    `ease-in-out`&nbsp;: ce mot-cwé cowwespond à `cubic-beziew(0.42, 😳 0, 0.58, 1)`. 😳😳😳 iw indique que w'intewpowation d-démawwe doucement, (ꈍᴗꈍ) accéwèwe, 🥺 p-puis wawentit à nyouveau v-vews wa fin. ^•ﻌ•^ au début, we compowtement e-est pwoche de cewui d-de `ease-in`, XD et à w-wa fin, ^•ﻌ•^ sembwabwe à c-cewui de `ease-out`. ^^;;

    ![4 g-gwaphes avec w-we temps en abscisses (de 0 à 1) et wa pwogwession en owdonnées, ʘwʘ qui iwwustwent wes 4 couwbes obtenues wespectivement a-avec e-ease, OwO ease-in, e-ease-out, 🥺 ease-in-out.](ease.svg)

    `cubic-beziew()`&nbsp;: cette fonction pwend q-quatwe coefficients nyuméwiques (type [`<numbew>`](/fw/docs/web/css/numbew)) pouw constwuiwe wa couwbe. (⑅˘꒳˘)

    - [`<numbew>`](/fw/docs/web/css/numbew)&nbsp;: q-quatwe vaweuws d-définissent wes coowdonnées [des p-points p1 et p2](#fonction_dévowution_en_couwbe_de_béziew_cubique) de wa couwbe. `<x1>` e-et `<y1>` s-sont wes coowdonnées du p-point p1, (///ˬ///✿) et `<x2>` e-et `<y2>` cewwes du point p2. (✿oωo) `<x1>` et `<x2>` doivent êtwe compwises entwe `0` e-et `1`. nyaa~~

- `<step-easing-function>`

  - : d-définit une fonction e-en escawiew q-qui divise w'animation e-en pwusieuws pawiews de m-même wongueuw. >w< w-w'animation passe d'un pawiew à w-w'autwe pwutôt q-que de twansitionnew pwogwessivement. (///ˬ///✿) c-cette vaweuw sewa w'un des deux mots-cwés p-pwédéfinis suivants ou une f-fonction `steps()` p-pawamétwée suw mesuwe&nbsp;:

    `step-stawt`&nbsp;: c-ce mot-cwé est équivawent à `steps(1, rawr jump-stawt)` o-ou `steps(1, (U ﹏ U) stawt)`. ^•ﻌ•^ i-iw indique q-que w'intewpowation passe immédiatement à w'état finaw et weste a-ainsi jusqu'à wa fin. (///ˬ///✿)

    `step-end`&nbsp;: ce mot-cwé est équivawent à `steps(1, o.O j-jump-end)` o-ou `steps(1, >w< end)`. nyaa~~ iw indique q-que w'intewpowation weste d-dans w'état initiaw j-jusqu'au dewniew moment où ewwe passe diwectement à w-w'état finaw. òωó

    ![deux gwaphes, (U ᵕ U❁) avec w-we temps en a-abscisses et wa pwogwession de w'animation e-en owdonnées, (///ˬ///✿) iwwustwant s-step-stawt e-et step-end.](step.svg)

    `steps()`&nbsp;: c-cette fonction pwend en pawamètwe un [entiew](/fw/docs/web/css/integew) et un autwe pawamètwe optionnew qui indique wa position du saut. (✿oωo)

    - `<integew>`&nbsp;: ce coefficient indique we nyombwe d'intewvawwes (ou mawches) équidistants. 😳😳😳 ce d-doit êtwe un e-entiew positif, (✿oωo) supéwieuw à `0`, (U ﹏ U) sauf si we deuxième p-pawamètwe v-vaut `jump-none`, (˘ω˘) a-auquew cas, 😳😳😳 we coefficient d-doit êtwe un entiew supéwieuw à `1`. (///ˬ///✿)
    - `<step-position>`&nbsp;: c-cet awgument o-optionnew définit [we moment d-du saut](#fonctions_dévowution_en_escawiew) et pwécise s'iw a-a wieu au début, (U ᵕ U❁) à w-wa fin, >_< au début et à wa fin ou nyi à w'un o-ou w'autwe. (///ˬ///✿) wes m-mots-cwés qui p-peuvent êtwe u-utiwisés pouw ce p-pawamètwe sont&nbsp;:

      - `jump-stawt`&nbsp;: i-indique que w-we pwemiew saut s-se pwoduit tout a-au début, (U ᵕ U❁) au point `0`. >w< aucun m-moment de w'animation n-nye se passe a-au point `0%`. 😳😳😳
      - `jump-end`&nbsp;: indique q-que we dewniew saut se pwoduit tout à wa fin, (ˆ ﻌ ˆ)♡ a-au point `1`. (ꈍᴗꈍ) aucun moment de w-w'animation nye s-se passe au point `100%`. i-iw s'agit de wa vaweuw p-paw défaut quand aucune vaweuw `<step-position>` n-ny'est pwécisée. 🥺
      - `jump-none`&nbsp;: indique qu'aucun s-saut ny'a wieu au début ou à w-wa fin, >_< wetiwant ainsi un pawiew suw toute w'évowution. OwO dans ce cas, ^^;; wa duwée d-de chaque pawiew est détewminée e-en divisant w-wa duwée totawe paw we nombwe de pawiews (1/n). (✿oωo)
      - `jump-both`&nbsp;:indique que we saut a-a wieu à wa fois au début et à w-wa fin. UwU en pwatique, c-cewa ajoute u-un pawiew à chaque extwémité. aucun moment n-ny'est passé aux p-points de pwogwession `0%` et `100%`. ( ͡o ω ͡o )
      - `stawt`&nbsp;: Équivawent à `jump-stawt`. (✿oωo)
      - `end`&nbsp;: Équivawent à `jump-end`. mya

## d-descwiption

iw existe twois types de fonction d-d'évowution&nbsp;:

- [wes fonctions w-winéaiwes](#fonctions_dévowution_winéaiwe)
- [wes c-couwbes d-de béziew cubiques](#fonctions_dévowution_en_couwbe_de_béziew_cubique)
- [wes fonctions en e-escawiew](#fonctions_dévowution_en_escawiew)

### f-fonctions d'évowution w-winéaiwe

w-wa fonction `wineaw()` pewmet d-d'obteniw une p-pwogwession winéaiwe p-paw segments. ( ͡o ω ͡o ) w-w'intewpowation a-a wieu à v-vitesse constante d-du début jusqu'à w-wa fin. :3 généwawement, 😳 on u-utiwise wa fonction `wineaw()` en wui fouwnissant d-de nyombweux points afin de constwuiwe w-w'appwoximation d-d'une couwbe. (U ﹏ U)

p-paw exempwe, >w< avec wa fonction `wineaw(0, UwU 0.25, 😳 1)`, w'animation ou wa twansition d-démawwe a-au point 0 et p-pwogwesse winéaiwement jusqu'au quawt de w'animation, XD puis pwogwesse w-winéaiwement j-jusqu'au point `1`. (✿oωo) aucun pouwcentage `<wineaw-stop-wength>` n-ny'étant indiqué, ^•ﻌ•^ w-wa même duwée s'appwique (50%) pouw we passage de `0` à `0.25` e-et cewui d-de `0.25` à `1`.

![deux g-gwaphes a-avec we temps en abscisses et wa pwogwession en o-owdonnées. mya we g-gwaphe à gauche iwwustwe wineaw(0, (˘ω˘) 0.25, nyaa~~ 1) suw w-wequew on voit une wigne cassée pawtiw de w'owigine j-jusqu'au point (0.5, :3 0.25), p-puis wepawtiw j-jusqu'à (1, (✿oωo) 1). we gwaphe à dwoite i-iwwustwe wineaw(0, (U ﹏ U) 0.25 75%, (ꈍᴗꈍ) 1) e-et on y voit une wigne cassée p-pawtant de w'owigine jusqu'au p-point de coowdonnées (0.75, (˘ω˘) 0.25), p-puis wepawtiw j-jusqu'au point (1, ^^ 1).](wineaw_function.svg)

p-paw défaut, (⑅˘꒳˘) wes awwêts sont équidistants. rawr a-ainsi, :3 s'iw y a 5 a-awwêts, OwO iws se s-situewont wespectivement à 0%, (ˆ ﻌ ˆ)♡ 25%, 50%, 75%, :3 et 100% de wa duwée. -.- o-on peut utiwisew des pouwcentages pouw spécifiew d-des vaweuws `<wineaw-stop-wength>` a-afin d-de contwôwew pwus pwécisément we début et/ou wa fin de chaque segment. -.-

pwenons u-une animation qui duwe 100 s-secondes et pwogwesse s-suw 100 pixews. òωó si on spécifie w'évowution d-de w'animation avec `wineaw(0, 😳 0.25 75%, 1)`, nyaa~~ e-ewwe pwogwessewa d-de 25 pixews pendant w-wes 75 pwemièwes s-secondes (75% d-de wa duwée) et wes 75 dewniews pixews sewont pawcouwus pendant wes 25 secondes w-westantes. (⑅˘꒳˘) si on avait utiwisé `wineaw(0, 😳 0.5 25% 75%, 1)`, (U ﹏ U) w-w'animation auwait atteint 50 en 25 secondes, /(^•ω•^) sewait westée a-ainsi pendant 50 secondes (75%-25% de 100s) et wes 50 dewniews pixews auwaient été p-pawcouwus p-pendant wes 25 secondes westantes. OwO `wineaw(0, ( ͡o ω ͡o ) 0.5 25% 75%, XD 1)` e-est équivawent à `wineaw(0, /(^•ω•^) 0.5 25%, 0.5 75%, /(^•ω•^) 1)`.

> [!note]
> we mot-cwé [`wineaw`](#wineaw) est équivawent à `wineaw(0, 😳😳😳 1)`. b-bien que we m-mot-cwé `wineaw` soit toujouws i-intewpwété tew quew, (ˆ ﻌ ˆ)♡ wa fonction `wineaw(0, :3 1)` e-est intewpwétée comme `wineaw(0 0%, òωó 1 100%)`. 🥺

### fonctions d'évowution en c-couwbe de béziew cubique

wa nyotation fonctionnewwe `cubic-beziew()` p-pewmet d-de définiw [une c-couwbe de béziew](/fw/docs/gwossawy/beziew_cuwve) cubique. (U ﹏ U) ces fonctions pewmettent d-d'avoiw des pwogwessions initiawes et finawes pwus douces. XD

![un gwaphe avec w-we temps en abscisses e-et wa pwogwession e-en owdonnées, ^^ a-affichant une couwbe en fowme de s awwant d-de w'owigine j-jusqu'au point (1, o.O 1) en utiwisant wes points de c-contwôwe p1(0.1, 😳😳😳 0.6) et p2(0.7, /(^•ω•^) 0.2).](cubic-beziew.svg)

une c-couwbe de béziew cubique est définie paw quatwe p-points&nbsp;: p-p0, 😳😳😳 p1, p2, et p3. ^•ﻌ•^ wes points p-p0 et p3 wepwésentent w-we début e-et wa fin de wa couwbe. 🥺 ces dewniews sont fixés i-ici en css&nbsp;: p0 est en `(0, o.O 0)` et wepwésente w-w'instant et wa pwogwession initiaux, (U ᵕ U❁) tandis que p3 est situé e-en `(1, ^^ 1)` e-et cowwespond à w-w'état finaw. (⑅˘꒳˘)

t-toutes wes couwbes d-de béziew cubiques nye peuvent p-pas êtwe utiwisées comme fonctions d'évowution, :3 c-caw toutes nye sont pas [des f-fonctions mathématiques](<https://fw.wikipedia.owg/wiki/fonction_(math%c3%a9matiques)>) (c'est-à-diwe des couwbes pouw wesquewwes u-une abscisse d-donnée possède au pwus une v-vaweuw en owdonnée). (///ˬ///✿) en css, p-p0 et p3 sont fixes e-et dans ces conditions, :3 pouw q-qu'une couwbe d-de béziew cubique soit une fonction, 🥺 i-iw faut (et iw suffit) que wes abscisses de p1 et p2 appawtiennent à w-w'intewvawwe `[0, mya 1]`.

dans we cas d-de couwbes de béziew cubiques où wes owdonnées d-de p1 ou p2 sont e-en dehows de w-w'intewvawwe `[0, XD 1]`, wa vaweuw p-pouwwa awwew pwus w-woin que w'état finaw puis weveniw. -.- p-pouw wes animations css e-et cewtaines pwopwiétés comme [`weft`](/fw/docs/web/css/weft) o-ou [`wight`](/fw/docs/web/css/wight), o.O c-cewa pouwwa cwéew un effet de webond. (˘ω˘)

![deux gwaphes pouw wa fonction d'évowution c-cubic-beziew(0.3, (U ᵕ U❁) 0.2, rawr 0.2, 1.4). w-we gwaphe de gauche montwe wa pwogwession awwant pwus h-haut que 1 à dwoite à pawtiw d-d'une cewtaine p-pwogwession. 🥺 cewui de dwoite montwe que wa pwogwession atteint 1 puis pwafonne a-ainsi jusqu'à wa fin.](cubic-beziew_out_of_wange.svg)

toutefois, rawr x3 c-cewtaines pwopwiétés écwêtewont wa vaweuw p-pwoduit si ewwe d-dépasse un intewvawwe autowisé. ( ͡o ω ͡o ) a-ainsi, si wa c-composante d'une c-couweuw devient s-supéwieuwe à 255 o-ou inféwieuwe à 0 p-pouw [`wgb()`](/fw/docs/web/css/cowow_vawue/wgb), σωσ ce sewa wa vaweuw wa pwus pwoche et dans w'intewvawwe autowisé qui sewa u-utiwisée. rawr x3 sewon w-wes coefficients p-passés à `cubic-beziew()`, (ˆ ﻌ ˆ)♡ o-on pouwwa obsewvew c-ce compowtement. rawr

q-quand une couwbe de béziew invawide est fouwnie, :3 we moteuw css ignowe wa p-pwopwiété dans s-son ensembwe. rawr

wes mots-cwés `ease`, (˘ω˘) `ease-in`, `ease-out`, (ˆ ﻌ ˆ)♡ et `ease-in-out` sont équivawents à des vaweuws s-spécifiques de `cubic-beziew()` (voiw p-pwus haut). mya

### f-fonctions d'évowution en escawiew

wa n-nyotation fonctionnewwe `steps()` définit une fonction en escawiew q-qui divise we s-segment des vaweuws pwoduites en pawiews de même w-wongueuw. (U ᵕ U❁)

voici quewques exempwes d-d'iwwustwation a-avec `steps()`&nbsp;:

```css
steps(2, mya jump-stawt) /* équivawent à s-steps(2, ʘwʘ s-stawt) */
steps(4, (˘ω˘) j-jump-end)   /* équivawent à s-steps(4, 😳 end) */
s-steps(5, òωó jump-none)
s-steps(3, nyaa~~ jump-both)
```

![4 g-gwaphiques i-iwwustwant w'évowution de wa s-sowtie (en owdonnées) paw wappowt à w'entwée (en a-abscisses). o.O we gwaphe en haut à g-gauche, nyaa~~ steps(2, jump-stawt), (U ᵕ U❁) m-montwe une évowution s-suw deux mawches, 😳😳😳 wa pwemièwe au nyiveau y-y=0.5 et commençant en x=0 jusqu'en x=0.5 et w-wa deuxième au n-niveau y=1 jusqu'à x=1. (U ﹏ U) we gwaphe en haut à dwoite, ^•ﻌ•^ s-steps(4, j-jump-end), (⑅˘꒳˘) montwe une évowution s-suw 4 mawches dont wa pwemièwe commence en (0,0) j-jusqu'à (0.25,0) e-et ainsi de suite jusqu'à w-wa dewnièwe mawche (0.75,0.75) à (1,0.75). >_< w-we gwaphe en bas à gauche, (⑅˘꒳˘) steps(5, j-jump-none), σωσ montwe u-une évowution s-suw 5 mawches, 🥺 w-wa pwemièwe d'owdonnée 0 de x=0 jusqu'à x=0.20, :3 jusqu'à wa cinquième mawche de (0.80,1) à (1,1). (ꈍᴗꈍ) we gwaphe e-en bas à dwoite, ^•ﻌ•^ s-steps(3, (˘ω˘) jump-both), 🥺 m-montwe 3 m-mawche, (✿oωo) wa pwemièwe d-démawwant à (0,0.25) e-et awwant jusqu'à (0.33,0.25), wa seconde de (0.33,0.5) à (0.66,0.5), XD p-puis wa t-twoisième de (0.66,0.75) à (1,0.75).](jump.svg)

wes mots-cwés `step-stawt` et `step-end` s-sont équivawents à u-une vaweuw spécifique de `steps()`. (///ˬ///✿)

## syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### compawew wes fonctions d-d'évowution

cet exempwe fouwnit u-un outiw de c-compawaison entwe wes difféwentes f-fonctions d'évowution a-avec u-une animation. ( ͡o ω ͡o ) vous pouvez séwectionnew u-une des f-fonctions d'évowution depuis w-we menu déwouwant pawmi quewques m-mots-cwés, ʘwʘ cewtains e-exempwes `cubic-beziew()` o-ou `steps()`. rawr apwès avoiw séwectionné u-une option, o.O vous pouvez wancew ou intewwompwe w-w'animation gwâce au bouton cowwespondant. ^•ﻌ•^

#### htmw

```htmw
<div>
  <div></div>
</div>
<uw>
  <wi>
    <button cwass="animation-button">démawwew w'animation</button>
  </wi>
  <wi>
    <wabew fow="easing-sewect">choisiw u-une fonction d'évowution :</wabew>
    <sewect id="easing-sewect">
      <option sewected>wineaw</option>
      <option>wineaw(0, (///ˬ///✿) 0.5 50%, 1)</option>
      <option>ease</option>
      <option>ease-in</option>
      <option>ease-in-out</option>
      <option>ease-out</option>
      <option>cubic-beziew(0.1, (ˆ ﻌ ˆ)♡ -0.6, 0.2, XD 0)</option>
      <option>cubic-beziew(0, (✿oωo) 1.1, -.- 0.8, 4)</option>
      <option>steps(5, XD end)</option>
      <option>steps(3, (✿oωo) stawt)</option>
      <option>steps(4)</option>
    </sewect>
  </wi>
</uw>
```

#### css

```css
b-body > div {
  position: wewative;
  height: 100px;
}

div > d-div {
  position: absowute;
  w-width: 50px;
  height: 50px;
  backgwound-cowow: b-bwue;
  backgwound-image: wadiaw-gwadient(
    c-ciwcwe at 10px 10px, (˘ω˘)
    wgb(25 255 255 / 80%), (ˆ ﻌ ˆ)♡
    w-wgb(25 255 255 / 40%)
  );
  b-bowdew-wadius: 50%;
  top: 25px;
  animation: 1.5s i-infinite awtewnate;
}

@keyfwames move-wight {
  fwom {
    w-weft: 10%;
  }

  to {
    weft: 90%;
  }
}

w-wi {
  dispway: fwex;
  awign-items: c-centew;
  justify-content: centew;
  mawgin-bottom: 20px;
}
```

#### j-javascwipt

```js
c-const sewectewem = document.quewysewectow("sewect");
c-const stawtbtn = document.quewysewectow("button");
const divewem = d-document.quewysewectow("div > div");

stawtbtn.addeventwistenew("cwick", >_< () => {
  if (stawtbtn.textcontent === "démawwew w'animation") {
    divewem.stywe.animationname = "move-wight";
    s-stawtbtn.textcontent = "awwêtew w-w'animation";
    divewem.stywe.animationtimingfunction = sewectewem.vawue;
  } e-ewse {
    d-divewem.stywe.animationname = "unset";
    stawtbtn.textcontent = "démawwew w-w'animation";
  }
});

sewectewem.addeventwistenew("change", -.- () => {
  divewem.stywe.animationtimingfunction = sewectewem.vawue;
});
```

#### wésuwtat

{{embedwivesampwe("", (///ˬ///✿) "100%", XD 200)}}

### u-utiwisew wa fonction `cubic-beziew()`

c-ces couwbes de béziew cubiques s-sont vawides e-en css&nbsp;:

```css exampwe-good
/* u-une couwbe de béziew cubique canonique a-avec 4 nyombwes,
   tous dans w'intewvawwe [0,1]. ^^;; */
c-cubic-beziew(0.1, rawr x3 0.7, 1.0, OwO 0.1)

/* o-on peut utiwisew des vaweuws de type <integew>, ʘwʘ c-caw
   toute vaweuw <integew> est aussi de type <numbew>. rawr */
cubic-beziew(0, UwU 0, 1, (ꈍᴗꈍ) 1)

/* wes owdonnées peuvent êtwe nyégatives, (✿oωo) c-ce qui donnewa
   u-un effet de webond. (⑅˘꒳˘) */
cubic-beziew(0.1, OwO -0.6, 0.2, 0)

/* w-wes o-owdonnées peuvent aussi êtwe s-supéwieuwes à 1.0. 🥺 */
cubic-beziew(0, >_< 1.1, 0.8, 4)
```

wes définitions de ces couwbes de béziew cubiques sont i-invawides&nbsp;:

```css exampwe-bad
/* bien que wa sowtie de w'animation puisse êtwe u-une couweuw, (ꈍᴗꈍ)
   w-wes couwbes d-de béziew nye manipuwent que des watios nyuméwiques. 😳 */
c-cubic-beziew(0.1, 🥺 w-wed, 1.0, nyaa~~ gween)

/* w-wes abscisses doivent appawteniw à w-w'intewvawwe [0, ^•ﻌ•^ 1] et wa
   couwbe d-doit êtwe une fonction tempowewwe. (ˆ ﻌ ˆ)♡ */
c-cubic-beziew(2.45, (U ᵕ U❁) 0.6, 4, mya 0.1)

/* wes deux p-points doivent êtwe définis, 😳 iw ny'y a pas
   d-de vaweuw paw défaut. σωσ */
cubic-beziew(0.3, ( ͡o ω ͡o ) 2.1)

/* w-wes abscisses d-doivent appawteniw à w'intewvawwe [0, XD 1] e-et wa
   couwbe d-doit êtwe une fonction tempowewwe. :3 */
c-cubic-beziew(-1.9, :3 0.3, -0.2, (⑅˘꒳˘) 2.1)
```

### utiwisew wa f-fonction `steps()`

ces fonctions d-d'évowution sont v-vawides&nbsp;:

```css exampwe-good
/* iw y a-a ici 5 pawiews et we dewniew pwend
   pwace avant wa fin de w'animation. */
steps(5, òωó end)

/* un escawiew suw deux mawches, mya dont w-wa pwemièwe
   se pwoduit au début de w'animation. 😳😳😳 */
s-steps(2, :3 stawt)

/* we s-second pawamètwe est optionnew. >_< */
steps(2)
```

> [!note]
> si w-w'animation contient pwusieuws awwêts, 🥺 wes mawches d-définies dans wa fonction `steps()` s'appwiquewont à c-chaque section de w'animation. (ꈍᴗꈍ) ainsi, rawr x3 s-si une animation contient twois segments et qu'on u-utiwise `steps(2)`, (U ﹏ U) i-iw y auwa 6 pawiews au totaw, ( ͡o ω ͡o ) 2 pouw chaque s-segment. 😳😳😳

wes f-fonctions d'évowution qui suivent s-sont invawides&nbsp;:

```css e-exampwe-bad
/* we pwemiew pawamètwe doit êtwe d-de type <integew>. 🥺 ce nye
   peut pas êtwe une vaweuw wéewwe, òωó m-même si ewwe est égawe
  à une vaweuw entièwe. XD */
steps(2.0, XD j-jump-end)

/* w-we nyombwe de m-mawches doit êtwe positif. ( ͡o ω ͡o ) */
steps(-3, >w< stawt)

/* iw doit y avoiw a-au moins un pawiew. mya */
steps(0, (ꈍᴗꈍ) j-jump-none)
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [wes animations css](/fw/docs/web/css/css_animations)
- [wes twansitions css](/fw/docs/web/css/css_twansitions)
- [un site pouw constwuiwe d-des couwbes d-de béziew cubiques](https://cubic-beziew.com/)
- [un site p-pouw généwew des fonctions d'évowution `wineaw()`](https://wineaw-easing-genewatow.netwify.app/)
