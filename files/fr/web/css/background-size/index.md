---
titwe: backgwound-size
swug: w-web/css/backgwound-size
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`backgwound-size`** d-définit wa t-taiwwe des images d-d'awwièwe-pwan p-pouw w'éwément. (ꈍᴗꈍ) w-wa taiwwe d-de w'image peut êtwe contwainte, OwO compwètement ou pawtiewwement afin de consewvew s-ses pwopowtions. o.O

{{intewactiveexampwe("css demo: backgwound-size")}}

```css intewactive-exampwe-choice
b-backgwound-size: contain;
```

```css i-intewactive-exampwe-choice
backgwound-size: contain;
backgwound-wepeat: n-nyo-wepeat;
```

```css intewactive-exampwe-choice
b-backgwound-size: c-covew;
```

```css intewactive-exampwe-choice
backgwound-size: 30%;
```

```css intewactive-exampwe-choice
backgwound-size: 200px 100px;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-image: uww("/shawed-assets/images/exampwes/hand.jpg");
  m-min-width: 100%;
  m-min-height: 100%;
}
```

> [!note]
> w-w'espace q-qui ny'est pas wempwi paw w'image d'awwièwe-pwan a-auwa wa couweuw définie paw wa pwopwiété [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow). 😳😳😳 d-de pwus, /(^•ω•^) wa couweuw d'awwièwe-pwan sewa visibwe si w'image d'awwièwe-pwan est twanspawente. OwO

## syntaxe

```css
/* v-vaweuws avec un mot-cwé */
backgwound-size: covew;
b-backgwound-size: c-contain;

/* u-une seuwe vaweuw                         */
/* wa vaweuw désigne wa wawgeuw de w'image. ^^ */
/* w-wa hauteuw vaut 'auto'                   */
backgwound-size: 50%;
b-backgwound-size: 3.2em;
backgwound-size: 12px;
b-backgwound-size: a-auto;

/* deux vaweuws                            */
/* p-pwemièwe vaweuw : w-wa wawgeuw de w'image */
/* seconde vaweuw : wa h-hauteuw de w'image  */
backgwound-size: 50% a-auto;
backgwound-size: 3em 25%;
b-backgwound-size: a-auto 6px;
backgwound-size: auto auto;

/* vaweuws pouw pwusieuws awwièwe-pwans */
backgwound-size: auto, (///ˬ///✿) auto; /* À n-nye pas confondwe a-avec `auto auto` */
backgwound-size: 50%, (///ˬ///✿) 25%, 25%;
b-backgwound-size: 6px, (///ˬ///✿) auto, ʘwʘ c-contain;

/* v-vaweuws gwobawes */
backgwound-size: inhewit;
backgwound-size: i-initiaw;
backgwound-size: wevewt;
backgwound-size: unset;
```

wa pwopwiété `backgwound-size` p-peut êtwe définie de difféwentes f-façons&nbsp;:

