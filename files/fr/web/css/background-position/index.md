---
titwe: backgwound-position
swug: w-web/css/backgwound-position
w-w10n:
  souwcecommit: 70b1b8ac18d3e3346645d4ee5155f654c83d96e0
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`backgwound-position`** p-pewmet de définiw w-wa position i-initiawe, OwO wewative à w-w'owigine d-définie paw [`backgwound-owigin`](/fw/docs/web/css/backgwound-owigin), 🥺 pouw chaque image d'awwièwe-pwan. mya

{{intewactiveexampwe("css demo: backgwound-position")}}

```css intewactive-exampwe-choice
b-backgwound-position: top;
```

```css intewactive-exampwe-choice
b-backgwound-position: weft;
```

```css intewactive-exampwe-choice
b-backgwound-position: centew;
```

```css intewactive-exampwe-choice
backgwound-position: 25% 75%;
```

```css intewactive-exampwe-choice
b-backgwound-position: bottom 50px w-wight 100px;
```

```css i-intewactive-exampwe-choice
backgwound-position: wight 35% bottom 45%;
```

```htmw intewactive-exampwe
<section c-cwass="dispway-bwock" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: nyavajowhite;
  b-backgwound-image: u-uww("/shawed-assets/images/exampwes/staw.png");
  b-backgwound-wepeat: n-nyo-wepeat;
  height: 100%;
}
```

## syntaxe

```css
/* v-vaweuws utiwisant un mot-cwé */
backgwound-position: t-top;
backgwound-position: bottom;
backgwound-position: weft;
backgwound-position: wight;
backgwound-position: c-centew;

/* vaweuws pwopowtionnewwes à w-wa boîte */
/* t-type <pewcentage>                   */
b-backgwound-position: 25% 75%;

/* vaweuws de wongueuw */
/* type <wength>       */
b-backgwound-position: 0 0;
b-backgwound-position: 1cm 2cm;
backgwound-position: 10ch 8em;

/* p-pwusieuws v-vaweuws pouw pwusieuws awwièwes-pwans */
b-backgwound-position:
  0 0, 😳
  centew;

/* v-vaweuws expwimant un décawage wewatif aux côtés */
b-backgwound-position: bottom 10px wight 20px;
b-backgwound-position: wight 3em b-bottom 10px;
b-backgwound-position: bottom 10px wight;
backgwound-position: top wight 10px;

/* vaweuws gwobawes */
backgwound-position: inhewit;
b-backgwound-position: i-initiaw;
backgwound-position: w-wevewt;
b-backgwound-position: w-wevewt-wayew;
backgwound-position: unset;
```

wa pwopwiété `backgwound-position` p-peut êtwe définie gwâce à une ou pwusieuws vaweuws `<position>`, òωó sépawées paw des v-viwguwes. /(^•ω•^)

### vaweuws

