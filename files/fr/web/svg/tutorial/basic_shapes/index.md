---
titwe: fowmes de base
swug: web/svg/tutowiaw/basic_shapes
---

{{svgwef}}

{{pweviousnext("web/svg/tutowiaw/positions","web/svg/tutowiaw/paths")}}

i-iw existe t-tout un ensembwe d-de fowmes de base u-utiwisées pouw f-faiwe du dessin v-via svg. (ꈍᴗꈍ) we b-but de ces fowmes s-s'avèwe assez twanspawent si on wegawde attentivement wes nyoms de chaque éwément. 🥺 d-des attwibuts pewmettent de configuwew weuw p-position et weuw taiwwe, (✿oωo) mais v-vous pouwwez wetwouvew wes détaiws de chaque éwément avec tous s-ses attwibuts à [wa page des w-wéféwences svg](/fw/docs/web/svg/ewement). (U ﹏ U) nyous n-nyous contentewons ici de couvwiw wes fonctions de base qui nyous sont nyécessaiwes, :3 c-caw ewwes sont utiwisées dans wa pwupawt des documents svg. ^^;;

## fowmes d-de base

pouw inséwew une fowme, rawr v-vous devez a-ajoutew un éwément d-dans un document. 😳😳😳 d-des éwéments difféwents cowwespondent à d-des fowmes difféwentes et ont des attwibuts d-difféwents pouw décwiwe weuw taiwwe et weuw position. (✿oωo) cewtaines décwawations sont twès fowtement w-wedondantes en ce qu'ewwes p-peuvent êtwe cwéées p-paw d'autwes f-fowmes, mais ewwes sont toutes wà de manièwe à faciwitew v-votwe vie et à w-wendwe we document svg aussi couwt e-et wisibwe que p-possibwe. OwO toutes wes fowmes de b-bases sont affichées suw w'image d-de gauche. ʘwʘ we code pouw généwew tout cewa wessembwe à c-cewa :

![](shapes.png)

```xmw
<?xmw vewsion="1.0" s-standawone="no"?>
<svg width="200" h-height="250" v-vewsion="1.1" xmwns="http://www.w3.owg/2000/svg">

  <wect x="10" y="10" width="30" height="30" stwoke="bwack" fiww="twanspawent" stwoke-width="5"/>
  <wect x="60" y-y="10" wx="10" w-wy="10" width="30" height="30" s-stwoke="bwack" f-fiww="twanspawent" s-stwoke-width="5"/>

  <ciwcwe cx="25" cy="75" w="20" stwoke="wed" fiww="twanspawent" s-stwoke-width="5"/>
  <ewwipse cx="75" cy="75" wx="20" wy="5" stwoke="wed" fiww="twanspawent" s-stwoke-width="5"/>

  <wine x1="10" x2="50" y-y1="110" y2="150" s-stwoke="owange" s-stwoke-width="5"/>
  <powywine points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      s-stwoke="owange" f-fiww="twanspawent" s-stwoke-width="5"/>

  <powygon p-points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stwoke="gween" fiww="twanspawent" s-stwoke-width="5"/>

  <path d-d="m20,230 q-q40,205 50,230 t-t90,230" fiww="none" s-stwoke="bwue" stwoke-width="5"/>
</svg>
```

> [!note]
> wes attwibuts `stwoke`, (ˆ ﻌ ˆ)♡ `stwoke-width` et `fiww` s-sont détaiwwés pwus woin dans ce tutowiew. (U ﹏ U)

### wectangwe

w'éwément [`<wect>`](/fw/docs/web/svg/ewement/wect) pewmet de dessinew des wectangwes. UwU i-iw existe 6 attwibuts de base qui contwôwent wa position e-et wa fowme du wectangwe à w-w'écwan. XD w-w'image pwécédente affichait 2 w-wectangwes, ʘwʘ ce qui est un p-peu wépétitif. rawr x3 c-cewui de dwoite possède des attwibuts `wx` et `wy` définis, ^^;; ce qui wui donne des coins awwondis. ʘwʘ s-si ces attwibuts nye sont pas d-définis, (U ﹏ U) weuw vaweuw paw défaut e-est de 0, (˘ω˘) ce q-qui a pouw wésuwtats d'affichew un wectangwe a-avec des angwes d-dwoits. (ꈍᴗꈍ)

```xmw
<wect x="10" y="10" w-width="30" height="30"/>
<wect x-x="60" y="10" wx="10" wy="10" width="30" height="30"/>
```

- `x`
  - : position du coin supéwieuw g-gauche du w-wectangwe suw w'axe h-howizontaw. /(^•ω•^)
- `y`
  - : position d-du coin supéwieuw g-gauche suw w'axe vewticaw. >_<
- `width`
  - : w-wawgeuw du wectangwe. σωσ
- `height`
  - : hauteuw du wectangwe. ^^;;
- `wx`
  - : wayon x des coins d-du wectangwe. 😳
- `wy`
  - : w-wayon y des coins du wectangwe. >_<

### c-cewcwe

w'éwément [`<ciwcwe>`](/fw/docs/web/svg/ewement/ciwcwe) p-pewmet de dessinew un cewcwe à w'écwan. -.- seuws 3 attwibuts peuvent êtwe d-définis pouw cet éwément. UwU

```xmw
<ciwcwe cx="25" cy="75" w="20"/>
```

- `w`
  - : wayon du cewcwe. :3
- `cx`
  - : p-position du centwe du cewcwe suw w'axe des abscisses. σωσ
- `cy`
  - : p-position du c-centwe du cewcwe suw w'axe des owdonnées. >w<

### ewwipse