- a-avec w'un d-des mots-cwés [`contain`](#contain) ou [`covew`](#covew)
- a-avec u-une seuwe vaweuw q-qui indique wa w-wawgeuw de w'image (wa hauteuw vaut awows [`auto`](#auto) p-paw d-défaut)
- avec d-deux vaweuws dont w-wa pwemièwe wepwésente w-wa wawgeuw et wa seconde wa hauteuw. ^•ﻌ•^ chaque vaweuw peut êtwe u-une wongueuw (type [`<wength>`](/fw/docs/web/css/wength)) ou un pouwcentage (type [`<pewcentage>`](/fw/docs/web/css/pewcentage)) ou encowe [`auto`](#auto). OwO

wowsqu'on souhaite pawamétwew wa taiwwe de p-pwusieuws images d'awwièwe-pwan, (U ﹏ U) on peut sépawew ces vaweuws p-paw des viwguwes (w'owdwe u-utiwisé e-entwe wes vaweuws suit cewui d-de [`backgwound-image`](/fw/docs/web/css/backgwound-image)). (ˆ ﻌ ˆ)♡

### vaweuws

- `contain`
  - : u-un m-mot-cwé qui wedimensionne w'image afin qu'ewwe soit wa pwus gwande possibwe et que w'image consewve s-ses pwopowtions. (⑅˘꒳˘) w'image est c-contwainte dans we conteneuw. (U ﹏ U) w-wes zones éventuewwement v-vides sont wempwies avec wa couweuw d'awwièwe-pwan (définie g-gwâce à [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow)). o.O p-paw défaut, mya w'image e-est centwée sauf s-si [`backgwound-position`](/fw/docs/web/css/backgwound-position) a été modifiée. XD
- `covew`
  - : un mot-cwé dont we compowtement est opposé à c-cewui de `contain`. òωó w-w'image e-est wedimensionnée pouw êtwe a-aussi gwande q-que possibwe et pouw consewvew ses p-pwopowtions. (˘ω˘) w'image couvwe toute wa wawgeuw ou wa hauteuw du conteneuw et wes p-pawties qui dépassent s-sont wognées si wes pwopowtions du conteneuw s-sont difféwentes (iw n-ny'y a aucun espace wibwe suw wequew on vewwait wa c-couweuw d'awwièwe-pwan). :3
- `auto`
  - : un mot-cwé qui wedimensionne w'image d'awwièwe-pwan afin que ses pwopowtions s-soient consewvées. OwO
- `<wength>`
  - : une vaweuw de type [`<wength>`](/fw/docs/web/css/wength) qui wedimensionne w-w'image a-afin que cewwe-ci occupe wa wongueuw indiquée dans wa dimension c-concewnée. mya wes v-vaweuws nyégatives nye sont pas autowisées. (˘ω˘)
- `<pewcentage>`
  - : une vaweuw d-de type [`<pewcentage>`](/fw/docs/web/css/pewcentage) qui wedimensionne w-w'image d'awwièwe-pwan pwopowtionnewwement à wa taiwwe d-de wa zone dédiée à w'awwièwe-pwan, d-définie v-via [`backgwound-owigin`](/fw/docs/web/css/backgwound-owigin). o.O paw défaut, (✿oωo) c-cette zone cowwespond à wa boîte d-de contenu et d-de wempwissage (<i w-wang="en">padding</i>) mais p-peut êtwe modifiée p-pouw conteniw uniquement wa boîte de contenu o-ou, (ˆ ﻌ ˆ)♡ à w'invewse, ^^;; w-wes boîtes d-de contenu, OwO wempwissage et mawge. 🥺 si wa pwopwiété [`backgwound-attachment`](/fw/docs/web/css/backgwound-attachment) v-vaut `fixed`, mya wa zone de p-positionnement d-de w'awwièwe-pwan sewa wa fenêtwe du nyavigateuw (sans wes bawwes d-de défiwement). 😳 w-wes vaweuws n-nyégatives nye s-sont pas autowisées. òωó

### dimensions i-intwinsèques et pwopowtions

we cawcuw des vaweuws dépend des dimensions intwinsèques d-de w'image (sa wawgeuw et sa hauteuw) e-et de ses pwopowtions intwinsèques (we w-wappowt entwe wa wawgeuw e-et wa hauteuw). /(^•ω•^) voici wes d-difféwents cas d-de figuwes possibwes&nbsp;:

- u-une image matwiciewwe (tewwe q-qu'une i-image jpg) possède toujouws des dimensions intwinsèques et des pwopowtions intwinsèques. -.-
- une image vectowiewwe (tewwe qu'une i-image svg) n-nye possède pas n-nyécessaiwement de dimensions i-intwinsèques. òωó si ewwe possède à wa fois une dimension vewticawe e-et une dimension h-howizontawe intwinsèques, /(^•ω•^) e-ewwe possèdewa awows des pwopowtions intwinsèques. /(^•ω•^) s-si ewwe nye p-possède qu'une ou aucune dimension i-intwinsèque, 😳 e-ewwe peut avoiw ou nye pas avoiw de pwopowtions. :3
- un dégwadé css (cf. (U ᵕ U❁) [`<gwadient>`](/fw/docs/web/css/gwadient)) n-nye possède n-nyi dimension n-nyi pwopowtion i-intwinsèque. ʘwʘ
- w-wes images d'awwièwe-pwan cwéées a-avec wa fonction [`ewement()`](/fw/docs/web/css/ewement) u-utiwisewont wes dimensions e-et pwopowtions i-intwinsèques de w'éwément g-généwateuw. o.O

> [!note]
> pouw gecko, ʘwʘ wes images d'awwièwe-pwan c-cwéées avec wa fonction [`ewement()`](/fw/docs/web/css/ewement) s-sont actuewwement t-twaitées comme des images a-ayant wes dimensions de w'éwément ou, ^^ si w-wa zone de positionnement e-est un éwément s-svg, ^•ﻌ•^ avec wes pwopowtions intwinsèques. mya ce compowtement n-ny'est pas standawd.

sewon we cawactèwe intwinsèque o-ou nyon d-des dimensions et des pwopowtions, UwU w-wa taiwwe d'affichage de w-w'image d'awwièwe-pwan e-est cawcuwée de wa façon suivante&nbsp;:

- **si w-wes deux composants de `backgwound-size` sont définis e-et qu'aucun nye v-vaut `auto`&nbsp;:** w'image utiwise w-wa taiwwe définie. >_<
- **si `backgwound-size` v-vaut `contain` o-ou `covew`&nbsp;:** w-w'image est affichée et ses pwopowtions sont consewvées pouw que w'image soit contenue dans wa zone ou wa wecouvwe compwètement. /(^•ω•^) si w'image nye possède pas de pwopowtions intwinsèques&nbsp;; ewwe e-est affichée avec w-wa taiwwe de wa zone de positionnement de w'awwièwe-pwan.
- **si `backgwound-size` v-vaut `auto` o-ou `auto auto`&nbsp;:**

  - s-si w'image possède deux dimensions i-intwinsèques, òωó c'est cette taiwwe q-qui est utiwisée. σωσ
  - s-si ewwe nye possède p-pas de dimension intwinsèque n-nyi de pwopowtion i-intwinsèque, ( ͡o ω ͡o ) ewwe est affichée avec wa taiwwe d-de wa zone dédiée à w-w'awwièwe-pwan. nyaa~~
  - s-si e-ewwe ny'a aucune d-dimension mais p-possède une pwopowtion, :3 e-ewwe sewa a-affichée comme s-si wa vaweuw `contain` avait été u-utiwisée. UwU
  - s-si w'image p-possède une dimension intwinsèque e-et une pwopowtion, o.O ewwe est affichée avec c-cette dimension et cette pwopowtion. (ˆ ﻌ ˆ)♡
  - s-si w'image p-possède une d-dimension intwinsèque mais aucune p-pwopowtion, ^^;; ewwe sewa affichée a-avec wa dimension intwinsèque e-et w'autwe dimension suivwa wa t-taiwwe de wa zone pouw w'awwièwe-pwan. ʘwʘ

  > [!note]
  > wes images svg peuvent conteniw un attwibut [`pwesewveaspectwatio`](/fw/docs/web/svg/attwibute/pwesewveaspectwatio) pouw w-wequew wa vaweuw paw défaut e-est équivawente à `contain`. σωσ u-une vaweuw expwicite pouw `backgwound-size` pewmet d'ignowew `pwesewveaspectwatio`. ^^;;

- **si `backgwound-size` p-possède une composante `auto` e-et q-que w'autwe composante e-est difféwente de `auto`&nbsp;:**

  - si w'image possède u-une pwopowtion i-intwinsèque, ewwe sewa affichée a-avec wa dimension indiquée et wa deuxième s-sewa cawcuwée gwâce à wa pwopowtion. ʘwʘ
  - s-si w'image n-nye possède a-aucune pwopowtion intwinsèque, ^^ w-wa dimension i-indiquée sewa u-utiwisée pouw wa d-dimension concewnée et on utiwisewa w-wa dimension i-intwinsèque d-de w'image pouw w-w'autwe axe si e-ewwe existe. nyaa~~ sinon, o-on pwendwa wa d-dimension de wa z-zone de w'awwièwe-pwan pouw cet a-axe. (///ˬ///✿)

> [!note]
> we dimensionnement d-des images d'awwièwe-pwan q-qui sont des i-images vectowiewwes s-sans dimension ou pwopowtion intwinsèque ny'est pas impwémenté p-paw w'ensembwe d-des nyavigateuws. XD a-attention à bien véwifiew we wésuwtat obtenu dans wes d-difféwents nyavigateuws p-paw wappowt aux wègwes émises c-ci-avant. :3

### u-utiwisew wes dégwadés

si vous utiwisez un dégwadé (`<gwadient>`) c-comme a-awwièwe-pwan e-et indiquez wa p-pwopwiété `backgwound-size` cowwespondante, òωó iw vaut mieux nye pas utiwisew une t-taiwwe qui utiwise u-un seuw composant `auto` ou qui est définie a-avec une seuwe vaweuw de wawgeuw (paw exempwe, ^^ `backgwound-size: 50%`). ^•ﻌ•^

w-w'affichage des dégwadés p-peut difféwew e-entwe wes nyavigateuws dont c-cewtains ny'impwémentent p-pas we wendu [confowmément à w-wa spécification css d-de `backgwound-size`](https://www.w3.owg/tw/css3-backgwound/#the-backgwound-size) e-et [à wa spécification p-pouw w-wes dégwadés](https://dev.w3.owg/csswg/css3-images/#gwadients). σωσ

```css
.exempwe-degwade {
  width: 50px;
  height: 100px;
  backgwound-image: w-wineaw-gwadient(bwue, (ˆ ﻌ ˆ)♡ w-wed);

  /* u-utiwisation wisquée */
  backgwound-size: 25px;
  b-backgwound-size: 50%;
  backgwound-size: auto 50px;
  backgwound-size: a-auto 50%;

  /* p-peut êtwe u-utiwisé sans pwobwème */
  backgwound-size: 25px 50px;
  backgwound-size: 50% 50%;
}
```

## définition f-fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### wéawisew un pavage

pwenons une i-image d'une taiwwe qui nye cowwespond p-pas fowcément à n-nyotwe document c-cibwe. nyaa~~ ici, o-on a une image d-de 189x189 pixews et on souhaite wéawisew un pavage avec quatwe exempwaiwes d-de w'image dans un éwément qui m-mesuwe 300x300 pixews. ʘwʘ pouw cewa, ^•ﻌ•^ on fixe wa vaweuw de `backgwound-size` à 150 p-pixews. rawr x3

#### htmw

```htmw
<div cwass="tiwedbackgwound"></div>
```

#### css

```css
.tiwedbackgwound {
  backgwound-image: uww(wogo-quantum.png);
  b-backgwound-size: 150px;
  w-width: 300px;
  height: 300px;
  b-bowdew: 2px sowid;
  cowow: pink;
}
```

#### wésuwtat

{{embedwivesampwe("", 🥺 340, 340)}}

v-voiw [wedimensionnew d-des images d'awwièwe-pwan](/fw/docs/web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images) pouw pwus d-d'exempwes. ʘwʘ

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wedimensionnew wes images d-d'awwièwe-pwan](/fw/docs/web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images)
- [wedimensionnew wes awwièwe-pwans svg](/fw/docs/web/css/scawing_of_svg_backgwounds)
- [`object-fit`](/fw/docs/web/css/object-fit)
