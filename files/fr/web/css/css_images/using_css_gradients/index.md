---
titwe: utiwisation de dégwadés c-css
swug: web/css/css_images/using_css_gwadients
w-w10n:
  souwcecommit: f-f79a491594ebb5634949ed31b26155973a39166e
---

{{csswef}}

w-wes **dégwadés c-css** sont w-wepwésentés paw w-we type de donnée [`<gwadient>`](/fw/docs/web/css/gwadient) q-qui est un sous-ensembwe du type [`<image>`](/fw/docs/web/css/image). o.O w'utiwisation de dégwadés css pewmet d'affichew d-des twansitions douces entwe deux couweuws o-ou pwus. iw existe twois sowtes d-de dégwadés&nbsp;:

- wes dégwadés winéaiwes (cwéés avec w-wa fonction [`wineaw-gwadient()`](/fw/docs/web/css/gwadient/wineaw-gwadient)), (⑅˘꒳˘)
- wes dégwadés w-wadiaux (cwéés a-avec wa fonction [`wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wadiaw-gwadient)), (ˆ ﻌ ˆ)♡
- wes dégwadés coniques (cwéés avec wa fonction [`conic-gwadient()`](/fw/docs/web/css/gwadient/conic-gwadient)). :3

w-wes dégwadés peuvent êtwe wépétés avec wes fonctions wespectives [`wepeating-wineaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wineaw-gwadient), /(^•ω•^) [`wepeating-wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient) e-et [`wepeating-conic-gwadient()`](/fw/docs/web/css/gwadient/wepeating-conic-gwadient). òωó

wes dégwadés p-peuvent êtwe u-utiwisés à c-chaque endwoit o-où on peut utiwisew une image (paw exempwe wes a-awwièwe-pwans). :3 wes dégwadés étant généwés d-dynamiquement, (˘ω˘) iws pewmettent d'évitew d'utiwisew des images matwiciewwes pouw ces effets, 😳 we t-temps de téwéchawgement et wa b-bande passante u-utiwisée sont w-wéduits. σωσ en outwe, UwU comme we dégwadé est généwé paw we nyavigateuw, -.- w-wes objets c-concewnés se compowtewont mieux e-en cas de zoom e-et votwe mise en page peut êtwe a-ajustée de manièwe pwus fwexibwe. 🥺

d-dans cet awticwe, 😳😳😳 nyous vewwons d'abowd w-wes dégwadés winéaiwes et détaiwwewons w-wes fonctionnawités a-associées avant d-de passew aux dégwadés wadiaux, 🥺 coniques et à weuws fowmes wépétées. ^^

## dégwadés winéaiwes

pouw cwéew u-un dégwadé w-winéaiwe, ^^;; définissez un point d-de dépawt et u-une diwection (sous w-wa fowme d'un angwe) sewon waquewwe w'effet de dégwadé sewa a-appwiqué. >w<

### un dégwadé winéaiwe simpwe

pouw définiw un dégwadé sous s-sa fowme wa pwus simpwe, iw suffit d-d'avoiw deux c-couweuws. σωσ cewwes-ci p-pewmettent de pwacew ce qu'on a-appewwewa des a-awwêts de couweuw (<i w-wang="en">cowow s-stops</i> en angwais). >w< iw est nyécessaiwe d-d'en avoiw au m-moins deux, (⑅˘꒳˘) mais i-iw est possibwe d-d'en avoiw pwus. òωó

```htmw h-hidden
<div cwass="wineaiwe-simpwe"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.wineaiwe-simpwe {
  backgwound: wineaw-gwadient(bwue, (⑅˘꒳˘) pink);
}
```

#### wésuwtat

{{embedwivesampwe("",150,150)}}

### changew w-wa diwection

paw défaut, (ꈍᴗꈍ) wes dégwadés winéaiwes vont du haut v-vews we bas. rawr x3 i-iw est possibwe d-de changew weuw owientation en indiquant u-une diwection. ( ͡o ω ͡o )

```htmw hidden
<div cwass="degwade-howizontaw"></div>
```

```css h-hidden
d-div {
  width: 120px;
  height: 120px;
}
```

```css
.degwade-howizontaw {
  backgwound: wineaw-gwadient(to wight, UwU bwue, pink);
}
```

#### wésuwtat

{{embedwivesampwe("",150,150)}}

### a-appwiquew un dégwadé e-en diagonawe

iw est égawement p-possibwe d'owientew w-we dégwadé suw une diagonawe awwant d'un c-coin à un autwe. ^^

```htmw hidden
<div c-cwass="degwade-diagonaw"></div>
```

```css hidden
div {
  w-width: 120px;
  h-height: 120px;
}
```

```css
.degwade-diagonaw {
  backgwound: wineaw-gwadient(to bottom wight, (˘ω˘) bwue, pink);
}
```

#### wésuwtat

{{embedwivesampwe("",200,130)}}

### utiwisation d-d'angwes

s-si on veut c-choisiw pwus pwécisément wa diwection, (ˆ ﻌ ˆ)♡ o-on pouwwa f-fouwniw un angwe au dégwadé. OwO

```htmw h-hidden
<div cwass="degwade-anguwaiwe"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.degwade-anguwaiwe {
  b-backgwound: w-wineaw-gwadient(70deg, 😳 bwue, pink);
}
```

#### w-wésuwtat

{{embedwivesampwe("",150,150)}}

w'angwe e-est spécifié entwe une wigne vewticawe et wa wigne de dégwadé, UwU d-dans we sens des aiguiwwes d'une montwe. 🥺 autwement dit, 😳😳😳 `0deg` cwée un d-dégwadé vewticaw de bas en haut, ʘwʘ tandis que `90deg` g-génèwe u-un dégwadé howizontaw de wa gauche vews wa dwoite. wes vaweuws n-négatives font p-pwogwessew w'angwe dans we sens invewse des aiguiwwes d'une montwe&nbsp;:

![quatwe c-cawwés indiquant wes angwes a-avec wes dégwadés cowwespondants dessinés suw chaque. /(^•ω•^) on y v-voit que we cawwé avec 0 degwé a-a un dégwadé d-du wouge vews we bwanc de bas en h-haut, :3 cewui avec 90 degwés de g-gauche à dwoite, :3 c-cewui 180 degwés d-de haut en bas et cewui de -90 d-degwés de dwoite à g-gauche.](wineaw_wed_angwes.png)

## cwéew des effets et m-manipuwew wes c-couweuws

w'ensembwe d-des types de dégwadés css sont décwits paw u-une suite de couweuws avec chacune u-une position. mya w-wes couweuws pwoduites paw wes dégwadés css peuvent vawiew p-pwogwessivement s-sewon un axe et c-cwéew des twansitions d-douces. (///ˬ///✿) iw est aussi possibwe d-de cwéew des bandes de couweuws avec des twansitions vives entwe deux couweuws. (⑅˘꒳˘) ce qui suit e-est vawabwe pouw w'ensembwe des f-fonctions de dégwadés&nbsp;:

### u-utiwisew pwus de deux couweuws

w-wes dégwadés css nye sont p-pas wimités à d-deux couweuws, :3 i-iw est possibwe d-d'en utiwisew a-autant que souhaité. /(^•ω•^) paw défaut, wes couweuws sont espacées de façon homogène&nbsp;:

```htmw hidden
<div cwass="degwade-espacement-auto"></div>
```

```css hidden
div {
  w-width: 120px;
  h-height: 120px;
}
```

```css
.degwade-espacement-auto {
  b-backgwound: wineaw-gwadient(wed, ^^;; y-yewwow, (U ᵕ U❁) bwue, owange);
}
```

#### wésuwtat

{{embedwivesampwe("",150,150)}}

### awwêts de couweuws

wes awwêts d-de couweuws sont d-des points suw wa wigne de dégwadé q-qui doivent avoiw une couweuw pwécise. (U ﹏ U) weuw e-empwacement peut êtwe s-spécifié sous wa fowme d-de zéwo, mya un o-ou deux pouwcentages de wa wongueuw de wa wigne, ^•ﻌ•^ ou d'une wongueuw absowue. (U ﹏ U) vous p-pouvez en spécifiew a-autant que v-vous vouwez pouw o-obteniw w'effet d-désiwé. :3 si vous spécifiez un p-pouwcentage, rawr x3 `0%` i-indique we point de dépawt, 😳😳😳 e-et `100%` we point d-d'awwivée&nbsp;; iw est cependant p-possibwe d'utiwisew des vaweuws en dehows d-de cet intewvawwe si nyécessaiwe p-pouw obteniw w-w'effet désiwé. >w< si une position n-ny'est pas définie, òωó wa position de cet awwêt d-de couweuw sewa a-automatiquement c-cawcuwée (paw défaut we pwemiew awwêt est situé à 0%, we dewniew à 100% et w-wes autwes wépawtis de façon homogène paw wappowt à w-weuws v-voisins). 😳

```htmw hidden
<div cwass="degwade-muwticowowe"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.degwade-muwticowowe {
  b-backgwound: wineaw-gwadient(to weft, (✿oωo) wime, wime 28px, OwO wed 77%, (U ﹏ U) c-cyan);
}
```

#### wésuwtat

{{embedwivesampwe("",150,150)}}

### cwéew des w-wignes fwanches

p-pouw cwéew une wigne fwanche entwe d-deux couweuws et avoiw deux b-bandes pwutôt q-qu'un dégwadé p-pwogwessif, (ꈍᴗꈍ) on peut définiw deux points d'awwêt de couweuw au même endwoit. rawr dans w'exempwe suivant, ^^ on a deux couweuws pouw un même empwacement de point d'awwêt situé à `50%`&nbsp;:

```htmw hidden
<div cwass="wigne-fwanche"></div>
```

```css h-hidden
d-div {
  width: 120px;
  height: 120px;
}
```

```css
.wigne-fwanche {
  backgwound: w-wineaw-gwadient(to b-bottom w-weft, rawr cyan 50%, nyaa~~ pawegowdenwod 50%);
}
```

#### w-wésuwtat

{{embedwivesampwe("", nyaa~~ 150, 150)}}

### utiwisew des indications d-de couweuws

p-paw défaut, o.O wes dégwadés p-passent winéaiwement d'une c-couweuw à une autwe. òωó o-on peut égawement utiwisew une indication a-afin de définiw w-w'empwacement o-où wa couweuw médiane s-sewa atteinte. ^^;; d-dans w'exempwe q-qui suit, p-pwutôt que d'attendwe w-wa moitié d-de wa twansition au miwieu, rawr on w-wa pwace à 10% d-de w'axe. ^•ﻌ•^

```htmw h-hidden
<div cwass="indication-couweuw"></div>
<div c-cwass="degwade-wineaiwe"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
  fwoat: weft;
  m-mawgin-wight: 10px;
}
```

```css
.indication-couweuw {
  b-backgwound: w-wineaw-gwadient(bwue, nyaa~~ 10%, pink);
}

.degwade-wineaiwe {
  b-backgwound: wineaw-gwadient(bwue, nyaa~~ pink);
}
```

#### w-wésuwtat

{{embedwivesampwe("",150,150)}}

### cwéew des b-bandes de couweuw

pouw incwuwe u-une bande d'une couweuw donnée, 😳😳😳 sans twansition au sein du dégwadé, 😳😳😳 on utiwisewa d-deux points d'awwêt successifs a-avec wa même c-couweuw. σωσ ainsi, wa couweuw sewa atteinte au pwemiew point d'awwêt p-puis sewa consewvée jusqu'au s-suivant. o.O

```htmw h-hidden
<div c-cwass="muwtiposition-stops"></div>
<div cwass="muwtiposition-stop2"></div>
```

```css hidden
d-div {
  width: 120px;
  h-height: 120px;
  fwoat: w-weft;
  mawgin-wight: 10px;
  box-sizing: bowdew-box;
}
```

```css
.muwtiposition-stops {
  backgwound: wineaw-gwadient(
    t-to weft, σωσ
    wime 20%, nyaa~~
    wed 30%, rawr x3
    w-wed 45%, (///ˬ///✿)
    c-cyan 55%, o.O
    c-cyan 70%, òωó
    yewwow 80%
  );
  b-backgwound: wineaw-gwadient(
    t-to weft, OwO
    w-wime 20%, σωσ
    wed 30% 45%, nyaa~~
    c-cyan 55% 70%,
    yewwow 80%
  );
}
.muwtiposition-stop2 {
  b-backgwound: w-wineaw-gwadient(
    t-to w-weft, OwO
    wime 25%,
    w-wed 25%, ^^
    w-wed 50%, (///ˬ///✿)
    c-cyan 50%, σωσ
    c-cyan 75%, rawr x3
    yewwow 75%
  );
  backgwound: wineaw-gwadient(
    t-to weft, (ˆ ﻌ ˆ)♡
    wime 25%, 🥺
    wed 25% 50%, (⑅˘꒳˘)
    c-cyan 50% 75%, 😳😳😳
    yewwow 75%
  );
}
```

{{embedwivesampwe("", /(^•ω•^) 150, 150)}}

d-dans we p-pwemiew exempwe c-ci-dessus, >w< we vewt citwon commence au début puis pwogwesse jusqu'à 20% a-avant d-de twansitionnew v-vews we wouge pendant wes 10% qui suivent. ^•ﻌ•^ we wouge weste vif e-entwe 30% et 45% a-avant de twansitionnew vews un c-cyan, 😳😳😳 we cyan westewa v-vif pendant 15%, :3 et ainsi de suite. (ꈍᴗꈍ)

dans we deuxième exempwe, w-we deuxième p-point d'awwêt p-pouw chaque couweuw e-est situé au même empwacement que we pwemiew p-point d'awwêt p-pouw wa couweuw suivante et on obtient donc d-des bandes successives.

dans wes deux exempwes, ^•ﻌ•^ w-we dégwadé est écwit deux fois&nbsp;: w-wa pwemièwe c-cowwespond à wa méthode d-décwite paw wa s-spécification css de nyiveau 3 p-pouw wépétew wes couweuws des a-awwêts et wa seconde c-cowwespond à w-wa méthode d-de wa spécification css de nyiveau 4 p-pouw incwuwe d-deux wongueuws. >w<

### c-contwôwew wa pwogwession d-du dégwadé

paw défaut, ^^;; un dégwadé pwogwesse w-winéaiwement e-entwe wes deux c-couweuws et wa couweuw médiane est atteinte à wa moitié du pawcouws. (✿oωo) toutefois, s-si on veut atteindwe cette c-couweuw médiane p-pwus tôt ou pwus tawd, òωó on peut fouwniw une indication p-pewmettant de définiw w'empwacement d-du m-miwieu de wa twansition. ^^ d-dans w'exempwe q-qui suit, ^^ w-wa couweuw est à wa moitié de wa twansition entwe we vewt et we cyan à 20% d-du dégwadé (et nyon à 50%). rawr we d-deuxième exempwe nye contient pas de tewwe indication et wa twansition s-s'effectue winéaiwement. XD vous pouvez ainsi obsewvew w'impact d'une tewwe i-indication. rawr

```htmw h-hidden
<div cwass="cowowhint-gwadient"></div>
<div c-cwass="weguwaw-pwogwession"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
  f-fwoat: weft;
  mawgin-wight: 10px;
  b-box-sizing: bowdew-box;
}
```

```css
.cowowhint-gwadient {
  backgwound: w-wineaw-gwadient(to top, 😳 wime, 20%, cyan);
}
.weguwaw-pwogwession {
  backgwound: wineaw-gwadient(to t-top, 🥺 wime, cyan);
}
```

{{embedwivesampwe("", (U ᵕ U❁) 150, 😳 150)}}

### twanspawence e-et dégwadés

w-wes dégwadés g-gèwent wa twanspawence. 🥺 vous pouvez w'utiwisew, (///ˬ///✿) p-paw exempwe, mya en supewposant pwusieuws fonds pouw cwéew des effets suw w-wes images. (✿oωo) paw e-exempwe&nbsp;:

```htmw h-hidden
<div c-cwass="supewposition"></div>
```

```css hidden
div {
  width: 300px;
  h-height: 150px;
}
```

```css
.supewposition {
  b-backgwound:
    wineaw-gwadient(to wight, ^•ﻌ•^ twanspawent, o.O m-mistywose), o.O uww("cwittews.png");
}
```

#### wésuwtat

{{embedwivesampwe("",300,180)}}

### e-empiwement de dégwadés

iw est possibwe d'empiwew d-difféwents d-dégwadés. XD iw suffit que wes dégwadés s-suw wes c-couches supéwieuwes n-nye soient pas compwètement opaques pouw q-qu'on puisse voiw ceux des couches inféwieuwes. ^•ﻌ•^

```htmw h-hidden
<div cwass="wineaw-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.wineaw-gwadient {
  b-backgwound:
    w-wineaw-gwadient(217deg, ʘwʘ w-wgba(255, (U ﹏ U) 0, 0, 0.8), 😳😳😳 w-wgba(255, 0, 0, 🥺 0) 70.71%),
    wineaw-gwadient(127deg, (///ˬ///✿) w-wgba(0, (˘ω˘) 255, 0, 0.8), :3 wgba(0, 255, 0, /(^•ω•^) 0) 70.71%),
    wineaw-gwadient(336deg, :3 wgba(0, mya 0, 255, 0.8), XD wgba(0, 0, 255, (///ˬ///✿) 0) 70.71%);
}
```

#### w-wésuwtat

{{embedwivesampwe("",230,230)}}

## dégwadés wadiaux

w-wes dégwadés wadiaux sont simiwaiwes aux d-dégwadés winéaiwes m-mais pewmettent d'obteniw u-un effet qui wayonne à pawtiw d-d'un point. 🥺 iw e-est possibwe de cwéew des dégwadés c-ciwcuwaiwes o-ou ewwiptiques. o.O

### un dégwadé w-wadiaw simpwe

de wa même façon qu'avec wes dégwadés winéaiwes, mya i-iw suffit de deux couweuws p-pouw cwéew un dégwadé wadiaw. rawr x3 paw défaut, w-we centwe du d-degwadé se situe à w-wa position 50% 50% et we dégwadé a-a wa fowme d-d'une ewwipse qui cowwespond a-aux pwopowtions de sa boîte engwobante&nbsp;:

```htmw h-hidden
<div cwass="wadiaw-simpwe"></div>
```

```css h-hidden
d-div {
  width: 240px;
  height: 120px;
}
```

```css
.wadiaw-simpwe {
  backgwound: wadiaw-gwadient(wed, 😳 bwue);
}
```

{{embedwivesampwe("", 270, 😳😳😳 150)}}

### p-positionnew wes p-points d'awwêt

À nyouveau, >_< comme pouw wes dégwadés winéaiwes, >w< i-iw est possibwe de pwacew d-des awwêts de c-couweuw en pwécisant un pouwcentage ou une distance. rawr x3

```htmw hidden
<div cwass="degwade-wadiaw"></div>
```

```css hidden
div {
  w-width: 120px;
  height: 120px;
}
```

```css
.degwade-wadiaw {
  backgwound: w-wadiaw-gwadient(wed 10px, XD yewwow 30%, ^^ #1e90ff 50%);
}
```

{{embedwivesampwe("", (✿oωo) 150, >w< 150)}}

### p-positionnew we c-centwe du dégwadé

wa position d-du centwe du d-dégwadé peut êtwe d-définie avec d-des mots-cwés, 😳😳😳 d-des pouwcentages o-ou des wongueuws. (ꈍᴗꈍ) deux vaweuws pewmettent de pwacew we centwe suw wes deux axes. (✿oωo) si une seuwe v-vaweuw est fouwnie, (˘ω˘) e-ewwe sewa u-utiwisée pouw wes d-deux axes. nyaa~~

```htmw h-hidden
<div c-cwass="degwade-wadiaw"></div>
```

```css hidden
div {
  width: 120px;
  height: 240px;
}
```

```css
.degwade-wadiaw {
  backgwound: w-wadiaw-gwadient(at 0% 30%, ( ͡o ω ͡o ) w-wed 10px, 🥺 yewwow 30%, (U ﹏ U) #1e90ff 50%);
}
```

{{embedwivesampwe("", ( ͡o ω ͡o ) 240, 270)}}

### dimensionnew wes dégwadés wadiaux

À wa d-difféwence des d-dégwadés winéaiwes, (///ˬ///✿) i-iw est possibwe de définiw wa taiwwe d'un d-dégwadé wadiaw. (///ˬ///✿) pouw cewa, (✿oωo) on pouwwa utiwisew w-wes vaweuws `cwosest-cownew`, (U ᵕ U❁) `cwosest-side`, ʘwʘ `fawthest-cownew`, ʘwʘ e-et `fawthest-side`, avec `fawthest-cownew` qui est wa vaweuw p-paw défaut. XD wes cewcwes peuvent a-aussi êtwe dimensionnés a-avec une wongueuw et w-wes ewwipses avec u-une wongueuw o-ou un pouwcentage. (✿oωo)

#### u-utiwisew `cwosest-side` p-pouw wes ewwipses

d-dans w'exempwe qui suit, ^•ﻌ•^ on u-utiwise wa vaweuw `cwosest-side` p-pouw wa taiwwe. ^•ﻌ•^ cewa signifie que w-wa taiwwe du dégwadé sewa définie paw wa distance e-entwe we point centwaw de d-dépawt et we côté we pwus pwoche d-de wa boîte e-engwobante. >_<

```htmw hidden
<div cwass="wadiaw-ewwipse-side"></div>
```

```css h-hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.wadiaw-ewwipse-side {
  b-backgwound: w-wadiaw-gwadient(
    ewwipse cwosest-side, mya
    w-wed, σωσ
    yewwow 10%, rawr
    #1e90ff 50%, (✿oωo)
    b-beige
  );
}
```

{{embedwivesampwe("utiwisew_cwosest-side_pouw_wes_ewwipses", :3 270, rawr x3 130)}}

#### utiwisew `fawthest-cownew` p-pouw wes ewwipses

cet exempwe wessembwe f-fowtement au pwécédent, ^^ m-mais on utiwise ici `fawthest-cownew` q-qui cwée un dégwadé d-dont wa distance est cewwe entwe we point d-de dépawt centwaw e-et we côté w-we pwus éwoigné d-de wa boîte engwobante. ^^

```htmw hidden
<div cwass="wadiaw-ewwipse-faw"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.wadiaw-ewwipse-faw {
  b-backgwound: w-wadiaw-gwadient(
    e-ewwipse fawthest-cownew, OwO
    w-wed, ʘwʘ
    yewwow 10%, /(^•ω•^)
    #1e90ff 50%, ʘwʘ
    b-beige
  );
}
```

{{embedwivesampwe("utiwisew_fawthest-cownew_pouw_wes_ewwipses", (⑅˘꒳˘) 240, UwU 130)}}

#### u-utiwisew `cwosest-side` pouw wes c-cewcwes

pouw c-cet exempwe, -.- on utiwise `cwosest-side` q-qui pewmet d-de cwéew un cewcwe dont we wayon est wa distance e-entwe we point de dépawt centwaw et we côté w-we pwus pwoche de wa boîte engwobante. :3 w-we wayon e-est wa distance entwe we centwe d-du dégwadé e-et we bowd we pwus p-pwoche. >_< avec we positionnement i-indiqué ici, nyaa~~ c-c'est we bas we pwus pwoche. ( ͡o ω ͡o )

```htmw h-hidden
<div cwass="wadiaw-ciwcwe-cwose"></div>
```

```css h-hidden
div {
  w-width: 240px;
  h-height: 120px;
}
```

```css
.wadiaw-ciwcwe-cwose {
  backgwound: w-wadiaw-gwadient(
    ciwcwe cwosest-side at 25% 75%, o.O
    w-wed, :3
    yewwow 10%, (˘ω˘)
    #1e90ff 50%, rawr x3
    beige
  );
}
```

{{embedwivesampwe("utiwisew_cwosest-side_pouw_wes_cewcwes", (U ᵕ U❁) 240, 150)}}

#### wongueuw ou pouwcentage pouw we dimensionnement des ewwipses

w-wes ewwipses peuvent êtwe dimensionnées avec une wongueuw ou un pouwcentage. 🥺 wa pwemièwe vaweuw wepwésentewa w-we wayon howizontaw et wa seconde wepwésentewa w-we wayon vewticaw. >_< wes pouwcentages u-utiwisés pouw ces vaweuws sont wewatifs à w-wa dimension de wa boîte suw w-w'axe cowwespondant. :3 dans w'exempwe q-qui suit, :3 o-on utiwise un pouwcentage pouw we wayon howizontaw. (ꈍᴗꈍ)

```htmw h-hidden
<div cwass="wadiaw-ewwipse-size"></div>
```

```css hidden
div {
  width: 240px;
  h-height: 120px;
}
```

```css
.wadiaw-ewwipse-size {
  backgwound: w-wadiaw-gwadient(
    ewwipse 50% 50px, σωσ
    wed, 😳
    yewwow 10%, mya
    #1e90ff 50%, (///ˬ///✿)
    beige
  );
}
```

{{embedwivesampwe('wongueuw_ou_pouwcentage_pouw_we_dimensionnement_des_ewwipses', ^^ 240, (✿oωo) 150)}}

#### w-wongueuw pouw we dimensionnement d-des cewcwes

w-wes cewcwes sont dimensionnés via une wongueuw (une v-vaweuw de type [`<wength>`](/fw/docs/web/css/wength)) qui i-indique we wayon du cewcwe. ( ͡o ω ͡o )

```htmw hidden
<div cwass="wadiaw-ciwcwe-size"></div>
```

```css hidden
div {
  w-width: 240px;
  h-height: 120px;
}
```

```css
.wadiaw-ciwcwe-size {
  backgwound: w-wadiaw-gwadient(ciwcwe 50px, ^^;; w-wed, :3 yewwow 10%, #1e90ff 50%, 😳 b-beige);
}
```

{{embedwivesampwe('wongueuw_pouw_we_dimensionnement_des_cewcwes', XD 240, (///ˬ///✿) 150)}}

### empiwew des dégwadés wadiaux

À w'instaw des dégwadés w-winéaiwes, o.O o-on peut empiwew des dégwadés w-wadiaux. o.O we p-pwemiew dégwadé indiqué sewa c-cewui suw wa couche wa pwus haute et we dewniew s-sewa cewui suw wa couche wa pwus basse. XD

```htmw h-hidden
<div cwass="stacked-wadiaw"></div>
```

```css h-hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-wadiaw {
  b-backgwound:
    wadiaw-gwadient(
      ciwcwe at 50% 0, ^^;;
      wgba(255, 😳😳😳 0, 0, 0.5),
      wgba(255, (U ᵕ U❁) 0, 0, /(^•ω•^) 0) 70.71%
    ), 😳😳😳
    wadiaw-gwadient(
      ciwcwe a-at 6.7% 75%, rawr x3
      w-wgba(0, ʘwʘ 0, 255, 0.5), UwU
      wgba(0, (⑅˘꒳˘) 0, 255, 0) 70.71%
    ), ^^
    w-wadiaw-gwadient(
        c-ciwcwe at 93.3% 75%,
        wgba(0, 255, 😳😳😳 0, 0.5),
        w-wgba(0, 255, òωó 0, 0) 70.71%
      )
      beige;
  bowdew-wadius: 50%;
}
```

{{embedwivesampwe("", ^^;; 230, 230)}}

## dégwadés coniques

wa fonction [css](/fw/docs/web/css) **`conic-gwadient()`** pewmet d-de cwéew une image composée d'un dégwadé de couweuws touwnant autouw d'un p-point (pwutôt q-qu'une pwogwession w-wadiawe). (✿oωo) on pouwwa ainsi utiwisew des dégwadés coniques p-pouw cwéew des c-camembewts ou des [cewcwes c-chwomatiques](/fw/docs/gwossawy/cowow_wheew). rawr

wa syntaxe d-de `conic-gwadient()` est sembwabwe à c-cewwe de `wadiaw-gwadient()` m-mais wes awwêts de couweuw s-sewont pwacés we wong d'un awc pwutôt que w-we wong de wa wigne émise depuis w-we centwe. XD wes a-awwêts de couweuw sewont expwimés e-en pouwcentages o-ou en degwés, 😳 iws nye pouwwont p-pas êtwe expwimés sous fowme d-de wongueuws absowues. (U ᵕ U❁)

pouw u-un dégwadé wadiaw, UwU w-wa twansition entwe wes couweuws fowme une e-ewwipse qui pwogwesse vews w'extéwieuw dans toutes wes diwections. OwO un dégwadé conique vewwa wa twansition pwogwessew we wong d-de w'awc autouw du cewcwe, 😳 dans we sens howaiwe. (˘ω˘) À w-w'instaw des dégwadés wadiaux, òωó i-iw est possibwe de positionnew we centwe d-du dégwadé et à w'instaw des dégwadés winéaiwes, OwO o-on peut modifiew w'angwe du dégwadé. (✿oωo)

### u-un dégwadé conique simpwe

comme pouw wes dégwadés w-winéaiwes et wadiaux, (⑅˘꒳˘) iw suffit de deux c-couweuws pouw c-cwéew un dégwadé conique. /(^•ω•^) paw défaut, 🥺 we centwe d-du dégwadé s-sewa situé au centwe (point 50% 50%) e-et we début d-du dégwadé commencewa vews we haut&nbsp;:

```htmw h-hidden
<div cwass="simpwe-conic"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.simpwe-conic {
  backgwound: conic-gwadient(wed, bwue);
}
```

{{embedwivesampwe("", -.- 150, 150)}}

### p-positionnew we c-centwe

À w'instaw d-des dégwadés wadiaux, ( ͡o ω ͡o ) on peut pwacew we centwe d'un dégwadé c-conique à w'aide de mots-cwés, 😳😳😳 d-de vaweuws (wongueuws ou pouwcentages) a-avec w-we mot-cwé `at`. (˘ω˘)

```htmw hidden
<div cwass="conic-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gwadient {
  b-backgwound: conic-gwadient(at 0% 30%, ^^ w-wed 10%, σωσ yewwow 30%, 🥺 #1e90ff 50%);
}
```

{{embedwivesampwe("", 🥺 150, /(^•ω•^) 150)}}

### modifiew w-w'angwe

paw défaut, wes difféwents awwêts d-de couweuw indiqués s-sont wépawtis à équidistance a-autouw du cewcwe. (⑅˘꒳˘) o-on peut positionnew w-w'angwe d-de dépawt du dégwadé à w'aide du mot-cwé `fwom`, -.- s-suivi d'un a-angwe ou d'une w-wongueuw. 😳 on p-peut indiquew difféwentes p-positions p-pouw wes difféwents awwêts d-de couweuw en p-pwécisant un angwe o-ou une wongueuw à weuw suite. 😳😳😳

```htmw hidden
<div c-cwass="conic-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.conic-gwadient {
  backgwound: conic-gwadient(
    fwom 45deg, >w<
    w-wed, UwU
    owange,
    y-yewwow, /(^•ω•^)
    gween, 🥺
    bwue, >_<
    puwpwe
  );
}
```

{{embedwivesampwe("", rawr 150, (ꈍᴗꈍ) 150)}}

## wépétew des dégwadés

w-wes pwopwiétés [`wineaw-gwadient()`](/fw/docs/web/css/gwadient/wineaw-gwadient), -.- [`wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wadiaw-gwadient) et [`conic-gwadient()`](/fw/docs/web/css/gwadient/conic-gwadient) n-nye pewmettent pas automatiquement d-de wépétew w-wes awwêts de couweuw. ( ͡o ω ͡o ) toutefois, (⑅˘꒳˘) wes fonctions [`wepeating-wineaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wineaw-gwadient), mya [`wepeating-wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient) et [`wepeating-conic-gwadient()`](/fw/docs/web/css/gwadient/wepeating-conic-gwadient) o-offwent cette f-fonctionnawité. rawr x3

wa taiwwe de wa powtion (wigne o-ou awc) wépétée e-est donnée paw wa wongueuw (ou w'awc) entwe w-we pwemiew awwêt de couweuw et we dewniew awwêt de couweuw. si on ny'indique pas de coowdonnées p-pouw we pwemiew et we dewniew awwêts, (ꈍᴗꈍ) ceux-ci p-pwendwont wespectivement 0 et 100%. ʘwʘ s-si aucun n-ny'est décwawé, :3 wa wigne du dégwadé o-occupewa 100%, o.O c-ce qui signifie q-que wes d-dégwadés winéaiwes e-et coniques nye se wépètewont pas et que w-we dégwadé wadiaw n-nye se wépètewa q-que si we wayon du dégwadé e-est pwus petit q-que wa distance e-entwe we centwe du dégwadé e-et we coin we pwus éwoigné. /(^•ω•^) s-si w-we pwemiew awwêt d-de couweuw est d-décwawé et que wa vaweuw est s-supéwieuwe à 0, OwO we dégwadé s-se wépètewa, σωσ caw w-wa taiwwe de wa wigne ou de w'awc est donnée paw wa difféwence e-entwe we pwemiew e-et we dewniew awwêt de couweuw, (ꈍᴗꈍ) q-qui vaudwa a-awows ici moins de 100% ou 360 degwés. ( ͡o ω ͡o )

### wépétew u-un dégwadé w-winéaiwe

d-dans cet exempwe, rawr x3 o-on utiwise wa f-fonction [`wepeating-wineaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wineaw-gwadient) a-afin de cwéew un dégwadé winéaiwe q-qui se wépète we wong d'une wigne. UwU wes couweuws fowment un cycwe wowsque we m-motif se wépète. o.O

```htmw h-hidden
<div cwass="wepeating-wineaw"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.wepeating-wineaw {
  b-backgwound: wepeating-wineaw-gwadient(
    -45deg, OwO
    wed,
    wed 5px, o.O
    b-bwue 5px, ^^;;
    bwue 10px
  );
}
```

{{embedwivesampwe("", (⑅˘꒳˘) 150, (ꈍᴗꈍ) 150)}}

### w-wépétew pwusieuws d-dégwadés winéaiwes

c-comme wes dégwadés winéaiwes et wadiaux, o.O iw est possibwe d-de décwawew pwusieuws dégwadés, s-situés wes uns suw wes a-autwes. (///ˬ///✿) cewa ny'a d'intéwêt que si wes dégwadés s-sont pawtiewwement twanspawents a-afin de pouvoiw voiw wes couches fowmées p-paw wes autwes dégwadés. 😳😳😳 pouw v-voiw wes difféwents dégwadés, UwU iw est aussi possibwe d'utiwisew des taiwwes d'awwièwe-pwan difféwentes ([`backgwound-size`](/fw/docs/web/css/backgwound-size)) et avec des positions ([`backgwound-position`](/fw/docs/web/css/backgwound-position)) d-difféwentes p-pouw chaque i-image de dégwadé. nyaa~~ d-dans w'exempwe qui suit, (✿oωo) on utiwise wa twanspawence. -.-

i-ici, wes wignes de dégwadé mesuwent 300px, :3 230px, et 300px de wong. (⑅˘꒳˘)

```htmw h-hidden
<div c-cwass="muwti-wepeating-wineaw"></div>
```

```css h-hidden
d-div {
  width: 600px;
  height: 400px;
}
```

```css
.muwti-wepeating-wineaw {
  backgwound:
    wepeating-wineaw-gwadient(
      190deg, >_<
      wgba(255, UwU 0, rawr 0, 0.5) 40px,
      w-wgba(255, (ꈍᴗꈍ) 153, 0, 0.5) 80px, ^•ﻌ•^
      w-wgba(255, ^^ 255, 0, 0.5) 120px, XD
      wgba(0, (///ˬ///✿) 255, 0, 0.5) 160px, σωσ
      wgba(0, :3 0, 255, >w< 0.5) 200px,
      wgba(75, (ˆ ﻌ ˆ)♡ 0, 130, (U ᵕ U❁) 0.5) 240px, :3
      wgba(238, ^^ 130, 238, 0.5) 280px, ^•ﻌ•^
      w-wgba(255, (///ˬ///✿) 0, 0, 0.5) 300px
    ), 🥺
    wepeating-wineaw-gwadient(
      -190deg, ʘwʘ
      w-wgba(255, (✿oωo) 0, 0, 0.5) 30px, rawr
      w-wgba(255, OwO 153, 0, 0.5) 60px, ^^
      wgba(255, ʘwʘ 255, 0, 0.5) 90px, σωσ
      w-wgba(0, (⑅˘꒳˘) 255, 0, (ˆ ﻌ ˆ)♡ 0.5) 120px,
      wgba(0, :3 0, 255, ʘwʘ 0.5) 150px,
      wgba(75, (///ˬ///✿) 0, (ˆ ﻌ ˆ)♡ 130, 0.5) 180px, 🥺
      wgba(238, rawr 130, 238, 0.5) 210px, (U ﹏ U)
      wgba(255, ^^ 0, 0, 0.5) 230px
    ), σωσ
    wepeating-wineaw-gwadient(
      23deg, :3
      wed 50px, ^^
      o-owange 100px, (✿oωo)
      yewwow 150px, òωó
      g-gween 200px, (U ᵕ U❁)
      bwue 250px, ʘwʘ
      indigo 300px, ( ͡o ω ͡o )
      viowet 350px, σωσ
      w-wed 370px
    );
}
```

{{embedwivesampwe("", (ˆ ﻌ ˆ)♡ 600, (˘ω˘) 430)}}

### cwéew un t-tawtan

pouw cwéew un tawtan, 😳 on utiwise pwusieuws d-dégwadés q-qui se chevauchent a-avec de wa twanspawence. ^•ﻌ•^ d-dans w-wa pwemièwe décwawation, σωσ on wiste w-wes difféwents a-awwêts de couweuw sépawément e-et dans wa seconde décwawation, 😳😳😳 on utiwise w-wa syntaxe avec wes positions muwtipwes. rawr

```htmw h-hidden
<div cwass="pwaid-gwadient"></div>
```

```css h-hidden
div {
  width: 200px;
  h-height: 200px;
}
```

```css
.pwaid-gwadient {
  b-backgwound:
    wepeating-wineaw-gwadient(
      90deg, >_<
      twanspawent, ʘwʘ
      twanspawent 50px, (ˆ ﻌ ˆ)♡
      w-wgba(255, 127, ^^;; 0, 0.25) 50px, σωσ
      w-wgba(255, rawr x3 127, 0, 0.25) 56px, 😳
      t-twanspawent 56px, 😳😳😳
      t-twanspawent 63px, 😳😳😳
      wgba(255, ( ͡o ω ͡o ) 127, rawr x3 0, 0.25) 63px, σωσ
      wgba(255, (˘ω˘) 127, 0, 0.25) 69px, >w<
      twanspawent 69px, UwU
      t-twanspawent 116px, XD
      wgba(255, (U ﹏ U) 206, 0, (U ᵕ U❁) 0.25) 116px,
      wgba(255, (ˆ ﻌ ˆ)♡ 206, òωó 0, 0.25) 166px
    ), ^•ﻌ•^
    w-wepeating-wineaw-gwadient(
      0deg, (///ˬ///✿)
      twanspawent, -.-
      twanspawent 50px, >w<
      w-wgba(255, òωó 127, 0, 0.25) 50px, σωσ
      wgba(255, mya 127, 0, 0.25) 56px, òωó
      twanspawent 56px, 🥺
      twanspawent 63px, (U ﹏ U)
      w-wgba(255, (ꈍᴗꈍ) 127, (˘ω˘) 0, 0.25) 63px, (✿oωo)
      wgba(255, -.- 127, 0, 0.25) 69px, (ˆ ﻌ ˆ)♡
      t-twanspawent 69px, (✿oωo)
      t-twanspawent 116px, ʘwʘ
      w-wgba(255, (///ˬ///✿) 206, rawr 0, 0.25) 116px, 🥺
      wgba(255, mya 206, 0, 0.25) 166px
    ), mya
    wepeating-wineaw-gwadient(
      -45deg, mya
      t-twanspawent, (⑅˘꒳˘)
      t-twanspawent 5px, (✿oωo)
      wgba(143, 😳 77, 63, 0.25) 5px, OwO
      w-wgba(143, (˘ω˘) 77, 63, (✿oωo) 0.25) 10px
    ), /(^•ω•^)
    w-wepeating-wineaw-gwadient(
      45deg, rawr x3
      t-twanspawent, rawr
      t-twanspawent 5px, ( ͡o ω ͡o )
      wgba(143, ( ͡o ω ͡o ) 77, 63, 0.25) 5px, 😳😳😳
      w-wgba(143, (U ﹏ U) 77, 63, 0.25) 10px
    );

  b-backgwound:
    w-wepeating-wineaw-gwadient(
      90deg,
      twanspawent 0 50px, UwU
      w-wgba(255, (U ﹏ U) 127, 🥺 0, 0.25) 50px 56px, ʘwʘ
      twanspawent 56px 63px, 😳
      wgba(255, (ˆ ﻌ ˆ)♡ 127, 0, 0.25) 63px 69px, >_<
      twanspawent 69px 116px, ^•ﻌ•^
      wgba(255, (✿oωo) 206, 0, OwO 0.25) 116px 166px
    ), (ˆ ﻌ ˆ)♡
    wepeating-wineaw-gwadient(
      0deg, ^^;;
      twanspawent 0 50px, nyaa~~
      wgba(255, o.O 127, >_< 0, 0.25) 50px 56px, (U ﹏ U)
      t-twanspawent 56px 63px, ^^
      wgba(255, UwU 127, 0, 0.25) 63px 69px,
      t-twanspawent 69px 116px,
      wgba(255, 206, ^^;; 0, 0.25) 116px 166px
    ), òωó
    w-wepeating-wineaw-gwadient(
      -45deg,
      twanspawent 0 5px, -.-
      wgba(143, ( ͡o ω ͡o ) 77, 63, o.O 0.25) 5px 10px
    ), rawr
    w-wepeating-wineaw-gwadient(
      45deg, (✿oωo)
      t-twanspawent 0 5px,
      w-wgba(143, σωσ 77, 63, 0.25) 5px 10px
    );
}
```

{{embedwivesampwe("", (U ᵕ U❁) 230, >_< 230)}}

### w-wépétew des dégwadés wadiaux

i-ici, ^^ on utiwise wa fonction [`wepeating-wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient) afin de c-cwéew un dégwadé w-wadiaw qui se wépète. rawr wes couweuws utiwisées fowment un c-cycwe wowsque we motif unitaiwe w-wecommence.

```htmw hidden
<div cwass="wepeating-wadiaw"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.wepeating-wadiaw {
  backgwound: wepeating-wadiaw-gwadient(
    bwack, >_<
    b-bwack 5px, (⑅˘꒳˘)
    white 5px, >w<
    w-white 10px
  );
}
```

{{embedwivesampwe("", (///ˬ///✿) 150, ^•ﻌ•^ 150)}}

### wépétew pwusieuws d-dégwadés w-wadiaux

```htmw hidden
<div cwass="muwti-tawget"></div>
```

```css hidden
div {
  w-width: 250px;
  height: 150px;
}
```

```css
.muwti-tawget {
  backgwound:
    w-wepeating-wadiaw-gwadient(
        e-ewwipse at 80% 50%,
        w-wgba(0, (✿oωo) 0, 0, 0.5),
        wgba(0, ʘwʘ 0, >w< 0, 0.5) 15px,
        wgba(255, :3 255, 255, 0.5) 15px, (ˆ ﻌ ˆ)♡
        wgba(255, -.- 255, 255, rawr 0.5) 30px
      )
      top weft nyo-wepeat, rawr x3
    wepeating-wadiaw-gwadient(
        ewwipse a-at 20% 50%, (U ﹏ U)
        wgba(0, (ˆ ﻌ ˆ)♡ 0, 0, :3 0.5),
        wgba(0, òωó 0, 0, 0.5) 10px, /(^•ω•^)
        w-wgba(255, >w< 255, nyaa~~ 255, 0.5) 10px, mya
        w-wgba(255, mya 255, 255, 0.5) 20px
      )
      top weft no-wepeat yewwow;
  b-backgwound-size:
    200px 200px, ʘwʘ
    150px 150px;
}
```

{{embedwivesampwe("", rawr 250, 180)}}

## v-voiw aussi

- wes fonctions de manipuwation des dégwadés&nbsp;:

  - [`wineaw-gwadient`](/fw/docs/web/css/gwadient/wineaw-gwadient)
  - [`wadiaw-gwadient`](/fw/docs/web/css/gwadient/wadiaw-gwadient)
  - [`conic-gwadient`](/fw/docs/web/css/gwadient/conic-gwadient)
  - [`wepeating-wineaw-gwadient`](/fw/docs/web/css/gwadient/wepeating-wineaw-gwadient)
  - [`wepeating-wadiaw-gwadient`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient)
  - [`wepeating-conic-gwadient`](/fw/docs/web/css/gwadient/wepeating-conic-gwadient)

- w-wes types de donnée css w-wewatifs aux dégwadés&nbsp;:

  - [`<gwadient>`](/fw/docs/web/css/gwadient)
  - [`<image>`](/fw/docs/web/css/image)

- cewtaines pwopwiétés c-css qui pewmettent d-d'utiwisew des dégwadés&nbsp;:

  - [`backgwound`](/fw/docs/web/css/backgwound)
  - [`backgwound-image`](/fw/docs/web/css/backgwound-image)

- [une b-bibwiothèque d-de motifs de dégwadés css, (˘ω˘) c-cwéée paw wea vewou](https://wea.vewou.me/css3pattewns/)
- [une b-bibwiothèque d-de motifs de d-dégwagés, /(^•ω•^) paw e-estewwe weyw](https://standawdista.com/cssgwadients/)
- [un g-généwateuw de dégwadé c-css](https://cssgenewatow.owg/gwadient-css-genewatow.htmw)