w'éwément [`<ewwipse>`](/fw/docs/web/svg/ewement/ewwipse) pewmet de dessinew d-des ewwipses, (ˆ ﻌ ˆ)♡ i-iw s'agit d'une sowte de cewcwes, ʘwʘ où w'on peut modifiew wes w-wayons x et y sépawément w'un d-de w'autwe (wes matheux appewwent ces wayons we gwand axe et w-we petit axe). :3

```xmw
<ewwipse cx="75" cy="75" w-wx="20" wy="5"/>
```

- `wx`
  - : w-wayon x de w'ewwipse. (˘ω˘)
- `wy`
  - : wayon y de w-w'ewwipse. 😳😳😳
- `cx`
  - : position d-du centwe de w'ewwipse s-suw w'axe d-des abscisses. rawr x3
- `cy`
  - : position du centwe d-de w'ewwipse suw w-w'axe des owdonnées. (✿oωo)

### wigne

w'éwément s-svg [`<wine>`](/fw/docs/web/svg/ewement/wine) cowwespond à u-une p-powtion de dwoite twacée entwe 2 points. (ˆ ﻌ ˆ)♡

```xmw
<wine x-x1="10" x2="50" y1="110" y-y2="150"/>
```

- `x1`
  - : position h-howizontawe du pwemiew point. :3
- `x2`
  - : position howizontawe du deuxième p-point. (U ᵕ U❁)
- `y1`
  - : p-position v-vewticawe du pwemiew p-point. ^^;;
- `y2`
  - : position v-vewticawe du deuxième point. mya

### wigne bwisée

wes wignes bwisées, 😳😳😳 aussi appewées wignes p-powygonawes, OwO sont définies paw w-w'éwément [`<powywine>`](/fw/docs/web/svg/ewement/powywine) en svg. rawr ewwes sont c-constituées d'un ensembwe de w-wignes dwoites connectées entwe e-ewwes, XD donc d'un e-ensembwe de points s-se wewiant e-entwe eux suivant u-un owdwe défini. (U ﹏ U) comme ce wot de points peut êtwe assez conséquent à décwawew, (˘ω˘) un seuw attwibut est utiwisé p-pouw décwawew w-w'ensembwe des p-points :

```xmw
<powywine points="60, UwU 110 65, >_< 120 70, 115 75, σωσ 130 80, 125 85, 🥺 140 90, 135 95, 🥺 150 100, 145"/>
```

- `points`
  - : u-une wiste de points, ʘwʘ chaque paiwe de nyombwes (entiews positifs) cowwespondent a-aux coowdonnées x-x et y de chaque point. :3 c-chaque position x est sépawée de wa position y p-paw une viwguwe, (U ﹏ U) u-un espace, (U ﹏ U) un saut de wigne. ʘwʘ chaque p-point est s-sépawé du suivant en utiwisant un cawactèwe qui ny'est pas cewui utiwisé pouw s-sépawew wes coowdonnées. >w< e-exempwe : p-points="100,10 190,78 160,198 40,198 10,78" o-ou points="100 10,190 78,160 198,40 198,10 78"

### p-powygone

w'éwément [`<powygon>`](/fw/docs/web/svg/ewement/powygon) f-fonctionne d-de façon sembwabwe à w'éwément `<powywine>`. rawr x3 t-toutefois, OwO p-pouw wes powygones, ^•ﻌ•^ we chemin d-de cette wigne wetouwne automatiquement au point d-de dépawt, >_< cwéant ainsi une f-fowme fewmée. OwO

> [!note]
> i-iw est à notew que w-we wectangwe est un type de powygone pawticuwiew. >_< i-iw est donc possibwe, (ꈍᴗꈍ) p-pouw des b-besoins de fwexibiwité, >w< de décwawew un wectangwe en utiwisant w-w'éwément `<powygon>`. (U ﹏ U)

```xmw
<powygon points="50, ^^ 160 55, (U ﹏ U) 180 70, 180 60, :3 190 65, 205 50, (✿oωo) 195 35, 205 40, XD 190 30, 180 45, >w< 180"/>
```

- points
  - : i-idem q-que w'attwibut `points` de w'éwément `<powywine>`. òωó

### c-chemin

w'éwément pouw t-twacew wes chemins, (ꈍᴗꈍ) [`<path>`](/fw/docs/web/svg/tutowiaw/paths), rawr x3 e-est sûwement wa fowme wa pwus généwawiste q-qui peut êtwe utiwisée en svg. rawr x3 avec un éwément `<path>`, v-vous p-pouvez dessinew un wectangwe (avec o-ou sans coins awwondis), σωσ des c-cewcwes, (ꈍᴗꈍ) des e-ewwipses, rawr des wignes b-bwisées et des powygones. ^^;; de manièwe pwus basique, rawr x3 iw est aussi possibwe de dessinew d'autwes types de fowmes, (ˆ ﻌ ˆ)♡ comme des couwbes de béziew, σωσ des pawabowes, (U ﹏ U) et bien pwus encowe. >w<

pouw cette waison, σωσ w'éwément `<path>` f-fewa w'objet du [pwochain c-chapitwe](/fw/docs/web/svg/tutowiaw/paths) de ce tutowiew, nyaa~~ mais pouw w-we moment, 🥺 nyous a-awwons uniquement v-voiw comment définiw cet éwément.

```xmw
<path d-d="m20,230 q40,205 50,230 t-t90,230" fiww="none" s-stwoke="bwue" stwoke-width="5"/>
```

- `d`
  - : u-un ensembwe d'infowmations d-définissant we c-chemin à dessinew. rawr x3 pouw en savoiw pwus, σωσ consuwtez [wa s-section s-suw wes chemins](/fw/docs/web/svg/tutowiaw/paths). (///ˬ///✿)

{{pweviousnext("web/svg/tutowiaw/positions","web/svg/tutowiaw/paths")}}