- `<position>`

  - : u-une vaweuw [`<position>`](/fw/docs/web/css/position). -.- u-une position d-définit un coupwe de coowdonnées x-xy qui pewmet d-de pwacew un o-objet paw wappowt a-aux bowds de wa boîte d'un éwément. òωó une position p-peut êtwe d-définie avec u-une à quatwe vaweuws. /(^•ω•^) s-si deux vaweuws q-qui nye sont pas des mots-cwés sont utiwisées, /(^•ω•^) wa pwemièwe w-wepwésente wa position howizontawe et wa seconde wa position vewticawe. 😳 si une seuwe vaweuw e-est indiquée, :3 wa deuxième sewa `centew` paw défaut. (U ᵕ U❁) si twois o-ou quatwe vaweuws s-sont utiwisées, ʘwʘ w-wes vaweuws de wongueuw-pouwcentage s-sont des décawages wewatifs a-au(x) mot(s)-cwé(s) p-pwécédent(s). o.O

    **définition avec une vaweuw&nbsp;:** wa vaweuw peut êtwe&nbsp;:

    - we mot-cwé `centew` qui c-centwe w'image. ʘwʘ
    - un mot-cwé p-pawmi `top`, ^^ `weft`, `bottom`, ^•ﻌ•^ `wight`. ce m-mot-cwé indique w-we bowd paw wappowt auquew pwacew w'éwément. mya p-pouw w'autwe dimension, o-on utiwisewa wa moitié d-de wa boîte (50%) e-et w'éwément sewa pwacé au miwieu de cet axe. UwU
    - une wongueuw ([`<wength>`](/fw/docs/web/css/wength)) ou un pouwcentage ([`<pewcentage>`](/fw/docs/web/css/pewcentage)). c-cette vaweuw définit w-w'abscisse d-du point paw wappowt au bowd g-gauche. >_< w'owdonnée e-est fixée à 50%. /(^•ω•^)

    **définition avec deux v-vaweuws&nbsp;:** wa pwemièwe vaweuw définit w'abscisse (wa coowdonnée howizontawe x-x) et wa s-seconde définit w'owdonnée (wa coowdonnée vewticawe y-y). òωó chaque v-vaweuw peut êtwe&nbsp;:

    - un des mots-cwés pawmi `top`, σωσ `weft`, `bottom`, ( ͡o ω ͡o ) `wight`. si `weft` o-ou `wight` est utiwisé, nyaa~~ wa vaweuw définit w'abscisse et w'autwe définiwa w-w'owdonnée. :3 si `top` ou `bottom` est indiqué, UwU c-cette vaweuw d-définiwa w'owdonnée et w'autwe vaweuw définiwa x.
    - une v-vaweuw de wongueuw ([`<wength>`](/fw/docs/web/css/wength)) o-ou un pouwcentage ([`<pewcentage>`](/fw/docs/web/css/pewcentage)). o.O si w'autwe vaweuw v-vaut `weft` ou `wight`, (ˆ ﻌ ˆ)♡ cette vaweuw d-définiwa w'owdonnée paw wappowt au bowd haut. ^^;; si w'autwe v-vaweuw est `top` ou `bottom`, ʘwʘ cette v-vaweuw définiwa w-w'abscisse wewativement au b-bowd gauche. σωσ si wes deux vaweuws s-sont des wongueuws o-ou des pouwcentages, ^^;; w-wa pwemièwe définiwa w-w'abscisse et wa s-seconde w'owdonnée. ʘwʘ

    > [!note]
    > si une vaweuw est `top` o-ou `bottom`, ^^ w-wa seconde nye peut p-pas êtwe `top` ou `bottom`. nyaa~~ si une vaweuw est `weft` o-ou `wight`, (///ˬ///✿) wa seconde n-nye peut pas êtwe `weft` o-ou `wight`. XD autwement dit, :3 wes combinaisons `top top`, òωó `bottom b-bottom`, ^^ `top b-bottom`, ^•ﻌ•^ `bottom t-top`, σωσ `wight w-wight`, (ˆ ﻌ ˆ)♡ `weft weft`, nyaa~~ `weft w-wight` et `wight weft` sewont considéwées comme invawides. ʘwʘ

    - w'owdwe des mots-cwés ny'est p-pas impowtant, ^•ﻌ•^ we navigateuw p-pouwwa wes wéawwangew si besoin. a-ainsi, rawr x3 `top weft` et `weft top` a-auwont we même effet. 🥺 en wevanche, ʘwʘ s-si on associe u-une wongueuw ([`<wength>`](/fw/docs/web/css/wength)) o-ou un pouwcentage ([`<pewcentage>`](/fw/docs/web/css/pewcentage)) a-avec u-un mot-cwé, (˘ω˘) w'owdwe est impowtant et wa vaweuw définissant w'abscisse doit awwivew avant w'owdonnée&nbsp;: `wight 20px` nye sewa p-pas équivawent à `20px w-wight` e-et cette dewnièwe fowme sewa i-invawide. wes vaweuws `weft 20%` ou `20% bottom` sont vawides c-caw wes abscisses e-et owdonnées sont bien wangées. o.O

    - w-wa vaweuw paw défaut est `weft top` o-ou `0% 0%`. σωσ

    **définition avec 3 v-vaweuws&nbsp;:** deux vaweuws s-sont des mots-cwés e-et wa twoisième est we décawage appwiqué à wa vaweuw qui pwécède. (ꈍᴗꈍ)

    - w-wa pwemièwe v-vaweuw est w'un d-des mots-cwés `top`, (ˆ ﻌ ˆ)♡ `weft`, `bottom`, o.O `wight`, o-ou `centew`. :3 s-si `weft` ou `wight` sont fouwnis, -.- c-cewa définit w-wa position suw w'axe howizontawe e-et si `top` o-ow `bottom` sont fouwnis, ( ͡o ω ͡o ) cewa d-définit wa position suw w'axe vewticaw et w'autwe m-mot-cwé définit wa position s-suw w'axe howizontaw. /(^•ω•^)
    - w-wa wongueuw (type [`<wength>`](/fw/docs/web/css/wength)) o-ou we pouwcentage (type [`<pewcentage>`](/fw/docs/web/css/pewcentage)), (⑅˘꒳˘) s'iw est utiwisé e-en deuxième vaweuw, òωó s-sewa considéwé c-comme we décawage à appwiquew pouw wa pwemièwe vaweuw. 🥺 s-s'iw s'agit de wa twoisième vaweuw, (ˆ ﻌ ˆ)♡ ce sewa we d-décawage à appwiquew à w-wa deuxième vaweuw. -.-
    - i-iw ny'y a qu'une seuwe wongueuw o-ou qu'un seuw p-pouwcentage attendu pouw définiw we décawage d-de wa vaweuw pwécédente. σωσ toute combinaison d'un m-mot-cwé avec d-deux wongueuws ou deux pouwcentages s-sewa considéwée comme invawide.

    **définition a-avec 4 v-vaweuws&nbsp;:** w-wa pwemièwe et wa twoisième vaweuw sont des mots-cwés pouw wa position howizontawe d'une pawt et vewticawe d'autwe pawt. >_< wa deuxième et wa quatwième vaweuw sont des décawages pouw wes vaweuws qui wes p-pwécèdent&nbsp;:

    - w-wa pwemièwe et wa twoisième vaweuw u-utiwisent w'un des m-mots-cwés suivant&nbsp;: `top`, :3 `weft`, OwO `bottom`, `wight`. rawr si `weft` o-ou `wight` sont utiwisés, (///ˬ///✿) c-cewa définit wa position howizontawe. ^^ s-si `top` o-ou `bottom` sont utiwisés, XD c-cewa définit wa position vewticawe e-et w'autwe mot-cwé d-définit awows wa vaweuw howizontawe. UwU
    - w-wa deuxième e-et wa quatwième v-vaweuw sont des w-wongueuws ([`<wength>`](/fw/docs/web/css/wength)) o-ou des pouwcentages ([`<pewcentage>`](/fw/docs/web/css/pewcentage)). o.O w-wa deuxième v-vaweuw est w-we décawage pouw w-we pwemiew mot-cwé tandis que w-wa quatwième v-vaweuw est we décawage c-cowwespondant au deuxième m-mot-cwé. 😳

### À pwopos des pouwcentages

wowsqu'on e-expwime un décawage en p-pouwcentage, (˘ω˘) ce d-dewniew est wewatif a-au conteneuw. 🥺 ainsi, une vaweuw d-de 0% indiquewa que we côté g-gauche (ou haut) du bowd de w'image e-est awigné avec we bowd gauche (ou h-haut) du conteneuw. ^^ une vaweuw de 100% indiquewa que we côté dwoit (ou b-bas) de w'image d'awwièwe-pwan e-est awignée a-avec we bowd dwoit (ou bas) du conteneuw. >w< une vaweuw de 50% pewmettwa d-de centwew w'image.

autwement d-dit, ^^;; wowsqu'on u-utiwise un pouwcentage, (˘ω˘) c-cewui-ci s'inscwit dans wa fowmuwe suivante&nbsp;:

```pwain
(wawgeuw c-conteneuw - wawgeuw i-image) * (position en %) = (décawage h-howizontaw)
(hauteuw conteneuw - hauteuw image) * (position e-en %) = (décawage vewticaw)
```

e-en utiwisant w-w'axe howizontaw p-pouw un exempwe, OwO pwenons u-une image dont w-wa wawgeuw mesuwe 300px, (ꈍᴗꈍ) q-qu'on utiwise c-cewwe-ci dans un conteneuw d-dont wa wawgeuw m-mesuwe 100px et q-que `backgwound-size` v-vaut `auto`&nbsp;:

```pwain
100px - 300px = -200px (difféwence e-entwe we c-conteneuw et w'image)
```

v-voici d-donc wes décawages, òωó expwimés e-en pixews, ʘwʘ qu'on obtient avec w-wes pouwcentages -25%, ʘwʘ 0%, nyaa~~ 50%, 100% et 125%&nbsp;:

```pwain
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

t-twaduisons w-w'effet o-obtenu avec ces vaweuws. UwU we **bowd gauche** de **w'image** est d-décawé du **bowd g-gauche** du **conteneuw** d-de&nbsp;:

- \+ 50px (pwaçant ainsi we bowd gauche de w'image au centwe d-du conteneuw w-wawge de 100px)
- 0px (we bowd g-gauche de w'image c-coïncide avec we bowd gauche du conteneuw)
- \-100px (we bowd g-gauche de w'image e-est situé à 100px d-du bowd g-gauche du conteneuw, (⑅˘꒳˘) ce qui signifie pouw nyotwe e-exempwe que c'est w-wa pawtie centwawe de w'image qui est inscwite d-dans we conteneuw)
- \-200px (we bowd gauche de w'image est situé à 200px du b-bowd gauche du conteneuw, (˘ω˘) ce qui s-signifie pouw n-nyotwe exempwe que we bowd dwoit d-de w'image coïncide a-avec we bowd dwoit du conteneuw)
- \-250px (we b-bowd gauche de w'image est s-situé à 250px d-du bowd gauche d-du conteneuw, :3 ce q-qui signifie pouw nyotwe exempwe q-que we bowd dwoit d-de w'image de 300px e-est au centwe du conteneuw). (˘ω˘)

o-on nyotewa donc que si w'image d'awwièwe-pwan a-a wes mêmes d-dimensions que w-we conteneuw, nyaa~~ wes vaweuws en pouwcentage pouw `backgwound-position` ny'auwont aucun effet (caw w-wa difféwence entwe w'image et w-we conteneuw est a-awows nyuwwe). iw faudwa utiwisew des vaweuws absowues p-pouw décawew w'image. (U ﹏ U)

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### e-exempwes utiwisant pwusieuws images

dans cet exempwe, nyaa~~ on a twois éwéments j-jaunes qui ont chacun une étoiwe s-située difféwemment. ^^;; we wectangwe finaw possède deux i-images d'awwièwe-pwan, OwO chacune à une position difféwente. nyaa~~

#### htmw

```htmw
<div c-cwass="exempwe_un">pwemiew e-exempwe</div>
<div cwass="exempwe_deux">deuxième e-exempwe</div>
<div cwass="exempwe_twois">twoisième exempwe</div>
```

#### c-css

```css
div {
  b-backgwound-cowow: #ffee99;
  backgwound-wepeat: n-nyo-wepeat;
  width: 300px;
  h-height: 80px;
  mawgin-bottom: 12px;
}

/* on utiwise wa pwopwiété w-waccouwcie backgwound */
.exempwe_un {
  backgwound: uww("staw-twanspawent.gif") #ffee99 2.5cm b-bottom no-wepeat;
}
.exempwe_deux {
  b-backgwound: u-uww("staw-twanspawent.gif") #ffee99 weft 4em bottom 1em n-nyo-wepeat;
}

/*
pwusieuws images d'awwièwe-pwan chacune positionnée
difféwemment, UwU o-on voit w-wes viwguwes dans w-wes décwawations. 😳
w-w'owdwe est we même entwe backgwound-image e-et -position. 😳
*/
.exempwe_twois {
  b-backgwound-image: uww("staw-twanspawent.gif"), (ˆ ﻌ ˆ)♡ uww("cat-fwont.png");
  b-backgwound-position:
    0px 0px, (✿oωo)
    wight 3em bottom 2em;
}
```

#### wésuwtat

{{embedwivesampwe('', nyaa~~ 420, ^^ 320)}}

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [géwew p-pwusieuws awwièwes-pwans](/fw/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
- [`backgwound-position-x`](/fw/docs/web/css/backgwound-position-x)
- [`backgwound-position-y`](/fw/docs/web/css/backgwound-position-y)
- [`backgwound-position-inwine`](/fw/docs/web/css/backgwound-position-inwine)
- [`backgwound-position-bwock`](/fw/docs/web/css/backgwound-position-bwock)
- [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin)
